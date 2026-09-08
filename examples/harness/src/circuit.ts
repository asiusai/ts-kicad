import { local, r, sheet } from 'ts-kicad/helpers'
import { GND, P12V, PWR_FLAG } from 'ts-kicad/power'
import {
  _5018761840, _212528_0400, TYPE_C_31_M_04, STPS2H100ZFY,
  BAS40DW_04_7_F, SMF16A_C2943844, DMN3200U_7, DG419LEDY_T1_GE4,
} from '../lib/components/symbols'
import { bom } from './bom'

sheet('Harness')

export const HARNESS = new _5018761840({ value: '5018761840', ref: 'J1' }).wire({
  P1: [GND, new PWR_FLAG().p.P1], P2: local('IGN_12'),
  P3: local('CAN0_H'), P4: local('CAN0_H'), P5: local('CAN0_H_TERM'),
  P6: local('CAN0_L'), P7: local('CAN1_L'), P8: local('CAN1_H'),
  P9: local('CAN1_H'), P10: [P12V, new PWR_FLAG().p.P1], P11: local('CAN1_L'), P12: P12V,
  P13: local('CAN2_L'), P14: local('IGN_12'), P15: local('CAN2_L_TERM'),
  P16: local('CAN2_H'), P17: GND, P18: local('CAN2_L'),
})

export const AUXILIARY = new _212528_0400({ value: '212528-0400', ref: 'J2' }).wire({
  P1: local('CAN3_L'), P2: local('CAN3_H'), P3: GND, P4: P12V,
})

// This connector carries the harness signals and 12 V, not standard USB.
export const DEVICE = new TYPE_C_31_M_04({ value: 'TYPE-C-31-M-04', ref: 'J3' }).wire({
  GND_A1: GND, GND_A12: GND, GND_B1: GND, GND_B12: GND, P0: GND,
  VBUS_A4: P12V, VBUS_A9: P12V, VBUS_B4: P12V, VBUS_B9: P12V,
  SSTXP1: HARNESS.p.P3, SSTXn1: HARNESS.p.P6,
  SSRXn2: HARNESS.p.P7, SSRXp2: HARNESS.p.P8,
  SSTXp2: HARNESS.p.P16, SSTXn2: HARNESS.p.P13,
  SSRXn1: AUXILIARY.p.P1, SSRXp1: AUXILIARY.p.P2,
  SUB1: [local('SBU1'), r({ ref: 'R3', value: '120' }).partial({
    P1: r({ ref: 'R2', value: '120' }).partial({ P1: GND }).p.P2,
  }).p.P2],
  SUB2: local('SBU2'),
  CC1: null, CC2: null, DP1: null, DP2: null, DN1: null, DN2: null,
})

export const IGNITION_DIODE = new STPS2H100ZFY({ value: 'STPS2H100ZFY', ref: 'D1' }).wire({ A: HARNESS.p.P2, C: P12V })
export const SUPPLY_TVS = new SMF16A_C2943844({ value: 'SMF16A', ref: 'D4' }).wire({ C: P12V, A: GND })

export const CAN_CLAMPS = [
  { ref: 'D2', high: HARNESS.p.P3, low: HARNESS.p.P6 },
  { ref: 'D3', high: HARNESS.p.P16, low: HARNESS.p.P13 },
].map(({ ref, high, low }) => new BAS40DW_04_7_F({ value: 'BAS40DW-04-7-F', ref }).wire({
  A1: GND, C1: P12V, AC2: high, A2: GND, C2: P12V, AC1: low,
}))

export const IGNITION = new DMN3200U_7({ value: 'DMN3200U-7', ref: 'Q6', pinTypes: { G: 'input' } }).wire({
  S: GND,
  G: [r({ ref: 'R4', value: '1k' }).partial({ P2: HARNESS.p.P2 }).p.P1,
    r({ ref: 'R5', value: '1k' }).partial({ P1: GND }).p.P2],
  D: r({ ref: 'R1', value: '1k' }).partial({ P2: DEVICE.p.SUB2 }).p.P1,
})

export const CAN_SWITCHES = [
  { ref: 'U1', common: HARNESS.p.P16, normallyClosed: HARNESS.p.P3,
    termination: [
      r({ ref: 'R7', value: '120' }).partial({ P1: HARNESS.p.P13 }).p.P2,
      r({ ref: 'R8', value: '120' }).partial({ P1: HARNESS.p.P15 }).p.P2,
    ] },
  { ref: 'U2', common: HARNESS.p.P6, normallyClosed: HARNESS.p.P13,
    termination: r({ ref: 'R6', value: '120' }).partial({ P2: HARNESS.p.P5 }).p.P1 },
].map(({ ref, common, normallyClosed, termination }) => new DG419LEDY_T1_GE4({ value: 'DG419LEDY-T1-GE4', ref,
  pinTypes: { IN: 'input', GND: 'power_in', 'V+': 'power_in', VL: 'power_in', 'V-': 'power_in' } }).wire({
  COM: common, NC: normallyClosed, GND, 'V+': P12V, VL: P12V,
  IN: DEVICE.p.SUB1, 'V-': GND, NO: termination,
}))

HARNESS.bom = bom
