import { Component } from './index'
import { type Xml, q } from './kicad_io'
export const identifier = (value: string) => { const s = value.replace(/[^A-Za-z0-9_$]/g, '_') || 'Symbol'; return /^\d/.test(s) ? '_' + s : s }
type Library = { className: string; mapping: Record<string, string> }
export function renderComponents(tree: Xml, options: { symbolSource?: string } = {}) {
  const reserved = new Component({})
  const libraries: Record<string, Library> = {}, classes = new Set<string>()
  let text = `// Generated from KiCad symbols by export_components.ts.\nimport { Component } from "ts-kicad";\n\n`
  if (options.symbolSource) text += "import { fileURLToPath } from 'node:url';\n\n"
  const doc = (s: string) => s.replaceAll('*/', '* /')
  for (const lib of tree.all('libparts/libpart')) {
    const key = lib.get('lib') + ':' + lib.get('part')
    let cls = identifier(lib.get('part'))
    if (classes.has(cls)) cls = identifier(lib.get('lib')) + '_' + cls
    const initial = cls; let suffix = 2
    while (classes.has(cls)) cls = initial + '_' + suffix++
    classes.add(cls)
    const pins = lib.all('pins/pin'), counts = new Map<string, number>(), mapping: Record<string, string> = {}
    const pinName = (p: Xml) => {
      const name=p.get('name'),number=p.get('num')
      const candidate = !name || name==='~' || name===number ? identifier('P'+number) : name
      return candidate in reserved ? 'PIN_' + candidate : candidate
    }
    for (const p of pins) counts.set(pinName(p), (counts.get(pinName(p)) ?? 0) + 1)
    for (const p of pins) {
      const number = p.get('num'); let name = pinName(p)
      if (counts.get(name)! > 1) name += '_' + number
      if (name in mapping) name += '_' + number
      if (name in mapping) throw new Error(`Ambiguous pin: ${key}.${name}`)
      mapping[name] = number
    }
    libraries[key] = { className: cls, mapping }
    const prefix = lib.all('fields/field').find(f => f.get('name') === 'Reference')?.text ?? 'U'
    text += '/**\n' + doc(lib.value('description') || lib.get('part')).split('\n').map(l => ' * ' + l + '\n').join('')
    text += ` *\n * KiCad symbol: \`${key}\`. Reference prefix: \`${prefix}\`.\n`
    const filters = lib.all('footprints/fp').map(f => f.text).filter(Boolean)
    if (filters.length) text += ' * Footprint filters: ' + doc(filters.join(', ')) + '.\n'
    if (lib.value('docs')) text += ' * @see ' + doc(lib.value('docs')) + '\n'
    for (const [field, label] of [['power', 'Power symbol'], ['keywords', 'Keywords'], ['defaultFootprint', 'Default footprint']]) {
      if (lib.value(field)) text += ` * ${label}: ${doc(lib.value(field))}.\n`
    }
    text += ` */\nexport class ${cls} extends Component.withPins({\n`
    for (const [name, number] of Object.entries(mapping)) text += `  ${q(name)}: ${q(number)},\n`
    text += '}) {\n'
    if (options.symbolSource) text += `  override symbolSource = fileURLToPath(new URL(${q(options.symbolSource)}, import.meta.url));\n`
    const flags = Object.fromEntries([['inBom', 'exclude_from_bom'], ['onBoard', 'exclude_from_board']].filter(([field]) => lib.value(field) === 'no').map(([, property]) => [property, null]))
    const pinTypes = Object.entries(mapping).map(([name, number]) => `${/^[A-Za-z_$][\w$]*$/.test(name) ? name : q(name)}: ${q(pins.find(pin => pin.get('num') === number)!.get('type') || 'unspecified')}`).join(', ')
    text += `  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {\n    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;\n    super({ ${lib.value('power') ? `value: ${q(lib.get('part'))}, ` : ''}...opts, pinTypes: { ${pinTypes}${pinTypes ? ', ' : ''}...opts.pinTypes }${Object.keys(flags).length ? `, properties: { ...${q(flags)}, ...opts.properties }` : ''} });\n  }\n`
    text += `  override schema = ${q(key)};\n  override referencePrefix = ${q(prefix)};\n}\n\n`
  }
  for (const [id, helper] of [['Device:C', 'c'], ['Device:R', 'r']]) {
    if (libraries[id]) text += `export const ${helper} = (...args: ConstructorParameters<typeof ${libraries[id].className}>) => new ${libraries[id].className}(...args);\n`
  }
  return { text: text.replace(/[ \t]+$/gm, '').trimEnd() + '\n', libraries }
}
