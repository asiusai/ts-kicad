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
