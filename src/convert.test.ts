import { expect, test } from 'bun:test'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { convertLibraries } from './convert'
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

test('convert creates portable imports with symbols, footprints and transformed models', () => {
  const {project,write}=fixture()
  try {
    const result=convertLibraries(project)
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
    expect(part.pinTypes).toEqual({ '1': 'passive' })
    expect(part.symbolSource).toBe(join(project,'lib/Package/Sensor.kicad_sym'))
    expect(part.footprintSource).toBe(join(project,'lib/Package/Case.kicad_mod'))
    expect(loadSymbols([part.symbolSource!],[part.schema]).libraries.has(part.schema)).toBe(true)
  } finally {rmSync(project,{recursive:true,force:true})}
})

test('converted symbols retain native pin types and merge per-instance overrides', () => {
  const {project,write}=fixture()
  try {
    write('lib/Package/Sensor.kicad_sym', `(kicad_symbol_lib (symbol "Sensor" (property "Reference" "U")
      (symbol "Sensor_1_1"
        (pin input line (at 0 0 0) (name "IN") (number "1"))
        (pin power_in line (at 0 2.54 0) (name "GND") (number "2"))
        (pin power_in line (at 0 5.08 0) (name "V+") (number "3"))
        (pin unspecified line (at 0 7.62 0) (name "UNKNOWN") (number "4")))))`)
    write('src/index.ts', `import {Sensor} from '../lib/Package/symbols';
      export default [new Sensor().wire({IN:null,GND:null,'V+':null,UNKNOWN:null}),
        new Sensor({pinTypes:{IN:'output'}}).wire({IN:null,GND:null,'V+':null,UNKNOWN:null}),
        new Sensor('U3', {pinTypes:{IN:'output'}}).wire({IN:null,GND:null,'V+':null,UNKNOWN:null})];`)
    for(let pass=0;pass<2;pass++){
      convertLibraries(project)
      const parts=inspect(join(project,'src/index.ts'))
      expect(parts[0].pinTypes).toEqual({'1':'input','2':'power_in','3':'power_in','4':'unspecified'})
      expect(parts[1].pinTypes).toEqual({'1':'output','2':'power_in','3':'power_in','4':'unspecified'})
      expect(parts[2].ref).toBe('U3')
      expect(parts[2].pinTypes).toEqual(parts[1].pinTypes)
    }
  } finally {rmSync(project,{recursive:true,force:true})}
})

test('convert removes stale output, preserves downloads and retains last output on conflicts', () => {
  const {project,write}=fixture()
  try {
    convertLibraries(project)
    const generated=join(project,'lib/Package/symbols.ts'),before=readFileSync(generated,'utf8')
    convertLibraries(project)
    expect(readFileSync(generated,'utf8')).toBe(before)
    write('lib/Package/A-B.kicad_mod',readFileSync(join(project,'lib/Package/Case.kicad_mod'),'utf8'))
    write('lib/Package/A_B.kicad_mod',readFileSync(join(project,'lib/Package/Case.kicad_mod'),'utf8'))
    expect(()=>convertLibraries(project)).toThrow('Duplicate footprint or TypeScript name')
    expect(readFileSync(generated,'utf8')).toBe(before)
    for (const file of ['Case.kicad_mod','A-B.kicad_mod','A_B.kicad_mod']) rmSync(join(project,'lib/Package',file))
    convertLibraries(project)
    expect(readFileSync(join(project,'lib/Package/footprints.ts'),'utf8')).not.toContain('export const Case')
    expect(existsSync(join(project,'lib/Package/Sensor.kicad_sym'))).toBe(true)
  } finally {rmSync(project,{recursive:true,force:true})}
})

test('convert refuses to overwrite an unmanaged source directory', () => {
  const {project,write}=fixture()
  try {
    write('lib/Package/symbols.ts','keep me')
    expect(()=>convertLibraries(project)).toThrow('non-generated file')
    expect(readFileSync(join(project,'lib/Package/symbols.ts'),'utf8')).toBe('keep me')
  } finally {rmSync(project,{recursive:true,force:true})}
})

test('convert removes saved board placement from reusable footprint geometry', () => {
  const {project,write}=fixture()
  try {
    write('lib/Package/Case.kicad_mod','(footprint "Case" (at 10 20 180) (pad "1" smd oval (at 1 2 180) (size 1 2) (layers "F.Cu") (net 1 "OLD")))')
    convertLibraries(project)
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

test('a reference circuit imports across projects without copying its native assets', () => {
  const {project,write}=fixture()
  try {
    convertLibraries(project)
    write('lib/Package/reference-1.ts', `import {Sensor} from './symbols'; import {Case} from './footprints'; import {global, sheet} from 'ts-kicad'; sheet('Sensor'); export const SENSOR = new Sensor({footprint:Case}).wire({P1:global()});`)
    write('consumer/src/index.ts', `import {SENSOR} from '../../lib/Package/reference-1'; import {Component, sheet} from 'ts-kicad'; sheet('Consumer'); const MCU = new (Component.withPins(['1'] as const))().wire({P1:SENSOR.P1}); export default MCU;`)
    const parts=inspect(join(project,'consumer/src/index.ts'))
    const sensor=parts.find(p=>p.schema==='Sensor:Sensor')!
    expect(sensor.symbolSource).toBe(join(project,'lib/Package/Sensor.kicad_sym'))
    expect(sensor.footprintSource).toBe(join(project,'lib/Package/Case.kicad_mod'))
    expect(parts).toHaveLength(2)
    expect(existsSync(join(project,'consumer/lib'))).toBe(false)
  } finally {rmSync(project,{recursive:true,force:true})}
})

test('limited conversion preserves other folders and their table entries', () => {
  const {project,write}=fixture()
  try {
    write('lib/Other/Other.kicad_sym', '(kicad_symbol_lib (symbol "Other" (property "Reference" "U")))')
    convertLibraries(project)
    const before=readFileSync(join(project,'lib/Other/symbols.ts'),'utf8')
    write('lib/Other/Other.kicad_sym','invalid, must not be read')
    convertLibraries(project,['Package'])
    expect(readFileSync(join(project,'lib/Other/symbols.ts'),'utf8')).toBe(before)
    expect(readFileSync(join(project,'sym-lib-table'),'utf8')).toContain('${KIPRJMOD}/lib/Other/Other.kicad_sym')
    expect(()=>convertLibraries(project,['../Other'])).toThrow('folder names')
  } finally {rmSync(project,{recursive:true,force:true})}
})

test('convert CLI accepts multiple folders, deduplicates them and validates the whole list before writing', async () => {
  const {project,write}=fixture()
  const run=async(folders:string[])=>{
    const child=Bun.spawn([process.execPath,join(import.meta.dir,'../cli.ts'),'convert',...folders],{cwd:project,stdout:'pipe',stderr:'pipe'})
    const [stdout,stderr,status]=await Promise.all([new Response(child.stdout).text(),new Response(child.stderr).text(),child.exited])
    return {stdout,stderr,status}
  }
  try {
    write('lib/Second Part/Second.kicad_sym','(kicad_symbol_lib (symbol "Second" (property "Reference" "U")))')
    write('lib/Untouched/symbols.ts','handwritten sentinel')
    const invalid=await run(['Package','Missing'])
    expect(invalid.status).toBe(1)
    expect(invalid.stderr).toContain('Library folder not found: Missing')
    expect(existsSync(join(project,'lib/Package/symbols.ts'))).toBe(false)
    const result=await run(['Package','Second Part','Package'])
    if(result.status)throw new Error(result.stdout+result.stderr)
    expect(result.stdout).toContain('Converted 2 symbols')
    expect(existsSync(join(project,'lib/Second Part/symbols.ts'))).toBe(true)
    expect(existsSync(join(project,'lib/Second Part/footprints.ts'))).toBe(true)
    expect(readFileSync(join(project,'lib/Untouched/symbols.ts'),'utf8')).toBe('handwritten sentinel')
    const table=readFileSync(join(project,'sym-lib-table'),'utf8')
    expect(table).toContain('/lib/Package/Sensor.kicad_sym')
    expect(table).toContain('/lib/Second Part/Second.kicad_sym')
  } finally {rmSync(project,{recursive:true,force:true})}
})
