// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Parallax Propeller 8 core, 32 bit, 80 MHz microcontroller, 3.3VDC, 40-pin DIP
 *
 * KiCad symbol: `MCU_Parallax:P8X32A-D40`. Reference prefix: `U`.
 * Footprint filters: DIP*40*W15.24mm*.
 * @see https://www.parallax.com/sites/default/files/downloads/P8X32A-Propeller-Datasheet-v1.4.0_0.pdf
 * Keywords: microcontroller multicore Parallax Propeller DIP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class P8X32A_D40 extends Component.withPins({
  "P0": "1",
  "P1": "2",
  "P2": "3",
  "P3": "4",
  "P4": "5",
  "P5": "6",
  "P6": "7",
  "P7": "8",
  "VSS_9": "9",
  "~{BOE}": "10",
  "~{RES}": "11",
  "VDD_12": "12",
  "P8": "13",
  "P9": "14",
  "P10": "15",
  "P11": "16",
  "P12": "17",
  "P13": "18",
  "P14": "19",
  "P15": "20",
  "P16": "21",
  "P17": "22",
  "P18": "23",
  "P19": "24",
  "P20": "25",
  "P21": "26",
  "P22": "27",
  "P23": "28",
  "VSS_29": "29",
  "XI": "30",
  "XO": "31",
  "VDD_32": "32",
  "P24": "33",
  "P25": "34",
  "P26": "35",
  "P27": "36",
  "P28": "37",
  "P29": "38",
  "P30": "39",
  "P31": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", VSS_9: "power_in", "~{BOE}": "input", "~{RES}": "bidirectional", VDD_12: "power_in", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", P18: "bidirectional", P19: "bidirectional", P20: "bidirectional", P21: "bidirectional", P22: "bidirectional", P23: "bidirectional", VSS_29: "power_in", XI: "input", XO: "output", VDD_32: "power_in", P24: "bidirectional", P25: "bidirectional", P26: "bidirectional", P27: "bidirectional", P28: "bidirectional", P29: "bidirectional", P30: "bidirectional", P31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Parallax:P8X32A-D40";
  override referencePrefix = "U";
}

/**
 * Parallax Propeller 8 core, 32 bit, 80 MHz microcontroller, 3.3VDC, 44-pin QFN
 *
 * KiCad symbol: `MCU_Parallax:P8X32A-M44`. Reference prefix: `U`.
 * Footprint filters: QFN*44*1EP*9x9mm*P0.65mm*.
 * @see https://www.parallax.com/sites/default/files/downloads/P8X32A-Propeller-Datasheet-v1.4.0_0.pdf
 * Keywords: microcontroller multicore Parallax Propeller QFN.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_9x9mm_P0.65mm_EP7.5x7.5mm.
 */
export class P8X32A_M44 extends Component.withPins({
  "P4": "1",
  "P5": "2",
  "P6": "3",
  "P7": "4",
  "VSS_5": "5",
  "~{BOE}": "6",
  "~{RES}": "7",
  "VDD_8": "8",
  "P8": "9",
  "P9": "10",
  "P10": "11",
  "P11": "12",
  "P12": "13",
  "P13": "14",
  "P14": "15",
  "P15": "16",
  "VSS_17": "17",
  "VDD_18": "18",
  "P16": "19",
  "P17": "20",
  "P18": "21",
  "P19": "22",
  "P20": "23",
  "P21": "24",
  "P22": "25",
  "P23": "26",
  "VSS_27": "27",
  "XI": "28",
  "XO": "29",
  "VDD_30": "30",
  "P24": "31",
  "P25": "32",
  "P26": "33",
  "P27": "34",
  "P28": "35",
  "P29": "36",
  "P30": "37",
  "P31": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "P0": "41",
  "P1": "42",
  "P2": "43",
  "P3": "44",
  "VSS_45": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", VSS_5: "power_in", "~{BOE}": "input", "~{RES}": "bidirectional", VDD_8: "power_in", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", VSS_17: "power_in", VDD_18: "power_in", P16: "bidirectional", P17: "bidirectional", P18: "bidirectional", P19: "bidirectional", P20: "bidirectional", P21: "bidirectional", P22: "bidirectional", P23: "bidirectional", VSS_27: "power_in", XI: "input", XO: "output", VDD_30: "power_in", P24: "bidirectional", P25: "bidirectional", P26: "bidirectional", P27: "bidirectional", P28: "bidirectional", P29: "bidirectional", P30: "bidirectional", P31: "bidirectional", VSS_39: "power_in", VDD_40: "power_in", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", VSS_45: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Parallax:P8X32A-M44";
  override referencePrefix = "U";
}

/**
 * Parallax Propeller 8 core, 32 bit, 80 MHz microcontroller, 3.3VDC, 44-pin LQFP
 *
 * KiCad symbol: `MCU_Parallax:P8X32A-Q44`. Reference prefix: `U`.
 * Footprint filters: LQFP*44*10x10mm*P0.8mm*.
 * @see https://www.parallax.com/sites/default/files/downloads/P8X32A-Propeller-Datasheet-v1.4.0_0.pdf
 * Keywords: microcontroller multicore Parallax Propeller LQFP.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class P8X32A_Q44 extends Component.withPins({
  "P4": "1",
  "P5": "2",
  "P6": "3",
  "P7": "4",
  "VSS_5": "5",
  "~{BOE}": "6",
  "~{RES}": "7",
  "VDD_8": "8",
  "P8": "9",
  "P9": "10",
  "P10": "11",
  "P11": "12",
  "P12": "13",
  "P13": "14",
  "P14": "15",
  "P15": "16",
  "VSS_17": "17",
  "VDD_18": "18",
  "P16": "19",
  "P17": "20",
  "P18": "21",
  "P19": "22",
  "P20": "23",
  "P21": "24",
  "P22": "25",
  "P23": "26",
  "VSS_27": "27",
  "XI": "28",
  "XO": "29",
  "VDD_30": "30",
  "P24": "31",
  "P25": "32",
  "P26": "33",
  "P27": "34",
  "P28": "35",
  "P29": "36",
  "P30": "37",
  "P31": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "P0": "41",
  "P1": "42",
  "P2": "43",
  "P3": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", VSS_5: "power_in", "~{BOE}": "input", "~{RES}": "bidirectional", VDD_8: "power_in", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", VSS_17: "power_in", VDD_18: "power_in", P16: "bidirectional", P17: "bidirectional", P18: "bidirectional", P19: "bidirectional", P20: "bidirectional", P21: "bidirectional", P22: "bidirectional", P23: "bidirectional", VSS_27: "power_in", XI: "input", XO: "output", VDD_30: "power_in", P24: "bidirectional", P25: "bidirectional", P26: "bidirectional", P27: "bidirectional", P28: "bidirectional", P29: "bidirectional", P30: "bidirectional", P31: "bidirectional", VSS_39: "power_in", VDD_40: "power_in", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Parallax:P8X32A-Q44";
  override referencePrefix = "U";
}
