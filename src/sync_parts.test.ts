import { expect, test } from 'bun:test'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { syncParts } from './sync_parts'
import { child, parse, val } from './kicad_sexpr'
import { inspect } from './kicad_io'
import { loadSymbols } from './kicad_geometry'

function fixture() {
  const project=mkdtempSync(join(tmpdir(),'ts-kicad-sync-'))
  const write=(path:string,text:string)=>{const file=join(project,path);mkdirSync(dirname(file),{recursive:true});writeFileSync(file,text)}
  write('lib/Package/Sensor.kicad_sym','(kicad_symbol_lib (symbol "Sensor" (property "Reference" "U") (symbol "Sensor_1_1" (pin passive line (at 0 0 0) (length 2.54) (name "~") (number "1")))))')
  write('lib/Package/Case.kicad_mod','(footprint "Case" (descr "Test case") (pad "1" smd rect (at 0 0) (size 1 1) (layers "F.Cu")) (model "old/download/Case.step" (offset (xyz 1 2 3)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 90))))')
  write('lib/Package/Case.step','test model contents')
  mkdirSync(join(project,'node_modules'),{recursive:true})
  symlinkSync(resolve(import.meta.dir,'..'),join(project,'node_modules/ts-kicad'),'dir')
  return {project,write}
}

test('sync creates portable imports with symbols, footprints and transformed models', () => {
  const {project,write}=fixture()
  try {
    const result=syncParts(project)
    expect(result.symbols).toBe(1);expect(result.footprints).toBe(1);expect(result.models).toBe(1)
    const generated=join(project,'lib/Package/Case.kicad_mod')
    const tree=parse(readFileSync(generated,'utf8')),model=child(tree,'model')
    expect(readFileSync(val(model[1]).replace('${KIPRJMOD}',project),'utf8')).toBe('test model contents')
    expect(val(child(child(model,'offset'),'xyz')[2])).toBe('2')
    expect(val(child(child(model,'rotate'),'xyz')[3])).toBe('90')
    expect(readFileSync(join(project,'lib/Package/Case.kicad_mod'),'utf8')).toContain('${KIPRJMOD}/lib/Package/Case.step')
    write('src/index.ts',`import {Sensor} from '../lib/Package/symbols';import {Case} from '../lib/Package/footprints';export default new Sensor({footprint:Case}).wire({P1:null});`)
    expect(existsSync(join(project,'src/generated/native'))).toBe(false)
    expect(readFileSync(join(project,'sym-lib-table'),'utf8')).toContain('${KIPRJMOD}/lib/Package/Sensor.kicad_sym')
    expect(readFileSync(join(project,'fp-lib-table'),'utf8')).toContain('${KIPRJMOD}/lib/Package')
    const [part]=inspect(join(project,'src/index.ts'))
    expect(part.schema).toBe('Sensor:Sensor')
    expect(part.symbolSource).toBe(join(project,'lib/Package/Sensor.kicad_sym'))
    expect(part.footprintSource).toBe(join(project,'lib/Package/Case.kicad_mod'))
    expect(loadSymbols([part.symbolSource!],[part.schema]).libraries.has(part.schema)).toBe(true)
  } finally {rmSync(project,{recursive:true,force:true})}
})

test('sync removes stale output, preserves downloads and retains last output on conflicts', () => {
  const {project,write}=fixture()
  try {
    syncParts(project)
    const generated=join(project,'lib/Package/symbols.ts'),before=readFileSync(generated,'utf8')
    syncParts(project)
    expect(readFileSync(generated,'utf8')).toBe(before)
    write('lib/Package/A-B.kicad_mod',readFileSync(join(project,'lib/Package/Case.kicad_mod'),'utf8'))
    write('lib/Package/A_B.kicad_mod',readFileSync(join(project,'lib/Package/Case.kicad_mod'),'utf8'))
    expect(()=>syncParts(project)).toThrow('Duplicate footprint or TypeScript name')
    expect(readFileSync(generated,'utf8')).toBe(before)
    for (const file of ['Case.kicad_mod','A-B.kicad_mod','A_B.kicad_mod']) rmSync(join(project,'lib/Package',file))
    syncParts(project)
    expect(readFileSync(join(project,'lib/Package/footprints.ts'),'utf8')).not.toContain('export const Case')
    expect(existsSync(join(project,'lib/Package/Sensor.kicad_sym'))).toBe(true)
  } finally {rmSync(project,{recursive:true,force:true})}
})

test('sync refuses to overwrite an unmanaged source directory', () => {
  const {project,write}=fixture()
  try {
    write('lib/Package/symbols.ts','keep me')
    expect(()=>syncParts(project)).toThrow('non-generated file')
    expect(readFileSync(join(project,'lib/Package/symbols.ts'),'utf8')).toBe('keep me')
  } finally {rmSync(project,{recursive:true,force:true})}
})

test('sync removes saved board placement from reusable footprint geometry', () => {
  const {project,write}=fixture()
  try {
    write('lib/Package/Case.kicad_mod','(footprint "Case" (at 10 20 180) (pad "1" smd oval (at 1 2 180) (size 1 2) (layers "F.Cu") (net 1 "OLD")))')
    syncParts(project)
    const tree=parse(readFileSync(join(project,'lib/Package/Case.kicad_mod'),'utf8'))
    expect(child(tree,'at')).toHaveLength(0)
    const pad=child(tree,'pad')
    expect(Number(val(child(pad,'at')[3]))).toBe(0)
    expect(val(tree[1])).toBe('Case')
    expect(val(child(pad,'at')[1])).toBe('1')
    expect(child(pad,'net')).toHaveLength(0)
    expect(child(tree,'version')).not.toHaveLength(0)
  } finally {rmSync(project,{recursive:true,force:true})}
})
