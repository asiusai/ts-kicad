import { expect, test } from 'bun:test'
import { prepareProject } from './project_files'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

test('project settings are recreated and updated without a template', () => {
  const directory=mkdtempSync(join(tmpdir(),'ts-kicad-settings-'))
  try {
    const output=join(directory,'board.kicad_sch'),project=join(directory,'board.kicad_pro')
    prepareProject(output,[],new Map(),{settings:{text_variables:{REVISION:'v1'}}})
    const initial=JSON.parse(readFileSync(project,'utf8'))
    expect(initial.meta.filename).toBe('board.kicad_pro')
    expect(initial.text_variables.REVISION).toBe('v1')
    initial.schematic={drawing:{label_size:1.27}}
    initial.meta.version=3
    initial.board={design_settings:{rules:{min_clearance:0.4},defaults:{silk_line_width:0.12}},visible_layers:['F.Cu']}
    writeFileSync(project,JSON.stringify(initial))
    prepareProject(output,[],new Map(),{settings:{text_variables:{REVISION:'v2'},board:{design_settings:{rules:{min_clearance:0.2}}}}})
    const updated=JSON.parse(readFileSync(project,'utf8'))
    expect(updated.text_variables).toEqual({REVISION:'v2'})
    expect(updated.schematic).toEqual(initial.schematic)
    expect(updated.meta.version).toBe(3)
    expect(updated.board.visible_layers).toEqual(['F.Cu'])
    expect(updated.board.design_settings.defaults.silk_line_width).toBe(0.12)
    expect(updated.board.design_settings.rules.min_clearance).toBe(0.2)
  } finally {rmSync(directory,{recursive:true,force:true})}
})
