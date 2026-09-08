import {expect,test} from 'bun:test'
import {auditHeights,bomRows,csv,parseCsv,manufacturingLayers,isFabricationFile,checkPopulation,partsFromNetlist,type Part} from './export_outputs'
import {parse} from './kicad_sexpr'
import {parseXml} from './kicad_io'
const part=(ref:string,extra:Partial<Part>={}):Part=>({ref,value:'10k',props:{Footprint:'Device:R'},dnp:false,inBom:true,onBoard:true,...extra})
test('CSV round trips commas, quotes and multiline descriptions',()=>{
  const rows=[['ref','value'],['R1,R2','10k "precision"\nmatched']];expect(parseCsv(csv(rows))).toEqual(rows)
})
test('BOM keeps fitted and DNP items separate and handles composite/anchor quantities',()=>{
  const rows=bomRows([part('R1'),part('R2',{dnp:true}),part('R3',{inBom:false}),part('J1',{value:'Contact',props:{'Quantity per PCB':'2','Anchor Quantity per PCB':'1','Anchor BOM Comment':'Contact'}})])
  expect(rows).toHaveLength(4);expect(rows.find(r=>r[0]==='R2')![3]).toBe('DNP');expect(rows.find(r=>r[0].startsWith('J1'))!.slice(0,3)).toEqual(['J1.P1,J1.P2,J1.S1','3','Contact'])
})
test('height audit is optional per project but complete once used',()=>{
  expect(()=>auditHeights([part('R1')])).not.toThrow()
  expect(()=>auditHeights([part('R1',{props:{'Height (mm)':'1'}}),part('R2')])).toThrow('R2')
  expect(()=>auditHeights([part('J1',{props:{'Height (mm)':'2'}})])).toThrow('Height Exception')
  expect(()=>auditHeights([part('J1',{props:{'Height (mm)':'2','Height Exception':'Outside enclosure'}})])).not.toThrow()
})
test('native XML exclusions drive the BOM and PCB population',()=>{
  const parts=partsFromNetlist(parseXml('<export><components><comp ref="R1"><value>10k</value></comp><comp ref="R2"><property name="dnp"/></comp><comp ref="R3"><property name="exclude_from_bom"/></comp></components></export>'))
  expect(bomRows(parts)).toHaveLength(3)
  const board=parse('(board (footprint "R" (property "Reference" "R1")) (module "R" (fp_text reference "R2") (attr dnp)))')
  expect(()=>checkPopulation(board,parts)).not.toThrow();expect(()=>checkPopulation(board,[])).toThrow('Extra: R1')
})
test('fabrication selects copper and used auxiliary FPC layers',()=>{
  const board=parse('(board (layers (0 "F.Cu" signal) (4 "In1.Cu" signal) (25 "Edge.Cuts" user) (40 "User.1" user "pit_0.10") (42 "User.2" user "pib_0.10")) (gr_line (layer "User.1")))')
  expect(manufacturingLayers(board)).toEqual(['F.Cu','In1.Cu','Edge.Cuts','pit_0.10'])
  expect(isFabricationFile('inner.g2')).toBe(true);expect(isFabricationFile('BOM.csv')).toBe(false)
})
