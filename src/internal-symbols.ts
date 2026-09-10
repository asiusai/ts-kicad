import { mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { Xml, cli } from './kicad_io'
import { identifier, renderComponents } from './export_components'
import { readSymbolLibrary, symbolDirectory, symbolPins, symbolProperty } from './symbol_library'
import { child, children, val, type Node } from './kicad_sexpr'

export function libraryXml(library: string, symbols: Map<string, Node>) {
  const text = (tag: string, value: string) => new Xml(tag, {}, [], value)
  return new Xml('export', {}, [new Xml('libparts', {}, [...symbols].map(([name, symbol]) => new Xml('libpart', { lib: library, part: name }, [
    text('description', symbolProperty(symbol, 'Description')),
    text('docs', symbolProperty(symbol, 'Datasheet')),
    text('power', child(symbol, 'power').length ? val(child(symbol, 'power')[1]) || 'global' : ''),
    text('keywords', symbolProperty(symbol, 'ki_keywords')),
    text('defaultFootprint', symbolProperty(symbol, 'Footprint')),
    text('inBom', child(symbol, 'power').length ? 'no' : val(child(symbol, 'in_bom')[1])),
    text('onBoard', child(symbol, 'power').length ? 'no' : val(child(symbol, 'on_board')[1])),
    text('units', String(Math.max(1, new Set(children(symbol, 'symbol').map(s => val(s[1]).match(/_(\d+)_\d+$/)?.[1]).filter(u => u && u !== '0')).size))),
    new Xml('fields', {}, [new Xml('field', { name: 'Reference' }, [], symbolProperty(symbol, 'Reference'))]),
    new Xml('footprints', {}, symbolProperty(symbol, 'ki_fp_filters').split(/\s+/).filter(Boolean).map(fp => text('fp', fp))),
    new Xml('pins', {}, symbolPins(symbol).map(pin => new Xml('pin', { num: val(child(pin, 'number')[1]), name: val(child(pin, 'name')[1]), type: val(pin[1]) }, []))),
  ])))])
}

export function renderPowerConnections(catalog: Record<string,string>) {
  let text = "// Generated power-symbol connections.\nimport { Net } from './index'\nexport { PWR_FLAG } from '../lib/symbols/power'\n\n/** A named power rail, rendered using a native KiCad power symbol. */\nexport const power = (name: string, symbol = 'power:VCC') => new Net(name, 'global', symbol)\n\n"
  const used = new Set(['power', 'PWR_FLAG'])
  for(const [schema,className] of Object.entries(catalog).filter(([schema])=>schema.startsWith('power:')&&!schema.endsWith(':PWR_FLAG')).sort(([a],[b])=>a.localeCompare(b,'en'))) {
    const rail = schema.slice(6)
    const base = /^[+-]/.test(rail) ? (rail[0] === '+' ? 'P' : 'N') + identifier(rail.slice(1).replace(/(\d+)\.(\d+)V/, '$1V$2')).replace(/^_/, '') : className
    // Native +3.3V and +3V3 are distinct nets; retain both without merging them.
    const name = used.has(base) ? base + '_' + identifier(rail.slice(1)).replace(/^_/, '') : base
    if (used.has(name)) throw new Error(`Power identifier collision: ${name}`)
    used.add(name)
    text += '/** Native KiCad power symbol: '+schema+'. */\nexport const '+name+' = power('+JSON.stringify(schema.slice(6))+', '+JSON.stringify(schema)+')\n'
  }
  return text
}

export async function main(args: string[]) {
  const { positionals } = cli({}, args)
  if (positionals.length > 1) throw new Error('Usage: ts-kicad internal-symbols [KiCad-symbol-directory]')
  const directory = positionals[0] ?? symbolDirectory(), output = join(import.meta.dir, '../lib/symbols')
  mkdirSync(output, { recursive: true })
  const exports: string[] = [], names = new Set<string>()
  const catalog: Record<string, string> = {}
  let count = 0
  for (const file of readdirSync(directory).filter(f => f.endsWith('.kicad_sym')).sort()) {
    const library = basename(file, '.kicad_sym'), name = identifier(library)
    if (names.has(name)) throw new Error(`Library namespace collision: ${name}`)
    names.add(name)
    const symbols = readSymbolLibrary(join(directory, file))
    const rendered = renderComponents(libraryXml(library, symbols), 'ts-kicad', { builtin: true })
    writeFileSync(join(output, library + '.ts'), rendered.text)
    for (const [schema, component] of Object.entries(rendered.libraries)) catalog[schema] = component.className
    exports.push(`export * as ${name} from './${library}'`)
    count += symbols.size
  }
  writeFileSync(join(output, 'index.ts'), '// Generated from the installed KiCad symbol libraries.\n' + exports.join('\n') + "\nexport { c, r } from './Device'\n")
  writeFileSync(join(import.meta.dir, 'power.ts'), renderPowerConnections(catalog))
  writeFileSync(join(output, 'catalog.ts'), 'export default ' + JSON.stringify(catalog))
  console.log(`Generated ${count} symbols across ${names.size} libraries in ${output}`)
}
