import { expect, test } from 'bun:test'
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { children, parse } from './kicad_sexpr'

const available = !!Bun.which('kicad-cli')
test.skipIf(!available)('init scaffolds an empty project; sync populates its untouched board', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'ts-kicad-init-'))
  const cli = join(import.meta.dir, '../cli.ts')
  const command = async (name: string) => {
    const process = Bun.spawn([Bun.which('bun')!, cli, name, directory], { stdout: 'pipe', stderr: 'pipe' })
    const [stdout, stderr, status] = await Promise.all([new Response(process.stdout).text(), new Response(process.stderr).text(), process.exited])
    if (status) throw new Error(stdout + stderr)
  }
  try {
    await command('init')
    const name = directory.split('/').at(-1)!
    const board = join(directory, name + '.kicad_pcb')
    expect(children(parse(readFileSync(board, 'utf8')), 'footprint')).toHaveLength(0)
    writeFileSync(join(directory, 'Pair.kicad_mod'), '(footprint "Pair" (version 20241229) (generator "ts_kicad") (layer "F.Cu") (attr smd) (pad "1" smd rect (at -2 0) (size 1 1) (layers "F.Cu" "F.Paste" "F.Mask")) (pad "2" smd rect (at 2 0) (size 1 1) (layers "F.Cu" "F.Paste" "F.Mask")))')
    writeFileSync(join(directory, 'src/index.ts'), `
      import { Project } from 'ts-kicad'
      import { r, local } from 'ts-kicad/helpers'
      import { fileURLToPath } from 'node:url'
      const FIRST = r({ref:'R1',value:'100'}).wire({P1:local('A'),P2:local('B')})
      r({ref:'R2',value:'100'}).wire({P1:FIRST.p.P1,P2:FIRST.p.P2})
      FIRST.bom=[{schema:'Device:R',manufacturer:'Example',partNumber:'Pair',lcsc:'test',
        footprint:{id:'Test:Pair',pads:['1','2'],file:fileURLToPath(new URL('../Pair.kicad_mod',import.meta.url))}}]
      export default new Project({entries:[FIRST],verify:true})
    `)
    await command('sync')
    const populated = readFileSync(board, 'utf8')
    expect(children(parse(populated), 'footprint')).toHaveLength(2)
    await command('sync')
    expect(readFileSync(board, 'utf8')).toBe(populated)
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
}, 30000)
