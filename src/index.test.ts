import { local } from './index'
import { expect, test, spyOn } from 'bun:test'
import { Component, applyBom, validateBom, namedComponents, validatePins, Net, sheet, circuitComponents, validateLabels } from './index'

class Pair extends Component.withPins(['1', '2']) {}

test('partial maps a subset and rejects invalid maps before mutating pins', () => {
  const part = new Pair()
  expect(part.partial({ P1: local('partial-supply') })).toBe(part)
  expect(part.p.P2.connections.size).toBe(0)
  expect(part.partial({ P2: null })).toBe(part)
  const fresh = new Pair()
  // @ts-expect-error Unknown pins must fail type checking too.
  expect(() => fresh.partial({ P1: local('partial-invalid'), P3: null })).toThrow('Unknown pin')
  expect(fresh.p.P1.connections.size).toBe(0)
  expect(() => fresh.partial({ P1: local('partial-invalid'), P2: part.p.P2 })).toThrow('no-connect')
  expect(fresh.p.P1.connections.size).toBe(0)
  expect(() => fresh.partial({ P1: undefined })).toThrow('Undefined connection')
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

test('wire requires every pin and refuses connections to explicit no-connects', () => {
  const part = new Pair()
  // @ts-expect-error A missing physical pin must also fail type checking.
  expect(() => part.wire({ P1: local('test-supply') })).toThrow('Missing pins')
  expect(part.p.P1.connections.size).toBe(0)
  part.wire({ P1: local('test-supply'), P2: null })
  expect(() => part.p.P2.connect(local('test-ground'))).toThrow('no-connect')
  expect(part.p.P1.connect(local('test-supply'))).toBe(part.p.P1)
})

test('inline collection preserves ownership when roots reference each other', () => {
  const passive = new Pair().partial({ P2: local('test-return') })
  const peripheral = new Pair().wire({ P1: local('test-data'), P2: null })
  const controller = new Pair().wire({ P1: [peripheral.p.P1, passive.p.P1], P2: null })
  expect(namedComponents({ control: { controller }, sensor: { peripheral } }).map(([name]) => name))
    .toEqual(['controller', 'controller.P1.0', 'peripheral'])
})


test('final validation warns about incomplete inline wiring without blocking', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    const passive = new Pair()
    const root = new Pair().wire({ P1: passive.p.P1, P2: null })
    const entries = namedComponents({ circuit: { ROOT: root } })
    expect(() => validatePins(entries)).not.toThrow()
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('ROOT.P1.0.p.P2 (physical pin 2)'))
    warn.mockClear()
    passive.p.P2.connect(local('test-final-ground'))
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
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('ROOT.p.P1'))
    expect(warn.mock.calls[0]?.[0]).not.toContain('ROOT.p.P2')
    warn.mockClear()
    root.partial({ P1: local('test-final-supply') })
    validatePins([['ROOT', root]])
    expect(warn).not.toHaveBeenCalled()
  } finally {
    warn.mockRestore()
  }
})

test('graph discovery excludes disconnected declarations and includes inline parts', () => {
  sheet('GRAPH')
  const inline = new Pair().partial({ P2: local('graph-private-test') })
  inline.schema = 'Device:C'
  const root = new Pair().wire({ P1: inline.p.P1, P2: null })
  const disconnected = new Pair().wire({ P1: null, P2: null })
  markSources('GRAPH', { MCU: root, UNUSED: disconnected })
  const entries = circuitComponents(root)
  expect(entries.map(([name]) => name)).toEqual(['MCU', 'MCU.P1.0'])
  expect(inline.sheetName).toBe('GRAPH')
})

test('sheet sets context for subsequent components until overridden', () => {
  sheet('USER INTERFACE')
  const inline = new Pair()
  const first = new Pair().wire({ P1: inline.p.P1, P2: null })
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
    const part = new Pair().wire({ P1: [local('label-single-test'), new Net('label-single-test')], P2: null })
    expect(() => validateLabels([['PART', part]])).not.toThrow()
    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('"label-single-test" (1 pin: PART.p.P1)'))
  } finally { warn.mockRestore() }
})

test('a label used once in code is valid when a direct pin reference connects it', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    sheet('LABEL TEST')
    const source = new Pair().wire({ P1: local('label-direct-test'), P2: null })
    const consumer = new Pair().wire({ P1: source.p.P1, P2: null })
    validateLabels([['SOURCE', source], ['CONSUMER', consumer]])
    expect(warn).not.toHaveBeenCalled()
  } finally { warn.mockRestore() }
})

test('labels count distinct pins on the same component; anonymous nets are ignored', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    const part = new Pair().wire({ P1: local('label-two-pins-test'), P2: local('label-two-pins-test') })
    const anonymous = new Pair().wire({ P1: new Net(), P2: null })
    validateLabels([['PART', part], ['ANONYMOUS', anonymous]])
    expect(warn).not.toHaveBeenCalled()
  } finally { warn.mockRestore() }
})

test('label validation does not count other nets through a component', () => {
  const warn = spyOn(console, 'warn').mockImplementation(() => {})
  try {
    const resistor = new Pair().wire({ P1: local('label-unused-side'), P2: local('label-connected-side') })
    const consumer = new Pair().wire({ P1: resistor.p.P2, P2: null })
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
  const c=new Pair(),d=new Pair();c.partial({ P1: d.p.P1 })
  expect(circuitComponents(c,d)).toHaveLength(2)
})

test('local labels belong to their declaration sheet; global labels cross sheets',async()=>{
  const {global}=await import('./index')
  sheet('LOCAL_A');const a=new Pair().wire({P1:local('SAME_LOCAL'),P2:global('SHARED_LABEL_TEST')})
  sheet('LOCAL_B');const b=new Pair().wire({P1:local('SAME_LOCAL'),P2:global('SHARED_LABEL_TEST')})

  expect(reachable(a.p.P1).has(b.p.P1)).toBe(false)
  expect(reachable(a.p.P2).has(b.p.P2)).toBe(true)
  expect(() => a.p.P1.connect(local('LATE_LOCAL'))).toThrow('Local net')
})

test('importing an unused power symbol does not turn a global label into power',async()=>{
  const {global}=await import('./index'),{power}=await import('./power')
  const unused=power('UNUSED_POWER_TEST')
  const label=global('UNUSED_POWER_TEST')
  expect(label.connections.has(unused)).toBe(false)
  const part=new Pair().partial({ P1: unused })
  expect(unused.connections.has(label)).toBe(true)
  expect(part.p.P1.connections.has(unused)).toBe(true)
})

test('local creates independent unnamed nets and supports direct pin references', async () => {
  const { local } = await import('./helpers')
  const first = local(), second = local()
  expect(first).not.toBe(second)
  expect(first.name).toBeUndefined()
  const a = new Pair().wire({ P1: first, P2: second })
  const b = new Pair().wire({ P1: a.p.P1, P2: first })
  expect(reachable(a.p.P1).has(b.p.P1)).toBe(true)
  expect(reachable(a.p.P1).has(b.p.P2)).toBe(true)
  expect(reachable(a.p.P1).has(a.p.P2)).toBe(false)
  expect(a.p.P1.noConnect).toBe(false)
})

test('local scope rejects direct, indirect and late cross-sheet joins without mutation', async () => {
  const {global, validateNetScopes} = await import('./index')
  sheet('STRICT_A')
  const signal = local(), a = new Pair().wire({P1:signal,P2:global()})
  sheet('STRICT_B')
  const b = new Pair()
  expect(() => b.partial({P1:global(),P2:a.p.P1})).toThrow('Local net')
  expect(b.p.P1.connections.size).toBe(0)
  expect(b.p.P2.connections.size).toBe(0)
  expect(() => signal.connect(b.p.P1)).toThrow('Local net')
  expect(() => b.p.P1.connect(a.p.P1,global())).toThrow('Local net')
  b.partial({P1:a.p.P2})
  expect(() => a.p.P2.connect(local())).toThrow('Local net')
  a.sheetName='MOVED_A'
  expect(() => validateNetScopes([['a',a]])).toThrow('Local net')
})

test('unnamed global nets cross sheets through pins but remain independent', async () => {
  const {global}=await import('./index')
  sheet('UNNAMED_A')
  const a=new Pair().wire({P1:global(),P2:global()})
  sheet('UNNAMED_B')
  const b=new Pair().wire({P1:a.p.P1,P2:a.p.P2})
  expect(reachable(b.p.P1).has(a.p.P1)).toBe(true)
  expect(reachable(b.p.P1).has(b.p.P2)).toBe(false)
  const c=new Pair()
  sheet('UNNAMED_C')
  expect(() => new Pair().partial({P1:c.p.P1})).toThrow('requires global()')
})

test('bare strings are rejected by component and pin APIs', () => {
  const part=new Pair()
  // @ts-expect-error Connections no longer accept strings.
  expect(() => part.partial({P1:'GND'})).toThrow('strings are not supported')
  // @ts-expect-error Connections no longer accept strings.
  expect(() => part.p.P1.connect('GND')).toThrow('strings are not supported')
  expect(part.p.P1.connections.size).toBe(0)
})

test('partial cannot connect a pin marked no-connect in the same map, in either order', () => {
  for (const reverse of [false, true]) {
    const part = new Pair()
    const mapping = reverse ? { P2: part.p.P1, P1: null } : { P1: null, P2: part.p.P1 }
    expect(() => part.partial(mapping)).toThrow('no-connect')
    expect(part.p.P1.noConnect).toBe(false)
    expect(part.p.P1.connections.size).toBe(0)
    expect(part.p.P2.connections.size).toBe(0)
  }
})
