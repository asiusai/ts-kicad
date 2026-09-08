// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 8-Bit Microprocessing unit 1.0MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC6800`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC68A00L.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC6800 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS_1": "1",
  /** Physical pin 2: ~{HALT}; input. */
  "~{HALT}": "2",
  /** Physical pin 3: Phi1; input. */
  "Phi1": "3",
  /** Physical pin 4: ~{IRQ}; input. */
  "~{IRQ}": "4",
  /** Physical pin 5: VMA; output. */
  "VMA": "5",
  /** Physical pin 6: ~{NMI}; input. */
  "~{NMI}": "6",
  /** Physical pin 7: BA; output. */
  "BA": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: A0; output. */
  "A0": "9",
  /** Physical pin 10: A1; output. */
  "A1": "10",
  /** Physical pin 11: A2; output. */
  "A2": "11",
  /** Physical pin 12: A3; output. */
  "A3": "12",
  /** Physical pin 13: A4; output. */
  "A4": "13",
  /** Physical pin 14: A5; output. */
  "A5": "14",
  /** Physical pin 15: A6; output. */
  "A6": "15",
  /** Physical pin 16: A7; output. */
  "A7": "16",
  /** Physical pin 17: A8; output. */
  "A8": "17",
  /** Physical pin 18: A9; output. */
  "A9": "18",
  /** Physical pin 19: A10; output. */
  "A10": "19",
  /** Physical pin 20: A11; output. */
  "A11": "20",
  /** Physical pin 21: VSS; power_in. */
  "VSS_21": "21",
  /** Physical pin 22: A12; output. */
  "A12": "22",
  /** Physical pin 23: A13; output. */
  "A13": "23",
  /** Physical pin 24: A14; output. */
  "A14": "24",
  /** Physical pin 25: A15; output. */
  "A15": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: R/~{W}; output. */
  "R/~{W}": "34",
  /** Physical pin 35: N.C.; no_connect. */
  "N.C._35": "35",
  /** Physical pin 36: DBE; input. */
  "DBE": "36",
  /** Physical pin 37: Phi2; input. */
  "Phi2": "37",
  /** Physical pin 38: N.C.; no_connect. */
  "N.C._38": "38",
  /** Physical pin 39: TSC; input. */
  "TSC": "39",
  /** Physical pin 40: ~{RESET}; input. */
  "~{RESET}": "40",
}) {
  override schema = "CPU_NXP_6800:MC6800";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 1.0MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC6802`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.jameco.com/Jameco/Products/ProdDS/43502.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC6802 extends Component.withPins({
  /** Physical pin 1: VSS; passive. */
  "VSS_1": "1",
  /** Physical pin 2: ~{HALT}; input. */
  "~{HALT}": "2",
  /** Physical pin 3: MR; input. */
  "MR": "3",
  /** Physical pin 4: ~{IRQ}; input. */
  "~{IRQ}": "4",
  /** Physical pin 5: VMA; output. */
  "VMA": "5",
  /** Physical pin 6: ~{NMI}; input. */
  "~{NMI}": "6",
  /** Physical pin 7: BA; output. */
  "BA": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: A0; output. */
  "A0": "9",
  /** Physical pin 10: A1; output. */
  "A1": "10",
  /** Physical pin 11: A2; output. */
  "A2": "11",
  /** Physical pin 12: A3; output. */
  "A3": "12",
  /** Physical pin 13: A4; output. */
  "A4": "13",
  /** Physical pin 14: A5; output. */
  "A5": "14",
  /** Physical pin 15: A6; output. */
  "A6": "15",
  /** Physical pin 16: A7; output. */
  "A7": "16",
  /** Physical pin 17: A8; output. */
  "A8": "17",
  /** Physical pin 18: A9; output. */
  "A9": "18",
  /** Physical pin 19: A10; output. */
  "A10": "19",
  /** Physical pin 20: A11; output. */
  "A11": "20",
  /** Physical pin 21: VSS; power_in. */
  "VSS_21": "21",
  /** Physical pin 22: A12; output. */
  "A12": "22",
  /** Physical pin 23: A13; output. */
  "A13": "23",
  /** Physical pin 24: A14; output. */
  "A14": "24",
  /** Physical pin 25: A15; output. */
  "A15": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: R/~{W}; output. */
  "R/~{W}": "34",
  /** Physical pin 35: VCC_STANDBY; power_in. */
  "VCC_STANDBY": "35",
  /** Physical pin 36: RE; input. */
  "RE": "36",
  /** Physical pin 37: E; output. */
  "E": "37",
  /** Physical pin 38: XTAL; passive. */
  "XTAL": "38",
  /** Physical pin 39: EXTAL; passive. */
  "EXTAL": "39",
  /** Physical pin 40: ~{RESET}; input. */
  "~{RESET}": "40",
}) {
  override schema = "CPU_NXP_6800:MC6802";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 1.0MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC6809`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC68B09S.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC6809 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{NMI}; input. */
  "~{NMI}": "2",
  /** Physical pin 3: ~{IRQ}; input. */
  "~{IRQ}": "3",
  /** Physical pin 4: ~{FIRQ}; input. */
  "~{FIRQ}": "4",
  /** Physical pin 5: BS; output. */
  "BS": "5",
  /** Physical pin 6: BA; output. */
  "BA": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: A0; output. */
  "A0": "8",
  /** Physical pin 9: A1; output. */
  "A1": "9",
  /** Physical pin 10: A2; output. */
  "A2": "10",
  /** Physical pin 11: A3; output. */
  "A3": "11",
  /** Physical pin 12: A4; output. */
  "A4": "12",
  /** Physical pin 13: A5; output. */
  "A5": "13",
  /** Physical pin 14: A6; output. */
  "A6": "14",
  /** Physical pin 15: A7; output. */
  "A7": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: A9; output. */
  "A9": "17",
  /** Physical pin 18: A10; output. */
  "A10": "18",
  /** Physical pin 19: A11; output. */
  "A11": "19",
  /** Physical pin 20: A12; output. */
  "A12": "20",
  /** Physical pin 21: A13; output. */
  "A13": "21",
  /** Physical pin 22: A14; output. */
  "A14": "22",
  /** Physical pin 23: A15; output. */
  "A15": "23",
  /** Physical pin 24: D7; bidirectional. */
  "D7": "24",
  /** Physical pin 25: D6; bidirectional. */
  "D6": "25",
  /** Physical pin 26: D5; bidirectional. */
  "D5": "26",
  /** Physical pin 27: D4; bidirectional. */
  "D4": "27",
  /** Physical pin 28: D3; bidirectional. */
  "D3": "28",
  /** Physical pin 29: D2; bidirectional. */
  "D2": "29",
  /** Physical pin 30: D1; bidirectional. */
  "D1": "30",
  /** Physical pin 31: D0; bidirectional. */
  "D0": "31",
  /** Physical pin 32: R/~{W}; output. */
  "R/~{W}": "32",
  /** Physical pin 33: ~{DMA/BREQ}; input. */
  "~{DMA/BREQ}": "33",
  /** Physical pin 34: E; output. */
  "E": "34",
  /** Physical pin 35: Q; output. */
  "Q": "35",
  /** Physical pin 36: MRDY; input. */
  "MRDY": "36",
  /** Physical pin 37: ~{RESET}; input. */
  "~{RESET}": "37",
  /** Physical pin 38: EXTAL; input. */
  "EXTAL": "38",
  /** Physical pin 39: XTAL; input. */
  "XTAL": "39",
  /** Physical pin 40: ~{HALT}; input. */
  "~{HALT}": "40",
}) {
  override schema = "CPU_NXP_6800:MC6809";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 1.0MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC6809E`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://www.bitsavers.org/components/motorola/_dataSheets/6809E.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC6809E extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{NMI}; input. */
  "~{NMI}": "2",
  /** Physical pin 3: ~{IRQ}; input. */
  "~{IRQ}": "3",
  /** Physical pin 4: ~{FIRQ}; input. */
  "~{FIRQ}": "4",
  /** Physical pin 5: BS; output. */
  "BS": "5",
  /** Physical pin 6: BA; output. */
  "BA": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: A0; output. */
  "A0": "8",
  /** Physical pin 9: A1; output. */
  "A1": "9",
  /** Physical pin 10: A2; output. */
  "A2": "10",
  /** Physical pin 11: A3; output. */
  "A3": "11",
  /** Physical pin 12: A4; output. */
  "A4": "12",
  /** Physical pin 13: A5; output. */
  "A5": "13",
  /** Physical pin 14: A6; output. */
  "A6": "14",
  /** Physical pin 15: A7; output. */
  "A7": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: A9; output. */
  "A9": "17",
  /** Physical pin 18: A10; output. */
  "A10": "18",
  /** Physical pin 19: A11; output. */
  "A11": "19",
  /** Physical pin 20: A12; output. */
  "A12": "20",
  /** Physical pin 21: A13; output. */
  "A13": "21",
  /** Physical pin 22: A14; output. */
  "A14": "22",
  /** Physical pin 23: A15; output. */
  "A15": "23",
  /** Physical pin 24: D7; bidirectional. */
  "D7": "24",
  /** Physical pin 25: D6; bidirectional. */
  "D6": "25",
  /** Physical pin 26: D5; bidirectional. */
  "D5": "26",
  /** Physical pin 27: D4; bidirectional. */
  "D4": "27",
  /** Physical pin 28: D3; bidirectional. */
  "D3": "28",
  /** Physical pin 29: D2; bidirectional. */
  "D2": "29",
  /** Physical pin 30: D1; bidirectional. */
  "D1": "30",
  /** Physical pin 31: D0; bidirectional. */
  "D0": "31",
  /** Physical pin 32: R/~{W}; output. */
  "R/~{W}": "32",
  /** Physical pin 33: BUSY; output. */
  "BUSY": "33",
  /** Physical pin 34: E; input. */
  "E": "34",
  /** Physical pin 35: Q; input. */
  "Q": "35",
  /** Physical pin 36: AVMA; output. */
  "AVMA": "36",
  /** Physical pin 37: ~{RESET}; input. */
  "~{RESET}": "37",
  /** Physical pin 38: LIC; output. */
  "LIC": "38",
  /** Physical pin 39: TSC; input. */
  "TSC": "39",
  /** Physical pin 40: ~{HALT}; input. */
  "~{HALT}": "40",
}) {
  override schema = "CPU_NXP_6800:MC6809E";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 1.5MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC68A00`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC68A00L.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68A00 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS_1": "1",
  /** Physical pin 2: ~{HALT}; input. */
  "~{HALT}": "2",
  /** Physical pin 3: Phi1; input. */
  "Phi1": "3",
  /** Physical pin 4: ~{IRQ}; input. */
  "~{IRQ}": "4",
  /** Physical pin 5: VMA; output. */
  "VMA": "5",
  /** Physical pin 6: ~{NMI}; input. */
  "~{NMI}": "6",
  /** Physical pin 7: BA; output. */
  "BA": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: A0; output. */
  "A0": "9",
  /** Physical pin 10: A1; output. */
  "A1": "10",
  /** Physical pin 11: A2; output. */
  "A2": "11",
  /** Physical pin 12: A3; output. */
  "A3": "12",
  /** Physical pin 13: A4; output. */
  "A4": "13",
  /** Physical pin 14: A5; output. */
  "A5": "14",
  /** Physical pin 15: A6; output. */
  "A6": "15",
  /** Physical pin 16: A7; output. */
  "A7": "16",
  /** Physical pin 17: A8; output. */
  "A8": "17",
  /** Physical pin 18: A9; output. */
  "A9": "18",
  /** Physical pin 19: A10; output. */
  "A10": "19",
  /** Physical pin 20: A11; output. */
  "A11": "20",
  /** Physical pin 21: VSS; power_in. */
  "VSS_21": "21",
  /** Physical pin 22: A12; output. */
  "A12": "22",
  /** Physical pin 23: A13; output. */
  "A13": "23",
  /** Physical pin 24: A14; output. */
  "A14": "24",
  /** Physical pin 25: A15; output. */
  "A15": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: R/~{W}; output. */
  "R/~{W}": "34",
  /** Physical pin 35: N.C.; no_connect. */
  "N.C._35": "35",
  /** Physical pin 36: DBE; input. */
  "DBE": "36",
  /** Physical pin 37: Phi2; input. */
  "Phi2": "37",
  /** Physical pin 38: N.C.; no_connect. */
  "N.C._38": "38",
  /** Physical pin 39: TSC; input. */
  "TSC": "39",
  /** Physical pin 40: ~{RESET}; input. */
  "~{RESET}": "40",
}) {
  override schema = "CPU_NXP_6800:MC68A00";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 1.5MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC68A02`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.jameco.com/Jameco/Products/ProdDS/43502.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68A02 extends Component.withPins({
  /** Physical pin 1: VSS; passive. */
  "VSS_1": "1",
  /** Physical pin 2: ~{HALT}; input. */
  "~{HALT}": "2",
  /** Physical pin 3: MR; input. */
  "MR": "3",
  /** Physical pin 4: ~{IRQ}; input. */
  "~{IRQ}": "4",
  /** Physical pin 5: VMA; output. */
  "VMA": "5",
  /** Physical pin 6: ~{NMI}; input. */
  "~{NMI}": "6",
  /** Physical pin 7: BA; output. */
  "BA": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: A0; output. */
  "A0": "9",
  /** Physical pin 10: A1; output. */
  "A1": "10",
  /** Physical pin 11: A2; output. */
  "A2": "11",
  /** Physical pin 12: A3; output. */
  "A3": "12",
  /** Physical pin 13: A4; output. */
  "A4": "13",
  /** Physical pin 14: A5; output. */
  "A5": "14",
  /** Physical pin 15: A6; output. */
  "A6": "15",
  /** Physical pin 16: A7; output. */
  "A7": "16",
  /** Physical pin 17: A8; output. */
  "A8": "17",
  /** Physical pin 18: A9; output. */
  "A9": "18",
  /** Physical pin 19: A10; output. */
  "A10": "19",
  /** Physical pin 20: A11; output. */
  "A11": "20",
  /** Physical pin 21: VSS; power_in. */
  "VSS_21": "21",
  /** Physical pin 22: A12; output. */
  "A12": "22",
  /** Physical pin 23: A13; output. */
  "A13": "23",
  /** Physical pin 24: A14; output. */
  "A14": "24",
  /** Physical pin 25: A15; output. */
  "A15": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: R/~{W}; output. */
  "R/~{W}": "34",
  /** Physical pin 35: VCC_STANDBY; power_in. */
  "VCC_STANDBY": "35",
  /** Physical pin 36: RE; input. */
  "RE": "36",
  /** Physical pin 37: E; output. */
  "E": "37",
  /** Physical pin 38: XTAL; passive. */
  "XTAL": "38",
  /** Physical pin 39: EXTAL; passive. */
  "EXTAL": "39",
  /** Physical pin 40: ~{RESET}; input. */
  "~{RESET}": "40",
}) {
  override schema = "CPU_NXP_6800:MC68A02";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 1.5MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC68A09`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC68B09S.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68A09 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{NMI}; input. */
  "~{NMI}": "2",
  /** Physical pin 3: ~{IRQ}; input. */
  "~{IRQ}": "3",
  /** Physical pin 4: ~{FIRQ}; input. */
  "~{FIRQ}": "4",
  /** Physical pin 5: BS; output. */
  "BS": "5",
  /** Physical pin 6: BA; output. */
  "BA": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: A0; output. */
  "A0": "8",
  /** Physical pin 9: A1; output. */
  "A1": "9",
  /** Physical pin 10: A2; output. */
  "A2": "10",
  /** Physical pin 11: A3; output. */
  "A3": "11",
  /** Physical pin 12: A4; output. */
  "A4": "12",
  /** Physical pin 13: A5; output. */
  "A5": "13",
  /** Physical pin 14: A6; output. */
  "A6": "14",
  /** Physical pin 15: A7; output. */
  "A7": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: A9; output. */
  "A9": "17",
  /** Physical pin 18: A10; output. */
  "A10": "18",
  /** Physical pin 19: A11; output. */
  "A11": "19",
  /** Physical pin 20: A12; output. */
  "A12": "20",
  /** Physical pin 21: A13; output. */
  "A13": "21",
  /** Physical pin 22: A14; output. */
  "A14": "22",
  /** Physical pin 23: A15; output. */
  "A15": "23",
  /** Physical pin 24: D7; bidirectional. */
  "D7": "24",
  /** Physical pin 25: D6; bidirectional. */
  "D6": "25",
  /** Physical pin 26: D5; bidirectional. */
  "D5": "26",
  /** Physical pin 27: D4; bidirectional. */
  "D4": "27",
  /** Physical pin 28: D3; bidirectional. */
  "D3": "28",
  /** Physical pin 29: D2; bidirectional. */
  "D2": "29",
  /** Physical pin 30: D1; bidirectional. */
  "D1": "30",
  /** Physical pin 31: D0; bidirectional. */
  "D0": "31",
  /** Physical pin 32: R/~{W}; output. */
  "R/~{W}": "32",
  /** Physical pin 33: ~{DMA/BREQ}; input. */
  "~{DMA/BREQ}": "33",
  /** Physical pin 34: E; output. */
  "E": "34",
  /** Physical pin 35: Q; output. */
  "Q": "35",
  /** Physical pin 36: MRDY; input. */
  "MRDY": "36",
  /** Physical pin 37: ~{RESET}; input. */
  "~{RESET}": "37",
  /** Physical pin 38: EXTAL; input. */
  "EXTAL": "38",
  /** Physical pin 39: XTAL; input. */
  "XTAL": "39",
  /** Physical pin 40: ~{HALT}; input. */
  "~{HALT}": "40",
}) {
  override schema = "CPU_NXP_6800:MC68A09";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 1.5MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC68A09E`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC68B09S.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68A09E extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{NMI}; input. */
  "~{NMI}": "2",
  /** Physical pin 3: ~{IRQ}; input. */
  "~{IRQ}": "3",
  /** Physical pin 4: ~{FIRQ}; input. */
  "~{FIRQ}": "4",
  /** Physical pin 5: BS; output. */
  "BS": "5",
  /** Physical pin 6: BA; output. */
  "BA": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: A0; output. */
  "A0": "8",
  /** Physical pin 9: A1; output. */
  "A1": "9",
  /** Physical pin 10: A2; output. */
  "A2": "10",
  /** Physical pin 11: A3; output. */
  "A3": "11",
  /** Physical pin 12: A4; output. */
  "A4": "12",
  /** Physical pin 13: A5; output. */
  "A5": "13",
  /** Physical pin 14: A6; output. */
  "A6": "14",
  /** Physical pin 15: A7; output. */
  "A7": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: A9; output. */
  "A9": "17",
  /** Physical pin 18: A10; output. */
  "A10": "18",
  /** Physical pin 19: A11; output. */
  "A11": "19",
  /** Physical pin 20: A12; output. */
  "A12": "20",
  /** Physical pin 21: A13; output. */
  "A13": "21",
  /** Physical pin 22: A14; output. */
  "A14": "22",
  /** Physical pin 23: A15; output. */
  "A15": "23",
  /** Physical pin 24: D7; bidirectional. */
  "D7": "24",
  /** Physical pin 25: D6; bidirectional. */
  "D6": "25",
  /** Physical pin 26: D5; bidirectional. */
  "D5": "26",
  /** Physical pin 27: D4; bidirectional. */
  "D4": "27",
  /** Physical pin 28: D3; bidirectional. */
  "D3": "28",
  /** Physical pin 29: D2; bidirectional. */
  "D2": "29",
  /** Physical pin 30: D1; bidirectional. */
  "D1": "30",
  /** Physical pin 31: D0; bidirectional. */
  "D0": "31",
  /** Physical pin 32: R/~{W}; output. */
  "R/~{W}": "32",
  /** Physical pin 33: BUSY; output. */
  "BUSY": "33",
  /** Physical pin 34: E; input. */
  "E": "34",
  /** Physical pin 35: Q; input. */
  "Q": "35",
  /** Physical pin 36: AVMA; output. */
  "AVMA": "36",
  /** Physical pin 37: ~{RESET}; input. */
  "~{RESET}": "37",
  /** Physical pin 38: LIC; output. */
  "LIC": "38",
  /** Physical pin 39: TSC; input. */
  "TSC": "39",
  /** Physical pin 40: ~{HALT}; input. */
  "~{HALT}": "40",
}) {
  override schema = "CPU_NXP_6800:MC68A09E";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 2.0MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC68B00`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC68A00L.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68B00 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS_1": "1",
  /** Physical pin 2: ~{HALT}; input. */
  "~{HALT}": "2",
  /** Physical pin 3: Phi1; input. */
  "Phi1": "3",
  /** Physical pin 4: ~{IRQ}; input. */
  "~{IRQ}": "4",
  /** Physical pin 5: VMA; output. */
  "VMA": "5",
  /** Physical pin 6: ~{NMI}; input. */
  "~{NMI}": "6",
  /** Physical pin 7: BA; output. */
  "BA": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: A0; output. */
  "A0": "9",
  /** Physical pin 10: A1; output. */
  "A1": "10",
  /** Physical pin 11: A2; output. */
  "A2": "11",
  /** Physical pin 12: A3; output. */
  "A3": "12",
  /** Physical pin 13: A4; output. */
  "A4": "13",
  /** Physical pin 14: A5; output. */
  "A5": "14",
  /** Physical pin 15: A6; output. */
  "A6": "15",
  /** Physical pin 16: A7; output. */
  "A7": "16",
  /** Physical pin 17: A8; output. */
  "A8": "17",
  /** Physical pin 18: A9; output. */
  "A9": "18",
  /** Physical pin 19: A10; output. */
  "A10": "19",
  /** Physical pin 20: A11; output. */
  "A11": "20",
  /** Physical pin 21: VSS; power_in. */
  "VSS_21": "21",
  /** Physical pin 22: A12; output. */
  "A12": "22",
  /** Physical pin 23: A13; output. */
  "A13": "23",
  /** Physical pin 24: A14; output. */
  "A14": "24",
  /** Physical pin 25: A15; output. */
  "A15": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: R/~{W}; output. */
  "R/~{W}": "34",
  /** Physical pin 35: N.C.; no_connect. */
  "N.C._35": "35",
  /** Physical pin 36: DBE; input. */
  "DBE": "36",
  /** Physical pin 37: Phi2; input. */
  "Phi2": "37",
  /** Physical pin 38: N.C.; no_connect. */
  "N.C._38": "38",
  /** Physical pin 39: TSC; input. */
  "TSC": "39",
  /** Physical pin 40: ~{RESET}; input. */
  "~{RESET}": "40",
}) {
  override schema = "CPU_NXP_6800:MC68B00";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 2.0MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC68B02`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.jameco.com/Jameco/Products/ProdDS/43502.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68B02 extends Component.withPins({
  /** Physical pin 1: VSS; passive. */
  "VSS_1": "1",
  /** Physical pin 2: ~{HALT}; input. */
  "~{HALT}": "2",
  /** Physical pin 3: MR; input. */
  "MR": "3",
  /** Physical pin 4: ~{IRQ}; input. */
  "~{IRQ}": "4",
  /** Physical pin 5: VMA; output. */
  "VMA": "5",
  /** Physical pin 6: ~{NMI}; input. */
  "~{NMI}": "6",
  /** Physical pin 7: BA; output. */
  "BA": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: A0; output. */
  "A0": "9",
  /** Physical pin 10: A1; output. */
  "A1": "10",
  /** Physical pin 11: A2; output. */
  "A2": "11",
  /** Physical pin 12: A3; output. */
  "A3": "12",
  /** Physical pin 13: A4; output. */
  "A4": "13",
  /** Physical pin 14: A5; output. */
  "A5": "14",
  /** Physical pin 15: A6; output. */
  "A6": "15",
  /** Physical pin 16: A7; output. */
  "A7": "16",
  /** Physical pin 17: A8; output. */
  "A8": "17",
  /** Physical pin 18: A9; output. */
  "A9": "18",
  /** Physical pin 19: A10; output. */
  "A10": "19",
  /** Physical pin 20: A11; output. */
  "A11": "20",
  /** Physical pin 21: VSS; power_in. */
  "VSS_21": "21",
  /** Physical pin 22: A12; output. */
  "A12": "22",
  /** Physical pin 23: A13; output. */
  "A13": "23",
  /** Physical pin 24: A14; output. */
  "A14": "24",
  /** Physical pin 25: A15; output. */
  "A15": "25",
  /** Physical pin 26: D7; bidirectional. */
  "D7": "26",
  /** Physical pin 27: D6; bidirectional. */
  "D6": "27",
  /** Physical pin 28: D5; bidirectional. */
  "D5": "28",
  /** Physical pin 29: D4; bidirectional. */
  "D4": "29",
  /** Physical pin 30: D3; bidirectional. */
  "D3": "30",
  /** Physical pin 31: D2; bidirectional. */
  "D2": "31",
  /** Physical pin 32: D1; bidirectional. */
  "D1": "32",
  /** Physical pin 33: D0; bidirectional. */
  "D0": "33",
  /** Physical pin 34: R/~{W}; output. */
  "R/~{W}": "34",
  /** Physical pin 35: VCC_STANDBY; power_in. */
  "VCC_STANDBY": "35",
  /** Physical pin 36: RE; input. */
  "RE": "36",
  /** Physical pin 37: E; output. */
  "E": "37",
  /** Physical pin 38: XTAL; passive. */
  "XTAL": "38",
  /** Physical pin 39: EXTAL; passive. */
  "EXTAL": "39",
  /** Physical pin 40: ~{RESET}; input. */
  "~{RESET}": "40",
}) {
  override schema = "CPU_NXP_6800:MC68B02";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 2.0MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC68B09`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC68B09S.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68B09 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{NMI}; input. */
  "~{NMI}": "2",
  /** Physical pin 3: ~{IRQ}; input. */
  "~{IRQ}": "3",
  /** Physical pin 4: ~{FIRQ}; input. */
  "~{FIRQ}": "4",
  /** Physical pin 5: BS; output. */
  "BS": "5",
  /** Physical pin 6: BA; output. */
  "BA": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: A0; output. */
  "A0": "8",
  /** Physical pin 9: A1; output. */
  "A1": "9",
  /** Physical pin 10: A2; output. */
  "A2": "10",
  /** Physical pin 11: A3; output. */
  "A3": "11",
  /** Physical pin 12: A4; output. */
  "A4": "12",
  /** Physical pin 13: A5; output. */
  "A5": "13",
  /** Physical pin 14: A6; output. */
  "A6": "14",
  /** Physical pin 15: A7; output. */
  "A7": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: A9; output. */
  "A9": "17",
  /** Physical pin 18: A10; output. */
  "A10": "18",
  /** Physical pin 19: A11; output. */
  "A11": "19",
  /** Physical pin 20: A12; output. */
  "A12": "20",
  /** Physical pin 21: A13; output. */
  "A13": "21",
  /** Physical pin 22: A14; output. */
  "A14": "22",
  /** Physical pin 23: A15; output. */
  "A15": "23",
  /** Physical pin 24: D7; bidirectional. */
  "D7": "24",
  /** Physical pin 25: D6; bidirectional. */
  "D6": "25",
  /** Physical pin 26: D5; bidirectional. */
  "D5": "26",
  /** Physical pin 27: D4; bidirectional. */
  "D4": "27",
  /** Physical pin 28: D3; bidirectional. */
  "D3": "28",
  /** Physical pin 29: D2; bidirectional. */
  "D2": "29",
  /** Physical pin 30: D1; bidirectional. */
  "D1": "30",
  /** Physical pin 31: D0; bidirectional. */
  "D0": "31",
  /** Physical pin 32: R/~{W}; output. */
  "R/~{W}": "32",
  /** Physical pin 33: ~{DMA/BREQ}; input. */
  "~{DMA/BREQ}": "33",
  /** Physical pin 34: E; output. */
  "E": "34",
  /** Physical pin 35: Q; output. */
  "Q": "35",
  /** Physical pin 36: MRDY; input. */
  "MRDY": "36",
  /** Physical pin 37: ~{RESET}; input. */
  "~{RESET}": "37",
  /** Physical pin 38: EXTAL; input. */
  "EXTAL": "38",
  /** Physical pin 39: XTAL; input. */
  "XTAL": "39",
  /** Physical pin 40: ~{HALT}; input. */
  "~{HALT}": "40",
}) {
  override schema = "CPU_NXP_6800:MC68B09";
  override referencePrefix = "U";
}

/**
 * 8-Bit Microprocessing unit 2.0MHz, DIP-40
 *
 * KiCad symbol: `CPU_NXP_6800:MC68B09E`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/MC68B09S.pdf
 * Keywords: MCU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68B09E extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: ~{NMI}; input. */
  "~{NMI}": "2",
  /** Physical pin 3: ~{IRQ}; input. */
  "~{IRQ}": "3",
  /** Physical pin 4: ~{FIRQ}; input. */
  "~{FIRQ}": "4",
  /** Physical pin 5: BS; output. */
  "BS": "5",
  /** Physical pin 6: BA; output. */
  "BA": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: A0; output. */
  "A0": "8",
  /** Physical pin 9: A1; output. */
  "A1": "9",
  /** Physical pin 10: A2; output. */
  "A2": "10",
  /** Physical pin 11: A3; output. */
  "A3": "11",
  /** Physical pin 12: A4; output. */
  "A4": "12",
  /** Physical pin 13: A5; output. */
  "A5": "13",
  /** Physical pin 14: A6; output. */
  "A6": "14",
  /** Physical pin 15: A7; output. */
  "A7": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: A9; output. */
  "A9": "17",
  /** Physical pin 18: A10; output. */
  "A10": "18",
  /** Physical pin 19: A11; output. */
  "A11": "19",
  /** Physical pin 20: A12; output. */
  "A12": "20",
  /** Physical pin 21: A13; output. */
  "A13": "21",
  /** Physical pin 22: A14; output. */
  "A14": "22",
  /** Physical pin 23: A15; output. */
  "A15": "23",
  /** Physical pin 24: D7; bidirectional. */
  "D7": "24",
  /** Physical pin 25: D6; bidirectional. */
  "D6": "25",
  /** Physical pin 26: D5; bidirectional. */
  "D5": "26",
  /** Physical pin 27: D4; bidirectional. */
  "D4": "27",
  /** Physical pin 28: D3; bidirectional. */
  "D3": "28",
  /** Physical pin 29: D2; bidirectional. */
  "D2": "29",
  /** Physical pin 30: D1; bidirectional. */
  "D1": "30",
  /** Physical pin 31: D0; bidirectional. */
  "D0": "31",
  /** Physical pin 32: R/~{W}; output. */
  "R/~{W}": "32",
  /** Physical pin 33: BUSY; output. */
  "BUSY": "33",
  /** Physical pin 34: E; input. */
  "E": "34",
  /** Physical pin 35: Q; input. */
  "Q": "35",
  /** Physical pin 36: AVMA; output. */
  "AVMA": "36",
  /** Physical pin 37: ~{RESET}; input. */
  "~{RESET}": "37",
  /** Physical pin 38: LIC; output. */
  "LIC": "38",
  /** Physical pin 39: TSC; input. */
  "TSC": "39",
  /** Physical pin 40: ~{HALT}; input. */
  "~{HALT}": "40",
}) {
  override schema = "CPU_NXP_6800:MC68B09E";
  override referencePrefix = "U";
}

