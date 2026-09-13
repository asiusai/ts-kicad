import { expect, test } from 'bun:test'
import { boardConnectivity } from './checks'
import { parseXml } from './kicad_io'
import { parse } from './kicad_sexpr'

const netlist = parseXml(`<export>
  <components><comp ref="C1"/><comp ref="J1"/>
    <comp ref="D1"><property name="exclude_from_board" value=""/></comp></components>
  <nets>
    <net name="GND"><node ref="C1" pin="1"/><node ref="J1" pin="0"/></net>
    <net name="+3.3V"><node ref="C1" pin="2"/></net>
    <net name="unconnected-(J1-Pad1)"><node ref="J1" pin="1" pintype="passive+no_connect"/></net>
  </nets>
</export>`)

const board = `(kicad_pcb
  (footprint "Test:C" (property "Reference" "C1")
    (pad "1" smd rect (net "GND")) (pad "2" smd rect (net "+3.3V")))
  (footprint "Test:J" (property "Reference" "J1")
    (pad "0" thru_hole circle (net "GND")) (pad "0" thru_hole circle (net "GND"))
    (pad "1" thru_hole circle (net "unconnected-(J1-Pad1)"))
    (pad "" np_thru_hole circle)))`

test('PCB connectivity accepts deliberate NCs, repeated pad numbers and excluded components', () => {
  expect(boardConnectivity(parse(board), netlist)).toEqual([])
})

test('PCB connectivity compares escaped PCB net names with XML display names', () => {
  const xml = parseXml('<export><components><comp ref="U1"/></components><nets><net name="unconnected-(U1-N/C-Pad3)"><node ref="U1" pin="3" pintype="passive+no_connect"/></net></nets></export>')
  const pcb = parse('(kicad_pcb (footprint "Test:U" (property "Reference" "U1") (pad "3" smd rect (net "unconnected-(U1-N{slash}C-Pad3)"))))')
  expect(boardConnectivity(pcb, xml)).toEqual([])
})

test('PCB connectivity detects stale unconnected power pads and every repeated pad', () => {
  const stale = board.replaceAll('(net "GND")', '(net "unconnected-(old)")').replace('(net "+3.3V")', '')
  expect(boardConnectivity(parse(stale), netlist)).toEqual([
    'C1.1: unconnected-(old) -> GND', 'C1.2: (no net) -> +3.3V',
    'J1.0: unconnected-(old) -> GND', 'J1.0: unconnected-(old) -> GND',
  ])
})

test('PCB connectivity reports missing footprints and pads instead of declaring a partial board matched', () => {
  expect(boardConnectivity(parse('(kicad_pcb (footprint "Test:C" (property "Reference" "C1")))'), netlist)).toEqual([
    'C1.1: pad missing from PCB', 'C1.2: pad missing from PCB', 'J1: footprint missing from PCB',
  ])
})
