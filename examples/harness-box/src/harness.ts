import { r } from 'ts-kicad/helpers'
import { GND, P12V, PWR_FLAG } from 'ts-kicad/power'
import { TYPE_C_31_M_04 } from '../lib/C129018/symbols.ts'
import { BAS40DW_04_7_F } from '../lib/C134364/symbols.ts'
import { DG419LEDY_T1_GE4 } from '../lib/C2673265/symbols.ts'
import { STPS2H100ZFY } from '../lib/C2969868/symbols.ts'
import { _5018761840 } from '../lib/C293583/symbols.ts'
import { _212528_0400 } from '../lib/C5354889/symbols.ts'
import { SMF16A_C2943844 } from '../lib/C2943844/symbols.ts'
import { DMN3200U_7 } from '../lib/C461018/symbols.ts'

export const SBU_PULLDOWN = r({ value: '120' }).wire({ P1: GND })
export const SBU_SERIES = r({ value: '120' }).wire({ P1: SBU_PULLDOWN.P2 })

export const HARNESS = new _5018761840({ value: '5018761840' }).wire({
  P1: [GND, new PWR_FLAG().P1],
  P2: 'IGN_12',
  P3: 'CAN0_H',
  P4: 'CAN0_H',
  P5: 'CAN0_H_TERM',
  P6: 'CAN0_L',
  P7: 'CAN1_L',
  P8: 'CAN1_H',
  P9: 'CAN1_H',
  P10: [P12V, new PWR_FLAG().P1],
  P11: 'CAN1_L',
  P12: P12V,
  P13: 'CAN2_L',
  P14: 'IGN_12',
  P15: 'CAN2_L_TERM',
  P16: 'CAN2_H',
  P17: GND,
  P18: 'CAN2_L',
})

export const _4PIN = new _212528_0400({ value: '212528-0400' }).wire({
  P1: 'CAN3_L',
  P2: 'CAN3_H',
  P3: GND,
  P4: P12V,
})

export const OBD_C = new TYPE_C_31_M_04({ value: 'TYPE-C-31-M-04' }).wire({
  GND_A1: GND,
  GND_A12: GND,
  GND_B1: GND,
  GND_B12: GND,
  P0: GND,
  VBUS_A4: P12V,
  VBUS_A9: P12V,
  VBUS_B4: P12V,
  VBUS_B9: P12V,
  SSTXP1: HARNESS.P3,
  SSTXn1: HARNESS.P6,
  SSRXn2: HARNESS.P7,
  SSRXp2: HARNESS.P8,
  SSTXp2: HARNESS.P16,
  SSTXn2: HARNESS.P13,
  SSRXn1: _4PIN.P1,
  SSRXp1: _4PIN.P2,
  SUB1: ['SBU1', SBU_SERIES.P2],
  SUB2: 'SBU2',
  CC1: null,
  CC2: null,
  DP1: null,
  DP2: null,
  DN1: null,
  DN2: null,
})

export const IGNITION_GATE = r({ value: '1k' }).wire({ P2: HARNESS.P2 })
export const IGNITION_PULLDOWN = r({ value: '1k' }).wire({ P1: GND })
export const IGNITION_OUTPUT = r({ value: '1k' }).wire({ P2: OBD_C.SUB2 })
export const CAN0_TERMINATION = r({ value: '120' }).wire({ P2: HARNESS.P5 })
export const CAN2_TERMINATION = r({ value: '120' }).wire({ P1: HARNESS.P13 })
export const CAN2_ALT_TERMINATION = r({ value: '120' }).wire({ P1: HARNESS.P15 })

export const IGNITION_DIODE = new STPS2H100ZFY({ value: 'STPS2H100ZFY' }).wire({ A: HARNESS.P2, C: P12V })
export const SUPPLY_TVS = new SMF16A_C2943844({ value: 'SMF16A' }).wire({ C: P12V, A: GND })

export const CAN0_CLAMP = new BAS40DW_04_7_F({ value: 'BAS40DW-04-7-F' }).wire({
  A1: GND,
  C1: P12V,
  AC2: HARNESS.P3,
  A2: GND,
  C2: P12V,
  AC1: HARNESS.P6,
})

export const CAN2_CLAMP = new BAS40DW_04_7_F({ value: 'BAS40DW-04-7-F' }).wire({
  A1: GND,
  C1: P12V,
  AC2: HARNESS.P16,
  A2: GND,
  C2: P12V,
  AC1: HARNESS.P13,
})

export const IGNITION = new DMN3200U_7({ value: 'DMN3200U-7' }).wire({
  S: GND,
  G: [IGNITION_GATE.P1, IGNITION_PULLDOWN.P2],
  D: IGNITION_OUTPUT.P1,
})

export const CAN2_SWITCH = new DG419LEDY_T1_GE4({
  value: 'DG419LEDY-T1-GE4',
}).wire({
  COM: HARNESS.P16,
  NC: HARNESS.P3,
  GND,
  'V+': P12V,
  VL: P12V,
  IN: OBD_C.SUB1,
  'V-': GND,
  NO: [CAN2_TERMINATION.P2, CAN2_ALT_TERMINATION.P2],
})

export const CAN0_SWITCH = new DG419LEDY_T1_GE4({
  value: 'DG419LEDY-T1-GE4',
}).wire({
  COM: HARNESS.P6,
  NC: HARNESS.P13,
  GND,
  'V+': P12V,
  VL: P12V,
  IN: OBD_C.SUB1,
  'V-': GND,
  NO: CAN0_TERMINATION.P1,
})
