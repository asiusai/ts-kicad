// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Precision Isolation Amplifer, ±3% Gain Tolerance, Bandwidth 200kHz, SSO-8
 *
 * KiCad symbol: `Isolator_Analog:ACPL-C790`. Reference prefix: `U`.
 * Footprint filters: SSO*6.8x5.9mm*P1.27mm*Clearance8mm*.
 * @see http://docs.avagotech.com/docs/AV02-2460EN
 * Keywords: Isolation Amplifer.
 * Default footprint: Package_SO:SSO-8_6.8x5.9mm_P1.27mm_Clearance8mm.
 */
export class ACPL_C790 extends Component.withPins({
  "VDD1": "1",
  "IN+": "2",
  "IN-": "3",
  "GND1": "4",
  "GND2": "5",
  "OUT-": "6",
  "OUT+": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", "IN+": "input", "IN-": "input", GND1: "power_in", GND2: "power_in", "OUT-": "output", "OUT+": "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:ACPL-C790";
  override referencePrefix = "U";
}

/**
 * Precision Isolation Amplifer, ±1% Gain Tolerance, Bandwidth 200kHz, SSO-8
 *
 * KiCad symbol: `Isolator_Analog:ACPL-C79A`. Reference prefix: `U`.
 * Footprint filters: SSO*6.8x5.9mm*P1.27mm*Clearance8mm*.
 * @see http://docs.avagotech.com/docs/AV02-2460EN
 * Keywords: Isolation Amplifer.
 * Default footprint: Package_SO:SSO-8_6.8x5.9mm_P1.27mm_Clearance8mm.
 */
export class ACPL_C79A extends Component.withPins({
  "VDD1": "1",
  "IN+": "2",
  "IN-": "3",
  "GND1": "4",
  "GND2": "5",
  "OUT-": "6",
  "OUT+": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", "IN+": "input", "IN-": "input", GND1: "power_in", GND2: "power_in", "OUT-": "output", "OUT+": "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:ACPL-C79A";
  override referencePrefix = "U";
}

/**
 * Precision Isolation Amplifer, ±0.5% Gain Tolerance, Bandwidth 200kHz, SSO-8
 *
 * KiCad symbol: `Isolator_Analog:ACPL-C79B`. Reference prefix: `U`.
 * Footprint filters: SSO*6.8x5.9mm*P1.27mm*Clearance8mm*.
 * @see http://docs.avagotech.com/docs/AV02-2460EN
 * Keywords: Isolation Amplifer.
 * Default footprint: Package_SO:SSO-8_6.8x5.9mm_P1.27mm_Clearance8mm.
 */
export class ACPL_C79B extends Component.withPins({
  "VDD1": "1",
  "IN+": "2",
  "IN-": "3",
  "GND1": "4",
  "GND2": "5",
  "OUT-": "6",
  "OUT+": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", "IN+": "input", "IN-": "input", GND1: "power_in", GND2: "power_in", "OUT-": "output", "OUT+": "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:ACPL-C79B";
  override referencePrefix = "U";
}

/**
 * Precision Optycally Isolated Voltage Sensor, ±3% Gain Tolerance, Bandwidth 100kHz, SSO-8
 *
 * KiCad symbol: `Isolator_Analog:ACPL-C870`. Reference prefix: `U`.
 * Footprint filters: SSO*6.8x5.9mm*P1.27mm*Clearance8mm*.
 * @see www.avagotech.com/docs/AV02-3563EN
 * Keywords: Optycally Isolated Voltage Sensor.
 * Default footprint: Package_SO:SSO-8_6.8x5.9mm_P1.27mm_Clearance8mm.
 */
export class ACPL_C870 extends Component.withPins({
  "VDD1": "1",
  "IN": "2",
  "IN-": "3",
  "GND1": "4",
  "GND2": "5",
  "OUT-": "6",
  "OUT+": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", IN: "input", "IN-": "input", GND1: "power_in", GND2: "power_in", "OUT-": "output", "OUT+": "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:ACPL-C870";
  override referencePrefix = "U";
}

/**
 * Precision Optycally Isolated Voltage Sensor, ±1% Gain Tolerance, Bandwidth 100kHz, SSO-8
 *
 * KiCad symbol: `Isolator_Analog:ACPL-C87A`. Reference prefix: `U`.
 * Footprint filters: SSO*6.8x5.9mm*P1.27mm*Clearance8mm*.
 * @see www.avagotech.com/docs/AV02-3563EN
 * Keywords: Optycally Isolated Voltage Sensor.
 * Default footprint: Package_SO:SSO-8_6.8x5.9mm_P1.27mm_Clearance8mm.
 */
export class ACPL_C87A extends Component.withPins({
  "VDD1": "1",
  "IN": "2",
  "IN-": "3",
  "GND1": "4",
  "GND2": "5",
  "OUT-": "6",
  "OUT+": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", IN: "input", "IN-": "input", GND1: "power_in", GND2: "power_in", "OUT-": "output", "OUT+": "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:ACPL-C87A";
  override referencePrefix = "U";
}

/**
 * Precision Optycally Isolated Voltage Sensor, ±0.5% Gain Tolerance, Bandwidth 100kHz, SSO-8
 *
 * KiCad symbol: `Isolator_Analog:ACPL-C87B`. Reference prefix: `U`.
 * Footprint filters: SSO*6.8x5.9mm*P1.27mm*Clearance8mm*.
 * @see www.avagotech.com/docs/AV02-3563EN
 * Keywords: Optycally Isolated Voltage Sensor.
 * Default footprint: Package_SO:SSO-8_6.8x5.9mm_P1.27mm_Clearance8mm.
 */
export class ACPL_C87B extends Component.withPins({
  "VDD1": "1",
  "IN": "2",
  "IN-": "3",
  "GND1": "4",
  "GND2": "5",
  "OUT-": "6",
  "OUT+": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", IN: "input", "IN-": "input", GND1: "power_in", GND2: "power_in", "OUT-": "output", "OUT+": "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:ACPL-C87B";
  override referencePrefix = "U";
}

/**
 * Fully-differential isolated amplifier, fixed gain = 8, peak isolation voltage 4250V, transient immunity 2.5kV/us, UL1577/IEC60747-5-2 approved, SOIC-8
 *
 * KiCad symbol: `Isolator_Analog:AMC1100DWV`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x5.85mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/amc1100.pdf
 * Keywords: isolated difference amplifier.
 * Default footprint: Package_SO:SOIC-8_7.5x5.85mm_P1.27mm.
 */
export class AMC1100DWV extends Component.withPins({
  "VDD1": "1",
  "VINP": "2",
  "VINN": "3",
  "GND1": "4",
  "GND2": "5",
  "VOUTN": "6",
  "VOUTP": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", VINP: "input", VINN: "input", GND1: "power_in", GND2: "power_in", VOUTN: "output", VOUTP: "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:AMC1100DWV";
  override referencePrefix = "U";
}

/**
 * Fully-differential isolated amplifier, ±250-mV input, fixed gain = 8, peak isolation voltage 4250V, transient immunity 10kV/us, UL1577/VDE V 0884-10 approved, SOIC-8
 *
 * KiCad symbol: `Isolator_Analog:AMC1200BDWV`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x5.85mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/amc1200.pdf
 * Keywords: isolated difference amplifier.
 * Default footprint: Package_SO:SOIC-8_7.5x5.85mm_P1.27mm.
 */
export class AMC1200BDWV extends Component.withPins({
  "VDD1": "1",
  "VINP": "2",
  "VINN": "3",
  "GND1": "4",
  "GND2": "5",
  "VOUTN": "6",
  "VOUTP": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", VINP: "input", VINN: "input", GND1: "power_in", GND2: "power_in", VOUTN: "output", VOUTP: "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:AMC1200BDWV";
  override referencePrefix = "U";
}

/**
 * Fully-differental precision isolated amplifier, ±250-mV Input, reinforced isloation, fixed Gain = 8.2, peak isolation voltage 7071V, transient immunity 100kV/us, UL1577/VDE V 0884-11 approved, SOIC-8
 *
 * KiCad symbol: `Isolator_Analog:AMC1300BDWV`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x5.85mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/amc1300.pdf
 * Keywords: isolated difference amplifier.
 * Default footprint: Package_SO:SOIC-8_7.5x5.85mm_P1.27mm.
 */
export class AMC1300BDWV extends Component.withPins({
  "VDD1": "1",
  "VINP": "2",
  "VINN": "3",
  "GND1": "4",
  "GND2": "5",
  "VOUTN": "6",
  "VOUTP": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", VINP: "input", VINN: "input", GND1: "power_in", GND2: "power_in", VOUTN: "output", VOUTP: "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:AMC1300BDWV";
  override referencePrefix = "U";
}

/**
 * Fully-differental isolated amplifier, ±250-mV Input, reinforced isloation, fixed gain = 8.2, peak isolation voltage 7071V, transient immunity 15kV/us, UL1577/VDE V 0884-11 approved, SOIC-8
 *
 * KiCad symbol: `Isolator_Analog:AMC1300DWV`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x5.85mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/amc1300.pdf
 * Keywords: isolated difference amplifier.
 * Default footprint: Package_SO:SOIC-8_7.5x5.85mm_P1.27mm.
 */
export class AMC1300DWV extends Component.withPins({
  "VDD1": "1",
  "VINP": "2",
  "VINN": "3",
  "GND1": "4",
  "GND2": "5",
  "VOUTN": "6",
  "VOUTP": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", VINP: "input", VINN: "input", GND1: "power_in", GND2: "power_in", VOUTN: "output", VOUTP: "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:AMC1300DWV";
  override referencePrefix = "U";
}

/**
 * Precision Reinforced Isolated Amplifier, ±5V Input, 300 kHz Bandwidth, 0.4V/V, 0.2% Gain Tolerance, Differential Output, SOIC-8
 *
 * KiCad symbol: `Isolator_Analog:AMC1350DWV`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x5.85mm*P1.27mm*.
 * @see https://www.ti.com/lit/gpn/AMC1350
 * Keywords: Isolation-Amplifer.
 * Default footprint: Package_SO:SOIC-8_7.5x5.85mm_P1.27mm.
 */
export class AMC1350DWV extends Component.withPins({
  "VDD1": "1",
  "IN+": "2",
  "IN-": "3",
  "GND1": "4",
  "GND2": "5",
  "OUT-": "6",
  "OUT+": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", "IN+": "input", "IN-": "input", GND1: "power_in", GND2: "power_in", "OUT-": "output", "OUT+": "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:AMC1350DWV";
  override referencePrefix = "U";
}

/**
 * Precision Reinforced Isolated Amplifier, 5V Input, 300 kHz Bandwidth, 0.4V/V, 0.2% Gain Tolerance, Differential Output, SOIC-8
 *
 * KiCad symbol: `Isolator_Analog:AMC1351DWV`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x5.85mm*P1.27mm*.
 * @see https://www.ti.com/lit/gpn/AMC1351
 * Keywords: Isolation-Amplifer.
 * Default footprint: Package_SO:SOIC-8_7.5x5.85mm_P1.27mm.
 */
export class AMC1351DWV extends Component.withPins({
  "VDD1": "1",
  "IN": "2",
  "GND1_3": "3",
  "GND1_4": "4",
  "GND2": "5",
  "OUTN": "6",
  "OUTP": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD1: "power_in", IN: "input", GND1_3: "power_in", GND1_4: "passive", GND2: "power_in", OUTN: "output", OUTP: "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:AMC1351DWV";
  override referencePrefix = "U";
}

/**
 * Reinforced Isolated Amplifier With Integrated DC/DC Converter, SOIC-16W
 *
 * KiCad symbol: `Isolator_Analog:AMC3330`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/amc3330.pdf
 * Keywords: isolated analog amplifier integrated power supply.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class AMC3330 extends Component.withPins({
  "DCDC_OUT": "1",
  "DCDC_HGND": "2",
  "HLDO_IN": "3",
  "NC": "4",
  "HLDO_OUT": "5",
  "INP": "6",
  "INN": "7",
  "HGND": "8",
  "GND": "9",
  "OUTN": "10",
  "OUTP": "11",
  "VDD": "12",
  "LDO_OUT": "13",
  "DIAG": "14",
  "DCDC_GND": "15",
  "DCDC_IN": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DCDC_OUT: "power_out", DCDC_HGND: "power_out", HLDO_IN: "power_in", NC: "no_connect", HLDO_OUT: "power_out", INP: "input", INN: "input", HGND: "power_in", GND: "power_in", OUTN: "output", OUTP: "output", VDD: "power_in", LDO_OUT: "power_out", DIAG: "output", DCDC_GND: "power_in", DCDC_IN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:AMC3330";
  override referencePrefix = "U";
}

/**
 * Isolated Linear Photocoupler, High Gain, Wideband, DIP8/SMD-DIP8
 *
 * KiCad symbol: `Isolator_Analog:IL300`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, DIP*W10.16mm*, SMDIP*W7.62mm*, SMDIP*W9.53mm*, SMDIP*W11.48mm*.
 * @see http://www.vishay.com/docs/83622/il300.pdf
 * Keywords: Vishay.
 */
export class IL300 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:IL300";
  override referencePrefix = "U";
}

/**
 * Precision Isolated Amplifier, 7071V-Peak Isolation, ±12V Single-Ended Input, ±4V Differential Output, 0.4V/V, 4.5-18V Single Supply on High-Side, SOIC-8
 *
 * KiCad symbol: `Isolator_Analog:ISO224xDWV`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x5.85mm*P1.27mm*.
 * @see https://www.ti.com/lit/gpn/ISO224
 * Keywords: Reinforced-Isolation VDE-V-0884-11 UL1577.
 * Default footprint: Package_SO:SOIC-8_7.5x5.85mm_P1.27mm.
 */
export class ISO224xDWV extends Component.withPins({
  "VCAP": "1",
  "IN": "2",
  "VDD1": "3",
  "GND1": "4",
  "GND2": "5",
  "OUTN": "6",
  "OUTP": "7",
  "VDD2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCAP: "passive", IN: "input", VDD1: "power_in", GND1: "power_in", GND2: "power_in", OUTN: "output", OUTP: "output", VDD2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:ISO224xDWV";
  override referencePrefix = "U";
}

/**
 * Isolated Linear Photocoupler, Wideband, DIP8
 *
 * KiCad symbol: `Isolator_Analog:LOC112`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.littelfuse.com/media?resourcetype=datasheets&itemid=996c6e8f-cc1b-44f6-811e-251c6e004c56&filename=littelfuse-integrated-circuits-loc112-datasheet
 * Keywords: ixys littlefuse.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class LOC112 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:LOC112";
  override referencePrefix = "U";
}

/**
 * Isolated Linear Photocoupler, Wideband, Flatpak-8
 *
 * KiCad symbol: `Isolator_Analog:LOC112P`. Reference prefix: `U`.
 * Footprint filters: *Flatpak*6.3x9.7mm*P2.54mm*.
 * @see https://www.littelfuse.com/media?resourcetype=datasheets&itemid=996c6e8f-cc1b-44f6-811e-251c6e004c56&filename=littelfuse-integrated-circuits-loc112-datasheet
 * Keywords: ixys littlefuse.
 * Default footprint: Package_DIP:IXYS_Flatpak-8_6.3x9.7mm_P2.54mm.
 */
export class LOC112P extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:LOC112P";
  override referencePrefix = "U";
}

/**
 * Isolated Linear Photocoupler, Wideband, SMD-8
 *
 * KiCad symbol: `Isolator_Analog:LOC112S`. Reference prefix: `U`.
 * Footprint filters: *SMD*6.3x9.7mm*P2.54mm*.
 * @see https://www.littelfuse.com/media?resourcetype=datasheets&itemid=996c6e8f-cc1b-44f6-811e-251c6e004c56&filename=littelfuse-integrated-circuits-loc112-datasheet
 * Keywords: ixys littlefuse.
 * Default footprint: Package_DIP:IXYS_SMD-8_6.3x9.7mm_P2.54mm.
 */
export class LOC112S extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Isolator_Analog:LOC112S";
  override referencePrefix = "U";
}
