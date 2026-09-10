import { expect, test } from 'bun:test'
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, writeFileSync, rmSync, symlinkSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { child, children, descendants, parse, val } from './kicad_sexpr'

async function sync(directory: string) {
  const process = Bun.spawn([Bun.which('bun')!, join(import.meta.dir, '../cli.ts'), 'sync', directory], { stdout: 'pipe', stderr: 'pipe' })
  const [stdout, stderr, status] = await Promise.all([new Response(process.stdout).text(), new Response(process.stderr).text(), process.exited])
  if (status) throw new Error(stdout + stderr)
}

const available = !!Bun.which('kicad-cli')
test.skipIf(!available)('sync creates KiCad files without touching libraries or the PCB', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'ts-kicad-init-'))
  try {
    mkdirSync(join(directory, 'src'))
    mkdirSync(join(directory, 'node_modules'))
    symlinkSync(join(import.meta.dir, '..'), join(directory, 'node_modules/ts-kicad'), 'dir')
    mkdirSync(join(directory, 'lib/Unconverted'), { recursive: true })
    writeFileSync(join(directory, 'lib/Unconverted/symbols.ts'), 'handwritten sentinel')
    writeFileSync(join(directory, 'lib/Unconverted/broken.kicad_sym'), 'not a symbol library')
    const name = directory.split('/').at(-1)!
    const board = join(directory, name + '.kicad_pcb')
    expect(existsSync(board)).toBe(false)
    expect(existsSync(join(directory, 'outputs'))).toBe(false)
    expect(existsSync(join(directory, 'generated'))).toBe(false)
    expect(existsSync(join(directory, '.gitignore'))).toBe(false)
    writeFileSync(board, 'user-owned PCB sentinel')
    writeFileSync(join(directory, 'Pair.kicad_mod'), '(footprint "Pair" (version 20241229) (generator "ts_kicad") (layer "F.Cu") (attr smd) (pad "1" smd rect (at -2 0) (size 1 1) (layers "F.Cu" "F.Paste" "F.Mask")) (pad "2" smd rect (at 2 0) (size 1 1) (layers "F.Cu" "F.Paste" "F.Mask")))')
    writeFileSync(join(directory, 'src/index.ts'), `
      import { Project, sheet } from 'ts-kicad'
      import { r } from 'ts-kicad/helpers'
      import { fileURLToPath } from 'node:url'
      const FIRST = r({ref:'R1',value:'100'}).wire({P1:'A',P2:'B'})
      r({ref:'R2',value:'100'}).wire({P1:FIRST.P1,P2:FIRST.P2})
      const bom=[{schema:'Device:R',manufacturer:'Example',partNumber:'Pair',lcsc:'test',
        footprint:{id:'Test:Pair',pads:['1','2'],file:fileURLToPath(new URL('../Pair.kicad_mod',import.meta.url))}}]
      export default new Project({entries:[FIRST],bom})
    `)
    await sync(directory)
    expect(readFileSync(join(directory, 'lib/Unconverted/symbols.ts'), 'utf8')).toBe('handwritten sentinel')
    expect(readFileSync(join(directory, 'lib/Unconverted/broken.kicad_sym'), 'utf8')).toBe('not a symbol library')
    expect(readdirSync(join(directory, 'lib/Unconverted')).sort()).toEqual(['broken.kicad_sym', 'symbols.ts'])
    const schematic = readFileSync(join(directory, name + '.kicad_sch'), 'utf8')
    expect(schematic).toContain('R1')
    expect(schematic).toContain('R2')
    expect(children(parse(schematic), 'sheet')).toHaveLength(0)
    expect(existsSync(join(directory, name + '--Circuit.kicad_sch'))).toBe(false)
    const libraries = readFileSync(join(directory, 'sym-lib-table'), 'utf8')
    expect(libraries).toContain('${KICAD10_SYMBOL_DIR}/Device.kicad_sym')
    expect(libraries).not.toContain('/usr/share/')
    expect(existsSync(join(directory, 'overrides.kicad_sym'))).toBe(false)
    await sync(join(directory, 'src/index.ts'))
    expect(readFileSync(board, 'utf8')).toBe('user-owned PCB sentinel')
    const entry = join(directory, 'src/index.ts')
    writeFileSync(entry, "import { R_0603_1608Metric } from 'ts-kicad/lib/footprints/Resistor_SMD'\n" + readFileSync(entry, 'utf8').replace(
      "{id:'Test:Pair',pads:['1','2'],file:fileURLToPath(new URL('../Pair.kicad_mod',import.meta.url))}",
      'R_0603_1608Metric',
    ))
    await sync(directory)
    const footprints = readFileSync(join(directory, 'fp-lib-table'), 'utf8')
    expect(footprints).toContain('${KICAD10_FOOTPRINT_DIR}/Resistor_SMD.pretty')
    expect(footprints).not.toContain('footprints/native')
    expect(footprints).not.toContain('/usr/share/')
    expect(readFileSync(board, 'utf8')).toBe('user-owned PCB sentinel')
    const rootSource = readFileSync(entry, 'utf8')
    writeFileSync(entry, rootSource.replace('const FIRST', "sheet('Circuit')\n      const FIRST"))
    await sync(directory)
    const root = parse(readFileSync(join(directory, name + '.kicad_sch'), 'utf8'))
    expect(children(root, 'sheet')).toHaveLength(1)
    expect(children(root, 'symbol')).toHaveLength(0)
    expect(children(parse(readFileSync(join(directory, name + '--Circuit.kicad_sch'), 'utf8')), 'symbol')).toHaveLength(2)
    const manual = join(directory, name + '--manual.kicad_sch')
    writeFileSync(manual, '(kicad_sch (generator manual))')
    writeFileSync(entry, rootSource)
    await sync(directory)
    expect(existsSync(join(directory, name + '--Circuit.kicad_sch'))).toBe(false)
    expect(readFileSync(manual, 'utf8')).toBe('(kicad_sch (generator manual))')
    expect(children(parse(readFileSync(join(directory, name + '.kicad_sch'), 'utf8')), 'symbol')).toHaveLength(2)
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
}, 30000)

test.skipIf(!available)('sync supports root components alongside explicit sheets, and an empty project', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'ts-kicad-sheets-'))
  try {
    mkdirSync(join(directory, 'src'))
    mkdirSync(join(directory, 'node_modules'))
    symlinkSync(join(import.meta.dir, '..'), join(directory, 'node_modules/ts-kicad'), 'dir')
    const entry = join(directory, 'src/index.ts'), name = directory.split('/').at(-1)!
    writeFileSync(entry, `
      import { Project, sheet } from 'ts-kicad'
      import { r } from 'ts-kicad/helpers'
      import { GND } from 'ts-kicad/power'
      const ROOT = r({ref:'R1',value:'100',pinTypes:{P1:'input'}}).wire({P1:'SIGNAL',P2:GND})
      sheet('Circuit')
      const CHILD = r({ref:'R2',value:'200'}).wire({P1:'SIGNAL',P2:GND})
      export default new Project({entries:[ROOT,CHILD]})
    `)
    // Sync's KiCad netlist roundtrip also checks that the local SIGNAL nets stay separate.
    await sync(directory)
    const rootPath = join(directory, name + '.kicad_sch')
    const root = parse(readFileSync(rootPath, 'utf8'))
    const subsheet = parse(readFileSync(join(directory, name + '--Circuit.kicad_sch'), 'utf8'))
    const rootId = val(child(root, 'uuid')[1]), childId = val(child(subsheet, 'uuid')[1])
    expect(children(root, 'sheet')).toHaveLength(1)
    const override = children(child(root, 'lib_symbols'), 'symbol').find(symbol => val(symbol[1]).startsWith('overrides:'))!
    expect(override).toBeDefined()
    expect(Object.fromEntries([...descendants(override, 'pin')].map(pin => [val(child(pin, 'number')[1]), val(pin[1])]))).toEqual({'1':'input','2':'passive'})
    expect(children(child(subsheet, 'lib_symbols'), 'symbol').some(symbol => val(symbol[1]) === 'Device:R')).toBe(true)
    for (const [tree, path, ref] of [[root, '/' + rootId, 'R1'], [subsheet, '/' + rootId + '/' + childId, 'R2']] as const) {
      const symbols = children(tree, 'symbol')
      expect(symbols.length).toBeGreaterThan(1) // Includes the generated GND symbol.
      expect(symbols.flatMap(symbol => children(symbol, 'property')).some(p => val(p[1]) === 'Reference' && val(p[2]) === ref)).toBe(true)
      for (const symbol of symbols) expect(val([...descendants(child(symbol, 'instances'), 'path')][0][1])).toBe(path)
    }
    const sheetY = Number(val(child(child(root, 'sheet'), 'at')[2]))
    for (const rectangle of children(root, 'rectangle')) expect(sheetY).toBeGreaterThan(Number(val(child(rectangle, 'end')[2])))
    writeFileSync(entry, "import { Project } from 'ts-kicad'\nexport default new Project({entries:[]})")
    await sync(directory)
    const empty = parse(readFileSync(rootPath, 'utf8'))
    expect(children(empty, 'sheet')).toHaveLength(0)
    expect(children(empty, 'symbol')).toHaveLength(0)
    expect(existsSync(join(directory, name + '--Circuit.kicad_sch'))).toBe(false)
  } finally { rmSync(directory, { recursive: true, force: true }) }
}, 30000)

for (const source of ['export const named = true', 'export default {}', 'export default []']) {
  test('sync rejects invalid entries before writing files: ' + source, async () => {
    const directory = mkdtempSync(join(tmpdir(), 'ts-kicad-invalid-init-'))
    try {
      mkdirSync(join(directory, 'src'))
      writeFileSync(join(directory, 'src/index.ts'), source)
      const process = Bun.spawn([Bun.which('bun')!, join(import.meta.dir, '../cli.ts'), 'sync', directory], { stdout: 'pipe', stderr: 'pipe' })
      const [stdout, stderr, status] = await Promise.all([new Response(process.stdout).text(), new Response(process.stderr).text(), process.exited])
      expect(status).toBe(1)
      expect(stderr).toContain('default-export a Project')
      expect(stdout).not.toContain('Synced')
      expect(readdirSync(directory)).toEqual(['src'])
      expect(readFileSync(join(directory, 'src/index.ts'), 'utf8')).toBe(source)
    } finally { rmSync(directory, { recursive: true, force: true }) }
  })
}

test('sync requires an existing entry and never scaffolds an empty directory', async () => {
  const directory=mkdtempSync(join(tmpdir(),'ts-kicad-no-scaffold-'))
  try {
    const child=Bun.spawn([process.execPath,join(import.meta.dir,'../cli.ts'),'sync',directory],{stdout:'pipe',stderr:'pipe'})
    await Promise.all([new Response(child.stdout).text(),new Response(child.stderr).text()])
    expect(await child.exited).toBe(1)
    expect(readdirSync(directory)).toEqual([])
  } finally {rmSync(directory,{recursive:true,force:true})}
})
