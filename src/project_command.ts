import { existsSync, statSync, mkdirSync, readFileSync, writeFileSync, symlinkSync } from 'node:fs'
import { createRequire } from 'node:module'
import { basename, dirname, join, resolve } from 'node:path'
import { resolveExportInputs } from './project_config'
import { syncParts } from './sync_parts'
import { exportSchematic } from './export_schematic'

/** Bind libraries before importing the circuit, then generate its native project. */
export async function runProject(mode:'init'|'sync', args:string[]) {
  const librariesOnly=args.includes('--libraries-only')
  const inputs=args.filter(arg=>arg!=='--libraries-only')
  if(inputs.length>1 || inputs.some(arg=>arg.startsWith('-')) || (mode==='init'&&librariesOnly)) throw new Error(`Usage: ts-kicad ${mode} [project-directory|src/index.ts]${mode==='sync'?' [--libraries-only]':''}`)
  const input=resolve(inputs[0]??'.')
  const isFile=existsSync(input)?statSync(input).isFile():input.endsWith('.ts')
  const directory=isFile?(basename(dirname(input))==='src'?dirname(dirname(input)):dirname(input)):input
  const entry=directory===input?join(directory,'src/index.ts'):input
  if(mode==='init'&&!existsSync(entry)){
    mkdirSync(dirname(entry),{recursive:true})
    const packageRoot=resolve(import.meta.dir,'..'),metadata=JSON.parse(readFileSync(join(packageRoot,'package.json'),'utf8'))
    const manifest=join(directory,'package.json')
    if(!existsSync(manifest))writeFileSync(manifest,JSON.stringify({private:true,type:'module',dependencies:{'ts-kicad':metadata.version}},null,2)+'\n')
    try{createRequire(manifest).resolve('ts-kicad')}catch{
      mkdirSync(join(directory,'node_modules'),{recursive:true})
      symlinkSync(packageRoot,join(directory,'node_modules','ts-kicad'),process.platform==='win32'?'junction':'dir')
    }
    writeFileSync(entry,"import { Project } from 'ts-kicad'\n\nexport default new Project({\n  entries: [], // Add your circuit roots here.\n  verify: true,\n  pdf: true,\n})\n")
    const ignore=join(directory,'.gitignore')
    if(!existsSync(ignore))writeFileSync(ignore,'node_modules/\ngenerated/\n*.kicad_prl\n*-backups/\n~*\n')
    console.log('Created TypeScript entry: '+entry)
    // Restart after installing the local link; Bun may have cached a failed package lookup.
    const child=Bun.spawn([process.execPath,join(packageRoot,'cli.ts'),mode,...args],{stdin:'inherit',stdout:'inherit',stderr:'inherit'})
    if(await child.exited)throw new Error('Project initialization failed after creating the entry')
    return
  }
  if(!librariesOnly&&!existsSync(entry))throw new Error(`Create ${entry} with a default-exported Project first. Use sync --libraries-only to generate custom bindings before writing the circuit.`)
  syncParts(directory)
  if(librariesOnly)return
  const {entries,output,config}=await resolveExportInputs([input])
  const artifacts=['.kicad_pro','.kicad_sch','.kicad_pcb'].map(ext=>output.replace(/\.kicad_sch$/,ext))
  if(mode==='init'&&artifacts.some(existsSync))throw new Error('KiCad project already exists. Use ts-kicad sync to update it while preserving PCB placement and routing.')
  if(mode==='sync'&&!existsSync(artifacts[0]))throw new Error('KiCad project is not initialized. Run ts-kicad init first.')
  await exportSchematic(entries,output,[...config.symbols??[]],{
    ...config,footprints:config.footprints&&[...config.footprints],
  })
  console.log(`${mode==='init'?'Initialized':'Synced'} KiCad project: ${artifacts[0]}`)
}

export const main=(args:string[])=>runProject('sync',args)
