// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * High-Integration 16-Bit Microprocessor
 *
 * KiCad symbol: `MCU_Intel:80186`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://datasheets.chipdb.org/Intel/x86/8018x/datashts/27243002.PDF
 * Keywords: MPRO.
 */
export class _80186 extends Component.withPins({
  "AD15": "1",
  "AD7": "2",
  "AD14": "3",
  "AD6": "4",
  "AD13": "5",
  "AD5": "6",
  "AD12": "7",
  "AD4": "8",
  "VCC_9": "9",
  "AD11": "10",
  "AD3": "11",
  "AD10": "12",
  "AD2": "13",
  "AD9": "14",
  "AD1": "15",
  "AD8": "16",
  "AD0": "17",
  "DRQ0": "18",
  "DRQ1": "19",
  "TMR_IN_0": "20",
  "TMR_IN_1": "21",
  "TMR_OUT_0": "22",
  "TMR_OUT_1": "23",
  "~{RES}": "24",
  "~{PCS0}": "25",
  "VSS_26": "26",
  "~{PCS1}": "27",
  "~{PCS2}": "28",
  "~{PCS3}": "29",
  "~{PCS4}": "30",
  "~{PCS5}/A1": "31",
  "~{PCS6}/A2": "32",
  "~{LCS}": "33",
  "~{UCS}": "34",
  "~{MCS3}": "35",
  "~{MCS2}": "36",
  "~{MCS1}": "37",
  "~{MCS0}": "38",
  "~{DEN}": "39",
  "DT/~{R}": "40",
  "INT3/~{INTA1}/IRQ": "41",
  "INT2/~{INTA0}": "42",
  "VCC_43": "43",
  "INT1/~{SELECT}": "44",
  "INT0": "45",
  "NMI": "46",
  "~{TEST}": "47",
  "~{LOCK}": "48",
  "SRDY": "49",
  "HOLD": "50",
  "HLDA": "51",
  "~{S0}": "52",
  "~{S1}": "53",
  "~{S2}": "54",
  "ARDY": "55",
  "CLKOUT": "56",
  "RESET": "57",
  "X2": "58",
  "X1": "59",
  "VSS_60": "60",
  "ALE/QS0": "61",
  "~{RD}/~{QSMD}": "62",
  "~{WR}/QS1": "63",
  "~{BHE}/S7": "64",
  "A19/S6": "65",
  "A18/S5": "66",
  "A17/S4": "67",
  "A16/S3": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AD15: "bidirectional", AD7: "bidirectional", AD14: "bidirectional", AD6: "bidirectional", AD13: "bidirectional", AD5: "bidirectional", AD12: "bidirectional", AD4: "bidirectional", VCC_9: "power_in", AD11: "bidirectional", AD3: "bidirectional", AD10: "bidirectional", AD2: "bidirectional", AD9: "bidirectional", AD1: "bidirectional", AD8: "bidirectional", AD0: "bidirectional", DRQ0: "input", DRQ1: "input", TMR_IN_0: "input", TMR_IN_1: "input", TMR_OUT_0: "output", TMR_OUT_1: "output", "~{RES}": "input", "~{PCS0}": "output", VSS_26: "power_in", "~{PCS1}": "output", "~{PCS2}": "output", "~{PCS3}": "output", "~{PCS4}": "output", "~{PCS5}/A1": "output", "~{PCS6}/A2": "output", "~{LCS}": "output", "~{UCS}": "output", "~{MCS3}": "output", "~{MCS2}": "output", "~{MCS1}": "output", "~{MCS0}": "output", "~{DEN}": "output", "DT/~{R}": "output", "INT3/~{INTA1}/IRQ": "bidirectional", "INT2/~{INTA0}": "bidirectional", VCC_43: "power_in", "INT1/~{SELECT}": "input", INT0: "input", NMI: "input", "~{TEST}": "bidirectional", "~{LOCK}": "output", SRDY: "input", HOLD: "input", HLDA: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", ARDY: "input", CLKOUT: "output", RESET: "output", X2: "output", X1: "input", VSS_60: "passive", "ALE/QS0": "output", "~{RD}/~{QSMD}": "output", "~{WR}/QS1": "output", "~{BHE}/S7": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:80186";
  override referencePrefix = "U";
}

/**
 * High-Integration 16-Bit Microprocessor
 *
 * KiCad symbol: `MCU_Intel:80188`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://datasheets.chipdb.org/Intel/x86/8018x/datashts/27243002.PDF
 * Keywords: MPRO.
 */
export class _80188 extends Component.withPins({
  "A15": "1",
  "AD7": "2",
  "A14": "3",
  "AD6": "4",
  "A13": "5",
  "AD5": "6",
  "A12": "7",
  "AD4": "8",
  "VCC_9": "9",
  "A11": "10",
  "AD3": "11",
  "A10": "12",
  "AD2": "13",
  "A9": "14",
  "AD1": "15",
  "A8": "16",
  "AD0": "17",
  "DRQ0": "18",
  "DRQ1": "19",
  "TMR_IN_0": "20",
  "TMR_IN_1": "21",
  "TMR_OUT_0": "22",
  "TMR_OUT_1": "23",
  "~{RES}": "24",
  "~{PCS0}": "25",
  "VSS_26": "26",
  "~{PCS1}": "27",
  "~{PCS2}": "28",
  "~{PCS3}": "29",
  "~{PCS4}": "30",
  "~{PCS5}/A1": "31",
  "~{PCS6}/A2": "32",
  "~{LCS}": "33",
  "~{UCS}": "34",
  "~{MCS3}": "35",
  "~{MCS2}": "36",
  "~{MCS1}": "37",
  "~{MCS0}": "38",
  "~{DEN}": "39",
  "DT/~{R}": "40",
  "INT3/~{INTA1}/IRQ": "41",
  "INT2/~{INTA0}": "42",
  "VCC_43": "43",
  "INT1/~{SELECT}": "44",
  "INT0": "45",
  "NMI": "46",
  "~{TEST}": "47",
  "~{LOCK}": "48",
  "SRDY": "49",
  "HOLD": "50",
  "HLDA": "51",
  "~{S0}": "52",
  "~{S1}": "53",
  "~{S2}": "54",
  "ARDY": "55",
  "CLKOUT": "56",
  "RESET": "57",
  "X2": "58",
  "X1": "59",
  "VSS_60": "60",
  "ALE/QS0": "61",
  "~{RD}/~{QSMD}": "62",
  "~{WR}/QS1": "63",
  "S7": "64",
  "A19/S6": "65",
  "A18/S5": "66",
  "A17/S4": "67",
  "A16/S3": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A15: "output", AD7: "bidirectional", A14: "output", AD6: "bidirectional", A13: "output", AD5: "bidirectional", A12: "output", AD4: "bidirectional", VCC_9: "power_in", A11: "output", AD3: "bidirectional", A10: "output", AD2: "bidirectional", A9: "output", AD1: "bidirectional", A8: "output", AD0: "bidirectional", DRQ0: "input", DRQ1: "input", TMR_IN_0: "input", TMR_IN_1: "input", TMR_OUT_0: "output", TMR_OUT_1: "output", "~{RES}": "input", "~{PCS0}": "output", VSS_26: "power_in", "~{PCS1}": "output", "~{PCS2}": "output", "~{PCS3}": "output", "~{PCS4}": "output", "~{PCS5}/A1": "output", "~{PCS6}/A2": "output", "~{LCS}": "output", "~{UCS}": "output", "~{MCS3}": "output", "~{MCS2}": "output", "~{MCS1}": "output", "~{MCS0}": "output", "~{DEN}": "output", "DT/~{R}": "output", "INT3/~{INTA1}/IRQ": "bidirectional", "INT2/~{INTA0}": "bidirectional", VCC_43: "power_in", "INT1/~{SELECT}": "input", INT0: "input", NMI: "input", "~{TEST}": "bidirectional", "~{LOCK}": "output", SRDY: "input", HOLD: "input", HLDA: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", ARDY: "input", CLKOUT: "output", RESET: "output", X2: "output", X1: "input", VSS_60: "passive", "ALE/QS0": "output", "~{RD}/~{QSMD}": "bidirectional", "~{WR}/QS1": "output", S7: "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:80188";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, No (EP)ROM, 64B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8035`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 */
export class _8035 extends Component.withPins({
  "T0": "1",
  "X1": "2",
  "X2": "3",
  "~{RESET}": "4",
  "~{SS}": "5",
  "~{INT}": "6",
  "EA": "7",
  "~{RD}": "8",
  "~{PSEN}": "9",
  "~{WR}": "10",
  "ALE": "11",
  "DB.0": "12",
  "DB.1": "13",
  "DB.2": "14",
  "DB.3": "15",
  "DB.4": "16",
  "DB.5": "17",
  "DB.6": "18",
  "DB.7": "19",
  "GND": "20",
  "P2.0": "21",
  "P2.1": "22",
  "P2.2": "23",
  "P2.3": "24",
  "PROG": "25",
  "VDD": "26",
  "P1.0": "27",
  "P1.1": "28",
  "P1.2": "29",
  "P1.3": "30",
  "P1.4": "31",
  "P1.5": "32",
  "P1.6": "33",
  "P1.7": "34",
  "P2.4": "35",
  "P2.5": "36",
  "P2.6": "37",
  "P2.7": "38",
  "T1": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { T0: "input", X1: "input", X2: "output", "~{RESET}": "input", "~{SS}": "input", "~{INT}": "input", EA: "input", "~{RD}": "output", "~{PSEN}": "output", "~{WR}": "output", ALE: "output", "DB.0": "bidirectional", "DB.1": "bidirectional", "DB.2": "bidirectional", "DB.3": "bidirectional", "DB.4": "bidirectional", "DB.5": "bidirectional", "DB.6": "bidirectional", "DB.7": "bidirectional", GND: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", PROG: "output", VDD: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", T1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8035";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, No (EP)ROM, 128B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8039`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 */
export class _8039 extends Component.withPins({
  "T0": "1",
  "X1": "2",
  "X2": "3",
  "~{RESET}": "4",
  "~{SS}": "5",
  "~{INT}": "6",
  "EA": "7",
  "~{RD}": "8",
  "~{PSEN}": "9",
  "~{WR}": "10",
  "ALE": "11",
  "DB.0": "12",
  "DB.1": "13",
  "DB.2": "14",
  "DB.3": "15",
  "DB.4": "16",
  "DB.5": "17",
  "DB.6": "18",
  "DB.7": "19",
  "GND": "20",
  "P2.0": "21",
  "P2.1": "22",
  "P2.2": "23",
  "P2.3": "24",
  "PROG": "25",
  "VDD": "26",
  "P1.0": "27",
  "P1.1": "28",
  "P1.2": "29",
  "P1.3": "30",
  "P1.4": "31",
  "P1.5": "32",
  "P1.6": "33",
  "P1.7": "34",
  "P2.4": "35",
  "P2.5": "36",
  "P2.6": "37",
  "P2.7": "38",
  "T1": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { T0: "input", X1: "input", X2: "output", "~{RESET}": "input", "~{SS}": "input", "~{INT}": "input", EA: "input", "~{RD}": "output", "~{PSEN}": "output", "~{WR}": "output", ALE: "output", "DB.0": "bidirectional", "DB.1": "bidirectional", "DB.2": "bidirectional", "DB.3": "bidirectional", "DB.4": "bidirectional", "DB.5": "bidirectional", "DB.6": "bidirectional", "DB.7": "bidirectional", GND: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", PROG: "output", VDD: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", T1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8039";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, No (EP)ROM, 256B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8040`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 */
export class _8040 extends Component.withPins({
  "T0": "1",
  "X1": "2",
  "X2": "3",
  "~{RESET}": "4",
  "~{SS}": "5",
  "~{INT}": "6",
  "EA": "7",
  "~{RD}": "8",
  "~{PSEN}": "9",
  "~{WR}": "10",
  "ALE": "11",
  "DB.0": "12",
  "DB.1": "13",
  "DB.2": "14",
  "DB.3": "15",
  "DB.4": "16",
  "DB.5": "17",
  "DB.6": "18",
  "DB.7": "19",
  "GND": "20",
  "P2.0": "21",
  "P2.1": "22",
  "P2.2": "23",
  "P2.3": "24",
  "PROG": "25",
  "VDD": "26",
  "P1.0": "27",
  "P1.1": "28",
  "P1.2": "29",
  "P1.3": "30",
  "P1.4": "31",
  "P1.5": "32",
  "P1.6": "33",
  "P1.7": "34",
  "P2.4": "35",
  "P2.5": "36",
  "P2.6": "37",
  "P2.7": "38",
  "T1": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { T0: "input", X1: "input", X2: "output", "~{RESET}": "input", "~{SS}": "input", "~{INT}": "input", EA: "input", "~{RD}": "output", "~{PSEN}": "output", "~{WR}": "output", ALE: "output", "DB.0": "bidirectional", "DB.1": "bidirectional", "DB.2": "bidirectional", "DB.3": "bidirectional", "DB.4": "bidirectional", "DB.5": "bidirectional", "DB.6": "bidirectional", "DB.7": "bidirectional", GND: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", PROG: "output", VDD: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", T1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8040";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, 1KB Mask ROM, 64B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8048`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 */
export class _8048 extends Component.withPins({
  "T0": "1",
  "X1": "2",
  "X2": "3",
  "~{RESET}": "4",
  "~{SS}": "5",
  "~{INT}": "6",
  "EA": "7",
  "~{RD}": "8",
  "~{PSEN}": "9",
  "~{WR}": "10",
  "ALE": "11",
  "DB.0": "12",
  "DB.1": "13",
  "DB.2": "14",
  "DB.3": "15",
  "DB.4": "16",
  "DB.5": "17",
  "DB.6": "18",
  "DB.7": "19",
  "GND": "20",
  "P2.0": "21",
  "P2.1": "22",
  "P2.2": "23",
  "P2.3": "24",
  "PROG": "25",
  "VDD": "26",
  "P1.0": "27",
  "P1.1": "28",
  "P1.2": "29",
  "P1.3": "30",
  "P1.4": "31",
  "P1.5": "32",
  "P1.6": "33",
  "P1.7": "34",
  "P2.4": "35",
  "P2.5": "36",
  "P2.6": "37",
  "P2.7": "38",
  "T1": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { T0: "input", X1: "input", X2: "output", "~{RESET}": "input", "~{SS}": "input", "~{INT}": "input", EA: "input", "~{RD}": "output", "~{PSEN}": "output", "~{WR}": "output", ALE: "output", "DB.0": "bidirectional", "DB.1": "bidirectional", "DB.2": "bidirectional", "DB.3": "bidirectional", "DB.4": "bidirectional", "DB.5": "bidirectional", "DB.6": "bidirectional", "DB.7": "bidirectional", GND: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", PROG: "output", VDD: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", T1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8048";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, 2KB Mask ROM, 128B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8049`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 */
export class _8049 extends Component.withPins({
  "T0": "1",
  "X1": "2",
  "X2": "3",
  "~{RESET}": "4",
  "~{SS}": "5",
  "~{INT}": "6",
  "EA": "7",
  "~{RD}": "8",
  "~{PSEN}": "9",
  "~{WR}": "10",
  "ALE": "11",
  "DB.0": "12",
  "DB.1": "13",
  "DB.2": "14",
  "DB.3": "15",
  "DB.4": "16",
  "DB.5": "17",
  "DB.6": "18",
  "DB.7": "19",
  "GND": "20",
  "P2.0": "21",
  "P2.1": "22",
  "P2.2": "23",
  "P2.3": "24",
  "PROG": "25",
  "VDD": "26",
  "P1.0": "27",
  "P1.1": "28",
  "P1.2": "29",
  "P1.3": "30",
  "P1.4": "31",
  "P1.5": "32",
  "P1.6": "33",
  "P1.7": "34",
  "P2.4": "35",
  "P2.5": "36",
  "P2.6": "37",
  "P2.7": "38",
  "T1": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { T0: "input", X1: "input", X2: "output", "~{RESET}": "input", "~{SS}": "input", "~{INT}": "input", EA: "input", "~{RD}": "output", "~{PSEN}": "output", "~{WR}": "output", ALE: "output", "DB.0": "bidirectional", "DB.1": "bidirectional", "DB.2": "bidirectional", "DB.3": "bidirectional", "DB.4": "bidirectional", "DB.5": "bidirectional", "DB.6": "bidirectional", "DB.7": "bidirectional", GND: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", PROG: "output", VDD: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", T1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8049";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, 4KB Mask ROM, 256B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8050`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 */
export class _8050 extends Component.withPins({
  "T0": "1",
  "X1": "2",
  "X2": "3",
  "~{RESET}": "4",
  "~{SS}": "5",
  "~{INT}": "6",
  "EA": "7",
  "~{RD}": "8",
  "~{PSEN}": "9",
  "~{WR}": "10",
  "ALE": "11",
  "DB.0": "12",
  "DB.1": "13",
  "DB.2": "14",
  "DB.3": "15",
  "DB.4": "16",
  "DB.5": "17",
  "DB.6": "18",
  "DB.7": "19",
  "GND": "20",
  "P2.0": "21",
  "P2.1": "22",
  "P2.2": "23",
  "P2.3": "24",
  "PROG": "25",
  "VDD": "26",
  "P1.0": "27",
  "P1.1": "28",
  "P1.2": "29",
  "P1.3": "30",
  "P1.4": "31",
  "P1.5": "32",
  "P1.6": "33",
  "P1.7": "34",
  "P2.4": "35",
  "P2.5": "36",
  "P2.6": "37",
  "P2.7": "38",
  "T1": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { T0: "input", X1: "input", X2: "output", "~{RESET}": "input", "~{SS}": "input", "~{INT}": "input", EA: "input", "~{RD}": "output", "~{PSEN}": "output", "~{WR}": "output", ALE: "output", "DB.0": "bidirectional", "DB.1": "bidirectional", "DB.2": "bidirectional", "DB.3": "bidirectional", "DB.4": "bidirectional", "DB.5": "bidirectional", "DB.6": "bidirectional", "DB.7": "bidirectional", GND: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", PROG: "output", VDD: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", T1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8050";
  override referencePrefix = "U";
}

/**
 * 8-bit N-channel Microprocessor, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8080`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*.
 * @see http://datasheets.chipdb.org/Intel/MCS-80/intel-8080.pdf
 * Keywords: cpu mpu microprocessor.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8080 extends Component.withPins({
  "A10": "1",
  "GND": "2",
  "D4": "3",
  "D5": "4",
  "D6": "5",
  "D7": "6",
  "D3": "7",
  "D2": "8",
  "D1": "9",
  "D0": "10",
  "-5V": "11",
  "RESET": "12",
  "HOLD": "13",
  "INT": "14",
  "ϕ2": "15",
  "INTE": "16",
  "DBIN": "17",
  "~{WR}": "18",
  "SYNC": "19",
  "+5V": "20",
  "HLDA": "21",
  "ϕ1": "22",
  "READY": "23",
  "WAIT": "24",
  "A0": "25",
  "A1": "26",
  "A2": "27",
  "+12V": "28",
  "A3": "29",
  "A4": "30",
  "A5": "31",
  "A6": "32",
  "A7": "33",
  "A8": "34",
  "A9": "35",
  "A15": "36",
  "A12": "37",
  "A13": "38",
  "A14": "39",
  "A11": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A10: "output", GND: "power_in", D4: "bidirectional", D5: "bidirectional", D6: "bidirectional", D7: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "-5V": "power_in", RESET: "input", HOLD: "input", INT: "input", "ϕ2": "input", INTE: "output", DBIN: "output", "~{WR}": "output", SYNC: "output", "+5V": "power_in", HLDA: "output", "ϕ1": "input", READY: "input", WAIT: "output", A0: "output", A1: "output", A2: "output", "+12V": "power_in", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A15: "output", A12: "output", A13: "output", A14: "output", A11: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8080";
  override referencePrefix = "U";
}

/**
 * 8-bit N-channel Microprocessor, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8080A`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*.
 * @see http://datasheets.chipdb.org/Intel/MCS-80/intel-8080.pdf
 * Keywords: cpu mpu microprocessor.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8080A extends Component.withPins({
  "A10": "1",
  "GND": "2",
  "D4": "3",
  "D5": "4",
  "D6": "5",
  "D7": "6",
  "D3": "7",
  "D2": "8",
  "D1": "9",
  "D0": "10",
  "-5V": "11",
  "RESET": "12",
  "HOLD": "13",
  "INT": "14",
  "ϕ2": "15",
  "INTE": "16",
  "DBIN": "17",
  "~{WR}": "18",
  "SYNC": "19",
  "+5V": "20",
  "HLDA": "21",
  "ϕ1": "22",
  "READY": "23",
  "WAIT": "24",
  "A0": "25",
  "A1": "26",
  "A2": "27",
  "+12V": "28",
  "A3": "29",
  "A4": "30",
  "A5": "31",
  "A6": "32",
  "A7": "33",
  "A8": "34",
  "A9": "35",
  "A15": "36",
  "A12": "37",
  "A13": "38",
  "A14": "39",
  "A11": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A10: "output", GND: "power_in", D4: "bidirectional", D5: "bidirectional", D6: "bidirectional", D7: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "-5V": "power_in", RESET: "input", HOLD: "input", INT: "input", "ϕ2": "input", INTE: "output", DBIN: "output", "~{WR}": "output", SYNC: "output", "+5V": "power_in", HLDA: "output", "ϕ1": "input", READY: "input", WAIT: "output", A0: "output", A1: "output", A2: "output", "+12V": "power_in", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", A9: "output", A15: "output", A12: "output", A13: "output", A14: "output", A11: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8080A";
  override referencePrefix = "U";
}

/**
 * 8086 (maximum mode), 16-Bit HMOS Microprocessor, PDIP-40
 *
 * KiCad symbol: `MCU_Intel:8086_Max_Mode`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://datasheets.chipdb.org/Intel/x86/808x/datashts/8086/231455-006.pdf
 * Keywords: MPRO.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8086_Max_Mode extends Component.withPins({
  "GND_1": "1",
  "AD14": "2",
  "AD13": "3",
  "AD12": "4",
  "AD11": "5",
  "AD10": "6",
  "AD9": "7",
  "AD8": "8",
  "AD7": "9",
  "AD6": "10",
  "AD5": "11",
  "AD4": "12",
  "AD3": "13",
  "AD2": "14",
  "AD1": "15",
  "AD0": "16",
  "NMI": "17",
  "INTR": "18",
  "CLK": "19",
  "GND_20": "20",
  "RESET": "21",
  "READY": "22",
  "~{TEST}": "23",
  "QS1": "24",
  "QS0": "25",
  "~{S0}": "26",
  "~{S1}": "27",
  "~{S2}": "28",
  "~{LOCK}": "29",
  "~{RQ}/~{GT1}": "30",
  "~{RQ}/~{GT0}": "31",
  "~{RD}": "32",
  "MN/~{MX}": "33",
  "~{BHE}/S7": "34",
  "A19/S6": "35",
  "A18/S5": "36",
  "A17/S4": "37",
  "A16/S3": "38",
  "AD15": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", AD14: "bidirectional", AD13: "bidirectional", AD12: "bidirectional", AD11: "bidirectional", AD10: "bidirectional", AD9: "bidirectional", AD8: "bidirectional", AD7: "bidirectional", AD6: "bidirectional", AD5: "bidirectional", AD4: "bidirectional", AD3: "bidirectional", AD2: "bidirectional", AD1: "bidirectional", AD0: "bidirectional", NMI: "input", INTR: "input", CLK: "input", GND_20: "power_in", RESET: "input", READY: "input", "~{TEST}": "input", QS1: "output", QS0: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", "~{LOCK}": "output", "~{RQ}/~{GT1}": "bidirectional", "~{RQ}/~{GT0}": "bidirectional", "~{RD}": "output", "MN/~{MX}": "input", "~{BHE}/S7": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", AD15: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8086_Max_Mode";
  override referencePrefix = "U";
}

/**
 * 8086 (minimum mode), 16-Bit HMOS Microprocessor, PDIP-40
 *
 * KiCad symbol: `MCU_Intel:8086_Min_Mode`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://datasheets.chipdb.org/Intel/x86/808x/datashts/8086/231455-006.pdf
 * Keywords: MPRO.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8086_Min_Mode extends Component.withPins({
  "GND_1": "1",
  "AD14": "2",
  "AD13": "3",
  "AD12": "4",
  "AD11": "5",
  "AD10": "6",
  "AD9": "7",
  "AD8": "8",
  "AD7": "9",
  "AD6": "10",
  "AD5": "11",
  "AD4": "12",
  "AD3": "13",
  "AD2": "14",
  "AD1": "15",
  "AD0": "16",
  "NMI": "17",
  "INTR": "18",
  "CLK": "19",
  "GND_20": "20",
  "RESET": "21",
  "READY": "22",
  "~{TEST}": "23",
  "~{INTA}": "24",
  "ALE": "25",
  "~{DEN}": "26",
  "DT/~{R}": "27",
  "M/~{IO}": "28",
  "~{WR}": "29",
  "HLDA": "30",
  "HOLD": "31",
  "~{RD}": "32",
  "MN/~{MX}": "33",
  "~{BHE}/S7": "34",
  "A19/S6": "35",
  "A18/S5": "36",
  "A17/S4": "37",
  "A16/S3": "38",
  "AD15": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", AD14: "bidirectional", AD13: "bidirectional", AD12: "bidirectional", AD11: "bidirectional", AD10: "bidirectional", AD9: "bidirectional", AD8: "bidirectional", AD7: "bidirectional", AD6: "bidirectional", AD5: "bidirectional", AD4: "bidirectional", AD3: "bidirectional", AD2: "bidirectional", AD1: "bidirectional", AD0: "bidirectional", NMI: "input", INTR: "input", CLK: "input", GND_20: "power_in", RESET: "input", READY: "input", "~{TEST}": "input", "~{INTA}": "output", ALE: "output", "~{DEN}": "output", "DT/~{R}": "output", "M/~{IO}": "output", "~{WR}": "output", HLDA: "output", HOLD: "input", "~{RD}": "output", "MN/~{MX}": "input", "~{BHE}/S7": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", AD15: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8086_Min_Mode";
  override referencePrefix = "U";
}

/**
 * Math Coprocessor for Intel 8086/8088/80186/80188 microprocessors, PDIP-40
 *
 * KiCad symbol: `MCU_Intel:8087`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://datasheets.chipdb.org/Intel/x86/808x/datashts/8087/205835-007.pdf
 * Keywords: FPU.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8087 extends Component.withPins({
  "GND_1": "1",
  "AD14": "2",
  "AD13": "3",
  "AD12": "4",
  "AD11": "5",
  "AD10": "6",
  "AD9": "7",
  "AD8": "8",
  "AD7": "9",
  "AD6": "10",
  "AD5": "11",
  "AD4": "12",
  "AD3": "13",
  "AD2": "14",
  "AD1": "15",
  "AD0": "16",
  "NC_17": "17",
  "NC_18": "18",
  "CLK": "19",
  "GND_20": "20",
  "RESET": "21",
  "READY": "22",
  "BUSY": "23",
  "QS1": "24",
  "QS0": "25",
  "~{S0}": "26",
  "~{S1}": "27",
  "~{S2}": "28",
  "NC_29": "29",
  "NC_30": "30",
  "~{RQ}/~{GT0}": "31",
  "INT": "32",
  "~{RQ}/~{GT1}": "33",
  "~{BHE}/S7": "34",
  "A19/S6": "35",
  "A18/S5": "36",
  "A17/S4": "37",
  "A16/S3": "38",
  "AD15": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", AD14: "bidirectional", AD13: "bidirectional", AD12: "bidirectional", AD11: "bidirectional", AD10: "bidirectional", AD9: "bidirectional", AD8: "bidirectional", AD7: "bidirectional", AD6: "bidirectional", AD5: "bidirectional", AD4: "bidirectional", AD3: "bidirectional", AD2: "bidirectional", AD1: "bidirectional", AD0: "bidirectional", NC_17: "no_connect", NC_18: "no_connect", CLK: "input", GND_20: "power_in", RESET: "input", READY: "input", BUSY: "output", QS1: "input", QS0: "input", "~{S0}": "bidirectional", "~{S1}": "bidirectional", "~{S2}": "bidirectional", NC_29: "no_connect", NC_30: "no_connect", "~{RQ}/~{GT0}": "bidirectional", INT: "output", "~{RQ}/~{GT1}": "bidirectional", "~{BHE}/S7": "bidirectional", "A19/S6": "bidirectional", "A18/S5": "bidirectional", "A17/S4": "bidirectional", "A16/S3": "bidirectional", AD15: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8087";
  override referencePrefix = "U";
}

/**
 * 8088 (minimum mode), 8-Bit HMOS Microprocessor, PDIP-40
 *
 * KiCad symbol: `MCU_Intel:8088`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://datasheets.chipdb.org/Intel/x86/808x/datashts/8088/231456-006.pdf
 * Keywords: MPRO.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8088 extends Component.withPins({
  "GND_1": "1",
  "A14": "2",
  "A13": "3",
  "A12": "4",
  "A11": "5",
  "A10": "6",
  "A9": "7",
  "A8": "8",
  "AD7": "9",
  "AD6": "10",
  "AD5": "11",
  "AD4": "12",
  "AD3": "13",
  "AD2": "14",
  "AD1": "15",
  "AD0": "16",
  "NMI": "17",
  "INTR": "18",
  "CLK": "19",
  "GND_20": "20",
  "RESET": "21",
  "READY": "22",
  "~{TEST}": "23",
  "~{INTA}": "24",
  "ALE": "25",
  "DEN": "26",
  "DT/~{R}": "27",
  "IO/~{M}": "28",
  "~{WR}": "29",
  "HLDA": "30",
  "HOLD": "31",
  "~{RD}": "32",
  "MN/~{MX}": "33",
  "~{SSO}": "34",
  "A19/S6": "35",
  "A18/S5": "36",
  "A17/S4": "37",
  "A16/S3": "38",
  "A15": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", A14: "output", A13: "output", A12: "output", A11: "output", A10: "output", A9: "output", A8: "output", AD7: "bidirectional", AD6: "bidirectional", AD5: "bidirectional", AD4: "bidirectional", AD3: "bidirectional", AD2: "bidirectional", AD1: "bidirectional", AD0: "bidirectional", NMI: "input", INTR: "input", CLK: "input", GND_20: "passive", RESET: "input", READY: "input", "~{TEST}": "input", "~{INTA}": "output", ALE: "output", DEN: "output", "DT/~{R}": "output", "IO/~{M}": "output", "~{WR}": "output", HLDA: "output", HOLD: "input", "~{RD}": "output", "MN/~{MX}": "input", "~{SSO}": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", A15: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8088";
  override referencePrefix = "U";
}

/**
 * 8088 (maximum mode), 8-Bit HMOS Microprocessor, PDIP-40
 *
 * KiCad symbol: `MCU_Intel:8088_Max_Mode`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://datasheets.chipdb.org/Intel/x86/808x/datashts/8088/231456-006.pdf
 * Keywords: MPRO.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8088_Max_Mode extends Component.withPins({
  "GND_1": "1",
  "A14": "2",
  "A13": "3",
  "A12": "4",
  "A11": "5",
  "A10": "6",
  "A9": "7",
  "A8": "8",
  "AD7": "9",
  "AD6": "10",
  "AD5": "11",
  "AD4": "12",
  "AD3": "13",
  "AD2": "14",
  "AD1": "15",
  "AD0": "16",
  "NMI": "17",
  "INTR": "18",
  "CLK": "19",
  "GND_20": "20",
  "RESET": "21",
  "READY": "22",
  "~{TEST}": "23",
  "QS1": "24",
  "QS0": "25",
  "~{S0}": "26",
  "~{S1}": "27",
  "~{S2}": "28",
  "~{LOCK}": "29",
  "~{RQ}/~{GT1}": "30",
  "~{RQ}/~{GT0}": "31",
  "~{RD}": "32",
  "MN/~{MX}": "33",
  "HIGH": "34",
  "A19/S6": "35",
  "A18/S5": "36",
  "A17/S4": "37",
  "A16/S3": "38",
  "A15": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", A14: "output", A13: "output", A12: "output", A11: "output", A10: "output", A9: "output", A8: "output", AD7: "bidirectional", AD6: "bidirectional", AD5: "bidirectional", AD4: "bidirectional", AD3: "bidirectional", AD2: "bidirectional", AD1: "bidirectional", AD0: "bidirectional", NMI: "input", INTR: "input", CLK: "input", GND_20: "passive", RESET: "input", READY: "input", "~{TEST}": "input", QS1: "output", QS0: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", "~{LOCK}": "output", "~{RQ}/~{GT1}": "bidirectional", "~{RQ}/~{GT0}": "bidirectional", "~{RD}": "output", "MN/~{MX}": "input", HIGH: "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", A15: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8088_Max_Mode";
  override referencePrefix = "U";
}

/**
 * 8088 (minimum mode), 8-Bit HMOS Microprocessor, PDIP-40
 *
 * KiCad symbol: `MCU_Intel:8088_Min_Mode`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://datasheets.chipdb.org/Intel/x86/808x/datashts/8088/231456-006.pdf
 * Keywords: MPRO.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _8088_Min_Mode extends Component.withPins({
  "GND_1": "1",
  "A14": "2",
  "A13": "3",
  "A12": "4",
  "A11": "5",
  "A10": "6",
  "A9": "7",
  "A8": "8",
  "AD7": "9",
  "AD6": "10",
  "AD5": "11",
  "AD4": "12",
  "AD3": "13",
  "AD2": "14",
  "AD1": "15",
  "AD0": "16",
  "NMI": "17",
  "INTR": "18",
  "CLK": "19",
  "GND_20": "20",
  "RESET": "21",
  "READY": "22",
  "~{TEST}": "23",
  "~{INTA}": "24",
  "ALE": "25",
  "DEN": "26",
  "DT/~{R}": "27",
  "IO/~{M}": "28",
  "~{WR}": "29",
  "HLDA": "30",
  "HOLD": "31",
  "~{RD}": "32",
  "MN/~{MX}": "33",
  "~{SSO}": "34",
  "A19/S6": "35",
  "A18/S5": "36",
  "A17/S4": "37",
  "A16/S3": "38",
  "A15": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", A14: "output", A13: "output", A12: "output", A11: "output", A10: "output", A9: "output", A8: "output", AD7: "bidirectional", AD6: "bidirectional", AD5: "bidirectional", AD4: "bidirectional", AD3: "bidirectional", AD2: "bidirectional", AD1: "bidirectional", AD0: "bidirectional", NMI: "input", INTR: "input", CLK: "input", GND_20: "passive", RESET: "input", READY: "input", "~{TEST}": "input", "~{INTA}": "output", ALE: "output", DEN: "output", "DT/~{R}": "output", "IO/~{M}": "output", "~{WR}": "output", HLDA: "output", HOLD: "input", "~{RD}": "output", "MN/~{MX}": "input", "~{SSO}": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", A15: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8088_Min_Mode";
  override referencePrefix = "U";
}

/**
 * 16-Bit High-Integration Embedded Processor
 *
 * KiCad symbol: `MCU_Intel:M80C186XL`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://datasheets.chipdb.org/Intel/x86/8018x/datashts/80186/27127602.pdf
 * Keywords: MPRO.
 */
export class M80C186XL extends Component.withPins({
  "AD15": "1",
  "AD7": "2",
  "AD14": "3",
  "AD6": "4",
  "AD13": "5",
  "AD5": "6",
  "AD12": "7",
  "AD4": "8",
  "VCC_9": "9",
  "AD11": "10",
  "AD3": "11",
  "AD10": "12",
  "AD2": "13",
  "AD9": "14",
  "AD1": "15",
  "AD8": "16",
  "AD0": "17",
  "DRQ0": "18",
  "DRQ1": "19",
  "TMR_IN_0": "20",
  "TMR_IN_1": "21",
  "TMR_OUT_0": "22",
  "TMR_OUT_1": "23",
  "~{RES}": "24",
  "~{PCS0}": "25",
  "VSS_26": "26",
  "~{PCS1}": "27",
  "~{PCS2}": "28",
  "~{PCS3}": "29",
  "~{PCS4}": "30",
  "~{PCS5}/A1": "31",
  "~{PCS6}/A2": "32",
  "~{LCS}": "33",
  "~{UCS}": "34",
  "~{MCS3}/~{NPS}": "35",
  "~{MCS2}": "36",
  "~{MCS1}/~{ERROR}": "37",
  "~{MCS0}/PEREQ": "38",
  "~{DEN}": "39",
  "DT/~{R}": "40",
  "INT3/~{INTA1}/IRQ": "41",
  "INT2/~{INTA0}": "42",
  "VCC_43": "43",
  "INT1/~{SELECT}": "44",
  "INT0": "45",
  "NMI": "46",
  "~{TEST}/BUSY": "47",
  "~{LOCK}": "48",
  "SRDY": "49",
  "HOLD": "50",
  "HLDA": "51",
  "~{S0}": "52",
  "~{S1}": "53",
  "~{S2}": "54",
  "ARDY": "55",
  "CLKOUT": "56",
  "RESET": "57",
  "X2": "58",
  "X1": "59",
  "VSS_60": "60",
  "ALE/QS0": "61",
  "~{RD}/~{QSMD}": "62",
  "~{WR}/QS1": "63",
  "~{BHE}": "64",
  "A19/S6": "65",
  "A18/S5": "66",
  "A17/S4": "67",
  "A16/S3": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AD15: "bidirectional", AD7: "bidirectional", AD14: "bidirectional", AD6: "bidirectional", AD13: "bidirectional", AD5: "bidirectional", AD12: "bidirectional", AD4: "bidirectional", VCC_9: "power_in", AD11: "bidirectional", AD3: "bidirectional", AD10: "bidirectional", AD2: "bidirectional", AD9: "bidirectional", AD1: "bidirectional", AD8: "bidirectional", AD0: "bidirectional", DRQ0: "input", DRQ1: "input", TMR_IN_0: "input", TMR_IN_1: "input", TMR_OUT_0: "output", TMR_OUT_1: "output", "~{RES}": "input", "~{PCS0}": "output", VSS_26: "power_in", "~{PCS1}": "output", "~{PCS2}": "output", "~{PCS3}": "output", "~{PCS4}": "output", "~{PCS5}/A1": "output", "~{PCS6}/A2": "output", "~{LCS}": "bidirectional", "~{UCS}": "bidirectional", "~{MCS3}/~{NPS}": "output", "~{MCS2}": "output", "~{MCS1}/~{ERROR}": "bidirectional", "~{MCS0}/PEREQ": "bidirectional", "~{DEN}": "output", "DT/~{R}": "output", "INT3/~{INTA1}/IRQ": "bidirectional", "INT2/~{INTA0}": "bidirectional", VCC_43: "power_in", "INT1/~{SELECT}": "input", INT0: "input", NMI: "input", "~{TEST}/BUSY": "bidirectional", "~{LOCK}": "output", SRDY: "input", HOLD: "input", HLDA: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", ARDY: "input", CLKOUT: "output", RESET: "output", X2: "output", X1: "input", VSS_60: "passive", "ALE/QS0": "output", "~{RD}/~{QSMD}": "bidirectional", "~{WR}/QS1": "output", "~{BHE}": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:M80C186XL";
  override referencePrefix = "U";
}

/**
 * 16-Bit High-Integration Embedded Processor
 *
 * KiCad symbol: `MCU_Intel:80C186XL`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://datasheets.chipdb.org/Intel/x86/8018x/datashts/27243104.PDF
 * Keywords: MPRO.
 */
export class _80C186XL extends Component.withPins({
  "AD15": "1",
  "AD7": "2",
  "AD14": "3",
  "AD6": "4",
  "AD13": "5",
  "AD5": "6",
  "AD12": "7",
  "AD4": "8",
  "VCC_9": "9",
  "AD11": "10",
  "AD3": "11",
  "AD10": "12",
  "AD2": "13",
  "AD9": "14",
  "AD1": "15",
  "AD8": "16",
  "AD0": "17",
  "DRQ0": "18",
  "DRQ1": "19",
  "TMR_IN_0": "20",
  "TMR_IN_1": "21",
  "TMR_OUT_0": "22",
  "TMR_OUT_1": "23",
  "~{RES}": "24",
  "~{PCS0}": "25",
  "VSS_26": "26",
  "~{PCS1}": "27",
  "~{PCS2}": "28",
  "~{PCS3}": "29",
  "~{PCS4}": "30",
  "~{PCS5}/A1": "31",
  "~{PCS6}/A2": "32",
  "~{LCS}": "33",
  "~{UCS}": "34",
  "~{MCS3}/~{NPS}": "35",
  "~{MCS2}": "36",
  "~{MCS1}/~{ERROR}": "37",
  "~{MCS0}/PEREQ": "38",
  "~{DEN}": "39",
  "DT/~{R}": "40",
  "INT3/~{INTA1}/IRQ": "41",
  "INT2/~{INTA0}": "42",
  "VCC_43": "43",
  "INT1/~{SELECT}": "44",
  "INT0": "45",
  "NMI": "46",
  "~{TEST}/BUSY": "47",
  "~{LOCK}": "48",
  "SRDY": "49",
  "HOLD": "50",
  "HLDA": "51",
  "~{S0}": "52",
  "~{S1}": "53",
  "~{S2}": "54",
  "ARDY": "55",
  "CLKOUT": "56",
  "RESET": "57",
  "X2": "58",
  "X1": "59",
  "VSS_60": "60",
  "ALE/QS0": "61",
  "~{RD}/~{QSMD}": "62",
  "~{WR}/QS1": "63",
  "~{BHE}": "64",
  "A19/S6": "65",
  "A18/S5": "66",
  "A17/S4": "67",
  "A16/S3": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AD15: "bidirectional", AD7: "bidirectional", AD14: "bidirectional", AD6: "bidirectional", AD13: "bidirectional", AD5: "bidirectional", AD12: "bidirectional", AD4: "bidirectional", VCC_9: "power_in", AD11: "bidirectional", AD3: "bidirectional", AD10: "bidirectional", AD2: "bidirectional", AD9: "bidirectional", AD1: "bidirectional", AD8: "bidirectional", AD0: "bidirectional", DRQ0: "input", DRQ1: "input", TMR_IN_0: "input", TMR_IN_1: "input", TMR_OUT_0: "output", TMR_OUT_1: "output", "~{RES}": "input", "~{PCS0}": "output", VSS_26: "power_in", "~{PCS1}": "output", "~{PCS2}": "output", "~{PCS3}": "output", "~{PCS4}": "output", "~{PCS5}/A1": "output", "~{PCS6}/A2": "output", "~{LCS}": "bidirectional", "~{UCS}": "bidirectional", "~{MCS3}/~{NPS}": "output", "~{MCS2}": "output", "~{MCS1}/~{ERROR}": "bidirectional", "~{MCS0}/PEREQ": "bidirectional", "~{DEN}": "output", "DT/~{R}": "output", "INT3/~{INTA1}/IRQ": "bidirectional", "INT2/~{INTA0}": "bidirectional", VCC_43: "power_in", "INT1/~{SELECT}": "input", INT0: "input", NMI: "input", "~{TEST}/BUSY": "bidirectional", "~{LOCK}": "output", SRDY: "input", HOLD: "input", HLDA: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", ARDY: "input", CLKOUT: "output", RESET: "output", X2: "output", X1: "input", VSS_60: "passive", "ALE/QS0": "output", "~{RD}/~{QSMD}": "bidirectional", "~{WR}/QS1": "output", "~{BHE}": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:80C186XL";
  override referencePrefix = "U";
}

/**
 * CHMOS High-Integration 16-Bit Microprocessor
 *
 * KiCad symbol: `MCU_Intel:80C188`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://datasheets.chipdb.org/Intel/x86/8018x/datashts/80188/intel-80c188.pdf
 * Keywords: MPRO.
 */
export class _80C188 extends Component.withPins({
  "A15": "1",
  "AD7": "2",
  "A14": "3",
  "AD6": "4",
  "A13": "5",
  "AD5": "6",
  "A12": "7",
  "AD4": "8",
  "VCC_9": "9",
  "A11": "10",
  "AD3": "11",
  "A10": "12",
  "AD2": "13",
  "A9": "14",
  "AD1": "15",
  "A8": "16",
  "AD0": "17",
  "DRQ0": "18",
  "DRQ1": "19",
  "TMR_IN_0": "20",
  "TMR_IN_1": "21",
  "TMR_OUT_0": "22",
  "TMR_OUT_1": "23",
  "~{RES}": "24",
  "~{PCS0}": "25",
  "VSS_26": "26",
  "~{PCS1}": "27",
  "~{PCS2}": "28",
  "~{PCS3}": "29",
  "~{PCS4}": "30",
  "~{PCS5}/A1": "31",
  "~{PCS6}/A2": "32",
  "~{LCS}": "33",
  "~{UCS}": "34",
  "~{MCS3}": "35",
  "~{MCS2}": "36",
  "~{MCS1}": "37",
  "~{MCS0}": "38",
  "~{DEN}": "39",
  "DT/~{R}": "40",
  "INT3/~{INTA1}/IRQ": "41",
  "INT2/~{INTA0}": "42",
  "VCC_43": "43",
  "INT1/~{SELECT}": "44",
  "INT0": "45",
  "NMI": "46",
  "~{TEST}": "47",
  "~{LOCK}": "48",
  "SRDY": "49",
  "HOLD": "50",
  "HLDA": "51",
  "~{S0}": "52",
  "~{S1}": "53",
  "~{S2}": "54",
  "ARDY": "55",
  "CLKOUT": "56",
  "RESET": "57",
  "X2": "58",
  "X1": "59",
  "VSS_60": "60",
  "ALE/QS0": "61",
  "~{RD}/~{QSMD}": "62",
  "~{WR}/QS1": "63",
  "~{RFSH}": "64",
  "A19/S6": "65",
  "A18/S5": "66",
  "A17/S4": "67",
  "A16/S3": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A15: "output", AD7: "bidirectional", A14: "output", AD6: "bidirectional", A13: "output", AD5: "bidirectional", A12: "output", AD4: "bidirectional", VCC_9: "power_in", A11: "output", AD3: "bidirectional", A10: "output", AD2: "bidirectional", A9: "output", AD1: "bidirectional", A8: "output", AD0: "bidirectional", DRQ0: "input", DRQ1: "input", TMR_IN_0: "input", TMR_IN_1: "input", TMR_OUT_0: "output", TMR_OUT_1: "output", "~{RES}": "input", "~{PCS0}": "output", VSS_26: "power_in", "~{PCS1}": "output", "~{PCS2}": "output", "~{PCS3}": "output", "~{PCS4}": "output", "~{PCS5}/A1": "output", "~{PCS6}/A2": "output", "~{LCS}": "bidirectional", "~{UCS}": "bidirectional", "~{MCS3}": "output", "~{MCS2}": "output", "~{MCS1}": "output", "~{MCS0}": "output", "~{DEN}": "output", "DT/~{R}": "output", "INT3/~{INTA1}/IRQ": "bidirectional", "INT2/~{INTA0}": "bidirectional", VCC_43: "power_in", "INT1/~{SELECT}": "input", INT0: "input", NMI: "input", "~{TEST}": "bidirectional", "~{LOCK}": "output", SRDY: "input", HOLD: "input", HLDA: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", ARDY: "input", CLKOUT: "output", RESET: "output", X2: "output", X1: "input", VSS_60: "passive", "ALE/QS0": "output", "~{RD}/~{QSMD}": "bidirectional", "~{WR}/QS1": "output", "~{RFSH}": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:80C188";
  override referencePrefix = "U";
}

/**
 * 16-Bit High-Integration Embedded Processor
 *
 * KiCad symbol: `MCU_Intel:80C188XL`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://datasheets.chipdb.org/Intel/x86/8018x/datashts/27243104.PDF
 * Keywords: MPRO.
 */
export class _80C188XL extends Component.withPins({
  "A15": "1",
  "AD7": "2",
  "A14": "3",
  "AD6": "4",
  "A13": "5",
  "AD5": "6",
  "A12": "7",
  "AD4": "8",
  "VCC_9": "9",
  "A11": "10",
  "AD3": "11",
  "A10": "12",
  "AD2": "13",
  "A9": "14",
  "AD1": "15",
  "A8": "16",
  "AD0": "17",
  "DRQ0": "18",
  "DRQ1": "19",
  "TMR_IN_0": "20",
  "TMR_IN_1": "21",
  "TMR_OUT_0": "22",
  "TMR_OUT_1": "23",
  "~{RES}": "24",
  "~{PCS0}": "25",
  "VSS_26": "26",
  "~{PCS1}": "27",
  "~{PCS2}": "28",
  "~{PCS3}": "29",
  "~{PCS4}": "30",
  "~{PCS5}/A1": "31",
  "~{PCS6}/A2": "32",
  "~{LCS}": "33",
  "~{UCS}": "34",
  "~{MCS3}": "35",
  "~{MCS2}": "36",
  "~{MCS1}": "37",
  "~{MCS0}": "38",
  "~{DEN}": "39",
  "DT/~{R}": "40",
  "INT3/~{INTA1}/IRQ": "41",
  "INT2/~{INTA0}": "42",
  "VCC_43": "43",
  "INT1/~{SELECT}": "44",
  "INT0": "45",
  "NMI": "46",
  "~{TEST}": "47",
  "~{LOCK}": "48",
  "SRDY": "49",
  "HOLD": "50",
  "HLDA": "51",
  "~{S0}": "52",
  "~{S1}": "53",
  "~{S2}": "54",
  "ARDY": "55",
  "CLKOUT": "56",
  "RESET": "57",
  "X2": "58",
  "X1": "59",
  "VSS_60": "60",
  "ALE/QS0": "61",
  "~{RD}/~{QSMD}": "62",
  "~{WR}/QS1": "63",
  "~{RFSH}": "64",
  "A19/S6": "65",
  "A18/S5": "66",
  "A17/S4": "67",
  "A16/S3": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A15: "output", AD7: "bidirectional", A14: "output", AD6: "bidirectional", A13: "output", AD5: "bidirectional", A12: "output", AD4: "bidirectional", VCC_9: "power_in", A11: "output", AD3: "bidirectional", A10: "output", AD2: "bidirectional", A9: "output", AD1: "bidirectional", A8: "output", AD0: "bidirectional", DRQ0: "input", DRQ1: "input", TMR_IN_0: "input", TMR_IN_1: "input", TMR_OUT_0: "output", TMR_OUT_1: "output", "~{RES}": "input", "~{PCS0}": "output", VSS_26: "power_in", "~{PCS1}": "output", "~{PCS2}": "output", "~{PCS3}": "output", "~{PCS4}": "output", "~{PCS5}/A1": "output", "~{PCS6}/A2": "output", "~{LCS}": "bidirectional", "~{UCS}": "bidirectional", "~{MCS3}": "output", "~{MCS2}": "output", "~{MCS1}": "output", "~{MCS0}": "output", "~{DEN}": "output", "DT/~{R}": "output", "INT3/~{INTA1}/IRQ": "bidirectional", "INT2/~{INTA0}": "bidirectional", VCC_43: "power_in", "INT1/~{SELECT}": "input", INT0: "input", NMI: "input", "~{TEST}": "bidirectional", "~{LOCK}": "output", SRDY: "input", HOLD: "input", HLDA: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", ARDY: "input", CLKOUT: "output", RESET: "output", X2: "output", X1: "input", VSS_60: "passive", "ALE/QS0": "output", "~{RD}/~{QSMD}": "bidirectional", "~{WR}/QS1": "output", "~{RFSH}": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:80C188XL";
  override referencePrefix = "U";
}

/**
 * i8748, MCS-48 8-bit Microcontroller with Internal EPROM, 1KB EPROM, 64B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8748`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 */
export class _8748 extends Component.withPins({
  "T0": "1",
  "X1": "2",
  "X2": "3",
  "~{RESET}": "4",
  "~{SS}": "5",
  "~{INT}": "6",
  "EA": "7",
  "~{RD}": "8",
  "~{PSEN}": "9",
  "~{WR}": "10",
  "ALE": "11",
  "DB.0": "12",
  "DB.1": "13",
  "DB.2": "14",
  "DB.3": "15",
  "DB.4": "16",
  "DB.5": "17",
  "DB.6": "18",
  "DB.7": "19",
  "GND": "20",
  "P2.0": "21",
  "P2.1": "22",
  "P2.2": "23",
  "P2.3": "24",
  "PROG": "25",
  "Vpp/VDD": "26",
  "P1.0": "27",
  "P1.1": "28",
  "P1.2": "29",
  "P1.3": "30",
  "P1.4": "31",
  "P1.5": "32",
  "P1.6": "33",
  "P1.7": "34",
  "P2.4": "35",
  "P2.5": "36",
  "P2.6": "37",
  "P2.7": "38",
  "T1": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { T0: "input", X1: "input", X2: "output", "~{RESET}": "input", "~{SS}": "input", "~{INT}": "input", EA: "input", "~{RD}": "output", "~{PSEN}": "output", "~{WR}": "output", ALE: "output", "DB.0": "bidirectional", "DB.1": "bidirectional", "DB.2": "bidirectional", "DB.3": "bidirectional", "DB.4": "bidirectional", "DB.5": "bidirectional", "DB.6": "bidirectional", "DB.7": "bidirectional", GND: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", PROG: "output", "Vpp/VDD": "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", T1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8748";
  override referencePrefix = "U";
}

/**
 * i8748, MCS-48 8-bit Microcontroller with Internal EPROM, 2KB EPROM, 128B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8749`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 */
export class _8749 extends Component.withPins({
  "T0": "1",
  "X1": "2",
  "X2": "3",
  "~{RESET}": "4",
  "~{SS}": "5",
  "~{INT}": "6",
  "EA": "7",
  "~{RD}": "8",
  "~{PSEN}": "9",
  "~{WR}": "10",
  "ALE": "11",
  "DB.0": "12",
  "DB.1": "13",
  "DB.2": "14",
  "DB.3": "15",
  "DB.4": "16",
  "DB.5": "17",
  "DB.6": "18",
  "DB.7": "19",
  "GND": "20",
  "P2.0": "21",
  "P2.1": "22",
  "P2.2": "23",
  "P2.3": "24",
  "PROG": "25",
  "Vpp/VDD": "26",
  "P1.0": "27",
  "P1.1": "28",
  "P1.2": "29",
  "P1.3": "30",
  "P1.4": "31",
  "P1.5": "32",
  "P1.6": "33",
  "P1.7": "34",
  "P2.4": "35",
  "P2.5": "36",
  "P2.6": "37",
  "P2.7": "38",
  "T1": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { T0: "input", X1: "input", X2: "output", "~{RESET}": "input", "~{SS}": "input", "~{INT}": "input", EA: "input", "~{RD}": "output", "~{PSEN}": "output", "~{WR}": "output", ALE: "output", "DB.0": "bidirectional", "DB.1": "bidirectional", "DB.2": "bidirectional", "DB.3": "bidirectional", "DB.4": "bidirectional", "DB.5": "bidirectional", "DB.6": "bidirectional", "DB.7": "bidirectional", GND: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", PROG: "output", "Vpp/VDD": "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", T1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:8749";
  override referencePrefix = "U";
}

/**
 * Intel I386EX Embedded microprocessor, PQFP-132
 *
 * KiCad symbol: `MCU_Intel:I386EX_PQFP`. Reference prefix: `U`.
 * Footprint filters: PQFP*.
 * Keywords: MPRO.
 */
export class I386EX_PQFP extends Component.withPins({
  "UCS": "1",
  "CS6/REFRESH": "2",
  "GND_3": "3",
  "LBA": "4",
  "D0": "5",
  "D1": "6",
  "D2": "7",
  "D3": "8",
  "VCC_9": "9",
  "D4": "10",
  "D5": "11",
  "D6": "12",
  "D7": "13",
  "D8": "14",
  "VCC_15": "15",
  "D9": "16",
  "GND_17": "17",
  "D10": "18",
  "D11": "19",
  "D12": "20",
  "D13": "21",
  "D14": "22",
  "D15": "23",
  "TDO": "24",
  "TDI": "25",
  "TMS": "26",
  "M/IO": "27",
  "VCC_28": "28",
  "D/C": "29",
  "WR/RD": "30",
  "GND_31": "31",
  "READY": "32",
  "BS8": "33",
  "RD": "34",
  "WR": "35",
  "GND_36": "36",
  "BLE": "37",
  "VCC_38": "38",
  "BHE": "39",
  "ADS": "40",
  "NA": "41",
  "A1": "42",
  "A2": "43",
  "A3": "44",
  "A4": "45",
  "GND_46": "46",
  "VCC_47": "47",
  "A5": "48",
  "A6": "49",
  "A7": "50",
  "A8": "51",
  "A9": "52",
  "A10": "53",
  "A11": "54",
  "A12": "55",
  "A13": "56",
  "A14": "57",
  "A15": "58",
  "A16/CAS0": "59",
  "VCC_60": "60",
  "A17/CAS1": "61",
  "A18/CAS2": "62",
  "A19": "63",
  "GND_64": "64",
  "A20": "65",
  "A21": "66",
  "A22": "67",
  "A23": "68",
  "GND_69": "69",
  "A24": "70",
  "VCC_71": "71",
  "A25": "72",
  "SMI": "73",
  "TMROUT0/P3.0": "74",
  "TMROUT1/P3.1": "75",
  "TCK": "76",
  "SRXCLK/DTR1": "77",
  "SSIORX/RI1": "78",
  "SSIOTX/RST1": "79",
  "INT0/P3.2": "80",
  "VCC_81": "81",
  "INT1/P3.3": "82",
  "GND_83": "83",
  "INT2/P3.4": "84",
  "INT3/P3.5": "85",
  "PWRDWN/P3.6": "86",
  "COMCLK/P3.7": "87",
  "VCC_88": "88",
  "PEREQ/TMRCLK2": "89",
  "NMI": "90",
  "ERROR/TMROUT2": "91",
  "BUSY/TMRGATE2": "92",
  "INT4/TMRCLK0": "93",
  "INT5/TMRGATE0": "94",
  "INT6/TMRCLK1": "95",
  "INT7/TMRGATE1": "96",
  "GND_97": "97",
  "STXCLK/DSR1": "98",
  "FLT": "99",
  "GND_100": "100",
  "DCD0/P1.0": "101",
  "RTS0/P1.1": "102",
  "DTR0/P1.2": "104",
  "DSR0/P1.3": "105",
  "RI0/P1.4": "106",
  "LOCK/P1.5": "107",
  "HOLD/P1.6": "108",
  "VCC_109": "109",
  "RESET": "110",
  "HLDA/P1.7": "111",
  "DACK1/TXD1": "112",
  "EOP/CTS1": "113",
  "WDTOUT": "114",
  "CLK2": "115",
  "GND_116": "116",
  "DRQ0/DCD1": "117",
  "DRQ1/RXD1": "118",
  "TRST": "119",
  "SMIACT": "120",
  "VCC_121": "121",
  "CS0/P2.0": "122",
  "CS1/P2.1": "123",
  "CS2/P2.2": "124",
  "CS3/P2.3": "125",
  "CS4/P2.4": "126",
  "VCC_127": "127",
  "DACK0/CS5": "128",
  "RDX0/P2.5": "129",
  "GND_130": "130",
  "TXD0/P2.6": "131",
  "CTS0/P2.7": "132",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { UCS: "output", "CS6/REFRESH": "output", GND_3: "power_in", LBA: "output", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", VCC_9: "power_in", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", D8: "tri_state", VCC_15: "power_in", D9: "tri_state", GND_17: "power_in", D10: "tri_state", D11: "tri_state", D12: "tri_state", D13: "tri_state", D14: "tri_state", D15: "tri_state", TDO: "output", TDI: "input", TMS: "input", "M/IO": "output", VCC_28: "power_in", "D/C": "output", "WR/RD": "output", GND_31: "power_in", READY: "bidirectional", BS8: "input", RD: "output", WR: "output", GND_36: "power_in", BLE: "output", VCC_38: "power_in", BHE: "output", ADS: "output", NA: "input", A1: "tri_state", A2: "tri_state", A3: "tri_state", A4: "tri_state", GND_46: "power_in", VCC_47: "power_in", A5: "tri_state", A6: "tri_state", A7: "tri_state", A8: "tri_state", A9: "tri_state", A10: "tri_state", A11: "tri_state", A12: "tri_state", A13: "tri_state", A14: "tri_state", A15: "tri_state", "A16/CAS0": "tri_state", VCC_60: "power_in", "A17/CAS1": "tri_state", "A18/CAS2": "tri_state", A19: "tri_state", GND_64: "power_in", A20: "tri_state", A21: "tri_state", A22: "tri_state", A23: "tri_state", GND_69: "power_in", A24: "tri_state", VCC_71: "power_in", A25: "tri_state", SMI: "input", "TMROUT0/P3.0": "bidirectional", "TMROUT1/P3.1": "bidirectional", TCK: "input", "SRXCLK/DTR1": "bidirectional", "SSIORX/RI1": "input", "SSIOTX/RST1": "bidirectional", "INT0/P3.2": "bidirectional", VCC_81: "power_in", "INT1/P3.3": "bidirectional", GND_83: "power_in", "INT2/P3.4": "bidirectional", "INT3/P3.5": "bidirectional", "PWRDWN/P3.6": "bidirectional", "COMCLK/P3.7": "bidirectional", VCC_88: "power_in", "PEREQ/TMRCLK2": "input", NMI: "input", "ERROR/TMROUT2": "bidirectional", "BUSY/TMRGATE2": "input", "INT4/TMRCLK0": "input", "INT5/TMRGATE0": "input", "INT6/TMRCLK1": "input", "INT7/TMRGATE1": "input", GND_97: "power_in", "STXCLK/DSR1": "bidirectional", FLT: "input", GND_100: "power_in", "DCD0/P1.0": "bidirectional", "RTS0/P1.1": "bidirectional", "DTR0/P1.2": "bidirectional", "DSR0/P1.3": "bidirectional", "RI0/P1.4": "bidirectional", "LOCK/P1.5": "bidirectional", "HOLD/P1.6": "bidirectional", VCC_109: "power_in", RESET: "input", "HLDA/P1.7": "bidirectional", "DACK1/TXD1": "output", "EOP/CTS1": "bidirectional", WDTOUT: "output", CLK2: "input", GND_116: "power_in", "DRQ0/DCD1": "input", "DRQ1/RXD1": "input", TRST: "input", SMIACT: "output", VCC_121: "power_in", "CS0/P2.0": "bidirectional", "CS1/P2.1": "bidirectional", "CS2/P2.2": "bidirectional", "CS3/P2.3": "bidirectional", "CS4/P2.4": "bidirectional", VCC_127: "power_in", "DACK0/CS5": "output", "RDX0/P2.5": "bidirectional", GND_130: "power_in", "TXD0/P2.6": "bidirectional", "CTS0/P2.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:I386EX_PQFP";
  override referencePrefix = "U";
}

/**
 * MCU Replacement for Intel 80C186XL
 *
 * KiCad symbol: `MCU_Intel:IA186XLPLC68IR2`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://www.innovasic.com/upload/products/Innovasic_IA186XL_IA188XL_Data_Sheet_20110706_2.pdf
 * Keywords: MPRO.
 */
export class IA186XLPLC68IR2 extends Component.withPins({
  "AD15": "1",
  "AD7": "2",
  "AD14": "3",
  "AD6": "4",
  "AD13": "5",
  "AD5": "6",
  "AD12": "7",
  "AD4": "8",
  "VCC_9": "9",
  "AD11": "10",
  "AD3": "11",
  "AD10": "12",
  "AD2": "13",
  "AD9": "14",
  "AD1": "15",
  "AD8": "16",
  "AD0": "17",
  "DRQ0": "18",
  "DRQ1": "19",
  "TMR_IN_0": "20",
  "TMR_IN_1": "21",
  "TMR_OUT_0": "22",
  "TMR_OUT_1": "23",
  "~{RES}": "24",
  "~{PCS0}": "25",
  "VSS_26": "26",
  "~{PCS1}": "27",
  "~{PCS2}": "28",
  "~{PCS3}": "29",
  "~{PCS4}": "30",
  "~{PCS5}/A1": "31",
  "~{PCS6}/A2": "32",
  "~{LCS}": "33",
  "~{UCS}": "34",
  "~{MCS3}/~{NPS}": "35",
  "~{MCS2}": "36",
  "~{MCS1}/~{ERROR}": "37",
  "~{MCS0}/PEREQ": "38",
  "~{DEN}": "39",
  "DT/~{R}": "40",
  "INT3/~{INTA1}/IRQ": "41",
  "INT2/~{INTA0}": "42",
  "VCC_43": "43",
  "INT1/~{SELECT}": "44",
  "INT0": "45",
  "NMI": "46",
  "~{TEST}/BUSY": "47",
  "~{LOCK}": "48",
  "SRDY": "49",
  "HOLD": "50",
  "HLDA": "51",
  "~{S0}": "52",
  "~{S1}": "53",
  "~{S2}": "54",
  "ARDY": "55",
  "CLKOUT": "56",
  "RESET": "57",
  "X2": "58",
  "X1": "59",
  "VSS_60": "60",
  "ALE/QS0": "61",
  "~{RD}/~{QSMD}": "62",
  "~{WR}/QS1": "63",
  "~{BHE}": "64",
  "A19/S6": "65",
  "A18/S5": "66",
  "A17/S4": "67",
  "A16/S3": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AD15: "bidirectional", AD7: "bidirectional", AD14: "bidirectional", AD6: "bidirectional", AD13: "bidirectional", AD5: "bidirectional", AD12: "bidirectional", AD4: "bidirectional", VCC_9: "power_in", AD11: "bidirectional", AD3: "bidirectional", AD10: "bidirectional", AD2: "bidirectional", AD9: "bidirectional", AD1: "bidirectional", AD8: "bidirectional", AD0: "bidirectional", DRQ0: "input", DRQ1: "input", TMR_IN_0: "input", TMR_IN_1: "input", TMR_OUT_0: "output", TMR_OUT_1: "output", "~{RES}": "input", "~{PCS0}": "output", VSS_26: "power_in", "~{PCS1}": "output", "~{PCS2}": "output", "~{PCS3}": "output", "~{PCS4}": "output", "~{PCS5}/A1": "output", "~{PCS6}/A2": "output", "~{LCS}": "bidirectional", "~{UCS}": "bidirectional", "~{MCS3}/~{NPS}": "output", "~{MCS2}": "output", "~{MCS1}/~{ERROR}": "bidirectional", "~{MCS0}/PEREQ": "bidirectional", "~{DEN}": "output", "DT/~{R}": "output", "INT3/~{INTA1}/IRQ": "bidirectional", "INT2/~{INTA0}": "bidirectional", VCC_43: "power_in", "INT1/~{SELECT}": "input", INT0: "input", NMI: "input", "~{TEST}/BUSY": "bidirectional", "~{LOCK}": "output", SRDY: "input", HOLD: "input", HLDA: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", ARDY: "input", CLKOUT: "output", RESET: "output", X2: "output", X1: "input", VSS_60: "passive", "ALE/QS0": "output", "~{RD}/~{QSMD}": "bidirectional", "~{WR}/QS1": "output", "~{BHE}": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:IA186XLPLC68IR2";
  override referencePrefix = "U";
}

/**
 * MCU Replacement for Intel 80C188XL
 *
 * KiCad symbol: `MCU_Intel:IA188XLPLC68IR2`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://www.innovasic.com/upload/products/Innovasic_IA186XL_IA188XL_Data_Sheet_20110706_2.pdf
 * Keywords: MPRO.
 */
export class IA188XLPLC68IR2 extends Component.withPins({
  "A15": "1",
  "AD7": "2",
  "A14": "3",
  "AD6": "4",
  "A13": "5",
  "AD5": "6",
  "A12": "7",
  "AD4": "8",
  "VCC_9": "9",
  "A11": "10",
  "AD3": "11",
  "A10": "12",
  "AD2": "13",
  "A9": "14",
  "AD1": "15",
  "A8": "16",
  "AD0": "17",
  "DRQ0": "18",
  "DRQ1": "19",
  "TMR_IN_0": "20",
  "TMR_IN_1": "21",
  "TMR_OUT_0": "22",
  "TMR_OUT_1": "23",
  "~{RES}": "24",
  "~{PCS0}": "25",
  "VSS_26": "26",
  "~{PCS1}": "27",
  "~{PCS2}": "28",
  "~{PCS3}": "29",
  "~{PCS4}": "30",
  "~{PCS5}/A1": "31",
  "~{PCS6}/A2": "32",
  "~{LCS}": "33",
  "~{UCS}": "34",
  "~{MCS3}": "35",
  "~{MCS2}": "36",
  "~{MCS1}": "37",
  "~{MCS0}": "38",
  "~{DEN}": "39",
  "DT/~{R}": "40",
  "INT3/~{INTA1}/IRQ": "41",
  "INT2/~{INTA0}": "42",
  "VCC_43": "43",
  "INT1/~{SELECT}": "44",
  "INT0": "45",
  "NMI": "46",
  "~{TEST}": "47",
  "~{LOCK}": "48",
  "SRDY": "49",
  "HOLD": "50",
  "HLDA": "51",
  "~{S0}": "52",
  "~{S1}": "53",
  "~{S2}": "54",
  "ARDY": "55",
  "CLKOUT": "56",
  "RESET": "57",
  "X2": "58",
  "X1": "59",
  "VSS_60": "60",
  "ALE/QS0": "61",
  "~{RD}/~{QSMD}": "62",
  "~{WR}/QS1": "63",
  "~{RFSH}": "64",
  "A19/S6": "65",
  "A18/S5": "66",
  "A17/S4": "67",
  "A16/S3": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A15: "output", AD7: "bidirectional", A14: "output", AD6: "bidirectional", A13: "output", AD5: "bidirectional", A12: "output", AD4: "bidirectional", VCC_9: "power_in", A11: "output", AD3: "bidirectional", A10: "output", AD2: "bidirectional", A9: "output", AD1: "bidirectional", A8: "output", AD0: "bidirectional", DRQ0: "input", DRQ1: "input", TMR_IN_0: "input", TMR_IN_1: "input", TMR_OUT_0: "output", TMR_OUT_1: "output", "~{RES}": "input", "~{PCS0}": "output", VSS_26: "power_in", "~{PCS1}": "output", "~{PCS2}": "output", "~{PCS3}": "output", "~{PCS4}": "output", "~{PCS5}/A1": "output", "~{PCS6}/A2": "output", "~{LCS}": "bidirectional", "~{UCS}": "bidirectional", "~{MCS3}": "output", "~{MCS2}": "output", "~{MCS1}": "output", "~{MCS0}": "output", "~{DEN}": "output", "DT/~{R}": "output", "INT3/~{INTA1}/IRQ": "bidirectional", "INT2/~{INTA0}": "bidirectional", VCC_43: "power_in", "INT1/~{SELECT}": "input", INT0: "input", NMI: "input", "~{TEST}": "bidirectional", "~{LOCK}": "output", SRDY: "input", HOLD: "input", HLDA: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", ARDY: "input", CLKOUT: "output", RESET: "output", X2: "output", X1: "input", VSS_60: "passive", "ALE/QS0": "output", "~{RD}/~{QSMD}": "bidirectional", "~{WR}/QS1": "output", "~{RFSH}": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:IA188XLPLC68IR2";
  override referencePrefix = "U";
}

/**
 * CHMOS High-Integration 16-Bit Microprocessor
 *
 * KiCad symbol: `MCU_Intel:M80C186`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://datasheets.chipdb.org/Intel/x86/8018x/datashts/80186/27050008.PDF
 * Keywords: MPRO.
 */
export class M80C186 extends Component.withPins({
  "AD15": "1",
  "AD7": "2",
  "AD14": "3",
  "AD6": "4",
  "AD13": "5",
  "AD5": "6",
  "AD12": "7",
  "AD4": "8",
  "VCC_9": "9",
  "AD11": "10",
  "AD3": "11",
  "AD10": "12",
  "AD2": "13",
  "AD9": "14",
  "AD1": "15",
  "AD8": "16",
  "AD0": "17",
  "DRQ0": "18",
  "DRQ1": "19",
  "TMR_IN_0": "20",
  "TMR_IN_1": "21",
  "TMR_OUT_0": "22",
  "TMR_OUT_1": "23",
  "~{RES}": "24",
  "~{PCS0}": "25",
  "VSS_26": "26",
  "~{PCS1}": "27",
  "~{PCS2}": "28",
  "~{PCS3}": "29",
  "~{PCS4}": "30",
  "~{PCS5}/A1": "31",
  "~{PCS6}/A2": "32",
  "~{LCS}": "33",
  "~{UCS}": "34",
  "~{MCS3}/~{NPS}": "35",
  "~{MCS2}": "36",
  "~{MCS1}/~{ERROR}": "37",
  "~{MCS0}/PEREQ": "38",
  "~{DEN}": "39",
  "DT/~{R}": "40",
  "INT3/~{INTA1}": "41",
  "INT2/~{INTA0}": "42",
  "VCC_43": "43",
  "INT1": "44",
  "INT0": "45",
  "NMI": "46",
  "~{TEST}/BUSY": "47",
  "~{LOCK}": "48",
  "SRDY": "49",
  "HOLD": "50",
  "HLDA": "51",
  "~{S0}": "52",
  "~{S1}": "53",
  "~{S2}": "54",
  "ARDY": "55",
  "CLKOUT": "56",
  "RESET": "57",
  "X2": "58",
  "X1": "59",
  "VSS_60": "60",
  "ALE/QS0": "61",
  "~{RD}/~{QSMD}": "62",
  "~{WR}/QS1": "63",
  "~{BHE}": "64",
  "A19/S6": "65",
  "A18/S5": "66",
  "A17/S4": "67",
  "A16/S3": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AD15: "bidirectional", AD7: "bidirectional", AD14: "bidirectional", AD6: "bidirectional", AD13: "bidirectional", AD5: "bidirectional", AD12: "bidirectional", AD4: "bidirectional", VCC_9: "power_in", AD11: "bidirectional", AD3: "bidirectional", AD10: "bidirectional", AD2: "bidirectional", AD9: "bidirectional", AD1: "bidirectional", AD8: "bidirectional", AD0: "bidirectional", DRQ0: "input", DRQ1: "input", TMR_IN_0: "input", TMR_IN_1: "input", TMR_OUT_0: "output", TMR_OUT_1: "output", "~{RES}": "input", "~{PCS0}": "output", VSS_26: "power_in", "~{PCS1}": "output", "~{PCS2}": "output", "~{PCS3}": "output", "~{PCS4}": "output", "~{PCS5}/A1": "output", "~{PCS6}/A2": "output", "~{LCS}": "output", "~{UCS}": "output", "~{MCS3}/~{NPS}": "output", "~{MCS2}": "output", "~{MCS1}/~{ERROR}": "bidirectional", "~{MCS0}/PEREQ": "bidirectional", "~{DEN}": "output", "DT/~{R}": "output", "INT3/~{INTA1}": "bidirectional", "INT2/~{INTA0}": "bidirectional", VCC_43: "power_in", INT1: "input", INT0: "input", NMI: "input", "~{TEST}/BUSY": "input", "~{LOCK}": "output", SRDY: "input", HOLD: "input", HLDA: "output", "~{S0}": "output", "~{S1}": "output", "~{S2}": "output", ARDY: "input", CLKOUT: "output", RESET: "output", X2: "output", X1: "input", VSS_60: "passive", "ALE/QS0": "output", "~{RD}/~{QSMD}": "output", "~{WR}/QS1": "output", "~{BHE}": "output", "A19/S6": "output", "A18/S5": "output", "A17/S4": "output", "A16/S3": "output", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:M80C186";
  override referencePrefix = "U";
}

/**
 * MCS-51 8-bit Control-Oriented Microcontrollers, 4K x 8 masked ROM, 128 x 8 RAM, 2x 16-bit timers / event counters, 12MHz, DIP-40
 *
 * KiCad symbol: `MCU_Intel:P8051AH`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*.
 * @see https://www.datasheetarchive.com/datasheet/MCS%2051/Intel
 * Keywords: 8051 NMOS HMOS Obsolete.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class P8051AH extends Component.withPins({
  "P1.2": "3",
  "P1.0": "1",
  "P1.1": "2",
  "P1.3": "4",
  "P1.4": "5",
  "P1.5": "6",
  "P1.6": "7",
  "P1.7": "8",
  "RST": "9",
  "P3.0/RXD": "10",
  "P3.1/TXD": "11",
  "P3.2/~{INT0}": "12",
  "P3.3/~{INT1}": "13",
  "P3.4/T0": "14",
  "P3.5/T1": "15",
  "P3.6/~{WR}": "16",
  "P3.7/~{RD}": "17",
  "XTAL2": "18",
  "XTAL1": "19",
  "VSS": "20",
  "P2.0/A8": "21",
  "P2.1/A9": "22",
  "P2.2/A10": "23",
  "P2.3/A11": "24",
  "P2.4/A12": "25",
  "P2.5/A13": "26",
  "P2.6/A14": "27",
  "P2.7/A15": "28",
  "~{PSEN}": "29",
  "ALE": "30",
  "~{EA}": "31",
  "P0.7/AD7": "32",
  "P0.6/AD6": "33",
  "P0.5/AD5": "34",
  "P0.4/AD4": "35",
  "P0.3/AD3": "36",
  "P0.2/AD2": "37",
  "P0.1/AD1": "38",
  "P0.0/AD0": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", RST: "input", "P3.0/RXD": "bidirectional", "P3.1/TXD": "bidirectional", "P3.2/~{INT0}": "bidirectional", "P3.3/~{INT1}": "bidirectional", "P3.4/T0": "bidirectional", "P3.5/T1": "bidirectional", "P3.6/~{WR}": "bidirectional", "P3.7/~{RD}": "bidirectional", XTAL2: "output", XTAL1: "input", VSS: "power_in", "P2.0/A8": "bidirectional", "P2.1/A9": "bidirectional", "P2.2/A10": "bidirectional", "P2.3/A11": "bidirectional", "P2.4/A12": "bidirectional", "P2.5/A13": "bidirectional", "P2.6/A14": "bidirectional", "P2.7/A15": "bidirectional", "~{PSEN}": "output", ALE: "output", "~{EA}": "input", "P0.7/AD7": "bidirectional", "P0.6/AD6": "bidirectional", "P0.5/AD5": "bidirectional", "P0.4/AD4": "bidirectional", "P0.3/AD3": "bidirectional", "P0.2/AD2": "bidirectional", "P0.1/AD1": "bidirectional", "P0.0/AD0": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:P8051AH";
  override referencePrefix = "U";
}

/**
 * MCS-51 8-bit Control-Oriented Microcontrollers, ROMless, 128 x 8 RAM, 2x 16-bit timers / event counters, 12MHz, DIP-40
 *
 * KiCad symbol: `MCU_Intel:P8031AH`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*.
 * @see https://www.datasheetarchive.com/datasheet/MCS%2051/Intel
 * Keywords: 8051 NMOS HMOS Obsolete.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class P8031AH extends Component.withPins({
  "P1.2": "3",
  "P1.0": "1",
  "P1.1": "2",
  "P1.3": "4",
  "P1.4": "5",
  "P1.5": "6",
  "P1.6": "7",
  "P1.7": "8",
  "RST": "9",
  "P3.0/RXD": "10",
  "P3.1/TXD": "11",
  "P3.2/~{INT0}": "12",
  "P3.3/~{INT1}": "13",
  "P3.4/T0": "14",
  "P3.5/T1": "15",
  "P3.6/~{WR}": "16",
  "P3.7/~{RD}": "17",
  "XTAL2": "18",
  "XTAL1": "19",
  "VSS": "20",
  "P2.0/A8": "21",
  "P2.1/A9": "22",
  "P2.2/A10": "23",
  "P2.3/A11": "24",
  "P2.4/A12": "25",
  "P2.5/A13": "26",
  "P2.6/A14": "27",
  "P2.7/A15": "28",
  "~{PSEN}": "29",
  "ALE": "30",
  "~{EA}": "31",
  "P0.7/AD7": "32",
  "P0.6/AD6": "33",
  "P0.5/AD5": "34",
  "P0.4/AD4": "35",
  "P0.3/AD3": "36",
  "P0.2/AD2": "37",
  "P0.1/AD1": "38",
  "P0.0/AD0": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", RST: "input", "P3.0/RXD": "bidirectional", "P3.1/TXD": "bidirectional", "P3.2/~{INT0}": "bidirectional", "P3.3/~{INT1}": "bidirectional", "P3.4/T0": "bidirectional", "P3.5/T1": "bidirectional", "P3.6/~{WR}": "bidirectional", "P3.7/~{RD}": "bidirectional", XTAL2: "output", XTAL1: "input", VSS: "power_in", "P2.0/A8": "bidirectional", "P2.1/A9": "bidirectional", "P2.2/A10": "bidirectional", "P2.3/A11": "bidirectional", "P2.4/A12": "bidirectional", "P2.5/A13": "bidirectional", "P2.6/A14": "bidirectional", "P2.7/A15": "bidirectional", "~{PSEN}": "output", ALE: "output", "~{EA}": "input", "P0.7/AD7": "bidirectional", "P0.6/AD6": "bidirectional", "P0.5/AD5": "bidirectional", "P0.4/AD4": "bidirectional", "P0.3/AD3": "bidirectional", "P0.2/AD2": "bidirectional", "P0.1/AD1": "bidirectional", "P0.0/AD0": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:P8031AH";
  override referencePrefix = "U";
}

/**
 * MCS-51 8-bit Control-Oriented Microcontrollers, 8K x 8 masked ROM, 256 x 8 RAM, 3x 16-bit timers / event counters, 12MHz, DIP-40
 *
 * KiCad symbol: `MCU_Intel:P8052AH`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*.
 * @see https://www.datasheetarchive.com/datasheet/MCS%2051/Intel
 * Keywords: 8051 NMOS HMOS Obsolete.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class P8052AH extends Component.withPins({
  "P1.2": "3",
  "P1.0/T2": "1",
  "P1.1/T2EX": "2",
  "P1.3": "4",
  "P1.4": "5",
  "P1.5": "6",
  "P1.6": "7",
  "P1.7": "8",
  "RST": "9",
  "P3.0/RXD": "10",
  "P3.1/TXD": "11",
  "P3.2/~{INT0}": "12",
  "P3.3/~{INT1}": "13",
  "P3.4/T0": "14",
  "P3.5/T1": "15",
  "P3.6/~{WR}": "16",
  "P3.7/~{RD}": "17",
  "XTAL2": "18",
  "XTAL1": "19",
  "VSS": "20",
  "P2.0/A8": "21",
  "P2.1/A9": "22",
  "P2.2/A10": "23",
  "P2.3/A11": "24",
  "P2.4/A12": "25",
  "P2.5/A13": "26",
  "P2.6/A14": "27",
  "P2.7/A15": "28",
  "~{PSEN}": "29",
  "ALE": "30",
  "~{EA}": "31",
  "P0.7/AD7": "32",
  "P0.6/AD6": "33",
  "P0.5/AD5": "34",
  "P0.4/AD4": "35",
  "P0.3/AD3": "36",
  "P0.2/AD2": "37",
  "P0.1/AD1": "38",
  "P0.0/AD0": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2": "bidirectional", "P1.0/T2": "bidirectional", "P1.1/T2EX": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", RST: "input", "P3.0/RXD": "bidirectional", "P3.1/TXD": "bidirectional", "P3.2/~{INT0}": "bidirectional", "P3.3/~{INT1}": "bidirectional", "P3.4/T0": "bidirectional", "P3.5/T1": "bidirectional", "P3.6/~{WR}": "bidirectional", "P3.7/~{RD}": "bidirectional", XTAL2: "output", XTAL1: "input", VSS: "power_in", "P2.0/A8": "bidirectional", "P2.1/A9": "bidirectional", "P2.2/A10": "bidirectional", "P2.3/A11": "bidirectional", "P2.4/A12": "bidirectional", "P2.5/A13": "bidirectional", "P2.6/A14": "bidirectional", "P2.7/A15": "bidirectional", "~{PSEN}": "output", ALE: "output", "~{EA}": "input", "P0.7/AD7": "bidirectional", "P0.6/AD6": "bidirectional", "P0.5/AD5": "bidirectional", "P0.4/AD4": "bidirectional", "P0.3/AD3": "bidirectional", "P0.2/AD2": "bidirectional", "P0.1/AD1": "bidirectional", "P0.0/AD0": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:P8052AH";
  override referencePrefix = "U";
}

/**
 * MCS-51 8-bit Control-Oriented Microcontrollers, 4K x 8 EPROM, 128 x 8 RAM, 2x 16-bit timers / event counters, 12MHz, DIP-40
 *
 * KiCad symbol: `MCU_Intel:P8751BH`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*.
 * @see https://www.datasheetarchive.com/datasheet/MCS%2051/Intel
 * Keywords: 8051 NMOS HMOS Obsolete.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class P8751BH extends Component.withPins({
  "P1.2": "3",
  "P1.0": "1",
  "P1.1": "2",
  "P1.3": "4",
  "P1.4": "5",
  "P1.5": "6",
  "P1.6": "7",
  "P1.7": "8",
  "RST": "9",
  "P3.0/RXD": "10",
  "P3.1/TXD": "11",
  "P3.2/~{INT0}": "12",
  "P3.3/~{INT1}": "13",
  "P3.4/T0": "14",
  "P3.5/T1": "15",
  "P3.6/~{WR}": "16",
  "P3.7/~{RD}": "17",
  "XTAL2": "18",
  "XTAL1": "19",
  "VSS": "20",
  "P2.0/A8": "21",
  "P2.1/A9": "22",
  "P2.2/A10": "23",
  "P2.3/A11": "24",
  "P2.4/A12": "25",
  "P2.5/A13": "26",
  "P2.6/A14": "27",
  "P2.7/A15": "28",
  "~{PSEN}": "29",
  "ALE/~{PROG}": "30",
  "~{EA}/VPP": "31",
  "P0.7/AD7": "32",
  "P0.6/AD6": "33",
  "P0.5/AD5": "34",
  "P0.4/AD4": "35",
  "P0.3/AD3": "36",
  "P0.2/AD2": "37",
  "P0.1/AD1": "38",
  "P0.0/AD0": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", RST: "input", "P3.0/RXD": "bidirectional", "P3.1/TXD": "bidirectional", "P3.2/~{INT0}": "bidirectional", "P3.3/~{INT1}": "bidirectional", "P3.4/T0": "bidirectional", "P3.5/T1": "bidirectional", "P3.6/~{WR}": "bidirectional", "P3.7/~{RD}": "bidirectional", XTAL2: "output", XTAL1: "input", VSS: "power_in", "P2.0/A8": "bidirectional", "P2.1/A9": "bidirectional", "P2.2/A10": "bidirectional", "P2.3/A11": "bidirectional", "P2.4/A12": "bidirectional", "P2.5/A13": "bidirectional", "P2.6/A14": "bidirectional", "P2.7/A15": "bidirectional", "~{PSEN}": "output", "ALE/~{PROG}": "output", "~{EA}/VPP": "input", "P0.7/AD7": "bidirectional", "P0.6/AD6": "bidirectional", "P0.5/AD5": "bidirectional", "P0.4/AD4": "bidirectional", "P0.3/AD3": "bidirectional", "P0.2/AD2": "bidirectional", "P0.1/AD1": "bidirectional", "P0.0/AD0": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:P8751BH";
  override referencePrefix = "U";
}

/**
 * MCS-51 8-bit Control-Oriented Microcontrollers, 8K x 8 EPROM, 256 x 8 RAM, 3x 16-bit timers / event counters, 12MHz, DIP-40
 *
 * KiCad symbol: `MCU_Intel:P8752BH`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*.
 * @see https://www.datasheetarchive.com/datasheet/MCS%2051/Intel
 * Keywords: 8051 NMOS HMOS Obsolete.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class P8752BH extends Component.withPins({
  "P1.2": "3",
  "P1.0/T2": "1",
  "P1.1/T2EX": "2",
  "P1.3": "4",
  "P1.4": "5",
  "P1.5": "6",
  "P1.6": "7",
  "P1.7": "8",
  "RST": "9",
  "P3.0/RXD": "10",
  "P3.1/TXD": "11",
  "P3.2/~{INT0}": "12",
  "P3.3/~{INT1}": "13",
  "P3.4/T0": "14",
  "P3.5/T1": "15",
  "P3.6/~{WR}": "16",
  "P3.7/~{RD}": "17",
  "XTAL2": "18",
  "XTAL1": "19",
  "VSS": "20",
  "P2.0/A8": "21",
  "P2.1/A9": "22",
  "P2.2/A10": "23",
  "P2.3/A11": "24",
  "P2.4/A12": "25",
  "P2.5/A13": "26",
  "P2.6/A14": "27",
  "P2.7/A15": "28",
  "~{PSEN}": "29",
  "ALE/~{PROG}": "30",
  "~{EA}/VPP": "31",
  "P0.7/AD7": "32",
  "P0.6/AD6": "33",
  "P0.5/AD5": "34",
  "P0.4/AD4": "35",
  "P0.3/AD3": "36",
  "P0.2/AD2": "37",
  "P0.1/AD1": "38",
  "P0.0/AD0": "39",
  "VCC": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2": "bidirectional", "P1.0/T2": "bidirectional", "P1.1/T2EX": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", RST: "input", "P3.0/RXD": "bidirectional", "P3.1/TXD": "bidirectional", "P3.2/~{INT0}": "bidirectional", "P3.3/~{INT1}": "bidirectional", "P3.4/T0": "bidirectional", "P3.5/T1": "bidirectional", "P3.6/~{WR}": "bidirectional", "P3.7/~{RD}": "bidirectional", XTAL2: "output", XTAL1: "input", VSS: "power_in", "P2.0/A8": "bidirectional", "P2.1/A9": "bidirectional", "P2.2/A10": "bidirectional", "P2.3/A11": "bidirectional", "P2.4/A12": "bidirectional", "P2.5/A13": "bidirectional", "P2.6/A14": "bidirectional", "P2.7/A15": "bidirectional", "~{PSEN}": "output", "ALE/~{PROG}": "output", "~{EA}/VPP": "input", "P0.7/AD7": "bidirectional", "P0.6/AD6": "bidirectional", "P0.5/AD5": "bidirectional", "P0.4/AD4": "bidirectional", "P0.3/AD3": "bidirectional", "P0.2/AD2": "bidirectional", "P0.1/AD1": "bidirectional", "P0.0/AD0": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Intel:P8752BH";
  override referencePrefix = "U";
}
