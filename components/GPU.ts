// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * CRT Controller 1MHz, DIP-40
 *
 * KiCad symbol: `GPU:MC6845`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet_pdf/motorola/MC6845L_and_MC6845P.pdf
 * Keywords: CRT controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC6845 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: LPSTB; input. */
  "LPSTB": "3",
  /** Physical pin 4: MA0; output. */
  "MA0": "4",
  /** Physical pin 5: MA1; output. */
  "MA1": "5",
  /** Physical pin 6: MA2; output. */
  "MA2": "6",
  /** Physical pin 7: MA3; output. */
  "MA3": "7",
  /** Physical pin 8: MA4; output. */
  "MA4": "8",
  /** Physical pin 9: MA5; output. */
  "MA5": "9",
  /** Physical pin 10: MA6; output. */
  "MA6": "10",
  /** Physical pin 11: MA7; output. */
  "MA7": "11",
  /** Physical pin 12: MA8; output. */
  "MA8": "12",
  /** Physical pin 13: MA9; output. */
  "MA9": "13",
  /** Physical pin 14: MA10; output. */
  "MA10": "14",
  /** Physical pin 15: MA11; output. */
  "MA11": "15",
  /** Physical pin 16: MA12; output. */
  "MA12": "16",
  /** Physical pin 17: MA13; output. */
  "MA13": "17",
  /** Physical pin 18: DE; output. */
  "DE": "18",
  /** Physical pin 19: CURSOR; output. */
  "CURSOR": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: CLK; input. */
  "CLK": "21",
  /** Physical pin 22: R/~{W}; input. */
  "R/~{W}": "22",
  /** Physical pin 23: E; input. */
  "E": "23",
  /** Physical pin 24: RS; input. */
  "RS": "24",
  /** Physical pin 25: ~{CS}; input. */
  "~{CS}": "25",
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
  /** Physical pin 34: RA4; output. */
  "RA4": "34",
  /** Physical pin 35: RA3; output. */
  "RA3": "35",
  /** Physical pin 36: RA2; output. */
  "RA2": "36",
  /** Physical pin 37: RA1; output. */
  "RA1": "37",
  /** Physical pin 38: RA0; output. */
  "RA0": "38",
  /** Physical pin 39: HS; output. */
  "HS": "39",
  /** Physical pin 40: VS; output. */
  "VS": "40",
}) {
  override schema = "GPU:MC6845";
  override referencePrefix = "U";
}

/**
 * CRT Controller 1.5MHz, DIP-40
 *
 * KiCad symbol: `GPU:MC68A45`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet_pdf/motorola/MC6845L_and_MC6845P.pdf
 * Keywords: CRT controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68A45 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: LPSTB; input. */
  "LPSTB": "3",
  /** Physical pin 4: MA0; output. */
  "MA0": "4",
  /** Physical pin 5: MA1; output. */
  "MA1": "5",
  /** Physical pin 6: MA2; output. */
  "MA2": "6",
  /** Physical pin 7: MA3; output. */
  "MA3": "7",
  /** Physical pin 8: MA4; output. */
  "MA4": "8",
  /** Physical pin 9: MA5; output. */
  "MA5": "9",
  /** Physical pin 10: MA6; output. */
  "MA6": "10",
  /** Physical pin 11: MA7; output. */
  "MA7": "11",
  /** Physical pin 12: MA8; output. */
  "MA8": "12",
  /** Physical pin 13: MA9; output. */
  "MA9": "13",
  /** Physical pin 14: MA10; output. */
  "MA10": "14",
  /** Physical pin 15: MA11; output. */
  "MA11": "15",
  /** Physical pin 16: MA12; output. */
  "MA12": "16",
  /** Physical pin 17: MA13; output. */
  "MA13": "17",
  /** Physical pin 18: DE; output. */
  "DE": "18",
  /** Physical pin 19: CURSOR; output. */
  "CURSOR": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: CLK; input. */
  "CLK": "21",
  /** Physical pin 22: R/~{W}; input. */
  "R/~{W}": "22",
  /** Physical pin 23: E; input. */
  "E": "23",
  /** Physical pin 24: RS; input. */
  "RS": "24",
  /** Physical pin 25: ~{CS}; input. */
  "~{CS}": "25",
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
  /** Physical pin 34: RA4; output. */
  "RA4": "34",
  /** Physical pin 35: RA3; output. */
  "RA3": "35",
  /** Physical pin 36: RA2; output. */
  "RA2": "36",
  /** Physical pin 37: RA1; output. */
  "RA1": "37",
  /** Physical pin 38: RA0; output. */
  "RA0": "38",
  /** Physical pin 39: HS; output. */
  "HS": "39",
  /** Physical pin 40: VS; output. */
  "VS": "40",
}) {
  override schema = "GPU:MC68A45";
  override referencePrefix = "U";
}

/**
 * CRT Controller 2MHz, DIP-40
 *
 * KiCad symbol: `GPU:MC68B45`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet_pdf/motorola/MC6845L_and_MC6845P.pdf
 * Keywords: CRT controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68B45 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: LPSTB; input. */
  "LPSTB": "3",
  /** Physical pin 4: MA0; output. */
  "MA0": "4",
  /** Physical pin 5: MA1; output. */
  "MA1": "5",
  /** Physical pin 6: MA2; output. */
  "MA2": "6",
  /** Physical pin 7: MA3; output. */
  "MA3": "7",
  /** Physical pin 8: MA4; output. */
  "MA4": "8",
  /** Physical pin 9: MA5; output. */
  "MA5": "9",
  /** Physical pin 10: MA6; output. */
  "MA6": "10",
  /** Physical pin 11: MA7; output. */
  "MA7": "11",
  /** Physical pin 12: MA8; output. */
  "MA8": "12",
  /** Physical pin 13: MA9; output. */
  "MA9": "13",
  /** Physical pin 14: MA10; output. */
  "MA10": "14",
  /** Physical pin 15: MA11; output. */
  "MA11": "15",
  /** Physical pin 16: MA12; output. */
  "MA12": "16",
  /** Physical pin 17: MA13; output. */
  "MA13": "17",
  /** Physical pin 18: DE; output. */
  "DE": "18",
  /** Physical pin 19: CURSOR; output. */
  "CURSOR": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: CLK; input. */
  "CLK": "21",
  /** Physical pin 22: R/~{W}; input. */
  "R/~{W}": "22",
  /** Physical pin 23: E; input. */
  "E": "23",
  /** Physical pin 24: RS; input. */
  "RS": "24",
  /** Physical pin 25: ~{CS}; input. */
  "~{CS}": "25",
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
  /** Physical pin 34: RA4; output. */
  "RA4": "34",
  /** Physical pin 35: RA3; output. */
  "RA3": "35",
  /** Physical pin 36: RA2; output. */
  "RA2": "36",
  /** Physical pin 37: RA1; output. */
  "RA1": "37",
  /** Physical pin 38: RA0; output. */
  "RA0": "38",
  /** Physical pin 39: HS; output. */
  "HS": "39",
  /** Physical pin 40: VS; output. */
  "VS": "40",
}) {
  override schema = "GPU:MC68B45";
  override referencePrefix = "U";
}

