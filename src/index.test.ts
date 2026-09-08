import { local } from './index'
import { expect, test, spyOn } from 'bun:test'
import { Component, applyBom, validateBom, namedComponents, validatePins, Net, sheet, circuitComponents, validateLabels } from './index'

class Pair extends Component.withPins(['1', '2']) {}

test('wire maps a subset and rejects invalid maps before mutating pins', () => {
  const part = new Pair()
  expect(part.wire({ P1: new Net('partial-supply') })).toBe(part)
  expect(part.P2.connections.size).toBe(0)
  expect(part.wire({ P2: null })).toBe(part)
  const fresh = new Pair()
  // @ts-expect-error Unknown pins must fail type checking too.
  expect(() => fresh.wire({ P1: new Net('partial-invalid'), P3: null })).toThrow('Unknown pin')
  expect(fresh.P1.connections.size).toBe(0)
  expect(() => fresh.wire({ P1: new Net('partial-invalid'), P2: part.P2 })).toThrow('no-connect')
  expect(fresh.P1.connections.size).toBe(0)
  expect(() => fresh.wire({ P1: undefined })).toThrow('Undefined connection')
})

const reachable=(pin:import('./index').KicadElement)=>{
    const seen=new Set<unknown>(),queue=[pin as import('./index').KicadElement]
    while(queue.length){const n=queue.pop()!;if(seen.has(n))continue;seen.add(n);queue.push(...n.connections)}return seen
  }

// Explicit source identities for tests simulating declarations in separate files.
function markSources(file: string, parts: Record<string, Component<string>>) {
  for (const [name, part] of Object.entries(parts)) {
    part.sheetName = file
    part.declarationName = name
  }
}

test('wire allows incremental maps and final validation warns about missing pins', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    const part = new Pair().wire({ P1: new Net('test-supply') })
    expect(warn).not.toHaveBeenCalled()
    validatePins([['PART', part]])
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('PART.P2 (physical pin 2)'))
    warn.mockClear()
    expect(part.wire({ P2: null })).toBe(part)
    validatePins([['PART', part]])
    expect(warn).not.toHaveBeenCalled()
    expect(() => part.P2.wire(new Net('test-ground'))).toThrow('no-connect')
    expect(part.P1.wire(new Net('test-supply'))).toBe(part.P1)
  } finally {
    warn.mockRestore()
  }
})

test('inline collection preserves ownership when roots reference each other', () => {
  const passive = new Pair().wire({ P2: new Net('test-return') })
  const peripheral = new Pair().wire({ P1: new Net('test-data'), P2: null })
  const controller = new Pair().wire({ P1: [peripheral.P1, passive.P1], P2: null })
  expect(namedComponents({ control: { controller }, sensor: { peripheral } }).map(([name]) => name))
    .toEqual(['controller', 'controller.P1.0', 'peripheral'])
})


test('final validation warns about incomplete inline wiring without blocking', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    const passive = new Pair()
    const root = new Pair().wire({ P1: passive.P1, P2: null })
    const entries = namedComponents({ circuit: { ROOT: root } })
    expect(() => validatePins(entries)).not.toThrow()
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('ROOT.P1.0.P2 (physical pin 2)'))
    warn.mockClear()
    passive.P2.wire(new Net('test-final-ground'))
    validatePins(entries)
    expect(warn).not.toHaveBeenCalled()
  } finally {
    warn.mockRestore()
  }
})

test('an empty connection list warns; explicit null is valid', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    const root = new Pair().wire({ P1: [], P2: null })
    validatePins([['ROOT', root]])
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('ROOT.P1'))
    expect(warn.mock.calls[0]?.[0]).not.toContain('ROOT.P2')
    warn.mockClear()
    root.wire({ P1: new Net('test-final-supply') })
    validatePins([['ROOT', root]])
    expect(warn).not.toHaveBeenCalled()
  } finally {
    warn.mockRestore()
  }
})

test('graph discovery excludes disconnected declarations and includes inline parts', () => {
  sheet('GRAPH')
  const inline = new Pair().wire({ P2: new Net('graph-private-test') })
  inline.schema = 'Device:C'
  const root = new Pair().wire({ P1: inline.P1, P2: null })
  const disconnected = new Pair().wire({ P1: null, P2: null })
  markSources('GRAPH', { MCU: root, UNUSED: disconnected })
  const entries = circuitComponents(root)
  expect(entries.map(([name]) => name)).toEqual(['MCU', 'MCU.P1.0'])
  expect(inline.sheetName).toBe('GRAPH')
})

test('sheet sets context for subsequent components until overridden', () => {
  sheet('USER INTERFACE')
  const inline = new Pair()
  const first = new Pair().wire({ P1: inline.P1, P2: null })
  sheet('MCU')
  const second = new Pair()
  expect(first.sheetName).toBe('USER INTERFACE')
  expect(inline.sheetName).toBe('USER INTERFACE')
  expect(second.sheetName).toBe('MCU')
  expect(new Pair().sheetName).toBe('MCU')
})

test('one-pin labels warn once even when repeated on that pin', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    const part = new Pair().wire({ P1: [new Net('label-single-test'), new Net('label-single-test')], P2: null })
    expect(() => validateLabels([['PART', part]])).not.toThrow()
    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('"label-single-test" (1 pin: PART.P1)'))
  } finally { warn.mockRestore() }
})

test('a label used once in code is valid when a direct pin reference connects it', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    sheet('LABEL TEST')
    const source = new Pair().wire({ P1: new Net('label-direct-test'), P2: null })
    const consumer = new Pair().wire({ P1: source.P1, P2: null })
    validateLabels([['SOURCE', source], ['CONSUMER', consumer]])
    expect(warn).not.toHaveBeenCalled()
  } finally { warn.mockRestore() }
})

test('labels count distinct pins on the same component; anonymous nets are ignored', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    const part = new Pair().wire({ P1: new Net('label-two-pins-test'), P2: new Net('label-two-pins-test') })
    const anonymous = new Pair().wire({ P1: new Net(), P2: null })
    validateLabels([['PART', part], ['ANONYMOUS', anonymous]])
    expect(warn).not.toHaveBeenCalled()
  } finally { warn.mockRestore() }
})

test('label validation does not count other nets through a component', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    const resistor = new Pair().wire({ P1: new Net('label-unused-side'), P2: new Net('label-connected-side') })
    const consumer = new Pair().wire({ P1: resistor.P2, P2: null })
    validateLabels([['RESISTOR', resistor], ['CONSUMER', consumer]])
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('label-unused-side'))
    expect(warn.mock.calls[0]?.[0]).not.toContain('label-connected-side')
  } finally { warn.mockRestore() }
})

test('BOM applies first matching row and preserves unmatched parts for warnings', () => {
  const specific = new Pair({ value: '10uF', package: '0805' })
  const fallback = new Pair({ value: '10uF' })
  const unmatched = new Pair({ value: '22uF' })
  applyBom([specific, fallback, unmatched], [
    { value: '10uF', package: '0805', footprint: 'C_0805', manufacturer: 'Maker', partNumber: 'A' },
    { value: '10uF', footprint: 'C_0603', manufacturer: 'Maker', partNumber: 'B' },
  ])
  expect(specific.footprint).toBe('C_0805')
  expect(fallback.footprint).toBe('C_0603')
  expect(unmatched.footprint).toBe('')
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    expect(() => validateBom([['C1', specific], ['C2', fallback], ['C3', unmatched]])).not.toThrow()
    expect(warn).toHaveBeenCalledWith('Warning: missing BOM details:\nC3 (22uF): footprint, manufacturer, partNumber')
  } finally { warn.mockRestore() }
})

test('BOM warns for blank fields, allows optional supplier data, and skips excluded parts', () => {
  const incomplete = new Pair({ footprint: 'R_0402', properties: { Manufacturer: ' ', 'MFR.Part #': 'R1' } })
  const excluded = new Pair({ properties: { exclude_from_bom: null } })
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    validateBom([['R1', incomplete], ['EXCLUDED', excluded]])
    expect(warn).toHaveBeenCalledWith('Warning: missing BOM details:\nR1 (): manufacturer')
    warn.mockClear()
    incomplete.properties.Manufacturer = 'Maker'
    validateBom([['R1', incomplete], ['EXCLUDED', excluded]])
    expect(warn).not.toHaveBeenCalled()
  } finally { warn.mockRestore() }
})

test('explicit references are reserved before automatic numbering', async () => {
  const { assignReferences } = await import('./index')
  const a = new Pair({ ref: 'C1' }), b = new Pair(), c = new Pair({ ref: 'C3' }), d = new Pair()
  for (const part of [a, b, c, d]) part.referencePrefix = 'C'
  expect(Object.fromEntries(assignReferences([['D', d], ['B', b], ['A', a], ['C', c]])))
    .toEqual({ A: 'C1', C: 'C3', B: 'C2', D: 'C4' })
  expect(() => assignReferences([['A', a], ['B', new Pair({ ref: 'c1' })]])).toThrow('Duplicate reference')
  expect(() => assignReferences([['A', new Pair({ ref: 'C?' })]])).toThrow('Invalid reference')
})

test('reference BOM overrides merge with symbol defaults, including automatic refs', async () => {
  const { assignReferences } = await import('./index')
  const part = new Pair()
  part.schema = 'Device:C'; part.referencePrefix = 'C'
  part.ref = assignReferences([['CAP', part]]).get('CAP')
  applyBom([part], [
    { schema: 'Device:C', footprint: 'C_0603', manufacturer: 'Maker', partNumber: 'Default', properties: { height: '1' } },
    { ref: ['C1', 'C2'], partNumber: 'Selected', properties: { tolerance: '5%' } },
  ])
  expect(part.footprint).toBe('C_0603')
  expect(part.properties).toEqual({ Manufacturer: 'Maker', 'MFR.Part #': 'Selected', height: '1', tolerance: '5%' })
})

test('configured electrical modes only override existing pins',()=>{
  expect(new Pair({pinTypes:{P1:'power_out'}}).pinTypes).toEqual({P1:'power_out'})
  expect(()=>new Pair({pinTypes:{P3:'input'}})).toThrow('Unknown pin type override: P3')
})

test('multiple roots collect disconnected circuits and deduplicate shared components',()=>{
  const a=new Pair().wire({P1:null,P2:null}),b=new Pair().wire({P1:null,P2:null})
  const entries=circuitComponents(a,b,a)
  expect(new Set(entries.map(([,part])=>part))).toEqual(new Set([a,b]))
  expect(new Set(entries.map(([name])=>name)).size).toBe(2)
  const c=new Pair(),d=new Pair();c.wire({ P1: d.P1 })
  expect(circuitComponents(c,d)).toHaveLength(2)
})

test('local labels belong to their declaration sheet; global labels cross sheets',async()=>{
  const {global}=await import('./index')
  sheet('LOCAL_A');const a=new Pair().wire({P1:new Net('SAME_LOCAL'),P2:global('SHARED_LABEL_TEST')})
  sheet('LOCAL_B');const b=new Pair().wire({P1:new Net('SAME_LOCAL'),P2:global('SHARED_LABEL_TEST')})

  expect(reachable(a.P1).has(b.P1)).toBe(false)
  expect(reachable(a.P2).has(b.P2)).toBe(true)
  expect(() => a.P1.wire(new Net('LATE_LOCAL'))).toThrow('Local net')
})

test('importing an unused power symbol does not turn a global label into power',async()=>{
  const {global}=await import('./index'),{power}=await import('./power')
  const unused=power('UNUSED_POWER_TEST')
  const label=global('UNUSED_POWER_TEST')
  expect(label.connections.has(unused)).toBe(false)
  const part=new Pair().wire({ P1: unused })
  expect(unused.connections.has(label)).toBe(true)
  expect(part.P1.connections.has(unused)).toBe(true)
})

test('local creates independent unnamed nets and supports direct pin references', async () => {
  const { local } = await import('./helpers')
  const first = local(), second = local()
  expect(first).not.toBe(second)
  expect(first.name).toBeUndefined()
  const a = new Pair().wire({ P1: first, P2: second })
  const b = new Pair().wire({ P1: a.P1, P2: first })
  expect(reachable(a.P1).has(b.P1)).toBe(true)
  expect(reachable(a.P1).has(b.P2)).toBe(true)
  expect(reachable(a.P1).has(a.P2)).toBe(false)
  expect(a.P1.noConnect).toBe(false)
})

test('local scope rejects direct, indirect and late cross-sheet joins without mutation', async () => {
  const {global, validateNetScopes} = await import('./index')
  sheet('STRICT_A')
  const signal = local(), a = new Pair().wire({P1:signal,P2:global()})
  sheet('STRICT_B')
  const b = new Pair()
  expect(() => b.wire({P1:global(),P2:a.P1})).toThrow('Local net')
  expect(b.P1.connections.size).toBe(0)
  expect(b.P2.connections.size).toBe(0)
  expect(() => signal.wire(b.P1)).toThrow('Local net')
  expect(() => b.P1.wire(a.P1,global())).toThrow('Local net')
  b.wire({P1:a.P2})
  expect(() => a.P2.wire(local())).toThrow('Local net')
  a.sheetName='MOVED_A'
  expect(() => validateNetScopes([['a',a]])).toThrow('Local net')
})

test('unnamed global nets cross sheets through pins but remain independent', async () => {
  const {global}=await import('./index')
  sheet('UNNAMED_A')
  const a=new Pair().wire({P1:global(),P2:global()})
  sheet('UNNAMED_B')
  const b=new Pair().wire({P1:a.P1,P2:a.P2})
  expect(reachable(b.P1).has(a.P1)).toBe(true)
  expect(reachable(b.P1).has(b.P2)).toBe(false)
  const c=new Pair()
  sheet('UNNAMED_C')
  expect(() => new Pair().wire({P1:c.P1})).toThrow('requires global()')
})

test('pin.wire joins string labels within the receiving sheet, including later calls', () => {
  sheet('STRING_A')
  const first = new Pair().wire({P1: 'SIGNAL', P2: null})
  const second = new Pair().wire({P1: ['SIGNAL', new Net('SIGNAL')], P2: null})
  sheet('STRING_B')
  const other = new Pair().wire({P1: 'SIGNAL', P2: null})
  expect(reachable(first.P1).has(second.P1)).toBe(true)
  expect(reachable(first.P1).has(other.P1)).toBe(false)
  expect(first.P1.wire('LATE_SIGNAL')).toBe(first.P1)
  expect(() => other.P1.wire(first.P1)).toThrow('Local net')
  expect([...first.P1.connections].some(n => n instanceof Net && n.name === 'LATE_SIGNAL' && n.sheetName === 'STRING_A')).toBe(true)
})

test('invalid string wiring does not partially connect pins', () => {
  sheet('STRING_ATOMIC')
  const existing = new Pair().wire({P1: 'EXISTING'})
  const next = new Pair().wire({P2: null})
  expect(() => next.wire({P1: 'EXISTING', P2: 'INVALID'})).toThrow('no-connect')
  expect(next.P1.connections.size).toBe(0)
  expect(reachable(existing.P1).has(next.P1)).toBe(false)
  expect(() => next.P2.wire('EXISTING')).toThrow('no-connect')
})

test('wire cannot connect a pin marked no-connect in the same map, in either order', () => {
  for (const reverse of [false, true]) {
    const part = new Pair()
    const mapping = reverse ? { P2: part.P1, P1: null } : { P1: null, P2: part.P1 }
    expect(() => part.wire(mapping)).toThrow('no-connect')
    expect(part.P1.noConnect).toBe(false)
    expect(part.P1.connections.size).toBe(0)
    expect(part.P2.connections.size).toBe(0)
  }
})

test('pins are direct typed properties and cannot overwrite component behavior', () => {
  class Sensor extends Component.withPins({ SDA: '14', SCL: '13' }) {}
  const sensor = new Sensor()
  expect(sensor.SDA.number).toBe('14')
  expect(sensor.SDA.wire(local())).toBe(sensor.SDA)
  expect('connect' in sensor.SDA).toBe(false)
  expect(sensor.wire({ SCL: null })).toBe(sensor)
  expect('p' in sensor).toBe(false)
  // @ts-expect-error Unknown direct pins are not accepted.
  expect(sensor.NOT_A_PIN).toBeUndefined()
  class Invalid extends Component.withPins({ wire: '1' }) {}
  expect(() => new Invalid()).toThrow('Pin name conflicts')
})
