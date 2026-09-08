import { createHash } from 'node:crypto'
import type { ModelPart, ModelPin } from './kicad_io'

export type NetLabel = {name:string;scope:'local'|'global';powerSymbol?:string}
/** Decide how each electrical net crosses sheet boundaries, without merging local names. */
export function planNetLabels(items:ModelPart[]) {
  const parts=new Map(items.map(p=>[p.name,p])),plans=new Map<string,NetLabel>()
  const key=(pin:ModelPin)=>pin.members.map(m=>m.component+'.'+m.number).sort().join('|')
  const names=new Set(items.flatMap(p=>p.pins.flatMap(pin=>pin.netNames)))
  for(const part of items)for(const pin of part.pins){
    if(pin.noConnect||plans.has(key(pin)))continue
    const labels=pin.labels??[],sheets=new Set(pin.members.map(m=>parts.get(m.component)!.sheet))
    const globalNames=new Set(labels.filter(l=>l.scope==='global').map(l=>l.name))
    if(globalNames.size>1)throw new Error('Connected net has conflicting global labels or power rails: '+[...globalNames].join(', '))
    const power=labels.find(l=>l.powerSymbol),explicit=labels.filter(l=>l.scope==='global').sort((a,b)=>a.name.localeCompare(b.name))[0]
    if(power){plans.set(key(pin),{name:power.name,scope:'global',powerSymbol:power.powerSymbol});continue}
    if(explicit){plans.set(key(pin),{name:explicit.name,scope:'global'});continue}
    if(sheets.size===1&&labels.length&&!pin.netScopes?.includes('global')){plans.set(key(pin),{name:labels.map(l=>l.name).sort()[0],scope:'local'});continue}
    // Direct references across sheets need a globally unique bridge even without an explicit label.
    let name='N_'+createHash('sha256').update(key(pin)).digest('hex').slice(0,10)
    while(names.has(name))name+='_' // Never collide with a user-selected label.
    names.add(name);plans.set(key(pin),{name,scope:sheets.size>1||pin.netScopes?.includes('global')?'global':'local'})
  }
  return (pin:ModelPin)=>plans.get(key(pin))!
}
