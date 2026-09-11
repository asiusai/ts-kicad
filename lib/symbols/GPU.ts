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
 */
export class MC6845 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "LPSTB": "3",
  "MA0": "4",
  "MA1": "5",
  "MA2": "6",
  "MA3": "7",
  "MA4": "8",
  "MA5": "9",
  "MA6": "10",
  "MA7": "11",
  "MA8": "12",
  "MA9": "13",
  "MA10": "14",
  "MA11": "15",
  "MA12": "16",
  "MA13": "17",
  "DE": "18",
  "CURSOR": "19",
  "VCC": "20",
  "CLK": "21",
  "R/~{W}": "22",
  "E": "23",
  "RS": "24",
  "~{CS}": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "RA4": "34",
  "RA3": "35",
  "RA2": "36",
  "RA1": "37",
  "RA0": "38",
  "HS": "39",
  "VS": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "input", LPSTB: "input", MA0: "output", MA1: "output", MA2: "output", MA3: "output", MA4: "output", MA5: "output", MA6: "output", MA7: "output", MA8: "output", MA9: "output", MA10: "output", MA11: "output", MA12: "output", MA13: "output", DE: "output", CURSOR: "output", VCC: "power_in", CLK: "input", "R/~{W}": "input", E: "input", RS: "input", "~{CS}": "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", RA4: "output", RA3: "output", RA2: "output", RA1: "output", RA0: "output", HS: "output", VS: "output", ...opts.pinTypes } });
  }
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
 */
export class MC68A45 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "LPSTB": "3",
  "MA0": "4",
  "MA1": "5",
  "MA2": "6",
  "MA3": "7",
  "MA4": "8",
  "MA5": "9",
  "MA6": "10",
  "MA7": "11",
  "MA8": "12",
  "MA9": "13",
  "MA10": "14",
  "MA11": "15",
  "MA12": "16",
  "MA13": "17",
  "DE": "18",
  "CURSOR": "19",
  "VCC": "20",
  "CLK": "21",
  "R/~{W}": "22",
  "E": "23",
  "RS": "24",
  "~{CS}": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "RA4": "34",
  "RA3": "35",
  "RA2": "36",
  "RA1": "37",
  "RA0": "38",
  "HS": "39",
  "VS": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "input", LPSTB: "input", MA0: "output", MA1: "output", MA2: "output", MA3: "output", MA4: "output", MA5: "output", MA6: "output", MA7: "output", MA8: "output", MA9: "output", MA10: "output", MA11: "output", MA12: "output", MA13: "output", DE: "output", CURSOR: "output", VCC: "power_in", CLK: "input", "R/~{W}": "input", E: "input", RS: "input", "~{CS}": "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", RA4: "output", RA3: "output", RA2: "output", RA1: "output", RA0: "output", HS: "output", VS: "output", ...opts.pinTypes } });
  }
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
 */
export class MC68B45 extends Component.withPins({
  "GND": "1",
  "~{RESET}": "2",
  "LPSTB": "3",
  "MA0": "4",
  "MA1": "5",
  "MA2": "6",
  "MA3": "7",
  "MA4": "8",
  "MA5": "9",
  "MA6": "10",
  "MA7": "11",
  "MA8": "12",
  "MA9": "13",
  "MA10": "14",
  "MA11": "15",
  "MA12": "16",
  "MA13": "17",
  "DE": "18",
  "CURSOR": "19",
  "VCC": "20",
  "CLK": "21",
  "R/~{W}": "22",
  "E": "23",
  "RS": "24",
  "~{CS}": "25",
  "D7": "26",
  "D6": "27",
  "D5": "28",
  "D4": "29",
  "D3": "30",
  "D2": "31",
  "D1": "32",
  "D0": "33",
  "RA4": "34",
  "RA3": "35",
  "RA2": "36",
  "RA1": "37",
  "RA0": "38",
  "HS": "39",
  "VS": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "~{RESET}": "input", LPSTB: "input", MA0: "output", MA1: "output", MA2: "output", MA3: "output", MA4: "output", MA5: "output", MA6: "output", MA7: "output", MA8: "output", MA9: "output", MA10: "output", MA11: "output", MA12: "output", MA13: "output", DE: "output", CURSOR: "output", VCC: "power_in", CLK: "input", "R/~{W}": "input", E: "input", RS: "input", "~{CS}": "input", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", RA4: "output", RA3: "output", RA2: "output", RA1: "output", RA0: "output", HS: "output", VS: "output", ...opts.pinTypes } });
  }
  override schema = "GPU:MC68B45";
  override referencePrefix = "U";
}
