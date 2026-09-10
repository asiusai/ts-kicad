import type { ProjectSettings } from './index'
import { defaultSettings } from './project_defaults'
import { mergeSettings } from './merge_settings'
import { validateFootprintPads } from './footprint'
import { footprintMetadata } from './internal-footprints'
import { symbolDirectory } from './symbol_library'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, resolve, relative } from 'node:path'
import { createHash } from 'node:crypto'
import { atom as A, node as N, child, children, clone, dump, parse, val, type Node } from './kicad_sexpr'
import { type ModelPart } from './kicad_io'

export type ProjectOptions = { footprints?: string[]; project?: string } & Pick<ProjectSettings, 'settings'>
export function uuid(key: string) {
  const h = createHash('sha256').update('ts-kicad/'+key).digest('hex')
  return `${h.slice(0,8)}-${h.slice(8,12)}-4${h.slice(13,16)}-a${h.slice(17,20)}-${h.slice(20,32)}`
}
const read = (path: string) => parse(readFileSync(path, 'utf8'))
const write = (path: string, tree: Node) => { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, dump(tree)+'\n') }

function libraryPath(path: string, projectDirectory: string) {
  return path.replace(/\$\{([^}]+)\}/g, (_, name) => name==='KIPRJMOD' ? projectDirectory : process.env[name] ?? '${'+name+'}')
}

function writeLibraryTable(path:string,tree:Node) {
  if(existsSync(path)){
    const previous=read(path)
    for(const lib of children(previous,'lib')){
      if(val(child(lib,'descr')[1]).startsWith('Generated project '))continue
      const name=val(child(lib,'name')[1]),current=children(tree,'lib').find(entry=>val(child(entry,'name')[1])===name)
      if(current){if(val(child(current,'uri')[1])!==val(child(lib,'uri')[1]))throw new Error('Conflicting project library: '+name);tree.splice(tree.indexOf(current),1,lib)}
      else tree.push(lib)
    }
  }
  write(path,tree)
}

/** Reference original libraries directly; only electrical symbol overrides need generated definitions. */
export function prepareProject(output: string, items: ModelPart[], libraries: Map<string, Node>, options: ProjectOptions) {
  const directory = dirname(resolve(output)), name = basename(output, '.kicad_sch')
  const groups = new Map<string, Node[]>()
  for (const schema of new Set([...items.map(p=>p.schema),...items.flatMap(p=>p.pins.flatMap(pin=>pin.labels?.flatMap(l=>l.powerSymbol?[l.powerSymbol]:[])??[]))])) {
    const [library, symbolName] = schema.split(':'), symbol = clone(libraries.get(schema)!)
    symbol[1] = symbolName
    groups.set(library, [...groups.get(library)??[], symbol])
  }
  const symbols = N('sym_lib_table', N('version', A(7)))
  for (const [library, definitions] of groups) {
    const members=items.filter(item=>item.schema.startsWith(library+':'))
    const sources=new Set(members.map(item=>item.symbolSource))
    const builtin=join(symbolDirectory(),library+'.kicad_sym')
    const source=members.length?(sources.size===1?[...sources][0]:undefined):(existsSync(builtin)?builtin:undefined)
    if(!source)write(join(directory,library+'.kicad_sym'), N('kicad_symbol_lib',N('version',A(20251024)),N('generator','ts_kicad'),...definitions))
    // KiCad 10 is required by sync. Stock symbols must resolve on the recipient's
    // installation, not through a checkout-depth-dependent path to our /usr.
    const uri = source === builtin ? '${KICAD10_SYMBOL_DIR}/'+library+'.kicad_sym'
      : source ? '${KIPRJMOD}/'+relative(directory,source) : '${KIPRJMOD}/'+library+'.kicad_sym'
    symbols.push(N('lib',N('name',library),N('type','KiCad'),N('uri',uri),N('options',''),N('descr','Generated project symbols')))
  }
  writeLibraryTable(join(directory,'sym-lib-table'), symbols)
  const footprintPaths = new Map<string,string>()
  for (const path of options.footprints??[]) footprintPaths.set(basename(path,'.pretty'),resolve(path))
  if (options.project) {
    const table = join(dirname(options.project),'fp-lib-table')
    if (existsSync(table)) for (const lib of children(read(table),'lib')) {
      const name=val(child(lib,'name')[1]);if(!footprintPaths.has(name))footprintPaths.set(name,libraryPath(val(child(lib,'uri')[1]),dirname(resolve(options.project))))
    }
  }
  const footprintRoots = [...Object.entries(process.env).filter(([key])=>/^KICAD\d*_FOOTPRINT_DIR$/.test(key)).map(([,v])=>v!),'/usr/share/kicad/footprints','/usr/local/share/kicad/footprints']
  const pads = new Map<string,string[]>(), directLibraries=new Map<string,string>()
  for (const item of items) {
    if (!item.footprint || Object.hasOwn(item.properties,'exclude_from_board') || item.ref?.startsWith('#')) continue
    if (pads.has(item.footprint)) continue
    const [library, footprintName] = item.footprint.split(':')
    if (!library || !footprintName || /[\\/]/.test(library+footprintName)) throw new Error('Invalid footprint: '+item.footprint)
    const root = footprintPaths.get(library) ?? footprintRoots.map(p=>join(p,library+'.pretty')).find(existsSync)
    const path = item.footprintSource ?? (root && join(root, footprintName+'.kicad_mod'))
    if (!path || !existsSync(path)) throw new Error('Footprint not found: '+item.footprint+'. Set Project.footprints to its .pretty directory or use a footprint with a native file.')
    const previous=directLibraries.get(library)
    if(previous&&previous!==dirname(path))throw new Error('Conflicting footprint library paths: '+library)
    directLibraries.set(library,dirname(path))
    pads.set(item.footprint,footprintMetadata(read(path)).pads)
  }
  for (const item of items) {
    if (!item.footprint || Object.hasOwn(item.properties,'exclude_from_board') || item.ref?.startsWith('#')) continue
    validateFootprintPads(item.ref ?? item.name, item.pins.map(pin => pin.number), pads.get(item.footprint)!)
  }
  writeLibraryTable(join(directory,'fp-lib-table'),N('fp_lib_table',N('version',A(7)),...[...directLibraries].map(([library,path])=>N('lib',N('name',library),N('type','KiCad'),N('uri',footprintRoots.some(root=>resolve(root,library+'.pretty')===resolve(path))?'${KICAD10_FOOTPRINT_DIR}/'+library+'.pretty':'${KIPRJMOD}/'+relative(directory,path)),N('options',''),N('descr','Generated project footprints')))))
  const projectPath = join(directory,name+'.kicad_pro')
  if (!existsSync(projectPath)) {
    const source = options.project ? JSON.parse(readFileSync(options.project,'utf8')) : {}
    const project = { meta:{filename:basename(projectPath),version:1}, schematic:source.schematic??{}, erc:source.erc??{erc_exclusions:[],meta:{version:0}} }
    writeFileSync(projectPath,JSON.stringify(project,null,2)+'\n')
  }
  {
    const current = JSON.parse(readFileSync(projectPath,'utf8'))
    const defaults = options.project ? mergeSettings(defaultSettings,JSON.parse(readFileSync(options.project,'utf8'))) : defaultSettings
    const settings=mergeSettings(defaults,options.settings??{})
    Object.assign(current, settings)
    current.meta = {...current.meta, filename:basename(projectPath), version:1}
    writeFileSync(projectPath,JSON.stringify(current,null,2)+'\n')
  }
}
