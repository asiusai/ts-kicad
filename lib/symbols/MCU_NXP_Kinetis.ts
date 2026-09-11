// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Kinetis K20 series, 50-MHz/32-bit ARM Cortex-M4, 128 kB flash/32 kB FlexNVM, 32 kB SRAM/2 kB FlexRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MK20DX128VFM5`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/K20P32M50SF0.pdf
 * Keywords: Kinetis KL27 ARM Cortex M4.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MK20DX128VFM5 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "USB0_DP": "3",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "XTAL32": "9",
  "EXTAL32": "10",
  "VBAT": "11",
  "PTA0": "12",
  "PTA1": "13",
  "PTA2": "14",
  "PTA3": "15",
  "PTA4/LLWU_P3": "16",
  "PTA18": "17",
  "PTA19": "18",
  "~{RESET}": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "USB0_DM": "4",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", USB0_DP: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", XTAL32: "input", EXTAL32: "input", VBAT: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "PTA4/LLWU_P3": "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", "~{RESET}": "input", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", USB0_DM: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MK20DX128VFM5";
  override referencePrefix = "U";
}

/**
 * Kinetis K20 series, 50-MHz/32-bit ARM Cortex-M4, 128 kB flash, 32 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MK20DN128VFM5`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/K20P32M50SF0.pdf
 * Keywords: Kinetis KL27 ARM Cortex M4.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MK20DN128VFM5 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "USB0_DP": "3",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "XTAL32": "9",
  "EXTAL32": "10",
  "VBAT": "11",
  "PTA0": "12",
  "PTA1": "13",
  "PTA2": "14",
  "PTA3": "15",
  "PTA4/LLWU_P3": "16",
  "PTA18": "17",
  "PTA19": "18",
  "~{RESET}": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "USB0_DM": "4",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", USB0_DP: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", XTAL32: "input", EXTAL32: "input", VBAT: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "PTA4/LLWU_P3": "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", "~{RESET}": "input", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", USB0_DM: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MK20DN128VFM5";
  override referencePrefix = "U";
}

/**
 * Kinetis K20 series, 50-MHz/32-bit ARM Cortex-M4, 32 kB flash, 8 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MK20DN32VFM5`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/K20P32M50SF0.pdf
 * Keywords: Kinetis KL27 ARM Cortex M4.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MK20DN32VFM5 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "USB0_DP": "3",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "XTAL32": "9",
  "EXTAL32": "10",
  "VBAT": "11",
  "PTA0": "12",
  "PTA1": "13",
  "PTA2": "14",
  "PTA3": "15",
  "PTA4/LLWU_P3": "16",
  "PTA18": "17",
  "PTA19": "18",
  "~{RESET}": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "USB0_DM": "4",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", USB0_DP: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", XTAL32: "input", EXTAL32: "input", VBAT: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "PTA4/LLWU_P3": "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", "~{RESET}": "input", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", USB0_DM: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MK20DN32VFM5";
  override referencePrefix = "U";
}

/**
 * Kinetis K20 series, 50-MHz/32-bit ARM Cortex-M4, 64 kB flash, 16 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MK20DN64VFM5`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/K20P32M50SF0.pdf
 * Keywords: Kinetis KL27 ARM Cortex M4.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MK20DN64VFM5 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "USB0_DP": "3",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "XTAL32": "9",
  "EXTAL32": "10",
  "VBAT": "11",
  "PTA0": "12",
  "PTA1": "13",
  "PTA2": "14",
  "PTA3": "15",
  "PTA4/LLWU_P3": "16",
  "PTA18": "17",
  "PTA19": "18",
  "~{RESET}": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "USB0_DM": "4",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", USB0_DP: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", XTAL32: "input", EXTAL32: "input", VBAT: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "PTA4/LLWU_P3": "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", "~{RESET}": "input", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", USB0_DM: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MK20DN64VFM5";
  override referencePrefix = "U";
}

/**
 * Kinetis K20 series, 50-MHz/32-bit ARM Cortex-M4, 32 kB flash/32 kB FlexNVM, 8 kB SRAM/2 kB FlexRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MK20DX32VFM5`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/K20P32M50SF0.pdf
 * Keywords: Kinetis KL27 ARM Cortex M4.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MK20DX32VFM5 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "USB0_DP": "3",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "XTAL32": "9",
  "EXTAL32": "10",
  "VBAT": "11",
  "PTA0": "12",
  "PTA1": "13",
  "PTA2": "14",
  "PTA3": "15",
  "PTA4/LLWU_P3": "16",
  "PTA18": "17",
  "PTA19": "18",
  "~{RESET}": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "USB0_DM": "4",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", USB0_DP: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", XTAL32: "input", EXTAL32: "input", VBAT: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "PTA4/LLWU_P3": "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", "~{RESET}": "input", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", USB0_DM: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MK20DX32VFM5";
  override referencePrefix = "U";
}

/**
 * Kinetis K20 series, 50-MHz/32-bit ARM Cortex-M4, 64 kB flash/32 kB FlexNVM, 16 kB SRAM/2 kB FlexRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MK20DX64VFM5`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/K20P32M50SF0.pdf
 * Keywords: Kinetis KL27 ARM Cortex M4.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MK20DX64VFM5 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "USB0_DP": "3",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "XTAL32": "9",
  "EXTAL32": "10",
  "VBAT": "11",
  "PTA0": "12",
  "PTA1": "13",
  "PTA2": "14",
  "PTA3": "15",
  "PTA4/LLWU_P3": "16",
  "PTA18": "17",
  "PTA19": "18",
  "~{RESET}": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "USB0_DM": "4",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", USB0_DP: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", XTAL32: "input", EXTAL32: "input", VBAT: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "PTA4/LLWU_P3": "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", "~{RESET}": "input", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", USB0_DM: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MK20DX64VFM5";
  override referencePrefix = "U";
}

/**
 * Kinetis K20 series, 120-MHz/32-bit ARM Cortex-M4, 512 kB flash, 512 kB FlexNVM, 128 kB SRAM, 16 kB FlexRAM, USB HS+FS Device/OTG, MAPBGA-144
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MK20FX512VMD12`. Reference prefix: `U`.
 * Footprint filters: BGA*13.0x13.0mm*Layout12x12*P1.0mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/K20P144M120SF3.pdf
 * Keywords: Kinetis K20 ARM Cortex M4.
 * Default footprint: Package_BGA:BGA-144_13.0x13.0mm_Layout12x12_P1.0mm.
 */
export class MK20FX512VMD12 extends Component.withPins({
  "PTD7": "A1",
  "PTD6/LLWU_P15": "A2",
  "PTD5": "A3",
  "PTD4/LLWU_P14": "A4",
  "PTD0/LLWU_P12": "A5",
  "PTC16": "A6",
  "PTC12": "A7",
  "PTC8": "A8",
  "PTC4/LLWU_P8": "A9",
  "NC_A10": "A10",
  "PTC3/LLWU_P7": "A11",
  "PTC2": "A12",
  "PTD12": "B1",
  "PTD11": "B2",
  "PTD10": "B3",
  "PTD3": "B4",
  "PTC19": "B5",
  "PTC15": "B6",
  "PTC11/LLWU_P11": "B7",
  "PTC7": "B8",
  "PTD9": "B9",
  "NC_B10": "B10",
  "PTC1/LLWU_P6": "B11",
  "PTC0": "B12",
  "PTD15": "C1",
  "PTD14": "C2",
  "PTD13": "C3",
  "PTD2/LLWU_P13": "C4",
  "PTC18": "C5",
  "PTC14": "C6",
  "PTC10": "C7",
  "PTC6/LLWU_P10": "C8",
  "PTD8": "C9",
  "NC_C10": "C10",
  "PTB23": "C11",
  "PTB22": "C12",
  "PTE2/LLWU_P1": "D1",
  "PTE1/LLWU_P0": "D2",
  "PTE0": "D3",
  "PTD1": "D4",
  "PTC17": "D5",
  "PTC13": "D6",
  "PTC9": "D7",
  "PTC5/LLWU_P9": "D8",
  "PTB21": "D9",
  "PTB20": "D10",
  "PTB19": "D11",
  "PTB18": "D12",
  "PTE6": "E1",
  "PTE5": "E2",
  "PTE4/LLWU_P2": "E3",
  "PTE3": "E4",
  "VDD_E5": "E5",
  "VDD_E6": "E6",
  "VDD_E7": "E7",
  "VDD_E8": "E8",
  "PTB17": "E9",
  "PTB16": "E10",
  "PTB11": "E11",
  "PTB10": "E12",
  "PTE10": "F1",
  "PTE9": "F2",
  "PTE8": "F3",
  "PTE7": "F4",
  "VDD_F5": "F5",
  "VSS_F6": "F6",
  "VSS_F7": "F7",
  "VDD_F8": "F8",
  "PTB9": "F9",
  "PTB8": "F10",
  "PTB7": "F11",
  "PTB6": "F12",
  "VOUT33": "G1",
  "VREGIN": "G2",
  "PTE12": "G3",
  "PTE11": "G4",
  "VREFH": "G5",
  "VREFL": "G6",
  "VSS_G7": "G7",
  "VSS_G8": "G8",
  "PTB5": "G9",
  "PTB4": "G10",
  "PTB3": "G11",
  "PTB2": "G12",
  "USB0_DP": "H1",
  "USB0_DM": "H2",
  "VSS_H3": "H3",
  "PTE28": "H4",
  "VDDA": "H5",
  "VSSA": "H6",
  "VSS_H7": "H7",
  "VSS_H8": "H8",
  "PTB1": "H9",
  "PTB0/LLWU_P5": "H10",
  "PTA29": "H11",
  "PTA28": "H12",
  "PGA2_DP/ADC2_DP0/ADC3_DP3/ADC0_DP1": "J1",
  "PGA2_DM/ADC2_DM0/ADC3_DM3/ADC0_DM1": "J2",
  "ADC0_SE16/CMP1_IN2/ADC0_SE21": "J3",
  "PTE27": "J4",
  "PTA0": "J5",
  "PTA1": "J6",
  "PTA6": "J7",
  "PTA7": "J8",
  "PTA13/LLWU_P4": "J9",
  "PTA27": "J10",
  "PTA26": "J11",
  "PTA25": "J12",
  "PGA3_DP/ADC3_DP0/ADC2_DP3/ADC1_DP1": "K1",
  "PGA3_DM/ADC3_DM0/ADC2_DM3/ADC1_DM1": "K2",
  "ADC1_SE16/CMP2_IN2/ADC0_SE22": "K3",
  "PTE26": "K4",
  "PTE25": "K5",
  "PTA2": "K6",
  "PTA3": "K7",
  "PTA8": "K8",
  "PTA12": "K9",
  "PTA16": "K10",
  "PTA17": "K11",
  "PTA24": "K12",
  "PGA0_DP/ADC0_DP0/ADC1_DP3": "L1",
  "PGA0_DM/ADC0_DM0/ADC1_DM3": "L2",
  "DAC0_OUT/CMP1_IN3/ADC0_SE23": "L3",
  "DAC1_OUT/CMP0_IN4/CMP2_IN3/ADC1_SE23": "L4",
  "~{RTC_WAKEUP}": "L5",
  "VBAT": "L6",
  "PTA4/LLWU_P3": "L7",
  "PTA9": "L8",
  "PTA11": "L9",
  "PTA14": "L10",
  "PTA15": "L11",
  "~{RESET}": "L12",
  "PGA1_DP/ADC1_DP0/ADC0_DP3": "M1",
  "PGA1_DM/ADC1_DM0/ADC0_DM3": "M2",
  "VREF_OUT/CMP1_IN5/CMP0_IN5/ADC1_SE18": "M3",
  "PTE24": "M4",
  "NC_M5": "M5",
  "EXTAL32": "M6",
  "XTAL32": "M7",
  "PTA5": "M8",
  "PTA10": "M9",
  "VSS_M10": "M10",
  "PTA19": "M11",
  "PTA18": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD7: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD5: "bidirectional", "PTD4/LLWU_P14": "bidirectional", "PTD0/LLWU_P12": "bidirectional", PTC16: "bidirectional", PTC12: "bidirectional", PTC8: "bidirectional", "PTC4/LLWU_P8": "bidirectional", NC_A10: "no_connect", "PTC3/LLWU_P7": "bidirectional", PTC2: "bidirectional", PTD12: "bidirectional", PTD11: "bidirectional", PTD10: "bidirectional", PTD3: "bidirectional", PTC19: "bidirectional", PTC15: "bidirectional", "PTC11/LLWU_P11": "bidirectional", PTC7: "bidirectional", PTD9: "bidirectional", NC_B10: "no_connect", "PTC1/LLWU_P6": "bidirectional", PTC0: "bidirectional", PTD15: "bidirectional", PTD14: "bidirectional", PTD13: "bidirectional", "PTD2/LLWU_P13": "bidirectional", PTC18: "bidirectional", PTC14: "bidirectional", PTC10: "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTD8: "bidirectional", NC_C10: "no_connect", PTB23: "bidirectional", PTB22: "bidirectional", "PTE2/LLWU_P1": "bidirectional", "PTE1/LLWU_P0": "bidirectional", PTE0: "bidirectional", PTD1: "bidirectional", PTC17: "bidirectional", PTC13: "bidirectional", PTC9: "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTB21: "bidirectional", PTB20: "bidirectional", PTB19: "bidirectional", PTB18: "bidirectional", PTE6: "bidirectional", PTE5: "bidirectional", "PTE4/LLWU_P2": "bidirectional", PTE3: "bidirectional", VDD_E5: "power_in", VDD_E6: "passive", VDD_E7: "passive", VDD_E8: "passive", PTB17: "bidirectional", PTB16: "bidirectional", PTB11: "bidirectional", PTB10: "bidirectional", PTE10: "bidirectional", PTE9: "bidirectional", PTE8: "bidirectional", PTE7: "bidirectional", VDD_F5: "passive", VSS_F6: "power_in", VSS_F7: "passive", VDD_F8: "passive", PTB9: "bidirectional", PTB8: "bidirectional", PTB7: "bidirectional", PTB6: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE12: "bidirectional", PTE11: "bidirectional", VREFH: "power_in", VREFL: "power_in", VSS_G7: "passive", VSS_G8: "passive", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VSS_H3: "passive", PTE28: "bidirectional", VDDA: "power_in", VSSA: "power_in", VSS_H7: "passive", VSS_H8: "passive", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA29: "bidirectional", PTA28: "bidirectional", "PGA2_DP/ADC2_DP0/ADC3_DP3/ADC0_DP1": "input", "PGA2_DM/ADC2_DM0/ADC3_DM3/ADC0_DM1": "input", "ADC0_SE16/CMP1_IN2/ADC0_SE21": "input", PTE27: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", "PTA13/LLWU_P4": "bidirectional", PTA27: "bidirectional", PTA26: "bidirectional", PTA25: "bidirectional", "PGA3_DP/ADC3_DP0/ADC2_DP3/ADC1_DP1": "input", "PGA3_DM/ADC3_DM0/ADC2_DM3/ADC1_DM1": "input", "ADC1_SE16/CMP2_IN2/ADC0_SE22": "input", PTE26: "bidirectional", PTE25: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA8: "bidirectional", PTA12: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", PTA24: "bidirectional", "PGA0_DP/ADC0_DP0/ADC1_DP3": "input", "PGA0_DM/ADC0_DM0/ADC1_DM3": "input", "DAC0_OUT/CMP1_IN3/ADC0_SE23": "bidirectional", "DAC1_OUT/CMP0_IN4/CMP2_IN3/ADC1_SE23": "bidirectional", "~{RTC_WAKEUP}": "output", VBAT: "power_in", "PTA4/LLWU_P3": "bidirectional", PTA9: "bidirectional", PTA11: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", "~{RESET}": "bidirectional", "PGA1_DP/ADC1_DP0/ADC0_DP3": "input", "PGA1_DM/ADC1_DM0/ADC0_DM3": "input", "VREF_OUT/CMP1_IN5/CMP0_IN5/ADC1_SE18": "bidirectional", PTE24: "bidirectional", NC_M5: "no_connect", EXTAL32: "input", XTAL32: "output", PTA5: "bidirectional", PTA10: "bidirectional", VSS_M10: "passive", PTA19: "bidirectional", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MK20FX512VMD12";
  override referencePrefix = "U";
}

/**
 * Kinetis K20 series, 120-MHz/32-bit ARM Cortex-M4, 1024 kB flash, 128 kB SRAM, USB HS+FS Device/OTG, MAPBGA-144
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MK20FN1M0VMD12`. Reference prefix: `U`.
 * Footprint filters: BGA*13.0x13.0mm*Layout12x12*P1.0mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/K20P144M120SF3.pdf
 * Keywords: Kinetis K20 ARM Cortex M4.
 * Default footprint: Package_BGA:BGA-144_13.0x13.0mm_Layout12x12_P1.0mm.
 */
export class MK20FN1M0VMD12 extends Component.withPins({
  "PTD7": "A1",
  "PTD6/LLWU_P15": "A2",
  "PTD5": "A3",
  "PTD4/LLWU_P14": "A4",
  "PTD0/LLWU_P12": "A5",
  "PTC16": "A6",
  "PTC12": "A7",
  "PTC8": "A8",
  "PTC4/LLWU_P8": "A9",
  "NC_A10": "A10",
  "PTC3/LLWU_P7": "A11",
  "PTC2": "A12",
  "PTD12": "B1",
  "PTD11": "B2",
  "PTD10": "B3",
  "PTD3": "B4",
  "PTC19": "B5",
  "PTC15": "B6",
  "PTC11/LLWU_P11": "B7",
  "PTC7": "B8",
  "PTD9": "B9",
  "NC_B10": "B10",
  "PTC1/LLWU_P6": "B11",
  "PTC0": "B12",
  "PTD15": "C1",
  "PTD14": "C2",
  "PTD13": "C3",
  "PTD2/LLWU_P13": "C4",
  "PTC18": "C5",
  "PTC14": "C6",
  "PTC10": "C7",
  "PTC6/LLWU_P10": "C8",
  "PTD8": "C9",
  "NC_C10": "C10",
  "PTB23": "C11",
  "PTB22": "C12",
  "PTE2/LLWU_P1": "D1",
  "PTE1/LLWU_P0": "D2",
  "PTE0": "D3",
  "PTD1": "D4",
  "PTC17": "D5",
  "PTC13": "D6",
  "PTC9": "D7",
  "PTC5/LLWU_P9": "D8",
  "PTB21": "D9",
  "PTB20": "D10",
  "PTB19": "D11",
  "PTB18": "D12",
  "PTE6": "E1",
  "PTE5": "E2",
  "PTE4/LLWU_P2": "E3",
  "PTE3": "E4",
  "VDD_E5": "E5",
  "VDD_E6": "E6",
  "VDD_E7": "E7",
  "VDD_E8": "E8",
  "PTB17": "E9",
  "PTB16": "E10",
  "PTB11": "E11",
  "PTB10": "E12",
  "PTE10": "F1",
  "PTE9": "F2",
  "PTE8": "F3",
  "PTE7": "F4",
  "VDD_F5": "F5",
  "VSS_F6": "F6",
  "VSS_F7": "F7",
  "VDD_F8": "F8",
  "PTB9": "F9",
  "PTB8": "F10",
  "PTB7": "F11",
  "PTB6": "F12",
  "VOUT33": "G1",
  "VREGIN": "G2",
  "PTE12": "G3",
  "PTE11": "G4",
  "VREFH": "G5",
  "VREFL": "G6",
  "VSS_G7": "G7",
  "VSS_G8": "G8",
  "PTB5": "G9",
  "PTB4": "G10",
  "PTB3": "G11",
  "PTB2": "G12",
  "USB0_DP": "H1",
  "USB0_DM": "H2",
  "VSS_H3": "H3",
  "PTE28": "H4",
  "VDDA": "H5",
  "VSSA": "H6",
  "VSS_H7": "H7",
  "VSS_H8": "H8",
  "PTB1": "H9",
  "PTB0/LLWU_P5": "H10",
  "PTA29": "H11",
  "PTA28": "H12",
  "PGA2_DP/ADC2_DP0/ADC3_DP3/ADC0_DP1": "J1",
  "PGA2_DM/ADC2_DM0/ADC3_DM3/ADC0_DM1": "J2",
  "ADC0_SE16/CMP1_IN2/ADC0_SE21": "J3",
  "PTE27": "J4",
  "PTA0": "J5",
  "PTA1": "J6",
  "PTA6": "J7",
  "PTA7": "J8",
  "PTA13/LLWU_P4": "J9",
  "PTA27": "J10",
  "PTA26": "J11",
  "PTA25": "J12",
  "PGA3_DP/ADC3_DP0/ADC2_DP3/ADC1_DP1": "K1",
  "PGA3_DM/ADC3_DM0/ADC2_DM3/ADC1_DM1": "K2",
  "ADC1_SE16/CMP2_IN2/ADC0_SE22": "K3",
  "PTE26": "K4",
  "PTE25": "K5",
  "PTA2": "K6",
  "PTA3": "K7",
  "PTA8": "K8",
  "PTA12": "K9",
  "PTA16": "K10",
  "PTA17": "K11",
  "PTA24": "K12",
  "PGA0_DP/ADC0_DP0/ADC1_DP3": "L1",
  "PGA0_DM/ADC0_DM0/ADC1_DM3": "L2",
  "DAC0_OUT/CMP1_IN3/ADC0_SE23": "L3",
  "DAC1_OUT/CMP0_IN4/CMP2_IN3/ADC1_SE23": "L4",
  "~{RTC_WAKEUP}": "L5",
  "VBAT": "L6",
  "PTA4/LLWU_P3": "L7",
  "PTA9": "L8",
  "PTA11": "L9",
  "PTA14": "L10",
  "PTA15": "L11",
  "~{RESET}": "L12",
  "PGA1_DP/ADC1_DP0/ADC0_DP3": "M1",
  "PGA1_DM/ADC1_DM0/ADC0_DM3": "M2",
  "VREF_OUT/CMP1_IN5/CMP0_IN5/ADC1_SE18": "M3",
  "PTE24": "M4",
  "NC_M5": "M5",
  "EXTAL32": "M6",
  "XTAL32": "M7",
  "PTA5": "M8",
  "PTA10": "M9",
  "VSS_M10": "M10",
  "PTA19": "M11",
  "PTA18": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD7: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD5: "bidirectional", "PTD4/LLWU_P14": "bidirectional", "PTD0/LLWU_P12": "bidirectional", PTC16: "bidirectional", PTC12: "bidirectional", PTC8: "bidirectional", "PTC4/LLWU_P8": "bidirectional", NC_A10: "no_connect", "PTC3/LLWU_P7": "bidirectional", PTC2: "bidirectional", PTD12: "bidirectional", PTD11: "bidirectional", PTD10: "bidirectional", PTD3: "bidirectional", PTC19: "bidirectional", PTC15: "bidirectional", "PTC11/LLWU_P11": "bidirectional", PTC7: "bidirectional", PTD9: "bidirectional", NC_B10: "no_connect", "PTC1/LLWU_P6": "bidirectional", PTC0: "bidirectional", PTD15: "bidirectional", PTD14: "bidirectional", PTD13: "bidirectional", "PTD2/LLWU_P13": "bidirectional", PTC18: "bidirectional", PTC14: "bidirectional", PTC10: "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTD8: "bidirectional", NC_C10: "no_connect", PTB23: "bidirectional", PTB22: "bidirectional", "PTE2/LLWU_P1": "bidirectional", "PTE1/LLWU_P0": "bidirectional", PTE0: "bidirectional", PTD1: "bidirectional", PTC17: "bidirectional", PTC13: "bidirectional", PTC9: "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTB21: "bidirectional", PTB20: "bidirectional", PTB19: "bidirectional", PTB18: "bidirectional", PTE6: "bidirectional", PTE5: "bidirectional", "PTE4/LLWU_P2": "bidirectional", PTE3: "bidirectional", VDD_E5: "power_in", VDD_E6: "passive", VDD_E7: "passive", VDD_E8: "passive", PTB17: "bidirectional", PTB16: "bidirectional", PTB11: "bidirectional", PTB10: "bidirectional", PTE10: "bidirectional", PTE9: "bidirectional", PTE8: "bidirectional", PTE7: "bidirectional", VDD_F5: "passive", VSS_F6: "power_in", VSS_F7: "passive", VDD_F8: "passive", PTB9: "bidirectional", PTB8: "bidirectional", PTB7: "bidirectional", PTB6: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE12: "bidirectional", PTE11: "bidirectional", VREFH: "power_in", VREFL: "power_in", VSS_G7: "passive", VSS_G8: "passive", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VSS_H3: "passive", PTE28: "bidirectional", VDDA: "power_in", VSSA: "power_in", VSS_H7: "passive", VSS_H8: "passive", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA29: "bidirectional", PTA28: "bidirectional", "PGA2_DP/ADC2_DP0/ADC3_DP3/ADC0_DP1": "input", "PGA2_DM/ADC2_DM0/ADC3_DM3/ADC0_DM1": "input", "ADC0_SE16/CMP1_IN2/ADC0_SE21": "input", PTE27: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", "PTA13/LLWU_P4": "bidirectional", PTA27: "bidirectional", PTA26: "bidirectional", PTA25: "bidirectional", "PGA3_DP/ADC3_DP0/ADC2_DP3/ADC1_DP1": "input", "PGA3_DM/ADC3_DM0/ADC2_DM3/ADC1_DM1": "input", "ADC1_SE16/CMP2_IN2/ADC0_SE22": "input", PTE26: "bidirectional", PTE25: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA8: "bidirectional", PTA12: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", PTA24: "bidirectional", "PGA0_DP/ADC0_DP0/ADC1_DP3": "input", "PGA0_DM/ADC0_DM0/ADC1_DM3": "input", "DAC0_OUT/CMP1_IN3/ADC0_SE23": "bidirectional", "DAC1_OUT/CMP0_IN4/CMP2_IN3/ADC1_SE23": "bidirectional", "~{RTC_WAKEUP}": "output", VBAT: "power_in", "PTA4/LLWU_P3": "bidirectional", PTA9: "bidirectional", PTA11: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", "~{RESET}": "bidirectional", "PGA1_DP/ADC1_DP0/ADC0_DP3": "input", "PGA1_DM/ADC1_DM0/ADC0_DM3": "input", "VREF_OUT/CMP1_IN5/CMP0_IN5/ADC1_SE18": "bidirectional", PTE24: "bidirectional", NC_M5: "no_connect", EXTAL32: "input", XTAL32: "output", PTA5: "bidirectional", PTA10: "bidirectional", VSS_M10: "passive", PTA19: "bidirectional", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MK20FN1M0VMD12";
  override referencePrefix = "U";
}

/**
 * Kinetis K26 series, 180-MHz/32-bit ARM Cortex-M4, 2048 kB flash, 256 kB SRAM, USB HS+FS Device/OTG, MAPBGA-144
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MK26FN2M0VMD18`. Reference prefix: `U`.
 * Footprint filters: BGA*13.0x13.0mm*Layout12x12*P1.0mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/K26P169M180SF5.pdf
 * Keywords: Kinetis K26 ARM Cortex M4.
 * Default footprint: Package_BGA:BGA-144_13.0x13.0mm_Layout12x12_P1.0mm.
 */
export class MK26FN2M0VMD18 extends Component.withPins({
  "PTD7": "A1",
  "PTD6/LLWU_P15": "A2",
  "PTD5": "A3",
  "PTD4/LLWU_P14": "A4",
  "PTD0/LLWU_P12": "A5",
  "PTC16": "A6",
  "PTC12": "A7",
  "PTC8": "A8",
  "PTC4/LLWU_P8": "A9",
  "NC_A10": "A10",
  "PTC3/LLWU_P7": "A11",
  "PTC2": "A12",
  "PTD12": "B1",
  "PTD11/LLWU_P25": "B2",
  "PTD10": "B3",
  "PTD3": "B4",
  "PTC19": "B5",
  "PTC15": "B6",
  "PTC11/LLWU_P11": "B7",
  "PTC7": "B8",
  "PTD9": "B9",
  "NC_B10": "B10",
  "PTC1/LLWU_P6": "B11",
  "PTC0": "B12",
  "PTD15": "C1",
  "PTD14": "C2",
  "PTD13": "C3",
  "PTD2/LLWU_P13": "C4",
  "PTC18": "C5",
  "PTC14": "C6",
  "PTC10": "C7",
  "PTC6/LLWU_P10": "C8",
  "PTD8/LLWU_P24": "C9",
  "NC_C10": "C10",
  "PTB23": "C11",
  "PTB22": "C12",
  "PTE2/LLWU_P1": "D1",
  "PTE1/LLWU_P0": "D2",
  "PTE0": "D3",
  "PTD1": "D4",
  "PTC17": "D5",
  "PTC13": "D6",
  "PTC9": "D7",
  "PTC5/LLWU_P9": "D8",
  "PTB21": "D9",
  "PTB20": "D10",
  "PTB19": "D11",
  "PTB18": "D12",
  "PTE6/LLWU_P16": "E1",
  "PTE5": "E2",
  "PTE4/LLWU_P2": "E3",
  "PTE3": "E4",
  "VDD_E5": "E5",
  "VDD_E6": "E6",
  "VDD_E7": "E7",
  "VDD_E8": "E8",
  "PTB17": "E9",
  "PTB16": "E10",
  "PTB11": "E11",
  "PTB10": "E12",
  "PTE10/LLWU_P18": "F1",
  "PTE9/LLWU_P17": "F2",
  "PTE8": "F3",
  "PTE7": "F4",
  "VDD_F5": "F5",
  "VSS_F6": "F6",
  "VSS_F7": "F7",
  "VDD_F8": "F8",
  "PTB9": "F9",
  "PTB8": "F10",
  "PTB7": "F11",
  "PTB6": "F12",
  "VOUT33": "G1",
  "VREGIN": "G2",
  "PTE12": "G3",
  "PTE11": "G4",
  "VREFH": "G5",
  "VREFL": "G6",
  "VSS_G7": "G7",
  "VSS_G8": "G8",
  "PTB5": "G9",
  "PTB4": "G10",
  "PTB3": "G11",
  "PTB2": "G12",
  "USB0_DP": "H1",
  "USB0_DM": "H2",
  "VSS_H3": "H3",
  "PTE28": "H4",
  "VDDA": "H5",
  "VSSA": "H6",
  "VSS_H7": "H7",
  "VSS_H8": "H8",
  "PTB1": "H9",
  "PTB0/LLWU_P5": "H10",
  "PTA29": "H11",
  "PTA28": "H12",
  "PGA2_DP/ADC2_DP0/ADC3_DP3/ADC0_DP1": "J1",
  "PGA2_DM/ADC2_DM0/ADC3_DM3/ADC0_DM1": "J2",
  "ADC0_SE16/CMP1_IN2/ADC0_SE21": "J3",
  "PTE27": "J4",
  "PTA0": "J5",
  "PTA1": "J6",
  "PTA6": "J7",
  "PTA7": "J8",
  "PTA13/LLWU_P4": "J9",
  "PTA27": "J10",
  "PTA26": "J11",
  "PTA25": "J12",
  "PGA3_DP/ADC3_DP0/ADC2_DP3/ADC1_DP1": "K1",
  "PGA3_DM/ADC3_DM0/ADC2_DM3/ADC1_DM1": "K2",
  "ADC1_SE16/CMP2_IN2/ADC0_SE22": "K3",
  "PTE26/CLKOUT32K": "K4",
  "PTE25/LLWU_P21": "K5",
  "PTA2": "K6",
  "PTA3": "K7",
  "PTA8": "K8",
  "PTA12": "K9",
  "PTA16": "K10",
  "PTA17": "K11",
  "PTA24": "K12",
  "PGA0_DP/ADC0_DP0/ADC1_DP3": "L1",
  "PGA0_DM/ADC0_DM0/ADC1_DM3": "L2",
  "DAC0_OUT/CMP1_IN3/ADC0_SE23": "L3",
  "DAC1_OUT/CMP0_IN4/CMP2_IN3/ADC1_SE23": "L4",
  "~{RTC_WAKEUP}": "L5",
  "VBAT": "L6",
  "PTA4/LLWU_P3": "L7",
  "PTA9": "L8",
  "PTA11/LLWU_P23": "L9",
  "PTA14": "L10",
  "PTA15": "L11",
  "~{RESET}": "L12",
  "PGA1_DP/ADC1_DP0/ADC0_DP3": "M1",
  "PGA1_DM/ADC1_DM0/ADC0_DM3": "M2",
  "VREF_OUT/CMP1_IN5/CMP0_IN5/ADC1_SE18": "M3",
  "PTE24": "M4",
  "NC_M5": "M5",
  "EXTAL32": "M6",
  "XTAL32": "M7",
  "PTA5": "M8",
  "PTA10/LLWU_P22": "M9",
  "VSS_M10": "M10",
  "PTA19": "M11",
  "PTA18": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD7: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD5: "bidirectional", "PTD4/LLWU_P14": "bidirectional", "PTD0/LLWU_P12": "bidirectional", PTC16: "bidirectional", PTC12: "bidirectional", PTC8: "bidirectional", "PTC4/LLWU_P8": "bidirectional", NC_A10: "no_connect", "PTC3/LLWU_P7": "bidirectional", PTC2: "bidirectional", PTD12: "bidirectional", "PTD11/LLWU_P25": "bidirectional", PTD10: "bidirectional", PTD3: "bidirectional", PTC19: "bidirectional", PTC15: "bidirectional", "PTC11/LLWU_P11": "bidirectional", PTC7: "bidirectional", PTD9: "bidirectional", NC_B10: "no_connect", "PTC1/LLWU_P6": "bidirectional", PTC0: "bidirectional", PTD15: "bidirectional", PTD14: "bidirectional", PTD13: "bidirectional", "PTD2/LLWU_P13": "bidirectional", PTC18: "bidirectional", PTC14: "bidirectional", PTC10: "bidirectional", "PTC6/LLWU_P10": "bidirectional", "PTD8/LLWU_P24": "bidirectional", NC_C10: "no_connect", PTB23: "bidirectional", PTB22: "bidirectional", "PTE2/LLWU_P1": "bidirectional", "PTE1/LLWU_P0": "bidirectional", PTE0: "bidirectional", PTD1: "bidirectional", PTC17: "bidirectional", PTC13: "bidirectional", PTC9: "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTB21: "bidirectional", PTB20: "bidirectional", PTB19: "bidirectional", PTB18: "bidirectional", "PTE6/LLWU_P16": "bidirectional", PTE5: "bidirectional", "PTE4/LLWU_P2": "bidirectional", PTE3: "bidirectional", VDD_E5: "power_in", VDD_E6: "passive", VDD_E7: "passive", VDD_E8: "passive", PTB17: "bidirectional", PTB16: "bidirectional", PTB11: "bidirectional", PTB10: "bidirectional", "PTE10/LLWU_P18": "bidirectional", "PTE9/LLWU_P17": "bidirectional", PTE8: "bidirectional", PTE7: "bidirectional", VDD_F5: "passive", VSS_F6: "power_in", VSS_F7: "passive", VDD_F8: "passive", PTB9: "bidirectional", PTB8: "bidirectional", PTB7: "bidirectional", PTB6: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE12: "bidirectional", PTE11: "bidirectional", VREFH: "power_in", VREFL: "power_in", VSS_G7: "passive", VSS_G8: "passive", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VSS_H3: "passive", PTE28: "bidirectional", VDDA: "power_in", VSSA: "power_in", VSS_H7: "passive", VSS_H8: "passive", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA29: "bidirectional", PTA28: "bidirectional", "PGA2_DP/ADC2_DP0/ADC3_DP3/ADC0_DP1": "input", "PGA2_DM/ADC2_DM0/ADC3_DM3/ADC0_DM1": "input", "ADC0_SE16/CMP1_IN2/ADC0_SE21": "input", PTE27: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", "PTA13/LLWU_P4": "bidirectional", PTA27: "bidirectional", PTA26: "bidirectional", PTA25: "bidirectional", "PGA3_DP/ADC3_DP0/ADC2_DP3/ADC1_DP1": "input", "PGA3_DM/ADC3_DM0/ADC2_DM3/ADC1_DM1": "input", "ADC1_SE16/CMP2_IN2/ADC0_SE22": "input", "PTE26/CLKOUT32K": "bidirectional", "PTE25/LLWU_P21": "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA8: "bidirectional", PTA12: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", PTA24: "bidirectional", "PGA0_DP/ADC0_DP0/ADC1_DP3": "input", "PGA0_DM/ADC0_DM0/ADC1_DM3": "input", "DAC0_OUT/CMP1_IN3/ADC0_SE23": "bidirectional", "DAC1_OUT/CMP0_IN4/CMP2_IN3/ADC1_SE23": "bidirectional", "~{RTC_WAKEUP}": "output", VBAT: "power_in", "PTA4/LLWU_P3": "bidirectional", PTA9: "bidirectional", "PTA11/LLWU_P23": "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", "~{RESET}": "bidirectional", "PGA1_DP/ADC1_DP0/ADC0_DP3": "input", "PGA1_DM/ADC1_DM0/ADC0_DM3": "input", "VREF_OUT/CMP1_IN5/CMP0_IN5/ADC1_SE18": "bidirectional", PTE24: "bidirectional", NC_M5: "no_connect", EXTAL32: "input", XTAL32: "output", PTA5: "bidirectional", "PTA10/LLWU_P22": "bidirectional", VSS_M10: "passive", PTA19: "bidirectional", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MK26FN2M0VMD18";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 64kB Flash, 4kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z64VLC4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MKE02Z64VLC4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "VDD": "3",
  "VDDA/VREFH": "4",
  "VREFL": "5",
  "VSS/VSSA": "6",
  "PTB7": "7",
  "PTB6": "8",
  "PTB5": "9",
  "PTB4": "10",
  "PTC3": "11",
  "PTC2": "12",
  "PTC1": "13",
  "PTC0": "14",
  "PTB3": "15",
  "PTB2": "16",
  "PTB1": "17",
  "PTB0": "18",
  "PTA7": "19",
  "PTA6": "20",
  "PTD3": "21",
  "PTD2": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
  "PTC5": "29",
  "PTC4": "30",
  "PTA5": "31",
  "PTA4": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z64VLC4";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 16kB Flash, 2kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z16VLC4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MKE02Z16VLC4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "VDD": "3",
  "VDDA/VREFH": "4",
  "VREFL": "5",
  "VSS/VSSA": "6",
  "PTB7": "7",
  "PTB6": "8",
  "PTB5": "9",
  "PTB4": "10",
  "PTC3": "11",
  "PTC2": "12",
  "PTC1": "13",
  "PTC0": "14",
  "PTB3": "15",
  "PTB2": "16",
  "PTB1": "17",
  "PTB0": "18",
  "PTA7": "19",
  "PTA6": "20",
  "PTD3": "21",
  "PTD2": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
  "PTC5": "29",
  "PTC4": "30",
  "PTA5": "31",
  "PTA4": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z16VLC4";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 64kB Flash, 4kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z64VLD4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MKE02Z64VLD4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "PTE7": "3",
  "PTH2": "4",
  "VDD_5": "5",
  "VDDA/VREFH": "6",
  "VREFL": "7",
  "VSS/VSSA": "8",
  "PTB7": "9",
  "PTB6": "10",
  "VSS_11": "11",
  "PTB5": "12",
  "PTB4": "13",
  "PTC3": "14",
  "PTC2": "15",
  "PTD7": "16",
  "PTD6": "17",
  "PTD5": "18",
  "PTC1": "19",
  "PTC0": "20",
  "PTB3": "21",
  "PTB2": "22",
  "PTB1": "23",
  "PTB0": "24",
  "PTA7": "25",
  "PTA6": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PTD4": "29",
  "PTD3": "30",
  "PTD2": "31",
  "PTA3": "32",
  "PTA2": "33",
  "PTA1": "34",
  "PTA0": "35",
  "PTC7": "36",
  "PTC6": "37",
  "PTE2": "38",
  "PTE1": "39",
  "PTE0": "40",
  "PTC5": "41",
  "PTC4": "42",
  "PTA5": "43",
  "PTA4": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", PTE7: "bidirectional", PTH2: "bidirectional", VDD_5: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", VSS_11: "power_in", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTD7: "bidirectional", PTD6: "bidirectional", PTD5: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", VSS_27: "passive", VDD_28: "passive", PTD4: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTE2: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z64VLD4";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 16kB Flash, 2kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z16VLD4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MKE02Z16VLD4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "PTE7": "3",
  "PTH2": "4",
  "VDD_5": "5",
  "VDDA/VREFH": "6",
  "VREFL": "7",
  "VSS/VSSA": "8",
  "PTB7": "9",
  "PTB6": "10",
  "VSS_11": "11",
  "PTB5": "12",
  "PTB4": "13",
  "PTC3": "14",
  "PTC2": "15",
  "PTD7": "16",
  "PTD6": "17",
  "PTD5": "18",
  "PTC1": "19",
  "PTC0": "20",
  "PTB3": "21",
  "PTB2": "22",
  "PTB1": "23",
  "PTB0": "24",
  "PTA7": "25",
  "PTA6": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PTD4": "29",
  "PTD3": "30",
  "PTD2": "31",
  "PTA3": "32",
  "PTA2": "33",
  "PTA1": "34",
  "PTA0": "35",
  "PTC7": "36",
  "PTC6": "37",
  "PTE2": "38",
  "PTE1": "39",
  "PTE0": "40",
  "PTC5": "41",
  "PTC4": "42",
  "PTA5": "43",
  "PTA4": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", PTE7: "bidirectional", PTH2: "bidirectional", VDD_5: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", VSS_11: "power_in", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTD7: "bidirectional", PTD6: "bidirectional", PTD5: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", VSS_27: "passive", VDD_28: "passive", PTD4: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTE2: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z16VLD4";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 32kB Flash, 4kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z32VLC4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MKE02Z32VLC4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "VDD": "3",
  "VDDA/VREFH": "4",
  "VREFL": "5",
  "VSS/VSSA": "6",
  "PTB7": "7",
  "PTB6": "8",
  "PTB5": "9",
  "PTB4": "10",
  "PTC3": "11",
  "PTC2": "12",
  "PTC1": "13",
  "PTC0": "14",
  "PTB3": "15",
  "PTB2": "16",
  "PTB1": "17",
  "PTB0": "18",
  "PTA7": "19",
  "PTA6": "20",
  "PTD3": "21",
  "PTD2": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
  "PTC5": "29",
  "PTC4": "30",
  "PTA5": "31",
  "PTA4": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z32VLC4";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 32kB Flash, 4kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z32VLD4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MKE02Z32VLD4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "PTE7": "3",
  "PTH2": "4",
  "VDD_5": "5",
  "VDDA/VREFH": "6",
  "VREFL": "7",
  "VSS/VSSA": "8",
  "PTB7": "9",
  "PTB6": "10",
  "VSS_11": "11",
  "PTB5": "12",
  "PTB4": "13",
  "PTC3": "14",
  "PTC2": "15",
  "PTD7": "16",
  "PTD6": "17",
  "PTD5": "18",
  "PTC1": "19",
  "PTC0": "20",
  "PTB3": "21",
  "PTB2": "22",
  "PTB1": "23",
  "PTB0": "24",
  "PTA7": "25",
  "PTA6": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PTD4": "29",
  "PTD3": "30",
  "PTD2": "31",
  "PTA3": "32",
  "PTA2": "33",
  "PTA1": "34",
  "PTA0": "35",
  "PTC7": "36",
  "PTC6": "37",
  "PTE2": "38",
  "PTE1": "39",
  "PTE0": "40",
  "PTC5": "41",
  "PTC4": "42",
  "PTA5": "43",
  "PTA4": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", PTE7: "bidirectional", PTH2: "bidirectional", VDD_5: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", VSS_11: "power_in", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTD7: "bidirectional", PTD6: "bidirectional", PTD5: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", VSS_27: "passive", VDD_28: "passive", PTD4: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTE2: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z32VLD4";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 64kB Flash, 4kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z64VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKE02Z64VLH4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "PTH7": "3",
  "PTH6": "4",
  "PTE7": "5",
  "PTH2": "6",
  "VDD_7": "7",
  "VDDA/VREFH": "8",
  "VREFL": "9",
  "VSS/VSSA": "10",
  "PTB7": "11",
  "PTB6": "12",
  "VSS_13": "13",
  "PTH1": "14",
  "PTH0": "15",
  "PTE6": "16",
  "PTE5": "17",
  "PTB5": "18",
  "PTB4": "19",
  "PTC3": "20",
  "PTC2": "21",
  "PTD7": "22",
  "PTD6": "23",
  "PTD5": "24",
  "PTC1": "25",
  "PTC0": "26",
  "PTF7": "27",
  "PTF6": "28",
  "PTF5": "29",
  "PTF4": "30",
  "PTB3": "31",
  "PTB2": "32",
  "PTB1": "33",
  "PTB0": "34",
  "PTF3": "35",
  "PTF2": "36",
  "PTA7": "37",
  "PTA6": "38",
  "PTE4": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PTF1": "42",
  "PTF0": "43",
  "PTD4": "44",
  "PTD3": "45",
  "PTD2": "46",
  "PTA3": "47",
  "PTA2": "48",
  "PTA1": "49",
  "PTA0": "50",
  "PTC7": "51",
  "PTC6": "52",
  "PTE3": "53",
  "PTE2": "54",
  "PTG3": "55",
  "PTG2": "56",
  "PTG1": "57",
  "PTG0": "58",
  "PTE1": "59",
  "PTE0": "60",
  "PTC5": "61",
  "PTC4": "62",
  "PTA5": "63",
  "PTA4": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", PTH7: "bidirectional", PTH6: "bidirectional", PTE7: "bidirectional", PTH2: "bidirectional", VDD_7: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", VSS_13: "power_in", PTH1: "bidirectional", PTH0: "bidirectional", PTE6: "bidirectional", PTE5: "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTD7: "bidirectional", PTD6: "bidirectional", PTD5: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTF7: "bidirectional", PTF6: "bidirectional", PTF5: "bidirectional", PTF4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTF3: "bidirectional", PTF2: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTE4: "bidirectional", VSS_40: "passive", VDD_41: "passive", PTF1: "bidirectional", PTF0: "bidirectional", PTD4: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTE3: "bidirectional", PTE2: "bidirectional", PTG3: "bidirectional", PTG2: "bidirectional", PTG1: "bidirectional", PTG0: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z64VLH4";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 32kB Flash, 4kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z32VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKE02Z32VLH4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "PTH7": "3",
  "PTH6": "4",
  "PTE7": "5",
  "PTH2": "6",
  "VDD_7": "7",
  "VDDA/VREFH": "8",
  "VREFL": "9",
  "VSS/VSSA": "10",
  "PTB7": "11",
  "PTB6": "12",
  "VSS_13": "13",
  "PTH1": "14",
  "PTH0": "15",
  "PTE6": "16",
  "PTE5": "17",
  "PTB5": "18",
  "PTB4": "19",
  "PTC3": "20",
  "PTC2": "21",
  "PTD7": "22",
  "PTD6": "23",
  "PTD5": "24",
  "PTC1": "25",
  "PTC0": "26",
  "PTF7": "27",
  "PTF6": "28",
  "PTF5": "29",
  "PTF4": "30",
  "PTB3": "31",
  "PTB2": "32",
  "PTB1": "33",
  "PTB0": "34",
  "PTF3": "35",
  "PTF2": "36",
  "PTA7": "37",
  "PTA6": "38",
  "PTE4": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PTF1": "42",
  "PTF0": "43",
  "PTD4": "44",
  "PTD3": "45",
  "PTD2": "46",
  "PTA3": "47",
  "PTA2": "48",
  "PTA1": "49",
  "PTA0": "50",
  "PTC7": "51",
  "PTC6": "52",
  "PTE3": "53",
  "PTE2": "54",
  "PTG3": "55",
  "PTG2": "56",
  "PTG1": "57",
  "PTG0": "58",
  "PTE1": "59",
  "PTE0": "60",
  "PTC5": "61",
  "PTC4": "62",
  "PTA5": "63",
  "PTA4": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", PTH7: "bidirectional", PTH6: "bidirectional", PTE7: "bidirectional", PTH2: "bidirectional", VDD_7: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", VSS_13: "power_in", PTH1: "bidirectional", PTH0: "bidirectional", PTE6: "bidirectional", PTE5: "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTD7: "bidirectional", PTD6: "bidirectional", PTD5: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTF7: "bidirectional", PTF6: "bidirectional", PTF5: "bidirectional", PTF4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTF3: "bidirectional", PTF2: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTE4: "bidirectional", VSS_40: "passive", VDD_41: "passive", PTF1: "bidirectional", PTF0: "bidirectional", PTD4: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTE3: "bidirectional", PTE2: "bidirectional", PTG3: "bidirectional", PTG2: "bidirectional", PTG1: "bidirectional", PTG0: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z32VLH4";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 64kB Flash, 4kB RAM, TQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z64VQH4`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class MKE02Z64VQH4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "PTH7": "3",
  "PTH6": "4",
  "PTE7": "5",
  "PTH2": "6",
  "VDD_7": "7",
  "VDDA/VREFH": "8",
  "VREFL": "9",
  "VSS/VSSA": "10",
  "PTB7": "11",
  "PTB6": "12",
  "VSS_13": "13",
  "PTH1": "14",
  "PTH0": "15",
  "PTE6": "16",
  "PTE5": "17",
  "PTB5": "18",
  "PTB4": "19",
  "PTC3": "20",
  "PTC2": "21",
  "PTD7": "22",
  "PTD6": "23",
  "PTD5": "24",
  "PTC1": "25",
  "PTC0": "26",
  "PTF7": "27",
  "PTF6": "28",
  "PTF5": "29",
  "PTF4": "30",
  "PTB3": "31",
  "PTB2": "32",
  "PTB1": "33",
  "PTB0": "34",
  "PTF3": "35",
  "PTF2": "36",
  "PTA7": "37",
  "PTA6": "38",
  "PTE4": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PTF1": "42",
  "PTF0": "43",
  "PTD4": "44",
  "PTD3": "45",
  "PTD2": "46",
  "PTA3": "47",
  "PTA2": "48",
  "PTA1": "49",
  "PTA0": "50",
  "PTC7": "51",
  "PTC6": "52",
  "PTE3": "53",
  "PTE2": "54",
  "PTG3": "55",
  "PTG2": "56",
  "PTG1": "57",
  "PTG0": "58",
  "PTE1": "59",
  "PTE0": "60",
  "PTC5": "61",
  "PTC4": "62",
  "PTA5": "63",
  "PTA4": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", PTH7: "bidirectional", PTH6: "bidirectional", PTE7: "bidirectional", PTH2: "bidirectional", VDD_7: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", VSS_13: "power_in", PTH1: "bidirectional", PTH0: "bidirectional", PTE6: "bidirectional", PTE5: "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTD7: "bidirectional", PTD6: "bidirectional", PTD5: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTF7: "bidirectional", PTF6: "bidirectional", PTF5: "bidirectional", PTF4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTF3: "bidirectional", PTF2: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTE4: "bidirectional", VSS_40: "passive", VDD_41: "passive", PTF1: "bidirectional", PTF0: "bidirectional", PTD4: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTE3: "bidirectional", PTE2: "bidirectional", PTG3: "bidirectional", PTG2: "bidirectional", PTG1: "bidirectional", PTG0: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z64VQH4";
  override referencePrefix = "U";
}

/**
 * 40 MHz, Entry-Level, High-Robustness, ESD/EMC performance Microcontroller, Cortex-M0+ core, 32kB Flash, 4kB RAM, TQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE02Z32VQH4`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MKE02P64M40SF0RM.pdf
 * Keywords: NXP Kinetis Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class MKE02Z32VQH4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "PTH7": "3",
  "PTH6": "4",
  "PTE7": "5",
  "PTH2": "6",
  "VDD_7": "7",
  "VDDA/VREFH": "8",
  "VREFL": "9",
  "VSS/VSSA": "10",
  "PTB7": "11",
  "PTB6": "12",
  "VSS_13": "13",
  "PTH1": "14",
  "PTH0": "15",
  "PTE6": "16",
  "PTE5": "17",
  "PTB5": "18",
  "PTB4": "19",
  "PTC3": "20",
  "PTC2": "21",
  "PTD7": "22",
  "PTD6": "23",
  "PTD5": "24",
  "PTC1": "25",
  "PTC0": "26",
  "PTF7": "27",
  "PTF6": "28",
  "PTF5": "29",
  "PTF4": "30",
  "PTB3": "31",
  "PTB2": "32",
  "PTB1": "33",
  "PTB0": "34",
  "PTF3": "35",
  "PTF2": "36",
  "PTA7": "37",
  "PTA6": "38",
  "PTE4": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PTF1": "42",
  "PTF0": "43",
  "PTD4": "44",
  "PTD3": "45",
  "PTD2": "46",
  "PTA3": "47",
  "PTA2": "48",
  "PTA1": "49",
  "PTA0": "50",
  "PTC7": "51",
  "PTC6": "52",
  "PTE3": "53",
  "PTE2": "54",
  "PTG3": "55",
  "PTG2": "56",
  "PTG1": "57",
  "PTG0": "58",
  "PTE1": "59",
  "PTE0": "60",
  "PTC5": "61",
  "PTC4": "62",
  "PTA5": "63",
  "PTA4": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", PTH7: "bidirectional", PTH6: "bidirectional", PTE7: "bidirectional", PTH2: "bidirectional", VDD_7: "power_in", "VDDA/VREFH": "power_in", VREFL: "power_in", "VSS/VSSA": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", VSS_13: "power_in", PTH1: "bidirectional", PTH0: "bidirectional", PTE6: "bidirectional", PTE5: "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTD7: "bidirectional", PTD6: "bidirectional", PTD5: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTF7: "bidirectional", PTF6: "bidirectional", PTF5: "bidirectional", PTF4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTF3: "bidirectional", PTF2: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTE4: "bidirectional", VSS_40: "passive", VDD_41: "passive", PTF1: "bidirectional", PTF0: "bidirectional", PTD4: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTE3: "bidirectional", PTE2: "bidirectional", PTG3: "bidirectional", PTG2: "bidirectional", PTG1: "bidirectional", PTG0: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE02Z32VQH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KE1xZ series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB RAM, Mainstream, Touch (TSI) and CAN control, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKE16Z64VLF4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/KE1xZP48M48SF0.pdf
 * Keywords: Kinetis KE16 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MKE16Z64VLF4 extends Component.withPins({
  "PTD1": "1",
  "PTD0": "2",
  "PTE11": "3",
  "PTE10": "4",
  "PTE5": "5",
  "PTE4": "6",
  "VDD_7": "7",
  "VDDA": "8",
  "VREFH": "9",
  "VSS/VREFL": "10",
  "PTB7": "11",
  "PTB6": "12",
  "PTE3": "13",
  "PTE8": "14",
  "PTB5": "15",
  "PTB4": "16",
  "PTC3": "17",
  "PTC2": "18",
  "PTD7": "19",
  "PTD6": "20",
  "PTD5": "21",
  "PTC1": "22",
  "PTC0": "23",
  "PTB3": "24",
  "PTB2": "25",
  "PTB1": "26",
  "PTB0": "27",
  "PTA7": "28",
  "PTA6": "29",
  "VSS": "30",
  "VDD_31": "31",
  "PTD4": "32",
  "PTD3": "33",
  "PTD2": "34",
  "PTA3": "35",
  "PTA2": "36",
  "PTA1": "37",
  "PTA0": "38",
  "PTC7": "39",
  "PTC6": "40",
  "PTE6": "41",
  "PTE2": "42",
  "PTE1": "43",
  "PTE0": "44",
  "PTC5": "45",
  "PTC4": "46",
  "PTA5": "47",
  "PTA4": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD1: "bidirectional", PTD0: "bidirectional", PTE11: "bidirectional", PTE10: "bidirectional", PTE5: "bidirectional", PTE4: "bidirectional", VDD_7: "power_in", VDDA: "power_in", VREFH: "power_in", "VSS/VREFL": "power_in", PTB7: "bidirectional", PTB6: "bidirectional", PTE3: "bidirectional", PTE8: "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTD7: "bidirectional", PTD6: "bidirectional", PTD5: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", VSS: "power_in", VDD_31: "power_in", PTD4: "bidirectional", PTD3: "bidirectional", PTD2: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTE6: "bidirectional", PTE2: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKE16Z64VLF4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL02 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, QFN-16
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL02Z32VFG4`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL02P32M48SF0.pdf
 * Keywords: Kinetis KL02 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.9x1.9mm.
 */
export class MKL02Z32VFG4 extends Component.withPins({
  "VDD/VREFH": "1",
  "VSS/VREFL": "2",
  "PTA3": "3",
  "PTA4": "4",
  "PTA5": "5",
  "PTA6": "6",
  "PTA7/IRQ_4": "7",
  "PTB0/IRQ_5": "8",
  "PTB1/IRQ_6": "9",
  "PTB2/IRQ_7": "10",
  "PTB3/IRQ_10": "11",
  "PTB4/IRQ_11": "12",
  "PTB5/IRQ_12": "13",
  "PTA0/IRQ_0": "14",
  "PTA1/IRQ_1/LPTMR0_ALT1": "15",
  "PTA2": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA0/IRQ_0": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL02Z32VFG4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL02 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, QFN-16
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL02Z16VFG4`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL02P32M48SF0.pdf
 * Keywords: Kinetis KL02 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.9x1.9mm.
 */
export class MKL02Z16VFG4 extends Component.withPins({
  "VDD/VREFH": "1",
  "VSS/VREFL": "2",
  "PTA3": "3",
  "PTA4": "4",
  "PTA5": "5",
  "PTA6": "6",
  "PTA7/IRQ_4": "7",
  "PTB0/IRQ_5": "8",
  "PTB1/IRQ_6": "9",
  "PTB2/IRQ_7": "10",
  "PTB3/IRQ_10": "11",
  "PTB4/IRQ_11": "12",
  "PTB5/IRQ_12": "13",
  "PTA0/IRQ_0": "14",
  "PTA1/IRQ_1/LPTMR0_ALT1": "15",
  "PTA2": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA0/IRQ_0": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL02Z16VFG4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL02 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL02Z32VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL02P32M48SF0.pdf
 * Keywords: Kinetis KL02 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL02Z32VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD/VREFH": "3",
  "VSS/VREFL": "4",
  "PTA3": "5",
  "PTA4": "6",
  "PTA5": "7",
  "PTA6": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_4": "11",
  "PTB0/IRQ_5": "12",
  "PTB1/IRQ_6": "13",
  "PTB2/IRQ_7": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_10": "17",
  "PTB4/IRQ_11": "18",
  "PTB5/IRQ_12": "19",
  "PTA12/IRQ_13/LPTMR0_ALT2": "20",
  "PTB13": "21",
  "PTA0/IRQ_0": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL02Z32VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL02 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL02Z16VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL02P32M48SF0.pdf
 * Keywords: Kinetis KL02 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL02Z16VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD/VREFH": "3",
  "VSS/VREFL": "4",
  "PTA3": "5",
  "PTA4": "6",
  "PTA5": "7",
  "PTA6": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_4": "11",
  "PTB0/IRQ_5": "12",
  "PTB1/IRQ_6": "13",
  "PTB2/IRQ_7": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_10": "17",
  "PTB4/IRQ_11": "18",
  "PTB5/IRQ_12": "19",
  "PTA12/IRQ_13/LPTMR0_ALT2": "20",
  "PTB13": "21",
  "PTA0/IRQ_0": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL02Z16VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL02 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL02Z32VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL02P32M48SF0.pdf
 * Keywords: Kinetis KL02 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL02Z32VFM4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4": "8",
  "PTA5": "9",
  "PTA6": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_4": "15",
  "PTB0/IRQ_5": "16",
  "PTB1/IRQ_6": "17",
  "PTB2/IRQ_7": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_8": "21",
  "PTA11/IRQ_9": "22",
  "PTB3/IRQ_10": "23",
  "PTB4/IRQ_11": "24",
  "PTB5/IRQ_12": "25",
  "PTA12/IRQ_13/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_8": "bidirectional", "PTA11/IRQ_9": "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL02Z32VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL02 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL02Z16VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL02P32M48SF0.pdf
 * Keywords: Kinetis KL02 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL02Z16VFM4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4": "8",
  "PTA5": "9",
  "PTA6": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_4": "15",
  "PTB0/IRQ_5": "16",
  "PTB1/IRQ_6": "17",
  "PTB2/IRQ_7": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_8": "21",
  "PTA11/IRQ_9": "22",
  "PTB3/IRQ_10": "23",
  "PTB4/IRQ_11": "24",
  "PTB5/IRQ_12": "25",
  "PTA12/IRQ_13/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_8": "bidirectional", "PTA11/IRQ_9": "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL02Z16VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL02 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, WLCSP-20
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL02Z32CAF4`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.994x1.94mm*P0.4mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL02P20M48SF0.pdf
 * Keywords: Kinetis KL02 ARM Cortex M0+.
 * Default footprint: Package_CSP:WLCSP-20_1.994x1.94mm_Layout4x5_P0.4mm.
 */
export class MKL02Z32CAF4 extends Component.withPins({
  "PTA12/IRQ_13/LPTMR0_ALT2": "A1",
  "PTB13": "A2",
  "PTA0/IRQ_0": "A3",
  "PTA1/IRQ_1/LPTMR0_ALT1": "A4",
  "PTB3/IRQ_10": "B1",
  "PTB5/IRQ_12": "B2",
  "PTA2": "B3",
  "VDD/VREFH": "B4",
  "PTA9": "C1",
  "PTB4/IRQ_11": "C2",
  "VSS/VREFL": "C3",
  "PTA3": "C4",
  "PTA8": "D1",
  "PTB2/IRQ_7": "D2",
  "PTB1/IRQ_6": "D3",
  "PTA4": "D4",
  "PTA7/IRQ_4": "E1",
  "PTB0/IRQ_5": "E2",
  "PTA5": "E3",
  "PTA6": "E4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB5/IRQ_12": "bidirectional", PTA2: "bidirectional", "VDD/VREFH": "power_in", PTA9: "bidirectional", "PTB4/IRQ_11": "bidirectional", "VSS/VREFL": "power_in", PTA3: "bidirectional", PTA8: "bidirectional", "PTB2/IRQ_7": "bidirectional", "PTB1/IRQ_6": "bidirectional", PTA4: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5": "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL02Z32CAF4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL02 series, 48-MHz/32-bit ARM Cortex-M0+, 8 kB flash, 1 kB SRAM, QFN-16
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL02Z8VFG4`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL02P32M48SF0.pdf
 * Keywords: Kinetis KL02 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.9x1.9mm.
 */
export class MKL02Z8VFG4 extends Component.withPins({
  "VDD/VREFH": "1",
  "VSS/VREFL": "2",
  "PTA3": "3",
  "PTA4": "4",
  "PTA5": "5",
  "PTA6": "6",
  "PTA7/IRQ_4": "7",
  "PTB0/IRQ_5": "8",
  "PTB1/IRQ_6": "9",
  "PTB2/IRQ_7": "10",
  "PTB3/IRQ_10": "11",
  "PTB4/IRQ_11": "12",
  "PTB5/IRQ_12": "13",
  "PTA0/IRQ_0": "14",
  "PTA1/IRQ_1/LPTMR0_ALT1": "15",
  "PTA2": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA0/IRQ_0": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL02Z8VFG4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL03 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 2 kB SRAM, QFN-16
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL03Z32VFG4`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL03P24M48SF0.pdf
 * Keywords: Kinetis KL03 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.9x1.9mm.
 */
export class MKL03Z32VFG4 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "PTA3": "3",
  "PTA4": "4",
  "PTA5/RTC_CLK_IN": "5",
  "PTA6": "6",
  "PTA7/IRQ_4": "7",
  "PTB0/IRQ_5/LLWU_P4": "8",
  "PTB1/IRQ_6": "9",
  "PTB2/IRQ_7": "10",
  "PTB3/IRQ_10": "11",
  "PTB4/IRQ_11": "12",
  "PTB5/IRQ_12": "13",
  "PTA0/IRQ_0/LLWU_P7": "14",
  "PTA1/IRQ_1/LPTMR0_ALT1": "15",
  "PTA2": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA4: "bidirectional", "PTA5/RTC_CLK_IN": "bidirectional", PTA6: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5/LLWU_P4": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL03Z32VFG4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL03 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, QFN-16
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL03Z16VFG4`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL03P24M48SF0.pdf
 * Keywords: Kinetis KL03 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.9x1.9mm.
 */
export class MKL03Z16VFG4 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "PTA3": "3",
  "PTA4": "4",
  "PTA5/RTC_CLK_IN": "5",
  "PTA6": "6",
  "PTA7/IRQ_4": "7",
  "PTB0/IRQ_5/LLWU_P4": "8",
  "PTB1/IRQ_6": "9",
  "PTB2/IRQ_7": "10",
  "PTB3/IRQ_10": "11",
  "PTB4/IRQ_11": "12",
  "PTB5/IRQ_12": "13",
  "PTA0/IRQ_0/LLWU_P7": "14",
  "PTA1/IRQ_1/LPTMR0_ALT1": "15",
  "PTA2": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA4: "bidirectional", "PTA5/RTC_CLK_IN": "bidirectional", PTA6: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5/LLWU_P4": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL03Z16VFG4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL03 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 2 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL03Z32VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL03P24M48SF0.pdf
 * Keywords: Kinetis KL03 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL03Z32VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA4": "6",
  "PTA5/RTC_CLK_IN": "7",
  "PTA6": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_4": "11",
  "PTB0/IRQ_5/LLWU_P4": "12",
  "PTB1/IRQ_6": "13",
  "PTB2/IRQ_7": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_10": "17",
  "PTB4/IRQ_11": "18",
  "PTB5/IRQ_12": "19",
  "PTA12/IRQ_13/LPTMR0_ALT2": "20",
  "PTB13/CLKOUT32K": "21",
  "PTA0/IRQ_0/LLWU_P7": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA4: "bidirectional", "PTA5/RTC_CLK_IN": "bidirectional", PTA6: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5/LLWU_P4": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", "PTB13/CLKOUT32K": "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL03Z32VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL03 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL03Z16VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL03P24M48SF0.pdf
 * Keywords: Kinetis KL03 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL03Z16VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA4": "6",
  "PTA5/RTC_CLK_IN": "7",
  "PTA6": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_4": "11",
  "PTB0/IRQ_5/LLWU_P4": "12",
  "PTB1/IRQ_6": "13",
  "PTB2/IRQ_7": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_10": "17",
  "PTB4/IRQ_11": "18",
  "PTB5/IRQ_12": "19",
  "PTA12/IRQ_13/LPTMR0_ALT2": "20",
  "PTB13/CLKOUT32K": "21",
  "PTA0/IRQ_0/LLWU_P7": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA4: "bidirectional", "PTA5/RTC_CLK_IN": "bidirectional", PTA6: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5/LLWU_P4": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", "PTB13/CLKOUT32K": "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL03Z16VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL03 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 2 kB SRAM, WLCSP-20
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL03Z32CAF4`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.994x1.609mm*P0.4mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL03P24M48SF0.pdf
 * Keywords: Kinetis KL03 ARM Cortex M0+.
 * Default footprint: Package_CSP:WLCSP-20_1.994x1.609mm_Layout5x4_P0.4mm.
 */
export class MKL03Z32CAF4 extends Component.withPins({
  "PTB3/IRQ_10": "A1",
  "PTB5/IRQ_12": "A2",
  "PTB13/CLKOUT32K": "A3",
  "PTA0/IRQ_0/LLWU_P7": "A4",
  "PTA2": "A5",
  "PTB2/IRQ_7": "B1",
  "PTB4/IRQ_11": "B2",
  "PTA12/IRQ_13/LPTMR0_ALT2": "B3",
  "PTA1/IRQ_1/LPTMR0_ALT1": "B4",
  "VDD": "B5",
  "PTB0/IRQ_5/LLWU_P4": "C1",
  "PTA9": "C2",
  "PTA4": "C3",
  "PTA3": "C4",
  "VSS": "C5",
  "PTB1/IRQ_6": "D1",
  "PTA8": "D2",
  "PTA5/RTC_CLK_IN": "D3",
  "PTA7/IRQ_4": "D4",
  "PTA6": "D5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB3/IRQ_10": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTB13/CLKOUT32K": "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", PTA2: "bidirectional", "PTB2/IRQ_7": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", VDD: "power_in", "PTB0/IRQ_5/LLWU_P4": "bidirectional", PTA9: "bidirectional", PTA4: "bidirectional", PTA3: "bidirectional", VSS: "power_in", "PTB1/IRQ_6": "bidirectional", PTA8: "bidirectional", "PTA5/RTC_CLK_IN": "bidirectional", "PTA7/IRQ_4": "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL03Z32CAF4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL03 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 2 kB SRAM, WLCSP-20
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL03Z32CBF4`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.994x1.609mm*P0.4mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL03P24M48SF0.pdf
 * Keywords: Kinetis KL03 ARM Cortex M0+.
 * Default footprint: Package_CSP:WLCSP-20_1.994x1.609mm_Layout5x4_P0.4mm.
 */
export class MKL03Z32CBF4 extends Component.withPins({
  "PTB3/IRQ_10": "A1",
  "PTB5/IRQ_12": "A2",
  "PTB13/CLKOUT32K": "A3",
  "PTA0/IRQ_0/LLWU_P7": "A4",
  "PTA2": "A5",
  "PTB2/IRQ_7": "B1",
  "PTB4/IRQ_11": "B2",
  "PTA12/IRQ_13/LPTMR0_ALT2": "B3",
  "PTA1/IRQ_1/LPTMR0_ALT1": "B4",
  "VDD": "B5",
  "PTB0/IRQ_5/LLWU_P4": "C1",
  "PTA9": "C2",
  "PTA4": "C3",
  "PTA3": "C4",
  "VSS": "C5",
  "PTB1/IRQ_6": "D1",
  "PTA8": "D2",
  "PTA5/RTC_CLK_IN": "D3",
  "PTA7/IRQ_4": "D4",
  "PTA6": "D5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB3/IRQ_10": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTB13/CLKOUT32K": "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", PTA2: "bidirectional", "PTB2/IRQ_7": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", VDD: "power_in", "PTB0/IRQ_5/LLWU_P4": "bidirectional", PTA9: "bidirectional", PTA4: "bidirectional", PTA3: "bidirectional", VSS: "power_in", "PTB1/IRQ_6": "bidirectional", PTA8: "bidirectional", "PTA5/RTC_CLK_IN": "bidirectional", "PTA7/IRQ_4": "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL03Z32CBF4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL03 series, 48-MHz/32-bit ARM Cortex-M0+, 8 kB flash, 2 kB SRAM, QFN-16
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL03Z8VFG4`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL03P24M48SF0.pdf
 * Keywords: Kinetis KL03 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.9x1.9mm.
 */
export class MKL03Z8VFG4 extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "PTA3": "3",
  "PTA4": "4",
  "PTA5/RTC_CLK_IN": "5",
  "PTA6": "6",
  "PTA7/IRQ_4": "7",
  "PTB0/IRQ_5/LLWU_P4": "8",
  "PTB1/IRQ_6": "9",
  "PTB2/IRQ_7": "10",
  "PTB3/IRQ_10": "11",
  "PTB4/IRQ_11": "12",
  "PTB5/IRQ_12": "13",
  "PTA0/IRQ_0/LLWU_P7": "14",
  "PTA1/IRQ_1/LPTMR0_ALT1": "15",
  "PTA2": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA4: "bidirectional", "PTA5/RTC_CLK_IN": "bidirectional", PTA6: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5/LLWU_P4": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL03Z8VFG4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL03 series, 48-MHz/32-bit ARM Cortex-M0+, 8 kB flash, 2 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL03Z8VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL03P24M48SF0.pdf
 * Keywords: Kinetis KL03 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL03Z8VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA4": "6",
  "PTA5/RTC_CLK_IN": "7",
  "PTA6": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_4": "11",
  "PTB0/IRQ_5/LLWU_P4": "12",
  "PTB1/IRQ_6": "13",
  "PTB2/IRQ_7": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_10": "17",
  "PTB4/IRQ_11": "18",
  "PTB5/IRQ_12": "19",
  "PTA12/IRQ_13/LPTMR0_ALT2": "20",
  "PTB13/CLKOUT32K": "21",
  "PTA0/IRQ_0/LLWU_P7": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA4: "bidirectional", "PTA5/RTC_CLK_IN": "bidirectional", PTA6: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_4": "bidirectional", "PTB0/IRQ_5/LLWU_P4": "bidirectional", "PTB1/IRQ_6": "bidirectional", "PTB2/IRQ_7": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_10": "bidirectional", "PTB4/IRQ_11": "bidirectional", "PTB5/IRQ_12": "bidirectional", "PTA12/IRQ_13/LPTMR0_ALT2": "bidirectional", "PTB13/CLKOUT32K": "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL03Z8VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z32VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL04Z32VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD/VREFH": "3",
  "VSS/VREFL": "4",
  "PTA3": "5",
  "PTA4/LLWU_P0": "6",
  "PTA5/LLWU_P1/RTC_CLK_IN": "7",
  "PTA6/LLWU_P2": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_7/LLWU_P3": "11",
  "PTB0/IRQ_8/LLWU_P4": "12",
  "PTB1/IRQ_9": "13",
  "PTB2/IRQ_10/LLWU_P5": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_14": "17",
  "PTB4/IRQ_15/LLWU_P6": "18",
  "PTB5/IRQ_16": "19",
  "PTA12/IRQ_17/LPTMR0_ALT2": "20",
  "PTB13": "21",
  "PTA0/IRQ_0/LLWU_P7": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z32VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z16VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL04Z16VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD/VREFH": "3",
  "VSS/VREFL": "4",
  "PTA3": "5",
  "PTA4/LLWU_P0": "6",
  "PTA5/LLWU_P1/RTC_CLK_IN": "7",
  "PTA6/LLWU_P2": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_7/LLWU_P3": "11",
  "PTB0/IRQ_8/LLWU_P4": "12",
  "PTB1/IRQ_9": "13",
  "PTB2/IRQ_10/LLWU_P5": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_14": "17",
  "PTB4/IRQ_15/LLWU_P6": "18",
  "PTB5/IRQ_16": "19",
  "PTA12/IRQ_17/LPTMR0_ALT2": "20",
  "PTB13": "21",
  "PTA0/IRQ_0/LLWU_P7": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z16VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z32VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL04Z32VFM4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z32VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z16VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL04Z16VFM4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z16VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z32VLC4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MKL04Z32VLC4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z32VLC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z16VLC4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MKL04Z16VLC4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z16VLC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z32VLF4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MKL04Z32VLF4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "PTA14": "3",
  "PTA15": "4",
  "VDD_5": "5",
  "VREFH": "6",
  "VREFL": "7",
  "VSS_8": "8",
  "PTA3": "9",
  "PTA4/LLWU_P0": "10",
  "VSS_11": "11",
  "PTB18": "12",
  "PTB19": "13",
  "PTA5/LLWU_P1/RTC_CLK_IN": "14",
  "PTA6/LLWU_P2": "15",
  "PTB8": "16",
  "PTB9": "17",
  "PTA16/IRQ_4": "18",
  "PTA17/IRQ_5": "19",
  "PTA18/IRQ_6": "20",
  "PTB10": "21",
  "PTB11": "22",
  "PTA7/IRQ_7/LLWU_P3": "23",
  "PTB0/IRQ_8/LLWU_P4": "24",
  "PTB1/IRQ_9": "25",
  "PTB2/IRQ_10/LLWU_P5": "26",
  "PTA8": "27",
  "PTA9": "28",
  "PTB20": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PTB14/IRQ_11": "32",
  "PTA10/IRQ_12": "33",
  "PTA11/IRQ_13": "34",
  "PTB3/IRQ_14": "35",
  "PTB4/IRQ_15/LLWU_P6": "36",
  "PTB5/IRQ_16": "37",
  "PTA12/IRQ_17/LPTMR0_ALT2": "38",
  "PTA13": "39",
  "PTB12": "40",
  "PTA19": "41",
  "PTB15": "42",
  "PTB16": "43",
  "PTB17": "44",
  "PTB13": "45",
  "PTA0/IRQ_0/LLWU_P7": "46",
  "PTA1/IRQ_1/LPTMR0_ALT1": "47",
  "PTA2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", VDD_5: "power_in", VREFH: "power_in", VREFL: "power_in", VSS_8: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", VSS_11: "passive", PTB18: "bidirectional", PTB19: "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", "PTA16/IRQ_4": "bidirectional", "PTA17/IRQ_5": "bidirectional", "PTA18/IRQ_6": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", PTB20: "bidirectional", VSS_30: "passive", VDD_31: "passive", "PTB14/IRQ_11": "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTA19: "bidirectional", PTB15: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z32VLF4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z16VLF4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MKL04Z16VLF4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "PTA14": "3",
  "PTA15": "4",
  "VDD_5": "5",
  "VREFH": "6",
  "VREFL": "7",
  "VSS_8": "8",
  "PTA3": "9",
  "PTA4/LLWU_P0": "10",
  "VSS_11": "11",
  "PTB18": "12",
  "PTB19": "13",
  "PTA5/LLWU_P1/RTC_CLK_IN": "14",
  "PTA6/LLWU_P2": "15",
  "PTB8": "16",
  "PTB9": "17",
  "PTA16/IRQ_4": "18",
  "PTA17/IRQ_5": "19",
  "PTA18/IRQ_6": "20",
  "PTB10": "21",
  "PTB11": "22",
  "PTA7/IRQ_7/LLWU_P3": "23",
  "PTB0/IRQ_8/LLWU_P4": "24",
  "PTB1/IRQ_9": "25",
  "PTB2/IRQ_10/LLWU_P5": "26",
  "PTA8": "27",
  "PTA9": "28",
  "PTB20": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PTB14/IRQ_11": "32",
  "PTA10/IRQ_12": "33",
  "PTA11/IRQ_13": "34",
  "PTB3/IRQ_14": "35",
  "PTB4/IRQ_15/LLWU_P6": "36",
  "PTB5/IRQ_16": "37",
  "PTA12/IRQ_17/LPTMR0_ALT2": "38",
  "PTA13": "39",
  "PTB12": "40",
  "PTA19": "41",
  "PTB15": "42",
  "PTB16": "43",
  "PTB17": "44",
  "PTB13": "45",
  "PTA0/IRQ_0/LLWU_P7": "46",
  "PTA1/IRQ_1/LPTMR0_ALT1": "47",
  "PTA2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", VDD_5: "power_in", VREFH: "power_in", VREFL: "power_in", VSS_8: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", VSS_11: "passive", PTB18: "bidirectional", PTB19: "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", "PTA16/IRQ_4": "bidirectional", "PTA17/IRQ_5": "bidirectional", "PTA18/IRQ_6": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", PTB20: "bidirectional", VSS_30: "passive", VDD_31: "passive", "PTB14/IRQ_11": "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTA19: "bidirectional", PTB15: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z16VLF4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 8 kB flash, 1 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z8VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL04Z8VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD/VREFH": "3",
  "VSS/VREFL": "4",
  "PTA3": "5",
  "PTA4/LLWU_P0": "6",
  "PTA5/LLWU_P1/RTC_CLK_IN": "7",
  "PTA6/LLWU_P2": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_7/LLWU_P3": "11",
  "PTB0/IRQ_8/LLWU_P4": "12",
  "PTB1/IRQ_9": "13",
  "PTB2/IRQ_10/LLWU_P5": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_14": "17",
  "PTB4/IRQ_15/LLWU_P6": "18",
  "PTB5/IRQ_16": "19",
  "PTA12/IRQ_17/LPTMR0_ALT2": "20",
  "PTB13": "21",
  "PTA0/IRQ_0/LLWU_P7": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z8VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 8 kB flash, 1 kB SRAM, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z8VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL04Z8VFM4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z8VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL04 series, 48-MHz/32-bit ARM Cortex-M0+, 8 kB flash, 1 kB SRAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL04Z8VLC4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL04P48M48SF1.pdf
 * Keywords: Kinetis KL04 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MKL04Z8VLC4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL04Z8VLC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z32VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL05Z32VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD/VREFH": "3",
  "VSS/VREFL": "4",
  "PTA3": "5",
  "PTA4/LLWU_P0": "6",
  "PTA5/LLWU_P1/RTC_CLK_IN": "7",
  "PTA6/LLWU_P2": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_7/LLWU_P3": "11",
  "PTB0/IRQ_8/LLWU_P4": "12",
  "PTB1/IRQ_9": "13",
  "PTB2/IRQ_10/LLWU_P5": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_14": "17",
  "PTB4/IRQ_15/LLWU_P6": "18",
  "PTB5/IRQ_16": "19",
  "PTA12/IRQ_17/LPTMR0_ALT2": "20",
  "PTB13": "21",
  "PTA0/IRQ_0/LLWU_P7": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z32VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z16VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL05Z16VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD/VREFH": "3",
  "VSS/VREFL": "4",
  "PTA3": "5",
  "PTA4/LLWU_P0": "6",
  "PTA5/LLWU_P1/RTC_CLK_IN": "7",
  "PTA6/LLWU_P2": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_7/LLWU_P3": "11",
  "PTB0/IRQ_8/LLWU_P4": "12",
  "PTB1/IRQ_9": "13",
  "PTB2/IRQ_10/LLWU_P5": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_14": "17",
  "PTB4/IRQ_15/LLWU_P6": "18",
  "PTB5/IRQ_16": "19",
  "PTA12/IRQ_17/LPTMR0_ALT2": "20",
  "PTB13": "21",
  "PTA0/IRQ_0/LLWU_P7": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z16VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z32VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL05Z32VFM4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z32VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z16VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL05Z16VFM4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z16VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z32VLC4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MKL05Z32VLC4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z32VLC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z16VLC4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MKL05Z16VLC4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z16VLC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z32VLF4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MKL05Z32VLF4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "PTA14": "3",
  "PTA15": "4",
  "VDD_5": "5",
  "VREFH": "6",
  "VREFL": "7",
  "VSS_8": "8",
  "PTA3": "9",
  "PTA4/LLWU_P0": "10",
  "VSS_11": "11",
  "PTB18": "12",
  "PTB19": "13",
  "PTA5/LLWU_P1/RTC_CLK_IN": "14",
  "PTA6/LLWU_P2": "15",
  "PTB8": "16",
  "PTB9": "17",
  "PTA16/IRQ_4": "18",
  "PTA17/IRQ_5": "19",
  "PTA18/IRQ_6": "20",
  "PTB10": "21",
  "PTB11": "22",
  "PTA7/IRQ_7/LLWU_P3": "23",
  "PTB0/IRQ_8/LLWU_P4": "24",
  "PTB1/IRQ_9": "25",
  "PTB2/IRQ_10/LLWU_P5": "26",
  "PTA8": "27",
  "PTA9": "28",
  "PTB20": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PTB14/IRQ_11": "32",
  "PTA10/IRQ_12": "33",
  "PTA11/IRQ_13": "34",
  "PTB3/IRQ_14": "35",
  "PTB4/IRQ_15/LLWU_P6": "36",
  "PTB5/IRQ_16": "37",
  "PTA12/IRQ_17/LPTMR0_ALT2": "38",
  "PTA13": "39",
  "PTB12": "40",
  "PTA19": "41",
  "PTB15": "42",
  "PTB16": "43",
  "PTB17": "44",
  "PTB13": "45",
  "PTA0/IRQ_0/LLWU_P7": "46",
  "PTA1/IRQ_1/LPTMR0_ALT1": "47",
  "PTA2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", VDD_5: "power_in", VREFH: "power_in", VREFL: "power_in", VSS_8: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", VSS_11: "passive", PTB18: "bidirectional", PTB19: "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", "PTA16/IRQ_4": "bidirectional", "PTA17/IRQ_5": "bidirectional", "PTA18/IRQ_6": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", PTB20: "bidirectional", VSS_30: "passive", VDD_31: "passive", "PTB14/IRQ_11": "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTA19: "bidirectional", PTB15: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z32VLF4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 16 kB flash, 2 kB SRAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z16VLF4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MKL05Z16VLF4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "PTA14": "3",
  "PTA15": "4",
  "VDD_5": "5",
  "VREFH": "6",
  "VREFL": "7",
  "VSS_8": "8",
  "PTA3": "9",
  "PTA4/LLWU_P0": "10",
  "VSS_11": "11",
  "PTB18": "12",
  "PTB19": "13",
  "PTA5/LLWU_P1/RTC_CLK_IN": "14",
  "PTA6/LLWU_P2": "15",
  "PTB8": "16",
  "PTB9": "17",
  "PTA16/IRQ_4": "18",
  "PTA17/IRQ_5": "19",
  "PTA18/IRQ_6": "20",
  "PTB10": "21",
  "PTB11": "22",
  "PTA7/IRQ_7/LLWU_P3": "23",
  "PTB0/IRQ_8/LLWU_P4": "24",
  "PTB1/IRQ_9": "25",
  "PTB2/IRQ_10/LLWU_P5": "26",
  "PTA8": "27",
  "PTA9": "28",
  "PTB20": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PTB14/IRQ_11": "32",
  "PTA10/IRQ_12": "33",
  "PTA11/IRQ_13": "34",
  "PTB3/IRQ_14": "35",
  "PTB4/IRQ_15/LLWU_P6": "36",
  "PTB5/IRQ_16": "37",
  "PTA12/IRQ_17/LPTMR0_ALT2": "38",
  "PTA13": "39",
  "PTB12": "40",
  "PTA19": "41",
  "PTB15": "42",
  "PTB16": "43",
  "PTB17": "44",
  "PTB13": "45",
  "PTA0/IRQ_0/LLWU_P7": "46",
  "PTA1/IRQ_1/LPTMR0_ALT1": "47",
  "PTA2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", VDD_5: "power_in", VREFH: "power_in", VREFL: "power_in", VSS_8: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", VSS_11: "passive", PTB18: "bidirectional", PTB19: "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", "PTA16/IRQ_4": "bidirectional", "PTA17/IRQ_5": "bidirectional", "PTA18/IRQ_6": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", PTB20: "bidirectional", VSS_30: "passive", VDD_31: "passive", "PTB14/IRQ_11": "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTA19: "bidirectional", PTB15: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z16VLF4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 8 kB flash, 1 kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z8VFK4`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MKL05Z8VFK4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD/VREFH": "3",
  "VSS/VREFL": "4",
  "PTA3": "5",
  "PTA4/LLWU_P0": "6",
  "PTA5/LLWU_P1/RTC_CLK_IN": "7",
  "PTA6/LLWU_P2": "8",
  "PTB10": "9",
  "PTB11": "10",
  "PTA7/IRQ_7/LLWU_P3": "11",
  "PTB0/IRQ_8/LLWU_P4": "12",
  "PTB1/IRQ_9": "13",
  "PTB2/IRQ_10/LLWU_P5": "14",
  "PTA8": "15",
  "PTA9": "16",
  "PTB3/IRQ_14": "17",
  "PTB4/IRQ_15/LLWU_P6": "18",
  "PTB5/IRQ_16": "19",
  "PTA12/IRQ_17/LPTMR0_ALT2": "20",
  "PTB13": "21",
  "PTA0/IRQ_0/LLWU_P7": "22",
  "PTA1/IRQ_1/LPTMR0_ALT1": "23",
  "PTA2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", "VDD/VREFH": "power_in", "VSS/VREFL": "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z8VFK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 8 kB flash, 1 kB SRAM, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z8VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL05Z8VFM4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z8VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL05 series, 48-MHz/32-bit ARM Cortex-M0+, 8 kB flash, 1 kB SRAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL05Z8VLC4`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL05P48M48SF1.pdf
 * Keywords: Kinetis KL05 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MKL05Z8VLC4 extends Component.withPins({
  "PTB6/IRQ_2/LPTMR0_ALT3": "1",
  "PTB7/IRQ_3": "2",
  "VDD": "3",
  "VREFH": "4",
  "VREFL": "5",
  "VSS": "6",
  "PTA3": "7",
  "PTA4/LLWU_P0": "8",
  "PTA5/LLWU_P1/RTC_CLK_IN": "9",
  "PTA6/LLWU_P2": "10",
  "PTB8": "11",
  "PTB9": "12",
  "PTB10": "13",
  "PTB11": "14",
  "PTA7/IRQ_7/LLWU_P3": "15",
  "PTB0/IRQ_8/LLWU_P4": "16",
  "PTB1/IRQ_9": "17",
  "PTB2/IRQ_10/LLWU_P5": "18",
  "PTA8": "19",
  "PTA9": "20",
  "PTA10/IRQ_12": "21",
  "PTA11/IRQ_13": "22",
  "PTB3/IRQ_14": "23",
  "PTB4/IRQ_15/LLWU_P6": "24",
  "PTB5/IRQ_16": "25",
  "PTA12/IRQ_17/LPTMR0_ALT2": "26",
  "PTA13": "27",
  "PTB12": "28",
  "PTB13": "29",
  "PTA0/IRQ_0/LLWU_P7": "30",
  "PTA1/IRQ_1/LPTMR0_ALT1": "31",
  "PTA2": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTB6/IRQ_2/LPTMR0_ALT3": "bidirectional", "PTB7/IRQ_3": "bidirectional", VDD: "power_in", VREFH: "power_in", VREFL: "power_in", VSS: "power_in", PTA3: "bidirectional", "PTA4/LLWU_P0": "bidirectional", "PTA5/LLWU_P1/RTC_CLK_IN": "bidirectional", "PTA6/LLWU_P2": "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", "PTA7/IRQ_7/LLWU_P3": "bidirectional", "PTB0/IRQ_8/LLWU_P4": "bidirectional", "PTB1/IRQ_9": "bidirectional", "PTB2/IRQ_10/LLWU_P5": "bidirectional", PTA8: "bidirectional", PTA9: "bidirectional", "PTA10/IRQ_12": "bidirectional", "PTA11/IRQ_13": "bidirectional", "PTB3/IRQ_14": "bidirectional", "PTB4/IRQ_15/LLWU_P6": "bidirectional", "PTB5/IRQ_16": "bidirectional", "PTA12/IRQ_17/LPTMR0_ALT2": "bidirectional", PTA13: "bidirectional", PTB12: "bidirectional", PTB13: "bidirectional", "PTA0/IRQ_0/LLWU_P7": "bidirectional", "PTA1/IRQ_1/LPTMR0_ALT1": "bidirectional", PTA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL05Z8VLC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, I²S, TSI, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z128VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF5.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL16Z128VFM4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS: "power_in", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z128VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, I²S, TSI, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z128VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF5.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL16Z128VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z128VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, I²S, TSI, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z128VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF5.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL16Z128VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "PTE16": "5",
  "PTE17": "6",
  "PTE18": "7",
  "PTE19": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z128VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, I²S, TSI, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z256VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF4.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL16Z256VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "PTE16": "5",
  "PTE17": "6",
  "PTE18": "7",
  "PTE19": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z256VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, I²S, TSI, MAPBGA-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z256VMP4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*5.0x5.0mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF4.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-64_5.0x5.0mm_Layout8x8_P0.5mm.
 */
export class MKL16Z256VMP4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTD1": "A4",
  "PTC11": "A5",
  "PTC8": "A6",
  "PTC6/LLWU_P10": "A7",
  "PTC5/LLWU_P9": "A8",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC10": "B4",
  "PTC9": "B5",
  "PTC7": "B6",
  "PTC2": "B7",
  "PTC4/LLWU_P8": "B8",
  "PTD5": "C1",
  "PTD2": "C2",
  "PTD0": "C3",
  "VSS_C4": "C4",
  "NC": "C5",
  "PTC1/LLWU_P6/RTC_CLKIN": "C6",
  "PTB19": "C7",
  "PTC3/LLWU_P7": "C8",
  "PTE17": "D1",
  "PTE19": "D2",
  "PTA0": "D3",
  "PTA1": "D4",
  "PTA3": "D5",
  "PTB18": "D6",
  "PTB17": "D7",
  "PTC0": "D8",
  "PTE16": "E1",
  "PTE18": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "PTA2": "E5",
  "PTB16": "E6",
  "PTB2": "E7",
  "PTB3": "E8",
  "PTE21": "F1",
  "PTE23": "F2",
  "VSSA": "F3",
  "VDDA": "F4",
  "PTA5": "F5",
  "PTB1": "F6",
  "PTB0/LLWU_P5": "F7",
  "PTA20": "F8",
  "PTE20": "G1",
  "PTE22": "G2",
  "VREFL": "G3",
  "VREFH": "G4",
  "PTA4": "G5",
  "PTA13": "G6",
  "VDD_G7": "G7",
  "PTA19": "G8",
  "PTE29": "H1",
  "PTE30": "H2",
  "PTE31": "H3",
  "PTE24": "H4",
  "PTE25": "H5",
  "PTA12": "H6",
  "VSS_H7": "H7",
  "PTA18": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD1: "bidirectional", PTC11: "bidirectional", PTC8: "bidirectional", "PTC6/LLWU_P10": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC10: "bidirectional", PTC9: "bidirectional", PTC7: "bidirectional", PTC2: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD5: "bidirectional", PTD2: "bidirectional", PTD0: "bidirectional", VSS_C4: "power_in", NC: "no_connect", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB19: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTE17: "bidirectional", PTE19: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTB18: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", PTE16: "bidirectional", PTE18: "bidirectional", VSS_E3: "passive", VDD_E4: "power_in", PTA2: "bidirectional", PTB16: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTE21: "bidirectional", PTE23: "bidirectional", VSSA: "power_in", VDDA: "power_in", PTA5: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE22: "bidirectional", VREFL: "power_in", VREFH: "power_in", PTA4: "bidirectional", PTA13: "bidirectional", VDD_G7: "passive", PTA19: "bidirectional", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA12: "bidirectional", VSS_H7: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z256VMP4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, I²S, TSI, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z32VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF5.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL16Z32VFM4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS: "power_in", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z32VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, I²S, TSI, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z32VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF5.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL16Z32VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z32VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, I²S, TSI, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z32VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF5.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL16Z32VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "PTE16": "5",
  "PTE17": "6",
  "PTE18": "7",
  "PTE19": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z32VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, I²S, TSI, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z64VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF5.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL16Z64VFM4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS: "power_in", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z64VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, I²S, TSI, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z64VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF5.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL16Z64VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z64VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL16 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, I²S, TSI, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL16Z64VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL16P64M48SF5.pdf
 * Keywords: Kinetis KL16 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL16Z64VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "PTE16": "5",
  "PTE17": "6",
  "PTE18": "7",
  "PTE19": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL16Z64VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, FlexIO, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z256VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL17Z256VFM4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS: "power_in", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z256VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 32 kB SRAM, FlexIO, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z128VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL17Z128VFM4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS: "power_in", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z128VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, FlexIO, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z256VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL17Z256VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z256VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 32 kB SRAM, FlexIO, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z128VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL17Z128VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z128VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, FlexIO, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z256VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL17Z256VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "PTE16": "5",
  "PTE17": "6",
  "PTE18": "7",
  "PTE19": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z256VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 32 kB SRAM, FlexIO, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z128VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL17Z128VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "PTE16": "5",
  "PTE17": "6",
  "PTE18": "7",
  "PTE19": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z128VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, FlexIO, MAPBGA-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z256VMP4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*5.0x5.0mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-64_5.0x5.0mm_Layout8x8_P0.5mm.
 */
export class MKL17Z256VMP4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTD1": "A4",
  "PTC11": "A5",
  "PTC8": "A6",
  "PTC6/LLWU_P10": "A7",
  "PTC5/LLWU_P9": "A8",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC10": "B4",
  "PTC9": "B5",
  "PTC7": "B6",
  "PTC2": "B7",
  "PTC4/LLWU_P8": "B8",
  "PTD5": "C1",
  "PTD2": "C2",
  "PTD0": "C3",
  "VSS_C4": "C4",
  "NC": "C5",
  "PTC1/LLWU_P6/RTC_CLKIN": "C6",
  "PTB19": "C7",
  "PTC3/LLWU_P7": "C8",
  "PTE17": "D1",
  "PTE19": "D2",
  "PTA0": "D3",
  "PTA1": "D4",
  "PTA3": "D5",
  "PTB18": "D6",
  "PTB17": "D7",
  "PTC0": "D8",
  "PTE16": "E1",
  "PTE18": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "PTA2": "E5",
  "PTB16": "E6",
  "PTB2": "E7",
  "PTB3": "E8",
  "PTE21": "F1",
  "PTE23": "F2",
  "VSSA": "F3",
  "VDDA": "F4",
  "PTA5": "F5",
  "PTB1": "F6",
  "PTB0/LLWU_P5": "F7",
  "PTA20": "F8",
  "PTE20": "G1",
  "PTE22": "G2",
  "VREFL": "G3",
  "VREFH": "G4",
  "PTA4": "G5",
  "PTA13": "G6",
  "VDD_G7": "G7",
  "PTA19": "G8",
  "PTE29": "H1",
  "PTE30": "H2",
  "PTE31": "H3",
  "PTE24": "H4",
  "PTE25": "H5",
  "PTA12": "H6",
  "VSS_H7": "H7",
  "PTA18": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD1: "bidirectional", PTC11: "bidirectional", PTC8: "bidirectional", "PTC6/LLWU_P10": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC10: "bidirectional", PTC9: "bidirectional", PTC7: "bidirectional", PTC2: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD5: "bidirectional", PTD2: "bidirectional", PTD0: "bidirectional", VSS_C4: "power_in", NC: "no_connect", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB19: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTE17: "bidirectional", PTE19: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTB18: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", PTE16: "bidirectional", PTE18: "bidirectional", VSS_E3: "passive", VDD_E4: "power_in", PTA2: "bidirectional", PTB16: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTE21: "bidirectional", PTE23: "bidirectional", VSSA: "power_in", VDDA: "power_in", PTA5: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE22: "bidirectional", VREFL: "power_in", VREFH: "power_in", PTA4: "bidirectional", PTA13: "bidirectional", VDD_G7: "passive", PTA19: "bidirectional", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA12: "bidirectional", VSS_H7: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z256VMP4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 32 kB SRAM, FlexIO, MAPBGA-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z128VMP4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*5.0x5.0mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-64_5.0x5.0mm_Layout8x8_P0.5mm.
 */
export class MKL17Z128VMP4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTD1": "A4",
  "PTC11": "A5",
  "PTC8": "A6",
  "PTC6/LLWU_P10": "A7",
  "PTC5/LLWU_P9": "A8",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC10": "B4",
  "PTC9": "B5",
  "PTC7": "B6",
  "PTC2": "B7",
  "PTC4/LLWU_P8": "B8",
  "PTD5": "C1",
  "PTD2": "C2",
  "PTD0": "C3",
  "VSS_C4": "C4",
  "NC": "C5",
  "PTC1/LLWU_P6/RTC_CLKIN": "C6",
  "PTB19": "C7",
  "PTC3/LLWU_P7": "C8",
  "PTE17": "D1",
  "PTE19": "D2",
  "PTA0": "D3",
  "PTA1": "D4",
  "PTA3": "D5",
  "PTB18": "D6",
  "PTB17": "D7",
  "PTC0": "D8",
  "PTE16": "E1",
  "PTE18": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "PTA2": "E5",
  "PTB16": "E6",
  "PTB2": "E7",
  "PTB3": "E8",
  "PTE21": "F1",
  "PTE23": "F2",
  "VSSA": "F3",
  "VDDA": "F4",
  "PTA5": "F5",
  "PTB1": "F6",
  "PTB0/LLWU_P5": "F7",
  "PTA20": "F8",
  "PTE20": "G1",
  "PTE22": "G2",
  "VREFL": "G3",
  "VREFH": "G4",
  "PTA4": "G5",
  "PTA13": "G6",
  "VDD_G7": "G7",
  "PTA19": "G8",
  "PTE29": "H1",
  "PTE30": "H2",
  "PTE31": "H3",
  "PTE24": "H4",
  "PTE25": "H5",
  "PTA12": "H6",
  "VSS_H7": "H7",
  "PTA18": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD1: "bidirectional", PTC11: "bidirectional", PTC8: "bidirectional", "PTC6/LLWU_P10": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC10: "bidirectional", PTC9: "bidirectional", PTC7: "bidirectional", PTC2: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD5: "bidirectional", PTD2: "bidirectional", PTD0: "bidirectional", VSS_C4: "power_in", NC: "no_connect", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB19: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTE17: "bidirectional", PTE19: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTB18: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", PTE16: "bidirectional", PTE18: "bidirectional", VSS_E3: "passive", VDD_E4: "power_in", PTA2: "bidirectional", PTB16: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTE21: "bidirectional", PTE23: "bidirectional", VSSA: "power_in", VDDA: "power_in", PTA5: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE22: "bidirectional", VREFL: "power_in", VREFH: "power_in", PTA4: "bidirectional", PTA13: "bidirectional", VDD_G7: "passive", PTA19: "bidirectional", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA12: "bidirectional", VSS_H7: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z128VMP4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, FlexIO, WLCSP-36
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z256CAL4`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.82x2.67mm*P0.4mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_CSP:WLCSP-36_2.82x2.67mm_Layout6x6_P0.4mm.
 */
export class MKL17Z256CAL4 extends Component.withPins({
  "PTC3/LLWU_P7": "A1",
  "PTC4/LLWU_P8": "A2",
  "PTC5/LLWU_P9": "A3",
  "PTC7": "A4",
  "PTD4/LLWU_P14": "A5",
  "PTD6/LLWU_P15": "A6",
  "PTC1/LLWU_P6/RTC_CLKIN": "B1",
  "PTC2": "B2",
  "VDD_B3": "B3",
  "PTC6/LLWU_P10": "B4",
  "PTD5": "B5",
  "PTD7": "B6",
  "PTB1": "C1",
  "PTB0/LLWU_P5": "C2",
  "PTA16": "C3",
  "VSS_C4": "C4",
  "Reserved_C5": "C5",
  "Reserved_C6": "C6",
  "PTA20": "D1",
  "PTA17": "D2",
  "PTA15": "D3",
  "PTA2": "D4",
  "Reserved_D5": "D5",
  "Reserved_D6": "D6",
  "PTA19": "E1",
  "VDD_E2": "E2",
  "PTA14": "E3",
  "PTA1": "E4",
  "PTE30": "E5",
  "VDDA/VREFH": "E6",
  "PTA18": "F1",
  "VSS_F2": "F2",
  "PTA4": "F3",
  "PTA3": "F4",
  "PTA0": "F5",
  "VSSA/VREFL": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", "PTD6/LLWU_P15": "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", VDD_B3: "power_in", "PTC6/LLWU_P10": "bidirectional", PTD5: "bidirectional", PTD7: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA16: "bidirectional", VSS_C4: "power_in", Reserved_C5: "passive", Reserved_C6: "passive", PTA20: "bidirectional", PTA17: "bidirectional", PTA15: "bidirectional", PTA2: "bidirectional", Reserved_D5: "passive", Reserved_D6: "passive", PTA19: "bidirectional", VDD_E2: "passive", PTA14: "bidirectional", PTA1: "bidirectional", PTE30: "bidirectional", "VDDA/VREFH": "power_in", PTA18: "bidirectional", VSS_F2: "passive", PTA4: "bidirectional", PTA3: "bidirectional", PTA0: "bidirectional", "VSSA/VREFL": "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z256CAL4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 16 kB SRAM, FlexIO, XFBGA-36
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z64VDA4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*3.5x3.5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF2.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-36_3.5x3.5mm_Layout6x6_P0.5mm.
 */
export class MKL17Z64VDA4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTC7": "A4",
  "PTC5/LLWU_P9": "A5",
  "PTC4/LLWU_P8": "A6",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD5": "B3",
  "PTC6/LLWU_P10": "B4",
  "PTC3/LLWU_P7": "B5",
  "PTC2": "B6",
  "PTE17": "C1",
  "PTE16": "C2",
  "VDD": "C3",
  "VSS": "C4",
  "PTC1/LLWU_P6/RTC_CLKIN": "C5",
  "PTB1": "C6",
  "PTE18": "D1",
  "PTE19": "D2",
  "VDDA/VREFH": "D3",
  "VSSA/VREFL": "D4",
  "PTA20": "D5",
  "PTB0/LLWU_P5": "D6",
  "PTE22": "E1",
  "PTE21": "E2",
  "PTE20": "E3",
  "PTA2": "E4",
  "PTA3": "E5",
  "PTA19": "E6",
  "PTE23": "F1",
  "PTE30/VREF0": "F2",
  "PTA0": "F3",
  "PTA1": "F4",
  "PTA4": "F5",
  "PTA18": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTC7: "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD5: "bidirectional", "PTC6/LLWU_P10": "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTC2: "bidirectional", PTE17: "bidirectional", PTE16: "bidirectional", VDD: "power_in", VSS: "power_in", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB1: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTE22: "bidirectional", PTE21: "bidirectional", PTE20: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA19: "bidirectional", PTE23: "bidirectional", "PTE30/VREF0": "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA4: "bidirectional", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z64VDA4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 8 kB SRAM, FlexIO, XFBGA-36
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z32VDA4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*3.5x3.5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF2.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-36_3.5x3.5mm_Layout6x6_P0.5mm.
 */
export class MKL17Z32VDA4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTC7": "A4",
  "PTC5/LLWU_P9": "A5",
  "PTC4/LLWU_P8": "A6",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD5": "B3",
  "PTC6/LLWU_P10": "B4",
  "PTC3/LLWU_P7": "B5",
  "PTC2": "B6",
  "PTE17": "C1",
  "PTE16": "C2",
  "VDD": "C3",
  "VSS": "C4",
  "PTC1/LLWU_P6/RTC_CLKIN": "C5",
  "PTB1": "C6",
  "PTE18": "D1",
  "PTE19": "D2",
  "VDDA/VREFH": "D3",
  "VSSA/VREFL": "D4",
  "PTA20": "D5",
  "PTB0/LLWU_P5": "D6",
  "PTE22": "E1",
  "PTE21": "E2",
  "PTE20": "E3",
  "PTA2": "E4",
  "PTA3": "E5",
  "PTA19": "E6",
  "PTE23": "F1",
  "PTE30/VREF0": "F2",
  "PTA0": "F3",
  "PTA1": "F4",
  "PTA4": "F5",
  "PTA18": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTC7: "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD5: "bidirectional", "PTC6/LLWU_P10": "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTC2: "bidirectional", PTE17: "bidirectional", PTE16: "bidirectional", VDD: "power_in", VSS: "power_in", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB1: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTE22: "bidirectional", PTE21: "bidirectional", PTE20: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA19: "bidirectional", PTE23: "bidirectional", "PTE30/VREF0": "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA4: "bidirectional", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z32VDA4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 16 kB SRAM, FlexIO, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z64VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF2.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL17Z64VFM4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "VDDA/VREFH": "7",
  "VSSA/VREFL": "8",
  "PTE30/VREF0": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", "PTE30/VREF0": "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS: "power_in", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z64VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 8 kB SRAM, FlexIO, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z32VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF2.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL17Z32VFM4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "VDDA/VREFH": "7",
  "VSSA/VREFL": "8",
  "PTE30/VREF0": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", "PTE30/VREF0": "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS: "power_in", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z32VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 16 kB SRAM, FlexIO, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z64VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL17Z64VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH/VREFO": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", "VREFH/VREFO": "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z64VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 8 kB SRAM, FlexIO, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z32VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF6.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL17Z32VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH/VREFO": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", "VREFH/VREFO": "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z32VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 16 kB SRAM, FlexIO, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z64VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF2.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL17Z64VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "PTE16": "5",
  "PTE17": "6",
  "PTE18": "7",
  "PTE19": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH/VREFO": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", "VREFH/VREFO": "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z64VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 8 kB SRAM, FlexIO, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z32VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF2.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL17Z32VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "PTE16": "5",
  "PTE17": "6",
  "PTE18": "7",
  "PTE19": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH/VREFO": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", "VREFH/VREFO": "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z32VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 16 kB SRAM, FlexIO, MAPBGA-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z64VMP4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*5.0x5.0mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF2.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-64_5.0x5.0mm_Layout8x8_P0.5mm.
 */
export class MKL17Z64VMP4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTD1": "A4",
  "PTC11": "A5",
  "PTC8": "A6",
  "PTC6/LLWU_P10": "A7",
  "PTC5/LLWU_P9": "A8",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC10": "B4",
  "PTC9": "B5",
  "PTC7": "B6",
  "PTC2": "B7",
  "PTC4/LLWU_P8": "B8",
  "PTD5": "C1",
  "PTD2": "C2",
  "PTD0": "C3",
  "VSS_C4": "C4",
  "NC": "C5",
  "PTC1/LLWU_P6/RTC_CLKIN": "C6",
  "PTB19": "C7",
  "PTC3/LLWU_P7": "C8",
  "PTE17": "D1",
  "PTE19": "D2",
  "PTA0": "D3",
  "PTA1": "D4",
  "PTA3": "D5",
  "PTB18": "D6",
  "PTB17": "D7",
  "PTC0": "D8",
  "PTE16": "E1",
  "PTE18": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "PTA2": "E5",
  "PTB16": "E6",
  "PTB2": "E7",
  "PTB3": "E8",
  "PTE21": "F1",
  "PTE23": "F2",
  "VSSA": "F3",
  "VDDA": "F4",
  "PTA5": "F5",
  "PTB1": "F6",
  "PTB0/LLWU_P5": "F7",
  "PTA20": "F8",
  "PTE20": "G1",
  "PTE22": "G2",
  "VREFL": "G3",
  "VREFH/VREFO": "G4",
  "PTA4": "G5",
  "PTA13": "G6",
  "VDD_G7": "G7",
  "PTA19": "G8",
  "PTE29": "H1",
  "PTE30": "H2",
  "PTE31": "H3",
  "PTE24": "H4",
  "PTE25": "H5",
  "PTA12": "H6",
  "VSS_H7": "H7",
  "PTA18": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD1: "bidirectional", PTC11: "bidirectional", PTC8: "bidirectional", "PTC6/LLWU_P10": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC10: "bidirectional", PTC9: "bidirectional", PTC7: "bidirectional", PTC2: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD5: "bidirectional", PTD2: "bidirectional", PTD0: "bidirectional", VSS_C4: "power_in", NC: "no_connect", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB19: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTE17: "bidirectional", PTE19: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTB18: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", PTE16: "bidirectional", PTE18: "bidirectional", VSS_E3: "passive", VDD_E4: "power_in", PTA2: "bidirectional", PTB16: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTE21: "bidirectional", PTE23: "bidirectional", VSSA: "power_in", VDDA: "power_in", PTA5: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE22: "bidirectional", VREFL: "power_in", "VREFH/VREFO": "power_in", PTA4: "bidirectional", PTA13: "bidirectional", VDD_G7: "passive", PTA19: "bidirectional", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA12: "bidirectional", VSS_H7: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z64VMP4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL17 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 8 kB SRAM, FlexIO, MAPBGA-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL17Z32VMP4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*5.0x5.0mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL17P64M48SF2.pdf
 * Keywords: Kinetis KL17 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-64_5.0x5.0mm_Layout8x8_P0.5mm.
 */
export class MKL17Z32VMP4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTD1": "A4",
  "PTC11": "A5",
  "PTC8": "A6",
  "PTC6/LLWU_P10": "A7",
  "PTC5/LLWU_P9": "A8",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC10": "B4",
  "PTC9": "B5",
  "PTC7": "B6",
  "PTC2": "B7",
  "PTC4/LLWU_P8": "B8",
  "PTD5": "C1",
  "PTD2": "C2",
  "PTD0": "C3",
  "VSS_C4": "C4",
  "NC": "C5",
  "PTC1/LLWU_P6/RTC_CLKIN": "C6",
  "PTB19": "C7",
  "PTC3/LLWU_P7": "C8",
  "PTE17": "D1",
  "PTE19": "D2",
  "PTA0": "D3",
  "PTA1": "D4",
  "PTA3": "D5",
  "PTB18": "D6",
  "PTB17": "D7",
  "PTC0": "D8",
  "PTE16": "E1",
  "PTE18": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "PTA2": "E5",
  "PTB16": "E6",
  "PTB2": "E7",
  "PTB3": "E8",
  "PTE21": "F1",
  "PTE23": "F2",
  "VSSA": "F3",
  "VDDA": "F4",
  "PTA5": "F5",
  "PTB1": "F6",
  "PTB0/LLWU_P5": "F7",
  "PTA20": "F8",
  "PTE20": "G1",
  "PTE22": "G2",
  "VREFL": "G3",
  "VREFH/VREFO": "G4",
  "PTA4": "G5",
  "PTA13": "G6",
  "VDD_G7": "G7",
  "PTA19": "G8",
  "PTE29": "H1",
  "PTE30": "H2",
  "PTE31": "H3",
  "PTE24": "H4",
  "PTE25": "H5",
  "PTA12": "H6",
  "VSS_H7": "H7",
  "PTA18": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD1: "bidirectional", PTC11: "bidirectional", PTC8: "bidirectional", "PTC6/LLWU_P10": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC10: "bidirectional", PTC9: "bidirectional", PTC7: "bidirectional", PTC2: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD5: "bidirectional", PTD2: "bidirectional", PTD0: "bidirectional", VSS_C4: "power_in", NC: "no_connect", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB19: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTE17: "bidirectional", PTE19: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTB18: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", PTE16: "bidirectional", PTE18: "bidirectional", VSS_E3: "passive", VDD_E4: "power_in", PTA2: "bidirectional", PTB16: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTE21: "bidirectional", PTE23: "bidirectional", VSSA: "power_in", VDDA: "power_in", PTA5: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE22: "bidirectional", VREFL: "power_in", "VREFH/VREFO": "power_in", PTA4: "bidirectional", PTA13: "bidirectional", VDD_G7: "passive", PTA19: "bidirectional", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA12: "bidirectional", VSS_H7: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL17Z32VMP4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL24 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL24Z64VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL24P80M48SF0.pdf
 * Keywords: Kinetis KL24 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL24Z64VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL24Z64VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL24 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL24Z32VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL24P80M48SF0.pdf
 * Keywords: Kinetis KL24 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL24Z32VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL24Z32VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL24 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL24Z64VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL24P80M48SF0.pdf
 * Keywords: Kinetis KL24 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL24Z64VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL24Z64VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL24 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL24Z32VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL24P80M48SF0.pdf
 * Keywords: Kinetis KL24 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL24Z32VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL24Z32VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL24 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL24Z64VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL24P80M48SF0.pdf
 * Keywords: Kinetis KL24 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL24Z64VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL24Z64VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL24 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL24Z32VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL24P80M48SF0.pdf
 * Keywords: Kinetis KL24 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL24Z32VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL24Z32VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL24 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, LQFP-80
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL24Z64VLK4`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL24P80M48SF0.pdf
 * Keywords: Kinetis KL24 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class MKL24Z64VLK4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE2": "3",
  "PTE3": "4",
  "PTE4": "5",
  "PTE5": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "USB0_DP": "9",
  "USB0_DM": "10",
  "VOUT33": "11",
  "VREGIN": "12",
  "PTE20": "13",
  "PTE21": "14",
  "PTE22": "15",
  "PTE23": "16",
  "VDDA": "17",
  "VREFH": "18",
  "VREFL": "19",
  "VSSA": "20",
  "PTE29": "21",
  "PTE30": "22",
  "PTE31": "23",
  "PTE24": "24",
  "PTE25": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA12": "32",
  "PTA13": "33",
  "PTA14": "34",
  "PTA15": "35",
  "PTA16": "36",
  "PTA17": "37",
  "VDD_38": "38",
  "VSS_39": "39",
  "PTA18": "40",
  "PTA19": "41",
  "PTA20": "42",
  "PTB0/LLWU_P5": "43",
  "PTB1": "44",
  "PTB2": "45",
  "PTB3": "46",
  "PTB8": "47",
  "PTB9": "48",
  "PTB10": "49",
  "PTB11": "50",
  "PTB16": "51",
  "PTB17": "52",
  "PTB18": "53",
  "PTB19": "54",
  "PTC0": "55",
  "PTC1/LLWU_P6/RTC_CLKIN": "56",
  "PTC2": "57",
  "PTC3/LLWU_P7": "58",
  "VSS_59": "59",
  "VDD_60": "60",
  "PTC4/LLWU_P8": "61",
  "PTC5/LLWU_P9": "62",
  "PTC6/LLWU_P10": "63",
  "PTC7": "64",
  "PTC8": "65",
  "PTC9": "66",
  "PTC10": "67",
  "PTC11": "68",
  "PTC12": "69",
  "PTC13": "70",
  "PTC16": "71",
  "PTC17": "72",
  "PTD0": "73",
  "PTD1": "74",
  "PTD2": "75",
  "PTD3": "76",
  "PTD4/LLWU_P14": "77",
  "PTD5": "78",
  "PTD6/LLWU_P15": "79",
  "PTD7": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_38: "passive", VSS_39: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_59: "passive", VDD_60: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", PTC16: "bidirectional", PTC17: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL24Z64VLK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL24 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, LQFP-80
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL24Z32VLK4`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL24P80M48SF0.pdf
 * Keywords: Kinetis KL24 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class MKL24Z32VLK4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE2": "3",
  "PTE3": "4",
  "PTE4": "5",
  "PTE5": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "USB0_DP": "9",
  "USB0_DM": "10",
  "VOUT33": "11",
  "VREGIN": "12",
  "PTE20": "13",
  "PTE21": "14",
  "PTE22": "15",
  "PTE23": "16",
  "VDDA": "17",
  "VREFH": "18",
  "VREFL": "19",
  "VSSA": "20",
  "PTE29": "21",
  "PTE30": "22",
  "PTE31": "23",
  "PTE24": "24",
  "PTE25": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA12": "32",
  "PTA13": "33",
  "PTA14": "34",
  "PTA15": "35",
  "PTA16": "36",
  "PTA17": "37",
  "VDD_38": "38",
  "VSS_39": "39",
  "PTA18": "40",
  "PTA19": "41",
  "PTA20": "42",
  "PTB0/LLWU_P5": "43",
  "PTB1": "44",
  "PTB2": "45",
  "PTB3": "46",
  "PTB8": "47",
  "PTB9": "48",
  "PTB10": "49",
  "PTB11": "50",
  "PTB16": "51",
  "PTB17": "52",
  "PTB18": "53",
  "PTB19": "54",
  "PTC0": "55",
  "PTC1/LLWU_P6/RTC_CLKIN": "56",
  "PTC2": "57",
  "PTC3/LLWU_P7": "58",
  "VSS_59": "59",
  "VDD_60": "60",
  "PTC4/LLWU_P8": "61",
  "PTC5/LLWU_P9": "62",
  "PTC6/LLWU_P10": "63",
  "PTC7": "64",
  "PTC8": "65",
  "PTC9": "66",
  "PTC10": "67",
  "PTC11": "68",
  "PTC12": "69",
  "PTC13": "70",
  "PTC16": "71",
  "PTC17": "72",
  "PTD0": "73",
  "PTD1": "74",
  "PTD2": "75",
  "PTD3": "76",
  "PTD4/LLWU_P14": "77",
  "PTD5": "78",
  "PTD6/LLWU_P15": "79",
  "PTD7": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_38: "passive", VSS_39: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_59: "passive", VDD_60: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", PTC16: "bidirectional", PTC17: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL24Z32VLK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z128VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL25Z128VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z128VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z128VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL25Z128VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z128VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z128VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL25Z128VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z128VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, LQFP-80
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z128VLK4`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class MKL25Z128VLK4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE2": "3",
  "PTE3": "4",
  "PTE4": "5",
  "PTE5": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "USB0_DP": "9",
  "USB0_DM": "10",
  "VOUT33": "11",
  "VREGIN": "12",
  "PTE20": "13",
  "PTE21": "14",
  "PTE22": "15",
  "PTE23": "16",
  "VDDA": "17",
  "VREFH": "18",
  "VREFL": "19",
  "VSSA": "20",
  "PTE29": "21",
  "PTE30": "22",
  "PTE31": "23",
  "PTE24": "24",
  "PTE25": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA12": "32",
  "PTA13": "33",
  "PTA14": "34",
  "PTA15": "35",
  "PTA16": "36",
  "PTA17": "37",
  "VDD_38": "38",
  "VSS_39": "39",
  "PTA18": "40",
  "PTA19": "41",
  "PTA20": "42",
  "PTB0/LLWU_P5": "43",
  "PTB1": "44",
  "PTB2": "45",
  "PTB3": "46",
  "PTB8": "47",
  "PTB9": "48",
  "PTB10": "49",
  "PTB11": "50",
  "PTB16": "51",
  "PTB17": "52",
  "PTB18": "53",
  "PTB19": "54",
  "PTC0": "55",
  "PTC1/LLWU_P6/RTC_CLKIN": "56",
  "PTC2": "57",
  "PTC3/LLWU_P7": "58",
  "VSS_59": "59",
  "VDD_60": "60",
  "PTC4/LLWU_P8": "61",
  "PTC5/LLWU_P9": "62",
  "PTC6/LLWU_P10": "63",
  "PTC7": "64",
  "PTC8": "65",
  "PTC9": "66",
  "PTC10": "67",
  "PTC11": "68",
  "PTC12": "69",
  "PTC13": "70",
  "PTC16": "71",
  "PTC17": "72",
  "PTD0": "73",
  "PTD1": "74",
  "PTD2": "75",
  "PTD3": "76",
  "PTD4/LLWU_P14": "77",
  "PTD5": "78",
  "PTD6/LLWU_P15": "79",
  "PTD7": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_38: "passive", VSS_39: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_59: "passive", VDD_60: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", PTC16: "bidirectional", PTC17: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z128VLK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z32VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL25Z32VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z32VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z32VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL25Z32VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z32VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z32VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL25Z32VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z32VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, LQFP-80
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z32VLK4`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class MKL25Z32VLK4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE2": "3",
  "PTE3": "4",
  "PTE4": "5",
  "PTE5": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "USB0_DP": "9",
  "USB0_DM": "10",
  "VOUT33": "11",
  "VREGIN": "12",
  "PTE20": "13",
  "PTE21": "14",
  "PTE22": "15",
  "PTE23": "16",
  "VDDA": "17",
  "VREFH": "18",
  "VREFL": "19",
  "VSSA": "20",
  "PTE29": "21",
  "PTE30": "22",
  "PTE31": "23",
  "PTE24": "24",
  "PTE25": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA12": "32",
  "PTA13": "33",
  "PTA14": "34",
  "PTA15": "35",
  "PTA16": "36",
  "PTA17": "37",
  "VDD_38": "38",
  "VSS_39": "39",
  "PTA18": "40",
  "PTA19": "41",
  "PTA20": "42",
  "PTB0/LLWU_P5": "43",
  "PTB1": "44",
  "PTB2": "45",
  "PTB3": "46",
  "PTB8": "47",
  "PTB9": "48",
  "PTB10": "49",
  "PTB11": "50",
  "PTB16": "51",
  "PTB17": "52",
  "PTB18": "53",
  "PTB19": "54",
  "PTC0": "55",
  "PTC1/LLWU_P6/RTC_CLKIN": "56",
  "PTC2": "57",
  "PTC3/LLWU_P7": "58",
  "VSS_59": "59",
  "VDD_60": "60",
  "PTC4/LLWU_P8": "61",
  "PTC5/LLWU_P9": "62",
  "PTC6/LLWU_P10": "63",
  "PTC7": "64",
  "PTC8": "65",
  "PTC9": "66",
  "PTC10": "67",
  "PTC11": "68",
  "PTC12": "69",
  "PTC13": "70",
  "PTC16": "71",
  "PTC17": "72",
  "PTD0": "73",
  "PTD1": "74",
  "PTD2": "75",
  "PTD3": "76",
  "PTD4/LLWU_P14": "77",
  "PTD5": "78",
  "PTD6/LLWU_P15": "79",
  "PTD7": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_38: "passive", VSS_39: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_59: "passive", VDD_60: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", PTC16: "bidirectional", PTC17: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z32VLK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z64VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL25Z64VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z64VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z64VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL25Z64VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z64VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z64VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL25Z64VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z64VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL25 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, LQFP-80
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL25Z64VLK4`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL25P80M48SF0.pdf
 * Keywords: Kinetis KL25 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class MKL25Z64VLK4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE2": "3",
  "PTE3": "4",
  "PTE4": "5",
  "PTE5": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "USB0_DP": "9",
  "USB0_DM": "10",
  "VOUT33": "11",
  "VREGIN": "12",
  "PTE20": "13",
  "PTE21": "14",
  "PTE22": "15",
  "PTE23": "16",
  "VDDA": "17",
  "VREFH": "18",
  "VREFL": "19",
  "VSSA": "20",
  "PTE29": "21",
  "PTE30": "22",
  "PTE31": "23",
  "PTE24": "24",
  "PTE25": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA12": "32",
  "PTA13": "33",
  "PTA14": "34",
  "PTA15": "35",
  "PTA16": "36",
  "PTA17": "37",
  "VDD_38": "38",
  "VSS_39": "39",
  "PTA18": "40",
  "PTA19": "41",
  "PTA20": "42",
  "PTB0/LLWU_P5": "43",
  "PTB1": "44",
  "PTB2": "45",
  "PTB3": "46",
  "PTB8": "47",
  "PTB9": "48",
  "PTB10": "49",
  "PTB11": "50",
  "PTB16": "51",
  "PTB17": "52",
  "PTB18": "53",
  "PTB19": "54",
  "PTC0": "55",
  "PTC1/LLWU_P6/RTC_CLKIN": "56",
  "PTC2": "57",
  "PTC3/LLWU_P7": "58",
  "VSS_59": "59",
  "VDD_60": "60",
  "PTC4/LLWU_P8": "61",
  "PTC5/LLWU_P9": "62",
  "PTC6/LLWU_P10": "63",
  "PTC7": "64",
  "PTC8": "65",
  "PTC9": "66",
  "PTC10": "67",
  "PTC11": "68",
  "PTC12": "69",
  "PTC13": "70",
  "PTC16": "71",
  "PTC17": "72",
  "PTD0": "73",
  "PTD1": "74",
  "PTD2": "75",
  "PTD3": "76",
  "PTD4/LLWU_P14": "77",
  "PTD5": "78",
  "PTD6/LLWU_P15": "79",
  "PTD7": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_38: "passive", VSS_39: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_59: "passive", VDD_60: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", PTC16: "bidirectional", PTC17: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL25Z64VLK4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, WLCSP-36
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z128CAL4`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.374x2.459mm*P0.35mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P36M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_CSP:WLCSP-36_2.374x2.459mm_Layout6x6_P0.35mm.
 */
export class MKL26Z128CAL4 extends Component.withPins({
  "PTC4/LLWU_P8": "A1",
  "PTC6/LLWU_P10": "A2",
  "PTC7": "A3",
  "PTD4/LLWU_P14": "A4",
  "PTD5": "A5",
  "PTE0": "A6",
  "PTC1/LLWU_P6/RTC_CLKIN": "B1",
  "PTC2": "B2",
  "PTC3/LLWU_P7": "B3",
  "PTC5/LLWU_P9": "B4",
  "PTD6/LLWU_P15": "B5",
  "PTD7": "B6",
  "PTB1": "C1",
  "PTB0/LLWU_P5": "C2",
  "VSS_C3": "C3",
  "USB0_DP": "C4",
  "USB0_DM": "C5",
  "VOUT33": "C6",
  "PTA20": "D1",
  "PTE19": "D2",
  "PTE18": "D3",
  "VREGIN": "D4",
  "PTE16": "D5",
  "PTE17": "D6",
  "PTA19": "E1",
  "VSS_E2": "E2",
  "PTA3": "E3",
  "PTA1": "E4",
  "PTE30": "E5",
  "VDDA/VREFH": "E6",
  "PTA18": "F1",
  "VDD": "F2",
  "PTA4": "F3",
  "PTA2": "F4",
  "PTA0": "F5",
  "VSSA/VREFL": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PTC4/LLWU_P8": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", PTE0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", VSS_C3: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", PTA20: "bidirectional", PTE19: "bidirectional", PTE18: "bidirectional", VREGIN: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTA19: "bidirectional", VSS_E2: "passive", PTA3: "bidirectional", PTA1: "bidirectional", PTE30: "bidirectional", "VDDA/VREFH": "power_in", PTA18: "bidirectional", VDD: "power_in", PTA4: "bidirectional", PTA2: "bidirectional", PTA0: "bidirectional", "VSSA/VREFL": "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z128CAL4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z128VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P64M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL26Z128VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z128VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z128VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P64M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL26Z128VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z128VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z128VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P64M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL26Z128VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z128VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device/OTG, LQFP-100
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z256VLL4`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P121M48SF4.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MKL26Z256VLL4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE2": "3",
  "PTE3": "4",
  "PTE4": "5",
  "PTE5": "6",
  "PTE6": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "USB0_DP": "10",
  "USB0_DM": "11",
  "VOUT33": "12",
  "VREGIN": "13",
  "PTE16": "14",
  "PTE17": "15",
  "PTE18": "16",
  "PTE19": "17",
  "PTE20": "18",
  "PTE21": "19",
  "PTE22": "20",
  "PTE23": "21",
  "VDDA": "22",
  "VREFH": "23",
  "VREFL": "24",
  "VSSA": "25",
  "PTE29": "26",
  "PTE30": "27",
  "PTE31": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTE24": "31",
  "PTE25": "32",
  "PTE26": "33",
  "PTA0": "34",
  "PTA1": "35",
  "PTA2": "36",
  "PTA3": "37",
  "PTA4": "38",
  "PTA5": "39",
  "PTA6": "40",
  "PTA7": "41",
  "PTA12": "42",
  "PTA13": "43",
  "PTA14": "44",
  "PTA15": "45",
  "PTA16": "46",
  "PTA17": "47",
  "VDD_48": "48",
  "VSS_49": "49",
  "PTA18": "50",
  "PTA19": "51",
  "PTA20": "52",
  "PTB0/LLWU_P5": "53",
  "PTB1": "54",
  "PTB2": "55",
  "PTB3": "56",
  "PTB7": "57",
  "PTB8": "58",
  "PTB9": "59",
  "PTB10": "60",
  "PTB11": "61",
  "PTB16": "62",
  "PTB17": "63",
  "PTB18": "64",
  "PTB19": "65",
  "PTB20": "66",
  "PTB21": "67",
  "PTB22": "68",
  "PTB23": "69",
  "PTC0": "70",
  "PTC1/LLWU_P6/RTC_CLKIN": "71",
  "PTC2": "72",
  "PTC3/LLWU_P7": "73",
  "VSS_74": "74",
  "VDD_75": "75",
  "PTC4/LLWU_P8": "76",
  "PTC5/LLWU_P9": "77",
  "PTC6/LLWU_P10": "78",
  "PTC7": "79",
  "PTC8": "80",
  "PTC9": "81",
  "PTC10": "82",
  "PTC11": "83",
  "PTC12": "84",
  "PTC13": "85",
  "NC_86": "86",
  "NC_87": "87",
  "NC_88": "88",
  "NC_89": "89",
  "PTC16": "90",
  "PTC17": "91",
  "PTC18": "92",
  "PTD0": "93",
  "PTD1": "94",
  "PTD2": "95",
  "PTD3": "96",
  "PTD4/LLWU_P14": "97",
  "PTD5": "98",
  "PTD6/LLWU_P15": "99",
  "PTD7": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", VDD_8: "power_in", VSS_9: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", VSS_29: "passive", VDD_30: "passive", PTE24: "bidirectional", PTE25: "bidirectional", PTE26: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_48: "passive", VSS_49: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB7: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTB20: "bidirectional", PTB21: "bidirectional", PTB22: "bidirectional", PTB23: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_74: "passive", VDD_75: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", NC_86: "no_connect", NC_87: "no_connect", NC_88: "no_connect", NC_89: "no_connect", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z256VLL4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, LQFP-100
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z128VLL4`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P121M48SF4.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MKL26Z128VLL4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE2": "3",
  "PTE3": "4",
  "PTE4": "5",
  "PTE5": "6",
  "PTE6": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "USB0_DP": "10",
  "USB0_DM": "11",
  "VOUT33": "12",
  "VREGIN": "13",
  "PTE16": "14",
  "PTE17": "15",
  "PTE18": "16",
  "PTE19": "17",
  "PTE20": "18",
  "PTE21": "19",
  "PTE22": "20",
  "PTE23": "21",
  "VDDA": "22",
  "VREFH": "23",
  "VREFL": "24",
  "VSSA": "25",
  "PTE29": "26",
  "PTE30": "27",
  "PTE31": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTE24": "31",
  "PTE25": "32",
  "PTE26": "33",
  "PTA0": "34",
  "PTA1": "35",
  "PTA2": "36",
  "PTA3": "37",
  "PTA4": "38",
  "PTA5": "39",
  "PTA6": "40",
  "PTA7": "41",
  "PTA12": "42",
  "PTA13": "43",
  "PTA14": "44",
  "PTA15": "45",
  "PTA16": "46",
  "PTA17": "47",
  "VDD_48": "48",
  "VSS_49": "49",
  "PTA18": "50",
  "PTA19": "51",
  "PTA20": "52",
  "PTB0/LLWU_P5": "53",
  "PTB1": "54",
  "PTB2": "55",
  "PTB3": "56",
  "PTB7": "57",
  "PTB8": "58",
  "PTB9": "59",
  "PTB10": "60",
  "PTB11": "61",
  "PTB16": "62",
  "PTB17": "63",
  "PTB18": "64",
  "PTB19": "65",
  "PTB20": "66",
  "PTB21": "67",
  "PTB22": "68",
  "PTB23": "69",
  "PTC0": "70",
  "PTC1/LLWU_P6/RTC_CLKIN": "71",
  "PTC2": "72",
  "PTC3/LLWU_P7": "73",
  "VSS_74": "74",
  "VDD_75": "75",
  "PTC4/LLWU_P8": "76",
  "PTC5/LLWU_P9": "77",
  "PTC6/LLWU_P10": "78",
  "PTC7": "79",
  "PTC8": "80",
  "PTC9": "81",
  "PTC10": "82",
  "PTC11": "83",
  "PTC12": "84",
  "PTC13": "85",
  "NC_86": "86",
  "NC_87": "87",
  "NC_88": "88",
  "NC_89": "89",
  "PTC16": "90",
  "PTC17": "91",
  "PTC18": "92",
  "PTD0": "93",
  "PTD1": "94",
  "PTD2": "95",
  "PTD3": "96",
  "PTD4/LLWU_P14": "97",
  "PTD5": "98",
  "PTD6/LLWU_P15": "99",
  "PTD7": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", VDD_8: "power_in", VSS_9: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", VSS_29: "passive", VDD_30: "passive", PTE24: "bidirectional", PTE25: "bidirectional", PTE26: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_48: "passive", VSS_49: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB7: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTB20: "bidirectional", PTB21: "bidirectional", PTB22: "bidirectional", PTB23: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_74: "passive", VDD_75: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", NC_86: "no_connect", NC_87: "no_connect", NC_88: "no_connect", NC_89: "no_connect", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z128VLL4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device/OTG, XFBGA-121
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z256VMC4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*8x8mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P121M48SF4.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-121_8x8mm_Layout11x11_P0.65mm.
 */
export class MKL26Z256VMC4 extends Component.withPins({
  "PTD7": "A1",
  "PTD5": "A2",
  "PTD4/LLWU_P14": "A3",
  "NC_A4": "A4",
  "NC_A5": "A5",
  "PTC13": "A6",
  "PTC8": "A7",
  "PTC4/LLWU_P8": "A8",
  "PTC21": "A9",
  "PTC20": "A10",
  "NC_A11": "A11",
  "NC_B1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC18": "B4",
  "NC_B5": "B5",
  "PTC12": "B6",
  "PTC7": "B7",
  "PTC3/LLWU_P7": "B8",
  "PTC0": "B9",
  "PTB16": "B10",
  "PTC22": "B11",
  "NC_C1": "C1",
  "NC_C2": "C2",
  "PTD2": "C3",
  "PTC17": "C4",
  "PTC11": "C5",
  "PTC10": "C6",
  "PTC6/LLWU_P10": "C7",
  "PTC2": "C8",
  "PTB19": "C9",
  "PTB11": "C10",
  "PTC23": "C11",
  "NC_D1": "D1",
  "NC_D2": "D2",
  "PTD1": "D3",
  "PTD0": "D4",
  "PTC16": "D5",
  "PTC9": "D6",
  "PTC5/LLWU_P9": "D7",
  "PTC1/LLWU_P6/RTC_CLKIN": "D8",
  "PTB18": "D9",
  "PTB10": "D10",
  "PTB8": "D11",
  "NC_E1": "E1",
  "PTE2": "E2",
  "PTE1": "E3",
  "PTE0": "E4",
  "VDD_E5": "E5",
  "VDD_E6": "E6",
  "VDD_E7": "E7",
  "PTB23": "E8",
  "PTB17": "E9",
  "PTB9": "E10",
  "PTB7": "E11",
  "USB0_DP": "F1",
  "USB0_DM": "F2",
  "PTE6": "F3",
  "PTE3": "F4",
  "VDDA": "F5",
  "VSSA": "F6",
  "VSS_F7": "F7",
  "PTB22": "F8",
  "PTB21": "F9",
  "PTB20": "F10",
  "NC_F11": "F11",
  "VOUT33": "G1",
  "VREGIN": "G2",
  "VSS_G3": "G3",
  "PTE5": "G4",
  "VREFH": "G5",
  "VREFL": "G6",
  "VSS_G7": "G7",
  "PTB3": "G8",
  "PTB2": "G9",
  "PTB1": "G10",
  "PTB0/LLWU_P5": "G11",
  "PTE16": "H1",
  "PTE17": "H2",
  "NC_H3": "H3",
  "PTA7": "H4",
  "PTE24": "H5",
  "PTE26": "H6",
  "PTE4": "H7",
  "PTA1": "H8",
  "PTA3": "H9",
  "PTA17": "H10",
  "NC_H11": "H11",
  "PTE18": "J1",
  "PTE19": "J2",
  "NC_J3": "J3",
  "NC_J4": "J4",
  "PTE25": "J5",
  "PTA0": "J6",
  "PTA2": "J7",
  "PTA4": "J8",
  "NC_J9": "J9",
  "PTA16": "J10",
  "PTA20": "J11",
  "PTE20": "K1",
  "PTE21": "K2",
  "PTA6": "K3",
  "NC_K4": "K4",
  "PTE30": "K5",
  "VDD_K6": "K6",
  "PTA5": "K7",
  "PTA12": "K8",
  "PTA14": "K9",
  "VSS_K10": "K10",
  "PTA19": "K11",
  "PTE22": "L1",
  "PTE23": "L2",
  "PTE29": "L3",
  "PTE31": "L4",
  "VSS_L5": "L5",
  "VSS_L6": "L6",
  "NC_L7": "L7",
  "PTA13/LLWU_P4": "L8",
  "PTA15": "L9",
  "VDD_L10": "L10",
  "PTA18": "L11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD7: "bidirectional", PTD5: "bidirectional", "PTD4/LLWU_P14": "bidirectional", NC_A4: "no_connect", NC_A5: "no_connect", PTC13: "bidirectional", PTC8: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTC21: "bidirectional", PTC20: "bidirectional", NC_A11: "no_connect", NC_B1: "no_connect", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC18: "bidirectional", NC_B5: "no_connect", PTC12: "bidirectional", PTC7: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTC0: "bidirectional", PTB16: "bidirectional", PTC22: "bidirectional", NC_C1: "no_connect", NC_C2: "no_connect", PTD2: "bidirectional", PTC17: "bidirectional", PTC11: "bidirectional", PTC10: "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC2: "bidirectional", PTB19: "bidirectional", PTB11: "bidirectional", PTC23: "bidirectional", NC_D1: "no_connect", NC_D2: "no_connect", PTD1: "bidirectional", PTD0: "bidirectional", PTC16: "bidirectional", PTC9: "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB18: "bidirectional", PTB10: "bidirectional", PTB8: "bidirectional", NC_E1: "no_connect", PTE2: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", VDD_E5: "power_in", VDD_E6: "passive", VDD_E7: "passive", PTB23: "bidirectional", PTB17: "bidirectional", PTB9: "bidirectional", PTB7: "bidirectional", USB0_DP: "bidirectional", USB0_DM: "bidirectional", PTE6: "bidirectional", PTE3: "bidirectional", VDDA: "power_in", VSSA: "power_in", VSS_F7: "power_in", PTB22: "bidirectional", PTB21: "bidirectional", PTB20: "bidirectional", NC_F11: "no_connect", VOUT33: "power_out", VREGIN: "power_in", VSS_G3: "passive", PTE5: "bidirectional", VREFH: "power_in", VREFL: "power_in", VSS_G7: "passive", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", NC_H3: "no_connect", PTA7: "bidirectional", PTE24: "bidirectional", PTE26: "bidirectional", PTE4: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTA17: "bidirectional", NC_H11: "no_connect", PTE18: "bidirectional", PTE19: "bidirectional", NC_J3: "no_connect", NC_J4: "no_connect", PTE25: "bidirectional", PTA0: "bidirectional", PTA2: "bidirectional", PTA4: "bidirectional", NC_J9: "no_connect", PTA16: "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTA6: "bidirectional", NC_K4: "no_connect", PTE30: "bidirectional", VDD_K6: "passive", PTA5: "bidirectional", PTA12: "bidirectional", PTA14: "bidirectional", VSS_K10: "passive", PTA19: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", PTE29: "bidirectional", PTE31: "bidirectional", VSS_L5: "passive", VSS_L6: "passive", NC_L7: "no_connect", "PTA13/LLWU_P4": "bidirectional", PTA15: "bidirectional", VDD_L10: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z256VMC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, XFBGA-121
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z128VMC4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*8x8mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P121M48SF4.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-121_8x8mm_Layout11x11_P0.65mm.
 */
export class MKL26Z128VMC4 extends Component.withPins({
  "PTD7": "A1",
  "PTD5": "A2",
  "PTD4/LLWU_P14": "A3",
  "NC_A4": "A4",
  "NC_A5": "A5",
  "PTC13": "A6",
  "PTC8": "A7",
  "PTC4/LLWU_P8": "A8",
  "PTC21": "A9",
  "PTC20": "A10",
  "NC_A11": "A11",
  "NC_B1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC18": "B4",
  "NC_B5": "B5",
  "PTC12": "B6",
  "PTC7": "B7",
  "PTC3/LLWU_P7": "B8",
  "PTC0": "B9",
  "PTB16": "B10",
  "PTC22": "B11",
  "NC_C1": "C1",
  "NC_C2": "C2",
  "PTD2": "C3",
  "PTC17": "C4",
  "PTC11": "C5",
  "PTC10": "C6",
  "PTC6/LLWU_P10": "C7",
  "PTC2": "C8",
  "PTB19": "C9",
  "PTB11": "C10",
  "PTC23": "C11",
  "NC_D1": "D1",
  "NC_D2": "D2",
  "PTD1": "D3",
  "PTD0": "D4",
  "PTC16": "D5",
  "PTC9": "D6",
  "PTC5/LLWU_P9": "D7",
  "PTC1/LLWU_P6/RTC_CLKIN": "D8",
  "PTB18": "D9",
  "PTB10": "D10",
  "PTB8": "D11",
  "NC_E1": "E1",
  "PTE2": "E2",
  "PTE1": "E3",
  "PTE0": "E4",
  "VDD_E5": "E5",
  "VDD_E6": "E6",
  "VDD_E7": "E7",
  "PTB23": "E8",
  "PTB17": "E9",
  "PTB9": "E10",
  "PTB7": "E11",
  "USB0_DP": "F1",
  "USB0_DM": "F2",
  "PTE6": "F3",
  "PTE3": "F4",
  "VDDA": "F5",
  "VSSA": "F6",
  "VSS_F7": "F7",
  "PTB22": "F8",
  "PTB21": "F9",
  "PTB20": "F10",
  "NC_F11": "F11",
  "VOUT33": "G1",
  "VREGIN": "G2",
  "VSS_G3": "G3",
  "PTE5": "G4",
  "VREFH": "G5",
  "VREFL": "G6",
  "VSS_G7": "G7",
  "PTB3": "G8",
  "PTB2": "G9",
  "PTB1": "G10",
  "PTB0/LLWU_P5": "G11",
  "PTE16": "H1",
  "PTE17": "H2",
  "NC_H3": "H3",
  "PTA7": "H4",
  "PTE24": "H5",
  "PTE26": "H6",
  "PTE4": "H7",
  "PTA1": "H8",
  "PTA3": "H9",
  "PTA17": "H10",
  "NC_H11": "H11",
  "PTE18": "J1",
  "PTE19": "J2",
  "NC_J3": "J3",
  "NC_J4": "J4",
  "PTE25": "J5",
  "PTA0": "J6",
  "PTA2": "J7",
  "PTA4": "J8",
  "NC_J9": "J9",
  "PTA16": "J10",
  "PTA20": "J11",
  "PTE20": "K1",
  "PTE21": "K2",
  "PTA6": "K3",
  "NC_K4": "K4",
  "PTE30": "K5",
  "VDD_K6": "K6",
  "PTA5": "K7",
  "PTA12": "K8",
  "PTA14": "K9",
  "VSS_K10": "K10",
  "PTA19": "K11",
  "PTE22": "L1",
  "PTE23": "L2",
  "PTE29": "L3",
  "PTE31": "L4",
  "VSS_L5": "L5",
  "VSS_L6": "L6",
  "NC_L7": "L7",
  "PTA13/LLWU_P4": "L8",
  "PTA15": "L9",
  "VDD_L10": "L10",
  "PTA18": "L11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD7: "bidirectional", PTD5: "bidirectional", "PTD4/LLWU_P14": "bidirectional", NC_A4: "no_connect", NC_A5: "no_connect", PTC13: "bidirectional", PTC8: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTC21: "bidirectional", PTC20: "bidirectional", NC_A11: "no_connect", NC_B1: "no_connect", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC18: "bidirectional", NC_B5: "no_connect", PTC12: "bidirectional", PTC7: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTC0: "bidirectional", PTB16: "bidirectional", PTC22: "bidirectional", NC_C1: "no_connect", NC_C2: "no_connect", PTD2: "bidirectional", PTC17: "bidirectional", PTC11: "bidirectional", PTC10: "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC2: "bidirectional", PTB19: "bidirectional", PTB11: "bidirectional", PTC23: "bidirectional", NC_D1: "no_connect", NC_D2: "no_connect", PTD1: "bidirectional", PTD0: "bidirectional", PTC16: "bidirectional", PTC9: "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB18: "bidirectional", PTB10: "bidirectional", PTB8: "bidirectional", NC_E1: "no_connect", PTE2: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", VDD_E5: "power_in", VDD_E6: "passive", VDD_E7: "passive", PTB23: "bidirectional", PTB17: "bidirectional", PTB9: "bidirectional", PTB7: "bidirectional", USB0_DP: "bidirectional", USB0_DM: "bidirectional", PTE6: "bidirectional", PTE3: "bidirectional", VDDA: "power_in", VSSA: "power_in", VSS_F7: "power_in", PTB22: "bidirectional", PTB21: "bidirectional", PTB20: "bidirectional", NC_F11: "no_connect", VOUT33: "power_out", VREGIN: "power_in", VSS_G3: "passive", PTE5: "bidirectional", VREFH: "power_in", VREFL: "power_in", VSS_G7: "passive", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", NC_H3: "no_connect", PTA7: "bidirectional", PTE24: "bidirectional", PTE26: "bidirectional", PTE4: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTA17: "bidirectional", NC_H11: "no_connect", PTE18: "bidirectional", PTE19: "bidirectional", NC_J3: "no_connect", NC_J4: "no_connect", PTE25: "bidirectional", PTA0: "bidirectional", PTA2: "bidirectional", PTA4: "bidirectional", NC_J9: "no_connect", PTA16: "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTA6: "bidirectional", NC_K4: "no_connect", PTE30: "bidirectional", VDD_K6: "passive", PTA5: "bidirectional", PTA12: "bidirectional", PTA14: "bidirectional", VSS_K10: "passive", PTA19: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", PTE29: "bidirectional", PTE31: "bidirectional", VSS_L5: "passive", VSS_L6: "passive", NC_L7: "no_connect", "PTA13/LLWU_P4": "bidirectional", PTA15: "bidirectional", VDD_L10: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z128VMC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z256VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P121M48SF4.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL26Z256VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z256VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device/OTG, XFBGA-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z256VMP4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*5.0x5.0mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P121M48SF4.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-64_5.0x5.0mm_Layout8x8_P0.5mm.
 */
export class MKL26Z256VMP4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTD1": "A4",
  "PTC11": "A5",
  "PTC8": "A6",
  "PTC6/LLWU_P10": "A7",
  "PTC5/LLWU_P9": "A8",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC10": "B4",
  "PTC9": "B5",
  "PTC7": "B6",
  "PTC2": "B7",
  "PTC4/LLWU_P8": "B8",
  "PTD5": "C1",
  "PTD2": "C2",
  "PTD0": "C3",
  "VSS_C4": "C4",
  "NC": "C5",
  "PTC1/LLWU_P6/RTC_CLKIN": "C6",
  "PTB19": "C7",
  "PTC3/LLWU_P7": "C8",
  "USB0_DM": "D1",
  "VREGIN": "D2",
  "PTA0": "D3",
  "PTA1": "D4",
  "PTA3": "D5",
  "PTB18": "D6",
  "PTB17": "D7",
  "PTC0": "D8",
  "USB0_DP": "E1",
  "VOUT33": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "PTA2": "E5",
  "PTB16": "E6",
  "PTB2": "E7",
  "PTB3": "E8",
  "PTE21": "F1",
  "PTE23": "F2",
  "VSSA": "F3",
  "VDDA": "F4",
  "PTA5": "F5",
  "PTB1": "F6",
  "PTB0/LLWU_P5": "F7",
  "PTA20": "F8",
  "PTE20": "G1",
  "PTE22": "G2",
  "VREFL": "G3",
  "VREFH": "G4",
  "PTA4": "G5",
  "PTA13": "G6",
  "VDD_G7": "G7",
  "PTA19": "G8",
  "PTE29": "H1",
  "PTE30": "H2",
  "PTE31": "H3",
  "PTE24": "H4",
  "PTE25": "H5",
  "PTA12": "H6",
  "VSS_H7": "H7",
  "PTA18": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD1: "bidirectional", PTC11: "bidirectional", PTC8: "bidirectional", "PTC6/LLWU_P10": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC10: "bidirectional", PTC9: "bidirectional", PTC7: "bidirectional", PTC2: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD5: "bidirectional", PTD2: "bidirectional", PTD0: "bidirectional", VSS_C4: "power_in", NC: "no_connect", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB19: "bidirectional", "PTC3/LLWU_P7": "bidirectional", USB0_DM: "bidirectional", VREGIN: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTB18: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", USB0_DP: "bidirectional", VOUT33: "power_out", VSS_E3: "passive", VDD_E4: "power_in", PTA2: "bidirectional", PTB16: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTE21: "bidirectional", PTE23: "bidirectional", VSSA: "power_in", VDDA: "power_in", PTA5: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE22: "bidirectional", VREFL: "power_in", VREFH: "power_in", PTA4: "bidirectional", PTA13: "bidirectional", VDD_G7: "passive", PTA19: "bidirectional", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA12: "bidirectional", VSS_H7: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z256VMP4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z32VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P64M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL26Z32VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z32VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z32VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P64M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL26Z32VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z32VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 4 kB SRAM, USB FS Device/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z32VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P64M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL26Z32VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z32VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z64VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P64M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL26Z64VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "VDDA": "7",
  "VSSA": "8",
  "PTE30": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VDDA: "power_in", VSSA: "power_in", PTE30: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z64VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z64VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P64M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL26Z64VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z64VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL26 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 8 kB SRAM, USB FS Device/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL26Z64VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL26P64M48SF5.pdf
 * Keywords: Kinetis KL26 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL26Z64VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL26Z64VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device (xtal-less)/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z256VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF6.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL27Z256VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z256VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 32 kB SRAM, USB FS Device (xtal-less)/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z128VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF6.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL27Z128VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "VOUT33": "5",
  "VREGIN": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z128VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device (xtal-less)/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z256VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF6.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL27Z256VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z256VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 32 kB SRAM, USB FS Device (xtal-less)/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z128VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF6.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL27Z128VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z128VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 16 kB SRAM, USB FS Device (xtal-less)/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z64VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF2.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL27Z64VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "USB_VDD": "5",
  "PTE16": "6",
  "VDDA/VREFH": "7",
  "VSSA/VREFL": "8",
  "PTE30/VREF0": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", USB_VDD: "power_in", PTE16: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", "PTE30/VREF0": "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z64VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 8 kB SRAM, USB FS Device (xtal-less)/OTG, QFN-32
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z32VFM4`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF2.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MKL27Z32VFM4 extends Component.withPins({
  "PTE0": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "USB_VDD": "5",
  "PTE16": "6",
  "VDDA/VREFH": "7",
  "VSSA/VREFL": "8",
  "PTE30/VREF0": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTA4": "14",
  "VDD": "15",
  "VSS_16": "16",
  "PTA18": "17",
  "PTA19": "18",
  "PTA20": "19",
  "PTB0/LLWU_P5": "20",
  "PTB1": "21",
  "PTC1/LLWU_P6/RTC_CLKIN": "22",
  "PTC2": "23",
  "PTC3/LLWU_P7": "24",
  "PTC4/LLWU_P8": "25",
  "PTC5/LLWU_P9": "26",
  "PTC6/LLWU_P10": "27",
  "PTC7": "28",
  "PTD4/LLWU_P14": "29",
  "PTD5": "30",
  "PTD6/LLWU_P15": "31",
  "PTD7": "32",
  "EPAD": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", USB_VDD: "power_in", PTE16: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", "PTE30/VREF0": "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD: "power_in", VSS_16: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z32VFM4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 16 kB SRAM, USB FS Device (xtal-less)/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z64VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF2.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL27Z64VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "USB_VDD": "5",
  "PTE16": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH/VREFO": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", USB_VDD: "power_in", PTE16: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", "VREFH/VREFO": "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z64VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 8 kB SRAM, USB FS Device (xtal-less)/OTG, QFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z32VFT4`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF2.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MKL27Z32VFT4 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "USB0_DP": "3",
  "USB0_DM": "4",
  "USB_VDD": "5",
  "PTE16": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH/VREFO": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0/LLWU_P5": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1/LLWU_P6/RTC_CLKIN": "34",
  "PTC2": "35",
  "PTC3/LLWU_P7": "36",
  "PTC4/LLWU_P8": "37",
  "PTC5/LLWU_P9": "38",
  "PTC6/LLWU_P10": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4/LLWU_P14": "45",
  "PTD5": "46",
  "PTD6/LLWU_P15": "47",
  "PTD7": "48",
  "EPAD": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", USB_VDD: "power_in", PTE16: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", "VREFH/VREFO": "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "passive", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z32VFT4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 64 kB flash, 16 kB SRAM, USB FS Device (xtal-less)/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z64VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF2.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL27Z64VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "USB_VDD": "7",
  "PTE16": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH/VREFO": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", USB_VDD: "power_in", PTE16: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", "VREFH/VREFO": "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z64VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL27 series, 48-MHz/32-bit ARM Cortex-M0+, 32 kB flash, 8 kB SRAM, USB FS Device (xtal-less)/OTG, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL27Z32VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL27P64M48SF2.pdf
 * Keywords: Kinetis KL27 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL27Z32VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "USB_VDD": "7",
  "PTE16": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH/VREFO": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4/LLWU_P8": "49",
  "PTC5/LLWU_P9": "50",
  "PTC6/LLWU_P10": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", USB_VDD: "power_in", PTE16: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", "VREFH/VREFO": "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VDD_48: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL27Z32VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL28 series, 72...96-MHz/32-bit ARM Cortex-M0+, 512 kB flash, 128 kB SRAM, USB FS Device (xtal-less), XFBGA-121
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL28Z512VDC7`. Reference prefix: `U`.
 * Footprint filters: XFBGA*8x8mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/MKL28Z512Vxx7.pdf
 * Keywords: Kinetis KL28 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-121_8x8mm_Layout11x11_P0.65mm.
 */
export class MKL28Z512VDC7 extends Component.withPins({
  "PTD7": "A1",
  "PTD5": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTC19": "A4",
  "PTC14": "A5",
  "PTC13": "A6",
  "PTC8": "A7",
  "PTC4/LLWU_P8": "A8",
  "PTD9": "A9",
  "PTD8/LLWU_P24": "A10",
  "VSS_A11": "A11",
  "PTD10": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC18": "B4",
  "PTC15": "B5",
  "PTC12": "B6",
  "PTC7": "B7",
  "PTC3/LLWU_P7": "B8",
  "PTC0": "B9",
  "PTB16": "B10",
  "PTC22": "B11",
  "PTD12": "C1",
  "PTD11/LLWU_P25": "C2",
  "PTD2/LLWU_P13": "C3",
  "PTC17": "C4",
  "PTC11/LLWU_P11": "C5",
  "PTC10": "C6",
  "PTC6/LLWU_P10": "C7",
  "PTC2": "C8",
  "PTB19": "C9",
  "PTB11": "C10",
  "PTC23": "C11",
  "PTD14": "D1",
  "PTD13": "D2",
  "PTD1": "D3",
  "PTD0/LLWU_P12": "D4",
  "PTC16": "D5",
  "PTC9": "D6",
  "PTC5/LLWU_P9": "D7",
  "PTC1/LLWU_P6/RTC_CLKIN": "D8",
  "PTB18": "D9",
  "PTB10": "D10",
  "PTB8": "D11",
  "PTD15": "E1",
  "PTE2/LLWU_P1": "E2",
  "PTE1/LLWU_P0": "E3",
  "PTE0": "E4",
  "VDD_E5": "E5",
  "VDD_E6": "E6",
  "VDD_E7": "E7",
  "PTB23": "E8",
  "PTB17": "E9",
  "PTB9": "E10",
  "PTB7": "E11",
  "USB0_DP": "F1",
  "USB0_DM": "F2",
  "PTE6/LLWU_P16": "F3",
  "PTE3": "F4",
  "VDDA": "F5",
  "VSSA": "F6",
  "VSS_F7": "F7",
  "PTB22": "F8",
  "PTB21": "F9",
  "PTB20": "F10",
  "PTB6": "F11",
  "VOUT33": "G1",
  "VREGIN": "G2",
  "VSS_G3": "G3",
  "PTE5": "G4",
  "VREFH/VREF_OUT": "G5",
  "VREFL": "G6",
  "VSS_G7": "G7",
  "PTB3": "G8",
  "PTB2": "G9",
  "PTB1": "G10",
  "PTB0/LLWU_P5": "G11",
  "PTE16": "H1",
  "PTE17/LLWU_P19": "H2",
  "NC_H3": "H3",
  "PTA7": "H4",
  "PTE24": "H5",
  "PTE26": "H6",
  "PTE4/LLWU_P2": "H7",
  "PTA1": "H8",
  "PTA3": "H9",
  "PTA17": "H10",
  "PTA29": "H11",
  "PTE18/LLWU_P20": "J1",
  "PTE19": "J2",
  "NC_J3": "J3",
  "PTA11/LLWU_P23": "J4",
  "PTE25/LLWU_P21": "J5",
  "PTA0": "J6",
  "PTA2": "J7",
  "PTA4/LLWU_P3": "J8",
  "PTA10/LLWU_P22": "J9",
  "PTA16": "J10",
  "PTA20": "J11",
  "PTE20": "K1",
  "PTE21": "K2",
  "PTA6": "K3",
  "NC_K4": "K4",
  "PTE30": "K5",
  "VDD_K6": "K6",
  "PTA5": "K7",
  "PTA12": "K8",
  "PTA14": "K9",
  "VSS_K10": "K10",
  "PTA19": "K11",
  "PTE22": "L1",
  "PTE23": "L2",
  "PTE29": "L3",
  "PTE31": "L4",
  "VSS_L5": "L5",
  "VSS_L6": "L6",
  "NC_L7": "L7",
  "PTA13/LLWU_P4": "L8",
  "PTA15": "L9",
  "VDD_L10": "L10",
  "PTA18": "L11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD7: "bidirectional", PTD5: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTC19: "bidirectional", PTC14: "bidirectional", PTC13: "bidirectional", PTC8: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD9: "bidirectional", "PTD8/LLWU_P24": "bidirectional", VSS_A11: "power_in", PTD10: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC18: "bidirectional", PTC15: "bidirectional", PTC12: "bidirectional", PTC7: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTC0: "bidirectional", PTB16: "bidirectional", PTC22: "bidirectional", PTD12: "bidirectional", "PTD11/LLWU_P25": "bidirectional", "PTD2/LLWU_P13": "bidirectional", PTC17: "bidirectional", "PTC11/LLWU_P11": "bidirectional", PTC10: "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC2: "bidirectional", PTB19: "bidirectional", PTB11: "bidirectional", PTC23: "bidirectional", PTD14: "bidirectional", PTD13: "bidirectional", PTD1: "bidirectional", "PTD0/LLWU_P12": "bidirectional", PTC16: "bidirectional", PTC9: "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB18: "bidirectional", PTB10: "bidirectional", PTB8: "bidirectional", PTD15: "bidirectional", "PTE2/LLWU_P1": "bidirectional", "PTE1/LLWU_P0": "bidirectional", PTE0: "bidirectional", VDD_E5: "power_in", VDD_E6: "passive", VDD_E7: "passive", PTB23: "bidirectional", PTB17: "bidirectional", PTB9: "bidirectional", PTB7: "bidirectional", USB0_DP: "bidirectional", USB0_DM: "bidirectional", "PTE6/LLWU_P16": "bidirectional", PTE3: "bidirectional", VDDA: "power_in", VSSA: "power_in", VSS_F7: "passive", PTB22: "bidirectional", PTB21: "bidirectional", PTB20: "bidirectional", PTB6: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", VSS_G3: "passive", PTE5: "bidirectional", "VREFH/VREF_OUT": "power_in", VREFL: "power_in", VSS_G7: "passive", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTE16: "bidirectional", "PTE17/LLWU_P19": "bidirectional", NC_H3: "no_connect", PTA7: "bidirectional", PTE24: "bidirectional", PTE26: "bidirectional", "PTE4/LLWU_P2": "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTA17: "bidirectional", PTA29: "bidirectional", "PTE18/LLWU_P20": "bidirectional", PTE19: "bidirectional", NC_J3: "no_connect", "PTA11/LLWU_P23": "bidirectional", "PTE25/LLWU_P21": "bidirectional", PTA0: "bidirectional", PTA2: "bidirectional", "PTA4/LLWU_P3": "bidirectional", "PTA10/LLWU_P22": "bidirectional", PTA16: "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTA6: "bidirectional", NC_K4: "no_connect", PTE30: "bidirectional", VDD_K6: "passive", PTA5: "bidirectional", PTA12: "bidirectional", PTA14: "bidirectional", VSS_K10: "passive", PTA19: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", PTE29: "bidirectional", PTE31: "bidirectional", VSS_L5: "passive", VSS_L6: "passive", NC_L7: "no_connect", "PTA13/LLWU_P4": "bidirectional", PTA15: "bidirectional", VDD_L10: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL28Z512VDC7";
  override referencePrefix = "U";
}

/**
 * Kinetis KL28 series, 72...96-MHz/32-bit ARM Cortex-M0+, 512 kB flash, 128 kB SRAM, USB FS Device (xtal-less), LQFP-100
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL28Z512VLL7`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/MKL28Z512Vxx7.pdf
 * Keywords: Kinetis KL28 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MKL28Z512VLL7 extends Component.withPins({
  "PTE0": "1",
  "PTE1/LLWU_P0": "2",
  "PTE2/LLWU_P1": "3",
  "PTE3": "4",
  "PTE4/LLWU_P2": "5",
  "PTE5": "6",
  "PTE6/LLWU_P16": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "USB0_DP": "10",
  "USB0_DM": "11",
  "VOUT33": "12",
  "VREGIN": "13",
  "PTE16": "14",
  "PTE17/LLWU_P19": "15",
  "PTE18/LLWU_P20": "16",
  "PTE19": "17",
  "PTE20": "18",
  "PTE21": "19",
  "PTE22": "20",
  "PTE23": "21",
  "VDDA": "22",
  "VREFH/VREF_OUT": "23",
  "VREFL": "24",
  "VSSA": "25",
  "PTE29": "26",
  "PTE30": "27",
  "PTE31": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTE24": "31",
  "PTE25/LLWU_P21": "32",
  "PTE26": "33",
  "PTA0": "34",
  "PTA1": "35",
  "PTA2": "36",
  "PTA3": "37",
  "PTA4/LLWU_P3": "38",
  "PTA5": "39",
  "PTA6": "40",
  "PTA7": "41",
  "PTA12": "42",
  "PTA13/LLWU_P4": "43",
  "PTA14": "44",
  "PTA15": "45",
  "PTA16": "46",
  "PTA17": "47",
  "VDD_48": "48",
  "VSS_49": "49",
  "PTA18": "50",
  "PTA19": "51",
  "PTA20": "52",
  "PTB0/LLWU_P5": "53",
  "PTB1": "54",
  "PTB2": "55",
  "PTB3": "56",
  "PTB7": "57",
  "PTB8": "58",
  "PTB9": "59",
  "PTB10": "60",
  "PTB11": "61",
  "PTB16": "62",
  "PTB17": "63",
  "PTB18": "64",
  "PTB19": "65",
  "PTB20": "66",
  "PTB21": "67",
  "PTB22": "68",
  "PTB23": "69",
  "PTC0": "70",
  "PTC1/LLWU_P6": "71",
  "PTC2": "72",
  "PTC3/LLWU_P7": "73",
  "VSS_74": "74",
  "VDD_75": "75",
  "PTC4/LLWU_P8": "76",
  "PTC5/LLWU_P9": "77",
  "PTC6/LLWU_P10": "78",
  "PTC7": "79",
  "PTC8": "80",
  "PTC9": "81",
  "PTC10": "82",
  "PTC11/LLWU_P11": "83",
  "PTC12": "84",
  "PTC13": "85",
  "PTC14": "86",
  "PTC15": "87",
  "VSS_88": "88",
  "VDD_89": "89",
  "PTC16": "90",
  "PTC17": "91",
  "PTC18": "92",
  "PTD0/LLWU_P12": "93",
  "PTD1": "94",
  "PTD2/LLWU_P13": "95",
  "PTD3": "96",
  "PTD4/LLWU_P14": "97",
  "PTD5": "98",
  "PTD6/LLWU_P15": "99",
  "PTD7": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", "PTE1/LLWU_P0": "bidirectional", "PTE2/LLWU_P1": "bidirectional", PTE3: "bidirectional", "PTE4/LLWU_P2": "bidirectional", PTE5: "bidirectional", "PTE6/LLWU_P16": "bidirectional", VDD_8: "power_in", VSS_9: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE16: "bidirectional", "PTE17/LLWU_P19": "bidirectional", "PTE18/LLWU_P20": "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", "VREFH/VREF_OUT": "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", VSS_29: "passive", VDD_30: "passive", PTE24: "bidirectional", "PTE25/LLWU_P21": "bidirectional", PTE26: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "PTA4/LLWU_P3": "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTA12: "bidirectional", "PTA13/LLWU_P4": "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_48: "passive", VSS_49: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB7: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTB20: "bidirectional", PTB21: "bidirectional", PTB22: "bidirectional", PTB23: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_74: "passive", VDD_75: "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", "PTC11/LLWU_P11": "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", PTC14: "bidirectional", PTC15: "bidirectional", VSS_88: "passive", VDD_89: "passive", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", "PTD0/LLWU_P12": "bidirectional", PTD1: "bidirectional", "PTD2/LLWU_P13": "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL28Z512VLL7";
  override referencePrefix = "U";
}

/**
 * Kinetis KL43 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device (xtal-less), Segment LCD, FlexIO, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL43Z256VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL43P64M48SF6.pdf
 * Keywords: Kinetis KL43 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL43Z256VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VLL3": "48",
  "VLL2/PTC20": "49",
  "VLL1/PTC21": "50",
  "VCAP2/PTC22": "51",
  "VCAP1/PTC23": "52",
  "PTC4/LLWU_P8": "53",
  "PTC5/LLWU_P9": "54",
  "PTC6/LLWU_P10": "55",
  "PTC7": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VLL3: "power_out", "VLL2/PTC20": "power_out", "VLL1/PTC21": "power_out", "VCAP2/PTC22": "passive", "VCAP1/PTC23": "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL43Z256VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL43 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device (xtal-less), Segment LCD, FlexIO, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL43Z128VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL43P64M48SF6.pdf
 * Keywords: Kinetis KL43 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL43Z128VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VLL3": "48",
  "VLL2/PTC20": "49",
  "VLL1/PTC21": "50",
  "VCAP2/PTC22": "51",
  "VCAP1/PTC23": "52",
  "PTC4/LLWU_P8": "53",
  "PTC5/LLWU_P9": "54",
  "PTC6/LLWU_P10": "55",
  "PTC7": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VLL3: "power_out", "VLL2/PTC20": "power_out", "VLL1/PTC21": "power_out", "VCAP2/PTC22": "passive", "VCAP1/PTC23": "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL43Z128VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL43 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device (xtal-less), Segment LCD, FlexIO, MAPBGA-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL43Z256VMP4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*5.0x5.0mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL43P64M48SF6.pdf
 * Keywords: Kinetis KL43 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-64_5.0x5.0mm_Layout8x8_P0.5mm.
 */
export class MKL43Z256VMP4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTD1": "A4",
  "VCAP1/PTC23": "A5",
  "VLL2/PTC20": "A6",
  "PTC6/LLWU_P10": "A7",
  "PTC5/LLWU_P9": "A8",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "VCAP2/PTC22": "B4",
  "VLL1/PTC21": "B5",
  "PTC7": "B6",
  "PTC2": "B7",
  "PTC4/LLWU_P8": "B8",
  "PTD5": "C1",
  "PTD2": "C2",
  "PTD0": "C3",
  "VSS_C4": "C4",
  "VLL3": "C5",
  "PTC1/LLWU_P6/RTC_CLKIN": "C6",
  "PTB19": "C7",
  "PTC3/LLWU_P7": "C8",
  "USB0_DM": "D1",
  "VREGIN": "D2",
  "PTA0": "D3",
  "PTA1": "D4",
  "PTA3": "D5",
  "PTB18": "D6",
  "PTB17": "D7",
  "PTC0": "D8",
  "USB0_DP": "E1",
  "VOUT33": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "PTA2": "E5",
  "PTB16": "E6",
  "PTB2": "E7",
  "PTB3": "E8",
  "PTE21": "F1",
  "PTE23": "F2",
  "VSSA": "F3",
  "VDDA": "F4",
  "PTA5": "F5",
  "PTB1": "F6",
  "PTB0/LLWU_P5": "F7",
  "PTA20": "F8",
  "PTE20": "G1",
  "PTE22": "G2",
  "VREFL": "G3",
  "VREFH": "G4",
  "PTA4": "G5",
  "PTA13": "G6",
  "VDD_G7": "G7",
  "PTA19": "G8",
  "PTE29": "H1",
  "PTE30": "H2",
  "PTE31": "H3",
  "PTE24": "H4",
  "PTE25": "H5",
  "PTA12": "H6",
  "VSS_H7": "H7",
  "PTA18": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD1: "bidirectional", "VCAP1/PTC23": "passive", "VLL2/PTC20": "power_out", "PTC6/LLWU_P10": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", "VCAP2/PTC22": "passive", "VLL1/PTC21": "power_out", PTC7: "bidirectional", PTC2: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD5: "bidirectional", PTD2: "bidirectional", PTD0: "bidirectional", VSS_C4: "power_in", VLL3: "power_out", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB19: "bidirectional", "PTC3/LLWU_P7": "bidirectional", USB0_DM: "bidirectional", VREGIN: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTB18: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", USB0_DP: "bidirectional", VOUT33: "power_out", VSS_E3: "passive", VDD_E4: "power_in", PTA2: "bidirectional", PTB16: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTE21: "bidirectional", PTE23: "bidirectional", VSSA: "power_in", VDDA: "power_in", PTA5: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE22: "bidirectional", VREFL: "power_in", VREFH: "power_in", PTA4: "bidirectional", PTA13: "bidirectional", VDD_G7: "passive", PTA19: "bidirectional", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA12: "bidirectional", VSS_H7: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL43Z256VMP4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL43 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device (xtal-less), Segment LCD, FlexIO, MAPBGA-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL43Z128VMP4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*5.0x5.0mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL43P64M48SF6.pdf
 * Keywords: Kinetis KL43 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-64_5.0x5.0mm_Layout8x8_P0.5mm.
 */
export class MKL43Z128VMP4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTD1": "A4",
  "VCAP1/PTC23": "A5",
  "VLL2/PTC20": "A6",
  "PTC6/LLWU_P10": "A7",
  "PTC5/LLWU_P9": "A8",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "VCAP2/PTC22": "B4",
  "VLL1/PTC21": "B5",
  "PTC7": "B6",
  "PTC2": "B7",
  "PTC4/LLWU_P8": "B8",
  "PTD5": "C1",
  "PTD2": "C2",
  "PTD0": "C3",
  "VSS_C4": "C4",
  "VLL3": "C5",
  "PTC1/LLWU_P6/RTC_CLKIN": "C6",
  "PTB19": "C7",
  "PTC3/LLWU_P7": "C8",
  "USB0_DM": "D1",
  "VREGIN": "D2",
  "PTA0": "D3",
  "PTA1": "D4",
  "PTA3": "D5",
  "PTB18": "D6",
  "PTB17": "D7",
  "PTC0": "D8",
  "USB0_DP": "E1",
  "VOUT33": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "PTA2": "E5",
  "PTB16": "E6",
  "PTB2": "E7",
  "PTB3": "E8",
  "PTE21": "F1",
  "PTE23": "F2",
  "VSSA": "F3",
  "VDDA": "F4",
  "PTA5": "F5",
  "PTB1": "F6",
  "PTB0/LLWU_P5": "F7",
  "PTA20": "F8",
  "PTE20": "G1",
  "PTE22": "G2",
  "VREFL": "G3",
  "VREFH": "G4",
  "PTA4": "G5",
  "PTA13": "G6",
  "VDD_G7": "G7",
  "PTA19": "G8",
  "PTE29": "H1",
  "PTE30": "H2",
  "PTE31": "H3",
  "PTE24": "H4",
  "PTE25": "H5",
  "PTA12": "H6",
  "VSS_H7": "H7",
  "PTA18": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD1: "bidirectional", "VCAP1/PTC23": "passive", "VLL2/PTC20": "power_out", "PTC6/LLWU_P10": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", "VCAP2/PTC22": "passive", "VLL1/PTC21": "power_out", PTC7: "bidirectional", PTC2: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD5: "bidirectional", PTD2: "bidirectional", PTD0: "bidirectional", VSS_C4: "power_in", VLL3: "power_out", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB19: "bidirectional", "PTC3/LLWU_P7": "bidirectional", USB0_DM: "bidirectional", VREGIN: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTB18: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", USB0_DP: "bidirectional", VOUT33: "power_out", VSS_E3: "passive", VDD_E4: "power_in", PTA2: "bidirectional", PTB16: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTE21: "bidirectional", PTE23: "bidirectional", VSSA: "power_in", VDDA: "power_in", PTA5: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE22: "bidirectional", VREFL: "power_in", VREFH: "power_in", PTA4: "bidirectional", PTA13: "bidirectional", VDD_G7: "passive", PTA19: "bidirectional", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA12: "bidirectional", VSS_H7: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL43Z128VMP4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL46 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device/OTG, Segment LCD, TSI, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL46Z256VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL46P121M48SF4.pdf
 * Keywords: Kinetis KL46 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL46Z256VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VLL3": "48",
  "VLL2/PTC20": "49",
  "VLL1/PTC21": "50",
  "VCAP2/PTC22": "51",
  "VCAP1/PTC23": "52",
  "PTC4/LLWU_P8": "53",
  "PTC5/LLWU_P9": "54",
  "PTC6/LLWU_P10": "55",
  "PTC7": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VLL3: "power_out", "VLL2/PTC20": "power_out", "VLL1/PTC21": "power_out", "VCAP2/PTC22": "passive", "VCAP1/PTC23": "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL46Z256VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL46 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, Segment LCD, TSI, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL46Z128VLH4`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL46P121M48SF4.pdf
 * Keywords: Kinetis KL46 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKL46Z128VLH4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "USB0_DP": "5",
  "USB0_DM": "6",
  "VOUT33": "7",
  "VREGIN": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0/LLWU_P5": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1/LLWU_P6/RTC_CLKIN": "44",
  "PTC2": "45",
  "PTC3/LLWU_P7": "46",
  "VSS_47": "47",
  "VLL3": "48",
  "VLL2/PTC20": "49",
  "VLL1/PTC21": "50",
  "VCAP2/PTC22": "51",
  "VCAP1/PTC23": "52",
  "PTC4/LLWU_P8": "53",
  "PTC5/LLWU_P9": "54",
  "PTC6/LLWU_P10": "55",
  "PTC7": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4/LLWU_P14": "61",
  "PTD5": "62",
  "PTD6/LLWU_P15": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "passive", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_47: "passive", VLL3: "power_out", "VLL2/PTC20": "power_out", "VLL1/PTC21": "power_out", "VCAP2/PTC22": "passive", "VCAP1/PTC23": "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL46Z128VLH4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL46 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device/OTG, Segment LCD, TSI, LQFP-100
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL46Z256VLL4`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL46P121M48SF4.pdf
 * Keywords: Kinetis KL46 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MKL46Z256VLL4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE2": "3",
  "PTE3": "4",
  "PTE4": "5",
  "PTE5": "6",
  "PTE6": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "USB0_DP": "10",
  "USB0_DM": "11",
  "VOUT33": "12",
  "VREGIN": "13",
  "PTE16": "14",
  "PTE17": "15",
  "PTE18": "16",
  "PTE19": "17",
  "PTE20": "18",
  "PTE21": "19",
  "PTE22": "20",
  "PTE23": "21",
  "VDDA": "22",
  "VREFH": "23",
  "VREFL": "24",
  "VSSA": "25",
  "PTE29": "26",
  "PTE30": "27",
  "PTE31": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTE24": "31",
  "PTE25": "32",
  "PTE26": "33",
  "PTA0": "34",
  "PTA1": "35",
  "PTA2": "36",
  "PTA3": "37",
  "PTA4": "38",
  "PTA5": "39",
  "PTA6": "40",
  "PTA7": "41",
  "PTA12": "42",
  "PTA13": "43",
  "PTA14": "44",
  "PTA15": "45",
  "PTA16": "46",
  "PTA17": "47",
  "VDD_48": "48",
  "VSS_49": "49",
  "PTA18": "50",
  "PTA19": "51",
  "PTA20": "52",
  "PTB0/LLWU_P5": "53",
  "PTB1": "54",
  "PTB2_55": "55",
  "PTB3": "56",
  "PTB7": "57",
  "PTB8": "58",
  "PTB9": "59",
  "PTB10": "60",
  "PTB11": "61",
  "PTB16": "62",
  "PTB17": "63",
  "PTB18": "64",
  "PTB19": "65",
  "PTB2_66": "66",
  "PTB21": "67",
  "PTB22": "68",
  "PTB23": "69",
  "PTC0": "70",
  "PTC1/LLWU_P6/RTC_CLKIN": "71",
  "PTC2": "72",
  "PTC3/LLWU_P7": "73",
  "VSS_74": "74",
  "VLL3": "75",
  "VLL2/PTC20": "76",
  "VLL1/PTC21": "77",
  "VCAP2/PTC22": "78",
  "VCAP1/PTC23": "79",
  "PTC4/LLWU_P8": "80",
  "PTC5/LLWU_P9": "81",
  "PTC6/LLWU_P10": "82",
  "PTC7": "83",
  "PTC8": "84",
  "PTC9": "85",
  "PTC10": "86",
  "PTC11": "87",
  "PTC12": "88",
  "PTC13": "89",
  "PTC16": "90",
  "PTC17": "91",
  "PTC18": "92",
  "PTD0": "93",
  "PTD1": "94",
  "PTD2": "95",
  "PTD3": "96",
  "PTD4/LLWU_P14": "97",
  "PTD5": "98",
  "PTD6/LLWU_P15": "99",
  "PTD7": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", VDD_8: "power_in", VSS_9: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", VSS_29: "passive", VDD_30: "passive", PTE24: "bidirectional", PTE25: "bidirectional", PTE26: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_48: "passive", VSS_49: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2_55: "bidirectional", PTB3: "bidirectional", PTB7: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTB2_66: "bidirectional", PTB21: "bidirectional", PTB22: "bidirectional", PTB23: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_74: "passive", VLL3: "power_out", "VLL2/PTC20": "power_out", "VLL1/PTC21": "power_out", "VCAP2/PTC22": "passive", "VCAP1/PTC23": "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL46Z256VLL4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL46 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, Segment LCD, TSI, LQFP-100
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL46Z128VLL4`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL46P121M48SF4.pdf
 * Keywords: Kinetis KL46 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MKL46Z128VLL4 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "PTE2": "3",
  "PTE3": "4",
  "PTE4": "5",
  "PTE5": "6",
  "PTE6": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "USB0_DP": "10",
  "USB0_DM": "11",
  "VOUT33": "12",
  "VREGIN": "13",
  "PTE16": "14",
  "PTE17": "15",
  "PTE18": "16",
  "PTE19": "17",
  "PTE20": "18",
  "PTE21": "19",
  "PTE22": "20",
  "PTE23": "21",
  "VDDA": "22",
  "VREFH": "23",
  "VREFL": "24",
  "VSSA": "25",
  "PTE29": "26",
  "PTE30": "27",
  "PTE31": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTE24": "31",
  "PTE25": "32",
  "PTE26": "33",
  "PTA0": "34",
  "PTA1": "35",
  "PTA2": "36",
  "PTA3": "37",
  "PTA4": "38",
  "PTA5": "39",
  "PTA6": "40",
  "PTA7": "41",
  "PTA12": "42",
  "PTA13": "43",
  "PTA14": "44",
  "PTA15": "45",
  "PTA16": "46",
  "PTA17": "47",
  "VDD_48": "48",
  "VSS_49": "49",
  "PTA18": "50",
  "PTA19": "51",
  "PTA20": "52",
  "PTB0/LLWU_P5": "53",
  "PTB1": "54",
  "PTB2_55": "55",
  "PTB3": "56",
  "PTB7": "57",
  "PTB8": "58",
  "PTB9": "59",
  "PTB10": "60",
  "PTB11": "61",
  "PTB16": "62",
  "PTB17": "63",
  "PTB18": "64",
  "PTB19": "65",
  "PTB2_66": "66",
  "PTB21": "67",
  "PTB22": "68",
  "PTB23": "69",
  "PTC0": "70",
  "PTC1/LLWU_P6/RTC_CLKIN": "71",
  "PTC2": "72",
  "PTC3/LLWU_P7": "73",
  "VSS_74": "74",
  "VLL3": "75",
  "VLL2/PTC20": "76",
  "VLL1/PTC21": "77",
  "VCAP2/PTC22": "78",
  "VCAP1/PTC23": "79",
  "PTC4/LLWU_P8": "80",
  "PTC5/LLWU_P9": "81",
  "PTC6/LLWU_P10": "82",
  "PTC7": "83",
  "PTC8": "84",
  "PTC9": "85",
  "PTC10": "86",
  "PTC11": "87",
  "PTC12": "88",
  "PTC13": "89",
  "PTC16": "90",
  "PTC17": "91",
  "PTC18": "92",
  "PTD0": "93",
  "PTD1": "94",
  "PTD2": "95",
  "PTD3": "96",
  "PTD4/LLWU_P14": "97",
  "PTD5": "98",
  "PTD6/LLWU_P15": "99",
  "PTD7": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", VDD_8: "power_in", VSS_9: "power_in", USB0_DP: "bidirectional", USB0_DM: "bidirectional", VOUT33: "power_out", VREGIN: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", VSS_29: "passive", VDD_30: "passive", PTE24: "bidirectional", PTE25: "bidirectional", PTE26: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", PTA14: "bidirectional", PTA15: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", VDD_48: "passive", VSS_49: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTB1: "bidirectional", PTB2_55: "bidirectional", PTB3: "bidirectional", PTB7: "bidirectional", PTB8: "bidirectional", PTB9: "bidirectional", PTB10: "bidirectional", PTB11: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTB2_66: "bidirectional", PTB21: "bidirectional", PTB22: "bidirectional", PTB23: "bidirectional", PTC0: "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTC2: "bidirectional", "PTC3/LLWU_P7": "bidirectional", VSS_74: "passive", VLL3: "power_out", "VLL2/PTC20": "power_out", "VLL1/PTC21": "power_out", "VCAP2/PTC22": "passive", "VCAP1/PTC23": "passive", "PTC4/LLWU_P8": "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTC12: "bidirectional", PTC13: "bidirectional", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD5: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL46Z128VLL4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL46 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device/OTG, Segment LCD, TSI, MAPBGA-121
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL46Z256VMC4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*8x8mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL46P121M48SF4.pdf
 * Keywords: Kinetis KL46 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-121_8x8mm_Layout11x11_P0.65mm.
 */
export class MKL46Z256VMC4 extends Component.withPins({
  "PTD7": "A1",
  "PTD5": "A2",
  "PTD4/LLWU_P14": "A3",
  "NC_A4": "A4",
  "NC_A5": "A5",
  "PTC13": "A6",
  "PTC8": "A7",
  "PTC4/LLWU_P8": "A8",
  "VLL1/PTC21": "A9",
  "VLL2/PTC20": "A10",
  "VLL3": "A11",
  "NC_B1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC18": "B4",
  "NC_B5": "B5",
  "PTC12": "B6",
  "PTC7": "B7",
  "PTC3/LLWU_P7": "B8",
  "PTC0": "B9",
  "PTB16": "B10",
  "VCAP2/PTC22": "B11",
  "NC_C1": "C1",
  "NC_C2": "C2",
  "PTD2": "C3",
  "PTC17": "C4",
  "PTC11": "C5",
  "PTC10": "C6",
  "PTC6/LLWU_P10": "C7",
  "PTC2": "C8",
  "PTB19": "C9",
  "PTB11": "C10",
  "VCAP1/PTC23": "C11",
  "NC_D1": "D1",
  "NC_D2": "D2",
  "PTD1": "D3",
  "PTD0": "D4",
  "PTC16": "D5",
  "PTC9": "D6",
  "PTC5/LLWU_P9": "D7",
  "PTC1/LLWU_P6/RTC_CLKIN": "D8",
  "PTB18": "D9",
  "PTB10": "D10",
  "PTB8": "D11",
  "NC_E1": "E1",
  "PTE2": "E2",
  "PTE1": "E3",
  "PTE0": "E4",
  "VDD_E5": "E5",
  "VDD_E6": "E6",
  "VDD_E7": "E7",
  "PTB23": "E8",
  "PTB17": "E9",
  "PTB9": "E10",
  "PTB7": "E11",
  "USB0_DP": "F1",
  "USB0_DM": "F2",
  "PTE6": "F3",
  "PTE3": "F4",
  "VDDA": "F5",
  "VSSA": "F6",
  "VSS_F7": "F7",
  "PTB22": "F8",
  "PTB21": "F9",
  "PTB2_F10": "F10",
  "NC_F11": "F11",
  "VOUT33": "G1",
  "VREGIN": "G2",
  "VSS_G3": "G3",
  "PTE5": "G4",
  "VREFH": "G5",
  "VREFL": "G6",
  "VSS_G7": "G7",
  "PTB3": "G8",
  "PTB2_G9": "G9",
  "PTB1": "G10",
  "PTB0/LLWU_P5": "G11",
  "PTE16": "H1",
  "PTE17": "H2",
  "NC_H3": "H3",
  "PTA7": "H4",
  "PTE24": "H5",
  "PTE26": "H6",
  "PTE4": "H7",
  "PTA1": "H8",
  "PTA3": "H9",
  "PTA17": "H10",
  "NC_H11": "H11",
  "PTE18": "J1",
  "PTE19": "J2",
  "NC_J3": "J3",
  "NC_J4": "J4",
  "PTE25": "J5",
  "PTA0": "J6",
  "PTA2": "J7",
  "PTA4": "J8",
  "NC_J9": "J9",
  "PTA16": "J10",
  "PTA20": "J11",
  "PTE20": "K1",
  "PTE21": "K2",
  "PTA6": "K3",
  "NC_K4": "K4",
  "PTE30": "K5",
  "VDD_K6": "K6",
  "PTA5": "K7",
  "PTA12": "K8",
  "PTA14": "K9",
  "VSS_K10": "K10",
  "PTA19": "K11",
  "PTE22": "L1",
  "PTE23": "L2",
  "PTE29": "L3",
  "PTE31": "L4",
  "VSS_L5": "L5",
  "VSS_L6": "L6",
  "NC_L7": "L7",
  "PTA13": "L8",
  "PTA15": "L9",
  "VDD_L10": "L10",
  "PTA18": "L11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD7: "bidirectional", PTD5: "bidirectional", "PTD4/LLWU_P14": "bidirectional", NC_A4: "no_connect", NC_A5: "no_connect", PTC13: "bidirectional", PTC8: "bidirectional", "PTC4/LLWU_P8": "bidirectional", "VLL1/PTC21": "power_out", "VLL2/PTC20": "power_out", VLL3: "power_out", NC_B1: "no_connect", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC18: "bidirectional", NC_B5: "no_connect", PTC12: "bidirectional", PTC7: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTC0: "bidirectional", PTB16: "bidirectional", "VCAP2/PTC22": "passive", NC_C1: "no_connect", NC_C2: "no_connect", PTD2: "bidirectional", PTC17: "bidirectional", PTC11: "bidirectional", PTC10: "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC2: "bidirectional", PTB19: "bidirectional", PTB11: "bidirectional", "VCAP1/PTC23": "passive", NC_D1: "no_connect", NC_D2: "no_connect", PTD1: "bidirectional", PTD0: "bidirectional", PTC16: "bidirectional", PTC9: "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB18: "bidirectional", PTB10: "bidirectional", PTB8: "bidirectional", NC_E1: "no_connect", PTE2: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", VDD_E5: "power_in", VDD_E6: "passive", VDD_E7: "passive", PTB23: "bidirectional", PTB17: "bidirectional", PTB9: "bidirectional", PTB7: "bidirectional", USB0_DP: "bidirectional", USB0_DM: "bidirectional", PTE6: "bidirectional", PTE3: "bidirectional", VDDA: "power_in", VSSA: "power_in", VSS_F7: "power_in", PTB22: "bidirectional", PTB21: "bidirectional", PTB2_F10: "bidirectional", NC_F11: "no_connect", VOUT33: "power_out", VREGIN: "power_in", VSS_G3: "passive", PTE5: "bidirectional", VREFH: "power_in", VREFL: "power_in", VSS_G7: "passive", PTB3: "bidirectional", PTB2_G9: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", NC_H3: "no_connect", PTA7: "bidirectional", PTE24: "bidirectional", PTE26: "bidirectional", PTE4: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTA17: "bidirectional", NC_H11: "no_connect", PTE18: "bidirectional", PTE19: "bidirectional", NC_J3: "no_connect", NC_J4: "no_connect", PTE25: "bidirectional", PTA0: "bidirectional", PTA2: "bidirectional", PTA4: "bidirectional", NC_J9: "no_connect", PTA16: "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTA6: "bidirectional", NC_K4: "no_connect", PTE30: "bidirectional", VDD_K6: "passive", PTA5: "bidirectional", PTA12: "bidirectional", PTA14: "bidirectional", VSS_K10: "passive", PTA19: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", PTE29: "bidirectional", PTE31: "bidirectional", VSS_L5: "passive", VSS_L6: "passive", NC_L7: "no_connect", PTA13: "bidirectional", PTA15: "bidirectional", VDD_L10: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL46Z256VMC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL46 series, 48-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB SRAM, USB FS Device/OTG, Segment LCD, TSI, MAPBGA-121
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL46Z128VMC4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*8x8mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL46P121M48SF4.pdf
 * Keywords: Kinetis KL46 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-121_8x8mm_Layout11x11_P0.65mm.
 */
export class MKL46Z128VMC4 extends Component.withPins({
  "PTD7": "A1",
  "PTD5": "A2",
  "PTD4/LLWU_P14": "A3",
  "NC_A4": "A4",
  "NC_A5": "A5",
  "PTC13": "A6",
  "PTC8": "A7",
  "PTC4/LLWU_P8": "A8",
  "VLL1/PTC21": "A9",
  "VLL2/PTC20": "A10",
  "VLL3": "A11",
  "NC_B1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "PTC18": "B4",
  "NC_B5": "B5",
  "PTC12": "B6",
  "PTC7": "B7",
  "PTC3/LLWU_P7": "B8",
  "PTC0": "B9",
  "PTB16": "B10",
  "VCAP2/PTC22": "B11",
  "NC_C1": "C1",
  "NC_C2": "C2",
  "PTD2": "C3",
  "PTC17": "C4",
  "PTC11": "C5",
  "PTC10": "C6",
  "PTC6/LLWU_P10": "C7",
  "PTC2": "C8",
  "PTB19": "C9",
  "PTB11": "C10",
  "VCAP1/PTC23": "C11",
  "NC_D1": "D1",
  "NC_D2": "D2",
  "PTD1": "D3",
  "PTD0": "D4",
  "PTC16": "D5",
  "PTC9": "D6",
  "PTC5/LLWU_P9": "D7",
  "PTC1/LLWU_P6/RTC_CLKIN": "D8",
  "PTB18": "D9",
  "PTB10": "D10",
  "PTB8": "D11",
  "NC_E1": "E1",
  "PTE2": "E2",
  "PTE1": "E3",
  "PTE0": "E4",
  "VDD_E5": "E5",
  "VDD_E6": "E6",
  "VDD_E7": "E7",
  "PTB23": "E8",
  "PTB17": "E9",
  "PTB9": "E10",
  "PTB7": "E11",
  "USB0_DP": "F1",
  "USB0_DM": "F2",
  "PTE6": "F3",
  "PTE3": "F4",
  "VDDA": "F5",
  "VSSA": "F6",
  "VSS_F7": "F7",
  "PTB22": "F8",
  "PTB21": "F9",
  "PTB2_F10": "F10",
  "NC_F11": "F11",
  "VOUT33": "G1",
  "VREGIN": "G2",
  "VSS_G3": "G3",
  "PTE5": "G4",
  "VREFH": "G5",
  "VREFL": "G6",
  "VSS_G7": "G7",
  "PTB3": "G8",
  "PTB2_G9": "G9",
  "PTB1": "G10",
  "PTB0/LLWU_P5": "G11",
  "PTE16": "H1",
  "PTE17": "H2",
  "NC_H3": "H3",
  "PTA7": "H4",
  "PTE24": "H5",
  "PTE26": "H6",
  "PTE4": "H7",
  "PTA1": "H8",
  "PTA3": "H9",
  "PTA17": "H10",
  "NC_H11": "H11",
  "PTE18": "J1",
  "PTE19": "J2",
  "NC_J3": "J3",
  "NC_J4": "J4",
  "PTE25": "J5",
  "PTA0": "J6",
  "PTA2": "J7",
  "PTA4": "J8",
  "NC_J9": "J9",
  "PTA16": "J10",
  "PTA20": "J11",
  "PTE20": "K1",
  "PTE21": "K2",
  "PTA6": "K3",
  "NC_K4": "K4",
  "PTE30": "K5",
  "VDD_K6": "K6",
  "PTA5": "K7",
  "PTA12": "K8",
  "PTA14": "K9",
  "VSS_K10": "K10",
  "PTA19": "K11",
  "PTE22": "L1",
  "PTE23": "L2",
  "PTE29": "L3",
  "PTE31": "L4",
  "VSS_L5": "L5",
  "VSS_L6": "L6",
  "NC_L7": "L7",
  "PTA13": "L8",
  "PTA15": "L9",
  "VDD_L10": "L10",
  "PTA18": "L11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTD7: "bidirectional", PTD5: "bidirectional", "PTD4/LLWU_P14": "bidirectional", NC_A4: "no_connect", NC_A5: "no_connect", PTC13: "bidirectional", PTC8: "bidirectional", "PTC4/LLWU_P8": "bidirectional", "VLL1/PTC21": "power_out", "VLL2/PTC20": "power_out", VLL3: "power_out", NC_B1: "no_connect", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", PTC18: "bidirectional", NC_B5: "no_connect", PTC12: "bidirectional", PTC7: "bidirectional", "PTC3/LLWU_P7": "bidirectional", PTC0: "bidirectional", PTB16: "bidirectional", "VCAP2/PTC22": "passive", NC_C1: "no_connect", NC_C2: "no_connect", PTD2: "bidirectional", PTC17: "bidirectional", PTC11: "bidirectional", PTC10: "bidirectional", "PTC6/LLWU_P10": "bidirectional", PTC2: "bidirectional", PTB19: "bidirectional", PTB11: "bidirectional", "VCAP1/PTC23": "passive", NC_D1: "no_connect", NC_D2: "no_connect", PTD1: "bidirectional", PTD0: "bidirectional", PTC16: "bidirectional", PTC9: "bidirectional", "PTC5/LLWU_P9": "bidirectional", "PTC1/LLWU_P6/RTC_CLKIN": "bidirectional", PTB18: "bidirectional", PTB10: "bidirectional", PTB8: "bidirectional", NC_E1: "no_connect", PTE2: "bidirectional", PTE1: "bidirectional", PTE0: "bidirectional", VDD_E5: "power_in", VDD_E6: "passive", VDD_E7: "passive", PTB23: "bidirectional", PTB17: "bidirectional", PTB9: "bidirectional", PTB7: "bidirectional", USB0_DP: "bidirectional", USB0_DM: "bidirectional", PTE6: "bidirectional", PTE3: "bidirectional", VDDA: "power_in", VSSA: "power_in", VSS_F7: "power_in", PTB22: "bidirectional", PTB21: "bidirectional", PTB2_F10: "bidirectional", NC_F11: "no_connect", VOUT33: "power_out", VREGIN: "power_in", VSS_G3: "passive", PTE5: "bidirectional", VREFH: "power_in", VREFL: "power_in", VSS_G7: "passive", PTB3: "bidirectional", PTB2_G9: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTE16: "bidirectional", PTE17: "bidirectional", NC_H3: "no_connect", PTA7: "bidirectional", PTE24: "bidirectional", PTE26: "bidirectional", PTE4: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTA17: "bidirectional", NC_H11: "no_connect", PTE18: "bidirectional", PTE19: "bidirectional", NC_J3: "no_connect", NC_J4: "no_connect", PTE25: "bidirectional", PTA0: "bidirectional", PTA2: "bidirectional", PTA4: "bidirectional", NC_J9: "no_connect", PTA16: "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTA6: "bidirectional", NC_K4: "no_connect", PTE30: "bidirectional", VDD_K6: "passive", PTA5: "bidirectional", PTA12: "bidirectional", PTA14: "bidirectional", VSS_K10: "passive", PTA19: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", PTE29: "bidirectional", PTE31: "bidirectional", VSS_L5: "passive", VSS_L6: "passive", NC_L7: "no_connect", PTA13: "bidirectional", PTA15: "bidirectional", VDD_L10: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL46Z128VMC4";
  override referencePrefix = "U";
}

/**
 * Kinetis KL46 series, 48-MHz/32-bit ARM Cortex-M0+, 256 kB flash, 32 kB SRAM, USB FS Device/OTG, Segment LCD, TSI, MAPBGA-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKL46Z256VMP4`. Reference prefix: `U`.
 * Footprint filters: XFBGA*5.0x5.0mm*P0.5mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/KL46P121M48SF4.pdf
 * Keywords: Kinetis KL46 ARM Cortex M0+.
 * Default footprint: Package_BGA:XFBGA-64_5.0x5.0mm_Layout8x8_P0.5mm.
 */
export class MKL46Z256VMP4 extends Component.withPins({
  "PTE0": "A1",
  "PTD7": "A2",
  "PTD4/LLWU_P14": "A3",
  "PTD1": "A4",
  "VCAP1/PTC23": "A5",
  "VLL2/PTC20": "A6",
  "PTC6/LLWU_P10": "A7",
  "PTC5/LLWU_P9": "A8",
  "PTE1": "B1",
  "PTD6/LLWU_P15": "B2",
  "PTD3": "B3",
  "VCAP2/PTC22": "B4",
  "VLL1/PTC21": "B5",
  "PTC7": "B6",
  "PTC2": "B7",
  "PTC4/LLWU_P8": "B8",
  "PTD5": "C1",
  "PTD2": "C2",
  "PTD0": "C3",
  "VSS_C4": "C4",
  "VLL3": "C5",
  "PTC1/LLWU_P6": "C6",
  "PTB19": "C7",
  "PTC3/LLWU_P7": "C8",
  "USB0_DM": "D1",
  "VREGIN": "D2",
  "PTA0": "D3",
  "PTA1": "D4",
  "PTA3": "D5",
  "PTB18": "D6",
  "PTB17": "D7",
  "PTC0": "D8",
  "USB0_DP": "E1",
  "VOUT33": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "PTA2": "E5",
  "PTB16": "E6",
  "PTB2": "E7",
  "PTB3": "E8",
  "PTE21": "F1",
  "PTE23": "F2",
  "VSSA": "F3",
  "VDDA": "F4",
  "PTA5": "F5",
  "PTB1": "F6",
  "PTB0/LLWU_P5": "F7",
  "PTA20": "F8",
  "PTE20": "G1",
  "PTE22": "G2",
  "VREFL": "G3",
  "VREFH": "G4",
  "PTA4": "G5",
  "PTA13": "G6",
  "VDD_G7": "G7",
  "PTA19": "G8",
  "PTE29": "H1",
  "PTE30": "H2",
  "PTE31": "H3",
  "PTE24": "H4",
  "PTE25": "H5",
  "PTA12": "H6",
  "VSS_H7": "H7",
  "PTA18": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTD7: "bidirectional", "PTD4/LLWU_P14": "bidirectional", PTD1: "bidirectional", "VCAP1/PTC23": "passive", "VLL2/PTC20": "power_out", "PTC6/LLWU_P10": "bidirectional", "PTC5/LLWU_P9": "bidirectional", PTE1: "bidirectional", "PTD6/LLWU_P15": "bidirectional", PTD3: "bidirectional", "VCAP2/PTC22": "passive", "VLL1/PTC21": "power_out", PTC7: "bidirectional", PTC2: "bidirectional", "PTC4/LLWU_P8": "bidirectional", PTD5: "bidirectional", PTD2: "bidirectional", PTD0: "bidirectional", VSS_C4: "power_in", VLL3: "power_out", "PTC1/LLWU_P6": "bidirectional", PTB19: "bidirectional", "PTC3/LLWU_P7": "bidirectional", USB0_DM: "bidirectional", VREGIN: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA3: "bidirectional", PTB18: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", USB0_DP: "bidirectional", VOUT33: "power_out", VSS_E3: "passive", VDD_E4: "power_in", PTA2: "bidirectional", PTB16: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTE21: "bidirectional", PTE23: "bidirectional", VSSA: "power_in", VDDA: "power_in", PTA5: "bidirectional", PTB1: "bidirectional", "PTB0/LLWU_P5": "bidirectional", PTA20: "bidirectional", PTE20: "bidirectional", PTE22: "bidirectional", VREFL: "power_in", VREFH: "power_in", PTA4: "bidirectional", PTA13: "bidirectional", VDD_G7: "passive", PTA19: "bidirectional", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA12: "bidirectional", VSS_H7: "passive", PTA18: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKL46Z256VMP4";
  override referencePrefix = "U";
}

/**
 * Kinetis KV11 series, 75-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB RAM, Entry-Level, Real-time Motor Control, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKV11Z128VLF7`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/KV11P64M75.pdf
 * Keywords: Kinetis KV11 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MKV11Z128VLF7 extends Component.withPins({
  "VDD_1": "1",
  "VSS_2": "2",
  "PTE16": "3",
  "PTE17": "4",
  "PTE18": "5",
  "PTE19": "6",
  "PTE20": "7",
  "PTE21": "8",
  "VDDA": "9",
  "VREFH": "10",
  "VREFL": "11",
  "VSSA": "12",
  "PTE29": "13",
  "PTE30": "14",
  "PTE24": "15",
  "PTE25": "16",
  "PTA0": "17",
  "PTA1": "18",
  "PTA2": "19",
  "PTA3": "20",
  "PTA4": "21",
  "VDD_22": "22",
  "VSS_23": "23",
  "PTA18": "24",
  "PTA19": "25",
  "PTA20": "26",
  "PTB0": "27",
  "PTB1": "28",
  "PTB2": "29",
  "PTB3": "30",
  "PTB16": "31",
  "PTB17": "32",
  "PTC0": "33",
  "PTC1": "34",
  "PTC2": "35",
  "PTC3": "36",
  "PTC4": "37",
  "PTC5": "38",
  "PTC6": "39",
  "PTC7": "40",
  "PTD0": "41",
  "PTD1": "42",
  "PTD2": "43",
  "PTD3": "44",
  "PTD4": "45",
  "PTD5": "46",
  "PTD6": "47",
  "PTD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", VSS_2: "power_in", PTE16: "bidirectional", PTE17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", VDD_22: "power_in", VSS_23: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKV11Z128VLF7";
  override referencePrefix = "U";
}

/**
 * Kinetis KV11 series, 75-MHz/32-bit ARM Cortex-M0+, 128 kB flash, 16 kB RAM, Entry-Level, Real-time Motor Control, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKV11Z128VLH7`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/KV11P64M75.pdf
 * Keywords: Kinetis KV11 ARM Cortex M0+.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MKV11Z128VLH7 extends Component.withPins({
  "PTE0": "1",
  "PTE1": "2",
  "VDD_3": "3",
  "VSS_4": "4",
  "PTE16": "5",
  "PTR17": "6",
  "PTE18": "7",
  "PTE19": "8",
  "PTE20": "9",
  "PTE21": "10",
  "PTE22": "11",
  "PTE23": "12",
  "VDDA": "13",
  "VREFH": "14",
  "VREFL": "15",
  "VSSA": "16",
  "PTE29": "17",
  "PTE30": "18",
  "PTE31": "19",
  "PTE24": "20",
  "PTE25": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA3": "25",
  "PTA4": "26",
  "PTA5": "27",
  "PTA12": "28",
  "PTA13": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "PTA18": "32",
  "PTA19": "33",
  "PTA20": "34",
  "PTB0": "35",
  "PTB1": "36",
  "PTB2": "37",
  "PTB3": "38",
  "PTB16": "39",
  "PTB17": "40",
  "PTB18": "41",
  "PTB19": "42",
  "PTC0": "43",
  "PTC1": "44",
  "PTC2": "45",
  "PTC3": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PTC4": "49",
  "PTC5": "50",
  "PTC6": "51",
  "PTC7": "52",
  "PTC8": "53",
  "PTC9": "54",
  "PTC10": "55",
  "PTC11": "56",
  "PTD0": "57",
  "PTD1": "58",
  "PTD2": "59",
  "PTD3": "60",
  "PTD4": "61",
  "PTD5": "62",
  "PTD6": "63",
  "PTD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTE0: "bidirectional", PTE1: "bidirectional", VDD_3: "power_in", VSS_4: "power_in", PTE16: "bidirectional", PTR17: "bidirectional", PTE18: "bidirectional", PTE19: "bidirectional", PTE20: "bidirectional", PTE21: "bidirectional", PTE22: "bidirectional", PTE23: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTE29: "bidirectional", PTE30: "bidirectional", PTE31: "bidirectional", PTE24: "bidirectional", PTE25: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA12: "bidirectional", PTA13: "bidirectional", VDD_30: "power_in", VSS_31: "passive", PTA18: "bidirectional", PTA19: "bidirectional", PTA20: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", PTB19: "bidirectional", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", PTC7: "bidirectional", PTC8: "bidirectional", PTC9: "bidirectional", PTC10: "bidirectional", PTC11: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKV11Z128VLH7";
  override referencePrefix = "U";
}

/**
 * Kinetis KW41Z-2.4 GHz, Arm Cortex-M0+, 512kB Flash, 128kB SRAM, Multi Mode: Bluetooth LE and 802.15.4 Wireless Radio and generic FSK, LQFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKW41Z512VHT`. Reference prefix: `U`.
 * Footprint filters: NXP*LQFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MKW41Z512.pdf
 * Keywords: Kinetis KW41Z ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:NXP_LQFN-48-1EP_7x7mm_P0.5mm_EP3.5x3.5mm_16xMask0.45x0.45_ThermalVias.
 */
export class MKW41Z512VHT extends Component.withPins({
  "PTA0": "1",
  "PTA1": "2",
  "PTA2": "3",
  "PTA16": "4",
  "PTA17": "5",
  "PTA18": "6",
  "PTA19": "7",
  "PSWITCH": "8",
  "DCDC_CFG": "9",
  "VDCDC_IN": "10",
  "DCDC_LP": "11",
  "DCDC_LN": "12",
  "DCDC_GND": "13",
  "VDD_1P8OUT": "14",
  "VDD_1P5OUT_PMCIN": "15",
  "PTB0": "16",
  "PTB1": "17",
  "PTB2": "18",
  "PTB3": "19",
  "VDD_0": "20",
  "PTB16": "21",
  "PTB17": "22",
  "PTB18": "23",
  "ADC0_DP0/CMP0_IN0": "24",
  "ADC0_DM0/CMP0_IN1": "25",
  "VSSA": "26",
  "VREFH/VREF_OUT": "27",
  "VDDA": "28",
  "XTAL_OUT": "29",
  "EXTAL": "30",
  "XTAL": "31",
  "VDD_RF3": "32",
  "ANT": "33",
  "GANT": "34",
  "VDD_RF2": "35",
  "VDD_RF1": "36",
  "PTC1": "37",
  "PTC2": "38",
  "PTC3": "39",
  "PTC4": "40",
  "PTC5": "41",
  "PTC6": "42",
  "PTC7": "43",
  "VDD_1": "44",
  "PTC16": "45",
  "PTC17": "46",
  "PTC18": "47",
  "PTC19": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", PSWITCH: "input", DCDC_CFG: "input", VDCDC_IN: "power_in", DCDC_LP: "passive", DCDC_LN: "passive", DCDC_GND: "power_in", VDD_1P8OUT: "power_out", VDD_1P5OUT_PMCIN: "power_out", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDD_0: "power_in", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", "ADC0_DP0/CMP0_IN0": "input", "ADC0_DM0/CMP0_IN1": "input", VSSA: "power_in", "VREFH/VREF_OUT": "bidirectional", VDDA: "power_in", XTAL_OUT: "output", EXTAL: "input", XTAL: "input", VDD_RF3: "power_in", ANT: "passive", GANT: "power_in", VDD_RF2: "power_in", VDD_RF1: "power_in", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", PTC7: "bidirectional", VDD_1: "power_in", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTC19: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKW41Z512VHT";
  override referencePrefix = "U";
}

/**
 * Kinetis KW41Z-2.4 GHz, Arm Cortex-M0+, 256kB Flash, 64kB SRAM, generic FSK, LQFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKW21Z256VHT`. Reference prefix: `U`.
 * Footprint filters: NXP*LQFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MKW41Z512.pdf
 * Keywords: Kinetis KW21Z ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:NXP_LQFN-48-1EP_7x7mm_P0.5mm_EP3.5x3.5mm_16xMask0.45x0.45_ThermalVias.
 */
export class MKW21Z256VHT extends Component.withPins({
  "PTA0": "1",
  "PTA1": "2",
  "PTA2": "3",
  "PTA16": "4",
  "PTA17": "5",
  "PTA18": "6",
  "PTA19": "7",
  "PSWITCH": "8",
  "DCDC_CFG": "9",
  "VDCDC_IN": "10",
  "DCDC_LP": "11",
  "DCDC_LN": "12",
  "DCDC_GND": "13",
  "VDD_1P8OUT": "14",
  "VDD_1P5OUT_PMCIN": "15",
  "PTB0": "16",
  "PTB1": "17",
  "PTB2": "18",
  "PTB3": "19",
  "VDD_0": "20",
  "PTB16": "21",
  "PTB17": "22",
  "PTB18": "23",
  "ADC0_DP0/CMP0_IN0": "24",
  "ADC0_DM0/CMP0_IN1": "25",
  "VSSA": "26",
  "VREFH/VREF_OUT": "27",
  "VDDA": "28",
  "XTAL_OUT": "29",
  "EXTAL": "30",
  "XTAL": "31",
  "VDD_RF3": "32",
  "ANT": "33",
  "GANT": "34",
  "VDD_RF2": "35",
  "VDD_RF1": "36",
  "PTC1": "37",
  "PTC2": "38",
  "PTC3": "39",
  "PTC4": "40",
  "PTC5": "41",
  "PTC6": "42",
  "PTC7": "43",
  "VDD_1": "44",
  "PTC16": "45",
  "PTC17": "46",
  "PTC18": "47",
  "PTC19": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", PSWITCH: "input", DCDC_CFG: "input", VDCDC_IN: "power_in", DCDC_LP: "passive", DCDC_LN: "passive", DCDC_GND: "power_in", VDD_1P8OUT: "power_out", VDD_1P5OUT_PMCIN: "power_out", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDD_0: "power_in", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", "ADC0_DP0/CMP0_IN0": "input", "ADC0_DM0/CMP0_IN1": "input", VSSA: "power_in", "VREFH/VREF_OUT": "bidirectional", VDDA: "power_in", XTAL_OUT: "output", EXTAL: "input", XTAL: "input", VDD_RF3: "power_in", ANT: "passive", GANT: "power_in", VDD_RF2: "power_in", VDD_RF1: "power_in", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", PTC7: "bidirectional", VDD_1: "power_in", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTC19: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKW21Z256VHT";
  override referencePrefix = "U";
}

/**
 * Kinetis KW41Z-2.4 GHz, Arm Cortex-M0+, 512kB Flash, 128kB SRAM, generic FSK, LQFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKW21Z512VHT`. Reference prefix: `U`.
 * Footprint filters: NXP*LQFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MKW41Z512.pdf
 * Keywords: Kinetis KW21Z ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:NXP_LQFN-48-1EP_7x7mm_P0.5mm_EP3.5x3.5mm_16xMask0.45x0.45_ThermalVias.
 */
export class MKW21Z512VHT extends Component.withPins({
  "PTA0": "1",
  "PTA1": "2",
  "PTA2": "3",
  "PTA16": "4",
  "PTA17": "5",
  "PTA18": "6",
  "PTA19": "7",
  "PSWITCH": "8",
  "DCDC_CFG": "9",
  "VDCDC_IN": "10",
  "DCDC_LP": "11",
  "DCDC_LN": "12",
  "DCDC_GND": "13",
  "VDD_1P8OUT": "14",
  "VDD_1P5OUT_PMCIN": "15",
  "PTB0": "16",
  "PTB1": "17",
  "PTB2": "18",
  "PTB3": "19",
  "VDD_0": "20",
  "PTB16": "21",
  "PTB17": "22",
  "PTB18": "23",
  "ADC0_DP0/CMP0_IN0": "24",
  "ADC0_DM0/CMP0_IN1": "25",
  "VSSA": "26",
  "VREFH/VREF_OUT": "27",
  "VDDA": "28",
  "XTAL_OUT": "29",
  "EXTAL": "30",
  "XTAL": "31",
  "VDD_RF3": "32",
  "ANT": "33",
  "GANT": "34",
  "VDD_RF2": "35",
  "VDD_RF1": "36",
  "PTC1": "37",
  "PTC2": "38",
  "PTC3": "39",
  "PTC4": "40",
  "PTC5": "41",
  "PTC6": "42",
  "PTC7": "43",
  "VDD_1": "44",
  "PTC16": "45",
  "PTC17": "46",
  "PTC18": "47",
  "PTC19": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", PSWITCH: "input", DCDC_CFG: "input", VDCDC_IN: "power_in", DCDC_LP: "passive", DCDC_LN: "passive", DCDC_GND: "power_in", VDD_1P8OUT: "power_out", VDD_1P5OUT_PMCIN: "power_out", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDD_0: "power_in", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", "ADC0_DP0/CMP0_IN0": "input", "ADC0_DM0/CMP0_IN1": "input", VSSA: "power_in", "VREFH/VREF_OUT": "bidirectional", VDDA: "power_in", XTAL_OUT: "output", EXTAL: "input", XTAL: "input", VDD_RF3: "power_in", ANT: "passive", GANT: "power_in", VDD_RF2: "power_in", VDD_RF1: "power_in", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", PTC7: "bidirectional", VDD_1: "power_in", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTC19: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKW21Z512VHT";
  override referencePrefix = "U";
}

/**
 * Kinetis KW31Z-2.4 GHz, Arm Cortex-M0+, 256kB Flash, 64kB SRAM, Dual Mode: Bluetooth LE and generic FSK, LQFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKW31Z256VHT`. Reference prefix: `U`.
 * Footprint filters: NXP*LQFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MKW41Z512.pdf
 * Keywords: Kinetis KW31Z ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:NXP_LQFN-48-1EP_7x7mm_P0.5mm_EP3.5x3.5mm_16xMask0.45x0.45_ThermalVias.
 */
export class MKW31Z256VHT extends Component.withPins({
  "PTA0": "1",
  "PTA1": "2",
  "PTA2": "3",
  "PTA16": "4",
  "PTA17": "5",
  "PTA18": "6",
  "PTA19": "7",
  "PSWITCH": "8",
  "DCDC_CFG": "9",
  "VDCDC_IN": "10",
  "DCDC_LP": "11",
  "DCDC_LN": "12",
  "DCDC_GND": "13",
  "VDD_1P8OUT": "14",
  "VDD_1P5OUT_PMCIN": "15",
  "PTB0": "16",
  "PTB1": "17",
  "PTB2": "18",
  "PTB3": "19",
  "VDD_0": "20",
  "PTB16": "21",
  "PTB17": "22",
  "PTB18": "23",
  "ADC0_DP0/CMP0_IN0": "24",
  "ADC0_DM0/CMP0_IN1": "25",
  "VSSA": "26",
  "VREFH/VREF_OUT": "27",
  "VDDA": "28",
  "XTAL_OUT": "29",
  "EXTAL": "30",
  "XTAL": "31",
  "VDD_RF3": "32",
  "ANT": "33",
  "GANT": "34",
  "VDD_RF2": "35",
  "VDD_RF1": "36",
  "PTC1": "37",
  "PTC2": "38",
  "PTC3": "39",
  "PTC4": "40",
  "PTC5": "41",
  "PTC6": "42",
  "PTC7": "43",
  "VDD_1": "44",
  "PTC16": "45",
  "PTC17": "46",
  "PTC18": "47",
  "PTC19": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", PSWITCH: "input", DCDC_CFG: "input", VDCDC_IN: "power_in", DCDC_LP: "passive", DCDC_LN: "passive", DCDC_GND: "power_in", VDD_1P8OUT: "power_out", VDD_1P5OUT_PMCIN: "power_out", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDD_0: "power_in", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", "ADC0_DP0/CMP0_IN0": "input", "ADC0_DM0/CMP0_IN1": "input", VSSA: "power_in", "VREFH/VREF_OUT": "bidirectional", VDDA: "power_in", XTAL_OUT: "output", EXTAL: "input", XTAL: "input", VDD_RF3: "power_in", ANT: "passive", GANT: "power_in", VDD_RF2: "power_in", VDD_RF1: "power_in", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", PTC7: "bidirectional", VDD_1: "power_in", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTC19: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKW31Z256VHT";
  override referencePrefix = "U";
}

/**
 * Kinetis KW41Z-2.4 GHz, Arm Cortex-M0+, 512kB Flash, 128kB SRAM, Dual Mode: Bluetooth LE and generic FSK, LQFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKW31Z512VHT`. Reference prefix: `U`.
 * Footprint filters: NXP*LQFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MKW41Z512.pdf
 * Keywords: Kinetis KW31Z ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:NXP_LQFN-48-1EP_7x7mm_P0.5mm_EP3.5x3.5mm_16xMask0.45x0.45_ThermalVias.
 */
export class MKW31Z512VHT extends Component.withPins({
  "PTA0": "1",
  "PTA1": "2",
  "PTA2": "3",
  "PTA16": "4",
  "PTA17": "5",
  "PTA18": "6",
  "PTA19": "7",
  "PSWITCH": "8",
  "DCDC_CFG": "9",
  "VDCDC_IN": "10",
  "DCDC_LP": "11",
  "DCDC_LN": "12",
  "DCDC_GND": "13",
  "VDD_1P8OUT": "14",
  "VDD_1P5OUT_PMCIN": "15",
  "PTB0": "16",
  "PTB1": "17",
  "PTB2": "18",
  "PTB3": "19",
  "VDD_0": "20",
  "PTB16": "21",
  "PTB17": "22",
  "PTB18": "23",
  "ADC0_DP0/CMP0_IN0": "24",
  "ADC0_DM0/CMP0_IN1": "25",
  "VSSA": "26",
  "VREFH/VREF_OUT": "27",
  "VDDA": "28",
  "XTAL_OUT": "29",
  "EXTAL": "30",
  "XTAL": "31",
  "VDD_RF3": "32",
  "ANT": "33",
  "GANT": "34",
  "VDD_RF2": "35",
  "VDD_RF1": "36",
  "PTC1": "37",
  "PTC2": "38",
  "PTC3": "39",
  "PTC4": "40",
  "PTC5": "41",
  "PTC6": "42",
  "PTC7": "43",
  "VDD_1": "44",
  "PTC16": "45",
  "PTC17": "46",
  "PTC18": "47",
  "PTC19": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", PSWITCH: "input", DCDC_CFG: "input", VDCDC_IN: "power_in", DCDC_LP: "passive", DCDC_LN: "passive", DCDC_GND: "power_in", VDD_1P8OUT: "power_out", VDD_1P5OUT_PMCIN: "power_out", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDD_0: "power_in", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", "ADC0_DP0/CMP0_IN0": "input", "ADC0_DM0/CMP0_IN1": "input", VSSA: "power_in", "VREFH/VREF_OUT": "bidirectional", VDDA: "power_in", XTAL_OUT: "output", EXTAL: "input", XTAL: "input", VDD_RF3: "power_in", ANT: "passive", GANT: "power_in", VDD_RF2: "power_in", VDD_RF1: "power_in", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", PTC7: "bidirectional", VDD_1: "power_in", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTC19: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKW31Z512VHT";
  override referencePrefix = "U";
}

/**
 * Kinetis KW41Z-2.4 GHz, Arm Cortex-M0+, 256kB Flash, 64kB SRAM, Multi Mode: Bluetooth LE and 802.15.4 Wireless Radio and generic FSK, LQFN-48
 *
 * KiCad symbol: `MCU_NXP_Kinetis:MKW41Z256VHT`. Reference prefix: `U`.
 * Footprint filters: NXP*LQFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MKW41Z512.pdf
 * Keywords: Kinetis KW41Z ARM Cortex M0+.
 * Default footprint: Package_DFN_QFN:NXP_LQFN-48-1EP_7x7mm_P0.5mm_EP3.5x3.5mm_16xMask0.45x0.45_ThermalVias.
 */
export class MKW41Z256VHT extends Component.withPins({
  "PTA0": "1",
  "PTA1": "2",
  "PTA2": "3",
  "PTA16": "4",
  "PTA17": "5",
  "PTA18": "6",
  "PTA19": "7",
  "PSWITCH": "8",
  "DCDC_CFG": "9",
  "VDCDC_IN": "10",
  "DCDC_LP": "11",
  "DCDC_LN": "12",
  "DCDC_GND": "13",
  "VDD_1P8OUT": "14",
  "VDD_1P5OUT_PMCIN": "15",
  "PTB0": "16",
  "PTB1": "17",
  "PTB2": "18",
  "PTB3": "19",
  "VDD_0": "20",
  "PTB16": "21",
  "PTB17": "22",
  "PTB18": "23",
  "ADC0_DP0/CMP0_IN0": "24",
  "ADC0_DM0/CMP0_IN1": "25",
  "VSSA": "26",
  "VREFH/VREF_OUT": "27",
  "VDDA": "28",
  "XTAL_OUT": "29",
  "EXTAL": "30",
  "XTAL": "31",
  "VDD_RF3": "32",
  "ANT": "33",
  "GANT": "34",
  "VDD_RF2": "35",
  "VDD_RF1": "36",
  "PTC1": "37",
  "PTC2": "38",
  "PTC3": "39",
  "PTC4": "40",
  "PTC5": "41",
  "PTC6": "42",
  "PTC7": "43",
  "VDD_1": "44",
  "PTC16": "45",
  "PTC17": "46",
  "PTC18": "47",
  "PTC19": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA16: "bidirectional", PTA17: "bidirectional", PTA18: "bidirectional", PTA19: "bidirectional", PSWITCH: "input", DCDC_CFG: "input", VDCDC_IN: "power_in", DCDC_LP: "passive", DCDC_LN: "passive", DCDC_GND: "power_in", VDD_1P8OUT: "power_out", VDD_1P5OUT_PMCIN: "power_out", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDD_0: "power_in", PTB16: "bidirectional", PTB17: "bidirectional", PTB18: "bidirectional", "ADC0_DP0/CMP0_IN0": "input", "ADC0_DM0/CMP0_IN1": "input", VSSA: "power_in", "VREFH/VREF_OUT": "bidirectional", VDDA: "power_in", XTAL_OUT: "output", EXTAL: "input", XTAL: "input", VDD_RF3: "power_in", ANT: "passive", GANT: "power_in", VDD_RF2: "power_in", VDD_RF1: "power_in", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", PTC7: "bidirectional", VDD_1: "power_in", PTC16: "bidirectional", PTC17: "bidirectional", PTC18: "bidirectional", PTC19: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_Kinetis:MKW41Z256VHT";
  override referencePrefix = "U";
}
