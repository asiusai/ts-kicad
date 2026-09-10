import { expect, test } from 'bun:test'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { Component, Project } from './index'
import { resolveExportInputs } from './project_config'
import { inspect } from './kicad_io'

class Pair extends Component.withPins(['1','2']) {}

test('Project supports empty circuits', () => {
  expect(new Project({entries:[]}).options.entries).toHaveLength(0)
  expect(new Project({entries:[new Pair()]}).options.entries).toHaveLength(1)

})

test('entry Project supplies relative paths and multiple disconnected graph roots', async () => {
  const directory=mkdtempSync(join(tmpdir(),'ts-kicad-project-'))
  try {
    mkdirSync(join(directory,'src'))
    const entry=join(directory,'src/index.ts')
    const api=resolve(import.meta.dir,'index.ts')
    writeFileSync(entry,`import {Component,Project} from ${JSON.stringify(api)};
class Pair extends Component.withPins(['1','2']) {}
const a=new Pair().wire({P1:null,P2:null}),b=new Pair().wire({P1:null,P2:null});
export default new Project({entries:[a,b],output:'../out/design.kicad_sch',symbols:['../symbols.kicad_sym'],footprints:['../custom.pretty'],project:'../original.kicad_pro',bom:[]});`)
    const byDirectory=await resolveExportInputs([directory])
    const byFile=await resolveExportInputs([entry])
    expect(byDirectory).toEqual(byFile)
    expect(byFile.output).toBe(join(directory,'out/design.kicad_sch'))
    expect(byFile.config.symbols).toEqual([join(directory,'symbols.kicad_sym')])
    expect(byFile.config.footprints).toEqual([join(directory,'custom.pretty')])
    expect(byFile.config.project).toBe(join(directory,'original.kicad_pro'))
    const override=await resolveExportInputs([entry,'override.kicad_sch'])
    expect(override.output).toBe(resolve('override.kicad_sch'))
    expect(inspect(entry)).toHaveLength(2)
  } finally {rmSync(directory,{recursive:true,force:true})}
})
