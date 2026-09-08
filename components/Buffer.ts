// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 0-200 MHz 1:4 Clock Buffer, PCI-X Compliant, TSSOP-8
 *
 * KiCad symbol: `Buffer:CDCV304`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/cdcv304.pdf
 * Keywords: texas quadruple.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CDCV304 extends Component.withPins({
  /** Physical pin 1: CLKIN; input. */
  "CLKIN": "1",
  /** Physical pin 2: OE; input. */
  "OE": "2",
  /** Physical pin 3: 1Y0; output. */
  "1Y0": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: 1Y1; output. */
  "1Y1": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: 1Y2; output. */
  "1Y2": "7",
  /** Physical pin 8: 1Y3; output. */
  "1Y3": "8",
}) {
  override schema = "Buffer:CDCV304";
  override referencePrefix = "U";
}

/**
 * 6 GHz / 12 Gbps Clock / Data 1:2 Fanout Buffer with Internal Termination, TQFN-16
 *
 * KiCad symbol: `Buffer:PI6C5946002ZH`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.diodes.com/assets/Datasheets/PI6C5946002.pdf
 * Keywords: buffer clock data.
 * Default footprint: Package_DFN_QFN:TQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PI6C5946002ZH extends Component.withPins({
  /** Physical pin 1: Q0+; output. */
  "Q0+": "1",
  /** Physical pin 2: Q0-; output. */
  "Q0-": "2",
  /** Physical pin 3: Q1+; output. */
  "Q1+": "3",
  /** Physical pin 4: Q1-; output. */
  "Q1-": "4",
  /** Physical pin 5: DNC; no_connect. */
  "DNC_5": "5",
  /** Physical pin 6: DNC; no_connect. */
  "DNC_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: EN; input. */
  "EN": "8",
  /** Physical pin 9: REF_IN-; input. */
  "REF_IN-": "9",
  /** Physical pin 10: VREF-AC; output. */
  "VREF-AC": "10",
  /** Physical pin 11: VTH; input. */
  "VTH": "11",
  /** Physical pin 12: REF_IN+; input. */
  "REF_IN+": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: VDD; passive. */
  "VDD_14": "14",
  /** Physical pin 15: DNC; no_connect. */
  "DNC_15": "15",
  /** Physical pin 16: DNC; no_connect. */
  "DNC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Buffer:PI6C5946002ZH";
  override referencePrefix = "U";
}

