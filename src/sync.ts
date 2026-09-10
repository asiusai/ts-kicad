import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { resolveProject } from './project_config'
import { exportSchematic } from './export_schematic'

export async function main(args: string[]) {
  if (args.length > 1 || args.some(arg => arg.startsWith('-'))) throw new Error('Usage: ts-kicad sync [project-directory|src/index.ts]')
  const input = resolve(args[0] ?? '.')
  if (!existsSync(input)) throw new Error('Project or entry not found: ' + input)
  const { entry, output, config } = await resolveProject(input)
  await exportSchematic(entry, output, [...config.symbols ?? []], {
    ...config, footprints: config.footprints && [...config.footprints],
  })
  console.log('Synced KiCad schematic: ' + output)
}
