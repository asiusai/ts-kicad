import { isPassiveSymbol, isCapacitorSymbol } from './index'
import ELK from 'elkjs/lib/elk-api.js'
import { type ElkNode } from 'elkjs'
import { type ModelPart } from './kicad_io'
import { type Node, child, num, remove } from './kicad_sexpr'
import { type PinGeometry, type Point, pinGeometry, snap } from './kicad_geometry'

export type Box = { left: number; top: number; right: number; bottom: number }
export type Card = { item: ModelPart; unit: number; template: Node; lib: Node; geometry: PinGeometry[]; labels: Record<string,string>; box: Box; sideFields?: boolean; suppress?: Set<string> }
export type Placed = { card: Card; x: number; y: number }
export type Wire = { a: Point; b: Point; net: string }
export type Label = Point & { text: string; angle: number }
export type Note = Point & { text: string }
export type LayoutGroup = { name: string; width: number; height: number; parts: Placed[]; wires: Wire[]; labels: Label[]; junctions: Point[]; notes: Note[] }
export type LayoutMode = 'banks' | 'elk'
const elk = new ELK({ workerFactory: () => { const worker = new Worker(require.resolve('elkjs/lib/elk-worker.min.js')); (worker as Worker & { unref(): void }).unref(); return worker } })
export const powerNet = (name: string) => /^(\+|VIN|VCORE|VDD|VCC)/.test(name)
export function bounds(geometry: PinGeometry[], labels: Record<string,string>): Box {
  const xs: number[]=[], ys: number[]=[]
  for(const p of geometry){const length=4+Math.max(3,(labels[p.number]??'').length*.72);xs.push(p.x-2,p.x+2,p.x+p.dx*length);ys.push(p.y-2,p.y+2,p.y+p.dy*length)}
  return xs.length?{left:Math.min(...xs)-3,top:Math.min(...ys)-8,right:Math.max(...xs)+3,bottom:Math.max(...ys)+3}:{left:-10,top:-10,right:10,bottom:10}
}
function orient(card: Card, angle: number) {
  child(card.template,'at')[3]=num(angle);remove(card.template,'mirror');card.geometry=pinGeometry(card.lib,card.template);card.box=bounds(card.geometry,card.labels)
}
function isDecoupling(card: Card) {
  if(!isCapacitorSymbol(card.item.schema)||card.item.pins.length!==2)return false
  const labels=card.item.pins.map(p=>card.labels[p.number])
  return labels.includes('GND')&&labels.some(n=>n&&powerNet(n))
}
function empty(name:string):LayoutGroup{return {name,width:0,height:0,parts:[],wires:[],labels:[],junctions:[],notes:[]}}
function placeCard(card:Card):LayoutGroup {
  const g=empty(card.item.name),b=card.box
  g.parts=[{card,x:snap(4-b.left),y:snap(5-b.top)}];g.width=b.right-b.left+8;g.height=b.bottom-b.top+10
  return g
}
function makeBank(cards:Card[],rail:string):LayoutGroup {
  const g=empty('Decoupling '+rail),perRow=6,pitch=15.24,rowHeight=25.4
  const margin=snap(Math.max(12,rail.length*.72+6)),firstX=margin+5.08
  const rows=Math.ceil(cards.length/perRow)
  g.width=firstX+Math.min(perRow,cards.length)*pitch+3;g.height=12+rows*rowHeight
  g.notes.push({x:3,y:4,text:rail+' DECOUPLING'})
  for(let row=0;row<rows;row++) {
    const batch=cards.slice(row*perRow,(row+1)*perRow),y=snap(18+row*rowHeight),top=y-5.08,bottom=y+5.08
    const xs=batch.map((_,i)=>snap(firstX+i*pitch)),left=margin-2.54
    for(const [i,card] of batch.entries()) {
      orient(card,0)
      const ground=card.geometry.find(p=>card.labels[p.number]==='GND')!
      if(ground.y<0)orient(card,180)
      card.sideFields=true;card.suppress=new Set(card.geometry.map(p=>p.number))
      const x=xs[i];g.parts.push({card,x,y})
      for(const pin of card.geometry){const net=card.labels[pin.number],railY=net==='GND'?bottom:top;g.wires.push({a:{x:x+pin.x,y:y+pin.y},b:{x,y:railY},net});g.junctions.push({x,y:railY})}
    }
    for(const [net,railY] of [[rail,top],['GND',bottom]] as const){
      const points=[left,...xs];for(let i=1;i<points.length;i++)g.wires.push({a:{x:points[i-1],y:railY},b:{x:points[i],y:railY},net})
      g.labels.push({x:left,y:railY,text:net,angle:180})
    }
  }
  return g
}
function translate(into:LayoutGroup,g:LayoutGroup,x:number,y:number){
  into.parts.push(...g.parts.map(p=>({...p,x:p.x+x,y:p.y+y})))
  into.wires.push(...g.wires.map(w=>({...w,a:{x:w.a.x+x,y:w.a.y+y},b:{x:w.b.x+x,y:w.b.y+y}})))
  into.labels.push(...g.labels.map(p=>({...p,x:p.x+x,y:p.y+y})))
  into.junctions.push(...g.junctions.map(p=>({x:p.x+x,y:p.y+y})))
  into.notes.push(...g.notes.map(p=>({...p,x:p.x+x,y:p.y+y})))
}
/** Fixed-size topology blocks go into ELK; repeated caps stay inside wired banks. */
export async function layoutGroup(name:string,cards:Card[],mode:LayoutMode='banks'):Promise<LayoutGroup>{
  const main=cards.filter(c=>c.item.name===name),attached=cards.filter(c=>c.item.name!==name)
  const blocks:LayoutGroup[]=main.map(placeCard),banks=new Map<string,Card[]>()
  for(const card of attached){
    if(mode==='banks'&&isDecoupling(card)){
      const rail=Object.values(card.labels).find(n=>n!=='GND')!;banks.set(rail,[...banks.get(rail)??[],card])
    }else{if(isPassiveSymbol(card.item.schema))orient(card,90);blocks.push(placeCard(card))}
  }
  for(const [rail,group]of [...banks].sort(([a],[b])=>a.localeCompare(b)))blocks.push(makeBank(group,rail))
  if(mode==='banks'&&blocks.length>main.length+1){
    const satellites=blocks.splice(main.length)
    const packed=await packGroups(satellites)
    const composite=empty('Local circuitry')
    composite.width=packed.width;composite.height=packed.height
    for(const p of packed.groups)translate(composite,p.group,p.x,p.y)
    blocks.push(composite)
  }
  const nodes:ElkNode[]=blocks.map((b,i)=>({id:'b'+i,width:b.width,height:b.height}))
  const result=await elk.layout<ElkNode>({id:'group',layoutOptions:{'elk.algorithm':'layered','elk.direction':'RIGHT','elk.spacing.nodeNode':'6','elk.layered.spacing.nodeNodeBetweenLayers':'12','elk.padding':'[top=12,left=5,bottom=5,right=5]','elk.layered.considerModelOrder.strategy':'NODES_AND_EDGES'},children:nodes,edges:blocks.slice(1).map((_,i)=>({id:'e'+i,sources:['b0'],targets:['b'+(i+1)]}))})
  const group=empty(name)
  for(const [i,n] of result.children!.entries())translate(group,blocks[i],snap(n.x??0),snap(n.y??0))
  group.width=(result.width??0)+2;group.height=(result.height??0)+2
  return group
}
/** Pack complete functional blocks without breaking their internal arrangements. */
export async function packGroups(groups:LayoutGroup[]){
  const result=await elk.layout<ElkNode>({id:'sheet',layoutOptions:{'elk.algorithm':'org.eclipse.elk.rectpacking','elk.aspectRatio':'1.4','elk.spacing.nodeNode':'10','elk.padding':'[top=0,left=0,bottom=0,right=0]'},children:groups.map((g,i)=>({id:'g'+i,width:g.width,height:g.height}))})
  return {width:result.width??0,height:result.height??0,groups:result.children!.map((n,i)=>({group:groups[i],x:snap(n.x??0),y:snap(n.y??0)}))}

}
