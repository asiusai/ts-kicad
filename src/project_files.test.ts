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
    writeFileSync(project,JSON.stringify(initial))
    prepareProject(output,[],new Map(),{settings:{text_variables:{REVISION:'v2'}}})
    const updated=JSON.parse(readFileSync(project,'utf8'))
    expect(updated.text_variables).toEqual({REVISION:'v2'})
    expect(updated.schematic).toEqual(initial.schematic)
  } finally {rmSync(directory,{recursive:true,force:true})}
})
