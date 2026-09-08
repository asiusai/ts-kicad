import { readFileSync, rmSync } from 'node:fs'
import { run } from './kicad_io'

export function checkErc(schematic: string) {
  const report=schematic.replace(/\.kicad_sch$/,'.erc.json')
  run(['kicad-cli','sch','erc',schematic,'--format','json','--output',report])
  const data=JSON.parse(readFileSync(report,'utf8')) as {sheets:{violations:{severity:string;description:string;items:{description:string}[]}[]}[]}
  const violations=data.sheets.flatMap(s=>s.violations)
  if(violations.length){
    for(const v of violations)console.error(`[${v.severity}] ${v.description}: ${v.items.map(i=>i.description).join('; ')}`)
    throw new Error(`ERC failed: ${violations.length} violations. See ${report}`)
  }
  console.log('ERC passed: 0 errors, 0 warnings.')
  rmSync(report)
}

/** An initial board may be unrouted, but its pads and fields must match the schematic. */
export function checkInitialBoard(board:string) {
  const report=board.replace(/\.kicad_pcb$/,'.drc.json')
  run(['kicad-cli','pcb','drc',board,'--schematic-parity','--format','json','--output',report])
  const data=JSON.parse(readFileSync(report,'utf8')) as {violations:{type:string;description:string}[];schematic_parity:{description:string}[];unconnected_items:unknown[]}
  const missingOutline=(v:{type:string;description:string})=>v.type==='invalid_outline'&&v.description.includes('no edges found on Edge.Cuts layer')
  const needsOutline=data.violations.some(missingOutline)
  const issues=[...data.violations.filter(v=>!missingOutline(v)),...data.schematic_parity]
  if(issues.length)throw new Error('Initial PCB checks failed:\n'+issues.map(i=>i.description).join('\n')+'\nSee '+report)
  if(needsOutline)console.log('Initial PCB needs a board outline.')
  console.log(`PCB checks passed: 0 unexpected violations, 0 schematic parity issues; ${data.unconnected_items.length} connections to route.`)
  rmSync(report)
}
