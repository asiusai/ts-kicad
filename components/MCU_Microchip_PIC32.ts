// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * MIPS MCU, 120MHz, 1MB Flash, 256KB RAM, 2.3-3.6V, USB, TQFP-100
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MK1024GPD100-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC32MK_GP_MC_Familly_Datasheet_60001402G.pdf
 * Keywords: 32-bit MIPS MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MK1024GPD100_xPT extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: RA7/TCK; bidirectional. */
  "RA7/TCK": "3",
  /** Physical pin 4: RB14/VBUSON1; bidirectional. */
  "RB14/VBUSON1": "4",
  /** Physical pin 5: RB15; bidirectional. */
  "RB15": "5",
  /** Physical pin 6: RD1; bidirectional. */
  "RD1": "6",
  /** Physical pin 7: RD2; bidirectional. */
  "RD2": "7",
  /** Physical pin 8: RD3; bidirectional. */
  "RD3": "8",
  /** Physical pin 9: RD4; bidirectional. */
  "RD4": "9",
  /** Physical pin 10: RG6/VBUSON2; bidirectional. */
  "RG6/VBUSON2": "10",
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
  /** Physical pin 17: RG10; bidirectional. */
  "RG10": "17",
  /** Physical pin 18: RE8; bidirectional. */
  "RE8": "18",
  /** Physical pin 19: RE9; bidirectional. */
  "RE9": "19",
  /** Physical pin 20: RA12; bidirectional. */
  "RA12": "20",
  /** Physical pin 21: RA11; bidirectional. */
  "RA11": "21",
  /** Physical pin 22: RA0; bidirectional. */
  "RA0": "22",
  /** Physical pin 23: RA1; bidirectional. */
  "RA1": "23",
  /** Physical pin 24: PGD3/RB0; bidirectional. */
  "PGD3/RB0": "24",
  /** Physical pin 25: PGC3/RB1; bidirectional. */
  "PGC3/RB1": "25",
  /** Physical pin 26: PGC1/RB2; bidirectional. */
  "PGC1/RB2": "26",
  /** Physical pin 27: PGD1/RB3; bidirectional. */
  "PGD1/RB3": "27",
  /** Physical pin 28: RF9; bidirectional. */
  "RF9": "28",
  /** Physical pin 29: RF10; bidirectional. */
  "RF10": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: RC0; bidirectional. */
  "RC0": "32",
  /** Physical pin 33: RC1; bidirectional. */
  "RC1": "33",
  /** Physical pin 34: RC2; bidirectional. */
  "RC2": "34",
  /** Physical pin 35: RC11; bidirectional. */
  "RC11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: RG11; bidirectional. */
  "RG11": "38",
  /** Physical pin 39: RF13; bidirectional. */
  "RF13": "39",
  /** Physical pin 40: RF12; bidirectional. */
  "RF12": "40",
  /** Physical pin 41: RE12; bidirectional. */
  "RE12": "41",
  /** Physical pin 42: RE13; bidirectional. */
  "RE13": "42",
  /** Physical pin 43: RE14; bidirectional. */
  "RE14": "43",
  /** Physical pin 44: RE15; bidirectional. */
  "RE15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: RD14; bidirectional. */
  "RD14": "47",
  /** Physical pin 48: RD15; bidirectional. */
  "RD15": "48",
  /** Physical pin 49: RA8/TDI; bidirectional. */
  "RA8/TDI": "49",
  /** Physical pin 50: RB4; bidirectional. */
  "RB4": "50",
  /** Physical pin 51: RA4; bidirectional. */
  "RA4": "51",
  /** Physical pin 52: RE0; bidirectional. */
  "RE0": "52",
  /** Physical pin 53: RE1; bidirectional. */
  "RE1": "53",
  /** Physical pin 54: VBUS1; input. */
  "VBUS1": "54",
  /** Physical pin 55: VUSB3V3; power_in. */
  "VUSB3V3": "55",
  /** Physical pin 56: D1-; bidirectional. */
  "D1-": "56",
  /** Physical pin 57: D1+; bidirectional. */
  "D1+": "57",
  /** Physical pin 58: VBUS2; input. */
  "VBUS2": "58",
  /** Physical pin 59: D2-; bidirectional. */
  "D2-": "59",
  /** Physical pin 60: D2+; bidirectional. */
  "D2+": "60",
  /** Physical pin 61: RF5; bidirectional. */
  "RF5": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: RC12/OSCI/CLKI; bidirectional. */
  "RC12/OSCI/CLKI": "63",
  /** Physical pin 64: RC15/OSCO/CLKO; bidirectional. */
  "RC15/OSCO/CLKO": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: RA14; bidirectional. */
  "RA14": "66",
  /** Physical pin 67: RA15; bidirectional. */
  "RA15": "67",
  /** Physical pin 68: VBAT; power_in. */
  "VBAT": "68",
  /** Physical pin 69: PGD2/RB5; bidirectional. */
  "PGD2/RB5": "69",
  /** Physical pin 70: PGC2/RB6; bidirectional. */
  "PGC2/RB6": "70",
  /** Physical pin 71: RC10; bidirectional. */
  "RC10": "71",
  /** Physical pin 72: RB7; bidirectional. */
  "RB7": "72",
  /** Physical pin 73: RC13/SOSCI; bidirectional. */
  "RC13/SOSCI": "73",
  /** Physical pin 74: SOSCO/RB8; bidirectional. */
  "SOSCO/RB8": "74",
  /** Physical pin 75: VSS; passive. */
  "VSS_75": "75",
  /** Physical pin 76: TMS/RB9; bidirectional. */
  "TMS/RB9": "76",
  /** Physical pin 77: RC6; bidirectional. */
  "RC6": "77",
  /** Physical pin 78: RC7; bidirectional. */
  "RC7": "78",
  /** Physical pin 79: RD12; bidirectional. */
  "RD12": "79",
  /** Physical pin 80: RD13; bidirectional. */
  "RD13": "80",
  /** Physical pin 81: RC8; bidirectional. */
  "RC8": "81",
  /** Physical pin 82: RD5; bidirectional. */
  "RD5": "82",
  /** Physical pin 83: RD6; bidirectional. */
  "RD6": "83",
  /** Physical pin 84: RC9; bidirectional. */
  "RC9": "84",
  /** Physical pin 85: VSS; passive. */
  "VSS_85": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: RF0; bidirectional. */
  "RF0": "87",
  /** Physical pin 88: RF1; bidirectional. */
  "RF1": "88",
  /** Physical pin 89: RG1; bidirectional. */
  "RG1": "89",
  /** Physical pin 90: RG0; bidirectional. */
  "RG0": "90",
  /** Physical pin 91: TRCLK/RF6; bidirectional. */
  "TRCLK/RF6": "91",
  /** Physical pin 92: TRD3/RF7; bidirectional. */
  "TRD3/RF7": "92",
  /** Physical pin 93: RB10; bidirectional. */
  "RB10": "93",
  /** Physical pin 94: RB11; bidirectional. */
  "RB11": "94",
  /** Physical pin 95: RG14/TRD2; bidirectional. */
  "RG14/TRD2": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13/TRD0; bidirectional. */
  "RG13/TRD0": "97",
  /** Physical pin 98: RB12; bidirectional. */
  "RB12": "98",
  /** Physical pin 99: RB13; bidirectional. */
  "RB13": "99",
  /** Physical pin 100: RA10/TDO; bidirectional. */
  "RA10/TDO": "100",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MK1024GPD100-xPT";
  override referencePrefix = "U";
}

/**
 * MIPS MCU, 120MHz, 1MB Flash, 256KB RAM, 2.3-3.6V, USB, TQFP-100
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MK1024GPE100-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC32MK_GP_MC_Familly_Datasheet_60001402G.pdf
 * Keywords: 32-bit MIPS MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MK1024GPE100_xPT extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: RA7/TCK; bidirectional. */
  "RA7/TCK": "3",
  /** Physical pin 4: RB14/VBUSON1; bidirectional. */
  "RB14/VBUSON1": "4",
  /** Physical pin 5: RB15; bidirectional. */
  "RB15": "5",
  /** Physical pin 6: RD1; bidirectional. */
  "RD1": "6",
  /** Physical pin 7: RD2; bidirectional. */
  "RD2": "7",
  /** Physical pin 8: RD3; bidirectional. */
  "RD3": "8",
  /** Physical pin 9: RD4; bidirectional. */
  "RD4": "9",
  /** Physical pin 10: RG6/VBUSON2; bidirectional. */
  "RG6/VBUSON2": "10",
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
  /** Physical pin 17: RG10; bidirectional. */
  "RG10": "17",
  /** Physical pin 18: RE8; bidirectional. */
  "RE8": "18",
  /** Physical pin 19: RE9; bidirectional. */
  "RE9": "19",
  /** Physical pin 20: RA12; bidirectional. */
  "RA12": "20",
  /** Physical pin 21: RA11; bidirectional. */
  "RA11": "21",
  /** Physical pin 22: RA0; bidirectional. */
  "RA0": "22",
  /** Physical pin 23: RA1; bidirectional. */
  "RA1": "23",
  /** Physical pin 24: PGD3/RB0; bidirectional. */
  "PGD3/RB0": "24",
  /** Physical pin 25: PGC3/RB1; bidirectional. */
  "PGC3/RB1": "25",
  /** Physical pin 26: PGC1/RB2; bidirectional. */
  "PGC1/RB2": "26",
  /** Physical pin 27: PGD1/RB3; bidirectional. */
  "PGD1/RB3": "27",
  /** Physical pin 28: RF9; bidirectional. */
  "RF9": "28",
  /** Physical pin 29: RF10; bidirectional. */
  "RF10": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: RC0; bidirectional. */
  "RC0": "32",
  /** Physical pin 33: RC1; bidirectional. */
  "RC1": "33",
  /** Physical pin 34: RC2; bidirectional. */
  "RC2": "34",
  /** Physical pin 35: RC11; bidirectional. */
  "RC11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: RG11; bidirectional. */
  "RG11": "38",
  /** Physical pin 39: RF13; bidirectional. */
  "RF13": "39",
  /** Physical pin 40: RF12; bidirectional. */
  "RF12": "40",
  /** Physical pin 41: RE12; bidirectional. */
  "RE12": "41",
  /** Physical pin 42: RE13; bidirectional. */
  "RE13": "42",
  /** Physical pin 43: RE14; bidirectional. */
  "RE14": "43",
  /** Physical pin 44: RE15; bidirectional. */
  "RE15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: RD14; bidirectional. */
  "RD14": "47",
  /** Physical pin 48: RD15; bidirectional. */
  "RD15": "48",
  /** Physical pin 49: RA8/TDI; bidirectional. */
  "RA8/TDI": "49",
  /** Physical pin 50: RB4; bidirectional. */
  "RB4": "50",
  /** Physical pin 51: RA4; bidirectional. */
  "RA4": "51",
  /** Physical pin 52: RE0; bidirectional. */
  "RE0": "52",
  /** Physical pin 53: RE1; bidirectional. */
  "RE1": "53",
  /** Physical pin 54: VBUS1; input. */
  "VBUS1": "54",
  /** Physical pin 55: VUSB3V3; power_in. */
  "VUSB3V3": "55",
  /** Physical pin 56: D1-; bidirectional. */
  "D1-": "56",
  /** Physical pin 57: D1+; bidirectional. */
  "D1+": "57",
  /** Physical pin 58: VBUS2; input. */
  "VBUS2": "58",
  /** Physical pin 59: D2-; bidirectional. */
  "D2-": "59",
  /** Physical pin 60: D2+; bidirectional. */
  "D2+": "60",
  /** Physical pin 61: RF5; bidirectional. */
  "RF5": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: RC12/OSCI/CLKI; bidirectional. */
  "RC12/OSCI/CLKI": "63",
  /** Physical pin 64: RC15/OSCO/CLKO; bidirectional. */
  "RC15/OSCO/CLKO": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: RA14; bidirectional. */
  "RA14": "66",
  /** Physical pin 67: RA15; bidirectional. */
  "RA15": "67",
  /** Physical pin 68: VBAT; power_in. */
  "VBAT": "68",
  /** Physical pin 69: PGD2/RB5; bidirectional. */
  "PGD2/RB5": "69",
  /** Physical pin 70: PGC2/RB6; bidirectional. */
  "PGC2/RB6": "70",
  /** Physical pin 71: RC10; bidirectional. */
  "RC10": "71",
  /** Physical pin 72: RB7; bidirectional. */
  "RB7": "72",
  /** Physical pin 73: RC13/SOSCI; bidirectional. */
  "RC13/SOSCI": "73",
  /** Physical pin 74: SOSCO/RB8; bidirectional. */
  "SOSCO/RB8": "74",
  /** Physical pin 75: VSS; passive. */
  "VSS_75": "75",
  /** Physical pin 76: TMS/RB9; bidirectional. */
  "TMS/RB9": "76",
  /** Physical pin 77: RC6; bidirectional. */
  "RC6": "77",
  /** Physical pin 78: RC7; bidirectional. */
  "RC7": "78",
  /** Physical pin 79: RD12; bidirectional. */
  "RD12": "79",
  /** Physical pin 80: RD13; bidirectional. */
  "RD13": "80",
  /** Physical pin 81: RC8; bidirectional. */
  "RC8": "81",
  /** Physical pin 82: RD5; bidirectional. */
  "RD5": "82",
  /** Physical pin 83: RD6; bidirectional. */
  "RD6": "83",
  /** Physical pin 84: RC9; bidirectional. */
  "RC9": "84",
  /** Physical pin 85: VSS; passive. */
  "VSS_85": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: RF0; bidirectional. */
  "RF0": "87",
  /** Physical pin 88: RF1; bidirectional. */
  "RF1": "88",
  /** Physical pin 89: RG1; bidirectional. */
  "RG1": "89",
  /** Physical pin 90: RG0; bidirectional. */
  "RG0": "90",
  /** Physical pin 91: TRCLK/RF6; bidirectional. */
  "TRCLK/RF6": "91",
  /** Physical pin 92: TRD3/RF7; bidirectional. */
  "TRD3/RF7": "92",
  /** Physical pin 93: RB10; bidirectional. */
  "RB10": "93",
  /** Physical pin 94: RB11; bidirectional. */
  "RB11": "94",
  /** Physical pin 95: RG14/TRD2; bidirectional. */
  "RG14/TRD2": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13/TRD0; bidirectional. */
  "RG13/TRD0": "97",
  /** Physical pin 98: RB12; bidirectional. */
  "RB12": "98",
  /** Physical pin 99: RB13; bidirectional. */
  "RB13": "99",
  /** Physical pin 100: RA10/TDO; bidirectional. */
  "RA10/TDO": "100",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MK1024GPE100-xPT";
  override referencePrefix = "U";
}

/**
 * 32-Bit Flash MCU, 25MHz, 64KB Flash, 8KB RAM, QFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MM0064GPL028x-ML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC32MM0064GPL036-Family-Data-Sheet-DS60001324C.pdf
 * Keywords: FLASH-Based 32-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MM0064GPL028x_ML extends Component.withPins({
  /** Physical pin 1: RBO; bidirectional. */
  "RBO": "1",
  /** Physical pin 2: RB1; bidirectional. */
  "RB1": "2",
  /** Physical pin 3: RB2; bidirectional. */
  "RB2": "3",
  /** Physical pin 4: RB3; bidirectional. */
  "RB3": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: RA2; bidirectional. */
  "RA2": "6",
  /** Physical pin 7: RA3; bidirectional. */
  "RA3": "7",
  /** Physical pin 8: RB4; bidirectional. */
  "RB4": "8",
  /** Physical pin 9: RA4; bidirectional. */
  "RA4": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: RB5; bidirectional. */
  "RB5": "11",
  /** Physical pin 12: RB6; bidirectional. */
  "RB6": "12",
  /** Physical pin 13: RB7; bidirectional. */
  "RB7": "13",
  /** Physical pin 14: RB8; bidirectional. */
  "RB8": "14",
  /** Physical pin 15: RB9; bidirectional. */
  "RB9": "15",
  /** Physical pin 16: RC9; bidirectional. */
  "RC9": "16",
  /** Physical pin 17: VCAP; power_out. */
  "VCAP": "17",
  /** Physical pin 18: RB10; bidirectional. */
  "RB10": "18",
  /** Physical pin 19: RB11; bidirectional. */
  "RB11": "19",
  /** Physical pin 20: RB12; bidirectional. */
  "RB12": "20",
  /** Physical pin 21: RB13; bidirectional. */
  "RB13": "21",
  /** Physical pin 22: RB14; bidirectional. */
  "RB14": "22",
  /** Physical pin 23: RB15; bidirectional. */
  "RB15": "23",
  /** Physical pin 24: AVSS; power_in. */
  "AVSS": "24",
  /** Physical pin 25: AVDD; power_in. */
  "AVDD": "25",
  /** Physical pin 26: ~{MCLR}; input. */
  "~{MCLR}": "26",
  /** Physical pin 27: RA0; bidirectional. */
  "RA0": "27",
  /** Physical pin 28: RA1; bidirectional. */
  "RA1": "28",
  /** Physical pin 29: EP; passive. */
  "EP": "29",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MM0064GPL028x-ML";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (16KB Flash and 4KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX110F016D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX110F016D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: RB12; bidirectional. */
  "RB12": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: RB6; input. */
  "RB6": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX110F016D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (32KB Flash and 8KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX120F032D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX120F032D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: RB12; bidirectional. */
  "RB12": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: RB6; input. */
  "RB6": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX120F032D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (64KB Flash and 16KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX130F064D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX130F064D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: RB12; bidirectional. */
  "RB12": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: RB6; input. */
  "RB6": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX130F064D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (128KB Flash and 32KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX150F128D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX150F128D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: RB12; bidirectional. */
  "RB12": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: RB6; input. */
  "RB6": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX150F128D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (256KB Flash and 64KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX170F256D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX170F256D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: RB12; bidirectional. */
  "RB12": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: RB6; input. */
  "RB6": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX170F256D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (16KB Flash and 4KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX210F016D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX210F016D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: VUSB3V3; bidirectional. */
  "VUSB3V3": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: VBUS; input. */
  "VBUS": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX210F016D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (32KB Flash and 8KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX220F032D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX220F032D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: VUSB3V3; bidirectional. */
  "VUSB3V3": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: VBUS; input. */
  "VBUS": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX220F032D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (64KB Flash and 16KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX230F064D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX230F064D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: VUSB3V3; bidirectional. */
  "VUSB3V3": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: VBUS; input. */
  "VBUS": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX230F064D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (128KB Flash and 32KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX250F128D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX250F128D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: VUSB3V3; bidirectional. */
  "VUSB3V3": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: VBUS; input. */
  "VBUS": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX250F128D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (256KB Flash and 64KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX270F256D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX270F256D_IPT extends Component.withPins({
  /** Physical pin 1: RB9; bidirectional. */
  "RB9": "1",
  /** Physical pin 2: RC6; bidirectional. */
  "RC6": "2",
  /** Physical pin 3: RC7; bidirectional. */
  "RC7": "3",
  /** Physical pin 4: RC8; bidirectional. */
  "RC8": "4",
  /** Physical pin 5: RC9; bidirectional. */
  "RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: RB10; bidirectional. */
  "RB10": "8",
  /** Physical pin 9: RB11; bidirectional. */
  "RB11": "9",
  /** Physical pin 10: VUSB3V3; bidirectional. */
  "VUSB3V3": "10",
  /** Physical pin 11: RB13; bidirectional. */
  "RB13": "11",
  /** Physical pin 12: RA10; bidirectional. */
  "RA10": "12",
  /** Physical pin 13: RA7; bidirectional. */
  "RA7": "13",
  /** Physical pin 14: RB14; bidirectional. */
  "RB14": "14",
  /** Physical pin 15: RB15; bidirectional. */
  "RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: RA0; input. */
  "RA0": "19",
  /** Physical pin 20: RA1; input. */
  "RA1": "20",
  /** Physical pin 21: RB0; input. */
  "RB0": "21",
  /** Physical pin 22: RB1; input. */
  "RB1": "22",
  /** Physical pin 23: RB2; input. */
  "RB2": "23",
  /** Physical pin 24: RB3; input. */
  "RB3": "24",
  /** Physical pin 25: RC0; input. */
  "RC0": "25",
  /** Physical pin 26: RC1; input. */
  "RC1": "26",
  /** Physical pin 27: RC2; input. */
  "RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; passive. */
  "VSS_29": "29",
  /** Physical pin 30: RA2; input. */
  "RA2": "30",
  /** Physical pin 31: RA3; input. */
  "RA3": "31",
  /** Physical pin 32: RA8; input. */
  "RA8": "32",
  /** Physical pin 33: RB4; input. */
  "RB4": "33",
  /** Physical pin 34: RA4; input. */
  "RA4": "34",
  /** Physical pin 35: RA9; input. */
  "RA9": "35",
  /** Physical pin 36: RC3; input. */
  "RC3": "36",
  /** Physical pin 37: RC4; input. */
  "RC4": "37",
  /** Physical pin 38: RC5; input. */
  "RC5": "38",
  /** Physical pin 39: VSS; passive. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: RB5; input. */
  "RB5": "41",
  /** Physical pin 42: VBUS; input. */
  "VBUS": "42",
  /** Physical pin 43: RB7; input. */
  "RB7": "43",
  /** Physical pin 44: RB8; input. */
  "RB8": "44",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX270F256D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (64KB Flash and 16KB SRAM TQFP-64 QFN-64) USB, CAN and Ethernet
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX575F256H`. Reference prefix: `U`.
 * Footprint filters: Package*QFP:QFP*10x10mm*P0.5mm*, Package*DFN*QFN:QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/61156G.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX575F256H extends Component.withPins({
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
  /** Physical pin 11: RB5; bidirectional. */
  "RB5": "11",
  /** Physical pin 12: RB4; bidirectional. */
  "RB4": "12",
  /** Physical pin 13: RB3; bidirectional. */
  "RB3": "13",
  /** Physical pin 14: RB2; bidirectional. */
  "RB2": "14",
  /** Physical pin 15: RB1; bidirectional. */
  "RB1": "15",
  /** Physical pin 16: RB0; bidirectional. */
  "RB0": "16",
  /** Physical pin 17: RB6; bidirectional. */
  "RB6": "17",
  /** Physical pin 18: RB7; bidirectional. */
  "RB7": "18",
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
  /** Physical pin 34: VBUS; input. */
  "VBUS": "34",
  /** Physical pin 35: VUSB; power_in. */
  "VUSB": "35",
  /** Physical pin 36: RG3; bidirectional. */
  "RG3": "36",
  /** Physical pin 37: RG2; bidirectional. */
  "RG2": "37",
  /** Physical pin 38: VDD; passive. */
  "VDD_38": "38",
  /** Physical pin 39: RC12; bidirectional. */
  "RC12": "39",
  /** Physical pin 40: RC15; bidirectional. */
  "RC15": "40",
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
  /** Physical pin 47: RC13; bidirectional. */
  "RC13": "47",
  /** Physical pin 48: RC14; bidirectional. */
  "RC14": "48",
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
  /** Physical pin 56: VCAP; power_out. */
  "VCAP": "56",
  /** Physical pin 57: VDD; passive. */
  "VDD_57": "57",
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
  override schema = "MCU_Microchip_PIC32:PIC32MX575F256H";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (64KB Flash and 16KB SRAM TQFP-64 QFN-64) USB, CAN and Ethernet
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX575F512H`. Reference prefix: `U`.
 * Footprint filters: Package*QFP:QFP*10x10mm*P0.5mm*, Package*DFN*QFN:QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/61156G.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX575F512H extends Component.withPins({
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
  /** Physical pin 11: RB5; bidirectional. */
  "RB5": "11",
  /** Physical pin 12: RB4; bidirectional. */
  "RB4": "12",
  /** Physical pin 13: RB3; bidirectional. */
  "RB3": "13",
  /** Physical pin 14: RB2; bidirectional. */
  "RB2": "14",
  /** Physical pin 15: RB1; bidirectional. */
  "RB1": "15",
  /** Physical pin 16: RB0; bidirectional. */
  "RB0": "16",
  /** Physical pin 17: RB6; bidirectional. */
  "RB6": "17",
  /** Physical pin 18: RB7; bidirectional. */
  "RB7": "18",
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
  /** Physical pin 34: VBUS; input. */
  "VBUS": "34",
  /** Physical pin 35: VUSB; power_in. */
  "VUSB": "35",
  /** Physical pin 36: RG3; bidirectional. */
  "RG3": "36",
  /** Physical pin 37: RG2; bidirectional. */
  "RG2": "37",
  /** Physical pin 38: VDD; passive. */
  "VDD_38": "38",
  /** Physical pin 39: RC12; bidirectional. */
  "RC12": "39",
  /** Physical pin 40: RC15; bidirectional. */
  "RC15": "40",
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
  /** Physical pin 47: RC13; bidirectional. */
  "RC13": "47",
  /** Physical pin 48: RC14; bidirectional. */
  "RC14": "48",
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
  /** Physical pin 56: VCAP; power_out. */
  "VCAP": "56",
  /** Physical pin 57: VDD; passive. */
  "VDD_57": "57",
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
  override schema = "MCU_Microchip_PIC32:PIC32MX575F512H";
  override referencePrefix = "U";
}

/**
 * MIPS MCU, 80MHz, 512KB Flash, 12KB Boot Flash, 128KB RAM, 2.3-3.6V, USB, CAN, Ethernet, TQFP-100
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX795F512L-80x-PF`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001156J.pdf
 * Keywords: 32-bit MIPS MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX795F512L_80x_PF extends Component.withPins({
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
  /** Physical pin 17: RA0/TMS; bidirectional. */
  "RA0/TMS": "17",
  /** Physical pin 18: RE8; bidirectional. */
  "RE8": "18",
  /** Physical pin 19: RE9; bidirectional. */
  "RE9": "19",
  /** Physical pin 20: RB5; bidirectional. */
  "RB5": "20",
  /** Physical pin 21: RB4; bidirectional. */
  "RB4": "21",
  /** Physical pin 22: RB3; bidirectional. */
  "RB3": "22",
  /** Physical pin 23: RB2; bidirectional. */
  "RB2": "23",
  /** Physical pin 24: PGEC1/RB1; bidirectional. */
  "PGEC1/RB1": "24",
  /** Physical pin 25: PGED1/RB0; bidirectional. */
  "PGED1/RB0": "25",
  /** Physical pin 26: PGEC2/RB6; bidirectional. */
  "PGEC2/RB6": "26",
  /** Physical pin 27: PGED2/RB7; bidirectional. */
  "PGED2/RB7": "27",
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
  /** Physical pin 38: RA1/TCK; bidirectional. */
  "RA1/TCK": "38",
  /** Physical pin 39: RF13; bidirectional. */
  "RF13": "39",
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
  /** Physical pin 51: RF3; bidirectional. */
  "RF3": "51",
  /** Physical pin 52: RF2; bidirectional. */
  "RF2": "52",
  /** Physical pin 53: RF8; bidirectional. */
  "RF8": "53",
  /** Physical pin 54: VBUS; input. */
  "VBUS": "54",
  /** Physical pin 55: VUSB3V3; power_in. */
  "VUSB3V3": "55",
  /** Physical pin 56: RG3/D-; bidirectional. */
  "RG3/D-": "56",
  /** Physical pin 57: RG2/D+; bidirectional. */
  "RG2/D+": "57",
  /** Physical pin 58: RA2; bidirectional. */
  "RA2": "58",
  /** Physical pin 59: RA3; bidirectional. */
  "RA3": "59",
  /** Physical pin 60: RA4/TDI; bidirectional. */
  "RA4/TDI": "60",
  /** Physical pin 61: RA5/TDO; bidirectional. */
  "RA5/TDO": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: RC12/OSC1/CLK; bidirectional. */
  "RC12/OSC1/CLK": "63",
  /** Physical pin 64: RC15/OSC2/CLKO; bidirectional. */
  "RC15/OSC2/CLKO": "64",
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
  /** Physical pin 73: RC13/SOSCI; bidirectional. */
  "RC13/SOSCI": "73",
  /** Physical pin 74: RC14/SOSCO; bidirectional. */
  "RC14/SOSCO": "74",
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
  /** Physical pin 85: VCAP/VDDCORE; power_out. */
  "VCAP/VDDCORE": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: RF0; bidirectional. */
  "RF0": "87",
  /** Physical pin 88: RF1; bidirectional. */
  "RF1": "88",
  /** Physical pin 89: RG1; bidirectional. */
  "RG1": "89",
  /** Physical pin 90: RG0; bidirectional. */
  "RG0": "90",
  /** Physical pin 91: RA6/TRCLK; bidirectional. */
  "RA6/TRCLK": "91",
  /** Physical pin 92: RA7/TRD3; bidirectional. */
  "RA7/TRD3": "92",
  /** Physical pin 93: RE0; bidirectional. */
  "RE0": "93",
  /** Physical pin 94: RE1; bidirectional. */
  "RE1": "94",
  /** Physical pin 95: RG14/TRD2; bidirectional. */
  "RG14/TRD2": "95",
  /** Physical pin 96: RG12/TRD1; bidirectional. */
  "RG12/TRD1": "96",
  /** Physical pin 97: RG13/TRD0; bidirectional. */
  "RG13/TRD0": "97",
  /** Physical pin 98: RE2; bidirectional. */
  "RE2": "98",
  /** Physical pin 99: RE3; bidirectional. */
  "RE3": "99",
  /** Physical pin 100: RE4; bidirectional. */
  "RE4": "100",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX795F512L-80x-PF";
  override referencePrefix = "U";
}

/**
 * MIPS MCU, 80MHz, 512KB Flash, 12KB Boot Flash, 128KB RAM, 2.3-3.6V, USB, CAN, Ethernet, TQFP-100
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX795F512L-80x-PT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001156J.pdf
 * Keywords: 32-bit MIPS MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PIC32MX795F512L_80x_PT extends Component.withPins({
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
  /** Physical pin 17: RA0/TMS; bidirectional. */
  "RA0/TMS": "17",
  /** Physical pin 18: RE8; bidirectional. */
  "RE8": "18",
  /** Physical pin 19: RE9; bidirectional. */
  "RE9": "19",
  /** Physical pin 20: RB5; bidirectional. */
  "RB5": "20",
  /** Physical pin 21: RB4; bidirectional. */
  "RB4": "21",
  /** Physical pin 22: RB3; bidirectional. */
  "RB3": "22",
  /** Physical pin 23: RB2; bidirectional. */
  "RB2": "23",
  /** Physical pin 24: PGEC1/RB1; bidirectional. */
  "PGEC1/RB1": "24",
  /** Physical pin 25: PGED1/RB0; bidirectional. */
  "PGED1/RB0": "25",
  /** Physical pin 26: PGEC2/RB6; bidirectional. */
  "PGEC2/RB6": "26",
  /** Physical pin 27: PGED2/RB7; bidirectional. */
  "PGED2/RB7": "27",
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
  /** Physical pin 38: RA1//TCK; bidirectional. */
  "RA1//TCK": "38",
  /** Physical pin 39: RF13; bidirectional. */
  "RF13": "39",
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
  /** Physical pin 51: RF3; bidirectional. */
  "RF3": "51",
  /** Physical pin 52: RF2; bidirectional. */
  "RF2": "52",
  /** Physical pin 53: RF8; bidirectional. */
  "RF8": "53",
  /** Physical pin 54: VBUS; input. */
  "VBUS": "54",
  /** Physical pin 55: VUSB3V3; power_in. */
  "VUSB3V3": "55",
  /** Physical pin 56: RG3/D-; bidirectional. */
  "RG3/D-": "56",
  /** Physical pin 57: RG2/D+; bidirectional. */
  "RG2/D+": "57",
  /** Physical pin 58: RA2; bidirectional. */
  "RA2": "58",
  /** Physical pin 59: RA3; bidirectional. */
  "RA3": "59",
  /** Physical pin 60: RA4/TDI; bidirectional. */
  "RA4/TDI": "60",
  /** Physical pin 61: RA5/TDO; bidirectional. */
  "RA5/TDO": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: RC12/OSC1/CLK; bidirectional. */
  "RC12/OSC1/CLK": "63",
  /** Physical pin 64: RC15/OSC2/CLKO; bidirectional. */
  "RC15/OSC2/CLKO": "64",
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
  /** Physical pin 73: RC13/SOSCI; bidirectional. */
  "RC13/SOSCI": "73",
  /** Physical pin 74: RC14/SOSCO; bidirectional. */
  "RC14/SOSCO": "74",
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
  /** Physical pin 85: VCAP/VDDCORE; power_out. */
  "VCAP/VDDCORE": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: RF0; bidirectional. */
  "RF0": "87",
  /** Physical pin 88: RF1; bidirectional. */
  "RF1": "88",
  /** Physical pin 89: RG1; bidirectional. */
  "RG1": "89",
  /** Physical pin 90: RG0; bidirectional. */
  "RG0": "90",
  /** Physical pin 91: RA6/TRCLK; bidirectional. */
  "RA6/TRCLK": "91",
  /** Physical pin 92: RA7/TRD3; bidirectional. */
  "RA7/TRD3": "92",
  /** Physical pin 93: RE0; bidirectional. */
  "RE0": "93",
  /** Physical pin 94: RE1; bidirectional. */
  "RE1": "94",
  /** Physical pin 95: RG14/TRD2; bidirectional. */
  "RG14/TRD2": "95",
  /** Physical pin 96: RG12/TRD1; bidirectional. */
  "RG12/TRD1": "96",
  /** Physical pin 97: RG13/TRD0; bidirectional. */
  "RG13/TRD0": "97",
  /** Physical pin 98: RE2; bidirectional. */
  "RE2": "98",
  /** Physical pin 99: RE3; bidirectional. */
  "RE3": "99",
  /** Physical pin 100: RE4; bidirectional. */
  "RE4": "100",
}) {
  override schema = "MCU_Microchip_PIC32:PIC32MX795F512L-80x-PT";
  override referencePrefix = "U";
}

