import type { JsonValue } from './index'
import { clone, val, type Node } from './kicad_sexpr'

/** Objects merge recursively; lists replace, with named entries inheriting matching defaults. */
export function mergeSettings(base: Record<string, JsonValue>, overrides: Record<string, JsonValue>): Record<string, JsonValue> {
  const result=structuredClone(base)
  for(const [key,value] of Object.entries(overrides)) {
    const previous=result[key]
    if(Array.isArray(value)){
      result[key]=value.map(entry=>{
        if(!entry||typeof entry!=='object'||Array.isArray(entry)||typeof entry.name!=='string')return structuredClone(entry)
        const match=Array.isArray(previous)?previous.find(item=>item&&typeof item==='object'&&!Array.isArray(item)&&item.name===entry.name):undefined
        return mergeSettings(match as Record<string,JsonValue>??{},entry)
      })
      continue
    }
    result[key]=value && typeof value==='object' && !Array.isArray(value)
      ? mergeSettings(previous && typeof previous==='object' && !Array.isArray(previous)?previous:{},value)
      : structuredClone(value)
  }
  return result
}

/** Native setup sections merge by tag; stackup layers additionally use their name. */
export function mergeSetup(base:Node, overrides:Node):Node {
  const result=clone(base)
  for(const value of overrides.slice(1)) {
    if(!Array.isArray(value))continue
    const tag=val(value[0])
    const index=result.findIndex(entry=>Array.isArray(entry)&&val(entry[0])===tag&&(tag!=='layer'||val(entry[1])===val(value[1])))
    if(index<0){result.push(clone(value));continue}
    const previous=result[index] as Node
    result[index]=value.slice(1).some(Array.isArray)?mergeSetup(previous,value):clone(value)
  }
  return result
}
