import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { child, children, descendants, dump, num, parse, remove, val } from './kicad_sexpr'

/** KiCad must migrate legacy angle/geometry semantics before changing the file version. */
export function normalizeFootprint(text:string):string {
  const tree=parse(text)
  if(child(tree,'version').length&&!child(tree,'at').length)return text
  if(child(tree,'at').length){
    const rotation=Number(val(child(tree,'at')[3]))||0
    remove(tree,'at','path','sheetname','sheetfile')
    for(const at of descendants(tree,'at'))if(at[3])at[3]=num((Number(val(at[3]))-rotation+360)%360)
    for(const pad of children(tree,'pad'))remove(pad,'net','pinfunction','pintype')
  }
  const directory=mkdtempSync(join(tmpdir(),'ts-kicad-footprint-'))
  try {
    const input=join(directory,'input.pretty'),output=join(directory,'output.pretty')
    mkdirSync(input)
    writeFileSync(join(input,'Part.kicad_mod'),dump(tree)+'\n')
    execFileSync('kicad-cli',['fp','upgrade','--force','--output',output,input],{stdio:'pipe'})
    const normalized=parse(readFileSync(join(output,'Part.kicad_mod'),'utf8'))
    normalized[1]=tree[1]
    return dump(normalized)+'\n'
  } finally {rmSync(directory,{recursive:true,force:true})}
}
