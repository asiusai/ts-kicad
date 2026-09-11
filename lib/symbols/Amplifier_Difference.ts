// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * High Common-Mode Voltage, Programmable Gain Difference Amplifier, ±120V, Gain = 0.1 to 100, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Difference:AD628`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD628.pdf
 * Keywords: difference amplifier.
 */
export class AD628 extends Component.withPins({
  "+": "1",
  "V-": "2",
  "VREF": "3",
  "CFILT": "4",
  "P5": "5",
  "RG": "6",
  "V+": "7",
  "-": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+": "input", "V-": "power_in", VREF: "passive", CFILT: "passive", P5: "output", RG: "passive", "V+": "power_in", "-": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:AD628";
  override referencePrefix = "U";
}

/**
 * 65V (35V) Zero-Drift, High Voltage, Bidirectional, Difference Amplifier, 20V/V gain, bandwidth 150kHz, Vcc=5V (3.3V), SOIC-8
 *
 * KiCad symbol: `Amplifier_Difference:AD8207`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8207.pdf
 * Keywords: highside HS current sense difference amplifier linear buffered.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AD8207 extends Component.withPins({
  "-IN": "1",
  "GND": "2",
  "Vref2": "3",
  "RANGE": "4",
  "OUT": "5",
  "V+": "6",
  "Vref1": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", GND: "power_in", Vref2: "input", RANGE: "input", OUT: "output", "V+": "power_in", Vref1: "input", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:AD8207";
  override referencePrefix = "U";
}

/**
 * Quad, 235 MHz, 6-30 dB gain, ±2.5 V to ±5 V supply, DC-Coupled VGA and Differential Output Amplifier, QFN-40
 *
 * KiCad symbol: `Amplifier_Difference:AD8264`. Reference prefix: `U`.
 * Footprint filters: *QFN*6x6mm*P0.5mm*EP4.1x4.1mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8264.pdf
 * Keywords: difference amplifier variable.
 * Default footprint: Package_DFN_QFN:HVQFN-40-1EP_6x6mm_P0.5mm_EP4.1x4.1mm.
 */
export class AD8264 extends Component.withPins({
  "IPN1": "1",
  "OPP1": "2",
  "OPP2": "3",
  "IPN2": "4",
  "IPP2": "5",
  "IPP3": "6",
  "IPN3": "7",
  "OPP3": "8",
  "OPP4": "9",
  "IPN4": "10",
  "IPP4": "11",
  "COMM_12": "12",
  "GNH4": "13",
  "GNH3": "14",
  "VOCM": "15",
  "VPOS_16": "16",
  "VNEG_17": "17",
  "OSF4": "18",
  "OFS3": "19",
  "VGA4": "20",
  "VOL4": "21",
  "VOH4": "22",
  "VOH3": "23",
  "VOL3": "24",
  "VGA3": "25",
  "VGA2": "26",
  "VOL2": "27",
  "VOH2": "28",
  "VOH1": "29",
  "VOL1": "30",
  "VGA1": "31",
  "OFS2": "32",
  "OFS1": "33",
  "VNEG_34": "34",
  "VPOS_35": "35",
  "GNLO": "36",
  "GNH2": "37",
  "GNH1": "38",
  "COMM_39": "39",
  "IPP1": "40",
  "COMM_41": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IPN1: "passive", OPP1: "output", OPP2: "output", IPN2: "passive", IPP2: "input", IPP3: "input", IPN3: "passive", OPP3: "output", OPP4: "output", IPN4: "passive", IPP4: "input", COMM_12: "power_in", GNH4: "input", GNH3: "input", VOCM: "input", VPOS_16: "power_in", VNEG_17: "power_in", OSF4: "input", OFS3: "input", VGA4: "output", VOL4: "output", VOH4: "output", VOH3: "output", VOL3: "output", VGA3: "output", VGA2: "output", VOL2: "output", VOH2: "output", VOH1: "output", VOL1: "output", VGA1: "output", OFS2: "input", OFS1: "input", VNEG_34: "passive", VPOS_35: "passive", GNLO: "input", GNH2: "input", GNH1: "input", COMM_39: "passive", IPP1: "input", COMM_41: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:AD8264";
  override referencePrefix = "U";
}

/**
 * Low Power, Wide Supply Range, Low Cost Unity-Gain Difference Amplifier, SOIC-8/MSOP-8
 *
 * KiCad symbol: `Amplifier_Difference:AD8276`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8276_8277.pdf
 * Keywords: difference amplifier.
 */
export class AD8276 extends Component.withPins({
  "REF": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "SENSE": "5",
  "P6": "6",
  "V+": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "passive", "-": "passive", "+": "passive", "V-": "power_in", SENSE: "passive", P6: "output", "V+": "power_in", P8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:AD8276";
  override referencePrefix = "U";
}

/**
 * Precision, Selectable Gain, Fully Differential Funnel Amplifier, LFCSP-16
 *
 * KiCad symbol: `Amplifier_Difference:AD8475ACPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8475.pdf
 * Keywords: selectable gain ADC driver.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 */
export class AD8475ACPZ extends Component.withPins({
  "+IN0.4x_1": "1",
  "+IN0.8x": "2",
  "-IN0.8x": "3",
  "-IN0.4x_4": "4",
  "-IN0.4x_5": "5",
  "+Vs_6": "6",
  "+Vs_7": "7",
  "+Vs_8": "8",
  "VOCM": "9",
  "+": "10",
  "-": "11",
  "NC": "12",
  "-Vs_13": "13",
  "-Vs_14": "14",
  "-Vs_15": "15",
  "+IN0.4x_16": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+IN0.4x_1": "input", "+IN0.8x": "input", "-IN0.8x": "input", "-IN0.4x_4": "input", "-IN0.4x_5": "input", "+Vs_6": "power_in", "+Vs_7": "passive", "+Vs_8": "passive", VOCM: "power_in", "+": "output", "-": "output", NC: "no_connect", "-Vs_13": "power_in", "-Vs_14": "passive", "-Vs_15": "passive", "+IN0.4x_16": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:AD8475ACPZ";
  override referencePrefix = "U";
}

/**
 * Precision, Selectable Gain, Fully Differential Funnel Amplifier, MSOP-10
 *
 * KiCad symbol: `Amplifier_Difference:AD8475xRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD8475.pdf
 * Keywords: selectable gain ADC driver.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD8475xRMZ extends Component.withPins({
  "-IN0.8x": "1",
  "-IN0.4x": "2",
  "+Vs": "3",
  "VOCM": "4",
  "+": "5",
  "-": "6",
  "NC": "7",
  "-Vs": "8",
  "+IN0.4x": "9",
  "+IN0.8x": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN0.8x": "input", "-IN0.4x": "input", "+Vs": "power_in", VOCM: "power_in", "+": "output", "-": "output", NC: "no_connect", "-Vs": "power_in", "+IN0.4x": "input", "+IN0.8x": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:AD8475xRMZ";
  override referencePrefix = "U";
}

/**
 * Ultralow distortion, high speed fully-differential amplifier, ADC Driver, 1GHz GBP, 3x3mm LFCSP-16
 *
 * KiCad symbol: `Amplifier_Difference:ADA4938-1`. Reference prefix: `U`.
 * Footprint filters: LFCSP*EP?3x3mm?P0.5mm?EP1.3x1.3mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4938-1_4938-2.pdf
 * Keywords: Fully-Differential Amplifier ADC Driver.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.3x1.3mm_ThermalVias.
 */
export class ADA4938_1 extends Component.withPins({
  "FB-": "1",
  "+": "2",
  "-": "3",
  "FB+": "4",
  "V_{OCM}": "9",
  "P10": "10",
  "P11": "11",
  "V+_5": "5",
  "V+_6": "6",
  "V+_7": "7",
  "V+_8": "8",
  "~{PD}": "12",
  "V-_13": "13",
  "V-_14": "14",
  "V-_15": "15",
  "V-_16": "16",
  "PAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "FB-": "output", "+": "input", "-": "input", "FB+": "output", "V_{OCM}": "input", P10: "output", P11: "output", "V+_5": "power_in", "V+_6": "passive", "V+_7": "passive", "V+_8": "passive", "~{PD}": "input", "V-_13": "power_in", "V-_14": "passive", "V-_15": "passive", "V-_16": "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:ADA4938-1";
  override referencePrefix = "U";
}

/**
 * Ultralow Power, Low Distortion, Fully Differential ADC Drivers, LFCSP-16
 *
 * KiCad symbol: `Amplifier_Difference:ADA4940-1xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4940-1_4940-2.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.3x1.3mm_ThermalVias.
 */
export class ADA4940_1xCP extends Component.withPins({
  "-FB": "1",
  "+IN": "2",
  "-IN": "3",
  "+FB": "4",
  "VOCM": "9",
  "+OUT": "10",
  "-OUT": "11",
  "~{DISABLE}": "12",
  "+Vs_5": "5",
  "+Vs_6": "6",
  "+Vs_7": "7",
  "+Vs_8": "8",
  "-Vs_13": "13",
  "-Vs_14": "14",
  "-Vs_15": "15",
  "-Vs_16": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-FB": "input", "+IN": "input", "-IN": "input", "+FB": "input", VOCM: "input", "+OUT": "output", "-OUT": "output", "~{DISABLE}": "input", "+Vs_5": "power_in", "+Vs_6": "passive", "+Vs_7": "passive", "+Vs_8": "passive", "-Vs_13": "power_in", "-Vs_14": "passive", "-Vs_15": "passive", "-Vs_16": "passive", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:ADA4940-1xCP";
  override referencePrefix = "U";
}

/**
 * Ultralow Power, Low Distortion, Fully Differential ADC Drivers, Dual-Channel, LFCSP-24
 *
 * KiCad symbol: `Amplifier_Difference:ADA4940-2`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4940-1_4940-2.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class ADA4940_2 extends Component.withPins({
  "-IN1": "1",
  "+FB1": "2",
  "VOCM1": "17",
  "+1": "18",
  "-1": "19",
  "~{DISABLE1}": "20",
  "-FB1": "23",
  "+IN1": "24",
  "-FB2_5": "5",
  "+IN2": "6",
  "-IN2": "7",
  "+FB2_8": "8",
  "VOCM2": "11",
  "+2": "12",
  "-2": "13",
  "~{DISABLE2}": "14",
  "+FB2_3": "3",
  "+FB2_4": "4",
  "-FB2_21": "21",
  "-FB2_22": "22",
  "EP": "25",
  "+FB2_9": "9",
  "+FB2_10": "10",
  "-FB2_15": "15",
  "-FB2_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN1": "input", "+FB1": "input", VOCM1: "input", "+1": "output", "-1": "output", "~{DISABLE1}": "input", "-FB1": "input", "+IN1": "input", "-FB2_5": "input", "+IN2": "input", "-IN2": "input", "+FB2_8": "input", VOCM2: "input", "+2": "output", "-2": "output", "~{DISABLE2}": "input", "+FB2_3": "input", "+FB2_4": "input", "-FB2_21": "input", "-FB2_22": "input", EP: "passive", "+FB2_9": "input", "+FB2_10": "input", "-FB2_15": "input", "-FB2_16": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:ADA4940-2";
  override referencePrefix = "U";
}

/**
 * Low Power, Wide Supply Range, Low Cost Unity-Gain Difference Amplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Difference:INA105KP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina105.pdf
 * Keywords: difference amplifier.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class INA105KP extends Component.withPins({
  "REF": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "SENSE": "5",
  "P6": "6",
  "V+": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "passive", "-": "passive", "+": "passive", "V-": "power_in", SENSE: "passive", P6: "output", "V+": "power_in", P8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:INA105KP";
  override referencePrefix = "U";
}

/**
 * Low Power, Wide Supply Range, Low Cost Unity-Gain Difference Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Difference:INA105KU`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina105.pdf
 * Keywords: difference amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA105KU extends Component.withPins({
  "REF": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "SENSE": "5",
  "P6": "6",
  "V+": "7",
  "P8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "passive", "-": "passive", "+": "passive", "V-": "power_in", SENSE: "passive", P6: "output", "V+": "power_in", P8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:INA105KU";
  override referencePrefix = "U";
}

/**
 * Single Differential Amplifier, TO-5-10
 *
 * KiCad symbol: `Amplifier_Difference:LM733CH`. Reference prefix: `U`.
 * Footprint filters: TO?5*.
 * @see http://www.soemtron.org/downloads/disposals/lm733cn.pdf
 * Keywords: single differential video opamp.
 * Default footprint: Package_TO_SOT_THT:TO-5-10.
 */
export class LM733CH extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "2B": "3",
  "1B": "4",
  "V-": "5",
  "P6": "6",
  "P7": "7",
  "V+": "8",
  "1A": "9",
  "2A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", "2B": "passive", "1B": "passive", "V-": "power_in", P6: "output", P7: "output", "V+": "power_in", "1A": "passive", "2A": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:LM733CH";
  override referencePrefix = "U";
}

/**
 * Single Differential Amplifier, DIP-14
 *
 * KiCad symbol: `Amplifier_Difference:LM733CN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.soemtron.org/downloads/disposals/lm733cn.pdf
 * Keywords: single differential video opamp.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class LM733CN extends Component.withPins({
  "P1": "1",
  "NC_2": "2",
  "2B": "3",
  "1B": "4",
  "V-": "5",
  "NC_6": "6",
  "P7": "7",
  "P8": "8",
  "NC_9": "9",
  "V+": "10",
  "1A": "11",
  "2A": "12",
  "NC_13": "13",
  "P14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", NC_2: "no_connect", "2B": "passive", "1B": "passive", "V-": "power_in", NC_6: "no_connect", P7: "output", P8: "output", NC_9: "no_connect", "V+": "power_in", "1A": "passive", "2A": "passive", NC_13: "no_connect", P14: "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:LM733CN";
  override referencePrefix = "U";
}

/**
 * Single Differential Amplifier, TO-5-10
 *
 * KiCad symbol: `Amplifier_Difference:LM733H`. Reference prefix: `U`.
 * Footprint filters: TO?5*.
 * @see http://www.soemtron.org/downloads/disposals/lm733cn.pdf
 * Keywords: single differential video opamp.
 * Default footprint: Package_TO_SOT_THT:TO-5-10.
 */
export class LM733H extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "2B": "3",
  "1B": "4",
  "V-": "5",
  "P6": "6",
  "P7": "7",
  "V+": "8",
  "1A": "9",
  "2A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", "2B": "passive", "1B": "passive", "V-": "power_in", P6: "output", P7: "output", "V+": "power_in", "1A": "passive", "2A": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:LM733H";
  override referencePrefix = "U";
}

/**
 * Low-Noise Precision Fully Differential Amplifier, fixed or variable gain, MSOP-8
 *
 * KiCad symbol: `Amplifier_Difference:LTC1992-x-xMS8`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1992fb.pdf
 * Keywords: fully differential amplifier.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class LTC1992_x_xMS8 extends Component.withPins({
  "-": "1",
  "V_{OCM}": "2",
  "+V_{S}": "3",
  "P4": "4",
  "P5": "5",
  "-V_{S}": "6",
  "V_{Mid}": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", "V_{OCM}": "input", "+V_{S}": "power_in", P4: "output", P5: "output", "-V_{S}": "power_in", "V_{Mid}": "input", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:LTC1992-x-xMS8";
  override referencePrefix = "U";
}

/**
 * Very Low Power, Negative Rail Input, Rail to Rail Output, Fully Differential Amplifier, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Difference:THS4521IDGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/ths4521.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class THS4521IDGK extends Component.withPins({
  "-": "1",
  "V_{OCM}": "2",
  "V_{S+}": "3",
  "P4": "4",
  "P5": "5",
  "V_{S-}": "6",
  "~{PD}": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", "V_{OCM}": "input", "V_{S+}": "power_in", P4: "output", P5: "output", "V_{S-}": "power_in", "~{PD}": "input", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:THS4521IDGK";
  override referencePrefix = "U";
}

/**
 * Very Low Power, Negative Rail Input, Rail to Rail Output, Fully Differential Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Difference:THS4521ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/ths4521.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class THS4521ID extends Component.withPins({
  "-": "1",
  "V_{OCM}": "2",
  "V_{S+}": "3",
  "P4": "4",
  "P5": "5",
  "V_{S-}": "6",
  "~{PD}": "7",
  "+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-": "input", "V_{OCM}": "input", "V_{S+}": "power_in", P4: "output", P5: "output", "V_{S-}": "power_in", "~{PD}": "input", "+": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:THS4521ID";
  override referencePrefix = "U";
}

/**
 * Low-Noise Precision Fully Differential Amplifier, VQFN-16
 *
 * KiCad symbol: `Amplifier_Difference:THS4551xRGT`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ths4551.pdf
 * Keywords: differential amplifier.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm.
 */
export class THS4551xRGT extends Component.withPins({
  "FB-": "1",
  "IN+": "2",
  "IN-": "3",
  "FB+": "4",
  "VOCM": "9",
  "OUT+": "10",
  "OUT-": "11",
  "~{PD}": "12",
  "VS+_5": "5",
  "VS+_6": "6",
  "VS+_7": "7",
  "VS+_8": "8",
  "VS-_13": "13",
  "VS-_14": "14",
  "VS-_15": "15",
  "VS-_16": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "FB-": "output", "IN+": "input", "IN-": "input", "FB+": "output", VOCM: "input", "OUT+": "output", "OUT-": "output", "~{PD}": "input", "VS+_5": "power_in", "VS+_6": "passive", "VS+_7": "passive", "VS+_8": "passive", "VS-_13": "power_in", "VS-_14": "passive", "VS-_15": "passive", "VS-_16": "passive", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Difference:THS4551xRGT";
  override referencePrefix = "U";
}
