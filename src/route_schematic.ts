import { SchematicTracePipelineSolver, type InputProblem } from '@tscircuit/schematic-trace-solver'
import { snap, type Point } from './kicad_geometry'
import type { LayoutGroup, Wire } from './schematic_layout'

const scale = 2.54
const same = (a: Point, b: Point) => Math.abs(a.x - b.x) < 1e-6 && Math.abs(a.y - b.y) < 1e-6
const intersects = (a: Wire, b: Wire) =>
  onSegment(a.a, b) ||
  onSegment(a.b, b) ||
  onSegment(b.a, a) ||
  onSegment(b.b, a) ||
  ((a.a.x === a.b.x) !== (b.a.x === b.b.x) && onSegment({ x: a.a.x === a.b.x ? a.a.x : b.a.x, y: a.a.y === a.b.y ? a.a.y : b.a.y }, a) && onSegment({ x: a.a.x === a.b.x ? a.a.x : b.a.x, y: a.a.y === a.b.y ? a.a.y : b.a.y }, b))
const key = (p: Point) => `${p.x.toFixed(4)},${p.y.toFixed(4)}`
export const onSegment = (p: Point, w: Wire) =>
  Math.abs((p.x - w.a.x) * (w.b.y - w.a.y) - (p.y - w.a.y) * (w.b.x - w.a.x)) < 1e-6 &&
  p.x >= Math.min(w.a.x, w.b.x) - 1e-6 &&
  p.x <= Math.max(w.a.x, w.b.x) + 1e-6 &&
  p.y >= Math.min(w.a.y, w.b.y) - 1e-6 &&
  p.y <= Math.max(w.a.y, w.b.y) + 1e-6

/** Convert the final tscircuit trace pipeline into native KiCad wires.
 * Pin IDs and electrical identities never depend on solver-generated net names.
 * A snapped route that could create a short remains a labeled connection instead.
 */
export function routeSchematicGroup(group: LayoutGroup) {
  if (group.parts.length < 2) return
  const pins = new Map<string, { point: Point; net?: string; number: string; stub: Wire; card: LayoutGroup['parts'][number]['card'] }>()
  const nets = new Map<string, string[]>()
  const input: InputProblem = { chips: [], directConnections: [], netConnections: [], availableNetLabelOrientations: {}, maxMspPairDistance: 100 }
  for (const [i, p] of group.parts.entries()) {
    const geometry = p.card.geometry
    if (!geometry.length) continue
    const xs = geometry.map((pin) => pin.x),
      ys = geometry.map((pin) => pin.y)
    const left = Math.min(...xs),
      right = Math.max(...xs),
      top = Math.min(...ys),
      bottom = Math.max(...ys)
    const chip = {
      chipId: `c${i}`,
      center: { x: (p.x + (left + right) / 2) / scale, y: -(p.y + (top + bottom) / 2) / scale },
      width: Math.max(1.27, right - left) / scale,
      height: Math.max(1.27, bottom - top) / scale,
      pins: geometry.map((pin, occurrence) => {
        const pinId = `c${i}:${pin.number}:${occurrence}`,
          point = { x: snap(p.x + pin.x), y: snap(p.y + pin.y) },
          net = p.card.labels[pin.number]
        pins.set(pinId, { point, net, number: pin.number, card: p.card, stub: { a: point, b: { x: snap(point.x + pin.dx * 3.81), y: snap(point.y + pin.dy * 3.81) }, net: net ?? '' } })
        if (net) nets.set(net, [...(nets.get(net) ?? []), pinId])
        const _facingDirection = pin.dx < 0 ? 'x-' : pin.dx > 0 ? 'x+' : pin.dy < 0 ? 'y+' : 'y-'
        return { pinId, x: point.x / scale, y: -point.y / scale, _facingDirection: _facingDirection as 'x-' | 'x+' | 'y-' | 'y+' }
      }),
    }
    input.chips.push(chip)
  }
  for (const [net, pinIds] of nets) {
    if (pinIds.length < 2) continue
    input.netConnections.push({ netId: net, pinIds, netLabelText: net, netLabelWidth: Math.max(1, net.length * 0.28) })
    input.availableNetLabelOrientations[net] = ['x+', 'x-', 'y+', 'y-']
  }
  if (!input.netConnections.length) return
  const solver = new SchematicTracePipelineSolver(input)
  solver.solve()
  if (solver.failed) throw new Error(`Schematic routing failed in ${group.name}: ${solver.error}`)
  const traces = solver.inlineNetLabelSolver?.getOutput().traces ?? solver.sameNetJunctionAlignmentSolver?.getOutput().traces ?? []
  const wires: Wire[] = []
  let rejected = 0
  for (const trace of traces) {
    const net = trace.pinIds.map((id) => pins.get(id)?.net).find(Boolean)
    if (!net || trace.pinIds.some((id) => pins.has(id) && pins.get(id)!.net !== net)) continue
    const path = trace.tracePath.map((p) => ({ x: snap(p.x * scale), y: snap(-p.y * scale) }))
    if (path.length < 2) continue
    const segments = path
      .slice(1)
      .map((b, i) => ({ a: path[i], b, net }))
      .filter((w) => !same(w.a, w.b))
    const unsafe = segments.some(
      (w) => (w.a.x !== w.b.x && w.a.y !== w.b.y) || [...pins.values()].some((p) => p.net !== net && (onSegment(p.point, w) || intersects(p.stub, w))) || wires.some((other) => other.net !== net && intersects(w, other)),
    )
    if (unsafe) {
      rejected++
      continue
    }
    wires.push(...segments)
  }
  // Split same-net T junctions into exact KiCad endpoints and deduplicate shared segments.
  const unique = new Map<string, Wire>()
  for (const w of wires) {
    const points = [w.a, w.b, ...wires.filter((other) => other.net === w.net).flatMap((other) => [other.a, other.b]), ...[...pins.values()].filter((p) => p.net === w.net).map((p) => p.point)].filter((p) => onSegment(p, w))
    const sorted = [...new Map(points.map((p) => [key(p), p])).values()].sort((a, b) => a.x - b.x || a.y - b.y)
    for (let i = 1; i < sorted.length; i++) {
      const segment = { a: sorted[i - 1], b: sorted[i], net: w.net }
      unique.set(w.net + ':' + key(segment.a) + ':' + key(segment.b), segment)
    }
  }
  group.wires = [...unique.values()]
  // Cleanup can end a branch at another branch, rather than at an original pin.
  // Keep these junctions, but prune detached solver stubs before suppressing labels.
  let pruning = true
  while (pruning) {
    pruning = false
    const degree = new Map<string, number>()
    for (const w of group.wires)
      for (const point of [w.a, w.b]) {
        const id = w.net + ':' + key(point)
        degree.set(id, (degree.get(id) ?? 0) + 1)
      }
    group.wires = group.wires.filter((w) => {
      const dangling = [w.a, w.b].some((point) => degree.get(w.net + ':' + key(point)) === 1 && ![...pins.values()].some((p) => p.net === w.net && same(p.point, point)))
      if (dangling) pruning = true
      return !dangling
    })
  }
  // Each geometrically connected island receives one electrical label. Disconnected
  // pins retain the exporter's outward label; solver label text never changes scope.
  const adjacency = new Map<string, { point: Point; net: string; neighbors: string[] }>()
  for (const w of group.wires)
    for (const [a, b] of [
      [w.a, w.b],
      [w.b, w.a],
    ]) {
      const id = w.net + ':' + key(a),
        node = adjacency.get(id) ?? { point: a, net: w.net, neighbors: [] }
      node.neighbors.push(w.net + ':' + key(b))
      adjacency.set(id, node)
    }
  const covered = new Set<typeof pins extends Map<string, infer V> ? V : never>()
  const seen = new Set<string>()
  for (const [id, start] of adjacency) {
    if (seen.has(id)) continue
    const queue = [id],
      island: (typeof start)[] = []
    while (queue.length) {
      const next = queue.pop()!
      if (seen.has(next)) continue
      seen.add(next)
      const node = adjacency.get(next)!
      island.push(node)
      queue.push(...node.neighbors)
    }
    const attached = [...pins.values()].filter((p) => p.net === start.net && island.some((node) => same(node.point, p.point)))
    for (const p of attached) covered.add(p)
    // Prefer a horizontal segment for readable labels, away from the central IC.
    const candidates = island.filter((node) => node.neighbors.length <= 2).sort((a, b) => a.point.x - b.point.x || a.point.y - b.point.y)
    const placements = solver.inlineNetLabelSolver?.getOutput().netLabelPlacements ?? []
    const placement = placements.find((p) => p.pinIds.some((id) => attached.includes(pins.get(id)!)) && island.some((node) => same(node.point, { x: snap(p.anchorPoint.x * scale), y: snap(-p.anchorPoint.y * scale) })))
    const anchor = placement ? { point: { x: snap(placement.anchorPoint.x * scale), y: snap(-placement.anchorPoint.y * scale) } } : (candidates[0] ?? start)
    const localMembers = new Set(group.parts.map((p) => p.card.item.name))
    const models = attached.map((p) => p.card.item.pins.find((pin) => pin.number === p.number)!)
    const wholeNet = [...pins.values()].filter((p) => p.net === start.net).every((p) => attached.includes(p))
    const needsLabel = !wholeNet || models.some((pin) => pin.netNames.length > 0 || pin.members.some((member) => !localMembers.has(member.component)))
    if (needsLabel) {
      const ground = start.net.startsWith('GND'),
        power = ground || /^(\+|VDD|VCC|VIN|VCORE)/.test(start.net)
      let point = anchor.point
      if (power) {
        const edge = [...island].sort((a, b) => (ground ? b.point.y - a.point.y : a.point.y - b.point.y) || a.point.x - b.point.x)[0].point
        const stub: Wire = { a: edge, b: { x: edge.x, y: snap(edge.y + (ground ? 7.62 : -7.62)) }, net: start.net }
        if (!group.wires.some((w) => w.net !== start.net && intersects(w, stub)) && ![...pins.values()].some((p) => p.net !== start.net && intersects(p.stub, stub))) {
          group.wires.push(stub)
          point = stub.b
        }
      }
      group.labels.push({ ...point, text: start.net, angle: power ? (ground ? 270 : 90) : placement ? { 'x+': 0, 'x-': 180, 'y+': 90, 'y-': 270 }[placement.orientation] : 180 })
    }
    for (const node of island) if (new Set(node.neighbors).size > 2) group.junctions.push(node.point)
  }
  for (const p of covered) {
    if ([...pins.values()].filter((other) => other.card === p.card && other.number === p.number).every((other) => covered.has(other))) {
      p.card.suppress ??= new Set()
      p.card.suppress.add(p.number)
    }
  }
  if (rejected) console.warn(`Schematic ${group.name}: ${rejected} routes kept as labels after KiCad grid/clearance checks`)
  console.log(`Schematic ${group.name}: ${group.wires.length} wire segments from tscircuit`)
}
