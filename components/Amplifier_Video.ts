// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Single Supply, Low Power, Triple Video Amplifier, DIP-14/SOIC-14
 *
 * KiCad symbol: `Amplifier_Video:AD813`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD813.pdf
 * Keywords: triple opamp.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD813 extends Component.withPins({
  /** Physical pin 1: ~{DISABLE}; input. */
  "~{DISABLE}_1": "1",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 2: ~{DISABLE}; input. */
  "~{DISABLE}_2": "2",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 3: ~{DISABLE}; input. */
  "~{DISABLE}_3": "3",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX453 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 4: IN0; input. */
  "IN0": "4",
  /** Physical pin 5: IN1; input. */
  "IN1": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: IN-; input. */
  "IN-": "7",
  /** Physical pin 8: VOUT; output. */
  "VOUT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS7374 extends Component.withPins({
  /** Physical pin 1: CH1_IN; input. */
  "CH1_IN": "1",
  /** Physical pin 2: CH2_IN; input. */
  "CH2_IN": "2",
  /** Physical pin 3: CH3_IN; input. */
  "CH3_IN": "3",
  /** Physical pin 4: CH4_IN; input. */
  "CH4_IN": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: DISABLE; input. */
  "DISABLE": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: BYPASS; input. */
  "BYPASS": "9",
  /** Physical pin 10: V_{S+}; power_in. */
  "V_{S+}": "10",
  /** Physical pin 11: CH4_OUT; output. */
  "CH4_OUT": "11",
  /** Physical pin 12: CH3_OUT; output. */
  "CH3_OUT": "12",
  /** Physical pin 13: CH2_OUT; output. */
  "CH2_OUT": "13",
  /** Physical pin 14: CH1_OUT; output. */
  "CH1_OUT": "14",
}) {
  override schema = "Amplifier_Video:THS7374";
  override referencePrefix = "U";
}

