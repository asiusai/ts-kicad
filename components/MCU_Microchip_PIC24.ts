// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 64K Flash, 8KB SRAM, LCD controller, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC24:PIC24FJ64GA306-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/30009996g.pdf
 * Keywords: Flash-Based 16-Bit Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC24FJ64GA306_xPT extends Component.withPins({
  /** Physical pin 1: RE5; bidirectional. */
  "RE5": "1",
  /** Physical pin 2: RE6; bidirectional. */
  "RE6": "2",
  /** Physical pin 3: RE7; bidirectional. */
  "RE7": "3",
  /** Physical pin 4: RG6; bidirectional. */
  "RG6": "4",
  /** Physical pin 5: RG7; bidirectional. */
  "RG7": "5",
  /** Physical pin 6: RG8; bidirectional. */
  "RG8": "6",
  /** Physical pin 7: ~{MCLR}; input. */
  "~{MCLR}": "7",
  /** Physical pin 8: RG9; bidirectional. */
  "RG9": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: RB5/PGEC3; bidirectional. */
  "RB5/PGEC3": "11",
  /** Physical pin 12: RB4/PGED3; bidirectional. */
  "RB4/PGED3": "12",
  /** Physical pin 13: RB3; bidirectional. */
  "RB3": "13",
  /** Physical pin 14: RB2; bidirectional. */
  "RB2": "14",
  /** Physical pin 15: RB1/PGEC1; bidirectional. */
  "RB1/PGEC1": "15",
  /** Physical pin 16: RB0/PGED1; bidirectional. */
  "RB0/PGED1": "16",
  /** Physical pin 17: RB6/PGEC2; bidirectional. */
  "RB6/PGEC2": "17",
  /** Physical pin 18: RB7/PGED2; bidirectional. */
  "RB7/PGED2": "18",
  /** Physical pin 19: AVDD; power_in. */
  "AVDD": "19",
  /** Physical pin 20: AVSS; power_in. */
  "AVSS": "20",
  /** Physical pin 21: RB8; bidirectional. */
  "RB8": "21",
  /** Physical pin 22: RB9; bidirectional. */
  "RB9": "22",
  /** Physical pin 23: RB10; bidirectional. */
  "RB10": "23",
  /** Physical pin 24: RB11; bidirectional. */
  "RB11": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
  /** Physical pin 26: VDD; passive. */
  "VDD_26": "26",
  /** Physical pin 27: RB12; bidirectional. */
  "RB12": "27",
  /** Physical pin 28: RB13; bidirectional. */
  "RB13": "28",
  /** Physical pin 29: RB14; bidirectional. */
  "RB14": "29",
  /** Physical pin 30: RB15; bidirectional. */
  "RB15": "30",
  /** Physical pin 31: RF4; bidirectional. */
  "RF4": "31",
  /** Physical pin 32: RF5; bidirectional. */
  "RF5": "32",
  /** Physical pin 33: RF3; bidirectional. */
  "RF3": "33",
  /** Physical pin 34: RF2; bidirectional. */
  "RF2": "34",
  /** Physical pin 35: RF6; bidirectional. */
  "RF6": "35",
  /** Physical pin 36: RG3; bidirectional. */
  "RG3": "36",
  /** Physical pin 37: RG2; bidirectional. */
  "RG2": "37",
  /** Physical pin 38: VDD; passive. */
  "VDD_38": "38",
  /** Physical pin 39: RC12/CLKI/OSCI; bidirectional. */
  "RC12/CLKI/OSCI": "39",
  /** Physical pin 40: RC15/CLKO/OSCO; bidirectional. */
  "RC15/CLKO/OSCO": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: RD8; bidirectional. */
  "RD8": "42",
  /** Physical pin 43: RD9; bidirectional. */
  "RD9": "43",
  /** Physical pin 44: RD10; bidirectional. */
  "RD10": "44",
  /** Physical pin 45: RD11; bidirectional. */
  "RD11": "45",
  /** Physical pin 46: RD0; bidirectional. */
  "RD0": "46",
  /** Physical pin 47: RC13/SOSCI; bidirectional. */
  "RC13/SOSCI": "47",
  /** Physical pin 48: RC14/SCKLI/SOSCO; bidirectional. */
  "RC14/SCKLI/SOSCO": "48",
  /** Physical pin 49: RD1; bidirectional. */
  "RD1": "49",
  /** Physical pin 50: RD2; bidirectional. */
  "RD2": "50",
  /** Physical pin 51: RD3; bidirectional. */
  "RD3": "51",
  /** Physical pin 52: RD4; bidirectional. */
  "RD4": "52",
  /** Physical pin 53: RD5; bidirectional. */
  "RD5": "53",
  /** Physical pin 54: RD6; bidirectional. */
  "RD6": "54",
  /** Physical pin 55: RD7; bidirectional. */
  "RD7": "55",
  /** Physical pin 56: VCAP/VDDCORE; passive. */
  "VCAP/VDDCORE": "56",
  /** Physical pin 57: VBAT; power_in. */
  "VBAT": "57",
  /** Physical pin 58: RF0; bidirectional. */
  "RF0": "58",
  /** Physical pin 59: RF1; bidirectional. */
  "RF1": "59",
  /** Physical pin 60: RE0; bidirectional. */
  "RE0": "60",
  /** Physical pin 61: RE1; bidirectional. */
  "RE1": "61",
  /** Physical pin 62: RE2; bidirectional. */
  "RE2": "62",
  /** Physical pin 63: RE3; bidirectional. */
  "RE3": "63",
  /** Physical pin 64: RE4; bidirectional. */
  "RE4": "64",
}) {
  override schema = "MCU_Microchip_PIC24:PIC24FJ64GA306-xPT";
  override referencePrefix = "U";
}

/**
 * 128K Flash, 8KB SRAM, LCD controller, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC24:PIC24FJ128GA306-xMR`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*EP7.15x7.15mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/30009996g.pdf
 * Keywords: Flash-Based 16-Bit Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC24FJ128GA306_xMR extends Component.withPins({
  /** Physical pin 1: RE5; bidirectional. */
  "RE5": "1",
  /** Physical pin 2: RE6; bidirectional. */
  "RE6": "2",
  /** Physical pin 3: RE7; bidirectional. */
  "RE7": "3",
  /** Physical pin 4: RG6; bidirectional. */
  "RG6": "4",
  /** Physical pin 5: RG7; bidirectional. */
  "RG7": "5",
  /** Physical pin 6: RG8; bidirectional. */
  "RG8": "6",
  /** Physical pin 7: ~{MCLR}; input. */
  "~{MCLR}": "7",
  /** Physical pin 8: RG9; bidirectional. */
  "RG9": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: RB5/PGEC3; bidirectional. */
  "RB5/PGEC3": "11",
  /** Physical pin 12: RB4/PGED3; bidirectional. */
  "RB4/PGED3": "12",
  /** Physical pin 13: RB3; bidirectional. */
  "RB3": "13",
  /** Physical pin 14: RB2; bidirectional. */
  "RB2": "14",
  /** Physical pin 15: RB1/PGEC1; bidirectional. */
  "RB1/PGEC1": "15",
  /** Physical pin 16: RB0/PGED1; bidirectional. */
  "RB0/PGED1": "16",
  /** Physical pin 17: RB6/PGEC2; bidirectional. */
  "RB6/PGEC2": "17",
  /** Physical pin 18: RB7/PGED2; bidirectional. */
  "RB7/PGED2": "18",
  /** Physical pin 19: AVDD; power_in. */
  "AVDD": "19",
  /** Physical pin 20: AVSS; power_in. */
  "AVSS": "20",
  /** Physical pin 21: RB8; bidirectional. */
  "RB8": "21",
  /** Physical pin 22: RB9; bidirectional. */
  "RB9": "22",
  /** Physical pin 23: RB10; bidirectional. */
  "RB10": "23",
  /** Physical pin 24: RB11; bidirectional. */
  "RB11": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
  /** Physical pin 26: VDD; passive. */
  "VDD_26": "26",
  /** Physical pin 27: RB12; bidirectional. */
  "RB12": "27",
  /** Physical pin 28: RB13; bidirectional. */
  "RB13": "28",
  /** Physical pin 29: RB14; bidirectional. */
  "RB14": "29",
  /** Physical pin 30: RB15; bidirectional. */
  "RB15": "30",
  /** Physical pin 31: RF4; bidirectional. */
  "RF4": "31",
  /** Physical pin 32: RF5; bidirectional. */
  "RF5": "32",
  /** Physical pin 33: RF3; bidirectional. */
  "RF3": "33",
  /** Physical pin 34: RF2; bidirectional. */
  "RF2": "34",
  /** Physical pin 35: RF6; bidirectional. */
  "RF6": "35",
  /** Physical pin 36: RG3; bidirectional. */
  "RG3": "36",
  /** Physical pin 37: RG2; bidirectional. */
  "RG2": "37",
  /** Physical pin 38: VDD; passive. */
  "VDD_38": "38",
  /** Physical pin 39: RC12/CLKI/OSCI; bidirectional. */
  "RC12/CLKI/OSCI": "39",
  /** Physical pin 40: RC15/CLKO/OSCO; bidirectional. */
  "RC15/CLKO/OSCO": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: RD8; bidirectional. */
  "RD8": "42",
  /** Physical pin 43: RD9; bidirectional. */
  "RD9": "43",
  /** Physical pin 44: RD10; bidirectional. */
  "RD10": "44",
  /** Physical pin 45: RD11; bidirectional. */
  "RD11": "45",
  /** Physical pin 46: RD0; bidirectional. */
  "RD0": "46",
  /** Physical pin 47: RC13/SOSCI; bidirectional. */
  "RC13/SOSCI": "47",
  /** Physical pin 48: RC14/SCKLI/SOSCO; bidirectional. */
  "RC14/SCKLI/SOSCO": "48",
  /** Physical pin 49: RD1; bidirectional. */
  "RD1": "49",
  /** Physical pin 50: RD2; bidirectional. */
  "RD2": "50",
  /** Physical pin 51: RD3; bidirectional. */
  "RD3": "51",
  /** Physical pin 52: RD4; bidirectional. */
  "RD4": "52",
  /** Physical pin 53: RD5; bidirectional. */
  "RD5": "53",
  /** Physical pin 54: RD6; bidirectional. */
  "RD6": "54",
  /** Physical pin 55: RD7; bidirectional. */
  "RD7": "55",
  /** Physical pin 56: VCAP/VDDCORE; passive. */
  "VCAP/VDDCORE": "56",
  /** Physical pin 57: VBAT; power_in. */
  "VBAT": "57",
  /** Physical pin 58: RF0; bidirectional. */
  "RF0": "58",
  /** Physical pin 59: RF1; bidirectional. */
  "RF1": "59",
  /** Physical pin 60: RE0; bidirectional. */
  "RE0": "60",
  /** Physical pin 61: RE1; bidirectional. */
  "RE1": "61",
  /** Physical pin 62: RE2; bidirectional. */
  "RE2": "62",
  /** Physical pin 63: RE3; bidirectional. */
  "RE3": "63",
  /** Physical pin 64: RE4; bidirectional. */
  "RE4": "64",
}) {
  override schema = "MCU_Microchip_PIC24:PIC24FJ128GA306-xMR";
  override referencePrefix = "U";
}

/**
 * 128K Flash, 8KB SRAM, LCD controller, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC24:PIC24FJ128GA306-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/30009996g.pdf
 * Keywords: Flash-Based 16-Bit Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC24FJ128GA306_xPT extends Component.withPins({
  /** Physical pin 1: RE5; bidirectional. */
  "RE5": "1",
  /** Physical pin 2: RE6; bidirectional. */
  "RE6": "2",
  /** Physical pin 3: RE7; bidirectional. */
  "RE7": "3",
  /** Physical pin 4: RG6; bidirectional. */
  "RG6": "4",
  /** Physical pin 5: RG7; bidirectional. */
  "RG7": "5",
  /** Physical pin 6: RG8; bidirectional. */
  "RG8": "6",
  /** Physical pin 7: ~{MCLR}; input. */
  "~{MCLR}": "7",
  /** Physical pin 8: RG9; bidirectional. */
  "RG9": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: RB5/PGEC3; bidirectional. */
  "RB5/PGEC3": "11",
  /** Physical pin 12: RB4/PGED3; bidirectional. */
  "RB4/PGED3": "12",
  /** Physical pin 13: RB3; bidirectional. */
  "RB3": "13",
  /** Physical pin 14: RB2; bidirectional. */
  "RB2": "14",
  /** Physical pin 15: RB1/PGEC1; bidirectional. */
  "RB1/PGEC1": "15",
  /** Physical pin 16: RB0/PGED1; bidirectional. */
  "RB0/PGED1": "16",
  /** Physical pin 17: RB6/PGEC2; bidirectional. */
  "RB6/PGEC2": "17",
  /** Physical pin 18: RB7/PGED2; bidirectional. */
  "RB7/PGED2": "18",
  /** Physical pin 19: AVDD; power_in. */
  "AVDD": "19",
  /** Physical pin 20: AVSS; power_in. */
  "AVSS": "20",
  /** Physical pin 21: RB8; bidirectional. */
  "RB8": "21",
  /** Physical pin 22: RB9; bidirectional. */
  "RB9": "22",
  /** Physical pin 23: RB10; bidirectional. */
  "RB10": "23",
  /** Physical pin 24: RB11; bidirectional. */
  "RB11": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
  /** Physical pin 26: VDD; passive. */
  "VDD_26": "26",
  /** Physical pin 27: RB12; bidirectional. */
  "RB12": "27",
  /** Physical pin 28: RB13; bidirectional. */
  "RB13": "28",
  /** Physical pin 29: RB14; bidirectional. */
  "RB14": "29",
  /** Physical pin 30: RB15; bidirectional. */
  "RB15": "30",
  /** Physical pin 31: RF4; bidirectional. */
  "RF4": "31",
  /** Physical pin 32: RF5; bidirectional. */
  "RF5": "32",
  /** Physical pin 33: RF3; bidirectional. */
  "RF3": "33",
  /** Physical pin 34: RF2; bidirectional. */
  "RF2": "34",
  /** Physical pin 35: RF6; bidirectional. */
  "RF6": "35",
  /** Physical pin 36: RG3; bidirectional. */
  "RG3": "36",
  /** Physical pin 37: RG2; bidirectional. */
  "RG2": "37",
  /** Physical pin 38: VDD; passive. */
  "VDD_38": "38",
  /** Physical pin 39: RC12/CLKI/OSCI; bidirectional. */
  "RC12/CLKI/OSCI": "39",
  /** Physical pin 40: RC15/CLKO/OSCO; bidirectional. */
  "RC15/CLKO/OSCO": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: RD8; bidirectional. */
  "RD8": "42",
  /** Physical pin 43: RD9; bidirectional. */
  "RD9": "43",
  /** Physical pin 44: RD10; bidirectional. */
  "RD10": "44",
  /** Physical pin 45: RD11; bidirectional. */
  "RD11": "45",
  /** Physical pin 46: RD0; bidirectional. */
  "RD0": "46",
  /** Physical pin 47: RC13/SOSCI; bidirectional. */
  "RC13/SOSCI": "47",
  /** Physical pin 48: RC14/SCKLI/SOSCO; bidirectional. */
  "RC14/SCKLI/SOSCO": "48",
  /** Physical pin 49: RD1; bidirectional. */
  "RD1": "49",
  /** Physical pin 50: RD2; bidirectional. */
  "RD2": "50",
  /** Physical pin 51: RD3; bidirectional. */
  "RD3": "51",
  /** Physical pin 52: RD4; bidirectional. */
  "RD4": "52",
  /** Physical pin 53: RD5; bidirectional. */
  "RD5": "53",
  /** Physical pin 54: RD6; bidirectional. */
  "RD6": "54",
  /** Physical pin 55: RD7; bidirectional. */
  "RD7": "55",
  /** Physical pin 56: VCAP/VDDCORE; passive. */
  "VCAP/VDDCORE": "56",
  /** Physical pin 57: VBAT; power_in. */
  "VBAT": "57",
  /** Physical pin 58: RF0; bidirectional. */
  "RF0": "58",
  /** Physical pin 59: RF1; bidirectional. */
  "RF1": "59",
  /** Physical pin 60: RE0; bidirectional. */
  "RE0": "60",
  /** Physical pin 61: RE1; bidirectional. */
  "RE1": "61",
  /** Physical pin 62: RE2; bidirectional. */
  "RE2": "62",
  /** Physical pin 63: RE3; bidirectional. */
  "RE3": "63",
  /** Physical pin 64: RE4; bidirectional. */
  "RE4": "64",
}) {
  override schema = "MCU_Microchip_PIC24:PIC24FJ128GA306-xPT";
  override referencePrefix = "U";
}

/**
 * 256K Flash, 96KB SRAM, Graphic controller, USB, BGA-121
 *
 * KiCad symbol: `MCU_Microchip_PIC24:PIC24FJ256DA210-xBG`. Reference prefix: `U`.
 * Footprint filters: XBGA*10x10mm*Layout11x11*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39969b.pdf
 * Keywords: Flash-Based 16-Bit Microcontroller.
 * Default footprint: Package_BGA:XBGA-121_10x10mm_Layout11x11_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC24FJ256DA210_xBG extends Component.withPins({
  /** Physical pin A1: RE4; bidirectional. */
  "RE4": "A1",
  /** Physical pin A2: RE3; bidirectional. */
  "RE3": "A2",
  /** Physical pin A3: RG13; bidirectional. */
  "RG13": "A3",
  /** Physical pin A4: RE0; bidirectional. */
  "RE0": "A4",
  /** Physical pin A5: RG0; bidirectional. */
  "RG0": "A5",
  /** Physical pin A6: RF1; bidirectional. */
  "RF1": "A6",
  /** Physical pin A7: ENVREG; input. */
  "ENVREG": "A7",
  /** Physical pin A8: N/C; no_connect. */
  "N/C_A8": "A8",
  /** Physical pin A9: RD12; bidirectional. */
  "RD12": "A9",
  /** Physical pin A10: RD2; bidirectional. */
  "RD2": "A10",
  /** Physical pin A11: RD1; bidirectional. */
  "RD1": "A11",
  /** Physical pin B1: N/C; no_connect. */
  "N/C_B1": "B1",
  /** Physical pin B2: RG15; bidirectional. */
  "RG15": "B2",
  /** Physical pin B3: RE2; bidirectional. */
  "RE2": "B3",
  /** Physical pin B4: RE1; bidirectional. */
  "RE1": "B4",
  /** Physical pin B5: RA7; bidirectional. */
  "RA7": "B5",
  /** Physical pin B6: RF0; bidirectional. */
  "RF0": "B6",
  /** Physical pin B7: VCAP; passive. */
  "VCAP": "B7",
  /** Physical pin B8: RD5; bidirectional. */
  "RD5": "B8",
  /** Physical pin B9: RD3; bidirectional. */
  "RD3": "B9",
  /** Physical pin B10: VSS; passive. */
  "VSS_B10": "B10",
  /** Physical pin B11: RC14; bidirectional. */
  "RC14": "B11",
  /** Physical pin C1: RE6; bidirectional. */
  "RE6": "C1",
  /** Physical pin C2: VDD; power_in. */
  "VDD_C2": "C2",
  /** Physical pin C3: RG12; bidirectional. */
  "RG12": "C3",
  /** Physical pin C4: RG14; bidirectional. */
  "RG14": "C4",
  /** Physical pin C5: RA6; bidirectional. */
  "RA6": "C5",
  /** Physical pin C6: N/C; no_connect. */
  "N/C_C6": "C6",
  /** Physical pin C7: RD7; bidirectional. */
  "RD7": "C7",
  /** Physical pin C8: RD4; bidirectional. */
  "RD4": "C8",
  /** Physical pin C9: VDD; power_in. */
  "VDD_C9": "C9",
  /** Physical pin C10: RC13; bidirectional. */
  "RC13": "C10",
  /** Physical pin C11: RD11; bidirectional. */
  "RD11": "C11",
  /** Physical pin D1: RC1; bidirectional. */
  "RC1": "D1",
  /** Physical pin D2: RE7; bidirectional. */
  "RE7": "D2",
  /** Physical pin D3: RE5; bidirectional. */
  "RE5": "D3",
  /** Physical pin D4: VSS; passive. */
  "VSS_D4": "D4",
  /** Physical pin D5: VSS; passive. */
  "VSS_D5": "D5",
  /** Physical pin D6: N/C; no_connect. */
  "N/C_D6": "D6",
  /** Physical pin D7: RD6; bidirectional. */
  "RD6": "D7",
  /** Physical pin D8: RD13; bidirectional. */
  "RD13": "D8",
  /** Physical pin D9: RD0; bidirectional. */
  "RD0": "D9",
  /** Physical pin D10: N/C; no_connect. */
  "N/C_D10": "D10",
  /** Physical pin D11: RD10; bidirectional. */
  "RD10": "D11",
  /** Physical pin E1: RC4; bidirectional. */
  "RC4": "E1",
  /** Physical pin E2: RC3; bidirectional. */
  "RC3": "E2",
  /** Physical pin E3: RG6; bidirectional. */
  "RG6": "E3",
  /** Physical pin E4: RC2; bidirectional. */
  "RC2": "E4",
  /** Physical pin E5: VDD; power_in. */
  "VDD_E5": "E5",
  /** Physical pin E6: RG1; bidirectional. */
  "RG1": "E6",
  /** Physical pin E7: N/C; no_connect. */
  "N/C_E7": "E7",
  /** Physical pin E8: RA15; bidirectional. */
  "RA15": "E8",
  /** Physical pin E9: RD8; bidirectional. */
  "RD8": "E9",
  /** Physical pin E10: RD9; bidirectional. */
  "RD9": "E10",
  /** Physical pin E11: RA14; bidirectional. */
  "RA14": "E11",
  /** Physical pin F1: ~{MCLR}; input. */
  "~{MCLR}": "F1",
  /** Physical pin F2: RG8; bidirectional. */
  "RG8": "F2",
  /** Physical pin F3: RG9; bidirectional. */
  "RG9": "F3",
  /** Physical pin F4: RG7; bidirectional. */
  "RG7": "F4",
  /** Physical pin F5: VSS; passive. */
  "VSS_F5": "F5",
  /** Physical pin F6: N/C; no_connect. */
  "N/C_F6": "F6",
  /** Physical pin F7: N/C; no_connect. */
  "N/C_F7": "F7",
  /** Physical pin F8: VDD; power_in. */
  "VDD_F8": "F8",
  /** Physical pin F9: RC12/OSCI; bidirectional. */
  "RC12/OSCI": "F9",
  /** Physical pin F10: VSS; power_in. */
  "VSS_F10": "F10",
  /** Physical pin F11: RC15/OSCO; bidirectional. */
  "RC15/OSCO": "F11",
  /** Physical pin G1: RE8; bidirectional. */
  "RE8": "G1",
  /** Physical pin G2: RE9; bidirectional. */
  "RE9": "G2",
  /** Physical pin G3: RA0; bidirectional. */
  "RA0": "G3",
  /** Physical pin G4: N/C; no_connect. */
  "N/C_G4": "G4",
  /** Physical pin G5: VDD; power_in. */
  "VDD_G5": "G5",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: N/C; no_connect. */
  "N/C_G8": "G8",
  /** Physical pin G9: RA5; bidirectional. */
  "RA5": "G9",
  /** Physical pin G10: RA3; bidirectional. */
  "RA3": "G10",
  /** Physical pin G11: RA4; bidirectional. */
  "RA4": "G11",
  /** Physical pin H1: RB5/PGEC3; bidirectional. */
  "RB5/PGEC3": "H1",
  /** Physical pin H2: RB4/PGED3; bidirectional. */
  "RB4/PGED3": "H2",
  /** Physical pin H3: VSS; passive. */
  "VSS_H3": "H3",
  /** Physical pin H4: VDD; power_in. */
  "VDD_H4": "H4",
  /** Physical pin H5: N/C; no_connect. */
  "N/C_H5": "H5",
  /** Physical pin H6: VDD; power_in. */
  "VDD_H6": "H6",
  /** Physical pin H7: N/C; no_connect. */
  "N/C_H7": "H7",
  /** Physical pin H8: RF7; bidirectional. */
  "RF7": "H8",
  /** Physical pin H9: VUSB; bidirectional. */
  "VUSB": "H9",
  /** Physical pin H10: D+/RG2; bidirectional. */
  "D+/RG2": "H10",
  /** Physical pin H11: RA2; bidirectional. */
  "RA2": "H11",
  /** Physical pin J1: RB3; bidirectional. */
  "RB3": "J1",
  /** Physical pin J2: RB2; bidirectional. */
  "RB2": "J2",
  /** Physical pin J3: RB7/PGED2; bidirectional. */
  "RB7/PGED2": "J3",
  /** Physical pin J4: AVDD; power_in. */
  "AVDD": "J4",
  /** Physical pin J5: RB11; bidirectional. */
  "RB11": "J5",
  /** Physical pin J6: RA1; bidirectional. */
  "RA1": "J6",
  /** Physical pin J7: RB12; bidirectional. */
  "RB12": "J7",
  /** Physical pin J8: N/C; no_connect. */
  "N/C_J8": "J8",
  /** Physical pin J9: N/C; no_connect. */
  "N/C_J9": "J9",
  /** Physical pin J10: RF8; bidirectional. */
  "RF8": "J10",
  /** Physical pin J11: D-/RG3; bidirectional. */
  "D-/RG3": "J11",
  /** Physical pin K1: RB1/PGEC1; bidirectional. */
  "RB1/PGEC1": "K1",
  /** Physical pin K2: RB0/PGED1; bidirectional. */
  "RB0/PGED1": "K2",
  /** Physical pin K3: RA10; bidirectional. */
  "RA10": "K3",
  /** Physical pin K4: RB8; bidirectional. */
  "RB8": "K4",
  /** Physical pin K5: N/C; no_connect. */
  "N/C_K5": "K5",
  /** Physical pin K6: RF12; bidirectional. */
  "RF12": "K6",
  /** Physical pin K7: RB14; bidirectional. */
  "RB14": "K7",
  /** Physical pin K8: VDD; power_in. */
  "VDD_K8": "K8",
  /** Physical pin K9: RD15; bidirectional. */
  "RD15": "K9",
  /** Physical pin K10: RF3; bidirectional. */
  "RF3": "K10",
  /** Physical pin K11: RF2; bidirectional. */
  "RF2": "K11",
  /** Physical pin L1: RB6/PGEC2; bidirectional. */
  "RB6/PGEC2": "L1",
  /** Physical pin L2: RA9; bidirectional. */
  "RA9": "L2",
  /** Physical pin L3: AVSS; power_in. */
  "AVSS": "L3",
  /** Physical pin L4: RB9; bidirectional. */
  "RB9": "L4",
  /** Physical pin L5: RB10; bidirectional. */
  "RB10": "L5",
  /** Physical pin L6: RF13; bidirectional. */
  "RF13": "L6",
  /** Physical pin L7: RB13; bidirectional. */
  "RB13": "L7",
  /** Physical pin L8: RB15; bidirectional. */
  "RB15": "L8",
  /** Physical pin L9: RD14; bidirectional. */
  "RD14": "L9",
  /** Physical pin L10: RF4; bidirectional. */
  "RF4": "L10",
  /** Physical pin L11: RF5; bidirectional. */
  "RF5": "L11",
}) {
  override schema = "MCU_Microchip_PIC24:PIC24FJ256DA210-xBG";
  override referencePrefix = "U";
}

/**
 * 256K Flash, 96KB SRAM, Graphic controller, USB, TQFP-100
 *
 * KiCad symbol: `MCU_Microchip_PIC24:PIC24FJ256DA210-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39969b.pdf
 * Keywords: Flash-Based 16-Bit Microcontroller.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC24FJ256DA210_xPT extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: RE5; bidirectional. */
  "RE5": "3",
  /** Physical pin 4: RE6; bidirectional. */
  "RE6": "4",
  /** Physical pin 5: RE7; bidirectional. */
  "RE7": "5",
  /** Physical pin 6: RC1; bidirectional. */
  "RC1": "6",
  /** Physical pin 7: RC2; bidirectional. */
  "RC2": "7",
  /** Physical pin 8: RC3; bidirectional. */
  "RC3": "8",
  /** Physical pin 9: RC4; bidirectional. */
  "RC4": "9",
  /** Physical pin 10: RG6; bidirectional. */
  "RG6": "10",
  /** Physical pin 11: RG7; bidirectional. */
  "RG7": "11",
  /** Physical pin 12: RG8; bidirectional. */
  "RG8": "12",
  /** Physical pin 13: ~{MCLR}; input. */
  "~{MCLR}": "13",
  /** Physical pin 14: RG9; bidirectional. */
  "RG9": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD_16": "16",
  /** Physical pin 17: RA0; bidirectional. */
  "RA0": "17",
  /** Physical pin 18: RE8; bidirectional. */
  "RE8": "18",
  /** Physical pin 19: RE9; bidirectional. */
  "RE9": "19",
  /** Physical pin 20: RB5/PGEC3; bidirectional. */
  "RB5/PGEC3": "20",
  /** Physical pin 21: RB4/PGED3/USBOEN; bidirectional. */
  "RB4/PGED3/USBOEN": "21",
  /** Physical pin 22: RB3; bidirectional. */
  "RB3": "22",
  /** Physical pin 23: RB2; bidirectional. */
  "RB2": "23",
  /** Physical pin 24: RB1/PGEC1; bidirectional. */
  "RB1/PGEC1": "24",
  /** Physical pin 25: RB0/PGED1; bidirectional. */
  "RB0/PGED1": "25",
  /** Physical pin 26: RB6/PGEC2; bidirectional. */
  "RB6/PGEC2": "26",
  /** Physical pin 27: RB7/PGED2; bidirectional. */
  "RB7/PGED2": "27",
  /** Physical pin 28: RA9; bidirectional. */
  "RA9": "28",
  /** Physical pin 29: RA10; bidirectional. */
  "RA10": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: RB8; bidirectional. */
  "RB8": "32",
  /** Physical pin 33: RB9; bidirectional. */
  "RB9": "33",
  /** Physical pin 34: RB10; bidirectional. */
  "RB10": "34",
  /** Physical pin 35: RB11; bidirectional. */
  "RB11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: RA1; bidirectional. */
  "RA1": "38",
  /** Physical pin 39: RF31; bidirectional. */
  "RF31": "39",
  /** Physical pin 40: RF12; bidirectional. */
  "RF12": "40",
  /** Physical pin 41: RB12; bidirectional. */
  "RB12": "41",
  /** Physical pin 42: RB13; bidirectional. */
  "RB13": "42",
  /** Physical pin 43: RB14; bidirectional. */
  "RB14": "43",
  /** Physical pin 44: RB15; bidirectional. */
  "RB15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: RD14; bidirectional. */
  "RD14": "47",
  /** Physical pin 48: RD15; bidirectional. */
  "RD15": "48",
  /** Physical pin 49: RF4; bidirectional. */
  "RF4": "49",
  /** Physical pin 50: RF5; bidirectional. */
  "RF5": "50",
  /** Physical pin 51: USBID/RF3; bidirectional. */
  "USBID/RF3": "51",
  /** Physical pin 52: RF2; bidirectional. */
  "RF2": "52",
  /** Physical pin 53: RF8; bidirectional. */
  "RF8": "53",
  /** Physical pin 54: RF7; bidirectional. */
  "RF7": "54",
  /** Physical pin 55: VUSB; bidirectional. */
  "VUSB": "55",
  /** Physical pin 56: D-/RG3; bidirectional. */
  "D-/RG3": "56",
  /** Physical pin 57: D+/RG2; bidirectional. */
  "D+/RG2": "57",
  /** Physical pin 58: RA2; bidirectional. */
  "RA2": "58",
  /** Physical pin 59: RA3; bidirectional. */
  "RA3": "59",
  /** Physical pin 60: RA4; bidirectional. */
  "RA4": "60",
  /** Physical pin 61: RA5; bidirectional. */
  "RA5": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: RC12/OSCI; bidirectional. */
  "RC12/OSCI": "63",
  /** Physical pin 64: RC15/OSCO; bidirectional. */
  "RC15/OSCO": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: RA14; bidirectional. */
  "RA14": "66",
  /** Physical pin 67: RA15; bidirectional. */
  "RA15": "67",
  /** Physical pin 68: RD8; bidirectional. */
  "RD8": "68",
  /** Physical pin 69: RD9; bidirectional. */
  "RD9": "69",
  /** Physical pin 70: RD10; bidirectional. */
  "RD10": "70",
  /** Physical pin 71: RD11; bidirectional. */
  "RD11": "71",
  /** Physical pin 72: RD0; bidirectional. */
  "RD0": "72",
  /** Physical pin 73: RC13; bidirectional. */
  "RC13": "73",
  /** Physical pin 74: RC14; bidirectional. */
  "RC14": "74",
  /** Physical pin 75: VSS; passive. */
  "VSS_75": "75",
  /** Physical pin 76: RD1; bidirectional. */
  "RD1": "76",
  /** Physical pin 77: RD2; bidirectional. */
  "RD2": "77",
  /** Physical pin 78: RD3; bidirectional. */
  "RD3": "78",
  /** Physical pin 79: RD12; bidirectional. */
  "RD12": "79",
  /** Physical pin 80: RD13; bidirectional. */
  "RD13": "80",
  /** Physical pin 81: RD4; bidirectional. */
  "RD4": "81",
  /** Physical pin 82: RD5; bidirectional. */
  "RD5": "82",
  /** Physical pin 83: RD6; bidirectional. */
  "RD6": "83",
  /** Physical pin 84: RD7; bidirectional. */
  "RD7": "84",
  /** Physical pin 85: VCAP; passive. */
  "VCAP": "85",
  /** Physical pin 86: ENVREG; input. */
  "ENVREG": "86",
  /** Physical pin 87: RF0; bidirectional. */
  "RF0": "87",
  /** Physical pin 88: RF1; bidirectional. */
  "RF1": "88",
  /** Physical pin 89: RG1; bidirectional. */
  "RG1": "89",
  /** Physical pin 90: RG0; bidirectional. */
  "RG0": "90",
  /** Physical pin 91: RA6; bidirectional. */
  "RA6": "91",
  /** Physical pin 92: RA7; bidirectional. */
  "RA7": "92",
  /** Physical pin 93: RE0; bidirectional. */
  "RE0": "93",
  /** Physical pin 94: RE1; bidirectional. */
  "RE1": "94",
  /** Physical pin 95: RG14; bidirectional. */
  "RG14": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13; bidirectional. */
  "RG13": "97",
  /** Physical pin 98: RE2; bidirectional. */
  "RE2": "98",
  /** Physical pin 99: RE3; bidirectional. */
  "RE3": "99",
  /** Physical pin 100: RE4; bidirectional. */
  "RE4": "100",
}) {
  override schema = "MCU_Microchip_PIC24:PIC24FJ256DA210-xPT";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 8KB SRAM, LCD controller, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC24:PIC24FJ64GA306-xMR`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*EP7.15x7.15mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/30009996g.pdf
 * Keywords: Flash-Based 16-Bit Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC24FJ64GA306_xMR extends Component.withPins({
  /** Physical pin 1: RE5; bidirectional. */
  "RE5": "1",
  /** Physical pin 2: RE6; bidirectional. */
  "RE6": "2",
  /** Physical pin 3: RE7; bidirectional. */
  "RE7": "3",
  /** Physical pin 4: RG6; bidirectional. */
  "RG6": "4",
  /** Physical pin 5: RG7; bidirectional. */
  "RG7": "5",
  /** Physical pin 6: RG8; bidirectional. */
  "RG8": "6",
  /** Physical pin 7: ~{MCLR}; input. */
  "~{MCLR}": "7",
  /** Physical pin 8: RG9; bidirectional. */
  "RG9": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: RB5/PGEC3; bidirectional. */
  "RB5/PGEC3": "11",
  /** Physical pin 12: RB4/PGED3; bidirectional. */
  "RB4/PGED3": "12",
  /** Physical pin 13: RB3; bidirectional. */
  "RB3": "13",
  /** Physical pin 14: RB2; bidirectional. */
  "RB2": "14",
  /** Physical pin 15: RB1/PGEC1; bidirectional. */
  "RB1/PGEC1": "15",
  /** Physical pin 16: RB0/PGED1; bidirectional. */
  "RB0/PGED1": "16",
  /** Physical pin 17: RB6/PGEC2; bidirectional. */
  "RB6/PGEC2": "17",
  /** Physical pin 18: RB7/PGED2; bidirectional. */
  "RB7/PGED2": "18",
  /** Physical pin 19: AVDD; power_in. */
  "AVDD": "19",
  /** Physical pin 20: AVSS; power_in. */
  "AVSS": "20",
  /** Physical pin 21: RB8; bidirectional. */
  "RB8": "21",
  /** Physical pin 22: RB9; bidirectional. */
  "RB9": "22",
  /** Physical pin 23: RB10; bidirectional. */
  "RB10": "23",
  /** Physical pin 24: RB11; bidirectional. */
  "RB11": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
  /** Physical pin 26: VDD; passive. */
  "VDD_26": "26",
  /** Physical pin 27: RB12; bidirectional. */
  "RB12": "27",
  /** Physical pin 28: RB13; bidirectional. */
  "RB13": "28",
  /** Physical pin 29: RB14; bidirectional. */
  "RB14": "29",
  /** Physical pin 30: RB15; bidirectional. */
  "RB15": "30",
  /** Physical pin 31: RF4; bidirectional. */
  "RF4": "31",
  /** Physical pin 32: RF5; bidirectional. */
  "RF5": "32",
  /** Physical pin 33: RF3; bidirectional. */
  "RF3": "33",
  /** Physical pin 34: RF2; bidirectional. */
  "RF2": "34",
  /** Physical pin 35: RF6; bidirectional. */
  "RF6": "35",
  /** Physical pin 36: RG3; bidirectional. */
  "RG3": "36",
  /** Physical pin 37: RG2; bidirectional. */
  "RG2": "37",
  /** Physical pin 38: VDD; passive. */
  "VDD_38": "38",
  /** Physical pin 39: RC12/CLKI/OSCI; bidirectional. */
  "RC12/CLKI/OSCI": "39",
  /** Physical pin 40: RC15/CLKO/OSCO; bidirectional. */
  "RC15/CLKO/OSCO": "40",
  /** Physical pin 41: VSS; passive. */
  "VSS_41": "41",
  /** Physical pin 42: RD8; bidirectional. */
  "RD8": "42",
  /** Physical pin 43: RD9; bidirectional. */
  "RD9": "43",
  /** Physical pin 44: RD10; bidirectional. */
  "RD10": "44",
  /** Physical pin 45: RD11; bidirectional. */
  "RD11": "45",
  /** Physical pin 46: RD0; bidirectional. */
  "RD0": "46",
  /** Physical pin 47: RC13/SOSCI; bidirectional. */
  "RC13/SOSCI": "47",
  /** Physical pin 48: RC14/SCKLI/SOSCO; bidirectional. */
  "RC14/SCKLI/SOSCO": "48",
  /** Physical pin 49: RD1; bidirectional. */
  "RD1": "49",
  /** Physical pin 50: RD2; bidirectional. */
  "RD2": "50",
  /** Physical pin 51: RD3; bidirectional. */
  "RD3": "51",
  /** Physical pin 52: RD4; bidirectional. */
  "RD4": "52",
  /** Physical pin 53: RD5; bidirectional. */
  "RD5": "53",
  /** Physical pin 54: RD6; bidirectional. */
  "RD6": "54",
  /** Physical pin 55: RD7; bidirectional. */
  "RD7": "55",
  /** Physical pin 56: VCAP/VDDCORE; passive. */
  "VCAP/VDDCORE": "56",
  /** Physical pin 57: VBAT; power_in. */
  "VBAT": "57",
  /** Physical pin 58: RF0; bidirectional. */
  "RF0": "58",
  /** Physical pin 59: RF1; bidirectional. */
  "RF1": "59",
  /** Physical pin 60: RE0; bidirectional. */
  "RE0": "60",
  /** Physical pin 61: RE1; bidirectional. */
  "RE1": "61",
  /** Physical pin 62: RE2; bidirectional. */
  "RE2": "62",
  /** Physical pin 63: RE3; bidirectional. */
  "RE3": "63",
  /** Physical pin 64: RE4; bidirectional. */
  "RE4": "64",
}) {
  override schema = "MCU_Microchip_PIC24:PIC24FJ64GA306-xMR";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2048B SRAM, 512B EEPROM, nanoWatt XLP, 12-bit ADC, PWM, RTCC, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC24:PIC24FV32KA304-IPT`. Reference prefix: `IC`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39995d.pdf
 * Keywords: Flash-Based 16-Bit Microcontroller.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC24FV32KA304_IPT extends Component.withPins({
  /** Physical pin 1: RB9/DA1/T1CK/~{U1RTS}/CTED4/CN21; bidirectional. */
  "RB9/DA1/T1CK/~{U1RTS}/CTED4/CN21": "1",
  /** Physical pin 2: U1RX/CN18/RC6; bidirectional. */
  "U1RX/CN18/RC6": "2",
  /** Physical pin 3: U1TX/CN17/RC7; bidirectional. */
  "U1TX/CN17/RC7": "3",
  /** Physical pin 4: OC2/CN20/RC8; bidirectional. */
  "OC2/CN20/RC8": "4",
  /** Physical pin 5: IC2/CTED7/CN19/RC9; bidirectional. */
  "IC2/CTED7/CN19/RC9": "5",
  /** Physical pin 6: RA7/IC1/CTED3/CN9; bidirectional. */
  "RA7/IC1/CTED3/CN9": "6",
  /** Physical pin 7: RA6/C2OUT/OC1/CTED1/INT2/CN8; bidirectional. */
  "RA6/C2OUT/OC1/CTED1/INT2/CN8": "7",
  /** Physical pin 8: RB10/PGED2/SDI1/CTED11/CN16; bidirectional. */
  "RB10/PGED2/SDI1/CTED11/CN16": "8",
  /** Physical pin 9: RB11/PGEC2/SCK1/CTED9/CN15; bidirectional. */
  "RB11/PGEC2/SCK1/CTED9/CN15": "9",
  /** Physical pin 10: RB12/N12/HLVDIN/CTED2/CN14; bidirectional. */
  "RB12/N12/HLVDIN/CTED2/CN14": "10",
  /** Physical pin 11: RB13/AN11/SDO1/CTPLS/CN13; bidirectional. */
  "RB13/AN11/SDO1/CTPLS/CN13": "11",
  /** Physical pin 12: RA10/OC3/CN35; bidirectional. */
  "RA10/OC3/CN35": "12",
  /** Physical pin 13: RA11/IC3/CTED8/CN36; bidirectional. */
  "RA11/IC3/CTED8/CN36": "13",
  /** Physical pin 14: RB14/CVREF/AN10/C3INB/RTCC/C1OUT/OCFA/CTED5/INT1/CN12; bidirectional. */
  "RB14/CVREF/AN10/C3INB/RTCC/C1OUT/OCFA/CTED5/INT1/CN12": "14",
  /** Physical pin 15: RB15/AN9/C3INA/T3CK/T2CK/REFO/SS1/CTED6/CN11; bidirectional. */
  "RB15/AN9/C3INA/T3CK/T2CK/REFO/SS1/CTED6/CN11": "15",
  /** Physical pin 16: Vss/AVss; power_in. */
  "Vss/AVss": "16",
  /** Physical pin 17: AVdd/Vdd; power_in. */
  "AVdd/Vdd": "17",
  /** Physical pin 18: RA5/~{MCLR}/Vpp; bidirectional. */
  "RA5/~{MCLR}/Vpp": "18",
  /** Physical pin 19: RA0/VREF+/CVREF+/AN0/C3INC/CN2; bidirectional. */
  "RA0/VREF+/CVREF+/AN0/C3INC/CN2": "19",
  /** Physical pin 20: RA1/CVREF-/VREF-/AN1/CN3; bidirectional. */
  "RA1/CVREF-/VREF-/AN1/CN3": "20",
  /** Physical pin 21: RB0/PGED1/AN2/ULPWU/CTCMP/C1IND/C2INB/C3IND/U2TX/CN4; bidirectional. */
  "RB0/PGED1/AN2/ULPWU/CTCMP/C1IND/C2INB/C3IND/U2TX/CN4": "21",
  /** Physical pin 22: RB1/PGEC1/AN3/C1INC/C2INA/U2RX/CTED12/CN5; bidirectional. */
  "RB1/PGEC1/AN3/C1INC/C2INA/U2RX/CTED12/CN5": "22",
  /** Physical pin 23: RB2/AN4/C1INB/C2IND/SDA2/T5CK/T4CK/CTED13/CN6; bidirectional. */
  "RB2/AN4/C1INB/C2IND/SDA2/T5CK/T4CK/CTED13/CN6": "23",
  /** Physical pin 24: RB3/AN5/C1INA/C2INC/SCL2/CN7; bidirectional. */
  "RB3/AN5/C1INA/C2INC/SCL2/CN7": "24",
  /** Physical pin 25: AN6/CN32/RC0; bidirectional. */
  "AN6/CN32/RC0": "25",
  /** Physical pin 26: AN7/CN31/RC1; bidirectional. */
  "AN7/CN31/RC1": "26",
  /** Physical pin 27: AN8/CN10/RC2; bidirectional. */
  "AN8/CN10/RC2": "27",
  /** Physical pin 28: Vdd; power_in. */
  "Vdd_28": "28",
  /** Physical pin 29: Vss; power_in. */
  "Vss_29": "29",
  /** Physical pin 30: RA2/OSCI/AN13/CLKI/CN30; bidirectional. */
  "RA2/OSCI/AN13/CLKI/CN30": "30",
  /** Physical pin 31: RA3/OSCO/AN14/CLKO/CN29; bidirectional. */
  "RA3/OSCO/AN14/CLKO/CN29": "31",
  /** Physical pin 32: RA8/OCFB/CN33; bidirectional. */
  "RA8/OCFB/CN33": "32",
  /** Physical pin 33: RB4/SOSCI/AN15/~{U2RTS}/CN1; bidirectional. */
  "RB4/SOSCI/AN15/~{U2RTS}/CN1": "33",
  /** Physical pin 34: RA4/SOSCO/SCLKI/U2CTS/CN0; bidirectional. */
  "RA4/SOSCO/SCLKI/U2CTS/CN0": "34",
  /** Physical pin 35: RA9/~{SS2}/CN34; bidirectional. */
  "RA9/~{SS2}/CN34": "35",
  /** Physical pin 36: SDI2/CN28/RC3; bidirectional. */
  "SDI2/CN28/RC3": "36",
  /** Physical pin 37: SDO2/CN25/RC4; bidirectional. */
  "SDO2/CN25/RC4": "37",
  /** Physical pin 38: SCK2/CN26/RC5; bidirectional. */
  "SCK2/CN26/RC5": "38",
  /** Physical pin 39: Vss; power_in. */
  "Vss_39": "39",
  /** Physical pin 40: Vdd; power_in. */
  "Vdd_40": "40",
  /** Physical pin 41: RB5/PGED3/ASDA1* /CN27; bidirectional. */
  "RB5/PGED3/ASDA1*/CN27": "41",
  /** Physical pin 42: RB6/PGEC3/ASCL1* /CN24; bidirectional. */
  "RB6/PGEC3/ASCL1*/CN24": "42",
  /** Physical pin 43: RB7/INT0/CN23; bidirectional. */
  "RB7/INT0/CN23": "43",
  /** Physical pin 44: RB8/SCL1/U1CTS/C3OUT/CTED10; bidirectional. */
  "RB8/SCL1/U1CTS/C3OUT/CTED10": "44",
}) {
  override schema = "MCU_Microchip_PIC24:PIC24FV32KA304-IPT";
  override referencePrefix = "IC";
}

