import { expect, test } from 'bun:test'
import { existsSync } from 'node:fs'
import { loadSymbols, pinGeometry, snap } from './kicad_geometry'
import { bounds, type Card } from './schematic_layout'
import { layoutTopology } from './layout_topology'
import { onSegment } from './route_schematic'
import { clone } from './kicad_sexpr'

const available = existsSync('/usr/share/kicad/symbols/Device.kicad_sym')
function circuit() {
  const { libraries, templates } = loadSymbols([], ['Sensor_Motion:LSM6DS3', 'Device:C', 'Device:R'])
  const card = (name: string, schema: string, labels: Record<string, string>, ownerPin?: string): Card => {
    const lib = libraries.get(schema)!,
      template = clone(templates.get(schema)!.get(1)!),
      geometry = pinGeometry(lib, template)
    const pins = [...new Set(geometry.map((p) => p.number))].map((number) => ({ name: number, number, noConnect: !labels[number], members: [], netNames: labels[number] ? [labels[number]] : [] }))
    return { item: { name, ownerPin, schema, pins, sheet: 'Test', referencePrefix: 'U', value: '', footprint: '', datasheet: '', properties: {} }, unit: 1, template, lib, geometry, labels, box: bounds(geometry, labels) }
  }
  return [
    card('IMU', 'Sensor_Motion:LSM6DS3', { '5': '+3.3V', '8': '+3.3V', '6': 'GND', '13': 'SCL', '14': 'SDA' }),
    card('CAP1', 'Device:C', { '1': '+3.3V', '2': 'GND' }, '5'),
    card('CAP2', 'Device:C', { '1': '+3.3V', '2': 'GND' }, '8'),
    card('PULLUP', 'Device:R', { '1': '+3.3V', '2': 'SDA' }, '14'),
  ]
}

test.skipIf(!available)('topology placement uses native pin sides and produces orthogonal, grid-aligned wires', () => {
  const layout = layoutTopology('IMU', circuit())
  const imu = layout.parts.find((p) => p.card.item.name === 'IMU')!
  const caps = layout.parts.filter((p) => p.card.item.name.startsWith('CAP'))
  expect(caps).toHaveLength(2)
  expect(caps.every((p) => p.y < imu.y)).toBe(true)
  expect(caps[0].y).toBe(caps[1].y)
  expect(layout.parts.find((p) => p.card.item.name === 'PULLUP')!.x).toBeLessThan(imu.x)
  expect(layout.wires.length).toBeGreaterThan(0)
  for (const wire of layout.wires) {
    expect(wire.a.x === wire.b.x || wire.a.y === wire.b.y).toBe(true)
    for (const point of [wire.a, wire.b]) {
      expect(point.x).toBeCloseTo(snap(point.x))
      expect(point.y).toBeCloseTo(snap(point.y))
    }
    for (const part of layout.parts)
      for (const pin of part.card.geometry) {
        if (part.card.labels[pin.number] === wire.net) continue
        expect(onSegment({ x: snap(part.x + pin.x), y: snap(part.y + pin.y) }, wire)).toBe(false)
      }
  }
  const repeated = layoutTopology('IMU', circuit())
  expect(repeated.parts.map((p) => [p.card.item.name, p.x, p.y])).toEqual(layout.parts.map((p) => [p.card.item.name, p.x, p.y]))
  expect(repeated.wires).toEqual(layout.wires)
})

test.skipIf(!available)('every suppressed pin occurrence has a native wire and every island retains its named net', () => {
  const cards = circuit()
  // Represent a package with two visible copies of the same physical pin.
  const imu = cards[0]
  const copy = imu.geometry.find((p) => p.number === '6')!
  imu.geometry.push({ ...copy, x: copy.x + 2.54 })
  const layout = layoutTopology('IMU', cards)
  for (const part of layout.parts)
    for (const pin of part.card.geometry) {
      if (!part.card.suppress?.has(pin.number)) continue
      expect(layout.wires.some((w) => w.net === part.card.labels[pin.number] && onSegment({ x: snap(part.x + pin.x), y: snap(part.y + pin.y) }, w))).toBe(true)
    }
  for (const label of layout.labels) expect(layout.wires.some((w) => w.net === label.text && onSegment(label, w))).toBe(true)
})
