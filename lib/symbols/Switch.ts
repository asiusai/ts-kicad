// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Generic push-button switch, two contact pins and shield pin(s)
 *
 * KiCad symbol: `Switch:SW_Push_Shielded`. Reference prefix: `SW`.
 * Keywords: switch normally-open pushbutton momentary.
 */
export class SW_Push_Shielded extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "B": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", B: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_Shielded";
  override referencePrefix = "SW";
}

/**
 * Microminiature SMT Side Actuated, 4.2 x 2.8 x 1.42mm, without pegs, with shield pin
 *
 * KiCad symbol: `Switch:CK_KMS2xxG`. Reference prefix: `SW`.
 * Footprint filters: *SW*KMS2*G*.
 * @see https://www.ckswitches.com/media/1482/kms.pdf
 * Keywords: switch normally-open pushbutton push-button.
 * Default footprint: Button_Switch_SMD:SW_SPST_CK_KMS2xxGP.
 */
export class CK_KMS2xxG extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "B": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", B: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:CK_KMS2xxG";
  override referencePrefix = "SW";
}

/**
 * Microminiature SMT Side Actuated, 4.2 x 2.8 x 1.42mm, with pegs, with shield pin
 *
 * KiCad symbol: `Switch:CK_KMS2xxGP`. Reference prefix: `SW`.
 * Footprint filters: *SW*KMS2*GP*.
 * @see https://www.ckswitches.com/media/1482/kms.pdf
 * Keywords: switch normally-open pushbutton push-button.
 * Default footprint: Button_Switch_SMD:SW_SPST_CK_KMS2xxGP.
 */
export class CK_KMS2xxGP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "B": "SH",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", B: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:CK_KMS2xxGP";
  override referencePrefix = "SW";
}

/**
 * Rotary switch, 4-bit encoding
 *
 * KiCad symbol: `Switch:SW_Coded`. Reference prefix: `SW`.
 * Keywords: rotary hex.
 */
export class SW_Coded extends Component.withPins({
  "CM": "1",
  "D0": "2",
  "D1": "3",
  "D2": "4",
  "D3": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CM: "passive", D0: "passive", D1: "passive", D2: "passive", D3: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Coded";
  override referencePrefix = "SW";
}

/**
 * Rotary switch, 4-bit encoding, 10 positions, Real code
 *
 * KiCad symbol: `Switch:SW_Coded_SH-7010`. Reference prefix: `SW`.
 * Footprint filters: Nidec*Copal*SH*7010*.
 * @see https://www.nidec-copal-electronics.com/e/catalog/switch/sh-7000.pdf
 * Keywords: rotary bcd Real.
 */
export class SW_Coded_SH_7010 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P8": "8",
  "PC": "C",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P4: "passive", P8: "passive", PC: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Coded_SH-7010";
  override referencePrefix = "SW";
}

/**
 * Rotary switch, 4-bit encoding, 10 positions, Complementary code
 *
 * KiCad symbol: `Switch:SW_Coded_SH-7030`. Reference prefix: `SW`.
 * Footprint filters: Nidec*Copal*SH*7010*.
 * @see https://www.nidec-copal-electronics.com/e/catalog/switch/sh-7000.pdf
 * Keywords: rotary bcd Complementary.
 */
export class SW_Coded_SH_7030 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P8": "8",
  "PC": "C",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P4: "passive", P8: "passive", PC: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Coded_SH-7030";
  override referencePrefix = "SW";
}

/**
 * Rotary switch, 4-bit encoding, 10 positions, Gray code
 *
 * KiCad symbol: `Switch:SW_Coded_SH-7040`. Reference prefix: `SW`.
 * Footprint filters: Nidec*Copal*SH*7040*.
 * @see https://www.nidec-copal-electronics.com/e/catalog/switch/sh-7000.pdf
 * Keywords: rotary bcd Gray.
 * Default footprint: Button_Switch_SMD:Nidec_Copal_SH-7040B.
 */
export class SW_Coded_SH_7040 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P8": "8",
  "PC": "C",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P4: "passive", P8: "passive", PC: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Coded_SH-7040";
  override referencePrefix = "SW";
}

/**
 * Rotary switch, 4-bit encoding, 16 positions, Real code
 *
 * KiCad symbol: `Switch:SW_Coded_SH-7050`. Reference prefix: `SW`.
 * Footprint filters: Nidec*Copal*SH*7010*.
 * @see https://www.nidec-copal-electronics.com/e/catalog/switch/sh-7000.pdf
 * Keywords: rotary hex Real.
 */
export class SW_Coded_SH_7050 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P8": "8",
  "PC": "C",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P4: "passive", P8: "passive", PC: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Coded_SH-7050";
  override referencePrefix = "SW";
}

/**
 * Rotary switch, 4-bit encoding, 16 positions, Complementary code
 *
 * KiCad symbol: `Switch:SW_Coded_SH-7070`. Reference prefix: `SW`.
 * Footprint filters: Nidec*Copal*SH*7010*.
 * @see https://www.nidec-copal-electronics.com/e/catalog/switch/sh-7000.pdf
 * Keywords: rotary hex Complementary.
 */
export class SW_Coded_SH_7070 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P8": "8",
  "PC": "C",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P4: "passive", P8: "passive", PC: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Coded_SH-7070";
  override referencePrefix = "SW";
}

/**
 * Rotary switch, 4-bit encoding, 16 positions, Gray code
 *
 * KiCad symbol: `Switch:SW_Coded_SH-7080`. Reference prefix: `SW`.
 * Footprint filters: Nidec*Copal*SH*7040*.
 * @see https://www.nidec-copal-electronics.com/e/catalog/switch/sh-7000.pdf
 * Keywords: rotary hex Gray.
 * Default footprint: Button_Switch_SMD:Nidec_Copal_SH-7040B.
 */
export class SW_Coded_SH_7080 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P8": "8",
  "PC": "C",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P4: "passive", P8: "passive", PC: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Coded_SH-7080";
  override referencePrefix = "SW";
}

/**
 * 1x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x01`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x1*.
 * Keywords: dip switch.
 */
export class SW_DIP_x01 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x01";
  override referencePrefix = "SW";
}

/**
 * 2x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x02`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x2*.
 * Keywords: dip switch.
 */
export class SW_DIP_x02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x02";
  override referencePrefix = "SW";
}

/**
 * 3x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x03`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x3*.
 * Keywords: dip switch.
 */
export class SW_DIP_x03 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x03";
  override referencePrefix = "SW";
}

/**
 * 4x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x04`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x4*.
 * Keywords: dip switch.
 */
export class SW_DIP_x04 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x04";
  override referencePrefix = "SW";
}

/**
 * 5x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x05`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x5*.
 * Keywords: dip switch.
 */
export class SW_DIP_x05 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x05";
  override referencePrefix = "SW";
}

/**
 * 6x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x06`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x6*.
 * Keywords: dip switch.
 */
export class SW_DIP_x06 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x06";
  override referencePrefix = "SW";
}

/**
 * 7x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x07`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x7*.
 * Keywords: dip switch.
 */
export class SW_DIP_x07 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x07";
  override referencePrefix = "SW";
}

/**
 * 8x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x08`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x8*.
 * Keywords: dip switch.
 */
export class SW_DIP_x08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x08";
  override referencePrefix = "SW";
}

/**
 * 9x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x09`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x9*.
 * Keywords: dip switch.
 */
export class SW_DIP_x09 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x09";
  override referencePrefix = "SW";
}

/**
 * 10x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x10`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x10*.
 * Keywords: dip switch.
 */
export class SW_DIP_x10 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x10";
  override referencePrefix = "SW";
}

/**
 * 11x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x11`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x11*.
 * Keywords: dip switch.
 */
export class SW_DIP_x11 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x11";
  override referencePrefix = "SW";
}

/**
 * 12x DIP Switch, Single Pole Single Throw (SPST) switch, small symbol
 *
 * KiCad symbol: `Switch:SW_DIP_x12`. Reference prefix: `SW`.
 * Footprint filters: SW?DIP?x12*.
 * Keywords: dip switch.
 */
export class SW_DIP_x12 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "P21": "21",
  "P22": "22",
  "P23": "23",
  "P24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "passive", P21: "passive", P22: "passive", P23: "passive", P24: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DIP_x12";
  override referencePrefix = "SW";
}

/**
 * Switch, three position, dual pole triple throw, 3 position switch, SP3T
 *
 * KiCad symbol: `Switch:SW_DP3T`. Reference prefix: `SW`.
 * Footprint filters: SW*, DP3T*.
 * Keywords: switch dp3t ON-ON-ON.
 */
export class SW_DP3T extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DP3T";
  override referencePrefix = "SW";
}

/**
 * Switch, dual pole double throw, separate symbols
 *
 * KiCad symbol: `Switch:SW_DPDT_x2`. Reference prefix: `SW`.
 * Footprint filters: SW*DPDT*.
 * Keywords: switch dual-pole double-throw DPDT spdt ON-ON.
 */
export class SW_DPDT_x2 extends Component.withPins({
  "A_1": "1",
  "B_2": "2",
  "C_3": "3",
  "A_4": "4",
  "B_5": "5",
  "C_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "passive", B_2: "passive", C_3: "passive", A_4: "passive", B_5: "passive", C_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DPDT_x2";
  override referencePrefix = "SW";
}

/**
 * Double Pole Single Throw (DPST) Switch
 *
 * KiCad symbol: `Switch:SW_DPST`. Reference prefix: `SW`.
 * Keywords: switch dual double-pole single-throw OFF-ON.
 */
export class SW_DPST extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DPST";
  override referencePrefix = "SW";
}

/**
 * Double Pole Single Throw (DPST) Switch, temperature dependent
 *
 * KiCad symbol: `Switch:SW_DPST_Temperature`. Reference prefix: `SW`.
 * Keywords: temperature switch dual double-pole single-throw OFF-ON.
 */
export class SW_DPST_Temperature extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DPST_Temperature";
  override referencePrefix = "SW";
}

/**
 * Single Pole Single Throw (SPST) switch, separate symbol
 *
 * KiCad symbol: `Switch:SW_DPST_x2`. Reference prefix: `SW`.
 * Keywords: switch lever.
 */
export class SW_DPST_x2 extends Component.withPins({
  "A_1": "1",
  "B_2": "2",
  "A_3": "3",
  "B_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "passive", B_2: "passive", A_3: "passive", B_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_DPST_x2";
  override referencePrefix = "SW";
}

/**
 * Push button switch with LCD screen
 *
 * KiCad symbol: `Switch:SW_E3_SA3216`. Reference prefix: `SW`.
 * Footprint filters: SW?PUSH?LCD?E3?SAxxxx*.
 * @see http://www.e3-keys.com/files/SA%20Technical%20Datasheet%20v2.0.pdf
 * Keywords: switch normally-open pushbutton push-button LCD.
 */
export class SW_E3_SA3216 extends Component.withPins({
  "GND": "1",
  "5V": "2",
  "CLK": "3",
  "DAT": "4",
  "SW1": "5",
  "SW2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "5V": "power_in", CLK: "input", DAT: "input", SW1: "passive", SW2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_E3_SA3216";
  override referencePrefix = "SW";
}

/**
 * Push button switch with LCD screen
 *
 * KiCad symbol: `Switch:SW_E3_SA3624`. Reference prefix: `SW`.
 * Footprint filters: SW?PUSH?LCD?E3?SAxxxx*.
 * @see http://www.e3-keys.com/files/SA%20Technical%20Datasheet%20v2.0.pdf
 * Keywords: switch normally-open pushbutton push-button LCD.
 */
export class SW_E3_SA3624 extends Component.withPins({
  "GND": "1",
  "5V": "2",
  "CLK": "3",
  "DAT": "4",
  "SW1": "5",
  "SW2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "5V": "power_in", CLK: "input", DAT: "input", SW1: "passive", SW2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_E3_SA3624";
  override referencePrefix = "SW";
}

/**
 * Push button switch with LCD screen
 *
 * KiCad symbol: `Switch:SW_E3_SA6432`. Reference prefix: `SW`.
 * Footprint filters: SW?PUSH?LCD?E3?SAxxxx*.
 * @see http://www.e3-keys.com/files/SA%20Technical%20Datasheet%20v2.0.pdf
 * Keywords: switch normally-open pushbutton push-button LCD.
 */
export class SW_E3_SA6432 extends Component.withPins({
  "GND": "1",
  "5V": "2",
  "CLK": "3",
  "DAT": "4",
  "SW1": "5",
  "SW2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "5V": "power_in", CLK: "input", DAT: "input", SW1: "passive", SW2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_E3_SA6432";
  override referencePrefix = "SW";
}

/**
 * MEC 5E single pole normally-open tactile switch
 *
 * KiCad symbol: `Switch:SW_MEC_5E`. Reference prefix: `SW`.
 * Footprint filters: SW*MEC*5G*.
 * @see https://www.apem.com/medias/download/MEC_switches_serie_MULTIMEC5E.pdf
 * Keywords: switch normally-open pushbutton push-button.
 */
export class SW_MEC_5E extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "K": "3",
  "A": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_MEC_5E";
  override referencePrefix = "SW";
}

/**
 * MEC 5G single pole normally-open tactile switch
 *
 * KiCad symbol: `Switch:SW_MEC_5G`. Reference prefix: `SW`.
 * Footprint filters: SW*MEC*5G*.
 * @see https://www.apem.com/medias/download/MEC_switches_serie_MULTIMEC5G.pdf
 * Keywords: switch normally-open pushbutton push-button.
 */
export class SW_MEC_5G extends Component.withPins({
  "A_1": "1",
  "B_3": "3",
  "A_2": "2",
  "B_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "passive", B_3: "passive", A_2: "passive", B_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_MEC_5G";
  override referencePrefix = "SW";
}

/**
 * MEC 5G single pole normally-open illuminated tactile switch with two LEDs
 *
 * KiCad symbol: `Switch:SW_MEC_5G_2LED`. Reference prefix: `SW`.
 * Footprint filters: SW*MEC*5G*.
 * @see https://www.apem.com/medias/download/MEC_switches_serie_MULTIMEC5G.pdf
 * Keywords: switch normally-open pushbutton push-button LED.
 */
export class SW_MEC_5G_2LED extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "K": "3",
  "A": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_MEC_5G_2LED";
  override referencePrefix = "SW";
}

/**
 * MEC 5G single pole normally-open illuminated tactile switch
 *
 * KiCad symbol: `Switch:SW_MEC_5G_LED`. Reference prefix: `SW`.
 * Footprint filters: SW*MEC*5G*.
 * @see https://www.apem.com/medias/download/MEC_switches_serie_MULTIMEC5G.pdf
 * Keywords: switch normally-open pushbutton push-button LED.
 */
export class SW_MEC_5G_LED extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "K": "3",
  "A": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_MEC_5G_LED";
  override referencePrefix = "SW";
}

/**
 * Push button switch with LCD screen
 *
 * KiCad symbol: `Switch:SW_MMI_Q5-100`. Reference prefix: `SW`.
 * Footprint filters: SW?PUSH?LCD?E3?SAxxxx*.
 * @see http://latest.ledswitches.co.uk/media/pdf/Q5-PCB-V1-withQ5data.pdf
 * Keywords: switch normally-open pushbutton push-button LCD.
 */
export class SW_MMI_Q5_100 extends Component.withPins({
  "GND": "1",
  "5V": "2",
  "CLK": "3",
  "DAT": "4",
  "SW1": "5",
  "SW2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "5V": "power_in", CLK: "input", DAT: "input", SW1: "passive", SW2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_MMI_Q5-100";
  override referencePrefix = "SW";
}

/**
 * Switch, single pole double throw, illuminated paddle, red and green LEDs
 *
 * KiCad symbol: `Switch:SW_NKK_GW12LJPCF`. Reference prefix: `SW`.
 * Footprint filters: SW*NKK*GW12LJP*.
 * @see http://www.nkkswitches.com/pdf/gwillum.pdf
 * Keywords: switch single-pole double-throw spdt ON-ON illuminated red green.
 * Default footprint: Button_Switch_THT:SW_NKK_GW12LJP.
 */
export class SW_NKK_GW12LJPCF extends Component.withPins({
  "KR": "4",
  "A_5": "5",
  "KG": "6",
  "A_1": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { KR: "passive", A_5: "passive", KG: "passive", A_1: "passive", B: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_NKK_GW12LJPCF";
  override referencePrefix = "SW";
}

/**
 * Switch, single pole double throw
 *
 * KiCad symbol: `Switch:SW_SPDT_321`. Reference prefix: `SW`.
 * Keywords: switch single-pole double-throw spdt ON-ON.
 */
export class SW_SPDT_321 extends Component.withPins({
  "C": "1",
  "B": "2",
  "A": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPDT_321";
  override referencePrefix = "SW";
}

/**
 * Switch, single pole double throw
 *
 * KiCad symbol: `Switch:SW_Nidec_CAS-120A1`. Reference prefix: `SW`.
 * Footprint filters: *Nidec?Copal?CAS?120A*.
 * @see https://www.nidec-components.com/e/catalog/switch/cas.pdf
 * Keywords: switch single-pole double-throw spdt ON-ON.
 * Default footprint: Button_Switch_SMD:Nidec_Copal_CAS-120A.
 */
export class SW_Nidec_CAS_120A1 extends Component.withPins({
  "C": "1",
  "B": "2",
  "A": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Nidec_CAS-120A1";
  override referencePrefix = "SW";
}

/**
 * Push button switch, generic, two pins
 *
 * KiCad symbol: `Switch:SW_Push`. Reference prefix: `SW`.
 * Keywords: switch normally-open pushbutton push-button.
 */
export class SW_Push extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push";
  override referencePrefix = "SW";
}

/**
 * Omron B3FS 6x6mm single pole normally-open tactile switch
 *
 * KiCad symbol: `Switch:SW_Omron_B3FS`. Reference prefix: `SW`.
 * Footprint filters: SW*Omron*B3FS*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-b3fs.pdf
 * Keywords: switch normally-open pushbutton push-button.
 */
export class SW_Omron_B3FS extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Omron_B3FS";
  override referencePrefix = "SW";
}

/**
 * Push button switch, normally open, two pins, 45° tilted
 *
 * KiCad symbol: `Switch:SW_Push_45deg`. Reference prefix: `SW`.
 * Keywords: switch normally-open pushbutton push-button.
 */
export class SW_Push_45deg extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_45deg";
  override referencePrefix = "SW";
}

/**
 * Momentary Switch, dual pole double throw
 *
 * KiCad symbol: `Switch:SW_Push_DPDT`. Reference prefix: `SW`.
 * Keywords: switch dual-pole double-throw spdt ON-ON.
 */
export class SW_Push_DPDT extends Component.withPins({
  "A_1": "1",
  "B_2": "2",
  "C_3": "3",
  "A_4": "4",
  "B_5": "5",
  "C_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "passive", B_2: "passive", C_3: "passive", A_4: "passive", B_5: "passive", C_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_DPDT";
  override referencePrefix = "SW";
}

/**
 * Push button switch, generic, symbol, four pins
 *
 * KiCad symbol: `Switch:SW_Push_Dual`. Reference prefix: `SW`.
 * Keywords: switch normally-open pushbutton push-button.
 */
export class SW_Push_Dual extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_Dual";
  override referencePrefix = "SW";
}

/**
 * Push button switch, generic, separate symbols, four pins
 *
 * KiCad symbol: `Switch:SW_Push_Dual_x2`. Reference prefix: `SW`.
 * Keywords: switch normally-open pushbutton push-button.
 */
export class SW_Push_Dual_x2 extends Component.withPins({
  "C_1": "1",
  "D_2": "2",
  "C_3": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_1: "passive", D_2: "passive", C_3: "passive", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_Dual_x2";
  override referencePrefix = "SW";
}

/**
 * Push button switch with LED, generic
 *
 * KiCad symbol: `Switch:SW_Push_LED`. Reference prefix: `SW`.
 * Keywords: switch normally-open pushbutton push-button LED.
 */
export class SW_Push_LED extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "K": "3",
  "A": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_LED";
  override referencePrefix = "SW";
}

/**
 * Push button switch with Signal Lamp, generic
 *
 * KiCad symbol: `Switch:SW_Push_Lamp`. Reference prefix: `SW`.
 * Keywords: switch normally-open pushbutton push-button Lamp.
 */
export class SW_Push_Lamp extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "L_3": "3",
  "L_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", L_3: "passive", L_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_Lamp";
  override referencePrefix = "SW";
}

/**
 * Push button switch, push-to-open, generic, two pins
 *
 * KiCad symbol: `Switch:SW_Push_Open`. Reference prefix: `SW`.
 * Keywords: switch normally-closed pushbutton push-button.
 */
export class SW_Push_Open extends Component.withPins({
  "A": "1",
  "B": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", B: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_Open";
  override referencePrefix = "SW";
}

/**
 * Push button switch, normally closed, generic, four pins
 *
 * KiCad symbol: `Switch:SW_Push_Open_Dual`. Reference prefix: `SW`.
 * Keywords: switch normally-closed pushbutton push-button.
 */
export class SW_Push_Open_Dual extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_Open_Dual";
  override referencePrefix = "SW";
}

/**
 * Push button switch, push-to-open, generic, two pins
 *
 * KiCad symbol: `Switch:SW_Push_Open_Dual_x2`. Reference prefix: `SW`.
 * Keywords: switch normally-closed pushbutton push-button.
 */
export class SW_Push_Open_Dual_x2 extends Component.withPins({
  "1": "3",
  "2": "4",
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1": "passive", "2": "passive", P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_Open_Dual_x2";
  override referencePrefix = "SW";
}

/**
 * Momentary Switch, single pole double throw
 *
 * KiCad symbol: `Switch:SW_Push_SPDT`. Reference prefix: `SW`.
 * Keywords: switch single-pole double-throw spdt ON-ON.
 */
export class SW_Push_SPDT extends Component.withPins({
  "A": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", B: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Push_SPDT";
  override referencePrefix = "SW";
}

/**
 * reed switch
 *
 * KiCad symbol: `Switch:SW_Reed`. Reference prefix: `SW`.
 * Keywords: reed magnetic switch.
 */
export class SW_Reed extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Reed";
  override referencePrefix = "SW";
}

/**
 * reed switch, default-closed
 *
 * KiCad symbol: `Switch:SW_Reed_Opener`. Reference prefix: `SW`.
 * Keywords: reed magnetic switch.
 */
export class SW_Reed_Opener extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Reed_Opener";
  override referencePrefix = "SW";
}

/**
 * SPDT reed switch
 *
 * KiCad symbol: `Switch:SW_Reed_SPDT`. Reference prefix: `SW`.
 * Keywords: reed magnetic switch SPDT.
 */
export class SW_Reed_SPDT extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Reed_SPDT";
  override referencePrefix = "SW";
}

/**
 * rotary switch with 12 positions
 *
 * KiCad symbol: `Switch:SW_Rotary_1x12`. Reference prefix: `SW`.
 * @see http://cdn-reichelt.de/documents/datenblatt/C200/DS-Serie%23LOR.pdf
 * Keywords: rotary switch 1x12.
 */
export class SW_Rotary_1x12 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_1x12";
  override referencePrefix = "SW";
}

/**
 * Rotary switch 1x3, SP3T with mount point
 *
 * KiCad symbol: `Switch:SW_Rotary_1x3_MP`. Reference prefix: `SW`.
 * Keywords: Rotary switch 1x3 SP3T.
 */
export class SW_Rotary_1x3_MP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_1x3_MP";
  override referencePrefix = "SW";
}

/**
 * Rotary switch 1x4, SP4T with mount point
 *
 * KiCad symbol: `Switch:SW_Rotary_1x4_MP`. Reference prefix: `SW`.
 * Keywords: Rotary switch 1x4 SP4T.
 */
export class SW_Rotary_1x4_MP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_1x4_MP";
  override referencePrefix = "SW";
}

/**
 * Rotary switch 1x5, SP5T with mount point
 *
 * KiCad symbol: `Switch:SW_Rotary_1x5_MP`. Reference prefix: `SW`.
 * Keywords: Rotary switch 1x5 SP5T.
 */
export class SW_Rotary_1x5_MP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_1x5_MP";
  override referencePrefix = "SW";
}

/**
 * Rotary switch 1x6, SP6T with mount point
 *
 * KiCad symbol: `Switch:SW_Rotary_1x6_MP`. Reference prefix: `SW`.
 * Keywords: Rotary switch 1x6 SP6T.
 */
export class SW_Rotary_1x6_MP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_1x6_MP";
  override referencePrefix = "SW";
}

/**
 * Rotary switch 1x7, SP7T with mount point
 *
 * KiCad symbol: `Switch:SW_Rotary_1x7_MP`. Reference prefix: `SW`.
 * Keywords: Rotary switch 1x7 SP7T.
 */
export class SW_Rotary_1x7_MP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_1x7_MP";
  override referencePrefix = "SW";
}

/**
 * Rotary switch 1x8, SP8T with mount point
 *
 * KiCad symbol: `Switch:SW_Rotary_1x8_MP`. Reference prefix: `SW`.
 * Keywords: Rotary switch 1x8 SP8T.
 */
export class SW_Rotary_1x8_MP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_1x8_MP";
  override referencePrefix = "SW";
}

/**
 * Rotary switch 1x8, SP8T with mount point
 *
 * KiCad symbol: `Switch:SW_Rotary_1x9_MP`. Reference prefix: `SW`.
 * Keywords: Rotary switch 1x8 SP8T.
 */
export class SW_Rotary_1x9_MP extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_1x9_MP";
  override referencePrefix = "SW";
}

/**
 * 2 rotary switch with 6 positions
 *
 * KiCad symbol: `Switch:SW_Rotary_2x6`. Reference prefix: `SW`.
 * @see http://cdn-reichelt.de/documents/datenblatt/C200/DS-Serie%23LOR.pdf
 * Keywords: rotary switch 2x6.
 */
export class SW_Rotary_2x6 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_2x6";
  override referencePrefix = "SW";
}

/**
 * 3 rotary switches with 4 positions
 *
 * KiCad symbol: `Switch:SW_Rotary_3x4`. Reference prefix: `SW`.
 * @see http://cdn-reichelt.de/documents/datenblatt/C200/DS-Serie%23LOR.pdf
 * Keywords: rotary switch 3x4.
 */
export class SW_Rotary_3x4 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_3x4";
  override referencePrefix = "SW";
}

/**
 * 4 rotary switches with 3 positions
 *
 * KiCad symbol: `Switch:SW_Rotary_4x3`. Reference prefix: `SW`.
 * @see http://cdn-reichelt.de/documents/datenblatt/C200/DS-Serie%23LOR.pdf
 * Keywords: rotary switch 4x3.
 */
export class SW_Rotary_4x3 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", P15: "passive", P16: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Rotary_4x3";
  override referencePrefix = "SW";
}

/**
 * Switch, three position, single pole triple throw, 3 position switch, SP3T
 *
 * KiCad symbol: `Switch:SW_SP3T`. Reference prefix: `SW`.
 * Footprint filters: SW*, SP3T*.
 * Keywords: switch sp3t ON-ON-ON.
 */
export class SW_SP3T extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SP3T";
  override referencePrefix = "SW";
}

/**
 * NKK Switches NR01 Series rotary SP3T switch
 *
 * KiCad symbol: `Switch:SW_SP3T_NR01103`. Reference prefix: `SW`.
 * Footprint filters: SW?NKK?NR01*.
 * @see https://www.nkkswitches.com/pdf/NR01%20Rotaries.pdf
 * Keywords: NR01 SP3T Switch.
 * Default footprint: Button_Switch_THT:SW_NKK_NR01.
 */
export class SW_SP3T_NR01103 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "Common": "C",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "no_connect", P5: "no_connect", Common: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SP3T_NR01103";
  override referencePrefix = "SW";
}

/**
 * NKK Switches NR01 Series rotary SP4T switch
 *
 * KiCad symbol: `Switch:SW_SP4T_NR01104`. Reference prefix: `SW`.
 * Footprint filters: SW?NKK?NR01*.
 * @see https://www.nkkswitches.com/pdf/NR01%20Rotaries.pdf
 * Keywords: NR01 SP4T Switch.
 * Default footprint: Button_Switch_THT:SW_NKK_NR01.
 */
export class SW_SP4T_NR01104 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "Common": "C",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "no_connect", Common: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SP4T_NR01104";
  override referencePrefix = "SW";
}

/**
 * NKK Switches NR01 Series rotary SP5T switch
 *
 * KiCad symbol: `Switch:SW_SP5T_NR01105`. Reference prefix: `SW`.
 * Footprint filters: SW?NKK?NR01*.
 * @see https://www.nkkswitches.com/pdf/NR01%20Rotaries.pdf
 * Keywords: NR01 SP5T Switch.
 * Default footprint: Button_Switch_THT:SW_NKK_NR01.
 */
export class SW_SP5T_NR01105 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "Common": "C",
  "PMP": "MP",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", Common: "passive", PMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SP5T_NR01105";
  override referencePrefix = "SW";
}

/**
 * Switch, single pole double throw
 *
 * KiCad symbol: `Switch:SW_SPDT`. Reference prefix: `SW`.
 * Keywords: switch single-pole double-throw spdt ON-ON.
 */
export class SW_SPDT extends Component.withPins({
  "A": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", B: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPDT";
  override referencePrefix = "SW";
}

/**
 * Switch, single pole double throw
 *
 * KiCad symbol: `Switch:SW_SPDT_201`. Reference prefix: `SW`.
 * Keywords: switch single-pole double-throw spdt ON-ON.
 */
export class SW_SPDT_201 extends Component.withPins({
  "B": "0",
  "C": "1",
  "A": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "passive", C: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPDT_201";
  override referencePrefix = "SW";
}

/**
 * Switch, single pole double throw
 *
 * KiCad symbol: `Switch:SW_SPDT_312`. Reference prefix: `SW`.
 * Keywords: changeover single-pole double-throw spdt ON-ON.
 */
export class SW_SPDT_312 extends Component.withPins({
  "B": "1",
  "C": "2",
  "A": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "passive", C: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPDT_312";
  override referencePrefix = "SW";
}

/**
 * Switch, single pole double throw, center OFF position
 *
 * KiCad symbol: `Switch:SW_SPDT_MSM`. Reference prefix: `SW`.
 * Keywords: switch spdt single-pole double-throw ON-OFF-ON.
 */
export class SW_SPDT_MSM extends Component.withPins({
  "3": "2",
  "4": "3",
  "P1": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "3": "passive", "4": "passive", P1: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPDT_MSM";
  override referencePrefix = "SW";
}

/**
 * Position switch
 *
 * KiCad symbol: `Switch:SW_SPDT_XKB_DMx-xxxx-1`. Reference prefix: `SW`.
 * Footprint filters: SW?XKB?DM??16U??1*.
 * Keywords: limit switch single pole double throw spdt microswitch.
 */
export class SW_SPDT_XKB_DMx_xxxx_1 extends Component.withPins({
  "A": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", B: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPDT_XKB_DMx-xxxx-1";
  override referencePrefix = "SW";
}

/**
 * Single Pole Single Throw (SPST) switch
 *
 * KiCad symbol: `Switch:SW_SPST`. Reference prefix: `SW`.
 * Keywords: switch lever.
 */
export class SW_SPST extends Component.withPins({
  "A": "1",
  "B": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", B: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPST";
  override referencePrefix = "SW";
}

/**
 * Single Pole Single Throw (SPST) switch with LED, generic
 *
 * KiCad symbol: `Switch:SW_SPST_LED`. Reference prefix: `SW`.
 * Keywords: switch SPST LED OFF-ON.
 */
export class SW_SPST_LED extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "K": "3",
  "A": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPST_LED";
  override referencePrefix = "SW";
}

/**
 * Single Pole Single Throw (SPST) switch with signal lamp, generic
 *
 * KiCad symbol: `Switch:SW_SPST_Lamp`. Reference prefix: `SW`.
 * Keywords: switch SPST LED OFF-ON lamp.
 */
export class SW_SPST_Lamp extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "L_3": "3",
  "L_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", L_3: "passive", L_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPST_Lamp";
  override referencePrefix = "SW";
}

/**
 * Single Pole Single Throw (SPST) switch, temperature dependent, normally closed
 *
 * KiCad symbol: `Switch:SW_SPST_Temperature_NC`. Reference prefix: `SW`.
 * Keywords: temperature switch normally closed.
 */
export class SW_SPST_Temperature_NC extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPST_Temperature_NC";
  override referencePrefix = "SW";
}

/**
 * Single Pole Single Throw (SPST) switch, temperature dependent
 *
 * KiCad symbol: `Switch:SW_SPST_Temperature_NO`. Reference prefix: `SW`.
 * Keywords: temperature switch normally open.
 */
export class SW_SPST_Temperature_NO extends Component.withPins({
  "A": "1",
  "B": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", B: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_SPST_Temperature_NO";
  override referencePrefix = "SW";
}

/**
 * Slide Switch, dual pole double throw
 *
 * KiCad symbol: `Switch:SW_Slide_DPDT`. Reference prefix: `SW`.
 * Keywords: switch dual-pole double-throw dpdt ON-ON.
 */
export class SW_Slide_DPDT extends Component.withPins({
  "A_1": "1",
  "B_2": "2",
  "C_3": "3",
  "A_4": "4",
  "B_5": "5",
  "C_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "passive", B_2: "passive", C_3: "passive", A_4: "passive", B_5: "passive", C_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Slide_DPDT";
  override referencePrefix = "SW";
}

/**
 * Switch slide, single pole double throw
 *
 * KiCad symbol: `Switch:SW_Wuerth_450301014042`. Reference prefix: `SW`.
 * Footprint filters: SW*Wuerth*WS*SLTV*10x2.5x6.4*P2.54mm*.
 * @see https://www.we-online.com/components/products/datasheet/450301014042.pdf
 * Keywords: changeover single-pole opposite-side-connection double-throw spdt ON-ON.
 * Default footprint: Button_Switch_THT:SW_Slide-03_Wuerth-WS-SLTV_10x2.5x6.4_P2.54mm.
 */
export class SW_Wuerth_450301014042 extends Component.withPins({
  "B": "1",
  "C": "2",
  "A": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "passive", C: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Switch:SW_Wuerth_450301014042";
  override referencePrefix = "SW";
}
