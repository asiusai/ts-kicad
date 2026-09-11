// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * SPST DC-4.5GHz absorbative switch, 40dB isolation at 1GHz, LFCSP-8
 *
 * KiCad symbol: `RF_Switch:ADG901BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG901_902.pdf
 * Keywords: RF SPST switch CMOS LVTTL.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.45x1.74mm.
 */
export class ADG901BCPZ extends Component.withPins({
  "VDD": "1",
  "CTRL": "2",
  "GND_3": "3",
  "RF1": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF2": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CTRL: "input", GND_3: "power_in", RF1: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", RF2: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:ADG901BCPZ";
  override referencePrefix = "U";
}

/**
 * SPST DC-4.5GHz absorbative switch, 40dB isolation at 1GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:ADG901BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG901_902.pdf
 * Keywords: RF SPST switch CMOS LVTTL.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADG901BRMZ extends Component.withPins({
  "VDD": "1",
  "CTRL": "2",
  "GND_3": "3",
  "RF1": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CTRL: "input", GND_3: "power_in", RF1: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", RF2: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:ADG901BRMZ";
  override referencePrefix = "U";
}

/**
 * SPST DC-4.5GHz reflective switch, 40dB isolation at 1GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:ADG902BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG901_902.pdf
 * Keywords: RF SPST switch CMOS LVTTL.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADG902BRMZ extends Component.withPins({
  "VDD": "1",
  "CTRL": "2",
  "GND_3": "3",
  "RF1": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CTRL: "input", GND_3: "power_in", RF1: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", RF2: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:ADG902BRMZ";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4GHz absorbative switch, 43dB isolation at 1GHz, LFCSP-8
 *
 * KiCad symbol: `RF_Switch:ADG918BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG918_919.pdf
 * Keywords: RF Mux SPDT switch CMOS LVTTL.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.45x1.74mm.
 */
export class ADG918BCPZ extends Component.withPins({
  "VDD": "1",
  "CTRL": "2",
  "GND_3": "3",
  "RFC": "4",
  "RF2": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF1": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CTRL: "input", GND_3: "power_in", RFC: "passive", RF2: "passive", GND_6: "passive", GND_7: "passive", RF1: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:ADG918BCPZ";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4GHz absorbative switch, 43dB isolation at 1GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:ADG918BRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG918_919.pdf
 * Keywords: RF Mux SPDT switch CMOS LVTTL.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADG918BRM extends Component.withPins({
  "VDD": "1",
  "CTRL": "2",
  "GND_3": "3",
  "RFC": "4",
  "RF2": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF1": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CTRL: "input", GND_3: "power_in", RFC: "passive", RF2: "passive", GND_6: "passive", GND_7: "passive", RF1: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:ADG918BRM";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4GHz reflective switch, 43dB isolation at 1GHz, LFCSP-8
 *
 * KiCad symbol: `RF_Switch:ADG919BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG918_919.pdf
 * Keywords: RF Mux SPDT switch CMOS LVTTL.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.45x1.74mm.
 */
export class ADG919BCPZ extends Component.withPins({
  "VDD": "1",
  "CTRL": "2",
  "GND_3": "3",
  "RFC": "4",
  "RF2": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF1": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CTRL: "input", GND_3: "power_in", RFC: "passive", RF2: "passive", GND_6: "passive", GND_7: "passive", RF1: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:ADG919BCPZ";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4GHz reflective switch, 43dB isolation at 1GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:ADG919BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG918_919.pdf
 * Keywords: RF Mux SPDT switch CMOS LVTTL.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADG919BRMZ extends Component.withPins({
  "VDD": "1",
  "CTRL": "2",
  "GND_3": "3",
  "RFC": "4",
  "RF2": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF1": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CTRL: "input", GND_3: "power_in", RFC: "passive", RF2: "passive", GND_6: "passive", GND_7: "passive", RF1: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:ADG919BRMZ";
  override referencePrefix = "U";
}

/**
 * 20 MHz to 4.0 GHz GaAs SPDT Switch, SC-70
 *
 * KiCad symbol: `RF_Switch:AS179-92LF`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see http://www.skyworksinc.com/uploads/documents/AS179_92LF_200176H.pdf
 * Keywords: rf spdt switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class AS179_92LF extends Component.withPins({
  "J3": "1",
  "GND": "2",
  "J2": "3",
  "V1": "4",
  "J1": "5",
  "V2": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { J3: "passive", GND: "power_in", J2: "passive", V1: "input", J1: "passive", V2: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:AS179-92LF";
  override referencePrefix = "U";
}

/**
 * SPDT DC-9GHz switch, 45dB isolation at 960MHz, PG-TSNP-6-10
 *
 * KiCad symbol: `RF_Switch:BGS12WN6E6327`. Reference prefix: `U`.
 * Footprint filters: *PG?TSNP*0.7x1.1mm*P0.4mm*.
 * @see https://www.infineon.com/dgdl/Infineon-BGS12WN6-DataSheet-v02_05-EN.pdf?fileId=5546d4626b2d8e69016b89d2b3334727
 * Keywords: RF Mux SPDT switch CMOS.
 * Default footprint: Package_LGA:Infineon_PG-TSNP-6-10_0.7x1.1mm_0.7x1.1mm_P0.4mm.
 */
export class BGS12WN6E6327 extends Component.withPins({
  "RF2": "1",
  "GND": "2",
  "RF1": "3",
  "VDD": "4",
  "RFIN": "5",
  "CTRL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF2: "passive", GND: "power_in", RF1: "passive", VDD: "power_in", RFIN: "passive", CTRL: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:BGS12WN6E6327";
  override referencePrefix = "U";
}

/**
 * SP4T 100MHz-6GHz absorptive switch, 50 Ohm, LFCSP-16
 *
 * KiCad symbol: `RF_Switch:HMC7992`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/HMC7992.pdf
 * Keywords: rf switch sp4t absorptive.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm.
 */
export class HMC7992 extends Component.withPins({
  "RF4": "1",
  "GND_2": "2",
  "GND_3": "3",
  "RF3": "4",
  "GND_5": "5",
  "VDD": "6",
  "B": "7",
  "A": "8",
  "RF2": "9",
  "GND_10": "10",
  "GND_11": "11",
  "RF1": "12",
  "GND_13": "13",
  "GND_14": "14",
  "RFC": "15",
  "GND_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF4: "passive", GND_2: "power_in", GND_3: "passive", RF3: "passive", GND_5: "passive", VDD: "power_in", B: "input", A: "input", RF2: "passive", GND_10: "passive", GND_11: "passive", RF1: "passive", GND_13: "passive", GND_14: "passive", RFC: "passive", GND_16: "passive", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:HMC7992";
  override referencePrefix = "U";
}

/**
 * High Isolation SPDT Non-Reflective Switch, DC-6GHz, Matched to 50 Ohm, LFCSP-16
 *
 * KiCad symbol: `RF_Switch:HMC849A`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/hmc849a.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_CSP:LFCSP-16-1EP_4x4mm_P0.65mm_EP2.4x2.4mm.
 */
export class HMC849A extends Component.withPins({
  "VDD": "1",
  "VCTL": "2",
  "RFC": "3",
  "GND_4": "4",
  "EN": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "RF1": "9",
  "GND_10": "10",
  "GND_11": "11",
  "RF2": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GND_15": "15",
  "GND_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VCTL: "input", RFC: "passive", GND_4: "passive", EN: "input", GND_6: "passive", GND_7: "passive", GND_8: "passive", RF1: "passive", GND_10: "power_in", GND_11: "passive", RF2: "passive", GND_13: "passive", GND_14: "passive", GND_15: "passive", GND_16: "passive", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:HMC849A";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4.6GHz reflective switch, 50 Ohm, XX112
 *
 * KiCad symbol: `RF_Switch:KSW-2-46`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*XX112*, SOP*1EP*4.57x4.57mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/KSW-2-46+.pdf
 * Keywords: RF SPDT switch.
 */
export class KSW_2_46 extends Component.withPins({
  "CONTROL2": "1",
  "RF_IN": "2",
  "CONTROL1": "3",
  "GND_4": "4",
  "RF_OUT1": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF_OUT2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CONTROL2: "input", RF_IN: "passive", CONTROL1: "input", GND_4: "power_in", RF_OUT1: "passive", GND_6: "passive", GND_7: "passive", RF_OUT2: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:KSW-2-46";
  override referencePrefix = "U";
}

/**
 * SPDT DC-4.6GHz absorbative switch, 50 Ohm, XX112
 *
 * KiCad symbol: `RF_Switch:KSWA-2-46`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*XX112*, SOP*1EP*4.57x4.57mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/KSWA-2-46+.pdf
 * Keywords: RF SPDT switch.
 */
export class KSWA_2_46 extends Component.withPins({
  "CONTROL2": "1",
  "RF_IN": "2",
  "CONTROL1": "3",
  "GND_4": "4",
  "RF_OUT1": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF_OUT2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CONTROL2: "input", RF_IN: "passive", CONTROL1: "input", GND_4: "power_in", RF_OUT1: "passive", GND_6: "passive", GND_7: "passive", RF_OUT2: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:KSWA-2-46";
  override referencePrefix = "U";
}

/**
 * SPST DC-2.0GHz absorbative switch, 50 Ohm, XX112
 *
 * KiCad symbol: `RF_Switch:KSWHA-1-20`. Reference prefix: `U`.
 * Footprint filters: Mini?Circuits*XX112*, SOP*1EP*4.57x4.57mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/KSWHA-1-20+.pdf
 * Keywords: RF SPST switch.
 */
export class KSWHA_1_20 extends Component.withPins({
  "RF_IN": "1",
  "CONTROL1": "2",
  "CONTROL2": "3",
  "GND_4": "4",
  "RF_OUT": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF_IN: "passive", CONTROL1: "input", CONTROL2: "input", GND_4: "power_in", RF_OUT: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:KSWHA-1-20";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.4/27dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0136`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0136.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MASWSS0136 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V2": "4",
  "RFC": "5",
  "V1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF1: "passive", GND: "power_in", RF2: "passive", V2: "input", RFC: "passive", V1: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASWSS0136";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.56/12dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASW-007221`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see http://cdn.macom.com/datasheets/masw-007221.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MASW_007221 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V2": "4",
  "RFC": "5",
  "V1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF1: "passive", GND: "power_in", RF2: "passive", V2: "input", RFC: "passive", V1: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASW-007221";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.3/22dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0115`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see http://cdn.macom.com/datasheets/maswss0115.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MASWSS0115 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V2": "4",
  "RFC": "5",
  "V1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF1: "passive", GND: "power_in", RF2: "passive", V2: "input", RFC: "passive", V1: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASWSS0115";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.4/16dB loss/isolation, IP 58dB@1GHz, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0143`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0143.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MASWSS0143 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V2": "4",
  "RFC": "5",
  "V1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF1: "passive", GND: "power_in", RF2: "passive", V2: "input", RFC: "passive", V1: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASWSS0143";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.65/21dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0151`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0151.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MASWSS0151 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V2": "4",
  "RFC": "5",
  "V1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF1: "passive", GND: "power_in", RF2: "passive", V2: "input", RFC: "passive", V1: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASWSS0151";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.3/12dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0166`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0166.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MASWSS0166 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V2": "4",
  "RFC": "5",
  "V1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF1: "passive", GND: "power_in", RF2: "passive", V2: "input", RFC: "passive", V1: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASWSS0166";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.35/21dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0176`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0176.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MASWSS0176 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V2": "4",
  "RFC": "5",
  "V1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF1: "passive", GND: "power_in", RF2: "passive", V2: "input", RFC: "passive", V1: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASWSS0176";
  override referencePrefix = "U";
}

/**
 * SPDT High Isolation Terminated Switch, 0.01-3.0 GHz, MSOP-8
 *
 * KiCad symbol: `RF_Switch:MASWSS0178`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://cdn.macom.com/datasheets/MASWSS0178.pdf
 * Keywords: RF switch SPDT.
 * Default footprint: Package_SO:MSOP-8-1EP_3x3mm_P0.65mm_EP1.73x1.85mm_ThermalVias.
 */
export class MASWSS0178 extends Component.withPins({
  "CTL1": "1",
  "CTL2": "2",
  "RFC": "3",
  "GND_4": "4",
  "RF2": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF1": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CTL1: "input", CTL2: "input", RFC: "passive", GND_4: "power_in", RF2: "passive", GND_6: "passive", GND_7: "passive", RF1: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASWSS0178";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-2GHz, 0.6/22dB loss/isolation, SOT-26 (SOT-23-6)
 *
 * KiCad symbol: `RF_Switch:MASWSS0179`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://cdn.macom.com/datasheets/MASWSS0179.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MASWSS0179 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V2": "4",
  "RFC": "5",
  "V1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF1: "passive", GND: "power_in", RF2: "passive", V2: "input", RFC: "passive", V1: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASWSS0179";
  override referencePrefix = "U";
}

/**
 * Macom GaAs RF SPDT switch, DC-3GHz, 0.33/13.5dB loss/isolation, SOT-363
 *
 * KiCad symbol: `RF_Switch:MASWSS0192`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://cdn.macom.com/datasheets/MASWSS0192.pdf
 * Keywords: RF SWITCH SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MASWSS0192 extends Component.withPins({
  "RF1": "1",
  "GND": "2",
  "RF2": "3",
  "V2": "4",
  "RFC": "5",
  "V1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF1: "passive", GND: "power_in", RF2: "passive", V2: "input", RFC: "passive", V1: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MASWSS0192";
  override referencePrefix = "U";
}

/**
 * SPDT DC-2.0GHz reflective switch, 50 Ohm, SOP-8
 *
 * KiCad symbol: `RF_Switch:MSW-2-20`. Reference prefix: `U`.
 * Footprint filters: SOP*3.76x4.96mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/MSW-2-20+.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_SO:SOP-8_3.76x4.96mm_P1.27mm.
 */
export class MSW_2_20 extends Component.withPins({
  "RF_IN": "1",
  "GND_2": "2",
  "RF_OUT2": "3",
  "CONTROL2": "4",
  "CONTROL1": "5",
  "RF_OUT1": "6",
  "GND_7": "7",
  "GND_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RF_IN: "passive", GND_2: "power_in", RF_OUT2: "passive", CONTROL2: "input", CONTROL1: "input", RF_OUT1: "passive", GND_7: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MSW-2-20";
  override referencePrefix = "U";
}

/**
 * SPDT DC-5.0GHz reflective switch, 50 Ohm, QFN-12
 *
 * KiCad symbol: `RF_Switch:MSW2-50`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.51mm*.
 * @see https://www.minicircuits.com/pdfs/MSW2-50+.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_DFN_QFN:QFN-12-1EP_3x3mm_P0.51mm_EP1.45x1.45mm.
 */
export class MSW2_50 extends Component.withPins({
  "CONTROL1": "1",
  "NC": "2",
  "CONTROL2": "3",
  "GND_4": "4",
  "RF_OUT2": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF_IN": "8",
  "GND_9": "9",
  "GND_10": "10",
  "RF_OUT1": "11",
  "GND_12": "12",
  "GND_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CONTROL1: "input", NC: "no_connect", CONTROL2: "input", GND_4: "power_in", RF_OUT2: "passive", GND_6: "passive", GND_7: "passive", RF_IN: "passive", GND_9: "passive", GND_10: "passive", RF_OUT1: "passive", GND_12: "passive", GND_13: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MSW2-50";
  override referencePrefix = "U";
}

/**
 * SPDT DC-2.0GHz absorbative switch, 50 Ohm, SOP-8
 *
 * KiCad symbol: `RF_Switch:MSWA-2-20`. Reference prefix: `U`.
 * Footprint filters: SOP*3.76x4.96mm*P1.27mm*.
 * @see https://www.minicircuits.com/pdfs/MSWA-2-20+.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_SO:SOP-8_3.76x4.96mm_P1.27mm.
 */
export class MSWA_2_20 extends Component.withPins({
  "CONTROL2": "1",
  "RF_IN": "2",
  "CONTROL1": "3",
  "GND_4": "4",
  "RF_OUT2": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF_OUT1": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CONTROL2: "input", RF_IN: "passive", CONTROL1: "input", GND_4: "power_in", RF_OUT2: "passive", GND_6: "passive", GND_7: "passive", RF_OUT1: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MSWA-2-20";
  override referencePrefix = "U";
}

/**
 * SPDT DC-5.0GHz absorbative switch, 50 Ohm, QFN-12
 *
 * KiCad symbol: `RF_Switch:MSWA2-50`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.51mm*.
 * @see https://www.minicircuits.com/pdfs/MSWA2-50+.pdf
 * Keywords: RF SPDT switch.
 * Default footprint: Package_DFN_QFN:QFN-12-1EP_3x3mm_P0.51mm_EP1.45x1.45mm.
 */
export class MSWA2_50 extends Component.withPins({
  "CONTROL1": "1",
  "NC": "2",
  "CONTROL2": "3",
  "GND_4": "4",
  "RF_OUT2": "5",
  "GND_6": "6",
  "GND_7": "7",
  "RF_IN": "8",
  "GND_9": "9",
  "GND_10": "10",
  "RF_OUT1": "11",
  "GND_12": "12",
  "GND_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CONTROL1: "input", NC: "no_connect", CONTROL2: "input", GND_4: "power_in", RF_OUT2: "passive", GND_6: "passive", GND_7: "passive", RF_IN: "passive", GND_9: "passive", GND_10: "passive", RF_OUT1: "passive", GND_12: "passive", GND_13: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:MSWA2-50";
  override referencePrefix = "U";
}

/**
 * SP4T 20MHz-3GHz high power switch, 50 Ohm, QFN-16
 *
 * KiCad symbol: `RF_Switch:SKY13380-350LF`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*3x3mm*.
 * @see https://www.skyworksinc.com/-/media/SkyWorks/Documents/Products/601-700/201486C.pdf
 * Keywords: rf switch sp4t.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm.
 */
export class SKY13380_350LF extends Component.withPins({
  "GND_1": "1",
  "VDD": "2",
  "CTRL2": "3",
  "CTRL1": "4",
  "GND_5": "5",
  "RF4": "6",
  "GND_7": "7",
  "RF3": "8",
  "GND_9": "9",
  "GND_10": "10",
  "ANT": "11",
  "GND_12": "12",
  "RF1": "13",
  "GND_14": "14",
  "RF2": "15",
  "NC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", VDD: "power_in", CTRL2: "input", CTRL1: "input", GND_5: "passive", RF4: "passive", GND_7: "passive", RF3: "passive", GND_9: "passive", GND_10: "passive", ANT: "passive", GND_12: "passive", RF1: "passive", GND_14: "passive", RF2: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:SKY13380-350LF";
  override referencePrefix = "U";
}

/**
 * SP4T 100MHz-6GHz absorptive switch, 50 Ohm, QFN-14
 *
 * KiCad symbol: `RF_Switch:SKY13575-639LF`. Reference prefix: `U`.
 * Footprint filters: *SKY13575?639LF*.
 * @see https://www.skyworksinc.com/-/media/SkyWorks/Documents/Products/2201-2300/SKY13575_639LF_203270D.pdf
 * Keywords: rf switch sp4t absorptive.
 * Default footprint: RF:Skyworks_SKY13575_639LF.
 */
export class SKY13575_639LF extends Component.withPins({
  "GND_1": "1",
  "RFC": "2",
  "GND_3": "3",
  "GND_4": "4",
  "RF4": "5",
  "GND_6": "6",
  "RF3": "7",
  "VC1": "8",
  "VC2": "9",
  "VDD": "10",
  "GND_11": "11",
  "RF2": "12",
  "GND_13": "13",
  "RF1": "14",
  "GND_15": "15",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", RFC: "passive", GND_3: "passive", GND_4: "passive", RF4: "passive", GND_6: "passive", RF3: "passive", VC1: "input", VC2: "input", VDD: "power_in", GND_11: "passive", RF2: "passive", GND_13: "passive", RF1: "passive", GND_15: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Switch:SKY13575-639LF";
  override referencePrefix = "U";
}
