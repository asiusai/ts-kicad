// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Single Supply, Low Power, Triple Video Amplifier, DIP-14/SOIC-14
 *
 * KiCad symbol: `Amplifier_Video:AD813`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD813.pdf
 * Keywords: triple opamp.
 */
export class AD813 extends Component.withPins({
  "~{DISABLE}_1": "1",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "~{DISABLE}_2": "2",
  "+_12": "12",
  "-_13": "13",
  "P14": "14",
  "~{DISABLE}_3": "3",
  "P8": "8",
  "-_9": "9",
  "+_10": "10",
  "V+": "4",
  "V-": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{DISABLE}_1": "input", "+_5": "input", "-_6": "input", P7: "output", "~{DISABLE}_2": "input", "+_12": "input", "-_13": "input", P14: "output", "~{DISABLE}_3": "input", P8: "output", "-_9": "input", "+_10": "input", "V+": "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Video:AD813";
  override referencePrefix = "U";
}

/**
 * CMOS video amplifier with input multiplexer, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Video:MAX453`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX452-MAX455.pdf
 * Keywords: amplifier.
 */
export class MAX453 extends Component.withPins({
  "A0": "1",
  "GND": "2",
  "V-": "3",
  "IN0": "4",
  "IN1": "5",
  "V+": "6",
  "IN-": "7",
  "VOUT": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", GND: "power_in", "V-": "power_in", IN0: "input", IN1: "input", "V+": "power_in", "IN-": "input", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Video:MAX453";
  override referencePrefix = "U";
}

/**
 * 4 channel SDTV Video Amplifier, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Video:THS7374`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ths7374.pdf
 * Keywords: video amplifier sdtv cvbs rgb ypbpr.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class THS7374 extends Component.withPins({
  "CH1_IN": "1",
  "CH2_IN": "2",
  "CH3_IN": "3",
  "CH4_IN": "4",
  "GND": "5",
  "DISABLE": "6",
  "NC_7": "7",
  "NC_8": "8",
  "BYPASS": "9",
  "V_{S+}": "10",
  "CH4_OUT": "11",
  "CH3_OUT": "12",
  "CH2_OUT": "13",
  "CH1_OUT": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CH1_IN: "input", CH2_IN: "input", CH3_IN: "input", CH4_IN: "input", GND: "power_in", DISABLE: "input", NC_7: "no_connect", NC_8: "no_connect", BYPASS: "input", "V_{S+}": "power_in", CH4_OUT: "output", CH3_OUT: "output", CH2_OUT: "output", CH1_OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Video:THS7374";
  override referencePrefix = "U";
}
