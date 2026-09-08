import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { child, children, clone, node, num, parse, remove, val, type Node } from './kicad_sexpr'

export function symbolDirectory() {
  const paths = [
    ...Object.entries(process.env).filter(([key]) => /^KICAD\d*_SYMBOL_DIR$/.test(key)).sort(([a], [b]) => b.localeCompare(a)).map(([, path]) => path!),
    '/usr/share/kicad/symbols', '/usr/local/share/kicad/symbols',
    '/Applications/KiCad/KiCad.app/Contents/SharedSupport/symbols',
  ]
  const directory = paths.find(path => existsSync(join(path, 'Device.kicad_sym')))
  if (!directory) throw new Error('KiCad symbols not found. Set KICAD_SYMBOL_DIR or pass the library directory to generate-components.')
  return directory
}

/** Resolve inherited graphics, pins, properties, and flags before using a symbol. */
export function resolveSymbols(root: Node) {
  const definitions = new Map(children(root, 'symbol').map(symbol => [val(symbol[1]), symbol]))
  const resolved = new Map<string, Node>(), resolving = new Set<string>()
  function resolve(name: string): Node {
    const cached = resolved.get(name)
    if (cached) return cached
    if (resolving.has(name)) throw new Error(`Cyclic symbol inheritance: ${name}`)
    const own = definitions.get(name)
    if (!own) throw new Error(`Missing parent symbol: ${name}`)
    resolving.add(name)
    const parent = val(child(own, 'extends')[1])
    const result = parent ? clone(resolve(parent)) : clone(own)
    result[1] = name
    if (parent) {
      for (const property of children(own, 'property')) {
        const existing = children(result, 'property').find(p => val(p[1]) === val(property[1]))
        if (existing) result.splice(result.indexOf(existing), 1)
        result.push(clone(property))
      }
      for (const entry of own) {
        if (!Array.isArray(entry) || ['extends', 'property'].includes(val(entry[0]))) continue
        // A child replaces only the unit/style it defines; other units inherit.
        const tag = val(entry[0])
        if (tag === 'symbol') {
          const suffix = val(entry[1]).match(/_\d+_\d+$/)?.[0]
          for (const old of children(result, tag)) if (val(old[1]).endsWith(suffix ?? '!')) result.splice(result.indexOf(old), 1)
        } else remove(result, tag)
        result.push(clone(entry))
      }
    }
    remove(result, 'extends')
    for (const sub of children(result, 'symbol')) sub[1] = name + (val(sub[1]).match(/_\d+_\d+$/)?.[0] ?? '')
    resolving.delete(name)
    resolved.set(name, result)
    return result
  }
  for (const name of definitions.keys()) resolve(name)
  return resolved
}

export function readSymbolLibrary(path: string) { return resolveSymbols(parse(readFileSync(path, 'utf8'))) }
export const symbolProperty = (symbol: Node, name: string) => val(children(symbol, 'property').find(p => val(p[1]) === name)?.[2])

/** Use the normal representation, deduplicating shared physical pins across units. */
export function symbolPins(symbol: Node) {
  const pins = new Map<string, Node>()
  for (const unit of children(symbol, 'symbol')) {
    if (Number(val(unit[1]).match(/_(\d+)_(\d+)$/)?.[2] ?? 1) > 1) continue
    for (const pin of children(unit, 'pin')) {
      const number = val(child(pin, 'number')[1])
      if (!pins.has(number)) pins.set(number, pin)
    }
  }
  return [...pins.values()]
}

export function defaultTemplates(symbol: Node) {
  const units = new Set(children(symbol, 'symbol').map(s => Number(val(s[1]).match(/_(\d+)_\d+$/)?.[1] ?? 0)).filter(n => n > 0))
  if (!units.size) units.add(1)
  return new Map([...units].sort((a,b) => a-b).map(unit => [unit, node('symbol',
    node('lib_id', val(symbol[1])), node('uuid', 'generated-template'),
    node('at', num(0), num(0), num(0)), node('unit', num(unit)),
    node('property', 'Reference', symbolProperty(symbol, 'Reference') || 'U', node('at', num(0), num(-5), num(0))),
    node('property', 'Value', symbolProperty(symbol, 'Value'), node('at', num(0), num(-2.5), num(0))),
  )]))
}
