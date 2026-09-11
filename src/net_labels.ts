import { assignReferences } from './index'
import type { ModelPart, ModelPin } from './kicad_io'

export type NetLabel = {name:string;scope:'local'|'global';powerSymbol?:string}

function unnamedNetName(pin:ModelPin,parts:Map<string,ModelPart>,refs:Map<string,string>) {
  const candidates=pin.members.map(member=>{
    const part=parts.get(member.component)!,p=part.pins.find(p=>p.number===member.number)!
    const named=!!p.name&&p.name!=='~'&&p.name!==p.number&&p.name!=='P'+p.number&&/[a-z]/i.test(p.name)
    const name=named?p.name:'Pad'+p.number
    return {ref:refs.get(member.component)!,number:p.number,named,name:name.replace(/[\s/()]+/g,'_')}
  })
  const compare=(a:string,b:string)=>a.localeCompare(b,'en',{numeric:true})
  candidates.sort((a,b)=>Number(b.named)-Number(a.named)||compare(a.ref,b.ref)||compare(a.number,b.number))
  const chosen=candidates[0]
  return `Net-(${chosen.ref}-${chosen.name})`
}

/** Decide how each electrical net crosses sheet boundaries, without merging local names. */
export function planNetLabels(items:ModelPart[]) {
  const parts=new Map(items.map(p=>[p.name,p])),plans=new Map<string,NetLabel>()
  const refs=assignReferences(items.map(p=>[p.name,p] as const))
  const key=(pin:ModelPin)=>pin.members.map(m=>m.component+'.'+m.number).sort().join('|')
  const names=new Set(items.flatMap(p=>p.pins.flatMap(pin=>pin.netNames)))
  const nets=new Map(items.flatMap(part=>part.pins.filter(pin=>!pin.noConnect).map(pin=>[key(pin),pin] as const)))
  // Allocate collision suffixes in a stable order, independent of graph traversal.
  for(const [,pin] of [...nets].sort(([a],[b])=>a.localeCompare(b))){
    const labels=pin.labels??[],sheets=new Set(pin.members.map(m=>parts.get(m.component)!.sheet))
    const globalNames=new Set(labels.filter(l=>l.scope==='global').map(l=>l.name))
    if(globalNames.size>1)throw new Error('Connected net has conflicting global labels or power rails: '+[...globalNames].join(', '))
    const power=labels.find(l=>l.powerSymbol),explicit=labels.filter(l=>l.scope==='global').sort((a,b)=>a.name.localeCompare(b.name))[0]
    if(power){plans.set(key(pin),{name:power.name,scope:'global',powerSymbol:power.powerSymbol});continue}
    if(explicit){plans.set(key(pin),{name:explicit.name,scope:'global'});continue}
    if(sheets.size===1&&labels.length&&!pin.netScopes?.includes('global')){plans.set(key(pin),{name:labels.map(l=>l.name).sort()[0],scope:'local'});continue}
    // Match KiCad's component/pin style for generated local labels and cross-sheet bridges.
    const base=unnamedNetName(pin,parts,refs)
    let name=base,suffix=2
    while(names.has(name))name=base+'_'+suffix++ // Never merge with an explicit label or another net.
    names.add(name);plans.set(key(pin),{name,scope:sheets.size>1||pin.netScopes?.includes('global')?'global':'local'})
  }
  return (pin:ModelPin)=>plans.get(key(pin))!
}
