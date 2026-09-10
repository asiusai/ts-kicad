// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32kB flash, 8kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1102UK`. Reference prefix: `U`.
 * Footprint filters: WLCSP*4x4*B2.17x2.32mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC1102_1104.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_CSP:WLCSP-16_4x4_B2.17x2.32mm_P0.5mm.
 */
export class LPC1102UK extends Component.withPins({
  "VDD_A1": "A1",
  "PIO0_8": "A2",
  "PIO0_9": "A3",
  "PIO0_10": "A4",
  "VSS_B1": "B1",
  "XTALIN": "B2",
  "PIO1_0": "B3",
  "PIO0_11": "B4",
  "PIO0_0": "C1",
  "PIO1_6": "C2",
  "PIO1_2": "C3",
  "PIO1_1": "C4",
  "PIO1_7": "D1",
  "VDD_D2": "D2",
  "VSS_D3": "D3",
  "PIO1_3": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_A1: "power_in", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", VSS_B1: "power_in", XTALIN: "input", PIO1_0: "bidirectional", PIO0_11: "bidirectional", PIO0_0: "bidirectional", PIO1_6: "bidirectional", PIO1_2: "bidirectional", PIO1_1: "bidirectional", PIO1_7: "bidirectional", VDD_D2: "power_in", VSS_D3: "power_in", PIO1_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1102UK";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32kB flash, 8kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1104UK`. Reference prefix: `U`.
 * Footprint filters: WLCSP*4x4*B2.17x2.32mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC1102_1104.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_CSP:WLCSP-16_4x4_B2.17x2.32mm_P0.5mm.
 */
export class LPC1104UK extends Component.withPins({
  "PIO0_6": "A1",
  "PIO0_10": "A2",
  "PIO0_8": "A3",
  "PIO0_9": "A4",
  "XTALIN": "B1",
  "PIO0_0": "B2",
  "PIO1_0": "B3",
  "PIO0_11": "B4",
  "PIO0_1": "C1",
  "PIO1_6": "C2",
  "PIO1_2": "C3",
  "PIO1_1": "C4",
  "PIO1_7": "D1",
  "VDD": "D2",
  "VSS": "D3",
  "PIO1_3": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_6: "bidirectional", PIO0_10: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", XTALIN: "input", PIO0_0: "bidirectional", PIO1_0: "bidirectional", PIO0_11: "bidirectional", PIO0_1: "bidirectional", PIO1_6: "bidirectional", PIO1_2: "bidirectional", PIO1_1: "bidirectional", PIO1_7: "bidirectional", VDD: "power_in", VSS: "power_in", PIO1_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1104UK";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8KB flash, 2KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1111FHN33-101`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1111FHN33_101 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1111FHN33-101";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8KB flash, 2KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1111FHN33-102`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1111FHN33_102 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1111FHN33-102";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8KB flash, 2KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1111FHN33-103`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1111FHN33_103 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1111FHN33-103";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1111FHN33-201`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1111FHN33_201 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1111FHN33-201";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8KB flash, 4KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1111FHN33-202`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1111FHN33_202 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1111FHN33-202";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1111FHN33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1111FHN33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1111FHN33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8KB flash, 2KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1111JHN33-103`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1111JHN33_103 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1111JHN33-103";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1111JHN33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1111JHN33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1111JHN33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 2KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112FHI33-102`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC1112FHI33_102 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112FHI33-102";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 4KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112FHI33-202`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC1112FHI33_202 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112FHI33-202";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 4KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112FHI33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC1112FHI33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112FHI33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 2KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112FHN33-101`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1112FHN33_101 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112FHN33-101";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 2KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112FHN33-102`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1112FHN33_102 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112FHN33-102";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 2KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112FHN33-103`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1112FHN33_103 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112FHN33-103";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112FHN33-201`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1112FHN33_201 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112FHN33-201";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 4KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112FHN33-202`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1112FHN33_202 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112FHN33-202";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112FHN33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1112FHN33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112FHN33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 4KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112JHI33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC1112JHI33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112JHI33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 2KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112JHN33-103`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1112JHN33_103 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112JHN33-103";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1112JHN33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1112JHN33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1112JHN33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113FBD48-301`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1113FBD48_301 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113FBD48-301";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113FBD48-302`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1113FBD48_302 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113FBD48-302";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113FBD48-303`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1113FBD48_303 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113FBD48-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113FHN33-201`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1113FHN33_201 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113FHN33-201";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 4KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113FHN33-202`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1113FHN33_202 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113FHN33-202";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113FHN33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1113FHN33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113FHN33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113FHN33-301`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1113FHN33_301 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113FHN33-301";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113FHN33-302`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1113FHN33_302 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113FHN33-302";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113FHN33-303`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1113FHN33_303 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113FHN33-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113JBD48-303`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1113JBD48_303 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113JBD48-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113JHN33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1113JHN33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113JHN33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 24KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1113JHN33-303`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1113JHN33_303 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1113JHN33-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FBD48-301`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1114FBD48_301 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FBD48-301";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FBD48-302`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1114FBD48_302 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FBD48-302";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FBD48-303`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1114FBD48_303 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FBD48-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 48KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FBD48-323`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1114FBD48_323 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FBD48-323";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 56KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FBD48-333`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1114FBD48_333 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FBD48-333";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FHI33-302`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC1114FHI33_302 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FHI33-302";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FHI33-303`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC1114FHI33_303 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FHI33-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FHN33-201`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1114FHN33_201 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FHN33-201";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 4KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FHN33-202`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1114FHN33_202 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FHN33-202";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FHN33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1114FHN33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FHN33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FHN33-301`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1114FHN33_301 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FHN33-301";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FHN33-302`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1114FHN33_302 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FHN33-302";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FHN33-303`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1114FHN33_303 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FHN33-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 56KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114FHN33-333`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1114FHN33_333 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114FHN33-333";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114JBD48-303`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1114JBD48_303 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114JBD48-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 48KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114JBD48-323`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1114JBD48_323 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114JBD48-323";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 56KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114JBD48-333`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1114JBD48_333 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114JBD48-333";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114JHI33-303`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC1114JHI33_303 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114JHI33-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32KB flash, 4KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1114JHN33-203`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.7x4.7mm_ThermalVias.
 */
export class LPC1114JHN33_203 extends Component.withPins({
  "PIO2_0": "1",
  "PIO0_0": "2",
  "PIO0_1": "3",
  "XTALIN": "4",
  "XTALOUT": "5",
  "VDD_6": "6",
  "PIO1_8": "7",
  "PIO0_2": "8",
  "PIO0_3": "9",
  "PIO0_4": "10",
  "PIO0_5": "11",
  "PIO1_9": "12",
  "PIO3_4": "13",
  "PIO3_5": "14",
  "PIO0_6": "15",
  "PIO0_7": "16",
  "PIO0_8": "17",
  "PIO0_9": "18",
  "PIO0_10": "19",
  "PIO1_10": "20",
  "PIO0_11": "21",
  "PIO1_0": "22",
  "PIO1_1": "23",
  "PIO1_2": "24",
  "PIO1_3": "25",
  "PIO1_4": "26",
  "PIO1_11": "27",
  "PIO3_2": "28",
  "VDD_29": "29",
  "PIO1_5": "30",
  "PIO1_6": "31",
  "PIO1_7": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", XTALIN: "input", XTALOUT: "output", VDD_6: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_29: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1114JHN33-203";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 64KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1115FBD48-303`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1115FBD48_303 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1115FBD48-303";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 64KB flash, 8KB SRAM, power profile
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1115JBD48-303`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC111X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1115JBD48_303 extends Component.withPins({
  "PIO2_6": "1",
  "PIO2_0": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO1_8": "9",
  "PIO0_2": "10",
  "PIO2_7": "11",
  "PIO2_8": "12",
  "PIO2_1": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO1_9": "17",
  "PIO3_4": "18",
  "PIO2_4": "19",
  "PIO2_5": "20",
  "PIO3_5": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO2_9": "24",
  "PIO2_10": "25",
  "PIO2_2": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO1_10": "30",
  "PIO2_11": "31",
  "PIO0_11": "32",
  "PIO1_0": "33",
  "PIO1_1": "34",
  "PIO1_2": "35",
  "PIO3_0": "36",
  "PIO3_1": "37",
  "PIO2_3": "38",
  "PIO1_3": "39",
  "PIO1_4": "40",
  "VSS_41": "41",
  "PIO1_11": "42",
  "PIO3_2": "43",
  "VDD_44": "44",
  "PIO1_5": "45",
  "PIO1_6": "46",
  "PIO1_7": "47",
  "PIO3_3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO2_6: "bidirectional", PIO2_0: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO1_8: "bidirectional", PIO0_2: "bidirectional", PIO2_7: "bidirectional", PIO2_8: "bidirectional", PIO2_1: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO1_9: "bidirectional", PIO3_4: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO3_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_2: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO1_10: "bidirectional", PIO2_11: "bidirectional", PIO0_11: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", PIO3_0: "bidirectional", PIO3_1: "bidirectional", PIO2_3: "bidirectional", PIO1_3: "bidirectional", PIO1_4: "bidirectional", VSS_41: "power_in", PIO1_11: "bidirectional", PIO3_2: "bidirectional", VDD_44: "power_in", PIO1_5: "bidirectional", PIO1_6: "bidirectional", PIO1_7: "bidirectional", PIO3_3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1115JBD48-303";
  override referencePrefix = "U";
}

/**
 * LPC11E1x, 50MHz Cortex-M0 MCU, 16kB Flash, 1kB EEPROM, 6kB SRAM, USART, I2C, SSP, ADC, Power Profile, LQFP48
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11E12FBD48-201`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11E1X.pdf
 * Keywords: nxp lpc arm microcontroller cortex.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11E12FBD48_201 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "NC_19": "19",
  "NC_20": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "passive", XTALOUT: "passive", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "open_collector", PIO0_5: "open_collector", PIO0_21: "bidirectional", PIO1_23: "bidirectional", NC_19: "no_connect", NC_20: "no_connect", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11E12FBD48-201";
  override referencePrefix = "U";
}

/**
 * LPC11E1x, 50MHz Cortex-M0 MCU, 24kB Flash, 2kB EEPROM, 8kB SRAM, USART, I2C, SSP, ADC, Power Profile, LQFP48
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11E13FBD48-301`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11E1X.pdf
 * Keywords: nxp lpc arm microcontroller cortex.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11E13FBD48_301 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "NC_19": "19",
  "NC_20": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "passive", XTALOUT: "passive", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "open_collector", PIO0_5: "open_collector", PIO0_21: "bidirectional", PIO1_23: "bidirectional", NC_19: "no_connect", NC_20: "no_connect", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11E13FBD48-301";
  override referencePrefix = "U";
}

/**
 * LPC11U00 USB series, 50MHz Cortex-M0 MCU, USB, ADC, USART, I2C, SPI, LQFP48 package
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11E14FBD48-401`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U1X.pdf
 * Keywords: nxp lpc arm microcontroller cortex.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11E14FBD48_401 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "NC_19": "19",
  "NC_20": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "passive", XTALOUT: "passive", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "open_collector", PIO0_5: "open_collector", PIO0_21: "bidirectional", PIO1_23: "bidirectional", NC_19: "no_connect", NC_20: "no_connect", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11E14FBD48-401";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 16KB flash, 6KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U12FBD48-201`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U1X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U12FBD48_201 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U12FBD48-201";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 24KB flash, 6KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U13FBD48-201`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U1X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U13FBD48_201 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U13FBD48-201";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 32KB flash, 6KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U14FBD48-201`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U1X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U14FBD48_201 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U14FBD48-201";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 16KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U22FBD48-301`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U2X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U22FBD48_301 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U22FBD48-301";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 24KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U23FBD48-301`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U2X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U23FBD48_301 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U23FBD48-301";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 32KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U24FBD48-301`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U2X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U24FBD48_301 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U24FBD48-301";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 32KB flash, 10KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U24FBD48-401`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U2X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U24FBD48_401 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U24FBD48-401";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 40KB flash, 8KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U34FBD48-311`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U3X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U34FBD48_311 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U34FBD48-311";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 48KB flash, 10KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U34FBD48-421`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U3X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U34FBD48_421 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U34FBD48-421";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 64KB flash, 10KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U35FBD48-401`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U3X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U35FBD48_401 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U35FBD48-401";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 96KB flash, 10KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U36FBD48-401`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U3X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U36FBD48_401 extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U36FBD48-401";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, USB, 128KB flash, 10KB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC11U37FBD48-401_`. Reference prefix: `U`.
 * Footprint filters: *QFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC11U3X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC11U37FBD48_401_ extends Component.withPins({
  "PIO1_25": "1",
  "PIO1_19": "2",
  "PIO0_0": "3",
  "PIO0_1": "4",
  "VSS_5": "5",
  "XTALIN": "6",
  "XTALOUT": "7",
  "VDD_8": "8",
  "PIO0_20": "9",
  "PIO0_2": "10",
  "PIO1_26": "11",
  "PIO1_27": "12",
  "PIO1_20": "13",
  "PIO0_3": "14",
  "PIO0_4": "15",
  "PIO0_5": "16",
  "PIO0_21": "17",
  "PIO1_23": "18",
  "USB_DM": "19",
  "USB_DP": "20",
  "PIO1_24": "21",
  "PIO0_6": "22",
  "PIO0_7": "23",
  "PIO1_28": "24",
  "PIO1_31": "25",
  "PIO1_21": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO0_10": "29",
  "PIO0_22": "30",
  "PIO1_29": "31",
  "PIO0_11": "32",
  "PIO0_12": "33",
  "PIO0_13": "34",
  "PIO0_14": "35",
  "PIO1_13": "36",
  "PIO1_14": "37",
  "PIO1_22": "38",
  "PIO0_15": "39",
  "PIO0_16": "40",
  "VSS_41": "41",
  "PIO0_23": "42",
  "PIO1_15": "43",
  "VDD_44": "44",
  "PIO0_17": "45",
  "PIO0_18": "46",
  "PIO0_19": "47",
  "PIO1_16": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO1_25: "bidirectional", PIO1_19: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", VSS_5: "power_in", XTALIN: "input", XTALOUT: "output", VDD_8: "power_in", PIO0_20: "bidirectional", PIO0_2: "bidirectional", PIO1_26: "bidirectional", PIO1_27: "bidirectional", PIO1_20: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_21: "bidirectional", PIO1_23: "bidirectional", USB_DM: "bidirectional", USB_DP: "bidirectional", PIO1_24: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO1_28: "bidirectional", PIO1_31: "bidirectional", PIO1_21: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_22: "bidirectional", PIO1_29: "bidirectional", PIO0_11: "bidirectional", PIO0_12: "bidirectional", PIO0_13: "bidirectional", PIO0_14: "bidirectional", PIO1_13: "bidirectional", PIO1_14: "bidirectional", PIO1_22: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", VSS_41: "power_in", PIO0_23: "bidirectional", PIO1_15: "bidirectional", VDD_44: "power_in", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_19: "bidirectional", PIO1_16: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC11U37FBD48-401_";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 32 kB FLASH, 4 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1224FBD48-101`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1224FBD48_101 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO0_28": "13",
  "PIO0_29": "14",
  "PIO0_0": "15",
  "PIO0_1": "16",
  "PIO0_2": "17",
  "PIO0_3": "18",
  "PIO0_4": "19",
  "PIO0_5": "20",
  "PIO0_6": "21",
  "PIO0_7": "22",
  "PIO0_8": "23",
  "PIO0_9": "24",
  "PIO0_10": "25",
  "PIO0_11": "26",
  "PIO0_12/~{ISP}": "27",
  "PIO0_13/~{RESET}": "28",
  "PIO0_14": "29",
  "PIO0_15": "30",
  "PIO0_16": "31",
  "PIO0_17": "32",
  "PIO0_18": "33",
  "PIO0_30": "34",
  "PIO0_31": "35",
  "PIO1_0": "36",
  "PIO1_1": "37",
  "PIO1_2": "38",
  "WAKEUP/PIO1_3": "39",
  "PIO1_4": "40",
  "PIO1_5": "41",
  "PIO1_6": "42",
  "VSS": "43",
  "VDD": "44",
  "RTCXOUT": "45",
  "RTCXIN": "46",
  "VDDIO": "47",
  "VSSIO": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1224FBD48-101";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 48 kB FLASH, 4 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1224FBD48-121`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1224FBD48_121 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO0_28": "13",
  "PIO0_29": "14",
  "PIO0_0": "15",
  "PIO0_1": "16",
  "PIO0_2": "17",
  "PIO0_3": "18",
  "PIO0_4": "19",
  "PIO0_5": "20",
  "PIO0_6": "21",
  "PIO0_7": "22",
  "PIO0_8": "23",
  "PIO0_9": "24",
  "PIO0_10": "25",
  "PIO0_11": "26",
  "PIO0_12/~{ISP}": "27",
  "PIO0_13/~{RESET}": "28",
  "PIO0_14": "29",
  "PIO0_15": "30",
  "PIO0_16": "31",
  "PIO0_17": "32",
  "PIO0_18": "33",
  "PIO0_30": "34",
  "PIO0_31": "35",
  "PIO1_0": "36",
  "PIO1_1": "37",
  "PIO1_2": "38",
  "WAKEUP/PIO1_3": "39",
  "PIO1_4": "40",
  "PIO1_5": "41",
  "PIO1_6": "42",
  "VSS": "43",
  "VDD": "44",
  "RTCXOUT": "45",
  "RTCXIN": "46",
  "VDDIO": "47",
  "VSSIO": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1224FBD48-121";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 32 kB FLASH, 4 kB SRAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1224FBD64-101`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC1224FBD64_101 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO2_12": "13",
  "PIO2_13": "14",
  "PIO2_14": "15",
  "PIO2_15": "16",
  "PIO0_28": "17",
  "PIO0_29": "18",
  "PIO0_0": "19",
  "PIO0_1": "20",
  "PIO0_2": "21",
  "PIO0_3": "22",
  "PIO0_4": "23",
  "PIO0_5": "24",
  "PIO0_6": "25",
  "PIO0_7": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO2_0": "29",
  "PIO2_1": "30",
  "PIO2_2": "31",
  "PIO2_3": "32",
  "PIO2_4": "33",
  "PIO2_5": "34",
  "PIO2_6": "35",
  "PIO2_7": "36",
  "PIO0_10": "37",
  "PIO0_11": "38",
  "PIO0_12/~{ISP}": "39",
  "PIO0_13/~{RESET}": "40",
  "PIO0_14": "41",
  "PIO0_15": "42",
  "PIO0_16": "43",
  "PIO0_17": "44",
  "PIO0_18": "45",
  "PIO0_30": "46",
  "PIO0_31": "47",
  "PIO1_0": "48",
  "PIO1_1": "49",
  "PIO1_2": "50",
  "WAKEUP/PIO1_3": "51",
  "PIO1_4": "52",
  "PIO1_5": "53",
  "PIO1_6": "54",
  "VSS": "55",
  "VDD": "56",
  "RTCXOUT": "57",
  "RTCXIN": "58",
  "PIO2_8": "59",
  "PIO2_9": "60",
  "PIO2_10": "61",
  "PIO2_11": "62",
  "VDDIO": "63",
  "VSSIO": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO2_12: "bidirectional", PIO2_13: "bidirectional", PIO2_14: "bidirectional", PIO2_15: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO2_0: "bidirectional", PIO2_1: "bidirectional", PIO2_2: "bidirectional", PIO2_3: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO2_6: "bidirectional", PIO2_7: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", PIO2_8: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_11: "bidirectional", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1224FBD64-101";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 48 kB FLASH, 4 kB SRAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1224FBD64-121`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC1224FBD64_121 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO2_12": "13",
  "PIO2_13": "14",
  "PIO2_14": "15",
  "PIO2_15": "16",
  "PIO0_28": "17",
  "PIO0_29": "18",
  "PIO0_0": "19",
  "PIO0_1": "20",
  "PIO0_2": "21",
  "PIO0_3": "22",
  "PIO0_4": "23",
  "PIO0_5": "24",
  "PIO0_6": "25",
  "PIO0_7": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO2_0": "29",
  "PIO2_1": "30",
  "PIO2_2": "31",
  "PIO2_3": "32",
  "PIO2_4": "33",
  "PIO2_5": "34",
  "PIO2_6": "35",
  "PIO2_7": "36",
  "PIO0_10": "37",
  "PIO0_11": "38",
  "PIO0_12/~{ISP}": "39",
  "PIO0_13/~{RESET}": "40",
  "PIO0_14": "41",
  "PIO0_15": "42",
  "PIO0_16": "43",
  "PIO0_17": "44",
  "PIO0_18": "45",
  "PIO0_30": "46",
  "PIO0_31": "47",
  "PIO1_0": "48",
  "PIO1_1": "49",
  "PIO1_2": "50",
  "WAKEUP/PIO1_3": "51",
  "PIO1_4": "52",
  "PIO1_5": "53",
  "PIO1_6": "54",
  "VSS": "55",
  "VDD": "56",
  "RTCXOUT": "57",
  "RTCXIN": "58",
  "PIO2_8": "59",
  "PIO2_9": "60",
  "PIO2_10": "61",
  "PIO2_11": "62",
  "VDDIO": "63",
  "VSSIO": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO2_12: "bidirectional", PIO2_13: "bidirectional", PIO2_14: "bidirectional", PIO2_15: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO2_0: "bidirectional", PIO2_1: "bidirectional", PIO2_2: "bidirectional", PIO2_3: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO2_6: "bidirectional", PIO2_7: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", PIO2_8: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_11: "bidirectional", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1224FBD64-121";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 64 kB FLASH, 8 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1225FBD48-301`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1225FBD48_301 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO0_28": "13",
  "PIO0_29": "14",
  "PIO0_0": "15",
  "PIO0_1": "16",
  "PIO0_2": "17",
  "PIO0_3": "18",
  "PIO0_4": "19",
  "PIO0_5": "20",
  "PIO0_6": "21",
  "PIO0_7": "22",
  "PIO0_8": "23",
  "PIO0_9": "24",
  "PIO0_10": "25",
  "PIO0_11": "26",
  "PIO0_12/~{ISP}": "27",
  "PIO0_13/~{RESET}": "28",
  "PIO0_14": "29",
  "PIO0_15": "30",
  "PIO0_16": "31",
  "PIO0_17": "32",
  "PIO0_18": "33",
  "PIO0_30": "34",
  "PIO0_31": "35",
  "PIO1_0": "36",
  "PIO1_1": "37",
  "PIO1_2": "38",
  "WAKEUP/PIO1_3": "39",
  "PIO1_4": "40",
  "PIO1_5": "41",
  "PIO1_6": "42",
  "VSS": "43",
  "VDD": "44",
  "RTCXOUT": "45",
  "RTCXIN": "46",
  "VDDIO": "47",
  "VSSIO": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1225FBD48-301";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 80 kB FLASH, 8 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1225FBD48-321`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1225FBD48_321 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO0_28": "13",
  "PIO0_29": "14",
  "PIO0_0": "15",
  "PIO0_1": "16",
  "PIO0_2": "17",
  "PIO0_3": "18",
  "PIO0_4": "19",
  "PIO0_5": "20",
  "PIO0_6": "21",
  "PIO0_7": "22",
  "PIO0_8": "23",
  "PIO0_9": "24",
  "PIO0_10": "25",
  "PIO0_11": "26",
  "PIO0_12/~{ISP}": "27",
  "PIO0_13/~{RESET}": "28",
  "PIO0_14": "29",
  "PIO0_15": "30",
  "PIO0_16": "31",
  "PIO0_17": "32",
  "PIO0_18": "33",
  "PIO0_30": "34",
  "PIO0_31": "35",
  "PIO1_0": "36",
  "PIO1_1": "37",
  "PIO1_2": "38",
  "WAKEUP/PIO1_3": "39",
  "PIO1_4": "40",
  "PIO1_5": "41",
  "PIO1_6": "42",
  "VSS": "43",
  "VDD": "44",
  "RTCXOUT": "45",
  "RTCXIN": "46",
  "VDDIO": "47",
  "VSSIO": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1225FBD48-321";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 64 kB FLASH, 8 kB SRAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1225FBD64-301`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC1225FBD64_301 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO2_12": "13",
  "PIO2_13": "14",
  "PIO2_14": "15",
  "PIO2_15": "16",
  "PIO0_28": "17",
  "PIO0_29": "18",
  "PIO0_0": "19",
  "PIO0_1": "20",
  "PIO0_2": "21",
  "PIO0_3": "22",
  "PIO0_4": "23",
  "PIO0_5": "24",
  "PIO0_6": "25",
  "PIO0_7": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO2_0": "29",
  "PIO2_1": "30",
  "PIO2_2": "31",
  "PIO2_3": "32",
  "PIO2_4": "33",
  "PIO2_5": "34",
  "PIO2_6": "35",
  "PIO2_7": "36",
  "PIO0_10": "37",
  "PIO0_11": "38",
  "PIO0_12/~{ISP}": "39",
  "PIO0_13/~{RESET}": "40",
  "PIO0_14": "41",
  "PIO0_15": "42",
  "PIO0_16": "43",
  "PIO0_17": "44",
  "PIO0_18": "45",
  "PIO0_30": "46",
  "PIO0_31": "47",
  "PIO1_0": "48",
  "PIO1_1": "49",
  "PIO1_2": "50",
  "WAKEUP/PIO1_3": "51",
  "PIO1_4": "52",
  "PIO1_5": "53",
  "PIO1_6": "54",
  "VSS": "55",
  "VDD": "56",
  "RTCXOUT": "57",
  "RTCXIN": "58",
  "PIO2_8": "59",
  "PIO2_9": "60",
  "PIO2_10": "61",
  "PIO2_11": "62",
  "VDDIO": "63",
  "VSSIO": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO2_12: "bidirectional", PIO2_13: "bidirectional", PIO2_14: "bidirectional", PIO2_15: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO2_0: "bidirectional", PIO2_1: "bidirectional", PIO2_2: "bidirectional", PIO2_3: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO2_6: "bidirectional", PIO2_7: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", PIO2_8: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_11: "bidirectional", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1225FBD64-301";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 80 kB FLASH, 8 kB SRAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1225FBD64-321`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC1225FBD64_321 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO2_12": "13",
  "PIO2_13": "14",
  "PIO2_14": "15",
  "PIO2_15": "16",
  "PIO0_28": "17",
  "PIO0_29": "18",
  "PIO0_0": "19",
  "PIO0_1": "20",
  "PIO0_2": "21",
  "PIO0_3": "22",
  "PIO0_4": "23",
  "PIO0_5": "24",
  "PIO0_6": "25",
  "PIO0_7": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO2_0": "29",
  "PIO2_1": "30",
  "PIO2_2": "31",
  "PIO2_3": "32",
  "PIO2_4": "33",
  "PIO2_5": "34",
  "PIO2_6": "35",
  "PIO2_7": "36",
  "PIO0_10": "37",
  "PIO0_11": "38",
  "PIO0_12/~{ISP}": "39",
  "PIO0_13/~{RESET}": "40",
  "PIO0_14": "41",
  "PIO0_15": "42",
  "PIO0_16": "43",
  "PIO0_17": "44",
  "PIO0_18": "45",
  "PIO0_30": "46",
  "PIO0_31": "47",
  "PIO1_0": "48",
  "PIO1_1": "49",
  "PIO1_2": "50",
  "WAKEUP/PIO1_3": "51",
  "PIO1_4": "52",
  "PIO1_5": "53",
  "PIO1_6": "54",
  "VSS": "55",
  "VDD": "56",
  "RTCXOUT": "57",
  "RTCXIN": "58",
  "PIO2_8": "59",
  "PIO2_9": "60",
  "PIO2_10": "61",
  "PIO2_11": "62",
  "VDDIO": "63",
  "VSSIO": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO2_12: "bidirectional", PIO2_13: "bidirectional", PIO2_14: "bidirectional", PIO2_15: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO2_0: "bidirectional", PIO2_1: "bidirectional", PIO2_2: "bidirectional", PIO2_3: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO2_6: "bidirectional", PIO2_7: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", PIO2_8: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_11: "bidirectional", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1225FBD64-321";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 96 kB FLASH, 8 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1226FBD48-301`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1226FBD48_301 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO0_28": "13",
  "PIO0_29": "14",
  "PIO0_0": "15",
  "PIO0_1": "16",
  "PIO0_2": "17",
  "PIO0_3": "18",
  "PIO0_4": "19",
  "PIO0_5": "20",
  "PIO0_6": "21",
  "PIO0_7": "22",
  "PIO0_8": "23",
  "PIO0_9": "24",
  "PIO0_10": "25",
  "PIO0_11": "26",
  "PIO0_12/~{ISP}": "27",
  "PIO0_13/~{RESET}": "28",
  "PIO0_14": "29",
  "PIO0_15": "30",
  "PIO0_16": "31",
  "PIO0_17": "32",
  "PIO0_18": "33",
  "PIO0_30": "34",
  "PIO0_31": "35",
  "PIO1_0": "36",
  "PIO1_1": "37",
  "PIO1_2": "38",
  "WAKEUP/PIO1_3": "39",
  "PIO1_4": "40",
  "PIO1_5": "41",
  "PIO1_6": "42",
  "VSS": "43",
  "VDD": "44",
  "RTCXOUT": "45",
  "RTCXIN": "46",
  "VDDIO": "47",
  "VSSIO": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1226FBD48-301";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 96 kB FLASH, 8 kB SRAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1226FBD64-301`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC1226FBD64_301 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO2_12": "13",
  "PIO2_13": "14",
  "PIO2_14": "15",
  "PIO2_15": "16",
  "PIO0_28": "17",
  "PIO0_29": "18",
  "PIO0_0": "19",
  "PIO0_1": "20",
  "PIO0_2": "21",
  "PIO0_3": "22",
  "PIO0_4": "23",
  "PIO0_5": "24",
  "PIO0_6": "25",
  "PIO0_7": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO2_0": "29",
  "PIO2_1": "30",
  "PIO2_2": "31",
  "PIO2_3": "32",
  "PIO2_4": "33",
  "PIO2_5": "34",
  "PIO2_6": "35",
  "PIO2_7": "36",
  "PIO0_10": "37",
  "PIO0_11": "38",
  "PIO0_12/~{ISP}": "39",
  "PIO0_13/~{RESET}": "40",
  "PIO0_14": "41",
  "PIO0_15": "42",
  "PIO0_16": "43",
  "PIO0_17": "44",
  "PIO0_18": "45",
  "PIO0_30": "46",
  "PIO0_31": "47",
  "PIO1_0": "48",
  "PIO1_1": "49",
  "PIO1_2": "50",
  "WAKEUP/PIO1_3": "51",
  "PIO1_4": "52",
  "PIO1_5": "53",
  "PIO1_6": "54",
  "VSS": "55",
  "VDD": "56",
  "RTCXOUT": "57",
  "RTCXIN": "58",
  "PIO2_8": "59",
  "PIO2_9": "60",
  "PIO2_10": "61",
  "PIO2_11": "62",
  "VDDIO": "63",
  "VSSIO": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO2_12: "bidirectional", PIO2_13: "bidirectional", PIO2_14: "bidirectional", PIO2_15: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO2_0: "bidirectional", PIO2_1: "bidirectional", PIO2_2: "bidirectional", PIO2_3: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO2_6: "bidirectional", PIO2_7: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", PIO2_8: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_11: "bidirectional", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1226FBD64-301";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 128 kB FLASH, 8 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1227FBD48-301`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LPC1227FBD48_301 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO0_28": "13",
  "PIO0_29": "14",
  "PIO0_0": "15",
  "PIO0_1": "16",
  "PIO0_2": "17",
  "PIO0_3": "18",
  "PIO0_4": "19",
  "PIO0_5": "20",
  "PIO0_6": "21",
  "PIO0_7": "22",
  "PIO0_8": "23",
  "PIO0_9": "24",
  "PIO0_10": "25",
  "PIO0_11": "26",
  "PIO0_12/~{ISP}": "27",
  "PIO0_13/~{RESET}": "28",
  "PIO0_14": "29",
  "PIO0_15": "30",
  "PIO0_16": "31",
  "PIO0_17": "32",
  "PIO0_18": "33",
  "PIO0_30": "34",
  "PIO0_31": "35",
  "PIO1_0": "36",
  "PIO1_1": "37",
  "PIO1_2": "38",
  "WAKEUP/PIO1_3": "39",
  "PIO1_4": "40",
  "PIO1_5": "41",
  "PIO1_6": "42",
  "VSS": "43",
  "VDD": "44",
  "RTCXOUT": "45",
  "RTCXIN": "46",
  "VDDIO": "47",
  "VSSIO": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1227FBD48-301";
  override referencePrefix = "U";
}

/**
 * LPC122x 32-bit ARM Cortex-M0 microcontroller, 128 kB FLASH, 8 kB SRAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1227FBD64-301`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC122X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC1227FBD64_301 extends Component.withPins({
  "XTALIN": "1",
  "XTALOUT": "2",
  "VREF_CMP": "3",
  "PIO0_19": "4",
  "PIO0_20": "5",
  "PIO0_21": "6",
  "PIO0_22": "7",
  "PIO0_23": "8",
  "PIO0_24": "9",
  "PIO0_25/SWDIO": "10",
  "PIO0_26/SWCLK": "11",
  "PIO0_27": "12",
  "PIO2_12": "13",
  "PIO2_13": "14",
  "PIO2_14": "15",
  "PIO2_15": "16",
  "PIO0_28": "17",
  "PIO0_29": "18",
  "PIO0_0": "19",
  "PIO0_1": "20",
  "PIO0_2": "21",
  "PIO0_3": "22",
  "PIO0_4": "23",
  "PIO0_5": "24",
  "PIO0_6": "25",
  "PIO0_7": "26",
  "PIO0_8": "27",
  "PIO0_9": "28",
  "PIO2_0": "29",
  "PIO2_1": "30",
  "PIO2_2": "31",
  "PIO2_3": "32",
  "PIO2_4": "33",
  "PIO2_5": "34",
  "PIO2_6": "35",
  "PIO2_7": "36",
  "PIO0_10": "37",
  "PIO0_11": "38",
  "PIO0_12/~{ISP}": "39",
  "PIO0_13/~{RESET}": "40",
  "PIO0_14": "41",
  "PIO0_15": "42",
  "PIO0_16": "43",
  "PIO0_17": "44",
  "PIO0_18": "45",
  "PIO0_30": "46",
  "PIO0_31": "47",
  "PIO1_0": "48",
  "PIO1_1": "49",
  "PIO1_2": "50",
  "WAKEUP/PIO1_3": "51",
  "PIO1_4": "52",
  "PIO1_5": "53",
  "PIO1_6": "54",
  "VSS": "55",
  "VDD": "56",
  "RTCXOUT": "57",
  "RTCXIN": "58",
  "PIO2_8": "59",
  "PIO2_9": "60",
  "PIO2_10": "61",
  "PIO2_11": "62",
  "VDDIO": "63",
  "VSSIO": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { XTALIN: "input", XTALOUT: "output", VREF_CMP: "input", PIO0_19: "bidirectional", PIO0_20: "bidirectional", PIO0_21: "bidirectional", PIO0_22: "bidirectional", PIO0_23: "bidirectional", PIO0_24: "bidirectional", "PIO0_25/SWDIO": "bidirectional", "PIO0_26/SWCLK": "bidirectional", PIO0_27: "bidirectional", PIO2_12: "bidirectional", PIO2_13: "bidirectional", PIO2_14: "bidirectional", PIO2_15: "bidirectional", PIO0_28: "bidirectional", PIO0_29: "bidirectional", PIO0_0: "bidirectional", PIO0_1: "bidirectional", PIO0_2: "bidirectional", PIO0_3: "bidirectional", PIO0_4: "bidirectional", PIO0_5: "bidirectional", PIO0_6: "bidirectional", PIO0_7: "bidirectional", PIO0_8: "bidirectional", PIO0_9: "bidirectional", PIO2_0: "bidirectional", PIO2_1: "bidirectional", PIO2_2: "bidirectional", PIO2_3: "bidirectional", PIO2_4: "bidirectional", PIO2_5: "bidirectional", PIO2_6: "bidirectional", PIO2_7: "bidirectional", PIO0_10: "bidirectional", PIO0_11: "bidirectional", "PIO0_12/~{ISP}": "bidirectional", "PIO0_13/~{RESET}": "bidirectional", PIO0_14: "bidirectional", PIO0_15: "bidirectional", PIO0_16: "bidirectional", PIO0_17: "bidirectional", PIO0_18: "bidirectional", PIO0_30: "bidirectional", PIO0_31: "bidirectional", PIO1_0: "bidirectional", PIO1_1: "bidirectional", PIO1_2: "bidirectional", "WAKEUP/PIO1_3": "bidirectional", PIO1_4: "bidirectional", PIO1_5: "bidirectional", PIO1_6: "bidirectional", VSS: "power_in", VDD: "power_in", RTCXOUT: "output", RTCXIN: "input", PIO2_8: "bidirectional", PIO2_9: "bidirectional", PIO2_10: "bidirectional", PIO2_11: "bidirectional", VDDIO: "power_in", VSSIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1227FBD64-301";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M3 microcontroller, 256KB flash, 64KB RAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1763FBD100`. Reference prefix: `U`.
 * Footprint filters: *QFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf
 * Keywords: ARM 32-bit Cortex-M3 M3 NXP microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class LPC1763FBD100 extends Component.withPins({
  "TDO/SWO": "1",
  "TDI": "2",
  "TMS/SWDIO": "3",
  "~{TRST}": "4",
  "TCK/SWDCLK": "5",
  "P0[26]": "6",
  "P0[25]": "7",
  "P0[24]": "8",
  "P0[23]": "9",
  "VDDA": "10",
  "VSSA": "11",
  "VREFP": "12",
  "NC": "13",
  "~{RSTOUT}": "14",
  "VREFN": "15",
  "RTCX1": "16",
  "~{RESET}": "17",
  "RTCX2": "18",
  "VBAT": "19",
  "P1[31]": "20",
  "P1[30]": "21",
  "XTAL1": "22",
  "XTAL2": "23",
  "P0[28]": "24",
  "P0[27]": "25",
  "P3[26]": "26",
  "P3[25]": "27",
  "VDD(3V3)_28": "28",
  "P0[29]": "29",
  "P0[30]": "30",
  "VSS_31": "31",
  "P1[18]": "32",
  "P1[19]": "33",
  "P1[20]": "34",
  "P1[21]": "35",
  "P1[22]": "36",
  "P1[23]": "37",
  "P1[24]": "38",
  "P1[25]": "39",
  "P1[26]": "40",
  "VSS_41": "41",
  "VDD(REG)(3V3)_42": "42",
  "P1[27]": "43",
  "P1[28]": "44",
  "P1[29]": "45",
  "P0[0]": "46",
  "P0[1]": "47",
  "P0[10]": "48",
  "P0[11]": "49",
  "P2[13]": "50",
  "P2[12]": "51",
  "P2[11]": "52",
  "P2[10]": "53",
  "VDD(3V3)_54": "54",
  "VSS_55": "55",
  "P0[22]": "56",
  "P0[21]": "57",
  "P0[20]": "58",
  "P0[19]": "59",
  "P0[18]": "60",
  "P0[17]": "61",
  "P0[15]": "62",
  "P0[16]": "63",
  "P2[9]": "64",
  "P2[8]": "65",
  "P2[7]": "66",
  "P2[6]": "67",
  "P2[5]": "68",
  "P2[4]": "69",
  "P2[3]": "70",
  "VDD(3V3)_71": "71",
  "VSS_72": "72",
  "P2[2]": "73",
  "P2[1]": "74",
  "P2[0]": "75",
  "P0[9]": "76",
  "P0[8]": "77",
  "P0[7]": "78",
  "P0[6]": "79",
  "P0[5]": "80",
  "P0[4]": "81",
  "P4[28]": "82",
  "VSS_83": "83",
  "VDD(REG)(3V3)_84": "84",
  "P4[29]": "85",
  "P1[17]": "86",
  "P1[16]": "87",
  "P1[15]": "88",
  "P1[14]": "89",
  "P1[10]": "90",
  "P1[9]": "91",
  "P1[8]": "92",
  "P1[4]": "93",
  "P1[1]": "94",
  "P1[0]": "95",
  "VDD(3V3)_96": "96",
  "VSS_97": "97",
  "P0[2]": "98",
  "P0[3]": "99",
  "RTCK": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TDO/SWO": "output", TDI: "input", "TMS/SWDIO": "bidirectional", "~{TRST}": "input", "TCK/SWDCLK": "input", "P0[26]": "bidirectional", "P0[25]": "bidirectional", "P0[24]": "bidirectional", "P0[23]": "bidirectional", VDDA: "power_in", VSSA: "power_in", VREFP: "power_in", NC: "no_connect", "~{RSTOUT}": "output", VREFN: "power_in", RTCX1: "input", "~{RESET}": "input", RTCX2: "output", VBAT: "power_in", "P1[31]": "bidirectional", "P1[30]": "bidirectional", XTAL1: "input", XTAL2: "output", "P0[28]": "bidirectional", "P0[27]": "bidirectional", "P3[26]": "bidirectional", "P3[25]": "bidirectional", "VDD(3V3)_28": "power_in", "P0[29]": "bidirectional", "P0[30]": "bidirectional", VSS_31: "power_in", "P1[18]": "bidirectional", "P1[19]": "bidirectional", "P1[20]": "bidirectional", "P1[21]": "bidirectional", "P1[22]": "bidirectional", "P1[23]": "bidirectional", "P1[24]": "bidirectional", "P1[25]": "bidirectional", "P1[26]": "bidirectional", VSS_41: "power_in", "VDD(REG)(3V3)_42": "power_in", "P1[27]": "bidirectional", "P1[28]": "bidirectional", "P1[29]": "bidirectional", "P0[0]": "bidirectional", "P0[1]": "bidirectional", "P0[10]": "bidirectional", "P0[11]": "bidirectional", "P2[13]": "bidirectional", "P2[12]": "bidirectional", "P2[11]": "bidirectional", "P2[10]": "bidirectional", "VDD(3V3)_54": "power_in", VSS_55: "power_in", "P0[22]": "bidirectional", "P0[21]": "bidirectional", "P0[20]": "bidirectional", "P0[19]": "bidirectional", "P0[18]": "bidirectional", "P0[17]": "bidirectional", "P0[15]": "bidirectional", "P0[16]": "bidirectional", "P2[9]": "bidirectional", "P2[8]": "bidirectional", "P2[7]": "bidirectional", "P2[6]": "bidirectional", "P2[5]": "bidirectional", "P2[4]": "bidirectional", "P2[3]": "bidirectional", "VDD(3V3)_71": "power_in", VSS_72: "power_in", "P2[2]": "bidirectional", "P2[1]": "bidirectional", "P2[0]": "bidirectional", "P0[9]": "bidirectional", "P0[8]": "bidirectional", "P0[7]": "bidirectional", "P0[6]": "bidirectional", "P0[5]": "bidirectional", "P0[4]": "bidirectional", "P4[28]": "bidirectional", VSS_83: "power_in", "VDD(REG)(3V3)_84": "power_in", "P4[29]": "bidirectional", "P1[17]": "bidirectional", "P1[16]": "bidirectional", "P1[15]": "bidirectional", "P1[14]": "bidirectional", "P1[10]": "bidirectional", "P1[9]": "bidirectional", "P1[8]": "bidirectional", "P1[4]": "bidirectional", "P1[1]": "bidirectional", "P1[0]": "bidirectional", "VDD(3V3)_96": "power_in", VSS_97: "power_in", "P0[2]": "bidirectional", "P0[3]": "bidirectional", RTCK: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1763FBD100";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M3 microcontroller, 128KB flash, 32KB RAM, Ethernet, USB
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1764FBD100`. Reference prefix: `U`.
 * Footprint filters: *QFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf
 * Keywords: ARM, 32-bit, Cortex-M3, M3, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class LPC1764FBD100 extends Component.withPins({
  "TDO/SWO": "1",
  "TDI": "2",
  "TMS/SWDIO": "3",
  "~{TRST}": "4",
  "TCK/SWDCLK": "5",
  "P0[26]": "6",
  "P0[25]": "7",
  "P0[24]": "8",
  "P0[23]": "9",
  "VDDA": "10",
  "VSSA": "11",
  "VREFP": "12",
  "NC": "13",
  "~{RSTOUT}": "14",
  "VREFN": "15",
  "RTCX1": "16",
  "~{RESET}": "17",
  "RTCX2": "18",
  "VBAT": "19",
  "P1[31]": "20",
  "P1[30]": "21",
  "XTAL1": "22",
  "XTAL2": "23",
  "P0[28]": "24",
  "P0[27]": "25",
  "P3[26]": "26",
  "P3[25]": "27",
  "VDD(3V3)_28": "28",
  "P0[29]": "29",
  "P0[30]": "30",
  "VSS_31": "31",
  "P1[18]": "32",
  "P1[19]": "33",
  "P1[20]": "34",
  "P1[21]": "35",
  "P1[22]": "36",
  "P1[23]": "37",
  "P1[24]": "38",
  "P1[25]": "39",
  "P1[26]": "40",
  "VSS_41": "41",
  "VDD(REG)(3V3)_42": "42",
  "P1[27]": "43",
  "P1[28]": "44",
  "P1[29]": "45",
  "P0[0]": "46",
  "P0[1]": "47",
  "P0[10]": "48",
  "P0[11]": "49",
  "P2[13]": "50",
  "P2[12]": "51",
  "P2[11]": "52",
  "P2[10]": "53",
  "VDD(3V3)_54": "54",
  "VSS_55": "55",
  "P0[22]": "56",
  "P0[21]": "57",
  "P0[20]": "58",
  "P0[19]": "59",
  "P0[18]": "60",
  "P0[17]": "61",
  "P0[15]": "62",
  "P0[16]": "63",
  "P2[9]": "64",
  "P2[8]": "65",
  "P2[7]": "66",
  "P2[6]": "67",
  "P2[5]": "68",
  "P2[4]": "69",
  "P2[3]": "70",
  "VDD(3V3)_71": "71",
  "VSS_72": "72",
  "P2[2]": "73",
  "P2[1]": "74",
  "P2[0]": "75",
  "P0[9]": "76",
  "P0[8]": "77",
  "P0[7]": "78",
  "P0[6]": "79",
  "P0[5]": "80",
  "P0[4]": "81",
  "P4[28]": "82",
  "VSS_83": "83",
  "VDD(REG)(3V3)_84": "84",
  "P4[29]": "85",
  "P1[17]": "86",
  "P1[16]": "87",
  "P1[15]": "88",
  "P1[14]": "89",
  "P1[10]": "90",
  "P1[9]": "91",
  "P1[8]": "92",
  "P1[4]": "93",
  "P1[1]": "94",
  "P1[0]": "95",
  "VDD(3V3)_96": "96",
  "VSS_97": "97",
  "P0[2]": "98",
  "P0[3]": "99",
  "RTCK": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TDO/SWO": "output", TDI: "input", "TMS/SWDIO": "bidirectional", "~{TRST}": "input", "TCK/SWDCLK": "input", "P0[26]": "bidirectional", "P0[25]": "bidirectional", "P0[24]": "bidirectional", "P0[23]": "bidirectional", VDDA: "power_in", VSSA: "power_in", VREFP: "power_in", NC: "no_connect", "~{RSTOUT}": "output", VREFN: "power_in", RTCX1: "input", "~{RESET}": "input", RTCX2: "output", VBAT: "power_in", "P1[31]": "bidirectional", "P1[30]": "bidirectional", XTAL1: "input", XTAL2: "output", "P0[28]": "bidirectional", "P0[27]": "bidirectional", "P3[26]": "bidirectional", "P3[25]": "bidirectional", "VDD(3V3)_28": "power_in", "P0[29]": "bidirectional", "P0[30]": "bidirectional", VSS_31: "power_in", "P1[18]": "bidirectional", "P1[19]": "bidirectional", "P1[20]": "bidirectional", "P1[21]": "bidirectional", "P1[22]": "bidirectional", "P1[23]": "bidirectional", "P1[24]": "bidirectional", "P1[25]": "bidirectional", "P1[26]": "bidirectional", VSS_41: "power_in", "VDD(REG)(3V3)_42": "power_in", "P1[27]": "bidirectional", "P1[28]": "bidirectional", "P1[29]": "bidirectional", "P0[0]": "bidirectional", "P0[1]": "bidirectional", "P0[10]": "bidirectional", "P0[11]": "bidirectional", "P2[13]": "bidirectional", "P2[12]": "bidirectional", "P2[11]": "bidirectional", "P2[10]": "bidirectional", "VDD(3V3)_54": "power_in", VSS_55: "power_in", "P0[22]": "bidirectional", "P0[21]": "bidirectional", "P0[20]": "bidirectional", "P0[19]": "bidirectional", "P0[18]": "bidirectional", "P0[17]": "bidirectional", "P0[15]": "bidirectional", "P0[16]": "bidirectional", "P2[9]": "bidirectional", "P2[8]": "bidirectional", "P2[7]": "bidirectional", "P2[6]": "bidirectional", "P2[5]": "bidirectional", "P2[4]": "bidirectional", "P2[3]": "bidirectional", "VDD(3V3)_71": "power_in", VSS_72: "power_in", "P2[2]": "bidirectional", "P2[1]": "bidirectional", "P2[0]": "bidirectional", "P0[9]": "bidirectional", "P0[8]": "bidirectional", "P0[7]": "bidirectional", "P0[6]": "bidirectional", "P0[5]": "bidirectional", "P0[4]": "bidirectional", "P4[28]": "bidirectional", VSS_83: "power_in", "VDD(REG)(3V3)_84": "power_in", "P4[29]": "bidirectional", "P1[17]": "bidirectional", "P1[16]": "bidirectional", "P1[15]": "bidirectional", "P1[14]": "bidirectional", "P1[10]": "bidirectional", "P1[9]": "bidirectional", "P1[8]": "bidirectional", "P1[4]": "bidirectional", "P1[1]": "bidirectional", "P1[0]": "bidirectional", "VDD(3V3)_96": "power_in", VSS_97: "power_in", "P0[2]": "bidirectional", "P0[3]": "bidirectional", RTCK: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1764FBD100";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M3 microcontroller, 256KB flash, 64KB RAM, USB
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1765FBD100`. Reference prefix: `U`.
 * Footprint filters: *QFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf
 * Keywords: ARM, 32-bit, Cortex-M3, M3, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class LPC1765FBD100 extends Component.withPins({
  "TDO/SWO": "1",
  "TDI": "2",
  "TMS/SWDIO": "3",
  "~{TRST}": "4",
  "TCK/SWDCLK": "5",
  "P0[26]": "6",
  "P0[25]": "7",
  "P0[24]": "8",
  "P0[23]": "9",
  "VDDA": "10",
  "VSSA": "11",
  "VREFP": "12",
  "NC": "13",
  "~{RSTOUT}": "14",
  "VREFN": "15",
  "RTCX1": "16",
  "~{RESET}": "17",
  "RTCX2": "18",
  "VBAT": "19",
  "P1[31]": "20",
  "P1[30]": "21",
  "XTAL1": "22",
  "XTAL2": "23",
  "P0[28]": "24",
  "P0[27]": "25",
  "P3[26]": "26",
  "P3[25]": "27",
  "VDD(3V3)_28": "28",
  "P0[29]": "29",
  "P0[30]": "30",
  "VSS_31": "31",
  "P1[18]": "32",
  "P1[19]": "33",
  "P1[20]": "34",
  "P1[21]": "35",
  "P1[22]": "36",
  "P1[23]": "37",
  "P1[24]": "38",
  "P1[25]": "39",
  "P1[26]": "40",
  "VSS_41": "41",
  "VDD(REG)(3V3)_42": "42",
  "P1[27]": "43",
  "P1[28]": "44",
  "P1[29]": "45",
  "P0[0]": "46",
  "P0[1]": "47",
  "P0[10]": "48",
  "P0[11]": "49",
  "P2[13]": "50",
  "P2[12]": "51",
  "P2[11]": "52",
  "P2[10]": "53",
  "VDD(3V3)_54": "54",
  "VSS_55": "55",
  "P0[22]": "56",
  "P0[21]": "57",
  "P0[20]": "58",
  "P0[19]": "59",
  "P0[18]": "60",
  "P0[17]": "61",
  "P0[15]": "62",
  "P0[16]": "63",
  "P2[9]": "64",
  "P2[8]": "65",
  "P2[7]": "66",
  "P2[6]": "67",
  "P2[5]": "68",
  "P2[4]": "69",
  "P2[3]": "70",
  "VDD(3V3)_71": "71",
  "VSS_72": "72",
  "P2[2]": "73",
  "P2[1]": "74",
  "P2[0]": "75",
  "P0[9]": "76",
  "P0[8]": "77",
  "P0[7]": "78",
  "P0[6]": "79",
  "P0[5]": "80",
  "P0[4]": "81",
  "P4[28]": "82",
  "VSS_83": "83",
  "VDD(REG)(3V3)_84": "84",
  "P4[29]": "85",
  "P1[17]": "86",
  "P1[16]": "87",
  "P1[15]": "88",
  "P1[14]": "89",
  "P1[10]": "90",
  "P1[9]": "91",
  "P1[8]": "92",
  "P1[4]": "93",
  "P1[1]": "94",
  "P1[0]": "95",
  "VDD(3V3)_96": "96",
  "VSS_97": "97",
  "P0[2]": "98",
  "P0[3]": "99",
  "RTCK": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TDO/SWO": "output", TDI: "input", "TMS/SWDIO": "bidirectional", "~{TRST}": "input", "TCK/SWDCLK": "input", "P0[26]": "bidirectional", "P0[25]": "bidirectional", "P0[24]": "bidirectional", "P0[23]": "bidirectional", VDDA: "power_in", VSSA: "power_in", VREFP: "power_in", NC: "no_connect", "~{RSTOUT}": "output", VREFN: "power_in", RTCX1: "input", "~{RESET}": "input", RTCX2: "output", VBAT: "power_in", "P1[31]": "bidirectional", "P1[30]": "bidirectional", XTAL1: "input", XTAL2: "output", "P0[28]": "bidirectional", "P0[27]": "bidirectional", "P3[26]": "bidirectional", "P3[25]": "bidirectional", "VDD(3V3)_28": "power_in", "P0[29]": "bidirectional", "P0[30]": "bidirectional", VSS_31: "power_in", "P1[18]": "bidirectional", "P1[19]": "bidirectional", "P1[20]": "bidirectional", "P1[21]": "bidirectional", "P1[22]": "bidirectional", "P1[23]": "bidirectional", "P1[24]": "bidirectional", "P1[25]": "bidirectional", "P1[26]": "bidirectional", VSS_41: "power_in", "VDD(REG)(3V3)_42": "power_in", "P1[27]": "bidirectional", "P1[28]": "bidirectional", "P1[29]": "bidirectional", "P0[0]": "bidirectional", "P0[1]": "bidirectional", "P0[10]": "bidirectional", "P0[11]": "bidirectional", "P2[13]": "bidirectional", "P2[12]": "bidirectional", "P2[11]": "bidirectional", "P2[10]": "bidirectional", "VDD(3V3)_54": "power_in", VSS_55: "power_in", "P0[22]": "bidirectional", "P0[21]": "bidirectional", "P0[20]": "bidirectional", "P0[19]": "bidirectional", "P0[18]": "bidirectional", "P0[17]": "bidirectional", "P0[15]": "bidirectional", "P0[16]": "bidirectional", "P2[9]": "bidirectional", "P2[8]": "bidirectional", "P2[7]": "bidirectional", "P2[6]": "bidirectional", "P2[5]": "bidirectional", "P2[4]": "bidirectional", "P2[3]": "bidirectional", "VDD(3V3)_71": "power_in", VSS_72: "power_in", "P2[2]": "bidirectional", "P2[1]": "bidirectional", "P2[0]": "bidirectional", "P0[9]": "bidirectional", "P0[8]": "bidirectional", "P0[7]": "bidirectional", "P0[6]": "bidirectional", "P0[5]": "bidirectional", "P0[4]": "bidirectional", "P4[28]": "bidirectional", VSS_83: "power_in", "VDD(REG)(3V3)_84": "power_in", "P4[29]": "bidirectional", "P1[17]": "bidirectional", "P1[16]": "bidirectional", "P1[15]": "bidirectional", "P1[14]": "bidirectional", "P1[10]": "bidirectional", "P1[9]": "bidirectional", "P1[8]": "bidirectional", "P1[4]": "bidirectional", "P1[1]": "bidirectional", "P1[0]": "bidirectional", "VDD(3V3)_96": "power_in", VSS_97: "power_in", "P0[2]": "bidirectional", "P0[3]": "bidirectional", RTCK: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1765FBD100";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M3 microcontroller, 256KB flash, 64KB RAM, Ethernet, USB
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1766FBD100`. Reference prefix: `U`.
 * Footprint filters: *QFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf
 * Keywords: ARM, 32-bit, Cortex-M3, M3, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class LPC1766FBD100 extends Component.withPins({
  "TDO/SWO": "1",
  "TDI": "2",
  "TMS/SWDIO": "3",
  "~{TRST}": "4",
  "TCK/SWDCLK": "5",
  "P0[26]": "6",
  "P0[25]": "7",
  "P0[24]": "8",
  "P0[23]": "9",
  "VDDA": "10",
  "VSSA": "11",
  "VREFP": "12",
  "NC": "13",
  "~{RSTOUT}": "14",
  "VREFN": "15",
  "RTCX1": "16",
  "~{RESET}": "17",
  "RTCX2": "18",
  "VBAT": "19",
  "P1[31]": "20",
  "P1[30]": "21",
  "XTAL1": "22",
  "XTAL2": "23",
  "P0[28]": "24",
  "P0[27]": "25",
  "P3[26]": "26",
  "P3[25]": "27",
  "VDD(3V3)_28": "28",
  "P0[29]": "29",
  "P0[30]": "30",
  "VSS_31": "31",
  "P1[18]": "32",
  "P1[19]": "33",
  "P1[20]": "34",
  "P1[21]": "35",
  "P1[22]": "36",
  "P1[23]": "37",
  "P1[24]": "38",
  "P1[25]": "39",
  "P1[26]": "40",
  "VSS_41": "41",
  "VDD(REG)(3V3)_42": "42",
  "P1[27]": "43",
  "P1[28]": "44",
  "P1[29]": "45",
  "P0[0]": "46",
  "P0[1]": "47",
  "P0[10]": "48",
  "P0[11]": "49",
  "P2[13]": "50",
  "P2[12]": "51",
  "P2[11]": "52",
  "P2[10]": "53",
  "VDD(3V3)_54": "54",
  "VSS_55": "55",
  "P0[22]": "56",
  "P0[21]": "57",
  "P0[20]": "58",
  "P0[19]": "59",
  "P0[18]": "60",
  "P0[17]": "61",
  "P0[15]": "62",
  "P0[16]": "63",
  "P2[9]": "64",
  "P2[8]": "65",
  "P2[7]": "66",
  "P2[6]": "67",
  "P2[5]": "68",
  "P2[4]": "69",
  "P2[3]": "70",
  "VDD(3V3)_71": "71",
  "VSS_72": "72",
  "P2[2]": "73",
  "P2[1]": "74",
  "P2[0]": "75",
  "P0[9]": "76",
  "P0[8]": "77",
  "P0[7]": "78",
  "P0[6]": "79",
  "P0[5]": "80",
  "P0[4]": "81",
  "P4[28]": "82",
  "VSS_83": "83",
  "VDD(REG)(3V3)_84": "84",
  "P4[29]": "85",
  "P1[17]": "86",
  "P1[16]": "87",
  "P1[15]": "88",
  "P1[14]": "89",
  "P1[10]": "90",
  "P1[9]": "91",
  "P1[8]": "92",
  "P1[4]": "93",
  "P1[1]": "94",
  "P1[0]": "95",
  "VDD(3V3)_96": "96",
  "VSS_97": "97",
  "P0[2]": "98",
  "P0[3]": "99",
  "RTCK": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TDO/SWO": "output", TDI: "input", "TMS/SWDIO": "bidirectional", "~{TRST}": "input", "TCK/SWDCLK": "input", "P0[26]": "bidirectional", "P0[25]": "bidirectional", "P0[24]": "bidirectional", "P0[23]": "bidirectional", VDDA: "power_in", VSSA: "power_in", VREFP: "power_in", NC: "no_connect", "~{RSTOUT}": "output", VREFN: "power_in", RTCX1: "input", "~{RESET}": "input", RTCX2: "output", VBAT: "power_in", "P1[31]": "bidirectional", "P1[30]": "bidirectional", XTAL1: "input", XTAL2: "output", "P0[28]": "bidirectional", "P0[27]": "bidirectional", "P3[26]": "bidirectional", "P3[25]": "bidirectional", "VDD(3V3)_28": "power_in", "P0[29]": "bidirectional", "P0[30]": "bidirectional", VSS_31: "power_in", "P1[18]": "bidirectional", "P1[19]": "bidirectional", "P1[20]": "bidirectional", "P1[21]": "bidirectional", "P1[22]": "bidirectional", "P1[23]": "bidirectional", "P1[24]": "bidirectional", "P1[25]": "bidirectional", "P1[26]": "bidirectional", VSS_41: "power_in", "VDD(REG)(3V3)_42": "power_in", "P1[27]": "bidirectional", "P1[28]": "bidirectional", "P1[29]": "bidirectional", "P0[0]": "bidirectional", "P0[1]": "bidirectional", "P0[10]": "bidirectional", "P0[11]": "bidirectional", "P2[13]": "bidirectional", "P2[12]": "bidirectional", "P2[11]": "bidirectional", "P2[10]": "bidirectional", "VDD(3V3)_54": "power_in", VSS_55: "power_in", "P0[22]": "bidirectional", "P0[21]": "bidirectional", "P0[20]": "bidirectional", "P0[19]": "bidirectional", "P0[18]": "bidirectional", "P0[17]": "bidirectional", "P0[15]": "bidirectional", "P0[16]": "bidirectional", "P2[9]": "bidirectional", "P2[8]": "bidirectional", "P2[7]": "bidirectional", "P2[6]": "bidirectional", "P2[5]": "bidirectional", "P2[4]": "bidirectional", "P2[3]": "bidirectional", "VDD(3V3)_71": "power_in", VSS_72: "power_in", "P2[2]": "bidirectional", "P2[1]": "bidirectional", "P2[0]": "bidirectional", "P0[9]": "bidirectional", "P0[8]": "bidirectional", "P0[7]": "bidirectional", "P0[6]": "bidirectional", "P0[5]": "bidirectional", "P0[4]": "bidirectional", "P4[28]": "bidirectional", VSS_83: "power_in", "VDD(REG)(3V3)_84": "power_in", "P4[29]": "bidirectional", "P1[17]": "bidirectional", "P1[16]": "bidirectional", "P1[15]": "bidirectional", "P1[14]": "bidirectional", "P1[10]": "bidirectional", "P1[9]": "bidirectional", "P1[8]": "bidirectional", "P1[4]": "bidirectional", "P1[1]": "bidirectional", "P1[0]": "bidirectional", "VDD(3V3)_96": "power_in", VSS_97: "power_in", "P0[2]": "bidirectional", "P0[3]": "bidirectional", RTCK: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1766FBD100";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M3 microcontroller, 512KB flash, 64KB RAM, Ethernet
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1767FBD100`. Reference prefix: `U`.
 * Footprint filters: *QFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf
 * Keywords: ARM, 32-bit, Cortex-M3, M3, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class LPC1767FBD100 extends Component.withPins({
  "TDO/SWO": "1",
  "TDI": "2",
  "TMS/SWDIO": "3",
  "~{TRST}": "4",
  "TCK/SWDCLK": "5",
  "P0[26]": "6",
  "P0[25]": "7",
  "P0[24]": "8",
  "P0[23]": "9",
  "VDDA": "10",
  "VSSA": "11",
  "VREFP": "12",
  "NC": "13",
  "~{RSTOUT}": "14",
  "VREFN": "15",
  "RTCX1": "16",
  "~{RESET}": "17",
  "RTCX2": "18",
  "VBAT": "19",
  "P1[31]": "20",
  "P1[30]": "21",
  "XTAL1": "22",
  "XTAL2": "23",
  "P0[28]": "24",
  "P0[27]": "25",
  "P3[26]": "26",
  "P3[25]": "27",
  "VDD(3V3)_28": "28",
  "P0[29]": "29",
  "P0[30]": "30",
  "VSS_31": "31",
  "P1[18]": "32",
  "P1[19]": "33",
  "P1[20]": "34",
  "P1[21]": "35",
  "P1[22]": "36",
  "P1[23]": "37",
  "P1[24]": "38",
  "P1[25]": "39",
  "P1[26]": "40",
  "VSS_41": "41",
  "VDD(REG)(3V3)_42": "42",
  "P1[27]": "43",
  "P1[28]": "44",
  "P1[29]": "45",
  "P0[0]": "46",
  "P0[1]": "47",
  "P0[10]": "48",
  "P0[11]": "49",
  "P2[13]": "50",
  "P2[12]": "51",
  "P2[11]": "52",
  "P2[10]": "53",
  "VDD(3V3)_54": "54",
  "VSS_55": "55",
  "P0[22]": "56",
  "P0[21]": "57",
  "P0[20]": "58",
  "P0[19]": "59",
  "P0[18]": "60",
  "P0[17]": "61",
  "P0[15]": "62",
  "P0[16]": "63",
  "P2[9]": "64",
  "P2[8]": "65",
  "P2[7]": "66",
  "P2[6]": "67",
  "P2[5]": "68",
  "P2[4]": "69",
  "P2[3]": "70",
  "VDD(3V3)_71": "71",
  "VSS_72": "72",
  "P2[2]": "73",
  "P2[1]": "74",
  "P2[0]": "75",
  "P0[9]": "76",
  "P0[8]": "77",
  "P0[7]": "78",
  "P0[6]": "79",
  "P0[5]": "80",
  "P0[4]": "81",
  "P4[28]": "82",
  "VSS_83": "83",
  "VDD(REG)(3V3)_84": "84",
  "P4[29]": "85",
  "P1[17]": "86",
  "P1[16]": "87",
  "P1[15]": "88",
  "P1[14]": "89",
  "P1[10]": "90",
  "P1[9]": "91",
  "P1[8]": "92",
  "P1[4]": "93",
  "P1[1]": "94",
  "P1[0]": "95",
  "VDD(3V3)_96": "96",
  "VSS_97": "97",
  "P0[2]": "98",
  "P0[3]": "99",
  "RTCK": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TDO/SWO": "output", TDI: "input", "TMS/SWDIO": "bidirectional", "~{TRST}": "input", "TCK/SWDCLK": "input", "P0[26]": "bidirectional", "P0[25]": "bidirectional", "P0[24]": "bidirectional", "P0[23]": "bidirectional", VDDA: "power_in", VSSA: "power_in", VREFP: "power_in", NC: "no_connect", "~{RSTOUT}": "output", VREFN: "power_in", RTCX1: "input", "~{RESET}": "input", RTCX2: "output", VBAT: "power_in", "P1[31]": "bidirectional", "P1[30]": "bidirectional", XTAL1: "input", XTAL2: "output", "P0[28]": "bidirectional", "P0[27]": "bidirectional", "P3[26]": "bidirectional", "P3[25]": "bidirectional", "VDD(3V3)_28": "power_in", "P0[29]": "bidirectional", "P0[30]": "bidirectional", VSS_31: "power_in", "P1[18]": "bidirectional", "P1[19]": "bidirectional", "P1[20]": "bidirectional", "P1[21]": "bidirectional", "P1[22]": "bidirectional", "P1[23]": "bidirectional", "P1[24]": "bidirectional", "P1[25]": "bidirectional", "P1[26]": "bidirectional", VSS_41: "power_in", "VDD(REG)(3V3)_42": "power_in", "P1[27]": "bidirectional", "P1[28]": "bidirectional", "P1[29]": "bidirectional", "P0[0]": "bidirectional", "P0[1]": "bidirectional", "P0[10]": "bidirectional", "P0[11]": "bidirectional", "P2[13]": "bidirectional", "P2[12]": "bidirectional", "P2[11]": "bidirectional", "P2[10]": "bidirectional", "VDD(3V3)_54": "power_in", VSS_55: "power_in", "P0[22]": "bidirectional", "P0[21]": "bidirectional", "P0[20]": "bidirectional", "P0[19]": "bidirectional", "P0[18]": "bidirectional", "P0[17]": "bidirectional", "P0[15]": "bidirectional", "P0[16]": "bidirectional", "P2[9]": "bidirectional", "P2[8]": "bidirectional", "P2[7]": "bidirectional", "P2[6]": "bidirectional", "P2[5]": "bidirectional", "P2[4]": "bidirectional", "P2[3]": "bidirectional", "VDD(3V3)_71": "power_in", VSS_72: "power_in", "P2[2]": "bidirectional", "P2[1]": "bidirectional", "P2[0]": "bidirectional", "P0[9]": "bidirectional", "P0[8]": "bidirectional", "P0[7]": "bidirectional", "P0[6]": "bidirectional", "P0[5]": "bidirectional", "P0[4]": "bidirectional", "P4[28]": "bidirectional", VSS_83: "power_in", "VDD(REG)(3V3)_84": "power_in", "P4[29]": "bidirectional", "P1[17]": "bidirectional", "P1[16]": "bidirectional", "P1[15]": "bidirectional", "P1[14]": "bidirectional", "P1[10]": "bidirectional", "P1[9]": "bidirectional", "P1[8]": "bidirectional", "P1[4]": "bidirectional", "P1[1]": "bidirectional", "P1[0]": "bidirectional", "VDD(3V3)_96": "power_in", VSS_97: "power_in", "P0[2]": "bidirectional", "P0[3]": "bidirectional", RTCK: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1767FBD100";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M3 microcontroller, 512KB flash, 64KB RAM, Ethernet, USB
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1768FBD100`. Reference prefix: `U`.
 * Footprint filters: *QFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf
 * Keywords: ARM, 32-bit, Cortex-M3, M3, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class LPC1768FBD100 extends Component.withPins({
  "TDO/SWO": "1",
  "TDI": "2",
  "TMS/SWDIO": "3",
  "~{TRST}": "4",
  "TCK/SWDCLK": "5",
  "P0[26]": "6",
  "P0[25]": "7",
  "P0[24]": "8",
  "P0[23]": "9",
  "VDDA": "10",
  "VSSA": "11",
  "VREFP": "12",
  "NC": "13",
  "~{RSTOUT}": "14",
  "VREFN": "15",
  "RTCX1": "16",
  "~{RESET}": "17",
  "RTCX2": "18",
  "VBAT": "19",
  "P1[31]": "20",
  "P1[30]": "21",
  "XTAL1": "22",
  "XTAL2": "23",
  "P0[28]": "24",
  "P0[27]": "25",
  "P3[26]": "26",
  "P3[25]": "27",
  "VDD(3V3)_28": "28",
  "P0[29]": "29",
  "P0[30]": "30",
  "VSS_31": "31",
  "P1[18]": "32",
  "P1[19]": "33",
  "P1[20]": "34",
  "P1[21]": "35",
  "P1[22]": "36",
  "P1[23]": "37",
  "P1[24]": "38",
  "P1[25]": "39",
  "P1[26]": "40",
  "VSS_41": "41",
  "VDD(REG)(3V3)_42": "42",
  "P1[27]": "43",
  "P1[28]": "44",
  "P1[29]": "45",
  "P0[0]": "46",
  "P0[1]": "47",
  "P0[10]": "48",
  "P0[11]": "49",
  "P2[13]": "50",
  "P2[12]": "51",
  "P2[11]": "52",
  "P2[10]": "53",
  "VDD(3V3)_54": "54",
  "VSS_55": "55",
  "P0[22]": "56",
  "P0[21]": "57",
  "P0[20]": "58",
  "P0[19]": "59",
  "P0[18]": "60",
  "P0[17]": "61",
  "P0[15]": "62",
  "P0[16]": "63",
  "P2[9]": "64",
  "P2[8]": "65",
  "P2[7]": "66",
  "P2[6]": "67",
  "P2[5]": "68",
  "P2[4]": "69",
  "P2[3]": "70",
  "VDD(3V3)_71": "71",
  "VSS_72": "72",
  "P2[2]": "73",
  "P2[1]": "74",
  "P2[0]": "75",
  "P0[9]": "76",
  "P0[8]": "77",
  "P0[7]": "78",
  "P0[6]": "79",
  "P0[5]": "80",
  "P0[4]": "81",
  "P4[28]": "82",
  "VSS_83": "83",
  "VDD(REG)(3V3)_84": "84",
  "P4[29]": "85",
  "P1[17]": "86",
  "P1[16]": "87",
  "P1[15]": "88",
  "P1[14]": "89",
  "P1[10]": "90",
  "P1[9]": "91",
  "P1[8]": "92",
  "P1[4]": "93",
  "P1[1]": "94",
  "P1[0]": "95",
  "VDD(3V3)_96": "96",
  "VSS_97": "97",
  "P0[2]": "98",
  "P0[3]": "99",
  "RTCK": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TDO/SWO": "output", TDI: "input", "TMS/SWDIO": "bidirectional", "~{TRST}": "input", "TCK/SWDCLK": "input", "P0[26]": "bidirectional", "P0[25]": "bidirectional", "P0[24]": "bidirectional", "P0[23]": "bidirectional", VDDA: "power_in", VSSA: "power_in", VREFP: "power_in", NC: "no_connect", "~{RSTOUT}": "output", VREFN: "power_in", RTCX1: "input", "~{RESET}": "input", RTCX2: "output", VBAT: "power_in", "P1[31]": "bidirectional", "P1[30]": "bidirectional", XTAL1: "input", XTAL2: "output", "P0[28]": "bidirectional", "P0[27]": "bidirectional", "P3[26]": "bidirectional", "P3[25]": "bidirectional", "VDD(3V3)_28": "power_in", "P0[29]": "bidirectional", "P0[30]": "bidirectional", VSS_31: "power_in", "P1[18]": "bidirectional", "P1[19]": "bidirectional", "P1[20]": "bidirectional", "P1[21]": "bidirectional", "P1[22]": "bidirectional", "P1[23]": "bidirectional", "P1[24]": "bidirectional", "P1[25]": "bidirectional", "P1[26]": "bidirectional", VSS_41: "power_in", "VDD(REG)(3V3)_42": "power_in", "P1[27]": "bidirectional", "P1[28]": "bidirectional", "P1[29]": "bidirectional", "P0[0]": "bidirectional", "P0[1]": "bidirectional", "P0[10]": "bidirectional", "P0[11]": "bidirectional", "P2[13]": "bidirectional", "P2[12]": "bidirectional", "P2[11]": "bidirectional", "P2[10]": "bidirectional", "VDD(3V3)_54": "power_in", VSS_55: "power_in", "P0[22]": "bidirectional", "P0[21]": "bidirectional", "P0[20]": "bidirectional", "P0[19]": "bidirectional", "P0[18]": "bidirectional", "P0[17]": "bidirectional", "P0[15]": "bidirectional", "P0[16]": "bidirectional", "P2[9]": "bidirectional", "P2[8]": "bidirectional", "P2[7]": "bidirectional", "P2[6]": "bidirectional", "P2[5]": "bidirectional", "P2[4]": "bidirectional", "P2[3]": "bidirectional", "VDD(3V3)_71": "power_in", VSS_72: "power_in", "P2[2]": "bidirectional", "P2[1]": "bidirectional", "P2[0]": "bidirectional", "P0[9]": "bidirectional", "P0[8]": "bidirectional", "P0[7]": "bidirectional", "P0[6]": "bidirectional", "P0[5]": "bidirectional", "P0[4]": "bidirectional", "P4[28]": "bidirectional", VSS_83: "power_in", "VDD(REG)(3V3)_84": "power_in", "P4[29]": "bidirectional", "P1[17]": "bidirectional", "P1[16]": "bidirectional", "P1[15]": "bidirectional", "P1[14]": "bidirectional", "P1[10]": "bidirectional", "P1[9]": "bidirectional", "P1[8]": "bidirectional", "P1[4]": "bidirectional", "P1[1]": "bidirectional", "P1[0]": "bidirectional", "VDD(3V3)_96": "power_in", VSS_97: "power_in", "P0[2]": "bidirectional", "P0[3]": "bidirectional", RTCK: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1768FBD100";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M3 microcontroller, 512KB flash, 64KB RAM, Ethernet, USB
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC1769FBD100`. Reference prefix: `U`.
 * Footprint filters: *QFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf
 * Keywords: ARM, 32-bit, Cortex-M3, M3, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class LPC1769FBD100 extends Component.withPins({
  "TDO/SWO": "1",
  "TDI": "2",
  "TMS/SWDIO": "3",
  "~{TRST}": "4",
  "TCK/SWDCLK": "5",
  "P0[26]": "6",
  "P0[25]": "7",
  "P0[24]": "8",
  "P0[23]": "9",
  "VDDA": "10",
  "VSSA": "11",
  "VREFP": "12",
  "NC": "13",
  "~{RSTOUT}": "14",
  "VREFN": "15",
  "RTCX1": "16",
  "~{RESET}": "17",
  "RTCX2": "18",
  "VBAT": "19",
  "P1[31]": "20",
  "P1[30]": "21",
  "XTAL1": "22",
  "XTAL2": "23",
  "P0[28]": "24",
  "P0[27]": "25",
  "P3[26]": "26",
  "P3[25]": "27",
  "VDD(3V3)_28": "28",
  "P0[29]": "29",
  "P0[30]": "30",
  "VSS_31": "31",
  "P1[18]": "32",
  "P1[19]": "33",
  "P1[20]": "34",
  "P1[21]": "35",
  "P1[22]": "36",
  "P1[23]": "37",
  "P1[24]": "38",
  "P1[25]": "39",
  "P1[26]": "40",
  "VSS_41": "41",
  "VDD(REG)(3V3)_42": "42",
  "P1[27]": "43",
  "P1[28]": "44",
  "P1[29]": "45",
  "P0[0]": "46",
  "P0[1]": "47",
  "P0[10]": "48",
  "P0[11]": "49",
  "P2[13]": "50",
  "P2[12]": "51",
  "P2[11]": "52",
  "P2[10]": "53",
  "VDD(3V3)_54": "54",
  "VSS_55": "55",
  "P0[22]": "56",
  "P0[21]": "57",
  "P0[20]": "58",
  "P0[19]": "59",
  "P0[18]": "60",
  "P0[17]": "61",
  "P0[15]": "62",
  "P0[16]": "63",
  "P2[9]": "64",
  "P2[8]": "65",
  "P2[7]": "66",
  "P2[6]": "67",
  "P2[5]": "68",
  "P2[4]": "69",
  "P2[3]": "70",
  "VDD(3V3)_71": "71",
  "VSS_72": "72",
  "P2[2]": "73",
  "P2[1]": "74",
  "P2[0]": "75",
  "P0[9]": "76",
  "P0[8]": "77",
  "P0[7]": "78",
  "P0[6]": "79",
  "P0[5]": "80",
  "P0[4]": "81",
  "P4[28]": "82",
  "VSS_83": "83",
  "VDD(REG)(3V3)_84": "84",
  "P4[29]": "85",
  "P1[17]": "86",
  "P1[16]": "87",
  "P1[15]": "88",
  "P1[14]": "89",
  "P1[10]": "90",
  "P1[9]": "91",
  "P1[8]": "92",
  "P1[4]": "93",
  "P1[1]": "94",
  "P1[0]": "95",
  "VDD(3V3)_96": "96",
  "VSS_97": "97",
  "P0[2]": "98",
  "P0[3]": "99",
  "RTCK": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "TDO/SWO": "output", TDI: "input", "TMS/SWDIO": "bidirectional", "~{TRST}": "input", "TCK/SWDCLK": "input", "P0[26]": "bidirectional", "P0[25]": "bidirectional", "P0[24]": "bidirectional", "P0[23]": "bidirectional", VDDA: "power_in", VSSA: "power_in", VREFP: "power_in", NC: "no_connect", "~{RSTOUT}": "output", VREFN: "power_in", RTCX1: "input", "~{RESET}": "input", RTCX2: "output", VBAT: "power_in", "P1[31]": "bidirectional", "P1[30]": "bidirectional", XTAL1: "input", XTAL2: "output", "P0[28]": "bidirectional", "P0[27]": "bidirectional", "P3[26]": "bidirectional", "P3[25]": "bidirectional", "VDD(3V3)_28": "power_in", "P0[29]": "bidirectional", "P0[30]": "bidirectional", VSS_31: "power_in", "P1[18]": "bidirectional", "P1[19]": "bidirectional", "P1[20]": "bidirectional", "P1[21]": "bidirectional", "P1[22]": "bidirectional", "P1[23]": "bidirectional", "P1[24]": "bidirectional", "P1[25]": "bidirectional", "P1[26]": "bidirectional", VSS_41: "power_in", "VDD(REG)(3V3)_42": "power_in", "P1[27]": "bidirectional", "P1[28]": "bidirectional", "P1[29]": "bidirectional", "P0[0]": "bidirectional", "P0[1]": "bidirectional", "P0[10]": "bidirectional", "P0[11]": "bidirectional", "P2[13]": "bidirectional", "P2[12]": "bidirectional", "P2[11]": "bidirectional", "P2[10]": "bidirectional", "VDD(3V3)_54": "power_in", VSS_55: "power_in", "P0[22]": "bidirectional", "P0[21]": "bidirectional", "P0[20]": "bidirectional", "P0[19]": "bidirectional", "P0[18]": "bidirectional", "P0[17]": "bidirectional", "P0[15]": "bidirectional", "P0[16]": "bidirectional", "P2[9]": "bidirectional", "P2[8]": "bidirectional", "P2[7]": "bidirectional", "P2[6]": "bidirectional", "P2[5]": "bidirectional", "P2[4]": "bidirectional", "P2[3]": "bidirectional", "VDD(3V3)_71": "power_in", VSS_72: "power_in", "P2[2]": "bidirectional", "P2[1]": "bidirectional", "P2[0]": "bidirectional", "P0[9]": "bidirectional", "P0[8]": "bidirectional", "P0[7]": "bidirectional", "P0[6]": "bidirectional", "P0[5]": "bidirectional", "P0[4]": "bidirectional", "P4[28]": "bidirectional", VSS_83: "power_in", "VDD(REG)(3V3)_84": "power_in", "P4[29]": "bidirectional", "P1[17]": "bidirectional", "P1[16]": "bidirectional", "P1[15]": "bidirectional", "P1[14]": "bidirectional", "P1[10]": "bidirectional", "P1[9]": "bidirectional", "P1[8]": "bidirectional", "P1[4]": "bidirectional", "P1[1]": "bidirectional", "P1[0]": "bidirectional", "VDD(3V3)_96": "power_in", VSS_97: "power_in", "P0[2]": "bidirectional", "P0[3]": "bidirectional", RTCK: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC1769FBD100";
  override referencePrefix = "U";
}

/**
 * 16-bit/32-bit ARM7TDMI-S microcontroller, 32kB flash, 8kB RAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC2141FBD64`. Reference prefix: `U`.
 * Footprint filters: *LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC2141_42_44_46_48.pdf
 * Keywords: ARM, 16-bit, 32-bit, ARM7, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC2141FBD64 extends Component.withPins({
  "P0.21": "1",
  "P0.22": "2",
  "RTXC1": "3",
  "P1.19": "4",
  "RTXC2": "5",
  "VSS_6": "6",
  "VDDA": "7",
  "P1.18": "8",
  "P0.25": "9",
  "D+": "10",
  "D-": "11",
  "P1.17": "12",
  "P0.28": "13",
  "P0.29": "14",
  "P0.30": "15",
  "P1.16": "16",
  "P0.31": "17",
  "VSS_18": "18",
  "P0.0": "19",
  "P1.31": "20",
  "P0.1": "21",
  "P0.2": "22",
  "VDD_23": "23",
  "P1.26": "24",
  "VSS_25": "25",
  "P0.3": "26",
  "P0.4": "27",
  "P1.25": "28",
  "P0.5": "29",
  "P0.6": "30",
  "P0.7": "31",
  "P1.24": "32",
  "P0.8": "33",
  "P0.9": "34",
  "P0.10": "35",
  "P1.23": "36",
  "P0.11": "37",
  "P0.12": "38",
  "P0.13": "39",
  "P1.22": "40",
  "P0.14": "41",
  "VSS_42": "42",
  "VDD_43": "43",
  "P1.21": "44",
  "P0.15": "45",
  "P0.16": "46",
  "P0.17": "47",
  "P1.20": "48",
  "VBAT": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "P1.30": "52",
  "P0.18": "53",
  "P0.19": "54",
  "P0.20": "55",
  "P1.29": "56",
  "~{RESET}": "57",
  "P0.23": "58",
  "VSSA": "59",
  "P1.28": "60",
  "XTAL2": "61",
  "XTAL1": "62",
  "VREF": "63",
  "P1.27": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.21": "bidirectional", "P0.22": "bidirectional", RTXC1: "input", "P1.19": "bidirectional", RTXC2: "output", VSS_6: "power_in", VDDA: "power_in", "P1.18": "bidirectional", "P0.25": "bidirectional", "D+": "bidirectional", "D-": "bidirectional", "P1.17": "bidirectional", "P0.28": "bidirectional", "P0.29": "bidirectional", "P0.30": "bidirectional", "P1.16": "bidirectional", "P0.31": "output", VSS_18: "power_in", "P0.0": "bidirectional", "P1.31": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", VDD_23: "power_in", "P1.26": "bidirectional", VSS_25: "power_in", "P0.3": "bidirectional", "P0.4": "bidirectional", "P1.25": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.24": "bidirectional", "P0.8": "bidirectional", "P0.9": "bidirectional", "P0.10": "bidirectional", "P1.23": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P1.22": "bidirectional", "P0.14": "bidirectional", VSS_42: "power_in", VDD_43: "power_in", "P1.21": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "P1.20": "bidirectional", VBAT: "power_in", VSS_50: "power_in", VDD_51: "power_in", "P1.30": "bidirectional", "P0.18": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", "P1.29": "bidirectional", "~{RESET}": "input", "P0.23": "bidirectional", VSSA: "power_in", "P1.28": "bidirectional", XTAL2: "output", XTAL1: "input", VREF: "input", "P1.27": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC2141FBD64";
  override referencePrefix = "U";
}

/**
 * 16-bit/32-bit ARM7TDMI-S microcontroller, 64kB flash, 16kB RAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC2142FBD64`. Reference prefix: `U`.
 * Footprint filters: *LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC2141_42_44_46_48.pdf
 * Keywords: ARM, 16-bit, 32-bit, ARM7, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC2142FBD64 extends Component.withPins({
  "P0.21": "1",
  "P0.22": "2",
  "RTXC1": "3",
  "P1.19": "4",
  "RTXC2": "5",
  "VSS_6": "6",
  "VDDA": "7",
  "P1.18": "8",
  "P0.25": "9",
  "D+": "10",
  "D-": "11",
  "P1.17": "12",
  "P0.28": "13",
  "P0.29": "14",
  "P0.30": "15",
  "P1.16": "16",
  "P0.31": "17",
  "VSS_18": "18",
  "P0.0": "19",
  "P1.31": "20",
  "P0.1": "21",
  "P0.2": "22",
  "VDD_23": "23",
  "P1.26": "24",
  "VSS_25": "25",
  "P0.3": "26",
  "P0.4": "27",
  "P1.25": "28",
  "P0.5": "29",
  "P0.6": "30",
  "P0.7": "31",
  "P1.24": "32",
  "P0.8": "33",
  "P0.9": "34",
  "P0.10": "35",
  "P1.23": "36",
  "P0.11": "37",
  "P0.12": "38",
  "P0.13": "39",
  "P1.22": "40",
  "P0.14": "41",
  "VSS_42": "42",
  "VDD_43": "43",
  "P1.21": "44",
  "P0.15": "45",
  "P0.16": "46",
  "P0.17": "47",
  "P1.20": "48",
  "VBAT": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "P1.30": "52",
  "P0.18": "53",
  "P0.19": "54",
  "P0.20": "55",
  "P1.29": "56",
  "~{RESET}": "57",
  "P0.23": "58",
  "VSSA": "59",
  "P1.28": "60",
  "XTAL2": "61",
  "XTAL1": "62",
  "VREF": "63",
  "P1.27": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.21": "bidirectional", "P0.22": "bidirectional", RTXC1: "input", "P1.19": "bidirectional", RTXC2: "output", VSS_6: "power_in", VDDA: "power_in", "P1.18": "bidirectional", "P0.25": "bidirectional", "D+": "bidirectional", "D-": "bidirectional", "P1.17": "bidirectional", "P0.28": "bidirectional", "P0.29": "bidirectional", "P0.30": "bidirectional", "P1.16": "bidirectional", "P0.31": "output", VSS_18: "power_in", "P0.0": "bidirectional", "P1.31": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", VDD_23: "power_in", "P1.26": "bidirectional", VSS_25: "power_in", "P0.3": "bidirectional", "P0.4": "bidirectional", "P1.25": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.24": "bidirectional", "P0.8": "bidirectional", "P0.9": "bidirectional", "P0.10": "bidirectional", "P1.23": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P1.22": "bidirectional", "P0.14": "bidirectional", VSS_42: "power_in", VDD_43: "power_in", "P1.21": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "P1.20": "bidirectional", VBAT: "power_in", VSS_50: "power_in", VDD_51: "power_in", "P1.30": "bidirectional", "P0.18": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", "P1.29": "bidirectional", "~{RESET}": "input", "P0.23": "bidirectional", VSSA: "power_in", "P1.28": "bidirectional", XTAL2: "output", XTAL1: "input", VREF: "input", "P1.27": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC2142FBD64";
  override referencePrefix = "U";
}

/**
 * 16-bit/32-bit ARM7TDMI-S microcontroller, 128kB flash, 16kB RAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC2144FBD64`. Reference prefix: `U`.
 * Footprint filters: *LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC2141_42_44_46_48.pdf
 * Keywords: ARM, 16-bit, 32-bit, ARM7, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC2144FBD64 extends Component.withPins({
  "P0.21": "1",
  "P0.22": "2",
  "RTXC1": "3",
  "P1.19": "4",
  "RTXC2": "5",
  "VSS_6": "6",
  "VDDA": "7",
  "P1.18": "8",
  "P0.25": "9",
  "D+": "10",
  "D-": "11",
  "P1.17": "12",
  "P0.28": "13",
  "P0.29": "14",
  "P0.30": "15",
  "P1.16": "16",
  "P0.31": "17",
  "VSS_18": "18",
  "P0.0": "19",
  "P1.31": "20",
  "P0.1": "21",
  "P0.2": "22",
  "VDD_23": "23",
  "P1.26": "24",
  "VSS_25": "25",
  "P0.3": "26",
  "P0.4": "27",
  "P1.25": "28",
  "P0.5": "29",
  "P0.6": "30",
  "P0.7": "31",
  "P1.24": "32",
  "P0.8": "33",
  "P0.9": "34",
  "P0.10": "35",
  "P1.23": "36",
  "P0.11": "37",
  "P0.12": "38",
  "P0.13": "39",
  "P1.22": "40",
  "P0.14": "41",
  "VSS_42": "42",
  "VDD_43": "43",
  "P1.21": "44",
  "P0.15": "45",
  "P0.16": "46",
  "P0.17": "47",
  "P1.20": "48",
  "VBAT": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "P1.30": "52",
  "P0.18": "53",
  "P0.19": "54",
  "P0.20": "55",
  "P1.29": "56",
  "~{RESET}": "57",
  "P0.23": "58",
  "VSSA": "59",
  "P1.28": "60",
  "XTAL2": "61",
  "XTAL1": "62",
  "VREF": "63",
  "P1.27": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.21": "bidirectional", "P0.22": "bidirectional", RTXC1: "input", "P1.19": "bidirectional", RTXC2: "output", VSS_6: "power_in", VDDA: "power_in", "P1.18": "bidirectional", "P0.25": "bidirectional", "D+": "bidirectional", "D-": "bidirectional", "P1.17": "bidirectional", "P0.28": "bidirectional", "P0.29": "bidirectional", "P0.30": "bidirectional", "P1.16": "bidirectional", "P0.31": "output", VSS_18: "power_in", "P0.0": "bidirectional", "P1.31": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", VDD_23: "power_in", "P1.26": "bidirectional", VSS_25: "power_in", "P0.3": "bidirectional", "P0.4": "bidirectional", "P1.25": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.24": "bidirectional", "P0.8": "bidirectional", "P0.9": "bidirectional", "P0.10": "bidirectional", "P1.23": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P1.22": "bidirectional", "P0.14": "bidirectional", VSS_42: "power_in", VDD_43: "power_in", "P1.21": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "P1.20": "bidirectional", VBAT: "power_in", VSS_50: "power_in", VDD_51: "power_in", "P1.30": "bidirectional", "P0.18": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", "P1.29": "bidirectional", "~{RESET}": "input", "P0.23": "bidirectional", VSSA: "power_in", "P1.28": "bidirectional", XTAL2: "output", XTAL1: "input", VREF: "input", "P1.27": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC2144FBD64";
  override referencePrefix = "U";
}

/**
 * 16-bit/32-bit ARM7TDMI-S microcontroller, 256kB flash, 40kB RAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC2146FBD64`. Reference prefix: `U`.
 * Footprint filters: *LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC2141_42_44_46_48.pdf
 * Keywords: ARM, 16-bit, 32-bit, ARM7, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC2146FBD64 extends Component.withPins({
  "P0.21": "1",
  "P0.22": "2",
  "RTXC1": "3",
  "P1.19": "4",
  "RTXC2": "5",
  "VSS_6": "6",
  "VDDA": "7",
  "P1.18": "8",
  "P0.25": "9",
  "D+": "10",
  "D-": "11",
  "P1.17": "12",
  "P0.28": "13",
  "P0.29": "14",
  "P0.30": "15",
  "P1.16": "16",
  "P0.31": "17",
  "VSS_18": "18",
  "P0.0": "19",
  "P1.31": "20",
  "P0.1": "21",
  "P0.2": "22",
  "VDD_23": "23",
  "P1.26": "24",
  "VSS_25": "25",
  "P0.3": "26",
  "P0.4": "27",
  "P1.25": "28",
  "P0.5": "29",
  "P0.6": "30",
  "P0.7": "31",
  "P1.24": "32",
  "P0.8": "33",
  "P0.9": "34",
  "P0.10": "35",
  "P1.23": "36",
  "P0.11": "37",
  "P0.12": "38",
  "P0.13": "39",
  "P1.22": "40",
  "P0.14": "41",
  "VSS_42": "42",
  "VDD_43": "43",
  "P1.21": "44",
  "P0.15": "45",
  "P0.16": "46",
  "P0.17": "47",
  "P1.20": "48",
  "VBAT": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "P1.30": "52",
  "P0.18": "53",
  "P0.19": "54",
  "P0.20": "55",
  "P1.29": "56",
  "~{RESET}": "57",
  "P0.23": "58",
  "VSSA": "59",
  "P1.28": "60",
  "XTAL2": "61",
  "XTAL1": "62",
  "VREF": "63",
  "P1.27": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.21": "bidirectional", "P0.22": "bidirectional", RTXC1: "input", "P1.19": "bidirectional", RTXC2: "output", VSS_6: "power_in", VDDA: "power_in", "P1.18": "bidirectional", "P0.25": "bidirectional", "D+": "bidirectional", "D-": "bidirectional", "P1.17": "bidirectional", "P0.28": "bidirectional", "P0.29": "bidirectional", "P0.30": "bidirectional", "P1.16": "bidirectional", "P0.31": "output", VSS_18: "power_in", "P0.0": "bidirectional", "P1.31": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", VDD_23: "power_in", "P1.26": "bidirectional", VSS_25: "power_in", "P0.3": "bidirectional", "P0.4": "bidirectional", "P1.25": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.24": "bidirectional", "P0.8": "bidirectional", "P0.9": "bidirectional", "P0.10": "bidirectional", "P1.23": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P1.22": "bidirectional", "P0.14": "bidirectional", VSS_42: "power_in", VDD_43: "power_in", "P1.21": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "P1.20": "bidirectional", VBAT: "power_in", VSS_50: "power_in", VDD_51: "power_in", "P1.30": "bidirectional", "P0.18": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", "P1.29": "bidirectional", "~{RESET}": "input", "P0.23": "bidirectional", VSSA: "power_in", "P1.28": "bidirectional", XTAL2: "output", XTAL1: "input", VREF: "input", "P1.27": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC2146FBD64";
  override referencePrefix = "U";
}

/**
 * 16-bit/32-bit ARM7TDMI-S microcontroller, 512kB flash, 40kB RAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC2148FBD64`. Reference prefix: `U`.
 * Footprint filters: *LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC2141_42_44_46_48.pdf
 * Keywords: ARM, 16-bit, 32-bit, ARM7, NXP, microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class LPC2148FBD64 extends Component.withPins({
  "P0.21": "1",
  "P0.22": "2",
  "RTXC1": "3",
  "P1.19": "4",
  "RTXC2": "5",
  "VSS_6": "6",
  "VDDA": "7",
  "P1.18": "8",
  "P0.25": "9",
  "D+": "10",
  "D-": "11",
  "P1.17": "12",
  "P0.28": "13",
  "P0.29": "14",
  "P0.30": "15",
  "P1.16": "16",
  "P0.31": "17",
  "VSS_18": "18",
  "P0.0": "19",
  "P1.31": "20",
  "P0.1": "21",
  "P0.2": "22",
  "VDD_23": "23",
  "P1.26": "24",
  "VSS_25": "25",
  "P0.3": "26",
  "P0.4": "27",
  "P1.25": "28",
  "P0.5": "29",
  "P0.6": "30",
  "P0.7": "31",
  "P1.24": "32",
  "P0.8": "33",
  "P0.9": "34",
  "P0.10": "35",
  "P1.23": "36",
  "P0.11": "37",
  "P0.12": "38",
  "P0.13": "39",
  "P1.22": "40",
  "P0.14": "41",
  "VSS_42": "42",
  "VDD_43": "43",
  "P1.21": "44",
  "P0.15": "45",
  "P0.16": "46",
  "P0.17": "47",
  "P1.20": "48",
  "VBAT": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "P1.30": "52",
  "P0.18": "53",
  "P0.19": "54",
  "P0.20": "55",
  "P1.29": "56",
  "~{RESET}": "57",
  "P0.23": "58",
  "VSSA": "59",
  "P1.28": "60",
  "XTAL2": "61",
  "XTAL1": "62",
  "VREF": "63",
  "P1.27": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.21": "bidirectional", "P0.22": "bidirectional", RTXC1: "input", "P1.19": "bidirectional", RTXC2: "output", VSS_6: "power_in", VDDA: "power_in", "P1.18": "bidirectional", "P0.25": "bidirectional", "D+": "bidirectional", "D-": "bidirectional", "P1.17": "bidirectional", "P0.28": "bidirectional", "P0.29": "bidirectional", "P0.30": "bidirectional", "P1.16": "bidirectional", "P0.31": "output", VSS_18: "power_in", "P0.0": "bidirectional", "P1.31": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", VDD_23: "power_in", "P1.26": "bidirectional", VSS_25: "power_in", "P0.3": "bidirectional", "P0.4": "bidirectional", "P1.25": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.24": "bidirectional", "P0.8": "bidirectional", "P0.9": "bidirectional", "P0.10": "bidirectional", "P1.23": "bidirectional", "P0.11": "bidirectional", "P0.12": "bidirectional", "P0.13": "bidirectional", "P1.22": "bidirectional", "P0.14": "bidirectional", VSS_42: "power_in", VDD_43: "power_in", "P1.21": "bidirectional", "P0.15": "bidirectional", "P0.16": "bidirectional", "P0.17": "bidirectional", "P1.20": "bidirectional", VBAT: "power_in", VSS_50: "power_in", VDD_51: "power_in", "P1.30": "bidirectional", "P0.18": "bidirectional", "P0.19": "bidirectional", "P0.20": "bidirectional", "P1.29": "bidirectional", "~{RESET}": "input", "P0.23": "bidirectional", VSSA: "power_in", "P1.28": "bidirectional", XTAL2: "output", XTAL1: "input", VREF: "input", "P1.27": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC2148FBD64";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M4/M0 MCU, 512 KB / 1 MB Flash, 136 KB SRAM, 2 High-Speed USB 2.0, EMC (External Memory Controller), TFBGA-100 (NXP SOT926-1)
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC433xxET100`. Reference prefix: `U`.
 * Footprint filters: *BGA*9*x9*mm?Layout10x10?P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/LPC435X_3X_2X_1X.pdf
 * Keywords: NXP LPC4300-Series microcontroller ADC DAC SWD SPI I2C I2S SD/MMC-card LPC4337JET100 LPC4333JET100.
 * Default footprint: Package_BGA:TFBGA-100_9.0x9.0mm_Layout10x10_P0.8mm.
 */
export class LPC433xxET100 extends Component.withPins({
  "ADC0_1/ADC1_1": "A1",
  "ADC0_0/ADC1_0/DAC": "A2",
  "ADC0_3/ADC1_3": "A3",
  "WAKEUP0": "A4",
  "RTCX1": "A5",
  "DBGEN": "A6",
  "P3_3": "A7",
  "P3_0": "A8",
  "P2_11": "A9",
  "P2_13": "A10",
  "XTAL1": "B1",
  "VDDA": "B2",
  "ADC0_2/ADC1_2": "B3",
  "~{TRST}": "B4",
  "RTCX2": "B5",
  "~{RESET}": "B6",
  "P3_5": "B7",
  "P3_4": "B8",
  "P2_12": "B9",
  "P2_9": "B10",
  "XTAL2": "C1",
  "VSSA": "C2",
  "RTC_ALARM": "C3",
  "TMS/SWDIO": "C4",
  "VBAT": "C5",
  "P2_8": "C6",
  "P3_6": "C7",
  "VSS_C8": "C8",
  "P6_11": "C9",
  "P2_7": "C10",
  "USB0_VDDA3V3_DRIVER": "D1",
  "USB0_VDDA3V3": "D2",
  "USB0_VSSA_TERM": "D3",
  "VSS_D4": "D4",
  "VSS_D5": "D5",
  "I2C0_SCL": "D6",
  "P3_7": "D7",
  "P2_3": "D8",
  "P2_4": "D9",
  "P2_5": "D10",
  "USB0_DP": "E1",
  "USB0_DM": "E2",
  "USB0_VBUS": "E3",
  "VDDREG_E4": "E4",
  "VDDREG_E5": "E5",
  "I2C0_SDA": "E6",
  "P3_8": "E7",
  "P2_10": "E8",
  "USB1_DP": "E9",
  "USB1_DM": "E10",
  "USB0_ID": "F1",
  "USB0_VSSA_REF": "F2",
  "USB0_RREF": "F3",
  "VDDREG_F4": "F4",
  "P2_2": "F5",
  "P6_4": "F6",
  "P3_1": "F7",
  "P6_9": "F8",
  "P6_5": "F9",
  "VDDIO_F10": "F10",
  "P0_1": "G1",
  "P0_0": "G2",
  "TDI": "G3",
  "P1_7": "G4",
  "P6_1": "G5",
  "P3_2": "G6",
  "P2_1": "G7",
  "VSS_G8": "G8",
  "P2_6": "G9",
  "P2_0": "G10",
  "P1_0": "H1",
  "TCK/SWDCLK": "H2",
  "TDO/SWO": "H3",
  "PF_4": "H4",
  "P1_8": "H5",
  "P1_10": "H6",
  "P6_0": "H7",
  "P1_13": "H8",
  "P1_16": "H9",
  "P1_17": "H10",
  "P1_3": "J1",
  "P1_4": "J2",
  "VSS_J3": "J3",
  "P1_5": "J4",
  "P1_9": "J5",
  "VSS_J6": "J6",
  "P1_11": "J7",
  "P1_14": "J8",
  "P6_2": "J9",
  "P1_18": "J10",
  "P1_2": "K1",
  "P1_1": "K2",
  "CLK0": "K3",
  "P1_6": "K4",
  "VDDIO_K5": "K5",
  "CLK2": "K6",
  "P1_12": "K7",
  "P1_15": "K8",
  "P1_19": "K9",
  "P1_20": "K10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "ADC0_1/ADC1_1": "input", "ADC0_0/ADC1_0/DAC": "bidirectional", "ADC0_3/ADC1_3": "input", WAKEUP0: "input", RTCX1: "input", DBGEN: "input", P3_3: "bidirectional", P3_0: "bidirectional", P2_11: "bidirectional", P2_13: "bidirectional", XTAL1: "input", VDDA: "power_in", "ADC0_2/ADC1_2": "input", "~{TRST}": "input", RTCX2: "output", "~{RESET}": "input", P3_5: "bidirectional", P3_4: "bidirectional", P2_12: "bidirectional", P2_9: "bidirectional", XTAL2: "output", VSSA: "power_in", RTC_ALARM: "output", "TMS/SWDIO": "bidirectional", VBAT: "power_in", P2_8: "bidirectional", P3_6: "bidirectional", VSS_C8: "power_in", P6_11: "bidirectional", P2_7: "bidirectional", USB0_VDDA3V3_DRIVER: "power_in", USB0_VDDA3V3: "power_in", USB0_VSSA_TERM: "power_in", VSS_D4: "passive", VSS_D5: "passive", I2C0_SCL: "bidirectional", P3_7: "bidirectional", P2_3: "bidirectional", P2_4: "bidirectional", P2_5: "bidirectional", USB0_DP: "bidirectional", USB0_DM: "bidirectional", USB0_VBUS: "power_in", VDDREG_E4: "power_in", VDDREG_E5: "passive", I2C0_SDA: "bidirectional", P3_8: "bidirectional", P2_10: "bidirectional", USB1_DP: "bidirectional", USB1_DM: "bidirectional", USB0_ID: "input", USB0_VSSA_REF: "power_in", USB0_RREF: "input", VDDREG_F4: "passive", P2_2: "bidirectional", P6_4: "bidirectional", P3_1: "bidirectional", P6_9: "bidirectional", P6_5: "bidirectional", VDDIO_F10: "power_in", P0_1: "bidirectional", P0_0: "bidirectional", TDI: "input", P1_7: "bidirectional", P6_1: "bidirectional", P3_2: "bidirectional", P2_1: "bidirectional", VSS_G8: "passive", P2_6: "bidirectional", P2_0: "bidirectional", P1_0: "bidirectional", "TCK/SWDCLK": "input", "TDO/SWO": "output", PF_4: "bidirectional", P1_8: "bidirectional", P1_10: "bidirectional", P6_0: "bidirectional", P1_13: "bidirectional", P1_16: "bidirectional", P1_17: "bidirectional", P1_3: "bidirectional", P1_4: "bidirectional", VSS_J3: "passive", P1_5: "bidirectional", P1_9: "bidirectional", VSS_J6: "passive", P1_11: "bidirectional", P1_14: "bidirectional", P6_2: "bidirectional", P1_18: "bidirectional", P1_2: "bidirectional", P1_1: "bidirectional", CLK0: "bidirectional", P1_6: "bidirectional", VDDIO_K5: "passive", CLK2: "bidirectional", P1_12: "bidirectional", P1_15: "bidirectional", P1_19: "bidirectional", P1_20: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC433xxET100";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8kB flash, 2kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC811M001JDH16`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC81XM.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class LPC811M001JDH16 extends Component.withPins({
  "PIO0_13": "1",
  "PIO0_12": "2",
  "PIO0_5": "3",
  "PIO0_4": "4",
  "PIO0_3": "5",
  "PIO0_2": "6",
  "PIO0_11": "7",
  "PIO0_10": "8",
  "PIO0_1": "9",
  "PIO0_9": "10",
  "PIO0_8": "11",
  "VDD": "12",
  "VSS": "13",
  "PIO0_7": "14",
  "PIO0_6": "15",
  "PIO0_0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VSS: "power_in", PIO0_7: "bidirectional", PIO0_6: "bidirectional", PIO0_0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC811M001JDH16";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16kB flash, 4kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC812M001JDH16`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC81XM.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class LPC812M001JDH16 extends Component.withPins({
  "PIO0_13": "1",
  "PIO0_12": "2",
  "PIO0_5": "3",
  "PIO0_4": "4",
  "PIO0_3": "5",
  "PIO0_2": "6",
  "PIO0_11": "7",
  "PIO0_10": "8",
  "PIO0_1": "9",
  "PIO0_9": "10",
  "PIO0_8": "11",
  "VDD": "12",
  "VSS": "13",
  "PIO0_7": "14",
  "PIO0_6": "15",
  "PIO0_0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VSS: "power_in", PIO0_7: "bidirectional", PIO0_6: "bidirectional", PIO0_0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC812M001JDH16";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16kB flash, 4kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC812M101JD20`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC81XM.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class LPC812M101JD20 extends Component.withPins({
  "PIO0_17": "1",
  "PIO0_13": "2",
  "PIO0_12": "3",
  "PIO0_5": "4",
  "PIO0_4": "5",
  "PIO0_3": "6",
  "PIO0_2": "7",
  "PIO0_11": "8",
  "PIO0_10": "9",
  "PIO0_16": "10",
  "PIO0_15": "11",
  "PIO0_1": "12",
  "PIO0_9": "13",
  "PIO0_8": "14",
  "VDD": "15",
  "VSS": "16",
  "PIO0_7": "17",
  "PIO0_6": "18",
  "PIO0_0": "19",
  "PIO0_14": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_17: "bidirectional", PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_16: "bidirectional", PIO0_15: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VSS: "power_in", PIO0_7: "bidirectional", PIO0_6: "bidirectional", PIO0_0: "bidirectional", PIO0_14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC812M101JD20";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16kB flash, 4kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC812M101JDH20`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC81XM.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class LPC812M101JDH20 extends Component.withPins({
  "PIO0_17": "1",
  "PIO0_13": "2",
  "PIO0_12": "3",
  "PIO0_5": "4",
  "PIO0_4": "5",
  "PIO0_3": "6",
  "PIO0_2": "7",
  "PIO0_11": "8",
  "PIO0_10": "9",
  "PIO0_16": "10",
  "PIO0_15": "11",
  "PIO0_1": "12",
  "PIO0_9": "13",
  "PIO0_8": "14",
  "VDD": "15",
  "VSS": "16",
  "PIO0_7": "17",
  "PIO0_6": "18",
  "PIO0_0": "19",
  "PIO0_14": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_17: "bidirectional", PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_16: "bidirectional", PIO0_15: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VSS: "power_in", PIO0_7: "bidirectional", PIO0_6: "bidirectional", PIO0_0: "bidirectional", PIO0_14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC812M101JDH20";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16kB flash, 4kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC812M101JTB16`. Reference prefix: `U`.
 * Footprint filters: NXP*XSON*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC81XM.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_SON:NXP_XSON-16.
 */
export class LPC812M101JTB16 extends Component.withPins({
  "PIO0_13": "1",
  "PIO0_12": "2",
  "PIO0_5": "3",
  "PIO0_4": "4",
  "PIO0_3": "5",
  "PIO0_2": "6",
  "PIO0_11": "7",
  "PIO0_10": "8",
  "PIO0_1": "9",
  "PIO0_9": "10",
  "PIO0_8": "11",
  "VDD": "12",
  "VSS": "13",
  "PIO0_7": "14",
  "PIO0_6": "15",
  "PIO0_0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VSS: "power_in", PIO0_7: "bidirectional", PIO0_6: "bidirectional", PIO0_0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC812M101JTB16";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16kB flash, 4kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC822M101JDH20`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC82X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class LPC822M101JDH20 extends Component.withPins({
  "PIO0_23": "1",
  "PIO0_17": "2",
  "PIO0_13": "3",
  "PIO0_12": "4",
  "PIO0_5": "5",
  "PIO0_4": "6",
  "PIO0_3": "7",
  "PIO0_2": "8",
  "PIO0_11": "9",
  "PIO0_10": "10",
  "PIO0_15": "11",
  "PIO0_1": "12",
  "PIO0_9": "13",
  "PIO0_8": "14",
  "VDD": "15",
  "VSS": "16",
  "VREFN": "17",
  "VREFP": "18",
  "PIO0_0": "19",
  "PIO0_14": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_23: "bidirectional", PIO0_17: "bidirectional", PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_15: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VSS: "power_in", VREFN: "power_in", VREFP: "power_in", PIO0_0: "bidirectional", PIO0_14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC822M101JDH20";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16kB flash, 4kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC822M101JHI33`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC82X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC822M101JHI33 extends Component.withPins({
  "PIO0_13": "1",
  "PIO0_12": "2",
  "PIO0_5": "3",
  "PIO0_4": "4",
  "PIO0_28": "5",
  "PIO0_3": "6",
  "PIO0_2": "7",
  "PIO0_11": "8",
  "PIO0_10": "9",
  "PIO0_16": "10",
  "PIO0_27": "11",
  "PIO0_26": "12",
  "PIO0_25": "13",
  "PIO0_24": "14",
  "PIO0_15": "15",
  "PIO0_1": "16",
  "PIO0_9": "17",
  "PIO0_8": "18",
  "VDD": "19",
  "VREFN": "20",
  "VREFP": "21",
  "PIO0_7": "22",
  "PIO0_6": "23",
  "PIO0_0": "24",
  "PIO0_14": "25",
  "PIO0_23": "26",
  "PIO0_22": "27",
  "PIO0_21": "28",
  "PIO0_20": "29",
  "PIO0_19": "30",
  "PIO0_18": "31",
  "PIO0_17": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_28: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_16: "bidirectional", PIO0_27: "bidirectional", PIO0_26: "bidirectional", PIO0_25: "bidirectional", PIO0_24: "bidirectional", PIO0_15: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VREFN: "power_in", VREFP: "power_in", PIO0_7: "bidirectional", PIO0_6: "bidirectional", PIO0_0: "bidirectional", PIO0_14: "bidirectional", PIO0_23: "bidirectional", PIO0_22: "bidirectional", PIO0_21: "bidirectional", PIO0_20: "bidirectional", PIO0_19: "bidirectional", PIO0_18: "bidirectional", PIO0_17: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC822M101JHI33";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32kB flash, 8kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC824M201JDH20`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC82X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class LPC824M201JDH20 extends Component.withPins({
  "PIO0_23": "1",
  "PIO0_17": "2",
  "PIO0_13": "3",
  "PIO0_12": "4",
  "PIO0_5": "5",
  "PIO0_4": "6",
  "PIO0_3": "7",
  "PIO0_2": "8",
  "PIO0_11": "9",
  "PIO0_10": "10",
  "PIO0_15": "11",
  "PIO0_1": "12",
  "PIO0_9": "13",
  "PIO0_8": "14",
  "VDD": "15",
  "VSS": "16",
  "VREFN": "17",
  "VREFP": "18",
  "PIO0_0": "19",
  "PIO0_14": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_23: "bidirectional", PIO0_17: "bidirectional", PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_15: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VSS: "power_in", VREFN: "power_in", VREFP: "power_in", PIO0_0: "bidirectional", PIO0_14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC824M201JDH20";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32kB flash, 8kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC824M201JHI33`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC82X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC824M201JHI33 extends Component.withPins({
  "PIO0_13": "1",
  "PIO0_12": "2",
  "PIO0_5": "3",
  "PIO0_4": "4",
  "PIO0_28": "5",
  "PIO0_3": "6",
  "PIO0_2": "7",
  "PIO0_11": "8",
  "PIO0_10": "9",
  "PIO0_16": "10",
  "PIO0_27": "11",
  "PIO0_26": "12",
  "PIO0_25": "13",
  "PIO0_24": "14",
  "PIO0_15": "15",
  "PIO0_1": "16",
  "PIO0_9": "17",
  "PIO0_8": "18",
  "VDD": "19",
  "VREFN": "20",
  "VREFP": "21",
  "PIO0_7": "22",
  "PIO0_6": "23",
  "PIO0_0": "24",
  "PIO0_14": "25",
  "PIO0_23": "26",
  "PIO0_22": "27",
  "PIO0_21": "28",
  "PIO0_20": "29",
  "PIO0_19": "30",
  "PIO0_18": "31",
  "PIO0_17": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_28: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_16: "bidirectional", PIO0_27: "bidirectional", PIO0_26: "bidirectional", PIO0_25: "bidirectional", PIO0_24: "bidirectional", PIO0_15: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VREFN: "power_in", VREFP: "power_in", PIO0_7: "bidirectional", PIO0_6: "bidirectional", PIO0_0: "bidirectional", PIO0_14: "bidirectional", PIO0_23: "bidirectional", PIO0_22: "bidirectional", PIO0_21: "bidirectional", PIO0_20: "bidirectional", PIO0_19: "bidirectional", PIO0_18: "bidirectional", PIO0_17: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC824M201JHI33";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16kB flash, 4kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC832M101FDH20`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC83X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class LPC832M101FDH20 extends Component.withPins({
  "PIO0_23": "1",
  "PIO0_17": "2",
  "PIO0_13": "3",
  "PIO0_12": "4",
  "PIO0_5": "5",
  "PIO0_4": "6",
  "PIO0_3": "7",
  "PIO0_2": "8",
  "PIO0_11": "9",
  "PIO0_10": "10",
  "PIO0_15": "11",
  "PIO0_1": "12",
  "PIO0_9": "13",
  "PIO0_8": "14",
  "VDD": "15",
  "VSS": "16",
  "VREFN": "17",
  "VREFP": "18",
  "PIO0_0": "19",
  "PIO0_14": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_23: "bidirectional", PIO0_17: "bidirectional", PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_15: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VSS: "power_in", VREFN: "power_in", VREFP: "power_in", PIO0_0: "bidirectional", PIO0_14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC832M101FDH20";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32kB flash, 4kB SRAM
 *
 * KiCad symbol: `MCU_NXP_LPC:LPC834M101FHI33`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/LPC83X.pdf
 * Keywords: ARM, 32-bit, Cortex-M0, M0, NXP, microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class LPC834M101FHI33 extends Component.withPins({
  "PIO0_13": "1",
  "PIO0_12": "2",
  "PIO0_5": "3",
  "PIO0_4": "4",
  "PIO0_28": "5",
  "PIO0_3": "6",
  "PIO0_2": "7",
  "PIO0_11": "8",
  "PIO0_10": "9",
  "PIO0_16": "10",
  "PIO0_27": "11",
  "PIO0_26": "12",
  "PIO0_25": "13",
  "PIO0_24": "14",
  "PIO0_15": "15",
  "PIO0_1": "16",
  "PIO0_9": "17",
  "PIO0_8": "18",
  "VDD": "19",
  "VREFN": "20",
  "VREFP": "21",
  "PIO0_7": "22",
  "PIO0_6": "23",
  "PIO0_0": "24",
  "PIO0_14": "25",
  "PIO0_23": "26",
  "PIO0_22": "27",
  "PIO0_21": "28",
  "PIO0_20": "29",
  "PIO0_19": "30",
  "PIO0_18": "31",
  "PIO0_17": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PIO0_13: "bidirectional", PIO0_12: "bidirectional", PIO0_5: "bidirectional", PIO0_4: "bidirectional", PIO0_28: "bidirectional", PIO0_3: "bidirectional", PIO0_2: "bidirectional", PIO0_11: "bidirectional", PIO0_10: "bidirectional", PIO0_16: "bidirectional", PIO0_27: "bidirectional", PIO0_26: "bidirectional", PIO0_25: "bidirectional", PIO0_24: "bidirectional", PIO0_15: "bidirectional", PIO0_1: "bidirectional", PIO0_9: "bidirectional", PIO0_8: "bidirectional", VDD: "power_in", VREFN: "power_in", VREFP: "power_in", PIO0_7: "bidirectional", PIO0_6: "bidirectional", PIO0_0: "bidirectional", PIO0_14: "bidirectional", PIO0_23: "bidirectional", PIO0_22: "bidirectional", PIO0_21: "bidirectional", PIO0_20: "bidirectional", PIO0_19: "bidirectional", PIO0_18: "bidirectional", PIO0_17: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_LPC:LPC834M101FHI33";
  override referencePrefix = "U";
}
