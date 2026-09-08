import { isPassiveSymbol, isCapacitorSymbol } from './index'
import { child, num, remove } from './kicad_sexpr'
import { pinGeometry, snap, type PinGeometry } from './kicad_geometry'
import { bounds, type Card, type LayoutGroup, type Placed } from './schematic_layout'
import { routeSchematicGroup } from './route_schematic'

/** Central-component, port-ordered placement, generalized to all four KiCad pin sides.
 * Inspired by tscircuit's ascendingCentralLrBug1; native pin offsets remain fixed.
 */
export function layoutTopology(name: string, cards: Card[]): LayoutGroup {
  const center = [...cards].sort((a, b) => b.geometry.length - a.geometry.length || a.item.name.localeCompare(b.item.name))[0]
  const parts: Placed[] = [{ card: center, x: 0, y: 0 }]
  const sides = new Map<string, { card: Card; pin?: PinGeometry; order: number }[]>()
  for (const card of cards) {
    if (card === center) continue
    const decoupling = isCapacitorSymbol(card.item.schema) && Object.values(card.labels).includes('GND') && Object.values(card.labels).some((n) => /^(\+|VDD|VCC|VIN|VCORE)/.test(n))
    const owner = center.item.pins.find((p) => p.name === card.item.ownerPin || p.number === card.item.ownerPin)
    const matching = center.geometry.filter((p) => (owner ? p.number === owner.number : Object.values(card.labels).includes(center.labels[p.number])))
    const pin = matching.find((p) => center.labels[p.number] !== 'GND') ?? matching[0]
    const side = pin ? (pin.dx < 0 ? 'left' : pin.dx > 0 ? 'right' : pin.dy < 0 ? 'top' : 'bottom') : 'right'
    if (isPassiveSymbol(card.item.schema)) {
      child(card.template, 'at')[3] = num(side === 'top' || side === 'bottom' ? 0 : 90)
      remove(card.template, 'mirror')
      card.geometry = pinGeometry(card.lib, card.template)
      // The connected end faces the central component.
      const connected = pin && card.geometry.find((p) => card.labels[p.number] === center.labels[pin.number])
      if (connected && ((side === 'top' && connected.y < 0) || (side === 'bottom' && connected.y > 0) || (side === 'left' && connected.x < 0) || (side === 'right' && connected.x > 0))) {
        child(card.template, 'at')[3] = num((side === 'top' || side === 'bottom' ? 0 : 90) + 180)
        card.geometry = pinGeometry(card.lib, card.template)
      }
      if (decoupling) {
        child(card.template, 'at')[3] = num(0)
        card.geometry = pinGeometry(card.lib, card.template)
        if (card.geometry.find((p) => card.labels[p.number] === 'GND')!.y < 0) {
          child(card.template, 'at')[3] = num(180)
          card.geometry = pinGeometry(card.lib, card.template)
        }
        card.box = { left: -6.35, right: 6.35, top: -10.16, bottom: 8.89 }
      } else card.box = bounds(card.geometry, card.labels)
    }
    const list = sides.get(side) ?? []
    list.push({ card, pin, order: pin ? (side === 'top' || side === 'bottom' ? pin.x : pin.y) : 0 })
    sides.set(side, list)
  }
  for (const [side, satellites] of sides) {
    satellites.sort((a, b) => a.order - b.order || a.card.item.name.localeCompare(b.card.item.name))
    const horizontal = side === 'top' || side === 'bottom'
    // Wrap dense supply banks into aligned rows, rather than a diagonal staircase.
    const limit = horizontal ? Math.max(4, Math.ceil((center.box.right - center.box.left) / 22)) : Math.max(4, Math.ceil((center.box.bottom - center.box.top) / 20))
    let distance = 5.08
    for (let start = 0; start < satellites.length; start += limit) {
      const row = satellites.slice(start, start + limit)
      const lengths = row.map(({ card }) => (horizontal ? card.box.right - card.box.left : card.box.bottom - card.box.top))
      const total = lengths.reduce((a, b) => a + b, 0) + (row.length - 1) * 5.08
      const desired = row.reduce((sum, item) => sum + item.order, 0) / row.length
      let along = desired - total / 2
      let depth = 0
      for (const [i, { card }] of row.entries()) {
        const b = card.box
        const x = horizontal ? along - b.left : side === 'left' ? center.box.left - distance - b.right : center.box.right + distance - b.left
        const y = !horizontal ? along - b.top : side === 'top' ? center.box.top - distance - b.bottom : center.box.bottom + distance - b.top
        parts.push({ card, x: snap(x), y: snap(y) })
        along += lengths[i] + 5.08
        depth = Math.max(depth, horizontal ? b.bottom - b.top : b.right - b.left)
      }
      distance += depth + 5.08
    }
  }
  const left = Math.min(...parts.map((p) => p.x + p.card.box.left)) - 6.35
  const top = Math.min(...parts.map((p) => p.y + p.card.box.top)) - 10.16
  for (const p of parts) {
    p.x = snap(p.x - left)
    p.y = snap(p.y - top)
  }
  const group: LayoutGroup = {
    name,
    parts,
    wires: [],
    labels: [],
    junctions: [],
    notes: [],
    width: Math.max(...parts.map((p) => p.x + p.card.box.right)) + 6.35,
    height: Math.max(...parts.map((p) => p.y + p.card.box.bottom)) + 6.35,
  }
  routeSchematicGroup(group)
  // Routed detours and rail labels belong inside the packed group too.
  const points = [
    ...group.wires.flatMap((w) => [w.a, w.b]),
    ...group.labels.flatMap((label) => [
      { x: label.x - label.text.length * 0.72 - 3.81, y: label.y - 5.08 },
      { x: label.x + label.text.length * 0.72 + 3.81, y: label.y + 5.08 },
    ]),
  ]
  const dx = snap(Math.max(0, 3.81 - Math.min(3.81, ...points.map((p) => p.x))))
  const dy = snap(Math.max(0, 10.16 - Math.min(10.16, ...points.map((p) => p.y))))
  group.width = Math.max(group.width, ...points.map((p) => p.x + 3.81)) + dx
  group.height = Math.max(group.height, ...points.map((p) => p.y + 3.81)) + dy
  for (const part of group.parts) {
    part.x += dx
    part.y += dy
  }
  for (const wire of group.wires) {
    wire.a = { x: wire.a.x + dx, y: wire.a.y + dy }
    wire.b = { x: wire.b.x + dx, y: wire.b.y + dy }
  }
  for (const point of [...group.labels, ...group.junctions]) {
    point.x += dx
    point.y += dy
  }
  return group
}
