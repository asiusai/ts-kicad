// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Digital potentiometer, 256 position, single output, SPI interface, SOT-23-8
 *
 * KiCad symbol: `Potentiometer_Digital:AD5160`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5160.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class AD5160 extends Component.withPins({
  "W": "1",
  "V_{DD}": "2",
  "GND": "3",
  "CLK": "4",
  "SDI": "5",
  "~{CS}": "6",
  "B": "7",
  "A": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { W: "passive", "V_{DD}": "power_in", GND: "power_in", CLK: "input", SDI: "input", "~{CS}": "input", B: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5160";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, 4 output, I2C interface, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:AD5254`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5253_5254.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class AD5254 extends Component.withPins({
  "W0": "1",
  "B0": "2",
  "A0": "3",
  "AD0": "4",
  "~{WP}": "5",
  "W1": "6",
  "B1": "7",
  "A1": "8",
  "SDA": "9",
  "VSS": "10",
  "A2": "11",
  "B2": "12",
  "W2": "13",
  "SCL": "14",
  "DGND": "15",
  "AD1": "16",
  "A3": "17",
  "B3": "18",
  "W3": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { W0: "passive", B0: "passive", A0: "passive", AD0: "input", "~{WP}": "input", W1: "passive", B1: "passive", A1: "passive", SDA: "bidirectional", VSS: "power_in", A2: "passive", B2: "passive", W2: "passive", SCL: "input", DGND: "power_in", AD1: "input", A3: "passive", B3: "passive", W3: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5254";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 64 position, 4 output, I2C interface, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:AD5253`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5253_5254.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class AD5253 extends Component.withPins({
  "W0": "1",
  "B0": "2",
  "A0": "3",
  "AD0": "4",
  "~{WP}": "5",
  "W1": "6",
  "B1": "7",
  "A1": "8",
  "SDA": "9",
  "VSS": "10",
  "A2": "11",
  "B2": "12",
  "W2": "13",
  "SCL": "14",
  "DGND": "15",
  "AD1": "16",
  "A3": "17",
  "B3": "18",
  "W3": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { W0: "passive", B0: "passive", A0: "passive", AD0: "input", "~{WP}": "input", W1: "passive", B1: "passive", A1: "passive", SDA: "bidirectional", VSS: "power_in", A2: "passive", B2: "passive", W2: "passive", SCL: "input", DGND: "power_in", AD1: "input", A3: "passive", B3: "passive", W3: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5253";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 1024 position, 1% Resistor Tolerance, I2C interface, LFCSP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5272BCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5272_5274.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_CSP:LFCSP-WD-10-1EP_3x3mm_P0.5mm_EP1.64x2.38mm.
 */
export class AD5272BCP extends Component.withPins({
  "VDD": "1",
  "A": "2",
  "W": "3",
  "VSS_4": "4",
  "EXT_CAP": "5",
  "GND": "6",
  "~{RESET}": "7",
  "SDA": "8",
  "SCL": "9",
  "ADDR": "10",
  "VSS_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", A: "passive", W: "passive", VSS_4: "power_in", EXT_CAP: "passive", GND: "power_in", "~{RESET}": "input", SDA: "bidirectional", SCL: "input", ADDR: "passive", VSS_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5272BCP";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 1024 position, 1% Resistor Tolerance, I2C interface, MSOP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5272BRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5272_5274.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD5272BRM extends Component.withPins({
  "VDD": "1",
  "A": "2",
  "W": "3",
  "VSS": "4",
  "EXT_CAP": "5",
  "GND": "6",
  "~{RESET}": "7",
  "SDA": "8",
  "SCL": "9",
  "ADDR": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", A: "passive", W: "passive", VSS: "power_in", EXT_CAP: "passive", GND: "power_in", "~{RESET}": "input", SDA: "bidirectional", SCL: "input", ADDR: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5272BRM";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, 1% Resistor Tolerance, I2C interface, LFCSP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5274BCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5272_5274.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_CSP:LFCSP-WD-10-1EP_3x3mm_P0.5mm_EP1.64x2.38mm.
 */
export class AD5274BCP extends Component.withPins({
  "VDD": "1",
  "A": "2",
  "W": "3",
  "VSS_4": "4",
  "EXT_CAP": "5",
  "GND": "6",
  "~{RESET}": "7",
  "SDA": "8",
  "SCL": "9",
  "ADDR": "10",
  "VSS_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", A: "passive", W: "passive", VSS_4: "power_in", EXT_CAP: "passive", GND: "power_in", "~{RESET}": "input", SDA: "bidirectional", SCL: "input", ADDR: "passive", VSS_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5274BCP";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, 1% Resistor Tolerance, I2C interface, MSOP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5274BRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5272_5274.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD5274BRM extends Component.withPins({
  "VDD": "1",
  "A": "2",
  "W": "3",
  "VSS": "4",
  "EXT_CAP": "5",
  "GND": "6",
  "~{RESET}": "7",
  "SDA": "8",
  "SCL": "9",
  "ADDR": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", A: "passive", W: "passive", VSS: "power_in", EXT_CAP: "passive", GND: "power_in", "~{RESET}": "input", SDA: "bidirectional", SCL: "input", ADDR: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5274BRM";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, single output, I2C interface
 *
 * KiCad symbol: `Potentiometer_Digital:AD5280`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5280_5282.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class AD5280 extends Component.withPins({
  "A": "1",
  "W": "2",
  "B": "3",
  "VDD": "4",
  "~{SHDN}": "5",
  "SCL": "6",
  "SDA": "7",
  "AD0": "8",
  "AD1": "9",
  "GND": "10",
  "VSS": "11",
  "O2": "12",
  "VLOG": "13",
  "O1": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", W: "passive", B: "passive", VDD: "power_in", "~{SHDN}": "input", SCL: "input", SDA: "bidirectional", AD0: "input", AD1: "input", GND: "power_in", VSS: "power_in", O2: "output", VLOG: "power_in", O1: "output", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5280";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, dual output, I2C interface
 *
 * KiCad symbol: `Potentiometer_Digital:AD5282`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5280_5282.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class AD5282 extends Component.withPins({
  "O1": "1",
  "A1": "2",
  "W1": "3",
  "B1": "4",
  "VDD": "5",
  "~{SHDN}": "6",
  "SCL": "7",
  "SDA": "8",
  "AD0": "9",
  "AD1": "10",
  "GND": "11",
  "VSS": "12",
  "VLOG": "13",
  "B2": "14",
  "W2": "15",
  "A2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { O1: "output", A1: "passive", W1: "passive", B1: "passive", VDD: "power_in", "~{SHDN}": "input", SCL: "input", SDA: "bidirectional", AD0: "input", AD1: "input", GND: "power_in", VSS: "power_in", VLOG: "power_in", B2: "passive", W2: "passive", A2: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5282";
  override referencePrefix = "U";
}

/**
 * Digital Potentiometer, 256 steps, SPI interface, +30V/±15V supply, MSOP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5290`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5290.pdf
 * Keywords: analog-devices .
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD5290 extends Component.withPins({
  "A": "1",
  "B": "2",
  "V_{SS}": "3",
  "GND": "4",
  "~{CS}": "5",
  "CLK": "6",
  "SDI": "7",
  "SDO": "8",
  "V_{DD}": "9",
  "W": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", B: "passive", "V_{SS}": "power_in", GND: "power_in", "~{CS}": "input", CLK: "input", SDI: "input", SDO: "output", "V_{DD}": "power_in", W: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5290";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer 1024 pos (SPI), TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:AD5293`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5293.pdf
 * Keywords: R POT.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class AD5293 extends Component.withPins({
  "~{RST}": "1",
  "Vss-": "2",
  "RH": "3",
  "RW": "4",
  "RL": "5",
  "Vdd+": "6",
  "EXT_CAP": "7",
  "Vlog": "8",
  "GND": "9",
  "SDI": "10",
  "CLK": "11",
  "~{CS}": "12",
  "SDO": "13",
  "RDY": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", "Vss-": "power_in", RH: "passive", RW: "passive", RL: "passive", "Vdd+": "power_in", EXT_CAP: "passive", Vlog: "power_in", GND: "power_in", SDI: "input", CLK: "input", "~{CS}": "input", SDO: "output", RDY: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:AD5293";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, Serial, 256 Steps, DIP-14
 *
 * KiCad symbol: `Potentiometer_Digital:DS1267_DIP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1267.pdf
 * Keywords: Dual Digital Potentiometer Maxim.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class DS1267_DIP extends Component.withPins({
  "VB": "1",
  "H1": "2",
  "L1": "3",
  "W1": "4",
  "~{Reset}": "5",
  "CLK": "6",
  "GND": "7",
  "DQ": "8",
  "COUT": "9",
  "L0": "10",
  "H0": "11",
  "W0": "12",
  "SOUT": "13",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VB: "power_in", H1: "passive", L1: "passive", W1: "passive", "~{Reset}": "input", CLK: "input", GND: "power_in", DQ: "input", COUT: "output", L0: "passive", H0: "passive", W0: "passive", SOUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:DS1267_DIP";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, Serial, 256 Steps, SOIC-16
 *
 * KiCad symbol: `Potentiometer_Digital:DS1267_SOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1267.pdf
 * Keywords: Dual Digital Potentiometer Maxim.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class DS1267_SOIC extends Component.withPins({
  "VB": "1",
  "H1": "3",
  "L1": "4",
  "W1": "5",
  "~{Reset}": "6",
  "CLK": "7",
  "GND": "8",
  "DQ": "9",
  "COUT": "10",
  "L0": "11",
  "H0": "12",
  "W0": "13",
  "SOUT": "14",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VB: "power_in", H1: "passive", L1: "passive", W1: "passive", "~{Reset}": "input", CLK: "input", GND: "power_in", DQ: "input", COUT: "output", L0: "passive", H0: "passive", W0: "passive", SOUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:DS1267_SOIC";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, Serial, 256 Steps, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:DS1267_TSSOP`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1267.pdf
 * Keywords: Dual Digital Potentiometer Maxim.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class DS1267_TSSOP extends Component.withPins({
  "VB": "1",
  "H1": "3",
  "L1": "4",
  "W1": "5",
  "~{Reset}": "6",
  "CLK": "7",
  "GND": "10",
  "DQ": "11",
  "COUT": "13",
  "L0": "14",
  "H0": "15",
  "W0": "16",
  "SOUT": "17",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VB: "power_in", H1: "passive", L1: "passive", W1: "passive", "~{Reset}": "input", CLK: "input", GND: "power_in", DQ: "input", COUT: "output", L0: "passive", H0: "passive", W0: "passive", SOUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:DS1267_TSSOP";
  override referencePrefix = "U";
}

/**
 * Dual Log Audio Digital Potentiometer, 64 positions, TSSOP-16
 *
 * KiCad symbol: `Potentiometer_Digital:DS1882E`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1882.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DS1882E extends Component.withPins({
  "GND": "1",
  "A2": "2",
  "A1": "3",
  "V-": "4",
  "A0": "5",
  "W0": "6",
  "L0": "7",
  "H0": "8",
  "L1": "9",
  "H1": "10",
  "W1": "11",
  "~{CE}": "12",
  "SDA": "13",
  "SCL": "14",
  "VCC": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", A2: "input", A1: "input", "V-": "power_in", A0: "input", W0: "passive", L0: "passive", H0: "passive", L1: "passive", H1: "passive", W1: "passive", "~{CE}": "input", SDA: "bidirectional", SCL: "input", VCC: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:DS1882E";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 128 position, single output, I2C interface, non-volatile with EEPROM
 *
 * KiCad symbol: `Potentiometer_Digital:DS3502`. Reference prefix: `U6`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS3502.pdf
 * Keywords: High-Voltage digital potentiometer Analog Maxim nonvolatile.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class DS3502 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "VCC": "3",
  "A1": "4",
  "A0": "5",
  "RH": "6",
  "RW": "7",
  "RL": "8",
  "V+": "9",
  "SCL": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", VCC: "power_in", A1: "input", A0: "input", RH: "passive", RW: "passive", RL: "passive", "V+": "power_in", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:DS3502";
  override referencePrefix = "U6";
}

/**
 * Low-Drift Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MAX5436`. Reference prefix: `U`.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5436-MAX5439.pdf
 * Keywords: digital potentiometer resistor variable.
 */
export class MAX5436 extends Component.withPins({
  "SCLK": "1",
  "Din": "2",
  "CS": "3",
  "Gnd": "4",
  "V-": "5",
  "V+": "6",
  "H": "7",
  "W": "8",
  "L": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCLK: "input", Din: "input", CS: "input", Gnd: "power_in", "V-": "power_in", "V+": "power_in", H: "passive", W: "passive", L: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MAX5436";
  override referencePrefix = "U";
}

/**
 * Low-Drift Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MAX5438`. Reference prefix: `U`.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5436-MAX5439.pdf
 * Keywords: digital potentiometer resistor variable.
 */
export class MAX5438 extends Component.withPins({
  "SCLK": "1",
  "Din": "2",
  "CS": "3",
  "Gnd": "4",
  "V-": "5",
  "V+": "6",
  "H": "7",
  "W": "8",
  "L": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCLK: "input", Din: "input", CS: "input", Gnd: "power_in", "V-": "power_in", "V+": "power_in", H: "passive", W: "passive", L: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MAX5438";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4011-xxxxMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, MSOP-8
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MCP4011_xxxxMS extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "A": "3",
  "W": "4",
  "~{CS}": "5",
  "B": "6",
  "NC": "7",
  "U/~{D}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", A: "passive", W: "passive", "~{CS}": "input", B: "passive", NC: "no_connect", "U/~{D}": "input", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4011-xxxxMS";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4011-xxxxSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, SOIC-8
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP4011_xxxxSN extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "A": "3",
  "W": "4",
  "~{CS}": "5",
  "B": "6",
  "NC": "7",
  "U/~{D}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", A: "passive", W: "passive", "~{CS}": "input", B: "passive", NC: "no_connect", "U/~{D}": "input", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4011-xxxxSN";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4012-xxxxCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, SOT-23-6
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP4012_xxxxCH extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "U/~{D}": "3",
  "~{CS}": "4",
  "W": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "U/~{D}": "input", "~{CS}": "input", W: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4012-xxxxCH";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4013-xxxxCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, SOT-23-6
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP4013_xxxxCH extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "U/~{D}": "3",
  "~{CS}": "4",
  "W": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "U/~{D}": "input", "~{CS}": "input", W: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4013-xxxxCH";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4014-xxxxOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, SOT-23-5
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP4014_xxxxOT extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "U/~{D}": "3",
  "~{CS}": "4",
  "W": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "U/~{D}": "input", "~{CS}": "input", W: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4014-xxxxOT";
  override referencePrefix = "U";
}

/**
 * Low-Cost 128-Step Volatile I2C Digital Potentiometer, SC-70-6
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4017-xxxxLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22147a.pdf
 * Keywords: TWI pot rheostat.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MCP4017_xxxxLT extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "SCL": "3",
  "SDA": "4",
  "B": "5",
  "W": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", SCL: "input", SDA: "bidirectional", B: "passive", W: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4017-xxxxLT";
  override referencePrefix = "U";
}

/**
 * Low-Cost 128-Step Volatile I2C Digital Potentiometer, SC-70-6
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4018-xxxxLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22147a.pdf
 * Keywords: TWI pot.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MCP4018_xxxxLT extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "SCL": "3",
  "SDA": "4",
  "W": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", SCL: "input", SDA: "bidirectional", W: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4018-xxxxLT";
  override referencePrefix = "U";
}

/**
 * Low-Cost 128-Step Volatile I2C Digital Potentiometer, SC-70-5
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4019-xxxxLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22147a.pdf
 * Keywords: TWI pot rheostat.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class MCP4019_xxxxLT extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "SCL": "3",
  "SDA": "4",
  "W": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", SCL: "input", SDA: "bidirectional", W: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4019-xxxxLT";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, MSOP-8
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4021-xxxxMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MCP4021_xxxxMS extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "A": "3",
  "W": "4",
  "~{CS}": "5",
  "B": "6",
  "NC": "7",
  "U/~{D}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", A: "passive", W: "passive", "~{CS}": "input", B: "passive", NC: "no_connect", "U/~{D}": "input", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4021-xxxxMS";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, SOIC-8
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4021-xxxxSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MCP4021_xxxxSN extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "A": "3",
  "W": "4",
  "~{CS}": "5",
  "B": "6",
  "NC": "7",
  "U/~{D}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", A: "passive", W: "passive", "~{CS}": "input", B: "passive", NC: "no_connect", "U/~{D}": "input", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4021-xxxxSN";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, SOT-23-6
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4022-xxxxCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP4022_xxxxCH extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "U/~{D}": "3",
  "~{CS}": "4",
  "W": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "U/~{D}": "input", "~{CS}": "input", W: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4022-xxxxCH";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, SOT-23-6
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4023-xxxxCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP4023_xxxxCH extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "U/~{D}": "3",
  "~{CS}": "4",
  "W": "5",
  "A": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "U/~{D}": "input", "~{CS}": "input", W: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4023-xxxxCH";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, SOT-23-5
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4024-xxxxOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP4024_xxxxOT extends Component.withPins({
  "VDD": "1",
  "VSS": "2",
  "U/~{D}": "3",
  "~{CS}": "4",
  "W": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", "U/~{D}": "input", "~{CS}": "input", W: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4024-xxxxOT";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 256 taps, 10 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41010`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 */
export class MCP41010 extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SI": "3",
  "VSS": "4",
  "PA0": "5",
  "PW0": "6",
  "PB0": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "passive", SI: "input", VSS: "power_in", PA0: "passive", PW0: "passive", PB0: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP41010";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 256 taps, 50 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41050`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 */
export class MCP41050 extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SI": "3",
  "VSS": "4",
  "PA0": "5",
  "PW0": "6",
  "PB0": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "passive", SI: "input", VSS: "power_in", PA0: "passive", PW0: "passive", PB0: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP41050";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 256 taps, 100 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41100`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 */
export class MCP41100 extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SI": "3",
  "VSS": "4",
  "PA0": "5",
  "PW0": "6",
  "PB0": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "passive", SI: "input", VSS: "power_in", PA0: "passive", PW0: "passive", PB0: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP41100";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 129 taps, 5/10/50/100 kohm, volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4131-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22060b.pdf
 * Keywords: digipot RAM 7-bit 7bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP4131_xxxx_P extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SDI/SDO": "3",
  "V_{SS}": "4",
  "P0A": "5",
  "P0W": "6",
  "P0B": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", "SDI/SDO": "bidirectional", "V_{SS}": "power_in", P0A: "passive", P0W: "passive", P0B: "passive", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4131-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Rheostat, SPI interface, 129 taps, 5/10/50/100 kohm, volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4132-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22060b.pdf
 * Keywords: potentiometer digipot RAM 7-bit 7bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP4132_xxxx_P extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "V_{SS}": "4",
  "V_{DD}": "8",
  "SDI": "3",
  "P0W": "5",
  "P0B": "6",
  "SDO": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", SDI: "input", P0W: "passive", P0B: "passive", SDO: "output", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4132-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 129 taps, 5/10/50/100 kohm, non-volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4141-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22059b.pdf
 * Keywords: digipot EE 7-bit 7bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP4141_xxxx_P extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SDI/SDO": "3",
  "V_{SS}": "4",
  "P0A": "5",
  "P0W": "6",
  "P0B": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", "SDI/SDO": "bidirectional", "V_{SS}": "power_in", P0A: "passive", P0W: "passive", P0B: "passive", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4141-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Rheostat, SPI interface, 129 taps, 5/10/50/100 kohm, non-volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4142-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22059b.pdf
 * Keywords: potentiometer digipot EE 7-bit 7bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP4142_xxxx_P extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "V_{SS}": "4",
  "V_{DD}": "8",
  "SDI": "3",
  "P0W": "5",
  "P0B": "6",
  "SDO": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", SDI: "input", P0W: "passive", P0B: "passive", SDO: "output", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4142-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 257 taps, 5/10/50/100 kohm, volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4151-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22060b.pdf
 * Keywords: digipot RAM 8-bit 8bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP4151_xxxx_P extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SDI/SDO": "3",
  "V_{SS}": "4",
  "P0A": "5",
  "P0W": "6",
  "P0B": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", "SDI/SDO": "bidirectional", "V_{SS}": "power_in", P0A: "passive", P0W: "passive", P0B: "passive", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4151-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Rheostat, SPI interface, 257 taps, 5/10/50/100 kohm, volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4152-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22060b.pdf
 * Keywords: potentiometer digipot RAM 8-bit 8bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP4152_xxxx_P extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "V_{SS}": "4",
  "V_{DD}": "8",
  "SDI": "3",
  "P0W": "5",
  "P0B": "6",
  "SDO": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", SDI: "input", P0W: "passive", P0B: "passive", SDO: "output", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4152-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 257 taps, 5/10/50/100 kohm, non-volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4161-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22059b.pdf
 * Keywords: digipot EE 8-bit 8bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP4161_xxxx_P extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SDI/SDO": "3",
  "V_{SS}": "4",
  "P0A": "5",
  "P0W": "6",
  "P0B": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", "SDI/SDO": "bidirectional", "V_{SS}": "power_in", P0A: "passive", P0W: "passive", P0B: "passive", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4161-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Rheostat, SPI interface, 257 taps, 5/10/50/100 kohm, non-volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4162-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22059b.pdf
 * Keywords: potentiometer digipot EE 8-bit 8bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MCP4162_xxxx_P extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "V_{SS}": "4",
  "V_{DD}": "8",
  "SDI": "3",
  "P0W": "5",
  "P0B": "6",
  "SDO": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", SDI: "input", P0W: "passive", P0B: "passive", SDO: "output", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4162-xxxx-P";
  override referencePrefix = "U";
}

/**
 * 10-bit single-channel digital potentiometer, I2C / SPI interface, MTP memory, VQFN-16
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41U83x-xxxx-7N`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm?P0.65mm?EP2.6*x2.6*, *QFN*4x4mm?P0.65mm?EP2.7x2.7*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP41U83-Data-Sheet-DS20007000.pdf
 * Keywords: Microchip MCP41U83T-502E/7N MCP41U83T-103E/7N MCP41U83T-203E/7N MCP41U83T-503E/7N MCP41U83T-104E/7N.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MCP41U83x_xxxx_7N extends Component.withPins({
  "SDO/A1": "1",
  "SCK/SCL": "2",
  "SDI/SDA": "3",
  "~{CS}/A0": "4",
  "SPI2C": "5",
  "DGND": "6",
  "P0B": "7",
  "P0W": "8",
  "P0A": "9",
  "V_{SS}": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "V_{DD}": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDO/A1": "bidirectional", "SCK/SCL": "input", "SDI/SDA": "bidirectional", "~{CS}/A0": "input", SPI2C: "input", DGND: "power_in", P0B: "passive", P0W: "passive", P0A: "passive", "V_{SS}": "power_in", NC_11: "no_connect", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", "V_{DD}": "power_in", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP41U83x-xxxx-7N";
  override referencePrefix = "U";
}

/**
 * 10-bit single-channel digital potentiometer, I2C / SPI interface, MTP memory, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41U83x-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP41U83-Data-Sheet-DS20007000.pdf
 * Keywords: Microchip MCP41U83T-502E/ST MCP41U83T-103E/ST MCP41U83T-203E/ST MCP41U83T-503E/ST MCP41U83T-104E/ST.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MCP41U83x_xxxx_ST extends Component.withPins({
  "V_{DD}": "1",
  "SDO/A1": "2",
  "SCK/SCL": "3",
  "SDI/SDA": "4",
  "~{CS}/A0": "5",
  "SPI2C": "6",
  "DGND": "7",
  "P0B": "8",
  "P0W": "9",
  "P0A": "10",
  "V_{SS}": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "SDO/A1": "bidirectional", "SCK/SCL": "input", "SDI/SDA": "bidirectional", "~{CS}/A0": "input", SPI2C: "input", DGND: "power_in", P0B: "passive", P0W: "passive", P0A: "passive", "V_{SS}": "power_in", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP41U83x-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, SPI interface, 256 taps, 10 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP42010`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 */
export class MCP42010 extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SI": "3",
  "VSS": "4",
  "PB1": "5",
  "PW1": "6",
  "PA1": "7",
  "PA0": "8",
  "PW0": "9",
  "PB0": "10",
  "~{RS}": "11",
  "~{SHDN}": "12",
  "SO": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", SI: "input", VSS: "power_in", PB1: "passive", PW1: "passive", PA1: "passive", PA0: "passive", PW0: "passive", PB0: "passive", "~{RS}": "input", "~{SHDN}": "input", SO: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP42010";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, SPI interface, 256 taps, 50 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP42050`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 */
export class MCP42050 extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SI": "3",
  "VSS": "4",
  "PB1": "5",
  "PW1": "6",
  "PA1": "7",
  "PA0": "8",
  "PW0": "9",
  "PB0": "10",
  "~{RS}": "11",
  "~{SHDN}": "12",
  "SO": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", SI: "input", VSS: "power_in", PB1: "passive", PW1: "passive", PA1: "passive", PA0: "passive", PW0: "passive", PB0: "passive", "~{RS}": "input", "~{SHDN}": "input", SO: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP42050";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, SPI interface, 256 taps, 100 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP42100`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 */
export class MCP42100 extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SI": "3",
  "VSS": "4",
  "PB1": "5",
  "PW1": "6",
  "PA1": "7",
  "PA0": "8",
  "PW0": "9",
  "PB0": "10",
  "~{RS}": "11",
  "~{SHDN}": "12",
  "SO": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", SI: "input", VSS: "power_in", PB1: "passive", PW1: "passive", PA1: "passive", PA0: "passive", PW0: "passive", PB0: "passive", "~{RS}": "input", "~{SHDN}": "input", SO: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP42100";
  override referencePrefix = "U";
}

/**
 * Dual 8 Bit Digital Pot, SPI, Volatile Memory, QFN-16
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4251-xxxx-ML`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22060b.pdf
 * Keywords: Digital Pot Potentiometer.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.5x2.5mm.
 */
export class MCP4251_xxxx_ML extends Component.withPins({
  "SCK": "1",
  "SDI": "2",
  "VSS_3": "3",
  "VSS_4": "4",
  "P1B": "5",
  "P1W": "6",
  "P1A": "7",
  "P0A": "8",
  "P0W": "9",
  "P0B": "10",
  "NC": "11",
  "~{WP}": "12",
  "~{SHDN}": "13",
  "SDO": "14",
  "VDD": "15",
  "~{CS}": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCK: "input", SDI: "input", VSS_3: "power_in", VSS_4: "passive", P1B: "passive", P1W: "passive", P1A: "passive", P0A: "passive", P0W: "passive", P0B: "passive", NC: "no_connect", "~{WP}": "input", "~{SHDN}": "input", SDO: "output", VDD: "power_in", "~{CS}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4251-xxxx-ML";
  override referencePrefix = "U";
}

/**
 * Dual 8 Bit Digital Pot, SPI, Volatile Memory, PDIP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4251-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22060b.pdf
 * Keywords: Digital Pot Potentiometer.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MCP4251_xxxx_P extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SDI": "3",
  "VSS": "4",
  "P1B": "5",
  "P1W": "6",
  "P1A": "7",
  "P0A": "8",
  "P0W": "9",
  "P0B": "10",
  "~{WP}": "11",
  "~{SHDN}": "12",
  "SDO": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", SDI: "input", VSS: "power_in", P1B: "passive", P1W: "passive", P1A: "passive", P0A: "passive", P0W: "passive", P0B: "passive", "~{WP}": "input", "~{SHDN}": "input", SDO: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4251-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Dual 8 Bit Digital Pot, SPI, Volatile Memory, SOIC-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4251-xxxx-SL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22060b.pdf
 * Keywords: Digital Pot Potentiometer.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class MCP4251_xxxx_SL extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SDI": "3",
  "VSS": "4",
  "P1B": "5",
  "P1W": "6",
  "P1A": "7",
  "P0A": "8",
  "P0W": "9",
  "P0B": "10",
  "~{WP}": "11",
  "~{SHDN}": "12",
  "SDO": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", SDI: "input", VSS: "power_in", P1B: "passive", P1W: "passive", P1A: "passive", P0A: "passive", P0W: "passive", P0B: "passive", "~{WP}": "input", "~{SHDN}": "input", SDO: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4251-xxxx-SL";
  override referencePrefix = "U";
}

/**
 * Dual 8 Bit Digital Pot, SPI, Volatile Memory, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4251-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22060b.pdf
 * Keywords: Digital Pot Potentiometer.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MCP4251_xxxx_ST extends Component.withPins({
  "~{CS}": "1",
  "SCK": "2",
  "SDI": "3",
  "VSS": "4",
  "P1B": "5",
  "P1W": "6",
  "P1A": "7",
  "P0A": "8",
  "P0W": "9",
  "P0B": "10",
  "~{WP}": "11",
  "~{SHDN}": "12",
  "SDO": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCK: "input", SDI: "input", VSS: "power_in", P1B: "passive", P1W: "passive", P1A: "passive", P0A: "passive", P0W: "passive", P0B: "passive", "~{WP}": "input", "~{SHDN}": "input", SDO: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4251-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Quad 7 Bit Digital Potentiometer, I²C, Volatile Memory, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4431-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22267A_MCP4431.pdf
 * Keywords: Digital Pot Potentiometer DigiPot.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MCP4431_xxxx_ST extends Component.withPins({
  "P0A": "11",
  "P0W": "12",
  "P0B": "13",
  "P1B": "8",
  "P1W": "9",
  "P1A": "10",
  "P2B": "18",
  "P2W": "19",
  "P2A": "20",
  "P3A": "1",
  "P3W": "2",
  "P3B": "3",
  "HVC/A0": "4",
  "SCL": "5",
  "SDA": "6",
  "VSS": "7",
  "NC": "14",
  "~{RESET}": "15",
  "A1": "16",
  "VDD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P0A: "passive", P0W: "passive", P0B: "passive", P1B: "passive", P1W: "passive", P1A: "passive", P2B: "passive", P2W: "passive", P2A: "passive", P3A: "passive", P3W: "passive", P3B: "passive", "HVC/A0": "input", SCL: "input", SDA: "bidirectional", VSS: "power_in", NC: "no_connect", "~{RESET}": "input", A1: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4431-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Quad 7 Bit Digital Potentiometer, I²C, Nonvolatile Memory, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4441-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22267A_MCP4431.pdf
 * Keywords: Digital Pot Potentiometer DigiPot.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MCP4441_xxxx_ST extends Component.withPins({
  "P0A": "11",
  "P0W": "12",
  "P0B": "13",
  "P1B": "8",
  "P1W": "9",
  "P1A": "10",
  "P2B": "18",
  "P2W": "19",
  "P2A": "20",
  "P3A": "1",
  "P3W": "2",
  "P3B": "3",
  "HVC/A0": "4",
  "SCL": "5",
  "SDA": "6",
  "VSS": "7",
  "NC": "14",
  "~{RESET}": "15",
  "A1": "16",
  "VDD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P0A: "passive", P0W: "passive", P0B: "passive", P1B: "passive", P1W: "passive", P1A: "passive", P2B: "passive", P2W: "passive", P2A: "passive", P3A: "passive", P3W: "passive", P3B: "passive", "HVC/A0": "input", SCL: "input", SDA: "bidirectional", VSS: "power_in", NC: "no_connect", "~{RESET}": "input", A1: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4441-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Quad 8 Bit Digital Potentiometer, I²C, Volatile Memory, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4451-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22267A_MCP4431.pdf
 * Keywords: Digital Pot Potentiometer DigiPot.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MCP4451_xxxx_ST extends Component.withPins({
  "P0A": "11",
  "P0W": "12",
  "P0B": "13",
  "P1B": "8",
  "P1W": "9",
  "P1A": "10",
  "P2B": "18",
  "P2W": "19",
  "P2A": "20",
  "P3A": "1",
  "P3W": "2",
  "P3B": "3",
  "HVC/A0": "4",
  "SCL": "5",
  "SDA": "6",
  "VSS": "7",
  "NC": "14",
  "~{RESET}": "15",
  "A1": "16",
  "VDD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P0A: "passive", P0W: "passive", P0B: "passive", P1B: "passive", P1W: "passive", P1A: "passive", P2B: "passive", P2W: "passive", P2A: "passive", P3A: "passive", P3W: "passive", P3B: "passive", "HVC/A0": "input", SCL: "input", SDA: "bidirectional", VSS: "power_in", NC: "no_connect", "~{RESET}": "input", A1: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4451-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Quad 8 Bit Digital Potentiometer, I²C, Nonvolatile Memory, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4461-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22267A_MCP4431.pdf
 * Keywords: Digital Pot Potentiometer DigiPot.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MCP4461_xxxx_ST extends Component.withPins({
  "P0A": "11",
  "P0W": "12",
  "P0B": "13",
  "P1B": "8",
  "P1W": "9",
  "P1A": "10",
  "P2B": "18",
  "P2W": "19",
  "P2A": "20",
  "P3A": "1",
  "P3W": "2",
  "P3B": "3",
  "HVC/A0": "4",
  "SCL": "5",
  "SDA": "6",
  "VSS": "7",
  "NC": "14",
  "~{RESET}": "15",
  "A1": "16",
  "VDD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P0A: "passive", P0W: "passive", P0B: "passive", P1B: "passive", P1W: "passive", P1A: "passive", P2B: "passive", P2W: "passive", P2A: "passive", P3A: "passive", P3W: "passive", P3B: "passive", "HVC/A0": "input", SCL: "input", SDA: "bidirectional", VSS: "power_in", NC: "no_connect", "~{RESET}": "input", A1: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP4461-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * 7/8-bit single +36V (±18V) digital pot, I2C serial interface, volatile memory, QFN-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP45HV51-MQ`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005304A.pdf
 * Keywords: I2C Potentiometer pot digital.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 */
export class MCP45HV51_MQ extends Component.withPins({
  "VL": "1",
  "SCL": "2",
  "A1": "3",
  "SDA": "4",
  "A0": "5",
  "~{WLAT}": "6",
  "~{SHDN}": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "DGND": "11",
  "V-": "12",
  "P0B": "13",
  "P0W": "14",
  "P0A": "15",
  "V+": "16",
  "NC_17": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "EP": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VL: "power_in", SCL: "input", A1: "input", SDA: "bidirectional", A0: "input", "~{WLAT}": "input", "~{SHDN}": "input", NC_8: "passive", NC_9: "passive", NC_10: "passive", DGND: "power_in", "V-": "power_in", P0B: "passive", P0W: "passive", P0A: "passive", "V+": "power_in", NC_17: "passive", NC_18: "passive", NC_19: "passive", NC_20: "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP45HV51-MQ";
  override referencePrefix = "U";
}

/**
 * 7/8-bit single +36V (±18V) digital pot, I2C serial interface, volatile memory, QFN-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP45HV31-MQ`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005304A.pdf
 * Keywords: I2C Potentiometer pot digital.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 */
export class MCP45HV31_MQ extends Component.withPins({
  "VL": "1",
  "SCL": "2",
  "A1": "3",
  "SDA": "4",
  "A0": "5",
  "~{WLAT}": "6",
  "~{SHDN}": "7",
  "NC_8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "DGND": "11",
  "V-": "12",
  "P0B": "13",
  "P0W": "14",
  "P0A": "15",
  "V+": "16",
  "NC_17": "17",
  "NC_18": "18",
  "NC_19": "19",
  "NC_20": "20",
  "EP": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VL: "power_in", SCL: "input", A1: "input", SDA: "bidirectional", A0: "input", "~{WLAT}": "input", "~{SHDN}": "input", NC_8: "passive", NC_9: "passive", NC_10: "passive", DGND: "power_in", "V-": "power_in", P0B: "passive", P0W: "passive", P0A: "passive", "V+": "power_in", NC_17: "passive", NC_18: "passive", NC_19: "passive", NC_20: "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP45HV31-MQ";
  override referencePrefix = "U";
}

/**
 * 7/8-bit single +36V (±18V) digital pot, I2C serial interface, volatile memory, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP45HV51-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005304A.pdf
 * Keywords: I2C Potentiometer pot digital.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MCP45HV51_ST extends Component.withPins({
  "VL": "1",
  "SCL": "2",
  "A1": "3",
  "SDA": "4",
  "A0": "5",
  "~{WLAT}": "6",
  "NC": "7",
  "~{SHDN}": "8",
  "DGND": "9",
  "V-": "10",
  "P0B": "11",
  "P0W": "12",
  "P0A": "13",
  "V+": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VL: "power_in", SCL: "input", A1: "input", SDA: "bidirectional", A0: "input", "~{WLAT}": "input", NC: "passive", "~{SHDN}": "input", DGND: "power_in", "V-": "power_in", P0B: "passive", P0W: "passive", P0A: "passive", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP45HV51-ST";
  override referencePrefix = "U";
}

/**
 * 7/8-bit single +36V (±18V) digital pot, I2C serial interface, volatile memory, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP45HV31-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005304A.pdf
 * Keywords: I2C Potentiometer pot digital.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MCP45HV31_ST extends Component.withPins({
  "VL": "1",
  "SCL": "2",
  "A1": "3",
  "SDA": "4",
  "A0": "5",
  "~{WLAT}": "6",
  "NC": "7",
  "~{SHDN}": "8",
  "DGND": "9",
  "V-": "10",
  "P0B": "11",
  "P0W": "12",
  "P0A": "13",
  "V+": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VL: "power_in", SCL: "input", A1: "input", SDA: "bidirectional", A0: "input", "~{WLAT}": "input", NC: "passive", "~{SHDN}": "input", DGND: "power_in", "V-": "power_in", P0B: "passive", P0W: "passive", P0A: "passive", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:MCP45HV31-ST";
  override referencePrefix = "U";
}

/**
 * 128-TAPS Single-Channel Digital Potentiometer, I2C Interface, SC-70-6
 *
 * KiCad symbol: `Potentiometer_Digital:TPL0401A-10-Q1`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PDSO*G*.
 * @see http://www.ti.com/lit/ds/symlink/tpl0401a-10-q1.pdf
 * Keywords: Digital Pot Potentiometer I2C.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-G6.
 */
export class TPL0401A_10_Q1 extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "SCL": "3",
  "SDA": "4",
  "W": "5",
  "H": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", SCL: "input", SDA: "bidirectional", W: "passive", H: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:TPL0401A-10-Q1";
  override referencePrefix = "U";
}

/**
 * 128-TAPS Single-Channel Digital Potentiometer, I2C Interface, SC-70-6
 *
 * KiCad symbol: `Potentiometer_Digital:TPL0401B-10-Q1`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PDSO*G*.
 * @see http://www.ti.com/lit/ds/symlink/tpl0401a-10-q1.pdf
 * Keywords: Digital Pot Potentiometer I2C.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-G6.
 */
export class TPL0401B_10_Q1 extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "SCL": "3",
  "SDA": "4",
  "W": "5",
  "H": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", SCL: "input", SDA: "bidirectional", W: "passive", H: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:TPL0401B-10-Q1";
  override referencePrefix = "U";
}

/**
 * 100k Digital Potentiometer, 1024 steps, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:X9118`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/x911/x9118.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class X9118 extends Component.withPins({
  "V+": "1",
  "A0": "3",
  "SCL": "4",
  "SDA": "6",
  "VSS": "7",
  "V-": "8",
  "A1": "9",
  "VCC": "14",
  "~{WP}": "5",
  "RW0": "11",
  "RH0": "12",
  "RL0": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "passive", A0: "input", SCL: "input", SDA: "bidirectional", VSS: "power_in", "V-": "passive", A1: "input", VCC: "power_in", "~{WP}": "input", RW0: "passive", RH0: "passive", RL0: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:X9118";
  override referencePrefix = "U";
}

/**
 * Quad 100k Digital Potentiometer, 256 steps, TSSOP-24/SOIC-24
 *
 * KiCad symbol: `Potentiometer_Digital:X9250`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*, TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.intersil.com/content/dam/Intersil/documents/x925/x9250.pdf
 * Keywords: potentiometer resistor variable digital.
 */
export class X9250 extends Component.withPins({
  "A0": "2",
  "V+": "6",
  "VCC": "7",
  "~{CS}": "11",
  "SIN": "13",
  "A1": "14",
  "VSS": "18",
  "V-": "19",
  "SCL": "23",
  "~{HOLD}": "24",
  "SOUT": "1",
  "RW3": "3",
  "RH3": "4",
  "RL3": "5",
  "RL0": "8",
  "RH0": "9",
  "RW0": "10",
  "~{WP}": "12",
  "RL1": "15",
  "RH1": "16",
  "RW1": "17",
  "RW2": "20",
  "RH2": "21",
  "RL2": "22",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", "V+": "passive", VCC: "power_in", "~{CS}": "input", SIN: "input", A1: "input", VSS: "power_in", "V-": "passive", SCL: "input", "~{HOLD}": "input", SOUT: "output", RW3: "passive", RH3: "passive", RL3: "passive", RL0: "passive", RH0: "passive", RW0: "passive", "~{WP}": "input", RL1: "passive", RH1: "passive", RW1: "passive", RW2: "passive", RH2: "passive", RL2: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:X9250";
  override referencePrefix = "U";
}

/**
 * Quad 50k Digital Potentiometer, 256 steps, TSSOP-24/SOIC-24
 *
 * KiCad symbol: `Potentiometer_Digital:X9258`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*, TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.intersil.com/content/dam/intersil/documents/x925/x9258.pdf
 * Keywords: potentiometer resistor variable digital.
 */
export class X9258 extends Component.withPins({
  "A0": "2",
  "V+": "6",
  "VCC": "7",
  "A2": "11",
  "SDA": "13",
  "A1": "14",
  "VSS": "18",
  "V-": "19",
  "SCL": "23",
  "A3": "24",
  "RW3": "3",
  "RH3": "4",
  "RL3": "5",
  "RL0": "8",
  "RH0": "9",
  "RW0": "10",
  "~{WP}": "12",
  "RL1": "15",
  "RH1": "16",
  "RW1": "17",
  "RW2": "20",
  "RH2": "21",
  "RL2": "22",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", "V+": "passive", VCC: "power_in", A2: "input", SDA: "bidirectional", A1: "input", VSS: "power_in", "V-": "passive", SCL: "input", A3: "input", RW3: "passive", RH3: "passive", RL3: "passive", RL0: "passive", RH0: "passive", RW0: "passive", "~{WP}": "input", RL1: "passive", RH1: "passive", RW1: "passive", RW2: "passive", RH2: "passive", RL2: "passive", ...opts.pinTypes } });
  }
  override schema = "Potentiometer_Digital:X9258";
  override referencePrefix = "U";
}
