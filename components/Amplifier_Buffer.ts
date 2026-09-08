// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * High-Speed, 1000 MHz, Closed-Loop Buffer, SOIC-8
 *
 * KiCad symbol: `Amplifier_Buffer:BUF602xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/buf602.pdf
 * Keywords: buffer amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BUF602xD extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: IN; input. */
  "IN": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: VREF; output. */
  "VREF": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
}) {
  override schema = "Amplifier_Buffer:BUF602xD";
  override referencePrefix = "U";
}

/**
 * High-Speed, 1000 MHz, Closed-Loop Buffer, SOT23-5
 *
 * KiCad symbol: `Amplifier_Buffer:BUF602xDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/buf602.pdf
 * Keywords: buffer amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BUF602xDBV extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: VREF; output. */
  "VREF": "3",
  /** Physical pin 4: IN; input. */
  "IN": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
  override schema = "Amplifier_Buffer:BUF602xDBV";
  override referencePrefix = "U";
}

/**
 * 250mA High-Speed Buffer, SOIC-8
 *
 * KiCad symbol: `Amplifier_Buffer:BUF634U`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/buf634.pdf
 * Keywords: buffer amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BUF634U extends Component.withPins({
  /** Physical pin 1: BW; input. */
  "BW": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: V_{IN}; input. */
  "V_{IN}": "3",
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
  override schema = "Amplifier_Buffer:BUF634U";
  override referencePrefix = "U";
}

/**
 * 36-V, 210-MHz, 250-mA Output, High-Speed Buffer, SOIC-8
 *
 * KiCad symbol: `Amplifier_Buffer:BUF634AxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/buf634a.pdf
 * Keywords: buffer amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BUF634AxD extends Component.withPins({
  /** Physical pin 1: BW; input. */
  "BW": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: V_{IN}; input. */
  "V_{IN}": "3",
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
  override schema = "Amplifier_Buffer:BUF634AxD";
  override referencePrefix = "U";
}

/**
 * 250mA High-Speed Buffer, PowerPAD SOIC-8
 *
 * KiCad symbol: `Amplifier_Buffer:BUF634AxDDA`. Reference prefix: `U`.
 * Footprint filters: TI*SO*PowerPAD*.
 * @see https://www.ti.com/lit/ds/symlink/buf634.pdf
 * Keywords: buffer amplifier.
 * Default footprint: Package_SO:TI_SO-PowerPAD-8_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BUF634AxDDA extends Component.withPins({
  /** Physical pin 9: THPAD; power_in. */
  "THPAD": "9",
  /** Physical pin 1: BW; input. */
  "BW": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: V_{IN}; input. */
  "V_{IN}": "3",
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
  override schema = "Amplifier_Buffer:BUF634AxDDA";
  override referencePrefix = "U";
}

/**
 * 250mA High-Speed Buffer, VSON-8
 *
 * KiCad symbol: `Amplifier_Buffer:BUF634AxDRB`. Reference prefix: `U`.
 * Footprint filters: Texas*S*PVSON*.
 * @see https://www.ti.com/lit/ds/symlink/buf634a.pdf
 * Keywords: buffer amplifier.
 * Default footprint: Package_SON:Texas_S-PVSON-N8_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BUF634AxDRB extends Component.withPins({
  /** Physical pin 9: THPAD; power_in. */
  "THPAD": "9",
  /** Physical pin 1: BW; input. */
  "BW": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: V_{IN}; input. */
  "V_{IN}": "3",
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
  override schema = "Amplifier_Buffer:BUF634AxDRB";
  override referencePrefix = "U";
}

/**
 * High Speed, 3.1 GHz, Open Loop, High Impedance, Unity Gain Buffer, VQFN-16
 *
 * KiCad symbol: `Amplifier_Buffer:BUF802`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/buf802.pdf
 * Keywords: jfet high-slew-rate.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BUF802 extends Component.withPins({
  /** Physical pin 1: V_{S+}; power_in. */
  "V_{S+}": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: IN_{BIAS}; input. */
  "IN_{BIAS}": "3",
  /** Physical pin 4: IN_{AUX}; input. */
  "IN_{AUX}": "4",
  /** Physical pin 5: V_{S-}; power_in. */
  "V_{S-}_5": "5",
  /** Physical pin 6: AUX_{BIAS}; input. */
  "AUX_{BIAS}": "6",
  /** Physical pin 7: R_{BIAS}; input. */
  "R_{BIAS}": "7",
  /** Physical pin 8: V_{S-}; passive. */
  "V_{S-}_8": "8",
  /** Physical pin 9: unnamed; no_connect. */
  "P9": "9",
  /** Physical pin 10: V_{SO-}; power_in. */
  "V_{SO-}": "10",
  /** Physical pin 11: unnamed; output. */
  "P11": "11",
  /** Physical pin 12: V_{SO+}; power_in. */
  "V_{SO+}": "12",
  /** Physical pin 13: unnamed; no_connect. */
  "P13": "13",
  /** Physical pin 14: CLL; input. */
  "CLL": "14",
  /** Physical pin 15: CLH; input. */
  "CLH": "15",
  /** Physical pin 16: unnamed; no_connect. */
  "P16": "16",
  /** Physical pin 17: PAD; free. */
  "PAD": "17",
}) {
  override schema = "Amplifier_Buffer:BUF802";
  override referencePrefix = "U";
}

/**
 * Monolithic high slew rate, buffer amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Buffer:EL2001CN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.datasheetlib.com/datasheet/677973/el2001_intersil.html#datasheet
 * Keywords: Monolithic high slew rate, buffer amplifier.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EL2001CN extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Amplifier_Buffer:EL2001CN";
  override referencePrefix = "U";
}

/**
 * Wide-Band, High Current, Unity Gain Buffer Amplifier, TO-5-8
 *
 * KiCad symbol: `Amplifier_Buffer:LH0002H`. Reference prefix: `U`.
 * Footprint filters: TO?5*.
 * @see http://www.calogic.net/pdf/LH0002_Datasheet_Rev_A.pdf
 * Keywords: Buffer.
 * Default footprint: Package_TO_SOT_THT:TO-5-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LH0002H extends Component.withPins({
  /** Physical pin 1: V1+; power_in. */
  "V1+": "1",
  /** Physical pin 2: V2+; power_in. */
  "V2+": "2",
  /** Physical pin 3: E3; passive. */
  "E3": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: E4; passive. */
  "E4": "5",
  /** Physical pin 6: V2-; power_in. */
  "V2-": "6",
  /** Physical pin 7: V1-; power_in. */
  "V1-": "7",
  /** Physical pin 8: IN; input. */
  "IN": "8",
}) {
  override schema = "Amplifier_Buffer:LH0002H";
  override referencePrefix = "U";
}

/**
 * High Speed Buffer, TO-5-8
 *
 * KiCad symbol: `Amplifier_Buffer:LM6321H`. Reference prefix: `U`.
 * Footprint filters: TO?5*.
 * @see http://www.electronica60norte.com/mwfls/pdf/LM6221.pdf
 * Keywords: single buffer.
 * Default footprint: Package_TO_SOT_THT:TO-5-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM6321H extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: IN; input. */
  "IN": "8",
}) {
  override schema = "Amplifier_Buffer:LM6321H";
  override referencePrefix = "U";
}

/**
 * High Speed Buffer, SOIC-14
 *
 * KiCad symbol: `Amplifier_Buffer:LM6321M`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.electronica60norte.com/mwfls/pdf/LM6221.pdf
 * Keywords: single buffer.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM6321M extends Component.withPins({
  /** Physical pin 1: V-; passive. */
  "V-_1": "1",
  /** Physical pin 2: V-; passive. */
  "V-_2": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: IN; input. */
  "IN": "5",
  /** Physical pin 6: V-; passive. */
  "V-_6": "6",
  /** Physical pin 7: V-; passive. */
  "V-_7": "7",
  /** Physical pin 8: V-; passive. */
  "V-_8": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: V+; power_in. */
  "V+": "11",
  /** Physical pin 12: unnamed; output. */
  "P12": "12",
  /** Physical pin 13: V-; passive. */
  "V-_13": "13",
  /** Physical pin 14: V-; passive. */
  "V-_14": "14",
}) {
  override schema = "Amplifier_Buffer:LM6321M";
  override referencePrefix = "U";
}

/**
 * High Speed Buffer, DIP-8
 *
 * KiCad symbol: `Amplifier_Buffer:LM6321N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.electronica60norte.com/mwfls/pdf/LM6221.pdf
 * Keywords: single buffer.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM6321N extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: IN; input. */
  "IN": "8",
}) {
  override schema = "Amplifier_Buffer:LM6321N";
  override referencePrefix = "U";
}

