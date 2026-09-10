import { expect, test } from 'bun:test'
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { importParts } from './jlc'
import { child, val } from './kicad_sexpr'
import { readSymbolLibrary, symbolPins, symbolProperty } from './symbol_library'

function downloaded(id: string, output: string, pad = '1') {
  writeFileSync(output + '.kicad_sym', `(kicad_symbol_lib (symbol "Part" (property "Reference" "U") (property "Footprint" "${id}:Case") (symbol "Part_1_1" (pin passive line (at 0 0 0) (length 2.54) (name "IN") (number "1")))))`)
  mkdirSync(output + '.pretty')
  mkdirSync(output + '.3dshapes')
  writeFileSync(
    output + '.pretty/Case.kicad_mod',
    `(footprint "Case" (version 20241229) (layer "F.Cu") (pad "${pad}" smd rect (at 0 0) (size 1 1) (layers "F.Cu")) (model "Case.step" (offset (xyz 0 0 1)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 90))))`,
  )
  writeFileSync(output + '.3dshapes/Case.step', 'test model')
}

async function temporary(work: (directory: string) => Promise<void>) {
  const directory = mkdtempSync(join(tmpdir(), 'ts-kicad-import-'))
  try {
    await work(directory)
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
}

test('part import publishes one native package per ID with portable bindings and models', async () => {
  await temporary(async (directory) => {
    const result = await importParts(['C100', 'C200', 'c100'], directory, async (id, output) => downloaded(id, output))
    expect(result.map((part) => part.id)).toEqual(['C100', 'C200'])
    for (const id of ['C100', 'C200']) {
      const folder = join(directory, 'lib', id)
      expect(readdirSync(folder).sort()).toEqual([id + '.kicad_sym', 'Case.kicad_mod', 'Case.step', 'footprints.ts', 'symbols.ts'].sort())
      const footprint = readFileSync(join(folder, 'Case.kicad_mod'), 'utf8')
      expect(footprint).toContain('${KIPRJMOD}/lib/' + id + '/Case.step')
      expect(footprint).toContain('(xyz 0 0 90)')
      expect(readFileSync(join(folder, 'symbols.ts'), 'utf8')).toContain('"IN": "1"')
    }
    expect(readdirSync(directory).some((name) => name.startsWith('.ts-kicad-import-'))).toBe(false)
  })
})

test('incomplete downloads and pad mismatches never publish partial libraries', async () => {
  await temporary(async (directory) => {
    await expect(
      importParts(['C100', 'C200'], directory, async (id, output) => {
        if (id === 'C100') downloaded(id, output)
      }),
    ).rejects.toThrow('Incomplete')
    expect(existsSync(join(directory, 'lib/C100'))).toBe(false)
    await expect(importParts(['C100'], directory, async (id, output) => downloaded(id, output, '2'))).rejects.toThrow()
    expect(existsSync(join(directory, 'lib/C100'))).toBe(false)
  })
})

test('JLC import makes unspecified pins passive across units and preserves explicit types', async () => {
  await temporary(async directory => {
    const types = ['unspecified', 'input', 'output', 'bidirectional', 'tri_state', 'passive', 'free', 'power_in', 'power_out', 'open_collector', 'open_emitter', 'no_connect', 'unspecified']
    await importParts(['C100'], directory, async (id, output) => {
      downloaded(id, output)
      const pins = types.map((type, i) => `(pin ${type} line (at 0 ${i * 2.54} 0) (length 2.54) (name "P${i + 1}") (number "${i + 1}"))`)
      writeFileSync(output + '.kicad_sym', `(kicad_symbol_lib (symbol "Part"
        (property "Reference" "U") (property "Footprint" "${id}:Case")
        (property "Description" "Keep text such as (pin unspecified line) unchanged")
        (symbol "Part_1_1" ${pins.slice(0, 6).join(' ')})
        (symbol "Part_2_1" ${pins.slice(6).join(' ')})))`)
      writeFileSync(output + '.pretty/Case.kicad_mod', `(footprint "Case" (version 20241229) (layer "F.Cu")
        ${types.map((_, i) => `(pad "${i + 1}" smd rect (at ${i * 2} 0) (size 1 1) (layers "F.Cu"))`).join(' ')})`)
    })
    const folder = join(directory, 'lib/C100')
    const symbol = readSymbolLibrary(join(folder, 'C100.kicad_sym')).get('Part')!
    const actual = Object.fromEntries(symbolPins(symbol).map(pin => [val(child(pin, 'number')[1]), val(pin[1])]))
    const expected = Object.fromEntries(types.map((type, i) => [String(i + 1), type === 'unspecified' ? 'passive' : type]))
    expect(actual).toEqual(expected)
    expect(symbolProperty(symbol, 'Description')).toBe('Keep text such as (pin unspecified line) unchanged')
    const generated = readFileSync(join(folder, 'symbols.ts'), 'utf8')
    for (const [number, type] of Object.entries(expected)) expect(generated).toContain(`P${number}: "${type}"`)
  })
})

test('existing packages and invalid IDs are rejected before downloading', async () => {
  await temporary(async (directory) => {
    mkdirSync(join(directory, 'lib/C100'), { recursive: true })
    let downloads = 0
    const download = async () => {
      downloads++
    }
    await expect(importParts(['C100'], directory, download)).rejects.toThrow('already exists')
    for (const ids of [[], ['C0'], ['../../C100'], ['--overwrite']]) await expect(importParts(ids, directory, download)).rejects.toThrow('Expected')
    expect(downloads).toBe(0)
  })
})

test('part import converts only its own folder and preserves unrelated handwritten bindings', async () => {
  await temporary(async (directory) => {
    const folder = join(directory, 'lib/Existing')
    mkdirSync(folder, { recursive: true })
    writeFileSync(join(folder, 'symbols.ts'), 'handwritten')
    await importParts(['C100'], directory, async (id, output) => downloaded(id, output))
    expect(readFileSync(join(folder, 'symbols.ts'), 'utf8')).toBe('handwritten')
    expect(existsSync(join(directory, 'lib/C100/symbols.ts'))).toBe(true)
  })
})

test('jlc CLI accepts a space-separated list and converts only imported parts', async () => {
  await temporary(async directory => {
    const bin=join(directory,'bin')
    mkdirSync(bin)
    writeFileSync(join(bin,'uv'),`#!${process.execPath}
import {mkdirSync,writeFileSync} from 'node:fs'
import {join} from 'node:path'
${downloaded.toString()}
const args=process.argv.slice(2)
downloaded(args[args.indexOf('--lcsc_id')+1],args[args.indexOf('--output')+1])
`,{mode:0o755})
    mkdirSync(join(directory,'lib/Untouched'),{recursive:true})
    writeFileSync(join(directory,'lib/Untouched/symbols.ts'),'handwritten sentinel')
    const child=Bun.spawn([process.execPath,join(import.meta.dir,'../cli.ts'),'jlc','C100','C200','c100'],{cwd:directory,env:{...process.env,PATH:bin+':'+process.env.PATH},stdout:'pipe',stderr:'pipe'})
    const [stdout,stderr,status]=await Promise.all([new Response(child.stdout).text(),new Response(child.stderr).text(),child.exited])
    if(status)throw new Error(stdout+stderr)
    expect(stdout.match(/Importing C100 /g)).toHaveLength(1)
    for(const id of ['C100','C200'])expect(existsSync(join(directory,'lib',id,'symbols.ts'))).toBe(true)
    expect(readFileSync(join(directory,'lib/Untouched/symbols.ts'),'utf8')).toBe('handwritten sentinel')
  })
})
