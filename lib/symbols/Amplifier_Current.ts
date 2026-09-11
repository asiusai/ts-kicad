// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 28V High Common-Mode Voltage, Single-Supply Difference Amplifier, 10V/V x 2V/V adjustable gain, bandwidth 50kHz, Vcc=3.5V~12V, unidirectional, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8202`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, MSOP*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8202.pdf
 * Keywords: highside HS current sense amplifier linear buffered monitor preamp.
 */
export class AD8202 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "A1": "3",
  "A2": "4",
  "OUT": "5",
  "+Vs": "6",
  "NC": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", A1: "output", A2: "input", OUT: "output", "+Vs": "power_in", NC: "no_connect", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8202";
  override referencePrefix = "U";
}

/**
 * 30V High Common-Mode Voltage, Single-Supply Difference Amplifier, 7V/V x 2V/V adjustable gain, bandwidth 60kHz, Vcc=3.5V~12V, unidirectional, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8203`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, MSOP*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8203.pdf
 * Keywords: highside HS current sense amplifier linear buffered monitor preamp.
 */
export class AD8203 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "A1": "3",
  "A2": "4",
  "OUT": "5",
  "NC": "6",
  "+Vs": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", A1: "output", A2: "input", OUT: "output", NC: "no_connect", "+Vs": "power_in", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8203";
  override referencePrefix = "U";
}

/**
 * 65V High Voltage, Bidirectional Current Shunt Monitor, 20V/V gain, bandwidth 450kHz, Vcc=5V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:AD8210`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8210.pdf
 * Keywords: highside HS current sense amplifier linear buffered.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AD8210 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "Vref2": "3",
  "NC": "4",
  "OUT": "5",
  "V+": "6",
  "Vref1": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", Vref2: "input", NC: "no_connect", OUT: "output", "V+": "power_in", Vref1: "input", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8210";
  override referencePrefix = "U";
}

/**
 * 65V Single-Supply, System Difference Amplifier, 50V/V gain, bandwidth 50kHz, Vcc=5V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:AD8205`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8205.pdf
 * Keywords: highside HS difference amplifier linear buffered.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AD8205 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "Vref2": "3",
  "NC": "4",
  "OUT": "5",
  "V+": "6",
  "Vref1": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", Vref2: "input", NC: "no_connect", OUT: "output", "V+": "power_in", Vref1: "input", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8205";
  override referencePrefix = "U";
}

/**
 * 65V High Common-Mode Voltage, Bidirectional, Current Shunt Amplifier, 20V/V gain, bandwidth 100kHz, Vcc=5V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:AD8206`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8206.pdf
 * Keywords: highside HS current sense amplifier linear buffered.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AD8206 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "Vref2": "3",
  "NC": "4",
  "OUT": "5",
  "V+": "6",
  "Vref1": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", Vref2: "input", NC: "no_connect", OUT: "output", "V+": "power_in", Vref1: "input", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8206";
  override referencePrefix = "U";
}

/**
 * 45V High Voltage, Precision Difference Amplifier, 10V/V x 2V/V adjustable gain, bandwidth 70kHz, Vcc=5V, unidirectional, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8208`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, MSOP*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8208.pdf
 * Keywords: highside HS current sense amplifier linear buffered monitor preamp.
 */
export class AD8208 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "A1": "3",
  "A2": "4",
  "OUT": "5",
  "+Vs": "6",
  "NC": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", A1: "output", A2: "input", OUT: "output", "+Vs": "power_in", NC: "no_connect", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8208";
  override referencePrefix = "U";
}

/**
 * 45V High Voltage, Precision Difference Amplifier, 7V/V x 2V/V adjustable gain, bandwidth 80kHz, Vcc=5V, unidirectional, MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8209`. Reference prefix: `U`.
 * Footprint filters: SOIC*P1.27mm*, MSOP*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8209.pdf
 * Keywords: highside HS current sense amplifier linear buffered monitor preamp.
 */
export class AD8209 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "A1": "3",
  "A2": "4",
  "OUT": "5",
  "NC": "6",
  "+Vs": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", A1: "output", A2: "input", OUT: "output", NC: "no_connect", "+Vs": "power_in", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8209";
  override referencePrefix = "U";
}

/**
 * 65V High Voltage, Current Shunt Monitor, 20V/V gain, bandwidth 500kHz, Vcc=5V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:AD8211`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8211.pdf
 * Keywords: highside HS current sense amplifier linear buffered.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class AD8211 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vin+": "3",
  "Vin-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "Vin+": "input", "Vin-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8211";
  override referencePrefix = "U";
}

/**
 * 65V High Voltage Current, Shunt Monitor, adjustable gain, bandwidth 1000kHz, Vcc=7V~65V, current output, unidirectional, MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8212`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8212.pdf
 * Keywords: highside HS current sense shunt monitor amplifier linear.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class AD8212 extends Component.withPins({
  "V+": "1",
  "COM": "2",
  "BIAS": "3",
  "NC_4": "4",
  "Iout": "5",
  "ALPHA": "6",
  "NC_7": "7",
  "Vsns": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", COM: "input", BIAS: "input", NC_4: "no_connect", Iout: "output", ALPHA: "output", NC_7: "no_connect", Vsns: "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8212";
  override referencePrefix = "U";
}

/**
 * 65V Dual, High Voltage, Current Shunt Monitor, 20V/V gain, bandwidth 500kHz, Vcc=5V, MSOP-10
 *
 * KiCad symbol: `Amplifier_Current:AD8213`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8213.pdf
 * Keywords: highside HS current sense amplifier linear buffered dual monitor.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD8213 extends Component.withPins({
  "GND": "3",
  "CF_6": "6",
  "OUT_7": "7",
  "V+": "8",
  "+IN_9": "9",
  "-IN_10": "10",
  "-IN_1": "1",
  "+IN_2": "2",
  "OUT_4": "4",
  "CF_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", CF_6: "passive", OUT_7: "output", "V+": "power_in", "+IN_9": "input", "-IN_10": "input", "-IN_1": "input", "+IN_2": "input", OUT_4: "output", CF_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8213";
  override referencePrefix = "U";
}

/**
 * 65V High Voltage, Current Shunt Monitor, 20V/V gain, bandwidth 450kHz, Vcc=5V, unidirectional, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:AD8215`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8215.pdf
 * Keywords: highside HS current sense amplifier linear buffered monitor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AD8215 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "OUT": "5",
  "V+": "6",
  "NC_7": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", OUT: "output", "V+": "power_in", NC_7: "no_connect", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8215";
  override referencePrefix = "U";
}

/**
 * 65V High Bandwidth, Bidirectional Difference Amplifier, 3V/V gain, bandwidth 3MHz, Vcc=5V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:AD8216`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8216.pdf
 * Keywords: HS difference amplifier linear.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AD8216 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "Vref2": "3",
  "NC": "4",
  "OUT": "5",
  "V+": "6",
  "Vref1": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", Vref2: "input", NC: "no_connect", OUT: "output", "V+": "power_in", Vref1: "input", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8216";
  override referencePrefix = "U";
}

/**
 * 80V High Resolution, Zero-Drift, Current Shunt Monitor, 20V/V gain, bandwidth 500kHz, internal LDO, unidirectional, MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8217`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8217.pdf
 * Keywords: highside HS current sense amplifier linear buffered monitor.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class AD8217 extends Component.withPins({
  "+IN": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "OUT": "5",
  "NC_6": "6",
  "NC_7": "7",
  "-IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+IN": "power_in", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", OUT: "output", NC_6: "no_connect", NC_7: "no_connect", "-IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8217";
  override referencePrefix = "U";
}

/**
 * 80V Zero Drift, Bidirectional, Current Shunt Monitor, 20V/V gain, bandwidth 450kHz, Vcc=5V, LFCSP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8218xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x2mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8218.pdf
 * Keywords: highside HS current sense amplifier linear buffered.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x2mm_P0.5mm_EP1.6x1.65mm.
 */
export class AD8218xCP extends Component.withPins({
  "+IN": "1",
  "Vs": "2",
  "ENB": "3",
  "GND_4": "4",
  "OUT": "5",
  "NC": "6",
  "REF": "7",
  "-IN": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+IN": "input", Vs: "passive", ENB: "input", GND_4: "power_in", OUT: "output", NC: "no_connect", REF: "input", "-IN": "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8218xCP";
  override referencePrefix = "U";
}

/**
 * 80V Zero Drift, Bidirectional, Current Shunt Monitor, 20V/V gain, bandwidth 450kHz, Vcc=5V, MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8218xRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8218.pdf
 * Keywords: highside HS current sense amplifier linear buffered.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class AD8218xRM extends Component.withPins({
  "+IN": "1",
  "Vs": "2",
  "ENB": "3",
  "GND": "4",
  "OUT": "5",
  "NC": "6",
  "REF": "7",
  "-IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+IN": "input", Vs: "passive", ENB: "input", GND: "power_in", OUT: "output", NC: "no_connect", REF: "input", "-IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8218xRM";
  override referencePrefix = "U";
}

/**
 * 80V Zero Drift, Unidirectional, Current Shunt Monitor, 60V/V gain, bandwidth 500kHz, Vcc=4V~80V, MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8219`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8219.pdf
 * Keywords: highside HS current sense amplifier linear buffered monitor.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class AD8219 extends Component.withPins({
  "+IN": "1",
  "Vs": "2",
  "NC_3": "3",
  "GND": "4",
  "OUT": "5",
  "NC_6": "6",
  "NC_7": "7",
  "-IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+IN": "input", Vs: "power_in", NC_3: "no_connect", GND: "power_in", OUT: "output", NC_6: "no_connect", NC_7: "no_connect", "-IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8219";
  override referencePrefix = "U";
}

/**
 * 70V Bidirectional, Zero Drift, Current Sense Amplifier, 60V/V gain, bandwidth 250kHz, VS=2.7V~5.5V, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8417`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8417.pdf
 * Keywords: highside HS current sense amplifier linear.
 */
export class AD8417 extends Component.withPins({
  "IN-": "1",
  "GND": "2",
  "REF2": "3",
  "NC": "4",
  "OUT": "5",
  "VS": "6",
  "REF1": "7",
  "IN+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "IN-": "input", GND: "power_in", REF2: "input", NC: "no_connect", OUT: "output", VS: "power_in", REF1: "input", "IN+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8417";
  override referencePrefix = "U";
}

/**
 * 70V Bidirectional, Zero Drift, Current Sense Amplifier, 20V/V gain, bandwidth 250kHz, VS=2.7V~5.5V, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:AD8418`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8418.pdf
 * Keywords: highside HS current sense amplifier linear.
 */
export class AD8418 extends Component.withPins({
  "IN-": "1",
  "GND": "2",
  "REF2": "3",
  "NC": "4",
  "OUT": "5",
  "VS": "6",
  "REF1": "7",
  "IN+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "IN-": "input", GND: "power_in", REF2: "input", NC: "no_connect", OUT: "output", VS: "power_in", REF1: "input", "IN+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:AD8418";
  override referencePrefix = "U";
}

/**
 * 20V High side current sensor, Voltage Output, 50V/V Gain, SC-70-6
 *
 * KiCad symbol: `Amplifier_Current:BQ500100DCK`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see http://www.ti.com/lit/ds/symlink/bq500100.pdf
 * Keywords: Current shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BQ500100DCK extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "passive", GND_2: "power_in", "V+": "power_in", "+": "input", "-": "input", P6: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:BQ500100DCK";
  override referencePrefix = "U";
}

/**
 * High-Side Measurement Current Shunt Monitor, 36V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA138`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina138.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA138 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA138";
  override referencePrefix = "U";
}

/**
 * High-Side Measurement Current Shunt Monitor, 40V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA139`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina169.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA139 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA139";
  override referencePrefix = "U";
}

/**
 * High-Side Measurement Current Shunt Monitor, 60V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA168`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina138.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA168 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA168";
  override referencePrefix = "U";
}

/**
 * High-Side Measurement Current Shunt Monitor, 60V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA169`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina169.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA169 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA169";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 1 Circuit, Rail-to-Rail, 26V, Gain 20 V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA180A1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina180.pdf
 * Keywords: current monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA180A1 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA180A1";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 1 Circuit, Rail-to-Rail, 26V, Gain 50 V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA180A2`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina180.pdf
 * Keywords: current monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA180A2 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA180A2";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 1 Circuit, Rail-to-Rail, 26V, Gain 100 V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA180A3`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina180.pdf
 * Keywords: current monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA180A3 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA180A3";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 1 Circuit, Rail-to-Rail, 26V, Gain 200 V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA180A4`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina180.pdf
 * Keywords: current monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA180A4 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA180A4";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 1 Circuit, Rail-to-Rail, 26V, Gain 20 V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA180B1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina180.pdf
 * Keywords: current monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA180B1 extends Component.withPins({
  "+": "1",
  "GND": "2",
  "-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "input", GND: "power_in", "-": "input", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA180B1";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 1 Circuit, Rail-to-Rail, 26V, Gain 50 V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA180B2`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina180.pdf
 * Keywords: current monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA180B2 extends Component.withPins({
  "+": "1",
  "GND": "2",
  "-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "input", GND: "power_in", "-": "input", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA180B2";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 1 Circuit, Rail-to-Rail, 26V, Gain 100 V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA180B3`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina180.pdf
 * Keywords: current monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA180B3 extends Component.withPins({
  "+": "1",
  "GND": "2",
  "-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "input", GND: "power_in", "-": "input", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA180B3";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 1 Circuit, Rail-to-Rail, 26V, Gain 200 V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA180B4`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina180.pdf
 * Keywords: current monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA180B4 extends Component.withPins({
  "+": "1",
  "GND": "2",
  "-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "input", GND: "power_in", "-": "input", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA180B4";
  override referencePrefix = "U";
}

/**
 * Bidirectional, Low- and High-Side Voltage Output, Current-Sense Amplifier, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Current:INA181`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina181.pdf
 * Keywords: current monitor shunt sensor bidirectional.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class INA181 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "REF": "5",
  "V+": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", REF: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA181";
  override referencePrefix = "U";
}

/**
 * Ultra-small, bidirectional, precision low-side and high-side, voltage output current-sense amplifier (SOT-563)
 *
 * KiCad symbol: `Amplifier_Current:INA185`. Reference prefix: `U`.
 * Footprint filters: SOT*563*.
 * @see https://www.ti.com/lit/ds/symlink/ina185.pdf
 * Keywords: current monitor shunt sensor bidirectional.
 * Default footprint: Package_TO_SOT_SMD:SOT-563.
 */
export class INA185 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "REF": "5",
  "V+": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", REF: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA185";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor −16V to +80V Common-Mode Range, 20V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA193`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina193.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA193 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA193";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor −16V to +80V Common-Mode Range, 50V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA194`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina193.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA194 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA194";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor −16V to +80V Common-Mode Range, 100V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA195`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina193.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA195 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "+": "3",
  "-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA195";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor −16V to +80V Common-Mode Range, 20V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA196`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina193.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA196 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA196";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor −16V to +80V Common-Mode Range, 50V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA197`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina193.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA197 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA197";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor −16V to +80V Common-Mode Range, 100V/V, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA198`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina193.pdf
 * Keywords: current sense shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA198 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA198";
  override referencePrefix = "U";
}

/**
 * INA199 26-V, Bidirectional, Zero-Drift, Low- or High-Side, Voltage-Output, Current-Shunt Monitor, SOT-363, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA199xxDCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/ina199.pdf
 * Keywords: current monitor shunt sensor bidirectional.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class INA199xxDCK extends Component.withPins({
  "REF": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "input", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", P6: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA199xxDCK";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor, integrated comparator and reference, -16V to +80V Common-Mode Range, 20V/V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA200D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina201.pdf
 * Keywords: current-sense amplifier fixed-gain high-side low-side.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA200D extends Component.withPins({
  "V_{s}": "1",
  "OUT": "2",
  "CMP_{IN}": "3",
  "GND": "4",
  "~{RESET}": "5",
  "CMP_{OUT}": "6",
  "V_{IN-}": "7",
  "V_{IN+}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{s}": "power_in", OUT: "output", "CMP_{IN}": "input", GND: "power_in", "~{RESET}": "input", "CMP_{OUT}": "open_collector", "V_{IN-}": "input", "V_{IN+}": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA200D";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor, integrated comparator and reference, -16V to +80V Common-Mode Range, 20V/V, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA200DGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina201.pdf
 * Keywords: current-sense amplifier fixed-gain high-side low-side.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA200DGK extends Component.withPins({
  "V_{s}": "1",
  "OUT": "2",
  "CMP_{IN}": "3",
  "GND": "4",
  "~{RESET}": "5",
  "CMP_{OUT}": "6",
  "V_{IN-}": "7",
  "V_{IN+}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{s}": "power_in", OUT: "output", "CMP_{IN}": "input", GND: "power_in", "~{RESET}": "input", "CMP_{OUT}": "open_collector", "V_{IN-}": "input", "V_{IN+}": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA200DGK";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor, integrated comparator and reference, -16V to +80V Common-Mode Range, 50V/V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA201D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina201.pdf
 * Keywords: current-sense amplifier fixed-gain high-side low-side.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA201D extends Component.withPins({
  "V_{s}": "1",
  "OUT": "2",
  "CMP_{IN}": "3",
  "GND": "4",
  "~{RESET}": "5",
  "CMP_{OUT}": "6",
  "V_{IN-}": "7",
  "V_{IN+}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{s}": "power_in", OUT: "output", "CMP_{IN}": "input", GND: "power_in", "~{RESET}": "input", "CMP_{OUT}": "open_collector", "V_{IN-}": "input", "V_{IN+}": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA201D";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor, integrated comparator and reference, -16V to +80V Common-Mode Range, 50V/V, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA201DGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina201.pdf
 * Keywords: current-sense amplifier fixed-gain high-side low-side.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA201DGK extends Component.withPins({
  "V_{s}": "1",
  "OUT": "2",
  "CMP_{IN}": "3",
  "GND": "4",
  "~{RESET}": "5",
  "CMP_{OUT}": "6",
  "V_{IN-}": "7",
  "V_{IN+}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{s}": "power_in", OUT: "output", "CMP_{IN}": "input", GND: "power_in", "~{RESET}": "input", "CMP_{OUT}": "open_collector", "V_{IN-}": "input", "V_{IN+}": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA201DGK";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor, integrated comparator and reference, -16V to +80V Common-Mode Range, 100V/V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA202D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina201.pdf
 * Keywords: current-sense amplifier fixed-gain high-side low-side.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA202D extends Component.withPins({
  "V_{s}": "1",
  "OUT": "2",
  "CMP_{IN}": "3",
  "GND": "4",
  "~{RESET}": "5",
  "CMP_{OUT}": "6",
  "V_{IN-}": "7",
  "V_{IN+}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{s}": "power_in", OUT: "output", "CMP_{IN}": "input", GND: "power_in", "~{RESET}": "input", "CMP_{OUT}": "open_collector", "V_{IN-}": "input", "V_{IN+}": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA202D";
  override referencePrefix = "U";
}

/**
 * Current Shunt Monitor, integrated comparator and reference, -16V to +80V Common-Mode Range, 100V/V, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA202DGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina201.pdf
 * Keywords: current-sense amplifier fixed-gain high-side low-side.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA202DGK extends Component.withPins({
  "V_{s}": "1",
  "OUT": "2",
  "CMP_{IN}": "3",
  "GND": "4",
  "~{RESET}": "5",
  "CMP_{OUT}": "6",
  "V_{IN-}": "7",
  "V_{IN+}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{s}": "power_in", OUT: "output", "CMP_{IN}": "input", GND: "power_in", "~{RESET}": "input", "CMP_{OUT}": "open_collector", "V_{IN-}": "input", "V_{IN+}": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA202DGK";
  override referencePrefix = "U";
}

/**
 * 26V, Dual-Channel, Voltage Output, Current-Sense Amplifier, TSSOP-8 (Texas VSSOP-8 / DGK0008A)
 *
 * KiCad symbol: `Amplifier_Current:INA2180AxxDGK`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/gpn/INA2180
 * Keywords: current-shunt-monitor INA2180A1IDGKR INA2180A2IDGKR INA2180A3IDGKR INA2180A4IDGKR.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA2180AxxDGK extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "GND": "4",
  "VS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", GND: "power_in", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA2180AxxDGK";
  override referencePrefix = "U";
}

/**
 * 26V, Dual-Channel, Voltage Output, Current-Sense Amplifier, WSON-8 (Texas DSG0008A)
 *
 * KiCad symbol: `Amplifier_Current:INA2180AxxDSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*2x2mm?P0.5mm?EP0.9x1.6mm*.
 * @see https://www.ti.com/lit/gpn/INA2180
 * Keywords: current-shunt-monitor INA2180A1IDSGR INA2180A2IDSGR INA2180A3IDSGR INA2180A4IDSGR.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm_ThermalVias.
 */
export class INA2180AxxDSG extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "GND": "4",
  "VS": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", GND: "power_in", VS: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA2180AxxDSG";
  override referencePrefix = "U";
}

/**
 * 36-V, Bidirectional Current Sense Amplifier, With Four Pin-Selectable Gain Settings, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA225`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina225-q1.pdf
 * Keywords: voltage-output current-sense amplifier shunt.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA225 extends Component.withPins({
  "IN+": "1",
  "GND": "2",
  "V_{S}": "3",
  "OUT": "4",
  "GS0": "5",
  "GS1": "6",
  "REF": "7",
  "IN-": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "IN+": "passive", GND: "power_in", "V_{S}": "power_in", OUT: "output", GS0: "input", GS1: "input", REF: "passive", "IN-": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA225";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 20V/V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA240A1D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina240.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA240A1D extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA240A1D";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 20V/V, TSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA240A1PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina240.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 */
export class INA240A1PW extends Component.withPins({
  "GND_1": "1",
  "+": "2",
  "-": "3",
  "GND_4": "4",
  "V+": "5",
  "REF2": "6",
  "REF1": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "passive", "+": "input", "-": "input", GND_4: "power_in", "V+": "power_in", REF2: "passive", REF1: "passive", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA240A1PW";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 50V/V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA240A2D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina240.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA240A2D extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA240A2D";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 50V/V, TSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA240A2PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina240.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 */
export class INA240A2PW extends Component.withPins({
  "GND_1": "1",
  "+": "2",
  "-": "3",
  "GND_4": "4",
  "V+": "5",
  "REF2": "6",
  "REF1": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "passive", "+": "input", "-": "input", GND_4: "power_in", "V+": "power_in", REF2: "passive", REF1: "passive", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA240A2PW";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 100V/V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA240A3D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina240.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA240A3D extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA240A3D";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 100V/V, TSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA240A3PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina240.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 */
export class INA240A3PW extends Component.withPins({
  "GND_1": "1",
  "+": "2",
  "-": "3",
  "GND_4": "4",
  "V+": "5",
  "REF2": "6",
  "REF1": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "passive", "+": "input", "-": "input", GND_4: "power_in", "V+": "power_in", REF2: "passive", REF1: "passive", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA240A3PW";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 200V/V, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA240A4D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina240.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA240A4D extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA240A4D";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 200V/V, TSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA240A4PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina240.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 */
export class INA240A4PW extends Component.withPins({
  "GND_1": "1",
  "+": "2",
  "-": "3",
  "GND_4": "4",
  "V+": "5",
  "REF2": "6",
  "REF1": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "passive", "+": "input", "-": "input", GND_4: "power_in", "V+": "power_in", REF2: "passive", REF1: "passive", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA240A4PW";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 10V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A1xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241A1xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A1xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 10V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A1xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241A1xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A1xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 10V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A1xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241A1xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A1xDGK";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 20V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A2xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241A2xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A2xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 20V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A2xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241A2xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A2xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 20V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A2xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241A2xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A2xDGK";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 50V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A3xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241A3xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A3xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 50V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A3xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241A3xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A3xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 50V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A3xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241A3xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A3xDGK";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 100V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A4xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241A4xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A4xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 100V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A4xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241A4xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A4xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 100V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A4xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241A4xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A4xDGK";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 200V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A5xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241A5xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A5xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 200V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A5xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241A5xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A5xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 200V/V, ±0.01% Gain Accuracy, ±10 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241A5xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241A5xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241A5xDGK";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 10V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B1xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241B1xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B1xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 10V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B1xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241B1xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B1xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 10V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B1xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241B1xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B1xDGK";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 20V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B2xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241B2xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B2xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 20V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B2xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241B2xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B2xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 20V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B2xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241B2xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B2xDGK";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 50V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B3xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241B3xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B3xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 50V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B3xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241B3xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B3xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 50V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B3xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241B3xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B3xDGK";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 100V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B4xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241B4xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B4xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 100V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B4xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241B4xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B4xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 100V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B4xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241B4xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B4xDGK";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 200V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B5xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA241B5xD extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B5xD";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 200V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, SOT-23-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B5xDDF`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA241B5xDDF extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B5xDDF";
  override referencePrefix = "U";
}

/**
 * High- and Low-Side, Bidirectional, Zero-Drift, Current-Sense Amplifier With Enhanced PWM Rejection, 200V/V, ±0.1% Gain Accuracy, ±150 μV Offset Voltage, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA241B5xDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina241b.pdf
 * Keywords: current monitor shunt sensor bidirectional high low.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class INA241B5xDGK extends Component.withPins({
  "-": "1",
  "GND_2": "2",
  "REF2": "3",
  "GND_4": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND_2: "power_in", REF2: "passive", GND_4: "passive", P5: "output", "V+": "power_in", REF1: "passive", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA241B5xDGK";
  override referencePrefix = "U";
}

/**
 * High Voltage, Bidirectional, Zero-Drift, Current-ShuntMonitor With Integrated, 2-mΩ, Precision, Low Inductive Shunt Resistor, TSSOP-20
 *
 * KiCad symbol: `Amplifier_Current:INA253`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina253.pdf
 * Keywords: shunt current amplifier bidirectional.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class INA253 extends Component.withPins({
  "IS-_1": "1",
  "IS-_2": "2",
  "IS-_3": "3",
  "SH-": "4",
  "IN-": "5",
  "GND_6": "6",
  "DNC1": "7",
  "NC_8": "8",
  "VS": "9",
  "REF2": "10",
  "REF1": "11",
  "NC_12": "12",
  "OUT": "13",
  "DNC2": "14",
  "GND_15": "15",
  "IN+": "16",
  "SH+": "17",
  "IS+_18": "18",
  "IS+_19": "19",
  "IS+_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "IS-_1": "passive", "IS-_2": "passive", "IS-_3": "passive", "SH-": "passive", "IN-": "passive", GND_6: "power_in", DNC1: "no_connect", NC_8: "no_connect", VS: "power_in", REF2: "passive", REF1: "passive", NC_12: "no_connect", OUT: "output", DNC2: "no_connect", GND_15: "passive", "IN+": "passive", "SH+": "passive", "IS+_18": "passive", "IS+_19": "passive", "IS+_20": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA253";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Gain 20 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA280A1xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina280.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA280A1xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA280A1xDCK";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Gain 50 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA280A2xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina280.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA280A2xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA280A2xDCK";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Gain 100 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA280A3xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina280.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA280A3xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA280A3xDCK";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Gain 200 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA280A4xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina280.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA280A4xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA280A4xDCK";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Gain 500 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA280A5xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina280.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA280A5xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA280A5xDCK";
  override referencePrefix = "U";
}

/**
 * -4...+110V High Voltage Current Shunt Monitor, 20V/V gain, 1.3 MHz bandwidth,  2.7..20Vcc, 55uV offset voltage, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA281A1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina281.pdf
 * Keywords: highside HS current sense amplifier linear buffered texas.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA281A1 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vin+": "3",
  "Vin-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "Vin+": "input", "Vin-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA281A1";
  override referencePrefix = "U";
}

/**
 * -4...+110V High Voltage Current Shunt Monitor, 50V/V gain, 1.3 MHz bandwidth,  2.7..20Vcc, 55uV offset voltage, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA281A2`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina281.pdf
 * Keywords: highside HS current sense amplifier linear buffered texas.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA281A2 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vin+": "3",
  "Vin-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "Vin+": "input", "Vin-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA281A2";
  override referencePrefix = "U";
}

/**
 * -4...+110V High Voltage Current Shunt Monitor, 100V/V gain, 1.3 MHz bandwidth,  2.7..20Vcc, 55uV offset voltage, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA281A3`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina281.pdf
 * Keywords: highside HS current sense amplifier linear buffered texas.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA281A3 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vin+": "3",
  "Vin-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "Vin+": "input", "Vin-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA281A3";
  override referencePrefix = "U";
}

/**
 * -4...+110V High Voltage Current Shunt Monitor, 200V/V gain, 1.3 MHz bandwidth,  2.7..20Vcc, 55uV offset voltage, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA281A4`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina281.pdf
 * Keywords: highside HS current sense amplifier linear buffered texas.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA281A4 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vin+": "3",
  "Vin-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "Vin+": "input", "Vin-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA281A4";
  override referencePrefix = "U";
}

/**
 * -4...+110V High Voltage Current Shunt Monitor, 500V/V gain, 1.3 MHz bandwidth,  2.7..20Vcc, 55uV offset voltage, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA281A5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina281.pdf
 * Keywords: highside HS current sense amplifier linear buffered texas.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA281A5 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vin+": "3",
  "Vin-": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "Vin+": "input", "Vin-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA281A5";
  override referencePrefix = "U";
}

/**
 * High-Accuracy, Wide Common-Mode Range, Bidirectional Current Shunt Monitors, Zero-Drift Series, 50V/V, SOIC-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA282`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina282.pdf
 * Keywords: current monitor shunt sensor bidirectional.
 */
export class INA282 extends Component.withPins({
  "-": "1",
  "GND": "2",
  "REF2": "3",
  "NC": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND: "power_in", REF2: "input", NC: "no_connect", P5: "output", "V+": "input", REF1: "input", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA282";
  override referencePrefix = "U";
}

/**
 * High-Accuracy, Wide Common-Mode Range, Bidirectional Current Shunt Monitors, Zero-Drift Series, 200V/V, SOIC-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA283`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina282.pdf
 * Keywords: current monitor shunt sensor bidirectional.
 */
export class INA283 extends Component.withPins({
  "-": "1",
  "GND": "2",
  "REF2": "3",
  "NC": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND: "power_in", REF2: "input", NC: "no_connect", P5: "output", "V+": "input", REF1: "input", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA283";
  override referencePrefix = "U";
}

/**
 * High-Accuracy, Wide Common-Mode Range, Bidirectional Current Shunt Monitors, Zero-Drift Series, 500V/V, SOIC-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA284`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina282.pdf
 * Keywords: current monitor shunt sensor bidirectional.
 */
export class INA284 extends Component.withPins({
  "-": "1",
  "GND": "2",
  "REF2": "3",
  "NC": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND: "power_in", REF2: "input", NC: "no_connect", P5: "output", "V+": "input", REF1: "input", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA284";
  override referencePrefix = "U";
}

/**
 * High-Accuracy, Wide Common-Mode Range, Bidirectional Current Shunt Monitors, Zero-Drift Series, 1000V/V, SOIC-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA285`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina282.pdf
 * Keywords: current monitor shunt sensor bidirectional.
 */
export class INA285 extends Component.withPins({
  "-": "1",
  "GND": "2",
  "REF2": "3",
  "NC": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND: "power_in", REF2: "input", NC: "no_connect", P5: "output", "V+": "input", REF1: "input", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA285";
  override referencePrefix = "U";
}

/**
 * High-Accuracy, Wide Common-Mode Range, Bidirectional Current Shunt Monitors, Zero-Drift Series, 100V/V, SOIC-8/VSSOP-8
 *
 * KiCad symbol: `Amplifier_Current:INA286`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina282.pdf
 * Keywords: current monitor shunt sensor bidirectional.
 */
export class INA286 extends Component.withPins({
  "-": "1",
  "GND": "2",
  "REF2": "3",
  "NC": "4",
  "P5": "5",
  "V+": "6",
  "REF1": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", GND: "power_in", REF2: "input", NC: "no_connect", P5: "output", "V+": "input", REF1: "input", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA286";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Ultra Precise, Gain 20 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA290A1xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina290.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA290A1xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA290A1xDCK";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Ultra Precise, Gain 50 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA290A2xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina290.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA290A2xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA290A2xDCK";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Ultra Precise, Gain 100 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA290A3xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina290.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA290A3xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA290A3xDCK";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Ultra Precise, Gain 200 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA290A4xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina290.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA290A4xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA290A4xDCK";
  override referencePrefix = "U";
}

/**
 * Current Sense Amplifier, 2.7-V to 120-V Common Mode, 1.1-MHz, Ultra Precise, Gain 500 V/V, SC-70
 *
 * KiCad symbol: `Amplifier_Current:INA290A5xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/ina290.pdf
 * Keywords: monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class INA290A5xDCK extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "V+": "3",
  "+": "4",
  "-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", GND: "power_in", "V+": "power_in", "+": "input", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA290A5xDCK";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 1.3-MHz bandwidth, Current Sense Amplifier, 20V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293A1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293A1 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "IN+": "3",
  "IN-": "4",
  "Vs": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "IN+": "input", "IN-": "input", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293A1";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 1.3-MHz bandwidth, Current Sense Amplifier, 50V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293A2`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293A2 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "IN+": "3",
  "IN-": "4",
  "Vs": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "IN+": "input", "IN-": "input", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293A2";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 1-MHz bandwidth, Current Sense Amplifier, 100V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293A3`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293A3 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "IN+": "3",
  "IN-": "4",
  "Vs": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "IN+": "input", "IN-": "input", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293A3";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 900-KHz bandwidth, Current Sense Amplifier, 200V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293A4`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293A4 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "IN+": "3",
  "IN-": "4",
  "Vs": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "IN+": "input", "IN-": "input", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293A4";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 900-KHz bandwidth, Current Sense Amplifier, 500V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293A5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293A5 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "IN+": "3",
  "IN-": "4",
  "Vs": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", "IN+": "input", "IN-": "input", Vs: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293A5";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 1.3-MHz bandwidth, Current Sense Amplifier, 20V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293B1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293B1 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
  "IN+": "4",
  "IN-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", "IN+": "input", "IN-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293B1";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 1.3-MHz bandwidth, Current Sense Amplifier, 50V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293B2`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293B2 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
  "IN+": "4",
  "IN-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", "IN+": "input", "IN-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293B2";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 1-MHz bandwidth, Current Sense Amplifier, 100V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293B3`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293B3 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
  "IN+": "4",
  "IN-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", "IN+": "input", "IN-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293B3";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 900-KHz bandwidth, Current Sense Amplifier, 200V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293B4`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293B4 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
  "IN+": "4",
  "IN-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", "IN+": "input", "IN-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293B4";
  override referencePrefix = "U";
}

/**
 * -4-V to 110-V, 900-KHz bandwidth, Current Sense Amplifier, 500V/V gain, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:INA293B5`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ina293.pdf
 * Keywords: highside high lowside low HS LS linear buffered texas shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class INA293B5 extends Component.withPins({
  "OUT": "1",
  "GND": "2",
  "Vs": "3",
  "IN+": "4",
  "IN-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUT: "output", GND: "power_in", Vs: "power_in", "IN+": "input", "IN-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA293B5";
  override referencePrefix = "U";
}

/**
 * Quad current sense amplifier, Rail-to-Rail, 26V, Gain 20 V/V, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Current:INA4180A1`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina4180.pdf
 * Keywords: current monitor shunt sensor texas.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class INA4180A1 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "P8": "8",
  "-_9": "9",
  "+_10": "10",
  "+_12": "12",
  "-_13": "13",
  "P14": "14",
  "VS": "4",
  "GND": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", P8: "output", "-_9": "input", "+_10": "input", "+_12": "input", "-_13": "input", P14: "output", VS: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA4180A1";
  override referencePrefix = "U";
}

/**
 * Quad current sense amplifier, Rail-to-Rail, 26V, Gain 50 V/V, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Current:INA4180A2`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina4180.pdf
 * Keywords: monitor shunt sensor texas.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class INA4180A2 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "P8": "8",
  "-_9": "9",
  "+_10": "10",
  "+_12": "12",
  "-_13": "13",
  "P14": "14",
  "VS": "4",
  "GND": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", P8: "output", "-_9": "input", "+_10": "input", "+_12": "input", "-_13": "input", P14: "output", VS: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA4180A2";
  override referencePrefix = "U";
}

/**
 * Quad current sense amplifier, Rail-to-Rail, 26V, Gain 100 V/V, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Current:INA4180A3`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina4180.pdf
 * Keywords: monitor shunt sensor texas.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class INA4180A3 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "P8": "8",
  "-_9": "9",
  "+_10": "10",
  "+_12": "12",
  "-_13": "13",
  "P14": "14",
  "VS": "4",
  "GND": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", P8: "output", "-_9": "input", "+_10": "input", "+_12": "input", "-_13": "input", P14: "output", VS: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA4180A3";
  override referencePrefix = "U";
}

/**
 * Quad current sense amplifier, Rail-to-Rail, 26V, Gain 200 V/V, TSSOP-14
 *
 * KiCad symbol: `Amplifier_Current:INA4180A4`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina4180.pdf
 * Keywords: monitor shunt sensor texas.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class INA4180A4 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "P8": "8",
  "-_9": "9",
  "+_10": "10",
  "+_12": "12",
  "-_13": "13",
  "P14": "14",
  "VS": "4",
  "GND": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", P8: "output", "-_9": "input", "+_10": "input", "+_12": "input", "-_13": "input", P14: "output", VS: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:INA4180A4";
  override referencePrefix = "U";
}

/**
 * Precision High Voltage Current Sense Amplifiers, 42V/76V, SOT-23-6
 *
 * KiCad symbol: `Amplifier_Current:LMP8640`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lmp8640.pdf
 * Keywords: current monitor shunt sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class LMP8640 extends Component.withPins({
  "P1": "1",
  "V-": "2",
  "+": "3",
  "-": "4",
  "V+": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", "V-": "power_in", "+": "input", "-": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:LMP8640";
  override referencePrefix = "U";
}

/**
 * 36V Low Cost, High Side Current Sense, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:LT6106`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6106fb.pdf
 * Keywords: current sense.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class LT6106 extends Component.withPins({
  "P1": "1",
  "V-": "2",
  "-": "3",
  "+": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "open_collector", "V-": "power_in", "-": "input", "+": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:LT6106";
  override referencePrefix = "U";
}

/**
 * Precision Zero Drift Current Sense Amplifier, 60V, DFN-8
 *
 * KiCad symbol: `Amplifier_Current:LTC6102xDD`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6102fe.pdf
 * Keywords: current sense amplifier.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 */
export class LTC6102xDD extends Component.withPins({
  "-INS": "1",
  "-INF": "2",
  "V-_3": "3",
  "OUT": "4",
  "V-_5": "5",
  "VREG": "6",
  "V+": "7",
  "+IN": "8",
  "V-_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-INS": "input", "-INF": "input", "V-_3": "power_in", OUT: "output", "V-_5": "passive", VREG: "output", "V+": "power_in", "+IN": "input", "V-_9": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:LTC6102xDD";
  override referencePrefix = "U";
}

/**
 * Precision Zero Drift Current Sense Amplifier, 100V, DFN-8
 *
 * KiCad symbol: `Amplifier_Current:LTC6102HVxDD`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6102fe.pdf
 * Keywords: current sense amplifier.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 */
export class LTC6102HVxDD extends Component.withPins({
  "-INS": "1",
  "-INF": "2",
  "V-_3": "3",
  "OUT": "4",
  "V-_5": "5",
  "VREG": "6",
  "V+": "7",
  "+IN": "8",
  "V-_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-INS": "input", "-INF": "input", "V-_3": "power_in", OUT: "output", "V-_5": "passive", VREG: "output", "V+": "power_in", "+IN": "input", "V-_9": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:LTC6102HVxDD";
  override referencePrefix = "U";
}

/**
 * Precision Zero Drift Current Sense Amplifier, 60V, MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:LTC6102xMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6102fe.pdf
 * Keywords: current sense amplifier.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC6102xMS8 extends Component.withPins({
  "-INS": "1",
  "-INF": "2",
  "V-_3": "3",
  "OUT": "4",
  "V-_5": "5",
  "VREG": "6",
  "V+": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-INS": "input", "-INF": "input", "V-_3": "power_in", OUT: "output", "V-_5": "passive", VREG: "output", "V+": "power_in", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:LTC6102xMS8";
  override referencePrefix = "U";
}

/**
 * Precision Zero Drift Current Sense Amplifier, 100V, MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:LTC6102HVxMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6102fe.pdf
 * Keywords: current sense amplifier.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC6102HVxMS8 extends Component.withPins({
  "-INS": "1",
  "-INF": "2",
  "V-_3": "3",
  "OUT": "4",
  "V-_5": "5",
  "VREG": "6",
  "V+": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-INS": "input", "-INF": "input", "V-_3": "power_in", OUT: "output", "V-_5": "passive", VREG: "output", "V+": "power_in", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:LTC6102HVxMS8";
  override referencePrefix = "U";
}

/**
 * Precision Zero Drift Current Sense Amplifier, 60V, DFN-8
 *
 * KiCad symbol: `Amplifier_Current:LTC6102xDD-1`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6102fe.pdf
 * Keywords: current sense amplifier.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.66x2.38mm.
 */
export class LTC6102xDD_1 extends Component.withPins({
  "-INS": "1",
  "-INF": "2",
  "EN": "3",
  "OUT": "4",
  "V-_5": "5",
  "VREG": "6",
  "V+": "7",
  "+IN": "8",
  "V-_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-INS": "input", "-INF": "input", EN: "input", OUT: "output", "V-_5": "power_in", VREG: "output", "V+": "power_in", "+IN": "input", "V-_9": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:LTC6102xDD-1";
  override referencePrefix = "U";
}

/**
 * Precision Zero Drift Current Sense Amplifier, 60V, MSOP-8
 *
 * KiCad symbol: `Amplifier_Current:LTC6102xMS8-1`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6102fe.pdf
 * Keywords: current sense amplifier.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC6102xMS8_1 extends Component.withPins({
  "-INS": "1",
  "-INF": "2",
  "EN": "3",
  "OUT": "4",
  "V-": "5",
  "VREG": "6",
  "V+": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-INS": "input", "-INF": "input", EN: "input", OUT: "output", "V-": "power_in", VREG: "output", "V+": "power_in", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:LTC6102xMS8-1";
  override referencePrefix = "U";
}

/**
 * 76V, High-Side, Current-Sense Amplifiers with Voltage Output, Unidirectional, 5V/V Gain, SOIC-8/uMAX-8
 *
 * KiCad symbol: `Amplifier_Current:MAX4080F`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4080-MAX4081.pdf
 * Keywords: current sense amplifier.
 */
export class MAX4080F extends Component.withPins({
  "RS+": "1",
  "Vcc": "2",
  "NC_3": "3",
  "GND": "4",
  "OUT": "5",
  "NC_6": "6",
  "NC_7": "7",
  "RS-": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RS+": "input", Vcc: "power_in", NC_3: "no_connect", GND: "power_in", OUT: "output", NC_6: "no_connect", NC_7: "no_connect", "RS-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:MAX4080F";
  override referencePrefix = "U";
}

/**
 * 76V, High-Side, Current-Sense Amplifiers with Voltage Output, Undirectional, 60V/V Gain, SOIC-8/uMAX-8
 *
 * KiCad symbol: `Amplifier_Current:MAX4080S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4080-MAX4081.pdf
 * Keywords: current sense amplifier.
 */
export class MAX4080S extends Component.withPins({
  "RS+": "1",
  "Vcc": "2",
  "NC_3": "3",
  "GND": "4",
  "OUT": "5",
  "NC_6": "6",
  "NC_7": "7",
  "RS-": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RS+": "input", Vcc: "power_in", NC_3: "no_connect", GND: "power_in", OUT: "output", NC_6: "no_connect", NC_7: "no_connect", "RS-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:MAX4080S";
  override referencePrefix = "U";
}

/**
 * 76V, High-Side, Current-Sense Amplifiers with Voltage Output, Unidirectional, 20V/V Gain, SOIC-8/uMAX-8
 *
 * KiCad symbol: `Amplifier_Current:MAX4080T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4080-MAX4081.pdf
 * Keywords: current sense amplifier.
 */
export class MAX4080T extends Component.withPins({
  "RS+": "1",
  "Vcc": "2",
  "NC_3": "3",
  "GND": "4",
  "OUT": "5",
  "NC_6": "6",
  "NC_7": "7",
  "RS-": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RS+": "input", Vcc: "power_in", NC_3: "no_connect", GND: "power_in", OUT: "output", NC_6: "no_connect", NC_7: "no_connect", "RS-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:MAX4080T";
  override referencePrefix = "U";
}

/**
 * 76V, High-Side, Current-Sense Amplifiers with Voltage Output, Bidirectional, 5V/V Gain, SOIC-8/uMAX-8
 *
 * KiCad symbol: `Amplifier_Current:MAX4081F`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4080-MAX4081.pdf
 * Keywords: current sense amplifier.
 */
export class MAX4081F extends Component.withPins({
  "RS+": "1",
  "Vcc": "2",
  "NC": "3",
  "GND": "4",
  "OUT": "5",
  "REF1B": "6",
  "REF1A": "7",
  "RS-": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RS+": "input", Vcc: "power_in", NC: "no_connect", GND: "power_in", OUT: "input", REF1B: "input", REF1A: "input", "RS-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:MAX4081F";
  override referencePrefix = "U";
}

/**
 * 76V, High-Side, Current-Sense Amplifiers with Voltage Outpute, Bidirectional, 60V/V Gain, SOIC-8/uMAX-8
 *
 * KiCad symbol: `Amplifier_Current:MAX4081S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4080-MAX4081.pdf
 * Keywords: current sense amplifier.
 */
export class MAX4081S extends Component.withPins({
  "RS+": "1",
  "Vcc": "2",
  "NC": "3",
  "GND": "4",
  "OUT": "5",
  "REF1B": "6",
  "REF1A": "7",
  "RS-": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RS+": "input", Vcc: "power_in", NC: "no_connect", GND: "power_in", OUT: "input", REF1B: "input", REF1A: "input", "RS-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:MAX4081S";
  override referencePrefix = "U";
}

/**
 * 76V, High-Side, Current-Sense Amplifiers with Voltage Output, Bidirectional, 20V/V Gain, SOIC-8/uMAX-8
 *
 * KiCad symbol: `Amplifier_Current:MAX4081T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX4080-MAX4081.pdf
 * Keywords: current sense amplifier.
 */
export class MAX4081T extends Component.withPins({
  "RS+": "1",
  "Vcc": "2",
  "NC": "3",
  "GND": "4",
  "OUT": "5",
  "REF1B": "6",
  "REF1A": "7",
  "RS-": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RS+": "input", Vcc: "power_in", NC: "no_connect", GND: "power_in", OUT: "input", REF1B: "input", REF1A: "input", "RS-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:MAX4081T";
  override referencePrefix = "U";
}

/**
 * Precision, High-Side, Current-Sense Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:MAX471`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://pdfserv.maximintegrated.com/en/ds/MAX471-MAX472.pdf
 * Keywords: current sense amplifier.
 */
export class MAX471 extends Component.withPins({
  "SHDN": "1",
  "RS+_2": "2",
  "RS+_3": "3",
  "GND": "4",
  "SIGN": "5",
  "RS-_6": "6",
  "RS-_7": "7",
  "OUT": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SHDN: "input", "RS+_2": "input", "RS+_3": "input", GND: "power_in", SIGN: "open_collector", "RS-_6": "input", "RS-_7": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:MAX471";
  override referencePrefix = "U";
}

/**
 * Precision, High-Side, Current-Sense Amplifiers, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Current:MAX472`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://pdfserv.maximintegrated.com/en/ds/MAX471-MAX472.pdf
 * Keywords: current sense amplifier.
 */
export class MAX472 extends Component.withPins({
  "SHDN": "1",
  "NC": "2",
  "SENSE+": "3",
  "GND": "4",
  "SIGN": "5",
  "SENSE-": "6",
  "VCC": "7",
  "OUT": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SHDN: "input", NC: "no_connect", "SENSE+": "input", GND: "power_in", SIGN: "open_collector", "SENSE-": "input", VCC: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:MAX472";
  override referencePrefix = "U";
}

/**
 * Current-Shunt Monitor, Voltage Output, Bi-Directional Zero-Drift, 200V/V Gain, SC-70-6
 *
 * KiCad symbol: `Amplifier_Current:NCS210`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NCS210R-D.PDF
 * Keywords: Current shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class NCS210 extends Component.withPins({
  "REF": "1",
  "GND": "2",
  "Vs": "3",
  "+IN": "4",
  "-IN": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "input", GND: "power_in", Vs: "power_in", "+IN": "input", "-IN": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:NCS210";
  override referencePrefix = "U";
}

/**
 * Current-Shunt Monitor, Voltage Output, Bi-Directional Zero-Drift, 500V/V Gain, SC-70-6
 *
 * KiCad symbol: `Amplifier_Current:NCS211`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NCS210R-D.PDF
 * Keywords: Current shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class NCS211 extends Component.withPins({
  "REF": "1",
  "GND": "2",
  "Vs": "3",
  "+IN": "4",
  "-IN": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "input", GND: "power_in", Vs: "power_in", "+IN": "input", "-IN": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:NCS211";
  override referencePrefix = "U";
}

/**
 * Current-Shunt Monitor, Voltage Output, Bi-Directional Zero-Drift, 50V/V Gain, SC-70-6
 *
 * KiCad symbol: `Amplifier_Current:NCS213`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NCS210R-D.PDF
 * Keywords: Current shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class NCS213 extends Component.withPins({
  "REF": "1",
  "GND": "2",
  "Vs": "3",
  "+IN": "4",
  "-IN": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "input", GND: "power_in", Vs: "power_in", "+IN": "input", "-IN": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:NCS213";
  override referencePrefix = "U";
}

/**
 * Current-Shunt Monitor, Voltage Output, Bi-Directional Zero-Drift, 100V/V Gain, SC-70-6
 *
 * KiCad symbol: `Amplifier_Current:NCS214`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NCS210R-D.PDF
 * Keywords: Current shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class NCS214 extends Component.withPins({
  "REF": "1",
  "GND": "2",
  "Vs": "3",
  "+IN": "4",
  "-IN": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "input", GND: "power_in", Vs: "power_in", "+IN": "input", "-IN": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:NCS214";
  override referencePrefix = "U";
}

/**
 * Current-Shunt Monitor, Voltage Output, Bi-Directional Zero-Drift, 200V/V Gain, SC-70-6
 *
 * KiCad symbol: `Amplifier_Current:NCV210`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NCS210R-D.PDF
 * Keywords: Current shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class NCV210 extends Component.withPins({
  "REF": "1",
  "GND": "2",
  "Vs": "3",
  "+IN": "4",
  "-IN": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "input", GND: "power_in", Vs: "power_in", "+IN": "input", "-IN": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:NCV210";
  override referencePrefix = "U";
}

/**
 * Current-Shunt Monitor, Voltage Output, Bi-Directional Zero-Drift, 500V/V Gain, SC-70-6
 *
 * KiCad symbol: `Amplifier_Current:NCV211`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NCS210R-D.PDF
 * Keywords: Current shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class NCV211 extends Component.withPins({
  "REF": "1",
  "GND": "2",
  "Vs": "3",
  "+IN": "4",
  "-IN": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "input", GND: "power_in", Vs: "power_in", "+IN": "input", "-IN": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:NCV211";
  override referencePrefix = "U";
}

/**
 * Current-Shunt Monitor, Voltage Output, Bi-Directional Zero-Drift, 50V/V Gain, SC-70-6
 *
 * KiCad symbol: `Amplifier_Current:NCV213`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NCS210R-D.PDF
 * Keywords: Current shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class NCV213 extends Component.withPins({
  "REF": "1",
  "GND": "2",
  "Vs": "3",
  "+IN": "4",
  "-IN": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "input", GND: "power_in", Vs: "power_in", "+IN": "input", "-IN": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:NCV213";
  override referencePrefix = "U";
}

/**
 * Current-Shunt Monitor, Voltage Output, Bi-Directional Zero-Drift, 100V/V Gain, SC-70-6
 *
 * KiCad symbol: `Amplifier_Current:NCV214`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NCS210R-D.PDF
 * Keywords: Current shunt monitor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class NCV214 extends Component.withPins({
  "REF": "1",
  "GND": "2",
  "Vs": "3",
  "+IN": "4",
  "-IN": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "input", GND: "power_in", Vs: "power_in", "+IN": "input", "-IN": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:NCV214";
  override referencePrefix = "U";
}

/**
 * High-Side Current Monitor, SOT-23
 *
 * KiCad symbol: `Amplifier_Current:ZXCT1009F`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ZXCT1009.pdf
 * Keywords: High side current monitor shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXCT1009F extends Component.withPins({
  "Vs-": "1",
  "Vs+": "2",
  "Iout": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vs-": "input", "Vs+": "input", Iout: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:ZXCT1009F";
  override referencePrefix = "U";
}

/**
 * High-Side Current Monitor, SM8
 *
 * KiCad symbol: `Amplifier_Current:ZXCT1009T8`. Reference prefix: `U`.
 * Footprint filters: Zetex*SM8*.
 * @see https://www.diodes.com/assets/Datasheets/ZXCT1009.pdf
 * Keywords: High side current monitor shunt.
 * Default footprint: Package_SO:Zetex_SM8.
 */
export class ZXCT1009T8 extends Component.withPins({
  "Vs-": "1",
  "NC_2": "2",
  "Vs+": "3",
  "Iout": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vs-": "input", NC_2: "no_connect", "Vs+": "input", Iout: "output", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:ZXCT1009T8";
  override referencePrefix = "U";
}

/**
 * Enhanced High-Side Current Monitors, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:ZXCT1010`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ZXCT1010.pdf
 * Keywords: High side current monitor shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class ZXCT1010 extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "OUT": "3",
  "Vs+": "4",
  "Vs-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", "Vs+": "input", "Vs-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:ZXCT1010";
  override referencePrefix = "U";
}

/**
 * Low Power High-Side Current Monitors, SOT-23
 *
 * KiCad symbol: `Amplifier_Current:ZXCT1107`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ZXCT1107_10.pdf
 * Keywords: High side current monitor shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXCT1107 extends Component.withPins({
  "Vs+": "1",
  "Vs-": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vs+": "input", "Vs-": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:ZXCT1107";
  override referencePrefix = "U";
}

/**
 * Low Power High-Side Current Monitors, SOT-23
 *
 * KiCad symbol: `Amplifier_Current:ZXCT1109`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ZXCT1107_10.pdf
 * Keywords: High side current monitor shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXCT1109 extends Component.withPins({
  "Vs-": "1",
  "Vs+": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vs-": "input", "Vs+": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:ZXCT1109";
  override referencePrefix = "U";
}

/**
 * Low Power High-Side Current Monitors, SOT-23-5
 *
 * KiCad symbol: `Amplifier_Current:ZXCT1110`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ZXCT1107_10.pdf
 * Keywords: High side current monitor shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class ZXCT1110 extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "OUT": "3",
  "Vs+": "4",
  "Vs-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", "Vs+": "input", "Vs-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Current:ZXCT1110";
  override referencePrefix = "U";
}
