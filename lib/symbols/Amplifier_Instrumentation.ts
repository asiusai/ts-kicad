// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Low Cost, Low Power, Instrumentation Amplifier, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD620`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD620.pdf
 * Keywords: Instrumentation amplifier.
 */
export class AD620 extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD620";
  override referencePrefix = "U";
}

/**
 * Single Rail-to-Rail, Low Cost Instrumentation Amplifier, DIP-8/SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: single instumentation amplifier.
 */
export class AD623 extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623AN`. Reference prefix: `U`.
 * Footprint filters: DIP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier dip-8.
 */
export class AD623AN extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623AN";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, RoHS, DIP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623ANZ`. Reference prefix: `U`.
 * Footprint filters: DIP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier dip-8.
 */
export class AD623ANZ extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623ANZ";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623AR`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier soic-8.
 */
export class AD623AR extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623AR";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623ARM`. Reference prefix: `U`.
 * Footprint filters: MSOP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier msop-8.
 */
export class AD623ARM extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623ARM";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, RoHS, MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier msop-8.
 */
export class AD623ARMZ extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623ARMZ";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, RoHS, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623ARZ`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier soic-8.
 */
export class AD623ARZ extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623ARZ";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623BN`. Reference prefix: `U`.
 * Footprint filters: DIP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier dip-8.
 */
export class AD623BN extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623BN";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, RoHS, DIP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623BNZ`. Reference prefix: `U`.
 * Footprint filters: DIP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier dip-8.
 */
export class AD623BNZ extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623BNZ";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623BR`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier soic-8.
 */
export class AD623BR extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623BR";
  override referencePrefix = "U";
}

/**
 * Single Supply, Rail to Rail, Instumentation Amplifier, RoHS, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD623BRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD623.pdf
 * Keywords: ad623 instumentation amplifier soic-8.
 */
export class AD623BRZ extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "Vs-": "4",
  "Ref": "5",
  "P6": "6",
  "Vs+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "Vs-": "power_in", Ref: "passive", P6: "output", "Vs+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD623BRZ";
  override referencePrefix = "U";
}

/**
 * 16V Rail-to-Rail, Zero-Drift, Precision Instrumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8230`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8230.pdf
 * Keywords: single instrumentation amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AD8230 extends Component.withPins({
  "V-": "1",
  "V+": "2",
  "Vr1": "3",
  "+": "4",
  "-": "5",
  "Vr2": "6",
  "Rg": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V-": "power_in", "V+": "power_in", Vr1: "input", "+": "input", "-": "input", Vr2: "input", Rg: "output", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8230";
  override referencePrefix = "U";
}

/**
 * Zero Drift, Digitally programmable instrumentation amplifier, 2.7MHz bandwidth, LFCSP-16
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8231`. Reference prefix: `U`.
 * Footprint filters: Analog*LFCSP*4x4mm*P0.65mm*EP2.1x2.1mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8231.pdf
 * Keywords: Analog extra op amp.
 * Default footprint: Package_CSP:Analog_LFCSP-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 */
export class AD8231 extends Component.withPins({
  "-_2": "2",
  "+_3": "3",
  "P10": "10",
  "REF": "9",
  "+_6": "6",
  "-_7": "7",
  "P8": "8",
  "NC_1": "1",
  "NC_4": "4",
  "~{SDN}": "5",
  "V-": "11",
  "V+": "12",
  "~{CS}": "13",
  "A0": "14",
  "A1": "15",
  "A2": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-_2": "input", "+_3": "input", P10: "output", REF: "input", "+_6": "input", "-_7": "input", P8: "output", NC_1: "no_connect", NC_4: "no_connect", "~{SDN}": "input", "V-": "power_in", "V+": "power_in", "~{CS}": "input", A0: "input", A1: "input", A2: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8231";
  override referencePrefix = "U";
}

/**
 * Single 40 μA Micropower Instrumentation Amplifier with Zero Crossover Distortion, MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8236`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8236.pdf
 * Keywords: single instumentation amplifier.
 */
export class AD8236 extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8236";
  override referencePrefix = "U";
}

/**
 * Low Power, Rail to Rail, Instumentation Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8422ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8422.pdf
 * Keywords: ad8422 instumentation amplifier msop-8.
 */
export class AD8422ARMZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8422ARMZ";
  override referencePrefix = "U";
}

/**
 * Micropower Instumentation Amplifier with Zero Crossover Distortion, MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8236ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8236.pdf
 * Keywords: ad8236 instumentation amplifier msop-8.
 */
export class AD8236ARMZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8236ARMZ";
  override referencePrefix = "U";
}

/**
 * Single Low Power Instrumentation Amplifier, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8421`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8421.pdf
 * Keywords: single instumentation amplifier.
 */
export class AD8421 extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8421";
  override referencePrefix = "U";
}

/**
 * Low Power,  Instumentation Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8421ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8421.pdf
 * Keywords: ad8421 instumentation amplifier msop-8.
 */
export class AD8421ARMZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8421ARMZ";
  override referencePrefix = "U";
}

/**
 * Low Power, Rail to Rail, Instumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8422ARZ`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8422.pdf
 * Keywords: ad8422 instumentation amplifier soic-8.
 */
export class AD8422ARZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8422ARZ";
  override referencePrefix = "U";
}

/**
 * Low Power, Instumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8421ARZ`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8421.pdf
 * Keywords: ad8421 instumentation amplifier soic-8.
 */
export class AD8421ARZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8421ARZ";
  override referencePrefix = "U";
}

/**
 * Low Power, Instumentation Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8421BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8421.pdf
 * Keywords: ad8421 instumentation amplifier msop-8.
 */
export class AD8421BRMZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8421BRMZ";
  override referencePrefix = "U";
}

/**
 * Low Power, Instumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8421BRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8421.pdf
 * Keywords: ad8421 instumentation amplifier soic-8.
 */
export class AD8421BRZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8421BRZ";
  override referencePrefix = "U";
}

/**
 * Single High Performance, Low Power, Rail-to-Rail Precision Instrumentation Amplifier, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8422`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8422.pdf
 * Keywords: single instumentation amplifier.
 */
export class AD8422 extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8422";
  override referencePrefix = "U";
}

/**
 * Low Power, Rail to Rail, Instumentation Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8422BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8422.pdf
 * Keywords: ad8422 instumentation amplifier msop-8.
 */
export class AD8422BRMZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8422BRMZ";
  override referencePrefix = "U";
}

/**
 * Low Power, Rail to Rail, Instumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8422BRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8422.pdf
 * Keywords: ad8422 instumentation amplifier soic-8.
 */
export class AD8422BRZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8422BRZ";
  override referencePrefix = "U";
}

/**
 * Single Low Noise Instrumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8429`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8429.pdf
 * Keywords: single instumentation amplifier.
 */
export class AD8429 extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8429";
  override referencePrefix = "U";
}

/**
 * Low Noise, Instumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8429ARZ`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8429.pdf
 * Keywords: ad8429 instumentation amplifier soic-8.
 */
export class AD8429ARZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8429ARZ";
  override referencePrefix = "U";
}

/**
 * Low Noise, Instumentation Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:AD8429BRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC-8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8429.pdf
 * Keywords: ad8429 instumentation amplifier soic-8.
 */
export class AD8429BRZ extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:AD8429BRZ";
  override referencePrefix = "U";
}

/**
 * Precision, Low Power Instrumentation Amplifier G = 1 + 50kOhm/Rg, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA128`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina128.pdf
 * Keywords: instrumentation opamp.
 */
export class INA128 extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "Ref": "5",
  "P6": "6",
  "V+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "V-": "power_in", Ref: "input", P6: "output", "V+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA128";
  override referencePrefix = "U";
}

/**
 * Precision, Low Power Instrumentation Amplifier G = 1 + 49.4kOhm/Rg, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA129`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina128.pdf
 * Keywords: instrumentation opamp.
 */
export class INA129 extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "Ref": "5",
  "P6": "6",
  "V+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "V-": "power_in", Ref: "input", P6: "output", "V+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA129";
  override referencePrefix = "U";
}

/**
 * Precision, Rail-to-Rail I/O Instrumentation Amplifier, MSOP-8 package
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA326`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina326.pdf
 * Keywords: instrumentation opamp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class INA326 extends Component.withPins({
  "R1_1": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "R2": "5",
  "P6": "6",
  "V+": "7",
  "R1_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1_1: "passive", "-": "input", "+": "input", "V-": "power_in", R2: "input", P6: "output", "V+": "power_in", R1_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA326";
  override referencePrefix = "U";
}

/**
 * Precision, Rail-to-Rail I/O Instrumentation Amplifier, MSOP-10 package
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA327`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina326.pdf
 * Keywords: instrumentation opamp.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class INA327 extends Component.withPins({
  "R1_1": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "V+_5": "5",
  "EN": "6",
  "R2": "7",
  "P8": "8",
  "V+_9": "9",
  "R1_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R1_1: "passive", "-": "input", "+": "input", "V-": "power_in", "V+_5": "power_in", EN: "input", R2: "input", P8: "output", "V+_9": "passive", R1_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA327";
  override referencePrefix = "U";
}

/**
 * Zero Drift, Micropower Instrumentation Amplifier G = 1 + 100kOhm/Rg, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA333xxDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina333.pdf
 * Keywords: instrumentation opamp amplifier.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA333xxDGK extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "Ref": "5",
  "P6": "6",
  "V+": "7",
  "Rg_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "V-": "power_in", Ref: "input", P6: "output", "V+": "power_in", Rg_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA333xxDGK";
  override referencePrefix = "U";
}

/**
 * Zero Drift, Micropower Instrumentation Amplifier G = 1 + 100kOhm/Rg, WSON-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA333xxDRG`. Reference prefix: `U`.
 * Footprint filters: WSON*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina333.pdf
 * Keywords: instrumentation opamp amplifier.
 * Default footprint: Package_SON:WSON-8-1EP_3x3mm_P0.5mm_EP1.45x2.4mm.
 */
export class INA333xxDRG extends Component.withPins({
  "Rg_1": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "Ref": "5",
  "P6": "6",
  "V+": "7",
  "Rg_8": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rg_1: "passive", "-": "input", "+": "input", "V-": "power_in", Ref: "input", P6: "output", "V+": "power_in", Rg_8: "passive", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA333xxDRG";
  override referencePrefix = "U";
}

/**
 * Ultra-Low-Noise (1 nV/√Hz), 28 MHz Bandwidth, Instrumentation Amplifier, Supply Range 8V to 36V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA849D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina849.pdf
 * Keywords: high-common-mode-rejection low-offset-drift low-gain-drift.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA849D extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA849D";
  override referencePrefix = "U";
}

/**
 * 4.7 MHz Bandwidth, Low Offset, Low-Power, Precision Instrumentation Amplifier, G = 1 + 49.4kOhm/Rg, 4.5 V to 36 V Supply, SOIC-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA821xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/gpn/ina821
 * Keywords: opamp operational-amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA821xD extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA821xD";
  override referencePrefix = "U";
}

/**
 * 4.7 MHz Bandwidth, Low Offset, Low-Power, Precision Instrumentation Amplifier, G = 1 + 49.4kOhm/Rg, 4.5 V to 36 V Supply, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA821xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/gpn/ina821
 * Keywords: opamp operational-amplifier.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA821xDGK extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA821xDGK";
  override referencePrefix = "U";
}

/**
 * 4.7 MHz Bandwidth, Low Offset, Low-Power, Precision Instrumentation Amplifier, G = 1 + 49.4kOhm/Rg, 4.5 V to 36 V Supply, WSON-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA821xDRG`. Reference prefix: `U`.
 * Footprint filters: WSON*3x3mm*P0.5mm*EP1.45x2.4mm*.
 * @see https://www.ti.com/lit/gpn/ina821
 * Keywords: opamp operational-amplifier.
 * Default footprint: Package_SON:WSON-8-1EP_3x3mm_P0.5mm_EP1.45x2.4mm.
 */
export class INA821xDRG extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-_5": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
  "Vs-_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-_5": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", "Vs-_9": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA821xDRG";
  override referencePrefix = "U";
}

/**
 * Ultra-Low-Noise (1 nV/√Hz), 28 MHz Bandwidth, Instrumentation Amplifier, Supply Range 8V to 36V, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:INA849DGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina849.pdf
 * Keywords: high-common-mode-rejection low-offset-drift low-gain-drift.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA849DGK extends Component.withPins({
  "-": "1",
  "Rg_2": "2",
  "Rg_3": "3",
  "+": "4",
  "Vs-": "5",
  "Ref": "6",
  "P7": "7",
  "Vs+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", Rg_2: "passive", Rg_3: "passive", "+": "input", "Vs-": "power_in", Ref: "passive", P7: "output", "Vs+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:INA849DGK";
  override referencePrefix = "U";
}

/**
 * Single Precision, Zero-Drift Instrumentation Amplifier, Gain = 100, DIP-8
 *
 * KiCad symbol: `Amplifier_Instrumentation:LTC1100xN8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1100fc.pdf
 * Keywords: single instrumentation amp.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class LTC1100xN8 extends Component.withPins({
  "GND": "1",
  "CMRR": "2",
  "-": "3",
  "V-": "4",
  "V+": "5",
  "+": "6",
  "COMP": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "input", CMRR: "input", "-": "input", "V-": "power_in", "V+": "power_in", "+": "input", COMP: "input", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:LTC1100xN8";
  override referencePrefix = "U";
}

/**
 * Single Precision, Zero-Drift Instrumentation Amplifier, Gain = 10/100, SOIC-16W
 *
 * KiCad symbol: `Amplifier_Instrumentation:LTC1100xSW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1100fc.pdf
 * Keywords: single instrumentation amp.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class LTC1100xSW extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "P3": "3",
  "CMRR": "4",
  "NC_5": "5",
  "-": "6",
  "V-": "7",
  "NC_8": "8",
  "NC_9": "9",
  "V+": "10",
  "+": "11",
  "NC_12": "12",
  "COMP": "13",
  "P14": "14",
  "P15": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "input", P3: "passive", CMRR: "input", NC_5: "no_connect", "-": "input", "V-": "power_in", NC_8: "no_connect", NC_9: "no_connect", "V+": "power_in", "+": "input", NC_12: "no_connect", COMP: "input", P14: "passive", P15: "output", NC_16: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Instrumentation:LTC1100xSW";
  override referencePrefix = "U";
}
