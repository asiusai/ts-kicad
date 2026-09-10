import { existsSync, statSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { Component, Project, type ProjectSettings } from './index'

/** Load settings from the same entry module that owns the circuit graph. */
export async function resolveProject(input: string) {
  const directory = existsSync(input) && statSync(input).isDirectory() ? resolve(input) : undefined
  const entry = directory ? join(directory,'src/index.ts') : resolve(input)
  const exported = (await import(pathToFileURL(entry).href)).default
  const roots = exported instanceof Project ? exported.options.entries : Array.isArray(exported) ? exported : [exported]
  if ((!roots.length && !(exported instanceof Project)) || roots.some((part: unknown) => !(part instanceof Component))) {
    throw new Error(entry + ': default-export a Project, component or nonempty array of components')
  }
  let config: Omit<ProjectSettings,'entries'|'bom'> = {}
  if (exported instanceof Project) {
    const {entries: _roots, bom: _bom, ...settings} = exported.options
    const path = (value: string) => resolve(dirname(entry), value)
    config = {...settings, output: settings.output && path(settings.output), symbols: settings.symbols?.map(path), footprints: settings.footprints?.map(path), project: settings.project && path(settings.project)}
  }
  const entryDirectory = dirname(entry)
  const projectDirectory = directory ?? (basename(entryDirectory) === 'src' ? dirname(entryDirectory) : entryDirectory)
  const output = config.output ?? join(projectDirectory,basename(projectDirectory)+'.kicad_sch')
  if (!output.endsWith('.kicad_sch')) throw new Error('Project.output must end in .kicad_sch')
  return {entry, output, config}
}
