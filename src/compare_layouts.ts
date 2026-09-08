import { isPassiveSymbol, isCapacitorSymbol } from './index'
/** Reproducible layout comparison on the same executed circuit and KiCad geometry. */
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { SchematicTracePipelineSolver, type InputProblem } from '@tscircuit/schematic-trace-solver'
import { inspect, cli } from './kicad_io'
import { exportSchematic } from './export_schematic'
import { clone, child, num, remove } from './kicad_sexpr'
import { loadSymbols, pinGeometry } from './kicad_geometry'
import { layoutGroup, bounds, type Card, type LayoutMode } from './schematic_layout'

export async function main(args: string[]) {
const { positionals:[entry,directory], values }=cli({symbols:{type:'string',multiple:true},sheets:{type:'string',multiple:true}}, args)
if(!entry||!directory||!values.symbols)throw new Error('Usage: ts-kicad compare entry.ts output-directory --symbols source.kicad_sch')
const model=inspect(entry),symbols=[...new Set([...(values.symbols as string[]),...model.flatMap(item=>item.symbolSource?[item.symbolSource]:[])])],{libraries,templates}=loadSymbols(symbols, model.map(item => item.schema))
mkdirSync(directory,{recursive:true})
const reports:object[]=[]
for(const sheet of [...new Set(model.map(p=>p.sheet))].filter(s=>!values.sheets||(values.sheets as string[]).includes(s))){
  const roots=model.filter(p=>p.sheet===sheet&&!p.group&&!p.name.includes('.'))
  const root=roots.sort((a,b)=>b.pins.length-a.pins.length)[0]
  for(const mode of ['elk','banks']as LayoutMode[]){
    const cards:Card[]=[]
    for(const item of model.filter(p=>p.name===root.name||p.group===root.name||p.name.startsWith(root.name+'.'))){
      const lib=libraries.get(item.schema)!,labels=Object.fromEntries(item.pins.filter(p=>!p.noConnect).map(p=>[p.number,p.netNames[0]??'anonymous']))
      for(const [unit,t]of templates.get(item.schema)!){const template=clone(t);if(isPassiveSymbol(item.schema)){child(template,'at')[3]=num(90);remove(template,'mirror')}const geometry=pinGeometry(lib,template);cards.push({item,unit,template,lib,labels,geometry,box:bounds(geometry,labels)})}
    }
    const started=performance.now(),g=await layoutGroup(root.name,cards,mode)
    reports.push({sheet,mode,widthMm:g.width,heightMm:g.height,areaMm2:Math.round(g.width*g.height),milliseconds:Math.round(performance.now()-started),sharedRailSegments:g.wires.length})
    // Evaluate the trace router independently of placement, using the exact IC pins.
    if(mode==='banks'){
      const pinIds=new Map<string,string>(),problem:InputProblem={chips:[],directConnections:[],netConnections:[],availableNetLabelOrientations:{}}
      const scale=10
      for(const {card,x,y}of g.parts){
        const id=card.item.name+'.unit'+card.unit
        const points=card.geometry
        const minX=Math.min(...points.map(p=>p.x)),maxX=Math.max(...points.map(p=>p.x)),minY=Math.min(...points.map(p=>p.y)),maxY=Math.max(...points.map(p=>p.y))
        problem.chips.push({chipId:id,center:{x:(x+(minX+maxX)/2)/scale,y:-(y+(minY+maxY)/2)/scale},width:Math.max(.3,(maxX-minX)/scale),height:Math.max(.3,(maxY-minY)/scale),pins:points.filter(p=>!card.item.pins.find(q=>q.number===p.number)!.noConnect).map(p=>{const pinId=id+'.'+p.number;pinIds.set(card.item.name+'.'+p.number,pinId);return {pinId,x:(x+p.x)/scale,y:-(y+p.y)/scale}})})
      }
      const nets=new Map<string,Set<string>>()
      for(const {card}of g.parts)for(const p of card.item.pins){if(p.noConnect)continue;const net=card.labels[p.number],id=pinIds.get(card.item.name+'.'+p.number)!;const set=nets.get(net)??new Set();set.add(id);nets.set(net,set)}
      for(const [net,ids]of nets){problem.netConnections.push({netId:net,netLabelText:net,pinIds:[...ids],isGround:net==='GND'});problem.availableNetLabelOrientations[net]=['x+','x-','y+','y-']}
      const start=performance.now(),solver=new SchematicTracePipelineSolver(problem)
      let steps=0
      while(!solver.solved&&!solver.failed&&steps<25000&&performance.now()-start<10000){solver.step();steps++}
      const output=solver.netLabelToTraceSolver?.getOutput()
      reports.push({sheet,mode:'tscircuit-routing',solved:solver.solved,failed:solver.failed,error:solver.error,milliseconds:Math.round(performance.now()-start),steps,phase:solver.getCurrentPhase(),traces:output?.traces.length,labels:output?.netLabelPlacements.length})
      writeFileSync(join(directory,sheet.replaceAll(' ','_')+'-routing.json'),JSON.stringify({problem,result:output??solver.preview()},null,2))
    }
  }
}
for(const mode of ['elk','banks']as LayoutMode[])await exportSchematic(entry,join(directory,mode,'circuit.kicad_sch'),symbols,{layout:mode,verify:true,pdf:true})
writeFileSync(join(directory,'results.json'),JSON.stringify(reports,null,2)+'\n')
console.log(JSON.stringify(reports,null,2))

}
