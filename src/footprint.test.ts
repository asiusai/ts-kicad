import { expect, test } from 'bun:test'
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Component, applyBom } from './index'
import { validateFootprintPads } from './footprint'
import { footprintMetadata, generateFootprints } from './internal-footprints'
import { parse } from './kicad_sexpr'
import { C_0603_1608Metric } from '../lib/footprints/Capacitor_SMD'

class Pair extends Component.withPins(['1','2']) {}

test('builtin footprints resolve by library ID and BOM overrides preserve pad checks', () => {
  const part = new Pair({ref:'C1'})
  applyBom([part], [{footprint:C_0603_1608Metric}])
  expect(part.footprint).toBe('Capacitor_SMD:C_0603_1608Metric')
  expect(part.footprintSource).toBeUndefined()
  expect(C_0603_1608Metric.pads).toEqual(['1','2'])
  expect(C_0603_1608Metric.mounting).toBe('smd')
  applyBom([part], [{footprint:C_0603_1608Metric},{ref:'C1',footprint:'Custom:Pair'}])
  expect(part.footprint).toBe('Custom:Pair')
  expect(part.footprintSource).toBeUndefined()
  expect(() => new Pair({footprint:{...C_0603_1608Metric,pads:['1','3']}})).toThrow('missing pads: 2; pads without symbol pins: 3')
})

test('pad compatibility allows duplicates and unnumbered mechanical holes', () => {
  const tree = parse('(footprint "Test" (pad "1" smd rect (layers "F.Cu")) (pad "1" smd rect (layers "F.Cu")) (pad "2" thru_hole circle (layers "*.Cu")) (pad "" np_thru_hole circle (layers "*.Cu")))')
  expect(footprintMetadata(tree)).toEqual({pads:['1','2'],mounting:'mixed'})
  expect(() => validateFootprintPads('U1',['1','2'],['1','1','2',''])).not.toThrow()
  expect(() => validateFootprintPads('U1',['1','2'],['1'])).toThrow('missing pads: 2')
  expect(() => validateFootprintPads('U1',['1'],['1','2'])).toThrow('pads without symbol pins: 2')
})

test('generator emits metadata without copying native geometry and escapes JSDoc', () => {
  const dir = mkdtempSync(join(tmpdir(),'footprint-test-'))
  try {
    mkdirSync(join(dir,'source','Test.pretty'),{recursive:true})
    const native = '(footprint "Part" (descr "Test */ description") (pad "1" smd rect (layers "F.Cu")))'
    writeFileSync(join(dir,'source','Test.pretty','Part.kicad_mod'),native)
    generateFootprints(join(dir,'source'),join(dir,'output'))
    expect(existsSync(join(dir,'output','native'))).toBe(false)
    expect(readFileSync(join(dir,'output','Test.ts'),'utf8')).not.toContain('file:')
    expect(readFileSync(join(dir,'output','Test.ts'),'utf8')).toContain('Test * / description')
  } finally {rmSync(dir,{recursive:true,force:true})}
})
