import { XMLParser } from 'fast-xml-parser'
import { mkdtempSync, rmSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve, relative } from 'node:path'
import { parseArgs } from 'node:util'

/** Small typed view over ordered XML, keeping pin numbers and values as strings. */
export class Xml {
  constructor(readonly tag: string, readonly attrs: Record<string, string>, readonly nodes: Xml[], readonly text = '') {}
  get(name: string, fallback = '') { return this.attrs[name] ?? fallback }
  all(path: string): Xml[] {
    const parts = path.replace(/^\.\//, '').split('/').filter(Boolean)
    let nodes: Xml[] = [this]
    for (const tag of parts) nodes = nodes.flatMap(n => n.nodes.filter(c => c.tag === tag))
    return nodes
  }
  find(path: string) { return this.all(path)[0] }
  value(path: string) { return this.find(path)?.text ?? '' }
}
type Ordered = Record<string, unknown>
export function parseXml(text: string): Xml {
  const raw = new XMLParser({ preserveOrder: true, ignoreAttributes: false, attributeNamePrefix: '', parseTagValue: false, parseAttributeValue: false, trimValues: false }).parse(text) as Ordered[]
  function convert(entry: Ordered): Xml {
    const tag = Object.keys(entry).find(k => k !== ':@')!
    const contents = entry[tag] as Ordered[]
    const attrs = entry[':@'] as Record<string, string> | undefined
    return new Xml(tag, attrs ?? {}, contents.filter(n => !('#text' in n) && !Object.keys(n)[0].startsWith('?')).map(convert), contents.filter(n => '#text' in n).map(n => String(n['#text'])).join(''))
  }
  return convert(raw.find(n => 'export' in n) ?? raw.find(n => !Object.keys(n)[0].startsWith('?'))!)
}
export function run(args: string[]): string {
  const proc = Bun.spawnSync(args, { stdout: 'pipe', stderr: 'pipe' })
  const stderr = proc.stderr.toString()
  if (stderr.trim()) process.stderr.write(stderr)
  if (proc.exitCode) throw new Error(`${args[0]} failed (${proc.exitCode}): ${proc.stdout.toString()}`)
  return proc.stdout.toString()
}
export function withTemp<T>(callback: (dir: string) => T): T {
  const dir = mkdtempSync(join(tmpdir(), 'circuit-code-'))
  try { return callback(dir) } finally { rmSync(dir, { recursive: true, force: true }) }
}
export function readNetlist(source: string): Xml {
  if (source.endsWith('.xml')) return parseXml(readFileSync(source, 'utf8'))
  if (!source.endsWith('.kicad_sch')) throw new Error('Expected .kicad_sch or native KiCad XML netlist')
  return withTemp(dir => {
    const xml = join(dir, 'netlist.xml')
    run(['kicad-cli', 'sch', 'export', 'netlist', '--format', 'kicadxml', '-o', xml, resolve(source)])
    return parseXml(readFileSync(xml, 'utf8'))
  })
}
export type ModelPin = { name: string; number: string; noConnect: boolean; members: { component: string; number: string }[]; netNames: string[]; netScopes?: ('local'|'global')[]; labels?: {name:string;scope:'local'|'global';sheet?:string;powerSymbol?:string}[] }
export type ModelPart = { name: string; ref?: string; pinTypes?: Record<string, string>; group?: string; ownerPin?: string; sheet: string; schema: string; symbolSource?: string; referencePrefix: string; value: string; footprint: string; footprintSource?: string; footprintProjectDirectory?: string; datasheet: string; properties: Record<string, string | null>; pins: ModelPin[] }
export function inspect(entry: string | string[]): ModelPart[] { return JSON.parse(run(['bun', join(import.meta.dir, '../cli.ts'), 'inspect', ...[entry].flat().map(path => resolve(path))])) }
export function baseImport(_directory: string) { return 'ts-kicad' }
export function cli(extra: Record<string, { type: 'string' | 'boolean'; multiple?: boolean }> = {}, args: string[] = []) {
  const parsed = parseArgs({ args, allowPositionals: true, options: { verify: { type: 'boolean' }, 'base-import': { type: 'string' }, ...extra } })
  return { positionals: parsed.positionals, values: parsed.values as Record<string, string | boolean | string[] | undefined> }
}
export const q = JSON.stringify
export const symbolId = (comp: Xml) => comp.find('libsource')!.get('lib') + ':' + comp.find('libsource')!.get('part')
export const compare = (a: string, b: string) => a < b ? -1 : a > b ? 1 : 0
