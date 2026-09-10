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
 */
export class MC6800 extends Component.withPins({
  "VSS_1": "1",
  "~{HALT}": "2",
  "Phi1": "3",
  "~{IRQ}": "4",
  "VMA": "5",
  "~{NMI}": "6",
  "BA": "7",
  "VCC": "8",
  "A0": "9",
  "A1": "10",
  "A2": "11",
  "A3": "12",
  "A4": "13",
  "A5": "14",
  "A6": "15",
  "A7": "16",
  "A8": "17",
  "A9": "18",
  "A10": "19",
  "A11": "20",
  "VSS_21": "21",
  "A12": "22",
  "A13": "23",
  "A14": "24",
  "A15": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "R/~{W}": "34",
  "N.C._35": "35",
  "DBE": "36",
  "Phi2": "37",
  "N.C._38": "38",
  "TSC": "39",
  "~{RESET}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", "~{HALT}": "input", Phi1: "input", "~{IRQ}": "input", VMA: "output", "~{NMI}": "input", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", VSS_21: "power_in", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", "N.C._35": "no_connect", DBE: "input", Phi2: "input", "N.C._38": "no_connect", TSC: "input", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC6802 extends Component.withPins({
  "VSS_1": "1",
  "~{HALT}": "2",
  "MR": "3",
  "~{IRQ}": "4",
  "VMA": "5",
  "~{NMI}": "6",
  "BA": "7",
  "VCC": "8",
  "A0": "9",
  "A1": "10",
  "A2": "11",
  "A3": "12",
  "A4": "13",
  "A5": "14",
  "A6": "15",
  "A7": "16",
  "A8": "17",
  "A9": "18",
  "A10": "19",
  "A11": "20",
  "VSS_21": "21",
  "A12": "22",
  "A13": "23",
  "A14": "24",
  "A15": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "R/~{W}": "34",
  "VCC_STANDBY": "35",
  "RE": "36",
  "E": "37",
  "XTAL": "38",
  "EXTAL": "39",
  "~{RESET}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "passive", "~{HALT}": "input", MR: "input", "~{IRQ}": "input", VMA: "output", "~{NMI}": "input", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", VSS_21: "power_in", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", VCC_STANDBY: "power_in", RE: "input", E: "output", XTAL: "passive", EXTAL: "passive", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC6809 extends Component.withPins({
  "VSS": "1",
  "~{NMI}": "2",
  "~{IRQ}": "3",
  "~{FIRQ}": "4",
  "BS": "5",
  "BA": "6",
  "VCC": "7",
  "A0": "8",
  "A1": "9",
  "A2": "10",
  "A3": "11",
  "A4": "12",
  "A5": "13",
  "A6": "14",
  "A7": "15",
  "A8": "16",
  "A9": "17",
  "A10": "18",
  "A11": "19",
  "A12": "20",
  "A13": "21",
  "A14": "22",
  "A15": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "D3": "28",
  "D2": "29",
  "D1": "30",
  "D0": "31",
  "R/~{W}": "32",
  "~{DMA/BREQ}": "33",
  "E": "34",
  "Q": "35",
  "MRDY": "36",
  "~{RESET}": "37",
  "EXTAL": "38",
  "XTAL": "39",
  "~{HALT}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{NMI}": "input", "~{IRQ}": "input", "~{FIRQ}": "input", BS: "output", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", "~{DMA/BREQ}": "input", E: "output", Q: "output", MRDY: "input", "~{RESET}": "input", EXTAL: "input", XTAL: "input", "~{HALT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC6809E extends Component.withPins({
  "VSS": "1",
  "~{NMI}": "2",
  "~{IRQ}": "3",
  "~{FIRQ}": "4",
  "BS": "5",
  "BA": "6",
  "VCC": "7",
  "A0": "8",
  "A1": "9",
  "A2": "10",
  "A3": "11",
  "A4": "12",
  "A5": "13",
  "A6": "14",
  "A7": "15",
  "A8": "16",
  "A9": "17",
  "A10": "18",
  "A11": "19",
  "A12": "20",
  "A13": "21",
  "A14": "22",
  "A15": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "D3": "28",
  "D2": "29",
  "D1": "30",
  "D0": "31",
  "R/~{W}": "32",
  "BUSY": "33",
  "E": "34",
  "Q": "35",
  "AVMA": "36",
  "~{RESET}": "37",
  "LIC": "38",
  "TSC": "39",
  "~{HALT}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{NMI}": "input", "~{IRQ}": "input", "~{FIRQ}": "input", BS: "output", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", BUSY: "output", E: "input", Q: "input", AVMA: "output", "~{RESET}": "input", LIC: "output", TSC: "input", "~{HALT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68A00 extends Component.withPins({
  "VSS_1": "1",
  "~{HALT}": "2",
  "Phi1": "3",
  "~{IRQ}": "4",
  "VMA": "5",
  "~{NMI}": "6",
  "BA": "7",
  "VCC": "8",
  "A0": "9",
  "A1": "10",
  "A2": "11",
  "A3": "12",
  "A4": "13",
  "A5": "14",
  "A6": "15",
  "A7": "16",
  "A8": "17",
  "A9": "18",
  "A10": "19",
  "A11": "20",
  "VSS_21": "21",
  "A12": "22",
  "A13": "23",
  "A14": "24",
  "A15": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "R/~{W}": "34",
  "N.C._35": "35",
  "DBE": "36",
  "Phi2": "37",
  "N.C._38": "38",
  "TSC": "39",
  "~{RESET}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", "~{HALT}": "input", Phi1: "input", "~{IRQ}": "input", VMA: "output", "~{NMI}": "input", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", VSS_21: "power_in", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", "N.C._35": "no_connect", DBE: "input", Phi2: "input", "N.C._38": "no_connect", TSC: "input", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68A02 extends Component.withPins({
  "VSS_1": "1",
  "~{HALT}": "2",
  "MR": "3",
  "~{IRQ}": "4",
  "VMA": "5",
  "~{NMI}": "6",
  "BA": "7",
  "VCC": "8",
  "A0": "9",
  "A1": "10",
  "A2": "11",
  "A3": "12",
  "A4": "13",
  "A5": "14",
  "A6": "15",
  "A7": "16",
  "A8": "17",
  "A9": "18",
  "A10": "19",
  "A11": "20",
  "VSS_21": "21",
  "A12": "22",
  "A13": "23",
  "A14": "24",
  "A15": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "R/~{W}": "34",
  "VCC_STANDBY": "35",
  "RE": "36",
  "E": "37",
  "XTAL": "38",
  "EXTAL": "39",
  "~{RESET}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "passive", "~{HALT}": "input", MR: "input", "~{IRQ}": "input", VMA: "output", "~{NMI}": "input", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", VSS_21: "power_in", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", VCC_STANDBY: "power_in", RE: "input", E: "output", XTAL: "passive", EXTAL: "passive", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68A09 extends Component.withPins({
  "VSS": "1",
  "~{NMI}": "2",
  "~{IRQ}": "3",
  "~{FIRQ}": "4",
  "BS": "5",
  "BA": "6",
  "VCC": "7",
  "A0": "8",
  "A1": "9",
  "A2": "10",
  "A3": "11",
  "A4": "12",
  "A5": "13",
  "A6": "14",
  "A7": "15",
  "A8": "16",
  "A9": "17",
  "A10": "18",
  "A11": "19",
  "A12": "20",
  "A13": "21",
  "A14": "22",
  "A15": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "D3": "28",
  "D2": "29",
  "D1": "30",
  "D0": "31",
  "R/~{W}": "32",
  "~{DMA/BREQ}": "33",
  "E": "34",
  "Q": "35",
  "MRDY": "36",
  "~{RESET}": "37",
  "EXTAL": "38",
  "XTAL": "39",
  "~{HALT}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{NMI}": "input", "~{IRQ}": "input", "~{FIRQ}": "input", BS: "output", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", "~{DMA/BREQ}": "input", E: "output", Q: "output", MRDY: "input", "~{RESET}": "input", EXTAL: "input", XTAL: "input", "~{HALT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68A09E extends Component.withPins({
  "VSS": "1",
  "~{NMI}": "2",
  "~{IRQ}": "3",
  "~{FIRQ}": "4",
  "BS": "5",
  "BA": "6",
  "VCC": "7",
  "A0": "8",
  "A1": "9",
  "A2": "10",
  "A3": "11",
  "A4": "12",
  "A5": "13",
  "A6": "14",
  "A7": "15",
  "A8": "16",
  "A9": "17",
  "A10": "18",
  "A11": "19",
  "A12": "20",
  "A13": "21",
  "A14": "22",
  "A15": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "D3": "28",
  "D2": "29",
  "D1": "30",
  "D0": "31",
  "R/~{W}": "32",
  "BUSY": "33",
  "E": "34",
  "Q": "35",
  "AVMA": "36",
  "~{RESET}": "37",
  "LIC": "38",
  "TSC": "39",
  "~{HALT}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{NMI}": "input", "~{IRQ}": "input", "~{FIRQ}": "input", BS: "output", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", BUSY: "output", E: "input", Q: "input", AVMA: "output", "~{RESET}": "input", LIC: "output", TSC: "input", "~{HALT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68B00 extends Component.withPins({
  "VSS_1": "1",
  "~{HALT}": "2",
  "Phi1": "3",
  "~{IRQ}": "4",
  "VMA": "5",
  "~{NMI}": "6",
  "BA": "7",
  "VCC": "8",
  "A0": "9",
  "A1": "10",
  "A2": "11",
  "A3": "12",
  "A4": "13",
  "A5": "14",
  "A6": "15",
  "A7": "16",
  "A8": "17",
  "A9": "18",
  "A10": "19",
  "A11": "20",
  "VSS_21": "21",
  "A12": "22",
  "A13": "23",
  "A14": "24",
  "A15": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "R/~{W}": "34",
  "N.C._35": "35",
  "DBE": "36",
  "Phi2": "37",
  "N.C._38": "38",
  "TSC": "39",
  "~{RESET}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", "~{HALT}": "input", Phi1: "input", "~{IRQ}": "input", VMA: "output", "~{NMI}": "input", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", VSS_21: "power_in", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", "N.C._35": "no_connect", DBE: "input", Phi2: "input", "N.C._38": "no_connect", TSC: "input", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68B02 extends Component.withPins({
  "VSS_1": "1",
  "~{HALT}": "2",
  "MR": "3",
  "~{IRQ}": "4",
  "VMA": "5",
  "~{NMI}": "6",
  "BA": "7",
  "VCC": "8",
  "A0": "9",
  "A1": "10",
  "A2": "11",
  "A3": "12",
  "A4": "13",
  "A5": "14",
  "A6": "15",
  "A7": "16",
  "A8": "17",
  "A9": "18",
  "A10": "19",
  "A11": "20",
  "VSS_21": "21",
  "A12": "22",
  "A13": "23",
  "A14": "24",
  "A15": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "R/~{W}": "34",
  "VCC_STANDBY": "35",
  "RE": "36",
  "E": "37",
  "XTAL": "38",
  "EXTAL": "39",
  "~{RESET}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "passive", "~{HALT}": "input", MR: "input", "~{IRQ}": "input", VMA: "output", "~{NMI}": "input", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", VSS_21: "power_in", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", VCC_STANDBY: "power_in", RE: "input", E: "output", XTAL: "passive", EXTAL: "passive", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68B09 extends Component.withPins({
  "VSS": "1",
  "~{NMI}": "2",
  "~{IRQ}": "3",
  "~{FIRQ}": "4",
  "BS": "5",
  "BA": "6",
  "VCC": "7",
  "A0": "8",
  "A1": "9",
  "A2": "10",
  "A3": "11",
  "A4": "12",
  "A5": "13",
  "A6": "14",
  "A7": "15",
  "A8": "16",
  "A9": "17",
  "A10": "18",
  "A11": "19",
  "A12": "20",
  "A13": "21",
  "A14": "22",
  "A15": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "D3": "28",
  "D2": "29",
  "D1": "30",
  "D0": "31",
  "R/~{W}": "32",
  "~{DMA/BREQ}": "33",
  "E": "34",
  "Q": "35",
  "MRDY": "36",
  "~{RESET}": "37",
  "EXTAL": "38",
  "XTAL": "39",
  "~{HALT}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{NMI}": "input", "~{IRQ}": "input", "~{FIRQ}": "input", BS: "output", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", "~{DMA/BREQ}": "input", E: "output", Q: "output", MRDY: "input", "~{RESET}": "input", EXTAL: "input", XTAL: "input", "~{HALT}": "input", ...opts.pinTypes } });
  }
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
 */
export class MC68B09E extends Component.withPins({
  "VSS": "1",
  "~{NMI}": "2",
  "~{IRQ}": "3",
  "~{FIRQ}": "4",
  "BS": "5",
  "BA": "6",
  "VCC": "7",
  "A0": "8",
  "A1": "9",
  "A2": "10",
  "A3": "11",
  "A4": "12",
  "A5": "13",
  "A6": "14",
  "A7": "15",
  "A8": "16",
  "A9": "17",
  "A10": "18",
  "A11": "19",
  "A12": "20",
  "A13": "21",
  "A14": "22",
  "A15": "23",
  "D7": "24",
  "D6": "25",
  "D5": "26",
  "D4": "27",
  "D3": "28",
  "D2": "29",
  "D1": "30",
  "D0": "31",
  "R/~{W}": "32",
  "BUSY": "33",
  "E": "34",
  "Q": "35",
  "AVMA": "36",
  "~{RESET}": "37",
  "LIC": "38",
  "TSC": "39",
  "~{HALT}": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "~{NMI}": "input", "~{IRQ}": "input", "~{FIRQ}": "input", BS: "output", BA: "output", VCC: "power_in", A0: "output", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A10: "output", A11: "output", A12: "output", A13: "output", A14: "output", A15: "output", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "R/~{W}": "output", BUSY: "output", E: "input", Q: "input", AVMA: "output", "~{RESET}": "input", LIC: "output", TSC: "input", "~{HALT}": "input", ...opts.pinTypes } });
  }
  override schema = "CPU_NXP_6800:MC68B09E";
  override referencePrefix = "U";
}
