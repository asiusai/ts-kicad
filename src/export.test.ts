import {expect,test,spyOn} from 'bun:test'
import {bomRows,csv,parseCsv,manufacturingLayers,isFabricationFile,checkPopulation,partsFromNetlist,type Part} from './export'
import {parse} from './kicad_sexpr'
import {parseXml} from './kicad_io'
const part=(ref:string,extra:Partial<Part>={}):Part=>({ref,value:'10k',props:{Footprint:'Device:R'},dnp:false,inBom:true,onBoard:true,...extra})
test('CSV round trips commas, quotes and multiline descriptions',()=>{
  const rows=[['ref','value'],['R1,R2','10k "precision"\nmatched']];expect(parseCsv(csv(rows))).toEqual(rows)
})
test('BOM counts schematic components and keeps fitted and DNP items separate',()=>{
  const rows=bomRows([part('R1'),part('R2',{dnp:true}),part('R3',{inBom:false}),part('R4'),part('J1',{value:'Connector'})])
  expect(rows).toHaveLength(4)
  expect(rows.find(r=>r[0]==='R2')![3]).toBe('DNP')
  expect(rows.find(r=>r[0]==='R1,R4')!.slice(0,3)).toEqual(['R1,R4','2','10k'])
  expect(rows.find(r=>r[0]==='J1')!.slice(0,3)).toEqual(['J1','1','Connector'])
})
test('BOM exports common fields without interpreting project metadata',()=>{
  const props={'MFR.Part #':'R-10K',Manufacturer:'Maker','JLCPCB Part #':'C100',Footprint:'Device:R',Datasheet:'https://example.com/r.pdf'}
  const rows=bomRows([part('R1',{props:{...props,'Review Note':'One project-specific note'}}),part('R2',{props:{...props,'Review Note':'Another note'}}),part('R3',{props})])
  expect(rows).toEqual([
    ['Designator','Qty','Comment','DNP','Exclude from BOM','Exclude from Board','MFR.Part #','Manufacturer','LCSC Part #','Footprint','Datasheet'],
    ['R1,R2,R3','3','10k','','','','R-10K','Maker','C100','Device:R','https://example.com/r.pdf'],
  ])
})
test('native XML exclusions drive the BOM and PCB population',()=>{
  const parts=partsFromNetlist(parseXml('<export><components><comp ref="R1"><value>10k</value></comp><comp ref="R2"><property name="dnp"/></comp><comp ref="R3"><property name="exclude_from_bom"/></comp></components></export>'))
  expect(bomRows(parts)).toHaveLength(3)
  const board=parse('(board (footprint "R" (property "Reference" "R1")) (module "R" (fp_text reference "R2") (attr dnp)) (footprint "Hole" (property "Reference" "H1") (attr board_only)))')
  const log=spyOn(console,'error').mockImplementation(()=>{})
  try{
    checkPopulation(board,parts);expect(log).not.toHaveBeenCalled()
    expect(()=>checkPopulation(board,[])).not.toThrow()
    expect(log).toHaveBeenCalledWith('BOM/PCB population mismatch. Missing: . Extra: R1. Continuing export.')
  }finally{log.mockRestore()}
})
test('fabrication selects copper and used auxiliary FPC layers',()=>{
  const board=parse('(board (layers (0 "F.Cu" signal) (4 "In1.Cu" signal) (25 "Edge.Cuts" user) (40 "User.1" user "pit_0.10") (42 "User.2" user "pib_0.10")) (gr_line (layer "User.1")))')
  expect(manufacturingLayers(board)).toEqual(['F.Cu','In1.Cu','Edge.Cuts','pit_0.10'])
  expect(isFabricationFile('inner.g2')).toBe(true);expect(isFabricationFile('BOM.csv')).toBe(false)
})

test('ordinary boards do not select unused flex layers or similarly named user layers',()=>{
  const board=parse('(board (layers (0 "F.Cu" signal) (2 "B.Cu" signal) (25 "Edge.Cuts" user) (40 "User.1" user "Assembly") (42 "User.2" user "pit_notes") (44 "User.3" user "pit_0.10") (46 "User.4" user "fr4t_0.2_notes")) (gr_line (layer "User.1")) (gr_line (layer "User.2")) (gr_line (layer "User.4")))')
  expect(manufacturingLayers(board)).toEqual(['F.Cu','B.Cu','Edge.Cuts'])
})

test('export logs check findings and failures while still producing files', async () => {
  const {mkdtempSync,mkdirSync,writeFileSync,readFileSync,existsSync,rmSync}=await import('node:fs')
  const {join}=await import('node:path')
  const {tmpdir}=await import('node:os')
  const directory=mkdtempSync(join(tmpdir(),'ts-kicad-export-'))
  try {
    const bin=join(directory,'bin'),calls=join(directory,'calls.jsonl'),modeFile=join(directory,'mode'),output=join(directory,'outputs')
    mkdirSync(bin)
    writeFileSync(join(directory,'board.kicad_sch'),'fixture schematic')
    writeFileSync(join(bin,'kicad-cli'),`#!${process.execPath}
import {appendFileSync,writeFileSync,readFileSync,mkdirSync} from 'node:fs'
import {join} from 'node:path'
const args=process.argv.slice(2),mode=readFileSync(${JSON.stringify(modeFile)},'utf8')
appendFileSync(${JSON.stringify(calls)},JSON.stringify(args)+'\\n')
const output=args[args.indexOf('--output')+1]??''
if(mode==='check-failure'&&['erc','drc'].includes(args[1])){console.error('fixture check command failed');process.exit(1)}
if(mode==='export-failure'&&args[2]==='gerbers'){console.error('fixture Gerber export failed');process.exit(1)}
if(args[1]==='erc')writeFileSync(output,JSON.stringify({sheets:[{violations:[{severity:'error',description:'fixture ERC conflict',items:[{description:'U1 pin 1'}]},{severity:'warning',description:'fixture ERC warning',items:[]}]}]}))
else if(args[2]==='netlist')writeFileSync(args[args.indexOf('-o')+1],'<export><components><comp ref="R1"><value>10k</value></comp><comp ref="R2"><value>10k</value></comp></components></export>')
else if(args[1]==='drc')writeFileSync(output,JSON.stringify({violations:[{severity:'error',description:'fixture DRC clearance',items:[]},{severity:'warning',description:'fixture DRC warning',items:[]}],schematic_parity:[{severity:'error',description:'fixture schematic mismatch',items:[]}],unconnected_items:[{severity:'error',description:'fixture unrouted pin',items:[]}]}))
else if(args[2]==='gerbers'){
  mkdirSync(output,{recursive:true})
  for(const layer of args[args.indexOf('--layers')+1].split(','))writeFileSync(join(output,'board-'+layer.replaceAll('.','_')+'.gbr'),'fixture gerber')
  writeFileSync(join(output,'board-job.gbrjob'),'{}')
}
else if(args[2]==='drill')writeFileSync(join(output,'board.drl'),'fixture drill')
else if(args[2]==='pos')writeFileSync(output,'Ref,PosX,PosY,Rot,Side\\nR1,1,2,90,top\\nR9,3,4,0,bottom\\n')
else if(output)writeFileSync(output,'fixture output')
`,{mode:0o755})
    writeFileSync(join(bin,'zip'),`#!${process.execPath}
import {writeFileSync} from 'node:fs'
writeFileSync(process.argv[3],'fixture zip')
`,{mode:0o755})
    const run=async(mode:string)=>{
      writeFileSync(modeFile,mode)
      const child=Bun.spawn([process.execPath,join(import.meta.dir,'../cli.ts'),'export',directory],{env:{...process.env,PATH:bin+':'+process.env.PATH},stdout:'pipe',stderr:'pipe'})
      const [stdout,stderr,status]=await Promise.all([new Response(child.stdout).text(),new Response(child.stderr).text(),child.exited])
      return {stdout,stderr,status}
    }
    const schematic=await run('findings')
    expect(schematic.status).toBe(0)
    expect(schematic.stderr).toContain('ERC [error] fixture ERC conflict: U1 pin 1')
    expect(schematic.stderr).toContain('ERC [warning] fixture ERC warning')
    for(const file of ['BOM.csv','board.pdf','board-erc.json'])expect(existsSync(join(output,file))).toBe(true)
    writeFileSync(join(directory,'board.kicad_pcb'),'(kicad_pcb (layers (0 "F.Cu" signal) (2 "B.Cu" signal) (25 "Edge.Cuts" user)) (footprint "R" (property "Reference" "R1")) (footprint "R" (property "Reference" "R9")))')
    const board=await run('findings')
    expect(board.status).toBe(0)
    expect(board.stderr).toContain('Missing: R2. Extra: R9. Continuing export.')
    expect(board.stderr).toContain('DRC [error] fixture DRC clearance')
    expect(board.stderr).toContain('DRC [warning] fixture DRC warning')
    expect(board.stderr).toContain('fixture schematic mismatch')
    expect(board.stderr).toContain('fixture unrouted pin')
    for(const file of ['BOM.csv','board.pdf','board-erc.json','board-drc.json','board.step','board.stl','board-gerbers.zip','pos.csv','gerbers/board-F_Cu.gbr','gerbers/board.drl'])expect(existsSync(join(output,file))).toBe(true)
    expect(parseCsv(readFileSync(join(output,'pos.csv'),'utf8'))).toEqual([['Designator','Mid X','Mid Y','Rotation','Layer'],['R1','1','2','90','T']])
    const failedChecks=await run('check-failure')
    expect(failedChecks.status).toBe(0)
    expect(failedChecks.stderr).toContain('ERC could not complete:')
    expect(failedChecks.stderr).toContain('DRC could not complete:')
    expect(failedChecks.stdout).toContain('Fabrication outputs written')
    expect(existsSync(join(output,'board-erc.json'))).toBe(false)
    expect(existsSync(join(output,'board-drc.json'))).toBe(false)
    writeFileSync(join(output,'board-gerbers.zip'),'previous export')
    const failedExport=await run('export-failure')
    expect(failedExport.status).toBe(1)
    expect(failedExport.stderr).toContain('fixture Gerber export failed')
    expect(readFileSync(join(output,'board-gerbers.zip'),'utf8')).toBe('previous export')
    const commands=readFileSync(calls,'utf8').trim().split('\n').map(line=>JSON.parse(line) as string[])
    expect(commands.filter(args=>args[1]==='erc')).toHaveLength(4)
    expect(commands.filter(args=>args[1]==='drc')).toHaveLength(3)
    for(const command of ['gerbers','drill','pos','step','stl'])expect(commands.some(args=>args[2]===command)).toBe(true)
  } finally {rmSync(directory,{recursive:true,force:true})}
},20000)
