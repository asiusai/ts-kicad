// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 8-bit Flexis Microcontroller, S08 core, 128kB Flash, 8kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC128xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AC128xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC128xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 128kB Flash, 8kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC128xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AC128xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC128xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 128kB Flash, 8kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC128xFUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_14x14mm_P0.8mm.
 */
export class MC9S08AC128xFUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC128xFUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 128kB Flash, 8kB RAM, LQFP-80
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC128xLKE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class MC9S08AC128xLKE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTJ0": "13",
  "PTJ1": "14",
  "PTJ2": "15",
  "PTJ3": "16",
  "PTE0": "17",
  "PTE1": "18",
  "PTE2": "19",
  "PTE3": "20",
  "PTE4": "21",
  "PTE5": "22",
  "PTE6": "23",
  "PTE7": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "PTJ4": "27",
  "PTJ5": "28",
  "PTJ6": "29",
  "PTJ7": "30",
  "PTG0": "31",
  "PTG1": "32",
  "PTG2": "33",
  "PTA0": "34",
  "PTA1": "35",
  "PTA2": "36",
  "PTA3": "37",
  "PTA4": "38",
  "PTA5": "39",
  "PTA6": "40",
  "PTA7": "41",
  "PTH0": "42",
  "PTH1": "43",
  "PTH2": "44",
  "PTH3": "45",
  "PTB0": "46",
  "PTB1": "47",
  "PTB2": "48",
  "PTB3": "49",
  "PTB4": "50",
  "PTB5": "51",
  "PTB6": "52",
  "PTB7": "53",
  "PTD0": "54",
  "PTD1": "55",
  "VDDA": "56",
  "VSSA": "57",
  "PTD2": "58",
  "PTD3": "59",
  "PTG3": "60",
  "PTG4": "61",
  "PTD4": "62",
  "PTD5": "63",
  "PTD6": "64",
  "PTD7": "65",
  "VREFH": "66",
  "VREFL": "67",
  "BKGD/MS": "68",
  "PTG5/XTAL": "69",
  "PTG6/EXTAL": "70",
  "VSS_71": "71",
  "VDD_72": "72",
  "PTC0": "73",
  "PTC1": "74",
  "PTH4": "75",
  "PTH5": "76",
  "PTH6": "77",
  "PTC2": "78",
  "PTC3": "79",
  "PTC5": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTJ0: "bidirectional", PTJ1: "bidirectional", PTJ2: "bidirectional", PTJ3: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_25: "power_in", VDD_26: "power_in", PTJ4: "bidirectional", PTJ5: "bidirectional", PTJ6: "bidirectional", PTJ7: "bidirectional", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTH0: "bidirectional", PTH1: "bidirectional", PTH2: "bidirectional", PTH3: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_71: "power_in", VDD_72: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTH4: "bidirectional", PTH5: "bidirectional", PTH6: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC128xLKE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 128kB Flash, 8kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC128xPUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08AC128xPUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC128xPUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 16kB Flash, 1kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC16xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AC16xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC16xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC16xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AC16xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC16xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 60kB Flash, 2kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC60xFJE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08AC60xFJE extends Component.withPins({
  "IRQ/TPMCLK": "1",
  "~{RESET}": "2",
  "PTF4": "3",
  "PTF5": "4",
  "PTE0": "5",
  "PTE1": "6",
  "PTE2": "7",
  "PTE3": "8",
  "PTE4": "9",
  "PTE5": "10",
  "PTE6": "11",
  "PTE7": "12",
  "VSS_13": "13",
  "VDD": "14",
  "PTG0": "15",
  "PTG1": "16",
  "PTB0": "17",
  "PTB1": "18",
  "PTB2": "19",
  "PTB3": "20",
  "VDDA": "21",
  "VSSA": "22",
  "PTD2": "23",
  "PTD3": "24",
  "VREFH": "25",
  "VREFL": "26",
  "BKGD/MS": "27",
  "PTG5/XTAL": "28",
  "PTG6/EXTAL": "29",
  "VSS_30": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_13: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_30: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC60xFJE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC16xFJE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08AC16xFJE extends Component.withPins({
  "IRQ/TPMCLK": "1",
  "~{RESET}": "2",
  "PTF4": "3",
  "PTF5": "4",
  "PTE0": "5",
  "PTE1": "6",
  "PTE2": "7",
  "PTE3": "8",
  "PTE4": "9",
  "PTE5": "10",
  "PTE6": "11",
  "PTE7": "12",
  "VSS_13": "13",
  "VDD": "14",
  "PTG0": "15",
  "PTG1": "16",
  "PTB0": "17",
  "PTB1": "18",
  "PTB2": "19",
  "PTB3": "20",
  "VDDA": "21",
  "VSSA": "22",
  "PTD2": "23",
  "PTD3": "24",
  "VREFH": "25",
  "VREFL": "26",
  "BKGD/MS": "27",
  "PTG5/XTAL": "28",
  "PTG6/EXTAL": "29",
  "VSS_30": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_13: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_30: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC16xFJE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 32kB Flash, 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC32xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AC32xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC32xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 32kB Flash, 2kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC32xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AC32xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC32xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 32kB Flash, 2kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC32xFJE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08AC32xFJE extends Component.withPins({
  "IRQ/TPMCLK": "1",
  "~{RESET}": "2",
  "PTF4": "3",
  "PTF5": "4",
  "PTE0": "5",
  "PTE1": "6",
  "PTE2": "7",
  "PTE3": "8",
  "PTE4": "9",
  "PTE5": "10",
  "PTE6": "11",
  "PTE7": "12",
  "VSS_13": "13",
  "VDD": "14",
  "PTG0": "15",
  "PTG1": "16",
  "PTB0": "17",
  "PTB1": "18",
  "PTB2": "19",
  "PTB3": "20",
  "VDDA": "21",
  "VSSA": "22",
  "PTD2": "23",
  "PTD3": "24",
  "VREFH": "25",
  "VREFL": "26",
  "BKGD/MS": "27",
  "PTG5/XTAL": "28",
  "PTG6/EXTAL": "29",
  "VSS_30": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_13: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_30: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC32xFJE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 32kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC32xFUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_14x14mm_P0.8mm.
 */
export class MC9S08AC32xFUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC32xFUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 32kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC32xPUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08AC32xPUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC32xPUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 48kB Flash, 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC48xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AC48xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC48xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 48kB Flash, 2kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC48xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AC48xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC48xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 48kB Flash, 2kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC48xFJE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08AC48xFJE extends Component.withPins({
  "IRQ/TPMCLK": "1",
  "~{RESET}": "2",
  "PTF4": "3",
  "PTF5": "4",
  "PTE0": "5",
  "PTE1": "6",
  "PTE2": "7",
  "PTE3": "8",
  "PTE4": "9",
  "PTE5": "10",
  "PTE6": "11",
  "PTE7": "12",
  "VSS_13": "13",
  "VDD": "14",
  "PTG0": "15",
  "PTG1": "16",
  "PTB0": "17",
  "PTB1": "18",
  "PTB2": "19",
  "PTB3": "20",
  "VDDA": "21",
  "VSSA": "22",
  "PTD2": "23",
  "PTD3": "24",
  "VREFH": "25",
  "VREFL": "26",
  "BKGD/MS": "27",
  "PTG5/XTAL": "28",
  "PTG6/EXTAL": "29",
  "VSS_30": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_13: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_30: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC48xFJE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 48kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC48xFUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_14x14mm_P0.8mm.
 */
export class MC9S08AC48xFUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC48xFUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 48kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC48xPUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08AC48xPUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC48xPUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 60kB Flash, 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC60xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AC60xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC60xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 60kB Flash, 2kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC60xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AC60xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC60xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 60kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC60xFUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_14x14mm_P0.8mm.
 */
export class MC9S08AC60xFUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC60xFUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 60kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC60xPUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08AC60xPUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC60xPUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 8kB Flash, 768B RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC8xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AC8xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC8xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 8kB Flash, 768B RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC8xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AC8xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC8xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 8kB Flash, 768B RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC8xFJE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08AC8xFJE extends Component.withPins({
  "IRQ/TPMCLK": "1",
  "~{RESET}": "2",
  "PTF4": "3",
  "PTF5": "4",
  "PTE0": "5",
  "PTE1": "6",
  "PTE2": "7",
  "PTE3": "8",
  "PTE4": "9",
  "PTE5": "10",
  "PTE6": "11",
  "PTE7": "12",
  "VSS_13": "13",
  "VDD": "14",
  "PTG0": "15",
  "PTG1": "16",
  "PTB0": "17",
  "PTB1": "18",
  "PTB2": "19",
  "PTB3": "20",
  "VDDA": "21",
  "VSSA": "22",
  "PTD2": "23",
  "PTD3": "24",
  "VREFH": "25",
  "VREFL": "26",
  "BKGD/MS": "27",
  "PTG5/XTAL": "28",
  "PTG6/EXTAL": "29",
  "VSS_30": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_13: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_30: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC8xFJE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 96kB Flash, 6kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC96xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AC96xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC96xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 96kB Flash, 6kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC96xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AC96xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC96xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 96kB Flash, 6kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC96xFUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_14x14mm_P0.8mm.
 */
export class MC9S08AC96xFUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC96xFUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 96kB Flash, 6kB RAM, LQFP-80
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC96xLKE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class MC9S08AC96xLKE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTJ0": "13",
  "PTJ1": "14",
  "PTJ2": "15",
  "PTJ3": "16",
  "PTE0": "17",
  "PTE1": "18",
  "PTE2": "19",
  "PTE3": "20",
  "PTE4": "21",
  "PTE5": "22",
  "PTE6": "23",
  "PTE7": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "PTJ4": "27",
  "PTJ5": "28",
  "PTJ6": "29",
  "PTJ7": "30",
  "PTG0": "31",
  "PTG1": "32",
  "PTG2": "33",
  "PTA0": "34",
  "PTA1": "35",
  "PTA2": "36",
  "PTA3": "37",
  "PTA4": "38",
  "PTA5": "39",
  "PTA6": "40",
  "PTA7": "41",
  "PTH0": "42",
  "PTH1": "43",
  "PTH2": "44",
  "PTH3": "45",
  "PTB0": "46",
  "PTB1": "47",
  "PTB2": "48",
  "PTB3": "49",
  "PTB4": "50",
  "PTB5": "51",
  "PTB6": "52",
  "PTB7": "53",
  "PTD0": "54",
  "PTD1": "55",
  "VDDA": "56",
  "VSSA": "57",
  "PTD2": "58",
  "PTD3": "59",
  "PTG3": "60",
  "PTG4": "61",
  "PTD4": "62",
  "PTD5": "63",
  "PTD6": "64",
  "PTD7": "65",
  "VREFH": "66",
  "VREFL": "67",
  "BKGD/MS": "68",
  "PTG5/XTAL": "69",
  "PTG6/EXTAL": "70",
  "VSS_71": "71",
  "VDD_72": "72",
  "PTC0": "73",
  "PTC1": "74",
  "PTH4": "75",
  "PTH5": "76",
  "PTH6": "77",
  "PTC2": "78",
  "PTC3": "79",
  "PTC5": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTJ0: "bidirectional", PTJ1: "bidirectional", PTJ2: "bidirectional", PTJ3: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_25: "power_in", VDD_26: "power_in", PTJ4: "bidirectional", PTJ5: "bidirectional", PTJ6: "bidirectional", PTJ7: "bidirectional", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTH0: "bidirectional", PTH1: "bidirectional", PTH2: "bidirectional", PTH3: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_71: "power_in", VDD_72: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTH4: "bidirectional", PTH5: "bidirectional", PTH6: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC96xLKE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Flexis Microcontroller, S08 core, 96kB Flash, 6kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AC96xPUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08AC96xPUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AC96xPUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 96kB Flash, 6kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW16AE0xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08AW16AE0xLC extends Component.withPins({
  "IRQ/TPMCLK": "1",
  "~{RESET}": "2",
  "PTF4": "3",
  "PTF5": "4",
  "PTE0": "5",
  "PTE1": "6",
  "PTE2": "7",
  "PTE3": "8",
  "PTE4": "9",
  "PTE5": "10",
  "PTE6": "11",
  "PTE7": "12",
  "VSS_13": "13",
  "VDD": "14",
  "PTG0": "15",
  "PTG1": "16",
  "PTB0": "17",
  "PTB1": "18",
  "PTB2": "19",
  "PTB3": "20",
  "VDDA": "21",
  "VSSA": "22",
  "PTD2": "23",
  "PTD3": "24",
  "VREFH": "25",
  "VREFL": "26",
  "BKGD/MS": "27",
  "PTG5/XTAL": "28",
  "PTG6/EXTAL": "29",
  "VSS_30": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_13: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_30: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW16AE0xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW16xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AW16xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW16xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW16xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AW16xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW16xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW16xFUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_14x14mm_P0.8mm.
 */
export class MC9S08AW16xFUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW16xFUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW16xPUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08AW16xPUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW16xPUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 32kB Flash, 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW32xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AW32xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW32xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 32kB Flash, 2kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW32xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AW32xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW32xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 32kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW32xFUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_14x14mm_P0.8mm.
 */
export class MC9S08AW32xFUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW32xFUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 32kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW32xPUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08AW32xPUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW32xPUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 48kB Flash, 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW48xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AW48xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW48xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 48kB Flash, 2kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW48xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AW48xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW48xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 48kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW48xFUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_14x14mm_P0.8mm.
 */
export class MC9S08AW48xFUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW48xFUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 48kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW48xPUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08AW48xPUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW48xPUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 60kB Flash, 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW60xFDE`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08AW60xFDE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VSS_17": "17",
  "VDD": "18",
  "PTG0": "19",
  "PTG1": "20",
  "PTG2": "21",
  "PTA0": "22",
  "PTA1": "23",
  "PTA2": "24",
  "PTA7": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTD0": "30",
  "PTD1": "31",
  "VDDA": "32",
  "VSSA": "33",
  "PTD2": "34",
  "PTD3": "35",
  "PTG3": "36",
  "PTG4": "37",
  "VREFH": "38",
  "VREFL": "39",
  "BKGD/MS": "40",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_17: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW60xFDE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 60kB Flash, 2kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW60xFGE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08AW60xFGE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "PTG0": "18",
  "PTG1": "19",
  "PTG2": "20",
  "PTA0": "21",
  "PTA1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTD0": "27",
  "PTD1": "28",
  "VDDA": "29",
  "VSSA": "30",
  "PTD2": "31",
  "PTD3": "32",
  "PTG3": "33",
  "VREFH": "34",
  "VREFL": "35",
  "BKGD/MS": "36",
  "PTG5/XTAL": "41",
  "PTG6/EXTAL": "42",
  "VSS_43": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_16: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_43: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW60xFGE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 60kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW60xFUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_14x14mm_P0.8mm.
 */
export class MC9S08AW60xFUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW60xFUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 60kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW60xPUE`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AW60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08AW60xPUE extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VSS_21": "21",
  "VDD": "22",
  "PTG0": "23",
  "PTG1": "24",
  "PTG2": "25",
  "PTA0": "26",
  "PTA1": "27",
  "PTA2": "28",
  "PTA3": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
  "PTA7": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VSSA": "45",
  "PTD2": "46",
  "PTD3": "47",
  "PTG3": "48",
  "PTG4": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "VREFH": "54",
  "VREFL": "55",
  "BKGD/MS": "56",
  "PTG5/XTAL": "57",
  "PTG6/EXTAL": "58",
  "VSS_59": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_21: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTG2: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTG3: "bidirectional", PTG4: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_59: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW60xPUE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 768B RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08AW8AE0xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08AC60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08AW8AE0xLC extends Component.withPins({
  "IRQ/TPMCLK": "1",
  "~{RESET}": "2",
  "PTF4": "3",
  "PTF5": "4",
  "PTE0": "5",
  "PTE1": "6",
  "PTE2": "7",
  "PTE3": "8",
  "PTE4": "9",
  "PTE5": "10",
  "PTE6": "11",
  "PTE7": "12",
  "VSS_13": "13",
  "VDD": "14",
  "PTG0": "15",
  "PTG1": "16",
  "PTB0": "17",
  "PTB1": "18",
  "PTB2": "19",
  "PTB3": "20",
  "VDDA": "21",
  "VSSA": "22",
  "PTD2": "23",
  "PTD3": "24",
  "VREFH": "25",
  "VREFL": "26",
  "BKGD/MS": "27",
  "PTG5/XTAL": "28",
  "PTG6/EXTAL": "29",
  "VSS_30": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IRQ/TPMCLK": "input", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VSS_13: "power_in", VDD: "power_in", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", VDDA: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", VREFH: "power_in", VREFL: "power_in", "BKGD/MS": "bidirectional", "PTG5/XTAL": "bidirectional", "PTG6/EXTAL": "bidirectional", VSS_30: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08AW8AE0xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 60kB Flash, 4kB RAM, 2kB EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ60xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DZ60xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ60xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, 1kB EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN16xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DN16xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN16xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 128kB Flash, 8kB RAM, 2kB EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ128xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DZ128xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ128xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, 1kB EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN16xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DN16xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN16xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 32kB Flash, 1.5kB RAM, 1kB EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN32xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DN32xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN32xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 32kB Flash, 1.5kB RAM, 1kB EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN32xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DN32xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN32xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 128kB Flash, 8kB RAM, 2kB EEPROM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ128xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DZ128xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ128xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 32kB Flash, 1.5kB RAM, 1kB EEPROM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN32xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DN60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DN32xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN32xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 48kB Flash, 2kB RAM, 1.5kB EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN48xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DN48xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN48xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 48kB Flash, 2kB RAM, 1.5kB EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN48xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DN48xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN48xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 48kB Flash, 2kB RAM, 1.5kB EEPROM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN48xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DN60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DN48xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN48xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 60kB Flash, 2kB RAM, 2kB EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN60xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DN60xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN60xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 60kB Flash, 2kB RAM, 2kB EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN60xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DN60xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN60xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 60kB Flash, 2kB RAM, 2kB EEPROM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DN60xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DN60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DN60xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DN60xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, 512B EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV16xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DV16xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV16xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, 512B EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV16xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DV16xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV16xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 32kB Flash, 1kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV32xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DV32xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV32xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 32kB Flash, 1kB RAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV32xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DV32xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV32xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 32kB Flash, 1kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV32xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DV60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DV32xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV32xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 48kB Flash, 3kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV48xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DV48xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV48xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 48kB Flash, 3kB RAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV48xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DV48xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV48xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 48kB Flash, 3kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV48xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DV60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DV48xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV48xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 60kB Flash, 3kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV60xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DV60xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV60xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 60kB Flash, 3kB RAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV60xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DV60xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV60xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 60kB Flash, 3kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DV60xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DV60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DV60xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DV60xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 128kB Flash, 8kB RAM, 2kB EEPROM, LQFP-100
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ128xLL`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MC9S08DZ128xLL extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "PTJ0": "7",
  "PTJ1": "8",
  "VDD_9": "9",
  "VSS_10": "10",
  "PTG0/EXTAL": "11",
  "PTG1/XTAL": "12",
  "~{RESET}": "13",
  "PTJ2": "14",
  "PTJ3": "15",
  "PTL5": "16",
  "PTF4": "17",
  "PTF5": "18",
  "PTF6": "19",
  "PTJ4": "20",
  "PTJ5": "21",
  "PTJ6": "22",
  "PTJ7": "23",
  "PTE0": "24",
  "PTE1": "25",
  "PTE2": "26",
  "PTE3": "27",
  "PTE4": "28",
  "PTE5": "29",
  "PTG2": "30",
  "PTG3": "31",
  "PTL6": "32",
  "PTL7": "33",
  "PTF0": "34",
  "PTF1": "35",
  "PTF2": "36",
  "PTF3": "37",
  "VDD_38": "38",
  "VSS_39": "39",
  "PTG4": "40",
  "PTG5": "41",
  "PTG6": "42",
  "PTG7": "43",
  "PTE6": "44",
  "PTE7": "45",
  "PTL0": "46",
  "PTL1": "47",
  "PTL2": "48",
  "PTD0": "49",
  "PTD1": "50",
  "PTD2": "51",
  "PTD3": "52",
  "PTD4": "53",
  "PTD5": "54",
  "PTH0": "55",
  "PTH1": "56",
  "PTH2": "57",
  "PTH3": "58",
  "PTF7": "59",
  "PTL3": "60",
  "VSS_61": "61",
  "VDD_62": "62",
  "PTD6": "63",
  "PTD7": "64",
  "BKGD/MS": "65",
  "PTH4": "66",
  "PTH5": "67",
  "PTH6": "68",
  "PTH7": "69",
  "PTC0": "70",
  "PTB0": "71",
  "PTC1": "72",
  "PTA0": "73",
  "PTC2": "74",
  "PTB1": "75",
  "PTA1": "76",
  "PTB2": "77",
  "PTA2": "78",
  "PTC3": "79",
  "PTB3": "80",
  "PTA3": "81",
  "PTL4": "82",
  "PTK0": "83",
  "PTK1": "84",
  "PTK2": "85",
  "PTK3": "86",
  "VSSA": "87",
  "VREFL": "88",
  "VREFH": "89",
  "VDDA": "90",
  "PTK4": "91",
  "PTK5": "92",
  "PTK6": "93",
  "PTK7": "94",
  "PTA4": "95",
  "PTB4": "96",
  "PTC4": "97",
  "PTA5": "98",
  "PTB5": "99",
  "PTA6": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", PTJ0: "bidirectional", PTJ1: "bidirectional", VDD_9: "power_in", VSS_10: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTJ2: "bidirectional", PTJ3: "bidirectional", PTL5: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTJ4: "bidirectional", PTJ5: "bidirectional", PTJ6: "bidirectional", PTJ7: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTL6: "bidirectional", PTL7: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", VDD_38: "power_in", VSS_39: "power_in", PTG4: "bidirectional", PTG5: "bidirectional", PTG6: "bidirectional", PTG7: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTL0: "bidirectional", PTL1: "bidirectional", PTL2: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTH0: "bidirectional", PTH1: "bidirectional", PTH2: "bidirectional", PTH3: "bidirectional", PTF7: "bidirectional", PTL3: "bidirectional", VSS_61: "power_in", VDD_62: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTH4: "bidirectional", PTH5: "bidirectional", PTH6: "bidirectional", PTH7: "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", PTL4: "bidirectional", PTK0: "bidirectional", PTK1: "bidirectional", PTK2: "bidirectional", PTK3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTK4: "bidirectional", PTK5: "bidirectional", PTK6: "bidirectional", PTK7: "bidirectional", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ128xLL";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, 512B EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ16xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DZ16xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ16xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, 512B EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ16xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DZ16xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ16xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 32kB Flash, 2kB RAM, 1kB EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ32xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DZ32xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ32xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 32kB Flash, 2kB RAM, 1kB EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ32xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DZ32xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ32xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 32kB Flash, 2kB RAM, 1kB EEPROM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ32xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DZ32xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ32xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 48kB Flash, 3kB RAM, 1.5kB EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ48xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08DZ48xLC extends Component.withPins({
  "PTA7": "1",
  "VDD": "2",
  "VSS": "3",
  "PTG0/EXTAL": "4",
  "PTG1/XTAL": "5",
  "~{RESET}": "6",
  "PTE0": "7",
  "PTE1": "8",
  "PTE2": "9",
  "PTE3": "10",
  "PTE4": "11",
  "PTE5": "12",
  "PTE6": "13",
  "PTE7": "14",
  "PTD0": "15",
  "PTD1": "16",
  "PTD2": "17",
  "PTD3": "18",
  "PTD4": "19",
  "PTD5": "20",
  "BKGD/MS": "21",
  "PTB0": "22",
  "PTA0": "23",
  "PTB1": "24",
  "PTA1": "25",
  "PTA2": "26",
  "PTA3": "27",
  "VSSA/VREFL": "28",
  "VDDA/VREFH": "29",
  "PTA4": "30",
  "PTA5": "31",
  "PTA6": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTA7: "bidirectional", VDD: "power_in", VSS: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ48xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 48kB Flash, 3kB RAM, 1.5kB EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ48xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DZ48xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ48xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 48kB Flash, 3kB RAM, 1.5kB EEPROM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ48xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DZ48xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ48xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 60kB Flash, 4kB RAM, 2kB EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ60xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DZ60xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ60xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 60kB Flash, 4kB RAM, 2kB EEPROM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ60xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DZ60xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ60xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 96kB Flash, 6kB RAM, 2kB EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ96xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08DZ96xLF extends Component.withPins({
  "PTB6": "1",
  "PTA7": "2",
  "PTB7": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PTG0/EXTAL": "6",
  "PTG1/XTAL": "7",
  "~{RESET}": "8",
  "PTF4": "9",
  "PTF5": "10",
  "PTE0": "11",
  "PTE1": "12",
  "PTE2": "13",
  "PTE3": "14",
  "PTE4": "15",
  "PTE5": "16",
  "PTF0": "17",
  "PTF1": "18",
  "PTF2": "19",
  "PTF3": "20",
  "PTE6": "21",
  "PTE7": "22",
  "PTD0": "23",
  "PTD1": "24",
  "PTD2": "25",
  "PTD3": "26",
  "PTD4": "27",
  "PTD5": "28",
  "VSS_29": "29",
  "VDD_30": "30",
  "PTD6": "31",
  "PTD7": "32",
  "BKGD/MS": "33",
  "PTB0": "34",
  "PTA0": "35",
  "PTB1": "36",
  "PTA1": "37",
  "PTB2": "38",
  "PTA2": "39",
  "PTB3": "40",
  "PTA3": "41",
  "VSSA/VREFL": "42",
  "VDDA/VREFH": "43",
  "PTA4": "44",
  "PTB4": "45",
  "PTA5": "46",
  "PTB5": "47",
  "PTA6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTA7: "bidirectional", PTB7: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", VSS_29: "power_in", VDD_30: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTB0: "bidirectional", PTA0: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", "VSSA/VREFL": "power_in", "VDDA/VREFH": "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ96xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 96kB Flash, 6kB RAM, 2kB EEPROM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ96xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08DZ96xLH extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "PTG0/EXTAL": "9",
  "PTG1/XTAL": "10",
  "~{RESET}": "11",
  "PTF4": "12",
  "PTF5": "13",
  "PTF6": "14",
  "PTE0": "15",
  "PTE1": "16",
  "PTE2": "17",
  "PTE3": "18",
  "PTE4": "19",
  "PTE5": "20",
  "PTG2": "21",
  "PTG3": "22",
  "PTF0": "23",
  "PTF1": "24",
  "PTF2": "25",
  "PTF3": "26",
  "PTG4": "27",
  "PTG5": "28",
  "PTE6": "29",
  "PTE7": "30",
  "PTD0": "31",
  "PTD1": "32",
  "PTD2": "33",
  "PTD3": "34",
  "PTD4": "35",
  "PTD5": "36",
  "PTF7": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PTD6": "40",
  "PTD7": "41",
  "BKGD/MS": "42",
  "PTC0": "43",
  "PTB0": "44",
  "PTC1": "45",
  "PTA0": "46",
  "PTC2": "47",
  "PTB1": "48",
  "PTA1": "49",
  "PTB2": "50",
  "PTA2": "51",
  "PTC3": "52",
  "PTB3": "53",
  "PTA3": "54",
  "VSSA": "55",
  "VREFL": "56",
  "VREFH": "57",
  "VDDA": "58",
  "PTA4": "59",
  "PTB4": "60",
  "PTC4": "61",
  "PTA5": "62",
  "PTB5": "63",
  "PTA6": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", VDD_7: "power_in", VSS_8: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTG4: "bidirectional", PTG5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTF7: "bidirectional", VSS_38: "power_in", VDD_39: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ96xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 96kB Flash, 6kB RAM, 2kB EEPROM, LQFP-100
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08DZ96xLL`. Reference prefix: `IC`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08DZ128.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MC9S08DZ96xLL extends Component.withPins({
  "PTB6": "1",
  "PTC5": "2",
  "PTA7": "3",
  "PTC6": "4",
  "PTB7": "5",
  "PTC7": "6",
  "PTJ0": "7",
  "PTJ1": "8",
  "VDD_9": "9",
  "VSS_10": "10",
  "PTG0/EXTAL": "11",
  "PTG1/XTAL": "12",
  "~{RESET}": "13",
  "PTJ2": "14",
  "PTJ3": "15",
  "PTL5": "16",
  "PTF4": "17",
  "PTF5": "18",
  "PTF6": "19",
  "PTJ4": "20",
  "PTJ5": "21",
  "PTJ6": "22",
  "PTJ7": "23",
  "PTE0": "24",
  "PTE1": "25",
  "PTE2": "26",
  "PTE3": "27",
  "PTE4": "28",
  "PTE5": "29",
  "PTG2": "30",
  "PTG3": "31",
  "PTL6": "32",
  "PTL7": "33",
  "PTF0": "34",
  "PTF1": "35",
  "PTF2": "36",
  "PTF3": "37",
  "VDD_38": "38",
  "VSS_39": "39",
  "PTG4": "40",
  "PTG5": "41",
  "PTG6": "42",
  "PTG7": "43",
  "PTE6": "44",
  "PTE7": "45",
  "PTL0": "46",
  "PTL1": "47",
  "PTL2": "48",
  "PTD0": "49",
  "PTD1": "50",
  "PTD2": "51",
  "PTD3": "52",
  "PTD4": "53",
  "PTD5": "54",
  "PTH0": "55",
  "PTH1": "56",
  "PTH2": "57",
  "PTH3": "58",
  "PTF7": "59",
  "PTL3": "60",
  "VSS_61": "61",
  "VDD_62": "62",
  "PTD6": "63",
  "PTD7": "64",
  "BKGD/MS": "65",
  "PTH4": "66",
  "PTH5": "67",
  "PTH6": "68",
  "PTH7": "69",
  "PTC0": "70",
  "PTB0": "71",
  "PTC1": "72",
  "PTA0": "73",
  "PTC2": "74",
  "PTB1": "75",
  "PTA1": "76",
  "PTB2": "77",
  "PTA2": "78",
  "PTC3": "79",
  "PTB3": "80",
  "PTA3": "81",
  "PTL4": "82",
  "PTK0": "83",
  "PTK1": "84",
  "PTK2": "85",
  "PTK3": "86",
  "VSSA": "87",
  "VREFL": "88",
  "VREFH": "89",
  "VDDA": "90",
  "PTK4": "91",
  "PTK5": "92",
  "PTK6": "93",
  "PTK7": "94",
  "PTA4": "95",
  "PTB4": "96",
  "PTC4": "97",
  "PTA5": "98",
  "PTB5": "99",
  "PTA6": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTB6: "bidirectional", PTC5: "bidirectional", PTA7: "bidirectional", PTC6: "bidirectional", PTB7: "bidirectional", PTC7: "bidirectional", PTJ0: "bidirectional", PTJ1: "bidirectional", VDD_9: "power_in", VSS_10: "power_in", "PTG0/EXTAL": "bidirectional", "PTG1/XTAL": "bidirectional", "~{RESET}": "input", PTJ2: "bidirectional", PTJ3: "bidirectional", PTL5: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTJ4: "bidirectional", PTJ5: "bidirectional", PTJ6: "bidirectional", PTJ7: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", PTL6: "bidirectional", PTL7: "bidirectional", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", VDD_38: "power_in", VSS_39: "power_in", PTG4: "bidirectional", PTG5: "bidirectional", PTG6: "bidirectional", PTG7: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", PTL0: "bidirectional", PTL1: "bidirectional", PTL2: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTH0: "bidirectional", PTH1: "bidirectional", PTH2: "bidirectional", PTH3: "bidirectional", PTF7: "bidirectional", PTL3: "bidirectional", VSS_61: "power_in", VDD_62: "power_in", PTD6: "bidirectional", PTD7: "bidirectional", "BKGD/MS": "bidirectional", PTH4: "bidirectional", PTH5: "bidirectional", PTH6: "bidirectional", PTH7: "bidirectional", PTC0: "bidirectional", PTB0: "bidirectional", PTC1: "bidirectional", PTA0: "bidirectional", PTC2: "bidirectional", PTB1: "bidirectional", PTA1: "bidirectional", PTB2: "bidirectional", PTA2: "bidirectional", PTC3: "bidirectional", PTB3: "bidirectional", PTA3: "bidirectional", PTL4: "bidirectional", PTK0: "bidirectional", PTK1: "bidirectional", PTK2: "bidirectional", PTK3: "bidirectional", VSSA: "power_in", VREFL: "power_in", VREFH: "power_in", VDDA: "power_in", PTK4: "bidirectional", PTK5: "bidirectional", PTK6: "bidirectional", PTK7: "bidirectional", PTA4: "bidirectional", PTB4: "bidirectional", PTC4: "bidirectional", PTA5: "bidirectional", PTB5: "bidirectional", PTA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08DZ96xLL";
  override referencePrefix = "IC";
}

/**
 * 8-bit EEPROM with LIN Microcontroller, S08 core, 32kB Flash, 1kB RAM, 512B EEPROM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08EL32xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08EL32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08EL32xTJ extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08EL32xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit EEPROM with LIN Microcontroller, S08 core, 16kB Flash, 1kB RAM, 512B EEPROM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08EL16xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08EL32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08EL16xTJ extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08EL16xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit EEPROM with LIN Microcontroller, S08 core, 32kB Flash, 1kB RAM, 512B EEPROM, TSSOP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08EL32xTL`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08EL32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MC9S08EL32xTL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "~{RESET}": "3",
  "BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08EL32xTL";
  override referencePrefix = "IC";
}

/**
 * 8-bit EEPROM with LIN Microcontroller, S08 core, 16kB Flash, 1kB RAM, 512B EEPROM, TSSOP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08EL16xTL`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08EL32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MC9S08EL16xTL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "~{RESET}": "3",
  "BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08EL16xTL";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08FL16xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08FL16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08FL16xLC extends Component.withPins({
  "PTA4/BKGD/MS": "1",
  "PTD0": "2",
  "PTD1": "3",
  "VDD": "4",
  "VSS": "5",
  "PTB7/EXTAL": "6",
  "PTB6/XTAL": "7",
  "PTB5": "8",
  "PTD3": "9",
  "PTB4": "10",
  "PTC3": "11",
  "PTC2": "12",
  "PTC1": "13",
  "PTC0": "14",
  "PTB3": "15",
  "PTD4": "16",
  "PTB2": "17",
  "PTB1": "18",
  "PTB0": "19",
  "PTA7": "20",
  "PTA6": "21",
  "PTA3": "22",
  "PTA2": "23",
  "PTA1": "24",
  "PTD5": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
  "PTC5": "29",
  "PTC4": "30",
  "PTA5/~{RESET}": "31",
  "PTD2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA4/BKGD/MS": "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTD3: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTD4: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTD5: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", PTD2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08FL16xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Cost-Effective Microcontroller, S08 core, 8kB Flash, 768B RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08FL8xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08FL16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08FL8xLC extends Component.withPins({
  "PTA4/BKGD/MS": "1",
  "PTD0": "2",
  "PTD1": "3",
  "VDD": "4",
  "VSS": "5",
  "PTB7/EXTAL": "6",
  "PTB6/XTAL": "7",
  "PTB5": "8",
  "PTD3": "9",
  "PTB4": "10",
  "PTC3": "11",
  "PTC2": "12",
  "PTC1": "13",
  "PTC0": "14",
  "PTB3": "15",
  "PTD4": "16",
  "PTB2": "17",
  "PTB1": "18",
  "PTB0": "19",
  "PTA7": "20",
  "PTA6": "21",
  "PTA3": "22",
  "PTA2": "23",
  "PTA1": "24",
  "PTD5": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
  "PTC5": "29",
  "PTC4": "30",
  "PTA5/~{RESET}": "31",
  "PTD2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA4/BKGD/MS": "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTD3: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTD4: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTD5: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", PTD2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08FL8xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 60kB Flash, 4kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM60xGT`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08JM60xGT extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VDD": "17",
  "VSS": "18",
  "USBDN": "19",
  "USBDP": "20",
  "VUSB33": "21",
  "PTG0": "22",
  "PTG1": "23",
  "PTA0": "24",
  "PTA5": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTB4": "30",
  "PTB5": "31",
  "PTD0": "32",
  "PTD1": "33",
  "VDDA/VREFH": "34",
  "VSSA/VREFL": "35",
  "PTD2": "36",
  "PTD7": "37",
  "PTG2": "38",
  "PTG3": "39",
  "BKGD/MS": "40",
  "PTG4/XTAL": "41",
  "PTG5/EXTAL": "42",
  "VSSOSC": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTA0: "bidirectional", PTA5: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTD7: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM60xGT";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM16xGT`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08JM16xGT extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VDD": "17",
  "VSS": "18",
  "USBDN": "19",
  "USBDP": "20",
  "VUSB33": "21",
  "PTG0": "22",
  "PTG1": "23",
  "PTA0": "24",
  "PTA5": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTB4": "30",
  "PTB5": "31",
  "PTD0": "32",
  "PTD1": "33",
  "VDDA/VREFH": "34",
  "VSSA/VREFL": "35",
  "PTD2": "36",
  "PTD7": "37",
  "PTG2": "38",
  "PTG3": "39",
  "BKGD/MS": "40",
  "PTG4/XTAL": "41",
  "PTG5/EXTAL": "42",
  "VSSOSC": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTA0: "bidirectional", PTA5: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTD7: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM16xGT";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM16xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08JM16xLC extends Component.withPins({
  "IRQ/TPMCLK": "1",
  "~{RESET}": "2",
  "PTF4": "3",
  "PTF5": "4",
  "PTE0": "5",
  "PTE1": "6",
  "PTE2": "7",
  "PTE3": "8",
  "PTE4": "9",
  "PTE5": "10",
  "PTE6": "11",
  "PTE7": "12",
  "VDD": "13",
  "VSS": "14",
  "USBDN": "15",
  "USBDP": "16",
  "VUSB33": "17",
  "PTB4": "18",
  "PTB5": "19",
  "PTD0": "20",
  "PTD1": "21",
  "VDDA/VREFH": "22",
  "VSSA/VREFL": "23",
  "PTD2": "24",
  "PTG2": "25",
  "PTG3": "26",
  "BKGD/MS": "27",
  "PTG4/XTAL": "28",
  "PTG5/EXTAL": "29",
  "VSSOSC": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM16xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 60kB Flash, 4kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM60xLD`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08JM60xLD extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VDD": "16",
  "VSS": "17",
  "USBDN": "18",
  "USBDP": "19",
  "VUSB33": "20",
  "PTG0": "21",
  "PTG1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTB4": "27",
  "PTB5": "28",
  "PTD0": "29",
  "PTD1": "30",
  "VDDA/VREFH": "31",
  "VSSA/VREFL": "32",
  "PTD2": "33",
  "PTG2": "34",
  "PTG3": "35",
  "BKGD/MS": "36",
  "PTG4/XTAL": "37",
  "PTG5/EXTAL": "38",
  "VSSOSC": "39",
  "PTC0": "40",
  "PTC1": "41",
  "PTC2": "42",
  "PTC3": "43",
  "PTC5": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM60xLD";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM16xLD`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08JM16xLD extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VDD": "16",
  "VSS": "17",
  "USBDN": "18",
  "USBDP": "19",
  "VUSB33": "20",
  "PTG0": "21",
  "PTG1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTB4": "27",
  "PTB5": "28",
  "PTD0": "29",
  "PTD1": "30",
  "VDDA/VREFH": "31",
  "VSSA/VREFL": "32",
  "PTD2": "33",
  "PTG2": "34",
  "PTG3": "35",
  "BKGD/MS": "36",
  "PTG4/XTAL": "37",
  "PTG5/EXTAL": "38",
  "VSSOSC": "39",
  "PTC0": "40",
  "PTC1": "41",
  "PTC2": "42",
  "PTC3": "43",
  "PTC5": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM16xLD";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 32kB Flash, 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM32xGT`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08JM32xGT extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VDD": "17",
  "VSS": "18",
  "USBDN": "19",
  "USBDP": "20",
  "VUSB33": "21",
  "PTG0": "22",
  "PTG1": "23",
  "PTA0": "24",
  "PTA5": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTB4": "30",
  "PTB5": "31",
  "PTD0": "32",
  "PTD1": "33",
  "VDDA/VREFH": "34",
  "VSSA/VREFL": "35",
  "PTD2": "36",
  "PTD7": "37",
  "PTG2": "38",
  "PTG3": "39",
  "BKGD/MS": "40",
  "PTG4/XTAL": "41",
  "PTG5/EXTAL": "42",
  "VSSOSC": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTA0: "bidirectional", PTA5: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTD7: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM32xGT";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 32kB Flash, 2kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM32xLD`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08JM32xLD extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VDD": "16",
  "VSS": "17",
  "USBDN": "18",
  "USBDP": "19",
  "VUSB33": "20",
  "PTG0": "21",
  "PTG1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTB4": "27",
  "PTB5": "28",
  "PTD0": "29",
  "PTD1": "30",
  "VDDA/VREFH": "31",
  "VSSA/VREFL": "32",
  "PTD2": "33",
  "PTG2": "34",
  "PTG3": "35",
  "BKGD/MS": "36",
  "PTG4/XTAL": "37",
  "PTG5/EXTAL": "38",
  "VSSOSC": "39",
  "PTC0": "40",
  "PTC1": "41",
  "PTC2": "42",
  "PTC3": "43",
  "PTC5": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM32xLD";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 60kB Flash, 4kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM60xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08JM60xLH extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VDD": "21",
  "VSS": "22",
  "USBDN": "23",
  "USBDP": "24",
  "VUSB33": "25",
  "PTG0": "26",
  "PTG1": "27",
  "PTA0": "28",
  "PTA1": "29",
  "PTA2": "30",
  "PTA3": "31",
  "PTA4": "32",
  "PTA5": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VREFH": "45",
  "VREFL": "46",
  "VSSA": "47",
  "PTD2": "48",
  "PTD3": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "PTG2": "54",
  "PTG3": "55",
  "BKGD/MS": "56",
  "PTG4/XTAL": "57",
  "PTG5/EXTAL": "58",
  "VSSOSC": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM60xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 32kB Flash, 2kB RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM32xLH`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM60.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08JM32xLH extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF2": "6",
  "PTF3": "7",
  "PTF4": "8",
  "PTC6": "9",
  "PTF7": "10",
  "PTF5": "11",
  "PTF6": "12",
  "PTE0": "13",
  "PTE1": "14",
  "PTE2": "15",
  "PTE3": "16",
  "PTE4": "17",
  "PTE5": "18",
  "PTE6": "19",
  "PTE7": "20",
  "VDD": "21",
  "VSS": "22",
  "USBDN": "23",
  "USBDP": "24",
  "VUSB33": "25",
  "PTG0": "26",
  "PTG1": "27",
  "PTA0": "28",
  "PTA1": "29",
  "PTA2": "30",
  "PTA3": "31",
  "PTA4": "32",
  "PTA5": "33",
  "PTB0": "34",
  "PTB1": "35",
  "PTB2": "36",
  "PTB3": "37",
  "PTB4": "38",
  "PTB5": "39",
  "PTB6": "40",
  "PTB7": "41",
  "PTD0": "42",
  "PTD1": "43",
  "VDDA": "44",
  "VREFH": "45",
  "VREFL": "46",
  "VSSA": "47",
  "PTD2": "48",
  "PTD3": "49",
  "PTD4": "50",
  "PTD5": "51",
  "PTD6": "52",
  "PTD7": "53",
  "PTG2": "54",
  "PTG3": "55",
  "BKGD/MS": "56",
  "PTG4/XTAL": "57",
  "PTG5/EXTAL": "58",
  "VSSOSC": "59",
  "PTC0": "60",
  "PTC1": "61",
  "PTC2": "62",
  "PTC3": "63",
  "PTC5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF2: "bidirectional", PTF3: "bidirectional", PTF4: "bidirectional", PTC6: "bidirectional", PTF7: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDDA: "power_in", VREFH: "power_in", VREFL: "power_in", VSSA: "power_in", PTD2: "bidirectional", PTD3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM32xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 8kB Flash, 1kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM8xGT`. Reference prefix: `IC`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MC9S08JM8xGT extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTF6": "8",
  "PTE0": "9",
  "PTE1": "10",
  "PTE2": "11",
  "PTE3": "12",
  "PTE4": "13",
  "PTE5": "14",
  "PTE6": "15",
  "PTE7": "16",
  "VDD": "17",
  "VSS": "18",
  "USBDN": "19",
  "USBDP": "20",
  "VUSB33": "21",
  "PTG0": "22",
  "PTG1": "23",
  "PTA0": "24",
  "PTA5": "25",
  "PTB0": "26",
  "PTB1": "27",
  "PTB2": "28",
  "PTB3": "29",
  "PTB4": "30",
  "PTB5": "31",
  "PTD0": "32",
  "PTD1": "33",
  "VDDA/VREFH": "34",
  "VSSA/VREFL": "35",
  "PTD2": "36",
  "PTD7": "37",
  "PTG2": "38",
  "PTG3": "39",
  "BKGD/MS": "40",
  "PTG4/XTAL": "41",
  "PTG5/EXTAL": "42",
  "VSSOSC": "43",
  "PTC0": "44",
  "PTC1": "45",
  "PTC2": "46",
  "PTC3": "47",
  "PTC5": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTF6: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTA0: "bidirectional", PTA5: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTD7: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM8xGT";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 8kB Flash, 1kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM8xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08JM8xLC extends Component.withPins({
  "IRQ/TPMCLK": "1",
  "~{RESET}": "2",
  "PTF4": "3",
  "PTF5": "4",
  "PTE0": "5",
  "PTE1": "6",
  "PTE2": "7",
  "PTE3": "8",
  "PTE4": "9",
  "PTE5": "10",
  "PTE6": "11",
  "PTE7": "12",
  "VDD": "13",
  "VSS": "14",
  "USBDN": "15",
  "USBDP": "16",
  "VUSB33": "17",
  "PTB4": "18",
  "PTB5": "19",
  "PTD0": "20",
  "PTD1": "21",
  "VDDA/VREFH": "22",
  "VSSA/VREFL": "23",
  "PTD2": "24",
  "PTG2": "25",
  "PTG3": "26",
  "BKGD/MS": "27",
  "PTG4/XTAL": "28",
  "PTG5/EXTAL": "29",
  "VSSOSC": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM8xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Cost-Effective Microcontroller, S08 core, 8kB Flash, 1kB RAM, LQFP-44
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JM8xLD`. Reference prefix: `IC`.
 * Footprint filters: LQFP*10x10mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08JM16.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-44_10x10mm_P0.8mm.
 */
export class MC9S08JM8xLD extends Component.withPins({
  "PTC4": "1",
  "IRQ/TPMCLK": "2",
  "~{RESET}": "3",
  "PTF0": "4",
  "PTF1": "5",
  "PTF4": "6",
  "PTF5": "7",
  "PTE0": "8",
  "PTE1": "9",
  "PTE2": "10",
  "PTE3": "11",
  "PTE4": "12",
  "PTE5": "13",
  "PTE6": "14",
  "PTE7": "15",
  "VDD": "16",
  "VSS": "17",
  "USBDN": "18",
  "USBDP": "19",
  "VUSB33": "20",
  "PTG0": "21",
  "PTG1": "22",
  "PTB0": "23",
  "PTB1": "24",
  "PTB2": "25",
  "PTB3": "26",
  "PTB4": "27",
  "PTB5": "28",
  "PTD0": "29",
  "PTD1": "30",
  "VDDA/VREFH": "31",
  "VSSA/VREFL": "32",
  "PTD2": "33",
  "PTG2": "34",
  "PTG3": "35",
  "BKGD/MS": "36",
  "PTG4/XTAL": "37",
  "PTG5/EXTAL": "38",
  "VSSOSC": "39",
  "PTC0": "40",
  "PTC1": "41",
  "PTC2": "42",
  "PTC3": "43",
  "PTC5": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", "IRQ/TPMCLK": "bidirectional", "~{RESET}": "input", PTF0: "bidirectional", PTF1: "bidirectional", PTF4: "bidirectional", PTF5: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTE3: "bidirectional", PTE4: "bidirectional", PTE5: "bidirectional", PTE6: "bidirectional", PTE7: "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", PTG0: "bidirectional", PTG1: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTD2: "bidirectional", PTG2: "bidirectional", PTG3: "bidirectional", "BKGD/MS": "bidirectional", "PTG4/XTAL": "bidirectional", "PTG5/EXTAL": "bidirectional", VSSOSC: "power_in", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JM8xLD";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Microcontroller, S08 core, 16kB Flash, 512B RAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JS16CFK`. Reference prefix: `IC`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08JS16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 */
export class MC9S08JS16CFK extends Component.withPins({
  "PTB0/IRQ/TCLK": "1",
  "PTB1/~{RESET}": "2",
  "PTB2/BKGD/MS": "3",
  "PTB3/~{BLMS}": "4",
  "PTA0/KBIP0/PTMCH0": "5",
  "PTA1/KBIP1/MISO": "7",
  "PTA2/KBIP2/MOSI": "8",
  "PTA3/KBIP3/SPSCK": "9",
  "PTA4/KBIP4/~{SS}": "10",
  "VDD": "11",
  "VSS": "13",
  "USBDN": "14",
  "USBDP": "15",
  "VUSB33": "16",
  "PTA5/KBIP5/TPMCH1": "17",
  "PTA6/KBIP6/RxD": "19",
  "PTA7/KBIP7/TxD": "20",
  "PTB4/XTAL": "21",
  "PTB5/EXTAL": "22",
  "VSSOSC": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTB0/IRQ/TCLK": "bidirectional", "PTB1/~{RESET}": "bidirectional", "PTB2/BKGD/MS": "bidirectional", "PTB3/~{BLMS}": "bidirectional", "PTA0/KBIP0/PTMCH0": "bidirectional", "PTA1/KBIP1/MISO": "bidirectional", "PTA2/KBIP2/MOSI": "bidirectional", "PTA3/KBIP3/SPSCK": "bidirectional", "PTA4/KBIP4/~{SS}": "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", "PTA5/KBIP5/TPMCH1": "bidirectional", "PTA6/KBIP6/RxD": "bidirectional", "PTA7/KBIP7/TxD": "bidirectional", "PTB4/XTAL": "bidirectional", "PTB5/EXTAL": "bidirectional", VSSOSC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JS16CFK";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Microcontroller, S08 core, 16kB Flash, 512B RAM, SOIC-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JS16CWJ`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08JS16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MC9S08JS16CWJ extends Component.withPins({
  "PTB4/XTAL": "1",
  "PTB5/EXTAL": "2",
  "VSSOSC": "3",
  "PTB0/IRQ/TCLK": "4",
  "PTB1/~{RESET}": "5",
  "PTB2/BKGD/MS": "6",
  "PTB3/~{BLMS}": "7",
  "PTA0/KBIP0/PTMCH0": "8",
  "PTA1/KBIP1/MISO": "9",
  "PTA2/KBIP2/MOSI": "10",
  "PTA3/KBIP3/SPSCK": "11",
  "PTA4/KBIP4/~{SS}": "12",
  "VDD": "13",
  "VSS": "14",
  "USBDN": "15",
  "USBDP": "16",
  "VUSB33": "17",
  "PTA5/KBIP5/TPMCH1": "18",
  "PTA6/KBIP6/RxD": "19",
  "PTA7/KBIP7/TxD": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTB4/XTAL": "bidirectional", "PTB5/EXTAL": "bidirectional", VSSOSC: "power_in", "PTB0/IRQ/TCLK": "bidirectional", "PTB1/~{RESET}": "bidirectional", "PTB2/BKGD/MS": "bidirectional", "PTB3/~{BLMS}": "bidirectional", "PTA0/KBIP0/PTMCH0": "bidirectional", "PTA1/KBIP1/MISO": "bidirectional", "PTA2/KBIP2/MOSI": "bidirectional", "PTA3/KBIP3/SPSCK": "bidirectional", "PTA4/KBIP4/~{SS}": "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", "PTA5/KBIP5/TPMCH1": "bidirectional", "PTA6/KBIP6/RxD": "bidirectional", "PTA7/KBIP7/TxD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JS16CWJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Microcontroller, S08 core, 8kB Flash, 512B RAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JS8CFK`. Reference prefix: `IC`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08JS16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 */
export class MC9S08JS8CFK extends Component.withPins({
  "PTB0/IRQ/TCLK": "1",
  "PTB1/~{RESET}": "2",
  "PTB2/BKGD/MS": "3",
  "PTB3/~{BLMS}": "4",
  "PTA0/KBIP0/PTMCH0": "5",
  "PTA1/KBIP1/MISO": "7",
  "PTA2/KBIP2/MOSI": "8",
  "PTA3/KBIP3/SPSCK": "9",
  "PTA4/KBIP4/~{SS}": "10",
  "VDD": "11",
  "VSS": "13",
  "USBDN": "14",
  "USBDP": "15",
  "VUSB33": "16",
  "PTA5/KBIP5/TPMCH1": "17",
  "PTA6/KBIP6/RxD": "19",
  "PTA7/KBIP7/TxD": "20",
  "PTB4/XTAL": "21",
  "PTB5/EXTAL": "22",
  "VSSOSC": "23",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTB0/IRQ/TCLK": "bidirectional", "PTB1/~{RESET}": "bidirectional", "PTB2/BKGD/MS": "bidirectional", "PTB3/~{BLMS}": "bidirectional", "PTA0/KBIP0/PTMCH0": "bidirectional", "PTA1/KBIP1/MISO": "bidirectional", "PTA2/KBIP2/MOSI": "bidirectional", "PTA3/KBIP3/SPSCK": "bidirectional", "PTA4/KBIP4/~{SS}": "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", "PTA5/KBIP5/TPMCH1": "bidirectional", "PTA6/KBIP6/RxD": "bidirectional", "PTA7/KBIP7/TxD": "bidirectional", "PTB4/XTAL": "bidirectional", "PTB5/EXTAL": "bidirectional", VSSOSC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JS8CFK";
  override referencePrefix = "IC";
}

/**
 * 8-bit USB Microcontroller, S08 core, 8kB Flash, 512B RAM, SOIC-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08JS8CWJ`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08JS16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MC9S08JS8CWJ extends Component.withPins({
  "PTB4/XTAL": "1",
  "PTB5/EXTAL": "2",
  "VSSOSC": "3",
  "PTB0/IRQ/TCLK": "4",
  "PTB1/~{RESET}": "5",
  "PTB2/BKGD/MS": "6",
  "PTB3/~{BLMS}": "7",
  "PTA0/KBIP0/PTMCH0": "8",
  "PTA1/KBIP1/MISO": "9",
  "PTA2/KBIP2/MOSI": "10",
  "PTA3/KBIP3/SPSCK": "11",
  "PTA4/KBIP4/~{SS}": "12",
  "VDD": "13",
  "VSS": "14",
  "USBDN": "15",
  "USBDP": "16",
  "VUSB33": "17",
  "PTA5/KBIP5/TPMCH1": "18",
  "PTA6/KBIP6/RxD": "19",
  "PTA7/KBIP7/TxD": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTB4/XTAL": "bidirectional", "PTB5/EXTAL": "bidirectional", VSSOSC: "power_in", "PTB0/IRQ/TCLK": "bidirectional", "PTB1/~{RESET}": "bidirectional", "PTB2/BKGD/MS": "bidirectional", "PTB3/~{BLMS}": "bidirectional", "PTA0/KBIP0/PTMCH0": "bidirectional", "PTA1/KBIP1/MISO": "bidirectional", "PTA2/KBIP2/MOSI": "bidirectional", "PTA3/KBIP3/SPSCK": "bidirectional", "PTA4/KBIP4/~{SS}": "bidirectional", VDD: "power_in", VSS: "power_in", USBDN: "bidirectional", USBDP: "bidirectional", VUSB33: "power_out", "PTA5/KBIP5/TPMCH1": "bidirectional", "PTA6/KBIP6/RxD": "bidirectional", "PTA7/KBIP7/TxD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08JS8CWJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit Segment LCD Microcontroller, S08 core, 32kB Flash, 1984B RAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08LG32J0xLF`. Reference prefix: `IC`.
 * Footprint filters: *LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08LG32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08LG32J0xLF extends Component.withPins({
  "PTD7/LCD7": "1",
  "PTD6/LCD6": "2",
  "PTD5/LCD5": "3",
  "PTD4/LCD4": "4",
  "PTD3/LCD3": "5",
  "PTD2/LCD2": "6",
  "PTD1/LCD1": "7",
  "PTD0/LCD0": "8",
  "VCAP1": "9",
  "VCAP2": "10",
  "VLL1": "11",
  "VLL2": "12",
  "VLL3": "13",
  "PTF5": "14",
  "PTF4": "15",
  "VSS": "16",
  "VDD": "17",
  "PTF7/EXTAL": "18",
  "PTF6/XTAL": "19",
  "VDDA/VREFH": "20",
  "VSSA/VREFL": "21",
  "PTF2": "22",
  "PTF1": "23",
  "PTF0": "24",
  "PTF3": "25",
  "PTC6/~{RESET}": "26",
  "PTC5/BKGD/MS": "27",
  "PTA7": "28",
  "PTA6": "29",
  "PTA5": "30",
  "PTA4": "31",
  "PTA3": "32",
  "PTA2": "33",
  "PTA1": "34",
  "PTA0/LCD21": "35",
  "PTC4/LCD20": "36",
  "PTC3/LCD19": "37",
  "PTC2/LCD18": "38",
  "PTC1/LCD17": "39",
  "PTC0/LCD16": "40",
  "PTE7/LCD15": "41",
  "PTE6/LCD14": "42",
  "PTE5/LCD13": "43",
  "PTE4/LCD12": "44",
  "PTE3/LCD11": "45",
  "PTE2/LCD10": "46",
  "PTE1/LCD9": "47",
  "PTE0/LCD8": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTD7/LCD7": "bidirectional", "PTD6/LCD6": "bidirectional", "PTD5/LCD5": "bidirectional", "PTD4/LCD4": "bidirectional", "PTD3/LCD3": "bidirectional", "PTD2/LCD2": "bidirectional", "PTD1/LCD1": "bidirectional", "PTD0/LCD0": "bidirectional", VCAP1: "power_in", VCAP2: "power_in", VLL1: "power_in", VLL2: "power_in", VLL3: "power_in", PTF5: "bidirectional", PTF4: "bidirectional", VSS: "power_in", VDD: "power_in", "PTF7/EXTAL": "bidirectional", "PTF6/XTAL": "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTF2: "bidirectional", PTF1: "bidirectional", PTF0: "bidirectional", PTF3: "bidirectional", "PTC6/~{RESET}": "bidirectional", "PTC5/BKGD/MS": "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", "PTA0/LCD21": "bidirectional", "PTC4/LCD20": "bidirectional", "PTC3/LCD19": "bidirectional", "PTC2/LCD18": "bidirectional", "PTC1/LCD17": "bidirectional", "PTC0/LCD16": "bidirectional", "PTE7/LCD15": "bidirectional", "PTE6/LCD14": "bidirectional", "PTE5/LCD13": "bidirectional", "PTE4/LCD12": "bidirectional", "PTE3/LCD11": "bidirectional", "PTE2/LCD10": "bidirectional", "PTE1/LCD9": "bidirectional", "PTE0/LCD8": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08LG32J0xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit Segment LCD Microcontroller, S08 core, 32kB Flash, 1984B RAM, LQFP-64
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08LG32J0xLH`. Reference prefix: `IC`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/files-static/microcontrollers/doc/ref_manual/MC9S08LG32RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class MC9S08LG32J0xLH extends Component.withPins({
  "PTD7/LCD7": "1",
  "PTD6/LCD6": "2",
  "PTD5/LCD5": "3",
  "PTD4/LCD4": "4",
  "PTD3/LCD3": "5",
  "PTD2/LCD2": "6",
  "PTB3/LCD32": "7",
  "PTB2/LCD31": "8",
  "PTB1/LCD30": "9",
  "PTB0/LCD29": "10",
  "PTD1/LCD1": "11",
  "PTD0/LCD0": "12",
  "VCAP1": "13",
  "VCAP2": "14",
  "VLL1": "15",
  "VLL2": "16",
  "VLL3_17": "17",
  "PTF5": "18",
  "PTF4": "19",
  "PTI5": "20",
  "PTI4": "21",
  "PTH7": "22",
  "VSS_23": "23",
  "VDD": "24",
  "PTF7/EXTAL": "25",
  "PTF6/XTAL": "26",
  "VDDA/VREFH": "27",
  "VSSA/VREFL": "28",
  "PTH6": "29",
  "PTF2": "30",
  "PTF1": "31",
  "PTF0": "32",
  "PTF3": "33",
  "PTH5": "34",
  "PTH4": "35",
  "PTC6/~{RESET}": "36",
  "PTC5/BKGD/MS": "37",
  "PTA7": "38",
  "PTA6": "39",
  "PTA5": "40",
  "PTA4": "41",
  "PTA3": "42",
  "PTA2": "43",
  "PTA1": "44",
  "PTG3/LCD36": "45",
  "PTG2/LCD35": "46",
  "PTA0/LCD21": "47",
  "PTC4/LCD20": "48",
  "PTC3/LCD19": "49",
  "PTC2/LCD18": "50",
  "PTC1/LCD17": "51",
  "PTC0/LCD16": "52",
  "PTE7/LCD15": "53",
  "PTE6/LCD14": "54",
  "VSS_55": "55",
  "VLL3_56": "56",
  "PTG1/LCD34": "57",
  "PTG0/LCD33": "58",
  "PTE5/LCD13": "59",
  "PTE4/LCD12": "60",
  "PTE3/LCD11": "61",
  "PTE2/LCD10": "62",
  "PTE1/LCD9": "63",
  "PTE0/LCD8": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTD7/LCD7": "bidirectional", "PTD6/LCD6": "bidirectional", "PTD5/LCD5": "bidirectional", "PTD4/LCD4": "bidirectional", "PTD3/LCD3": "bidirectional", "PTD2/LCD2": "bidirectional", "PTB3/LCD32": "bidirectional", "PTB2/LCD31": "bidirectional", "PTB1/LCD30": "bidirectional", "PTB0/LCD29": "bidirectional", "PTD1/LCD1": "bidirectional", "PTD0/LCD0": "bidirectional", VCAP1: "power_in", VCAP2: "power_in", VLL1: "power_in", VLL2: "power_in", VLL3_17: "power_in", PTF5: "bidirectional", PTF4: "bidirectional", PTI5: "bidirectional", PTI4: "bidirectional", PTH7: "bidirectional", VSS_23: "power_in", VDD: "power_in", "PTF7/EXTAL": "bidirectional", "PTF6/XTAL": "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTH6: "bidirectional", PTF2: "bidirectional", PTF1: "bidirectional", PTF0: "bidirectional", PTF3: "bidirectional", PTH5: "bidirectional", PTH4: "bidirectional", "PTC6/~{RESET}": "bidirectional", "PTC5/BKGD/MS": "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", "PTG3/LCD36": "bidirectional", "PTG2/LCD35": "bidirectional", "PTA0/LCD21": "bidirectional", "PTC4/LCD20": "bidirectional", "PTC3/LCD19": "bidirectional", "PTC2/LCD18": "bidirectional", "PTC1/LCD17": "bidirectional", "PTC0/LCD16": "bidirectional", "PTE7/LCD15": "bidirectional", "PTE6/LCD14": "bidirectional", VSS_55: "power_in", VLL3_56: "power_in", "PTG1/LCD34": "bidirectional", "PTG0/LCD33": "bidirectional", "PTE5/LCD13": "bidirectional", "PTE4/LCD12": "bidirectional", "PTE3/LCD11": "bidirectional", "PTE2/LCD10": "bidirectional", "PTE1/LCD9": "bidirectional", "PTE0/LCD8": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08LG32J0xLH";
  override referencePrefix = "IC";
}

/**
 * 8-bit Segment LCD Microcontroller, S08 core, 32kB Flash, 1984B RAM, LQFP-80
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08LG32J0xLK`. Reference prefix: `IC`.
 * Footprint filters: *LQFP*14x14mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08LG32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-80_14x14mm_P0.65mm.
 */
export class MC9S08LG32J0xLK extends Component.withPins({
  "PTD7/LCD7": "1",
  "PTD6/LCD6": "2",
  "PTD5/LCD5": "3",
  "PTD4/LCD4": "4",
  "PTD3/LCD3": "5",
  "PTD2/LCD2": "6",
  "PTB3/LCD32": "7",
  "PTB2/LCD31": "8",
  "PTB7/LCD40": "9",
  "PTB6/LCD39": "10",
  "PTB5/LCD38": "11",
  "PTB4/LCD37": "12",
  "PTB1/LCD30": "13",
  "PTB0/LCD29": "14",
  "PTD1/LCD1": "15",
  "PTD0/LCD0": "16",
  "VCAP1": "17",
  "VCAP2": "18",
  "VLL1": "19",
  "VLL2": "20",
  "VLL3_21": "21",
  "PTF5": "22",
  "PTF4": "23",
  "PTI5": "24",
  "PTI4": "25",
  "PTI3": "26",
  "PTI2": "27",
  "PTI1": "28",
  "PTI0": "29",
  "PTH7": "30",
  "VSS_31": "31",
  "VDD": "32",
  "PTF7/EXTAL": "33",
  "PTF6/XTAL": "34",
  "VDDA/VREFH": "35",
  "VSSA/VREFL": "36",
  "PTH6": "37",
  "PTF2": "38",
  "PTF1": "39",
  "PTF0": "40",
  "PTF3": "41",
  "PTH5": "42",
  "PTH4": "43",
  "PTH3": "44",
  "PTH2": "45",
  "PTH1": "46",
  "PTH0": "47",
  "PTC6/~{RESET}": "48",
  "PTC5/BKGD/MS": "49",
  "PTA7": "50",
  "PTA6": "51",
  "PTA5": "52",
  "PTA4": "53",
  "PTA3": "54",
  "PTA2": "55",
  "PTA1": "56",
  "PTG3/LCD36": "57",
  "PTG2/LCD35": "58",
  "PTA0/LCD21": "59",
  "PTC4/LCD20": "60",
  "PTC3/LCD19": "61",
  "PTC2/LCD18": "62",
  "PTC1/LCD17": "63",
  "PTC0/LCD16": "64",
  "PTE7/LCD15": "65",
  "PTE6/LCD14": "66",
  "VSS_67": "67",
  "VLL3_68": "68",
  "PTG7/LCD44": "69",
  "PTG6/LCD43": "70",
  "PTG5/LCD42": "71",
  "PTG4/LCD41": "72",
  "PTG1/LCD34": "73",
  "PTG0/LCD33": "74",
  "PTE5/LCD13": "75",
  "PTE4/LCD12": "76",
  "PTE3/LCD11": "77",
  "PTE2/LCD10": "78",
  "PTE1/LCD9": "79",
  "PTE0/LCD8": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTD7/LCD7": "bidirectional", "PTD6/LCD6": "bidirectional", "PTD5/LCD5": "bidirectional", "PTD4/LCD4": "bidirectional", "PTD3/LCD3": "bidirectional", "PTD2/LCD2": "bidirectional", "PTB3/LCD32": "bidirectional", "PTB2/LCD31": "bidirectional", "PTB7/LCD40": "bidirectional", "PTB6/LCD39": "bidirectional", "PTB5/LCD38": "bidirectional", "PTB4/LCD37": "bidirectional", "PTB1/LCD30": "bidirectional", "PTB0/LCD29": "bidirectional", "PTD1/LCD1": "bidirectional", "PTD0/LCD0": "bidirectional", VCAP1: "power_in", VCAP2: "power_in", VLL1: "power_in", VLL2: "power_in", VLL3_21: "power_in", PTF5: "bidirectional", PTF4: "bidirectional", PTI5: "bidirectional", PTI4: "bidirectional", PTI3: "bidirectional", PTI2: "bidirectional", PTI1: "bidirectional", PTI0: "bidirectional", PTH7: "bidirectional", VSS_31: "power_in", VDD: "power_in", "PTF7/EXTAL": "bidirectional", "PTF6/XTAL": "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTH6: "bidirectional", PTF2: "bidirectional", PTF1: "bidirectional", PTF0: "bidirectional", PTF3: "bidirectional", PTH5: "bidirectional", PTH4: "bidirectional", PTH3: "bidirectional", PTH2: "bidirectional", PTH1: "bidirectional", PTH0: "bidirectional", "PTC6/~{RESET}": "bidirectional", "PTC5/BKGD/MS": "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA5: "bidirectional", PTA4: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", "PTG3/LCD36": "bidirectional", "PTG2/LCD35": "bidirectional", "PTA0/LCD21": "bidirectional", "PTC4/LCD20": "bidirectional", "PTC3/LCD19": "bidirectional", "PTC2/LCD18": "bidirectional", "PTC1/LCD17": "bidirectional", "PTC0/LCD16": "bidirectional", "PTE7/LCD15": "bidirectional", "PTE6/LCD14": "bidirectional", VSS_67: "power_in", VLL3_68: "power_in", "PTG7/LCD44": "bidirectional", "PTG6/LCD43": "bidirectional", "PTG5/LCD42": "bidirectional", "PTG4/LCD41": "bidirectional", "PTG1/LCD34": "bidirectional", "PTG0/LCD33": "bidirectional", "PTE5/LCD13": "bidirectional", "PTE4/LCD12": "bidirectional", "PTE3/LCD11": "bidirectional", "PTE2/LCD10": "bidirectional", "PTE1/LCD9": "bidirectional", "PTE0/LCD8": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08LG32J0xLK";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08MP16xLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08MP16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08MP16xLC extends Component.withPins({
  "PTC2": "1",
  "PTC3": "2",
  "PTC4": "3",
  "PTC5": "4",
  "PTC6": "5",
  "VSS_6": "6",
  "VDD": "7",
  "PTA0": "8",
  "PTA1": "9",
  "PTA2": "10",
  "PTA3": "11",
  "PTF1/~{RESET}": "12",
  "PTA4": "13",
  "PTA5": "14",
  "PTA6": "15",
  "PTA7": "16",
  "PTB0": "17",
  "PTB1": "18",
  "PTB2": "19",
  "PTB3": "20",
  "VDDA/VREFH": "21",
  "VSSA/VREFL": "22",
  "PTB4": "23",
  "PTB5": "24",
  "PTB6": "25",
  "PTB7": "26",
  "PTE5/XTAL": "27",
  "PTE6/EXTAL": "28",
  "VSS_29": "29",
  "PTF0/BKGD/MS": "30",
  "PTC0": "31",
  "PTC1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC2: "bidirectional", PTC3: "bidirectional", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", VSS_6: "power_in", VDD: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "PTF1/~{RESET}": "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", "PTE5/XTAL": "bidirectional", "PTE6/EXTAL": "bidirectional", VSS_29: "power_in", "PTF0/BKGD/MS": "bidirectional", PTC0: "bidirectional", PTC1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08MP16xLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-48
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08MP16xLF`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08MP16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MC9S08MP16xLF extends Component.withPins({
  "PTC4": "1",
  "PTC5": "2",
  "PTC6": "3",
  "PTC7": "4",
  "PTD0": "5",
  "PTD1": "6",
  "PTD2": "7",
  "PTD3": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "PTA0": "11",
  "PTA1": "12",
  "PTA2": "13",
  "PTA3": "14",
  "PTD4": "15",
  "PTD5": "16",
  "PTD6": "17",
  "PTD7": "18",
  "PTF1/~{RESET}": "19",
  "PTF2": "20",
  "PTA4": "21",
  "PTA5": "22",
  "PTA6": "23",
  "PTA7": "24",
  "PTE0": "25",
  "PTE1": "26",
  "PTE2": "27",
  "PTB0": "28",
  "PTB1": "29",
  "PTB2": "30",
  "PTB3": "31",
  "VDDA/VREFH": "32",
  "VSSA/VREFL": "33",
  "PTE3": "34",
  "PTE4": "35",
  "PTB4": "36",
  "PTB5": "37",
  "PTB6": "38",
  "PTB7": "39",
  "PTE5/XTAL": "40",
  "PTE6/EXTAL": "41",
  "VSS_42": "42",
  "VDD_43": "43",
  "PTF0/BKGD/MS": "44",
  "PTC0": "45",
  "PTC1": "46",
  "PTC2": "47",
  "PTC3": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", PTC7: "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", PTD2: "bidirectional", PTD3: "bidirectional", VSS_9: "power_in", VDD_10: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTD4: "bidirectional", PTD5: "bidirectional", PTD6: "bidirectional", PTD7: "bidirectional", "PTF1/~{RESET}": "bidirectional", PTF2: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTE0: "bidirectional", PTE1: "bidirectional", PTE2: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTE3: "bidirectional", PTE4: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", PTB7: "bidirectional", "PTE5/XTAL": "bidirectional", "PTE6/EXTAL": "bidirectional", VSS_42: "power_in", VDD_43: "power_in", "PTF0/BKGD/MS": "bidirectional", PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08MP16xLF";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, SOIC-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08MP16xWL`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08MP16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MC9S08MP16xWL extends Component.withPins({
  "PTC0": "1",
  "PTC1": "2",
  "PTC2": "3",
  "PTC3": "4",
  "PTC4": "5",
  "PTC5": "6",
  "PTC6": "7",
  "VSS": "8",
  "VDD": "9",
  "PTA0": "10",
  "PTA1": "11",
  "PTA2": "12",
  "PTA3": "13",
  "PTF1/~{RESET}": "14",
  "PTA4": "15",
  "PTA5": "16",
  "PTA6": "17",
  "PTA7": "18",
  "PTB0": "19",
  "PTB1": "20",
  "PTB2": "21",
  "PTB3": "22",
  "VDDA/VREFH": "23",
  "VSSA/VREFL": "24",
  "PTB4": "25",
  "PTB5": "26",
  "PTB6": "27",
  "PTF0/BKGD/MS": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC0: "bidirectional", PTC1: "bidirectional", PTC2: "bidirectional", PTC3: "bidirectional", PTC4: "bidirectional", PTC5: "bidirectional", PTC6: "bidirectional", VSS: "power_in", VDD: "power_in", PTA0: "bidirectional", PTA1: "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", "PTF1/~{RESET}": "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", "PTF0/BKGD/MS": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08MP16xWL";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QA4CDNE`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QA4RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08QA4CDNE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QA4CDNE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 2kB Flash, 160B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QA2CDNE`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QA4RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08QA2CDNE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QA2CDNE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, DFN-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QA4CFQE`. Reference prefix: `IC`.
 * Footprint filters: DFN*4x4mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QA4RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_4x4mm_P0.8mm_EP2.5x3.6mm.
 */
export class MC9S08QA4CFQE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QA4CFQE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 2kB Flash, 160B RAM, DFN-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QA2CFQE`. Reference prefix: `IC`.
 * Footprint filters: DFN*4x4mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QA4RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_4x4mm_P0.8mm_EP2.5x3.6mm.
 */
export class MC9S08QA2CFQE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QA2CFQE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, DIP-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QA4CPAE`. Reference prefix: `IC`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QA4RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MC9S08QA4CPAE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QA4CPAE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 2kB Flash, 160B RAM, DIP-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QA2CPAE`. Reference prefix: `IC`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QA4RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MC9S08QA2CPAE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QA2CPAE";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QB8xGK`. Reference prefix: `IC`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QB8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 */
export class MC9S08QB8xGK extends Component.withPins({
  "VDD": "1",
  "VDDA/VREFH": "2",
  "VSSA/VREFL": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC1": "9",
  "PTC0": "10",
  "PTB3": "11",
  "PTB2": "12",
  "PTB1": "13",
  "PTB0": "14",
  "PTA7": "15",
  "PTA6": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
  "PTC7": "21",
  "PTC6": "22",
  "PTA5/~{RESET}": "23",
  "PTA4/BKGD/MS": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QB8xGK";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QB4xGK`. Reference prefix: `IC`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QB8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 */
export class MC9S08QB4xGK extends Component.withPins({
  "VDD": "1",
  "VDDA/VREFH": "2",
  "VSSA/VREFL": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC1": "9",
  "PTC0": "10",
  "PTB3": "11",
  "PTB2": "12",
  "PTB1": "13",
  "PTB0": "14",
  "PTA7": "15",
  "PTA6": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
  "PTC7": "21",
  "PTC6": "22",
  "PTA5/~{RESET}": "23",
  "PTA4/BKGD/MS": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QB4xGK";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QB8xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QB8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08QB8xTG extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QB8xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QB4xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QB8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08QB4xTG extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QB4xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, SOIC-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QB8xWL`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QB8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MC9S08QB8xWL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QB8xWL";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, SOIC-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QB4xWL`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08QB8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MC9S08QB4xWL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QB4xWL";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, DIP-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QD4xPC`. Reference prefix: `IC`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QD4.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MC9S08QD4xPC extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QD4xPC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 2kB Flash, 128B RAM, DIP-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QD2xPC`. Reference prefix: `IC`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QD4.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MC9S08QD2xPC extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QD2xPC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QD4xSC`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QD4.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08QD4xSC extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QD4xSC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 2kB Flash, 128B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QD2xSC`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QD4.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08QD2xSC extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QD2xSC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 8kB Flash, 512B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG8xDNE`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08QG8xDNE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG8xDNE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG4xDNE`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08QG4xDNE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG4xDNE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 8kB Flash, 512B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG8xDTE`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08QG8xDTE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG8xDTE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG4xDTE`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08QG4xDTE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG4xDTE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 8kB Flash, 512B RAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG8xFKE`. Reference prefix: `IC`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MC9S08QG8xFKE extends Component.withPins({
  "PTA4/BKGD/MS": "1",
  "VDD": "2",
  "VSS": "3",
  "PTB7/EXTAL": "4",
  "PTB6/XTAL": "5",
  "PTB5": "6",
  "PTB4": "10",
  "PTB3": "12",
  "PTB2": "13",
  "PTB1": "14",
  "PTB0": "15",
  "PTA3": "16",
  "PTA2": "17",
  "PTA1": "18",
  "PTA0": "20",
  "PTA5/~{RESET}": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", "PTA5/~{RESET}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG8xFKE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG4xFKE`. Reference prefix: `IC`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MC9S08QG4xFKE extends Component.withPins({
  "PTA4/BKGD/MS": "1",
  "VDD": "2",
  "VSS": "3",
  "PTB7/EXTAL": "4",
  "PTB6/XTAL": "5",
  "PTB5": "6",
  "PTB4": "10",
  "PTB3": "12",
  "PTB2": "13",
  "PTB1": "14",
  "PTB0": "15",
  "PTA3": "16",
  "PTA2": "17",
  "PTA1": "18",
  "PTA0": "20",
  "PTA5/~{RESET}": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", "PTA5/~{RESET}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG4xFKE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 8kB Flash, 512B RAM, DFN-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG8xFQE`. Reference prefix: `IC`.
 * Footprint filters: DFN*4x4mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_4x4mm_P0.8mm_EP2.5x3.6mm.
 */
export class MC9S08QG8xFQE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG8xFQE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, DFN-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG4xFQE`. Reference prefix: `IC`.
 * Footprint filters: DFN*4x4mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_4x4mm_P0.8mm_EP2.5x3.6mm.
 */
export class MC9S08QG4xFQE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG4xFQE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, DIP-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG4xPAE`. Reference prefix: `IC`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MC9S08QG4xPAE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG4xPAE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 8kB Flash, 512B RAM, DIP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08QG8xPBE`. Reference prefix: `IC`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08QG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MC9S08QG8xPBE extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08QG8xPBE";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SC4xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SC4.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SC4xTG extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SC4xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, DIP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SE8xRL`. Reference prefix: `IC`.
 * Footprint filters: DIP*15.24mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SE8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class MC9S08SE8xRL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SE8xRL";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, DIP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SE4xRL`. Reference prefix: `IC`.
 * Footprint filters: DIP*15.24mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SE8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class MC9S08SE4xRL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SE4xRL";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SE8xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SE8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SE8xTG extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SE8xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SE4xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SE8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SE4xTG extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SE4xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, SOIC-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SE8xWL`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SE8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MC9S08SE8xWL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SE8xWL";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, SOIC-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SE4xWL`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SE8RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MC9S08SE4xWL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SE4xWL";
  override referencePrefix = "IC";
}

/**
 * 8-bit Motor Control Microcontroller, S08 core, 4kB Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SF4xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SF4RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SF4xTG extends Component.withPins({
  "VDD": "1",
  "PTA0": "2",
  "PTA1/~{RESET}": "3",
  "PTA2": "4",
  "PTA3": "5",
  "PTA4": "6",
  "PTA5": "7",
  "PTB0": "8",
  "PTB1": "9",
  "PTB2": "10",
  "PTB3": "11",
  "PTB4": "12",
  "PTB5": "13",
  "PTB6": "14",
  "PTB7/BKGD/MS": "15",
  "VSS": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", PTA0: "bidirectional", "PTA1/~{RESET}": "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", "PTB7/BKGD/MS": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SF4xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit Motor Control Microcontroller, S08 core, 4kB Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SF4xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SF4RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SF4xTJ extends Component.withPins({
  "VDD": "1",
  "PTA0": "2",
  "PTA1/~{RESET}": "3",
  "PTA2": "4",
  "PTA3": "5",
  "PTA4": "6",
  "PTA5": "7",
  "PTA6": "8",
  "PTA7": "9",
  "PTB0": "10",
  "PTB1": "11",
  "PTB2": "12",
  "PTB3": "13",
  "PTB4": "14",
  "PTB5": "15",
  "PTB6": "16",
  "PTB7/BKGD/MS": "17",
  "PTC0": "18",
  "PTC1": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", PTA0: "bidirectional", "PTA1/~{RESET}": "bidirectional", PTA2: "bidirectional", PTA3: "bidirectional", PTA4: "bidirectional", PTA5: "bidirectional", PTA6: "bidirectional", PTA7: "bidirectional", PTB0: "bidirectional", PTB1: "bidirectional", PTB2: "bidirectional", PTB3: "bidirectional", PTB4: "bidirectional", PTB5: "bidirectional", PTB6: "bidirectional", "PTB7/BKGD/MS": "bidirectional", PTC0: "bidirectional", PTC1: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SF4xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 32kB Flash, 1kB RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG32xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SG32xTG extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG32xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 16kB Flash, 1kB RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG16xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SG16xTG extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG16xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 32kB Flash, 1kB RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG32xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SG32xTJ extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG32xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 16kB Flash, 1kB RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG16xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SG16xTJ extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG16xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 32kB Flash, 1kB RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG32xTL`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MC9S08SG32xTL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "~{RESET}": "3",
  "BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG32xTL";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 16kB Flash, 1kB RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG16xTL`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MC9S08SG16xTL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "~{RESET}": "3",
  "BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG16xTL";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 8kB Flash, 512B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG8xSC`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08SG8xSC extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG8xSC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG4xSC`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08SG4xSC extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG4xSC";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG4xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SG4xTG extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG4xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG4xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SG4xTJ extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG4xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 8kB Flash, 512B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG8xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SG8xTG extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG8xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit Small Package Microcontroller, S08 core, 8kB Flash, 512B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SG8xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SG8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SG8xTJ extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SG8xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 32kB Flash, 1kB RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH32xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SH32xTG extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH32xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH16xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SH16xTG extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH16xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 32kB Flash, 1kB RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH32xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SH32xTJ extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH32xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH16xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SH16xTJ extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH16xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 32kB Flash, 1kB RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH32xTL`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MC9S08SH32xTL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH32xTL";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH16xTL`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MC9S08SH16xTL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH16xTL";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 32kB Flash, 1kB RAM, SOIC-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH32xWL`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MC9S08SH32xWL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH32xWL";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 16kB Flash, 1kB RAM, SOIC-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH16xWL`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MC9S08SH16xWL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "PTA5/~{RESET}": "3",
  "PTA4/BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH16xWL";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH8xFK`. Reference prefix: `IC`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MC9S08SH8xFK extends Component.withPins({
  "VDD": "1",
  "VSS": "3",
  "PTB7/EXTAL": "4",
  "PTB6/XTAL": "5",
  "PTB5": "6",
  "PTB4": "7",
  "PTC3": "8",
  "PTC2": "9",
  "PTC1": "10",
  "PTC0": "11",
  "PTB3": "12",
  "PTB2": "13",
  "PTB1": "14",
  "PTB0": "15",
  "PTA3": "16",
  "PTA2": "17",
  "PTA1": "18",
  "PTA0": "19",
  "PTA5/~{RESET}": "23",
  "PTA4/BKGD/MS": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH8xFK";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, QFN-24
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH4xFK`. Reference prefix: `IC`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MC9S08SH4xFK extends Component.withPins({
  "VDD": "1",
  "VSS": "3",
  "PTB7/EXTAL": "4",
  "PTB6/XTAL": "5",
  "PTB5": "6",
  "PTB4": "7",
  "PTC3": "8",
  "PTC2": "9",
  "PTC1": "10",
  "PTC0": "11",
  "PTB3": "12",
  "PTB2": "13",
  "PTB1": "14",
  "PTB0": "15",
  "PTA3": "16",
  "PTA2": "17",
  "PTA1": "18",
  "PTA0": "19",
  "PTA5/~{RESET}": "23",
  "PTA4/BKGD/MS": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH4xFK";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, DIP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH8xPJ`. Reference prefix: `IC`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MC9S08SH8xPJ extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH8xPJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH4xPJ`. Reference prefix: `IC`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MC9S08SH4xPJ extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH4xPJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH8xSC`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08SH8xSC extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH8xSC";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH4xSC`. Reference prefix: `IC`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC9S08SH4xSC extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTA3": "5",
  "PTA2": "6",
  "PTA1": "7",
  "PTA0": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH4xSC";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH4xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SH4xTG extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH4xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH4xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SH4xTJ extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH4xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, SOIC-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH8xWJ`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MC9S08SH8xWJ extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH8xWJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 4kB Flash, 256B RAM, SOIC-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH4xWJ`. Reference prefix: `IC`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MC9S08SH4xWJ extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH4xWJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, TSSOP-16
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH8xTG`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MC9S08SH8xTG extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTB3": "9",
  "PTB2": "10",
  "PTB1": "11",
  "PTB0": "12",
  "PTA3": "13",
  "PTA2": "14",
  "PTA1": "15",
  "PTA0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH8xTG";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Microcontroller, S08 core, 8kB Flash, 512B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SH8xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08SH8.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SH8xTJ extends Component.withPins({
  "PTA5/~{RESET}": "1",
  "PTA4/BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA5/~{RESET}": "bidirectional", "PTA4/BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SH8xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit EEPROM with LIN Microcontroller, S08 core, 16kB Flash, 512B RAM, 256B EEPROM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SL16xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08EL32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SL16xTJ extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SL16xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit EEPROM with LIN Microcontroller, S08 core, 16kB Flash, 512B RAM, 256B EEPROM, TSSOP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SL16xTL`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08EL32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MC9S08SL16xTL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "~{RESET}": "3",
  "BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SL16xTL";
  override referencePrefix = "IC";
}

/**
 * 8-bit EEPROM with LIN Microcontroller, S08 core, 32kB Flash, 512B RAM, 256B EEPROM, TSSOP-20
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SL32xTJ`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08EL32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MC9S08SL32xTJ extends Component.withPins({
  "~{RESET}": "1",
  "BKGD/MS": "2",
  "VDD": "3",
  "VSS": "4",
  "PTB7/EXTAL": "5",
  "PTB6/XTAL": "6",
  "PTB5": "7",
  "PTB4": "8",
  "PTC3": "9",
  "PTC2": "10",
  "PTC1": "11",
  "PTC0": "12",
  "PTB3": "13",
  "PTB2": "14",
  "PTB1": "15",
  "PTB0": "16",
  "PTA3": "17",
  "PTA2": "18",
  "PTA1": "19",
  "PTA0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SL32xTJ";
  override referencePrefix = "IC";
}

/**
 * 8-bit EEPROM with LIN Microcontroller, S08 core, 32kB Flash, 512B RAM, 256B EEPROM, TSSOP-28
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SL32xTL`. Reference prefix: `IC`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MC9S08EL32.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MC9S08SL32xTL extends Component.withPins({
  "PTC5": "1",
  "PTC4": "2",
  "~{RESET}": "3",
  "BKGD/MS": "4",
  "VDD": "5",
  "VDDA/VREFH": "6",
  "VSSA/VREFL": "7",
  "VSS": "8",
  "PTB7/EXTAL": "9",
  "PTB6/XTAL": "10",
  "PTB5": "11",
  "PTB4": "12",
  "PTC3": "13",
  "PTC2": "14",
  "PTC1": "15",
  "PTC0": "16",
  "PTB3": "17",
  "PTB2": "18",
  "PTB1": "19",
  "PTB0": "20",
  "PTA7": "21",
  "PTA6": "22",
  "PTA3": "23",
  "PTA2": "24",
  "PTA1": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PTC5: "bidirectional", PTC4: "bidirectional", "~{RESET}": "input", "BKGD/MS": "bidirectional", VDD: "power_in", "VDDA/VREFH": "power_in", "VSSA/VREFL": "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SL32xTL";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Best-in-Class performance Microcontroller, S08 core, 16kB Flash, 1kB RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SV16CLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SV16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08SV16CLC extends Component.withPins({
  "PTA4/BKGD/MS": "1",
  "PTD0": "2",
  "PTD1": "3",
  "VDD": "4",
  "VSS": "5",
  "PTB7/EXTAL": "6",
  "PTB6/XTAL": "7",
  "PTB5": "8",
  "PTD3": "9",
  "PTB4": "10",
  "PTC3": "11",
  "PTC2": "12",
  "PTC1": "13",
  "PTC0": "14",
  "PTB3": "15",
  "PTD4": "16",
  "PTB2": "17",
  "PTB1": "18",
  "PTB0": "19",
  "PTA7": "20",
  "PTA6": "21",
  "PTA3": "22",
  "PTA2": "23",
  "PTA1": "24",
  "PTD5": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
  "PTC5": "29",
  "PTC4": "30",
  "PTA5/~{RESET}": "31",
  "PTD2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA4/BKGD/MS": "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTD3: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTD4: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTD5: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", PTD2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SV16CLC";
  override referencePrefix = "IC";
}

/**
 * 8-bit General Purpose Best-in-Class performance Microcontroller, S08 core, 8kB Flash, 768B RAM, LQFP-32
 *
 * KiCad symbol: `MCU_NXP_S08:MC9S08SV8CLC`. Reference prefix: `IC`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC9S08SV16RM.pdf
 * Keywords: NXP S08 Microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class MC9S08SV8CLC extends Component.withPins({
  "PTA4/BKGD/MS": "1",
  "PTD0": "2",
  "PTD1": "3",
  "VDD": "4",
  "VSS": "5",
  "PTB7/EXTAL": "6",
  "PTB6/XTAL": "7",
  "PTB5": "8",
  "PTD3": "9",
  "PTB4": "10",
  "PTC3": "11",
  "PTC2": "12",
  "PTC1": "13",
  "PTC0": "14",
  "PTB3": "15",
  "PTD4": "16",
  "PTB2": "17",
  "PTB1": "18",
  "PTB0": "19",
  "PTA7": "20",
  "PTA6": "21",
  "PTA3": "22",
  "PTA2": "23",
  "PTA1": "24",
  "PTD5": "25",
  "PTA0": "26",
  "PTC7": "27",
  "PTC6": "28",
  "PTC5": "29",
  "PTC4": "30",
  "PTA5/~{RESET}": "31",
  "PTD2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PTA4/BKGD/MS": "bidirectional", PTD0: "bidirectional", PTD1: "bidirectional", VDD: "power_in", VSS: "power_in", "PTB7/EXTAL": "bidirectional", "PTB6/XTAL": "bidirectional", PTB5: "bidirectional", PTD3: "bidirectional", PTB4: "bidirectional", PTC3: "bidirectional", PTC2: "bidirectional", PTC1: "bidirectional", PTC0: "bidirectional", PTB3: "bidirectional", PTD4: "bidirectional", PTB2: "bidirectional", PTB1: "bidirectional", PTB0: "bidirectional", PTA7: "bidirectional", PTA6: "bidirectional", PTA3: "bidirectional", PTA2: "bidirectional", PTA1: "bidirectional", PTD5: "bidirectional", PTA0: "bidirectional", PTC7: "bidirectional", PTC6: "bidirectional", PTC5: "bidirectional", PTC4: "bidirectional", "PTA5/~{RESET}": "bidirectional", PTD2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_S08:MC9S08SV8CLC";
  override referencePrefix = "IC";
}
