import { existsSync, readFileSync } from 'node:fs'
import { basename, join } from 'node:path'
import { defaultTemplates, readSymbolLibrary, symbolDirectory } from './symbol_library'
import { type Node, child, children, val, parse, dump, clone } from './kicad_sexpr'
export const GRID = 1.27
export const snap = (v: number) => Math.round(v / GRID) * GRID
export type Point = { x: number; y: number }
export type PinGeometry = Point & { number: string; dx: number; dy: number }
export function transformed(x: number, y: number, template: Node): Point {
  const angle = Number(val(child(template, 'at')[3])) * Math.PI / 180
  let dx = Math.cos(angle) * x - Math.sin(angle) * y, dy = -Math.sin(angle) * x - Math.cos(angle) * y
  const mirror = val(child(template, 'mirror')[1])
  if (mirror === 'x') dy = -dy
  if (mirror === 'y') dx = -dx
  return { x: dx, y: dy }
}
export function pinGeometry(lib: Node, template: Node): PinGeometry[] {
  const unit = Number(val(child(template, 'unit')[1])), result: PinGeometry[] = []
  for (const sub of children(lib, 'symbol')) {
    const match = val(sub[1]).match(/_(\d+)_(\d+)$/)
    if (match && (![0, unit].includes(Number(match[1])) || Number(match[2]) > 1)) continue
    for (const pin of children(sub, 'pin')) {
      const at = child(pin, 'at'), angle = Number(val(at[3])) * Math.PI / 180
      const p = transformed(Number(val(at[1])), Number(val(at[2])), template)
      const d = transformed(-Math.cos(angle), -Math.sin(angle), template)
      result.push({ number: val(child(pin, 'number')[1]), ...p, dx: Math.round(d.x), dy: Math.round(d.y) })
    }
  }
  return result
}
export function loadSymbols(paths: string[], requested: readonly string[] = []) {
  const libraries = new Map<string, Node>(), templates = new Map<string, Map<number, Node>>()
  for (const path of paths) {
    if (path.endsWith('.kicad_sym')) {
      const namespace = basename(path, '.kicad_sym')
      for (const [name, original] of readSymbolLibrary(path)) {
        const key = namespace + ':' + name, symbol = clone(original); symbol[1] = key
        libraries.set(key, symbol); templates.set(key, defaultTemplates(symbol))
      }
      continue
    }
    const root = parse(readFileSync(path, 'utf8'))
    for (const lib of children(child(root, 'lib_symbols'), 'symbol')) {
      const key = val(lib[1]), existing = libraries.get(key)
      if (existing && dump(existing) !== dump(lib)) throw new Error(`Conflicting symbol geometry: ${key}`)
      libraries.set(key, lib)
    }
    for (const symbol of children(root, 'symbol')) {
      const key = val(child(symbol, 'lib_id')[1]); if (!key) continue
      const unit = Number(val(child(symbol, 'unit')[1])), units = templates.get(key) ?? new Map<number, Node>()
      if (!units.has(unit)) units.set(unit, symbol)
      templates.set(key, units)
    }
  }
  const loaded = new Map<string, Map<string, Node>>()
  for (const key of new Set(requested)) {
    if (libraries.has(key) && templates.has(key)) continue
    const [library, name] = key.split(':')
    if (!library || !name || /[\\/]/.test(library)) throw new Error('Invalid symbol ID: ' + key)
    const path = join(symbolDirectory(), library + '.kicad_sym')
    if (!existsSync(path)) throw new Error('Missing symbol geometry: ' + key + '. Add its native library or schematic to Project.symbols.')
    if (!loaded.has(library)) loaded.set(library, readSymbolLibrary(path))
    const original = loaded.get(library)!.get(name)
    if (!original) throw new Error('Missing symbol in library: ' + key)
    const symbol = clone(original); symbol[1] = key
    libraries.set(key, symbol)
    templates.set(key, defaultTemplates(symbol))
  }
  return { libraries, templates }
}
