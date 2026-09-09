#!/usr/bin/env bun

import process from 'node:process'
import { existsSync, realpathSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createRequire } from 'node:module'

// Run with the project's own DSL package so global and local installs never mix class identities.
const [requestedCommand, ...requestedArgs] = process.argv.slice(2)
if (['init', 'sync', 'export', 'inspect', 'outputs'].includes(requestedCommand)) {
  const first = requestedArgs[0]
  const location = first && !first.startsWith('-') ? resolve(first) : process.cwd()
  const directory = existsSync(location) && statSync(location).isDirectory() ? location : dirname(location)
  let localCli: string | undefined
  try {
    const entry = createRequire(join(directory, 'package.json')).resolve('ts-kicad')
    localCli = join(dirname(dirname(realpathSync(entry))), 'cli.ts')
  } catch {
    /* A new project can run sync before installing its circuit dependency. */
  }
  if (localCli && existsSync(localCli) && realpathSync(localCli) !== realpathSync(import.meta.path)) {
    const child = Bun.spawn([process.execPath, localCli, ...process.argv.slice(2)], { stdin: 'inherit', stdout: 'inherit', stderr: 'inherit' })
    process.exit(await child.exited)
  }
}

const commands = {
  init: {
    usage: '[project-directory|src/index.ts]',
    description: 'Create a complete KiCad project from its TypeScript entry and settings.',
    load: () => import('./src/init_project'),
  },
  sync: {
    usage: '[project-directory|src/index.ts] [--libraries-only]',
    description: 'Refresh custom bindings and sync the TypeScript circuit/settings into KiCad.',
    load: () => import('./src/project_command'),
  },
  'generate-footprints': {
    usage: '[KiCad-footprint-directory]',
    description: 'Generate typed builtin footprints and copy their native geometry.',
    load: () => import('./src/generate_footprints'),
  },
  'generate-components': {
    usage: '[KiCad-symbol-directory]',
    description: 'Regenerate all builtin TypeScript components from installed KiCad libraries.',
    load: () => import('./src/generate_components'),
  },
  outputs: {
    usage: 'project-directory|board.kicad_sch|board.kicad_pcb [--output directory] [--docs-only]',
    description: 'Export BOM, PDF, checked fabrication files, positions and mechanical models.',
    load: () => import('./src/export_outputs'),
  },
  export: {
    usage: 'project-directory OR entry.ts [other.ts ...] output.kicad_sch [--symbols library.kicad_sym] [--footprints library.pretty] [--project source.kicad_pro] [--verify] [--pdf]',
    description: 'Generate a KiCad schematic, check ERC, and optionally export a PDF.',
    load: () => import('./src/export_schematic'),
  },
  import: {
    usage: 'C<number> [C<number> ...] [project-directory]\n       ts-kicad import source.kicad_sch output-directory [--verify] [--base-import path]',
    description: 'Import JLCPCB parts with EasyEDA2KiCad, or convert a KiCad schematic into TypeScript.',
    load: () => import('./src/import_parts'),
  },
  symbols: {
    usage: 'source.kicad_sch|source.kicad_sym output.ts [--base-import path]',
    description: 'Generate typed component classes from KiCad symbols.',
    load: () => import('./src/export_components'),
  },
  inspect: {
    usage: 'entry.ts [other.ts ...]',
    description: 'Print the circuit graph as JSON; warnings go to stderr.',
    load: () => import('./src/inspect_circuit'),
  },
} as const

async function main() {
  const [name, ...args] = process.argv.slice(2)
  if (name === '--version' || name === '-v') {
    console.log((await Bun.file(new URL('./package.json', import.meta.url)).json()).version)
    return
  }
  if (!name || name === '--help' || name === '-h') {
    console.log('Usage: ts-kicad <command> [options]\n')
    for (const [command, { description }] of Object.entries(commands)) {
      console.log(`  ${command.padEnd(9)} ${description}`)
    }
    console.log('\nUse ts-kicad <command> --help for arguments. Paths are relative to the current directory.')
    return
  }
  if (!Object.hasOwn(commands, name)) throw new Error(`Unknown command: ${name}. Use --help to list commands.`)
  const command = commands[name as keyof typeof commands]
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`Usage: ts-kicad ${name} ${command.usage}\n\n${command.description}`)
    if (name === 'export') console.log('Repeat --symbols for multiple source schematics.')
    return
  }
  if (name === 'inspect' && (!args.length || args.some((arg) => arg.startsWith('-')))) {
    throw new Error(`Usage: ts-kicad inspect ${command.usage}`)
  }
  await (await command.load()).main(args)
}

try {
  await main()
} catch (error) {
  console.error(`ts-kicad: ${error instanceof Error ? error.message : String(error)}`)
  process.exitCode = 1
}
