import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, renameSync, rmSync } from 'node:fs'
import { basename, join, resolve } from 'node:path'
import { convertLibraries } from './convert'
import { readSymbolLibrary, symbolPins, symbolProperty } from './symbol_library'
import { child, parse, val } from './kicad_sexpr'
import { footprintMetadata } from './internal-footprints'
import { validateFootprintPads } from './footprint'

const converter = 'easyeda2kicad==1.0.1'
type Download = (id: string, output: string) => Promise<void>

async function downloadPart(id: string, output: string) {
  if (!Bun.which('uv')) throw new Error('JLCPCB import requires uv. Install uv, then run this command again.')
  const child = Bun.spawn(['uv', 'tool', 'run', '--from', converter, 'easyeda2kicad', '--full', '--lcsc_id', id, '--output', output], {
    stdout: 'inherit',
    stderr: 'inherit',
  })
  if (await child.exited) throw new Error(`EasyEDA download failed for ${id}`)
}

/** Download into staging, validate native pin mappings, then publish and convert the imported libraries. */
export async function importParts(ids: readonly string[], directory: string, download: Download = downloadPart) {
  if (!ids.length || ids.some((id) => !/^C[1-9]\d*$/i.test(id))) throw new Error('Expected JLCPCB/LCSC part numbers such as C21190')
  const unique = [...new Set(ids.map((id) => id.toUpperCase()))],
    project = resolve(directory)
  for (const id of unique) if (existsSync(join(project, 'lib', id))) throw new Error(`Library lib/${id} already exists; preserving its edits. Use convert to refresh its bindings.`)
  mkdirSync(project, { recursive: true })
  const staging = mkdtempSync(join(project, '.ts-kicad-import-')),
    installed: string[] = []
  const results: { id: string; directory: string; symbols: number; footprints: number; models: number }[] = []
  try {
    for (const id of unique) {
      console.log(`Importing ${id} with ${converter}`)
      const work = join(staging, id),
        output = join(work, id),
        prepared = join(work, 'prepared')
      mkdirSync(work)
      await download(id, output)
      const symbolFile = output + '.kicad_sym',
        pretty = output + '.pretty',
        shapes = output + '.3dshapes'
      if (!existsSync(symbolFile) || !existsSync(pretty)) throw new Error(`Incomplete EasyEDA download for ${id}: symbol and footprint are required`)
      const symbols = readSymbolLibrary(symbolFile)
      if (!symbols.size) throw new Error(`Empty symbol library for ${id}`)
      const footprints = readdirSync(pretty, { withFileTypes: true })
        .filter((e) => e.isFile() && e.name.endsWith('.kicad_mod'))
        .map((e) => e.name)
      if (!footprints.length) throw new Error(`No footprints downloaded for ${id}`)
      const metadata = new Map(footprints.map((file) => [basename(file, '.kicad_mod'), footprintMetadata(parse(readFileSync(join(pretty, file), 'utf8')))]))
      for (const [name, symbol] of symbols) {
        const footprintId = symbolProperty(symbol, 'Footprint'),
          footprint = metadata.get(footprintId.split(':').at(-1)!)
        if (!footprint || !footprintId.startsWith(id + ':')) throw new Error(`${id}:${name} references a missing footprint: ${footprintId}`)
        validateFootprintPads(
          `${id}:${name}`,
          symbolPins(symbol).map((pin) => val(child(pin, 'number')[1])),
          footprint.pads,
        )
      }
      const models = existsSync(shapes)
        ? readdirSync(shapes, { withFileTypes: true })
            .filter((e) => e.isFile() && /\.(step|stp|wrl)$/i.test(e.name))
            .map((e) => e.name)
        : []
      mkdirSync(prepared)
      renameSync(symbolFile, join(prepared, id + '.kicad_sym'))
      for (const file of footprints) renameSync(join(pretty, file), join(prepared, file))
      for (const file of models) renameSync(join(shapes, file), join(prepared, file))
      if (!models.length) console.warn(`Warning: ${id} has no downloaded 3D model`)
      results.push({ id, directory: join(project, 'lib', id), symbols: symbols.size, footprints: footprints.length, models: models.length })
    }
    mkdirSync(join(project, 'lib'), { recursive: true })
    for (const result of results) {
      if (existsSync(result.directory)) throw new Error(`Library appeared during download: ${result.directory}`)
      renameSync(join(staging, result.id, 'prepared'), result.directory)
      installed.push(result.directory)
    }
    // Convert the imported packages together; unrelated libraries are left untouched.
    // It validates all edits before writing and rolls back a failed write.
    convertLibraries(project, results.map(result => result.id))
    for (const result of results) console.log(`Imported ${result.id}: ${result.symbols} symbols, ${result.footprints} footprints, ${result.models} models -> ${result.directory}`)
    return results
  } catch (error) {
    for (const directory of installed.reverse()) rmSync(directory, { recursive: true, force: true })
    throw error
  } finally {
    rmSync(staging, { recursive: true, force: true })
  }
}

export async function main(args: string[]) {
  if (!args.length || args.some(id => !/^C[1-9]\d*$/i.test(id))) throw new Error('Usage: ts-kicad jlc C<number> [C<number> ...]')
  await importParts(args, '.')
}
