import { expect, test } from 'bun:test'
import { planNetLabels } from './net_labels'
import type { ModelPart, ModelPin } from './kicad_io'

function part(ref:string,pins:Record<string,string>,sheet=''):ModelPart {
  return {name:ref,ref,referencePrefix:ref.replace(/\d+$/,''),sheet,schema:'Test:Part',value:'',footprint:'',datasheet:'',properties:{},
    pins:Object.entries(pins).map(([number,name])=>({number,name,noConnect:true,members:[],netNames:[]}))}
}
function connect(ends:[ModelPart,string][],labels:NonNullable<ModelPin['labels']>=[],global=false) {
  const members=ends.map(([p,number])=>({component:p.name,number}))
  const pins=ends.map(([p,number])=>p.pins.find(pin=>pin.number===number)!)
  for(const pin of pins)Object.assign(pin,{noConnect:false,members,labels,netNames:labels.map(l=>l.name),netScopes:global?['global']:['local']})
  return pins[0]
}

test('unnamed nets prefer a meaningful pin name over passive pad numbers',()=>{
  const q=part('Q2',{'1':'G'}),r=part('R10',{'2':'P2'}),u=part('U7',{'6':'BST'}),c=part('C16',{'2':'P2'})
  const gate=connect([[r,'2'],[q,'1']]),bootstrap=connect([[c,'2'],[u,'6']])
  const plan=planNetLabels([r,c,q,u])
  expect(plan(gate)).toEqual({name:'Net-(Q2-G)',scope:'local'})
  expect(plan(bootstrap)).toEqual({name:'Net-(U7-BST)',scope:'local'})
})

test('unnamed passive nets use pad numbers and natural reference ordering',()=>{
  const a=part('R10',{'1':'P1'}),b=part('R2',{'2':'~'})
  const net=connect([[a,'1'],[b,'2']])
  expect(planNetLabels([a,b])(net).name).toBe('Net-(R2-Pad2)')
})

test('explicit labels and power symbols keep their names and scopes',()=>{
  const a=part('U1',{'1':'IN','2':'OUT','3':'VCC'},'A'),b=part('U2',{'1':'IN','2':'OUT'},'B')
  const localA=connect([[a,'1']],[{name:'SIGNAL',scope:'local',sheet:'A'}])
  const localB=connect([[b,'1']],[{name:'SIGNAL',scope:'local',sheet:'B'}])
  const shared=connect([[a,'2'],[b,'2']],[{name:'SHARED',scope:'global'}],true)
  const power=connect([[a,'3']],[{name:'+3.3V',scope:'global',powerSymbol:'power:+3.3V'}],true)
  const plan=planNetLabels([a,b])
  expect(plan(localA)).toEqual({name:'SIGNAL',scope:'local'})
  expect(plan(localB)).toEqual({name:'SIGNAL',scope:'local'})
  expect(plan(shared)).toEqual({name:'SHARED',scope:'global'})
  expect(plan(power)).toEqual({name:'+3.3V',scope:'global',powerSymbol:'power:+3.3V'})
})

test('unnamed cross-sheet bridges remain global and distinct',()=>{
  const a=part('U1',{'1':'TX','2':'RX'},'A'),b=part('J1',{'1':'P1','2':'P2'},'B')
  const tx=connect([[a,'1'],[b,'1']],[],true),rx=connect([[a,'2'],[b,'2']],[],true)
  const plan=planNetLabels([a,b]),reversed=planNetLabels([b,a])
  expect(plan(tx)).toEqual({name:'Net-(U1-TX)',scope:'global'})
  expect(plan(rx)).toEqual({name:'Net-(U1-RX)',scope:'global'})
  expect(reversed(tx)).toEqual(plan(tx))
  expect(reversed(rx)).toEqual(plan(rx))
})

test('generated names cannot merge separate pins or collide with explicit labels',()=>{
  const u=part('U1',{'1':'OUT','2':'OUT'}),r=part('R1',{'1':'P1'})
  const first=connect([[u,'1']]),second=connect([[u,'2']])
  const explicit=connect([[r,'1']],[{name:'Net-(U1-OUT)',scope:'local',sheet:''}])
  const plan=planNetLabels([u,r]),reversed=planNetLabels([r,{...u,pins:[...u.pins].reverse()}])
  expect(plan(explicit).name).toBe('Net-(U1-OUT)')
  expect(new Set([plan(first).name,plan(second).name,plan(explicit).name]).size).toBe(3)
  expect(plan(first).name).toBe('Net-(U1-OUT)_2')
  expect(plan(second).name).toBe('Net-(U1-OUT)_3')
  expect(reversed(first)).toEqual(plan(first))
  expect(reversed(second)).toEqual(plan(second))
})

test('generated labels handle unnamed references and unsafe pin-name characters',()=>{
  const p=part('U1',{'1':'A/B','2':'A B','3':'~'})
  p.name='DEVICE';p.ref=undefined
  const a=connect([[p,'1']]),b=connect([[p,'2']]),unnamed=connect([[p,'3']])
  const plan=planNetLabels([p])
  expect(plan(a).name).toBe('Net-(U1-A_B)')
  expect(plan(b).name).toBe('Net-(U1-A_B)_2')
  expect(plan(unnamed).name).toBe('Net-(U1-Pad3)')
})
