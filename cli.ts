#!/usr/bin/env bun

import process from 'node:process'
import { existsSync, realpathSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createRequire } from 'node:module'

// Run with the project's own DSL package so global and local installs never mix class identities.
const [requestedCommand, ...requestedArgs] = process.argv.slice(2)
if (['sync', 'export', 'convert', 'jlc'].includes(requestedCommand)) {
  const first = ['sync', 'export'].includes(requestedCommand) ? requestedArgs[0] : undefined
  const location = first && !first.startsWith('-') ? resolve(first) : process.cwd()
  const directory = existsSync(location) && statSync(location).isDirectory() ? location : dirname(location)
  let localCli: string | undefined
  try {
    const entry = createRequire(join(directory, 'package.json')).resolve('ts-kicad')
    localCli = join(dirname(dirname(realpathSync(entry))), 'cli.ts')
  } catch {
    /* Use this CLI when the project has no local package installation. */
  }
  if (localCli && existsSync(localCli) && realpathSync(localCli) !== realpathSync(import.meta.path)) {
    const child = Bun.spawn([process.execPath, localCli, ...process.argv.slice(2)], { stdin: 'inherit', stdout: 'inherit', stderr: 'inherit' })
    process.exit(await child.exited)
  }
}

const commands = {
  sync: {
    usage: '[project-directory|src/index.ts]',
    description: 'Sync the TypeScript circuit/settings into KiCad.',
    load: () => import('./src/sync'),
  },
  export: {
    usage: '[project-directory|board.kicad_sch|board.kicad_pcb] [--output directory]',
    description: 'Log ERC/DRC findings and export BOM, PDF, fabrication files, positions and mechanical models.',
    load: () => import('./src/export'),
  },
  convert: {
    usage: '[folder-name ...]',
    description: 'Generate symbols.ts and footprints.ts for all lib folders or selected folders.',
    load: () => import('./src/convert'),
  },
  jlc: {
    usage: 'C<number> [C<number> ...]',
    description: 'Import JLCPCB parts into lib/PART_NO and convert those folders.',
    load: () => import('./src/jlc'),
  },
  'internal-symbols': {
    usage: '[KiCad-symbol-directory]',
    description: 'Regenerate lib/symbols from installed KiCad libraries (package development).',
    load: () => import('./src/internal-symbols'),
  },
  'internal-footprints': {
    usage: '[KiCad-footprint-directory]',
    description: 'Regenerate lib/footprints from installed KiCad libraries (package development).',
    load: () => import('./src/internal-footprints'),
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
      console.log(`  ${command.padEnd(19)} ${description}`)
    }
    console.log('\nUse ts-kicad <command> --help for arguments. Paths are relative to the current directory.')
    return
  }
  if (!Object.hasOwn(commands, name)) throw new Error(`Unknown command: ${name}. Use --help to list commands.`)
  const command = commands[name as keyof typeof commands]
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`Usage: ts-kicad ${name} ${command.usage}\n\n${command.description}`)
    return
  }
  await (await command.load()).main(args)
}

try {
  await main()
} catch (error) {
  console.error(`ts-kicad: ${error instanceof Error ? error.message : String(error)}`)
  process.exitCode = 1
}
