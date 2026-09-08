import { expect, test } from 'bun:test'
import { applyBoardOptions, prepareProject, boardNetName, renameBoardNets } from './project_files'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { child, dump, parse, val } from './kicad_sexpr'
import { defaultSettings, defaultPcbOptions } from './project_defaults'
import { mergeSettings } from './merge_settings'

test('board settings update preserves routed geometry and is idempotent', () => {
  const board=parse('(kicad_pcb (general (thickness 1.6)) (layers (0 "F.Cu" signal) (2 "B.Cu" signal)) (setup (pad_to_mask_clearance 0)) (segment (start 1 2) (end 3 4) (layer "F.Cu")) (footprint "Test" (at 10 20)))')
  const segment=dump(child(board,'segment')),footprint=dump(child(board,'footprint'))
  const options={thickness:1.2,setup:'(setup (pad_to_mask_clearance 0.05))',layers:[[0,'F.Cu','signal'],[2,'B.Cu','signal']] as const}
  expect(applyBoardOptions(board,options)).toBe(true)
  expect(val(child(child(board,'general'),'thickness')[1])).toBe('1.2')
  expect(dump(child(board,'segment'))).toBe(segment)
  expect(dump(child(board,'footprint'))).toBe(footprint)
  expect(applyBoardOptions(board,options)).toBe(false)
  expect(()=>applyBoardOptions(board,{layers:[[2,'B.Cu','signal']]})).toThrow('Cannot remove')
  expect(()=>applyBoardOptions(board,{setup:'(wrong)'})).toThrow('(setup ...)')
})

test('project settings and custom rules are recreated and updated without a template', () => {
  const directory=mkdtempSync(join(tmpdir(),'ts-kicad-settings-'))
  try {
    const output=join(directory,'board.kicad_sch'),project=join(directory,'board.kicad_pro')
    prepareProject(output,[],new Map(),{settings:{text_variables:{REVISION:'v1'}},designRules:'(version 1)\n'})
    const initial=JSON.parse(readFileSync(project,'utf8'))
    expect(initial.meta.filename).toBe('board.kicad_pro')
    expect(initial.text_variables.REVISION).toBe('v1')
    initial.schematic={drawing:{label_size:1.27}}
    writeFileSync(project,JSON.stringify(initial))
    prepareProject(output,[],new Map(),{settings:{text_variables:{REVISION:'v2'}},designRules:'(version 1)\n# updated\n'})
    const updated=JSON.parse(readFileSync(project,'utf8'))
    expect(updated.text_variables).toEqual({REVISION:'v2'})
    expect(updated.schematic).toEqual(initial.schematic)
    expect(readFileSync(join(directory,'board.kicad_dru'),'utf8')).toContain('# updated')
  } finally {rmSync(directory,{recursive:true,force:true})}
})

test('small nested overrides retain defaults, and removing them restores defaults', () => {
  const directory=mkdtempSync(join(tmpdir(),'ts-kicad-defaults-'))
  try {
    const output=join(directory,'board.kicad_sch'),file=join(directory,'board.kicad_pro')
    const options={settings:{board:{design_settings:{rules:{min_clearance:0.123}}},net_settings:{classes:[{name:'Default',track_width:0.456}]}}}
    prepareProject(output,[],new Map(),options)
    const updated=JSON.parse(readFileSync(file,'utf8'))
    expect(updated.board.design_settings.rules.min_clearance).toBe(0.123)
    expect(updated.board.design_settings.rules.min_track_width).toBe(0.2)
    expect(updated.net_settings.classes[0].track_width).toBe(0.456)
    expect(updated.net_settings.classes[0].via_drill).toBe(0.3)
    prepareProject(output,[],new Map(),{})
    const reset=JSON.parse(readFileSync(file,'utf8'))
    expect(reset.board.design_settings).toEqual((defaultSettings.board as any).design_settings)
    expect(reset.net_settings).toEqual(defaultSettings.net_settings)
    expect(mergeSettings({list:[{name:'a',value:1}]},{list:[]})).toEqual({list:[]})
  } finally {rmSync(directory,{recursive:true,force:true})}
})

test('partial board setup keeps default plotting settings and includes user layers', () => {
  const board=parse('(kicad_pcb)')
  const options={...defaultPcbOptions,layers:[[0,'F.Cu','signal'],[4,'In1.Cu','power'],[6,'In2.Cu','power'],[2,'B.Cu','signal']] as const,setup:'(setup (pcbplotparams (usegerberextensions yes)))'}
  applyBoardOptions(board,options)
  const plot=child(child(board,'setup'),'pcbplotparams')
  expect(val(child(plot,'usegerberextensions')[1])).toBe('yes')
  expect(val(child(plot,'creategerberjobfile')[1])).toBe('yes')
  expect(dump(child(board,'layers'))).toContain('F.SilkS')
  expect(dump(child(board,'layers'))).toContain('In2.Cu')
  expect(applyBoardOptions(board,options)).toBe(false)
})

test('net renaming supports both KiCad encodings and keeps numeric IDs and geometry', () => {
  const board=parse('(kicad_pcb (net 1 "A") (net 2 "B") (footprint "Part" (pad "1" smd rect (at 1 2 90) (net 1 "A")) (pad "2" smd rect (at 3 4) (net "B"))) (segment (start 1 2) (end 3 4) (net 1)) (via (at 5 6) (net "A")) (zone (net 1) (net_name "A")))')
  expect(boardNetName(parse('(net "123")'))).toBe('123')
  expect(boardNetName(parse('(net 123)'))).toBeUndefined()
  renameBoardNets(board,new Map([['A','B'],['B','C']]))
  const text=dump(board)
  expect(text).toContain('(net 1 "B")')
  expect(text).toContain('(net 2 "C")')
  expect(text).toContain('(net "C")')
  expect(text).toContain('(net_name "B")')
  expect(text).toContain('(net "B")')
  expect(dump(child(board,'segment'))).toContain('(net 1)')
  expect(dump(child(board,'via'))).toContain('(at 5 6)')
  expect(text).toContain('(at 1 2 90)')
})
