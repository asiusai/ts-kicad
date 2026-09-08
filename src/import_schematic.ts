/** Import any KiCad schematic/XML as editable TS without source manifests. */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import assert from 'node:assert/strict'
import { type Xml, run, q, symbolId, readNetlist, inspect, baseImport, cli, compare } from './kicad_io'
import { renderComponents, type Library } from './export_components'
import { symbolPositions, type Point } from './kicad_geometry'
import { isPassiveSymbol, isCapacitorSymbol, standardSymbol, type PartAssignment, type ComponentOptions } from './index'

type Hints = Pick<ComponentOptions, 'package' | 'variant'>
type NativePartAssignment = Omit<PartAssignment, 'footprint'> & { footprint: string }
const camel = (s: string) => { const words = s.match(/[A-Za-z0-9]+/g) ?? ['Component']; const n = words.map(w => w[0].toUpperCase() + w.slice(1)).join(''); return /^\d/.test(n) ? 'component' + n : n[0].toLowerCase() + n.slice(1) }
export function partData(comp: Xml): NativePartAssignment {
  const props = Object.fromEntries(comp.all('property').map(p => [p.get('name'), p.attrs.value ?? null]))
  const result: NativePartAssignment = { footprint: comp.value('footprint') }
  for (const [field, key] of [['manufacturer', 'Manufacturer'], ['partNumber', 'MFR.Part #'], ['lcsc', 'JLCPCB Part #']] as const) if (props[key]) result[field] = props[key]!
  const extras = Object.fromEntries(Object.entries(props).filter(([k]) => ['Height (mm)', 'Height Exception', 'exclude_from_bom', 'exclude_from_board', 'dnp'].includes(k)))
  if (Object.keys(extras).length) result.properties = extras
  return result
}
function selectionKey(comp: Xml) { const p = partData(comp); return q([p.footprint, p.manufacturer ?? '', p.partNumber ?? '', p.lcsc ?? '']) }
function selectionHints(comps: Map<string, Xml>) {
  const choices = new Map<string, Map<string, Xml>>(), hints = new Map<string, Hints>()
  const electrical = (c: Xml) => q([symbolId(c), c.value('value')])
  for (const c of comps.values()) { const variants = choices.get(electrical(c)) ?? new Map(); variants.set(selectionKey(c), c); choices.set(electrical(c), variants) }
  for (const [ref, comp] of comps) {
    const variants = choices.get(electrical(comp))!, hint: Hints = {}
    if (variants.size > 1) {
      const packages = new Map([...variants].map(([key, c]) => { const fp = c.value('footprint'); return [key, fp.match(/(?:^|:)[CRL]_(\d{4})_/)?.[1] ?? fp.split(':').at(-1)!] }))
      if (new Set(packages.values()).size === variants.size) hint.package = packages.get(selectionKey(comp))
      else hint.variant = (JSON.parse(selectionKey(comp)) as string[]).join('/')
    }
    hints.set(ref, hint)
  }
  return hints
}
function bomPlan(comps: Map<string, Xml>, hints: Map<string, Hints>) {
  const groups = new Map<string, NativePartAssignment[]>(), keys = new Map<string, string>()
  for (const [ref, comp] of comps) {
    const id = standardSymbol(symbolId(comp)), pattern = { schema: id, value: comp.value('value'), ...hints.get(ref) }
    const key = q(pattern); keys.set(ref, key); groups.set(key, [...groups.get(key) ?? [], partData(comp)])
  }
  const rules = new Map<string, PartAssignment>(), overrides = new Map<string, Partial<ComponentOptions>>()
  for (const [pattern, parts] of groups) {
    const common: NativePartAssignment = { footprint: parts[0].footprint }
    for (const key of ['footprint', 'manufacturer', 'partNumber', 'lcsc'] as const) {
      const value = parts[0][key]
      if (parts.every(p => p[key] === value)) { if (value !== undefined) common[key] = value }
      else throw new Error(`Conflicting BOM selection: ${pattern} (${key})`)
    }
    const props = Object.fromEntries(Object.entries(parts[0].properties ?? {}).filter(([k, v]) => parts.every(p => p.properties && Object.hasOwn(p.properties, k) && p.properties[k] === v)))
    if (Object.keys(props).length) common.properties = props
    rules.set(pattern, common)
  }
  for (const [ref, comp] of comps) {
    const common = rules.get(keys.get(ref)!)!, part = partData(comp), extra: Partial<ComponentOptions> = {}
    const props = Object.fromEntries(Object.entries(part.properties ?? {}).filter(([k]) => !Object.hasOwn(common.properties ?? {}, k)))
    if (Object.keys(props).length) extra.properties = props
    if (comp.value('datasheet')) extra.datasheet = comp.value('datasheet')
    overrides.set(ref, extra)
  }
  return { rules, overrides }
}
function connections(tree: Xml, names: Map<string, string>) {
  const nets = new Map<string, string | null>(), used = new Set(tree.all('nets/net').map(n => n.get('name').replace(/^\/+/, '')))
  for (const net of tree.all('nets/net')) {
    let name = net.get('name'); const nodes = net.all('node')
    if (/^(Net-|unconnected-)/.test(name)) {
      const anchor = [...nodes].sort((a, b) => Number(/^[RCL]/.test(a.get('ref'))) - Number(/^[RCL]/.test(b.get('ref'))) || compare(a.get('ref'), b.get('ref')) || compare(a.get('pin'), b.get('pin')))[0]
      const label = (names.get(anchor.get('ref'))!.replace(/([a-z0-9])([A-Z])/g, '$1_$2') + '_' + anchor.get('pin')).replace(/[^A-Za-z0-9_]/g, '_').toUpperCase()
      name = label; let i = 2; while (used.has(name)) name = label + '_' + i++
      used.add(name)
    } else name = name.replace(/^\/+/, '')
    for (const n of nodes) nets.set(n.get('ref') + '.' + n.get('pin'), n.get('pintype').includes('no_connect') ? null : name)
  }
  return nets
}
export function verifyModel(tree: Xml, entry: string, paths: Map<string, string>) {
  const actual = inspect(entry), reverse = new Map([...paths].map(([ref, name]) => [name, ref]))
  const comps = new Map(tree.all('components/comp').map(c => [c.get('ref'), c]))
  assert.equal(actual.length, comps.size)
  const expected = new Map<string, { members: string[]; names?: string[]; nc: boolean }>()
  for (const net of tree.all('nets/net')) {
    const nodes = net.all('node'), members = nodes.map(n => n.get('ref') + '.' + n.get('pin')).sort()
    for (const n of nodes) expected.set(n.get('ref') + '.' + n.get('pin'), { members, names: /^(Net-|unconnected-)/.test(net.get('name')) ? undefined : [net.get('name').replace(/^\/+/, '')], nc: n.get('pintype').includes('no_connect') })
  }
  const seen = new Set<string>()
  for (const part of actual) {
    const ref = reverse.get(part.name)!, comp = comps.get(ref)!, data = partData(comp)
    assert.ok(comp, `Unknown imported component ${part.name}`)
    assert.equal(part.schema, standardSymbol(symbolId(comp)), ref); assert.equal(part.value, comp.value('value'), ref)
    assert.equal(part.footprint, data.footprint, ref); assert.equal(part.datasheet, comp.value('datasheet'), ref)
    for (const [field, prop] of [['manufacturer','Manufacturer'],['partNumber','MFR.Part #'],['lcsc','JLCPCB Part #']] as const) assert.equal(part.properties[prop] ?? '', data[field] ?? '', ref)
    for (const [k, v] of Object.entries(data.properties ?? {})) assert.equal(part.properties[k], v, ref + ' ' + k)
    for (const pin of part.pins) {
      const key = ref + '.' + pin.number, want = expected.get(key)!
      assert.ok(!seen.has(key), key); seen.add(key)
      assert.deepEqual(pin.members.map(m => reverse.get(m.component) + '.' + m.number).sort(), want.members, key)
      if (want.names) assert.deepEqual(pin.netNames, want.names, key)
      assert.equal(pin.noConnect, want.nc, key)
    }
  }
  assert.deepEqual([...seen].sort(), [...expected.keys()].sort())
  console.log(`PASS: ${comps.size} components, ${seen.size} pins, ${tree.all('nets/net').length} nets; connectivity and selected parts match KiCad.`)
}
export function importSchematic(tree: Xml, output: string, base: string, verify = false, positions = new Map<string, Point>()) {
  const comps = new Map(tree.all('components/comp').map(c => [c.get('ref'), c]))
  if (!comps.size) throw new Error('No components found')
  const names = new Map<string, string>(), usedNames = new Set<string>()
  for (const [ref, comp] of comps) {
    const prefix = symbolId(comp) === 'Device:C_Small' ? 'capacitor ' : symbolId(comp) === 'Device:R_Small' ? 'resistor ' : ''
    const initial = camel(prefix + (comp.value('value') || symbolId(comp).split(':')[1])); let name = initial, i = 2
    while (usedNames.has(name)) name = initial + i++
    usedNames.add(name); names.set(ref, name)
  }
  const { text, libraries } = renderComponents(tree, base), hints = selectionHints(comps), { rules, overrides } = bomPlan(comps, hints), nets = connections(tree, names)
  const passives = [...comps].filter(([, c]) => isPassiveSymbol(symbolId(c))).map(([ref]) => ref)
  // A partially NC passive stays a root so .wire() can preserve its NC declaration.
  const roots = new Set([...comps.keys()].filter(ref => !passives.includes(ref) || [...nets].some(([key,v]) => key.startsWith(ref + '.') && v === null)))
  const members = new Map<string, [string, string][]>(), attachments = new Map<string, [string, string][]>()
  for (const [key, name] of nets) if (name !== null) { const dot = key.indexOf('.'); members.set(name, [...members.get(name) ?? [], [key.slice(0,dot), key.slice(dot+1)]]) }
  const electricalTypes = new Map(tree.all('libparts/libpart').flatMap(l => l.all('pins/pin').map(p => [l.get('lib') + ':' + l.get('part') + '.' + p.get('num'), p.get('type')] as const)))
  for (const ref of passives.sort(compare)) {
    if (roots.has(ref)) continue
    const candidates: { score: (number | string)[]; parent: string; number: string; own: string }[] = []
    for (const [key, net] of nets) {
      if (!key.startsWith(ref + '.') || net === null) continue
      for (const [parent, number] of members.get(net) ?? []) {
        if (!roots.has(parent)) continue
        const power = /^(\+|VIN|VCORE)/.test(net) || ['VDDA','VDD','VCC','GND'].includes(net)
        const a = positions.get(ref) ?? {x:0,y:0}, b = positions.get(parent + '.' + number) ?? positions.get(parent) ?? {x:0,y:0}
        const supply = electricalTypes.get(symbolId(comps.get(parent)!) + '.' + number) === 'power_in'
        candidates.push({ score: [Number(net === 'GND'), Number(power), Number(isCapacitorSymbol(symbolId(comps.get(ref)!)) && power && !supply), (a.x-b.x)**2+(a.y-b.y)**2, parent, number, key.slice(ref.length+1)], parent, number, own: key.slice(ref.length+1) })
      }
    }
    candidates.sort((a,b) => { for (let i=0;i<a.score.length;i++) { const x=a.score[i], y=b.score[i]; const d=typeof x==='number'&&typeof y==='number' ? x-y : compare(String(x),String(y)); if(d)return d } return 0 })
    const best = candidates[0]
    if (best) { const key = best.parent + '.' + best.number; attachments.set(key, [...attachments.get(key) ?? [], [ref,best.own]]) }
    else roots.add(ref)
  }
  const paths = new Map([...roots].map(ref => [ref,names.get(ref)!])), used = new Map<string, Set<string>>()
  function ctor(ref: string) {
    const lib = libraries[symbolId(comps.get(ref)!)], cls = lib.className, id = standardSymbol(symbolId(comps.get(ref)!)), helper = id==='Device:C'?'c':id==='Device:R'?'r':undefined
    const source = helper ? 'ts-kicad/helpers' : lib.source ?? './components', imports = used.get(source) ?? new Set<string>()
    imports.add(helper ?? (lib.exportName && lib.exportName !== cls ? lib.exportName + ' as ' + cls : cls)); used.set(source, imports)
    return (helper ?? 'new ' + cls) + '(' + q({ ref, value: comps.get(ref)!.value('value'), ...hints.get(ref), ...overrides.get(ref) }) + ')'
  }
  const connection = (name: string | null | undefined) => name == null ? 'null' : q(name)
  let body = ''
  for (const ref of comps.keys()) {
    if (!roots.has(ref)) continue
    const { mapping } = libraries[symbolId(comps.get(ref)!)]
    body += `export const ${names.get(ref)} = ${ctor(ref)}.wire({\n`
    for (const [label, number] of Object.entries(mapping)) {
      const key=ref+'.'+number; if(!nets.has(key))throw new Error('Missing netlist pin '+key)
      const values=[connection(nets.get(key))]
      for (const [i,[part,own]] of (attachments.get(key) ?? []).entries()) {
        let expression=ctor(part);const childMap=libraries[symbolId(comps.get(part)!)].mapping
        for (const [otherLabel,otherNumber] of Object.entries(childMap)) if(otherNumber!==own)expression+=`.wire({ ${q(otherLabel)}: ${connection(nets.get(part+'.'+otherNumber))} })`
        const pinLabel=Object.keys(childMap).find(k=>childMap[k]===own)!
        expression+=`[${q(pinLabel)}]`;values.push(expression);paths.set(part,`${names.get(ref)}.${label}.${i}`)
      }
      body+=`  ${q(label)}: ${values.length===1?values[0]:'['+values.join(', ')+']'},\n`
    }
    body+='});\n\n'
  }
  assert.equal(paths.size,comps.size)
  const bom = `import type { Bom } from ${q(base)};\nexport const bom: Bom = ${JSON.stringify([...rules].map(([pattern,data])=>({...JSON.parse(pattern),...data})),null,2)};\n`
  const entry=`import { bom } from './bom';\nimport * as circuit from './circuit';\nexport default Object.entries(circuit).map(([name, component]) => {\n  component.declarationName = name;\n  component.bom = bom;\n  return component;\n});\n`
  const sourceDirectory=join(output,'src')
  mkdirSync(sourceDirectory,{recursive:true})
  for (const [file,content] of Object.entries({'components.ts':text,'circuit.ts':[...used].map(([source,names])=>`import { ${[...names].sort().join(', ')} } from ${q(source)};\n`).join('')+'\n'+body,'bom.ts':bom,'index.ts':entry}))writeFileSync(join(sourceDirectory,file),content)
  console.log(`Imported ${comps.size} components into ${output}`)
  const packageFile = join(output, 'package.json')
  if (!existsSync(packageFile)) {
    const dependency = 'file:' + relative(resolve(output), resolve(import.meta.dir, '..'))
    writeFileSync(packageFile, JSON.stringify({ private: true, type: 'module', dependencies: { 'ts-kicad': dependency } }, null, 2) + '\n')
  }
  if (verify) { run(['bun', 'install', '--cwd', resolve(output), '--ignore-scripts']); verifyModel(tree,join(sourceDirectory,'index.ts'),paths) }
}
export async function main(args: string[]) {
  const {positionals:[source,output],values}=cli({}, args)
  if(!source||!output)throw new Error('Usage: ts-kicad import source.kicad_sch output-directory [--verify]')
  importSchematic(readNetlist(source),output,values['base-import'] as string ?? baseImport(output),!!values.verify,source.endsWith('.kicad_sch')?symbolPositions(source):undefined)
}
