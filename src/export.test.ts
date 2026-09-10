import {expect,test} from 'bun:test'
import {auditHeights,bomRows,csv,parseCsv,manufacturingLayers,isFabricationFile,checkPopulation,partsFromNetlist,type Part} from './export'
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
  const board=parse('(board (footprint "R" (property "Reference" "R1")) (module "R" (fp_text reference "R2") (attr dnp)) (footprint "Hole" (property "Reference" "H1") (attr board_only)))')
  expect(()=>checkPopulation(board,parts)).not.toThrow();expect(()=>checkPopulation(board,[])).toThrow('Extra: R1')
})
test('fabrication selects copper and used auxiliary FPC layers',()=>{
  const board=parse('(board (layers (0 "F.Cu" signal) (4 "In1.Cu" signal) (25 "Edge.Cuts" user) (40 "User.1" user "pit_0.10") (42 "User.2" user "pib_0.10")) (gr_line (layer "User.1")))')
  expect(manufacturingLayers(board)).toEqual(['F.Cu','In1.Cu','Edge.Cuts','pit_0.10'])
  expect(isFabricationFile('inner.g2')).toBe(true);expect(isFabricationFile('BOM.csv')).toBe(false)
})

test('export checks ERC without a PCB and gates fabrication on DRC', async () => {
  const {mkdtempSync,mkdirSync,writeFileSync,readFileSync,existsSync,rmSync}=await import('node:fs')
  const {join}=await import('node:path')
  const {tmpdir}=await import('node:os')
  const directory=mkdtempSync(join(tmpdir(),'ts-kicad-export-'))
  try {
    const bin=join(directory,'bin'),calls=join(directory,'calls.jsonl')
    mkdirSync(bin)
    writeFileSync(join(directory,'board.kicad_sch'),'fixture schematic')
    writeFileSync(join(bin,'kicad-cli'),`#!${process.execPath}
import {appendFileSync,writeFileSync} from 'node:fs'
const args=process.argv.slice(2)
appendFileSync(${JSON.stringify(calls)},JSON.stringify(args)+'\\n')
const output=args[args.indexOf('--output')+1]??''
if(args[1]==='erc')writeFileSync(output,JSON.stringify({sheets:[]}))
else if(args[2]==='netlist')writeFileSync(args[args.indexOf('-o')+1],'<export><components/></export>')
else if(args[1]==='drc')writeFileSync(output,JSON.stringify({violations:[{description:'test DRC violation'}],schematic_parity:[],unconnected_items:[]}))
else if(output)writeFileSync(output,'fixture output')
`,{mode:0o755})
    const run=async()=>{
      const child=Bun.spawn([process.execPath,join(import.meta.dir,'../cli.ts'),'export',directory],{env:{...process.env,PATH:bin+':'+process.env.PATH},stdout:'pipe',stderr:'pipe'})
      const [stdout,stderr,status]=await Promise.all([new Response(child.stdout).text(),new Response(child.stderr).text(),child.exited])
      return {stdout,stderr,status}
    }
    expect((await run()).status).toBe(0)
    expect(existsSync(join(directory,'outputs/BOM.csv'))).toBe(true)
    expect(existsSync(join(directory,'outputs/board.pdf'))).toBe(true)
    writeFileSync(join(directory,'board.kicad_pcb'),'(kicad_pcb)')
    const result=await run()
    expect(result.status).toBe(1)
    expect(result.stderr).toContain('PCB checks failed')
    const commands=readFileSync(calls,'utf8').trim().split('\n').map(line=>JSON.parse(line) as string[])
    expect(commands.filter(args=>args[1]==='erc')).toHaveLength(2)
    expect(commands.filter(args=>args[1]==='drc')).toHaveLength(1)
    expect(commands.some(args=>args.includes('gerbers')||args.includes('drill')||args.includes('pos'))).toBe(false)
  } finally {rmSync(directory,{recursive:true,force:true})}
})
