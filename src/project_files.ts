import type { ProjectSettings } from './index'
import { defaultSettings, defaultPcbOptions } from './project_defaults'
import { mergeSettings, mergeSetup } from './merge_settings'
import { normalizeFootprint } from './normalize_footprint'
import { checkInitialBoard } from './checks'
import { validateFootprintPads } from './footprint'
import { footprintMetadata } from './generate_footprints'
import { symbolDirectory } from './symbol_library'
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync, renameSync } from 'node:fs'
import { basename, dirname, join, resolve, relative } from 'node:path'
import { createHash } from 'node:crypto'
import { atom as A, node as N, child, children, clone, descendants, dump, num, parse, remove, val, type Node } from './kicad_sexpr'
import { readNetlist, type ModelPart } from './kicad_io'

export type ProjectOptions = { footprints?: string[]; project?: string } & Pick<ProjectSettings, 'settings' | 'designRules' | 'pcbOptions'>
export function uuid(key: string) {
  const h = createHash('sha256').update('ts-kicad/'+key).digest('hex')
  return `${h.slice(0,8)}-${h.slice(8,12)}-4${h.slice(13,16)}-a${h.slice(17,20)}-${h.slice(20,32)}`
}
const read = (path: string) => parse(readFileSync(path, 'utf8'))
const write = (path: string, tree: Node) => { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, dump(tree)+'\n') }
const property = (tree: Node, name: string) => val(children(tree,'property').find(p=>val(p[1])===name)?.[2])

/** KiCad supports both (net id "name") and (net "name"). Numeric IDs are not names. */
export function boardNetName(net:Node) {
  return typeof net.at(-1)==='string'?val(net.at(-1)):undefined
}

export function renameBoardNets(board:Node, renamed:Map<string,string>) {
  for(const net of descendants(board,'net')){
    const name=boardNetName(net)
    if(name!==undefined&&renamed.has(name))net[net.length-1]=renamed.get(name)!
  }
  for(const name of descendants(board,'net_name'))if(renamed.has(val(name[1])))name[1]=renamed.get(val(name[1]))!
}

function modelPath(path: string, projectDirectory: string) {
  return path.replace(/\$\{([^}]+)\}/g, (_, name) => name==='KIPRJMOD' ? projectDirectory : process.env[name] ?? (/^KICAD\d*_3DMODEL_DIR$/.test(name) ? '/usr/share/kicad/3dmodels' : '${'+name+'}'))
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
    symbols.push(N('lib',N('name',library),N('type','KiCad'),N('uri',source?'${KIPRJMOD}/'+relative(directory,source):'${KIPRJMOD}/'+library+'.kicad_sym'),N('options',''),N('descr','Generated project symbols')))
  }
  writeLibraryTable(join(directory,'sym-lib-table'), symbols)
  const footprintPaths = new Map<string,string>()
  for (const path of options.footprints??[]) footprintPaths.set(basename(path,'.pretty'),resolve(path))
  if (options.project) {
    const table = join(dirname(options.project),'fp-lib-table')
    if (existsSync(table)) for (const lib of children(read(table),'lib')) {
      const name=val(child(lib,'name')[1]);if(!footprintPaths.has(name))footprintPaths.set(name,modelPath(val(child(lib,'uri')[1]),dirname(resolve(options.project))))
    }
  }
  const footprintRoots = [...Object.entries(process.env).filter(([key])=>/^KICAD\d*_FOOTPRINT_DIR$/.test(key)).map(([,v])=>v!),'/usr/share/kicad/footprints','/usr/local/share/kicad/footprints']
  const copied = new Map<string,Node>(), usedLibraries = new Set<string>(), directLibraries=new Map<string,string>()
  for (const item of items) {
    if (!item.footprint || Object.hasOwn(item.properties,'exclude_from_board') || item.ref?.startsWith('#')) continue
    if (copied.has(item.footprint)) continue
    const [library, footprintName] = item.footprint.split(':')
    if (!library || !footprintName || /[\\/]/.test(library+footprintName)) throw new Error('Invalid footprint: '+item.footprint)
    const root = footprintPaths.get(library) ?? footprintRoots.map(p=>join(p,library+'.pretty')).find(existsSync)
    const path = item.footprintSource ?? (root && join(root, footprintName+'.kicad_mod'))
    if (!path || !existsSync(path)) throw new Error('Footprint not found: '+item.footprint+'. Supply its .pretty directory with --footprints.')
    const footprint = parse(normalizeFootprint(readFileSync(path,'utf8')))
    const previous=directLibraries.get(library)
    if(previous&&previous!==dirname(path))throw new Error('Conflicting footprint library paths: '+library)
    directLibraries.set(library,dirname(path))
    footprint[0] = A('footprint')
    remove(footprint,'at','path','sheetname','sheetfile')
    for(const pad of children(footprint,'pad'))remove(pad,'net','pinfunction','pintype')
    for (const field of children(footprint,'fp_text')) {
      const kind=val(field[1]); if(kind!=='reference'&&kind!=='value')continue
      field[0]=A('property');field[1]=kind==='reference'?'Reference':'Value'
    }
    for (const model of children(footprint,'model')) {
      const original = val(model[1]), candidate = resolve(dirname(path), modelPath(original,item.footprintProjectDirectory ?? dirname(path)))
      if (!existsSync(candidate)) continue
      model[1]='${KIPRJMOD}/'+relative(directory,candidate)
    }
    copied.set(item.footprint,footprint);usedLibraries.add(library)
  }
  for (const item of items) {
    if (!item.footprint || Object.hasOwn(item.properties,'exclude_from_board') || item.ref?.startsWith('#')) continue
    validateFootprintPads(item.ref ?? item.name, item.pins.map(pin => pin.number), footprintMetadata(copied.get(item.footprint)!).pads)
  }
  writeLibraryTable(join(directory,'fp-lib-table'),N('fp_lib_table',N('version',A(7)),...[...usedLibraries].map(library=>N('lib',N('name',library),N('type','KiCad'),N('uri','${KIPRJMOD}/'+relative(directory,directLibraries.get(library)!)),N('options',''),N('descr','Generated project footprints')))))
  const projectPath = join(directory,name+'.kicad_pro')
  const rules=options.project?.replace(/\.kicad_pro$/,'.kicad_dru'),destinationRules=join(directory,name+'.kicad_dru')
  if(rules&&existsSync(rules)&&!existsSync(destinationRules))copyFileSync(rules,destinationRules)
  if (!existsSync(projectPath)) {
    const source = options.project ? JSON.parse(readFileSync(options.project,'utf8')) : {}
    // Follow physical pins when an imported circuit renamed an automatically named net.
    const original=options.project?.replace(/\.kicad_pro$/,'.kicad_sch')
    if(original&&existsSync(original)&&source.net_settings?.netclass_patterns){
      const names=new Map<string,string>()
      for(const net of readNetlist(output).all('nets/net'))for(const p of net.all('node'))names.set(p.get('ref')+'.'+p.get('pin'),net.get('name'))
      const renamed=new Map<string,string>()
      for(const net of readNetlist(original).all('nets/net')){
        const matches=new Set(net.all('node').map(p=>names.get(p.get('ref')+'.'+p.get('pin'))).filter(Boolean))
        if(matches.size===1)renamed.set(net.get('name'),[...matches][0]!)
      }
      for(const pattern of source.net_settings.netclass_patterns)pattern.pattern=renamed.get(pattern.pattern)??pattern.pattern
    }
    if(source.board?.design_settings)source.board.design_settings.drc_exclusions=[]
    const project = { meta:{filename:basename(projectPath),version:1}, board:source.board??{}, net_settings:source.net_settings??{}, erc:{erc_exclusions:[],meta:{version:0}} }
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
  if (options.designRules !== undefined) writeFileSync(destinationRules, options.designRules)
  return copied
}

/** Rename unchanged electrical nets without altering pads, tracks, vias or placement. */
export function syncBoardNetNames(target:string,schematic:string,paths:Map<string,string>=new Map()) {
  const original=readFileSync(target,'utf8'),board=parse(original),groups=new Map<string,Set<string>>()
  const footprints=children(board,'footprint').concat(children(board,'module'))
  for(const fp of footprints){
    const ref=property(fp,'Reference')||val(children(fp,'fp_text').find(p=>val(p[1])==='reference')?.[2])
    for(const pad of children(fp,'pad')){
      const number=val(pad[1]),net=child(pad,'net');if(!number||!net.length)continue
      const name=boardNetName(net)
      if(name===undefined)throw new Error('Pad net is missing its name: '+ref+'.'+number)
      const pins=groups.get(name)??new Set<string>();pins.add(ref+'.'+number);groups.set(name,pins)
    }
  }
  const signature=(pins:Iterable<string>)=>[...pins].sort().join('|')
  const desired=new Map(readNetlist(schematic).all('nets/net').map(n=>[signature(n.all('node').map(p=>p.get('ref')+'.'+p.get('pin'))),n.get('name')]))
  if(groups.size!==desired.size||[...groups.values()].some(pins=>!desired.has(signature(pins)))){
    console.warn('PCB connectivity differs from the schematic. Use Update PCB from Schematic in KiCad; existing PCB preserved.')
    return
  }
  const renamed=new Map([...groups].flatMap(([name,pins])=>{const next=desired.get(signature(pins))!;return next===name?[]:[[name,next] as const]}))
  let links=0
  for(const fp of footprints){const path=paths.get(property(fp,'Reference'));if(!path)continue
    const current=child(fp,'path');if(val(current[1])===path)continue
    if(current.length)current[1]=path;else fp.push(N('path',path));links++
  }
  if(!renamed.size&&!links){console.log('Preserved existing PCB: '+target);return}
  renameBoardNets(board,renamed)
  if(readFileSync(target,'utf8')!==original)throw new Error('PCB changed during export; retry after saving it.')
  write(target,board)
  const project=target.replace(/\.kicad_pcb$/,'.kicad_pro')
  if(existsSync(project)){
    const data=JSON.parse(readFileSync(project,'utf8'));let changed=false
    for(const rule of data.net_settings?.netclass_patterns??[])if(renamed.has(rule.pattern)){rule.pattern=renamed.get(rule.pattern);changed=true}
    if(changed)writeFileSync(project,JSON.stringify(data,null,2)+'\n')
  }
  console.log('Updated '+renamed.size+' PCB net names and '+links+' schematic links; placement and routing preserved.')
}

/** Update declared board settings without touching geometry or routing. */
export function applyBoardOptions(board:Node, options:ProjectSettings['pcbOptions']) {
  if (!options) return false
  const before=dump(board)
  const replace=(name:string,next:Node)=>{const previous=child(board,name);if(previous.length)board.splice(board.indexOf(previous),1,next);else board.push(next)}
  if(options.thickness !== undefined){
    if(!Number.isFinite(options.thickness)||options.thickness<=0)throw new Error('PCB thickness must be positive')
    const general=clone(child(board,'general'))
    if(!general.length)general.push(A('general'))
    remove(general,'thickness');general.push(N('thickness',num(options.thickness)));replace('general',general)
  }
  if(options.layers){
    const layers=[...options.layers.filter(layer=>/\.Cu$/.test(layer[1])),...defaultPcbOptions.layers.filter(layer=>! /\.Cu$/.test(layer[1])).map(layer=>options.layers!.find(override=>override[0]===layer[0])??layer),...options.layers.filter(layer=>! /\.Cu$/.test(layer[1])&&!defaultPcbOptions.layers.some(base=>base[0]===layer[0]))]
    const names=new Set(layers.map(layer=>layer[1]))
    for(const layer of descendants(board,'layer')) {
      const name=val(layer[1])
      if(/^(F|B|In\d+)\.Cu$/.test(name)&&!names.has(name))throw new Error('Cannot remove a copper layer used by the PCB: '+name)
    }
    replace('layers',N('layers',...layers.map(([id,name,type,label])=>[A(id),name,A(type),...(label?[label]:[])])))
  }
  if(options.setup !== undefined){const setup=parse(options.setup);if(val(setup[0])!=='setup')throw new Error('PCB setup must be a (setup ...) expression');replace('setup',mergeSetup(parse(defaultPcbOptions.setup),setup))}
  return before!==dump(board)
}

/** Create the initial board only. Regeneration must never replace the user's placement/routing. */
export function createBoard(output: string, items: ModelPart[], footprints: Map<string,Node>, paths: Map<string,string>, options:ProjectOptions) {
  const target=output.replace(/\.kicad_sch$/,'.kicad_pcb')
  const existing=existsSync(target)?read(target):undefined
  const untouchedScaffold=existing&&val(child(existing,'generator')[1])==='ts_kicad'&&existing.slice(1).every(value=>Array.isArray(value)&&['version','generator','generator_version','general','paper','layers','setup'].includes(val(value[0])))
  const populateScaffold=untouchedScaffold&&items.some(item=>!item.ref?.startsWith('#')&&!Object.hasOwn(item.properties,'exclude_from_board'))
  if(existing&&!populateScaffold){
    syncBoardNetNames(target,output,new Map(items.map(p=>[p.ref!,paths.get(p.name)!])))
    const original=readFileSync(target,'utf8'),board=parse(original)
    let changed=applyBoardOptions(board,options.pcbOptions)
    for(const fp of children(board,'footprint')){
      const part=items.find(item=>item.ref===property(fp,'Reference'))
      if(!part?.footprint)continue
      const fields={...part.properties,Datasheet:part.datasheet,Description:part.properties.Description??''}
      for(const [name,value]of Object.entries(fields)){
        let field=children(fp,'property').find(field=>val(field[1])===name)
        if(!field){field=N('property',name,'',N('at',num(0),num(0)),N('layer','F.Fab'),N('hide',A('yes')),N('effects',N('font',N('size',num(1),num(1)))));fp.push(field);changed=true}
        if(val(field[2])!==(value??'')){field[2]=value??'';changed=true}
      }
      const expected=children(footprints.get(part.footprint)!,'model').map(model=>val(model[1]))
      for(const model of children(fp,'model')){
        const current=val(model[1]),name=basename(current).replace(/^[a-f0-9]{10,12}-/,'')
        const matches=expected.filter(path=>basename(path)===name)
        if(matches.length===1&&matches[0]!==current){model[1]=matches[0];changed=true}
      }
    }
    if(changed){if(readFileSync(target,'utf8')!==original)throw new Error('PCB changed while updating metadata');write(target,board);console.log('Updated PCB datasheets and model paths; placement and transforms preserved.')}
    return
  }
  const parts=items.filter(p=>!p.ref?.startsWith('#')&&!Object.hasOwn(p.properties,'exclude_from_board'))
  if(parts.some(p=>!p.footprint)){console.warn('Warning: PCB creation skipped because some components have no footprint.');return}
  const seed=options.project?.replace(/\.kicad_pro$/,'.kicad_pcb'),source=seed&&existsSync(seed)?read(seed):undefined
  const layers=source?clone(child(source,'layers')):N('layers',...[ [0,'F.Cu','signal'],[2,'B.Cu','signal'],[5,'F.SilkS','user'],[7,'B.SilkS','user'],[1,'F.Mask','user'],[3,'B.Mask','user'],[13,'F.Paste','user'],[15,'B.Paste','user'],[31,'F.CrtYd','user'],[29,'B.CrtYd','user'],[35,'F.Fab','user'],[33,'B.Fab','user'],[25,'Edge.Cuts','user'] ].map(([id,name,type])=>[A(id),String(name),A(type)]))
  const board=N('kicad_pcb',N('version',A(20260206)),N('generator','ts_kicad'),source?clone(child(source,'general')):N('general',N('thickness',num(1.6))),N('paper','A4'),layers,source?clone(child(source,'setup')):N('setup',N('pad_to_mask_clearance',num(0))))
  applyBoardOptions(board,source?options.pcbOptions:{...defaultPcbOptions,...options.pcbOptions})
  const nets=new Map<string,number>(), connections=new Map<string,{name:string;function:string;type:string}>()
  for(const net of readNetlist(output).all('nets/net')) {
    const name=net.get('name');nets.set(name,nets.size+1)
    for(const pin of net.all('node'))connections.set(pin.get('ref')+'.'+pin.get('pin'),{name,function:pin.get('pinfunction'),type:pin.get('pintype')})
  }
  for(const[name,id]of nets)board.push(N('net',A(id),name))
  let x=20,y=20,rowHeight=0
  for(const part of [...parts].sort((a,b)=>a.ref!.localeCompare(b.ref!,undefined,{numeric:true}))){
    const footprint=clone(footprints.get(part.footprint)!);footprint[1]=part.footprint
    remove(footprint,'version','generator','generator_version','uuid','path','at','sheetname','sheetfile')
    const points=[...descendants(footprint,'at'),...descendants(footprint,'start'),...descendants(footprint,'end'),...descendants(footprint,'xy')]
    const xs=points.map(p=>Number(val(p[1]))).filter(Number.isFinite),ys=points.map(p=>Number(val(p[2]))).filter(Number.isFinite)
    const left=Math.min(0,...xs)-4,top=Math.min(0,...ys)-4,width=Math.max(0,...xs)-left+4,height=Math.max(0,...ys)-top+4
    if(x+width>270){x=20;y+=rowHeight+8;rowHeight=0}
    footprint.push(N('at',num(x-left),num(y-top)),N('uuid',uuid('footprint/'+part.ref)),N('path',paths.get(part.name)!))
    let index=0;for(const id of descendants(footprint,'uuid'))id[1]=uuid(part.ref+'/'+index++)
    for(const prop of children(footprint,'property')){
      if(!['Reference','Value'].includes(val(prop[1]))&&!Object.hasOwn(part.properties,val(prop[1])))prop[2]=''
      if(val(prop[1])==='Reference')prop[2]=part.ref!
      if(val(prop[1])==='Value')prop[2]=part.value
    }
    for(const [name,value] of Object.entries({...part.properties,Reference:part.ref!,Value:part.value,Datasheet:part.datasheet,Description:part.properties.Description??''})) {
      let field=children(footprint,'property').find(p=>val(p[1])===name)
      if(!field){field=N('property',name,'',N('at',num(0),num(0)),N('layer','F.Fab'),...(['Reference','Value'].includes(name)?[]:[N('hide',A('yes'))]),N('effects',N('font',N('size',num(1),num(1)),N('thickness',num(0.15)))));footprint.push(field)}
      field[2]=value??''
    }
    let attributes=child(footprint,'attr')
    if(!attributes.length){attributes=N('attr');footprint.push(attributes)}
    attributes.splice(1,attributes.length-1,...attributes.slice(1).filter(a=>!['dnp','exclude_from_bom'].includes(val(a))))
    if(Object.hasOwn(part.properties,'dnp'))attributes.push(A('dnp'))
    if(Object.hasOwn(part.properties,'exclude_from_bom'))attributes.push(A('exclude_from_bom'))
    const pads=children(footprint,'pad'),numbers=new Set(pads.map(p=>val(p[1])).filter(Boolean))
    for(const pin of part.pins)if(!numbers.has(pin.number))throw new Error(part.ref+': footprint has no pad '+pin.number)
    for(const pad of pads){
      remove(pad,'net','pinfunction','pintype');const number=val(pad[1]);if(!number)continue
      const pin=part.pins.find(p=>p.number===number);if(!pin)throw new Error(part.ref+': footprint pad '+number+' has no schematic pin')
      const connection=connections.get(part.ref+'.'+number)
      if(!connection)throw new Error('Missing native netlist pin: '+part.ref+'.'+number)
      pad.push(N('net',A(nets.get(connection.name)!),connection.name),N('pinfunction',connection.function),N('pintype',connection.type))
    }
    board.push(footprint);x+=width+8;rowHeight=Math.max(rowHeight,height)
  }
  write(target,board)
  try { checkInitialBoard(target) }
  catch(error) { renameSync(target,target.replace(/\.kicad_pcb$/,'.failed.kicad_pcb')); throw error }
  console.log('Created PCB with '+parts.length+' footprints and '+nets.size+' nets: '+target)
}
