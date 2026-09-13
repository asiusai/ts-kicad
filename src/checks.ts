import { existsSync, readFileSync, rmSync } from 'node:fs'
import { run, type Xml } from './kicad_io'
import { child, children, parse, val, type Node } from './kicad_sexpr'

/** Compare saved pad assignments, independently of whether the PCB is routed. */
export function boardConnectivity(board: Node, netlist: Xml): string[] {
  if (val(board[0]) !== 'kicad_pcb') throw new Error('Invalid KiCad PCB')
  const components = new Map(netlist.all('components/comp')
    .filter(c => !c.all('property').some(p => p.get('name') === 'exclude_from_board'))
    .map(c => [c.get('ref'), c]))
  const nets = new Map<string, string>()
  for (const net of netlist.all('nets/net'))
    for (const pin of net.all('node')) nets.set(pin.get('ref') + '.' + pin.get('pin'), net.get('name'))
  const found = new Set<string>(), findings: string[] = []
  for (const footprint of children(board, 'footprint')) {
    const ref = val(children(footprint, 'property').find(p => val(p[1]) === 'Reference')?.[2])
    const component = components.get(ref)
    found.add(ref)
    if (!component) { findings.push(ref + ': footprint absent from schematic'); continue }
    const pads = new Set<string>()
    for (const pad of children(footprint, 'pad')) {
      const number = val(pad[1]), key = ref + '.' + number, expected = nets.get(key)
      pads.add(number)
      // Unnumbered mechanical pads do not represent electrical pins.
      if (expected === undefined) continue
      const actual = val(child(pad, 'net').at(-1))
      if (actual !== expected) findings.push(`${key}: ${actual || '(no net)'} -> ${expected}`)
    }
    for (const key of nets.keys())
      if (key.startsWith(ref + '.') && !pads.has(key.slice(ref.length + 1))) findings.push(key + ': pad missing from PCB')
  }
  for (const ref of components.keys()) if (!found.has(ref)) findings.push(ref + ': footprint missing from PCB')
  return findings
}

export function checkBoardConnectivity(path: string, netlist: Xml) {
  if (!existsSync(path)) return
  try {
    const findings = boardConnectivity(parse(readFileSync(path, 'utf8')), netlist)
    if (!findings.length) { console.log('PCB connectivity matches the exported schematic.'); return }
    for (const finding of findings) console.error('PCB connectivity: ' + finding)
    console.error(`PCB connectivity: ${findings.length} mismatches. Reload the generated schematic in KiCad, then Update PCB from Schematic (F8). Sync does not update the PCB.`)
  } catch (error) {
    console.error('PCB connectivity could not be checked: ' + (error instanceof Error ? error.message : String(error)))
  }
}

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
