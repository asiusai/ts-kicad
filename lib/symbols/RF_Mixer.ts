// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Doubly Balanced monolithic Mixer, 500 MHz BW, +24 dBm, IP3, LNA and LO driver, PLCC-20
 *
 * KiCad symbol: `RF_Mixer:AD831AP`. Reference prefix: `U`.
 * Footprint filters: *PLCC*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD831.pdf
 * Keywords: mixer rf.
 * Default footprint: Package_LCC:PLCC-20_9.0x9.0mm_P1.27mm.
 */
export class AD831AP extends Component.withPins({
  "VP_1": "1",
  "IFN": "2",
  "AN": "3",
  "GND_4": "4",
  "VN_5": "5",
  "RFP": "6",
  "RFN": "7",
  "VN_8": "8",
  "VP_9": "9",
  "LON": "10",
  "LOP": "11",
  "VP_12": "12",
  "GND_13": "13",
  "BIAS": "14",
  "VN_15": "15",
  "OUT": "16",
  "VFB": "17",
  "COM": "18",
  "AP": "19",
  "IFP": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VP_1: "power_in", IFN: "open_collector", AN: "input", GND_4: "power_in", VN_5: "power_in", RFP: "input", RFN: "input", VN_8: "power_in", VP_9: "power_in", LON: "input", LOP: "input", VP_12: "power_in", GND_13: "passive", BIAS: "passive", VN_15: "power_in", OUT: "output", VFB: "passive", COM: "passive", AP: "input", IFP: "open_collector", ...opts.pinTypes } });
  }
  override schema = "RF_Mixer:AD831AP";
  override referencePrefix = "U";
}

/**
 * Mixer, +7 dBm LO, 0.05 to 250 MHz, CD542
 *
 * KiCad symbol: `RF_Mixer:ADE-6`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADE-6.pdf
 * Keywords: mixer rf.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_LandPatternPL-052.
 */
export class ADE_6 extends Component.withPins({
  "GND_1": "1",
  "IF": "2",
  "RF": "3",
  "GND_4": "4",
  "GND_5": "5",
  "LO": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IF: "output", RF: "input", GND_4: "passive", GND_5: "passive", LO: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Mixer:ADE-6";
  override referencePrefix = "U";
}

/**
 * Mixer, +7 dBm LO, 10 to 1000 MHz, CD542
 *
 * KiCad symbol: `RF_Mixer:ADEX-10`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*CD542*.
 * @see https://www.minicircuits.com/pdfs/ADEX-10.pdf
 * Keywords: mixer rf.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CD542_LandPatternPL-052.
 */
export class ADEX_10 extends Component.withPins({
  "GND_1": "1",
  "IF": "2",
  "RF": "3",
  "GND_4": "4",
  "GND_5": "5",
  "LO": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", IF: "output", RF: "input", GND_4: "passive", GND_5: "passive", LO: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Mixer:ADEX-10";
  override referencePrefix = "U";
}

/**
 * 10 MHz to 6 GHz Active Mixer, LFCSP-24
 *
 * KiCad symbol: `RF_Mixer:ADL5801`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADL5801.pdf
 * Keywords: mixer active.
 * Default footprint: Package_CSP:LFCSP-VQ-24-1EP_4x4mm_P0.5mm_EP2.642x2.642mm.
 */
export class ADL5801 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "LOIP": "3",
  "LOIN": "4",
  "GND_5": "5",
  "GND_6": "6",
  "VPLO_7": "7",
  "GND_8": "8",
  "~{ENBL}": "9",
  "VSET": "10",
  "DETO": "11",
  "GND_12": "12",
  "VPDT": "13",
  "GND_14": "14",
  "RFIN": "15",
  "RFIP": "16",
  "GND_17": "17",
  "VPRF": "18",
  "GND_19": "19",
  "IFOP": "20",
  "IFON": "21",
  "NC": "22",
  "GND_23": "23",
  "VPLO_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", LOIP: "input", LOIN: "input", GND_5: "passive", GND_6: "passive", VPLO_7: "power_in", GND_8: "passive", "~{ENBL}": "input", VSET: "input", DETO: "output", GND_12: "passive", VPDT: "power_in", GND_14: "passive", RFIN: "input", RFIP: "input", GND_17: "passive", VPRF: "power_in", GND_19: "passive", IFOP: "output", IFON: "output", NC: "no_connect", GND_23: "passive", VPLO_24: "passive", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Mixer:ADL5801";
  override referencePrefix = "U";
}

/**
 * 100 MHz to 6 GHz Dual Channel Active Mixer, LFCSP-24
 *
 * KiCad symbol: `RF_Mixer:ADL5802`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADL5802.pdf
 * Keywords: mixer rf.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class ADL5802 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "OP1+": "3",
  "OP1-": "4",
  "GND_5": "5",
  "VPOS_6": "6",
  "~{ENBL}": "7",
  "GND_8": "8",
  "LOIP": "9",
  "LOIN": "10",
  "GND_11": "11",
  "VSET": "12",
  "VPOS_13": "13",
  "GND_14": "14",
  "OP2-": "15",
  "OP2+": "16",
  "GND_17": "17",
  "GND_18": "18",
  "RF2-": "19",
  "RF2+": "20",
  "GND_21": "21",
  "RF1-": "22",
  "RF1+": "23",
  "VPOS_24": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", "OP1+": "output", "OP1-": "output", GND_5: "passive", VPOS_6: "power_in", "~{ENBL}": "input", GND_8: "passive", LOIP: "input", LOIN: "input", GND_11: "passive", VSET: "input", VPOS_13: "passive", GND_14: "passive", "OP2-": "output", "OP2+": "output", GND_17: "passive", GND_18: "passive", "RF2-": "input", "RF2+": "input", GND_21: "passive", "RF1-": "input", "RF1+": "input", VPOS_24: "passive", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Mixer:ADL5802";
  override referencePrefix = "U";
}

/**
 * 1.5-4.5GHz double-balanced mixer, MS8
 *
 * KiCad symbol: `RF_Mixer:HMC213A`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/hmc213a.pdf
 * Keywords: mixer active.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class HMC213A extends Component.withPins({
  "GND_1": "1",
  "LO": "2",
  "GND_3": "3",
  "NC": "4",
  "IF": "5",
  "GND_6": "6",
  "RF": "7",
  "GND_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", LO: "passive", GND_3: "passive", NC: "no_connect", IF: "passive", GND_6: "passive", RF: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Mixer:HMC213A";
  override referencePrefix = "U";
}

/**
 * 1.5-4.5GHz double-balanced mixer, MS8
 *
 * KiCad symbol: `RF_Mixer:HMC213B`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/hmc213B.pdf
 * Keywords: mixer active.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class HMC213B extends Component.withPins({
  "GND_1": "1",
  "LO": "2",
  "GND_3": "3",
  "NC": "4",
  "IF": "5",
  "GND_6": "6",
  "RF": "7",
  "GND_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", LO: "passive", GND_3: "passive", NC: "no_connect", IF: "passive", GND_6: "passive", RF: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Mixer:HMC213B";
  override referencePrefix = "U";
}

/**
 * 0.01MHz to 4GHz Low Power Active Mixer, DFN-8
 *
 * KiCad symbol: `RF_Mixer:LT5560`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/5560f.pdf
 * Keywords: rf mixer.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 */
export class LT5560 extends Component.withPins({
  "LO-": "1",
  "EN": "2",
  "IN+": "3",
  "IN-": "4",
  "OUT-": "5",
  "OUT+": "6",
  "VCC": "7",
  "LO+": "8",
  "PGND": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "LO-": "input", EN: "input", "IN+": "input", "IN-": "input", "OUT-": "output", "OUT+": "output", VCC: "power_in", "LO+": "input", PGND: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Mixer:LT5560";
  override referencePrefix = "U";
}
