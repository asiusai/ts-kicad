/** Generate KiCad schematics from an executed TypeScript circuit graph. */
import { planNetLabels } from './net_labels'
import { symbolProperty, symbolDirectory, symbolPins } from './symbol_library'
import { prepareProject, uuid, type ProjectOptions } from './project_files'
import { assignReferences, isPassiveSymbol } from './index'
import { existsSync, mkdirSync, writeFileSync, readdirSync, readFileSync, rmSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { createHash } from 'node:crypto'
import assert from 'node:assert/strict'
import { atom as A, node as N, num, child, children, descendants, remove, clone, dump, parse, val, type Node } from './kicad_sexpr'
import { inspect, readNetlist, type ModelPart, type ModelPin } from './kicad_io'
import { loadSymbols, pinGeometry, snap } from './kicad_geometry'
import { bounds, layoutGroup, packGroups, type Card, type LayoutMode } from './schematic_layout'

function uid(key:string){const hex=createHash('sha1').update('ts-kicad/'+key).digest('hex').slice(0,32).split('');hex[12]='5';hex[16]=((parseInt(hex[16],16)&3)|8).toString(16);const s=hex.join('');return `${s.slice(0,8)}-${s.slice(8,12)}-${s.slice(12,16)}-${s.slice(16,20)}-${s.slice(20)}`}
const at=(x:number,y:number,angle=0)=>N('at',num(x),num(y),num(angle))
function effects(size=1,justify?:string,hide=false){const n=N('effects',N('font',N('size',num(size),num(size))));if(justify)n.push(N('justify',A(justify)));if(hide)n.push(N('hide',A('yes')));return n}
function text(text:string,x:number,y:number,key:string,size=1.2){return N('text',text,at(x,y),effects(size,'left'),N('uuid',uid(key)))}
function wire(x1:number,y1:number,x2:number,y2:number,key:string){return N('wire',N('pts',N('xy',num(snap(x1)),num(snap(y1))),N('xy',num(snap(x2)),num(snap(y2)))),N('stroke',N('width',num(0)),N('type',A('default'))),N('uuid',uid(key)))}
function label(name:string,x:number,y:number,angle:number,key:string,scope:'local'|'global'){return N(scope==='global'?'global_label':'label',name,...(scope==='global'?[N('shape',A('input'))]:[]),at(snap(x),snap(y),angle),effects(1,angle===0||angle===90?'left':'right'),N('uuid',uid(key)))}
function createSheet(id:string,libs:Node[],width:number,height:number,title:string){return N('kicad_sch',N('version',A('20260306')),N('generator',A('ts_kicad')),N('uuid',id),N('paper','User',num(width),num(height)),N('title_block',N('title',title),N('comment',A('1'),'Generated from TypeScript circuit code')),N('lib_symbols',...libs.map(clone)))}
function instance(card:Card,x:number,y:number,ref:string,sheetPath:string,project:string,key:string):Node {
  const item=card.item,result=clone(card.template),old=child(result,'at'),ox=Number(val(old[1])),oy=Number(val(old[2]))
  for(const pos of descendants(result,'at')){pos[1]=num(Number(val(pos[1]))+x-ox);pos[2]=num(Number(val(pos[2]))+y-oy)}
  child(result,'at')[1]=num(x);child(result,'at')[2]=num(y)
  let i=0;for(const n of descendants(result,'uuid'))n[1]=uid(key+'/uuid/'+i++)
  remove(result,'instances','property','pin','in_bom','on_board','dnp','fields_autoplaced')
  child(result,'uuid')[1]=uuid('symbol/'+ref+'/unit/'+card.unit)
  const props=item.properties
  result.push(N('in_bom',A(Object.hasOwn(props,'exclude_from_bom')?'no':'yes')),N('on_board',A(Object.hasOwn(props,'exclude_from_board')?'no':'yes')),N('dnp',A(Object.hasOwn(props,'dnp')?'yes':'no')))
  const fields:Record<string,string|null>={...props,Reference:ref,Value:item.value,Footprint:item.footprint,Datasheet:item.datasheet}
  for(const [name,value]of Object.entries(fields)){
    const reference=name==='Reference',visible=reference||name==='Value'
    const px=x,py=card.sideFields?y+(reference?-10:-7.5):y+card.box.top+(reference?2:4.5)
    result.push(N('property',name,value??'',at(px,py,Number(val(child(card.template,'at')[3]))%180),effects(reference?1.27:1,undefined,!visible)))
  }
  for(const p of item.pins)result.push(N('pin',p.number,N('uuid',uid(key+'/pin/'+p.number))))
  result.push(N('instances',N('project',project,N('path',sheetPath,N('reference',ref),N('unit',A(card.unit))))))
  return result
}
export function verifyExport(output:string,items:ModelPart[],refs:Map<string,string>){
  items=items.filter(item=>!refs.get(item.name)!.startsWith('#'))
  const physical=new Set(items.map(item=>item.name))
  const tree=readNetlist(output),actual=new Map(tree.all('components/comp').map(c=>[c.get('ref'),c]))
  assert.deepEqual([...actual.keys()].sort(),items.map(item=>refs.get(item.name)!).sort(),'Exported components')
  const pins=new Map<string,{members:string[];nc:boolean;name:string}>()
  for(const net of tree.all('nets/net')){const nodes=net.all('node'),members=nodes.map(n=>n.get('ref')+'.'+n.get('pin')).sort();for(const n of nodes)pins.set(n.get('ref')+'.'+n.get('pin'),{members,nc:n.get('pintype').includes('no_connect'),name:net.get('name').replace(/^\/+/,'')})}
  const expected=new Set<string>()
  for(const item of items){
    const ref=refs.get(item.name)!,comp=actual.get(ref)!
    for(const field of ['value','footprint','datasheet']as const){const normalize=(s:string)=>field==='datasheet'&&s==='~'?'':s;assert.equal(normalize(comp.value(field)),normalize(item[field]),ref+' '+field)}
    const props=Object.fromEntries(comp.all('property').map(p=>[p.get('name'),p.get('value')]))
    for(const field of ['Manufacturer','MFR.Part #','JLCPCB Part #'])assert.equal(props[field]??'',item.properties[field]??'',ref+' '+field)
    for(const pin of item.pins){const key=ref+'.'+pin.number;expected.add(key);const got=pins.get(key);assert.ok(got,'Missing '+key);assert.deepEqual(got.members,pin.members.filter(m=>physical.has(m.component)).map(m=>refs.get(m.component)+'.'+m.number).sort(),key);assert.equal(got.nc,pin.noConnect,key+' NC');if(pin.labels?.some(l=>l.scope==='global'))assert.ok(pin.labels.some(l=>l.scope==='global'&&l.name===got.name),key+' global net name')}
  }
  assert.deepEqual([...pins.keys()].sort(),[...expected].sort())
  console.log(`PASS: exported KiCad matches code: ${items.length} components, ${expected.size} pins, ${tree.all('nets/net').length} nets.`)
}
export async function exportSchematic(entry:string|string[],output:string,sources:string[],options:ProjectOptions & {layout?:LayoutMode}={}){
  options.project ??= sources.filter(path=>path.endsWith('.kicad_sch')).map(path=>path.replace(/\.kicad_sch$/,'.kicad_pro')).find(existsSync)
  const items=inspect(entry),{libraries,templates}=loadSymbols([...new Set([...sources,...items.flatMap(item=>item.symbolSource?[item.symbolSource]:[])])], [...items.map(item => item.schema),...items.flatMap(p=>p.pins.flatMap(pin=>pin.labels?.flatMap(l=>l.powerSymbol?[l.powerSymbol]:[])??[]))]),project=basename(output,'.kicad_sch'),rootId=uid(project+'/root')
  for (const item of items) if (!item.datasheet) item.datasheet = symbolProperty(libraries.get(item.schema)!, 'Datasheet')
  for (const item of items) {
    const source=join(symbolDirectory(),item.schema.split(':')[0]+'.kicad_sym')
    if(!item.symbolSource&&existsSync(source))item.symbolSource=source
  }
  // Overrides get their own project-local symbol identity, leaving builtins unchanged.
  for (const item of items) {
    if (!item.pinTypes || !Object.keys(item.pinTypes).length) continue
    const nativeTypes = new Map(symbolPins(libraries.get(item.schema)!).map(pin => [val(child(pin, 'number')[1]), val(pin[1])]))
    const pinTypes = Object.fromEntries(Object.entries(item.pinTypes).filter(([number, type]) => nativeTypes.get(number) !== type))
    if (!Object.keys(pinTypes).length) continue
    const original = item.schema, suffix = createHash('sha256').update(JSON.stringify(pinTypes)).digest('hex').slice(0,8)
    const key = 'overrides:' + original.replace(':', '__') + '__' + suffix, lib = clone(libraries.get(original)!)
    lib[1] = key
    for (const unit of children(lib, 'symbol')) {
      unit[1] = key.split(':')[1] + (val(unit[1]).match(/(_\d+_\d+)$/)?.[1] ?? '')
      for (const pin of children(unit, 'pin')) { const type = pinTypes[val(child(pin,'number')[1])]; if(type) pin[1] = A(type) }
    }
    const units = new Map([...templates.get(original)!].map(([unit, template]) => { const t=clone(template); child(t,'lib_id')[1]=key; return [unit,t] as const }))
    libraries.set(key,lib);templates.set(key,units);item.schema=key;item.symbolSource=undefined
  }
  const refs=assignReferences(items.map(item => [item.name, item] as const))
  const sections=new Map<string,ModelPart[]>(),netLabel=planNetLabels(items)
  const netName=(pin:ModelPin)=>netLabel(pin).name
  const powerSchemas=[...new Set(items.flatMap(p=>p.pins.filter(pin=>!pin.noConnect).flatMap(pin=>netLabel(pin).powerSymbol?[netLabel(pin).powerSymbol!]:[])))]
  let powerIndex=0
  for(const item of items)sections.set(item.sheet,[...sections.get(item.sheet)??[],item])
  const outputs:{sheet:string;filename:string;id:string;tree:Node}[]=[],filenames=new Set<string>()
  let root:Node|undefined,sheetStart=42
  for(const [sheet,parts]of sections){
    const id=sheet?uid(project+'/'+sheet):rootId,filename=sheet?project+'--'+sheet.replace(/[^A-Za-z0-9_-]/g,'_')+'.kicad_sch':basename(output)
    const sheetPath='/'+rootId+(sheet?'/'+id:'')
    if(sheet){if(filenames.has(filename))throw new Error('Section filename collision: '+sheet);filenames.add(filename)}
    const groups=new Map<string,Card[]>()
    for(const item of parts){
      const lib=libraries.get(item.schema),units=templates.get(item.schema);if(!lib||!units?.size)throw new Error('Missing cached symbol geometry: '+item.schema)
      const labels=Object.fromEntries(item.pins.filter(p=>!p.noConnect).map(p=>[p.number,netName(p)]))
      const exportedPins=new Set<string>()
      for(const [unit,source]of [...units].sort(([a],[b])=>a-b)){
        const template=clone(source)
        if(isPassiveSymbol(item.schema)){child(template,'at')[3]=num(90);remove(template,'mirror')}
        const geometry=pinGeometry(lib,template);geometry.forEach(p=>exportedPins.add(p.number))
        const card:Card={item,unit,template,lib,geometry,labels,box:bounds(geometry,labels)},group=item.group??item.name.split('.')[0]
        groups.set(group,[...groups.get(group)??[],card])
      }
      assert.deepEqual([...exportedPins].sort(),item.pins.map(p=>p.number).sort(),'Model/library pin mismatch: '+item.name)
    }
    const layouts=await Promise.all([...groups].map(([name,cards])=>layoutGroup(name,cards,options.layout)))
    const packed=await packGroups(layouts),width=Math.max(297,packed.width+32),height=Math.max(210,packed.height+90)
    const used=[...new Set([...parts.map(p=>p.schema),...powerSchemas])].sort().map(id=>libraries.get(id)!)
    const drawing=createSheet(id,used,width,height,sheet||project)
    drawing.push(text(sheet||project,15,18,id+'/title',2.54))
    const labelsByName=new Map(parts.flatMap(p=>p.pins.filter(pin=>!pin.noConnect).map(pin=>[netName(pin),netLabel(pin)] as const)))
    const drawLabel=(name:string,x:number,y:number,angle:number,key:string)=>{
      const spec=labelsByName.get(name)!
      if(!spec.powerSymbol)return label(name,x,y,angle,key,spec.scope)
      let ref:string;do{ref='#PWR'+String(++powerIndex).padStart(4,'0')}while([...refs.values()].includes(ref))
      const ground=name.startsWith('GND'),symbolId=uid(key+'/power')
      return N('symbol',N('lib_id',spec.powerSymbol),at(snap(x),snap(y)),N('unit',A(1)),N('in_bom',A('no')),N('on_board',A('no')),N('dnp',A('no')),N('uuid',symbolId),
        N('property','Reference',ref,at(x,y-5),effects(1,undefined,true)),
        N('property','Value',name,at(x,y+(ground?3.81:-3.81)),effects(1)),
        N('pin','1',N('uuid',uid(key+'/power-pin'))),
        N('instances',N('project',project,N('path',sheetPath,N('reference',ref),N('unit',A(1))))))
    }
    for(const {group:g,x:gx,y:gy}of packed.groups){
      const x=snap(gx+15),y=snap(gy+30),groupStart=drawing.length
      drawing.push(N('rectangle',N('start',num(x),num(y)),N('end',num(x+g.width),num(y+g.height)),N('stroke',N('width',num(.254)),N('type',A('default'))),N('fill',N('type',A('none'))),N('uuid',uid(id+'/'+g.name+'/outline'))))
      drawing.push(text(g.name,x+3,y+4,id+'/'+g.name+'/title',1.4))
      for(const p of g.parts){
        const card=p.card,px=snap(x+p.x),py=snap(y+p.y),key=project+'/'+card.item.name+'/'+card.unit
        drawing.push(instance(card,px,py,refs.get(card.item.name)!,sheetPath,project,key))
        for(const pin of card.geometry){
          const modelPin=card.item.pins.find(p=>p.number===pin.number)!,ax=snap(px+pin.x),ay=snap(py+pin.y)
          if(modelPin.noConnect){drawing.push(N('no_connect',N('at',num(ax),num(ay)),N('uuid',uid(key+'/nc/'+pin.number))));continue}
          if(card.suppress?.has(pin.number))continue
          const ex=snap(ax+pin.dx*3.81),ey=snap(ay+pin.dy*3.81),angle=(Math.round(Math.atan2(-pin.dy,pin.dx)*180/Math.PI)+360)%360
          const w=wire(ax,ay,ex,ey,key+'/wire/'+pin.number),l=drawLabel(card.labels[pin.number],ex,ey,angle,key+'/label/'+pin.number)
          drawing.push(w,l)
        }
      }
      for(const [i,w]of g.wires.entries())drawing.push(wire(x+w.a.x,y+w.a.y,x+w.b.x,y+w.b.y,id+'/'+g.name+'/bank-wire/'+i))
      for(const [i,l]of g.labels.entries())drawing.push(drawLabel(l.text,x+l.x,y+l.y,l.angle,id+'/'+g.name+'/bank-label/'+i))
      const junctions=new Set<string>()
      for(const p of g.junctions){const key=snap(x+p.x)+','+snap(y+p.y);if(junctions.has(key))continue;junctions.add(key);drawing.push(N('junction',N('at',num(snap(x+p.x)),num(snap(y+p.y))),N('diameter',num(0)),N('color',A(0),A(0),A(0),A(0)),N('uuid',uid(id+'/'+g.name+'/junction/'+key))))}
      for(const [i,n]of g.notes.entries())drawing.push(text(n.text,x+n.x,y+n.y,id+'/'+g.name+'/note/'+i,1.1))
      drawing.push(N('group',g.name,N('uuid',uid(project+'/'+g.name+'/group')),N('members',...drawing.slice(groupStart).filter((n): n is Node=>Array.isArray(n)).map(n=>val(child(n,'uuid')[1])).filter(Boolean))))
    }
    if(sheet)outputs.push({sheet,filename,id,tree:drawing})
    else{root=drawing;sheetStart=snap(packed.height+50)}
  }
  if(!root){
    root=createSheet(rootId,[],297,210,project)
    root.push(text(project.toUpperCase(),15,16,project+'/title',3))
  }
  if(outputs.length){
    const paper=child(root,'paper')
    paper[3]=num(Math.max(Number(val(paper[3])),sheetStart+Math.ceil(outputs.length/3)*36+35))
  }
  for(const [i,s]of outputs.entries()){
    const x=18+i%3*88,y=sheetStart+Math.floor(i/3)*36
    root.push(N('sheet',N('at',num(x),num(y)),N('size',num(76),num(23)),N('stroke',N('width',num(.254)),N('type',A('default'))),N('fill',N('color',A(0),A(0),A(0),A(0))),N('uuid',s.id),N('property','Sheetname',s.sheet,at(x,y-2),effects(1.27,'left')),N('property','Sheetfile',s.filename,at(x,y+25),effects(1,'left')),N('instances',N('project',project,N('path','/'+rootId,N('page',String(i+2)))))))
  }
  root.push(N('sheet_instances',N('path','/',N('page','1'))))
  mkdirSync(dirname(output),{recursive:true})
  for(const s of outputs)writeFileSync(join(dirname(output),s.filename),dump(s.tree)+'\n')
  writeFileSync(output,dump(root)+'\n')
  console.log(`Exported ${items.length} components to ${output}${outputs.length?` with ${outputs.length} subsheets`:''}`)
  prepareProject(output,items,libraries,options)
  verifyExport(output,items,refs)
  for(const filename of readdirSync(dirname(output))){
    if(!filename.startsWith(project+'--')||!filename.endsWith('.kicad_sch')||filenames.has(filename))continue
    const path=join(dirname(output),filename),tree=parse(readFileSync(path,'utf8'))
    if(val(child(tree,'generator')[1])==='ts_kicad')rmSync(path)
  }
}
