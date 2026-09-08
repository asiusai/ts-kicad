// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Sega VDP / Yamaha YM7101 with integrated Sega PSG / SN76496 (die-shrunk version / Revision A, Yamaha FC1001), PQFP-128
 *
 * KiCad symbol: `Driver_Display:315-5313A`. Reference prefix: `U`.
 * Footprint filters: *PQFP*28x28mm*P0.8*.
 * @see https://consolemods.org/wiki/images/6/6b/PAL_Mega_Drive_Model_1_Service_Manual.pdf#page=54
 * Keywords: Video-Display-Processor SN76489A Obsolete.
 * Default footprint: Package_QFP:PQFP-128_28x28mm_P0.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _315_5313A extends Component.withPins({
  /** Physical pin 1: SD0; input. */
  "SD0": "1",
  /** Physical pin 2: SD1; input. */
  "SD1": "2",
  /** Physical pin 3: SD2; input. */
  "SD2": "3",
  /** Physical pin 4: SD3; input. */
  "SD3": "4",
  /** Physical pin 5: SD4; input. */
  "SD4": "5",
  /** Physical pin 6: SD5; input. */
  "SD5": "6",
  /** Physical pin 7: SD6; input. */
  "SD6": "7",
  /** Physical pin 8: SD7; input. */
  "SD7": "8",
  /** Physical pin 9: ~{SE1}; output. */
  "~{SE1}": "9",
  /** Physical pin 10: ~{SE0}; output. */
  "~{SE0}": "10",
  /** Physical pin 11: SC; output. */
  "SC": "11",
  /** Physical pin 12: ~{RAS1}; output. */
  "~{RAS1}": "12",
  /** Physical pin 13: ~{CAS1}; output. */
  "~{CAS1}": "13",
  /** Physical pin 14: ~{WE1}; output. */
  "~{WE1}": "14",
  /** Physical pin 15: ~{WE0}; output. */
  "~{WE0}": "15",
  /** Physical pin 16: ~{OE1}; output. */
  "~{OE1}": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: RD0; bidirectional. */
  "RD0": "18",
  /** Physical pin 19: RD1; bidirectional. */
  "RD1": "19",
  /** Physical pin 20: RD2; bidirectional. */
  "RD2": "20",
  /** Physical pin 21: RD3; bidirectional. */
  "RD3": "21",
  /** Physical pin 22: RD4; bidirectional. */
  "RD4": "22",
  /** Physical pin 23: RD5; bidirectional. */
  "RD5": "23",
  /** Physical pin 24: RD6; bidirectional. */
  "RD6": "24",
  /** Physical pin 25: RD7; bidirectional. */
  "RD7": "25",
  /** Physical pin 26: AGC; power_in. */
  "AGC": "26",
  /** Physical pin 27: R; output. */
  "R": "27",
  /** Physical pin 28: G; output. */
  "G": "28",
  /** Physical pin 29: B; output. */
  "B": "29",
  /** Physical pin 30: AVC; power_in. */
  "AVC": "30",
  /** Physical pin 31: AD0; bidirectional. */
  "AD0": "31",
  /** Physical pin 32: AD1; bidirectional. */
  "AD1": "32",
  /** Physical pin 33: AD2; bidirectional. */
  "AD2": "33",
  /** Physical pin 34: AD3; bidirectional. */
  "AD3": "34",
  /** Physical pin 35: AD4; bidirectional. */
  "AD4": "35",
  /** Physical pin 36: AD5; bidirectional. */
  "AD5": "36",
  /** Physical pin 37: AD6; bidirectional. */
  "AD6": "37",
  /** Physical pin 38: AD7; bidirectional. */
  "AD7": "38",
  /** Physical pin 39: ~{YS}; output. */
  "~{YS}": "39",
  /** Physical pin 40: SPA/B; bidirectional. */
  "SPA/B": "40",
  /** Physical pin 41: ~{VSYNC}; output. */
  "~{VSYNC}": "41",
  /** Physical pin 42: ~{CSYNC}; bidirectional. */
  "~{CSYNC}": "42",
  /** Physical pin 43: ~{HSYNC}; bidirectional. */
  "~{HSYNC}": "43",
  /** Physical pin 44: ~{HL}; input. */
  "~{HL}": "44",
  /** Physical pin 45: SEL0; input. */
  "SEL0": "45",
  /** Physical pin 46: ~{PAL}; input. */
  "~{PAL}": "46",
  /** Physical pin 47: ~{RESET}; input. */
  "~{RESET}": "47",
  /** Physical pin 48: SEL1; input. */
  "SEL1": "48",
  /** Physical pin 49: CLK1; bidirectional. */
  "CLK1": "49",
  /** Physical pin 50: SBCR; output. */
  "SBCR": "50",
  /** Physical pin 51: CLK0; output. */
  "CLK0": "51",
  /** Physical pin 52: MCK; input. */
  "MCK": "52",
  /** Physical pin 53: EDCK; bidirectional. */
  "EDCK": "53",
  /** Physical pin 54: VDD; passive. */
  "VDD_54": "54",
  /** Physical pin 55: CD0; bidirectional. */
  "CD0": "55",
  /** Physical pin 56: CD1; bidirectional. */
  "CD1": "56",
  /** Physical pin 57: CD2; bidirectional. */
  "CD2": "57",
  /** Physical pin 58: CD3; bidirectional. */
  "CD3": "58",
  /** Physical pin 59: CD4; bidirectional. */
  "CD4": "59",
  /** Physical pin 60: CD5; bidirectional. */
  "CD5": "60",
  /** Physical pin 61: CD6; bidirectional. */
  "CD6": "61",
  /** Physical pin 62: CD7; bidirectional. */
  "CD7": "62",
  /** Physical pin 63: CD8; bidirectional. */
  "CD8": "63",
  /** Physical pin 64: CD9; bidirectional. */
  "CD9": "64",
  /** Physical pin 65: CD10; bidirectional. */
  "CD10": "65",
  /** Physical pin 66: CD11; bidirectional. */
  "CD11": "66",
  /** Physical pin 67: CD12; bidirectional. */
  "CD12": "67",
  /** Physical pin 68: CD13; bidirectional. */
  "CD13": "68",
  /** Physical pin 69: CD14; bidirectional. */
  "CD14": "69",
  /** Physical pin 70: CD15; bidirectional. */
  "CD15": "70",
  /** Physical pin 71: CA0; bidirectional. */
  "CA0": "71",
  /** Physical pin 72: CA1; bidirectional. */
  "CA1": "72",
  /** Physical pin 73: CA2; bidirectional. */
  "CA2": "73",
  /** Physical pin 74: CA3; bidirectional. */
  "CA3": "74",
  /** Physical pin 75: CA4; bidirectional. */
  "CA4": "75",
  /** Physical pin 76: CA5; bidirectional. */
  "CA5": "76",
  /** Physical pin 77: CA6; bidirectional. */
  "CA6": "77",
  /** Physical pin 78: CA7; bidirectional. */
  "CA7": "78",
  /** Physical pin 79: CA8; bidirectional. */
  "CA8": "79",
  /** Physical pin 80: CA9; bidirectional. */
  "CA9": "80",
  /** Physical pin 81: CA10; bidirectional. */
  "CA10": "81",
  /** Physical pin 82: CA11; bidirectional. */
  "CA11": "82",
  /** Physical pin 83: CA12; bidirectional. */
  "CA12": "83",
  /** Physical pin 84: CA13; bidirectional. */
  "CA13": "84",
  /** Physical pin 85: CA14; bidirectional. */
  "CA14": "85",
  /** Physical pin 86: CA15; bidirectional. */
  "CA15": "86",
  /** Physical pin 87: CA16; bidirectional. */
  "CA16": "87",
  /** Physical pin 88: CA17; bidirectional. */
  "CA17": "88",
  /** Physical pin 89: CA18; bidirectional. */
  "CA18": "89",
  /** Physical pin 90: CA19; bidirectional. */
  "CA19": "90",
  /** Physical pin 91: CA20; bidirectional. */
  "CA20": "91",
  /** Physical pin 92: CA21; bidirectional. */
  "CA21": "92",
  /** Physical pin 93: CA22; bidirectional. */
  "CA22": "93",
  /** Physical pin 94: AYS; power_in. */
  "AYS": "94",
  /** Physical pin 95: SOUND; output. */
  "SOUND": "95",
  /** Physical pin 96: AGS; power_in. */
  "AGS": "96",
  /** Physical pin 97: GND; passive. */
  "GND_97": "97",
  /** Physical pin 98: ~{INT}; output. */
  "~{INT}": "98",
  /** Physical pin 99: ~{BR}; output. */
  "~{BR}": "99",
  /** Physical pin 100: ~{BGAK}; bidirectional. */
  "~{BGAK}": "100",
  /** Physical pin 101: ~{BG}; input. */
  "~{BG}": "101",
  /** Physical pin 102: ~{MREQ}; input. */
  "~{MREQ}": "102",
  /** Physical pin 103: ~{INTAK}; input. */
  "~{INTAK}": "103",
  /** Physical pin 104: ~{IPL1}; output. */
  "~{IPL1}": "104",
  /** Physical pin 105: ~{IPL2}; output. */
  "~{IPL2}": "105",
  /** Physical pin 106: ~{IORQ}; input. */
  "~{IORQ}": "106",
  /** Physical pin 107: ~{RD}; input. */
  "~{RD}": "107",
  /** Physical pin 108: ~{WR}; input. */
  "~{WR}": "108",
  /** Physical pin 109: ~{M1}; input. */
  "~{M1}": "109",
  /** Physical pin 110: ~{AS}; input. */
  "~{AS}": "110",
  /** Physical pin 111: ~{UDS}; input. */
  "~{UDS}": "111",
  /** Physical pin 112: ~{LDS}; input. */
  "~{LDS}": "112",
  /** Physical pin 113: R/~{W}; input. */
  "R/~{W}": "113",
  /** Physical pin 114: ~{DTAK}; bidirectional. */
  "~{DTAK}": "114",
  /** Physical pin 115: ~{UWR}; output. */
  "~{UWR}": "115",
  /** Physical pin 116: ~{LWR}; output. */
  "~{LWR}": "116",
  /** Physical pin 117: ~{OE0}; output. */
  "~{OE0}": "117",
  /** Physical pin 118: ~{CAS0}; output. */
  "~{CAS0}": "118",
  /** Physical pin 119: ~{RAS0}; output. */
  "~{RAS0}": "119",
  /** Physical pin 120: RA0; output. */
  "RA0": "120",
  /** Physical pin 121: RA1; output. */
  "RA1": "121",
  /** Physical pin 122: RA2; output. */
  "RA2": "122",
  /** Physical pin 123: RA3; output. */
  "RA3": "123",
  /** Physical pin 124: RA4; output. */
  "RA4": "124",
  /** Physical pin 125: RA5; output. */
  "RA5": "125",
  /** Physical pin 126: RA6; output. */
  "RA6": "126",
  /** Physical pin 127: RA7; output. */
  "RA7": "127",
  /** Physical pin 128: VDD; power_in. */
  "VDD_128": "128",
}) {
  override schema = "Driver_Display:315-5313A";
  override referencePrefix = "U";
}

/**
 * Graphics Display Controller, PDIP-40
 *
 * KiCad symbol: `Driver_Display:82720`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * Keywords: Graphics Controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _82720 extends Component.withPins({
  /** Physical pin 1: 2xWCLK; input. */
  "2xWCLK": "1",
  /** Physical pin 2: ~{DBIN}; input. */
  "~{DBIN}": "2",
  /** Physical pin 3: HSYNC; output. */
  "HSYNC": "3",
  /** Physical pin 4: VSYNC; bidirectional. */
  "VSYNC": "4",
  /** Physical pin 5: BLANK; output. */
  "BLANK": "5",
  /** Physical pin 6: (ALE)~{RAS}; output. */
  "(ALE)~{RAS}": "6",
  /** Physical pin 7: DREQ; output. */
  "DREQ": "7",
  /** Physical pin 8: ~{DACK}; input. */
  "~{DACK}": "8",
  /** Physical pin 9: ~{RD}; input. */
  "~{RD}": "9",
  /** Physical pin 10: ~{WR}; input. */
  "~{WR}": "10",
  /** Physical pin 11: A0; input. */
  "A0": "11",
  /** Physical pin 12: DB0; bidirectional. */
  "DB0": "12",
  /** Physical pin 13: DB1; bidirectional. */
  "DB1": "13",
  /** Physical pin 14: DB2; bidirectional. */
  "DB2": "14",
  /** Physical pin 15: DB3; bidirectional. */
  "DB3": "15",
  /** Physical pin 16: DB4; bidirectional. */
  "DB4": "16",
  /** Physical pin 17: DB5; bidirectional. */
  "DB5": "17",
  /** Physical pin 18: DB6; bidirectional. */
  "DB6": "18",
  /** Physical pin 19: DB7; bidirectional. */
  "DB7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
  /** Physical pin 21: LPEN; input. */
  "LPEN": "21",
  /** Physical pin 22: AD0; bidirectional. */
  "AD0": "22",
  /** Physical pin 23: AD1; bidirectional. */
  "AD1": "23",
  /** Physical pin 24: AD2; bidirectional. */
  "AD2": "24",
  /** Physical pin 25: AD3; bidirectional. */
  "AD3": "25",
  /** Physical pin 26: AD4; bidirectional. */
  "AD4": "26",
  /** Physical pin 27: AD5; bidirectional. */
  "AD5": "27",
  /** Physical pin 28: AD6; bidirectional. */
  "AD6": "28",
  /** Physical pin 29: AD7; bidirectional. */
  "AD7": "29",
  /** Physical pin 30: AD8; bidirectional. */
  "AD8": "30",
  /** Physical pin 31: AD9; bidirectional. */
  "AD9": "31",
  /** Physical pin 32: AD10; bidirectional. */
  "AD10": "32",
  /** Physical pin 33: AD14; bidirectional. */
  "AD14_33": "33",
  /** Physical pin 34: AD12; bidirectional. */
  "AD12": "34",
  /** Physical pin 35: AD13; bidirectional. */
  "AD13": "35",
  /** Physical pin 36: AD14; bidirectional. */
  "AD14_36": "36",
  /** Physical pin 37: AD15; bidirectional. */
  "AD15": "37",
  /** Physical pin 38: A16; output. */
  "A16": "38",
  /** Physical pin 39: A17; output. */
  "A17": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
}) {
  override schema = "Driver_Display:82720";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16
 *
 * KiCad symbol: `Driver_Display:ADS7843E`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7843.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7843E extends Component.withPins({
  /** Physical pin 1: +VCC; passive. */
  "+VCC_1": "1",
  /** Physical pin 2: X+; input. */
  "X+": "2",
  /** Physical pin 3: Y+; input. */
  "Y+": "3",
  /** Physical pin 4: X-; input. */
  "X-": "4",
  /** Physical pin 5: Y-; input. */
  "Y-": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: IN4; input. */
  "IN4": "8",
  /** Physical pin 9: VREF; input. */
  "VREF": "9",
  /** Physical pin 10: +VCC; power_in. */
  "+VCC_10": "10",
  /** Physical pin 11: ~{PENIRQ}; open_collector. */
  "~{PENIRQ}": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: BUSY; output. */
  "BUSY": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: ~{CS}; input. */
  "~{CS}": "15",
  /** Physical pin 16: DCLK; input. */
  "DCLK": "16",
}) {
  override schema = "Driver_Display:ADS7843E";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16
 *
 * KiCad symbol: `Driver_Display:ADS7843E-2K5`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7843.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7843E_2K5 extends Component.withPins({
  /** Physical pin 1: +VCC; passive. */
  "+VCC_1": "1",
  /** Physical pin 2: X+; input. */
  "X+": "2",
  /** Physical pin 3: Y+; input. */
  "Y+": "3",
  /** Physical pin 4: X-; input. */
  "X-": "4",
  /** Physical pin 5: Y-; input. */
  "Y-": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: IN4; input. */
  "IN4": "8",
  /** Physical pin 9: VREF; input. */
  "VREF": "9",
  /** Physical pin 10: +VCC; power_in. */
  "+VCC_10": "10",
  /** Physical pin 11: ~{PENIRQ}; open_collector. */
  "~{PENIRQ}": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: BUSY; output. */
  "BUSY": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: ~{CS}; input. */
  "~{CS}": "15",
  /** Physical pin 16: DCLK; input. */
  "DCLK": "16",
}) {
  override schema = "Driver_Display:ADS7843E-2K5";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16
 *
 * KiCad symbol: `Driver_Display:ADS7843EG4`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7843.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7843EG4 extends Component.withPins({
  /** Physical pin 1: +VCC; passive. */
  "+VCC_1": "1",
  /** Physical pin 2: X+; input. */
  "X+": "2",
  /** Physical pin 3: Y+; input. */
  "Y+": "3",
  /** Physical pin 4: X-; input. */
  "X-": "4",
  /** Physical pin 5: Y-; input. */
  "Y-": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: IN4; input. */
  "IN4": "8",
  /** Physical pin 9: VREF; input. */
  "VREF": "9",
  /** Physical pin 10: +VCC; power_in. */
  "+VCC_10": "10",
  /** Physical pin 11: ~{PENIRQ}; open_collector. */
  "~{PENIRQ}": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: BUSY; output. */
  "BUSY": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: ~{CS}; input. */
  "~{CS}": "15",
  /** Physical pin 16: DCLK; input. */
  "DCLK": "16",
}) {
  override schema = "Driver_Display:ADS7843EG4";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +125 C, QSPI, SPI, 3-wire serial interface, SSOP-16
 *
 * KiCad symbol: `Driver_Display:ADS7843IDBQRQ1`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7843-q1.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +125 C, QSPI, SPI, 3-wire serial interface, SSOP-16.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADS7843IDBQRQ1 extends Component.withPins({
  /** Physical pin 1: +VCC; passive. */
  "+VCC_1": "1",
  /** Physical pin 2: X+; input. */
  "X+": "2",
  /** Physical pin 3: Y+; input. */
  "Y+": "3",
  /** Physical pin 4: X-; input. */
  "X-": "4",
  /** Physical pin 5: Y-; input. */
  "Y-": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: IN4; input. */
  "IN4": "8",
  /** Physical pin 9: VREF; input. */
  "VREF": "9",
  /** Physical pin 10: +VCC; power_in. */
  "+VCC_10": "10",
  /** Physical pin 11: ~{PENIRQ}; open_collector. */
  "~{PENIRQ}": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: BUSY; output. */
  "BUSY": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: ~{CS}; input. */
  "~{CS}": "15",
  /** Physical pin 16: DCLK; input. */
  "DCLK": "16",
}) {
  override schema = "Driver_Display:ADS7843IDBQRQ1";
  override referencePrefix = "U";
}

/**
 * 32-Segment CMOS LCD Driver, CMOS and TTL-compatible inputs, VDD +3.0V to +8.5V, PLCC-44
 *
 * KiCad symbol: `Driver_Display:AY0438X-L`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see http://www.farnell.com/datasheets/43336.pdf
 * Keywords: driver display.
 * Default footprint: Package_LCC:PLCC-44.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AY0438X_L extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: LOAD; input. */
  "LOAD": "2",
  /** Physical pin 3: SEG_32; output. */
  "SEG_32": "3",
  /** Physical pin 4: SEG_31; output. */
  "SEG_31": "4",
  /** Physical pin 5: SEG_30; output. */
  "SEG_30": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: SEG_29; output. */
  "SEG_29": "7",
  /** Physical pin 8: SEG_28; output. */
  "SEG_28": "8",
  /** Physical pin 9: SEG_27; output. */
  "SEG_27": "9",
  /** Physical pin 10: SEG_26; output. */
  "SEG_26": "10",
  /** Physical pin 11: SEG_25; output. */
  "SEG_25": "11",
  /** Physical pin 12: SEG_24; output. */
  "SEG_24": "12",
  /** Physical pin 13: SEG_23; output. */
  "SEG_23": "13",
  /** Physical pin 14: SEG_22; output. */
  "SEG_22": "14",
  /** Physical pin 15: SEG_21; output. */
  "SEG_21": "15",
  /** Physical pin 16: SEG_20; output. */
  "SEG_20": "16",
  /** Physical pin 17: SEG_19; output. */
  "SEG_19": "17",
  /** Physical pin 18: SEG_18; output. */
  "SEG_18": "18",
  /** Physical pin 19: SEG_17; output. */
  "SEG_17": "19",
  /** Physical pin 20: SEG_16; output. */
  "SEG_16": "20",
  /** Physical pin 21: SEG_15; output. */
  "SEG_15": "21",
  /** Physical pin 22: SEG_14; output. */
  "SEG_14": "22",
  /** Physical pin 23: SEG_13; output. */
  "SEG_13": "23",
  /** Physical pin 24: SEG_12; output. */
  "SEG_12": "24",
  /** Physical pin 25: SEG_11; output. */
  "SEG_11": "25",
  /** Physical pin 26: SEG_10; output. */
  "SEG_10": "26",
  /** Physical pin 27: SEG_9; output. */
  "SEG_9": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: SEG_8; output. */
  "SEG_8": "30",
  /** Physical pin 31: SEG_7; output. */
  "SEG_7": "31",
  /** Physical pin 32: SEG_6; output. */
  "SEG_6": "32",
  /** Physical pin 33: BP; output. */
  "BP": "33",
  /** Physical pin 34: LCD0; input. */
  "LCD0": "34",
  /** Physical pin 35: SEG_5; output. */
  "SEG_5": "35",
  /** Physical pin 36: SEG_4; output. */
  "SEG_4": "36",
  /** Physical pin 37: DATA_IN; input. */
  "DATA_IN": "37",
  /** Physical pin 38: DATA_OUT; output. */
  "DATA_OUT": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: VSS; power_in. */
  "VSS": "40",
  /** Physical pin 41: SEG_3; output. */
  "SEG_3": "41",
  /** Physical pin 42: SEG_2; output. */
  "SEG_2": "42",
  /** Physical pin 43: SEG_1; output. */
  "SEG_1": "43",
  /** Physical pin 44: CLOCK; input. */
  "CLOCK": "44",
}) {
  override schema = "Driver_Display:AY0438X-L";
  override referencePrefix = "U";
}

/**
 * 32-Segment CMOS LCD Driver, CMOS and TTL-compatible inputs, VDD +3.0V to +8.5V, DIP-40
 *
 * KiCad symbol: `Driver_Display:AY0438X-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://www.farnell.com/datasheets/43336.pdf
 * Keywords: driver display.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AY0438X_P extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: LOAD; input. */
  "LOAD": "2",
  /** Physical pin 3: SEG_32; output. */
  "SEG_32": "3",
  /** Physical pin 4: SEG_31; output. */
  "SEG_31": "4",
  /** Physical pin 5: SEG_30; output. */
  "SEG_30": "5",
  /** Physical pin 6: SEG_29; output. */
  "SEG_29": "6",
  /** Physical pin 7: SEG_28; output. */
  "SEG_28": "7",
  /** Physical pin 8: SEG_27; output. */
  "SEG_27": "8",
  /** Physical pin 9: SEG_26; output. */
  "SEG_26": "9",
  /** Physical pin 10: SEG_25; output. */
  "SEG_25": "10",
  /** Physical pin 11: SEG_24; output. */
  "SEG_24": "11",
  /** Physical pin 12: SEG_23; output. */
  "SEG_23": "12",
  /** Physical pin 13: SEG_22; output. */
  "SEG_22": "13",
  /** Physical pin 14: SEG_21; output. */
  "SEG_21": "14",
  /** Physical pin 15: SEG_20; output. */
  "SEG_20": "15",
  /** Physical pin 16: SEG_19; output. */
  "SEG_19": "16",
  /** Physical pin 17: SEG_18; output. */
  "SEG_18": "17",
  /** Physical pin 18: SEG_17; output. */
  "SEG_17": "18",
  /** Physical pin 19: SEG_16; output. */
  "SEG_16": "19",
  /** Physical pin 20: SEG_15; output. */
  "SEG_15": "20",
  /** Physical pin 21: SEG_14; output. */
  "SEG_14": "21",
  /** Physical pin 22: SEG_13; output. */
  "SEG_13": "22",
  /** Physical pin 23: SEG_12; output. */
  "SEG_12": "23",
  /** Physical pin 24: SEG_11; output. */
  "SEG_11": "24",
  /** Physical pin 25: SEG_10; output. */
  "SEG_10": "25",
  /** Physical pin 26: SEG_9; output. */
  "SEG_9": "26",
  /** Physical pin 27: SEG_8; output. */
  "SEG_8": "27",
  /** Physical pin 28: SEG_7; output. */
  "SEG_7": "28",
  /** Physical pin 29: SEG_6; output. */
  "SEG_6": "29",
  /** Physical pin 30: BP; output. */
  "BP": "30",
  /** Physical pin 31: LCD0; input. */
  "LCD0": "31",
  /** Physical pin 32: SEG_5; output. */
  "SEG_5": "32",
  /** Physical pin 33: SEG_4; output. */
  "SEG_4": "33",
  /** Physical pin 34: DATA_IN; input. */
  "DATA_IN": "34",
  /** Physical pin 35: DATA_OUT; output. */
  "DATA_OUT": "35",
  /** Physical pin 36: VSS; power_in. */
  "VSS": "36",
  /** Physical pin 37: SEG_3; output. */
  "SEG_3": "37",
  /** Physical pin 38: SEG_2; output. */
  "SEG_2": "38",
  /** Physical pin 39: SEG_1; output. */
  "SEG_1": "39",
  /** Physical pin 40: CLOCK; input. */
  "CLOCK": "40",
}) {
  override schema = "Driver_Display:AY0438X-P";
  override referencePrefix = "U";
}

/**
 * ILI9341 controller, SPI TFT LCD Display, 9-pin breakout PCB, 4-pin SD card interface, 5V/3.3V
 *
 * KiCad symbol: `Driver_Display:CR2013-MI2120`. Reference prefix: `U`.
 * Footprint filters: *CR2013*MI2120*.
 * @see http://pan.baidu.com/s/11Y990
 * Keywords: driver display.
 * Default footprint: Display:CR2013-MI2120.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CR2013_MI2120 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: RESET; input. */
  "RESET": "4",
  /** Physical pin 5: D/~{C}; input. */
  "D/~{C}": "5",
  /** Physical pin 6: MOSI; input. */
  "MOSI": "6",
  /** Physical pin 7: SCK; input. */
  "SCK": "7",
  /** Physical pin 8: LED; input. */
  "LED": "8",
  /** Physical pin 9: MISO; output. */
  "MISO": "9",
  /** Physical pin 10: SD_CS; input. */
  "SD_CS": "10",
  /** Physical pin 11: SD_MOSI; input. */
  "SD_MOSI": "11",
  /** Physical pin 12: SD_MISO; output. */
  "SD_MISO": "12",
  /** Physical pin 13: SD_SCK; input. */
  "SD_SCK": "13",
  /** Physical pin 14: FLASH_CD; input. */
  "FLASH_CD": "14",
}) {
  override schema = "Driver_Display:CR2013-MI2120";
  override referencePrefix = "U";
}

/**
 * Dot Matrix LCD controller / driver LSI display, 8x2 characters, 9920-bit CGROM (240 character fonts), 80 x 8-bit display data RAM, PQFP-80 (Hitachi FP-80B)
 *
 * KiCad symbol: `Driver_Display:HD44780UxxxFS`. Reference prefix: `U`.
 * Footprint filters: Hitachi?FP80B?PQFP*14x20mm?P0.8mm*.
 * @see https://cdn.sparkfun.com/assets/9/5/f/7/b/HD44780.pdf
 * Keywords: Hitachi LCD-II HD44780UA00FS HD44780UA02FS.
 * Default footprint: Package_QFP:Hitachi_FP80B_PQFP-80_14x20mm_P0.8mm.
 * Units: 12.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HD44780UxxxFS extends Component.withPins({
  /** Physical pin 23: GND; power_in. */
  "GND": "23",
  /** Physical pin 24: OSC1; input. */
  "OSC1": "24",
  /** Physical pin 25: OSC2; output. */
  "OSC2": "25",
  /** Physical pin 26: V1; input. */
  "V1": "26",
  /** Physical pin 27: V2; input. */
  "V2": "27",
  /** Physical pin 28: V3; input. */
  "V3": "28",
  /** Physical pin 29: V4; input. */
  "V4": "29",
  /** Physical pin 30: V5; input. */
  "V5": "30",
  /** Physical pin 33: V_{CC}; power_in. */
  "V_{CC}": "33",
  /** Physical pin 36: RS; input. */
  "RS": "36",
  /** Physical pin 37: R/~{W}; input. */
  "R/~{W}": "37",
  /** Physical pin 38: E; input. */
  "E": "38",
  /** Physical pin 39: DB0; bidirectional. */
  "DB0": "39",
  /** Physical pin 40: DB1; bidirectional. */
  "DB1": "40",
  /** Physical pin 41: DB2; bidirectional. */
  "DB2": "41",
  /** Physical pin 42: DB3; bidirectional. */
  "DB3": "42",
  /** Physical pin 43: DB4; bidirectional. */
  "DB4": "43",
  /** Physical pin 44: DB5; bidirectional. */
  "DB5": "44",
  /** Physical pin 45: DB6; bidirectional. */
  "DB6": "45",
  /** Physical pin 46: DB7; bidirectional. */
  "DB7": "46",
  /** Physical pin 47: COM1; output. */
  "COM1": "47",
  /** Physical pin 48: COM2; output. */
  "COM2": "48",
  /** Physical pin 49: COM3; output. */
  "COM3": "49",
  /** Physical pin 50: COM4; output. */
  "COM4": "50",
  /** Physical pin 51: COM5; output. */
  "COM5": "51",
  /** Physical pin 52: COM6; output. */
  "COM6": "52",
  /** Physical pin 53: COM7; output. */
  "COM7": "53",
  /** Physical pin 54: COM8; output. */
  "COM8": "54",
  /** Physical pin 55: COM9; output. */
  "COM9": "55",
  /** Physical pin 56: COM10; output. */
  "COM10": "56",
  /** Physical pin 57: COM11; output. */
  "COM11": "57",
  /** Physical pin 58: COM12; output. */
  "COM12": "58",
  /** Physical pin 59: COM13; output. */
  "COM13": "59",
  /** Physical pin 60: COM14; output. */
  "COM14": "60",
  /** Physical pin 61: COM15; output. */
  "COM15": "61",
  /** Physical pin 62: COM16; output. */
  "COM16": "62",
  /** Physical pin 18: SEG5; output. */
  "SEG5": "18",
  /** Physical pin 19: SEG4; output. */
  "SEG4": "19",
  /** Physical pin 20: SEG3; output. */
  "SEG3": "20",
  /** Physical pin 21: SEG2; output. */
  "SEG2": "21",
  /** Physical pin 22: SEG1; output. */
  "SEG1": "22",
  /** Physical pin 13: SEG10; output. */
  "SEG10": "13",
  /** Physical pin 14: SEG9; output. */
  "SEG9": "14",
  /** Physical pin 15: SEG8; output. */
  "SEG8": "15",
  /** Physical pin 16: SEG7; output. */
  "SEG7": "16",
  /** Physical pin 17: SEG6; output. */
  "SEG6": "17",
  /** Physical pin 8: SEG15; output. */
  "SEG15": "8",
  /** Physical pin 9: SEG14; output. */
  "SEG14": "9",
  /** Physical pin 10: SEG13; output. */
  "SEG13": "10",
  /** Physical pin 11: SEG12; output. */
  "SEG12": "11",
  /** Physical pin 12: SEG11; output. */
  "SEG11": "12",
  /** Physical pin 3: SEG20; output. */
  "SEG20": "3",
  /** Physical pin 4: SEG19; output. */
  "SEG19": "4",
  /** Physical pin 5: SEG18; output. */
  "SEG18": "5",
  /** Physical pin 6: SEG17; output. */
  "SEG17": "6",
  /** Physical pin 7: SEG16; output. */
  "SEG16": "7",
  /** Physical pin 1: SEG22; output. */
  "SEG22": "1",
  /** Physical pin 2: SEG21; output. */
  "SEG21": "2",
  /** Physical pin 78: SEG25; output. */
  "SEG25": "78",
  /** Physical pin 79: SEG24; output. */
  "SEG24": "79",
  /** Physical pin 80: SEG23; output. */
  "SEG23": "80",
  /** Physical pin 73: SEG30; output. */
  "SEG30": "73",
  /** Physical pin 74: SEG29; output. */
  "SEG29": "74",
  /** Physical pin 75: SEG28; output. */
  "SEG28": "75",
  /** Physical pin 76: SEG27; output. */
  "SEG27": "76",
  /** Physical pin 77: SEG26; output. */
  "SEG26": "77",
  /** Physical pin 68: SEG35; output. */
  "SEG35": "68",
  /** Physical pin 69: SEG34; output. */
  "SEG34": "69",
  /** Physical pin 70: SEG33; output. */
  "SEG33": "70",
  /** Physical pin 71: SEG32; output. */
  "SEG32": "71",
  /** Physical pin 72: SEG31; output. */
  "SEG31": "72",
  /** Physical pin 63: SEG40; output. */
  "SEG40": "63",
  /** Physical pin 64: SEG39; output. */
  "SEG39": "64",
  /** Physical pin 65: SEG38; output. */
  "SEG38": "65",
  /** Physical pin 66: SEG37; output. */
  "SEG37": "66",
  /** Physical pin 67: SEG36; output. */
  "SEG36": "67",
  /** Physical pin 31: CL1; output. */
  "CL1": "31",
  /** Physical pin 32: CL2; output. */
  "CL2": "32",
  /** Physical pin 34: M; output. */
  "M": "34",
  /** Physical pin 35: D; output. */
  "D": "35",
}) {
  override schema = "Driver_Display:HD44780UxxxFS";
  override referencePrefix = "U";
}

/**
 * 32-Channel, Serial to Parallel Converter w/ Open Drain Outputs, PQFP-44
 *
 * KiCad symbol: `Driver_Display:HV5622PG`. Reference prefix: `U`.
 * Footprint filters: *PQFP*10x10mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/20005854A.pdf
 * Keywords: level-shifter 32-bit-shift-register.
 * Default footprint: Package_QFP:PQFP-44_10x10mm_P0.8mm.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV5622PG extends Component.withPins({
  /** Physical pin 15: HVOUT8; open_collector. */
  "HVOUT8": "15",
  /** Physical pin 16: HVOUT7; open_collector. */
  "HVOUT7": "16",
  /** Physical pin 17: HVOUT6; open_collector. */
  "HVOUT6": "17",
  /** Physical pin 18: HVOUT5; open_collector. */
  "HVOUT5": "18",
  /** Physical pin 19: HVOUT4; open_collector. */
  "HVOUT4": "19",
  /** Physical pin 20: HVOUT3; open_collector. */
  "HVOUT3": "20",
  /** Physical pin 21: HVOUT2; open_collector. */
  "HVOUT2": "21",
  /** Physical pin 22: HVOUT1; open_collector. */
  "HVOUT1": "22",
  /** Physical pin 23: DATA_OUT; output. */
  "DATA_OUT": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: ~{POL}; input. */
  "~{POL}": "27",
  /** Physical pin 28: CLK; input. */
  "CLK": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD": "30",
  /** Physical pin 31: ~{LE}; input. */
  "~{LE}": "31",
  /** Physical pin 32: DATA_IN; input. */
  "DATA_IN": "32",
  /** Physical pin 33: ~{BL}; input. */
  "~{BL}": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 7: HVOUT16; open_collector. */
  "HVOUT16": "7",
  /** Physical pin 8: HVOUT15; open_collector. */
  "HVOUT15": "8",
  /** Physical pin 9: HVOUT14; open_collector. */
  "HVOUT14": "9",
  /** Physical pin 10: HVOUT13; open_collector. */
  "HVOUT13": "10",
  /** Physical pin 11: HVOUT12; open_collector. */
  "HVOUT12": "11",
  /** Physical pin 12: HVOUT11; open_collector. */
  "HVOUT11": "12",
  /** Physical pin 13: HVOUT10; open_collector. */
  "HVOUT10": "13",
  /** Physical pin 14: HVOUT9; open_collector. */
  "HVOUT9": "14",
  /** Physical pin 1: HVOUT22; open_collector. */
  "HVOUT22": "1",
  /** Physical pin 2: HVOUT21; open_collector. */
  "HVOUT21": "2",
  /** Physical pin 3: HVOUT20; open_collector. */
  "HVOUT20": "3",
  /** Physical pin 4: HVOUT19; open_collector. */
  "HVOUT19": "4",
  /** Physical pin 5: HVOUT18; open_collector. */
  "HVOUT18": "5",
  /** Physical pin 6: HVOUT17; open_collector. */
  "HVOUT17": "6",
  /** Physical pin 43: HVOUT24; open_collector. */
  "HVOUT24": "43",
  /** Physical pin 44: HVOUT23; open_collector. */
  "HVOUT23": "44",
  /** Physical pin 35: HVOUT32; open_collector. */
  "HVOUT32": "35",
  /** Physical pin 36: HVOUT31; open_collector. */
  "HVOUT31": "36",
  /** Physical pin 37: HVOUT30; open_collector. */
  "HVOUT30": "37",
  /** Physical pin 38: HVOUT29; open_collector. */
  "HVOUT29": "38",
  /** Physical pin 39: HVOUT28; open_collector. */
  "HVOUT28": "39",
  /** Physical pin 40: HVOUT27; open_collector. */
  "HVOUT27": "40",
  /** Physical pin 41: HVOUT26; open_collector. */
  "HVOUT26": "41",
  /** Physical pin 42: HVOUT25; open_collector. */
  "HVOUT25": "42",
}) {
  override schema = "Driver_Display:HV5622PG";
  override referencePrefix = "U";
}

/**
 * 12-bit, 4-wire touchscreen controller, 1.2 - 3.6V single supply, I2C interface, TSSOP-16
 *
 * KiCad symbol: `Driver_Display:TSC2007xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tsc2007.pdf
 * Keywords: Texas-Instruments TSC2007IPW.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSC2007xPW extends Component.withPins({
  /** Physical pin 1: VDD/REF; power_in. */
  "VDD/REF": "1",
  /** Physical pin 2: X+; input. */
  "X+": "2",
  /** Physical pin 3: Y+; input. */
  "Y+": "3",
  /** Physical pin 4: X-; input. */
  "X-": "4",
  /** Physical pin 5: Y-; input. */
  "Y-": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: ~{PENIRQ}; open_collector. */
  "~{PENIRQ}": "10",
  /** Physical pin 11: SDA; bidirectional. */
  "SDA": "11",
  /** Physical pin 12: SCL; bidirectional. */
  "SCL": "12",
  /** Physical pin 13: A1; input. */
  "A1": "13",
  /** Physical pin 14: A0; input. */
  "A0": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: AUX; input. */
  "AUX": "16",
}) {
  override schema = "Driver_Display:TSC2007xPW";
  override referencePrefix = "U";
}

/**
 * 12-bit, 4-wire touchscreen controller, 1.2 - 3.6V single supply, I2C interface, UFBGA-12 (Texas DSBGA / YZG)
 *
 * KiCad symbol: `Driver_Display:TSC2007xYZG`. Reference prefix: `U`.
 * Footprint filters: *BGA*2.11x1.61mm?Layout4x3?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tsc2007.pdf
 * Keywords: Texas-Instruments TSC2007IYZG.
 * Default footprint: Package_BGA:Texas_DSBGA-12_2.11x1.61mm_Layout4x3_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSC2007xYZG extends Component.withPins({
  /** Physical pin A1: AUX; input. */
  "AUX": "A1",
  /** Physical pin A2: VDD/REF; power_in. */
  "VDD/REF": "A2",
  /** Physical pin A3: X+; input. */
  "X+": "A3",
  /** Physical pin B1: ~{PENIRQ}; open_collector. */
  "~{PENIRQ}": "B1",
  /** Physical pin B2: A0; input. */
  "A0": "B2",
  /** Physical pin B3: Y+; input. */
  "Y+": "B3",
  /** Physical pin C1: SDA; bidirectional. */
  "SDA": "C1",
  /** Physical pin C2: A1; input. */
  "A1": "C2",
  /** Physical pin C3: X-; input. */
  "X-": "C3",
  /** Physical pin D1: SCL; bidirectional. */
  "SCL": "D1",
  /** Physical pin D2: GND; power_in. */
  "GND": "D2",
  /** Physical pin D3: Y-; input. */
  "Y-": "D3",
}) {
  override schema = "Driver_Display:TSC2007xYZG";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, QFN-16
 *
 * KiCad symbol: `Driver_Display:XPT2046QF`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*4x4mm*P0.65mm*.
 * @see http://www.xptek.cn/uploadfile/download/201707171401161883.pdf
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XPT2046QF extends Component.withPins({
  /** Physical pin 1: BUSY; output. */
  "BUSY": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: DCLK; input. */
  "DCLK": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: XP; input. */
  "XP": "6",
  /** Physical pin 7: YP; input. */
  "YP": "7",
  /** Physical pin 8: XN; input. */
  "XN": "8",
  /** Physical pin 9: YN; input. */
  "YN": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: VBAT; power_in. */
  "VBAT": "11",
  /** Physical pin 12: AUX; input. */
  "AUX": "12",
  /** Physical pin 13: VREF; bidirectional. */
  "VREF": "13",
  /** Physical pin 14: IOVDD; power_in. */
  "IOVDD": "14",
  /** Physical pin 15: ~{PENIRQ}; open_collector. */
  "~{PENIRQ}": "15",
  /** Physical pin 16: DOUT; output. */
  "DOUT": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC": "17",
}) {
  override schema = "Driver_Display:XPT2046QF";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, TSSOP-16
 *
 * KiCad symbol: `Driver_Display:XPT2046TS`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.xptek.cn/uploadfile/download/201707171401161883.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, TSSOP-16.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XPT2046TS extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: XP; input. */
  "XP": "2",
  /** Physical pin 3: YP; input. */
  "YP": "3",
  /** Physical pin 4: XN; input. */
  "XN": "4",
  /** Physical pin 5: YN; input. */
  "YN": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: VBAT; power_in. */
  "VBAT": "7",
  /** Physical pin 8: IN; input. */
  "IN": "8",
  /** Physical pin 9: VREF; bidirectional. */
  "VREF": "9",
  /** Physical pin 10: IOVDD; power_in. */
  "IOVDD": "10",
  /** Physical pin 11: ~{PENIRQ}; open_collector. */
  "~{PENIRQ}": "11",
  /** Physical pin 12: DOUT; output. */
  "DOUT": "12",
  /** Physical pin 13: BUSY; output. */
  "BUSY": "13",
  /** Physical pin 14: DIN; input. */
  "DIN": "14",
  /** Physical pin 15: ~{CS}; input. */
  "~{CS}": "15",
  /** Physical pin 16: DCLK; input. */
  "DCLK": "16",
}) {
  override schema = "Driver_Display:XPT2046TS";
  override referencePrefix = "U";
}

