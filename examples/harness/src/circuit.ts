import { local, r, sheet } from 'ts-kicad/helpers'
import { GND, P12V, PWR_FLAG } from 'ts-kicad/power'
import {
  _5018761840,
  _212528_0400,
  TYPE_C_31_M_04,
  STPS2H100ZFY,
  BAS40DW_04_7_F,
  SMF16A_C2943844,
  DMN3200U_7,
  DG419LEDY_T1_GE4,
} from '../lib/components/symbols'
import { bom } from './bom'

sheet('Harness')

// Named handles let the PCB layout reference these same schematic components.
export const SBU_PULLDOWN = r({ value: '120' }).partial({ P1: GND })
export const SBU_SERIES = r({ value: '120' }).partial({ P1: SBU_PULLDOWN.p.P2 })

export const HARNESS = new _5018761840({ value: '5018761840' }).wire({
  P1: [GND, new PWR_FLAG().p.P1],
  P2: local('IGN_12'),
  P3: local('CAN0_H'),
  P4: local('CAN0_H'),
  P5: local('CAN0_H_TERM'),
  P6: local('CAN0_L'),
  P7: local('CAN1_L'),
  P8: local('CAN1_H'),
  P9: local('CAN1_H'),
  P10: [P12V, new PWR_FLAG().p.P1],
  P11: local('CAN1_L'),
  P12: P12V,
  P13: local('CAN2_L'),
  P14: local('IGN_12'),
  P15: local('CAN2_L_TERM'),
  P16: local('CAN2_H'),
  P17: GND,
  P18: local('CAN2_L'),
})

export const AUXILIARY = new _212528_0400({ value: '212528-0400' }).wire({
  P1: local('CAN3_L'),
  P2: local('CAN3_H'),
  P3: GND,
  P4: P12V,
})

// This connector carries the harness signals and 12 V, not standard USB.
export const DEVICE = new TYPE_C_31_M_04({ value: 'TYPE-C-31-M-04' }).wire({
  GND_A1: GND,
  GND_A12: GND,
  GND_B1: GND,
  GND_B12: GND,
  P0: GND,
  VBUS_A4: P12V,
  VBUS_A9: P12V,
  VBUS_B4: P12V,
  VBUS_B9: P12V,
  SSTXP1: HARNESS.p.P3,
  SSTXn1: HARNESS.p.P6,
  SSRXn2: HARNESS.p.P7,
  SSRXp2: HARNESS.p.P8,
  SSTXp2: HARNESS.p.P16,
  SSTXn2: HARNESS.p.P13,
  SSRXn1: AUXILIARY.p.P1,
  SSRXp1: AUXILIARY.p.P2,
  SUB1: [local('SBU1'), SBU_SERIES.p.P2],
  SUB2: local('SBU2'),
  CC1: null,
  CC2: null,
  DP1: null,
  DP2: null,
  DN1: null,
  DN2: null,
})

export const IGNITION_GATE = r({ value: '1k' }).partial({ P2: HARNESS.p.P2 })
export const IGNITION_PULLDOWN = r({ value: '1k' }).partial({ P1: GND })
export const IGNITION_OUTPUT = r({ value: '1k' }).partial({ P2: DEVICE.p.SUB2 })
export const CAN0_TERMINATION = r({ value: '120' }).partial({ P2: HARNESS.p.P5 })
export const CAN2_TERMINATION = r({ value: '120' }).partial({ P1: HARNESS.p.P13 })
export const CAN2_ALT_TERMINATION = r({ value: '120' }).partial({ P1: HARNESS.p.P15 })

export const IGNITION_DIODE = new STPS2H100ZFY({ value: 'STPS2H100ZFY' }).wire({ A: HARNESS.p.P2, C: P12V })
export const SUPPLY_TVS = new SMF16A_C2943844({ value: 'SMF16A' }).wire({ C: P12V, A: GND })

export const CAN0_CLAMP = new BAS40DW_04_7_F({ value: 'BAS40DW-04-7-F' }).wire({
  A1: GND,
  C1: P12V,
  AC2: HARNESS.p.P3,
  A2: GND,
  C2: P12V,
  AC1: HARNESS.p.P6,
})

export const CAN2_CLAMP = new BAS40DW_04_7_F({ value: 'BAS40DW-04-7-F' }).wire({
  A1: GND,
  C1: P12V,
  AC2: HARNESS.p.P16,
  A2: GND,
  C2: P12V,
  AC1: HARNESS.p.P13,
})

export const IGNITION = new DMN3200U_7({ value: 'DMN3200U-7', pinTypes: { G: 'input' } }).wire({
  S: GND,
  G: [IGNITION_GATE.p.P1, IGNITION_PULLDOWN.p.P2],
  D: IGNITION_OUTPUT.p.P1,
})

export const CAN2_SWITCH = new DG419LEDY_T1_GE4({
  value: 'DG419LEDY-T1-GE4',
  pinTypes: { IN: 'input', GND: 'power_in', 'V+': 'power_in', VL: 'power_in', 'V-': 'power_in' },
}).wire({
  COM: HARNESS.p.P16,
  NC: HARNESS.p.P3,
  GND,
  'V+': P12V,
  VL: P12V,
  IN: DEVICE.p.SUB1,
  'V-': GND,
  NO: [CAN2_TERMINATION.p.P2, CAN2_ALT_TERMINATION.p.P2],
})

export const CAN0_SWITCH = new DG419LEDY_T1_GE4({
  value: 'DG419LEDY-T1-GE4',
  pinTypes: { IN: 'input', GND: 'power_in', 'V+': 'power_in', VL: 'power_in', 'V-': 'power_in' },
}).wire({
  COM: HARNESS.p.P6,
  NC: HARNESS.p.P13,
  GND,
  'V+': P12V,
  VL: P12V,
  IN: DEVICE.p.SUB1,
  'V-': GND,
  NO: CAN0_TERMINATION.p.P1,
})

HARNESS.bom = bom
