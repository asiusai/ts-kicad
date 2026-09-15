/** Native KiCad documentation and fabrication exports, shared by all projects. */
import { existsSync, mkdirSync, readFileSync, readdirSync, copyFileSync, statSync, writeFileSync, renameSync, unlinkSync } from 'node:fs'
import { basename, dirname, join, resolve, extname } from 'node:path'
import { cli, readNetlist, run, withTemp, type Xml } from './kicad_io'
import { child, children, descendants, parse, val, type Node } from './kicad_sexpr'
import { checkErc, checkDrc } from './checks'

const order=(a:string,b:string)=>a.localeCompare(b,undefined,{numeric:true})
export const csv=(rows:string[][])=>rows.map(row=>row.map(s=>'"'+s.replaceAll('"','""')+'"').join(',')).join('\n')+'\n'
export function parseCsv(source:string) {
  const rows:string[][]=[],row:string[]=[];let field='',quoted=false
  for(let i=0;i<source.length;i++){
    const c=source[i]
    if(c==='"'){if(quoted&&source[i+1]==='"'){field+='"';i++}else quoted=!quoted}
    else if(!quoted&&(c===','||c==='\n')){row.push(field.replace(/\r$/,''));field='';if(c==='\n'){rows.push([...row]);row.length=0}}
    else field+=c
  }
  if(quoted)throw new Error('Unterminated CSV field')
  if(field||row.length){row.push(field);rows.push(row)}return rows
}
export type Part={ref:string;value:string;props:Record<string,string>;dnp:boolean;inBom:boolean;onBoard:boolean}
/** Convert native KiCad placement angles to JLC's component-side view. */
export function jlcPositionRows(source:string,parts:Part[]){
  const [header,...rows]=parseCsv(source)
  const indices=['Ref','PosX','PosY','Rot','Side'].map(name=>header?.indexOf(name)??-1)
  if(indices.some(index=>index<0))throw new Error('Incomplete KiCad position CSV header')
  const [ref,,,rotation,side]=indices,refs=new Set(parts.filter(p=>p.inBom&&p.onBoard&&!p.dnp).map(p=>p.ref))
  const names:Record<string,string>={Ref:'Designator',PosX:'Mid X',PosY:'Mid Y',Rot:'Rotation',Side:'Layer'}
  return [header.map(h=>names[h]??h),...rows.filter(row=>refs.has(row[ref])).map(row=>{
    const layer=row[side]?.toLowerCase(),angle=Number(row[rotation])
    if(!['top','bottom'].includes(layer)||!row[rotation]?.trim()||!Number.isFinite(angle))throw new Error('Invalid KiCad placement for '+row[ref])
    // Matches Fabrication Toolkit's bottom-side conversion. Footprint-specific
    // zero-angle differences still require review against JLC's part preview.
    // https://github.com/bennymeg/Fabrication-Toolkit/blob/master/plugins/process.py
    const converted=layer==='bottom'?180-angle:angle
    row[rotation]=(((converted%360)+360)%360).toFixed(6)
    row[side]=layer==='bottom'?'B':'T'
    return row
  })]
}
export function partsFromNetlist(tree:Xml):Part[]{
  return tree.all('components/comp').filter(c=>!c.get('ref').startsWith('#')).map(c=>{
    const props=Object.fromEntries([...c.all('fields/field').map(f=>[f.get('name'),f.text]),...c.all('property').map(f=>[f.get('name'),f.get('value')])])
    props.Footprint=c.value('footprint');props.Datasheet=c.value('datasheet')
    return {ref:c.get('ref'),value:c.value('value'),props,dnp:Object.hasOwn(props,'dnp'),inBom:!Object.hasOwn(props,'exclude_from_bom'),onBoard:!Object.hasOwn(props,'exclude_from_board')}
  }).sort((a,b)=>order(a.ref,b.ref))
}
export function bomRows(parts:Part[]) {
  const grouped=new Map<string,{refs:string[];fields:Set<string>[]}>()
  for(const part of parts.filter(p=>p.inBom).sort((a,b)=>order(a.ref,b.ref))){
    const p=part.props
    const flags=[part.dnp?'DNP':'','',''+(part.onBoard?'':'Exclude from Board')]
    const lcsc=(p['JLCPCB Part #']?.trim()||p['LCSC Part']?.trim()||'').toUpperCase()
    const fields=[part.value,...flags,p['MFR.Part #']??p.MPN??'',p.Manufacturer??'',lcsc,p.Footprint??'',p.Datasheet??'']
    // One purchase line per assigned part, even when value labels or footprint
    // aliases differ. Keep population variants and unassigned parts separate.
    const key=JSON.stringify(lcsc?['lcsc',lcsc,...flags]:['fields',...fields])
    let group=grouped.get(key)
    if(!group){group={refs:[],fields:fields.map(()=>new Set<string>())};grouped.set(key,group)}
    group.refs.push(part.ref)
    fields.forEach((value,index)=>{if(value)group.fields[index].add(value)})
  }
  return [['Designator','Qty','Comment','DNP','Exclude from BOM','Exclude from Board','MFR.Part #','Manufacturer','LCSC Part #','Footprint','Datasheet'],...[...grouped.values()].map(({refs,fields})=>[refs.join(','),String(refs.length),...fields.map(values=>[...values].join('; '))]).sort((a,b)=>order(a[0],b[0]))]
}
export function writeDocs(schematic:string,output:string){
  const tree=readNetlist(schematic),parts=partsFromNetlist(tree);mkdirSync(output,{recursive:true})
  writeFileSync(join(output,'BOM.csv'),csv(bomRows(parts)))
  run(['kicad-cli','sch','export','pdf','--output',join(output,basename(schematic,'.kicad_sch')+'.pdf'),schematic])
  console.log('Wrote BOM and schematic PDF to '+output);return parts
}
const prop=(fp:Node,name:string)=>val(children(fp,'property').find(p=>val(p[1])===name)?.[2])||val(children(fp,'fp_text').find(p=>val(p[1])===name.toLowerCase())?.[2])
export function checkPopulation(board:Node,parts:Part[]){
  const expected=parts.filter(p=>p.inBom&&p.onBoard&&!p.dnp).map(p=>p.ref).sort(order)
  const actual=children(board,'footprint').concat(children(board,'module')).filter(fp=>!child(fp,'attr').slice(1).some(a=>['dnp','exclude_from_bom','board_only'].includes(val(a)))).map(fp=>prop(fp,'Reference')).sort(order)
  if(JSON.stringify(expected)!==JSON.stringify(actual))console.error('BOM/PCB population mismatch. Missing: '+expected.filter(r=>!actual.includes(r)).join(', ')+'. Extra: '+actual.filter(r=>!expected.includes(r)).join(', ')+'. Continuing export.')
}
export function manufacturingLayers(board:Node){
  const used=new Set([...descendants(board,'layer')].map(n=>val(n[1])))
  return child(board,'layers').filter((n):n is Node=>Array.isArray(n)).flatMap(n=>{
    const name=val(n[1]),alias=val(n[3]);if(name.endsWith('.Cu')||['F.Mask','B.Mask','F.SilkS','B.SilkS','F.Paste','B.Paste','Edge.Cuts'].includes(name))return[name]
    return used.has(name)&&/^(pit|pib|fr4t|fr4b|gpt|gpb|pst|psb)_\d+(?:\.\d+)?$/.test(alias)?[alias]:[]
  })
}
export const isFabricationFile=(file:string)=>/\.(gbr|gbrjob|drl|gtl|gbl|gts|gbs|gto|gbo|gtp|gbp|gko|gml|g\d+|gm\d+)$/i.test(file)
function mechanical(board:string,output:string){
  const tree=parse(readFileSync(board,'utf8')),xs:number[]=[],ys:number[]=[]
  for(const graphic of tree.filter((n):n is Node=>Array.isArray(n)&&val(n[0]).startsWith('gr_')&&val(child(n,'layer')[1])==='Edge.Cuts')){
    for(const tag of ['start','end','mid','xy'])for(const point of descendants(graphic,tag)){xs.push(Number(val(point[1])));ys.push(Number(val(point[2])))}
    if(val(graphic[0])==='gr_circle'){
      const c=child(graphic,'center'),e=child(graphic,'end'),x=Number(val(c[1])),y=Number(val(c[2])),radius=Math.hypot(Number(val(e[1]))-x,Number(val(e[2]))-y)
      xs.push(x-radius,x+radius);ys.push(y-radius,y+radius)
    }
  }
  const origin=xs.length?['--user-origin',((Math.min(...xs)+Math.max(...xs))/2)+'x'+((Math.min(...ys)+Math.max(...ys))/2)+'mm']:[]
  for(const type of ['step','stl'])run(['kicad-cli','pcb','export',type,'--force',...(type==='step'?['--subst-models']:['--board-only']),'--output',join(output,basename(board,'.kicad_pcb')+'.'+type),...(type==='stl'?origin:[]),board])
}
export function fabricate(boardPath:string,output:string,parts:Part[]){
  const board=parse(readFileSync(boardPath,'utf8')),name=basename(boardPath,'.kicad_pcb');mkdirSync(output,{recursive:true})
  checkPopulation(board,parts)
  checkDrc(boardPath,join(output,name+'-drc.json'))
  // Stage all manufacturing outputs so failed exports leave the previous release intact.
  withTemp(stage=>{
    const layers=manufacturingLayers(board),gerbers=join(stage,'gerbers')
    mkdirSync(gerbers)
    run(['kicad-cli','pcb','export','gerbers','--no-protel-ext','--output',gerbers+'/','--layers',layers.join(','),'--check-zones',boardPath])
    const job=join(gerbers,name+'-job.gbrjob');let jobText=existsSync(job)?readFileSync(job,'utf8'):''
    for(const layer of layers){const m=/^(pit|pib|fr4t|fr4b|gpt|gpb)_(\d+(?:\.\d+)?)$/.exec(layer);if(!m)continue
      const old=name+'-'+layer.replace(/[^A-Za-z0-9_+-]/g,'_')+'.gbr',dest=m[1]+'_'+Number(m[2])+'.gbr'
      if(existsSync(join(gerbers,old))){renameSync(join(gerbers,old),join(gerbers,dest));jobText=jobText.replaceAll(old,dest)}
    }
    if(jobText)writeFileSync(job,jobText)
    run(['kicad-cli','pcb','export','drill','--output',gerbers+'/','--format','excellon','--excellon-units','mm','--excellon-zeros-format','decimal','--excellon-oval-format','alternate','--excellon-separate-th',boardPath])
    // KiCad 10 emits via filling/capping artwork only through its Gerber drill
    // writer. Keep the Excellon drills and copy just the treatment layers.
    const treatment=join(stage,'via-treatment');mkdirSync(treatment)
    run(['kicad-cli','pcb','export','drill','--output',treatment+'/','--format','gerber',boardPath])
    for(const file of readdirSync(treatment))if(/-(?:filling|capping|plugging|covering)-.*\.gbr$/i.test(file))copyFileSync(join(treatment,file),join(gerbers,file))
    const positions=join(stage,'pos.csv');run(['kicad-cli','pcb','export','pos','--output',positions,'--side','both','--format','csv','--units','mm','--exclude-dnp','--use-drill-file-origin',boardPath])
    writeFileSync(positions,csv(jlcPositionRows(readFileSync(positions,'utf8'),parts)))
    mechanical(boardPath,stage)
    const notes=join(dirname(boardPath),'fabrication.md'),releaseNotes=join(stage,'fabrication.md')
    if(existsSync(notes))copyFileSync(notes,releaseNotes)
    const zip=join(stage,name+'-gerbers.zip'),files=readdirSync(gerbers).filter(isFabricationFile)
    run(['zip','-j',zip,...files.map(f=>join(gerbers,f)),...existsSync(releaseNotes)?[releaseNotes]:[]])
    for(const file of readdirSync(output))if(isFabricationFile(file)||[name+'-gerbers.zip',name+'-all-pos.csv',name+'-pos.csv',name+'.step',name+'.stl'].includes(file))unlinkSync(join(output,file))
    const destination=join(output,'gerbers')
    mkdirSync(destination,{recursive:true})
    for(const file of readdirSync(destination))if(isFabricationFile(file))unlinkSync(join(destination,file))
    for(const file of files)copyFileSync(join(gerbers,file),join(destination,file))
    for(const file of readdirSync(stage))if(statSync(join(stage,file)).isFile())copyFileSync(join(stage,file),join(output,file))
  })
  console.log('Fabrication outputs written to '+output)
}
export async function main(args:string[]){
  const {positionals,values}=cli({output:{type:'string'}},args)
  if(positionals.length>1)throw new Error('Usage: ts-kicad export [project-directory|board.kicad_sch|board.kicad_pcb] [--output directory]')
  let target=resolve(positionals[0]??'.')
  if(statSync(target).isDirectory()){
    const files=readdirSync(target),projects=files.filter(f=>f.endsWith('.kicad_pro')),schs=files.filter(f=>f.endsWith('.kicad_sch'))
    const file=projects.length===1?projects[0].replace(/\.kicad_pro$/,'.kicad_sch'):schs.length===1?schs[0]:undefined
    if(!file)throw new Error('Ambiguous project directory; specify the root schematic.');target=join(target,file)
  }
  if(!['.kicad_sch','.kicad_pcb'].includes(extname(target)))throw new Error('Expected a KiCad schematic or PCB')
  const schematic=target.replace(/\.kicad_pcb$/,'.kicad_sch'),board=schematic.replace(/\.kicad_sch$/,'.kicad_pcb'),output=resolve(values.output as string??join(dirname(target),'outputs'))
  mkdirSync(output,{recursive:true})
  checkErc(schematic,join(output,basename(schematic,'.kicad_sch')+'-erc.json'))
  const parts=writeDocs(schematic,output)
  if(existsSync(board))fabricate(board,output,parts)
}
