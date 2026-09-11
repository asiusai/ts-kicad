// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 100 MHz to 2.5 GHz, 80 dB Logarithmic Detector / Controller, MSOP-8
 *
 * KiCad symbol: `RF_Amplifier:AD8313xRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8313.pdf
 * Keywords: RF LOG POWER DETECTOR.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class AD8313xRM extends Component.withPins({
  "VPOS_1": "1",
  "INHI": "2",
  "INLO": "3",
  "VPOS_4": "4",
  "PWDN": "5",
  "COMM": "6",
  "VSET": "7",
  "VOUT": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VPOS_1: "power_in", INHI: "input", INLO: "input", VPOS_4: "power_in", PWDN: "input", COMM: "power_in", VSET: "input", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:AD8313xRM";
  override referencePrefix = "U";
}

/**
 * 20-6000MHz RF/IF +20dB gain block, LFCSP-8
 *
 * KiCad symbol: `RF_Amplifier:ADL5542`. Reference prefix: `U`.
 * Footprint filters: Analog*LFCSP*1EP*3x3mm*P0.5mm*EP1.53x1.85mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADL5542.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_CSP:Analog_LFCSP-8-1EP_3x3mm_P0.5mm_EP1.53x1.85mm.
 */
export class ADL5542 extends Component.withPins({
  "P1": "1",
  "G": "2",
  "CB": "4",
  "V+": "5",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", G: "power_in", CB: "passive", "V+": "power_in", P8: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:ADL5542";
  override referencePrefix = "U";
}

/**
 * 20-6000MHz RF/IF +15dB gain block, LFCSP-8
 *
 * KiCad symbol: `RF_Amplifier:ADL5541`. Reference prefix: `U`.
 * Footprint filters: Analog*LFCSP*1EP*3x3mm*P0.5mm*EP1.53x1.85mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADL5541.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_CSP:Analog_LFCSP-8-1EP_3x3mm_P0.5mm_EP1.53x1.85mm.
 */
export class ADL5541 extends Component.withPins({
  "P1": "1",
  "G": "2",
  "CB": "4",
  "V+": "5",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", G: "power_in", CB: "passive", "V+": "power_in", P8: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:ADL5541";
  override referencePrefix = "U";
}

/**
 * 50MHz to 4000MHz, GaAs pHEMT low noise MMIC amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:SPF5189Z`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see www.qorvo.com/products/d/da001910
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class SPF5189Z extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:SPF5189Z";
  override referencePrefix = "U";
}

/**
 * 30-6000MHz RF/IF +18.4dB gain block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:ADL5610`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADL5610.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class ADL5610 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:ADL5610";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +24.3dB @ 2150MHz, 5V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2866`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2866.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2866 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2866";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +20.2dB @ 2150MHz, 3.3V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2800`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2800.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2800 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2800";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +23dB @ 2120MHz, 3.3V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2801`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2801.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2801 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2801";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +23.6dB @ 950MHz, 3V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2803`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2803.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2803 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2803";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +24.7dB @ 2150MHz, 3.3V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2815`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2815.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2815 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2815";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +24.4dB @ 2150MHz, 3.3V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2817`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2817.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2817 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2817";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +30dB @ 2150MHz, 3.3V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2818`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2818.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2818 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2818";
  override referencePrefix = "U";
}

/**
 * MIC wideband amplifier, DC-2.2GHz, +24dB @ 950MHz, 5V, SOT-363-6
 *
 * KiCad symbol: `RF_Amplifier:BGA2850`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2850.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2850 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2850";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +24.8dB @ 950MHz, 5V, SOT-363-6
 *
 * KiCad symbol: `RF_Amplifier:BGA2851`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2851.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2851 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2851";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +32.2dB @ 950MHz, 5V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2865`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2865.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2865 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2865";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +26.4dB @ 2150MHz, 5V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2867`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2867.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2867 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2867";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +31.7dB @ 950MHz, 5V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2869`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2869.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2869 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2869";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +31.1dB @ 500MHz, 2.5V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2870`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2870.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2870 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2870";
  override referencePrefix = "U";
}

/**
 * MMIC wideband amplifier, DC-2.2GHz, +31dB @ 750MHz, 2.5V, SOT-363
 *
 * KiCad symbol: `RF_Amplifier:BGA2874`. Reference prefix: `U`.
 * Footprint filters: SOT*363*.
 * @see https://www.nxp.com/docs/en/data-sheet/BGA2874.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BGA2874 extends Component.withPins({
  "Vcc": "1",
  "G_2": "2",
  "P3": "3",
  "G_4": "4",
  "G_5": "5",
  "P6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", G_2: "power_in", P3: "output", G_4: "passive", G_5: "passive", P6: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:BGA2874";
  override referencePrefix = "U";
}

/**
 * Broadband Efficient RF Power Amplifier
 *
 * KiCad symbol: `RF_Amplifier:CMX901`. Reference prefix: `U`.
 * Footprint filters: QFN*28*1EP*5x5mm*P0.5mm*EP3.35x3.35mm*.
 * @see https://www.cmlmicro.com/wp-content/uploads/2017/10/CMX901_ds.pdf
 * Keywords: RF POWER AMPLIFIER BROADBAND.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm_ThermalVias.
 */
export class CMX901 extends Component.withPins({
  "GND_2": "2",
  "GND_4": "4",
  "GND_6": "6",
  "GND_7": "7",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "GND_15": "15",
  "GND_21": "21",
  "GND_22": "22",
  "GND_23": "23",
  "GND_25": "25",
  "GND_27": "27",
  "GND_29": "29",
  "VDD1": "1",
  "RFIN_3": "3",
  "RFIN_5": "5",
  "VGS1": "8",
  "VA": "14",
  "RFOUT_16": "16",
  "RFOUT_17": "17",
  "RFOUT_18": "18",
  "RFOUT_19": "19",
  "RFOUT_20": "20",
  "VGS3": "24",
  "VDD2": "26",
  "VGS2": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_2: "power_in", GND_4: "passive", GND_6: "passive", GND_7: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", GND_13: "passive", GND_15: "passive", GND_21: "passive", GND_22: "passive", GND_23: "passive", GND_25: "passive", GND_27: "passive", GND_29: "passive", VDD1: "power_in", RFIN_3: "input", RFIN_5: "input", VGS1: "input", VA: "power_in", RFOUT_16: "output", RFOUT_17: "output", RFOUT_18: "output", RFOUT_19: "output", RFOUT_20: "output", VGS3: "input", VDD2: "power_in", VGS2: "input", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:CMX901";
  override referencePrefix = "U";
}

/**
 * DC-8000MHz +11.8dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-1`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-1+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_1 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-1";
  override referencePrefix = "U";
}

/**
 * DC-7000MHz +11.6dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-19`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-19+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_19 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-19";
  override referencePrefix = "U";
}

/**
 * DC-8000MHz +14.8dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-2`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-2+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_2 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-2";
  override referencePrefix = "U";
}

/**
 * DC-8000MHz +13.1dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-21`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-21+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_21 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-21";
  override referencePrefix = "U";
}

/**
 * DC-6000MHz +16.6dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-24`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-24+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_24 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-24";
  override referencePrefix = "U";
}

/**
 * DC-7000MHz +19.7dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-29`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-29+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_29 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-29";
  override referencePrefix = "U";
}

/**
 * DC-3000MHz +19.1dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-3`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-3+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_3 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-3";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +17.5dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-33`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-33+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_33 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-33";
  override referencePrefix = "U";
}

/**
 * DC-7000MHz +19.7dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-39`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-39+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_39 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-39";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +13.5dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-4`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-4+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_4 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-4";
  override referencePrefix = "U";
}

/**
 * DC-5000MHz +13.6dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-49`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-49+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_49 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-49";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +13.4dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-4F`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-4F+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_4F extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-4F";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +17.5dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-5`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-5+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_5 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-5";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +16.1dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-51`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-51+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_51 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-51";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +15.9dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-51F`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-51F+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_51F extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-51F";
  override referencePrefix = "U";
}

/**
 * DC-2000MHz +17.8dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-52`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-52+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_52 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-52";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +18.5dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-55`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-55+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_55 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-55";
  override referencePrefix = "U";
}

/**
 * DC-5000MHz +18.3dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-59`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-59+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_59 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-59";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +17.4dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-5F`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-5F+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_5F extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-5F";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +11.3dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-6`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-6+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_6 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-6";
  override referencePrefix = "U";
}

/**
 * DC-4000MHz +11.6dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-6F`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-6F+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_6F extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-6F";
  override referencePrefix = "U";
}

/**
 * DC-1000MHz +21.8dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-74`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-74+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_74 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-74";
  override referencePrefix = "U";
}

/**
 * DC-6000MHz +16.7dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-84`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-84+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_84 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-84";
  override referencePrefix = "U";
}

/**
 * DC-3000MHz +18.2dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GALI-S66`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GALI-S66+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GALI_S66 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GALI-S66";
  override referencePrefix = "U";
}

/**
 * 10-12000MHz +16.9dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GVA-123`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GVA-123+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GVA_123 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GVA-123";
  override referencePrefix = "U";
}

/**
 * 10-5000MHz +19.8dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GVA-60`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GVA-60+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GVA_60 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GVA-60";
  override referencePrefix = "U";
}

/**
 * 10-6000MHz +15.4dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GVA-62`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GVA-62+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GVA_62 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GVA-62";
  override referencePrefix = "U";
}

/**
 * 10-6000MHz +20dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GVA-63`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GVA-63+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GVA_63 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GVA-63";
  override referencePrefix = "U";
}

/**
 * DC-6000MHz +10dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GVA-81`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GVA-81+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GVA_81 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GVA-81";
  override referencePrefix = "U";
}

/**
 * DC-7000MHz +13.8dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GVA-82`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GVA-82+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GVA_82 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GVA-82";
  override referencePrefix = "U";
}

/**
 * DC-7000MHz +17.1dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GVA-83`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GVA-83+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GVA_83 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GVA-83";
  override referencePrefix = "U";
}

/**
 * DC-7000MHz +16dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GVA-84`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GVA-84+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GVA_84 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GVA-84";
  override referencePrefix = "U";
}

/**
 * 10-9000MHz +16.9dB Gain Block, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:GVA-93`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/GVA-93+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class GVA_93 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:GVA-93";
  override referencePrefix = "U";
}

/**
 * 10 W (40 dBm), 0.01 GHz to 1.1 GHz, GaN Power Amplifier, LFCSP-32
 *
 * KiCad symbol: `RF_Amplifier:HMC1099PM5E`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/HMC1099PM5E.pdf
 * Keywords: RF Amplifier.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class HMC1099PM5E extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "P4": "4",
  "P5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GND_15": "15",
  "GND_16": "16",
  "GND_17": "17",
  "GND_18": "18",
  "GND_19": "19",
  "P20": "20",
  "P21": "21",
  "GND_22": "22",
  "GND_23": "23",
  "GND_24": "24",
  "GND_25": "25",
  "GND_26": "26",
  "GND_27": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", P4: "input", P5: "input", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", GND_13: "passive", GND_14: "passive", GND_15: "passive", GND_16: "passive", GND_17: "passive", GND_18: "passive", GND_19: "passive", P20: "output", P21: "passive", GND_22: "passive", GND_23: "passive", GND_24: "passive", GND_25: "passive", GND_26: "passive", GND_27: "passive", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:HMC1099PM5E";
  override referencePrefix = "U";
}

/**
 * 10 W (40 dBm), 0.01 GHz to 2.8 GHz, GaN Power Amplifier, LFCSP-32
 *
 * KiCad symbol: `RF_Amplifier:HMC8500PM5E`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/HMC8500PM5E.pdf
 * Keywords: RF Amplifier.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class HMC8500PM5E extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "P4": "4",
  "P5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GND_15": "15",
  "GND_16": "16",
  "GND_17": "17",
  "GND_18": "18",
  "GND_19": "19",
  "P20": "20",
  "P21": "21",
  "GND_22": "22",
  "GND_23": "23",
  "GND_24": "24",
  "GND_25": "25",
  "GND_26": "26",
  "GND_27": "27",
  "GND_28": "28",
  "GND_29": "29",
  "GND_30": "30",
  "GND_31": "31",
  "GND_32": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", GND_3: "passive", P4: "input", P5: "input", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", GND_13: "passive", GND_14: "passive", GND_15: "passive", GND_16: "passive", GND_17: "passive", GND_18: "passive", GND_19: "passive", P20: "output", P21: "passive", GND_22: "passive", GND_23: "passive", GND_24: "passive", GND_25: "passive", GND_26: "passive", GND_27: "passive", GND_28: "passive", GND_29: "passive", GND_30: "passive", GND_31: "passive", GND_32: "passive", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:HMC8500PM5E";
  override referencePrefix = "U";
}

/**
 * GPS/GNSS Ultra-Low Current Low-Noise Amplifier, +19dB @ 1.57GHz, WLP-4
 *
 * KiCad symbol: `RF_Amplifier:MAX2679`. Reference prefix: `U`.
 * Footprint filters: WLP*0.83x0.83mm*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX2679-MAX2679B.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_BGA:WLP-4_0.83x0.83mm_P0.4mm.
 */
export class MAX2679 extends Component.withPins({
  "Vcc": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "G": "B2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", PA2: "output", PB1: "input", G: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:MAX2679";
  override referencePrefix = "U";
}

/**
 * GPS/GNSS Ultra-Low Current Low-Noise Amplifier, +16.5dB @ 1.57GHz, WLP-4
 *
 * KiCad symbol: `RF_Amplifier:MAX2679B`. Reference prefix: `U`.
 * Footprint filters: WLP*0.83x0.83mm*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX2679-MAX2679B.pdf
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_BGA:WLP-4_0.83x0.83mm_P0.4mm.
 */
export class MAX2679B extends Component.withPins({
  "Vcc": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "G": "B2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", PA2: "output", PB1: "input", G: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:MAX2679B";
  override referencePrefix = "U";
}

/**
 * High Efficiency/Linearity Amplifier high linearity broadband amplifier, QFN-12
 *
 * KiCad symbol: `RF_Amplifier:MMZ09332BT1`. Reference prefix: `U`.
 * Footprint filters: QFN*3x3mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MMZ09332B.pdf
 * Keywords: RF.
 * Default footprint: Package_DFN_QFN:QFN-12-1EP_3x3mm_P0.5mm_EP1.6x1.6mm_ThermalVias.
 */
export class MMZ09332BT1 extends Component.withPins({
  "VBA1": "1",
  "VBIAS": "2",
  "RF_IN": "3",
  "NC_4": "4",
  "NC_5": "5",
  "PDET": "6",
  "VCC2/RFOUT_7": "7",
  "VCC2/RFOUT_8": "8",
  "VCC2/RFOUT_9": "9",
  "POWER_DOWN": "10",
  "VCC1": "11",
  "VBA2": "12",
  "GND": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBA1: "input", VBIAS: "power_in", RF_IN: "input", NC_4: "no_connect", NC_5: "no_connect", PDET: "output", "VCC2/RFOUT_7": "input", "VCC2/RFOUT_8": "input", "VCC2/RFOUT_9": "input", POWER_DOWN: "input", VCC1: "power_in", VBA2: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:MMZ09332BT1";
  override referencePrefix = "U";
}

/**
 * 50-6000MHz +15.9dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PGA-102`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PGA-102+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PGA_102 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PGA-102";
  override referencePrefix = "U";
}

/**
 * 50-6000MHz +15.1dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PGA-1021`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PGA-1021+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PGA_1021 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PGA-1021";
  override referencePrefix = "U";
}

/**
 * 50-4000MHz +11dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PGA-103`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PGA-103+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PGA_103 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PGA-103";
  override referencePrefix = "U";
}

/**
 * 40-2600MHz +15.1dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PGA-105`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PGA-105+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PGA_105 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PGA-105";
  override referencePrefix = "U";
}

/**
 * 50-1500MHz +16.9dB CATV Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PGA-106-75`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PGA-106-75+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PGA_106_75 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PGA-106-75";
  override referencePrefix = "U";
}

/**
 * 5-250MHz +17.9dB CATV Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PGA-106R-75`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PGA-106R-75+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PGA_106R_75 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PGA-106R-75";
  override referencePrefix = "U";
}

/**
 * 5-1500MHz +15.5dB CATV Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PGA-122-75`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PGA-122-75+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PGA_122_75 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PGA-122-75";
  override referencePrefix = "U";
}

/**
 * 5-300MHz +15.6dB CATV Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PGA-32-75`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PGA-32-75+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PGA_32_75 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PGA-32-75";
  override referencePrefix = "U";
}

/**
 * 50-6000MHz +13.5dB Linear Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PHA-1`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PHA-1+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PHA_1 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PHA-1";
  override referencePrefix = "U";
}

/**
 * 50-1500MHz +15.2dB Linear Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PHA-101`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PHA-101+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PHA_101 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PHA-101";
  override referencePrefix = "U";
}

/**
 * 1-1000MHz +22.7dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PHA-13HLN`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PHA-13HLN+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PHA_13HLN extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PHA-13HLN";
  override referencePrefix = "U";
}

/**
 * 1-1000MHz +22.4dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PHA-13LN`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PHA-13LN+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PHA_13LN extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PHA-13LN";
  override referencePrefix = "U";
}

/**
 * 50-6000MHz +13.8dB Linear Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PHA-1H`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PHA-1H+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PHA_1H extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PHA-1H";
  override referencePrefix = "U";
}

/**
 * 30-2000MHz +21.3dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PHA-23HLN`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PHA-23HLN+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PHA_23HLN extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PHA-23HLN";
  override referencePrefix = "U";
}

/**
 * 30-2000MHz +21dB Low Noise Amplifier, SOT-89
 *
 * KiCad symbol: `RF_Amplifier:PHA-23LN`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see https://www.minicircuits.com/pdfs/PHA-23LN+.pdf
 * Keywords: RF amplifier.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class PHA_23LN extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "output", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:PHA-23LN";
  override referencePrefix = "U";
}

/**
 * 100-6000MHz RF/IF +19.5dB gain block, DFN-8
 *
 * KiCad symbol: `RF_Amplifier:QPL9547`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.5mm*.
 * @see https://www.qorvo.com/products/d/da007268
 * Keywords: RF GAIN BLOCK.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP0.8x1.6mm.
 */
export class QPL9547 extends Component.withPins({
  "Vb": "1",
  "P2": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "~{EN}": "6",
  "P7": "7",
  "GND_8": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vb: "power_in", P2: "input", GND_3: "power_in", GND_4: "passive", GND_5: "passive", "~{EN}": "passive", P7: "output", GND_8: "passive", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:QPL9547";
  override referencePrefix = "U";
}

/**
 * 5 MHz to 4000 MHz, Low-Noise SiGe HBT MMIC Amplifier, DFN-8
 *
 * KiCad symbol: `RF_Amplifier:SGL0622Z`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.5mm*.
 * @see https://www.qorvo.com/products/d/da001879
 * Keywords: rf gain block.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP0.6x1.2mm.
 */
export class SGL0622Z extends Component.withPins({
  "GND_9": "9",
  "P1": "1",
  "GND_2": "2",
  "GND_3": "3",
  "P4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_9: "passive", P1: "output", GND_2: "power_in", GND_3: "passive", P4: "input", GND_5: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:SGL0622Z";
  override referencePrefix = "U";
}

/**
 * 4.9-5.9GHz, 13dB Low-Noise Amplifier, QFN-6
 *
 * KiCad symbol: `RF_Amplifier:SKY65404`. Reference prefix: `U`.
 * Footprint filters: Skyworks*SKY65404*.
 * @see http://www.skyworksinc.com/uploads/documents/SKY65404_31_201512K.pdf
 * Keywords: LNA low noise amplifier RF.
 * Default footprint: RF:Skyworks_SKY65404-31.
 */
export class SKY65404 extends Component.withPins({
  "VENABLE": "1",
  "GND_2": "2",
  "RFIN": "3",
  "RFOUT": "4",
  "GND_5": "5",
  "VCC": "6",
  "EP": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VENABLE: "input", GND_2: "power_in", RFIN: "input", RFOUT: "output", GND_5: "passive", VCC: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:SKY65404";
  override referencePrefix = "U";
}

/**
 * 6GHz, 12dB RF Gain Block, WSON-8
 *
 * KiCad symbol: `RF_Amplifier:TRF37A73`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/trf37a73.pdf
 * Keywords: gain block RF.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 */
export class TRF37A73 extends Component.withPins({
  "VCC": "1",
  "RFIN": "2",
  "NC_3": "3",
  "NC_4": "4",
  "PWDN": "5",
  "NC_6": "6",
  "RFOUT": "7",
  "NC_8": "8",
  "GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", RFIN: "input", NC_3: "no_connect", NC_4: "no_connect", PWDN: "passive", NC_6: "no_connect", RFOUT: "output", NC_8: "no_connect", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "RF_Amplifier:TRF37A73";
  override referencePrefix = "U";
}
