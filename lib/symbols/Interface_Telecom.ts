// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Bell 202 Compatible Modem, DIP-16/SO-16
 *
 * KiCad symbol: `Interface_Telecom:FX614`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see https://www.cmlmicro.com/wp-content/uploads/2017/06/FX614_ds.pdf
 * Keywords: Bell Modem.
 */
export class FX614 extends Component.withPins({
  "XTALN": "1",
  "XTAL/CLK": "2",
  "M0": "3",
  "M1": "4",
  "RXIN": "5",
  "RXFB": "6",
  "TXOP": "7",
  "VSS": "8",
  "VBIAS": "9",
  "RXEQ": "10",
  "TXD": "11",
  "CLK": "12",
  "RXD": "13",
  "DET": "14",
  "~{RDYN}": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XTALN: "output", "XTAL/CLK": "input", M0: "input", M1: "input", RXIN: "input", RXFB: "output", TXOP: "output", VSS: "power_in", VBIAS: "passive", RXEQ: "input", TXD: "input", CLK: "input", RXD: "output", DET: "output", "~{RDYN}": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Telecom:FX614";
  override referencePrefix = "U";
}

/**
 * DTMF receiver with 4 bit output, SOIC-18
 *
 * KiCad symbol: `Interface_Telecom:HT9170D`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x11.6mm*P1.27mm*.
 * @see http://www.holtek.com/documents/10179/116711/9170v111.pdf
 * Keywords: DTMF Receiver.
 * Default footprint: Package_SO:SOIC-18W_7.5x11.6mm_P1.27mm.
 */
export class HT9170D extends Component.withPins({
  "VP": "1",
  "VN": "2",
  "GS": "3",
  "VREF": "4",
  "INH": "5",
  "PWDN": "6",
  "X1": "7",
  "X2": "8",
  "VSS": "9",
  "OE": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "D3": "14",
  "DV": "15",
  "EST": "16",
  "RT/GT": "17",
  "VDD": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VP: "input", VN: "input", GS: "output", VREF: "power_out", INH: "input", PWDN: "input", X1: "input", X2: "output", VSS: "power_in", OE: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", DV: "output", EST: "output", "RT/GT": "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Telecom:HT9170D";
  override referencePrefix = "U";
}

/**
 * ProSLIC Programmable cmos slic/codec with ringing/battery voltage generation
 *
 * KiCad symbol: `Interface_Telecom:Si3210`. Reference prefix: `U`.
 * Footprint filters: TSSOP*.
 * @see http://www.mouser.com/ds/2/368/si3210-38974.pdf
 * Keywords: ProSLIC slic.
 * Default footprint: Package_SO:TSSOP-38_4.4x9.7mm_P0.5mm.
 */
export class Si3210 extends Component.withPins({
  "~{CS}": "1",
  "~{INT}": "2",
  "PCLK": "3",
  "DRX": "4",
  "DTX": "5",
  "FSYNC": "6",
  "~{RESET}": "7",
  "SDCH": "8",
  "SDCL": "9",
  "VDDA1": "10",
  "IREF": "11",
  "CAPP": "12",
  "QGND": "13",
  "CAPM": "14",
  "STIPDC": "15",
  "SRINGDC": "16",
  "STIPE": "17",
  "SVBAT": "18",
  "SRINGE": "19",
  "STIPAC": "20",
  "SRINGAC": "21",
  "IGMN": "22",
  "GNDA": "23",
  "IGMP": "24",
  "IRINGN": "25",
  "IRINGP": "26",
  "VDDA2": "27",
  "ITIPP": "28",
  "ITIPN": "29",
  "VDDD": "30",
  "GNDD": "31",
  "TEST": "32",
  "DCFF": "33",
  "DCDRV": "34",
  "SDITHRU": "35",
  "SDO": "36",
  "SDI": "37",
  "SCLK": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "~{INT}": "output", PCLK: "input", DRX: "input", DTX: "output", FSYNC: "input", "~{RESET}": "input", SDCH: "output", SDCL: "output", VDDA1: "power_in", IREF: "output", CAPP: "output", QGND: "power_in", CAPM: "output", STIPDC: "input", SRINGDC: "input", STIPE: "input", SVBAT: "input", SRINGE: "input", STIPAC: "input", SRINGAC: "input", IGMN: "output", GNDA: "power_in", IGMP: "output", IRINGN: "input", IRINGP: "input", VDDA2: "power_in", ITIPP: "input", ITIPN: "input", VDDD: "power_in", GNDD: "power_in", TEST: "input", DCFF: "output", DCDRV: "output", SDITHRU: "output", SDO: "output", SDI: "input", SCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_Telecom:Si3210";
  override referencePrefix = "U";
}
