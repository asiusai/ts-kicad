import type { JsonValue } from './index'

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
