// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * High-Integration 16-Bit Microprocessor
 *
 * KiCad symbol: `MCU_Intel:80186`. Reference prefix: `U`.
 * Footprint filters: PLCC*, PGA*Layout11x11*P2.54mm*, LCC*.
 * @see http://datasheets.chipdb.org/Intel/x86/8018x/datashts/27243002.PDF
 * Keywords: MPRO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _80186 extends Component.withPins({
  /** Physical pin 1: AD15; bidirectional. */
  "AD15": "1",
  /** Physical pin 2: AD7; bidirectional. */
  "AD7": "2",
  /** Physical pin 3: AD14; bidirectional. */
  "AD14": "3",
  /** Physical pin 4: AD6; bidirectional. */
  "AD6": "4",
  /** Physical pin 5: AD13; bidirectional. */
  "AD13": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: AD12; bidirectional. */
  "AD12": "7",
  /** Physical pin 8: AD4; bidirectional. */
  "AD4": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: AD11; bidirectional. */
  "AD11": "10",
  /** Physical pin 11: AD3; bidirectional. */
  "AD3": "11",
  /** Physical pin 12: AD10; bidirectional. */
  "AD10": "12",
  /** Physical pin 13: AD2; bidirectional. */
  "AD2": "13",
  /** Physical pin 14: AD9; bidirectional. */
  "AD9": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD8; bidirectional. */
  "AD8": "16",
  /** Physical pin 17: AD0; bidirectional. */
  "AD0": "17",
  /** Physical pin 18: DRQ0; input. */
  "DRQ0": "18",
  /** Physical pin 19: DRQ1; input. */
  "DRQ1": "19",
  /** Physical pin 20: TMR_IN_0; input. */
  "TMR_IN_0": "20",
  /** Physical pin 21: TMR_IN_1; input. */
  "TMR_IN_1": "21",
  /** Physical pin 22: TMR_OUT_0; output. */
  "TMR_OUT_0": "22",
  /** Physical pin 23: TMR_OUT_1; output. */
  "TMR_OUT_1": "23",
  /** Physical pin 24: ~{RES}; input. */
  "~{RES}": "24",
  /** Physical pin 25: ~{PCS0}; output. */
  "~{PCS0}": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: ~{PCS1}; output. */
  "~{PCS1}": "27",
  /** Physical pin 28: ~{PCS2}; output. */
  "~{PCS2}": "28",
  /** Physical pin 29: ~{PCS3}; output. */
  "~{PCS3}": "29",
  /** Physical pin 30: ~{PCS4}; output. */
  "~{PCS4}": "30",
  /** Physical pin 31: ~{PCS5}/A1; output. */
  "~{PCS5}/A1": "31",
  /** Physical pin 32: ~{PCS6}/A2; output. */
  "~{PCS6}/A2": "32",
  /** Physical pin 33: ~{LCS}; output. */
  "~{LCS}": "33",
  /** Physical pin 34: ~{UCS}; output. */
  "~{UCS}": "34",
  /** Physical pin 35: ~{MCS3}; output. */
  "~{MCS3}": "35",
  /** Physical pin 36: ~{MCS2}; output. */
  "~{MCS2}": "36",
  /** Physical pin 37: ~{MCS1}; output. */
  "~{MCS1}": "37",
  /** Physical pin 38: ~{MCS0}; output. */
  "~{MCS0}": "38",
  /** Physical pin 39: ~{DEN}; output. */
  "~{DEN}": "39",
  /** Physical pin 40: DT/~{R}; output. */
  "DT/~{R}": "40",
  /** Physical pin 41: INT3/~{INTA1}/IRQ; bidirectional. */
  "INT3/~{INTA1}/IRQ": "41",
  /** Physical pin 42: INT2/~{INTA0}; bidirectional. */
  "INT2/~{INTA0}": "42",
  /** Physical pin 43: VCC; power_in. */
  "VCC_43": "43",
  /** Physical pin 44: INT1/~{SELECT}; input. */
  "INT1/~{SELECT}": "44",
  /** Physical pin 45: INT0; input. */
  "INT0": "45",
  /** Physical pin 46: NMI; input. */
  "NMI": "46",
  /** Physical pin 47: ~{TEST}; bidirectional. */
  "~{TEST}": "47",
  /** Physical pin 48: ~{LOCK}; output. */
  "~{LOCK}": "48",
  /** Physical pin 49: SRDY; input. */
  "SRDY": "49",
  /** Physical pin 50: HOLD; input. */
  "HOLD": "50",
  /** Physical pin 51: HLDA; output. */
  "HLDA": "51",
  /** Physical pin 52: ~{S0}; output. */
  "~{S0}": "52",
  /** Physical pin 53: ~{S1}; output. */
  "~{S1}": "53",
  /** Physical pin 54: ~{S2}; output. */
  "~{S2}": "54",
  /** Physical pin 55: ARDY; input. */
  "ARDY": "55",
  /** Physical pin 56: CLKOUT; output. */
  "CLKOUT": "56",
  /** Physical pin 57: RESET; output. */
  "RESET": "57",
  /** Physical pin 58: X2; output. */
  "X2": "58",
  /** Physical pin 59: X1; input. */
  "X1": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: ALE/QS0; output. */
  "ALE/QS0": "61",
  /** Physical pin 62: ~{RD}/~{QSMD}; output. */
  "~{RD}/~{QSMD}": "62",
  /** Physical pin 63: ~{WR}/QS1; output. */
  "~{WR}/QS1": "63",
  /** Physical pin 64: ~{BHE}/S7; output. */
  "~{BHE}/S7": "64",
  /** Physical pin 65: A19/S6; output. */
  "A19/S6": "65",
  /** Physical pin 66: A18/S5; output. */
  "A18/S5": "66",
  /** Physical pin 67: A17/S4; output. */
  "A17/S4": "67",
  /** Physical pin 68: A16/S3; output. */
  "A16/S3": "68",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _80188 extends Component.withPins({
  /** Physical pin 1: A15; output. */
  "A15": "1",
  /** Physical pin 2: AD7; bidirectional. */
  "AD7": "2",
  /** Physical pin 3: A14; output. */
  "A14": "3",
  /** Physical pin 4: AD6; bidirectional. */
  "AD6": "4",
  /** Physical pin 5: A13; output. */
  "A13": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: A12; output. */
  "A12": "7",
  /** Physical pin 8: AD4; bidirectional. */
  "AD4": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: A11; output. */
  "A11": "10",
  /** Physical pin 11: AD3; bidirectional. */
  "AD3": "11",
  /** Physical pin 12: A10; output. */
  "A10": "12",
  /** Physical pin 13: AD2; bidirectional. */
  "AD2": "13",
  /** Physical pin 14: A9; output. */
  "A9": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: AD0; bidirectional. */
  "AD0": "17",
  /** Physical pin 18: DRQ0; input. */
  "DRQ0": "18",
  /** Physical pin 19: DRQ1; input. */
  "DRQ1": "19",
  /** Physical pin 20: TMR_IN_0; input. */
  "TMR_IN_0": "20",
  /** Physical pin 21: TMR_IN_1; input. */
  "TMR_IN_1": "21",
  /** Physical pin 22: TMR_OUT_0; output. */
  "TMR_OUT_0": "22",
  /** Physical pin 23: TMR_OUT_1; output. */
  "TMR_OUT_1": "23",
  /** Physical pin 24: ~{RES}; input. */
  "~{RES}": "24",
  /** Physical pin 25: ~{PCS0}; output. */
  "~{PCS0}": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: ~{PCS1}; output. */
  "~{PCS1}": "27",
  /** Physical pin 28: ~{PCS2}; output. */
  "~{PCS2}": "28",
  /** Physical pin 29: ~{PCS3}; output. */
  "~{PCS3}": "29",
  /** Physical pin 30: ~{PCS4}; output. */
  "~{PCS4}": "30",
  /** Physical pin 31: ~{PCS5}/A1; output. */
  "~{PCS5}/A1": "31",
  /** Physical pin 32: ~{PCS6}/A2; output. */
  "~{PCS6}/A2": "32",
  /** Physical pin 33: ~{LCS}; output. */
  "~{LCS}": "33",
  /** Physical pin 34: ~{UCS}; output. */
  "~{UCS}": "34",
  /** Physical pin 35: ~{MCS3}; output. */
  "~{MCS3}": "35",
  /** Physical pin 36: ~{MCS2}; output. */
  "~{MCS2}": "36",
  /** Physical pin 37: ~{MCS1}; output. */
  "~{MCS1}": "37",
  /** Physical pin 38: ~{MCS0}; output. */
  "~{MCS0}": "38",
  /** Physical pin 39: ~{DEN}; output. */
  "~{DEN}": "39",
  /** Physical pin 40: DT/~{R}; output. */
  "DT/~{R}": "40",
  /** Physical pin 41: INT3/~{INTA1}/IRQ; bidirectional. */
  "INT3/~{INTA1}/IRQ": "41",
  /** Physical pin 42: INT2/~{INTA0}; bidirectional. */
  "INT2/~{INTA0}": "42",
  /** Physical pin 43: VCC; power_in. */
  "VCC_43": "43",
  /** Physical pin 44: INT1/~{SELECT}; input. */
  "INT1/~{SELECT}": "44",
  /** Physical pin 45: INT0; input. */
  "INT0": "45",
  /** Physical pin 46: NMI; input. */
  "NMI": "46",
  /** Physical pin 47: ~{TEST}; bidirectional. */
  "~{TEST}": "47",
  /** Physical pin 48: ~{LOCK}; output. */
  "~{LOCK}": "48",
  /** Physical pin 49: SRDY; input. */
  "SRDY": "49",
  /** Physical pin 50: HOLD; input. */
  "HOLD": "50",
  /** Physical pin 51: HLDA; output. */
  "HLDA": "51",
  /** Physical pin 52: ~{S0}; output. */
  "~{S0}": "52",
  /** Physical pin 53: ~{S1}; output. */
  "~{S1}": "53",
  /** Physical pin 54: ~{S2}; output. */
  "~{S2}": "54",
  /** Physical pin 55: ARDY; input. */
  "ARDY": "55",
  /** Physical pin 56: CLKOUT; output. */
  "CLKOUT": "56",
  /** Physical pin 57: RESET; output. */
  "RESET": "57",
  /** Physical pin 58: X2; output. */
  "X2": "58",
  /** Physical pin 59: X1; input. */
  "X1": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: ALE/QS0; output. */
  "ALE/QS0": "61",
  /** Physical pin 62: ~{RD}/~{QSMD}; bidirectional. */
  "~{RD}/~{QSMD}": "62",
  /** Physical pin 63: ~{WR}/QS1; output. */
  "~{WR}/QS1": "63",
  /** Physical pin 64: S7; output. */
  "S7": "64",
  /** Physical pin 65: A19/S6; output. */
  "A19/S6": "65",
  /** Physical pin 66: A18/S5; output. */
  "A18/S5": "66",
  /** Physical pin 67: A17/S4; output. */
  "A17/S4": "67",
  /** Physical pin 68: A16/S3; output. */
  "A16/S3": "68",
}) {
  override schema = "MCU_Intel:80188";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, No (EP)ROM, 64B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8035`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8035 extends Component.withPins({
  /** Physical pin 1: T0; input. */
  "T0": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; output. */
  "X2": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{SS}; input. */
  "~{SS}": "5",
  /** Physical pin 6: ~{INT}; input. */
  "~{INT}": "6",
  /** Physical pin 7: EA; input. */
  "EA": "7",
  /** Physical pin 8: ~{RD}; output. */
  "~{RD}": "8",
  /** Physical pin 9: ~{PSEN}; output. */
  "~{PSEN}": "9",
  /** Physical pin 10: ~{WR}; output. */
  "~{WR}": "10",
  /** Physical pin 11: ALE; output. */
  "ALE": "11",
  /** Physical pin 12: DB.0; bidirectional. */
  "DB.0": "12",
  /** Physical pin 13: DB.1; bidirectional. */
  "DB.1": "13",
  /** Physical pin 14: DB.2; bidirectional. */
  "DB.2": "14",
  /** Physical pin 15: DB.3; bidirectional. */
  "DB.3": "15",
  /** Physical pin 16: DB.4; bidirectional. */
  "DB.4": "16",
  /** Physical pin 17: DB.5; bidirectional. */
  "DB.5": "17",
  /** Physical pin 18: DB.6; bidirectional. */
  "DB.6": "18",
  /** Physical pin 19: DB.7; bidirectional. */
  "DB.7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: P2.0; bidirectional. */
  "P2.0": "21",
  /** Physical pin 22: P2.1; bidirectional. */
  "P2.1": "22",
  /** Physical pin 23: P2.2; bidirectional. */
  "P2.2": "23",
  /** Physical pin 24: P2.3; bidirectional. */
  "P2.3": "24",
  /** Physical pin 25: PROG; output. */
  "PROG": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 27: P1.0; bidirectional. */
  "P1.0": "27",
  /** Physical pin 28: P1.1; bidirectional. */
  "P1.1": "28",
  /** Physical pin 29: P1.2; bidirectional. */
  "P1.2": "29",
  /** Physical pin 30: P1.3; bidirectional. */
  "P1.3": "30",
  /** Physical pin 31: P1.4; bidirectional. */
  "P1.4": "31",
  /** Physical pin 32: P1.5; bidirectional. */
  "P1.5": "32",
  /** Physical pin 33: P1.6; bidirectional. */
  "P1.6": "33",
  /** Physical pin 34: P1.7; bidirectional. */
  "P1.7": "34",
  /** Physical pin 35: P2.4; bidirectional. */
  "P2.4": "35",
  /** Physical pin 36: P2.5; bidirectional. */
  "P2.5": "36",
  /** Physical pin 37: P2.6; bidirectional. */
  "P2.6": "37",
  /** Physical pin 38: P2.7; bidirectional. */
  "P2.7": "38",
  /** Physical pin 39: T1; input. */
  "T1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "MCU_Intel:8035";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, No (EP)ROM, 128B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8039`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8039 extends Component.withPins({
  /** Physical pin 1: T0; input. */
  "T0": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; output. */
  "X2": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{SS}; input. */
  "~{SS}": "5",
  /** Physical pin 6: ~{INT}; input. */
  "~{INT}": "6",
  /** Physical pin 7: EA; input. */
  "EA": "7",
  /** Physical pin 8: ~{RD}; output. */
  "~{RD}": "8",
  /** Physical pin 9: ~{PSEN}; output. */
  "~{PSEN}": "9",
  /** Physical pin 10: ~{WR}; output. */
  "~{WR}": "10",
  /** Physical pin 11: ALE; output. */
  "ALE": "11",
  /** Physical pin 12: DB.0; bidirectional. */
  "DB.0": "12",
  /** Physical pin 13: DB.1; bidirectional. */
  "DB.1": "13",
  /** Physical pin 14: DB.2; bidirectional. */
  "DB.2": "14",
  /** Physical pin 15: DB.3; bidirectional. */
  "DB.3": "15",
  /** Physical pin 16: DB.4; bidirectional. */
  "DB.4": "16",
  /** Physical pin 17: DB.5; bidirectional. */
  "DB.5": "17",
  /** Physical pin 18: DB.6; bidirectional. */
  "DB.6": "18",
  /** Physical pin 19: DB.7; bidirectional. */
  "DB.7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: P2.0; bidirectional. */
  "P2.0": "21",
  /** Physical pin 22: P2.1; bidirectional. */
  "P2.1": "22",
  /** Physical pin 23: P2.2; bidirectional. */
  "P2.2": "23",
  /** Physical pin 24: P2.3; bidirectional. */
  "P2.3": "24",
  /** Physical pin 25: PROG; output. */
  "PROG": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 27: P1.0; bidirectional. */
  "P1.0": "27",
  /** Physical pin 28: P1.1; bidirectional. */
  "P1.1": "28",
  /** Physical pin 29: P1.2; bidirectional. */
  "P1.2": "29",
  /** Physical pin 30: P1.3; bidirectional. */
  "P1.3": "30",
  /** Physical pin 31: P1.4; bidirectional. */
  "P1.4": "31",
  /** Physical pin 32: P1.5; bidirectional. */
  "P1.5": "32",
  /** Physical pin 33: P1.6; bidirectional. */
  "P1.6": "33",
  /** Physical pin 34: P1.7; bidirectional. */
  "P1.7": "34",
  /** Physical pin 35: P2.4; bidirectional. */
  "P2.4": "35",
  /** Physical pin 36: P2.5; bidirectional. */
  "P2.5": "36",
  /** Physical pin 37: P2.6; bidirectional. */
  "P2.6": "37",
  /** Physical pin 38: P2.7; bidirectional. */
  "P2.7": "38",
  /** Physical pin 39: T1; input. */
  "T1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "MCU_Intel:8039";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, No (EP)ROM, 256B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8040`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8040 extends Component.withPins({
  /** Physical pin 1: T0; input. */
  "T0": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; output. */
  "X2": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{SS}; input. */
  "~{SS}": "5",
  /** Physical pin 6: ~{INT}; input. */
  "~{INT}": "6",
  /** Physical pin 7: EA; input. */
  "EA": "7",
  /** Physical pin 8: ~{RD}; output. */
  "~{RD}": "8",
  /** Physical pin 9: ~{PSEN}; output. */
  "~{PSEN}": "9",
  /** Physical pin 10: ~{WR}; output. */
  "~{WR}": "10",
  /** Physical pin 11: ALE; output. */
  "ALE": "11",
  /** Physical pin 12: DB.0; bidirectional. */
  "DB.0": "12",
  /** Physical pin 13: DB.1; bidirectional. */
  "DB.1": "13",
  /** Physical pin 14: DB.2; bidirectional. */
  "DB.2": "14",
  /** Physical pin 15: DB.3; bidirectional. */
  "DB.3": "15",
  /** Physical pin 16: DB.4; bidirectional. */
  "DB.4": "16",
  /** Physical pin 17: DB.5; bidirectional. */
  "DB.5": "17",
  /** Physical pin 18: DB.6; bidirectional. */
  "DB.6": "18",
  /** Physical pin 19: DB.7; bidirectional. */
  "DB.7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: P2.0; bidirectional. */
  "P2.0": "21",
  /** Physical pin 22: P2.1; bidirectional. */
  "P2.1": "22",
  /** Physical pin 23: P2.2; bidirectional. */
  "P2.2": "23",
  /** Physical pin 24: P2.3; bidirectional. */
  "P2.3": "24",
  /** Physical pin 25: PROG; output. */
  "PROG": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 27: P1.0; bidirectional. */
  "P1.0": "27",
  /** Physical pin 28: P1.1; bidirectional. */
  "P1.1": "28",
  /** Physical pin 29: P1.2; bidirectional. */
  "P1.2": "29",
  /** Physical pin 30: P1.3; bidirectional. */
  "P1.3": "30",
  /** Physical pin 31: P1.4; bidirectional. */
  "P1.4": "31",
  /** Physical pin 32: P1.5; bidirectional. */
  "P1.5": "32",
  /** Physical pin 33: P1.6; bidirectional. */
  "P1.6": "33",
  /** Physical pin 34: P1.7; bidirectional. */
  "P1.7": "34",
  /** Physical pin 35: P2.4; bidirectional. */
  "P2.4": "35",
  /** Physical pin 36: P2.5; bidirectional. */
  "P2.5": "36",
  /** Physical pin 37: P2.6; bidirectional. */
  "P2.6": "37",
  /** Physical pin 38: P2.7; bidirectional. */
  "P2.7": "38",
  /** Physical pin 39: T1; input. */
  "T1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "MCU_Intel:8040";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, 1KB Mask ROM, 64B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8048`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8048 extends Component.withPins({
  /** Physical pin 1: T0; input. */
  "T0": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; output. */
  "X2": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{SS}; input. */
  "~{SS}": "5",
  /** Physical pin 6: ~{INT}; input. */
  "~{INT}": "6",
  /** Physical pin 7: EA; input. */
  "EA": "7",
  /** Physical pin 8: ~{RD}; output. */
  "~{RD}": "8",
  /** Physical pin 9: ~{PSEN}; output. */
  "~{PSEN}": "9",
  /** Physical pin 10: ~{WR}; output. */
  "~{WR}": "10",
  /** Physical pin 11: ALE; output. */
  "ALE": "11",
  /** Physical pin 12: DB.0; bidirectional. */
  "DB.0": "12",
  /** Physical pin 13: DB.1; bidirectional. */
  "DB.1": "13",
  /** Physical pin 14: DB.2; bidirectional. */
  "DB.2": "14",
  /** Physical pin 15: DB.3; bidirectional. */
  "DB.3": "15",
  /** Physical pin 16: DB.4; bidirectional. */
  "DB.4": "16",
  /** Physical pin 17: DB.5; bidirectional. */
  "DB.5": "17",
  /** Physical pin 18: DB.6; bidirectional. */
  "DB.6": "18",
  /** Physical pin 19: DB.7; bidirectional. */
  "DB.7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: P2.0; bidirectional. */
  "P2.0": "21",
  /** Physical pin 22: P2.1; bidirectional. */
  "P2.1": "22",
  /** Physical pin 23: P2.2; bidirectional. */
  "P2.2": "23",
  /** Physical pin 24: P2.3; bidirectional. */
  "P2.3": "24",
  /** Physical pin 25: PROG; output. */
  "PROG": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 27: P1.0; bidirectional. */
  "P1.0": "27",
  /** Physical pin 28: P1.1; bidirectional. */
  "P1.1": "28",
  /** Physical pin 29: P1.2; bidirectional. */
  "P1.2": "29",
  /** Physical pin 30: P1.3; bidirectional. */
  "P1.3": "30",
  /** Physical pin 31: P1.4; bidirectional. */
  "P1.4": "31",
  /** Physical pin 32: P1.5; bidirectional. */
  "P1.5": "32",
  /** Physical pin 33: P1.6; bidirectional. */
  "P1.6": "33",
  /** Physical pin 34: P1.7; bidirectional. */
  "P1.7": "34",
  /** Physical pin 35: P2.4; bidirectional. */
  "P2.4": "35",
  /** Physical pin 36: P2.5; bidirectional. */
  "P2.5": "36",
  /** Physical pin 37: P2.6; bidirectional. */
  "P2.6": "37",
  /** Physical pin 38: P2.7; bidirectional. */
  "P2.7": "38",
  /** Physical pin 39: T1; input. */
  "T1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "MCU_Intel:8048";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, 2KB Mask ROM, 128B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8049`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8049 extends Component.withPins({
  /** Physical pin 1: T0; input. */
  "T0": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; output. */
  "X2": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{SS}; input. */
  "~{SS}": "5",
  /** Physical pin 6: ~{INT}; input. */
  "~{INT}": "6",
  /** Physical pin 7: EA; input. */
  "EA": "7",
  /** Physical pin 8: ~{RD}; output. */
  "~{RD}": "8",
  /** Physical pin 9: ~{PSEN}; output. */
  "~{PSEN}": "9",
  /** Physical pin 10: ~{WR}; output. */
  "~{WR}": "10",
  /** Physical pin 11: ALE; output. */
  "ALE": "11",
  /** Physical pin 12: DB.0; bidirectional. */
  "DB.0": "12",
  /** Physical pin 13: DB.1; bidirectional. */
  "DB.1": "13",
  /** Physical pin 14: DB.2; bidirectional. */
  "DB.2": "14",
  /** Physical pin 15: DB.3; bidirectional. */
  "DB.3": "15",
  /** Physical pin 16: DB.4; bidirectional. */
  "DB.4": "16",
  /** Physical pin 17: DB.5; bidirectional. */
  "DB.5": "17",
  /** Physical pin 18: DB.6; bidirectional. */
  "DB.6": "18",
  /** Physical pin 19: DB.7; bidirectional. */
  "DB.7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: P2.0; bidirectional. */
  "P2.0": "21",
  /** Physical pin 22: P2.1; bidirectional. */
  "P2.1": "22",
  /** Physical pin 23: P2.2; bidirectional. */
  "P2.2": "23",
  /** Physical pin 24: P2.3; bidirectional. */
  "P2.3": "24",
  /** Physical pin 25: PROG; output. */
  "PROG": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 27: P1.0; bidirectional. */
  "P1.0": "27",
  /** Physical pin 28: P1.1; bidirectional. */
  "P1.1": "28",
  /** Physical pin 29: P1.2; bidirectional. */
  "P1.2": "29",
  /** Physical pin 30: P1.3; bidirectional. */
  "P1.3": "30",
  /** Physical pin 31: P1.4; bidirectional. */
  "P1.4": "31",
  /** Physical pin 32: P1.5; bidirectional. */
  "P1.5": "32",
  /** Physical pin 33: P1.6; bidirectional. */
  "P1.6": "33",
  /** Physical pin 34: P1.7; bidirectional. */
  "P1.7": "34",
  /** Physical pin 35: P2.4; bidirectional. */
  "P2.4": "35",
  /** Physical pin 36: P2.5; bidirectional. */
  "P2.5": "36",
  /** Physical pin 37: P2.6; bidirectional. */
  "P2.6": "37",
  /** Physical pin 38: P2.7; bidirectional. */
  "P2.7": "38",
  /** Physical pin 39: T1; input. */
  "T1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "MCU_Intel:8049";
  override referencePrefix = "U";
}

/**
 * MCS-48 8-bit Microcontroller, 4KB Mask ROM, 256B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8050`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8050 extends Component.withPins({
  /** Physical pin 1: T0; input. */
  "T0": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; output. */
  "X2": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{SS}; input. */
  "~{SS}": "5",
  /** Physical pin 6: ~{INT}; input. */
  "~{INT}": "6",
  /** Physical pin 7: EA; input. */
  "EA": "7",
  /** Physical pin 8: ~{RD}; output. */
  "~{RD}": "8",
  /** Physical pin 9: ~{PSEN}; output. */
  "~{PSEN}": "9",
  /** Physical pin 10: ~{WR}; output. */
  "~{WR}": "10",
  /** Physical pin 11: ALE; output. */
  "ALE": "11",
  /** Physical pin 12: DB.0; bidirectional. */
  "DB.0": "12",
  /** Physical pin 13: DB.1; bidirectional. */
  "DB.1": "13",
  /** Physical pin 14: DB.2; bidirectional. */
  "DB.2": "14",
  /** Physical pin 15: DB.3; bidirectional. */
  "DB.3": "15",
  /** Physical pin 16: DB.4; bidirectional. */
  "DB.4": "16",
  /** Physical pin 17: DB.5; bidirectional. */
  "DB.5": "17",
  /** Physical pin 18: DB.6; bidirectional. */
  "DB.6": "18",
  /** Physical pin 19: DB.7; bidirectional. */
  "DB.7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: P2.0; bidirectional. */
  "P2.0": "21",
  /** Physical pin 22: P2.1; bidirectional. */
  "P2.1": "22",
  /** Physical pin 23: P2.2; bidirectional. */
  "P2.2": "23",
  /** Physical pin 24: P2.3; bidirectional. */
  "P2.3": "24",
  /** Physical pin 25: PROG; output. */
  "PROG": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD": "26",
  /** Physical pin 27: P1.0; bidirectional. */
  "P1.0": "27",
  /** Physical pin 28: P1.1; bidirectional. */
  "P1.1": "28",
  /** Physical pin 29: P1.2; bidirectional. */
  "P1.2": "29",
  /** Physical pin 30: P1.3; bidirectional. */
  "P1.3": "30",
  /** Physical pin 31: P1.4; bidirectional. */
  "P1.4": "31",
  /** Physical pin 32: P1.5; bidirectional. */
  "P1.5": "32",
  /** Physical pin 33: P1.6; bidirectional. */
  "P1.6": "33",
  /** Physical pin 34: P1.7; bidirectional. */
  "P1.7": "34",
  /** Physical pin 35: P2.4; bidirectional. */
  "P2.4": "35",
  /** Physical pin 36: P2.5; bidirectional. */
  "P2.5": "36",
  /** Physical pin 37: P2.6; bidirectional. */
  "P2.6": "37",
  /** Physical pin 38: P2.7; bidirectional. */
  "P2.7": "38",
  /** Physical pin 39: T1; input. */
  "T1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8080 extends Component.withPins({
  /** Physical pin 1: A10; output. */
  "A10": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: D4; bidirectional. */
  "D4": "3",
  /** Physical pin 4: D5; bidirectional. */
  "D5": "4",
  /** Physical pin 5: D6; bidirectional. */
  "D6": "5",
  /** Physical pin 6: D7; bidirectional. */
  "D7": "6",
  /** Physical pin 7: D3; bidirectional. */
  "D3": "7",
  /** Physical pin 8: D2; bidirectional. */
  "D2": "8",
  /** Physical pin 9: D1; bidirectional. */
  "D1": "9",
  /** Physical pin 10: D0; bidirectional. */
  "D0": "10",
  /** Physical pin 11: -5V; power_in. */
  "-5V": "11",
  /** Physical pin 12: RESET; input. */
  "RESET": "12",
  /** Physical pin 13: HOLD; input. */
  "HOLD": "13",
  /** Physical pin 14: INT; input. */
  "INT": "14",
  /** Physical pin 15: ϕ2; input. */
  "ϕ2": "15",
  /** Physical pin 16: INTE; output. */
  "INTE": "16",
  /** Physical pin 17: DBIN; output. */
  "DBIN": "17",
  /** Physical pin 18: ~{WR}; output. */
  "~{WR}": "18",
  /** Physical pin 19: SYNC; output. */
  "SYNC": "19",
  /** Physical pin 20: +5V; power_in. */
  "+5V": "20",
  /** Physical pin 21: HLDA; output. */
  "HLDA": "21",
  /** Physical pin 22: ϕ1; input. */
  "ϕ1": "22",
  /** Physical pin 23: READY; input. */
  "READY": "23",
  /** Physical pin 24: WAIT; output. */
  "WAIT": "24",
  /** Physical pin 25: A0; output. */
  "A0": "25",
  /** Physical pin 26: A1; output. */
  "A1": "26",
  /** Physical pin 27: A2; output. */
  "A2": "27",
  /** Physical pin 28: +12V; power_in. */
  "+12V": "28",
  /** Physical pin 29: A3; output. */
  "A3": "29",
  /** Physical pin 30: A4; output. */
  "A4": "30",
  /** Physical pin 31: A5; output. */
  "A5": "31",
  /** Physical pin 32: A6; output. */
  "A6": "32",
  /** Physical pin 33: A7; output. */
  "A7": "33",
  /** Physical pin 34: A8; output. */
  "A8": "34",
  /** Physical pin 35: A9; output. */
  "A9": "35",
  /** Physical pin 36: A15; output. */
  "A15": "36",
  /** Physical pin 37: A12; output. */
  "A12": "37",
  /** Physical pin 38: A13; output. */
  "A13": "38",
  /** Physical pin 39: A14; output. */
  "A14": "39",
  /** Physical pin 40: A11; output. */
  "A11": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8080A extends Component.withPins({
  /** Physical pin 1: A10; output. */
  "A10": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: D4; bidirectional. */
  "D4": "3",
  /** Physical pin 4: D5; bidirectional. */
  "D5": "4",
  /** Physical pin 5: D6; bidirectional. */
  "D6": "5",
  /** Physical pin 6: D7; bidirectional. */
  "D7": "6",
  /** Physical pin 7: D3; bidirectional. */
  "D3": "7",
  /** Physical pin 8: D2; bidirectional. */
  "D2": "8",
  /** Physical pin 9: D1; bidirectional. */
  "D1": "9",
  /** Physical pin 10: D0; bidirectional. */
  "D0": "10",
  /** Physical pin 11: -5V; power_in. */
  "-5V": "11",
  /** Physical pin 12: RESET; input. */
  "RESET": "12",
  /** Physical pin 13: HOLD; input. */
  "HOLD": "13",
  /** Physical pin 14: INT; input. */
  "INT": "14",
  /** Physical pin 15: ϕ2; input. */
  "ϕ2": "15",
  /** Physical pin 16: INTE; output. */
  "INTE": "16",
  /** Physical pin 17: DBIN; output. */
  "DBIN": "17",
  /** Physical pin 18: ~{WR}; output. */
  "~{WR}": "18",
  /** Physical pin 19: SYNC; output. */
  "SYNC": "19",
  /** Physical pin 20: +5V; power_in. */
  "+5V": "20",
  /** Physical pin 21: HLDA; output. */
  "HLDA": "21",
  /** Physical pin 22: ϕ1; input. */
  "ϕ1": "22",
  /** Physical pin 23: READY; input. */
  "READY": "23",
  /** Physical pin 24: WAIT; output. */
  "WAIT": "24",
  /** Physical pin 25: A0; output. */
  "A0": "25",
  /** Physical pin 26: A1; output. */
  "A1": "26",
  /** Physical pin 27: A2; output. */
  "A2": "27",
  /** Physical pin 28: +12V; power_in. */
  "+12V": "28",
  /** Physical pin 29: A3; output. */
  "A3": "29",
  /** Physical pin 30: A4; output. */
  "A4": "30",
  /** Physical pin 31: A5; output. */
  "A5": "31",
  /** Physical pin 32: A6; output. */
  "A6": "32",
  /** Physical pin 33: A7; output. */
  "A7": "33",
  /** Physical pin 34: A8; output. */
  "A8": "34",
  /** Physical pin 35: A9; output. */
  "A9": "35",
  /** Physical pin 36: A15; output. */
  "A15": "36",
  /** Physical pin 37: A12; output. */
  "A12": "37",
  /** Physical pin 38: A13; output. */
  "A13": "38",
  /** Physical pin 39: A14; output. */
  "A14": "39",
  /** Physical pin 40: A11; output. */
  "A11": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8086_Max_Mode extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: AD14; bidirectional. */
  "AD14": "2",
  /** Physical pin 3: AD13; bidirectional. */
  "AD13": "3",
  /** Physical pin 4: AD12; bidirectional. */
  "AD12": "4",
  /** Physical pin 5: AD11; bidirectional. */
  "AD11": "5",
  /** Physical pin 6: AD10; bidirectional. */
  "AD10": "6",
  /** Physical pin 7: AD9; bidirectional. */
  "AD9": "7",
  /** Physical pin 8: AD8; bidirectional. */
  "AD8": "8",
  /** Physical pin 9: AD7; bidirectional. */
  "AD7": "9",
  /** Physical pin 10: AD6; bidirectional. */
  "AD6": "10",
  /** Physical pin 11: AD5; bidirectional. */
  "AD5": "11",
  /** Physical pin 12: AD4; bidirectional. */
  "AD4": "12",
  /** Physical pin 13: AD3; bidirectional. */
  "AD3": "13",
  /** Physical pin 14: AD2; bidirectional. */
  "AD2": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD0; bidirectional. */
  "AD0": "16",
  /** Physical pin 17: NMI; input. */
  "NMI": "17",
  /** Physical pin 18: INTR; input. */
  "INTR": "18",
  /** Physical pin 19: CLK; input. */
  "CLK": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: RESET; input. */
  "RESET": "21",
  /** Physical pin 22: READY; input. */
  "READY": "22",
  /** Physical pin 23: ~{TEST}; input. */
  "~{TEST}": "23",
  /** Physical pin 24: QS1; output. */
  "QS1": "24",
  /** Physical pin 25: QS0; output. */
  "QS0": "25",
  /** Physical pin 26: ~{S0}; output. */
  "~{S0}": "26",
  /** Physical pin 27: ~{S1}; output. */
  "~{S1}": "27",
  /** Physical pin 28: ~{S2}; output. */
  "~{S2}": "28",
  /** Physical pin 29: ~{LOCK}; output. */
  "~{LOCK}": "29",
  /** Physical pin 30: ~{RQ}/~{GT1}; bidirectional. */
  "~{RQ}/~{GT1}": "30",
  /** Physical pin 31: ~{RQ}/~{GT0}; bidirectional. */
  "~{RQ}/~{GT0}": "31",
  /** Physical pin 32: ~{RD}; output. */
  "~{RD}": "32",
  /** Physical pin 33: MN/~{MX}; input. */
  "MN/~{MX}": "33",
  /** Physical pin 34: ~{BHE}/S7; output. */
  "~{BHE}/S7": "34",
  /** Physical pin 35: A19/S6; output. */
  "A19/S6": "35",
  /** Physical pin 36: A18/S5; output. */
  "A18/S5": "36",
  /** Physical pin 37: A17/S4; output. */
  "A17/S4": "37",
  /** Physical pin 38: A16/S3; output. */
  "A16/S3": "38",
  /** Physical pin 39: AD15; bidirectional. */
  "AD15": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8086_Min_Mode extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: AD14; bidirectional. */
  "AD14": "2",
  /** Physical pin 3: AD13; bidirectional. */
  "AD13": "3",
  /** Physical pin 4: AD12; bidirectional. */
  "AD12": "4",
  /** Physical pin 5: AD11; bidirectional. */
  "AD11": "5",
  /** Physical pin 6: AD10; bidirectional. */
  "AD10": "6",
  /** Physical pin 7: AD9; bidirectional. */
  "AD9": "7",
  /** Physical pin 8: AD8; bidirectional. */
  "AD8": "8",
  /** Physical pin 9: AD7; bidirectional. */
  "AD7": "9",
  /** Physical pin 10: AD6; bidirectional. */
  "AD6": "10",
  /** Physical pin 11: AD5; bidirectional. */
  "AD5": "11",
  /** Physical pin 12: AD4; bidirectional. */
  "AD4": "12",
  /** Physical pin 13: AD3; bidirectional. */
  "AD3": "13",
  /** Physical pin 14: AD2; bidirectional. */
  "AD2": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD0; bidirectional. */
  "AD0": "16",
  /** Physical pin 17: NMI; input. */
  "NMI": "17",
  /** Physical pin 18: INTR; input. */
  "INTR": "18",
  /** Physical pin 19: CLK; input. */
  "CLK": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: RESET; input. */
  "RESET": "21",
  /** Physical pin 22: READY; input. */
  "READY": "22",
  /** Physical pin 23: ~{TEST}; input. */
  "~{TEST}": "23",
  /** Physical pin 24: ~{INTA}; output. */
  "~{INTA}": "24",
  /** Physical pin 25: ALE; output. */
  "ALE": "25",
  /** Physical pin 26: ~{DEN}; output. */
  "~{DEN}": "26",
  /** Physical pin 27: DT/~{R}; output. */
  "DT/~{R}": "27",
  /** Physical pin 28: M/~{IO}; output. */
  "M/~{IO}": "28",
  /** Physical pin 29: ~{WR}; output. */
  "~{WR}": "29",
  /** Physical pin 30: HLDA; output. */
  "HLDA": "30",
  /** Physical pin 31: HOLD; input. */
  "HOLD": "31",
  /** Physical pin 32: ~{RD}; output. */
  "~{RD}": "32",
  /** Physical pin 33: MN/~{MX}; input. */
  "MN/~{MX}": "33",
  /** Physical pin 34: ~{BHE}/S7; output. */
  "~{BHE}/S7": "34",
  /** Physical pin 35: A19/S6; output. */
  "A19/S6": "35",
  /** Physical pin 36: A18/S5; output. */
  "A18/S5": "36",
  /** Physical pin 37: A17/S4; output. */
  "A17/S4": "37",
  /** Physical pin 38: A16/S3; output. */
  "A16/S3": "38",
  /** Physical pin 39: AD15; bidirectional. */
  "AD15": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8087 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: AD14; bidirectional. */
  "AD14": "2",
  /** Physical pin 3: AD13; bidirectional. */
  "AD13": "3",
  /** Physical pin 4: AD12; bidirectional. */
  "AD12": "4",
  /** Physical pin 5: AD11; bidirectional. */
  "AD11": "5",
  /** Physical pin 6: AD10; bidirectional. */
  "AD10": "6",
  /** Physical pin 7: AD9; bidirectional. */
  "AD9": "7",
  /** Physical pin 8: AD8; bidirectional. */
  "AD8": "8",
  /** Physical pin 9: AD7; bidirectional. */
  "AD7": "9",
  /** Physical pin 10: AD6; bidirectional. */
  "AD6": "10",
  /** Physical pin 11: AD5; bidirectional. */
  "AD5": "11",
  /** Physical pin 12: AD4; bidirectional. */
  "AD4": "12",
  /** Physical pin 13: AD3; bidirectional. */
  "AD3": "13",
  /** Physical pin 14: AD2; bidirectional. */
  "AD2": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD0; bidirectional. */
  "AD0": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: CLK; input. */
  "CLK": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: RESET; input. */
  "RESET": "21",
  /** Physical pin 22: READY; input. */
  "READY": "22",
  /** Physical pin 23: BUSY; output. */
  "BUSY": "23",
  /** Physical pin 24: QS1; input. */
  "QS1": "24",
  /** Physical pin 25: QS0; input. */
  "QS0": "25",
  /** Physical pin 26: ~{S0}; bidirectional. */
  "~{S0}": "26",
  /** Physical pin 27: ~{S1}; bidirectional. */
  "~{S1}": "27",
  /** Physical pin 28: ~{S2}; bidirectional. */
  "~{S2}": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: ~{RQ}/~{GT0}; bidirectional. */
  "~{RQ}/~{GT0}": "31",
  /** Physical pin 32: INT; output. */
  "INT": "32",
  /** Physical pin 33: ~{RQ}/~{GT1}; bidirectional. */
  "~{RQ}/~{GT1}": "33",
  /** Physical pin 34: ~{BHE}/S7; bidirectional. */
  "~{BHE}/S7": "34",
  /** Physical pin 35: A19/S6; bidirectional. */
  "A19/S6": "35",
  /** Physical pin 36: A18/S5; bidirectional. */
  "A18/S5": "36",
  /** Physical pin 37: A17/S4; bidirectional. */
  "A17/S4": "37",
  /** Physical pin 38: A16/S3; bidirectional. */
  "A16/S3": "38",
  /** Physical pin 39: AD15; bidirectional. */
  "AD15": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8088 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: A14; output. */
  "A14": "2",
  /** Physical pin 3: A13; output. */
  "A13": "3",
  /** Physical pin 4: A12; output. */
  "A12": "4",
  /** Physical pin 5: A11; output. */
  "A11": "5",
  /** Physical pin 6: A10; output. */
  "A10": "6",
  /** Physical pin 7: A9; output. */
  "A9": "7",
  /** Physical pin 8: A8; output. */
  "A8": "8",
  /** Physical pin 9: AD7; bidirectional. */
  "AD7": "9",
  /** Physical pin 10: AD6; bidirectional. */
  "AD6": "10",
  /** Physical pin 11: AD5; bidirectional. */
  "AD5": "11",
  /** Physical pin 12: AD4; bidirectional. */
  "AD4": "12",
  /** Physical pin 13: AD3; bidirectional. */
  "AD3": "13",
  /** Physical pin 14: AD2; bidirectional. */
  "AD2": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD0; bidirectional. */
  "AD0": "16",
  /** Physical pin 17: NMI; input. */
  "NMI": "17",
  /** Physical pin 18: INTR; input. */
  "INTR": "18",
  /** Physical pin 19: CLK; input. */
  "CLK": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: RESET; input. */
  "RESET": "21",
  /** Physical pin 22: READY; input. */
  "READY": "22",
  /** Physical pin 23: ~{TEST}; input. */
  "~{TEST}": "23",
  /** Physical pin 24: ~{INTA}; output. */
  "~{INTA}": "24",
  /** Physical pin 25: ALE; output. */
  "ALE": "25",
  /** Physical pin 26: DEN; output. */
  "DEN": "26",
  /** Physical pin 27: DT/~{R}; output. */
  "DT/~{R}": "27",
  /** Physical pin 28: IO/~{M}; output. */
  "IO/~{M}": "28",
  /** Physical pin 29: ~{WR}; output. */
  "~{WR}": "29",
  /** Physical pin 30: HLDA; output. */
  "HLDA": "30",
  /** Physical pin 31: HOLD; input. */
  "HOLD": "31",
  /** Physical pin 32: ~{RD}; output. */
  "~{RD}": "32",
  /** Physical pin 33: MN/~{MX}; input. */
  "MN/~{MX}": "33",
  /** Physical pin 34: ~{SSO}; output. */
  "~{SSO}": "34",
  /** Physical pin 35: A19/S6; output. */
  "A19/S6": "35",
  /** Physical pin 36: A18/S5; output. */
  "A18/S5": "36",
  /** Physical pin 37: A17/S4; output. */
  "A17/S4": "37",
  /** Physical pin 38: A16/S3; output. */
  "A16/S3": "38",
  /** Physical pin 39: A15; output. */
  "A15": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8088_Max_Mode extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: A14; output. */
  "A14": "2",
  /** Physical pin 3: A13; output. */
  "A13": "3",
  /** Physical pin 4: A12; output. */
  "A12": "4",
  /** Physical pin 5: A11; output. */
  "A11": "5",
  /** Physical pin 6: A10; output. */
  "A10": "6",
  /** Physical pin 7: A9; output. */
  "A9": "7",
  /** Physical pin 8: A8; output. */
  "A8": "8",
  /** Physical pin 9: AD7; bidirectional. */
  "AD7": "9",
  /** Physical pin 10: AD6; bidirectional. */
  "AD6": "10",
  /** Physical pin 11: AD5; bidirectional. */
  "AD5": "11",
  /** Physical pin 12: AD4; bidirectional. */
  "AD4": "12",
  /** Physical pin 13: AD3; bidirectional. */
  "AD3": "13",
  /** Physical pin 14: AD2; bidirectional. */
  "AD2": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD0; bidirectional. */
  "AD0": "16",
  /** Physical pin 17: NMI; input. */
  "NMI": "17",
  /** Physical pin 18: INTR; input. */
  "INTR": "18",
  /** Physical pin 19: CLK; input. */
  "CLK": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: RESET; input. */
  "RESET": "21",
  /** Physical pin 22: READY; input. */
  "READY": "22",
  /** Physical pin 23: ~{TEST}; input. */
  "~{TEST}": "23",
  /** Physical pin 24: QS1; output. */
  "QS1": "24",
  /** Physical pin 25: QS0; output. */
  "QS0": "25",
  /** Physical pin 26: ~{S0}; output. */
  "~{S0}": "26",
  /** Physical pin 27: ~{S1}; output. */
  "~{S1}": "27",
  /** Physical pin 28: ~{S2}; output. */
  "~{S2}": "28",
  /** Physical pin 29: ~{LOCK}; output. */
  "~{LOCK}": "29",
  /** Physical pin 30: ~{RQ}/~{GT1}; bidirectional. */
  "~{RQ}/~{GT1}": "30",
  /** Physical pin 31: ~{RQ}/~{GT0}; bidirectional. */
  "~{RQ}/~{GT0}": "31",
  /** Physical pin 32: ~{RD}; output. */
  "~{RD}": "32",
  /** Physical pin 33: MN/~{MX}; input. */
  "MN/~{MX}": "33",
  /** Physical pin 34: HIGH; output. */
  "HIGH": "34",
  /** Physical pin 35: A19/S6; output. */
  "A19/S6": "35",
  /** Physical pin 36: A18/S5; output. */
  "A18/S5": "36",
  /** Physical pin 37: A17/S4; output. */
  "A17/S4": "37",
  /** Physical pin 38: A16/S3; output. */
  "A16/S3": "38",
  /** Physical pin 39: A15; output. */
  "A15": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8088_Min_Mode extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: A14; output. */
  "A14": "2",
  /** Physical pin 3: A13; output. */
  "A13": "3",
  /** Physical pin 4: A12; output. */
  "A12": "4",
  /** Physical pin 5: A11; output. */
  "A11": "5",
  /** Physical pin 6: A10; output. */
  "A10": "6",
  /** Physical pin 7: A9; output. */
  "A9": "7",
  /** Physical pin 8: A8; output. */
  "A8": "8",
  /** Physical pin 9: AD7; bidirectional. */
  "AD7": "9",
  /** Physical pin 10: AD6; bidirectional. */
  "AD6": "10",
  /** Physical pin 11: AD5; bidirectional. */
  "AD5": "11",
  /** Physical pin 12: AD4; bidirectional. */
  "AD4": "12",
  /** Physical pin 13: AD3; bidirectional. */
  "AD3": "13",
  /** Physical pin 14: AD2; bidirectional. */
  "AD2": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD0; bidirectional. */
  "AD0": "16",
  /** Physical pin 17: NMI; input. */
  "NMI": "17",
  /** Physical pin 18: INTR; input. */
  "INTR": "18",
  /** Physical pin 19: CLK; input. */
  "CLK": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: RESET; input. */
  "RESET": "21",
  /** Physical pin 22: READY; input. */
  "READY": "22",
  /** Physical pin 23: ~{TEST}; input. */
  "~{TEST}": "23",
  /** Physical pin 24: ~{INTA}; output. */
  "~{INTA}": "24",
  /** Physical pin 25: ALE; output. */
  "ALE": "25",
  /** Physical pin 26: DEN; output. */
  "DEN": "26",
  /** Physical pin 27: DT/~{R}; output. */
  "DT/~{R}": "27",
  /** Physical pin 28: IO/~{M}; output. */
  "IO/~{M}": "28",
  /** Physical pin 29: ~{WR}; output. */
  "~{WR}": "29",
  /** Physical pin 30: HLDA; output. */
  "HLDA": "30",
  /** Physical pin 31: HOLD; input. */
  "HOLD": "31",
  /** Physical pin 32: ~{RD}; output. */
  "~{RD}": "32",
  /** Physical pin 33: MN/~{MX}; input. */
  "MN/~{MX}": "33",
  /** Physical pin 34: ~{SSO}; output. */
  "~{SSO}": "34",
  /** Physical pin 35: A19/S6; output. */
  "A19/S6": "35",
  /** Physical pin 36: A18/S5; output. */
  "A18/S5": "36",
  /** Physical pin 37: A17/S4; output. */
  "A17/S4": "37",
  /** Physical pin 38: A16/S3; output. */
  "A16/S3": "38",
  /** Physical pin 39: A15; output. */
  "A15": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M80C186XL extends Component.withPins({
  /** Physical pin 1: AD15; bidirectional. */
  "AD15": "1",
  /** Physical pin 2: AD7; bidirectional. */
  "AD7": "2",
  /** Physical pin 3: AD14; bidirectional. */
  "AD14": "3",
  /** Physical pin 4: AD6; bidirectional. */
  "AD6": "4",
  /** Physical pin 5: AD13; bidirectional. */
  "AD13": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: AD12; bidirectional. */
  "AD12": "7",
  /** Physical pin 8: AD4; bidirectional. */
  "AD4": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: AD11; bidirectional. */
  "AD11": "10",
  /** Physical pin 11: AD3; bidirectional. */
  "AD3": "11",
  /** Physical pin 12: AD10; bidirectional. */
  "AD10": "12",
  /** Physical pin 13: AD2; bidirectional. */
  "AD2": "13",
  /** Physical pin 14: AD9; bidirectional. */
  "AD9": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD8; bidirectional. */
  "AD8": "16",
  /** Physical pin 17: AD0; bidirectional. */
  "AD0": "17",
  /** Physical pin 18: DRQ0; input. */
  "DRQ0": "18",
  /** Physical pin 19: DRQ1; input. */
  "DRQ1": "19",
  /** Physical pin 20: TMR_IN_0; input. */
  "TMR_IN_0": "20",
  /** Physical pin 21: TMR_IN_1; input. */
  "TMR_IN_1": "21",
  /** Physical pin 22: TMR_OUT_0; output. */
  "TMR_OUT_0": "22",
  /** Physical pin 23: TMR_OUT_1; output. */
  "TMR_OUT_1": "23",
  /** Physical pin 24: ~{RES}; input. */
  "~{RES}": "24",
  /** Physical pin 25: ~{PCS0}; output. */
  "~{PCS0}": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: ~{PCS1}; output. */
  "~{PCS1}": "27",
  /** Physical pin 28: ~{PCS2}; output. */
  "~{PCS2}": "28",
  /** Physical pin 29: ~{PCS3}; output. */
  "~{PCS3}": "29",
  /** Physical pin 30: ~{PCS4}; output. */
  "~{PCS4}": "30",
  /** Physical pin 31: ~{PCS5}/A1; output. */
  "~{PCS5}/A1": "31",
  /** Physical pin 32: ~{PCS6}/A2; output. */
  "~{PCS6}/A2": "32",
  /** Physical pin 33: ~{LCS}; bidirectional. */
  "~{LCS}": "33",
  /** Physical pin 34: ~{UCS}; bidirectional. */
  "~{UCS}": "34",
  /** Physical pin 35: ~{MCS3}/~{NPS}; output. */
  "~{MCS3}/~{NPS}": "35",
  /** Physical pin 36: ~{MCS2}; output. */
  "~{MCS2}": "36",
  /** Physical pin 37: ~{MCS1}/~{ERROR}; bidirectional. */
  "~{MCS1}/~{ERROR}": "37",
  /** Physical pin 38: ~{MCS0}/PEREQ; bidirectional. */
  "~{MCS0}/PEREQ": "38",
  /** Physical pin 39: ~{DEN}; output. */
  "~{DEN}": "39",
  /** Physical pin 40: DT/~{R}; output. */
  "DT/~{R}": "40",
  /** Physical pin 41: INT3/~{INTA1}/IRQ; bidirectional. */
  "INT3/~{INTA1}/IRQ": "41",
  /** Physical pin 42: INT2/~{INTA0}; bidirectional. */
  "INT2/~{INTA0}": "42",
  /** Physical pin 43: VCC; power_in. */
  "VCC_43": "43",
  /** Physical pin 44: INT1/~{SELECT}; input. */
  "INT1/~{SELECT}": "44",
  /** Physical pin 45: INT0; input. */
  "INT0": "45",
  /** Physical pin 46: NMI; input. */
  "NMI": "46",
  /** Physical pin 47: ~{TEST}/BUSY; bidirectional. */
  "~{TEST}/BUSY": "47",
  /** Physical pin 48: ~{LOCK}; output. */
  "~{LOCK}": "48",
  /** Physical pin 49: SRDY; input. */
  "SRDY": "49",
  /** Physical pin 50: HOLD; input. */
  "HOLD": "50",
  /** Physical pin 51: HLDA; output. */
  "HLDA": "51",
  /** Physical pin 52: ~{S0}; output. */
  "~{S0}": "52",
  /** Physical pin 53: ~{S1}; output. */
  "~{S1}": "53",
  /** Physical pin 54: ~{S2}; output. */
  "~{S2}": "54",
  /** Physical pin 55: ARDY; input. */
  "ARDY": "55",
  /** Physical pin 56: CLKOUT; output. */
  "CLKOUT": "56",
  /** Physical pin 57: RESET; output. */
  "RESET": "57",
  /** Physical pin 58: X2; output. */
  "X2": "58",
  /** Physical pin 59: X1; input. */
  "X1": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: ALE/QS0; output. */
  "ALE/QS0": "61",
  /** Physical pin 62: ~{RD}/~{QSMD}; bidirectional. */
  "~{RD}/~{QSMD}": "62",
  /** Physical pin 63: ~{WR}/QS1; output. */
  "~{WR}/QS1": "63",
  /** Physical pin 64: ~{BHE}; output. */
  "~{BHE}": "64",
  /** Physical pin 65: A19/S6; output. */
  "A19/S6": "65",
  /** Physical pin 66: A18/S5; output. */
  "A18/S5": "66",
  /** Physical pin 67: A17/S4; output. */
  "A17/S4": "67",
  /** Physical pin 68: A16/S3; output. */
  "A16/S3": "68",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _80C186XL extends Component.withPins({
  /** Physical pin 1: AD15; bidirectional. */
  "AD15": "1",
  /** Physical pin 2: AD7; bidirectional. */
  "AD7": "2",
  /** Physical pin 3: AD14; bidirectional. */
  "AD14": "3",
  /** Physical pin 4: AD6; bidirectional. */
  "AD6": "4",
  /** Physical pin 5: AD13; bidirectional. */
  "AD13": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: AD12; bidirectional. */
  "AD12": "7",
  /** Physical pin 8: AD4; bidirectional. */
  "AD4": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: AD11; bidirectional. */
  "AD11": "10",
  /** Physical pin 11: AD3; bidirectional. */
  "AD3": "11",
  /** Physical pin 12: AD10; bidirectional. */
  "AD10": "12",
  /** Physical pin 13: AD2; bidirectional. */
  "AD2": "13",
  /** Physical pin 14: AD9; bidirectional. */
  "AD9": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD8; bidirectional. */
  "AD8": "16",
  /** Physical pin 17: AD0; bidirectional. */
  "AD0": "17",
  /** Physical pin 18: DRQ0; input. */
  "DRQ0": "18",
  /** Physical pin 19: DRQ1; input. */
  "DRQ1": "19",
  /** Physical pin 20: TMR_IN_0; input. */
  "TMR_IN_0": "20",
  /** Physical pin 21: TMR_IN_1; input. */
  "TMR_IN_1": "21",
  /** Physical pin 22: TMR_OUT_0; output. */
  "TMR_OUT_0": "22",
  /** Physical pin 23: TMR_OUT_1; output. */
  "TMR_OUT_1": "23",
  /** Physical pin 24: ~{RES}; input. */
  "~{RES}": "24",
  /** Physical pin 25: ~{PCS0}; output. */
  "~{PCS0}": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: ~{PCS1}; output. */
  "~{PCS1}": "27",
  /** Physical pin 28: ~{PCS2}; output. */
  "~{PCS2}": "28",
  /** Physical pin 29: ~{PCS3}; output. */
  "~{PCS3}": "29",
  /** Physical pin 30: ~{PCS4}; output. */
  "~{PCS4}": "30",
  /** Physical pin 31: ~{PCS5}/A1; output. */
  "~{PCS5}/A1": "31",
  /** Physical pin 32: ~{PCS6}/A2; output. */
  "~{PCS6}/A2": "32",
  /** Physical pin 33: ~{LCS}; bidirectional. */
  "~{LCS}": "33",
  /** Physical pin 34: ~{UCS}; bidirectional. */
  "~{UCS}": "34",
  /** Physical pin 35: ~{MCS3}/~{NPS}; output. */
  "~{MCS3}/~{NPS}": "35",
  /** Physical pin 36: ~{MCS2}; output. */
  "~{MCS2}": "36",
  /** Physical pin 37: ~{MCS1}/~{ERROR}; bidirectional. */
  "~{MCS1}/~{ERROR}": "37",
  /** Physical pin 38: ~{MCS0}/PEREQ; bidirectional. */
  "~{MCS0}/PEREQ": "38",
  /** Physical pin 39: ~{DEN}; output. */
  "~{DEN}": "39",
  /** Physical pin 40: DT/~{R}; output. */
  "DT/~{R}": "40",
  /** Physical pin 41: INT3/~{INTA1}/IRQ; bidirectional. */
  "INT3/~{INTA1}/IRQ": "41",
  /** Physical pin 42: INT2/~{INTA0}; bidirectional. */
  "INT2/~{INTA0}": "42",
  /** Physical pin 43: VCC; power_in. */
  "VCC_43": "43",
  /** Physical pin 44: INT1/~{SELECT}; input. */
  "INT1/~{SELECT}": "44",
  /** Physical pin 45: INT0; input. */
  "INT0": "45",
  /** Physical pin 46: NMI; input. */
  "NMI": "46",
  /** Physical pin 47: ~{TEST}/BUSY; bidirectional. */
  "~{TEST}/BUSY": "47",
  /** Physical pin 48: ~{LOCK}; output. */
  "~{LOCK}": "48",
  /** Physical pin 49: SRDY; input. */
  "SRDY": "49",
  /** Physical pin 50: HOLD; input. */
  "HOLD": "50",
  /** Physical pin 51: HLDA; output. */
  "HLDA": "51",
  /** Physical pin 52: ~{S0}; output. */
  "~{S0}": "52",
  /** Physical pin 53: ~{S1}; output. */
  "~{S1}": "53",
  /** Physical pin 54: ~{S2}; output. */
  "~{S2}": "54",
  /** Physical pin 55: ARDY; input. */
  "ARDY": "55",
  /** Physical pin 56: CLKOUT; output. */
  "CLKOUT": "56",
  /** Physical pin 57: RESET; output. */
  "RESET": "57",
  /** Physical pin 58: X2; output. */
  "X2": "58",
  /** Physical pin 59: X1; input. */
  "X1": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: ALE/QS0; output. */
  "ALE/QS0": "61",
  /** Physical pin 62: ~{RD}/~{QSMD}; bidirectional. */
  "~{RD}/~{QSMD}": "62",
  /** Physical pin 63: ~{WR}/QS1; output. */
  "~{WR}/QS1": "63",
  /** Physical pin 64: ~{BHE}; output. */
  "~{BHE}": "64",
  /** Physical pin 65: A19/S6; output. */
  "A19/S6": "65",
  /** Physical pin 66: A18/S5; output. */
  "A18/S5": "66",
  /** Physical pin 67: A17/S4; output. */
  "A17/S4": "67",
  /** Physical pin 68: A16/S3; output. */
  "A16/S3": "68",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _80C188 extends Component.withPins({
  /** Physical pin 1: A15; output. */
  "A15": "1",
  /** Physical pin 2: AD7; bidirectional. */
  "AD7": "2",
  /** Physical pin 3: A14; output. */
  "A14": "3",
  /** Physical pin 4: AD6; bidirectional. */
  "AD6": "4",
  /** Physical pin 5: A13; output. */
  "A13": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: A12; output. */
  "A12": "7",
  /** Physical pin 8: AD4; bidirectional. */
  "AD4": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: A11; output. */
  "A11": "10",
  /** Physical pin 11: AD3; bidirectional. */
  "AD3": "11",
  /** Physical pin 12: A10; output. */
  "A10": "12",
  /** Physical pin 13: AD2; bidirectional. */
  "AD2": "13",
  /** Physical pin 14: A9; output. */
  "A9": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: AD0; bidirectional. */
  "AD0": "17",
  /** Physical pin 18: DRQ0; input. */
  "DRQ0": "18",
  /** Physical pin 19: DRQ1; input. */
  "DRQ1": "19",
  /** Physical pin 20: TMR_IN_0; input. */
  "TMR_IN_0": "20",
  /** Physical pin 21: TMR_IN_1; input. */
  "TMR_IN_1": "21",
  /** Physical pin 22: TMR_OUT_0; output. */
  "TMR_OUT_0": "22",
  /** Physical pin 23: TMR_OUT_1; output. */
  "TMR_OUT_1": "23",
  /** Physical pin 24: ~{RES}; input. */
  "~{RES}": "24",
  /** Physical pin 25: ~{PCS0}; output. */
  "~{PCS0}": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: ~{PCS1}; output. */
  "~{PCS1}": "27",
  /** Physical pin 28: ~{PCS2}; output. */
  "~{PCS2}": "28",
  /** Physical pin 29: ~{PCS3}; output. */
  "~{PCS3}": "29",
  /** Physical pin 30: ~{PCS4}; output. */
  "~{PCS4}": "30",
  /** Physical pin 31: ~{PCS5}/A1; output. */
  "~{PCS5}/A1": "31",
  /** Physical pin 32: ~{PCS6}/A2; output. */
  "~{PCS6}/A2": "32",
  /** Physical pin 33: ~{LCS}; bidirectional. */
  "~{LCS}": "33",
  /** Physical pin 34: ~{UCS}; bidirectional. */
  "~{UCS}": "34",
  /** Physical pin 35: ~{MCS3}; output. */
  "~{MCS3}": "35",
  /** Physical pin 36: ~{MCS2}; output. */
  "~{MCS2}": "36",
  /** Physical pin 37: ~{MCS1}; output. */
  "~{MCS1}": "37",
  /** Physical pin 38: ~{MCS0}; output. */
  "~{MCS0}": "38",
  /** Physical pin 39: ~{DEN}; output. */
  "~{DEN}": "39",
  /** Physical pin 40: DT/~{R}; output. */
  "DT/~{R}": "40",
  /** Physical pin 41: INT3/~{INTA1}/IRQ; bidirectional. */
  "INT3/~{INTA1}/IRQ": "41",
  /** Physical pin 42: INT2/~{INTA0}; bidirectional. */
  "INT2/~{INTA0}": "42",
  /** Physical pin 43: VCC; power_in. */
  "VCC_43": "43",
  /** Physical pin 44: INT1/~{SELECT}; input. */
  "INT1/~{SELECT}": "44",
  /** Physical pin 45: INT0; input. */
  "INT0": "45",
  /** Physical pin 46: NMI; input. */
  "NMI": "46",
  /** Physical pin 47: ~{TEST}; bidirectional. */
  "~{TEST}": "47",
  /** Physical pin 48: ~{LOCK}; output. */
  "~{LOCK}": "48",
  /** Physical pin 49: SRDY; input. */
  "SRDY": "49",
  /** Physical pin 50: HOLD; input. */
  "HOLD": "50",
  /** Physical pin 51: HLDA; output. */
  "HLDA": "51",
  /** Physical pin 52: ~{S0}; output. */
  "~{S0}": "52",
  /** Physical pin 53: ~{S1}; output. */
  "~{S1}": "53",
  /** Physical pin 54: ~{S2}; output. */
  "~{S2}": "54",
  /** Physical pin 55: ARDY; input. */
  "ARDY": "55",
  /** Physical pin 56: CLKOUT; output. */
  "CLKOUT": "56",
  /** Physical pin 57: RESET; output. */
  "RESET": "57",
  /** Physical pin 58: X2; output. */
  "X2": "58",
  /** Physical pin 59: X1; input. */
  "X1": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: ALE/QS0; output. */
  "ALE/QS0": "61",
  /** Physical pin 62: ~{RD}/~{QSMD}; bidirectional. */
  "~{RD}/~{QSMD}": "62",
  /** Physical pin 63: ~{WR}/QS1; output. */
  "~{WR}/QS1": "63",
  /** Physical pin 64: ~{RFSH}; output. */
  "~{RFSH}": "64",
  /** Physical pin 65: A19/S6; output. */
  "A19/S6": "65",
  /** Physical pin 66: A18/S5; output. */
  "A18/S5": "66",
  /** Physical pin 67: A17/S4; output. */
  "A17/S4": "67",
  /** Physical pin 68: A16/S3; output. */
  "A16/S3": "68",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _80C188XL extends Component.withPins({
  /** Physical pin 1: A15; output. */
  "A15": "1",
  /** Physical pin 2: AD7; bidirectional. */
  "AD7": "2",
  /** Physical pin 3: A14; output. */
  "A14": "3",
  /** Physical pin 4: AD6; bidirectional. */
  "AD6": "4",
  /** Physical pin 5: A13; output. */
  "A13": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: A12; output. */
  "A12": "7",
  /** Physical pin 8: AD4; bidirectional. */
  "AD4": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: A11; output. */
  "A11": "10",
  /** Physical pin 11: AD3; bidirectional. */
  "AD3": "11",
  /** Physical pin 12: A10; output. */
  "A10": "12",
  /** Physical pin 13: AD2; bidirectional. */
  "AD2": "13",
  /** Physical pin 14: A9; output. */
  "A9": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: AD0; bidirectional. */
  "AD0": "17",
  /** Physical pin 18: DRQ0; input. */
  "DRQ0": "18",
  /** Physical pin 19: DRQ1; input. */
  "DRQ1": "19",
  /** Physical pin 20: TMR_IN_0; input. */
  "TMR_IN_0": "20",
  /** Physical pin 21: TMR_IN_1; input. */
  "TMR_IN_1": "21",
  /** Physical pin 22: TMR_OUT_0; output. */
  "TMR_OUT_0": "22",
  /** Physical pin 23: TMR_OUT_1; output. */
  "TMR_OUT_1": "23",
  /** Physical pin 24: ~{RES}; input. */
  "~{RES}": "24",
  /** Physical pin 25: ~{PCS0}; output. */
  "~{PCS0}": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: ~{PCS1}; output. */
  "~{PCS1}": "27",
  /** Physical pin 28: ~{PCS2}; output. */
  "~{PCS2}": "28",
  /** Physical pin 29: ~{PCS3}; output. */
  "~{PCS3}": "29",
  /** Physical pin 30: ~{PCS4}; output. */
  "~{PCS4}": "30",
  /** Physical pin 31: ~{PCS5}/A1; output. */
  "~{PCS5}/A1": "31",
  /** Physical pin 32: ~{PCS6}/A2; output. */
  "~{PCS6}/A2": "32",
  /** Physical pin 33: ~{LCS}; bidirectional. */
  "~{LCS}": "33",
  /** Physical pin 34: ~{UCS}; bidirectional. */
  "~{UCS}": "34",
  /** Physical pin 35: ~{MCS3}; output. */
  "~{MCS3}": "35",
  /** Physical pin 36: ~{MCS2}; output. */
  "~{MCS2}": "36",
  /** Physical pin 37: ~{MCS1}; output. */
  "~{MCS1}": "37",
  /** Physical pin 38: ~{MCS0}; output. */
  "~{MCS0}": "38",
  /** Physical pin 39: ~{DEN}; output. */
  "~{DEN}": "39",
  /** Physical pin 40: DT/~{R}; output. */
  "DT/~{R}": "40",
  /** Physical pin 41: INT3/~{INTA1}/IRQ; bidirectional. */
  "INT3/~{INTA1}/IRQ": "41",
  /** Physical pin 42: INT2/~{INTA0}; bidirectional. */
  "INT2/~{INTA0}": "42",
  /** Physical pin 43: VCC; power_in. */
  "VCC_43": "43",
  /** Physical pin 44: INT1/~{SELECT}; input. */
  "INT1/~{SELECT}": "44",
  /** Physical pin 45: INT0; input. */
  "INT0": "45",
  /** Physical pin 46: NMI; input. */
  "NMI": "46",
  /** Physical pin 47: ~{TEST}; bidirectional. */
  "~{TEST}": "47",
  /** Physical pin 48: ~{LOCK}; output. */
  "~{LOCK}": "48",
  /** Physical pin 49: SRDY; input. */
  "SRDY": "49",
  /** Physical pin 50: HOLD; input. */
  "HOLD": "50",
  /** Physical pin 51: HLDA; output. */
  "HLDA": "51",
  /** Physical pin 52: ~{S0}; output. */
  "~{S0}": "52",
  /** Physical pin 53: ~{S1}; output. */
  "~{S1}": "53",
  /** Physical pin 54: ~{S2}; output. */
  "~{S2}": "54",
  /** Physical pin 55: ARDY; input. */
  "ARDY": "55",
  /** Physical pin 56: CLKOUT; output. */
  "CLKOUT": "56",
  /** Physical pin 57: RESET; output. */
  "RESET": "57",
  /** Physical pin 58: X2; output. */
  "X2": "58",
  /** Physical pin 59: X1; input. */
  "X1": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: ALE/QS0; output. */
  "ALE/QS0": "61",
  /** Physical pin 62: ~{RD}/~{QSMD}; bidirectional. */
  "~{RD}/~{QSMD}": "62",
  /** Physical pin 63: ~{WR}/QS1; output. */
  "~{WR}/QS1": "63",
  /** Physical pin 64: ~{RFSH}; output. */
  "~{RFSH}": "64",
  /** Physical pin 65: A19/S6; output. */
  "A19/S6": "65",
  /** Physical pin 66: A18/S5; output. */
  "A18/S5": "66",
  /** Physical pin 67: A17/S4; output. */
  "A17/S4": "67",
  /** Physical pin 68: A16/S3; output. */
  "A16/S3": "68",
}) {
  override schema = "MCU_Intel:80C188XL";
  override referencePrefix = "U";
}

/**
 * i8748, MCS-48 8-bit Microcontroller with Internal EPROM, 1KB EPROM, 64B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8748`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8748 extends Component.withPins({
  /** Physical pin 1: T0; input. */
  "T0": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; output. */
  "X2": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{SS}; input. */
  "~{SS}": "5",
  /** Physical pin 6: ~{INT}; input. */
  "~{INT}": "6",
  /** Physical pin 7: EA; input. */
  "EA": "7",
  /** Physical pin 8: ~{RD}; output. */
  "~{RD}": "8",
  /** Physical pin 9: ~{PSEN}; output. */
  "~{PSEN}": "9",
  /** Physical pin 10: ~{WR}; output. */
  "~{WR}": "10",
  /** Physical pin 11: ALE; output. */
  "ALE": "11",
  /** Physical pin 12: DB.0; bidirectional. */
  "DB.0": "12",
  /** Physical pin 13: DB.1; bidirectional. */
  "DB.1": "13",
  /** Physical pin 14: DB.2; bidirectional. */
  "DB.2": "14",
  /** Physical pin 15: DB.3; bidirectional. */
  "DB.3": "15",
  /** Physical pin 16: DB.4; bidirectional. */
  "DB.4": "16",
  /** Physical pin 17: DB.5; bidirectional. */
  "DB.5": "17",
  /** Physical pin 18: DB.6; bidirectional. */
  "DB.6": "18",
  /** Physical pin 19: DB.7; bidirectional. */
  "DB.7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: P2.0; bidirectional. */
  "P2.0": "21",
  /** Physical pin 22: P2.1; bidirectional. */
  "P2.1": "22",
  /** Physical pin 23: P2.2; bidirectional. */
  "P2.2": "23",
  /** Physical pin 24: P2.3; bidirectional. */
  "P2.3": "24",
  /** Physical pin 25: PROG; output. */
  "PROG": "25",
  /** Physical pin 26: Vpp/VDD; power_in. */
  "Vpp/VDD": "26",
  /** Physical pin 27: P1.0; bidirectional. */
  "P1.0": "27",
  /** Physical pin 28: P1.1; bidirectional. */
  "P1.1": "28",
  /** Physical pin 29: P1.2; bidirectional. */
  "P1.2": "29",
  /** Physical pin 30: P1.3; bidirectional. */
  "P1.3": "30",
  /** Physical pin 31: P1.4; bidirectional. */
  "P1.4": "31",
  /** Physical pin 32: P1.5; bidirectional. */
  "P1.5": "32",
  /** Physical pin 33: P1.6; bidirectional. */
  "P1.6": "33",
  /** Physical pin 34: P1.7; bidirectional. */
  "P1.7": "34",
  /** Physical pin 35: P2.4; bidirectional. */
  "P2.4": "35",
  /** Physical pin 36: P2.5; bidirectional. */
  "P2.5": "36",
  /** Physical pin 37: P2.6; bidirectional. */
  "P2.6": "37",
  /** Physical pin 38: P2.7; bidirectional. */
  "P2.7": "38",
  /** Physical pin 39: T1; input. */
  "T1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "MCU_Intel:8748";
  override referencePrefix = "U";
}

/**
 * i8748, MCS-48 8-bit Microcontroller with Internal EPROM, 2KB EPROM, 128B RAM, DIP-40
 *
 * KiCad symbol: `MCU_Intel:8749`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * Keywords: MCS-48 uC Microcontroller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _8749 extends Component.withPins({
  /** Physical pin 1: T0; input. */
  "T0": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; output. */
  "X2": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: ~{SS}; input. */
  "~{SS}": "5",
  /** Physical pin 6: ~{INT}; input. */
  "~{INT}": "6",
  /** Physical pin 7: EA; input. */
  "EA": "7",
  /** Physical pin 8: ~{RD}; output. */
  "~{RD}": "8",
  /** Physical pin 9: ~{PSEN}; output. */
  "~{PSEN}": "9",
  /** Physical pin 10: ~{WR}; output. */
  "~{WR}": "10",
  /** Physical pin 11: ALE; output. */
  "ALE": "11",
  /** Physical pin 12: DB.0; bidirectional. */
  "DB.0": "12",
  /** Physical pin 13: DB.1; bidirectional. */
  "DB.1": "13",
  /** Physical pin 14: DB.2; bidirectional. */
  "DB.2": "14",
  /** Physical pin 15: DB.3; bidirectional. */
  "DB.3": "15",
  /** Physical pin 16: DB.4; bidirectional. */
  "DB.4": "16",
  /** Physical pin 17: DB.5; bidirectional. */
  "DB.5": "17",
  /** Physical pin 18: DB.6; bidirectional. */
  "DB.6": "18",
  /** Physical pin 19: DB.7; bidirectional. */
  "DB.7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: P2.0; bidirectional. */
  "P2.0": "21",
  /** Physical pin 22: P2.1; bidirectional. */
  "P2.1": "22",
  /** Physical pin 23: P2.2; bidirectional. */
  "P2.2": "23",
  /** Physical pin 24: P2.3; bidirectional. */
  "P2.3": "24",
  /** Physical pin 25: PROG; output. */
  "PROG": "25",
  /** Physical pin 26: Vpp/VDD; power_in. */
  "Vpp/VDD": "26",
  /** Physical pin 27: P1.0; bidirectional. */
  "P1.0": "27",
  /** Physical pin 28: P1.1; bidirectional. */
  "P1.1": "28",
  /** Physical pin 29: P1.2; bidirectional. */
  "P1.2": "29",
  /** Physical pin 30: P1.3; bidirectional. */
  "P1.3": "30",
  /** Physical pin 31: P1.4; bidirectional. */
  "P1.4": "31",
  /** Physical pin 32: P1.5; bidirectional. */
  "P1.5": "32",
  /** Physical pin 33: P1.6; bidirectional. */
  "P1.6": "33",
  /** Physical pin 34: P1.7; bidirectional. */
  "P1.7": "34",
  /** Physical pin 35: P2.4; bidirectional. */
  "P2.4": "35",
  /** Physical pin 36: P2.5; bidirectional. */
  "P2.5": "36",
  /** Physical pin 37: P2.6; bidirectional. */
  "P2.6": "37",
  /** Physical pin 38: P2.7; bidirectional. */
  "P2.7": "38",
  /** Physical pin 39: T1; input. */
  "T1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "MCU_Intel:8749";
  override referencePrefix = "U";
}

/**
 * Intel I386EX Embedded microprocessor, PQFP-132
 *
 * KiCad symbol: `MCU_Intel:I386EX_PQFP`. Reference prefix: `U`.
 * Footprint filters: PQFP*.
 * Keywords: MPRO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class I386EX_PQFP extends Component.withPins({
  /** Physical pin 1: UCS; output. */
  "UCS": "1",
  /** Physical pin 2: CS6/REFRESH; output. */
  "CS6/REFRESH": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: LBA; output. */
  "LBA": "4",
  /** Physical pin 5: D0; tri_state. */
  "D0": "5",
  /** Physical pin 6: D1; tri_state. */
  "D1": "6",
  /** Physical pin 7: D2; tri_state. */
  "D2": "7",
  /** Physical pin 8: D3; tri_state. */
  "D3": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: D4; tri_state. */
  "D4": "10",
  /** Physical pin 11: D5; tri_state. */
  "D5": "11",
  /** Physical pin 12: D6; tri_state. */
  "D6": "12",
  /** Physical pin 13: D7; tri_state. */
  "D7": "13",
  /** Physical pin 14: D8; tri_state. */
  "D8": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC_15": "15",
  /** Physical pin 16: D9; tri_state. */
  "D9": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: D10; tri_state. */
  "D10": "18",
  /** Physical pin 19: D11; tri_state. */
  "D11": "19",
  /** Physical pin 20: D12; tri_state. */
  "D12": "20",
  /** Physical pin 21: D13; tri_state. */
  "D13": "21",
  /** Physical pin 22: D14; tri_state. */
  "D14": "22",
  /** Physical pin 23: D15; tri_state. */
  "D15": "23",
  /** Physical pin 24: TDO; output. */
  "TDO": "24",
  /** Physical pin 25: TDI; input. */
  "TDI": "25",
  /** Physical pin 26: TMS; input. */
  "TMS": "26",
  /** Physical pin 27: M/IO; output. */
  "M/IO": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC_28": "28",
  /** Physical pin 29: D/C; output. */
  "D/C": "29",
  /** Physical pin 30: WR/RD; output. */
  "WR/RD": "30",
  /** Physical pin 31: GND; power_in. */
  "GND_31": "31",
  /** Physical pin 32: READY; bidirectional. */
  "READY": "32",
  /** Physical pin 33: BS8; input. */
  "BS8": "33",
  /** Physical pin 34: RD; output. */
  "RD": "34",
  /** Physical pin 35: WR; output. */
  "WR": "35",
  /** Physical pin 36: GND; power_in. */
  "GND_36": "36",
  /** Physical pin 37: BLE; output. */
  "BLE": "37",
  /** Physical pin 38: VCC; power_in. */
  "VCC_38": "38",
  /** Physical pin 39: BHE; output. */
  "BHE": "39",
  /** Physical pin 40: ADS; output. */
  "ADS": "40",
  /** Physical pin 41: NA; input. */
  "NA": "41",
  /** Physical pin 42: A1; tri_state. */
  "A1": "42",
  /** Physical pin 43: A2; tri_state. */
  "A2": "43",
  /** Physical pin 44: A3; tri_state. */
  "A3": "44",
  /** Physical pin 45: A4; tri_state. */
  "A4": "45",
  /** Physical pin 46: GND; power_in. */
  "GND_46": "46",
  /** Physical pin 47: VCC; power_in. */
  "VCC_47": "47",
  /** Physical pin 48: A5; tri_state. */
  "A5": "48",
  /** Physical pin 49: A6; tri_state. */
  "A6": "49",
  /** Physical pin 50: A7; tri_state. */
  "A7": "50",
  /** Physical pin 51: A8; tri_state. */
  "A8": "51",
  /** Physical pin 52: A9; tri_state. */
  "A9": "52",
  /** Physical pin 53: A10; tri_state. */
  "A10": "53",
  /** Physical pin 54: A11; tri_state. */
  "A11": "54",
  /** Physical pin 55: A12; tri_state. */
  "A12": "55",
  /** Physical pin 56: A13; tri_state. */
  "A13": "56",
  /** Physical pin 57: A14; tri_state. */
  "A14": "57",
  /** Physical pin 58: A15; tri_state. */
  "A15": "58",
  /** Physical pin 59: A16/CAS0; tri_state. */
  "A16/CAS0": "59",
  /** Physical pin 60: VCC; power_in. */
  "VCC_60": "60",
  /** Physical pin 61: A17/CAS1; tri_state. */
  "A17/CAS1": "61",
  /** Physical pin 62: A18/CAS2; tri_state. */
  "A18/CAS2": "62",
  /** Physical pin 63: A19; tri_state. */
  "A19": "63",
  /** Physical pin 64: GND; power_in. */
  "GND_64": "64",
  /** Physical pin 65: A20; tri_state. */
  "A20": "65",
  /** Physical pin 66: A21; tri_state. */
  "A21": "66",
  /** Physical pin 67: A22; tri_state. */
  "A22": "67",
  /** Physical pin 68: A23; tri_state. */
  "A23": "68",
  /** Physical pin 69: GND; power_in. */
  "GND_69": "69",
  /** Physical pin 70: A24; tri_state. */
  "A24": "70",
  /** Physical pin 71: VCC; power_in. */
  "VCC_71": "71",
  /** Physical pin 72: A25; tri_state. */
  "A25": "72",
  /** Physical pin 73: SMI; input. */
  "SMI": "73",
  /** Physical pin 74: TMROUT0/P3.0; bidirectional. */
  "TMROUT0/P3.0": "74",
  /** Physical pin 75: TMROUT1/P3.1; bidirectional. */
  "TMROUT1/P3.1": "75",
  /** Physical pin 76: TCK; input. */
  "TCK": "76",
  /** Physical pin 77: SRXCLK/DTR1; bidirectional. */
  "SRXCLK/DTR1": "77",
  /** Physical pin 78: SSIORX/RI1; input. */
  "SSIORX/RI1": "78",
  /** Physical pin 79: SSIOTX/RST1; bidirectional. */
  "SSIOTX/RST1": "79",
  /** Physical pin 80: INT0/P3.2; bidirectional. */
  "INT0/P3.2": "80",
  /** Physical pin 81: VCC; power_in. */
  "VCC_81": "81",
  /** Physical pin 82: INT1/P3.3; bidirectional. */
  "INT1/P3.3": "82",
  /** Physical pin 83: GND; power_in. */
  "GND_83": "83",
  /** Physical pin 84: INT2/P3.4; bidirectional. */
  "INT2/P3.4": "84",
  /** Physical pin 85: INT3/P3.5; bidirectional. */
  "INT3/P3.5": "85",
  /** Physical pin 86: PWRDWN/P3.6; bidirectional. */
  "PWRDWN/P3.6": "86",
  /** Physical pin 87: COMCLK/P3.7; bidirectional. */
  "COMCLK/P3.7": "87",
  /** Physical pin 88: VCC; power_in. */
  "VCC_88": "88",
  /** Physical pin 89: PEREQ/TMRCLK2; input. */
  "PEREQ/TMRCLK2": "89",
  /** Physical pin 90: NMI; input. */
  "NMI": "90",
  /** Physical pin 91: ERROR/TMROUT2; bidirectional. */
  "ERROR/TMROUT2": "91",
  /** Physical pin 92: BUSY/TMRGATE2; input. */
  "BUSY/TMRGATE2": "92",
  /** Physical pin 93: INT4/TMRCLK0; input. */
  "INT4/TMRCLK0": "93",
  /** Physical pin 94: INT5/TMRGATE0; input. */
  "INT5/TMRGATE0": "94",
  /** Physical pin 95: INT6/TMRCLK1; input. */
  "INT6/TMRCLK1": "95",
  /** Physical pin 96: INT7/TMRGATE1; input. */
  "INT7/TMRGATE1": "96",
  /** Physical pin 97: GND; power_in. */
  "GND_97": "97",
  /** Physical pin 98: STXCLK/DSR1; bidirectional. */
  "STXCLK/DSR1": "98",
  /** Physical pin 99: FLT; input. */
  "FLT": "99",
  /** Physical pin 100: GND; power_in. */
  "GND_100": "100",
  /** Physical pin 101: DCD0/P1.0; bidirectional. */
  "DCD0/P1.0": "101",
  /** Physical pin 102: RTS0/P1.1; bidirectional. */
  "RTS0/P1.1": "102",
  /** Physical pin 104: DTR0/P1.2; bidirectional. */
  "DTR0/P1.2": "104",
  /** Physical pin 105: DSR0/P1.3; bidirectional. */
  "DSR0/P1.3": "105",
  /** Physical pin 106: RI0/P1.4; bidirectional. */
  "RI0/P1.4": "106",
  /** Physical pin 107: LOCK/P1.5; bidirectional. */
  "LOCK/P1.5": "107",
  /** Physical pin 108: HOLD/P1.6; bidirectional. */
  "HOLD/P1.6": "108",
  /** Physical pin 109: VCC; power_in. */
  "VCC_109": "109",
  /** Physical pin 110: RESET; input. */
  "RESET": "110",
  /** Physical pin 111: HLDA/P1.7; bidirectional. */
  "HLDA/P1.7": "111",
  /** Physical pin 112: DACK1/TXD1; output. */
  "DACK1/TXD1": "112",
  /** Physical pin 113: EOP/CTS1; bidirectional. */
  "EOP/CTS1": "113",
  /** Physical pin 114: WDTOUT; output. */
  "WDTOUT": "114",
  /** Physical pin 115: CLK2; input. */
  "CLK2": "115",
  /** Physical pin 116: GND; power_in. */
  "GND_116": "116",
  /** Physical pin 117: DRQ0/DCD1; input. */
  "DRQ0/DCD1": "117",
  /** Physical pin 118: DRQ1/RXD1; input. */
  "DRQ1/RXD1": "118",
  /** Physical pin 119: TRST; input. */
  "TRST": "119",
  /** Physical pin 120: SMIACT; output. */
  "SMIACT": "120",
  /** Physical pin 121: VCC; power_in. */
  "VCC_121": "121",
  /** Physical pin 122: CS0/P2.0; bidirectional. */
  "CS0/P2.0": "122",
  /** Physical pin 123: CS1/P2.1; bidirectional. */
  "CS1/P2.1": "123",
  /** Physical pin 124: CS2/P2.2; bidirectional. */
  "CS2/P2.2": "124",
  /** Physical pin 125: CS3/P2.3; bidirectional. */
  "CS3/P2.3": "125",
  /** Physical pin 126: CS4/P2.4; bidirectional. */
  "CS4/P2.4": "126",
  /** Physical pin 127: VCC; power_in. */
  "VCC_127": "127",
  /** Physical pin 128: DACK0/CS5; output. */
  "DACK0/CS5": "128",
  /** Physical pin 129: RDX0/P2.5; bidirectional. */
  "RDX0/P2.5": "129",
  /** Physical pin 130: GND; power_in. */
  "GND_130": "130",
  /** Physical pin 131: TXD0/P2.6; bidirectional. */
  "TXD0/P2.6": "131",
  /** Physical pin 132: CTS0/P2.7; bidirectional. */
  "CTS0/P2.7": "132",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IA186XLPLC68IR2 extends Component.withPins({
  /** Physical pin 1: AD15; bidirectional. */
  "AD15": "1",
  /** Physical pin 2: AD7; bidirectional. */
  "AD7": "2",
  /** Physical pin 3: AD14; bidirectional. */
  "AD14": "3",
  /** Physical pin 4: AD6; bidirectional. */
  "AD6": "4",
  /** Physical pin 5: AD13; bidirectional. */
  "AD13": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: AD12; bidirectional. */
  "AD12": "7",
  /** Physical pin 8: AD4; bidirectional. */
  "AD4": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: AD11; bidirectional. */
  "AD11": "10",
  /** Physical pin 11: AD3; bidirectional. */
  "AD3": "11",
  /** Physical pin 12: AD10; bidirectional. */
  "AD10": "12",
  /** Physical pin 13: AD2; bidirectional. */
  "AD2": "13",
  /** Physical pin 14: AD9; bidirectional. */
  "AD9": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD8; bidirectional. */
  "AD8": "16",
  /** Physical pin 17: AD0; bidirectional. */
  "AD0": "17",
  /** Physical pin 18: DRQ0; input. */
  "DRQ0": "18",
  /** Physical pin 19: DRQ1; input. */
  "DRQ1": "19",
  /** Physical pin 20: TMR_IN_0; input. */
  "TMR_IN_0": "20",
  /** Physical pin 21: TMR_IN_1; input. */
  "TMR_IN_1": "21",
  /** Physical pin 22: TMR_OUT_0; output. */
  "TMR_OUT_0": "22",
  /** Physical pin 23: TMR_OUT_1; output. */
  "TMR_OUT_1": "23",
  /** Physical pin 24: ~{RES}; input. */
  "~{RES}": "24",
  /** Physical pin 25: ~{PCS0}; output. */
  "~{PCS0}": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: ~{PCS1}; output. */
  "~{PCS1}": "27",
  /** Physical pin 28: ~{PCS2}; output. */
  "~{PCS2}": "28",
  /** Physical pin 29: ~{PCS3}; output. */
  "~{PCS3}": "29",
  /** Physical pin 30: ~{PCS4}; output. */
  "~{PCS4}": "30",
  /** Physical pin 31: ~{PCS5}/A1; output. */
  "~{PCS5}/A1": "31",
  /** Physical pin 32: ~{PCS6}/A2; output. */
  "~{PCS6}/A2": "32",
  /** Physical pin 33: ~{LCS}; bidirectional. */
  "~{LCS}": "33",
  /** Physical pin 34: ~{UCS}; bidirectional. */
  "~{UCS}": "34",
  /** Physical pin 35: ~{MCS3}/~{NPS}; output. */
  "~{MCS3}/~{NPS}": "35",
  /** Physical pin 36: ~{MCS2}; output. */
  "~{MCS2}": "36",
  /** Physical pin 37: ~{MCS1}/~{ERROR}; bidirectional. */
  "~{MCS1}/~{ERROR}": "37",
  /** Physical pin 38: ~{MCS0}/PEREQ; bidirectional. */
  "~{MCS0}/PEREQ": "38",
  /** Physical pin 39: ~{DEN}; output. */
  "~{DEN}": "39",
  /** Physical pin 40: DT/~{R}; output. */
  "DT/~{R}": "40",
  /** Physical pin 41: INT3/~{INTA1}/IRQ; bidirectional. */
  "INT3/~{INTA1}/IRQ": "41",
  /** Physical pin 42: INT2/~{INTA0}; bidirectional. */
  "INT2/~{INTA0}": "42",
  /** Physical pin 43: VCC; power_in. */
  "VCC_43": "43",
  /** Physical pin 44: INT1/~{SELECT}; input. */
  "INT1/~{SELECT}": "44",
  /** Physical pin 45: INT0; input. */
  "INT0": "45",
  /** Physical pin 46: NMI; input. */
  "NMI": "46",
  /** Physical pin 47: ~{TEST}/BUSY; bidirectional. */
  "~{TEST}/BUSY": "47",
  /** Physical pin 48: ~{LOCK}; output. */
  "~{LOCK}": "48",
  /** Physical pin 49: SRDY; input. */
  "SRDY": "49",
  /** Physical pin 50: HOLD; input. */
  "HOLD": "50",
  /** Physical pin 51: HLDA; output. */
  "HLDA": "51",
  /** Physical pin 52: ~{S0}; output. */
  "~{S0}": "52",
  /** Physical pin 53: ~{S1}; output. */
  "~{S1}": "53",
  /** Physical pin 54: ~{S2}; output. */
  "~{S2}": "54",
  /** Physical pin 55: ARDY; input. */
  "ARDY": "55",
  /** Physical pin 56: CLKOUT; output. */
  "CLKOUT": "56",
  /** Physical pin 57: RESET; output. */
  "RESET": "57",
  /** Physical pin 58: X2; output. */
  "X2": "58",
  /** Physical pin 59: X1; input. */
  "X1": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: ALE/QS0; output. */
  "ALE/QS0": "61",
  /** Physical pin 62: ~{RD}/~{QSMD}; bidirectional. */
  "~{RD}/~{QSMD}": "62",
  /** Physical pin 63: ~{WR}/QS1; output. */
  "~{WR}/QS1": "63",
  /** Physical pin 64: ~{BHE}; output. */
  "~{BHE}": "64",
  /** Physical pin 65: A19/S6; output. */
  "A19/S6": "65",
  /** Physical pin 66: A18/S5; output. */
  "A18/S5": "66",
  /** Physical pin 67: A17/S4; output. */
  "A17/S4": "67",
  /** Physical pin 68: A16/S3; output. */
  "A16/S3": "68",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IA188XLPLC68IR2 extends Component.withPins({
  /** Physical pin 1: A15; output. */
  "A15": "1",
  /** Physical pin 2: AD7; bidirectional. */
  "AD7": "2",
  /** Physical pin 3: A14; output. */
  "A14": "3",
  /** Physical pin 4: AD6; bidirectional. */
  "AD6": "4",
  /** Physical pin 5: A13; output. */
  "A13": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: A12; output. */
  "A12": "7",
  /** Physical pin 8: AD4; bidirectional. */
  "AD4": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: A11; output. */
  "A11": "10",
  /** Physical pin 11: AD3; bidirectional. */
  "AD3": "11",
  /** Physical pin 12: A10; output. */
  "A10": "12",
  /** Physical pin 13: AD2; bidirectional. */
  "AD2": "13",
  /** Physical pin 14: A9; output. */
  "A9": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: A8; output. */
  "A8": "16",
  /** Physical pin 17: AD0; bidirectional. */
  "AD0": "17",
  /** Physical pin 18: DRQ0; input. */
  "DRQ0": "18",
  /** Physical pin 19: DRQ1; input. */
  "DRQ1": "19",
  /** Physical pin 20: TMR_IN_0; input. */
  "TMR_IN_0": "20",
  /** Physical pin 21: TMR_IN_1; input. */
  "TMR_IN_1": "21",
  /** Physical pin 22: TMR_OUT_0; output. */
  "TMR_OUT_0": "22",
  /** Physical pin 23: TMR_OUT_1; output. */
  "TMR_OUT_1": "23",
  /** Physical pin 24: ~{RES}; input. */
  "~{RES}": "24",
  /** Physical pin 25: ~{PCS0}; output. */
  "~{PCS0}": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: ~{PCS1}; output. */
  "~{PCS1}": "27",
  /** Physical pin 28: ~{PCS2}; output. */
  "~{PCS2}": "28",
  /** Physical pin 29: ~{PCS3}; output. */
  "~{PCS3}": "29",
  /** Physical pin 30: ~{PCS4}; output. */
  "~{PCS4}": "30",
  /** Physical pin 31: ~{PCS5}/A1; output. */
  "~{PCS5}/A1": "31",
  /** Physical pin 32: ~{PCS6}/A2; output. */
  "~{PCS6}/A2": "32",
  /** Physical pin 33: ~{LCS}; bidirectional. */
  "~{LCS}": "33",
  /** Physical pin 34: ~{UCS}; bidirectional. */
  "~{UCS}": "34",
  /** Physical pin 35: ~{MCS3}; output. */
  "~{MCS3}": "35",
  /** Physical pin 36: ~{MCS2}; output. */
  "~{MCS2}": "36",
  /** Physical pin 37: ~{MCS1}; output. */
  "~{MCS1}": "37",
  /** Physical pin 38: ~{MCS0}; output. */
  "~{MCS0}": "38",
  /** Physical pin 39: ~{DEN}; output. */
  "~{DEN}": "39",
  /** Physical pin 40: DT/~{R}; output. */
  "DT/~{R}": "40",
  /** Physical pin 41: INT3/~{INTA1}/IRQ; bidirectional. */
  "INT3/~{INTA1}/IRQ": "41",
  /** Physical pin 42: INT2/~{INTA0}; bidirectional. */
  "INT2/~{INTA0}": "42",
  /** Physical pin 43: VCC; power_in. */
  "VCC_43": "43",
  /** Physical pin 44: INT1/~{SELECT}; input. */
  "INT1/~{SELECT}": "44",
  /** Physical pin 45: INT0; input. */
  "INT0": "45",
  /** Physical pin 46: NMI; input. */
  "NMI": "46",
  /** Physical pin 47: ~{TEST}; bidirectional. */
  "~{TEST}": "47",
  /** Physical pin 48: ~{LOCK}; output. */
  "~{LOCK}": "48",
  /** Physical pin 49: SRDY; input. */
  "SRDY": "49",
  /** Physical pin 50: HOLD; input. */
  "HOLD": "50",
  /** Physical pin 51: HLDA; output. */
  "HLDA": "51",
  /** Physical pin 52: ~{S0}; output. */
  "~{S0}": "52",
  /** Physical pin 53: ~{S1}; output. */
  "~{S1}": "53",
  /** Physical pin 54: ~{S2}; output. */
  "~{S2}": "54",
  /** Physical pin 55: ARDY; input. */
  "ARDY": "55",
  /** Physical pin 56: CLKOUT; output. */
  "CLKOUT": "56",
  /** Physical pin 57: RESET; output. */
  "RESET": "57",
  /** Physical pin 58: X2; output. */
  "X2": "58",
  /** Physical pin 59: X1; input. */
  "X1": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: ALE/QS0; output. */
  "ALE/QS0": "61",
  /** Physical pin 62: ~{RD}/~{QSMD}; bidirectional. */
  "~{RD}/~{QSMD}": "62",
  /** Physical pin 63: ~{WR}/QS1; output. */
  "~{WR}/QS1": "63",
  /** Physical pin 64: ~{RFSH}; output. */
  "~{RFSH}": "64",
  /** Physical pin 65: A19/S6; output. */
  "A19/S6": "65",
  /** Physical pin 66: A18/S5; output. */
  "A18/S5": "66",
  /** Physical pin 67: A17/S4; output. */
  "A17/S4": "67",
  /** Physical pin 68: A16/S3; output. */
  "A16/S3": "68",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M80C186 extends Component.withPins({
  /** Physical pin 1: AD15; bidirectional. */
  "AD15": "1",
  /** Physical pin 2: AD7; bidirectional. */
  "AD7": "2",
  /** Physical pin 3: AD14; bidirectional. */
  "AD14": "3",
  /** Physical pin 4: AD6; bidirectional. */
  "AD6": "4",
  /** Physical pin 5: AD13; bidirectional. */
  "AD13": "5",
  /** Physical pin 6: AD5; bidirectional. */
  "AD5": "6",
  /** Physical pin 7: AD12; bidirectional. */
  "AD12": "7",
  /** Physical pin 8: AD4; bidirectional. */
  "AD4": "8",
  /** Physical pin 9: VCC; power_in. */
  "VCC_9": "9",
  /** Physical pin 10: AD11; bidirectional. */
  "AD11": "10",
  /** Physical pin 11: AD3; bidirectional. */
  "AD3": "11",
  /** Physical pin 12: AD10; bidirectional. */
  "AD10": "12",
  /** Physical pin 13: AD2; bidirectional. */
  "AD2": "13",
  /** Physical pin 14: AD9; bidirectional. */
  "AD9": "14",
  /** Physical pin 15: AD1; bidirectional. */
  "AD1": "15",
  /** Physical pin 16: AD8; bidirectional. */
  "AD8": "16",
  /** Physical pin 17: AD0; bidirectional. */
  "AD0": "17",
  /** Physical pin 18: DRQ0; input. */
  "DRQ0": "18",
  /** Physical pin 19: DRQ1; input. */
  "DRQ1": "19",
  /** Physical pin 20: TMR_IN_0; input. */
  "TMR_IN_0": "20",
  /** Physical pin 21: TMR_IN_1; input. */
  "TMR_IN_1": "21",
  /** Physical pin 22: TMR_OUT_0; output. */
  "TMR_OUT_0": "22",
  /** Physical pin 23: TMR_OUT_1; output. */
  "TMR_OUT_1": "23",
  /** Physical pin 24: ~{RES}; input. */
  "~{RES}": "24",
  /** Physical pin 25: ~{PCS0}; output. */
  "~{PCS0}": "25",
  /** Physical pin 26: VSS; power_in. */
  "VSS_26": "26",
  /** Physical pin 27: ~{PCS1}; output. */
  "~{PCS1}": "27",
  /** Physical pin 28: ~{PCS2}; output. */
  "~{PCS2}": "28",
  /** Physical pin 29: ~{PCS3}; output. */
  "~{PCS3}": "29",
  /** Physical pin 30: ~{PCS4}; output. */
  "~{PCS4}": "30",
  /** Physical pin 31: ~{PCS5}/A1; output. */
  "~{PCS5}/A1": "31",
  /** Physical pin 32: ~{PCS6}/A2; output. */
  "~{PCS6}/A2": "32",
  /** Physical pin 33: ~{LCS}; output. */
  "~{LCS}": "33",
  /** Physical pin 34: ~{UCS}; output. */
  "~{UCS}": "34",
  /** Physical pin 35: ~{MCS3}/~{NPS}; output. */
  "~{MCS3}/~{NPS}": "35",
  /** Physical pin 36: ~{MCS2}; output. */
  "~{MCS2}": "36",
  /** Physical pin 37: ~{MCS1}/~{ERROR}; bidirectional. */
  "~{MCS1}/~{ERROR}": "37",
  /** Physical pin 38: ~{MCS0}/PEREQ; bidirectional. */
  "~{MCS0}/PEREQ": "38",
  /** Physical pin 39: ~{DEN}; output. */
  "~{DEN}": "39",
  /** Physical pin 40: DT/~{R}; output. */
  "DT/~{R}": "40",
  /** Physical pin 41: INT3/~{INTA1}; bidirectional. */
  "INT3/~{INTA1}": "41",
  /** Physical pin 42: INT2/~{INTA0}; bidirectional. */
  "INT2/~{INTA0}": "42",
  /** Physical pin 43: VCC; power_in. */
  "VCC_43": "43",
  /** Physical pin 44: INT1; input. */
  "INT1": "44",
  /** Physical pin 45: INT0; input. */
  "INT0": "45",
  /** Physical pin 46: NMI; input. */
  "NMI": "46",
  /** Physical pin 47: ~{TEST}/BUSY; input. */
  "~{TEST}/BUSY": "47",
  /** Physical pin 48: ~{LOCK}; output. */
  "~{LOCK}": "48",
  /** Physical pin 49: SRDY; input. */
  "SRDY": "49",
  /** Physical pin 50: HOLD; input. */
  "HOLD": "50",
  /** Physical pin 51: HLDA; output. */
  "HLDA": "51",
  /** Physical pin 52: ~{S0}; output. */
  "~{S0}": "52",
  /** Physical pin 53: ~{S1}; output. */
  "~{S1}": "53",
  /** Physical pin 54: ~{S2}; output. */
  "~{S2}": "54",
  /** Physical pin 55: ARDY; input. */
  "ARDY": "55",
  /** Physical pin 56: CLKOUT; output. */
  "CLKOUT": "56",
  /** Physical pin 57: RESET; output. */
  "RESET": "57",
  /** Physical pin 58: X2; output. */
  "X2": "58",
  /** Physical pin 59: X1; input. */
  "X1": "59",
  /** Physical pin 60: VSS; passive. */
  "VSS_60": "60",
  /** Physical pin 61: ALE/QS0; output. */
  "ALE/QS0": "61",
  /** Physical pin 62: ~{RD}/~{QSMD}; output. */
  "~{RD}/~{QSMD}": "62",
  /** Physical pin 63: ~{WR}/QS1; output. */
  "~{WR}/QS1": "63",
  /** Physical pin 64: ~{BHE}; output. */
  "~{BHE}": "64",
  /** Physical pin 65: A19/S6; output. */
  "A19/S6": "65",
  /** Physical pin 66: A18/S5; output. */
  "A18/S5": "66",
  /** Physical pin 67: A17/S4; output. */
  "A17/S4": "67",
  /** Physical pin 68: A16/S3; output. */
  "A16/S3": "68",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class P8051AH extends Component.withPins({
  /** Physical pin 3: P1.2; bidirectional. */
  "P1.2": "3",
  /** Physical pin 1: P1.0; bidirectional. */
  "P1.0": "1",
  /** Physical pin 2: P1.1; bidirectional. */
  "P1.1": "2",
  /** Physical pin 4: P1.3; bidirectional. */
  "P1.3": "4",
  /** Physical pin 5: P1.4; bidirectional. */
  "P1.4": "5",
  /** Physical pin 6: P1.5; bidirectional. */
  "P1.5": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.7; bidirectional. */
  "P1.7": "8",
  /** Physical pin 9: RST; input. */
  "RST": "9",
  /** Physical pin 10: P3.0/RXD; bidirectional. */
  "P3.0/RXD": "10",
  /** Physical pin 11: P3.1/TXD; bidirectional. */
  "P3.1/TXD": "11",
  /** Physical pin 12: P3.2/~{INT0}; bidirectional. */
  "P3.2/~{INT0}": "12",
  /** Physical pin 13: P3.3/~{INT1}; bidirectional. */
  "P3.3/~{INT1}": "13",
  /** Physical pin 14: P3.4/T0; bidirectional. */
  "P3.4/T0": "14",
  /** Physical pin 15: P3.5/T1; bidirectional. */
  "P3.5/T1": "15",
  /** Physical pin 16: P3.6/~{WR}; bidirectional. */
  "P3.6/~{WR}": "16",
  /** Physical pin 17: P3.7/~{RD}; bidirectional. */
  "P3.7/~{RD}": "17",
  /** Physical pin 18: XTAL2; output. */
  "XTAL2": "18",
  /** Physical pin 19: XTAL1; input. */
  "XTAL1": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
  /** Physical pin 21: P2.0/A8; bidirectional. */
  "P2.0/A8": "21",
  /** Physical pin 22: P2.1/A9; bidirectional. */
  "P2.1/A9": "22",
  /** Physical pin 23: P2.2/A10; bidirectional. */
  "P2.2/A10": "23",
  /** Physical pin 24: P2.3/A11; bidirectional. */
  "P2.3/A11": "24",
  /** Physical pin 25: P2.4/A12; bidirectional. */
  "P2.4/A12": "25",
  /** Physical pin 26: P2.5/A13; bidirectional. */
  "P2.5/A13": "26",
  /** Physical pin 27: P2.6/A14; bidirectional. */
  "P2.6/A14": "27",
  /** Physical pin 28: P2.7/A15; bidirectional. */
  "P2.7/A15": "28",
  /** Physical pin 29: ~{PSEN}; output. */
  "~{PSEN}": "29",
  /** Physical pin 30: ALE; output. */
  "ALE": "30",
  /** Physical pin 31: ~{EA}; input. */
  "~{EA}": "31",
  /** Physical pin 32: P0.7/AD7; bidirectional. */
  "P0.7/AD7": "32",
  /** Physical pin 33: P0.6/AD6; bidirectional. */
  "P0.6/AD6": "33",
  /** Physical pin 34: P0.5/AD5; bidirectional. */
  "P0.5/AD5": "34",
  /** Physical pin 35: P0.4/AD4; bidirectional. */
  "P0.4/AD4": "35",
  /** Physical pin 36: P0.3/AD3; bidirectional. */
  "P0.3/AD3": "36",
  /** Physical pin 37: P0.2/AD2; bidirectional. */
  "P0.2/AD2": "37",
  /** Physical pin 38: P0.1/AD1; bidirectional. */
  "P0.1/AD1": "38",
  /** Physical pin 39: P0.0/AD0; bidirectional. */
  "P0.0/AD0": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class P8031AH extends Component.withPins({
  /** Physical pin 3: P1.2; bidirectional. */
  "P1.2": "3",
  /** Physical pin 1: P1.0; bidirectional. */
  "P1.0": "1",
  /** Physical pin 2: P1.1; bidirectional. */
  "P1.1": "2",
  /** Physical pin 4: P1.3; bidirectional. */
  "P1.3": "4",
  /** Physical pin 5: P1.4; bidirectional. */
  "P1.4": "5",
  /** Physical pin 6: P1.5; bidirectional. */
  "P1.5": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.7; bidirectional. */
  "P1.7": "8",
  /** Physical pin 9: RST; input. */
  "RST": "9",
  /** Physical pin 10: P3.0/RXD; bidirectional. */
  "P3.0/RXD": "10",
  /** Physical pin 11: P3.1/TXD; bidirectional. */
  "P3.1/TXD": "11",
  /** Physical pin 12: P3.2/~{INT0}; bidirectional. */
  "P3.2/~{INT0}": "12",
  /** Physical pin 13: P3.3/~{INT1}; bidirectional. */
  "P3.3/~{INT1}": "13",
  /** Physical pin 14: P3.4/T0; bidirectional. */
  "P3.4/T0": "14",
  /** Physical pin 15: P3.5/T1; bidirectional. */
  "P3.5/T1": "15",
  /** Physical pin 16: P3.6/~{WR}; bidirectional. */
  "P3.6/~{WR}": "16",
  /** Physical pin 17: P3.7/~{RD}; bidirectional. */
  "P3.7/~{RD}": "17",
  /** Physical pin 18: XTAL2; output. */
  "XTAL2": "18",
  /** Physical pin 19: XTAL1; input. */
  "XTAL1": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
  /** Physical pin 21: P2.0/A8; bidirectional. */
  "P2.0/A8": "21",
  /** Physical pin 22: P2.1/A9; bidirectional. */
  "P2.1/A9": "22",
  /** Physical pin 23: P2.2/A10; bidirectional. */
  "P2.2/A10": "23",
  /** Physical pin 24: P2.3/A11; bidirectional. */
  "P2.3/A11": "24",
  /** Physical pin 25: P2.4/A12; bidirectional. */
  "P2.4/A12": "25",
  /** Physical pin 26: P2.5/A13; bidirectional. */
  "P2.5/A13": "26",
  /** Physical pin 27: P2.6/A14; bidirectional. */
  "P2.6/A14": "27",
  /** Physical pin 28: P2.7/A15; bidirectional. */
  "P2.7/A15": "28",
  /** Physical pin 29: ~{PSEN}; output. */
  "~{PSEN}": "29",
  /** Physical pin 30: ALE; output. */
  "ALE": "30",
  /** Physical pin 31: ~{EA}; input. */
  "~{EA}": "31",
  /** Physical pin 32: P0.7/AD7; bidirectional. */
  "P0.7/AD7": "32",
  /** Physical pin 33: P0.6/AD6; bidirectional. */
  "P0.6/AD6": "33",
  /** Physical pin 34: P0.5/AD5; bidirectional. */
  "P0.5/AD5": "34",
  /** Physical pin 35: P0.4/AD4; bidirectional. */
  "P0.4/AD4": "35",
  /** Physical pin 36: P0.3/AD3; bidirectional. */
  "P0.3/AD3": "36",
  /** Physical pin 37: P0.2/AD2; bidirectional. */
  "P0.2/AD2": "37",
  /** Physical pin 38: P0.1/AD1; bidirectional. */
  "P0.1/AD1": "38",
  /** Physical pin 39: P0.0/AD0; bidirectional. */
  "P0.0/AD0": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class P8052AH extends Component.withPins({
  /** Physical pin 3: P1.2; bidirectional. */
  "P1.2": "3",
  /** Physical pin 1: P1.0/T2; bidirectional. */
  "P1.0/T2": "1",
  /** Physical pin 2: P1.1/T2EX; bidirectional. */
  "P1.1/T2EX": "2",
  /** Physical pin 4: P1.3; bidirectional. */
  "P1.3": "4",
  /** Physical pin 5: P1.4; bidirectional. */
  "P1.4": "5",
  /** Physical pin 6: P1.5; bidirectional. */
  "P1.5": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.7; bidirectional. */
  "P1.7": "8",
  /** Physical pin 9: RST; input. */
  "RST": "9",
  /** Physical pin 10: P3.0/RXD; bidirectional. */
  "P3.0/RXD": "10",
  /** Physical pin 11: P3.1/TXD; bidirectional. */
  "P3.1/TXD": "11",
  /** Physical pin 12: P3.2/~{INT0}; bidirectional. */
  "P3.2/~{INT0}": "12",
  /** Physical pin 13: P3.3/~{INT1}; bidirectional. */
  "P3.3/~{INT1}": "13",
  /** Physical pin 14: P3.4/T0; bidirectional. */
  "P3.4/T0": "14",
  /** Physical pin 15: P3.5/T1; bidirectional. */
  "P3.5/T1": "15",
  /** Physical pin 16: P3.6/~{WR}; bidirectional. */
  "P3.6/~{WR}": "16",
  /** Physical pin 17: P3.7/~{RD}; bidirectional. */
  "P3.7/~{RD}": "17",
  /** Physical pin 18: XTAL2; output. */
  "XTAL2": "18",
  /** Physical pin 19: XTAL1; input. */
  "XTAL1": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
  /** Physical pin 21: P2.0/A8; bidirectional. */
  "P2.0/A8": "21",
  /** Physical pin 22: P2.1/A9; bidirectional. */
  "P2.1/A9": "22",
  /** Physical pin 23: P2.2/A10; bidirectional. */
  "P2.2/A10": "23",
  /** Physical pin 24: P2.3/A11; bidirectional. */
  "P2.3/A11": "24",
  /** Physical pin 25: P2.4/A12; bidirectional. */
  "P2.4/A12": "25",
  /** Physical pin 26: P2.5/A13; bidirectional. */
  "P2.5/A13": "26",
  /** Physical pin 27: P2.6/A14; bidirectional. */
  "P2.6/A14": "27",
  /** Physical pin 28: P2.7/A15; bidirectional. */
  "P2.7/A15": "28",
  /** Physical pin 29: ~{PSEN}; output. */
  "~{PSEN}": "29",
  /** Physical pin 30: ALE; output. */
  "ALE": "30",
  /** Physical pin 31: ~{EA}; input. */
  "~{EA}": "31",
  /** Physical pin 32: P0.7/AD7; bidirectional. */
  "P0.7/AD7": "32",
  /** Physical pin 33: P0.6/AD6; bidirectional. */
  "P0.6/AD6": "33",
  /** Physical pin 34: P0.5/AD5; bidirectional. */
  "P0.5/AD5": "34",
  /** Physical pin 35: P0.4/AD4; bidirectional. */
  "P0.4/AD4": "35",
  /** Physical pin 36: P0.3/AD3; bidirectional. */
  "P0.3/AD3": "36",
  /** Physical pin 37: P0.2/AD2; bidirectional. */
  "P0.2/AD2": "37",
  /** Physical pin 38: P0.1/AD1; bidirectional. */
  "P0.1/AD1": "38",
  /** Physical pin 39: P0.0/AD0; bidirectional. */
  "P0.0/AD0": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class P8751BH extends Component.withPins({
  /** Physical pin 3: P1.2; bidirectional. */
  "P1.2": "3",
  /** Physical pin 1: P1.0; bidirectional. */
  "P1.0": "1",
  /** Physical pin 2: P1.1; bidirectional. */
  "P1.1": "2",
  /** Physical pin 4: P1.3; bidirectional. */
  "P1.3": "4",
  /** Physical pin 5: P1.4; bidirectional. */
  "P1.4": "5",
  /** Physical pin 6: P1.5; bidirectional. */
  "P1.5": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.7; bidirectional. */
  "P1.7": "8",
  /** Physical pin 9: RST; input. */
  "RST": "9",
  /** Physical pin 10: P3.0/RXD; bidirectional. */
  "P3.0/RXD": "10",
  /** Physical pin 11: P3.1/TXD; bidirectional. */
  "P3.1/TXD": "11",
  /** Physical pin 12: P3.2/~{INT0}; bidirectional. */
  "P3.2/~{INT0}": "12",
  /** Physical pin 13: P3.3/~{INT1}; bidirectional. */
  "P3.3/~{INT1}": "13",
  /** Physical pin 14: P3.4/T0; bidirectional. */
  "P3.4/T0": "14",
  /** Physical pin 15: P3.5/T1; bidirectional. */
  "P3.5/T1": "15",
  /** Physical pin 16: P3.6/~{WR}; bidirectional. */
  "P3.6/~{WR}": "16",
  /** Physical pin 17: P3.7/~{RD}; bidirectional. */
  "P3.7/~{RD}": "17",
  /** Physical pin 18: XTAL2; output. */
  "XTAL2": "18",
  /** Physical pin 19: XTAL1; input. */
  "XTAL1": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
  /** Physical pin 21: P2.0/A8; bidirectional. */
  "P2.0/A8": "21",
  /** Physical pin 22: P2.1/A9; bidirectional. */
  "P2.1/A9": "22",
  /** Physical pin 23: P2.2/A10; bidirectional. */
  "P2.2/A10": "23",
  /** Physical pin 24: P2.3/A11; bidirectional. */
  "P2.3/A11": "24",
  /** Physical pin 25: P2.4/A12; bidirectional. */
  "P2.4/A12": "25",
  /** Physical pin 26: P2.5/A13; bidirectional. */
  "P2.5/A13": "26",
  /** Physical pin 27: P2.6/A14; bidirectional. */
  "P2.6/A14": "27",
  /** Physical pin 28: P2.7/A15; bidirectional. */
  "P2.7/A15": "28",
  /** Physical pin 29: ~{PSEN}; output. */
  "~{PSEN}": "29",
  /** Physical pin 30: ALE/~{PROG}; output. */
  "ALE/~{PROG}": "30",
  /** Physical pin 31: ~{EA}/VPP; input. */
  "~{EA}/VPP": "31",
  /** Physical pin 32: P0.7/AD7; bidirectional. */
  "P0.7/AD7": "32",
  /** Physical pin 33: P0.6/AD6; bidirectional. */
  "P0.6/AD6": "33",
  /** Physical pin 34: P0.5/AD5; bidirectional. */
  "P0.5/AD5": "34",
  /** Physical pin 35: P0.4/AD4; bidirectional. */
  "P0.4/AD4": "35",
  /** Physical pin 36: P0.3/AD3; bidirectional. */
  "P0.3/AD3": "36",
  /** Physical pin 37: P0.2/AD2; bidirectional. */
  "P0.2/AD2": "37",
  /** Physical pin 38: P0.1/AD1; bidirectional. */
  "P0.1/AD1": "38",
  /** Physical pin 39: P0.0/AD0; bidirectional. */
  "P0.0/AD0": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class P8752BH extends Component.withPins({
  /** Physical pin 3: P1.2; bidirectional. */
  "P1.2": "3",
  /** Physical pin 1: P1.0/T2; bidirectional. */
  "P1.0/T2": "1",
  /** Physical pin 2: P1.1/T2EX; bidirectional. */
  "P1.1/T2EX": "2",
  /** Physical pin 4: P1.3; bidirectional. */
  "P1.3": "4",
  /** Physical pin 5: P1.4; bidirectional. */
  "P1.4": "5",
  /** Physical pin 6: P1.5; bidirectional. */
  "P1.5": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.7; bidirectional. */
  "P1.7": "8",
  /** Physical pin 9: RST; input. */
  "RST": "9",
  /** Physical pin 10: P3.0/RXD; bidirectional. */
  "P3.0/RXD": "10",
  /** Physical pin 11: P3.1/TXD; bidirectional. */
  "P3.1/TXD": "11",
  /** Physical pin 12: P3.2/~{INT0}; bidirectional. */
  "P3.2/~{INT0}": "12",
  /** Physical pin 13: P3.3/~{INT1}; bidirectional. */
  "P3.3/~{INT1}": "13",
  /** Physical pin 14: P3.4/T0; bidirectional. */
  "P3.4/T0": "14",
  /** Physical pin 15: P3.5/T1; bidirectional. */
  "P3.5/T1": "15",
  /** Physical pin 16: P3.6/~{WR}; bidirectional. */
  "P3.6/~{WR}": "16",
  /** Physical pin 17: P3.7/~{RD}; bidirectional. */
  "P3.7/~{RD}": "17",
  /** Physical pin 18: XTAL2; output. */
  "XTAL2": "18",
  /** Physical pin 19: XTAL1; input. */
  "XTAL1": "19",
  /** Physical pin 20: VSS; power_in. */
  "VSS": "20",
  /** Physical pin 21: P2.0/A8; bidirectional. */
  "P2.0/A8": "21",
  /** Physical pin 22: P2.1/A9; bidirectional. */
  "P2.1/A9": "22",
  /** Physical pin 23: P2.2/A10; bidirectional. */
  "P2.2/A10": "23",
  /** Physical pin 24: P2.3/A11; bidirectional. */
  "P2.3/A11": "24",
  /** Physical pin 25: P2.4/A12; bidirectional. */
  "P2.4/A12": "25",
  /** Physical pin 26: P2.5/A13; bidirectional. */
  "P2.5/A13": "26",
  /** Physical pin 27: P2.6/A14; bidirectional. */
  "P2.6/A14": "27",
  /** Physical pin 28: P2.7/A15; bidirectional. */
  "P2.7/A15": "28",
  /** Physical pin 29: ~{PSEN}; output. */
  "~{PSEN}": "29",
  /** Physical pin 30: ALE/~{PROG}; output. */
  "ALE/~{PROG}": "30",
  /** Physical pin 31: ~{EA}/VPP; input. */
  "~{EA}/VPP": "31",
  /** Physical pin 32: P0.7/AD7; bidirectional. */
  "P0.7/AD7": "32",
  /** Physical pin 33: P0.6/AD6; bidirectional. */
  "P0.6/AD6": "33",
  /** Physical pin 34: P0.5/AD5; bidirectional. */
  "P0.5/AD5": "34",
  /** Physical pin 35: P0.4/AD4; bidirectional. */
  "P0.4/AD4": "35",
  /** Physical pin 36: P0.3/AD3; bidirectional. */
  "P0.3/AD3": "36",
  /** Physical pin 37: P0.2/AD2; bidirectional. */
  "P0.2/AD2": "37",
  /** Physical pin 38: P0.1/AD1; bidirectional. */
  "P0.1/AD1": "38",
  /** Physical pin 39: P0.0/AD0; bidirectional. */
  "P0.0/AD0": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "MCU_Intel:P8752BH";
  override referencePrefix = "U";
}

