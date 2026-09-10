import { readFileSync, rmSync } from 'node:fs'
import { run } from './kicad_io'

type Violation = { severity: string; description: string; items?: { description: string }[] }

function logCheck(name: string, report: string, check: () => Violation[]) {
  try {
    rmSync(report,{force:true})
    const violations=check()
    for(const v of violations){
      const items=v.items?.map(i=>i.description).join('; ')
      console.error(`${name} [${v.severity}] ${v.description}${items?': '+items:''}`)
    }
    if(violations.length)console.error(`${name}: ${violations.length} findings. See ${report}. Continuing export.`)
    else console.log(`${name} passed: 0 errors, 0 warnings.`)
  } catch(error) {
    console.error(`${name} could not complete: ${error instanceof Error?error.message:String(error)}. Continuing export.`)
  }
}

export function checkErc(schematic: string, report: string) {
  logCheck('ERC',report,()=>{
    run(['kicad-cli','sch','erc',schematic,'--format','json','--output',report])
    const data=JSON.parse(readFileSync(report,'utf8')) as {sheets:{violations:Violation[]}[]}
    return data.sheets.flatMap(s=>s.violations)
  })
}

export function checkDrc(board: string, report: string) {
  logCheck('DRC',report,()=>{
    run(['kicad-cli','pcb','drc',board,'--schematic-parity','--refill-zones','--save-board','--format','json','--output',report])
    const data=JSON.parse(readFileSync(report,'utf8')) as {violations:Violation[];schematic_parity:Violation[];unconnected_items:Violation[]}
    return [...data.violations,...data.schematic_parity,...data.unconnected_items]
  })
}
