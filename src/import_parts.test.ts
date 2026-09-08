import { expect, test } from 'bun:test'
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { importParts } from './import_parts'

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

test('sync conflicts roll back imported packages and preserve handwritten bindings', async () => {
  await temporary(async (directory) => {
    const folder = join(directory, 'lib/Existing')
    mkdirSync(folder, { recursive: true })
    writeFileSync(join(folder, 'symbols.ts'), 'handwritten')
    await expect(importParts(['C100'], directory, async (id, output) => downloaded(id, output))).rejects.toThrow()
    expect(readFileSync(join(folder, 'symbols.ts'), 'utf8')).toBe('handwritten')
    expect(existsSync(join(directory, 'lib/C100'))).toBe(false)
  })
})
