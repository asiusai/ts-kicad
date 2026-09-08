// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * HITAG RF Reader Device, SOIC-14
 *
 * KiCad symbol: `RF_RFID:HTRC11001T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/037031.pdf
 * Keywords: HITAG RFID.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HTRC11001T extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: TX2; output. */
  "TX2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: TX1; output. */
  "TX1": "4",
  /** Physical pin 5: MODE; input. */
  "MODE": "5",
  /** Physical pin 6: XTAL1; input. */
  "XTAL1": "6",
  /** Physical pin 7: XTAL2; output. */
  "XTAL2": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
  /** Physical pin 9: DIN; input. */
  "DIN": "9",
  /** Physical pin 10: DOUT; output. */
  "DOUT": "10",
  /** Physical pin 12: CEXT; passive. */
  "CEXT": "12",
  /** Physical pin 13: QGND; passive. */
  "QGND": "13",
  /** Physical pin 14: RX; input. */
  "RX": "14",
}) {
  override schema = "RF_RFID:HTRC11001T";
  override referencePrefix = "U";
}

/**
 * NFC frontend.  ISO/IEC 14443A&B, MIFARE®, FeliCa and NFC Forum tag types, HVQFN-32
 *
 * KiCad symbol: `RF_RFID:PN5120A0HN1`. Reference prefix: `U`.
 * Footprint filters: HVQFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PN512.pdf
 * Keywords: PN512 RFID.
 * Default footprint: Package_DFN_QFN:HVQFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PN5120A0HN1 extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: PVDD; power_in. */
  "PVDD": "2",
  /** Physical pin 3: DVDD; power_in. */
  "DVDD": "3",
  /** Physical pin 4: DVSS; power_in. */
  "DVSS": "4",
  /** Physical pin 5: PVSS; power_in. */
  "PVSS": "5",
  /** Physical pin 6: ~{NRSTPD}; input. */
  "~{NRSTPD}": "6",
  /** Physical pin 7: SIGIN; input. */
  "SIGIN": "7",
  /** Physical pin 8: SIGOUT; output. */
  "SIGOUT": "8",
  /** Physical pin 9: SVDD; power_in. */
  "SVDD": "9",
  /** Physical pin 10: TVSS; power_in. */
  "TVSS_10": "10",
  /** Physical pin 11: TX1; output. */
  "TX1": "11",
  /** Physical pin 12: TVDD; power_in. */
  "TVDD": "12",
  /** Physical pin 13: TX2; output. */
  "TX2": "13",
  /** Physical pin 14: TVSS; passive. */
  "TVSS_14": "14",
  /** Physical pin 15: AVDD; power_in. */
  "AVDD": "15",
  /** Physical pin 16: VMID; power_out. */
  "VMID": "16",
  /** Physical pin 17: RX; input. */
  "RX": "17",
  /** Physical pin 18: AVSS; power_in. */
  "AVSS": "18",
  /** Physical pin 19: AUX1; output. */
  "AUX1": "19",
  /** Physical pin 20: AUX2; output. */
  "AUX2": "20",
  /** Physical pin 21: OSCIN; input. */
  "OSCIN": "21",
  /** Physical pin 22: OSCOUT; output. */
  "OSCOUT": "22",
  /** Physical pin 23: IRQ; output. */
  "IRQ": "23",
  /** Physical pin 24: ALE; input. */
  "ALE": "24",
  /** Physical pin 25: D1; bidirectional. */
  "D1": "25",
  /** Physical pin 26: D2; bidirectional. */
  "D2": "26",
  /** Physical pin 27: D3; bidirectional. */
  "D3": "27",
  /** Physical pin 28: D4; bidirectional. */
  "D4": "28",
  /** Physical pin 29: D5; bidirectional. */
  "D5": "29",
  /** Physical pin 30: D6; bidirectional. */
  "D6": "30",
  /** Physical pin 31: D7; bidirectional. */
  "D7": "31",
  /** Physical pin 32: A0; input. */
  "A0": "32",
  /** Physical pin 33: EP; passive. */
  "EP": "33",
}) {
  override schema = "RF_RFID:PN5120A0HN1";
  override referencePrefix = "U";
}

