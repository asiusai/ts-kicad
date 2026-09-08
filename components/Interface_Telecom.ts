// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Bell 202 Compatible Modem, DIP-16/SO-16
 *
 * KiCad symbol: `Interface_Telecom:FX614`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see https://www.cmlmicro.com/wp-content/uploads/2017/06/FX614_ds.pdf
 * Keywords: Bell Modem.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FX614 extends Component.withPins({
  /** Physical pin 1: XTALN; output. */
  "XTALN": "1",
  /** Physical pin 2: XTAL/CLK; input. */
  "XTAL/CLK": "2",
  /** Physical pin 3: M0; input. */
  "M0": "3",
  /** Physical pin 4: M1; input. */
  "M1": "4",
  /** Physical pin 5: RXIN; input. */
  "RXIN": "5",
  /** Physical pin 6: RXFB; output. */
  "RXFB": "6",
  /** Physical pin 7: TXOP; output. */
  "TXOP": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: VBIAS; passive. */
  "VBIAS": "9",
  /** Physical pin 10: RXEQ; input. */
  "RXEQ": "10",
  /** Physical pin 11: TXD; input. */
  "TXD": "11",
  /** Physical pin 12: CLK; input. */
  "CLK": "12",
  /** Physical pin 13: RXD; output. */
  "RXD": "13",
  /** Physical pin 14: DET; output. */
  "DET": "14",
  /** Physical pin 15: ~{RDYN}; output. */
  "~{RDYN}": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HT9170D extends Component.withPins({
  /** Physical pin 1: VP; input. */
  "VP": "1",
  /** Physical pin 2: VN; input. */
  "VN": "2",
  /** Physical pin 3: GS; output. */
  "GS": "3",
  /** Physical pin 4: VREF; power_out. */
  "VREF": "4",
  /** Physical pin 5: INH; input. */
  "INH": "5",
  /** Physical pin 6: PWDN; input. */
  "PWDN": "6",
  /** Physical pin 7: X1; input. */
  "X1": "7",
  /** Physical pin 8: X2; output. */
  "X2": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS": "9",
  /** Physical pin 10: OE; input. */
  "OE": "10",
  /** Physical pin 11: D0; tri_state. */
  "D0": "11",
  /** Physical pin 12: D1; tri_state. */
  "D1": "12",
  /** Physical pin 13: D2; tri_state. */
  "D2": "13",
  /** Physical pin 14: D3; tri_state. */
  "D3": "14",
  /** Physical pin 15: DV; output. */
  "DV": "15",
  /** Physical pin 16: EST; output. */
  "EST": "16",
  /** Physical pin 17: RT/GT; bidirectional. */
  "RT/GT": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si3210 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: ~{INT}; output. */
  "~{INT}": "2",
  /** Physical pin 3: PCLK; input. */
  "PCLK": "3",
  /** Physical pin 4: DRX; input. */
  "DRX": "4",
  /** Physical pin 5: DTX; output. */
  "DTX": "5",
  /** Physical pin 6: FSYNC; input. */
  "FSYNC": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: SDCH; output. */
  "SDCH": "8",
  /** Physical pin 9: SDCL; output. */
  "SDCL": "9",
  /** Physical pin 10: VDDA1; power_in. */
  "VDDA1": "10",
  /** Physical pin 11: IREF; output. */
  "IREF": "11",
  /** Physical pin 12: CAPP; output. */
  "CAPP": "12",
  /** Physical pin 13: QGND; power_in. */
  "QGND": "13",
  /** Physical pin 14: CAPM; output. */
  "CAPM": "14",
  /** Physical pin 15: STIPDC; input. */
  "STIPDC": "15",
  /** Physical pin 16: SRINGDC; input. */
  "SRINGDC": "16",
  /** Physical pin 17: STIPE; input. */
  "STIPE": "17",
  /** Physical pin 18: SVBAT; input. */
  "SVBAT": "18",
  /** Physical pin 19: SRINGE; input. */
  "SRINGE": "19",
  /** Physical pin 20: STIPAC; input. */
  "STIPAC": "20",
  /** Physical pin 21: SRINGAC; input. */
  "SRINGAC": "21",
  /** Physical pin 22: IGMN; output. */
  "IGMN": "22",
  /** Physical pin 23: GNDA; power_in. */
  "GNDA": "23",
  /** Physical pin 24: IGMP; output. */
  "IGMP": "24",
  /** Physical pin 25: IRINGN; input. */
  "IRINGN": "25",
  /** Physical pin 26: IRINGP; input. */
  "IRINGP": "26",
  /** Physical pin 27: VDDA2; power_in. */
  "VDDA2": "27",
  /** Physical pin 28: ITIPP; input. */
  "ITIPP": "28",
  /** Physical pin 29: ITIPN; input. */
  "ITIPN": "29",
  /** Physical pin 30: VDDD; power_in. */
  "VDDD": "30",
  /** Physical pin 31: GNDD; power_in. */
  "GNDD": "31",
  /** Physical pin 32: TEST; input. */
  "TEST": "32",
  /** Physical pin 33: DCFF; output. */
  "DCFF": "33",
  /** Physical pin 34: DCDRV; output. */
  "DCDRV": "34",
  /** Physical pin 35: SDITHRU; output. */
  "SDITHRU": "35",
  /** Physical pin 36: SDO; output. */
  "SDO": "36",
  /** Physical pin 37: SDI; input. */
  "SDI": "37",
  /** Physical pin 38: SCLK; input. */
  "SCLK": "38",
}) {
  override schema = "Interface_Telecom:Si3210";
  override referencePrefix = "U";
}

