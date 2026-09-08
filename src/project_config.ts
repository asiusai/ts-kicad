import { existsSync, statSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { Project, type ProjectSettings } from './index'

/** Load settings from the same entry module that owns the circuit graph. */
export async function resolveExportInputs(positionals: string[]) {
  if (!positionals.length) throw new Error('Export needs a project directory or TypeScript entry file')
  const directory = existsSync(positionals[0]) && statSync(positionals[0]).isDirectory() ? resolve(positionals[0]) : undefined
  const explicitOutput = positionals.at(-1)?.endsWith('.kicad_sch') ? positionals.at(-1) : undefined
  if (directory && positionals.length > (explicitOutput ? 2 : 1)) throw new Error('A project directory accepts at most one output path')
  const entries = directory ? [join(directory,'src/index.ts')] : positionals.slice(0, explicitOutput ? -1 : undefined).map(file => resolve(file))
  let config: Omit<ProjectSettings,'entries'> = {}
  let projectFile: string | undefined
  for (const file of entries) {
    const exported = (await import(pathToFileURL(file).href)).default
    if (!(exported instanceof Project)) continue
    if (projectFile) throw new Error('Use one Project with multiple components in entries, rather than multiple Project configurations')
    projectFile = file
    const {entries: _roots, ...settings} = exported.options
    const path = (value: string) => resolve(dirname(file), value)
    config = {...settings, output: settings.output && path(settings.output), symbols: settings.symbols?.map(path), footprints: settings.footprints?.map(path), project: settings.project && path(settings.project)}
  }
  const output = explicitOutput ? resolve(explicitOutput) : config.output ?? (directory ? join(directory,basename(directory)+'.kicad_sch') : undefined)
  if (!entries.length || !output?.endsWith('.kicad_sch')) throw new Error('Provide output in Project or as the final .kicad_sch argument')
  return {entries, output, config}
}
