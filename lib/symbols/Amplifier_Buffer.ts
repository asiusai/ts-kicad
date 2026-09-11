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
 */
export class BUF602xD extends Component.withPins({
  "V+": "1",
  "NC_2": "2",
  "NC_3": "3",
  "IN": "4",
  "V-": "5",
  "VREF": "6",
  "NC_7": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", NC_2: "no_connect", NC_3: "no_connect", IN: "input", "V-": "power_in", VREF: "output", NC_7: "no_connect", P8: "output", ...opts.pinTypes } });
  }
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
 */
export class BUF602xDBV extends Component.withPins({
  "P1": "1",
  "V-": "2",
  "VREF": "3",
  "IN": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", "V-": "power_in", VREF: "output", IN: "input", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class BUF634U extends Component.withPins({
  "BW": "1",
  "NC_2": "2",
  "V_{IN}": "3",
  "V-": "4",
  "NC_5": "5",
  "P6": "6",
  "V+": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BW: "input", NC_2: "no_connect", "V_{IN}": "input", "V-": "power_in", NC_5: "no_connect", P6: "output", "V+": "power_in", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class BUF634AxD extends Component.withPins({
  "BW": "1",
  "NC_2": "2",
  "V_{IN}": "3",
  "V-": "4",
  "NC_5": "5",
  "P6": "6",
  "V+": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BW: "input", NC_2: "no_connect", "V_{IN}": "input", "V-": "power_in", NC_5: "no_connect", P6: "output", "V+": "power_in", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class BUF634AxDDA extends Component.withPins({
  "THPAD": "9",
  "BW": "1",
  "NC_2": "2",
  "V_{IN}": "3",
  "V-": "4",
  "NC_5": "5",
  "P6": "6",
  "V+": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { THPAD: "power_in", BW: "input", NC_2: "no_connect", "V_{IN}": "input", "V-": "power_in", NC_5: "no_connect", P6: "output", "V+": "power_in", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class BUF634AxDRB extends Component.withPins({
  "THPAD": "9",
  "BW": "1",
  "NC_2": "2",
  "V_{IN}": "3",
  "V-": "4",
  "NC_5": "5",
  "P6": "6",
  "V+": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { THPAD: "power_in", BW: "input", NC_2: "no_connect", "V_{IN}": "input", "V-": "power_in", NC_5: "no_connect", P6: "output", "V+": "power_in", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class BUF802 extends Component.withPins({
  "V_{S+}": "1",
  "IN": "2",
  "IN_{BIAS}": "3",
  "IN_{AUX}": "4",
  "V_{S-}_5": "5",
  "AUX_{BIAS}": "6",
  "R_{BIAS}": "7",
  "V_{S-}_8": "8",
  "P9": "9",
  "V_{SO-}": "10",
  "P11": "11",
  "V_{SO+}": "12",
  "P13": "13",
  "CLL": "14",
  "CLH": "15",
  "P16": "16",
  "PAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{S+}": "power_in", IN: "input", "IN_{BIAS}": "input", "IN_{AUX}": "input", "V_{S-}_5": "power_in", "AUX_{BIAS}": "input", "R_{BIAS}": "input", "V_{S-}_8": "passive", P9: "no_connect", "V_{SO-}": "power_in", P11: "output", "V_{SO+}": "power_in", P13: "no_connect", CLL: "input", CLH: "input", P16: "no_connect", PAD: "free", ...opts.pinTypes } });
  }
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
 */
export class EL2001CN extends Component.withPins({
  "V+": "1",
  "IN": "2",
  "NC_3": "3",
  "V-": "4",
  "NC_5": "5",
  "NC_6": "6",
  "P7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", IN: "input", NC_3: "no_connect", "V-": "power_in", NC_5: "no_connect", NC_6: "no_connect", P7: "output", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class LH0002H extends Component.withPins({
  "V1+": "1",
  "V2+": "2",
  "E3": "3",
  "P4": "4",
  "E4": "5",
  "V2-": "6",
  "V1-": "7",
  "IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V1+": "power_in", "V2+": "power_in", E3: "passive", P4: "output", E4: "passive", "V2-": "power_in", "V1-": "power_in", IN: "input", ...opts.pinTypes } });
  }
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
 */
export class LM6321H extends Component.withPins({
  "NC_1": "1",
  "V+": "2",
  "NC_3": "3",
  "P4": "4",
  "NC_5": "5",
  "V-": "6",
  "NC_7": "7",
  "IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "V+": "power_in", NC_3: "no_connect", P4: "output", NC_5: "no_connect", "V-": "power_in", NC_7: "no_connect", IN: "input", ...opts.pinTypes } });
  }
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
 */
export class LM6321M extends Component.withPins({
  "V-_1": "1",
  "V-_2": "2",
  "V-_3": "3",
  "NC_4": "4",
  "IN": "5",
  "V-_6": "6",
  "V-_7": "7",
  "V-_8": "8",
  "V-_9": "9",
  "NC_10": "10",
  "V+": "11",
  "P12": "12",
  "V-_13": "13",
  "V-_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V-_1": "passive", "V-_2": "passive", "V-_3": "power_in", NC_4: "no_connect", IN: "input", "V-_6": "passive", "V-_7": "passive", "V-_8": "passive", "V-_9": "passive", NC_10: "no_connect", "V+": "power_in", P12: "output", "V-_13": "passive", "V-_14": "passive", ...opts.pinTypes } });
  }
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
 */
export class LM6321N extends Component.withPins({
  "NC_1": "1",
  "V+": "2",
  "NC_3": "3",
  "P4": "4",
  "NC_5": "5",
  "V-": "6",
  "NC_7": "7",
  "IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "V+": "power_in", NC_3: "no_connect", P4: "output", NC_5: "no_connect", "V-": "power_in", NC_7: "no_connect", IN: "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Buffer:LM6321N";
  override referencePrefix = "U";
}
