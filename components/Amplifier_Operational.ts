// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Single Low-Noise Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:NE5534`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO?5*.
 * @see http://www.ti.com/lit/ds/symlink/ne5534.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NE5534 extends Component.withPins({
  /** Physical pin 1: BAL; input. */
  "BAL": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: COMP; input. */
  "COMP": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: C/B; input. */
  "C/B": "8",
}) {
  override schema = "Amplifier_Operational:NE5534";
  override referencePrefix = "U";
}

/**
 * Ultralow Distortion, Ultralow Noise Op Amp, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:AD797`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD797.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD797 extends Component.withPins({
  /** Physical pin 1: BAL; input. */
  "BAL": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: COMP; input. */
  "COMP": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: C/B; input. */
  "C/B": "8",
}) {
  override schema = "Amplifier_Operational:AD797";
  override referencePrefix = "U";
}

/**
 * Single 2.7V to 6.0V Single Supply CMOS Op Amps, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP601-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP601_xP extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:MCP601-xP";
  override referencePrefix = "U";
}

/**
 * Current Feedback Amplifier, 800 MHz, 50mW, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8001AN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8001.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8001AN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:AD8001AN";
  override referencePrefix = "U";
}

/**
 * Single 1.8V, microPower, CMOS Operational Amplifiers, Zero-Drift Series, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA333xxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa333.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA333xxD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA333xxD";
  override referencePrefix = "U";
}

/**
 * Current Feedback Amplifier, 800 MHz, 50mW, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8001AR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8001.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8001AR extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:AD8001AR";
  override referencePrefix = "U";
}

/**
 * Wideband/Differential Output Transimpedance Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8015`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8015.pdf
 * Keywords: amplifier transimpedance differential optical receiver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8015 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: Iin; input. */
  "Iin": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: Vbyp; input. */
  "Vbyp": "4",
  /** Physical pin 5: -V; power_in. */
  "-V": "5",
  /** Physical pin 6: -; output. */
  "-": "6",
  /** Physical pin 7: +; output. */
  "+": "7",
  /** Physical pin 8: +V; power_in. */
  "+V": "8",
}) {
  override schema = "Amplifier_Operational:AD8015";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 4.5-24V single/dual supply, low noise, high speed, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8021AR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8021.pdf
 * Keywords: Opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8021AR extends Component.withPins({
  /** Physical pin 1: LOGIC_REFERENCE; input. */
  "LOGIC_REFERENCE": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: C_{COMP}; passive. */
  "C_{COMP}": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{DISABLE}; input. */
  "~{DISABLE}": "8",
}) {
  override schema = "Amplifier_Operational:AD8021AR";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 4.5-24V single/dual supply, low noise, high speed, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8021ARM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8021.pdf
 * Keywords: Opamp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8021ARM extends Component.withPins({
  /** Physical pin 1: LOGIC_REFERENCE; input. */
  "LOGIC_REFERENCE": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: C_{COMP}; passive. */
  "C_{COMP}": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{DISABLE}; input. */
  "~{DISABLE}": "8",
}) {
  override schema = "Amplifier_Operational:AD8021ARM";
  override referencePrefix = "U";
}

/**
 * High Speed, Low Power Wide Supply Range Operational Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:AD817`. Reference prefix: `U`.
 * Footprint filters: DIP?8?W7.62mm*, SO?8?3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad817.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD817 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NULL; input. */
  "NULL_8": "8",
}) {
  override schema = "Amplifier_Operational:AD817";
  override referencePrefix = "U";
}

/**
 * Precision Micropower, Low Noise CMOS, Rail-to-Rail Input/Output Operational Amplifier, TSOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:AD8603`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8603_8607_8609.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8603 extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:AD8603";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifiers, DIP-8/SOIC-8/TSSOP-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LM2904`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm358.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2904 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LM2904";
  override referencePrefix = "U";
}

/**
 * Dual Precision Low Noise, Low Input Bias Current, Wide Bandwidth Operational Amplifiers, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8606ARM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8605_8606_8608.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8606ARM extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:AD8606ARM";
  override referencePrefix = "U";
}

/**
 * Dual Precision Low Noise, Low Input Bias Current, Wide Bandwidth Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8606ARZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8605_8606_8608.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8606ARZ extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:AD8606ARZ";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, DIP-8/TO-99-8
 *
 * KiCad symbol: `Amplifier_Operational:LM741`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm741.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM741 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LM741";
  override referencePrefix = "U";
}

/**
 * Single Precision, Very Low Noise, Low Input Bias Current, Wide Bandwidth JFET Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8610xR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8610_8620.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8610xR extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:AD8610xR";
  override referencePrefix = "U";
}

/**
 * Single Precision, Very Low Noise, Low Input Bias Current, Wide Bandwidth JFET Operational Amplifiers, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8610xRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8610_8620.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8610xRM extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:AD8610xRM";
  override referencePrefix = "U";
}

/**
 * Dual Precision, Very Low Noise, Low Input Bias Current, Wide Bandwidth JFET Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8620`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8610_8620.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8620 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:AD8620";
  override referencePrefix = "U";
}

/**
 * Dual Precision, Very Low Noise, Low Input Bias Current, Wide Bandwidth JFET Operational Amplifiers, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8620xRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8610_8620.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8620xRM extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:AD8620xRM";
  override referencePrefix = "U";
}

/**
 * Single Low Noise, Precision CMOS Amplifier
 *
 * KiCad symbol: `Amplifier_Operational:AD8655`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8655_8656.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8655 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:AD8655";
  override referencePrefix = "U";
}

/**
 * Dual Low Noise, Precision CMOS Amplifier
 *
 * KiCad symbol: `Amplifier_Operational:AD8656`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8655_8656.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8656 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:AD8656";
  override referencePrefix = "U";
}

/**
 * Dual operational amplifier, 50uV Offset, 0.25uV/C, 35uA Zero-Drift, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:NCS2325D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/PowerSolutions/document/NCS325-D.PDF
 * Keywords: dual opamp low-power.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS2325D extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NCS2325D";
  override referencePrefix = "U";
}

/**
 * Dual operational amplifier, Ultra-precision, 36V, Rail-to-rail output, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:AD8676xR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8676.pdf
 * Keywords: dual opamp precision high-voltage RRO RTR.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD8676xR extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:AD8676xR";
  override referencePrefix = "U";
}

/**
 * Ultralow Noise Amplifier at Lower Power, SOIC-8/LFCSP-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4075-2`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/ADA4075-2.pdf
 * Keywords: dual low-power opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4075_2 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:ADA4075-2";
  override referencePrefix = "U";
}

/**
 * 4MHz, 7nV/sqrtHz, Low Offset and Drift, High Precision Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4077-1xR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4077-1_4077-2_4077-4.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4077_1xR extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:ADA4077-1xR";
  override referencePrefix = "U";
}

/**
 * 4MHz, 7nV/sqrtHz, Low Offset and Drift, High Precision Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4077-1xRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4077-1_4077-2_4077-4.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4077_1xRM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:ADA4077-1xRM";
  override referencePrefix = "U";
}

/**
 * Quad Low Noise, Precision, Rail-to-Rail Output, JFET Op Amp, LFCSP-16
 *
 * KiCad symbol: `Amplifier_Operational:ADA4610-4xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4610-1_4610-2_4610-4.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_CSP:LFCSP-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4610_4xCP extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 13: NIC; no_connect. */
  "NIC_13": "13",
  /** Physical pin 15: unnamed; output. */
  "P15": "15",
  /** Physical pin 16: NIC; no_connect. */
  "NIC_16": "16",
  /** Physical pin 4: +; input. */
  "+_4": "4",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 12: -; input. */
  "-_12": "12",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 10: V-; power_in. */
  "V-_10": "10",
  /** Physical pin 17: V-; passive. */
  "V-_17": "17",
}) {
  override schema = "Amplifier_Operational:ADA4610-4xCP";
  override referencePrefix = "U";
}

/**
 * 30V Quad Low Noise, Rail-to-Rail Input/Output, Low Power Operational Amplifier, LFCSP-16
 *
 * KiCad symbol: `Amplifier_Operational:ADA4084-4xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*4x4mm*P0.65mm*EP2.6x2.6mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4084-1_4084-2_4084-4.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_CSP:LFCSP-16-1EP_4x4mm_P0.65mm_EP2.6x2.6mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4084_4xCP extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 13: NIC; no_connect. */
  "NIC_13": "13",
  /** Physical pin 15: unnamed; output. */
  "P15": "15",
  /** Physical pin 16: NIC; no_connect. */
  "NIC_16": "16",
  /** Physical pin 4: +; input. */
  "+_4": "4",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 12: -; input. */
  "-_12": "12",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 10: V-; power_in. */
  "V-_10": "10",
  /** Physical pin 17: V-; passive. */
  "V-_17": "17",
}) {
  override schema = "Amplifier_Operational:ADA4084-4xCP";
  override referencePrefix = "U";
}

/**
 * 3.15..50V supply, 8MHz GBW, Rail-to-Rail input/output, over-the-top opamp with shutdown, TSOT-6
 *
 * KiCad symbol: `Amplifier_Operational:ADA4099-1xUJ`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4099-1_ada4099-2.pdf
 * Keywords: single operational amplifier analog-devices high-voltage rrio.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4099_1xUJ extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: SHDN; input. */
  "SHDN": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:ADA4099-1xUJ";
  override referencePrefix = "U";
}

/**
 * 3.15..50V supply, 8MHz GBW, Rail-to-Rail input/output, over-the-top dual opamp with shutdown, LFCSP-10
 *
 * KiCad symbol: `Amplifier_Operational:ADA4099-2xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4099-1_ada4099-2.pdf
 * Keywords: operational amplifier analog-devices high-voltage rrio enable.
 * Default footprint: Package_CSP:LFCSP-WD-10-1EP_3x3mm_P0.5mm_EP1.64x2.38mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4099_2xCP extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: SHDN; input. */
  "SHDN_5": "5",
  /** Physical pin 6: SHDN; input. */
  "SHDN_6": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 10: V+; power_in. */
  "V+": "10",
  /** Physical pin 11: V-; passive. */
  "V-_11": "11",
}) {
  override schema = "Amplifier_Operational:ADA4099-2xCP";
  override referencePrefix = "U";
}

/**
 * Dual operational amplifier, 50uV Offset, 0.25uV/C, 35uA Zero-Drift, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:NCS2325DM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.onsemi.com/PowerSolutions/document/NCS325-D.PDF
 * Keywords: dual opamp low-power.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS2325DM extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NCS2325DM";
  override referencePrefix = "U";
}

/**
 * 3.15..50V supply, 8MHz GBW, Rail-to-Rail input/output, over-the-top dual opamp, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4099-2xR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4099-1_ada4099-2.pdf
 * Keywords: operational amplifier analog-devices high-voltage rrio.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4099_2xR extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:ADA4099-2xR";
  override referencePrefix = "U";
}

/**
 * 3.15..50V supply, 8MHz GBW, Rail-to-Rail input/output, over-the-top dual opamp, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4099-2xRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4099-1_ada4099-2.pdf
 * Keywords: operational amplifier analog-devices high-voltage rrio.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4099_2xRM extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:ADA4099-2xRM";
  override referencePrefix = "U";
}

/**
 * 55 V supply, 5uV max Vos, 3MHz GBW, EMI Enhanced, Zero Drift, 5.8 nV/√Hz, RRO single operational amplifier
 *
 * KiCad symbol: `Amplifier_Operational:ADA4522-1`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4522-1_4522-2_4522-4.pdf
 * Keywords: analog-devices opamp chopper.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4522_1 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:ADA4522-1";
  override referencePrefix = "U";
}

/**
 * 55 V supply, 5uV max Vos, 3MHz GBW, EMI Enhanced, Zero Drift, 5.8 nV/√Hz, RRO dual operational amplifiers
 *
 * KiCad symbol: `Amplifier_Operational:ADA4522-2`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4522-1_4522-2_4522-4.pdf
 * Keywords: analog-devices opamp chopper.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4522_2 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:ADA4522-2";
  override referencePrefix = "U";
}

/**
 * Low-Power, Quad-Operational Amplifiers, DIP-14/SOIC-14/SSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:LM2902`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm2902-n.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2902 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:LM2902";
  override referencePrefix = "U";
}

/**
 * 55 V supply, 5uV max Vos, 3MHz GBW, EMI Enhanced, Zero Drift, 5.8 nV/√Hz, RRO quad operational amplifiers
 *
 * KiCad symbol: `Amplifier_Operational:ADA4522-4`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4522-1_4522-2_4522-4.pdf
 * Keywords: analog-devices opamp chopper.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4522_4 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:ADA4522-4";
  override referencePrefix = "U";
}

/**
 * Femtoampere Input Bias Current Electrometer Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4530-1`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4530-1.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4530_1 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: IC; passive. */
  "IC": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: unnamed; passive. */
  "P7": "7",
  /** Physical pin 8: -; input. */
  "-": "8",
}) {
  override schema = "Amplifier_Operational:ADA4530-1";
  override referencePrefix = "U";
}

/**
 * Low Noise, Precision, Rail-to-Rail Output, JFET Single Op Amp, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4610-1xR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4610-1_4610-2_4610-4.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4610_1xR extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:ADA4610-1xR";
  override referencePrefix = "U";
}

/**
 * 10 MHz, 850 µA Op Amps, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L91T-EOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22141b.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L91T_EOT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:MCP6L91T-EOT";
  override referencePrefix = "U";
}

/**
 * Low Noise, Precision, Rail-to-Rail Output, JFET Single Op Amp, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:ADA4610-1xRJ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4610-1_4610-2_4610-4.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4610_1xRJ extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:ADA4610-1xRJ";
  override referencePrefix = "U";
}

/**
 * Dual Low Noise, Precision, Rail-to-Rail Output, JFET Op Amp, LFCSP-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4610-2xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4610-1_4610-2_4610-4.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.6x2.34mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4610_2xCP extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
}) {
  override schema = "Amplifier_Operational:ADA4610-2xCP";
  override referencePrefix = "U";
}

/**
 * Dual Low Noise, Precision, Rail-to-Rail Output, JFET Op Amp, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4610-2xR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4610-1_4610-2_4610-4.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4610_2xR extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:ADA4610-2xR";
  override referencePrefix = "U";
}

/**
 * Dual Low Noise, Precision, Rail-to-Rail Output, JFET Op Amp, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4610-2xRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4610-1_4610-2_4610-4.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4610_2xRM extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:ADA4610-2xRM";
  override referencePrefix = "U";
}

/**
 * Quad 36V, Precision, Rail-to-Rail Input/Output, Low Offset Voltage, Operational Amplifier, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA4197xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa4197.pdf
 * Keywords: quad opamp rtor.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4197xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA4197xD";
  override referencePrefix = "U";
}

/**
 * Quad Low Noise, Precision, Rail-to-Rail Output, JFET Single Op Amp, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:ADA4610-4xR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4610-1_4610-2_4610-4.pdf
 * Keywords: quad opamp low-power.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4610_4xR extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:ADA4610-4xR";
  override referencePrefix = "U";
}

/**
 * Analog Devices Dual 30V, 8MHz, Low Bias Current, Single Supply, RRO, Precision Op Amp, LFCSP-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4622-2xCP`. Reference prefix: `U`.
 * Footprint filters: *LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4622-1-4622-2-4622-4.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.45x1.74mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4622_2xCP extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+_8": "8",
  /** Physical pin 9: V+; passive. */
  "V+_9": "9",
}) {
  override schema = "Amplifier_Operational:ADA4622-2xCP";
  override referencePrefix = "U";
}

/**
 * Analog Devices Quad 30V, 8MHz, Low Bias Current, Single Supply, RRO, Precision Op Amp, LFCSP-16
 *
 * KiCad symbol: `Amplifier_Operational:ADA4622-4xCP`. Reference prefix: `U`.
 * Footprint filters: *LFCSP*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4622-1-4622-2-4622-4.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_CSP:Analog_LFCSP-16-1EP_4x4mm_P0.65mm_EP2.35x2.35mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4622_4xCP extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 15: unnamed; output. */
  "P15": "15",
  /** Physical pin 4: +; input. */
  "+_4": "4",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 12: -; input. */
  "-_12": "12",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 3: V+; power_in. */
  "V+_3": "3",
  /** Physical pin 10: V-; power_in. */
  "V-": "10",
  /** Physical pin 13: NIC; free. */
  "NIC_13": "13",
  /** Physical pin 16: NIC; free. */
  "NIC_16": "16",
  /** Physical pin 17: V+; passive. */
  "V+_17": "17",
}) {
  override schema = "Amplifier_Operational:ADA4622-4xCP";
  override referencePrefix = "U";
}

/**
 * Single 5V..36V/±2.5V..±18V supply, 18 MHz, 48V/µs slew rate, ±80 µV offset, RRO, Fast-settling single JFET Op Amp, SOIC-8-1EP
 *
 * KiCad symbol: `Amplifier_Operational:ADA4625-1ARDZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4625-1-4625-2.pdf
 * Keywords: analog-devices adi operational amplifier.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.29x3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4625_1ARDZ extends Component.withPins({
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Amplifier_Operational:ADA4625-1ARDZ";
  override referencePrefix = "U";
}

/**
 * Dual High Voltage, Low Noise, Low Distortion, Unity-Gain Stable, High Speed Op Amp, SOIC-8-1EP
 *
 * KiCad symbol: `Amplifier_Operational:ADA4898-2`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4898-1_4898-2.pdf
 * Keywords: opamp dual low noise low distortion.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.81mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4898_2 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Amplifier_Operational:ADA4898-2";
  override referencePrefix = "U";
}

/**
 * Dual 5V..36V/±2.5V..±18V supply, 18 MHz, 48V/µs slew rate, ±80 µV offset, RRO, Fast-settling JFET Op Amp, SOIC-8-1EP
 *
 * KiCad symbol: `Amplifier_Operational:ADA4625-2ARDZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4625-1-4625-2.pdf
 * Keywords: analog-devices adi operational amplifier.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.29x3mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4625_2ARDZ extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Amplifier_Operational:ADA4625-2ARDZ";
  override referencePrefix = "U";
}

/**
 * Dual RRO Op Amp, 2.7V to 5V single supply / ±1.35V to ±2.5V dual supply, 3.6 MHz bandwidth, 1.1V/µs slew rate, 500µV offset, 1 shutdown pin, FBGA-9 (Analog Device WLCSP-9)
 *
 * KiCad symbol: `Amplifier_Operational:ADA4691-2ACBZ`. Reference prefix: `U`.
 * Footprint filters: *1.21x1.22mm?Layout3x3?P0.4mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4691-2_4691-4_4692-2_4692-4.pdf
 * Keywords: Analog-Devices ADI operational-amplifier.
 * Default footprint: Package_CSP:WLCSP-9_1.21x1.22mm_Layout3x3_P0.4mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4691_2ACBZ extends Component.withPins({
  /** Physical pin A3: unnamed; output. */
  "PA3": "A3",
  /** Physical pin B2: ~{SD_A/B}; input. */
  "~{SD_A/B}": "B2",
  /** Physical pin B3: -; input. */
  "-_B3": "B3",
  /** Physical pin C3: +; input. */
  "+_C3": "C3",
  /** Physical pin A1: unnamed; output. */
  "PA1": "A1",
  /** Physical pin B1: -; input. */
  "-_B1": "B1",
  /** Physical pin C1: +; input. */
  "+_C1": "C1",
  /** Physical pin A2: V+; power_in. */
  "V+": "A2",
  /** Physical pin C2: V-; power_in. */
  "V-": "C2",
}) {
  override schema = "Amplifier_Operational:ADA4691-2ACBZ";
  override referencePrefix = "U";
}

/**
 * Dual RRO Op Amp, 2.7V to 5V single supply / ±1.35V to ±2.5V dual supply, 3.6 MHz bandwidth, 1.1V/µs slew rate, 500µV offset, 2 shutdown pins, UQFN-10 (Analog Device LFCSP-10)
 *
 * KiCad symbol: `Amplifier_Operational:ADA4691-2ACPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*2x2mm?P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4691-2_4691-4_4692-2_4692-4.pdf
 * Keywords: Analog-Devices ADI operational-amplifier.
 * Default footprint: Package_CSP:LFCSP-10_2x2mm_P0.5mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4691_2ACPZ extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 4: ~{SD_A}; input. */
  "~{SD_A}": "4",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 5: ~{SD_B}; input. */
  "~{SD_B}": "5",
  /** Physical pin 6: +; input. */
  "+_6": "6",
  /** Physical pin 7: -; input. */
  "-_7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 9: V+; power_in. */
  "V+": "9",
}) {
  override schema = "Amplifier_Operational:ADA4691-2ACPZ";
  override referencePrefix = "U";
}

/**
 * Quad RRO Op Amp, 2.7V to 5V single supply / ±1.35V to ±2.5V dual supply, 3.6 MHz bandwidth, 1.1V/µs slew rate, 500µV offset, 2 shutdown pins, WQFN-16 (Analog Device LFCSP-16)
 *
 * KiCad symbol: `Amplifier_Operational:ADA4691-4ACPZ`. Reference prefix: `U`.
 * Footprint filters: *3x3mm?P0.5mm?EP1.6*x1.6*mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4691-2_4691-4_4692-2_4692-4.pdf
 * Keywords: Analog-Devices ADI operational-amplifier.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4691_4ACPZ extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 6: ~{SD_A/B}; input. */
  "~{SD_A/B}": "6",
  /** Physical pin 15: unnamed; output. */
  "P15": "15",
  /** Physical pin 16: -; input. */
  "-_16": "16",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 7: ~{SD_C/D}; input. */
  "~{SD_C/D}": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 11: V-; power_in. */
  "V-_11": "11",
  /** Physical pin 17: V-; passive. */
  "V-_17": "17",
}) {
  override schema = "Amplifier_Operational:ADA4691-4ACPZ";
  override referencePrefix = "U";
}

/**
 * Dual RRO Op Amp, 2.7V to 5V single supply / ±1.35V to ±2.5V dual supply, 3.6 MHz bandwidth, 1.1V/µs slew rate, 500µV offset, USON-8 (UDFN-8, Analog Device LFCSP-8)
 *
 * KiCad symbol: `Amplifier_Operational:ADA4692-2ACPZ`. Reference prefix: `U`.
 * Footprint filters: *2x2mm?P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4691-2_4691-4_4692-2_4692-4.pdf
 * Keywords: Analog-Devices ADI operational-amplifier.
 * Default footprint: Package_CSP:LFCSP-8_2x2mm_P0.5mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4692_2ACPZ extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:ADA4692-2ACPZ";
  override referencePrefix = "U";
}

/**
 * Dual RRO Op Amp, 2.7V to 5V single supply / ±1.35V to ±2.5V dual supply, 3.6 MHz bandwidth, 1.1V/µs slew rate, 500µV offset, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4692-2ARZ`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.9mm?P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4691-2_4691-4_4692-2_4692-4.pdf
 * Keywords: Analog-Devices ADI operational-amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4692_2ARZ extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:ADA4692-2ARZ";
  override referencePrefix = "U";
}

/**
 * Quad RRO Op Amp, 2.7V to 5V single supply / ±1.35V to ±2.5V dual supply, 3.6 MHz bandwidth, 1.1V/µs slew rate, 500µV offset, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:ADA4692-4ARUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4691-2_4691-4_4692-2_4692-4.pdf
 * Keywords: Analog-Devices ADI operational-amplifier.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4692_4ARUZ extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:ADA4692-4ARUZ";
  override referencePrefix = "U";
}

/**
 * Single Rail-to-Rail Input/Output Amplifiers, with disable, SC-70-6/SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:ADA4807-1`. Reference prefix: `U`.
 * Footprint filters: *SC*70*, SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4807-1_4807-2_4807-4.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4807_1 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{DISABLE}; input. */
  "~{DISABLE}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:ADA4807-1";
  override referencePrefix = "U";
}

/**
 * Dual Rail-to-Rail Input/Output Amplifiers, with disable, SC-70-6/SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:ADA4807-2ACP`. Reference prefix: `U`.
 * Footprint filters: *LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4807-1_4807-2_4807-4.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_CSP:LFCSP-WD-10-1EP_3x3mm_P0.5mm_EP1.64x2.38mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4807_2ACP extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: ~{DISABLE1}; input. */
  "~{DISABLE1}": "5",
  /** Physical pin 6: ~{DISABLE2}; input. */
  "~{DISABLE2}": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 10: V+; power_in. */
  "V+": "10",
  /** Physical pin 11: EPAD; power_in. */
  "EPAD": "11",
}) {
  override schema = "Amplifier_Operational:ADA4807-2ACP";
  override referencePrefix = "U";
}

/**
 * Dual Rail-to-Rail Input/Output Amplifiers, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4807-2ARM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4807-1_4807-2_4807-4.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4807_2ARM extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:ADA4807-2ARM";
  override referencePrefix = "U";
}

/**
 * Quad Rail-to-Rail Input/Output Amplifiers, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:ADA4807-4ARUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4807-1_4807-2_4807-4.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4807_4ARUZ extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:ADA4807-4ARUZ";
  override referencePrefix = "U";
}

/**
 * Single Low Noise, 1 GHz, Unity-gain stable, FastFET Op Amp, with power down, LFCSP-8-1EP
 *
 * KiCad symbol: `Amplifier_Operational:ADA4817-1ACP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4817-1_4817-2.pdf
 * Keywords: single opamp.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.45x1.74mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4817_1ACP extends Component.withPins({
  /** Physical pin 2: FB; output. */
  "FB": "2",
  /** Physical pin 6: unnamed; no_connect. */
  "P6": "6",
  /** Physical pin 9: EP; power_in. */
  "EP": "9",
  /** Physical pin 1: ~{PD}; input. */
  "~{PD}": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: -V_{S}; power_in. */
  "-V_{S}": "5",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: +V_{S}; power_in. */
  "+V_{S}": "8",
}) {
  override schema = "Amplifier_Operational:ADA4817-1ACP";
  override referencePrefix = "U";
}

/**
 * Single Low Noise, 1 GHz, Unity-gain stable, FastFET Op Amp, with power down, SOIC-8-1EP
 *
 * KiCad symbol: `Amplifier_Operational:ADA4817-1ARD`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4817-1_4817-2.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.29x3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4817_1ARD extends Component.withPins({
  /** Physical pin 1: FB; output. */
  "FB": "1",
  /** Physical pin 5: unnamed; no_connect. */
  "P5": "5",
  /** Physical pin 9: EP; power_in. */
  "EP": "9",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -V_{S}; power_in. */
  "-V_{S}": "4",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: +V_{S}; power_in. */
  "+V_{S}": "7",
  /** Physical pin 8: ~{PD}; input. */
  "~{PD}": "8",
}) {
  override schema = "Amplifier_Operational:ADA4817-1ARD";
  override referencePrefix = "U";
}

/**
 * Dual Low Noise, 1 GHz, Unity-gain stable, FastFET Op Amp, with power down, LFCSP-16-1EP
 *
 * KiCad symbol: `Amplifier_Operational:ADA4817-2ACP`. Reference prefix: `U`.
 * Footprint filters: *LFCSP*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4817-1_4817-2.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_CSP:Analog_LFCSP-16-1EP_4x4mm_P0.65mm_EP2.35x2.35mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4817_2ACP extends Component.withPins({
  /** Physical pin 11: unnamed; no_connect. */
  "P11": "11",
  /** Physical pin 16: FB; output. */
  "FB_16": "16",
  /** Physical pin 17: EP; power_in. */
  "EP": "17",
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 12: -V_{S}; power_in. */
  "-V_{S}_12": "12",
  /** Physical pin 13: unnamed; output. */
  "P13": "13",
  /** Physical pin 14: +V_{S}; power_in. */
  "+V_{S}_14": "14",
  /** Physical pin 15: ~{PD}; input. */
  "~{PD}_15": "15",
  /** Physical pin 3: unnamed; no_connect. */
  "P3": "3",
  /** Physical pin 8: FB; output. */
  "FB_8": "8",
  /** Physical pin 4: -V_{S}; power_in. */
  "-V_{S}_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: +V_{S}; power_in. */
  "+V_{S}_6": "6",
  /** Physical pin 7: ~{PD}; input. */
  "~{PD}_7": "7",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
}) {
  override schema = "Amplifier_Operational:ADA4817-2ACP";
  override referencePrefix = "U";
}

/**
 * Low Power, Low Noise and Distorsion, Rail-to-Rail Output Amplifier, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:ADA4841-1YRJ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4841-1_4841-2.pdf
 * Keywords: single opamp low-noise rail-to-rail.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4841_1YRJ extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{PD}; input. */
  "~{PD}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:ADA4841-1YRJ";
  override referencePrefix = "U";
}

/**
 * High Speed, High Voltage, 1A Output Drive Amplifier, PSOP-20
 *
 * KiCad symbol: `Amplifier_Operational:ADA4870ARRZ`. Reference prefix: `U`.
 * Footprint filters: HSOP*1EP*11.0x15.9mm*P1.27mm*SlugDown*.
 * @see www.analog.com/media/en/technical-documentation/data-sheets/ADA4870.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:HSOP-20-1EP_11.0x15.9mm_P1.27mm_SlugDown_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4870ARRZ extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+_1": "1",
  /** Physical pin 2: TFL; passive. */
  "TFL": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: ~{ON}; input. */
  "~{ON}": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: +; input. */
  "+": "6",
  /** Physical pin 7: -; input. */
  "-": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: V-; power_in. */
  "V-_10": "10",
  /** Physical pin 11: V-; passive. */
  "V-_11": "11",
  /** Physical pin 12: V-; passive. */
  "V-_12": "12",
  /** Physical pin 13: V-; passive. */
  "V-_13": "13",
  /** Physical pin 14: unnamed; passive. */
  "P14": "14",
  /** Physical pin 15: unnamed; passive. */
  "P15": "15",
  /** Physical pin 16: unnamed; passive. */
  "P16": "16",
  /** Physical pin 17: unnamed; passive. */
  "P17": "17",
  /** Physical pin 18: V+; passive. */
  "V+_18": "18",
  /** Physical pin 19: V+; passive. */
  "V+_19": "19",
  /** Physical pin 20: V+; passive. */
  "V+_20": "20",
  /** Physical pin 21: PAD; passive. */
  "PAD": "21",
}) {
  override schema = "Amplifier_Operational:ADA4870ARRZ";
  override referencePrefix = "U";
}

/**
 * High Voltage, Low Noise, Low Distortion, Unity-Gain Stable, High Speed Op Amp, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:ADA4898-1YRDZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ada4898-1_4898-2.pdf
 * Keywords: opamp single low noise low distortion.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.29x3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4898_1YRDZ extends Component.withPins({
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{PD}; input. */
  "~{PD}": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Amplifier_Operational:ADA4898-1YRDZ";
  override referencePrefix = "U";
}

/**
 * 160 dB range, 100pA to 10mA, Logarithmic Converter, integrated 2.0V reference, 3.0 .. 5.5V supply, WQFN-16 (Analog Devices LFCSP-16 / CP-16-22)
 *
 * KiCad symbol: `Amplifier_Operational:ADL5303ACP`. Reference prefix: `U`.
 * Footprint filters: *3x3mm?P0.5mm?EP1.6x1.6mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adl5303.pdf
 * Keywords: LogAmp Logarithmic-Amplifier Log-Converter.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADL5303ACP extends Component.withPins({
  /** Physical pin 3: INPT; input. */
  "INPT": "3",
  /** Physical pin 6: VREF; output. */
  "VREF": "6",
  /** Physical pin 7: ACOM; power_in. */
  "ACOM": "7",
  /** Physical pin 8: VLOG; output. */
  "VLOG": "8",
  /** Physical pin 11: VOUT; output. */
  "VOUT": "11",
  /** Physical pin 13: BFNG; input. */
  "BFNG": "13",
  /** Physical pin 14: GND; power_in. */
  "GND_14": "14",
  /** Physical pin 1: NC; passive. */
  "NC": "1",
  /** Physical pin 2: VSUM; output. */
  "VSUM_2": "2",
  /** Physical pin 4: VSUM; passive. */
  "VSUM_4": "4",
  /** Physical pin 5: VPDB; output. */
  "VPDB": "5",
  /** Physical pin 9: BFIN; input. */
  "BFIN": "9",
  /** Physical pin 10: VPS2; power_in. */
  "VPS2": "10",
  /** Physical pin 12: VPS1; power_in. */
  "VPS1": "12",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: ~{PWDN}; input. */
  "~{PWDN}": "16",
  /** Physical pin 17: EPAD; passive. */
  "EPAD": "17",
}) {
  override schema = "Amplifier_Operational:ADL5303ACP";
  override referencePrefix = "U";
}

/**
 * Quad Operational Transconductance Amplifiers (OTA), with linearizing diodes, SSOP24
 *
 * KiCad symbol: `Amplifier_Operational:AS13704`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see http://www.alfarzpp.lv/eng/sc/AS13704.pdf
 * Keywords: operational transconductance amplifier OTA.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS13704 extends Component.withPins({
  /** Physical pin 1: unnamed; input. */
  "P1": "1",
  /** Physical pin 2: DIODE_BIAS; input. */
  "DIODE_BIAS_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 11: DIODE_BIAS; input. */
  "DIODE_BIAS_11": "11",
  /** Physical pin 12: unnamed; input. */
  "P12": "12",
  /** Physical pin 13: unnamed; input. */
  "P13": "13",
  /** Physical pin 14: DIODE_BIAS; input. */
  "DIODE_BIAS_14": "14",
  /** Physical pin 15: +; input. */
  "+_15": "15",
  /** Physical pin 16: -; input. */
  "-_16": "16",
  /** Physical pin 17: unnamed; output. */
  "P17": "17",
  /** Physical pin 20: unnamed; output. */
  "P20": "20",
  /** Physical pin 21: -; input. */
  "-_21": "21",
  /** Physical pin 22: +; input. */
  "+_22": "22",
  /** Physical pin 23: DIODE_BIAS; input. */
  "DIODE_BIAS_23": "23",
  /** Physical pin 24: unnamed; input. */
  "P24": "24",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 19: V+; power_in. */
  "V+": "19",
}) {
  override schema = "Amplifier_Operational:AS13704";
  override referencePrefix = "U";
}

/**
 * 2MHz, Operational Transconductance Amplifier (OTA), gM spread 2:1, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:CA3080`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/ca30/ca3080-a.pdf
 * Keywords: operational transconductance amplifier ota.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CA3080 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: BIAS; passive. */
  "BIAS": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:CA3080";
  override referencePrefix = "U";
}

/**
 * 2MHz, Operational Transconductance Amplifier (OTA), gM spread 1.6:1, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:CA3080A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/ca30/ca3080-a.pdf
 * Keywords: operational transconductance amplifier ota.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CA3080A extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: BIAS; passive. */
  "BIAS": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:CA3080A";
  override referencePrefix = "U";
}

/**
 * 15MHz, BiMOS Operational Amplifier with MOSFET Input/CMOS Output, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:CA3130`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/intersil/documents/ca31/ca3130-a.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CA3130 extends Component.withPins({
  /** Physical pin 1: NULL; passive. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; passive. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: STRB; passive. */
  "STRB": "8",
}) {
  override schema = "Amplifier_Operational:CA3130";
  override referencePrefix = "U";
}

/**
 * 4.5MHz, BiMOS Operational Amplifier with MOSFET Input/Bipolar Output, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:CA3140`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/intersil/documents/ca31/ca3140-a.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CA3140 extends Component.withPins({
  /** Physical pin 1: NULL; passive. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; passive. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: STRB; passive. */
  "STRB": "8",
}) {
  override schema = "Amplifier_Operational:CA3140";
  override referencePrefix = "U";
}

/**
 * DC - 700 MHz, 10 kOhm Transimpedance amplifier, QFN-16
 *
 * KiCad symbol: `Amplifier_Operational:HMC799LP3E`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/hmc799.pdf
 * Keywords: amplifier transimpedance.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.75x1.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HMC799LP3E extends Component.withPins({
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: VCC; passive. */
  "VCC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; passive. */
  "VCC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 1: VCC; power_in. */
  "VCC_1": "1",
  /** Physical pin 2: CFILT; passive. */
  "CFILT": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: CEXT; passive. */
  "CEXT": "4",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
  override schema = "Amplifier_Operational:HMC799LP3E";
  override referencePrefix = "U";
}

/**
 * Dual Power Operation Amplifier, DIP-16
 *
 * KiCad symbol: `Amplifier_Operational:L272`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see www.st.com/resource/en/datasheet/l272.pdf
 * Keywords: dual power opamp.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L272 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 6: +; input. */
  "+_6": "6",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
}) {
  override schema = "Amplifier_Operational:L272";
  override referencePrefix = "U";
}

/**
 * Dual Power Operation Amplifier, SOIC-16
 *
 * KiCad symbol: `Amplifier_Operational:L272D`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x9.9mm*P1.27mm*.
 * @see www.st.com/resource/en/datasheet/l272.pdf
 * Keywords: dual power opamp.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L272D extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 13: +; input. */
  "+_13": "13",
  /** Physical pin 14: -; input. */
  "-_14": "14",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: -; input. */
  "-_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
}) {
  override schema = "Amplifier_Operational:L272D";
  override referencePrefix = "U";
}

/**
 * Dual Power Operation Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:L272M`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see www.st.com/resource/en/datasheet/l272.pdf
 * Keywords: dual power opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm_LongPads.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L272M extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 6: +; input. */
  "+_6": "6",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
}) {
  override schema = "Amplifier_Operational:L272M";
  override referencePrefix = "U";
}

/**
 * Single JFET Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LF155`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lf357.pdf
 * Keywords: single jfet opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF155 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LF155";
  override referencePrefix = "U";
}

/**
 * Single JFET Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LF156`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lf357.pdf
 * Keywords: single jfet opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF156 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LF156";
  override referencePrefix = "U";
}

/**
 * Single JFET Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LF256`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lf357.pdf
 * Keywords: single jfet opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF256 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LF256";
  override referencePrefix = "U";
}

/**
 * Single JFET Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LF257`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lf357.pdf
 * Keywords: single jfet opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF257 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LF257";
  override referencePrefix = "U";
}

/**
 * Wide bandwidth single JFET operational amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LF351D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/lf351.pdf
 * Keywords: Single OpAmp JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF351D extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LF351D";
  override referencePrefix = "U";
}

/**
 * Wide bandwidth single JFET operational amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:LF351N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.st.com/resource/en/datasheet/lf351.pdf
 * Keywords: Single OpAmp JFET.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF351N extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LF351N";
  override referencePrefix = "U";
}

/**
 * Single JFET Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LF355`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lf357.pdf
 * Keywords: single jfet opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF355 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LF355";
  override referencePrefix = "U";
}

/**
 * Single JFET Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LF356`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lf357.pdf
 * Keywords: single jfet opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF356 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LF356";
  override referencePrefix = "U";
}

/**
 * Single JFET Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LF357`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lf357.pdf
 * Keywords: single jfet opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF357 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:LF357";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, DIP-8/TO-99-8
 *
 * KiCad symbol: `Amplifier_Operational:LM101`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO?5*.
 * @see http://www.ti.com/lit/ds/symlink/lm101a-n.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM101 extends Component.withPins({
  /** Physical pin 1: BAL; input. */
  "BAL": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: COMP; input. */
  "COMP": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: C/B; input. */
  "C/B": "8",
}) {
  override schema = "Amplifier_Operational:LM101";
  override referencePrefix = "U";
}

/**
 * Dual Operational Transconductance Amplifiers with Linearizing Diodes and Buffers, DIP-16/SOIC-16
 *
 * KiCad symbol: `Amplifier_Operational:LM13700`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm13700.pdf
 * Keywords: operational transconductance amplifier OTA.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM13700 extends Component.withPins({
  /** Physical pin 12: unnamed; output. */
  "P12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: DIODE_BIAS; input. */
  "DIODE_BIAS_15": "15",
  /** Physical pin 16: unnamed; input. */
  "P16": "16",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 10: unnamed; input. */
  "P10": "10",
  /** Physical pin 1: unnamed; input. */
  "P1": "1",
  /** Physical pin 2: DIODE_BIAS; input. */
  "DIODE_BIAS_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 7: unnamed; input. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 11: V+; power_in. */
  "V+": "11",
}) {
  override schema = "Amplifier_Operational:LM13700";
  override referencePrefix = "U";
}

/**
 * Dual Operational Transconductance Amplifiers with Linearizing Diodes and Buffers, DIP-16/SOIC-16
 *
 * KiCad symbol: `Amplifier_Operational:LM13600`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/nationalsemiconductor/DS007980.PDF
 * Keywords: operational transconductance amplifier OTA.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM13600 extends Component.withPins({
  /** Physical pin 12: unnamed; output. */
  "P12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: DIODE_BIAS; input. */
  "DIODE_BIAS_15": "15",
  /** Physical pin 16: unnamed; input. */
  "P16": "16",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 10: unnamed; input. */
  "P10": "10",
  /** Physical pin 1: unnamed; input. */
  "P1": "1",
  /** Physical pin 2: DIODE_BIAS; input. */
  "DIODE_BIAS_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 7: unnamed; input. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 11: V+; power_in. */
  "V+": "11",
}) {
  override schema = "Amplifier_Operational:LM13600";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, DIP-8/TO-99-8
 *
 * KiCad symbol: `Amplifier_Operational:LM201`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO?5*.
 * @see http://www.ti.com/lit/ds/symlink/lm101a-n.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM201 extends Component.withPins({
  /** Physical pin 1: BAL; input. */
  "BAL": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: COMP; input. */
  "COMP": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: C/B; input. */
  "C/B": "8",
}) {
  override schema = "Amplifier_Operational:LM201";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, DIP-8/TO-99-8
 *
 * KiCad symbol: `Amplifier_Operational:LM301`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO?5*.
 * @see http://www.ti.com/lit/ds/symlink/lm101a-n.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM301 extends Component.withPins({
  /** Physical pin 1: BAL; input. */
  "BAL": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: COMP; input. */
  "COMP": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: C/B; input. */
  "C/B": "8",
}) {
  override schema = "Amplifier_Operational:LM301";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LM318M`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*.
 * @see http://www.ti.com/lit/ds/symlink/lm318-n.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM318M extends Component.withPins({
  /** Physical pin 1: BAL1; passive. */
  "BAL1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: BAL3; passive. */
  "BAL3": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: BAL2; passive. */
  "BAL2": "8",
}) {
  override schema = "Amplifier_Operational:LM318M";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, TO-99-8
 *
 * KiCad symbol: `Amplifier_Operational:LM318H`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*.
 * @see http://www.ti.com/lit/ds/symlink/lm318-n.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM318H extends Component.withPins({
  /** Physical pin 1: BAL1; passive. */
  "BAL1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: BAL3; passive. */
  "BAL3": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: BAL2; passive. */
  "BAL2": "8",
}) {
  override schema = "Amplifier_Operational:LM318H";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, DIP-14
 *
 * KiCad symbol: `Amplifier_Operational:LM318J`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm318-n.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM318J extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: BAL1; passive. */
  "BAL1": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: +; input. */
  "+": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: BAL3; passive. */
  "BAL3": "9",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: V+; power_in. */
  "V+": "11",
  /** Physical pin 12: BAL2; passive. */
  "BAL2": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Amplifier_Operational:LM318J";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:LM318N`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*.
 * @see http://www.ti.com/lit/ds/symlink/lm318-n.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM318N extends Component.withPins({
  /** Physical pin 1: BAL1; passive. */
  "BAL1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: BAL3; passive. */
  "BAL3": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: BAL2; passive. */
  "BAL2": "8",
}) {
  override schema = "Amplifier_Operational:LM318N";
  override referencePrefix = "U";
}

/**
 * Low Power Single Operational Amplifier, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:LM321`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm321.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM321 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:LM321";
  override referencePrefix = "U";
}

/**
 * Low-Power, Quad-Operational Amplifiers, DIP-14/SOIC-14/SSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:LM324`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm2902-n.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM324 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:LM324";
  override referencePrefix = "U";
}

/**
 * Low-Power, Quad-Operational Amplifiers, DIP-14/SOIC-14/SSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:LM324A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm2902-n.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM324A extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:LM324A";
  override referencePrefix = "U";
}

/**
 * Quad CMOS Rail-to-Rail Input/Output Amplifier, 1.15MHz GBP, QFN-16
 *
 * KiCad symbol: `Amplifier_Operational:TSV524xIQ4T`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/tsv521.pdf
 * Keywords: quad operational-amplifier opamp.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV524xIQ4T extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 15: unnamed; output. */
  "P15": "15",
  /** Physical pin 16: -; input. */
  "-_16": "16",
  /** Physical pin 4: +; input. */
  "+_4": "4",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Amplifier_Operational:TSV524xIQ4T";
  override referencePrefix = "U";
}

/**
 * Low-Power, Quad-Operational Amplifiers, QFN-16
 *
 * KiCad symbol: `Amplifier_Operational:LM324Q`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/lm224a.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM324Q extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 15: unnamed; output. */
  "P15": "15",
  /** Physical pin 16: -; input. */
  "-_16": "16",
  /** Physical pin 4: +; input. */
  "+_4": "4",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Amplifier_Operational:LM324Q";
  override referencePrefix = "U";
}

/**
 * Low-Power, Dual Operational Amplifiers, DIP-8/SOIC-8/TO-99-8
 *
 * KiCad symbol: `Amplifier_Operational:LM358`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm2904-n.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM358 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LM358";
  override referencePrefix = "U";
}

/**
 * Dual rail-to-rail input/output 8 MHz operational amplifiers, DFN-8
 *
 * KiCad symbol: `Amplifier_Operational:TSV912IQ2T`. Reference prefix: `U`.
 * Footprint filters: DFN*2x2mm*P0.5mm*.
 * @see www.st.com/resource/en/datasheet/tsv911.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP1.05x1.75mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV912IQ2T extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
  override schema = "Amplifier_Operational:TSV912IQ2T";
  override referencePrefix = "U";
}

/**
 * Low-Power, Dual Operational Amplifiers, DFN-8
 *
 * KiCad symbol: `Amplifier_Operational:LM358_DFN`. Reference prefix: `U`.
 * Footprint filters: DFN*2x2mm*P0.5mm*.
 * @see www.st.com/resource/en/datasheet/lm358.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP1.05x1.75mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM358_DFN extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
  override schema = "Amplifier_Operational:LM358_DFN";
  override referencePrefix = "U";
}

/**
 * Programmable Operational Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LM4250`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO?5*.
 * @see http://www.ti.com/lit/ds/symlink/lm4250.pdf
 * Keywords: Programmable opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4250 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: IQ; input. */
  "IQ": "8",
}) {
  override schema = "Amplifier_Operational:LM4250";
  override referencePrefix = "U";
}

/**
 * Dual High-Performance, High-Fidelity Audio Operational Amplifier, DIP-8/SOIC-8/TO-99-8
 *
 * KiCad symbol: `Amplifier_Operational:LM4562`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm4562.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4562 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LM4562";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifiers, 17MHz, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LM6142xIx`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm6142.pdf
 * Keywords: dual opamp rail.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM6142xIx extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LM6142xIx";
  override referencePrefix = "U";
}

/**
 * Low-Power, Quad-Operational Amplifiers, 17MHz, DIP-14/SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:LM6144xIx`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm6142.pdf
 * Keywords: quad opamp rail.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM6144xIx extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:LM6144xIx";
  override referencePrefix = "U";
}

/**
 * High Speed Low Power Low Distortion Voltage Feedback Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LM6171D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm6171.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM6171D extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:LM6171D";
  override referencePrefix = "U";
}

/**
 * Single High Speed Low Power Low Distortion Voltage Feedback Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:LM6171xxN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm6171.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM6171xxN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:LM6171xxN";
  override referencePrefix = "U";
}

/**
 * Dual High Speed, Low Power, Low Distortion, Voltage Feedback Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LM6172`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm6172.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM6172 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LM6172";
  override referencePrefix = "U";
}

/**
 * Single High Speed Operational Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LM6361`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm6161.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM6361 extends Component.withPins({
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 1: VOS; passive. */
  "VOS_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: VOS; passive. */
  "VOS_8": "8",
}) {
  override schema = "Amplifier_Operational:LM6361";
  override referencePrefix = "U";
}

/**
 * Power Operational Amplifier, TO-220-5
 *
 * KiCad symbol: `Amplifier_Operational:LM675`. Reference prefix: `U`.
 * Footprint filters: TO?220?5*StaggerOdd*.
 * @see http://www.ti.com/lit/ds/symlink/lm675.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_P3.4x3.7mm_StaggerOdd_Lead3.8mm_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM675 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:LM675";
  override referencePrefix = "U";
}

/**
 * Single Very High Speed High Output Current Voltage Feedback Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LM7171xIM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm7171.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM7171xIM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:LM7171xIM";
  override referencePrefix = "U";
}

/**
 * Single Very High Speed High Output Current Voltage Feedback Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:LM7171xIN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm7171.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM7171xIN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:LM7171xIN";
  override referencePrefix = "U";
}

/**
 * Dual Rail-to-Rail Input and Output 30-V, Wide Voltage Range, High Output, Operational Amplifier, SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LM7332`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm7332.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM7332 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LM7332";
  override referencePrefix = "U";
}

/**
 * Single Opamp, Rail-to-Rail Input/Output, Unlimited Capacitive Load Drive, +53mA/-75mA Output Current, 2.5-30V, 350uV offset, 12MHz GBW, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:LM8261`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/lm8261.pdf
 * Keywords: RRIO CapLoad gate driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM8261 extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:LM8261";
  override referencePrefix = "U";
}

/**
 * Precision CMOS Dual Micropower Operational Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LMC6062`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmc6062.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMC6062 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LMC6062";
  override referencePrefix = "U";
}

/**
 * Precision CMOS Dual Operational Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LMC6082`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmc6082.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMC6082 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LMC6082";
  override referencePrefix = "U";
}

/**
 * Dual CMOS Rail-to-Rail Input and Output Operational Amplifier, DIP-8/SOIC-8, SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LMC6482`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmc6482.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMC6482 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LMC6482";
  override referencePrefix = "U";
}

/**
 * Quad CMOS Rail-to-Rail Input and Output Operational Amplifier, DIP-14/SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:LMC6484`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmc6484.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMC6484 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:LMC6484";
  override referencePrefix = "U";
}

/**
 * Differential, High-Speed, Op Amp, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LMH6551MA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmh6551.pdf
 * Keywords: differential opamp operational amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMH6551MA extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: VCM; input. */
  "VCM": "2",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 4: +; output. */
  "+_4": "4",
  /** Physical pin 5: -; output. */
  "-_5": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: +; input. */
  "+_8": "8",
}) {
  override schema = "Amplifier_Operational:LMH6551MA";
  override referencePrefix = "U";
}

/**
 * Differential, High-Speed, Op Amp, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LMH6551MM`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmh6551.pdf
 * Keywords: differential opamp operational amplifier.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMH6551MM extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: VCM; input. */
  "VCM": "2",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 4: +; output. */
  "+_4": "4",
  /** Physical pin 5: -; output. */
  "-_5": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: +; input. */
  "+_8": "8",
}) {
  override schema = "Amplifier_Operational:LMH6551MM";
  override referencePrefix = "U";
}

/**
 * 900MHz Voltage Feedback Op Amp, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LMH6609MA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmh6609.pdf
 * Keywords: opamp single wideband unity-gain stable.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMH6609MA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:LMH6609MA";
  override referencePrefix = "U";
}

/**
 * 900MHz Voltage Feedback Op Amp, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:LMH6609MF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lmh6609.pdf
 * Keywords: opamp single wideband unity-gain stable.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMH6609MF extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:LMH6609MF";
  override referencePrefix = "U";
}

/**
 * Single Supply, 345 MHz, Rail-to-Rail Output, Amplifier, TSOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:LMH6611`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see http://www.ti.com/lit/ds/symlink/lmh6612.pdf
 * Keywords: opamp operational amplifier single.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMH6611 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{DISABLE}; input. */
  "~{DISABLE}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:LMH6611";
  override referencePrefix = "U";
}

/**
 * 1.7 GHz Ultra-Low Distortion Wideband Op Amp, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LMH6702MA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmh6702.pdf
 * Keywords: opamp single low distortion wideband.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMH6702MA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:LMH6702MA";
  override referencePrefix = "U";
}

/**
 * 1.7 GHz Ultra-Low Distortion Wideband Op Amp, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:LMH6702MF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lmh6702.pdf
 * Keywords: opamp single low distortion wideband.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMH6702MF extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:LMH6702MF";
  override referencePrefix = "U";
}

/**
 * 1.0 GHz GBW Triple Operational Amplifier, 3..12V single supply or ±1.5V...6V dual supply , SSOP-16
 *
 * KiCad symbol: `Amplifier_Operational:LMH6733`. Reference prefix: `U`.
 * Footprint filters: SSOP*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/lmh6733.pdf
 * Keywords: opamp rf hf .
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMH6733 extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 16: ~{DIS}; input. */
  "~{DIS}_16": "16",
  /** Physical pin 3: ~{DIS}; input. */
  "~{DIS}_3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 12: unnamed; output. */
  "P12": "12",
  /** Physical pin 6: ~{DIS}; input. */
  "~{DIS}_6": "6",
  /** Physical pin 7: -; input. */
  "-_7": "7",
  /** Physical pin 8: +; input. */
  "+_8": "8",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 9: -VS; power_in. */
  "-VS_9": "9",
  /** Physical pin 11: +VS; power_in. */
  "+VS_11": "11",
  /** Physical pin 13: -VS; passive. */
  "-VS_13": "13",
  /** Physical pin 15: +VS; passive. */
  "+VS_15": "15",
}) {
  override schema = "Amplifier_Operational:LMH6733";
  override referencePrefix = "U";
}

/**
 * Low-Voltage Rail-to-Rail Output Operational Amplifiers, SOT-23-5/SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:LMV321`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC*70*.
 * @see http://www.ti.com/lit/ds/symlink/lmv324.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV321 extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
}) {
  override schema = "Amplifier_Operational:LMV321";
  override referencePrefix = "U";
}

/**
 * Quad Low-Voltage Rail-to-Rail Output Operational Amplifier, SOIC-14/SSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:LMV324`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmv324.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV324 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:LMV324";
  override referencePrefix = "U";
}

/**
 * Dual Low-Voltage Rail-to-Rail Output Operational Amplifiers, SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LMV358`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmv324.pdf
 * Keywords: single opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV358 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LMV358";
  override referencePrefix = "U";
}

/**
 * 1MHz, Low-Power, General-Purpose, 2.7V Operational Amplifiers, SC-70-6
 *
 * KiCad symbol: `Amplifier_Operational:LMV601`. Reference prefix: `U`.
 * Footprint filters: *SC*70*.
 * @see http://www.ti.com/lit/ds/symlink/lmv601.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LMV601 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:LMV601";
  override referencePrefix = "U";
}

/**
 * Logarithmic difference amplifer, Transimpedance input, 100pA to 10mA, integrated 2.5V reference, single or dual supply: +-5V, +5V, VQFN-16
 *
 * KiCad symbol: `Amplifier_Operational:LOG114AxRGV`. Reference prefix: `U`.
 * Footprint filters: Texas*RGV0016A*.
 * @see https://www.ti.com/lit/ds/symlink/log114.pdf
 * Keywords: logamp texas ti tia.
 * Default footprint: Package_DFN_QFN:Texas_RGV0016A_VQFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LOG114AxRGV extends Component.withPins({
  /** Physical pin 1: V_{REFGND}; power_in. */
  "V_{REFGND}": "1",
  /** Physical pin 3: I_{2}; input. */
  "I_{2}": "3",
  /** Physical pin 4: I_{1}; input. */
  "I_{1}": "4",
  /** Physical pin 5: V_{CMIN}; input. */
  "V_{CMIN}": "5",
  /** Physical pin 6: V-; power_in. */
  "V-_6": "6",
  /** Physical pin 7: COM; power_in. */
  "COM": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: V_{LOGOUT}; output. */
  "V_{LOGOUT}": "9",
  /** Physical pin 10: +IN_{4}; input. */
  "+IN_{4}": "10",
  /** Physical pin 11: -IN_{4}; input. */
  "-IN_{4}": "11",
  /** Physical pin 12: V_{O4}; output. */
  "V_{O4}": "12",
  /** Physical pin 13: +IN_{5}; input. */
  "+IN_{5}": "13",
  /** Physical pin 14: -IN_{5}; input. */
  "-IN_{5}": "14",
  /** Physical pin 15: V_{O5}; output. */
  "V_{O5}": "15",
  /** Physical pin 16: V_{REF}; output. */
  "V_{REF}": "16",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 17: V-; passive. */
  "V-_17": "17",
}) {
  override schema = "Amplifier_Operational:LOG114AxRGV";
  override referencePrefix = "U";
}

/**
 * Single operational amplifier, 8kHz GBW, 425 nA/channel quiescent, 100 fA input bias, 300 uV offset max, 1 uV/C, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:LPV811DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/lpv812.pdf
 * Keywords: single opamp low-power rail-to-rail.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LPV811DBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:LPV811DBV";
  override referencePrefix = "U";
}

/**
 * Dual 36V, Precision, Rail-to-Rail Input/Output, Low Offset Voltage, Operational Amplifier, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2197xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa2197.pdf
 * Keywords: dual opamp rtor.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2197xDGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2197xDGK";
  override referencePrefix = "U";
}

/**
 * Dual operational amplifier, 8kHz GBW, 425 nA/channel quiescent, 100 fA input bias, 300 uV offset max, 1 uV/C, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LPV812DGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/lpv812.pdf
 * Keywords: dual opamp low-power rail-to-rail.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LPV812DGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LPV812DGK";
  override referencePrefix = "U";
}

/**
 * Single Picoamp Input Current, Microvolt Offset, Low Noise Op Amp, DIP-8/SOIC-8/TO-5-8
 *
 * KiCad symbol: `Amplifier_Operational:LT1012`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1012.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1012 extends Component.withPins({
  /** Physical pin 1: BAL; input. */
  "BAL": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: COMP; input. */
  "COMP": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: C/B; input. */
  "C/B": "8",
}) {
  override schema = "Amplifier_Operational:LT1012";
  override referencePrefix = "U";
}

/**
 * Precision Quad CMOS Rail-to-Rail Input/Output Amplifiers, SSOP-16
 *
 * KiCad symbol: `Amplifier_Operational:LTC6082xGN`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*, SOIC*3.9x9.9mm*P1.27mm*, QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/60812fd.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6082xGN extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: -; input. */
  "-_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: -; input. */
  "-_15": "15",
  /** Physical pin 16: unnamed; output. */
  "P16": "16",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 13: V-; power_in. */
  "V-": "13",
}) {
  override schema = "Amplifier_Operational:LTC6082xGN";
  override referencePrefix = "U";
}

/**
 * Quad Precision Op-Amp, 150µV max offset voltage, SOIC-16
 *
 * KiCad symbol: `Amplifier_Operational:LT1014xSW`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1013-lt1014.pdf
 * Keywords: Linear-Technology operational-amplifier.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1014xSW extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: -; input. */
  "-_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: -; input. */
  "-_15": "15",
  /** Physical pin 16: unnamed; output. */
  "P16": "16",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 13: V-; power_in. */
  "V-": "13",
}) {
  override schema = "Amplifier_Operational:LT1014xSW";
  override referencePrefix = "U";
}

/**
 * Single Ultra-Low Offset Voltage Operational Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OP07`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO*99*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP07.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP07 extends Component.withPins({
  /** Physical pin 1: VOS; input. */
  "VOS_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: VOS; input. */
  "VOS_8": "8",
}) {
  override schema = "Amplifier_Operational:OP07";
  override referencePrefix = "U";
}

/**
 * 70MHz, 1000V/µs Operational Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LT1363`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO*99*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1363fa.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1363 extends Component.withPins({
  /** Physical pin 1: VOS; input. */
  "VOS_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: VOS; input. */
  "VOS_8": "8",
}) {
  override schema = "Amplifier_Operational:LT1363";
  override referencePrefix = "U";
}

/**
 * 5MHz, 3V/µs, Low Power, Single Supply, Dual Precision Op Amps, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LT1492`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/14923f.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1492 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LT1492";
  override referencePrefix = "U";
}

/**
 * 5MHz, 3V/µs, Low Power, Single Supply, Quad Precision Op Amps, SOIC-16
 *
 * KiCad symbol: `Amplifier_Operational:LT1493`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*, SOIC*3.9x9.9mm*P1.27mm*, QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/14923f.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT1493 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: -; input. */
  "-_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: -; input. */
  "-_15": "15",
  /** Physical pin 16: unnamed; output. */
  "P16": "16",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 13: V-; power_in. */
  "V-": "13",
}) {
  override schema = "Amplifier_Operational:LT1493";
  override referencePrefix = "U";
}

/**
 * 3.2MHz, 0.8V/us, Low Power, Over-The-Top Precision Op Amp, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:LT6015xS5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/601567ff.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT6015xS5 extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:LT6015xS5";
  override referencePrefix = "U";
}

/**
 * 215 MHz, Rail-to-Rail Output, Amplifier, TSOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:LT6230xS6`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/623012fc.pdf
 * Keywords: opamp operational amplifier single.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT6230xS6 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{ENABLE}; input. */
  "~{ENABLE}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:LT6230xS6";
  override referencePrefix = "U";
}

/**
 * Dual 60MHz, Rail-to-Rail Output, 1.9nV/√Hz, 1.2mA, Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LT6234`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/623345fc.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT6234 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LT6234";
  override referencePrefix = "U";
}

/**
 * Dual 215MHz, Rail-to-Rail Output, 1.1nV/√Hz, 3.5mA, Operational Amplifier, MSOP-8/DFN-8
 *
 * KiCad symbol: `Amplifier_Operational:LT6237`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/623637fb.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT6237 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LT6237";
  override referencePrefix = "U";
}

/**
 * Dual ±15V, Zero-Drift, Operational Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC1151CN8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1151fa.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1151CN8 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LTC1151CN8";
  override referencePrefix = "U";
}

/**
 * Dual ±15V, Zero-Drift, Operational Amplifier, SOIC-16W
 *
 * KiCad symbol: `Amplifier_Operational:LTC1151CSW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1151fa.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1151CSW extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 12: -; input. */
  "-_12": "12",
  /** Physical pin 13: unnamed; output. */
  "P13": "13",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 14: V+; power_in. */
  "V+": "14",
}) {
  override schema = "Amplifier_Operational:LTC1151CSW";
  override referencePrefix = "U";
}

/**
 * Rail-to-Rail Input, Rail-to-Rail Output, Zero-Drift Op Amp, DIP-8, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC1152`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1152.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1152 extends Component.withPins({
  /** Physical pin 1: SHDN; input. */
  "SHDN": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: COMP; input. */
  "COMP": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: CP; output. */
  "CP": "8",
}) {
  override schema = "Amplifier_Operational:LTC1152";
  override referencePrefix = "U";
}

/**
 * Precision Dual CMOS Rail-to-Rail Input/Output Amplifiers, DFN-10
 *
 * KiCad symbol: `Amplifier_Operational:LTC6081xDD`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/60812fd.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.55x2.48mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6081xDD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: ~{SHDN_A}; input. */
  "~{SHDN_A}": "5",
  /** Physical pin 6: ~{SHDN_B}; input. */
  "~{SHDN_B}": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 10: V+; power_in. */
  "V+": "10",
  /** Physical pin 11: V-; passive. */
  "V-_11": "11",
}) {
  override schema = "Amplifier_Operational:LTC6081xDD";
  override referencePrefix = "U";
}

/**
 * Precision Dual CMOS Rail-to-Rail Input/Output Amplifiers, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC6081xMS8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/60812fd.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6081xMS8 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LTC6081xMS8";
  override referencePrefix = "U";
}

/**
 * Precision Quad CMOS Rail-to-Rail Input/Output Amplifiers, DFN-16
 *
 * KiCad symbol: `Amplifier_Operational:LTC6082xDHC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/60812fd.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_DFN_QFN:DFN-16-1EP_3x5mm_P0.5mm_EP1.66x4.4mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6082xDHC extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: -; input. */
  "-_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: -; input. */
  "-_15": "15",
  /** Physical pin 16: unnamed; output. */
  "P16": "16",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 13: V-; power_in. */
  "V-_13": "13",
  /** Physical pin 17: V-; passive. */
  "V-_17": "17",
}) {
  override schema = "Amplifier_Operational:LTC6082xDHC";
  override referencePrefix = "U";
}

/**
 * Low Distortion Rail-to-Rail Output Op Amp with Shutdown, DFN-6
 *
 * KiCad symbol: `Amplifier_Operational:LTC6228xDC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LTC6228-6229.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x2mm_P0.5mm_EP0.6x1.37mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6228xDC extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: ~{SHDN}; input. */
  "~{SHDN}": "4",
  /** Physical pin 5: -; input. */
  "-": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V-; passive. */
  "V-_7": "7",
}) {
  override schema = "Amplifier_Operational:LTC6228xDC";
  override referencePrefix = "U";
}

/**
 * 420MHz GBW, 180V/μs, 1nV/√Hz, RRO, 95μV max offset, 2.8..11.75V OpAmp with shutdown, WDFN-6 (WSON-6)
 *
 * KiCad symbol: `Amplifier_Operational:LTC6226xDC`. Reference prefix: `U`.
 * Footprint filters: *DFN*2x2mm*P0.5mm*EP0.6x1.37mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltc6226-6227.pdf
 * Keywords: single operational amplifier Linear-Technology Analog-Devices Low-Distortion Rail-to-Rail-Output.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x2mm_P0.5mm_EP0.6x1.37mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6226xDC extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: ~{SHDN}; input. */
  "~{SHDN}": "4",
  /** Physical pin 5: -; input. */
  "-": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V-; passive. */
  "V-_7": "7",
}) {
  override schema = "Amplifier_Operational:LTC6226xDC";
  override referencePrefix = "U";
}

/**
 * Low Distortion Rail-to-Rail Output Op Amp with Shutdown, TSOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:LTC6228xS6`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LTC6228-6229.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6228xS6 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:LTC6228xS6";
  override referencePrefix = "U";
}

/**
 * Low Distortion Rail-to-Rail Output Op Amp with Shutdown, SO-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC6228xS8`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LTC6228-6229.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6228xS8 extends Component.withPins({
  /** Physical pin 1: FB; output. */
  "FB": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 5: V-; passive. */
  "V-_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{SHDN}; input. */
  "~{SHDN}": "8",
}) {
  override schema = "Amplifier_Operational:LTC6228xS8";
  override referencePrefix = "U";
}

/**
 * Low Distortion Rail-to-Rail Output Op Amps with Shutdown, DFN-10
 *
 * KiCad symbol: `Amplifier_Operational:LTC6229xDD`. Reference prefix: `U`.
 * Footprint filters: *DFN*1EP*3x3mm*P0.5mm*EP1.65x2.38mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LTC6228-6229.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.65x2.38mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6229xDD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}_5": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}_6": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 10: V+; power_in. */
  "V+": "10",
  /** Physical pin 11: V-; passive. */
  "V-_11": "11",
}) {
  override schema = "Amplifier_Operational:LTC6229xDD";
  override referencePrefix = "U";
}

/**
 * Low Distortion Rail-to-Rail Output Op Amps, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC6229xMS8E`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LTC6228-6229.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:MSOP-8-1EP_3x3mm_P0.65mm_EP1.68x1.88mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6229xMS8E extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
}) {
  override schema = "Amplifier_Operational:LTC6229xMS8E";
  override referencePrefix = "U";
}

/**
 * 720MHz, 3.5mA Power Efficient, Rail-to-Rail Op Amp, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC6253xMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/625234fc.pdf
 * Keywords: dual opamp low-power.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6253xMS8 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:LTC6253xMS8";
  override referencePrefix = "U";
}

/**
 * 500Mhz, Ultra-Low Bias Current, FET Input, Op Amp, TSOT-23
 *
 * KiCad symbol: `Amplifier_Operational:LTC6268xS6-10`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/626810f.pdf
 * Keywords: single opamp transimpedance.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6268xS6_10 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:LTC6268xS6-10";
  override referencePrefix = "U";
}

/**
 * 500Mhz, Ultra-Low Bias Current, FET Input, Op Amp, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC6268xS8-10`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/626810f.pdf
 * Keywords: single opamp transimpedance.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6268xS8_10 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{SHDN}; input. */
  "~{SHDN}": "8",
}) {
  override schema = "Amplifier_Operational:LTC6268xS8-10";
  override referencePrefix = "U";
}

/**
 * Dual 500MHz Ultra-Low Bias  Current FET Input Op Amps with Shutdown, DFN-10
 *
 * KiCad symbol: `Amplifier_Operational:LTC6269xDD`. Reference prefix: `U`.
 * Footprint filters: *DFN*1EP*3x3mm*P0.5mm*EP1.65x2.38mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/62689f.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.65x2.38mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6269xDD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}_5": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}_6": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 10: V+; power_in. */
  "V+": "10",
  /** Physical pin 11: V-; passive. */
  "V-_11": "11",
}) {
  override schema = "Amplifier_Operational:LTC6269xDD";
  override referencePrefix = "U";
}

/**
 * Dual 500MHz Ultra-Low Bias  Current FET Input Op Amps, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC6269xMS8E`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/62689f.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:MSOP-8-1EP_3x3mm_P0.65mm_EP1.68x1.88mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6269xMS8E extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
}) {
  override schema = "Amplifier_Operational:LTC6269xMS8E";
  override referencePrefix = "U";
}

/**
 * Precision, Low Power, Rail-to-Rail Input/Output, Differential Op Amp/SAR ADC Driver, DFN-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC6362xDD`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6362fa.pdf
 * Keywords: single differential opamp.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6362xDD extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: VOCM; input. */
  "VOCM": "2",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 4: +; output. */
  "+_4": "4",
  /** Physical pin 5: -; output. */
  "-_5": "5",
  /** Physical pin 6: V-; power_in. */
  "V-_6": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: +; input. */
  "+_8": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
}) {
  override schema = "Amplifier_Operational:LTC6362xDD";
  override referencePrefix = "U";
}

/**
 * Precision, Low Power, Rail-to-Rail Input/Output, Differential Op Amp/SAR ADC Driver, DFN-8
 *
 * KiCad symbol: `Amplifier_Operational:LTC6362xMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6362fa.pdf
 * Keywords: single differential opamp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6362xMS8 extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: VOCM; input. */
  "VOCM": "2",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 4: +; output. */
  "+_4": "4",
  /** Physical pin 5: -; output. */
  "-_5": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: +; input. */
  "+_8": "8",
}) {
  override schema = "Amplifier_Operational:LTC6362xMS8";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Offset/Drift, Low-Noise, Precision Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:MAX4238ASA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4238-MAX4239.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX4238ASA extends Component.withPins({
  /** Physical pin 1: ~{SHDN}; input. */
  "~{SHDN}": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:MAX4238ASA";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Offset/Drift, Low-Noise, Precision Amplifiers, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:MAX4238AUT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4238-MAX4239.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX4238AUT extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:MAX4238AUT";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Offset/Drift, Low-Noise, Precision Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:MAX4239ASA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4238-MAX4239.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX4239ASA extends Component.withPins({
  /** Physical pin 1: ~{SHDN}; input. */
  "~{SHDN}": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:MAX4239ASA";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Offset/Drift, Low-Noise, Precision Amplifiers, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:MAX4239AUT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4238-MAX4239.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX4239AUT extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:MAX4239AUT";
  override referencePrefix = "U";
}

/**
 * Ultra-Small, Low-Cost, 85MHz Quad Op Amp with Rail-to-Rail Outputs
 *
 * KiCad symbol: `Amplifier_Operational:MAX4395ESD`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x8.65mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX4389-MAX4396.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_SO:SO-14_3.9x8.65mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX4395ESD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MAX4395ESD";
  override referencePrefix = "U";
}

/**
 * Ultra-Small, Low-Cost, 85MHz Quad Op Amp with Rail-to-Rail Outputs
 *
 * KiCad symbol: `Amplifier_Operational:MAX4395EUD`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX4389-MAX4396.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX4395EUD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MAX4395EUD";
  override referencePrefix = "U";
}

/**
 * Low Noise, Dual Operational Amplifiers, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MC33078`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC33078-D.PDF
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC33078 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MC33078";
  override referencePrefix = "U";
}

/**
 * Low Noise, Quad Operational Amplifiers, DIP-14/SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:MC33079`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC33078-D.PDF
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC33079 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MC33079";
  override referencePrefix = "U";
}

/**
 * Dual Single Supply 3.0V to 44V, Low Power Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:MC33172`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/MC33171-D.PDF
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC33172 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MC33172";
  override referencePrefix = "U";
}

/**
 * Quad Single Supply 3.0V to 44V, Low Power Operational Amplifiers, DIP-14/SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:MC33174`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/MC33171-D.PDF
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC33174 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MC33174";
  override referencePrefix = "U";
}

/**
 * Dual Low Power, Low Noise Operational Amplifiers, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MC33178`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC33178-D.PDF
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC33178 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MC33178";
  override referencePrefix = "U";
}

/**
 * Quad Low Power, Low Noise Operational Amplifiers, DIP-14/SOIC-14/SSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:MC33179`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC33178-D.PDF
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC33179 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MC33179";
  override referencePrefix = "U";
}

/**
 * 1MHz, Low-Power Op Amp, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6001-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MCP6001-1R-1U-2-4-1-MHz-Low-Power-Op-Amp-DS20001733L.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6001_OT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:MCP6001-OT";
  override referencePrefix = "U";
}

/**
 * 1MHz, Low-Power Op Amp, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6001R`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MCP6001-1R-1U-2-4-1-MHz-Low-Power-Op-Amp-DS20001733L.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6001R extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
}) {
  override schema = "Amplifier_Operational:MCP6001R";
  override referencePrefix = "U";
}

/**
 * 1MHz, Low-Power Op Amp, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6001U`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC*70*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MCP6001-1R-1U-2-4-1-MHz-Low-Power-Op-Amp-DS20001733L.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6001U extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
}) {
  override schema = "Amplifier_Operational:MCP6001U";
  override referencePrefix = "U";
}

/**
 * 1 MHz, Low-Power Op Amp, SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6001x-LT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/MCP6001-1R-1U-2-4-1-MHz-Low-Power-Op-Amp-DS20001733L.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6001x_LT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:MCP6001x-LT";
  override referencePrefix = "U";
}

/**
 * 1MHz, Low-Power Op Amp, DFN-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6002-xMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21733j.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6002_xMC extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
}) {
  override schema = "Amplifier_Operational:MCP6002-xMC";
  override referencePrefix = "U";
}

/**
 * 1MHz, Low-Power Op Amp, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6002-xMS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21733j.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6002_xMS extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MCP6002-xMS";
  override referencePrefix = "U";
}

/**
 * 1MHz, Low-Power Op Amp, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6002-xP`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21733j.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6002_xP extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MCP6002-xP";
  override referencePrefix = "U";
}

/**
 * 1MHz, Low-Power Op Amp, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6002-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21733j.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6002_xSN extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MCP6002-xSN";
  override referencePrefix = "U";
}

/**
 * 1MHz, Low-Power Op Amp, DIP-14/SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:MCP6004`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21733j.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6004 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MCP6004";
  override referencePrefix = "U";
}

/**
 * Single 2.7V to 6.0V Single Supply CMOS Op Amps, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP601-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP601_xOT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:MCP601-xOT";
  override referencePrefix = "U";
}

/**
 * Single 2.7V to 6.0V Single Supply CMOS Op Amps, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP601-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP601_xSN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:MCP601-xSN";
  override referencePrefix = "U";
}

/**
 * Single 2.7V to 6.0V Single Supply CMOS Op Amps, TSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP601-xST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP601_xST extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:MCP601-xST";
  override referencePrefix = "U";
}

/**
 * Single 2.7V to 6.0V Single Supply CMOS Op Amps, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP601R`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP601R extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
}) {
  override schema = "Amplifier_Operational:MCP601R";
  override referencePrefix = "U";
}

/**
 * Dual 2.7V to 6.0V Single Supply CMOS Op Amps, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP602`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP602 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MCP602";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifiers, Rail-to-Rail Input/Output, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6022`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/20001685e.pdf
 * Keywords: dual opamp rail-to-rail.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6022 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MCP6022";
  override referencePrefix = "U";
}

/**
 * Single 2.7V to 6.0V Single Supply CMOS Op Amps, with Chip Select, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:MCP603-xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP603_xCH extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{CS}; input. */
  "~{CS}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:MCP603-xCH";
  override referencePrefix = "U";
}

/**
 * Single 2.7V to 6.0V Single Supply CMOS Op Amps, with Chip Select, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP603-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP603_xP extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{CS}; input. */
  "~{CS}": "8",
}) {
  override schema = "Amplifier_Operational:MCP603-xP";
  override referencePrefix = "U";
}

/**
 * Single 2.7V to 6.0V Single Supply CMOS Op Amps, with Chip Select, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP603-xSN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP603_xSN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{CS}; input. */
  "~{CS}": "8",
}) {
  override schema = "Amplifier_Operational:MCP603-xSN";
  override referencePrefix = "U";
}

/**
 * Single 2.7V to 6.0V Single Supply CMOS Op Amps, with Chip Select, TSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP603-xST`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP603_xST extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{CS}; input. */
  "~{CS}": "8",
}) {
  override schema = "Amplifier_Operational:MCP603-xST";
  override referencePrefix = "U";
}

/**
 * Quad 2.7V to 6.0V Single Supply CMOS Op Amps, DIP-14/SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:MCP604`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21314g.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP604 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MCP604";
  override referencePrefix = "U";
}

/**
 * 1 MHz, 45 µA Op Amps, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6401RT-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22229d.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6401RT_xOT extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
}) {
  override schema = "Amplifier_Operational:MCP6401RT-xOT";
  override referencePrefix = "U";
}

/**
 * 1 MHz, 45 µA Op Amps, SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6401T-xLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22229d.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6401T_xLT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:MCP6401T-xLT";
  override referencePrefix = "U";
}

/**
 * 1 MHz, 45 µA Op Amps, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6401T-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22229d.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6401T_xOT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:MCP6401T-xOT";
  override referencePrefix = "U";
}

/**
 * 1 MHz, 45 µA Op Amps, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6401UT-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC*70*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22229d.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6401UT_xOT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
}) {
  override schema = "Amplifier_Operational:MCP6401UT-xOT";
  override referencePrefix = "U";
}

/**
 * Single, 1 MHz, 85µA, Rail-to-Rail input and output, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L01Rx-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/DataSheets/MCP6L01-1R-1U-2-4-1-MHz-85-uA-Op-Amps-DS20002140D.pdf
 * Keywords: opamp vfa r2r rtr.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L01Rx_xOT extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
}) {
  override schema = "Amplifier_Operational:MCP6L01Rx-xOT";
  override referencePrefix = "U";
}

/**
 * Single, 1 MHz, 85µA, Rail-to-Rail input and output, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L01Ux-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22140b.pdf
 * Keywords: opamp vfa r2r rtr.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L01Ux_xOT extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:MCP6L01Ux-xOT";
  override referencePrefix = "U";
}

/**
 * Single, 1 MHz, Rail-to-Rail input and output, SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L01x-xLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22140b.pdf
 * Keywords: opamp vfa r2r rtr.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L01x_xLT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:MCP6L01x-xLT";
  override referencePrefix = "U";
}

/**
 * Single, 1 MHz, 85µA, Rail-to-Rail input and output, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L01x-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22140b.pdf
 * Keywords: opamp vfa rtr r2r.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L01x_xOT extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:MCP6L01x-xOT";
  override referencePrefix = "U";
}

/**
 * Dual, 1 MHz, 85µA, Rail-to-Rail input and output, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L02x-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22140b.pdf
 * Keywords: opamp vfa r2r rtr.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L02x_xMS extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MCP6L02x-xMS";
  override referencePrefix = "U";
}

/**
 * Dual, 1 MHz, 85µA, Rail-to-Rail input and output SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L02x-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22140b.pdf
 * Keywords: opamp vfa r2r rtr.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L02x_xSN extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MCP6L02x-xSN";
  override referencePrefix = "U";
}

/**
 * Quad 36V, Precision, Rail-to-Rail Input/Output, Low Offset Voltage, Operational Amplifier, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA4197xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa4197.pdf
 * Keywords: quad opamp rtor.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4197xPW extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA4197xPW";
  override referencePrefix = "U";
}

/**
 * Quad, 1 MHz, 85µA, Rail-to-Rail input and output, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L04-xST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22140b.pdf
 * Keywords: opamp vfa r2r rtr.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L04_xST extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MCP6L04-xST";
  override referencePrefix = "U";
}

/**
 * Quad, 1 MHz, 85µA, Rail-to-Rail input and output, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L04x-xSL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22140b.pdf
 * Keywords: opamp vfa r2r rtr.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L04x_xSL extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MCP6L04x-xSL";
  override referencePrefix = "U";
}

/**
 * 10 MHz, 850 µA Op Amps, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L91RT-EOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/DataSheets/MCP6L91-1R-2-4-Data-Sheet-DS20002141C.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L91RT_EOT extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
}) {
  override schema = "Amplifier_Operational:MCP6L91RT-EOT";
  override referencePrefix = "U";
}

/**
 * 10 MHz, 850 µA Op Amps, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L92`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22141b.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L92 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MCP6L92";
  override referencePrefix = "U";
}

/**
 * 10 MHz, 850 µA Op Amps, SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:MCP6L94`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22141b.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6L94 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:MCP6L94";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifiers, Zero-Drift, 80 kHz Bandwidth, 1.8V to 5.5V, Rail-to-Rail, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6V67EMS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6V66-Family-Data-Sheet-DS20006266A.pdf
 * Keywords: dual opamp zero drift.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6V67EMS extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:MCP6V67EMS";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifiers, Zero-Drift, 80 kHz Bandwidth, 1.8V to 5.5V, Rail-to-Rail, TDFN-8
 *
 * KiCad symbol: `Amplifier_Operational:MCP6V67xMNY`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP6V66-Family-Data-Sheet-DS20006266A.pdf
 * Keywords: dual opamp zero drift.
 * Default footprint: Package_DFN_QFN:TDFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.4mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP6V67xMNY extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
}) {
  override schema = "Amplifier_Operational:MCP6V67xMNY";
  override referencePrefix = "U";
}

/**
 * Single, 2.8V/µs, Rail-to-Rail Output, TSOP-5
 *
 * KiCad symbol: `Amplifier_Operational:NCS20071SN`. Reference prefix: `U`.
 * Footprint filters: TSOP*1.65x3.05mm*P0.95mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCS20071-D.PDF
 * Keywords: OpAmp Rail-to-rail Output Single vfa.
 * Default footprint: Package_SO:TSOP-5_1.65x3.05mm_P0.95mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS20071SN extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:NCS20071SN";
  override referencePrefix = "U";
}

/**
 * Single, 2.8V/µs, Rail-to-Rail Output, SOT-553
 *
 * KiCad symbol: `Amplifier_Operational:NCS20071XV`. Reference prefix: `U`.
 * Footprint filters: SOT?553*.
 * @see https://www.onsemi.com/pub/Collateral/NCS20071-D.PDF
 * Keywords: OpAmp Rail-to-rail Output Single vfa.
 * Default footprint: Package_TO_SOT_SMD:SOT-553.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS20071XV extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:NCS20071XV";
  override referencePrefix = "U";
}

/**
 * Dual, 2.8V/µs, Rail-to-Rail Output, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:NCS20072D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCS20071-D.PDF
 * Keywords: dual rail-to-rail output opamp vfa.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS20072D extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NCS20072D";
  override referencePrefix = "U";
}

/**
 * Dual, 2.8V/µs, Rail-to-Rail Output, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:NCS20072DM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCS20071-D.PDF
 * Keywords: dual rail-to-rail output opamp vfa.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS20072DM extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NCS20072DM";
  override referencePrefix = "U";
}

/**
 * Dual, 2.8V/µs, Rail-to-Rail Output, TSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:NCS20072DTB`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCS20071-D.PDF
 * Keywords: dual rail-to-rail output opamp vfa.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS20072DTB extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NCS20072DTB";
  override referencePrefix = "U";
}

/**
 * Quad operational amplifier, 50uV Offset, 0.25uV/C, 35uA Zero-Drift, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:NCS4325`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NCS325-D.PDF
 * Keywords: quad opamp low-power.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS4325 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:NCS4325";
  override referencePrefix = "U";
}

/**
 * Quad, 2.8V/µs, Rail-to-Rail Output, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:NCS20074D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCS20071-D.PDF
 * Keywords: quad rail-to-rail output opamp vfa.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS20074D extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:NCS20074D";
  override referencePrefix = "U";
}

/**
 * Quad, 2.8V/µs, Rail-to-Rail Output, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:NCS20074DTB`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCS20071-D.PDF
 * Keywords: quad rail-to-rail output opamp vfa.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS20074DTB extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:NCS20074DTB";
  override referencePrefix = "U";
}

/**
 * Single operational amplifier, 50uV Offset, 0.25uV/C, 35uA Zero-Drift, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:NCS325`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.onsemi.com/pub/Collateral/NCS325-D.PDF
 * Keywords: single opamp low-power.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCS325 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:NCS325";
  override referencePrefix = "U";
}

/**
 * Dual Low-Noise Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:NE5532`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne5532.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NE5532 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NE5532";
  override referencePrefix = "U";
}

/**
 * Dual Low Noise Pre-Amplifier, DIP-8/DMP-8/SIP-8
 *
 * KiCad symbol: `Amplifier_Operational:NJM2043`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.njr.com/semicon/PDF/NJM2043_E.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NJM2043 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NJM2043";
  override referencePrefix = "U";
}

/**
 * Dual High Performance Low Noise Operational Amplifier, DIP-8/DMP-8/SIP-8
 *
 * KiCad symbol: `Amplifier_Operational:NJM2114`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.njr.com/semicon/PDF/NJM2114_E.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NJM2114 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NJM2114";
  override referencePrefix = "U";
}

/**
 * Dual High Current Operational Amplifier, DIP-8/DMP-8/SIP-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:NJM4556A`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.njr.com/semicon/PDF/NJM4556A_E.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NJM4556A extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NJM4556A";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifier, DIP-8/DMP-8/SIP-8/SOP-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:NJM4558`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.njr.com/semicon/PDF/NJM4558_NJM4559_E.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NJM4558 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NJM4558";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifier, DIP-8/DMP-8/SIP-8/SOP-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:NJM4559`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.njr.com/semicon/PDF/NJM4558_NJM4559_E.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NJM4559 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NJM4559";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifier, DIP-8/DMP-8/SIP-8/SOP-8
 *
 * KiCad symbol: `Amplifier_Operational:NJM4560`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.njr.com/semicon/PDF/NJM4560_E.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NJM4560 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NJM4560";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifier, DIP-8/DMP-8/SIP-8/MSOP-8/SOP-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:NJM4580`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.njr.com/semicon/PDF/NJM4580_E.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NJM4580 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NJM4580";
  override referencePrefix = "U";
}

/**
 * Dual Low-Noise Operational Amplifier, DIP-8/DMP-8/SIP-8
 *
 * KiCad symbol: `Amplifier_Operational:NJM5532`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.njr.com/semicon/PDF/NJM5532_E.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NJM5532 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:NJM5532";
  override referencePrefix = "U";
}

/**
 * Precision Low Noise, Low Input Bias Current Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OP1177AR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP1177_2177_4177.pdf
 * Keywords: single operational amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP1177AR extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OP1177AR";
  override referencePrefix = "U";
}

/**
 * Precision Low Noise, Low Input Bias Current Operational Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OP1177ARM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP1177_2177_4177.pdf
 * Keywords: single operational amplifier.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP1177ARM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OP1177ARM";
  override referencePrefix = "U";
}

/**
 * Single Rail-to-Rail High Output Current Operational Amplifiers, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OP179GRT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP179_279.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP179GRT extends Component.withPins({
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OP179GRT";
  override referencePrefix = "U";
}

/**
 * Single Rail-to-Rail High Output Current Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OP179GS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP179_279.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP179GS extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OP179GS";
  override referencePrefix = "U";
}

/**
 * Precision JFET, High Speed, Dual Operational Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:OP249`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP249.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP249 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OP249";
  override referencePrefix = "U";
}

/**
 * Precision JFET, High Speed, Dual Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OP249GS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP249.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP249GS extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:OP249GS";
  override referencePrefix = "U";
}

/**
 * Dual Bipolar/JFET, Audio Operational Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OP275`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP275.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP275 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OP275";
  override referencePrefix = "U";
}

/**
 * Dual Rail-to-Rail High Output Current Operational Amplifiers, SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OP279`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP179_279.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP279 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OP279";
  override referencePrefix = "U";
}

/**
 * Next Generation OP07 Ultralow Offset Voltage Operational Amplifier, DIP-8/TO-99-8
 *
 * KiCad symbol: `Amplifier_Operational:OP77`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO*99*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/OP77.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OP77 extends Component.withPins({
  /** Physical pin 1: VOS; input. */
  "VOS_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: VOS; input. */
  "VOS_8": "8",
}) {
  override schema = "Amplifier_Operational:OP77";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA121KU`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.alldatasheet.com/datasheet-pdf/pdf/56725/BURR-BROWN/OPA121.html
 * Keywords: single opamp BURR-BROWN Texas Instruments.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA121KU extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: Subst.; passive. */
  "Subst.": "8",
}) {
  override schema = "Amplifier_Operational:OPA121KU";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, TO-99
 *
 * KiCad symbol: `Amplifier_Operational:OPA121KM`. Reference prefix: `U`.
 * Footprint filters: *TO*99*.
 * @see https://www.alldatasheet.com/datasheet-pdf/pdf/56725/BURR-BROWN/OPA121.html
 * Keywords: single opamp BURR-BROWN Texas Instruments.
 * Default footprint: Package_TO_SOT_THT:TO-99-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA121KM extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: Subst.; passive. */
  "Subst.": "8",
}) {
  override schema = "Amplifier_Operational:OPA121KM";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA121KP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.alldatasheet.com/datasheet-pdf/pdf/56725/BURR-BROWN/OPA121.html
 * Keywords: single opamp BURR-BROWN Texas Instruments.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA121KP extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: Subst.; passive. */
  "Subst.": "8",
}) {
  override schema = "Amplifier_Operational:OPA121KP";
  override referencePrefix = "U";
}

/**
 * Single SoundPlus High Performance Audio Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA134`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO*99*.
 * @see http://www.ti.com/lit/ds/symlink/opa134.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA134 extends Component.withPins({
  /** Physical pin 1: VOS; input. */
  "VOS_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: VOS; input. */
  "VOS_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA134";
  override referencePrefix = "U";
}

/**
 * Dual SoundPlus High Performance, Bipolar-Input Audio Operational Amplifiers, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1602`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa1604.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1602 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA1602";
  override referencePrefix = "U";
}

/**
 * Quad SoundPlus High Performance, Bipolar-Input Audio Operational Amplifiers, SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA1604`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa1604.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1604 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA1604";
  override referencePrefix = "U";
}

/**
 * Dual SoundPlus High Performance, Bipolar-Input Audio Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1612AxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa1612.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1612AxD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA1612AxD";
  override referencePrefix = "U";
}

/**
 * JFET input, ultralow distortion, low-noise operational amplifier, SOIC-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1641`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa1641.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1641 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA1641";
  override referencePrefix = "U";
}

/**
 * Single Ultra-Low-Noise, Low-Distortion, FET-Input, Burr-Brown Audio Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1655D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa1655.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1655D extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA1655D";
  override referencePrefix = "U";
}

/**
 * Single Ultra-Low-Noise, Low-Distortion, FET-Input, Burr-Brown Audio Operational Amplifiers, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA1655DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/opa1655.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1655DBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA1655DBV";
  override referencePrefix = "U";
}

/**
 * Dual Ultra-Low-Noise, Low-Distortion, FET-Input, Burr-Brown Audio Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1656ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa1656.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1656ID extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA1656ID";
  override referencePrefix = "U";
}

/**
 * Dual Low-Power, Low-Noise, Low-Distortion, Bipolar-Input SoundPlus Audio Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1662D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa1662.pdf
 * Keywords: dual opamp operational-amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1662D extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA1662D";
  override referencePrefix = "U";
}

/**
 * Dual Low-Power, Low-Noise, Low-Distortion, Bipolar-Input SoundPlus Audio Operational Amplifiers, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1662DGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa1662.pdf
 * Keywords: dual opamp operational-amplifier.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1662DGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA1662DGK";
  override referencePrefix = "U";
}

/**
 * Quad Low-Power, Low-Noise, Low-Distortion, Bipolar-Input SoundPlus Audio Operational Amplifiers, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA1664D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa1664.pdf
 * Keywords: quad opamp operational-amplifier.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1664D extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA1664D";
  override referencePrefix = "U";
}

/**
 * Quad Low-Power, Low-Noise, Low-Distortion, Bipolar-Input SoundPlus Audio Operational Amplifiers, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA1664PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa1664.pdf
 * Keywords: quad opamp operational-amplifier.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1664PW extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA1664PW";
  override referencePrefix = "U";
}

/**
 * Low-Distortion Audio Operational Amplifiers, SOIC-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1678`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa1678.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1678 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA1678";
  override referencePrefix = "U";
}

/**
 * Low-Distortion Audio Operational Amplifiers, SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA1679`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa1678.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1679 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA1679";
  override referencePrefix = "U";
}

/**
 * Dual SoundPlus Low Power, Low Noise & Low Distortion Audio Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1692xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa1692.pdf
 * Keywords: VFA opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1692xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA1692xD";
  override referencePrefix = "U";
}

/**
 * Dual SoundPlus Low Power, Low Noise & Low Distortion Audio Operational Amplifiers, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA1692xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa1692.pdf
 * Keywords: VFA opamp.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1692xDGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA1692xDGK";
  override referencePrefix = "U";
}

/**
 * Precision, Low-Noise, Rail-to-Rail Output, 36-V, Zero-Drift Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA188xxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa188.pdf
 * Keywords: single opamp zero-drift.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA188xxD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA188xxD";
  override referencePrefix = "U";
}

/**
 * Zero-Drift, Precision, Low-Noise, Rail-to-Rail Output, 36-V Operational Amplifier, TSOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA188xxDBV`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see http://www.ti.com/lit/ds/symlink/opa188.pdf
 * Keywords: single opamp zero-drift.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA188xxDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA188xxDBV";
  override referencePrefix = "U";
}

/**
 * Sing, Low-Power, Low Offset Voltage, Rail-to-Rail Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA196xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa4196.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA196xD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA196xD";
  override referencePrefix = "U";
}

/**
 * 36-V, 14-MHz, low-noise, low-offset, zero-drift, rail-to-rail, CMOS precision operational amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA189xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa189.pdf
 * Keywords: single opamp rtor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA189xD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA189xD";
  override referencePrefix = "U";
}

/**
 * Single, Low-Power, Low Offset Voltage, Rail-to-Rail Operational Amplifier, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA196xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa4196.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA196xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA196xDBV";
  override referencePrefix = "U";
}

/**
 * 36-V, 14-MHz, low-noise, low-offset, zero-drift, rail-to-rail, CMOS precision operational amplifier, SOT-23
 *
 * KiCad symbol: `Amplifier_Operational:OPA189xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/opa189.pdf
 * Keywords: single opamp rtor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA189xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA189xDBV";
  override referencePrefix = "U";
}

/**
 * Single 36V, Precision, Rail-to-Rail Input/Output, Low Offset Voltage, Operational Amplifier, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA197xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa197.pdf
 * Keywords: single opamp rtor.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA197xDGK extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
}) {
  override schema = "Amplifier_Operational:OPA197xDGK";
  override referencePrefix = "U";
}

/**
 * Single, Low-Power, Low Offset Voltage, Rail-to-Rail Operational Amplifier, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA196xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa4196.pdf
 * Keywords: single opamp rtor.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA196xDGK extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
}) {
  override schema = "Amplifier_Operational:OPA196xDGK";
  override referencePrefix = "U";
}

/**
 * 36-V, 14-MHz, low-noise, low-offset, zero-drift, rail-to-rail, CMOS precision operational amplifier, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA189xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa189.pdf
 * Keywords: single opamp rtor.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA189xDGK extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
}) {
  override schema = "Amplifier_Operational:OPA189xDGK";
  override referencePrefix = "U";
}

/**
 * Single 36V, Precision, Rail-to-Rail Input/Output, Low Offset Voltage, Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA197xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa197.pdf
 * Keywords: single opamp rtor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA197xD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA197xD";
  override referencePrefix = "U";
}

/**
 * Single 36V, Precision, Rail-to-Rail Input/Output, Low Offset Voltage, Operational Amplifier, SOT-23
 *
 * KiCad symbol: `Amplifier_Operational:OPA197xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa197.pdf
 * Keywords: single opamp rtor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA197xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA197xDBV";
  override referencePrefix = "U";
}

/**
 * Dual SoundPlus High Performance Audio Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2134`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa134.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2134 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2134";
  override referencePrefix = "U";
}

/**
 * Dual 36V, Ultra Low Noise, Rail-to-Rail Input/Output, Low Offset Voltage, Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2156xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa2156.pdf
 * Keywords: dual opamp low-noise r2r.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2156xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2156xD";
  override referencePrefix = "U";
}

/**
 * Dual 36V, Ultra Low Noise, Rail-to-Rail Input/Output, Low Offset Voltage, Operational Amplifier, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2156xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa2156.pdf
 * Keywords: dual opamp low-noise r2r.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2156xDGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2156xDGK";
  override referencePrefix = "U";
}

/**
 * Dual, Low-Power, Low Offset Voltage, Rail-to-Rail Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2196xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa4196.pdf
 * Keywords: dual opamp low-power.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2196xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2196xD";
  override referencePrefix = "U";
}

/**
 * Dual, 36-V, 14-MHz, low-noise, low-offset, zero-drift, rail-to-rail, CMOS precision operational amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2189xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa189.pdf
 * Keywords: opamp rtor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2189xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2189xD";
  override referencePrefix = "U";
}

/**
 * Dual, Low-Power, Low Offset Voltage, Rail-to-Rail Operational Amplifier, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2196xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa4196.pdf
 * Keywords: dual opamp rtor.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2196xDGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2196xDGK";
  override referencePrefix = "U";
}

/**
 * Dual, 36-V, 14-MHz, low-noise, low-offset, zero-drift, rail-to-rail, CMOS precision operational amplifier, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2189xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa189.pdf
 * Keywords: opamp rtor.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2189xDGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2189xDGK";
  override referencePrefix = "U";
}

/**
 * Dual 36V, Precision, Rail-to-Rail Input/Output, Low Offset Voltage, Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2197xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa2197.pdf
 * Keywords: dual opamp rtor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2197xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2197xD";
  override referencePrefix = "U";
}

/**
 * Dual High Precision Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2277`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa2277.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2277 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2277";
  override referencePrefix = "U";
}

/**
 * Precision, 10-MHz, Low-Noise, Low-Power, RRIO, CMOS Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2325`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa2325.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2325 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2325";
  override referencePrefix = "U";
}

/**
 * Dual 1.8V, microPower, CMOS Operational Amplifiers, Zero-Drift Series, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2333xxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa333.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2333xxD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2333xxD";
  override referencePrefix = "U";
}

/**
 * Dual 1.8V, microPower, CMOS Operational Amplifiers, Zero-Drift Series, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2333xxDGK`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa333.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2333xxDGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2333xxDGK";
  override referencePrefix = "U";
}

/**
 * Dual 1.8V, microPower, CMOS Operational Amplifiers, Zero-Drift Series, SON-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2333xxDRB`. Reference prefix: `U`.
 * Footprint filters: Texas*PVSON*.
 * @see http://www.ti.com/lit/ds/symlink/opa333.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SON:Texas_S-PVSON-N8.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2333xxDRB extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
  override schema = "Amplifier_Operational:OPA2333xxDRB";
  override referencePrefix = "U";
}

/**
 * Dual Single-Supply, Rail-to-Rail Operational Amplifiers, MicroAmplifier Series, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2340`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa4340.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2340 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2340";
  override referencePrefix = "U";
}

/**
 * Dual High Speed CMOS Operational Amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2356xxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa2356.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2356xxD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2356xxD";
  override referencePrefix = "U";
}

/**
 * Dual High Speed CMOS Operational Amplifiers, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2356xxDGK`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa2356.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2356xxDGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2356xxDGK";
  override referencePrefix = "U";
}

/**
 * Dual Low-Noise, Low Quiescent Current, Precision Operational Amplifier e-trim Series, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2376xxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa376.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2376xxD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2376xxD";
  override referencePrefix = "U";
}

/**
 * Dual Low-Noise, Low Quiescent Current, Precision Operational Amplifier e-trim Series, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2376xxDGK`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa376.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2376xxDGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2376xxDGK";
  override referencePrefix = "U";
}

/**
 * Dual Low-Noise, Low Quiescent Current, Precision Operational Amplifier e-trim Series, DSBGA-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2376xxYZD`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*0.9x1.9mm*0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa376.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_BGA:Texas_DSBGA-8_0.9x1.9mm_Layout2x4_P0.5mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2376xxYZD extends Component.withPins({
  /** Physical pin A1: unnamed; output. */
  "PA1": "A1",
  /** Physical pin B1: -; input. */
  "-_B1": "B1",
  /** Physical pin C1: +; input. */
  "+_C1": "C1",
  /** Physical pin B2: unnamed; output. */
  "PB2": "B2",
  /** Physical pin C2: -; input. */
  "-_C2": "C2",
  /** Physical pin D2: +; input. */
  "+_D2": "D2",
  /** Physical pin A2: V+; power_in. */
  "V+": "A2",
  /** Physical pin D1: V-; power_in. */
  "V-": "D1",
}) {
  override schema = "Amplifier_Operational:OPA2376xxYZD";
  override referencePrefix = "U";
}

/**
 * Dual FET-Input, Low-Distortion Operational Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2604AP`. Reference prefix: `U`.
 * Footprint filters: DIP*8*W7.62mm*.
 * @see https://pdf1.alldatasheetcn.com/datasheet-pdf/view/785955/TI1/OPA2604AP.html
 * Keywords: dual opamp fet-input.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2604AP extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2604AP";
  override referencePrefix = "U";
}

/**
 * Dual Wideband, Current-Feedback Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2691`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/sbos224d/sbos224d.pdf
 * Keywords: dual current feedback opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2691 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2691";
  override referencePrefix = "U";
}

/**
 * Dual Wideband, Current-Feedback Operational Amplifier With Disable, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA2691-14`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/sbos224d/sbos224d.pdf
 * Keywords: dual current feedback opamp.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2691_14 extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 3: ~{DIS_A}; input. */
  "~{DIS_A}": "3",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 5: ~{DIS_B}; input. */
  "~{DIS_B}": "5",
  /** Physical pin 6: +; input. */
  "+_6": "6",
  /** Physical pin 7: -; input. */
  "-_7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 11: V+; power_in. */
  "V+": "11",
}) {
  override schema = "Amplifier_Operational:OPA2691-14";
  override referencePrefix = "U";
}

/**
 * Dual, Ultra-Wideband, Current-Feedback Operational Amplifier with Disable, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2695xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/sbos354a/sbos354a.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2695xD extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: V-; power_in. */
  "V-": "7",
}) {
  override schema = "Amplifier_Operational:OPA2695xD";
  override referencePrefix = "U";
}

/**
 * Dual, Ultra-Wideband, Current-Feedback Operational Amplifier with Disable, QFN-16
 *
 * KiCad symbol: `Amplifier_Operational:OPA2695xRGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/sbos354a/sbos354a.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.45x1.45mm_ThermalVias.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2695xRGT extends Component.withPins({
  /** Physical pin 1: ~{DIS_A}; input. */
  "~{DIS_A}": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 13: unnamed; output. */
  "P13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: -; input. */
  "-_15": "15",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: ~{DIS_B}; input. */
  "~{DIS_B}": "4",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 9: V-; power_in. */
  "V-_9": "9",
  /** Physical pin 10: V+; power_in. */
  "V+_10": "10",
  /** Physical pin 11: V+; passive. */
  "V+_11": "11",
  /** Physical pin 12: V-; passive. */
  "V-_12": "12",
}) {
  override schema = "Amplifier_Operational:OPA2695xRGT";
  override referencePrefix = "U";
}

/**
 * Low-Power, Wideband, Voltage-Feedback Operational Amplifier, SO-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2890ID`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa2890.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2890ID extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2890ID";
  override referencePrefix = "U";
}

/**
 * Low-Power, Wideband, Voltage-Feedback Operational Amplifier with Disable, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Amplifier_Operational:OPA2890IDGS`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa2890.pdf
 * Keywords: dual opamp.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2890IDGS extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: ~{DIS}; input. */
  "~{DIS}_2": "2",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 4: ~{DIS}; input. */
  "~{DIS}_4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 3: -VS; power_in. */
  "-VS": "3",
  /** Physical pin 8: +VS; power_in. */
  "+VS": "8",
}) {
  override schema = "Amplifier_Operational:OPA2890IDGS";
  override referencePrefix = "U";
}

/**
 * Dual Opamp, Rail-to-Rail Input/Output, Unlimited Capacitive Load Drive, 125mA Output Current, 2-32V, 350uV offset, 24MHz GBW, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA2994xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa2994.pdf
 * Keywords: high-output-current rrio.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA2994xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:OPA2994xD";
  override referencePrefix = "U";
}

/**
 * Single Rail-to-Rail Input/Output Operational Amplifier with Shutdown, 1.5..5.5V supply, 3MHz GBW, 250uV offset voltage, 150mA output current, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:OPA310SxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/opa310.pdf
 * Keywords: single opamp .
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA310SxDBV extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:OPA310SxDBV";
  override referencePrefix = "U";
}

/**
 * Single Rail-to-Rail Input/Output Operational Amplifier with Shutdown, 1.5..5.5V supply, 3MHz GBW, 250uV offset voltage, 150mA output current,  SC-70-6
 *
 * KiCad symbol: `Amplifier_Operational:OPA310SxDCK`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PDSO*G6*.
 * @see https://www.ti.com/lit/ds/symlink/opa310.pdf
 * Keywords: single opamp .
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-G6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA310SxDCK extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:OPA310SxDCK";
  override referencePrefix = "U";
}

/**
 * High output current, Rail-to-Rail Input/Output, 3MHz GBW, Operational Amplifiers, integrated RFI/EMI filter, 1.5V to 5.5V supply, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA310xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/opa2310.pdf
 * Keywords: single opamp rrio.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA310xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA310xDBV";
  override referencePrefix = "U";
}

/**
 * High output current, Rail-to-Rail Input/Output, 3MHz GBW, Operational Amplifiers, integrated RFI/EMI filter, 1.5V to 5.5V supply, SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA310xDCK`. Reference prefix: `U`.
 * Footprint filters: *SC*70*.
 * @see https://www.ti.com/lit/ds/symlink/opa2310.pdf
 * Keywords: single opamp rrio.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA310xDCK extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
}) {
  override schema = "Amplifier_Operational:OPA310xDCK";
  override referencePrefix = "U";
}

/**
 * 50μV V OS, 0.25μV/°C, 35μA CMOS OPERATIONAL AMPLIFIERS, Zerø-Drift Series, SOIC
 *
 * KiCad symbol: `Amplifier_Operational:OPA330xxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa330.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA330xxD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA330xxD";
  override referencePrefix = "U";
}

/**
 * 50μV V OS, 0.25μV/°C, 35μA CMOS OPERATIONAL AMPLIFIERS, Zerø-Drift Series, SOT
 *
 * KiCad symbol: `Amplifier_Operational:OPA330xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa330.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA330xxDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA330xxDBV";
  override referencePrefix = "U";
}

/**
 * 50μV V OS, 0.25μV/°C, 35μA CMOS OPERATIONAL AMPLIFIERS, Zerø-Drift Series, SC70
 *
 * KiCad symbol: `Amplifier_Operational:OPA330xxDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC*70*.
 * @see http://www.ti.com/lit/ds/symlink/opa330.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA330xxDCK extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
}) {
  override schema = "Amplifier_Operational:OPA330xxDCK";
  override referencePrefix = "U";
}

/**
 * 50μV V OS, 0.25μV/°C, 35μA CMOS OPERATIONAL AMPLIFIERS, Zerø-Drift Series, DSBGA
 *
 * KiCad symbol: `Amplifier_Operational:OPA330xxYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*0.822x1.116mm*2x1x2*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa330.pdf
 * Keywords: single opamp.
 * Default footprint: Package_BGA:Texas_DSBGA-5_0.822x1.116mm_Layout2x1x2_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA330xxYFF extends Component.withPins({
  /** Physical pin A3: V+; power_in. */
  "V+": "A3",
  /** Physical pin B2: V-; power_in. */
  "V-": "B2",
  /** Physical pin A1: +; input. */
  "+": "A1",
  /** Physical pin C1: -; input. */
  "-": "C1",
  /** Physical pin C3: unnamed; output. */
  "PC3": "C3",
}) {
  override schema = "Amplifier_Operational:OPA330xxYFF";
  override referencePrefix = "U";
}

/**
 * Single 1.8V, microPower, CMOS Operational Amplifiers, Zero-Drift Series, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA333xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa333.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA333xxDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA333xxDBV";
  override referencePrefix = "U";
}

/**
 * Single 1.8V, microPower, CMOS Operational Amplifiers, Zero-Drift Series, SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA333xxDCK`. Reference prefix: `U`.
 * Footprint filters: *SC*70*.
 * @see http://www.ti.com/lit/ds/symlink/opa333.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA333xxDCK extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
}) {
  override schema = "Amplifier_Operational:OPA333xxDCK";
  override referencePrefix = "U";
}

/**
 * 100 KHz, microPower CMOS, Op Amps, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA336Nx`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/opa2336.pdf
 * Keywords: single opamp rail.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA336Nx extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA336Nx";
  override referencePrefix = "U";
}

/**
 * 100 KHz, microPower CMOS, Op Amps, SO-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA336Ux`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa2336.pdf
 * Keywords: single opamp rail.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA336Ux extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA336Ux";
  override referencePrefix = "U";
}

/**
 * Single Single-Supply, Rail-to-Rail Operational Amplifier, MicroAmplifier Series, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA340NA`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa340.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA340NA extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA340NA";
  override referencePrefix = "U";
}

/**
 * Single Single-Supply, Rail-to-Rail Operational Amplifier, MicroAmplifier Series, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA340P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa340.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA340P extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA340P";
  override referencePrefix = "U";
}

/**
 * Single Single-Supply, Rail-to-Rail Operational Amplifier, MicroAmplifier Series, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA340UA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa340.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA340UA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA340UA";
  override referencePrefix = "U";
}

/**
 * 200MHz, CMOS, Operational amplifier, with shutdown, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:OPA355NA`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa355.pdf
 * Keywords: operational amplifier opamp shutdown high-speed.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA355NA extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ENABLE; input. */
  "ENABLE": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:OPA355NA";
  override referencePrefix = "U";
}

/**
 * Single High Speed CMOS Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA356xxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa356.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA356xxD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA356xxD";
  override referencePrefix = "U";
}

/**
 * Single High Speed CMOS Operational Amplifier, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA356xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa356.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA356xxDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA356xxDBV";
  override referencePrefix = "U";
}

/**
 * 50-MHz, Zero-Crossover, Low-Distortion, High CMRR, RRI/O, Single-Supply, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA365xxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa365.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA365xxD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA365xxD";
  override referencePrefix = "U";
}

/**
 * 50-MHz, Zero-Crossover, Low-Distortion, High CMRR, RRI/O, Single-Supply, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA365xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/opa365.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA365xxDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA365xxDBV";
  override referencePrefix = "U";
}

/**
 * Single Low-Noise, Low Quiescent Current, Precision Operational Amplifier e-trim Series, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA376xxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa376.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA376xxD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA376xxD";
  override referencePrefix = "U";
}

/**
 * Single Low-Noise, Low Quiescent Current, Precision Operational Amplifier e-trim Series, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA376xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa376.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA376xxDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA376xxDBV";
  override referencePrefix = "U";
}

/**
 * Single Low-Noise, Low Quiescent Current, Precision Operational Amplifier e-trim Series, SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA376xxDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, *SC*70*.
 * @see http://www.ti.com/lit/ds/symlink/opa376.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA376xxDCK extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
}) {
  override schema = "Amplifier_Operational:OPA376xxDCK";
  override referencePrefix = "U";
}

/**
 * Quad SoundPlus High Performance Audio Operational Amplifiers, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA4134`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa134.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4134 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA4134";
  override referencePrefix = "U";
}

/**
 * Quad, Low-Power, Low Offset Voltage, Rail-to-Rail Operational Amplifier, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA4196xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa4196.pdf
 * Keywords: quad opamp rtor.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4196xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA4196xD";
  override referencePrefix = "U";
}

/**
 * Quad, 36-V, 14-MHz, low-noise, low-offset, zero-drift, rail-to-rail, CMOS precision operational amplifier, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA4189xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa189.pdf
 * Keywords: opamp rtor.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4189xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA4189xD";
  override referencePrefix = "U";
}

/**
 * Quad, Low-Power, Low Offset Voltage, Rail-to-Rail Operational Amplifier, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA4196xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa4196.pdf
 * Keywords: quad opamp rtor.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4196xPW extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA4196xPW";
  override referencePrefix = "U";
}

/**
 * Quad, 36-V, 14-MHz, low-noise, low-offset, zero-drift, rail-to-rail, CMOS precision operational amplifier, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA4189xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa189.pdf
 * Keywords: opamp rtor.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4189xPW extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA4189xPW";
  override referencePrefix = "U";
}

/**
 * Quad Single-Supply, Rail-to-Rail Operational Amplifier, MicroAmplifier Series, SSOP-16
 *
 * KiCad symbol: `Amplifier_Operational:OPA4340EA`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*, SOIC*3.9x9.9mm*P1.27mm*, QSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa340.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4340EA extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: -; input. */
  "-_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 15: -; input. */
  "-_15": "15",
  /** Physical pin 16: unnamed; output. */
  "P16": "16",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 13: V-; power_in. */
  "V-": "13",
}) {
  override schema = "Amplifier_Operational:OPA4340EA";
  override referencePrefix = "U";
}

/**
 * Quad Single-Supply, Rail-to-Rail Operational Amplifier, MicroAmplifier Series, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:OPA4340UA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa340.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4340UA extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA4340UA";
  override referencePrefix = "U";
}

/**
 * Quad Low-Noise, Low Quiescent Current, Precision Operational Amplifier e-trim Series, SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA4376`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa376.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA4376 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:OPA4376";
  override referencePrefix = "U";
}

/**
 * High-Voltage High-Current Operational Amplifier, bandwidth 3MHz, slew-rate 15V/us, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA551P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa551.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA551P extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: Flag; output. */
  "Flag": "8",
}) {
  override schema = "Amplifier_Operational:OPA551P";
  override referencePrefix = "U";
}

/**
 * High-Voltage High-Current Operational Amplifier, bandwidth 3MHz, slew-rate 15V/us, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA551U`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa551.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA551U extends Component.withPins({
  /** Physical pin 1: V-; power_in. */
  "V-_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; passive. */
  "V-_4": "4",
  /** Physical pin 5: V-; passive. */
  "V-_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: Flag; output. */
  "Flag": "8",
}) {
  override schema = "Amplifier_Operational:OPA551U";
  override referencePrefix = "U";
}

/**
 * High-Voltage High-Current Operational Amplifier, bandwidth 12MHz, slew-rate 24V/us, DIP-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA552P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa552.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA552P extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: Flag; output. */
  "Flag": "8",
}) {
  override schema = "Amplifier_Operational:OPA552P";
  override referencePrefix = "U";
}

/**
 * High-Voltage High-Current Operational Amplifier, bandwidth 12MHz, slew-rate 24V/us, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA552U`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa552.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA552U extends Component.withPins({
  /** Physical pin 1: V-; power_in. */
  "V-_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; passive. */
  "V-_4": "4",
  /** Physical pin 5: V-; passive. */
  "V-_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: Flag; output. */
  "Flag": "8",
}) {
  override schema = "Amplifier_Operational:OPA552U";
  override referencePrefix = "U";
}

/**
 * Rail-to-Rail I/O, 2A, Power Amplifier, SO-20
 *
 * KiCad symbol: `Amplifier_Operational:OPA569DWP`. Reference prefix: `U`.
 * Footprint filters: SO*1EP*7.52x12.825mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa569.pdf
 * Keywords: opamp single high current.
 * Default footprint: Package_SO:SO-20-1EP_7.52x12.825mm_P1.27mm_EP6.045x12.09mm_Mask3.56x4.47mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA569DWP extends Component.withPins({
  /** Physical pin 16: NC; no_connect. */
  "NC": "16",
  /** Physical pin 21: PAD; passive. */
  "PAD_21": "21",
  /** Physical pin 1: PAD; power_in. */
  "PAD_1": "1",
  /** Physical pin 2: POUT1; output. */
  "POUT1": "2",
  /** Physical pin 3: ISET; output. */
  "ISET": "3",
  /** Physical pin 4: ~{IFLAG}; output. */
  "~{IFLAG}": "4",
  /** Physical pin 5: -IN; input. */
  "-IN": "5",
  /** Physical pin 6: +IN; input. */
  "+IN": "6",
  /** Physical pin 7: ~{TFLAG}; output. */
  "~{TFLAG}": "7",
  /** Physical pin 8: ENA; input. */
  "ENA": "8",
  /** Physical pin 9: POUT2; output. */
  "POUT2": "9",
  /** Physical pin 10: PAD; passive. */
  "PAD_10": "10",
  /** Physical pin 11: PAD; passive. */
  "PAD_11": "11",
  /** Physical pin 12: V+; power_in. */
  "V+_12": "12",
  /** Physical pin 13: V+; passive. */
  "V+_13": "13",
  /** Physical pin 14: OUT; output. */
  "OUT_14": "14",
  /** Physical pin 15: OUT; passive. */
  "OUT_15": "15",
  /** Physical pin 17: V-; power_in. */
  "V-_17": "17",
  /** Physical pin 18: V-; passive. */
  "V-_18": "18",
  /** Physical pin 19: IMON; output. */
  "IMON": "19",
  /** Physical pin 20: PAD; passive. */
  "PAD_20": "20",
}) {
  override schema = "Amplifier_Operational:OPA569DWP";
  override referencePrefix = "U";
}

/**
 * Single Low-Power, Wideband, Voltage-Feedback Operational Amplifier with Disable, SO-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA890xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa890.pdf
 * Keywords: single opamp wideband low-power.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA890xD extends Component.withPins({
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 8: ~{DIS}; input. */
  "~{DIS}": "8",
}) {
  override schema = "Amplifier_Operational:OPA890xD";
  override referencePrefix = "U";
}

/**
 * Single Low-Power, 500 MHz GBW, ±2.5V to ±5V Dual Supply, 5V to 12V Single Supply, 190mA output current, 1.8kV/us slew rate, Voltage-Feedback Operational Amplifier with Disable, SO-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA690xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa690.pdf
 * Keywords: opamp texas.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA690xD extends Component.withPins({
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 8: ~{DIS}; input. */
  "~{DIS}": "8",
}) {
  override schema = "Amplifier_Operational:OPA690xD";
  override referencePrefix = "U";
}

/**
 * Single Low-Power, Wideband, Voltage-Feedback Operational Amplifier with Disable, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:OPA890xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/opa890.pdf
 * Keywords: single opamp wideband low-power.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA890xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{DIS}; input. */
  "~{DIS}": "5",
}) {
  override schema = "Amplifier_Operational:OPA890xDBV";
  override referencePrefix = "U";
}

/**
 * Single Low-Power, 500 MHz GBW, ±2.5V to ±5V Dual Supply, 5V to 12V Single Supply, 190mA output current, 1.8kV/us slew rate, Voltage-Feedback Operational Amplifier with Disable, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:OPA690xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/opa690.pdf
 * Keywords: opamp texas.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA690xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{DIS}; input. */
  "~{DIS}": "5",
}) {
  override schema = "Amplifier_Operational:OPA690xDBV";
  override referencePrefix = "U";
}

/**
 * 140-MHz, Rail-to-Rail Input and Output, FET-Input Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA810xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa810.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA810xD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA810xD";
  override referencePrefix = "U";
}

/**
 * 140-MHz, Rail-to-Rail Input and Output, FET-Input Operational Amplifier, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA810xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/opa810.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA810xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA810xDBV";
  override referencePrefix = "U";
}

/**
 * 140-MHz, Rail-to-Rail Input and Output, FET-Input Operational Amplifier, SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA810xDCK`. Reference prefix: `U`.
 * Footprint filters: Texas?R?PDSO?G5?DCK*.
 * @see https://www.ti.com/lit/ds/symlink/opa810.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-G5_DCK-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA810xDCK extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA810xDCK";
  override referencePrefix = "U";
}

/**
 * 2.7 GHz, High-Voltage, FET-Input, Low Noise, Operational Amplifier, WSON-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA818xDRG`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*3x3mm*EP1.45x2.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/opa818.pdf
 * Keywords: opamp VFA.
 * Default footprint: Package_SON:WSON-8-1EP_3x3mm_P0.5mm_EP1.45x2.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA818xDRG extends Component.withPins({
  /** Physical pin 1: ~{PD}; input. */
  "~{PD}": "1",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 2: FB; output. */
  "FB": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
}) {
  override schema = "Amplifier_Operational:OPA818xDRG";
  override referencePrefix = "U";
}

/**
 * 200MHz, Low Distortion, Unity-Gain Stable, Voltage Feedback Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA842xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa842.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA842xD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA842xD";
  override referencePrefix = "U";
}

/**
 * 200MHz, Low Distortion, Unity-Gain Stable, Voltage Feedback Operational Amplifier, SOT23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA842xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa842.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA842xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA842xDBV";
  override referencePrefix = "U";
}

/**
 * 800MHz, Wideband, Low Distortion, Medium Gain, Voltage-Feedback Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA843xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa843.pdf
 * Keywords: single opamp low distortion.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA843xD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA843xD";
  override referencePrefix = "U";
}

/**
 * 800MHz, Wideband, Low Distortion, Medium Gain, Voltage-Feedback Operational Amplifier, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA843xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa843.pdf
 * Keywords: single opamp low distortion.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA843xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA843xDBV";
  override referencePrefix = "U";
}

/**
 * 1750MHz, Wideband, Low-Noise, Voltage Feedback Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA846xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa846.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA846xD extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:OPA846xD";
  override referencePrefix = "U";
}

/**
 * 1750MHz, Wideband, Low-Noise, Voltage Feedback Operational Amplifier, SOT23-5
 *
 * KiCad symbol: `Amplifier_Operational:OPA846xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa846.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA846xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:OPA846xDBV";
  override referencePrefix = "U";
}

/**
 * Single Low-Power, 3.9GHz, Wideband, Ultra-Low Noise, Voltage-Feedback Operational Amplifier with Disable, SO-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA847xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa847.pdf
 * Keywords: single opamp wideband low-power.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA847xD extends Component.withPins({
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 8: ~{DIS}; input. */
  "~{DIS}": "8",
}) {
  override schema = "Amplifier_Operational:OPA847xD";
  override referencePrefix = "U";
}

/**
 * Single Low-Power, 3.9GHz, Wideband, Ultra-Low Noise, Voltage-Feedback Operational Amplifier with Disable, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Operational:OPA847xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/opa847.pdf
 * Keywords: single opamp wideband low-power.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA847xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: ~{DIS}; input. */
  "~{DIS}": "5",
}) {
  override schema = "Amplifier_Operational:OPA847xDBV";
  override referencePrefix = "U";
}

/**
 * 5.5-GHz Gain Bandwidth Product, Gain of 7 V/V Stable, FET Input Amplifier, WSON-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA858xDSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa858.pdf
 * Keywords: opamp VFA.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA858xDSG extends Component.withPins({
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{PD}; input. */
  "~{PD}": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 1: FB; output. */
  "FB": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: V-; power_in. */
  "V-_5": "5",
}) {
  override schema = "Amplifier_Operational:OPA858xDSG";
  override referencePrefix = "U";
}

/**
 * 8-GHz Gain Bandwidth Product, Gain of 7-V/V Stable, Bipolar Input Amplifier, WSON-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA855xDSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa855.pdf
 * Keywords: opamp VFA.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA855xDSG extends Component.withPins({
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{PD}; input. */
  "~{PD}": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 1: FB; output. */
  "FB": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: V-; power_in. */
  "V-_5": "5",
}) {
  override schema = "Amplifier_Operational:OPA855xDSG";
  override referencePrefix = "U";
}

/**
 * 1.8 GHz Unity-Gain Bandwidth FET Input Amplifier, WSON-8
 *
 * KiCad symbol: `Amplifier_Operational:OPA859xDSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/opa859.pdf
 * Keywords: opamp VFA.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA859xDSG extends Component.withPins({
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{PD}; input. */
  "~{PD}": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 1: FB; output. */
  "FB": "1",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: V-; power_in. */
  "V-_5": "5",
}) {
  override schema = "Amplifier_Operational:OPA859xDSG";
  override referencePrefix = "U";
}

/**
 * Dual operational amplifier
 *
 * KiCad symbol: `Amplifier_Operational:Opamp_Dual`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SSOP*2.95x2.8mm*P0.65mm*, TSSOP*3x3mm*P0.65mm*, VSSOP*P0.5mm*, TO?99*.
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Opamp_Dual extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:Opamp_Dual";
  override referencePrefix = "U";
}

/**
 * Quad operational amplifier
 *
 * KiCad symbol: `Amplifier_Operational:Opamp_Quad`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*.
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Opamp_Quad extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:Opamp_Quad";
  override referencePrefix = "U";
}

/**
 * Dual General Purpose, Operational Amplifier, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:RC4558`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/rc4558.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RC4558 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:RC4558";
  override referencePrefix = "U";
}

/**
 * Dual Audio Operational Amplifier, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:RC4560`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/rc4560.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RC4560 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:RC4560";
  override referencePrefix = "U";
}

/**
 * Dual Audio Operational Amplifier, SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:RC4580`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/rc4580.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RC4580 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:RC4580";
  override referencePrefix = "U";
}

/**
 * Dual Low-Noise Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:SA5532`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne5532.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SA5532 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:SA5532";
  override referencePrefix = "U";
}

/**
 * Single Low-Noise Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:SA5534`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TO?5*.
 * @see http://www.ti.com/lit/ds/symlink/ne5534.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SA5534 extends Component.withPins({
  /** Physical pin 1: BAL; input. */
  "BAL": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: COMP; input. */
  "COMP": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: C/B; input. */
  "C/B": "8",
}) {
  override schema = "Amplifier_Operational:SA5534";
  override referencePrefix = "U";
}

/**
 * 900-MHz, 500-mA High-Power Output Current Feedback Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:THS3491xDDA`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PDSO*G8*EP*.
 * @see http://www.ti.com/lit/ds/symlink/ths3491.pdf
 * Keywords: opamp single current feedback wideband.
 * Default footprint: Package_SO:Texas_R-PDSO-G8_EP2.95x4.9mm_Mask2.4x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS3491xDDA extends Component.withPins({
  /** Physical pin 1: REF; input. */
  "REF": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: ~{PD}; input. */
  "~{PD}": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Amplifier_Operational:THS3491xDDA";
  override referencePrefix = "U";
}

/**
 * 120MHz GBW, Low-Distortion High-Speed Rail-to-Rail Output with Shutdown, HVSSOP-10
 *
 * KiCad symbol: `Amplifier_Operational:THS4226DGQ`. Reference prefix: `U`.
 * Footprint filters: HVSSOP*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ths4226.pdf
 * Keywords: dual operational amplifier enable.
 * Default footprint: Package_SO:HVSSOP-10-1EP_3x3mm_P0.5mm_EP1.57x1.88mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS4226DGQ extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: ~{PD}; input. */
  "~{PD}_5": "5",
  /** Physical pin 6: ~{PD}; input. */
  "~{PD}_6": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 4: V_{S}-; power_in. */
  "V_{S}-": "4",
  /** Physical pin 10: V_{S}+; power_in. */
  "V_{S}+": "10",
  /** Physical pin 11: PAD; passive. */
  "PAD": "11",
}) {
  override schema = "Amplifier_Operational:THS4226DGQ";
  override referencePrefix = "U";
}

/**
 * Single High-voltage, High Slew Rate, Wideband, FET-input Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:THS4631D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see www.ti.com/lit/ds/symlink/ths4631.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS4631D extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:THS4631D";
  override referencePrefix = "U";
}

/**
 * Single High-voltage, High Slew Rate, Wideband, FET-input Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:THS4631DDA`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*, MSOP*1EP*3x3mm*P0.65mm*.
 * @see www.ti.com/lit/ds/symlink/ths4631.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS4631DDA extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: PAD; passive. */
  "PAD": "9",
}) {
  override schema = "Amplifier_Operational:THS4631DDA";
  override referencePrefix = "U";
}

/**
 * Single High-voltage, High Slew Rate, Wideband, FET-input Operational Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:THS4631DGN`. Reference prefix: `U`.
 * Footprint filters: SOIC*1EP*3.9x4.9mm*P1.27mm*, MSOP*1EP*3x3mm*P0.65mm*.
 * @see www.ti.com/lit/ds/symlink/ths4631.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THS4631DGN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: PAD; passive. */
  "PAD": "9",
}) {
  override schema = "Amplifier_Operational:THS4631DGN";
  override referencePrefix = "U";
}

/**
 * Single Low-Power JFET-Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TL061`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl061.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL061 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TL061";
  override referencePrefix = "U";
}

/**
 * Dual Low-Power JFET-Input Operational Amplifiers, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:TL062`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl061.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL062 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TL062";
  override referencePrefix = "U";
}

/**
 * Quad Low-Power JFET-Input Operational Amplifiers, DIP-14/SOIC-14/SSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:TL064`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl061.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL064 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TL064";
  override referencePrefix = "U";
}

/**
 * Single Low-Noise JFET-Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TL071`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl071.pdf
 * Keywords: singel opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL071 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TL071";
  override referencePrefix = "U";
}

/**
 * Dual Low-Noise JFET-Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TL072`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl071.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL072 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TL072";
  override referencePrefix = "U";
}

/**
 * Quad Low-Noise JFET-Input Operational Amplifiers, DIP-14/SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:TL074`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl071.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL074 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TL074";
  override referencePrefix = "U";
}

/**
 * Single JFET-Input Operational Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TL081`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl081.pdf
 * Keywords: single opamp.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL081 extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TL081";
  override referencePrefix = "U";
}

/**
 * Dual JFET-Input Operational Amplifiers, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:TL082`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl081.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL082 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TL082";
  override referencePrefix = "U";
}

/**
 * Quad JFET-Input Operational Amplifiers, DIP-14/SOIC-14/SSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:TL084`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl081.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TL084 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TL084";
  override referencePrefix = "U";
}

/**
 * Dual LinCMOS Precision Dual Operational Amplifiers, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLC272`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc272.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC272 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLC272";
  override referencePrefix = "U";
}

/**
 * Quad LinCMOS Precision Quad Operational Amplifiers, DIP-14/SOIC-14/SSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:TLC274`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc274.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC274 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TLC274";
  override referencePrefix = "U";
}

/**
 * Dual LinCMOS Precision Dual Operational Amplifiers, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLC277`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc272.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC277 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLC277";
  override referencePrefix = "U";
}

/**
 * Quad LinCMOS Precision Quad Operational Amplifiers, DIP-14/SOIC-14/SSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:TLC279`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc274.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC279 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TLC279";
  override referencePrefix = "U";
}

/**
 * LinCMOS Precision Dual Operational Amplifiers, VIO_max = 10mV (at 25°C), VDD = 3..16V (C suffix) / VDD = 4..16V (I / M suffix), 525kHz unity-gain bandwidth (VDD = 5V, TA = 25°C), SOIC-8 (150 mil)
 *
 * KiCad symbol: `Amplifier_Operational:TLC27M2xD`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlc27m2.pdf
 * Keywords: opamp operational-amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC27M2xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLC27M2xD";
  override referencePrefix = "U";
}

/**
 * LinCMOS Precision Dual Operational Amplifiers, VIO_max = 10mV (at 25°C), VDD = 3..16V (C suffix) / VDD = 4..16V (I / M suffix), 525kHz unity-gain bandwidth (VDD = 5V, TA = 25°C), SOIC-8 (208 mil)
 *
 * KiCad symbol: `Amplifier_Operational:TLC27M2xPS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlc27m2.pdf
 * Keywords: opamp operational-amplifier.
 * Default footprint: Package_SO:SOIC-8_5.3x6.2mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC27M2xPS extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLC27M2xPS";
  override referencePrefix = "U";
}

/**
 * LinCMOS Precision Dual Operational Amplifiers, VIO_max = 10mV (at 25°C), VDD = 3..16V (C suffix) / VDD = 4..16V (I / M suffix), 525kHz unity-gain bandwidth (VDD = 5V, TA = 25°C), TSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLC27M2xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlc27m2.pdf
 * Keywords: opamp operational-amplifier.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC27M2xPW extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLC27M2xPW";
  override referencePrefix = "U";
}

/**
 * LinCMOS Precision Dual Operational Amplifiers, VIO_max = 500μV (at 25°C), VDD = 3..16V (C suffix) / VDD = 4..16V (I / M suffix), 525kHz unity-gain bandwidth (VDD = 5V, TA = 25°C), SOIC-8 (150 mil)
 *
 * KiCad symbol: `Amplifier_Operational:TLC27M7xD`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlc27m2.pdf
 * Keywords: opamp operational-amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC27M7xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLC27M7xD";
  override referencePrefix = "U";
}

/**
 * LinCMOS Precision Dual Operational Amplifiers, VIO_max = 500μV (at 25°C), VDD = 3..16V (C suffix) / VDD = 4..16V (I / M suffix), 525kHz unity-gain bandwidth (VDD = 5V, TA = 25°C), SOIC-8 (208 mil)
 *
 * KiCad symbol: `Amplifier_Operational:TLC27M7xPS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x6.2mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlc27m2.pdf
 * Keywords: opamp operational-amplifier.
 * Default footprint: Package_SO:SOIC-8_5.3x6.2mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC27M7xPS extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLC27M7xPS";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 500 uV offset voltage, 0-70°C, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TLE2141ACD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tle2141a.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE2141ACD extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TLE2141ACD";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 500 uV offset voltage, 0-70°C, PDIP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLE2141ACP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/tle2141a.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE2141ACP extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TLE2141ACP";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 500 uV offset voltage, -40 to 105°C, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TLE2141AID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tle2141a.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE2141AID extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TLE2141AID";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 500 uV offset voltage, -40 to 105°C, PDIP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLE2141AIP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/tle2141a.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE2141AIP extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TLE2141AIP";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 900 uV offset voltage, 0-70°C, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TLE2141CD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tle2141a.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE2141CD extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TLE2141CD";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 900 uV offset voltage, 0-70°C, PDIP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLE2141CP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/tle2141a.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE2141CP extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TLE2141CP";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 900 uV offset voltage, -40 to 105°C, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TLE2141ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tle2141a.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE2141ID extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TLE2141ID";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 900 uV offset voltage, -40 to 105°C, PDIP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLE2141IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/tle2141a.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE2141IP extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TLE2141IP";
  override referencePrefix = "U";
}

/**
 * Operational Amplifier, 900 uV offset voltage, -55 to 125°C, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TLE2141MD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tle2141a.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLE2141MD extends Component.withPins({
  /** Physical pin 1: NULL; input. */
  "NULL_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NULL; input. */
  "NULL_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
}) {
  override schema = "Amplifier_Operational:TLE2141MD";
  override referencePrefix = "U";
}

/**
 * Low-power Operational Amplifier, SOT-353
 *
 * KiCad symbol: `Amplifier_Operational:TLV172IDCK`. Reference prefix: `U`.
 * Footprint filters: SOT*353*SC*70*.
 * @see http://www.ti.com/lit/ds/symlink/tlv172.pdf
 * Keywords: op amp operational amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV172IDCK extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:TLV172IDCK";
  override referencePrefix = "U";
}

/**
 * Rail-to-Rail Input/Output Operational Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV2371D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlv2375.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV2371D extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:TLV2371D";
  override referencePrefix = "U";
}

/**
 * Rail-to-Rail Input/Output Operational Amplifier, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:TLV2371DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tlv2375.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV2371DBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:TLV2371DBV";
  override referencePrefix = "U";
}

/**
 * Rail-to-Rail Input/Output Operational Amplifier, PDIP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV2371P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlv2375.pdf
 * Keywords: single opamp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV2371P extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:TLV2371P";
  override referencePrefix = "U";
}

/**
 * Dual Rail-to-Rail Input/Output Operational Amplifier, DIP-8/SOIC-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV2372`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlv2375.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV2372 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLV2372";
  override referencePrefix = "U";
}

/**
 * 5.5-V, 200-MHz, 100mA Output Current, 150 V/us, RRIO Operational Amplifiers, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:TLV3541xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tlv3541.pdf
 * Keywords: texas single opamp operational-amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV3541xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:TLV3541xDBV";
  override referencePrefix = "U";
}

/**
 * 50 MHz, 27V/us, ±0.4mV offset, 2.2..5.5V supply, 4.5 nV/√Hz noise, zero crossover RRIO Opamp, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:TLV365DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tlv365.pdf
 * Keywords: operational amplifier texas single rail-to-rail.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV365DBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:TLV365DBV";
  override referencePrefix = "U";
}

/**
 * Low-power, Rail-to-rail, 1MHz Operational Amplifier, SOT-353
 *
 * KiCad symbol: `Amplifier_Operational:TLV6001DCK`. Reference prefix: `U`.
 * Footprint filters: SOT*353*SC*70*.
 * @see http://www.ti.com/lit/ds/symlink/tlv6001.pdf
 * Keywords: op amp operational amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV6001DCK extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:TLV6001DCK";
  override referencePrefix = "U";
}

/**
 * Low-power, Rail-to-Rail, 1MHz Operational Amplifier, SOT-353
 *
 * KiCad symbol: `Amplifier_Operational:TLV9001IDCK`. Reference prefix: `U`.
 * Footprint filters: SOT*353*SC*70*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9001.pdf
 * Keywords: op amp operational amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9001IDCK extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:TLV9001IDCK";
  override referencePrefix = "U";
}

/**
 * Low-Power, Quad-Operational Amplifiers, Texas S-PX2QFN-14
 *
 * KiCad symbol: `Amplifier_Operational:TLV9004xRUCR`. Reference prefix: `U`.
 * Footprint filters: Texas*S*PX2QFN*.
 * @see http://www.ti.com/lit/ds/symlink/tlv9004.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_DFN_QFN:Texas_S-PX2QFN-14.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9004xRUCR extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-_1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: +; input. */
  "+_4": "4",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 12: -; input. */
  "-_12": "12",
  /** Physical pin 13: unnamed; output. */
  "P13": "13",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 10: V-; power_in. */
  "V-": "10",
}) {
  override schema = "Amplifier_Operational:TLV9004xRUCR";
  override referencePrefix = "U";
}

/**
 * Quad RRIO Operational Amplifiers, 15V/us slew rate, 33uVos, 5MHz GBW, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:TLV9054xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9054.pdf
 * Keywords: texas opamp.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9054xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TLV9054xD";
  override referencePrefix = "U";
}

/**
 * Quad RRIO Operational Amplifiers, 15V/us slew rate, 33uVos, 5MHz GBW, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:TLV9054xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9054.pdf
 * Keywords: texas opamp.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9054xPW extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TLV9054xPW";
  override referencePrefix = "U";
}

/**
 * 10-MHz, RRIO, CMOS Operational Amplifiers for Cost-Sensitive Systems, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:TLV9061xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9061.pdf
 * Keywords: single opamp rail to rail input output.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9061xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:TLV9061xDBV";
  override referencePrefix = "U";
}

/**
 * 10-MHz, RRIO, CMOS Operational Amplifiers for Cost-Sensitive Systems, SC-70
 *
 * KiCad symbol: `Amplifier_Operational:TLV9061xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT*353*SC*70*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9061.pdf
 * Keywords: single opamp rail to rail input output.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9061xDCK extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:TLV9061xDCK";
  override referencePrefix = "U";
}

/**
 * 10-MHz, RRIO, CMOS Operational Amplifiers for Cost-Sensitive Systems, X2SON
 *
 * KiCad symbol: `Amplifier_Operational:TLV9061xDPW`. Reference prefix: `U`.
 * Footprint filters: Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9061.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SON:Texas_X2SON-5_0.8x0.8mm_P0.48mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9061xDPW extends Component.withPins({
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 4: +; input. */
  "+": "4",
}) {
  override schema = "Amplifier_Operational:TLV9061xDPW";
  override referencePrefix = "U";
}

/**
 * Dual Operational Amplifiers, SOIC-8/TSSOP-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV9062`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, VSSOP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9062.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9062 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLV9062";
  override referencePrefix = "U";
}

/**
 * Dual operational amplifier, 300 uV Offset, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV9062xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9062.pdf
 * Keywords: dual op-amp low power.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9062xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLV9062xD";
  override referencePrefix = "U";
}

/**
 * Dual operational amplifier, 210uV Offset, 0.25uV/C, low-noise, WSON-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV9062xDSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP?2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9062.pdf
 * Keywords: dual opamp low-power.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm_ThermalVias.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9062xDSG extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
  override schema = "Amplifier_Operational:TLV9062xDSG";
  override referencePrefix = "U";
}

/**
 * Quad Rail-to-Rail, Operational Amplifiers, 10MHz, SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:TLV9064`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9064.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9064 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TLV9064";
  override referencePrefix = "U";
}

/**
 * Quad 10-MHz RRIO CMOS Operational Amplifier, WQFN-N16
 *
 * KiCad symbol: `Amplifier_Operational:TLV9064xRTE`. Reference prefix: `U`.
 * Footprint filters: WQFN*16*EP1.68x1.68mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9064.pdf
 * Keywords: quad opamp.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9064xRTE extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 6: ~{SHDN_12}; input. */
  "~{SHDN_12}": "6",
  /** Physical pin 15: unnamed; output. */
  "P15": "15",
  /** Physical pin 16: -; input. */
  "-_16": "16",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 7: ~{SHDN_34}; input. */
  "~{SHDN_34}": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 11: V-; power_in. */
  "V-_11": "11",
  /** Physical pin 17: V-; passive. */
  "V-_17": "17",
}) {
  override schema = "Amplifier_Operational:TLV9064xRTE";
  override referencePrefix = "U";
}

/**
 * 40-V, 1-MHz, RRO Operational Amplifiers for Cost-Sensitive Systems, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:TLV9301xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9301.pdf
 * Keywords: single opamp 40V rail to rail output.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9301xDBV extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:TLV9301xDBV";
  override referencePrefix = "U";
}

/**
 * 40-V, 1-MHz, RRO Operational Amplifiers for Cost-Sensitive Systems, SC-70
 *
 * KiCad symbol: `Amplifier_Operational:TLV9301xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT*353*SC*70*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9301.pdf
 * Keywords: op amp operational amplifier 40V rail to rail output.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9301xDCK extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:TLV9301xDCK";
  override referencePrefix = "U";
}

/**
 * 40-V, 1-MHz, RRO Operational Amplifiers for Cost-Sensitive Systems, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV9302xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9302.pdf
 * Keywords: dual opamp 40V rail to rail output.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9302xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLV9302xD";
  override referencePrefix = "U";
}

/**
 * 40-V, 1-MHz, RRO Operational Amplifiers for Cost-Sensitive Systems, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV9302xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9302.pdf
 * Keywords: dual opamp 40V rail to rail output.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9302xDDF extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLV9302xDDF";
  override referencePrefix = "U";
}

/**
 * 40-V, 1-MHz, RRO Operational Amplifiers for Cost-Sensitive Systems, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV9302xDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9302.pdf
 * Keywords: dual opamp 40V rail to rail output.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9302xDGK extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLV9302xDGK";
  override referencePrefix = "U";
}

/**
 * 40-V, 1-MHz, RRO Operational Amplifiers for Cost-Sensitive Systems, TSSOP-8
 *
 * KiCad symbol: `Amplifier_Operational:TLV9302xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9302.pdf
 * Keywords: dual opamp 40V rail to rail output.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9302xPW extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TLV9302xPW";
  override referencePrefix = "U";
}

/**
 * 40-V, 1-MHz, RRO Operational Amplifiers for Cost-Sensitive Systems, SOIC-14
 *
 * KiCad symbol: `Amplifier_Operational:TLV9304xD`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x8.65mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9304.pdf
 * Keywords: quad opamp 40V rail to rail output.
 * Default footprint: Package_SO:SO-14_3.9x8.65mm_P1.27mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9304xD extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TLV9304xD";
  override referencePrefix = "U";
}

/**
 * 40-V, 1-MHz, RRO Operational Amplifiers for Cost-Sensitive Systems, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:TLV9304xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlv9304.pdf
 * Keywords: quad opamp 40V rail to rail output.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLV9304xPW extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TLV9304xPW";
  override referencePrefix = "U";
}

/**
 * Rail-to-rail 0.9V nanopower comparator, SC-70-5
 *
 * KiCad symbol: `Amplifier_Operational:TS881xCx`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/a2/60/3e/5d/b2/c1/4a/e9/DM00057901.pdf/files/DM00057901.pdf/jcr:content/translations/en.DM00057901.pdf
 * Keywords: single comparator.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TS881xCx extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:TS881xCx";
  override referencePrefix = "U";
}

/**
 * Rail-to-rail 0.9V nanopower comparator, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:TS881xLx`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see www.st.com/resource/en/datasheet/ts881.pdf
 * Keywords: single comparator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TS881xLx extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:TS881xLx";
  override referencePrefix = "U";
}

/**
 * Dual Rail-to-rail CMOS Operational Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TS912`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see www.st.com/resource/en/datasheet/ts912.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TS912 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TS912";
  override referencePrefix = "U";
}

/**
 * Single rail-to-rail input/output 8 MHz operational amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TSV911IDT`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see www.st.com/resource/en/datasheet/tsv911.pdf
 * Keywords: single opamp.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV911IDT extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Operational:TSV911IDT";
  override referencePrefix = "U";
}

/**
 * Single rail-to-rail input/output 8 MHz operational amplifiers, reversed power pins, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:TSV911RILT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see www.st.com/resource/en/datasheet/tsv911.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV911RILT extends Component.withPins({
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:TSV911RILT";
  override referencePrefix = "U";
}

/**
 * Single rail-to-rail input/output 8 MHz operational amplifiers, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:TSV911xxLx`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see www.st.com/resource/en/datasheet/tsv911.pdf
 * Keywords: single opamp.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV911xxLx extends Component.withPins({
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
}) {
  override schema = "Amplifier_Operational:TSV911xxLx";
  override referencePrefix = "U";
}

/**
 * Dual rail-to-rail input/output 8 MHz operational amplifiers, SOIC-8
 *
 * KiCad symbol: `Amplifier_Operational:TSV912IDT`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see www.st.com/resource/en/datasheet/tsv911.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV912IDT extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TSV912IDT";
  override referencePrefix = "U";
}

/**
 * Dual rail-to-rail input/output 8 MHz operational amplifiers, MiniSO-8
 *
 * KiCad symbol: `Amplifier_Operational:TSV912IST`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, TO*99*, OnSemi*Micro8*, TSSOP*3x3mm*P0.65mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, SSOP*3.9x4.9mm*P0.635mm*, LFCSP*2x2mm*P0.5mm*, *SIP*, SOIC*5.3x6.2mm*P1.27mm*.
 * @see www.st.com/resource/en/datasheet/tsv911.pdf
 * Keywords: dual opamp.
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV912IST extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
  override schema = "Amplifier_Operational:TSV912IST";
  override referencePrefix = "U";
}

/**
 * Quad rail-to-rail input/output 8 MHz operational amplifiers, SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:TSV914`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see www.st.com/resource/en/datasheet/tsv911.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV914 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TSV914";
  override referencePrefix = "U";
}

/**
 * 20MHz GBW, RRIO, 2.5..5.5V supply, 820uA single OpAmp, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Operational:TSV991AILT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see www.st.com/resource/en/datasheet/tsv991.pdf
 * Keywords: low-power micropower st.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV991AILT extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Operational:TSV991AILT";
  override referencePrefix = "U";
}

/**
 * 20MHz GBW, RRIO, 2.5..5.5V supply, 820uA single OpAmp, DFN-6
 *
 * KiCad symbol: `Amplifier_Operational:TSV991AIQ1T`. Reference prefix: `U`.
 * Footprint filters: *DFN*1.6x1.3mm*P0.4mm*.
 * @see www.st.com/resource/en/datasheet/tsv991.pdf
 * Keywords: low-power micropower st.
 * Default footprint: Package_DFN_QFN:DFN-6_1.6x1.3mm_P0.4mm.
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV991AIQ1T extends Component.withPins({
  /** Physical pin 1: -; input. */
  "-": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
}) {
  override schema = "Amplifier_Operational:TSV991AIQ1T";
  override referencePrefix = "U";
}

/**
 * Quad Rail-to-rail, 20 MHz GBP, operational amplifiers, SOIC-14/TSSOP-14
 *
 * KiCad symbol: `Amplifier_Operational:TSV994`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, DIP*W7.62mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*, MSOP*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/tsv994.pdf
 * Keywords: quad opamp.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSV994 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: -; input. */
  "-_9": "9",
  /** Physical pin 10: +; input. */
  "+_10": "10",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 13: -; input. */
  "-_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
}) {
  override schema = "Amplifier_Operational:TSV994";
  override referencePrefix = "U";
}

