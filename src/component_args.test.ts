import { expect, test } from 'bun:test'
import { Component } from './index'
import { R, c, r } from '../lib/symbols/Device'
import { PWR_FLAG } from '../lib/symbols/power'

class Pair extends Component.withPins(['1', '2']) {}

test('base and pinned components accept references or existing options', () => {
  expect(new Component('U1', { value: 'sensor' }).ref).toBe('U1')
  expect(new Component({ ref: 'U2' }).ref).toBe('U2')
  const part = new Pair('J1', { pinTypes: { P1: 'input' } }).wire({ P2: null })
  expect(part.ref).toBe('J1')
  expect(part.pinTypes).toEqual({ P1: 'input' })
  expect(part.P2.noConnect).toBe(true)
  expect(new Pair({ ref: 'J2' }).ref).toBe('J2')
  expect(new Pair().ref).toBeUndefined()
})

test('generated symbols and helpers preserve options in both argument formats', () => {
  const options = { value: '100R', package: '0603', pinTypes: { P1: 'input' as const }, properties: { note: 'test' } }
  for (const make of [r, (ref: string, opts: typeof options) => new R(ref, opts)]) {
    const part = make('R27', options)
    expect(part.ref).toBe('R27')
    expect(part.value).toBe('100R')
    expect(part.package).toBe('0603')
    expect(part.pinTypes).toEqual({ P1: 'input', P2: 'passive' })
    expect(part.properties).toEqual({ note: 'test' })
  }
  expect(r({ ref: 'R28', ...options }).ref).toBe('R28')
  expect(new R({ ref: 'R29', ...options }).value).toBe('100R')
  expect(r('R30').ref).toBe('R30')
  expect(c('C1', { value: '100nF' }).value).toBe('100nF')
  expect(c({ ref: 'C2' }).ref).toBe('C2')
  expect(r().ref).toBeUndefined()
  expect(new R().ref).toBeUndefined()
  expect(r('R31', { ref: 'ignored' }).ref).toBe('R31')
  expect(options).not.toHaveProperty('ref')
})

test('ref-first power symbols retain generated defaults and property overrides', () => {
  const flag = new PWR_FLAG('#FLG01', { properties: { note: 'test' } })
  expect(flag.ref).toBe('#FLG01')
  expect(flag.value).toBe('PWR_FLAG')
  expect(flag.pinTypes).toEqual({ P1: 'power_out' })
  expect(flag.properties).toEqual({ exclude_from_bom: null, exclude_from_board: null, note: 'test' })
  expect(new PWR_FLAG({ ref: '#FLG02' }).ref).toBe('#FLG02')
})
