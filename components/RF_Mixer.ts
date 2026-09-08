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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD831AP extends Component.withPins({
  /** Physical pin 1: VP; power_in. */
  "VP_1": "1",
  /** Physical pin 2: IFN; open_collector. */
  "IFN": "2",
  /** Physical pin 3: AN; input. */
  "AN": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: VN; power_in. */
  "VN_5": "5",
  /** Physical pin 6: RFP; input. */
  "RFP": "6",
  /** Physical pin 7: RFN; input. */
  "RFN": "7",
  /** Physical pin 8: VN; power_in. */
  "VN_8": "8",
  /** Physical pin 9: VP; power_in. */
  "VP_9": "9",
  /** Physical pin 10: LON; input. */
  "LON": "10",
  /** Physical pin 11: LOP; input. */
  "LOP": "11",
  /** Physical pin 12: VP; power_in. */
  "VP_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: BIAS; passive. */
  "BIAS": "14",
  /** Physical pin 15: VN; power_in. */
  "VN_15": "15",
  /** Physical pin 16: OUT; output. */
  "OUT": "16",
  /** Physical pin 17: VFB; passive. */
  "VFB": "17",
  /** Physical pin 18: COM; passive. */
  "COM": "18",
  /** Physical pin 19: AP; input. */
  "AP": "19",
  /** Physical pin 20: IFP; open_collector. */
  "IFP": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADE_6 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: IF; output. */
  "IF": "2",
  /** Physical pin 3: RF; input. */
  "RF": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: LO; input. */
  "LO": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADEX_10 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: IF; output. */
  "IF": "2",
  /** Physical pin 3: RF; input. */
  "RF": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: LO; input. */
  "LO": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADL5801 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: LOIP; input. */
  "LOIP": "3",
  /** Physical pin 4: LOIN; input. */
  "LOIN": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: VPLO; power_in. */
  "VPLO_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: ~{ENBL}; input. */
  "~{ENBL}": "9",
  /** Physical pin 10: VSET; input. */
  "VSET": "10",
  /** Physical pin 11: DETO; output. */
  "DETO": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: VPDT; power_in. */
  "VPDT": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: RFIN; input. */
  "RFIN": "15",
  /** Physical pin 16: RFIP; input. */
  "RFIP": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: VPRF; power_in. */
  "VPRF": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: IFOP; output. */
  "IFOP": "20",
  /** Physical pin 21: IFON; output. */
  "IFON": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: VPLO; passive. */
  "VPLO_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADL5802 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: OP1+; output. */
  "OP1+": "3",
  /** Physical pin 4: OP1-; output. */
  "OP1-": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: VPOS; power_in. */
  "VPOS_6": "6",
  /** Physical pin 7: ~{ENBL}; input. */
  "~{ENBL}": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: LOIP; input. */
  "LOIP": "9",
  /** Physical pin 10: LOIN; input. */
  "LOIN": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: VSET; input. */
  "VSET": "12",
  /** Physical pin 13: VPOS; passive. */
  "VPOS_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: OP2-; output. */
  "OP2-": "15",
  /** Physical pin 16: OP2+; output. */
  "OP2+": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: RF2-; input. */
  "RF2-": "19",
  /** Physical pin 20: RF2+; input. */
  "RF2+": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: RF1-; input. */
  "RF1-": "22",
  /** Physical pin 23: RF1+; input. */
  "RF1+": "23",
  /** Physical pin 24: VPOS; passive. */
  "VPOS_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HMC213A extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: LO; passive. */
  "LO": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: IF; passive. */
  "IF": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: RF; passive. */
  "RF": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HMC213B extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: LO; passive. */
  "LO": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: IF; passive. */
  "IF": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: RF; passive. */
  "RF": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT5560 extends Component.withPins({
  /** Physical pin 1: LO-; input. */
  "LO-": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: OUT-; output. */
  "OUT-": "5",
  /** Physical pin 6: OUT+; output. */
  "OUT+": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: LO+; input. */
  "LO+": "8",
  /** Physical pin 9: PGND; power_in. */
  "PGND": "9",
}) {
  override schema = "RF_Mixer:LT5560";
  override referencePrefix = "U";
}

