// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * High Precision, 5V Reference, DIP-8, SO-8
 *
 * KiCad symbol: `Reference_Voltage:AD586`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD586.pdf
 * Keywords: voltage reference.
 */
export class AD586 extends Component.withPins({
  "NC_1": "1",
  "V+": "2",
  "NC_3": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NR": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "V+": "power_in", NC_3: "no_connect", GND: "power_in", TRIM: "input", VOUT: "power_out", NC_7: "no_connect", NR: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:AD586";
  override referencePrefix = "U";
}

/**
 * Oven-Compensated, Buried Zener, 7.05 V Voltage Reference, LCC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR1399KEZ`. Reference prefix: `U`.
 * Footprint filters: Analog*LCC?8*5x5mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr1399.pdf
 * Keywords: Zener diode device voltage reference.
 * Default footprint: Package_LCC:Analog_LCC-8_5x5mm_P1.27mm.
 */
export class ADR1399KEZ extends Component.withPins({
  "-REFS": "1",
  "-REFF": "2",
  "HEATER+": "3",
  "NC_4": "4",
  "HEATER-": "5",
  "+REFF": "6",
  "+REFS": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-REFS": "passive", "-REFF": "passive", "HEATER+": "power_in", NC_4: "no_connect", "HEATER-": "power_in", "+REFF": "passive", "+REFS": "passive", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR1399KEZ";
  override referencePrefix = "U";
}

/**
 * Oven-Compensated, Buried Zener, 7.05 V Voltage Reference, TO-46-4
 *
 * KiCad symbol: `Reference_Voltage:ADR1399KHZ`. Reference prefix: `U`.
 * Footprint filters: Analog*TO?46*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr1399.pdf
 * Keywords: Zener diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:Analog_TO-46-4_ThermalShield.
 */
export class ADR1399KHZ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "power_in", P4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR1399KHZ";
  override referencePrefix = "U";
}

/**
 * 2.048V Voltage Reference, Ultraprecision, Low Noise, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:ADR420ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr420_421_423_425.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADR420ARMZ extends Component.withPins({
  "TP_1": "1",
  "VIN": "2",
  "NC_3": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "TP_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", VIN: "power_in", NC_3: "no_connect", GND: "power_in", TRIM: "passive", OUT: "output", NC_7: "no_connect", TP_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR420ARMZ";
  override referencePrefix = "U";
}

/**
 * 2.50V Voltage Reference, Ultraprecision, Low Noise, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:ADR421ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr420_421_423_425.pdf
 * Keywords: 2.5V voltage reference.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADR421ARMZ extends Component.withPins({
  "TP_1": "1",
  "VIN": "2",
  "NC_3": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "TP_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", VIN: "power_in", NC_3: "no_connect", GND: "power_in", TRIM: "passive", OUT: "output", NC_7: "no_connect", TP_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR421ARMZ";
  override referencePrefix = "U";
}

/**
 * 3.00V Voltage Reference, Ultraprecision, Low Noise, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:ADR423ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr420_421_423_425.pdf
 * Keywords: 3V voltage reference.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADR423ARMZ extends Component.withPins({
  "TP_1": "1",
  "VIN": "2",
  "NC_3": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "TP_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", VIN: "power_in", NC_3: "no_connect", GND: "power_in", TRIM: "passive", OUT: "output", NC_7: "no_connect", TP_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR423ARMZ";
  override referencePrefix = "U";
}

/**
 * 5.00V Voltage Reference, Ultraprecision, Low Noise, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:ADR425ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr420_421_423_425.pdf
 * Keywords: 5V voltage reference.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADR425ARMZ extends Component.withPins({
  "TP_1": "1",
  "VIN": "2",
  "NC_3": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "TP_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", VIN: "power_in", NC_3: "no_connect", GND: "power_in", TRIM: "passive", OUT: "output", NC_7: "no_connect", TP_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR425ARMZ";
  override referencePrefix = "U";
}

/**
 * 2.048V Voltage Reference, Ultraprecision, Low Noise, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:ADR440ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADR440ARMZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR440ARMZ";
  override referencePrefix = "U";
}

/**
 * 2.048V Voltage Reference, Ultraprecision, Low Noise, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR440xRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR440xRZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR440xRZ";
  override referencePrefix = "U";
}

/**
 * 2.5V Voltage Reference, Ultraprecision, Low Noise, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:ADR441ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADR441ARMZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR441ARMZ";
  override referencePrefix = "U";
}

/**
 * 2.5V Voltage Reference, Ultraprecision, Low Noise, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR441xRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR441xRZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR441xRZ";
  override referencePrefix = "U";
}

/**
 * 3V Voltage Reference, Ultraprecision, Low Noise, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:ADR443ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADR443ARMZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR443ARMZ";
  override referencePrefix = "U";
}

/**
 * 3V Voltage Reference, Ultraprecision, Low Noise, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR443xRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR443xRZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR443xRZ";
  override referencePrefix = "U";
}

/**
 * 4.096V Voltage Reference, Ultraprecision, Low Noise, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:ADR444ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADR444ARMZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR444ARMZ";
  override referencePrefix = "U";
}

/**
 * 4.096V Voltage Reference, Ultraprecision, Low Noise, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR444xRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR444xRZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR444xRZ";
  override referencePrefix = "U";
}

/**
 * 5V Voltage Reference, Ultraprecision, Low Noise, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:ADR445ARMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADR445ARMZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR445ARMZ";
  override referencePrefix = "U";
}

/**
 * 5V Voltage Reference, Ultraprecision, Low Noise, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR445xRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adr440_441_443_444_445.pdf
 * Keywords: voltage reference Ultraprecision Low Noise.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR445xRZ extends Component.withPins({
  "V_{IN}": "2",
  "GND": "4",
  "TRIM": "5",
  "V_{OUT}": "6",
  "NC_1": "1",
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}": "power_in", GND: "power_in", TRIM: "passive", "V_{OUT}": "output", NC_1: "no_connect", NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR445xRZ";
  override referencePrefix = "U";
}

/**
 * 2.5V, High-Supply-Voltage, Precision Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:MAX6035xSA25`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6035.pdf
 * Keywords: vref.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX6035xSA25 extends Component.withPins({
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
  "NC_1": "1",
  "IN": "2",
  "GND": "4",
  "NC_5": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_1: "no_connect", IN: "power_in", GND: "power_in", NC_5: "no_connect", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6035xSA25";
  override referencePrefix = "U";
}

/**
 * 2.048V, Ultralow Noise, High Accuracy Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR4520`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADR4520_4525_4530_4533_4540_4550.pdf
 * Keywords: vref.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR4520 extends Component.withPins({
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
  "NC_1": "1",
  "IN": "2",
  "GND": "4",
  "NC_5": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_1: "no_connect", IN: "power_in", GND: "power_in", NC_5: "no_connect", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR4520";
  override referencePrefix = "U";
}

/**
 * 2.5V, Ultralow Noise, High Accuracy Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR4525`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADR4520_4525_4530_4533_4540_4550.pdf
 * Keywords: vref.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR4525 extends Component.withPins({
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
  "NC_1": "1",
  "IN": "2",
  "GND": "4",
  "NC_5": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_1: "no_connect", IN: "power_in", GND: "power_in", NC_5: "no_connect", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR4525";
  override referencePrefix = "U";
}

/**
 * 3.0V,  Ultralow Noise, High Accuracy Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR4530`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADR4520_4525_4530_4533_4540_4550.pdf
 * Keywords: vref.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR4530 extends Component.withPins({
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
  "NC_1": "1",
  "IN": "2",
  "GND": "4",
  "NC_5": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_1: "no_connect", IN: "power_in", GND: "power_in", NC_5: "no_connect", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR4530";
  override referencePrefix = "U";
}

/**
 * 3.3V,  Ultralow Noise, High Accuracy Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR4533`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADR4520_4525_4530_4533_4540_4550.pdf
 * Keywords: vref.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR4533 extends Component.withPins({
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
  "NC_1": "1",
  "IN": "2",
  "GND": "4",
  "NC_5": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_1: "no_connect", IN: "power_in", GND: "power_in", NC_5: "no_connect", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR4533";
  override referencePrefix = "U";
}

/**
 * 4.096V,  Ultralow Noise, High Accuracy Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR4540`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADR4520_4525_4530_4533_4540_4550.pdf
 * Keywords: vref.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR4540 extends Component.withPins({
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
  "NC_1": "1",
  "IN": "2",
  "GND": "4",
  "NC_5": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_1: "no_connect", IN: "power_in", GND: "power_in", NC_5: "no_connect", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR4540";
  override referencePrefix = "U";
}

/**
 * 5.0V,  Ultralow Noise, High Accuracy Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:ADR4550`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADR4520_4525_4530_4533_4540_4550.pdf
 * Keywords: vref.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADR4550 extends Component.withPins({
  "NC_3": "3",
  "NC_7": "7",
  "NC_8": "8",
  "NC_1": "1",
  "IN": "2",
  "GND": "4",
  "NC_5": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_3: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_1: "no_connect", IN: "power_in", GND: "power_in", NC_5: "no_connect", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ADR4550";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:CJ432`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.cj-elec.com/txUpfile/20134181474991806.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class CJ432 extends Component.withPins({
  "REF": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:CJ432";
  override referencePrefix = "U";
}

/**
 * 0.6V 25μA Micropower Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:ISL21070DIH306Z-TK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/fn75/fn7599.pdf
 * Keywords: Micropower Voltage Reference 0.6V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ISL21070DIH306Z_TK extends Component.withPins({
  "Vin": "1",
  "Vout": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vin: "power_in", Vout: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ISL21070DIH306Z-TK";
  override referencePrefix = "U";
}

/**
 * 2.0V 25μA Micropower Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:ISL21070CIH320Z-TK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/fn75/fn7599.pdf
 * Keywords: Micropower Voltage Reference 2.0V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ISL21070CIH320Z_TK extends Component.withPins({
  "Vin": "1",
  "Vout": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vin: "power_in", Vout: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ISL21070CIH320Z-TK";
  override referencePrefix = "U";
}

/**
 * 2.5V 25μA Micropower Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:ISL21070CIH325Z-TK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/fn75/fn7599.pdf
 * Keywords: Micropower Voltage Reference 2.5V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ISL21070CIH325Z_TK extends Component.withPins({
  "Vin": "1",
  "Vout": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vin: "power_in", Vout: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:ISL21070CIH325Z-TK";
  override referencePrefix = "U";
}

/**
 * 1.235V Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM285D-1.2`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM285D_1_2 extends Component.withPins({
  "A": "4",
  "K": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM285D-1.2";
  override referencePrefix = "U";
}

/**
 * 2.500V Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM285D-2.5`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM285D_2_5 extends Component.withPins({
  "A": "4",
  "K": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM285D-2.5";
  override referencePrefix = "U";
}

/**
 * Adjustable Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM285M-ADJ`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm185-adj.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM285M_ADJ extends Component.withPins({
  "A": "4",
  "FB": "5",
  "K": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", FB: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM285M-ADJ";
  override referencePrefix = "U";
}

/**
 * 1.235V Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM285S-1.2`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/185fc.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM285S_1_2 extends Component.withPins({
  "A": "4",
  "K_6": "6",
  "K_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_6: "passive", K_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM285S-1.2";
  override referencePrefix = "U";
}

/**
 * 2.500V Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM285S-2.5`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/185fc.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM285S_2_5 extends Component.withPins({
  "A": "4",
  "K_6": "6",
  "K_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_6: "passive", K_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM285S-2.5";
  override referencePrefix = "U";
}

/**
 * 2.5V Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM285Z-2.5`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM285Z_2_5 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM285Z-2.5";
  override referencePrefix = "U";
}

/**
 * 1.235V Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM285Z-1.2`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM285Z_1_2 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM285Z-1.2";
  override referencePrefix = "U";
}

/**
 * Adjustable Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM285Z-ADJ`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see http://www.ti.com/lit/ds/symlink/lm185-adj.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM285Z_ADJ extends Component.withPins({
  "FB": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FB: "input", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM285Z-ADJ";
  override referencePrefix = "U";
}

/**
 * 6.9V Precision Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM329xZ`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/129329fd.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM329xZ extends Component.withPins({
  "NC": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM329xZ";
  override referencePrefix = "U";
}

/**
 * 1.235V Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM385BZ-1.2`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM385BZ_1_2 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385BZ-1.2";
  override referencePrefix = "U";
}

/**
 * 2.5V Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM385BZ-2.5`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM385BZ_2_5 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385BZ-2.5";
  override referencePrefix = "U";
}

/**
 * 1.235V Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM385D-1.2`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM385D_1_2 extends Component.withPins({
  "A": "4",
  "K": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385D-1.2";
  override referencePrefix = "U";
}

/**
 * 2.500V Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM385D-2.5`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM385D_2_5 extends Component.withPins({
  "A": "4",
  "K": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385D-2.5";
  override referencePrefix = "U";
}

/**
 * Adjustable Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM385M-ADJ`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm185-adj.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM385M_ADJ extends Component.withPins({
  "A": "4",
  "FB": "5",
  "K": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", FB: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385M-ADJ";
  override referencePrefix = "U";
}

/**
 * 1.235V Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM385S-1.2`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/185fc.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM385S_1_2 extends Component.withPins({
  "A": "4",
  "K_6": "6",
  "K_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_6: "passive", K_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385S-1.2";
  override referencePrefix = "U";
}

/**
 * 2.500V Micropower Voltage Reference Diodes, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LM385S-2.5`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9m*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/185fc.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM385S_2_5 extends Component.withPins({
  "A": "4",
  "K_6": "6",
  "K_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K_6: "passive", K_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385S-2.5";
  override referencePrefix = "U";
}

/**
 * 1.235V Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM385Z-1.2`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM385Z_1_2 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385Z-1.2";
  override referencePrefix = "U";
}

/**
 * 2.5V Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM385Z-2.5`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.onsemi.com/pub_link/Collateral/LM285-D.PDF
 * Keywords: diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM385Z_2_5 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385Z-2.5";
  override referencePrefix = "U";
}

/**
 * Adjustable Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM385Z-ADJ`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see http://www.ti.com/lit/ds/symlink/lm185-adj.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM385Z_ADJ extends Component.withPins({
  "FB": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FB: "input", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM385Z-ADJ";
  override referencePrefix = "U";
}

/**
 * Precision Reference, 6.95V, Buried Zener Diode with Thermal Shielding Can, TO-46-4
 *
 * KiCad symbol: `Reference_Voltage:LM399`. Reference prefix: `U`.
 * Footprint filters: Analog*TO?46*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/199399fc.pdf
 * Keywords: Zener diode device voltage reference.
 * Default footprint: Package_TO_SOT_THT:Analog_TO-46-4_ThermalShield.
 */
export class LM399 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "power_in", P4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM399";
  override referencePrefix = "U";
}

/**
 * 4.096V Ultra-High Precision Shunt Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4030-4.096`. Reference prefix: `U`.
 * Footprint filters: SOT?23?5*.
 * @see http://www.ti.com/lit/ds/symlink/lm4030.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4030_4_096 extends Component.withPins({
  "K": "4",
  "A": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4030-4.096";
  override referencePrefix = "U";
}

/**
 * 2.500V Ultra-High Precision Shunt Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4030-2.5`. Reference prefix: `U`.
 * Footprint filters: SOT?23?5*.
 * @see http://www.ti.com/lit/ds/symlink/lm4030.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4030_2_5 extends Component.withPins({
  "K": "4",
  "A": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4030-2.5";
  override referencePrefix = "U";
}

/**
 * 2.048V Precision Micropower Shunt Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4040DBZ-2.0`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4040DBZ_2_0 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DBZ-2.0";
  override referencePrefix = "U";
}

/**
 * 10.00V Precision Micropower Shunt Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4040DBZ-10`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4040DBZ_10 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DBZ-10";
  override referencePrefix = "U";
}

/**
 * 2.500V Precision Micropower Shunt Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4040DBZ-2.5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4040DBZ_2_5 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DBZ-2.5";
  override referencePrefix = "U";
}

/**
 * 3.000V Precision Micropower Shunt Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4040DBZ-3`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4040DBZ_3 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DBZ-3";
  override referencePrefix = "U";
}

/**
 * 4.096V Precision Micropower Shunt Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4040DBZ-4.1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4040DBZ_4_1 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DBZ-4.1";
  override referencePrefix = "U";
}

/**
 * 5.000V Precision Micropower Shunt Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4040DBZ-5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4040DBZ_5 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DBZ-5";
  override referencePrefix = "U";
}

/**
 * 8.192V Precision Micropower Shunt Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4040DBZ-8.2`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4040DBZ_8_2 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DBZ-8.2";
  override referencePrefix = "U";
}

/**
 * 2.048V Precision Micropower Shunt Voltage Reference, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4040DCK-2.0`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LM4040DCK_2_0 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", K: "passive", NC_4: "no_connect", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DCK-2.0";
  override referencePrefix = "U";
}

/**
 * 10.0V Precision Micropower Shunt Voltage Reference, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4040DCK-10`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LM4040DCK_10 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", K: "passive", NC_4: "no_connect", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DCK-10";
  override referencePrefix = "U";
}

/**
 * 2.500V Precision Micropower Shunt Voltage Reference, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4040DCK-2.5`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LM4040DCK_2_5 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", K: "passive", NC_4: "no_connect", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DCK-2.5";
  override referencePrefix = "U";
}

/**
 * 3.000V Precision Micropower Shunt Voltage Reference, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4040DCK-3`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LM4040DCK_3 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", K: "passive", NC_4: "no_connect", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DCK-3";
  override referencePrefix = "U";
}

/**
 * 4.096V Precision Micropower Shunt Voltage Reference, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4040DCK-4.1`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LM4040DCK_4_1 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", K: "passive", NC_4: "no_connect", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DCK-4.1";
  override referencePrefix = "U";
}

/**
 * 5.000V Precision Micropower Shunt Voltage Reference, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4040DCK-5`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LM4040DCK_5 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", K: "passive", NC_4: "no_connect", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DCK-5";
  override referencePrefix = "U";
}

/**
 * 8.192V Precision Micropower Shunt Voltage Reference, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4040DCK-8.2`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LM4040DCK_8_2 extends Component.withPins({
  "A": "1",
  "NC_2": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", NC_2: "no_connect", K: "passive", NC_4: "no_connect", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040DCK-8.2";
  override referencePrefix = "U";
}

/**
 * 2.048V Precision Micropower Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM4040LP-2.0`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM4040LP_2_0 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040LP-2.0";
  override referencePrefix = "U";
}

/**
 * 10.00V Precision Micropower Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM4040LP-10`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM4040LP_10 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040LP-10";
  override referencePrefix = "U";
}

/**
 * 2.500V Precision Micropower Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM4040LP-2.5`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM4040LP_2_5 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040LP-2.5";
  override referencePrefix = "U";
}

/**
 * 3.000V Precision Micropower Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM4040LP-3`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM4040LP_3 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040LP-3";
  override referencePrefix = "U";
}

/**
 * 4.096V Precision Micropower Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM4040LP-4.1`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM4040LP_4_1 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040LP-4.1";
  override referencePrefix = "U";
}

/**
 * 5.000V Precision Micropower Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM4040LP-5`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM4040LP_5 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040LP-5";
  override referencePrefix = "U";
}

/**
 * 8.192V Precision Micropower Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM4040LP-8.2`. Reference prefix: `U`.
 * Footprint filters: TO?92*Inline*.
 * @see http://www.ti.com/lit/ds/symlink/lm4040-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM4040LP_8_2 extends Component.withPins({
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4040LP-8.2";
  override referencePrefix = "U";
}

/**
 * Adjustable Precision Micropower Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LM4041LP-ADJ`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see http://www.ti.com/lit/ds/symlink/lm4041-n.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM4041LP_ADJ extends Component.withPins({
  "FB": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FB: "input", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4041LP-ADJ";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 2.048V 50ppm/°C, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEM3-2.1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4050xEM3_2_1 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEM3-2.1";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 2.5V 50ppm/°C, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEM3-2.5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4050xEM3_2_5 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEM3-2.5";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 3.0V 50ppm/°C, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEM3-3.0`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4050xEM3_3_0 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEM3-3.0";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 3.3V 50ppm/°C, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEM3-3.3`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4050xEM3_3_3 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEM3-3.3";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 4.096V 50ppm/°C, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEM3-4.1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4050xEM3_4_1 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEM3-4.1";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 5.0V 50ppm/°C, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEM3-5.0`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4050xEM3_5_0 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEM3-5.0";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 2.048V 50ppm/°C, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEX3-2.1`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class LM4050xEX3_2_1 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEX3-2.1";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 2.5V 50ppm/°C, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEX3-2.5`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class LM4050xEX3_2_5 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEX3-2.5";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 3.3V 50ppm/°C, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEX3-3.3`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class LM4050xEX3_3_3 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEX3-3.3";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 4.096V 50ppm/°C, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEX3-4.1`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class LM4050xEX3_4_1 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEX3-4.1";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 5.0V 50ppm/°C, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4050xEX3-5.0`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class LM4050xEX3_5_0 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4050xEX3-5.0";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 1.225V 50ppm/°C, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:LM4051xEM3-1.2`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class LM4051xEM3_1_2 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4051xEM3-1.2";
  override referencePrefix = "U";
}

/**
 * Precision Micropower Shunt Voltage Reference 1.225V 50ppm/°C, SC-70
 *
 * KiCad symbol: `Reference_Voltage:LM4051xEX3-1.2`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LM4050-LM4051.pdf
 * Keywords: diode device voltage reference shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class LM4051xEX3_1_2 extends Component.withPins({
  "K": "1",
  "A": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4051xEX3-1.2";
  override referencePrefix = "U";
}

/**
 * 2.5V ±0.2% Precision Micropower Low Dropout Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4125AIM5-2.5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4125.pdf
 * Keywords: Precision Micropower Low Dropout Voltage Reference 2.5V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4125AIM5_2_5 extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "NC_3": "3",
  "Vin": "4",
  "Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", NC_3: "no_connect", Vin: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4125AIM5-2.5";
  override referencePrefix = "U";
}

/**
 * 2V ±0.5% Precision Micropower Low Dropout Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4125IM5-2.0`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4125.pdf
 * Keywords: Precision Micropower Low Dropout Voltage Reference 2V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4125IM5_2_0 extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "NC_3": "3",
  "Vin": "4",
  "Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", NC_3: "no_connect", Vin: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4125IM5-2.0";
  override referencePrefix = "U";
}

/**
 * 2.5V ±0.5% Precision Micropower Low Dropout Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4125IM5-2.5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4125.pdf
 * Keywords: Precision Micropower Low Dropout Voltage Reference 2.5V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4125IM5_2_5 extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "NC_3": "3",
  "Vin": "4",
  "Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", NC_3: "no_connect", Vin: "power_in", Vout: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4125IM5-2.5";
  override referencePrefix = "U";
}

/**
 * 2.5V ±0.2% Precision Micropower Low Dropout Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4128`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4128.pdf
 * Keywords: Precision Micropower Low Dropout Voltage Reference 2.5V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4128 extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "VREF": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", EN: "input", VIN: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4128";
  override referencePrefix = "U";
}

/**
 * Precision Low Dropout Voltage Reference, 1.8V, ±0.05% to ±0.5%, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4132xMF-1.8`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4132.pdf
 * Keywords: Precision Low Dropout Voltage Reference 1.8V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4132xMF_1_8 extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "VREF": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", EN: "input", VIN: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4132xMF-1.8";
  override referencePrefix = "U";
}

/**
 * Precision Low Dropout Voltage Reference, 2.048V, ±0.05% to ±0.5%, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4132xMF-2.0`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4132.pdf
 * Keywords: Precision Low Dropout Voltage Reference 2.048V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4132xMF_2_0 extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "VREF": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", EN: "input", VIN: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4132xMF-2.0";
  override referencePrefix = "U";
}

/**
 * Precision Low Dropout Voltage Reference, 2.5V, ±0.05% to ±0.5%, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4132xMF-2.5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4132.pdf
 * Keywords: Precision Low Dropout Voltage Reference 2.5V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4132xMF_2_5 extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "VREF": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", EN: "input", VIN: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4132xMF-2.5";
  override referencePrefix = "U";
}

/**
 * Precision Low Dropout Voltage Reference, 3.0V, ±0.05% to ±0.5%, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4132xMF-3.0`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4132.pdf
 * Keywords: Precision Low Dropout Voltage Reference 3.0V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4132xMF_3_0 extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "VREF": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", EN: "input", VIN: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4132xMF-3.0";
  override referencePrefix = "U";
}

/**
 * Precision Low Dropout Voltage Reference, 3.3V, ±0.05% to ±0.5%, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4132xMF-3.3`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4132.pdf
 * Keywords: Precision Low Dropout Voltage Reference 3.3V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4132xMF_3_3 extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "VREF": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", EN: "input", VIN: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4132xMF-3.3";
  override referencePrefix = "U";
}

/**
 * Precision Low Dropout Voltage Reference, 4.096V, ±0.05% to ±0.5%, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:LM4132xMF-4.1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm4132.pdf
 * Keywords: Precision Low Dropout Voltage Reference 4.096V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LM4132xMF_4_1 extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "VREF": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", EN: "input", VIN: "power_in", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LM4132xMF-4.1";
  override referencePrefix = "U";
}

/**
 * Adjustable Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LT1009xS8`. Reference prefix: `U`.
 * Footprint filters: *SOIC?8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1009.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1009xS8 extends Component.withPins({
  "A": "4",
  "FB": "5",
  "K_6": "6",
  "K_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", FB: "input", K_6: "passive", K_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1009xS8";
  override referencePrefix = "U";
}

/**
 * Adjustable Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LT1009CMS8`. Reference prefix: `U`.
 * Footprint filters: *MSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1009.pdf
 * Keywords: diode device voltage reference.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT1009CMS8 extends Component.withPins({
  "A": "4",
  "FB": "5",
  "K_6": "6",
  "K_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", FB: "input", K_6: "passive", K_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1009CMS8";
  override referencePrefix = "U";
}

/**
 * Adjustable Micropower Voltage Reference Diodes, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LT1009xZ`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt1009.pdf
 * Keywords: diode device voltage reference LT1009CZ LT1009IZ.
 * Default footprint: Package_TO_SOT_THT:TO-92L_Inline.
 */
export class LT1009xZ extends Component.withPins({
  "FB": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FB: "input", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1009xZ";
  override referencePrefix = "U";
}

/**
 * Precision Reference, Ultra Low Drift, DIP-8
 *
 * KiCad symbol: `Reference_Voltage:LT1019xN8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1019fd.pdf
 * Keywords: voltage reference vref.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class LT1019xN8 extends Component.withPins({
  "DNC_1": "1",
  "IN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", IN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", OUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1019xN8";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.04%, 2.5V, 100mA, 3V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461AxS8-2.5`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461AxS8_2_5 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461AxS8-2.5";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.04%, 3V, 100mA, 3.5V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461AxS8-3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461AxS8_3 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461AxS8-3";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.04%, 3.3V, 100mA, 3.8V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461AxS8-3.3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461AxS8_3_3 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461AxS8-3.3";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.04%, 4.096V, 100mA, 4.596V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461AxS8-4`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461AxS8_4 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461AxS8-4";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.04%, 5V, 100mA, 5.5V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461AxS8-5`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461AxS8_5 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461AxS8-5";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.06%, 2.5V, 100mA, 3V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461BxS8-2.5`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461BxS8_2_5 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461BxS8-2.5";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.06%, 3V, 100mA, 3.5V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461BxS8-3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461BxS8_3 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461BxS8-3";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.06%, 3.3V, 100mA, 3.8V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461BxS8-3.3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461BxS8_3_3 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461BxS8-3.3";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.06%, 4.096V, 100mA, 4.596V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461BxS8-4`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461BxS8_4 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461BxS8-4";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.06%, 5V, 100mA, 5.5V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461BxS8-5`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461BxS8_5 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461BxS8-5";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.08%, 2.5V, 100mA, 3V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461CxS8-2.5`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461CxS8_2_5 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461CxS8-2.5";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.08%, 3V, 100mA, 3.5V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461CxS8-3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461CxS8_3 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461CxS8-3";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.08%, 3.3V, 100mA, 3.8V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461CxS8-3.3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461CxS8_3_3 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461CxS8-3.3";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.08%, 4.096V, 100mA, 4.596V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461CxS8-4`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461CxS8_4 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461CxS8-4";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.08%, 5V, 100mA, 5.5V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461CxS8-5`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461CxS8_5 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461CxS8-5";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.15%, 2.5V, 100mA, 3V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461DxS8-2.5`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461DxS8_2_5 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461DxS8-2.5";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.15%, 3V, 100mA, 3.5V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461DxS8-3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461DxS8_3 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461DxS8-3";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.15%, 3.3V, 100mA, 3.8V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461DxS8-3.3`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461DxS8_3_3 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461DxS8-3.3";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.15%, 4.096V, 100mA, 4.596V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461DxS8-4`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461DxS8_4 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461DxS8-4";
  override referencePrefix = "U";
}

/**
 * Voltage Reference, ±0.15%, 5V, 100mA, 5.5V-20V Vin, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:LT1461DxS8-5`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/LT1461.pdf
 * Keywords: voltage reference precision.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LT1461DxS8_5 extends Component.withPins({
  "DNC_1": "1",
  "VIN": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "VOUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", VIN: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", VOUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1461DxS8-5";
  override referencePrefix = "U";
}

/**
 * 1.25V Micropower Precision Shunt Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT1634BCMS8-1.25`. Reference prefix: `U`.
 * Footprint filters: MSOP?8*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT1634BCMS8_1_25 extends Component.withPins({
  "A": "4",
  "Test": "5",
  "K": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", Test: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634BCMS8-1.25";
  override referencePrefix = "U";
}

/**
 * 2.5V Micropower Precision Shunt Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT1634BCMS8-2.5`. Reference prefix: `U`.
 * Footprint filters: MSOP?8*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT1634BCMS8_2_5 extends Component.withPins({
  "A": "4",
  "Test": "5",
  "K": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", Test: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634BCMS8-2.5";
  override referencePrefix = "U";
}

/**
 * 1.25V Micropower Precision Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LT1634CCZ-1.25`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LT1634CCZ_1_25 extends Component.withPins({
  "Test": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Test: "input", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634CCZ-1.25";
  override referencePrefix = "U";
}

/**
 * 2.5V Micropower Precision Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LT1634CCZ-2.5`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LT1634CCZ_2_5 extends Component.withPins({
  "Test": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Test: "input", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634CCZ-2.5";
  override referencePrefix = "U";
}

/**
 * 4.096V Micropower Precision Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LT1634CCZ-4.096`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LT1634CCZ_4_096 extends Component.withPins({
  "Test": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Test: "input", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634CCZ-4.096";
  override referencePrefix = "U";
}

/**
 * 5V Micropower Precision Shunt Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:LT1634CCZ-5`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LT1634CCZ_5 extends Component.withPins({
  "Test": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Test: "input", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634CCZ-5";
  override referencePrefix = "U";
}

/**
 * 1.25V Micropower Precision Shunt Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LT1634xxS8-1.25`. Reference prefix: `U`.
 * Footprint filters: SO?8*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class LT1634xxS8_1_25 extends Component.withPins({
  "A": "4",
  "Test": "5",
  "K": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", Test: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634xxS8-1.25";
  override referencePrefix = "U";
}

/**
 * 2.5V Micropower Precision Shunt Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LT1634xxS8-2.5`. Reference prefix: `U`.
 * Footprint filters: SO?8*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class LT1634xxS8_2_5 extends Component.withPins({
  "A": "4",
  "Test": "5",
  "K": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", Test: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634xxS8-2.5";
  override referencePrefix = "U";
}

/**
 * 4.096V Micropower Precision Shunt Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LT1634xxS8-4.096`. Reference prefix: `U`.
 * Footprint filters: SO?8*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class LT1634xxS8_4_096 extends Component.withPins({
  "A": "4",
  "Test": "5",
  "K": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", Test: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634xxS8-4.096";
  override referencePrefix = "U";
}

/**
 * 5V Micropower Precision Shunt Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:LT1634xxS8-5`. Reference prefix: `U`.
 * Footprint filters: SO?8*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1634ff.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class LT1634xxS8_5 extends Component.withPins({
  "A": "4",
  "Test": "5",
  "K": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", Test: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1634xxS8-5";
  override referencePrefix = "U";
}

/**
 * 1.25V Voltage Reference, Low Dropout, Micropower, TSOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:LT1790-1.25`. Reference prefix: `U`.
 * Footprint filters: TSOT?23?6*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1790fc.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LT1790_1_25 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "NC_3": "3",
  "Vin": "4",
  "NC_5": "5",
  "Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", NC_3: "no_connect", Vin: "power_in", NC_5: "no_connect", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1790-1.25";
  override referencePrefix = "U";
}

/**
 * 2.048V Voltage Reference, Low Dropout, Micropower, TSOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:LT1790-2.048`. Reference prefix: `U`.
 * Footprint filters: TSOT?23?6*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1790fc.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LT1790_2_048 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "NC_3": "3",
  "Vin": "4",
  "NC_5": "5",
  "Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", NC_3: "no_connect", Vin: "power_in", NC_5: "no_connect", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1790-2.048";
  override referencePrefix = "U";
}

/**
 * 2.5V Voltage Reference, Low Dropout, Micropower, TSOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:LT1790-2.5`. Reference prefix: `U`.
 * Footprint filters: TSOT?23?6*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1790fc.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LT1790_2_5 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "NC_3": "3",
  "Vin": "4",
  "NC_5": "5",
  "Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", NC_3: "no_connect", Vin: "power_in", NC_5: "no_connect", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1790-2.5";
  override referencePrefix = "U";
}

/**
 * 3V Voltage Reference, Low Dropout, Micropower, TSOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:LT1790-3`. Reference prefix: `U`.
 * Footprint filters: TSOT?23?6*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1790fc.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LT1790_3 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "NC_3": "3",
  "Vin": "4",
  "NC_5": "5",
  "Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", NC_3: "no_connect", Vin: "power_in", NC_5: "no_connect", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1790-3";
  override referencePrefix = "U";
}

/**
 * 3.3V Voltage Reference, Low Dropout, Micropower, TSOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:LT1790-3.3`. Reference prefix: `U`.
 * Footprint filters: TSOT?23?6*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1790fc.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LT1790_3_3 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "NC_3": "3",
  "Vin": "4",
  "NC_5": "5",
  "Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", NC_3: "no_connect", Vin: "power_in", NC_5: "no_connect", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1790-3.3";
  override referencePrefix = "U";
}

/**
 * 4.096V Voltage Reference, Low Dropout, Micropower, TSOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:LT1790-4.096`. Reference prefix: `U`.
 * Footprint filters: TSOT?23?6*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1790fc.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LT1790_4_096 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "NC_3": "3",
  "Vin": "4",
  "NC_5": "5",
  "Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", NC_3: "no_connect", Vin: "power_in", NC_5: "no_connect", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1790-4.096";
  override referencePrefix = "U";
}

/**
 * 5V Voltage Reference, Low Dropout, Micropower, TSOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:LT1790-5`. Reference prefix: `U`.
 * Footprint filters: TSOT?23?6*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1790fc.pdf
 * Keywords: voltage reference Micropower.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LT1790_5 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "NC_3": "3",
  "Vin": "4",
  "NC_5": "5",
  "Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", NC_3: "no_connect", Vin: "power_in", NC_5: "no_connect", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT1790-5";
  override referencePrefix = "U";
}

/**
 * Precision voltage reference, 40V input, 10mA output, 1.5ppm/C drift, 2.5V output, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT6657AHMS8-2.5`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6657fd.pdf
 * Keywords: voltage reference vref.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT6657AHMS8_2_5 extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "OUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", OUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT6657AHMS8-2.5";
  override referencePrefix = "U";
}

/**
 * Precision voltage reference, 40V input, 10mA output, 1.5ppm/C drift, 3.0V output, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT6657AHMS8-3`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6657fd.pdf
 * Keywords: voltage reference vref.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT6657AHMS8_3 extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "OUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", OUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT6657AHMS8-3";
  override referencePrefix = "U";
}

/**
 * Precision voltage reference, 40V input, 10mA output, 1.5ppm/C drift, 4.096V output, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT6657AHMS8-4.096`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6657fd.pdf
 * Keywords: voltage reference vref.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT6657AHMS8_4_096 extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "OUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", OUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT6657AHMS8-4.096";
  override referencePrefix = "U";
}

/**
 * Precision voltage reference, 40V input, 10mA output, 1.5ppm/C drift, 5.0V output, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT6657AHMS8-5`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6657fd.pdf
 * Keywords: voltage reference vref.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT6657AHMS8_5 extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "OUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", OUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT6657AHMS8-5";
  override referencePrefix = "U";
}

/**
 * Precision voltage reference, 40V input, 10mA output, 3.0ppm/C drift, 2.5V output, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT6657BHMS8-2.5`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6657fd.pdf
 * Keywords: voltage reference vref.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT6657BHMS8_2_5 extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "OUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", OUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT6657BHMS8-2.5";
  override referencePrefix = "U";
}

/**
 * Precision voltage reference, 40V input, 10mA output, 3.0ppm/C drift, 3.0V output, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT6657BHMS8-3`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6657fd.pdf
 * Keywords: voltage reference vref.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT6657BHMS8_3 extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "OUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", OUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT6657BHMS8-3";
  override referencePrefix = "U";
}

/**
 * Precision voltage reference, 40V input, 10mA output, 3ppm/C drift, 4.096V output, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT6657BHMS8-4.096`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6657fd.pdf
 * Keywords: voltage reference vref.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT6657BHMS8_4_096 extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "OUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", OUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT6657BHMS8-4.096";
  override referencePrefix = "U";
}

/**
 * Precision voltage reference, 40V input, 10mA output, 3.0ppm/C drift, 5.0V output, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:LT6657BHMS8-5`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6657fd.pdf
 * Keywords: voltage reference vref.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LT6657BHMS8_5 extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "~{SHDN}": "3",
  "GND": "4",
  "DNC_5": "5",
  "OUT": "6",
  "DNC_7": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", "~{SHDN}": "input", GND: "power_in", DNC_5: "no_connect", OUT: "power_out", DNC_7: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:LT6657BHMS8-5";
  override referencePrefix = "U";
}

/**
 * Low-dropout high current voltage reference, 1.800V, ±0.4% accuracy, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6100`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6100-MAX6107.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6100 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6100";
  override referencePrefix = "U";
}

/**
 * 1.250V series voltage reference, ±1% accuracy,  100ppm/°C temperature coefficient, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6001`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6001-MAX6005.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6001 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6001";
  override referencePrefix = "U";
}

/**
 * 2.5V series voltage reference, ±1% accuracy,  100ppm/°C temperature coefficient, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6002`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6001-MAX6005.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6002 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6002";
  override referencePrefix = "U";
}

/**
 * 3.0V series voltage reference, ±1% accuracy,  100ppm/°C temperature coefficient, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6003`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6001-MAX6005.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6003 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6003";
  override referencePrefix = "U";
}

/**
 * 4.096V series voltage reference, ±1% accuracy,  100ppm/°C temperature coefficient, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6004`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6001-MAX6005.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6004 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6004";
  override referencePrefix = "U";
}

/**
 * 5.0V series voltage reference, ±1% accuracy,  100ppm/°C temperature coefficient, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6005`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6001-MAX6005.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6005 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6005";
  override referencePrefix = "U";
}

/**
 * 2.5V, High-Supply-Voltage, Precision Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6035xxUR25`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6035.pdf
 * Keywords: vref.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6035xxUR25 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6035xxUR25";
  override referencePrefix = "U";
}

/**
 * 3V, High-Supply-Voltage, Precision Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6035xxUR30`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6035.pdf
 * Keywords: vref.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6035xxUR30 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6035xxUR30";
  override referencePrefix = "U";
}

/**
 * 5V, High-Supply-Voltage, Precision Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6035xxUR50`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6035.pdf
 * Keywords: vref.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6035xxUR50 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6035xxUR50";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.25V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT12+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max6070-max6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT12_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT12+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.8V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT18+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max6070-max6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT18_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT18+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.8V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT18V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max6070-max6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070AAUT18/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT18V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT18V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.048V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT21+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT21_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT21+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.5V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT25+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT25_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT25+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT30+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT30_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT30+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3.3V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT33+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT33_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT33+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3.3V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT33V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070AAUT33/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT33V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT33V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 4.096V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT41+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT41_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT41+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 5V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT50+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT50_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT50+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 5V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070AAUT50V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070AAUT50/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070AAUT50V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070AAUT50V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.25V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT12+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT12_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT12+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.25V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT12V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070BAUT12/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT12V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT12V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.8V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT18+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT18_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT18+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.048V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT21+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT21_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT21+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.048V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT21V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070BAUT21/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT21V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT21V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.5V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT25+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT25_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT25+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.5V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT25V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070BAUT25/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT25V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT25V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT30+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT30_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT30+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3.3V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT33+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT33_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT33+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3.3V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT33V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070BAUT33/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT33V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT33V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 4.096V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT41+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT41_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT41+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 4.096V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT41V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070BAUT41/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT41V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT41V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 5V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT50+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT50_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT50+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 5V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070BAUT50V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070BAUT50/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070BAUT50V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070BAUT50V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.25V, ±0.2% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070DAUT12V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070DAUT12/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070DAUT12V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070DAUT12V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.5V, ±0.2% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070DAUT25V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070DAUT25/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070DAUT25V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070DAUT25V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3V, ±0.2% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070DAUT30V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070DAUT30/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070DAUT30V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070DAUT30V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 4.096V, ±0.2% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6070DAUT41V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6070DAUT41/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6070DAUT41V_T extends Component.withPins({
  "FILTER": "1",
  "GND": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FILTER: "passive", GND: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6070DAUT41V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.25V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071AAUT12+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max6070-max6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071AAUT12_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071AAUT12+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.8V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071AAUT18+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071AAUT18_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071AAUT18+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.048V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071AAUT21+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071AAUT21_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071AAUT21+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.5V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071AAUT25+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071AAUT25_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071AAUT25+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071AAUT30+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071AAUT30_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071AAUT30+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071AAUT30V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6071AAUT30/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071AAUT30V_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071AAUT30V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3.3V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071AAUT33+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071AAUT33_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071AAUT33+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 4.096V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071AAUT41+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071AAUT41_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071AAUT41+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 5V, ±0.04% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071AAUT50+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071AAUT50_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071AAUT50+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.25V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071BAUT12+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071BAUT12_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071BAUT12+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 1.8V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071BAUT18+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071BAUT18_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071BAUT18+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.048V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071BAUT21+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071BAUT21_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071BAUT21+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.5V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071BAUT25+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071BAUT25_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071BAUT25+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 2.5V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071BAUT25V+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference AEC-Q100 MAX6071BAUT25/V+T.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071BAUT25V_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071BAUT25V+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071BAUT30+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071BAUT30_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071BAUT30+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 3.3V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071BAUT33+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071BAUT33_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071BAUT33+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 4.096V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071BAUT41+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071BAUT41_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071BAUT41+T";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High-Precision Series Voltage Reference, 5V, ±0.08% initial accuracy, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MAX6071BAUT50+T`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6070-MAX6071.pdf
 * Keywords: Low Noise Precision Voltage Reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MAX6071BAUT50_T extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "EN": "3",
  "VIN": "4",
  "OUTS": "5",
  "OUTF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "power_in", EN: "input", VIN: "power_in", OUTS: "input", OUTF: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6071BAUT50+T";
  override referencePrefix = "U";
}

/**
 * Low-dropout high current voltage reference, 1.250V, ±0.4% accuracy, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6101`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6100-MAX6107.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6101 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6101";
  override referencePrefix = "U";
}

/**
 * Low-dropout high current voltage reference, 2.500V, ±0.4% accuracy, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6102`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6100-MAX6107.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6102 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6102";
  override referencePrefix = "U";
}

/**
 * Low-dropout high current voltage reference, 3.000V, ±0.4% accuracy, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6103`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6100-MAX6107.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6103 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6103";
  override referencePrefix = "U";
}

/**
 * Low-dropout high current voltage reference, 4.096V, ±0.4% accuracy, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6104`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6100-MAX6107.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6104 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6104";
  override referencePrefix = "U";
}

/**
 * Low-dropout high current voltage reference, 5.000V, ±0.4% accuracy, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6105`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6100-MAX6107.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6105 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6105";
  override referencePrefix = "U";
}

/**
 * Low-dropout high current voltage reference, 2.048V, ±0.4% accuracy, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6106`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6100-MAX6107.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6106 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6106";
  override referencePrefix = "U";
}

/**
 * Low-dropout high current voltage reference, 4.500V, ±0.4% accuracy, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MAX6107`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6100-MAX6107.pdf
 * Keywords: voltage reference ldo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MAX6107 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6107";
  override referencePrefix = "U";
}

/**
 * 0.5ppm/°C Low-Noise +5V Voltage Reference, SO-8/DIP-8
 *
 * KiCad symbol: `Reference_Voltage:MAX6350`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6325-MAX6350.pdf
 * Keywords: precision voltage reference.
 */
export class MAX6350 extends Component.withPins({
  "NC_1": "1",
  "IN": "2",
  "NR": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN: "power_in", NR: "passive", GND: "power_in", TRIM: "passive", OUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6350";
  override referencePrefix = "U";
}

/**
 * 1ppm/°C Low-Noise Precision +2.5V Voltage Reference, SO-8/DIP-8
 *
 * KiCad symbol: `Reference_Voltage:MAX6225`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6225-MAX6250.pdf
 * Keywords: precision voltage reference.
 */
export class MAX6225 extends Component.withPins({
  "NC_1": "1",
  "IN": "2",
  "NR": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN: "power_in", NR: "passive", GND: "power_in", TRIM: "passive", OUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6225";
  override referencePrefix = "U";
}

/**
 * 1ppm/°C Low-Noise Precision +4.096V Voltage Reference, SO-8/DIP-8
 *
 * KiCad symbol: `Reference_Voltage:MAX6241`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6225-MAX6250.pdf
 * Keywords: precision voltage reference.
 */
export class MAX6241 extends Component.withPins({
  "NC_1": "1",
  "IN": "2",
  "NR": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN: "power_in", NR: "passive", GND: "power_in", TRIM: "passive", OUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6241";
  override referencePrefix = "U";
}

/**
 * 1ppm/°C Low-Noise Precision +5V Voltage Reference, SO-8/DIP-8
 *
 * KiCad symbol: `Reference_Voltage:MAX6250`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6225-MAX6250.pdf
 * Keywords: precision voltage reference.
 */
export class MAX6250 extends Component.withPins({
  "NC_1": "1",
  "IN": "2",
  "NR": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN: "power_in", NR: "passive", GND: "power_in", TRIM: "passive", OUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6250";
  override referencePrefix = "U";
}

/**
 * 0.5ppm/°C Low-Noise +2.5V Voltage Reference, SO-8/DIP-8
 *
 * KiCad symbol: `Reference_Voltage:MAX6325`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6325-MAX6350.pdf
 * Keywords: precision voltage reference.
 */
export class MAX6325 extends Component.withPins({
  "NC_1": "1",
  "IN": "2",
  "NR": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN: "power_in", NR: "passive", GND: "power_in", TRIM: "passive", OUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6325";
  override referencePrefix = "U";
}

/**
 * 0.5ppm/°C Low-Noise +4.096V Voltage Reference, SO-8/DIP-8
 *
 * KiCad symbol: `Reference_Voltage:MAX6341`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, DIP*W7.62mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX6325-MAX6350.pdf
 * Keywords: precision voltage reference.
 */
export class MAX6341 extends Component.withPins({
  "NC_1": "1",
  "IN": "2",
  "NR": "3",
  "GND": "4",
  "TRIM": "5",
  "OUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", IN: "power_in", NR: "passive", GND: "power_in", TRIM: "passive", OUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX6341";
  override referencePrefix = "U";
}

/**
 * 10µA Low-Dropout Precision Voltage Reference, SO-8/DIP-8
 *
 * KiCad symbol: `Reference_Voltage:MAX874`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://pdfserv.maximintegrated.com/en/ds/MAX872-MAX874.pdf
 * Keywords: Low-Dropout Precision Voltage Reference.
 */
export class MAX874 extends Component.withPins({
  "IC_1": "1",
  "VIN": "2",
  "Temper": "3",
  "GND": "4",
  "TRIM": "5",
  "Vout": "6",
  "IC_7": "7",
  "COMP": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IC_1: "no_connect", VIN: "power_in", Temper: "output", GND: "power_in", TRIM: "input", Vout: "power_out", IC_7: "no_connect", COMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX874";
  override referencePrefix = "U";
}

/**
 * 10µA Low-Dropout Precision Voltage Reference, SO-8/DIP-8
 *
 * KiCad symbol: `Reference_Voltage:MAX872`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://pdfserv.maximintegrated.com/en/ds/MAX872-MAX874.pdf
 * Keywords: Low-Dropout Precision Voltage Reference.
 */
export class MAX872 extends Component.withPins({
  "IC_1": "1",
  "VIN": "2",
  "Temper": "3",
  "GND": "4",
  "TRIM": "5",
  "Vout": "6",
  "IC_7": "7",
  "COMP": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IC_1: "no_connect", VIN: "power_in", Temper: "output", GND: "power_in", TRIM: "input", Vout: "power_out", IC_7: "no_connect", COMP: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MAX872";
  override referencePrefix = "U";
}

/**
 * 1.024V, 0.1%, 20mA, Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-10xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 1.024V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP1501_10xCH extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "GND_3": "3",
  "~{SHDN}": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", GND_2: "power_in", GND_3: "passive", "~{SHDN}": "input", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-10xCH";
  override referencePrefix = "U";
}

/**
 * 1.024V, 0.1%, 20mA, Precision Voltage Reference, WDFN-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-10xRW`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 1.024V.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_2x2mm_P0.5mm_EP0.8x1.2mm.
 */
export class MCP1501_10xRW extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-10xRW";
  override referencePrefix = "U";
}

/**
 * 1.024V, 0.1%, 20mA, Precision Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-10xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 1.024V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP1501_10xSN extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-10xSN";
  override referencePrefix = "U";
}

/**
 * 1.25V, 0.1%, 20mA, Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-12xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 1.25V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP1501_12xCH extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "GND_3": "3",
  "~{SHDN}": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", GND_2: "power_in", GND_3: "passive", "~{SHDN}": "input", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-12xCH";
  override referencePrefix = "U";
}

/**
 * 1.25V, 0.1%, 20mA, Precision Voltage Reference, WDFN-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-12xRW`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 1.25V.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_2x2mm_P0.5mm_EP0.8x1.2mm.
 */
export class MCP1501_12xRW extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-12xRW";
  override referencePrefix = "U";
}

/**
 * 1.25V, 0.1%, 20mA, Precision Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-12xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 1.25V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP1501_12xSN extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-12xSN";
  override referencePrefix = "U";
}

/**
 * 1.8V, 0.1%, 20mA, Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-18xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 1.8V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP1501_18xCH extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "GND_3": "3",
  "~{SHDN}": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", GND_2: "power_in", GND_3: "passive", "~{SHDN}": "input", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-18xCH";
  override referencePrefix = "U";
}

/**
 * 1.8V, 0.1%, 20mA, Precision Voltage Reference, WDFN-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-18xRW`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 1.8V.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_2x2mm_P0.5mm_EP0.8x1.2mm.
 */
export class MCP1501_18xRW extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-18xRW";
  override referencePrefix = "U";
}

/**
 * 1.8V, 0.1%, 20mA, Precision Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-18xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 1.8V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP1501_18xSN extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-18xSN";
  override referencePrefix = "U";
}

/**
 * 2.048V, 0.1%, 20mA, Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-20xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 2.048V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP1501_20xCH extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "GND_3": "3",
  "~{SHDN}": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", GND_2: "power_in", GND_3: "passive", "~{SHDN}": "input", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-20xCH";
  override referencePrefix = "U";
}

/**
 * 2.048V, 0.1%, 20mA, Precision Voltage Reference, WDFN-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-20xRW`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 2.048V.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_2x2mm_P0.5mm_EP0.8x1.2mm.
 */
export class MCP1501_20xRW extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-20xRW";
  override referencePrefix = "U";
}

/**
 * 2.048V, 0.1%, 20mA, Precision Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-20xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 2.048V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP1501_20xSN extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-20xSN";
  override referencePrefix = "U";
}

/**
 * 2.5V, 0.1%, 20mA, Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-25xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 2.5V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP1501_25xCH extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "GND_3": "3",
  "~{SHDN}": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", GND_2: "power_in", GND_3: "passive", "~{SHDN}": "input", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-25xCH";
  override referencePrefix = "U";
}

/**
 * 2.5V, 0.1%, 20mA, Precision Voltage Reference, WDFN-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-25xRW`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 2.5V.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_2x2mm_P0.5mm_EP0.8x1.2mm.
 */
export class MCP1501_25xRW extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-25xRW";
  override referencePrefix = "U";
}

/**
 * 2.5V, 0.1%, 20mA, Precision Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-25xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 2.5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP1501_25xSN extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-25xSN";
  override referencePrefix = "U";
}

/**
 * 3V, 0.1%, 20mA, Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-30xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 3V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP1501_30xCH extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "GND_3": "3",
  "~{SHDN}": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", GND_2: "power_in", GND_3: "passive", "~{SHDN}": "input", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-30xCH";
  override referencePrefix = "U";
}

/**
 * 3V, 0.1%, 20mA, Precision Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-30xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 3V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP1501_30xSN extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-30xSN";
  override referencePrefix = "U";
}

/**
 * 3.3V, 0.1%, 20mA, Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-33xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 3.3V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP1501_33xCH extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "GND_3": "3",
  "~{SHDN}": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", GND_2: "power_in", GND_3: "passive", "~{SHDN}": "input", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-33xCH";
  override referencePrefix = "U";
}

/**
 * 3.3V, 0.1%, 20mA, Precision Voltage Reference, WDFN-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-33xRW`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 3.3V.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_2x2mm_P0.5mm_EP0.8x1.2mm.
 */
export class MCP1501_33xRW extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-33xRW";
  override referencePrefix = "U";
}

/**
 * 3.3V, 0.1%, 20mA, Precision Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-33xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 3.3V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP1501_33xSN extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-33xSN";
  override referencePrefix = "U";
}

/**
 * 4.096V, 0.1%, 20mA, Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-40xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 4.096V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP1501_40xCH extends Component.withPins({
  "OUT": "1",
  "GND_2": "2",
  "GND_3": "3",
  "~{SHDN}": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", GND_2: "power_in", GND_3: "passive", "~{SHDN}": "input", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-40xCH";
  override referencePrefix = "U";
}

/**
 * 4.096V, 0.1%, 20mA, Precision Voltage Reference, WDFN-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-40xRW`. Reference prefix: `U`.
 * Footprint filters: WDFN*1EP*2x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 4.096V.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_2x2mm_P0.5mm_EP0.8x1.2mm.
 */
export class MCP1501_40xRW extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-40xRW";
  override referencePrefix = "U";
}

/**
 * 4.096V, 0.1%, 20mA, Precision Voltage Reference, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:MCP1501-40xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005474E.pdf
 * Keywords: precision buffered voltage reference 4.096V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP1501_40xSN extends Component.withPins({
  "VDD": "1",
  "GND_2": "2",
  "~{SHDN}": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "OUT": "7",
  "FB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND_2: "power_in", "~{SHDN}": "input", GND_4: "passive", GND_5: "passive", GND_6: "passive", OUT: "power_out", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1501-40xSN";
  override referencePrefix = "U";
}

/**
 * 2.5V Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:MCP1525-TO`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21653b.pdf
 * Keywords: Voltage Reference 2.5V.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MCP1525_TO extends Component.withPins({
  "Vss": "1",
  "Vout": "2",
  "Vin": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vss: "power_in", Vout: "power_out", Vin: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1525-TO";
  override referencePrefix = "U";
}

/**
 * 2.5V Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MCP1525-TT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21653b.pdf
 * Keywords: Voltage Reference 2.5V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MCP1525_TT extends Component.withPins({
  "Vin": "1",
  "Vout": "2",
  "Vss": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vin: "power_in", Vout: "power_out", Vss: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1525-TT";
  override referencePrefix = "U";
}

/**
 * 4.096V Voltage Reference, TO-92
 *
 * KiCad symbol: `Reference_Voltage:MCP1541-TO`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21653b.pdf
 * Keywords: Voltage Reference 4.096V.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MCP1541_TO extends Component.withPins({
  "Vss": "1",
  "Vout": "2",
  "Vin": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vss: "power_in", Vout: "power_out", Vin: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1541-TO";
  override referencePrefix = "U";
}

/**
 * 4.096V Voltage Reference, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:MCP1541-TT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21653b.pdf
 * Keywords: Voltage Reference 4.096V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MCP1541_TT extends Component.withPins({
  "Vin": "1",
  "Vout": "2",
  "Vss": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vin: "power_in", Vout: "power_out", Vss: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:MCP1541-TT";
  override referencePrefix = "U";
}

/**
 * 5V ±15mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF02AP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref02.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF02AP extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02AP";
  override referencePrefix = "U";
}

/**
 * 10V ±100mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF01CP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF01CP extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF01CP";
  override referencePrefix = "U";
}

/**
 * 10V ±100mV Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF01CS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF01CS extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF01CS";
  override referencePrefix = "U";
}

/**
 * 10V ±30mV Precision Voltage Reference, CERDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF01EZ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF01EZ extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF01EZ";
  override referencePrefix = "U";
}

/**
 * 10V ±50mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF01HP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF01HP extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF01HP";
  override referencePrefix = "U";
}

/**
 * 10V ±50mV Precision Voltage Reference, CERDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF01HZ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF01HZ extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF01HZ";
  override referencePrefix = "U";
}

/**
 * 5V ±15mV Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF02AU`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref02.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF02AU extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02AU";
  override referencePrefix = "U";
}

/**
 * 5V ±15mV Precision Voltage Reference, CERDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF02AZ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF02AZ extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02AZ";
  override referencePrefix = "U";
}

/**
 * 5V ±10mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF02BP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref02.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF02BP extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02BP";
  override referencePrefix = "U";
}

/**
 * 5V ±10mV Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF02BU`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref02.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF02BU extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02BU";
  override referencePrefix = "U";
}

/**
 * 5V ±50mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF02CP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF02CP extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02CP";
  override referencePrefix = "U";
}

/**
 * 5V ±50mV Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF02CS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF02CS extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02CS";
  override referencePrefix = "U";
}

/**
 * 5V ±15mV Precision Voltage Reference, CERDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF02EZ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF02EZ extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02EZ";
  override referencePrefix = "U";
}

/**
 * 5V ±25mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF02HP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF02HP extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02HP";
  override referencePrefix = "U";
}

/**
 * 5V ±25mV Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF02HS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF02HS extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02HS";
  override referencePrefix = "U";
}

/**
 * 5V ±25mV Precision Voltage Reference, CERDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF02HZ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF02HZ extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02HZ";
  override referencePrefix = "U";
}

/**
 * 5V ±25mV Precision Voltage Reference, CERDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF02Z`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 5V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF02Z extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF02Z";
  override referencePrefix = "U";
}

/**
 * 2.5V ±15mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF03GP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 2.5V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF03GP extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF03GP";
  override referencePrefix = "U";
}

/**
 * 2.5V ±15mV Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF03GS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf
 * Keywords: Precision Voltage Reference 2.5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF03GS extends Component.withPins({
  "NC_1": "1",
  "VIN": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "VOUT": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VIN: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", VOUT: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF03GS";
  override referencePrefix = "U";
}

/**
 * 10V ±10mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF102AP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref102.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF102AP extends Component.withPins({
  "NC_1": "1",
  "Vin": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "Vout": "6",
  "NC_7": "7",
  "NR": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vin: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", Vout: "power_out", NC_7: "no_connect", NR: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF102AP";
  override referencePrefix = "U";
}

/**
 * 10V ±10mV Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF102AU`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref02.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF102AU extends Component.withPins({
  "NC_1": "1",
  "Vin": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "Vout": "6",
  "NC_7": "7",
  "NR": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vin: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", Vout: "power_out", NC_7: "no_connect", NR: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF102AU";
  override referencePrefix = "U";
}

/**
 * 10V ±5mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF102BP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref102.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF102BP extends Component.withPins({
  "NC_1": "1",
  "Vin": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "Vout": "6",
  "NC_7": "7",
  "NR": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vin: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", Vout: "power_out", NC_7: "no_connect", NR: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF102BP";
  override referencePrefix = "U";
}

/**
 * 10V ±5mV Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF102BU`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref02.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF102BU extends Component.withPins({
  "NC_1": "1",
  "Vin": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "Vout": "6",
  "NC_7": "7",
  "NR": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vin: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", Vout: "power_out", NC_7: "no_connect", NR: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF102BU";
  override referencePrefix = "U";
}

/**
 * 10V ±2.5mV Precision Voltage Reference, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:REF102CP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref102.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class REF102CP extends Component.withPins({
  "NC_1": "1",
  "Vin": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "Vout": "6",
  "NC_7": "7",
  "NR": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vin: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", Vout: "power_out", NC_7: "no_connect", NR: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF102CP";
  override referencePrefix = "U";
}

/**
 * 10V ±2.5mV Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF102CU`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ref02.pdf
 * Keywords: Precision Voltage Reference 10V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF102CU extends Component.withPins({
  "NC_1": "1",
  "Vin": "2",
  "TEMP": "3",
  "GND": "4",
  "TRIM": "5",
  "Vout": "6",
  "NC_7": "7",
  "NR": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vin: "power_in", TEMP: "passive", GND: "power_in", TRIM: "passive", Vout: "power_out", NC_7: "no_connect", NR: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF102CU";
  override referencePrefix = "U";
}

/**
 * Precision voltage references 2.048V, DIP-8/SO-8/TSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF191`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9m*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/REF19xSeries.pdf
 * Keywords: Precision voltage references.
 */
export class REF191 extends Component.withPins({
  "TP_1": "1",
  "Vin": "2",
  "~{Sleep}": "3",
  "GND": "4",
  "TP_5": "5",
  "Vout": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", Vin: "power_in", "~{Sleep}": "input", GND: "power_in", TP_5: "no_connect", Vout: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF191";
  override referencePrefix = "U";
}

/**
 * Precision voltage references 2.5V, DIP-8/SO-8/TSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF192`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9m*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/REF19xSeries.pdf
 * Keywords: Precision voltage references.
 */
export class REF192 extends Component.withPins({
  "TP_1": "1",
  "Vin": "2",
  "~{Sleep}": "3",
  "GND": "4",
  "TP_5": "5",
  "Vout": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", Vin: "power_in", "~{Sleep}": "input", GND: "power_in", TP_5: "no_connect", Vout: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF192";
  override referencePrefix = "U";
}

/**
 * Precision voltage references 3V, DIP-8/SO-8/TSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF193`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9m*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/REF19xSeries.pdf
 * Keywords: Precision voltage references.
 */
export class REF193 extends Component.withPins({
  "TP_1": "1",
  "Vin": "2",
  "~{Sleep}": "3",
  "GND": "4",
  "TP_5": "5",
  "Vout": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", Vin: "power_in", "~{Sleep}": "input", GND: "power_in", TP_5: "no_connect", Vout: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF193";
  override referencePrefix = "U";
}

/**
 * Precision voltage references 4.5V, DIP-8/SO-8/TSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF194`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9m*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/REF19xSeries.pdf
 * Keywords: Precision voltage references.
 */
export class REF194 extends Component.withPins({
  "TP_1": "1",
  "Vin": "2",
  "~{Sleep}": "3",
  "GND": "4",
  "TP_5": "5",
  "Vout": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", Vin: "power_in", "~{Sleep}": "input", GND: "power_in", TP_5: "no_connect", Vout: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF194";
  override referencePrefix = "U";
}

/**
 * Precision voltage references 5V, DIP-8/SO-8/TSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF195`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9m*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/REF19xSeries.pdf
 * Keywords: Precision voltage references.
 */
export class REF195 extends Component.withPins({
  "TP_1": "1",
  "Vin": "2",
  "~{Sleep}": "3",
  "GND": "4",
  "TP_5": "5",
  "Vout": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", Vin: "power_in", "~{Sleep}": "input", GND: "power_in", TP_5: "no_connect", Vout: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF195";
  override referencePrefix = "U";
}

/**
 * Precision voltage references 3.3V, DIP-8/SO-8/TSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF196`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9m*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/REF19xSeries.pdf
 * Keywords: Precision voltage references.
 */
export class REF196 extends Component.withPins({
  "TP_1": "1",
  "Vin": "2",
  "~{Sleep}": "3",
  "GND": "4",
  "TP_5": "5",
  "Vout": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", Vin: "power_in", "~{Sleep}": "input", GND: "power_in", TP_5: "no_connect", Vout: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF196";
  override referencePrefix = "U";
}

/**
 * Precision voltage references 4.096V, DIP-8/SO-8/TSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF198`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9m*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/REF19xSeries.pdf
 * Keywords: Precision voltage references.
 */
export class REF198 extends Component.withPins({
  "TP_1": "1",
  "Vin": "2",
  "~{Sleep}": "3",
  "GND": "4",
  "TP_5": "5",
  "Vout": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TP_1: "no_connect", Vin: "power_in", "~{Sleep}": "input", GND: "power_in", TP_5: "no_connect", Vout: "power_out", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF198";
  override referencePrefix = "U";
}

/**
 * 2.5V Low-Drift, Low-Power, Dual-Output, VREF and VREF / 2 Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:REF2025`. Reference prefix: `U?`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref2033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class REF2025 extends Component.withPins({
  "Vbias": "1",
  "GND": "2",
  "EN": "3",
  "IN": "4",
  "Vref": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vbias: "output", GND: "power_in", EN: "input", IN: "power_in", Vref: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF2025";
  override referencePrefix = "U?";
}

/**
 * 3.0V Low-Drift, Low-Power, Dual-Output, VREF and VREF / 2 Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:REF2030`. Reference prefix: `U?`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref2033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class REF2030 extends Component.withPins({
  "Vbias": "1",
  "GND": "2",
  "EN": "3",
  "IN": "4",
  "Vref": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vbias: "output", GND: "power_in", EN: "input", IN: "power_in", Vref: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF2030";
  override referencePrefix = "U?";
}

/**
 * 3.3V Low-Drift, Low-Power, Dual-Output, VREF and VREF / 2 Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:REF2033`. Reference prefix: `U?`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref2033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class REF2033 extends Component.withPins({
  "Vbias": "1",
  "GND": "2",
  "EN": "3",
  "IN": "4",
  "Vref": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vbias: "output", GND: "power_in", EN: "input", IN: "power_in", Vref: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF2033";
  override referencePrefix = "U?";
}

/**
 * 4.096V Low-Drift, Low-Power, Dual-Output, VREF and VREF / 2 Voltage Reference, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:REF2041`. Reference prefix: `U?`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref2033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class REF2041 extends Component.withPins({
  "Vbias": "1",
  "GND": "2",
  "EN": "3",
  "IN": "4",
  "Vref": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vbias: "output", GND: "power_in", EN: "input", IN: "power_in", Vref: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF2041";
  override referencePrefix = "U?";
}

/**
 * 1.25V 50-ppm/°C Max, 50-μA, CMOS Voltage Reference, SOT-23-3
 *
 * KiCad symbol: `Reference_Voltage:REF3012`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class REF3012 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3012";
  override referencePrefix = "U";
}

/**
 * 2.048V 50-ppm/°C Max, 50-μA, CMOS Voltage Reference, SOT-23-3
 *
 * KiCad symbol: `Reference_Voltage:REF3020`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class REF3020 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3020";
  override referencePrefix = "U";
}

/**
 * 2.500V 50-ppm/°C Max, 50-μA, CMOS Voltage Reference, SOT-23-3
 *
 * KiCad symbol: `Reference_Voltage:REF3025`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class REF3025 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3025";
  override referencePrefix = "U";
}

/**
 * 3.0V 50-ppm/°C Max, 50-μA, CMOS Voltage Reference, SOT-23-3
 *
 * KiCad symbol: `Reference_Voltage:REF3030`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class REF3030 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3030";
  override referencePrefix = "U";
}

/**
 * 3.3V 50-ppm/°C Max, 50-μA, CMOS Voltage Reference, SOT-23-3
 *
 * KiCad symbol: `Reference_Voltage:REF3033`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class REF3033 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3033";
  override referencePrefix = "U";
}

/**
 * 4.096V 50-ppm/°C Max, 50-μA, CMOS Voltage Reference, SOT-23-3
 *
 * KiCad symbol: `Reference_Voltage:REF3040`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3033.pdf
 * Keywords: voltage reference.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class REF3040 extends Component.withPins({
  "IN": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "power_in", OUT: "power_out", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3040";
  override referencePrefix = "U";
}

/**
 * 1.25V 100μA Micropower Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF3212AMDBVREP`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3240-ep.pdf
 * Keywords: Micropower Precision Voltage Reference 1.25V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF3212AMDBVREP extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "ENABLE": "3",
  "VIN": "4",
  "OUT_S": "5",
  "OUT_F": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "input", ENABLE: "input", VIN: "power_in", OUT_S: "input", OUT_F: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3212AMDBVREP";
  override referencePrefix = "U";
}

/**
 * 2.048V 100μA Micropower Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF3220AMDBVREP`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3240-ep.pdf
 * Keywords: Micropower Precision Voltage Reference 2.048V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF3220AMDBVREP extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "ENABLE": "3",
  "VIN": "4",
  "OUT_S": "5",
  "OUT_F": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "input", ENABLE: "input", VIN: "power_in", OUT_S: "input", OUT_F: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3220AMDBVREP";
  override referencePrefix = "U";
}

/**
 * 2.5V 100μA Micropower Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF3225AMDBVREP`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3240-ep.pdf
 * Keywords: Micropower Precision Voltage Reference 2.5V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF3225AMDBVREP extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "ENABLE": "3",
  "VIN": "4",
  "OUT_S": "5",
  "OUT_F": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "input", ENABLE: "input", VIN: "power_in", OUT_S: "input", OUT_F: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3225AMDBVREP";
  override referencePrefix = "U";
}

/**
 * 3V 100μA Micropower Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF3230AMDBVREP`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3240-ep.pdf
 * Keywords: Micropower Precision Voltage Reference 3V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF3230AMDBVREP extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "ENABLE": "3",
  "VIN": "4",
  "OUT_S": "5",
  "OUT_F": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "input", ENABLE: "input", VIN: "power_in", OUT_S: "input", OUT_F: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3230AMDBVREP";
  override referencePrefix = "U";
}

/**
 * 3.3V 100μA Micropower Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF3233AMDBVREP`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3240-ep.pdf
 * Keywords: Micropower Precision Voltage Reference 3.3V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF3233AMDBVREP extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "ENABLE": "3",
  "VIN": "4",
  "OUT_S": "5",
  "OUT_F": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "input", ENABLE: "input", VIN: "power_in", OUT_S: "input", OUT_F: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3233AMDBVREP";
  override referencePrefix = "U";
}

/**
 * 4.096V 100μA Micropower Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF3240AMDBVREP`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ref3240-ep.pdf
 * Keywords: Micropower Precision Voltage Reference 4.096V.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF3240AMDBVREP extends Component.withPins({
  "GNDF": "1",
  "GNDS": "2",
  "ENABLE": "3",
  "VIN": "4",
  "OUT_S": "5",
  "OUT_F": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDF: "power_in", GNDS: "input", ENABLE: "input", VIN: "power_in", OUT_S: "input", OUT_F: "output", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF3240AMDBVREP";
  override referencePrefix = "U";
}

/**
 * 1.024V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35102QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35102QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35102QDBVR";
  override referencePrefix = "U";
}

/**
 * 1.2V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35120QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35120QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35120QDBVR";
  override referencePrefix = "U";
}

/**
 * 1.25V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35125QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35125QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35125QDBVR";
  override referencePrefix = "U";
}

/**
 * 1.6V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35160QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35160QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35160QDBVR";
  override referencePrefix = "U";
}

/**
 * 1.7V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35170QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35170QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35170QDBVR";
  override referencePrefix = "U";
}

/**
 * 1.8V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35180QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35180QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35180QDBVR";
  override referencePrefix = "U";
}

/**
 * 2.048V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35205QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35205QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35205QDBVR";
  override referencePrefix = "U";
}

/**
 * 2.5V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35250QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35250QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35250QDBVR";
  override referencePrefix = "U";
}

/**
 * 3.0V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35300QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35300QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35300QDBVR";
  override referencePrefix = "U";
}

/**
 * 3.3V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35330QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35330QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35330QDBVR";
  override referencePrefix = "U";
}

/**
 * 3.6V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35360QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35360QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35360QDBVR";
  override referencePrefix = "U";
}

/**
 * 4.096V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35409QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35409QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35409QDBVR";
  override referencePrefix = "U";
}

/**
 * 5.0V, Ultra Low-Power, High-Precision Voltage Reference, SOT-23-6
 *
 * KiCad symbol: `Reference_Voltage:REF35500QDBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ref35.pdf
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class REF35500QDBVR extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "EN": "3",
  "VIN": "4",
  "NR": "5",
  "VREF": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", EN: "input", VIN: "power_in", NR: "output", VREF: "power_out", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF35500QDBVR";
  override referencePrefix = "U";
}

/**
 * 2.048V 0.1% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5020AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 2.048V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5020AD extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5020AD";
  override referencePrefix = "U";
}

/**
 * 10V 0.1% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5010AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 10V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5010AD extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5010AD";
  override referencePrefix = "U";
}

/**
 * 2.048V 0.1% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5020ADGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 2.048V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5020ADGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5020ADGK";
  override referencePrefix = "U";
}

/**
 * 10V 0.1% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5010ADGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 10V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5010ADGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5010ADGK";
  override referencePrefix = "U";
}

/**
 * 10V 0.05% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5010ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 10V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5010ID extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5010ID";
  override referencePrefix = "U";
}

/**
 * 10V 0.05% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5010IDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 10V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5010IDGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5010IDGK";
  override referencePrefix = "U";
}

/**
 * 2.048V 0.05% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5020ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 2.048V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5020ID extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5020ID";
  override referencePrefix = "U";
}

/**
 * 2.048V 0.05% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5020IDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 2.048V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5020IDGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5020IDGK";
  override referencePrefix = "U";
}

/**
 * 2.5V 0.1% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5025AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 2.5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5025AD extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5025AD";
  override referencePrefix = "U";
}

/**
 * 2.5V 0.1% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5025ADGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 2.5V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5025ADGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5025ADGK";
  override referencePrefix = "U";
}

/**
 * 2.5V 0.05% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5025ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 2.5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5025ID extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5025ID";
  override referencePrefix = "U";
}

/**
 * 2.5V 0.05% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5025IDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 2.5V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5025IDGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5025IDGK";
  override referencePrefix = "U";
}

/**
 * 3V 0.1% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5030AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 3V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5030AD extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5030AD";
  override referencePrefix = "U";
}

/**
 * 3V 0.1% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5030ADGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 3V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5030ADGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5030ADGK";
  override referencePrefix = "U";
}

/**
 * 3V 0.05% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5030ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 3V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5030ID extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5030ID";
  override referencePrefix = "U";
}

/**
 * 3V 0.05% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5030IDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 3V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5030IDGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5030IDGK";
  override referencePrefix = "U";
}

/**
 * 4.096V 0.1% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5040AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 4.096V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5040AD extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5040AD";
  override referencePrefix = "U";
}

/**
 * 4.096V 0.1% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5040ADGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 4.096V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5040ADGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5040ADGK";
  override referencePrefix = "U";
}

/**
 * 4.096V 0.05% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5040ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 4.096V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5040ID extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5040ID";
  override referencePrefix = "U";
}

/**
 * 4.096V 0.05% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5040IDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 4.096V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5040IDGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5040IDGK";
  override referencePrefix = "U";
}

/**
 * 4.5V 0.1% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5045AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 4.5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5045AD extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5045AD";
  override referencePrefix = "U";
}

/**
 * 4.5V 0.1% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5045ADGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 4.5V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5045ADGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5045ADGK";
  override referencePrefix = "U";
}

/**
 * 4.5V 0.05% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5045ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 4.5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5045ID extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5045ID";
  override referencePrefix = "U";
}

/**
 * 4.5V 0.05% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5045IDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 4.5V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5045IDGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5045IDGK";
  override referencePrefix = "U";
}

/**
 * 5V 0.1% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5050AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5050AD extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5050AD";
  override referencePrefix = "U";
}

/**
 * 5V 0.1% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5050ADGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref5030a-q1.pdf
 * Keywords: Low Noise Precision Voltage Reference 5V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5050ADGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5050ADGK";
  override referencePrefix = "U";
}

/**
 * 5V 0.05% 10mA Low Noise Precision Voltage Reference, SO-8
 *
 * KiCad symbol: `Reference_Voltage:REF5050ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class REF5050ID extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5050ID";
  override referencePrefix = "U";
}

/**
 * 5V 0.05% 10mA Low Noise Precision Voltage Reference, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF5050IDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref50.pdf
 * Keywords: Low Noise Precision Voltage Reference 5V.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class REF5050IDGK extends Component.withPins({
  "DNC_1": "1",
  "Vin": "2",
  "Temp": "3",
  "GND": "4",
  "Trim/NR": "5",
  "Vout": "6",
  "NC": "7",
  "DNC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DNC_1: "no_connect", Vin: "power_in", Temp: "passive", GND: "power_in", "Trim/NR": "passive", Vout: "power_out", NC: "no_connect", DNC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF5050IDGK";
  override referencePrefix = "U";
}

/**
 * 2.5V 0.05% 4mA Extremely Low Noise High Precision Voltage Reference, VSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF6025xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref6025.pdf
 * Keywords: low Noise precision voltage reference.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class REF6025xDGK extends Component.withPins({
  "VIN": "1",
  "EN": "2",
  "SS": "3",
  "FILT": "4",
  "OUT_S": "5",
  "OUT_F": "6",
  "GND_F": "7",
  "GND_S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "power_in", EN: "input", SS: "passive", FILT: "passive", OUT_S: "input", OUT_F: "output", GND_F: "power_in", GND_S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF6025xDGK";
  override referencePrefix = "U";
}

/**
 * 3.0V 0.05% 4mA Extremely Low Noise High Precision Voltage Reference, VSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF6030xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref6025.pdf
 * Keywords: low Noise precision voltage reference.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class REF6030xDGK extends Component.withPins({
  "VIN": "1",
  "EN": "2",
  "SS": "3",
  "FILT": "4",
  "OUT_S": "5",
  "OUT_F": "6",
  "GND_F": "7",
  "GND_S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "power_in", EN: "input", SS: "passive", FILT: "passive", OUT_S: "input", OUT_F: "output", GND_F: "power_in", GND_S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF6030xDGK";
  override referencePrefix = "U";
}

/**
 * 3.3V 0.05% 4mA Extremely Low Noise High Precision Voltage Reference, VSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF6033xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref6025.pdf
 * Keywords: low Noise precision voltage reference.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class REF6033xDGK extends Component.withPins({
  "VIN": "1",
  "EN": "2",
  "SS": "3",
  "FILT": "4",
  "OUT_S": "5",
  "OUT_F": "6",
  "GND_F": "7",
  "GND_S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "power_in", EN: "input", SS: "passive", FILT: "passive", OUT_S: "input", OUT_F: "output", GND_F: "power_in", GND_S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF6033xDGK";
  override referencePrefix = "U";
}

/**
 * 4.1V 0.05% 4mA Extremely Low Noise High Precision Voltage Reference, VSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF6041xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref6025.pdf
 * Keywords: low Noise precision voltage reference.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class REF6041xDGK extends Component.withPins({
  "VIN": "1",
  "EN": "2",
  "SS": "3",
  "FILT": "4",
  "OUT_S": "5",
  "OUT_F": "6",
  "GND_F": "7",
  "GND_S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "power_in", EN: "input", SS: "passive", FILT: "passive", OUT_S: "input", OUT_F: "output", GND_F: "power_in", GND_S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF6041xDGK";
  override referencePrefix = "U";
}

/**
 * 4.5V 0.05% 4mA Extremely Low Noise High Precision Voltage Reference, VSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF6045xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref6025.pdf
 * Keywords: low Noise precision voltage reference.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class REF6045xDGK extends Component.withPins({
  "VIN": "1",
  "EN": "2",
  "SS": "3",
  "FILT": "4",
  "OUT_S": "5",
  "OUT_F": "6",
  "GND_F": "7",
  "GND_S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "power_in", EN: "input", SS: "passive", FILT: "passive", OUT_S: "input", OUT_F: "output", GND_F: "power_in", GND_S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF6045xDGK";
  override referencePrefix = "U";
}

/**
 * 5.0V 0.05% 4mA Extremely Low Noise High Precision Voltage Reference, VSSOP-8
 *
 * KiCad symbol: `Reference_Voltage:REF6050xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ref6025.pdf
 * Keywords: low Noise precision voltage reference.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class REF6050xDGK extends Component.withPins({
  "VIN": "1",
  "EN": "2",
  "SS": "3",
  "FILT": "4",
  "OUT_S": "5",
  "OUT_F": "6",
  "GND_F": "7",
  "GND_S": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIN: "power_in", EN: "input", SS: "passive", FILT: "passive", OUT_S: "input", OUT_F: "output", GND_F: "power_in", GND_S: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:REF6050xDGK";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, SO-8
 *
 * KiCad symbol: `Reference_Voltage:TL431D`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TL431D extends Component.withPins({
  "K": "1",
  "REF": "8",
  "A": "[2,3,6,7]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", REF: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431D";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:TL431DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23?5*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TL431DBV extends Component.withPins({
  "K": "3",
  "REF": "4",
  "A": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", REF: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431DBV";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:TL431DBZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class TL431DBZ extends Component.withPins({
  "K": "1",
  "REF": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", REF: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431DBZ";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, SC-70
 *
 * KiCad symbol: `Reference_Voltage:TL431DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class TL431DCK extends Component.withPins({
  "K": "1",
  "REF": "3",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", REF: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431DCK";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, TO-252
 *
 * KiCad symbol: `Reference_Voltage:TL431KTP`. Reference prefix: `U`.
 * Footprint filters: TO*252*.
 * @see http://www.jameco.com/Jameco/Products/ProdDS/760499.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class TL431KTP extends Component.withPins({
  "REF": "1",
  "A": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431KTP";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, TO-92
 *
 * KiCad symbol: `Reference_Voltage:TL431LP`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device regulator shunt.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class TL431LP extends Component.withPins({
  "REF": "1",
  "A": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431LP";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, PDIP-8
 *
 * KiCad symbol: `Reference_Voltage:TL431P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class TL431P extends Component.withPins({
  "K": "1",
  "A": "6",
  "REF": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", REF: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431P";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, SOT-89
 *
 * KiCad symbol: `Reference_Voltage:TL431PK`. Reference prefix: `U`.
 * Footprint filters: SOT*89*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class TL431PK extends Component.withPins({
  "REF": "1",
  "A": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431PK";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, MSOP-8
 *
 * KiCad symbol: `Reference_Voltage:TL431PS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class TL431PS extends Component.withPins({
  "K": "1",
  "A": "6",
  "REF": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", REF: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431PS";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, TSSOP-8 (Texas PW0008A)
 *
 * KiCad symbol: `Reference_Voltage:TL431PW`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x3mm?P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 */
export class TL431PW extends Component.withPins({
  "K": "1",
  "A": "6",
  "REF": "8",
  "NC": "[2,3,4,5,7]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", REF: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL431PW";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, SOT-23-5
 *
 * KiCad symbol: `Reference_Voltage:TL432DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23?5*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TL432DBV extends Component.withPins({
  "A": "2",
  "K": "4",
  "REF": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", K: "passive", REF: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL432DBV";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, SOT-23
 *
 * KiCad symbol: `Reference_Voltage:TL432DBZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class TL432DBZ extends Component.withPins({
  "REF": "1",
  "K": "2",
  "A": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "passive", K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL432DBZ";
  override referencePrefix = "U";
}

/**
 * Shunt Regulator, SOT-89
 *
 * KiCad symbol: `Reference_Voltage:TL432PK`. Reference prefix: `U`.
 * Footprint filters: SOT*89*.
 * @see http://www.ti.com/lit/ds/symlink/tl431.pdf
 * Keywords: diode device shunt regulator.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class TL432PK extends Component.withPins({
  "K": "1",
  "A": "2",
  "REF": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", REF: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TL432PK";
  override referencePrefix = "U";
}

/**
 * Precision virtual ground, 2.5V output, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:TLE2425xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tle2425.pdf
 * Keywords: Rail splitter precision virtual ground 2.5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TLE2425xD extends Component.withPins({
  "OUT": "1",
  "COMMON": "2",
  "IN": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", COMMON: "power_in", IN: "power_in", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TLE2425xD";
  override referencePrefix = "U";
}

/**
 * Precision virtual ground, 4V to 40V input, TO-92
 *
 * KiCad symbol: `Reference_Voltage:TLE2426xLP`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see http://www.ti.com/lit/ds/symlink/tle2426.pdf
 * Keywords: Rail splitter precision virtual ground.
 */
export class TLE2426xLP extends Component.withPins({
  "OUT": "1",
  "COMMON": "2",
  "IN": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", COMMON: "power_in", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TLE2426xLP";
  override referencePrefix = "U";
}

/**
 * Precision virtual ground, 2.5V output, TO-92
 *
 * KiCad symbol: `Reference_Voltage:TLE2425xLP`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see http://www.ti.com/lit/ds/symlink/tle2425.pdf
 * Keywords: Rail splitter precision virtual ground 2.5V.
 */
export class TLE2425xLP extends Component.withPins({
  "OUT": "1",
  "COMMON": "2",
  "IN": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", COMMON: "power_in", IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TLE2425xLP";
  override referencePrefix = "U";
}

/**
 * Precision virtual ground, noise reduction pin, 4V to 40V input, SOIC-8
 *
 * KiCad symbol: `Reference_Voltage:TLE2426xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tle2426.pdf
 * Keywords: Rail splitter precision virtual ground.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TLE2426xD extends Component.withPins({
  "OUT": "1",
  "COMMON": "2",
  "IN": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NOISE_REDUCTION": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", COMMON: "power_in", IN: "power_in", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NOISE_REDUCTION: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TLE2426xD";
  override referencePrefix = "U";
}

/**
 * Precision virtual ground, noise reduction pin, 4V to 40V input, DIP-8
 *
 * KiCad symbol: `Reference_Voltage:TLE2426xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/tle2426.pdf
 * Keywords: Rail splitter precision vitrual ground.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class TLE2426xP extends Component.withPins({
  "OUT": "1",
  "COMMON": "2",
  "IN": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NOISE_REDUCTION": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "power_out", COMMON: "power_in", IN: "power_in", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NOISE_REDUCTION: "passive", ...opts.pinTypes } });
  }
  override schema = "Reference_Voltage:TLE2426xP";
  override referencePrefix = "U";
}
