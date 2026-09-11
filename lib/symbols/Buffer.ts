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
 */
export class CDCV304 extends Component.withPins({
  "CLKIN": "1",
  "OE": "2",
  "1Y0": "3",
  "GND": "4",
  "1Y1": "5",
  "V_{DD}": "6",
  "1Y2": "7",
  "1Y3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKIN: "input", OE: "input", "1Y0": "output", GND: "power_in", "1Y1": "output", "V_{DD}": "power_in", "1Y2": "output", "1Y3": "output", ...opts.pinTypes } });
  }
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
 */
export class PI6C5946002ZH extends Component.withPins({
  "Q0+": "1",
  "Q0-": "2",
  "Q1+": "3",
  "Q1-": "4",
  "DNC_5": "5",
  "DNC_6": "6",
  "VDD_7": "7",
  "EN": "8",
  "REF_IN-": "9",
  "VREF-AC": "10",
  "VTH": "11",
  "REF_IN+": "12",
  "GND_13": "13",
  "VDD_14": "14",
  "DNC_15": "15",
  "DNC_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Q0+": "output", "Q0-": "output", "Q1+": "output", "Q1-": "output", DNC_5: "no_connect", DNC_6: "no_connect", VDD_7: "power_in", EN: "input", "REF_IN-": "input", "VREF-AC": "output", VTH: "input", "REF_IN+": "input", GND_13: "power_in", VDD_14: "passive", DNC_15: "no_connect", DNC_16: "no_connect", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Buffer:PI6C5946002ZH";
  override referencePrefix = "U";
}
