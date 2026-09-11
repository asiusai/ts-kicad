// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Quad 12bit DAC, 4LSB Gain Error, DH-28
 *
 * KiCad symbol: `Analog_DAC:AD390JD`. Reference prefix: `U`.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD390MIL.pdf
 * Keywords: 4ch DAC 12bit.
 */
export class AD390JD extends Component.withPins({
  "D0": "1",
  "D1": "2",
  "D2": "3",
  "D3": "4",
  "D4": "5",
  "D5": "6",
  "D6": "7",
  "D7": "8",
  "D8": "9",
  "D9": "10",
  "D10": "11",
  "D11": "12",
  "GND": "13",
  "-VS": "14",
  "AGND": "15",
  "REFOUT": "16",
  "REFIN": "17",
  "VOUT1": "18",
  "VOUT2": "19",
  "VOUT3": "20",
  "VOUT4": "21",
  "+VS": "22",
  "~{A1}": "23",
  "~{A0}": "24",
  "~{CS1}": "25",
  "~{CS2}": "26",
  "~{CS3}": "27",
  "~{CS4}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D0: "input", D1: "input", D2: "input", D3: "input", D4: "input", D5: "input", D6: "input", D7: "input", D8: "input", D9: "input", D10: "input", D11: "input", GND: "power_in", "-VS": "power_in", AGND: "passive", REFOUT: "passive", REFIN: "passive", VOUT1: "passive", VOUT2: "passive", VOUT3: "passive", VOUT4: "passive", "+VS": "power_in", "~{A1}": "input", "~{A0}": "input", "~{CS1}": "input", "~{CS2}": "input", "~{CS3}": "input", "~{CS4}": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD390JD";
  override referencePrefix = "U";
}

/**
 * Quad 12bit DAC, 2LSB Gain Error, DH-28
 *
 * KiCad symbol: `Analog_DAC:AD390KD`. Reference prefix: `U`.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD390MIL.pdf
 * Keywords: 4ch DAC 12bit.
 */
export class AD390KD extends Component.withPins({
  "D0": "1",
  "D1": "2",
  "D2": "3",
  "D3": "4",
  "D4": "5",
  "D5": "6",
  "D6": "7",
  "D7": "8",
  "D8": "9",
  "D9": "10",
  "D10": "11",
  "D11": "12",
  "GND": "13",
  "-VS": "14",
  "AGND": "15",
  "REFOUT": "16",
  "REFIN": "17",
  "VOUT1": "18",
  "VOUT2": "19",
  "VOUT3": "20",
  "VOUT4": "21",
  "+VS": "22",
  "~{A1}": "23",
  "~{A0}": "24",
  "~{CS1}": "25",
  "~{CS2}": "26",
  "~{CS3}": "27",
  "~{CS4}": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D0: "input", D1: "input", D2: "input", D3: "input", D4: "input", D5: "input", D6: "input", D7: "input", D8: "input", D9: "input", D10: "input", D11: "input", GND: "power_in", "-VS": "power_in", AGND: "passive", REFOUT: "passive", REFIN: "passive", VOUT1: "passive", VOUT2: "passive", VOUT3: "passive", VOUT4: "passive", "+VS": "power_in", "~{A1}": "input", "~{A0}": "input", "~{CS1}": "input", "~{CS2}": "input", "~{CS3}": "input", "~{CS4}": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD390KD";
  override referencePrefix = "U";
}

/**
 * Single 8-bit DAC, Internal Reference, Output Amp, Single Supply, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD558JN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD558.pdf
 * Keywords: 8bit DAC Reference Single Supply.
 */
export class AD558JN extends Component.withPins({
  "DB0": "1",
  "DB1": "2",
  "DB2": "3",
  "DB3": "4",
  "DB4": "5",
  "DB5": "6",
  "DB6": "7",
  "DB7": "8",
  "~{CE}": "9",
  "~{CS}": "10",
  "V+": "11",
  "DGND": "12",
  "AGND": "13",
  "VSEL": "14",
  "VSEN": "15",
  "VOUT": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DB0: "input", DB1: "input", DB2: "input", DB3: "input", DB4: "input", DB5: "input", DB6: "input", DB7: "input", "~{CE}": "input", "~{CS}": "input", "V+": "power_in", DGND: "power_in", AGND: "power_in", VSEL: "input", VSEN: "input", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD558JN";
  override referencePrefix = "U";
}

/**
 * Single 8-bit DAC, Internal Reference, Output Amp, Single Supply, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD558JP`. Reference prefix: `U`.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD558.pdf
 * Keywords: 8bit DAC Reference Single Supply.
 */
export class AD558JP extends Component.withPins({
  "DB0": "2",
  "DB1": "3",
  "DB2": "4",
  "DB3": "5",
  "DB4": "7",
  "DB5": "8",
  "DB6": "9",
  "DB7": "10",
  "~{CE}": "12",
  "~{CS}": "13",
  "V+": "14",
  "DGND": "15",
  "AGND": "17",
  "VSEL": "18",
  "VSEN": "19",
  "VOUT": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DB0: "input", DB1: "input", DB2: "input", DB3: "input", DB4: "input", DB5: "input", DB6: "input", DB7: "input", "~{CE}": "input", "~{CS}": "input", "V+": "power_in", DGND: "power_in", AGND: "power_in", VSEL: "input", VSEN: "input", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD558JP";
  override referencePrefix = "U";
}

/**
 * Single 8-bit DAC, Internal Reference, Output Amp, Single Supply, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD558KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD558.pdf
 * Keywords: 8bit DAC Reference Single Supply.
 */
export class AD558KN extends Component.withPins({
  "DB0": "1",
  "DB1": "2",
  "DB2": "3",
  "DB3": "4",
  "DB4": "5",
  "DB5": "6",
  "DB6": "7",
  "DB7": "8",
  "~{CE}": "9",
  "~{CS}": "10",
  "V+": "11",
  "DGND": "12",
  "AGND": "13",
  "VSEL": "14",
  "VSEN": "15",
  "VOUT": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DB0: "input", DB1: "input", DB2: "input", DB3: "input", DB4: "input", DB5: "input", DB6: "input", DB7: "input", "~{CE}": "input", "~{CS}": "input", "V+": "power_in", DGND: "power_in", AGND: "power_in", VSEL: "input", VSEN: "input", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD558KN";
  override referencePrefix = "U";
}

/**
 * Single 8-bit DAC, Internal Reference, Output Amp, Single Supply, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD558KP`. Reference prefix: `U`.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD558.pdf
 * Keywords: 8bit DAC Reference Single Supply.
 */
export class AD558KP extends Component.withPins({
  "DB0": "2",
  "DB1": "3",
  "DB2": "4",
  "DB3": "5",
  "DB4": "7",
  "DB5": "8",
  "DB6": "9",
  "DB7": "10",
  "~{CE}": "12",
  "~{CS}": "13",
  "V+": "14",
  "DGND": "15",
  "AGND": "17",
  "VSEL": "18",
  "VSEN": "19",
  "VOUT": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DB0: "input", DB1: "input", DB2: "input", DB3: "input", DB4: "input", DB5: "input", DB6: "input", DB7: "input", "~{CE}": "input", "~{CS}": "input", "V+": "power_in", DGND: "power_in", AGND: "power_in", VSEL: "input", VSEN: "input", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD558KP";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with SPI Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5687BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689_5687.pdf
 * Keywords: dac 2nch 12bit spi.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 */
export class AD5687BCPZ extends Component.withPins({
  "VOUTA": "1",
  "GND_2": "2",
  "VDD": "3",
  "NC_4": "4",
  "VOUTB": "5",
  "SDO": "6",
  "~{LDAC}": "7",
  "GAIN": "8",
  "VLOGIC": "9",
  "SCLK": "10",
  "~{SYNC}": "11",
  "SDIN": "12",
  "~{RESET}": "13",
  "RSTSEL": "14",
  "VREF": "15",
  "NC_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTA: "output", GND_2: "power_in", VDD: "power_in", NC_4: "no_connect", VOUTB: "output", SDO: "output", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", SCLK: "input", "~{SYNC}": "input", SDIN: "input", "~{RESET}": "input", RSTSEL: "input", VREF: "power_in", NC_16: "no_connect", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5687BCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with SPI Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5687BRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689_5687.pdf
 * Keywords: dac 2nch 12bit spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class AD5687BRUZ extends Component.withPins({
  "VREF": "1",
  "NC_2": "2",
  "VOUTA": "3",
  "GND": "4",
  "VDD": "5",
  "NC_6": "6",
  "VOUTB": "7",
  "SDO": "8",
  "~{LDAC}": "9",
  "GAIN": "10",
  "VLOGIC": "11",
  "SCLK": "12",
  "~{SYNC}": "13",
  "SDIN": "14",
  "~{RESET}": "15",
  "RSTSEL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VREF: "power_in", NC_2: "no_connect", VOUTA: "output", GND: "power_in", VDD: "power_in", NC_6: "no_connect", VOUTB: "output", SDO: "output", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", SCLK: "input", "~{SYNC}": "input", SDIN: "input", "~{RESET}": "input", RSTSEL: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5687BRUZ";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with 2 ppm/°C Reference, SPI Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5687RBCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689R_5687R.pdf
 * Keywords: dac 2nch 12bit spi.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 */
export class AD5687RBCPZ extends Component.withPins({
  "VOUTA": "1",
  "GND_2": "2",
  "VDD": "3",
  "NC_4": "4",
  "VOUTB": "5",
  "SDO": "6",
  "~{LDAC}": "7",
  "GAIN": "8",
  "VLOGIC": "9",
  "SCLK": "10",
  "~{SYNC}": "11",
  "SDIN": "12",
  "~{RESET}": "13",
  "RSTSEL": "14",
  "VREF": "15",
  "NC_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTA: "output", GND_2: "power_in", VDD: "power_in", NC_4: "no_connect", VOUTB: "output", SDO: "output", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", SCLK: "input", "~{SYNC}": "input", SDIN: "input", "~{RESET}": "input", RSTSEL: "input", VREF: "power_in", NC_16: "no_connect", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5687RBCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with 2 ppm/°C Reference, SPI Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5687RBRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689R_5687R.pdf
 * Keywords: dac 2nch 12bit spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class AD5687RBRUZ extends Component.withPins({
  "VREF": "1",
  "NC_2": "2",
  "VOUTA": "3",
  "GND": "4",
  "VDD": "5",
  "NC_6": "6",
  "VOUTB": "7",
  "SDO": "8",
  "~{LDAC}": "9",
  "GAIN": "10",
  "VLOGIC": "11",
  "SCLK": "12",
  "~{SYNC}": "13",
  "SDIN": "14",
  "~{RESET}": "15",
  "RSTSEL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VREF: "power_in", NC_2: "no_connect", VOUTA: "output", GND: "power_in", VDD: "power_in", NC_6: "no_connect", VOUTB: "output", SDO: "output", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", SCLK: "input", "~{SYNC}": "input", SDIN: "input", "~{RESET}": "input", RSTSEL: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5687RBRUZ";
  override referencePrefix = "U";
}

/**
 * Dual, 16-Bit nanoDAC+ with SPI Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5689BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689_5687.pdf
 * Keywords: dac 2nch 16bit spi.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 */
export class AD5689BCPZ extends Component.withPins({
  "VOUTA": "1",
  "GND_2": "2",
  "VDD": "3",
  "NC_4": "4",
  "VOUTB": "5",
  "SDO": "6",
  "~{LDAC}": "7",
  "GAIN": "8",
  "VLOGIC": "9",
  "SCLK": "10",
  "~{SYNC}": "11",
  "SDIN": "12",
  "~{RESET}": "13",
  "RSTSEL": "14",
  "VREF": "15",
  "NC_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTA: "output", GND_2: "power_in", VDD: "power_in", NC_4: "no_connect", VOUTB: "output", SDO: "output", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", SCLK: "input", "~{SYNC}": "input", SDIN: "input", "~{RESET}": "input", RSTSEL: "input", VREF: "power_in", NC_16: "no_connect", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5689BCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 16-Bit nanoDAC+ with SPI Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5689BRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689_5687.pdf
 * Keywords: dac 2nch 16bit spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class AD5689BRUZ extends Component.withPins({
  "VREF": "1",
  "NC_2": "2",
  "VOUTA": "3",
  "GND": "4",
  "VDD": "5",
  "NC_6": "6",
  "VOUTB": "7",
  "SDO": "8",
  "~{LDAC}": "9",
  "GAIN": "10",
  "VLOGIC": "11",
  "SCLK": "12",
  "~{SYNC}": "13",
  "SDIN": "14",
  "~{RESET}": "15",
  "RSTSEL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VREF: "power_in", NC_2: "no_connect", VOUTA: "output", GND: "power_in", VDD: "power_in", NC_6: "no_connect", VOUTB: "output", SDO: "output", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", SCLK: "input", "~{SYNC}": "input", SDIN: "input", "~{RESET}": "input", RSTSEL: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5689BRUZ";
  override referencePrefix = "U";
}

/**
 * Dual, 16-Bit nanoDAC+ with 2 ppm/°C Reference, SPI Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5689RxCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689R_5687R.pdf
 * Keywords: dac 2nch 16bit spi.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 */
export class AD5689RxCPZ extends Component.withPins({
  "VOUTA": "1",
  "GND_2": "2",
  "VDD": "3",
  "NC_4": "4",
  "VOUTB": "5",
  "SDO": "6",
  "~{LDAC}": "7",
  "GAIN": "8",
  "VLOGIC": "9",
  "SCLK": "10",
  "~{SYNC}": "11",
  "SDIN": "12",
  "~{RESET}": "13",
  "RSTSEL": "14",
  "VREF": "15",
  "NC_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTA: "output", GND_2: "power_in", VDD: "power_in", NC_4: "no_connect", VOUTB: "output", SDO: "output", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", SCLK: "input", "~{SYNC}": "input", SDIN: "input", "~{RESET}": "input", RSTSEL: "input", VREF: "power_in", NC_16: "no_connect", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5689RxCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 16-Bit nanoDAC+ with 2 ppm/°C Reference, SPI Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5689RxRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5689R_5687R.pdf
 * Keywords: dac 2nch 16bit spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class AD5689RxRUZ extends Component.withPins({
  "VREF": "1",
  "NC_2": "2",
  "VOUTA": "3",
  "GND": "4",
  "VDD": "5",
  "NC_6": "6",
  "VOUTB": "7",
  "SDO": "8",
  "~{LDAC}": "9",
  "GAIN": "10",
  "VLOGIC": "11",
  "SCLK": "12",
  "~{SYNC}": "13",
  "SDIN": "14",
  "~{RESET}": "15",
  "RSTSEL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VREF: "power_in", NC_2: "no_connect", VOUTA: "output", GND: "power_in", VDD: "power_in", NC_6: "no_connect", VOUTB: "output", SDO: "output", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", SCLK: "input", "~{SYNC}": "input", SDIN: "input", "~{RESET}": "input", RSTSEL: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5689RxRUZ";
  override referencePrefix = "U";
}

/**
 * Tiny, 12-Bit, I2C, nanoDAC+, 2 ppm/°C Reference, MSOP-10
 *
 * KiCad symbol: `Analog_DAC:AD5691RxRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5693R_5692R_5691R_5693.pdf
 * Keywords: serial DAC i2c digital analog converter.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD5691RxRM extends Component.withPins({
  "VDD": "1",
  "VLOGIC": "2",
  "~{RESET}": "3",
  "~{LDAC}": "4",
  "GND": "5",
  "A0": "6",
  "SCL": "7",
  "SDA": "8",
  "VREF": "9",
  "VOUT": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VLOGIC: "power_in", "~{RESET}": "input", "~{LDAC}": "input", GND: "power_in", A0: "input", SCL: "input", SDA: "bidirectional", VREF: "passive", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5691RxRM";
  override referencePrefix = "U";
}

/**
 * Tiny, 14-Bit, I2C, nanoDAC+, 2 ppm/°C Reference, MSOP-10
 *
 * KiCad symbol: `Analog_DAC:AD5692RxRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5693R_5692R_5691R_5693.pdf
 * Keywords: serial DAC i2c digital analog converter.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD5692RxRM extends Component.withPins({
  "VDD": "1",
  "VLOGIC": "2",
  "~{RESET}": "3",
  "~{LDAC}": "4",
  "GND": "5",
  "A0": "6",
  "SCL": "7",
  "SDA": "8",
  "VREF": "9",
  "VOUT": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VLOGIC: "power_in", "~{RESET}": "input", "~{LDAC}": "input", GND: "power_in", A0: "input", SCL: "input", SDA: "bidirectional", VREF: "passive", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5692RxRM";
  override referencePrefix = "U";
}

/**
 * Tiny, 16-Bit, I2C, nanoDAC+, 2 ppm/°C Reference, MSOP-10
 *
 * KiCad symbol: `Analog_DAC:AD5693RxRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5693R_5692R_5691R_5693.pdf
 * Keywords: serial DAC i2c digital analog converter.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class AD5693RxRM extends Component.withPins({
  "VDD": "1",
  "VLOGIC": "2",
  "~{RESET}": "3",
  "~{LDAC}": "4",
  "GND": "5",
  "A0": "6",
  "SCL": "7",
  "SDA": "8",
  "VREF": "9",
  "VOUT": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VLOGIC: "power_in", "~{RESET}": "input", "~{LDAC}": "input", GND: "power_in", A0: "input", SCL: "input", SDA: "bidirectional", VREF: "passive", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5693RxRM";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with 2 ppm/°C Reference, I2C Interface, LFCSP-16
 *
 * KiCad symbol: `Analog_DAC:AD5697RBCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5697R.pdf
 * Keywords: dac 2nch 12bit i2c.
 * Default footprint: Package_CSP:LFCSP-16-1EP_3x3mm_P0.5mm_EP1.854x1.854mm.
 */
export class AD5697RBCPZ extends Component.withPins({
  "VOUTA": "1",
  "GND_2": "2",
  "VDD": "3",
  "NC_4": "4",
  "VOUTB": "5",
  "SDA": "6",
  "~{LDAC}": "7",
  "GAIN": "8",
  "VLOGIC": "9",
  "A0": "10",
  "SCL": "11",
  "A1": "12",
  "~{RESET}": "13",
  "RSTSEL": "14",
  "VREF": "15",
  "NC_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTA: "output", GND_2: "power_in", VDD: "power_in", NC_4: "no_connect", VOUTB: "output", SDA: "bidirectional", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", A0: "input", SCL: "input", A1: "input", "~{RESET}": "input", RSTSEL: "input", VREF: "power_in", NC_16: "no_connect", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5697RBCPZ";
  override referencePrefix = "U";
}

/**
 * Dual, 12-Bit nanoDAC+ with 2 ppm/°C Reference, I2C Interface, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD5697RBRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5697R.pdf
 * Keywords: dac 2nch 12bit i2c.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class AD5697RBRUZ extends Component.withPins({
  "VREF": "1",
  "NC_2": "2",
  "VOUTA": "3",
  "GND": "4",
  "VDD": "5",
  "NC_6": "6",
  "VOUTB": "7",
  "SDA": "8",
  "~{LDAC}": "9",
  "GAIN": "10",
  "VLOGIC": "11",
  "A0": "12",
  "SCL": "13",
  "A1": "14",
  "~{RESET}": "15",
  "RSTSEL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VREF: "power_in", NC_2: "no_connect", VOUTA: "output", GND: "power_in", VDD: "power_in", NC_6: "no_connect", VOUTB: "output", SDA: "bidirectional", "~{LDAC}": "input", GAIN: "input", VLOGIC: "power_in", A0: "input", SCL: "input", A1: "input", "~{RESET}": "input", RSTSEL: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5697RBRUZ";
  override referencePrefix = "U";
}

/**
 * 18Bit, ±0,5 LSB INL, Voltage Output DAC, TSSOP-20
 *
 * KiCad symbol: `Analog_DAC:AD5781xRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4?6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad5781.pdf
 * Keywords: 1ch.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class AD5781xRUZ extends Component.withPins({
  "INV": "1",
  "V_{OUT}": "2",
  "V_{REFPS}": "3",
  "V_{REFPF}": "4",
  "V_{DD}": "5",
  "~{RESET}": "6",
  "~{CLR}": "7",
  "~{LDAC}": "8",
  "V_{CC}": "9",
  "IOV_{CC}": "10",
  "SDO": "11",
  "SDIN": "12",
  "SCLK": "13",
  "~{SYNC}": "14",
  "DGND": "15",
  "V_{REFNF}": "16",
  "V_{REFNS}": "17",
  "V_{SS}": "18",
  "AGND": "19",
  "R_{FB}": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INV: "output", "V_{OUT}": "output", "V_{REFPS}": "output", "V_{REFPF}": "input", "V_{DD}": "power_in", "~{RESET}": "input", "~{CLR}": "input", "~{LDAC}": "input", "V_{CC}": "power_in", "IOV_{CC}": "power_in", SDO: "output", SDIN: "input", SCLK: "input", "~{SYNC}": "input", DGND: "power_in", "V_{REFNF}": "input", "V_{REFNS}": "output", "V_{SS}": "power_in", AGND: "power_in", "R_{FB}": "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5781xRUZ";
  override referencePrefix = "U";
}

/**
 * 1 ppm, 20-Bit, ±1 LSB INL, Voltage Output DAC, TSSOP-20
 *
 * KiCad symbol: `Analog_DAC:AD5791xRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4?6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad5791.pdf
 * Keywords: 1ch.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class AD5791xRUZ extends Component.withPins({
  "INV": "1",
  "V_{OUT}": "2",
  "V_{REFPS}": "3",
  "V_{REFPF}": "4",
  "V_{DD}": "5",
  "~{RESET}": "6",
  "~{CLR}": "7",
  "~{LDAC}": "8",
  "V_{CC}": "9",
  "IOV_{CC}": "10",
  "SDO": "11",
  "SDIN": "12",
  "SCLK": "13",
  "~{SYNC}": "14",
  "DGND": "15",
  "V_{REFNF}": "16",
  "V_{REFNS}": "17",
  "V_{SS}": "18",
  "AGND": "19",
  "R_{FB}": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INV: "output", "V_{OUT}": "output", "V_{REFPS}": "output", "V_{REFPF}": "input", "V_{DD}": "power_in", "~{RESET}": "input", "~{CLR}": "input", "~{LDAC}": "input", "V_{CC}": "power_in", "IOV_{CC}": "power_in", SDO: "output", SDIN: "input", SCLK: "input", "~{SYNC}": "input", DGND: "power_in", "V_{REFNF}": "input", "V_{REFNS}": "output", "V_{SS}": "power_in", AGND: "power_in", "R_{FB}": "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD5791xRUZ";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, DIP-18
 *
 * KiCad symbol: `Analog_DAC:AD7224KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply 1ch.
 */
export class AD7224KN extends Component.withPins({
  "VSS": "1",
  "VOUT": "2",
  "VREF": "3",
  "AGND": "4",
  "DGND": "5",
  "DB7(MSB)": "6",
  "DB6": "7",
  "DB5": "8",
  "DB4": "9",
  "DB3": "10",
  "DB2": "11",
  "DB1": "12",
  "DB0(LSB)": "13",
  "~{CS}": "14",
  "~{WR}": "15",
  "~{LDAC}": "16",
  "~{RST}": "17",
  "VDD": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VOUT: "output", VREF: "passive", AGND: "passive", DGND: "power_in", "DB7(MSB)": "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", "DB0(LSB)": "input", "~{CS}": "input", "~{WR}": "input", "~{LDAC}": "input", "~{RST}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7224KN";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7224KP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 */
export class AD7224KP extends Component.withPins({
  "VSS": "2",
  "VOUT": "3",
  "VREF": "4",
  "AGND": "5",
  "DGND": "6",
  "DB7(MSB)": "7",
  "DB6": "8",
  "DB5": "9",
  "DB4": "10",
  "DB3": "12",
  "DB2": "13",
  "DB1": "14",
  "DB0(LSB)": "15",
  "~{CS}": "16",
  "~{WR}": "17",
  "~{LDAC}": "18",
  "~{RST}": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VOUT: "output", VREF: "passive", AGND: "passive", DGND: "power_in", "DB7(MSB)": "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", "DB0(LSB)": "input", "~{CS}": "input", "~{WR}": "input", "~{LDAC}": "input", "~{RST}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7224KP";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, SOIC-20
 *
 * KiCad symbol: `Analog_DAC:AD7224KR-1`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 */
export class AD7224KR_1 extends Component.withPins({
  "VSS": "1",
  "VOUT": "2",
  "VREF": "3",
  "AGND": "4",
  "DGND": "5",
  "DB7(MSB)": "6",
  "DB6": "7",
  "DB5": "8",
  "DB4": "9",
  "DB3": "12",
  "DB2": "13",
  "DB1": "14",
  "DB0(LSB)": "15",
  "~{CS}": "16",
  "~{WR}": "17",
  "~{LDAC}": "18",
  "~{RST}": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VOUT: "output", VREF: "passive", AGND: "passive", DGND: "power_in", "DB7(MSB)": "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", "DB0(LSB)": "input", "~{CS}": "input", "~{WR}": "input", "~{LDAC}": "input", "~{RST}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7224KR-1";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, SOIC-18
 *
 * KiCad symbol: `Analog_DAC:AD7224KR-18`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 */
export class AD7224KR_18 extends Component.withPins({
  "VSS": "1",
  "VOUT": "2",
  "VREF": "3",
  "AGND": "4",
  "DGND": "5",
  "DB7(MSB)": "6",
  "DB6": "7",
  "DB5": "8",
  "DB4": "9",
  "DB3": "10",
  "DB2": "11",
  "DB1": "12",
  "DB0(LSB)": "13",
  "~{CS}": "14",
  "~{WR}": "15",
  "~{LDAC}": "16",
  "~{RST}": "17",
  "VDD": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VOUT: "output", VREF: "passive", AGND: "passive", DGND: "power_in", "DB7(MSB)": "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", "DB0(LSB)": "input", "~{CS}": "input", "~{WR}": "input", "~{LDAC}": "input", "~{RST}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7224KR-18";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, DIP-18
 *
 * KiCad symbol: `Analog_DAC:AD7224LN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 */
export class AD7224LN extends Component.withPins({
  "VSS": "1",
  "VOUT": "2",
  "VREF": "3",
  "AGND": "4",
  "DGND": "5",
  "DB7(MSB)": "6",
  "DB6": "7",
  "DB5": "8",
  "DB4": "9",
  "DB3": "10",
  "DB2": "11",
  "DB1": "12",
  "DB0(LSB)": "13",
  "~{CS}": "14",
  "~{WR}": "15",
  "~{LDAC}": "16",
  "~{RST}": "17",
  "VDD": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VOUT: "output", VREF: "passive", AGND: "passive", DGND: "power_in", "DB7(MSB)": "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", "DB0(LSB)": "input", "~{CS}": "input", "~{WR}": "input", "~{LDAC}": "input", "~{RST}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7224LN";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7224LP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 */
export class AD7224LP extends Component.withPins({
  "VSS": "2",
  "VOUT": "3",
  "VREF": "4",
  "AGND": "5",
  "DGND": "6",
  "DB7(MSB)": "7",
  "DB6": "8",
  "DB5": "9",
  "DB4": "10",
  "DB3": "12",
  "DB2": "13",
  "DB1": "14",
  "DB0(LSB)": "15",
  "~{CS}": "16",
  "~{WR}": "17",
  "~{LDAC}": "18",
  "~{RST}": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VOUT: "output", VREF: "passive", AGND: "passive", DGND: "power_in", "DB7(MSB)": "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", "DB0(LSB)": "input", "~{CS}": "input", "~{WR}": "input", "~{LDAC}": "input", "~{RST}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7224LP";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, SOIC-20
 *
 * KiCad symbol: `Analog_DAC:AD7224LR-1`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 */
export class AD7224LR_1 extends Component.withPins({
  "VSS": "1",
  "VOUT": "2",
  "VREF": "3",
  "AGND": "4",
  "DGND": "5",
  "DB7(MSB)": "6",
  "DB6": "7",
  "DB5": "8",
  "DB4": "9",
  "DB3": "12",
  "DB2": "13",
  "DB1": "14",
  "DB0(LSB)": "15",
  "~{CS}": "16",
  "~{WR}": "17",
  "~{LDAC}": "18",
  "~{RST}": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VOUT: "output", VREF: "passive", AGND: "passive", DGND: "power_in", "DB7(MSB)": "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", "DB0(LSB)": "input", "~{CS}": "input", "~{WR}": "input", "~{LDAC}": "input", "~{RST}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7224LR-1";
  override referencePrefix = "U";
}

/**
 * 8bit DAC, Dual or Single Supply, SOIC-18
 *
 * KiCad symbol: `Analog_DAC:AD7224LR-18`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7224.pdf
 * Keywords: 8bit DAC Dual Single Supply.
 */
export class AD7224LR_18 extends Component.withPins({
  "VSS": "1",
  "VOUT": "2",
  "VREF": "3",
  "AGND": "4",
  "DGND": "5",
  "DB7(MSB)": "6",
  "DB6": "7",
  "DB5": "8",
  "DB4": "9",
  "DB3": "10",
  "DB2": "11",
  "DB1": "12",
  "DB0(LSB)": "13",
  "~{CS}": "14",
  "~{WR}": "15",
  "~{LDAC}": "16",
  "~{RST}": "17",
  "VDD": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VOUT: "output", VREF: "passive", AGND: "passive", DGND: "power_in", "DB7(MSB)": "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", "DB0(LSB)": "input", "~{CS}": "input", "~{WR}": "input", "~{LDAC}": "input", "~{RST}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7224LR-18";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, SSOP-24
 *
 * KiCad symbol: `Analog_DAC:AD7225BRS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 */
export class AD7225BRS extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREFB": "4",
  "VREFA": "5",
  "AGND": "6",
  "GND": "7",
  "~{LDAC}": "8",
  "DB7": "9",
  "DB6": "10",
  "DB5": "11",
  "DB4": "12",
  "DB3": "13",
  "DB2": "14",
  "DB1": "15",
  "DB0": "16",
  "~{WR}": "17",
  "A1": "18",
  "A0": "19",
  "VREFD": "20",
  "VREFC": "21",
  "VDD": "22",
  "VOUTD": "23",
  "VOUTC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREFB: "input", VREFA: "input", AGND: "input", GND: "power_in", "~{LDAC}": "input", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VREFD: "input", VREFC: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7225BRS";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, SSOP-24
 *
 * KiCad symbol: `Analog_DAC:AD7225CRS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 */
export class AD7225CRS extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREFB": "4",
  "VREFA": "5",
  "AGND": "6",
  "GND": "7",
  "~{LDAC}": "8",
  "DB7": "9",
  "DB6": "10",
  "DB5": "11",
  "DB4": "12",
  "DB3": "13",
  "DB2": "14",
  "DB1": "15",
  "DB0": "16",
  "~{WR}": "17",
  "A1": "18",
  "A0": "19",
  "VREFD": "20",
  "VREFC": "21",
  "VDD": "22",
  "VOUTD": "23",
  "VOUTC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREFB: "input", VREFA: "input", AGND: "input", GND: "power_in", "~{LDAC}": "input", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VREFD: "input", VREFC: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7225CRS";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, PDIP-24
 *
 * KiCad symbol: `Analog_DAC:AD7225KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 */
export class AD7225KN extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREFB": "4",
  "VREFA": "5",
  "AGND": "6",
  "GND": "7",
  "~{LDAC}": "8",
  "DB7": "9",
  "DB6": "10",
  "DB5": "11",
  "DB4": "12",
  "DB3": "13",
  "DB2": "14",
  "DB1": "15",
  "DB0": "16",
  "~{WR}": "17",
  "A1": "18",
  "A0": "19",
  "VREFD": "20",
  "VREFC": "21",
  "VDD": "22",
  "VOUTD": "23",
  "VOUTC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREFB: "input", VREFA: "input", AGND: "input", GND: "power_in", "~{LDAC}": "input", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VREFD: "input", VREFC: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7225KN";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, PLCC-28
 *
 * KiCad symbol: `Analog_DAC:AD7225KP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 */
export class AD7225KP extends Component.withPins({
  "VOUTB": "2",
  "VOUTA": "3",
  "VSS": "4",
  "VREFB": "5",
  "VREFA": "6",
  "AGND": "7",
  "GND": "9",
  "~{LDAC}": "10",
  "DB7": "11",
  "DB6": "12",
  "DB5": "13",
  "DB4": "14",
  "DB3": "16",
  "DB2": "17",
  "DB1": "18",
  "DB0": "19",
  "~{WR}": "20",
  "A0": "21",
  "A1": "23",
  "VREFD": "24",
  "VREFC": "25",
  "VDD": "26",
  "VOUTD": "27",
  "VOUTC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREFB: "input", VREFA: "input", AGND: "input", GND: "power_in", "~{LDAC}": "input", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A0: "input", A1: "input", VREFD: "input", VREFC: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7225KP";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, SOIC-24
 *
 * KiCad symbol: `Analog_DAC:AD7225KR`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 */
export class AD7225KR extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREFB": "4",
  "VREFA": "5",
  "AGND": "6",
  "GND": "7",
  "~{LDAC}": "8",
  "DB7": "9",
  "DB6": "10",
  "DB5": "11",
  "DB4": "12",
  "DB3": "13",
  "DB2": "14",
  "DB1": "15",
  "DB0": "16",
  "~{WR}": "17",
  "A1": "18",
  "A0": "19",
  "VREFD": "20",
  "VREFC": "21",
  "VDD": "22",
  "VOUTD": "23",
  "VOUTC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREFB: "input", VREFA: "input", AGND: "input", GND: "power_in", "~{LDAC}": "input", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VREFD: "input", VREFC: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7225KR";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, PDIP-24
 *
 * KiCad symbol: `Analog_DAC:AD7225LN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 */
export class AD7225LN extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREFB": "4",
  "VREFA": "5",
  "AGND": "6",
  "GND": "7",
  "~{LDAC}": "8",
  "DB7": "9",
  "DB6": "10",
  "DB5": "11",
  "DB4": "12",
  "DB3": "13",
  "DB2": "14",
  "DB1": "15",
  "DB0": "16",
  "~{WR}": "17",
  "A1": "18",
  "A0": "19",
  "VREFD": "20",
  "VREFC": "21",
  "VDD": "22",
  "VOUTD": "23",
  "VOUTC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREFB: "input", VREFA: "input", AGND: "input", GND: "power_in", "~{LDAC}": "input", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VREFD: "input", VREFC: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7225LN";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, PLCC-28
 *
 * KiCad symbol: `Analog_DAC:AD7225LP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 */
export class AD7225LP extends Component.withPins({
  "VOUTB": "2",
  "VOUTA": "3",
  "VSS": "4",
  "VREFB": "5",
  "VREFA": "6",
  "AGND": "7",
  "GND": "9",
  "~{LDAC}": "10",
  "DB7": "11",
  "DB6": "12",
  "DB5": "13",
  "DB4": "14",
  "DB3": "16",
  "DB2": "17",
  "DB1": "18",
  "DB0": "19",
  "~{WR}": "20",
  "A0": "21",
  "A1": "23",
  "VREFD": "24",
  "VREFC": "25",
  "VDD": "26",
  "VOUTD": "27",
  "VOUTC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREFB: "input", VREFA: "input", AGND: "input", GND: "power_in", "~{LDAC}": "input", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A0: "input", A1: "input", VREFD: "input", VREFC: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7225LP";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, Separate Reference Voltage, SO-24
 *
 * KiCad symbol: `Analog_DAC:AD7225LR`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7225.pdf
 * Keywords: 8bit DAC 4CH.
 */
export class AD7225LR extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREFB": "4",
  "VREFA": "5",
  "AGND": "6",
  "GND": "7",
  "~{LDAC}": "8",
  "DB7": "9",
  "DB6": "10",
  "DB5": "11",
  "DB4": "12",
  "DB3": "13",
  "DB2": "14",
  "DB1": "15",
  "DB0": "16",
  "~{WR}": "17",
  "A1": "18",
  "A0": "19",
  "VREFD": "20",
  "VREFC": "21",
  "VDD": "22",
  "VOUTD": "23",
  "VOUTC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREFB: "input", VREFA: "input", AGND: "input", GND: "power_in", "~{LDAC}": "input", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VREFD: "input", VREFC: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7225LR";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, 4 Channel, Single Reference Voltage, SSOP-20
 *
 * KiCad symbol: `Analog_DAC:AD7226BRSZ`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7226.pdf
 * Keywords: 4CH DAC 8bit.
 */
export class AD7226BRSZ extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREF": "4",
  "AGND": "5",
  "GND": "6",
  "DB7": "7",
  "DB6": "8",
  "DB5": "9",
  "DB4": "10",
  "DB3": "11",
  "DB2": "12",
  "DB1": "13",
  "DB0": "14",
  "~{WR}": "15",
  "A1": "16",
  "A0": "17",
  "VDD": "18",
  "VOUTD": "19",
  "VOUTC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREF: "input", AGND: "input", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7226BRSZ";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, 4 Channel, Single Reference Voltage, DIP-20
 *
 * KiCad symbol: `Analog_DAC:AD7226KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7226.pdf
 * Keywords: 4CH DAC 8bit.
 */
export class AD7226KN extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREF": "4",
  "AGND": "5",
  "GND": "6",
  "DB7": "7",
  "DB6": "8",
  "DB5": "9",
  "DB4": "10",
  "DB3": "11",
  "DB2": "12",
  "DB1": "13",
  "DB0": "14",
  "~{WR}": "15",
  "A1": "16",
  "A0": "17",
  "VDD": "18",
  "VOUTD": "19",
  "VOUTC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREF: "input", AGND: "input", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7226KN";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, 4 Channel, Single Reference Voltage, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7226KP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7226.pdf
 * Keywords: 4CH DAC 8bit.
 */
export class AD7226KP extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREF": "4",
  "AGND": "5",
  "GND": "6",
  "DB7": "7",
  "DB6": "8",
  "DB5": "9",
  "DB4": "10",
  "DB3": "11",
  "DB2": "12",
  "DB1": "13",
  "DB0": "14",
  "~{WR}": "15",
  "A1": "16",
  "A0": "17",
  "VDD": "18",
  "VOUTD": "19",
  "VOUTC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREF: "input", AGND: "input", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7226KP";
  override referencePrefix = "U";
}

/**
 * Quad 8bit DAC, 4 Channel, Single Reference Voltage, SOIC-20
 *
 * KiCad symbol: `Analog_DAC:AD7226KR`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7226.pdf
 * Keywords: 4CH DAC 8bit.
 */
export class AD7226KR extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREF": "4",
  "AGND": "5",
  "GND": "6",
  "DB7": "7",
  "DB6": "8",
  "DB5": "9",
  "DB4": "10",
  "DB3": "11",
  "DB2": "12",
  "DB1": "13",
  "DB0": "14",
  "~{WR}": "15",
  "A1": "16",
  "A0": "17",
  "VDD": "18",
  "VOUTD": "19",
  "VOUTC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREF: "input", AGND: "input", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A1: "input", A0: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7226KR";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, DIP-24
 *
 * KiCad symbol: `Analog_DAC:AD7228ABN`. Reference prefix: `U`.
 * Footprint filters: PDIP*, DIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 */
export class AD7228ABN extends Component.withPins({
  "VDD": "1",
  "VOUT8": "2",
  "VOUT7": "3",
  "VOUT6": "4",
  "VOUT5": "5",
  "VOUT4": "6",
  "VOUT3": "7",
  "VOUT2": "8",
  "VOUT1": "9",
  "VSS": "10",
  "VREF": "11",
  "GND": "12",
  "DB7": "13",
  "DB6": "14",
  "DB5": "15",
  "DB4": "16",
  "DB3": "17",
  "DB2": "18",
  "DB1": "19",
  "DB0": "20",
  "~{WR}": "21",
  "A2": "22",
  "A1": "23",
  "A0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VOUT8: "output", VOUT7: "output", VOUT6: "output", VOUT5: "output", VOUT4: "output", VOUT3: "output", VOUT2: "output", VOUT1: "output", VSS: "power_in", VREF: "passive", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A2: "input", A1: "input", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7228ABN";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, PLCC-28
 *
 * KiCad symbol: `Analog_DAC:AD7228ABP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 */
export class AD7228ABP extends Component.withPins({
  "VDD": "2",
  "VOUT8": "3",
  "VOUT7": "4",
  "VOUT6": "5",
  "VOUT5": "6",
  "VOUT4": "7",
  "VOUT3": "9",
  "VOUT2": "10",
  "VOUT1": "11",
  "VSS": "12",
  "VREF": "13",
  "GND": "14",
  "DB7": "16",
  "DB6": "17",
  "DB5": "18",
  "DB4": "19",
  "DB3": "20",
  "DB2": "21",
  "DB1": "23",
  "DB0": "24",
  "~{WR}": "25",
  "A2": "26",
  "A1": "27",
  "A0": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VOUT8: "output", VOUT7: "output", VOUT6: "output", VOUT5: "output", VOUT4: "output", VOUT3: "output", VOUT2: "output", VOUT1: "output", VSS: "power_in", VREF: "passive", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A2: "input", A1: "input", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7228ABP";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, SOIC-24
 *
 * KiCad symbol: `Analog_DAC:AD7228ABR`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 */
export class AD7228ABR extends Component.withPins({
  "VDD": "1",
  "VOUT8": "2",
  "VOUT7": "3",
  "VOUT6": "4",
  "VOUT5": "5",
  "VOUT4": "6",
  "VOUT3": "7",
  "VOUT2": "8",
  "VOUT1": "9",
  "VSS": "10",
  "VREF": "11",
  "GND": "12",
  "DB7": "13",
  "DB6": "14",
  "DB5": "15",
  "DB4": "16",
  "DB3": "17",
  "DB2": "18",
  "DB1": "19",
  "DB0": "20",
  "~{WR}": "21",
  "A2": "22",
  "A1": "23",
  "A0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VOUT8: "output", VOUT7: "output", VOUT6: "output", VOUT5: "output", VOUT4: "output", VOUT3: "output", VOUT2: "output", VOUT1: "output", VSS: "power_in", VREF: "passive", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A2: "input", A1: "input", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7228ABR";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, DIP-24
 *
 * KiCad symbol: `Analog_DAC:AD7228ACN`. Reference prefix: `U`.
 * Footprint filters: PDIP*, DIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 */
export class AD7228ACN extends Component.withPins({
  "VDD": "1",
  "VOUT8": "2",
  "VOUT7": "3",
  "VOUT6": "4",
  "VOUT5": "5",
  "VOUT4": "6",
  "VOUT3": "7",
  "VOUT2": "8",
  "VOUT1": "9",
  "VSS": "10",
  "VREF": "11",
  "GND": "12",
  "DB7": "13",
  "DB6": "14",
  "DB5": "15",
  "DB4": "16",
  "DB3": "17",
  "DB2": "18",
  "DB1": "19",
  "DB0": "20",
  "~{WR}": "21",
  "A2": "22",
  "A1": "23",
  "A0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VOUT8: "output", VOUT7: "output", VOUT6: "output", VOUT5: "output", VOUT4: "output", VOUT3: "output", VOUT2: "output", VOUT1: "output", VSS: "power_in", VREF: "passive", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A2: "input", A1: "input", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7228ACN";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, PLCC-28
 *
 * KiCad symbol: `Analog_DAC:AD7228ACP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 */
export class AD7228ACP extends Component.withPins({
  "VDD": "2",
  "VOUT8": "3",
  "VOUT7": "4",
  "VOUT6": "5",
  "VOUT5": "6",
  "VOUT4": "7",
  "VOUT3": "9",
  "VOUT2": "10",
  "VOUT1": "11",
  "VSS": "12",
  "VREF": "13",
  "GND": "14",
  "DB7": "16",
  "DB6": "17",
  "DB5": "18",
  "DB4": "19",
  "DB3": "20",
  "DB2": "21",
  "DB1": "23",
  "DB0": "24",
  "~{WR}": "25",
  "A2": "26",
  "A1": "27",
  "A0": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VOUT8: "output", VOUT7: "output", VOUT6: "output", VOUT5: "output", VOUT4: "output", VOUT3: "output", VOUT2: "output", VOUT1: "output", VSS: "power_in", VREF: "passive", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A2: "input", A1: "input", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7228ACP";
  override referencePrefix = "U";
}

/**
 * 8bit DAC 8 Channel, Single Reference, SOIC-24
 *
 * KiCad symbol: `Analog_DAC:AD7228ACR`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7228.pdf
 * Keywords: 8bit DAC 8CH.
 */
export class AD7228ACR extends Component.withPins({
  "VDD": "1",
  "VOUT8": "2",
  "VOUT7": "3",
  "VOUT6": "4",
  "VOUT5": "5",
  "VOUT4": "6",
  "VOUT3": "7",
  "VOUT2": "8",
  "VOUT1": "9",
  "VSS": "10",
  "VREF": "11",
  "GND": "12",
  "DB7": "13",
  "DB6": "14",
  "DB5": "15",
  "DB4": "16",
  "DB3": "17",
  "DB2": "18",
  "DB1": "19",
  "DB0": "20",
  "~{WR}": "21",
  "A2": "22",
  "A1": "23",
  "A0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VOUT8: "output", VOUT7: "output", VOUT6: "output", VOUT5: "output", VOUT4: "output", VOUT3: "output", VOUT2: "output", VOUT1: "output", VSS: "power_in", VREF: "passive", GND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "input", A2: "input", A1: "input", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7228ACR";
  override referencePrefix = "U";
}

/**
 * 3V/5V, Rail-to-Rail, Quad, 8-Bit DAC, SPI Interface, SOIC-16/TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:AD7304`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x10.3mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7304_7305.pdf
 * Keywords: dac 4ch 8bit spi.
 */
export class AD7304 extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREFA": "4",
  "VREFB": "5",
  "GND": "6",
  "~{LDAC}": "7",
  "~{CLR}": "8",
  "~{CS}": "9",
  "CLK": "10",
  "SDI/SHDN": "11",
  "VREFC": "12",
  "VREFD": "13",
  "VDD": "14",
  "VOUTD": "15",
  "VOUTC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREFA: "input", VREFB: "input", GND: "power_in", "~{LDAC}": "output", "~{CLR}": "output", "~{CS}": "input", CLK: "input", "SDI/SHDN": "input", VREFC: "input", VREFD: "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7304";
  override referencePrefix = "U";
}

/**
 * 3V/5V, Rail-to-Rail, Quad, 8-Bit DAC, Parallel Interface, SOIC-20/TSSOP-20
 *
 * KiCad symbol: `Analog_DAC:AD7305`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x12.8mm*P1.27mm*, TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7304_7305.pdf
 * Keywords: dac 4ch 8bit parallel.
 */
export class AD7305 extends Component.withPins({
  "VOUTB": "1",
  "VOUTA": "2",
  "VSS": "3",
  "VREF": "4",
  "GND": "5",
  "~{LDAC}": "6",
  "DB7": "7",
  "DB6": "8",
  "DB5": "9",
  "DB4": "10",
  "DB3": "11",
  "DB2": "12",
  "DB1": "13",
  "DB0": "14",
  "~{WR}": "15",
  "A1": "16",
  "A0/SHDN": "17",
  "VDD": "18",
  "VOUTD": "19",
  "VOUTC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTB: "output", VOUTA: "output", VSS: "power_in", VREF: "input", GND: "power_in", "~{LDAC}": "input", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", "~{WR}": "output", A1: "input", "A0/SHDN": "input", VDD: "power_in", VOUTD: "output", VOUTC: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7305";
  override referencePrefix = "U";
}

/**
 * Serial-Input Micropower 12-Bit DAC, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Analog_DAC:AD7390`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7390_7391.pdf
 * Keywords: SPI 12 bit DAC.
 */
export class AD7390 extends Component.withPins({
  "~{LD}": "1",
  "CLK": "2",
  "SDI": "3",
  "~{CLR}": "4",
  "Vss": "5",
  "Vout": "6",
  "Vdd": "7",
  "Vref": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{LD}": "input", CLK: "input", SDI: "input", "~{CLR}": "input", Vss: "power_in", Vout: "output", Vdd: "power_in", Vref: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7390";
  override referencePrefix = "U";
}

/**
 * Serial-Input Micropower 10-Bit DAC, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Analog_DAC:AD7391`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7390_7391.pdf
 * Keywords: SPI 10 bit DAC.
 */
export class AD7391 extends Component.withPins({
  "~{LD}": "1",
  "CLK": "2",
  "SDI": "3",
  "~{CLR}": "4",
  "Vss": "5",
  "Vout": "6",
  "Vdd": "7",
  "Vref": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{LD}": "input", CLK: "input", SDI: "input", "~{CLR}": "input", Vss: "power_in", Vout: "output", Vdd: "power_in", Vref: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7391";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD7533JN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 */
export class AD7533JN extends Component.withPins({
  "I_OUT1": "1",
  "I_OUT2": "2",
  "GND": "3",
  "D9(MSB)": "4",
  "D8": "5",
  "D7": "6",
  "D6": "7",
  "D5": "8",
  "D4": "9",
  "D3": "10",
  "D2": "11",
  "D1": "12",
  "D0(LSB)": "13",
  "VCC": "14",
  "VREF": "15",
  "RFBACK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I_OUT1: "passive", I_OUT2: "passive", GND: "power_in", "D9(MSB)": "input", D8: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", "D0(LSB)": "input", VCC: "power_in", VREF: "passive", RFBACK: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7533JN";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7533JP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 */
export class AD7533JP extends Component.withPins({
  "I_OUT1": "2",
  "I_OUT2": "3",
  "GND": "4",
  "D9(MSB)": "5",
  "D8": "7",
  "D7": "8",
  "D6": "9",
  "D5": "10",
  "D4": "12",
  "D3": "13",
  "D2": "14",
  "D1": "15",
  "D0(LSB)": "17",
  "VDD": "18",
  "VREF": "19",
  "RFBACK": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I_OUT1: "passive", I_OUT2: "passive", GND: "power_in", "D9(MSB)": "input", D8: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", "D0(LSB)": "input", VDD: "power_in", VREF: "passive", RFBACK: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7533JP";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD7533KN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 */
export class AD7533KN extends Component.withPins({
  "I_OUT1": "1",
  "I_OUT2": "2",
  "GND": "3",
  "D9(MSB)": "4",
  "D8": "5",
  "D7": "6",
  "D6": "7",
  "D5": "8",
  "D4": "9",
  "D3": "10",
  "D2": "11",
  "D1": "12",
  "D0(LSB)": "13",
  "VCC": "14",
  "VREF": "15",
  "RFBACK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I_OUT1: "passive", I_OUT2: "passive", GND: "power_in", "D9(MSB)": "input", D8: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", "D0(LSB)": "input", VCC: "power_in", VREF: "passive", RFBACK: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7533KN";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, PLCC-20
 *
 * KiCad symbol: `Analog_DAC:AD7533KP`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 */
export class AD7533KP extends Component.withPins({
  "I_OUT1": "2",
  "I_OUT2": "3",
  "GND": "4",
  "D9(MSB)": "5",
  "D8": "7",
  "D7": "8",
  "D6": "9",
  "D5": "10",
  "D4": "12",
  "D3": "13",
  "D2": "14",
  "D1": "15",
  "D0(LSB)": "17",
  "VDD": "18",
  "VREF": "19",
  "RFBACK": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I_OUT1: "passive", I_OUT2: "passive", GND: "power_in", "D9(MSB)": "input", D8: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", "D0(LSB)": "input", VDD: "power_in", VREF: "passive", RFBACK: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7533KP";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, SOIC-16
 *
 * KiCad symbol: `Analog_DAC:AD7533KR`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 */
export class AD7533KR extends Component.withPins({
  "I_OUT1": "1",
  "I_OUT2": "2",
  "GND": "3",
  "D9(MSB)": "4",
  "D8": "5",
  "D7": "6",
  "D6": "7",
  "D5": "8",
  "D4": "9",
  "D3": "10",
  "D2": "11",
  "D1": "12",
  "D0(LSB)": "13",
  "VCC": "14",
  "VREF": "15",
  "RFBACK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I_OUT1: "passive", I_OUT2: "passive", GND: "power_in", "D9(MSB)": "input", D8: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", "D0(LSB)": "input", VCC: "power_in", VREF: "passive", RFBACK: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7533KR";
  override referencePrefix = "U";
}

/**
 * 10bit Multiplying DAC, 1 Channel, DIP-16
 *
 * KiCad symbol: `Analog_DAC:AD7533LN`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD7533.pdf
 * Keywords: 10bit DAC 1CH.
 */
export class AD7533LN extends Component.withPins({
  "I_OUT1": "1",
  "I_OUT2": "2",
  "GND": "3",
  "D9(MSB)": "4",
  "D8": "5",
  "D7": "6",
  "D6": "7",
  "D5": "8",
  "D4": "9",
  "D3": "10",
  "D2": "11",
  "D1": "12",
  "D0(LSB)": "13",
  "VCC": "14",
  "VREF": "15",
  "RFBACK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { I_OUT1: "passive", I_OUT2: "passive", GND: "power_in", "D9(MSB)": "input", D8: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", "D0(LSB)": "input", VCC: "power_in", VREF: "passive", RFBACK: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD7533LN";
  override referencePrefix = "U";
}

/**
 * DA Converter 8 bits - 20MHz, PDIP/SOIC-24
 *
 * KiCad symbol: `Analog_DAC:AD775`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD775.pdf
 * Keywords: DAC CNA.
 */
export class AD775 extends Component.withPins({
  "~{OE}": "1",
  "DGND_2": "2",
  "D0": "3",
  "D1": "4",
  "D2": "5",
  "D3": "6",
  "D4": "7",
  "D5": "8",
  "D6": "9",
  "D7": "10",
  "DVDD_11": "11",
  "CLK": "12",
  "DVDD_13": "13",
  "AVDD_14": "14",
  "AVDD_15": "15",
  "VRTS": "16",
  "VRT": "17",
  "AVDD_18": "18",
  "VIN": "19",
  "AGND_20": "20",
  "AGND_21": "21",
  "VRBS": "22",
  "VRB": "23",
  "DGND_24": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{OE}": "input", DGND_2: "power_in", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", DVDD_11: "power_in", CLK: "input", DVDD_13: "power_in", AVDD_14: "power_in", AVDD_15: "power_in", VRTS: "input", VRT: "input", AVDD_18: "power_in", VIN: "input", AGND_20: "power_in", AGND_21: "power_in", VRBS: "input", VRB: "input", DGND_24: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD775";
  override referencePrefix = "U";
}

/**
 * Analog Devices Quad, Low Power, 12-Bit, 180 MSPS, Digital-to-Analog Converter and Waveform Generator
 *
 * KiCad symbol: `Analog_DAC:AD9106BCP`. Reference prefix: `U`.
 * Footprint filters: *LFCSP*1EP*5x5mm*P0.5mm*EP3.6x3.6mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad9106.pdf
 * Keywords: analog devices DAC DDS.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class AD9106BCP extends Component.withPins({
  "SCLK": "1",
  "SDIO": "2",
  "DGND_3": "3",
  "DLDO2": "4",
  "DVDD": "5",
  "DLDO1": "6",
  "SDO": "7",
  "~{CS}": "8",
  "~{RESET}": "9",
  "IOUTP4": "10",
  "IOUTN4": "11",
  "AVDD2": "12",
  "IOUTN3": "13",
  "IOUTP3": "14",
  "AGND_15": "15",
  "FSADJ3": "16",
  "FSADJ4": "17",
  "REFIO": "18",
  "CLKGND": "19",
  "CLKN": "20",
  "CLKP": "21",
  "CLDO": "22",
  "CLKVDD": "23",
  "FSADJ2/CAL_SENSE": "24",
  "FSADJ1": "25",
  "AGND_26": "26",
  "IOUTP1": "27",
  "IOUTN1": "28",
  "AVDD1": "29",
  "IOUTN2": "30",
  "IOUTP2": "31",
  "~{TRIGGER}": "32",
  "DGND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCLK: "input", SDIO: "bidirectional", DGND_3: "power_in", DLDO2: "power_out", DVDD: "power_in", DLDO1: "power_out", SDO: "output", "~{CS}": "input", "~{RESET}": "input", IOUTP4: "output", IOUTN4: "output", AVDD2: "power_in", IOUTN3: "output", IOUTP3: "output", AGND_15: "power_in", FSADJ3: "output", FSADJ4: "output", REFIO: "bidirectional", CLKGND: "power_in", CLKN: "input", CLKP: "input", CLDO: "bidirectional", CLKVDD: "power_in", "FSADJ2/CAL_SENSE": "bidirectional", FSADJ1: "output", AGND_26: "passive", IOUTP1: "output", IOUTN1: "output", AVDD1: "power_in", IOUTN2: "output", IOUTP2: "output", "~{TRIGGER}": "input", DGND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD9106BCP";
  override referencePrefix = "U";
}

/**
 * 1.6GSPS 16bit dual-channel DAC, LFCSP-72
 *
 * KiCad symbol: `Analog_DAC:AD9142`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*10x10mm*P0.5mm*EP6.15x6.15mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9142.pdf
 * Keywords: 16bit DAC 2CH.
 * Default footprint: Package_CSP:LFCSP-72-1EP_10x10mm_P0.5mm_EP6.15x6.15mm.
 */
export class AD9142 extends Component.withPins({
  "CVDD18_1": "1",
  "REFP/SYNCP": "2",
  "REFN/SYNCN": "3",
  "CVDD18_4": "4",
  "~{RESET}": "5",
  "TXEN": "6",
  "DVDD18_7": "7",
  "FRAMEP": "8",
  "FRAMEN": "9",
  "D15P": "10",
  "D15N": "11",
  "DVDD18_12": "12",
  "D14P": "13",
  "D14N": "14",
  "D13P": "15",
  "D13N": "16",
  "D12P": "17",
  "D12N": "18",
  "DVDD18_19": "19",
  "D11P": "20",
  "D11N": "21",
  "D10P": "22",
  "D10N": "23",
  "D9P": "24",
  "D9N": "25",
  "D8P": "26",
  "D8N": "27",
  "DCIP": "28",
  "DCIN": "29",
  "D7P": "30",
  "D7N": "31",
  "D6P": "32",
  "D6N": "33",
  "D5P": "34",
  "D5N": "35",
  "DVDD18_36": "36",
  "D4P": "37",
  "D4N": "38",
  "D3P": "39",
  "D3N": "40",
  "D2P": "41",
  "D2N": "42",
  "DVDD18_43": "43",
  "D1P": "44",
  "D1N": "45",
  "D0P": "46",
  "D0N": "47",
  "DVDD18_48": "48",
  "DVDD18_49": "49",
  "~{IRQ2}": "50",
  "~{IRQ1}": "51",
  "SDIO": "52",
  "SCLK": "53",
  "~{CS}": "54",
  "AVDD33_55": "55",
  "IOUT2P": "56",
  "IOUT2N": "57",
  "AVDD33_58": "58",
  "CVDD18_59": "59",
  "CVDD18_60": "60",
  "DACCLKN": "61",
  "DACCLKP": "62",
  "CVDD18_63": "63",
  "CVDD18_64": "64",
  "AVDD33_65": "65",
  "IOUT1N": "66",
  "IOUT1P": "67",
  "AVDD33_68": "68",
  "FSADJ": "69",
  "REFIO": "70",
  "CVDD18_71": "71",
  "CVDD18_72": "72",
  "AVSS": "73",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CVDD18_1: "power_in", "REFP/SYNCP": "input", "REFN/SYNCN": "input", CVDD18_4: "passive", "~{RESET}": "input", TXEN: "input", DVDD18_7: "power_in", FRAMEP: "input", FRAMEN: "input", D15P: "input", D15N: "input", DVDD18_12: "passive", D14P: "input", D14N: "input", D13P: "input", D13N: "input", D12P: "input", D12N: "input", DVDD18_19: "passive", D11P: "input", D11N: "input", D10P: "input", D10N: "input", D9P: "input", D9N: "input", D8P: "input", D8N: "input", DCIP: "input", DCIN: "input", D7P: "input", D7N: "input", D6P: "input", D6N: "input", D5P: "input", D5N: "input", DVDD18_36: "passive", D4P: "input", D4N: "input", D3P: "input", D3N: "input", D2P: "input", D2N: "input", DVDD18_43: "passive", D1P: "input", D1N: "input", D0P: "input", D0N: "input", DVDD18_48: "passive", DVDD18_49: "passive", "~{IRQ2}": "input", "~{IRQ1}": "input", SDIO: "bidirectional", SCLK: "input", "~{CS}": "input", AVDD33_55: "power_in", IOUT2P: "output", IOUT2N: "output", AVDD33_58: "passive", CVDD18_59: "passive", CVDD18_60: "passive", DACCLKN: "input", DACCLKP: "input", CVDD18_63: "passive", CVDD18_64: "passive", AVDD33_65: "passive", IOUT1N: "output", IOUT1P: "output", AVDD33_68: "passive", FSADJ: "input", REFIO: "input", CVDD18_71: "passive", CVDD18_72: "passive", AVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD9142";
  override referencePrefix = "U";
}

/**
 * 210MSPS 14bit DAC, TSSOP-28
 *
 * KiCad symbol: `Analog_DAC:AD9744`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9744.pdf
 * Keywords: 14bit DAC 1CH.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class AD9744 extends Component.withPins({
  "D13": "1",
  "D12": "2",
  "D11": "3",
  "D10": "4",
  "D9": "5",
  "D8": "6",
  "D7": "7",
  "D6": "8",
  "D5": "9",
  "D4": "10",
  "D3": "11",
  "D2": "12",
  "D1": "13",
  "D0": "14",
  "SLEEP": "15",
  "REFLO": "16",
  "REFIO": "17",
  "FS_ADJ": "18",
  "AGND": "20",
  "IOUTB": "21",
  "IOUTA": "22",
  "AVDD": "24",
  "MODE": "25",
  "DGND": "26",
  "DVDD": "27",
  "CLK": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D13: "input", D12: "input", D11: "input", D10: "input", D9: "input", D8: "input", D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", D0: "input", SLEEP: "input", REFLO: "input", REFIO: "input", FS_ADJ: "input", AGND: "power_in", IOUTB: "output", IOUTA: "output", AVDD: "power_in", MODE: "input", DGND: "power_in", DVDD: "power_in", CLK: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:AD9744";
  override referencePrefix = "U";
}

/**
 * Single-supply, 8bit, 8 ch, SAR, 70kHz SR, 2.7 - 5 VDD, I2C, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:ADS7830`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7830.pdf
 * Keywords: 8bit DAC 8CH.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class ADS7830 extends Component.withPins({
  "CH0": "1",
  "CH1": "2",
  "CH2": "3",
  "CH3": "4",
  "CH4": "5",
  "CH5": "6",
  "CH6": "7",
  "CH7": "8",
  "GND": "9",
  "REFin/REFout": "10",
  "COM": "11",
  "A0": "12",
  "A1": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CH0: "input", CH1: "input", CH2: "input", CH3: "input", CH4: "input", CH5: "input", CH6: "input", CH7: "input", GND: "power_in", "REFin/REFout": "bidirectional", COM: "input", A0: "input", A1: "input", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:ADS7830";
  override referencePrefix = "U";
}

/**
 * 24-Bit, 192-kHz Stereo D/A Converter, TSSOP-10
 *
 * KiCad symbol: `Analog_DAC:CS434x-xZZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS4344-45-48_F2.pdf
 * Keywords: 24-bit PCM DAC.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class CS434x_xZZ extends Component.withPins({
  "SDIN": "1",
  "~{DEM}/SCLK": "2",
  "LRCK": "3",
  "MCLK": "4",
  "VQ": "5",
  "FILT+": "6",
  "AOUTL": "7",
  "AGND": "8",
  "VA": "9",
  "AOUTR": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDIN: "input", "~{DEM}/SCLK": "input", LRCK: "input", MCLK: "input", VQ: "passive", "FILT+": "passive", AOUTL: "output", AGND: "power_in", VA: "power_in", AOUTR: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:CS434x-xZZ";
  override referencePrefix = "U";
}

/**
 * DA Converter 8 bits
 *
 * KiCad symbol: `Analog_DAC:DAC08`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DAC08.pdf
 * Keywords: DAC CNA.
 */
export class DAC08 extends Component.withPins({
  "VLC": "1",
  "I+": "2",
  "V-": "3",
  "I-": "4",
  "B0": "5",
  "B1": "6",
  "B2": "7",
  "B3": "8",
  "B4": "9",
  "B5": "10",
  "B6": "11",
  "B7": "12",
  "V+": "13",
  "R+": "14",
  "R-": "15",
  "CMP": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VLC: "input", "I+": "output", "V-": "power_in", "I-": "output", B0: "input", B1: "input", B2: "input", B3: "input", B4: "input", B5: "input", B6: "input", B7: "input", "V+": "power_in", "R+": "input", "R-": "input", CMP: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC08";
  override referencePrefix = "U";
}

/**
 * 8-bit multiplying DAC
 *
 * KiCad symbol: `Analog_DAC:MC1408_DIP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.pinballpcb.com/datasheets/OnMC1408-dac.pdf
 * Keywords: 8 bit multiplying DAC.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MC1408_DIP extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "VEE": "3",
  "I0": "4",
  "A8": "5",
  "A7": "6",
  "A6": "7",
  "A5": "8",
  "A4": "9",
  "A3": "10",
  "A2": "11",
  "A1": "12",
  "VCC": "13",
  "VREF+": "14",
  "VREF-": "15",
  "COMPEN": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", VEE: "power_in", I0: "input", A8: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", VCC: "power_in", "VREF+": "output", "VREF-": "output", COMPEN: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MC1408_DIP";
  override referencePrefix = "U";
}

/**
 * 8-bit multiplying DAC
 *
 * KiCad symbol: `Analog_DAC:DAC0808_DIP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac0808.pdf
 * Keywords: 8 bit multiplying DAC.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class DAC0808_DIP extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "VEE": "3",
  "I0": "4",
  "A8": "5",
  "A7": "6",
  "A6": "7",
  "A5": "8",
  "A4": "9",
  "A3": "10",
  "A2": "11",
  "A1": "12",
  "VCC": "13",
  "VREF+": "14",
  "VREF-": "15",
  "COMPEN": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", VEE: "power_in", I0: "input", A8: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", VCC: "power_in", "VREF+": "output", "VREF-": "output", COMPEN: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC0808_DIP";
  override referencePrefix = "U";
}

/**
 * 8-bit multiplying DAC
 *
 * KiCad symbol: `Analog_DAC:MC1408_SOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.pinballpcb.com/datasheets/OnMC1408-dac.pdf
 * Keywords: 8 bit multiplying DAC.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MC1408_SOIC extends Component.withPins({
  "VCC": "1",
  "VREF+": "2",
  "VREF-": "3",
  "COMPEN": "4",
  "NC": "5",
  "GND": "6",
  "VEE": "7",
  "I0": "8",
  "A1": "9",
  "A2": "10",
  "A3": "11",
  "A4": "12",
  "A5": "13",
  "A6": "14",
  "A7": "15",
  "A8": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "VREF+": "output", "VREF-": "output", COMPEN: "passive", NC: "no_connect", GND: "power_in", VEE: "power_in", I0: "input", A1: "input", A2: "input", A3: "input", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MC1408_SOIC";
  override referencePrefix = "U";
}

/**
 * 8-bit multiplying DAC
 *
 * KiCad symbol: `Analog_DAC:DAC0808_SOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac0808.pdf
 * Keywords: 8 bit multiplying DAC.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class DAC0808_SOIC extends Component.withPins({
  "VCC": "1",
  "VREF+": "2",
  "VREF-": "3",
  "COMPEN": "4",
  "NC": "5",
  "GND": "6",
  "VEE": "7",
  "I0": "8",
  "A1": "9",
  "A2": "10",
  "A3": "11",
  "A4": "12",
  "A5": "13",
  "A6": "14",
  "A7": "15",
  "A8": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "VREF+": "output", "VREF-": "output", COMPEN: "passive", NC: "no_connect", GND: "power_in", VEE: "power_in", I0: "input", A1: "input", A2: "input", A3: "input", A4: "input", A5: "input", A6: "input", A7: "input", A8: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC0808_SOIC";
  override referencePrefix = "U";
}

/**
 * 8-bit Micropower DAC with I2C-Compatible Interface, SOT-23-6
 *
 * KiCad symbol: `Analog_DAC:DAC081C081CIMK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/dac081c081.pdf
 * Keywords: I2C DAC 8-bit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class DAC081C081CIMK extends Component.withPins({
  "VOUT": "1",
  "VA": "2",
  "GND": "3",
  "SDA": "4",
  "SCL": "5",
  "ADR0": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUT: "output", VA: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", ADR0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC081C081CIMK";
  override referencePrefix = "U";
}

/**
 * Double-Buffered D to A Converters, DIP-20
 *
 * KiCad symbol: `Analog_DAC:DAC1007LCN`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://pdf.datasheetcatalog.com/datasheets/400/195351_DS.pdf
 * Keywords: DAC.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class DAC1007LCN extends Component.withPins({
  "~{CS}": "1",
  "~{WR}": "2",
  "Byte1/~{Byte2}": "3",
  "~{XFER}": "4",
  "DI5": "5",
  "DI6": "6",
  "DI7": "7",
  "DI8": "8",
  "DI9(MSB)": "9",
  "GND": "10",
  "I_{OUT}2": "11",
  "I_{OUT}1": "12",
  "V_{REF}": "13",
  "R_{FB}": "14",
  "DI0(LSB)": "15",
  "DI1": "16",
  "DI2": "17",
  "DI3": "18",
  "DI4": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "~{WR}": "input", "Byte1/~{Byte2}": "input", "~{XFER}": "input", DI5: "input", DI6: "input", DI7: "input", DI8: "input", "DI9(MSB)": "input", GND: "power_in", "I_{OUT}2": "output", "I_{OUT}1": "output", "V_{REF}": "input", "R_{FB}": "input", "DI0(LSB)": "input", DI1: "input", DI2: "input", DI3: "input", DI4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC1007LCN";
  override referencePrefix = "U";
}

/**
 * Double-Buffered D to A Converters, DIP-20
 *
 * KiCad symbol: `Analog_DAC:DAC1006LCN`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://pdf.datasheetcatalog.com/datasheets/400/195351_DS.pdf
 * Keywords: DAC.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class DAC1006LCN extends Component.withPins({
  "~{CS}": "1",
  "~{WR}": "2",
  "Byte1/~{Byte2}": "3",
  "~{XFER}": "4",
  "DI5": "5",
  "DI6": "6",
  "DI7": "7",
  "DI8": "8",
  "DI9(MSB)": "9",
  "GND": "10",
  "I_{OUT}2": "11",
  "I_{OUT}1": "12",
  "V_{REF}": "13",
  "R_{FB}": "14",
  "DI0(LSB)": "15",
  "DI1": "16",
  "DI2": "17",
  "DI3": "18",
  "DI4": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "~{WR}": "input", "Byte1/~{Byte2}": "input", "~{XFER}": "input", DI5: "input", DI6: "input", DI7: "input", DI8: "input", "DI9(MSB)": "input", GND: "power_in", "I_{OUT}2": "output", "I_{OUT}1": "output", "V_{REF}": "input", "R_{FB}": "input", "DI0(LSB)": "input", DI1: "input", DI2: "input", DI3: "input", DI4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC1006LCN";
  override referencePrefix = "U";
}

/**
 * Double-Buffered D to A Converters, DIP-20
 *
 * KiCad symbol: `Analog_DAC:DAC1006LCWM`. Reference prefix: `U`.
 * Footprint filters: *SOIC*W_7.5x12.8mm*.
 * @see https://pdf.datasheetcatalog.com/datasheets/400/195351_DS.pdf
 * Keywords: DAC.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class DAC1006LCWM extends Component.withPins({
  "~{CS}": "1",
  "~{WR}": "2",
  "Byte1/~{Byte2}": "3",
  "~{XFER}": "4",
  "DI5": "5",
  "DI6": "6",
  "DI7": "7",
  "DI8": "8",
  "DI9(MSB)": "9",
  "GND": "10",
  "I_{OUT}2": "11",
  "I_{OUT}1": "12",
  "V_{REF}": "13",
  "R_{FB}": "14",
  "DI0(LSB)": "15",
  "DI1": "16",
  "DI2": "17",
  "DI3": "18",
  "DI4": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "~{WR}": "input", "Byte1/~{Byte2}": "input", "~{XFER}": "input", DI5: "input", DI6: "input", DI7: "input", DI8: "input", "DI9(MSB)": "input", GND: "power_in", "I_{OUT}2": "output", "I_{OUT}1": "output", "V_{REF}": "input", "R_{FB}": "input", "DI0(LSB)": "input", DI1: "input", DI2: "input", DI3: "input", DI4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC1006LCWM";
  override referencePrefix = "U";
}

/**
 * Double-Buffered D to A Converters, DIP-20
 *
 * KiCad symbol: `Analog_DAC:DAC1008LCN`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://pdf.datasheetcatalog.com/datasheets/400/195351_DS.pdf
 * Keywords: DAC.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class DAC1008LCN extends Component.withPins({
  "~{CS}": "1",
  "~{WR}": "2",
  "Byte1/~{Byte2}": "3",
  "~{XFER}": "4",
  "DI5": "5",
  "DI6": "6",
  "DI7": "7",
  "DI8": "8",
  "DI9(MSB)": "9",
  "GND": "10",
  "I_{OUT}2": "11",
  "I_{OUT}1": "12",
  "V_{REF}": "13",
  "R_{FB}": "14",
  "DI0(LSB)": "15",
  "DI1": "16",
  "DI2": "17",
  "DI3": "18",
  "DI4": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "~{WR}": "input", "Byte1/~{Byte2}": "input", "~{XFER}": "input", DI5: "input", DI6: "input", DI7: "input", DI8: "input", "DI9(MSB)": "input", GND: "power_in", "I_{OUT}2": "output", "I_{OUT}1": "output", "V_{REF}": "input", "R_{FB}": "input", "DI0(LSB)": "input", DI1: "input", DI2: "input", DI3: "input", DI4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC1008LCN";
  override referencePrefix = "U";
}

/**
 * 10-bit Micropower DAC with I2C-Compatible Interface, SOT-23-6
 *
 * KiCad symbol: `Analog_DAC:DAC101C081CIMK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/dac101c081.pdf
 * Keywords: I2C DAC 10-bit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class DAC101C081CIMK extends Component.withPins({
  "VOUT": "1",
  "VA": "2",
  "GND": "3",
  "SDA": "4",
  "SCL": "5",
  "ADR0": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUT: "output", VA: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", ADR0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC101C081CIMK";
  override referencePrefix = "U";
}

/**
 * 12-bit Micropower DAC with I2C-Compatible Interface, SOT-23-6
 *
 * KiCad symbol: `Analog_DAC:DAC121C081CIMK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/dac121c081.pdf
 * Keywords: I2C DAC 12-bit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class DAC121C081CIMK extends Component.withPins({
  "VOUT": "1",
  "VA": "2",
  "GND": "3",
  "SDA": "4",
  "SCL": "5",
  "ADR0": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUT: "output", VA: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", ADR0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC121C081CIMK";
  override referencePrefix = "U";
}

/**
 * 20-Bit , Low-Power Digital-to-Analog Converter, SSOP-16
 *
 * KiCad symbol: `Analog_DAC:DAC1220E`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac1220.pdf
 * Keywords: DAC.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 */
export class DAC1220E extends Component.withPins({
  "DVDD": "1",
  "XOUT": "2",
  "XIN": "3",
  "DGND": "4",
  "AVDD": "5",
  "DNC_6": "6",
  "DNC_7": "7",
  "DNC_8": "8",
  "C1": "9",
  "C2": "10",
  "VOUT": "11",
  "VREF": "12",
  "AGND": "13",
  "~{CS}": "14",
  "SDIO": "15",
  "SCLK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVDD: "power_in", XOUT: "output", XIN: "input", DGND: "power_in", AVDD: "power_in", DNC_6: "no_connect", DNC_7: "no_connect", DNC_8: "no_connect", C1: "passive", C2: "passive", VOUT: "output", VREF: "input", AGND: "power_in", "~{CS}": "input", SDIO: "bidirectional", SCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC1220E";
  override referencePrefix = "U";
}

/**
 * 8-Bit, Single-Channel, Voltage Output, Serial Interface Digital-to-Analog Converters, SC-70
 *
 * KiCad symbol: `Analog_DAC:DAC5311xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.ti.com/lit/ds/symlink/dac5311.pdf
 * Keywords: DAC SPI 1-channel.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class DAC5311xDCK extends Component.withPins({
  "~{SYNC}": "1",
  "SCLK": "2",
  "DIN": "3",
  "AVDD/AVREF": "4",
  "GND": "5",
  "VOUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SYNC}": "input", SCLK: "input", DIN: "input", "AVDD/AVREF": "power_in", GND: "power_in", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC5311xDCK";
  override referencePrefix = "U";
}

/**
 * 8-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:DAC5578xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DAC5578xPW extends Component.withPins({
  "~{LDAC}": "1",
  "ADDR0": "2",
  "AVDD": "3",
  "VOUTA": "4",
  "VOUTC": "5",
  "VOUTE": "6",
  "VOUTG": "7",
  "VREFIN": "8",
  "~{CLR}": "9",
  "VOUTH": "10",
  "VOUTF": "11",
  "VOUTD": "12",
  "VOUTB": "13",
  "GND": "14",
  "SDA": "15",
  "SCL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{LDAC}": "input", ADDR0: "input", AVDD: "power_in", VOUTA: "output", VOUTC: "output", VOUTE: "output", VOUTG: "output", VREFIN: "input", "~{CLR}": "input", VOUTH: "output", VOUTF: "output", VOUTD: "output", VOUTB: "output", GND: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC5578xPW";
  override referencePrefix = "U";
}

/**
 * 8-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, QFN-24
 *
 * KiCad symbol: `Analog_DAC:DAC5578xRGE`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class DAC5578xRGE extends Component.withPins({
  "NC_1": "1",
  "AVDD": "2",
  "VOUTA": "3",
  "VOUTC": "4",
  "VOUTE": "5",
  "VOUTG": "6",
  "NC_7": "7",
  "VREFIN": "8",
  "RSTSEL": "9",
  "ADDR1": "10",
  "ADDR0": "11",
  "~{CLR}": "12",
  "VOUTH": "13",
  "VOUTF": "14",
  "VOUTD": "15",
  "VOUTB": "16",
  "GND": "17",
  "NC_18": "18",
  "SDA": "19",
  "SCL": "20",
  "TWOC": "21",
  "~{LDAC}": "22",
  "NC_23": "23",
  "NC_24": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", AVDD: "power_in", VOUTA: "output", VOUTC: "output", VOUTE: "output", VOUTG: "output", NC_7: "no_connect", VREFIN: "input", RSTSEL: "input", ADDR1: "input", ADDR0: "input", "~{CLR}": "input", VOUTH: "output", VOUTF: "output", VOUTD: "output", VOUTB: "output", GND: "power_in", NC_18: "no_connect", SDA: "bidirectional", SCL: "input", TWOC: "input", "~{LDAC}": "input", NC_23: "no_connect", NC_24: "no_connect", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC5578xRGE";
  override referencePrefix = "U";
}

/**
 * 16-bit dual-channel voltage output DAC, 2.5V 5ppm/°C internal reference, WSON-10
 *
 * KiCad symbol: `Analog_DAC:DAC80502`. Reference prefix: `U`.
 * Footprint filters: Texas*2.5x2.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac80502.pdf
 * Keywords: texas digital-analog converter.
 * Default footprint: Package_SON:Texas_DRX_WSON-10_2.5x2.5mm_P0.5mm.
 */
export class DAC80502 extends Component.withPins({
  "VDD": "1",
  "VOUTA": "2",
  "RSTSEL": "3",
  "AGND": "4",
  "SPI2C": "5",
  "~{SYNC}/A0": "7",
  "SDIN/SDA": "8",
  "VOUTB": "9",
  "VREFIO": "10",
  "SCLK/SCL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VOUTA: "output", RSTSEL: "input", AGND: "power_in", SPI2C: "input", "~{SYNC}/A0": "input", "SDIN/SDA": "bidirectional", VOUTB: "output", VREFIO: "bidirectional", "SCLK/SCL": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC80502";
  override referencePrefix = "U";
}

/**
 * 12-bit dual-channel voltage output DAC, 2.5V 5ppm/°C internal reference, WSON-10
 *
 * KiCad symbol: `Analog_DAC:DAC60502`. Reference prefix: `U`.
 * Footprint filters: Texas*2.5x2.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac80502.pdf
 * Keywords: texas digital-analog converter.
 * Default footprint: Package_SON:Texas_DRX_WSON-10_2.5x2.5mm_P0.5mm.
 */
export class DAC60502 extends Component.withPins({
  "VDD": "1",
  "VOUTA": "2",
  "RSTSEL": "3",
  "AGND": "4",
  "SPI2C": "5",
  "~{SYNC}/A0": "7",
  "SDIN/SDA": "8",
  "VOUTB": "9",
  "VREFIO": "10",
  "SCLK/SCL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VOUTA: "output", RSTSEL: "input", AGND: "power_in", SPI2C: "input", "~{SYNC}/A0": "input", "SDIN/SDA": "bidirectional", VOUTB: "output", VREFIO: "bidirectional", "SCLK/SCL": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC60502";
  override referencePrefix = "U";
}

/**
 * 16-bit quad-channel voltage output DAC, 2.5V 2ppm/°C internal reference, WQFN-16
 *
 * KiCad symbol: `Analog_DAC:DAC80504`. Reference prefix: `U`.
 * Footprint filters: Texas*RTE0016D*WQFN*16*EP0.8x0.8mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac80504.pdf
 * Keywords: texas quad digital-analog converter.
 * Default footprint: Package_DFN_QFN:Texas_RTE0016D_WQFN-16-1EP_3x3mm_P0.5mm_EP0.8x0.8mm_ThermalVias.
 */
export class DAC80504 extends Component.withPins({
  "REF": "1",
  "OUT0": "2",
  "OUT1": "3",
  "OUT2": "4",
  "OUT3": "5",
  "GND": "6",
  "VDD": "7",
  "GAIN": "8",
  "RSTSEL": "9",
  "REFDIV": "10",
  "~{LDAC}": "11",
  "~{CS}": "12",
  "SCLK": "13",
  "SDI": "14",
  "SDO/~{ALARM}": "15",
  "VIO": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "bidirectional", OUT0: "output", OUT1: "output", OUT2: "output", OUT3: "output", GND: "power_in", VDD: "power_in", GAIN: "input", RSTSEL: "input", REFDIV: "input", "~{LDAC}": "input", "~{CS}": "input", SCLK: "input", SDI: "input", "SDO/~{ALARM}": "output", VIO: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC80504";
  override referencePrefix = "U";
}

/**
 * 12-bit quad-channel voltage output DAC, 2.5V 2ppm/°C internal reference, WQFN-16
 *
 * KiCad symbol: `Analog_DAC:DAC60504`. Reference prefix: `U`.
 * Footprint filters: Texas*RTE0016D*WQFN*16*EP0.8x0.8mm*.
 * @see https://www.ti.com/lit/gpn/dac60504
 * Keywords: texas quad digital-analog converter.
 * Default footprint: Package_DFN_QFN:Texas_RTE0016D_WQFN-16-1EP_3x3mm_P0.5mm_EP0.8x0.8mm_ThermalVias.
 */
export class DAC60504 extends Component.withPins({
  "REF": "1",
  "OUT0": "2",
  "OUT1": "3",
  "OUT2": "4",
  "OUT3": "5",
  "GND": "6",
  "VDD": "7",
  "GAIN": "8",
  "RSTSEL": "9",
  "REFDIV": "10",
  "~{LDAC}": "11",
  "~{CS}": "12",
  "SCLK": "13",
  "SDI": "14",
  "SDO/~{ALARM}": "15",
  "VIO": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "bidirectional", OUT0: "output", OUT1: "output", OUT2: "output", OUT3: "output", GND: "power_in", VDD: "power_in", GAIN: "input", RSTSEL: "input", REFDIV: "input", "~{LDAC}": "input", "~{CS}": "input", SCLK: "input", SDI: "input", "SDO/~{ALARM}": "output", VIO: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC60504";
  override referencePrefix = "U";
}

/**
 * 10-Bit, Single-Channel, Voltage Output, Serial Interface Digital-to-Analog Converters, SC-70
 *
 * KiCad symbol: `Analog_DAC:DAC6311xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.ti.com/lit/ds/symlink/dac5311.pdf
 * Keywords: DAC SPI 1-channel.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class DAC6311xDCK extends Component.withPins({
  "~{SYNC}": "1",
  "SCLK": "2",
  "DIN": "3",
  "AVDD/AVREF": "4",
  "GND": "5",
  "VOUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SYNC}": "input", SCLK: "input", DIN: "input", "AVDD/AVREF": "power_in", GND: "power_in", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC6311xDCK";
  override referencePrefix = "U";
}

/**
 * 10-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:DAC6578xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DAC6578xPW extends Component.withPins({
  "~{LDAC}": "1",
  "ADDR0": "2",
  "AVDD": "3",
  "VOUTA": "4",
  "VOUTC": "5",
  "VOUTE": "6",
  "VOUTG": "7",
  "VREFIN": "8",
  "~{CLR}": "9",
  "VOUTH": "10",
  "VOUTF": "11",
  "VOUTD": "12",
  "VOUTB": "13",
  "GND": "14",
  "SDA": "15",
  "SCL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{LDAC}": "input", ADDR0: "input", AVDD: "power_in", VOUTA: "output", VOUTC: "output", VOUTE: "output", VOUTG: "output", VREFIN: "input", "~{CLR}": "input", VOUTH: "output", VOUTF: "output", VOUTD: "output", VOUTB: "output", GND: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC6578xPW";
  override referencePrefix = "U";
}

/**
 * 10-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, QFN-24
 *
 * KiCad symbol: `Analog_DAC:DAC6578xRGE`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class DAC6578xRGE extends Component.withPins({
  "NC_1": "1",
  "AVDD": "2",
  "VOUTA": "3",
  "VOUTC": "4",
  "VOUTE": "5",
  "VOUTG": "6",
  "NC_7": "7",
  "VREFIN": "8",
  "RSTSEL": "9",
  "ADDR1": "10",
  "ADDR0": "11",
  "~{CLR}": "12",
  "VOUTH": "13",
  "VOUTF": "14",
  "VOUTD": "15",
  "VOUTB": "16",
  "GND": "17",
  "NC_18": "18",
  "SDA": "19",
  "SCL": "20",
  "TWOC": "21",
  "~{LDAC}": "22",
  "NC_23": "23",
  "NC_24": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", AVDD: "power_in", VOUTA: "output", VOUTC: "output", VOUTE: "output", VOUTG: "output", NC_7: "no_connect", VREFIN: "input", RSTSEL: "input", ADDR1: "input", ADDR0: "input", "~{CLR}": "input", VOUTH: "output", VOUTF: "output", VOUTD: "output", VOUTB: "output", GND: "power_in", NC_18: "no_connect", SDA: "bidirectional", SCL: "input", TWOC: "input", "~{LDAC}": "input", NC_23: "no_connect", NC_24: "no_connect", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC6578xRGE";
  override referencePrefix = "U";
}

/**
 * 14-bit dual-channel voltage output DAC, 2.5V 5ppm/°C internal reference, WSON-10
 *
 * KiCad symbol: `Analog_DAC:DAC70502`. Reference prefix: `U`.
 * Footprint filters: Texas*2.5x2.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac80502.pdf
 * Keywords: texas digital-analog converter.
 * Default footprint: Package_SON:Texas_DRX_WSON-10_2.5x2.5mm_P0.5mm.
 */
export class DAC70502 extends Component.withPins({
  "VDD": "1",
  "VOUTA": "2",
  "RSTSEL": "3",
  "AGND": "4",
  "SPI2C": "5",
  "~{SYNC}/A0": "7",
  "SDIN/SDA": "8",
  "VOUTB": "9",
  "VREFIO": "10",
  "SCLK/SCL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VOUTA: "output", RSTSEL: "input", AGND: "power_in", SPI2C: "input", "~{SYNC}/A0": "input", "SDIN/SDA": "bidirectional", VOUTB: "output", VREFIO: "bidirectional", "SCLK/SCL": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC70502";
  override referencePrefix = "U";
}

/**
 * 14-bit quad-channel voltage output DAC, 2.5V 2ppm/°C internal reference, WQFN-16
 *
 * KiCad symbol: `Analog_DAC:DAC70504`. Reference prefix: `U`.
 * Footprint filters: Texas*RTE0016D*WQFN*16*EP0.8x0.8mm*.
 * @see https://www.ti.com/lit/gpn/dac70504
 * Keywords: texas quad digital-analog converter.
 * Default footprint: Package_DFN_QFN:Texas_RTE0016D_WQFN-16-1EP_3x3mm_P0.5mm_EP0.8x0.8mm_ThermalVias.
 */
export class DAC70504 extends Component.withPins({
  "REF": "1",
  "OUT0": "2",
  "OUT1": "3",
  "OUT2": "4",
  "OUT3": "5",
  "GND": "6",
  "VDD": "7",
  "GAIN": "8",
  "RSTSEL": "9",
  "REFDIV": "10",
  "~{LDAC}": "11",
  "~{CS}": "12",
  "SCLK": "13",
  "SDI": "14",
  "SDO/~{ALARM}": "15",
  "VIO": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "bidirectional", OUT0: "output", OUT1: "output", OUT2: "output", OUT3: "output", GND: "power_in", VDD: "power_in", GAIN: "input", RSTSEL: "input", REFDIV: "input", "~{LDAC}": "input", "~{CS}": "input", SCLK: "input", SDI: "input", "SDO/~{ALARM}": "output", VIO: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC70504";
  override referencePrefix = "U";
}

/**
 * 12-Bit, Single-Channel, Voltage Output, Serial Interface Digital-to-Analog Converters, SC-70
 *
 * KiCad symbol: `Analog_DAC:DAC7311xDCK`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.ti.com/lit/ds/symlink/dac5311.pdf
 * Keywords: DAC SPI 1-channel.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class DAC7311xDCK extends Component.withPins({
  "~{SYNC}": "1",
  "SCLK": "2",
  "DIN": "3",
  "AVDD/AVREF": "4",
  "GND": "5",
  "VOUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SYNC}": "input", SCLK: "input", DIN: "input", "AVDD/AVREF": "power_in", GND: "power_in", VOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC7311xDCK";
  override referencePrefix = "U";
}

/**
 * Low-Power, Rail-to-Rail Output, 12-Bit Serial Input DAC
 *
 * KiCad symbol: `Analog_DAC:DAC7513_DCN`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/dac7513.pdf
 * Keywords: TI DAC 12 bit.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class DAC7513_DCN extends Component.withPins({
  "VOUT": "1",
  "VFB": "2",
  "VREF": "3",
  "VCC": "4",
  "GND": "5",
  "DIN": "6",
  "SCLK": "7",
  "~{SYNC}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUT: "output", VFB: "input", VREF: "input", VCC: "power_in", GND: "power_in", DIN: "input", SCLK: "input", "~{SYNC}": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC7513_DCN";
  override referencePrefix = "U";
}

/**
 * 14-bit quad-channel voltage output DAC with 2.5V internal reference
 *
 * KiCad symbol: `Analog_DAC:DAC8165`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8165.pdf
 * Keywords: 14-bit quad DAC voltage reference.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DAC8165 extends Component.withPins({
  "VOUTA": "1",
  "VOUTB": "2",
  "VREFH/VREFOUT": "3",
  "AVDD": "4",
  "VREFL": "5",
  "GND": "6",
  "VOUTC": "7",
  "VOUTD": "8",
  "~{SYNC}": "9",
  "SCLK": "10",
  "DIN": "11",
  "IOVDD": "12",
  "~{RST}": "13",
  "RSTSEL": "14",
  "~{ENABLE}": "15",
  "LDAC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTA: "output", VOUTB: "output", "VREFH/VREFOUT": "bidirectional", AVDD: "power_in", VREFL: "input", GND: "power_in", VOUTC: "output", VOUTD: "output", "~{SYNC}": "input", SCLK: "input", DIN: "input", IOVDD: "power_in", "~{RST}": "input", RSTSEL: "input", "~{ENABLE}": "input", LDAC: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8165";
  override referencePrefix = "U";
}

/**
 * 12-bit quad-channel voltage output DAC with 2.5V internal reference
 *
 * KiCad symbol: `Analog_DAC:DAC7565`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac7565.pdf
 * Keywords: 12-bit quad DAC voltage reference.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DAC7565 extends Component.withPins({
  "VOUTA": "1",
  "VOUTB": "2",
  "VREFH/VREFOUT": "3",
  "AVDD": "4",
  "VREFL": "5",
  "GND": "6",
  "VOUTC": "7",
  "VOUTD": "8",
  "~{SYNC}": "9",
  "SCLK": "10",
  "DIN": "11",
  "IOVDD": "12",
  "~{RST}": "13",
  "RSTSEL": "14",
  "~{ENABLE}": "15",
  "LDAC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTA: "output", VOUTB: "output", "VREFH/VREFOUT": "bidirectional", AVDD: "power_in", VREFL: "input", GND: "power_in", VOUTC: "output", VOUTD: "output", "~{SYNC}": "input", SCLK: "input", DIN: "input", IOVDD: "power_in", "~{RST}": "input", RSTSEL: "input", "~{ENABLE}": "input", LDAC: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC7565";
  override referencePrefix = "U";
}

/**
 * 12-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:DAC7578xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DAC7578xPW extends Component.withPins({
  "~{LDAC}": "1",
  "ADDR0": "2",
  "AVDD": "3",
  "VOUTA": "4",
  "VOUTC": "5",
  "VOUTE": "6",
  "VOUTG": "7",
  "VREFIN": "8",
  "~{CLR}": "9",
  "VOUTH": "10",
  "VOUTF": "11",
  "VOUTD": "12",
  "VOUTB": "13",
  "GND": "14",
  "SDA": "15",
  "SCL": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{LDAC}": "input", ADDR0: "input", AVDD: "power_in", VOUTA: "output", VOUTC: "output", VOUTE: "output", VOUTG: "output", VREFIN: "input", "~{CLR}": "input", VOUTH: "output", VOUTF: "output", VOUTD: "output", VOUTB: "output", GND: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC7578xPW";
  override referencePrefix = "U";
}

/**
 * 12-Bit, Octal-Channel, Ultra-Low Glitch, Voltage Output, Two-Wire Interface Digital-to-Analog Converters, QFN-24
 *
 * KiCad symbol: `Analog_DAC:DAC7578xRGE`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac5578.pdf
 * Keywords: DAC I2C TWI 8-channel.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class DAC7578xRGE extends Component.withPins({
  "NC_1": "1",
  "AVDD": "2",
  "VOUTA": "3",
  "VOUTC": "4",
  "VOUTE": "5",
  "VOUTG": "6",
  "NC_7": "7",
  "VREFIN": "8",
  "RSTSEL": "9",
  "ADDR1": "10",
  "ADDR0": "11",
  "~{CLR}": "12",
  "VOUTH": "13",
  "VOUTF": "14",
  "VOUTD": "15",
  "VOUTB": "16",
  "GND": "17",
  "NC_18": "18",
  "SDA": "19",
  "SCL": "20",
  "TWOC": "21",
  "~{LDAC}": "22",
  "NC_23": "23",
  "NC_24": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", AVDD: "power_in", VOUTA: "output", VOUTC: "output", VOUTE: "output", VOUTG: "output", NC_7: "no_connect", VREFIN: "input", RSTSEL: "input", ADDR1: "input", ADDR0: "input", "~{CLR}": "input", VOUTH: "output", VOUTF: "output", VOUTD: "output", VOUTB: "output", GND: "power_in", NC_18: "no_connect", SDA: "bidirectional", SCL: "input", TWOC: "input", "~{LDAC}": "input", NC_23: "no_connect", NC_24: "no_connect", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC7578xRGE";
  override referencePrefix = "U";
}

/**
 * Single-Channel, 16bit Programmable Current Output DAC for 4-mA to 20-mA Current Loop Applications, VQFN-40
 *
 * KiCad symbol: `Analog_DAC:DAC8750xRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA*EP4.6x4.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac7750.pdf
 * Keywords: DAC Current Loop 20mA.
 * Default footprint: Package_DFN_QFN:Texas_RHA_VQFN-40-1EP_6x6mm_P0.5mm_EP4.6x4.6mm_ThermalVias.
 */
export class DAC8750xRHA extends Component.withPins({
  "NC_1": "1",
  "~{ALARM}": "2",
  "GND_3": "3",
  "GND_4": "4",
  "CLR": "5",
  "LATCH": "6",
  "SCLK": "7",
  "DIN": "8",
  "SDO": "9",
  "NC_10": "10",
  "NC_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GND_15": "15",
  "ISET-R": "16",
  "REFOUT": "17",
  "REFIN": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "DVDD-EN": "23",
  "HART-IN": "24",
  "R3-SENSE": "25",
  "IOUT": "26",
  "BOOST": "27",
  "CAP1": "28",
  "CAP2": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "AVDD": "36",
  "GND_37": "37",
  "NC_38": "38",
  "DVDD": "39",
  "NC_40": "40",
  "GND_41": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "~{ALARM}": "open_collector", GND_3: "passive", GND_4: "power_in", CLR: "input", LATCH: "input", SCLK: "input", DIN: "input", SDO: "output", NC_10: "no_connect", NC_11: "no_connect", GND_12: "passive", GND_13: "passive", GND_14: "passive", GND_15: "passive", "ISET-R": "passive", REFOUT: "output", REFIN: "input", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", "DVDD-EN": "input", "HART-IN": "input", "R3-SENSE": "output", IOUT: "output", BOOST: "output", CAP1: "passive", CAP2: "passive", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", AVDD: "power_in", GND_37: "passive", NC_38: "no_connect", DVDD: "power_in", NC_40: "no_connect", GND_41: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8750xRHA";
  override referencePrefix = "U";
}

/**
 * Single-Channel, 12bit Programmable Current Output DAC for 4-mA to 20-mA Current Loop Applications, VQFN-40
 *
 * KiCad symbol: `Analog_DAC:DAC7750xRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA*EP4.6x4.6mm*.
 * @see http://www.ti.com/lit/ds/symlink/dac7750.pdf
 * Keywords: DAC Current Loop 20mA.
 * Default footprint: Package_DFN_QFN:Texas_RHA_VQFN-40-1EP_6x6mm_P0.5mm_EP4.6x4.6mm_ThermalVias.
 */
export class DAC7750xRHA extends Component.withPins({
  "NC_1": "1",
  "~{ALARM}": "2",
  "GND_3": "3",
  "GND_4": "4",
  "CLR": "5",
  "LATCH": "6",
  "SCLK": "7",
  "DIN": "8",
  "SDO": "9",
  "NC_10": "10",
  "NC_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GND_15": "15",
  "ISET-R": "16",
  "REFOUT": "17",
  "REFIN": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "DVDD-EN": "23",
  "HART-IN": "24",
  "R3-SENSE": "25",
  "IOUT": "26",
  "BOOST": "27",
  "CAP1": "28",
  "CAP2": "29",
  "NC_30": "30",
  "NC_31": "31",
  "NC_32": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "AVDD": "36",
  "GND_37": "37",
  "NC_38": "38",
  "DVDD": "39",
  "NC_40": "40",
  "GND_41": "41",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "~{ALARM}": "open_collector", GND_3: "passive", GND_4: "power_in", CLR: "input", LATCH: "input", SCLK: "input", DIN: "input", SDO: "output", NC_10: "no_connect", NC_11: "no_connect", GND_12: "passive", GND_13: "passive", GND_14: "passive", GND_15: "passive", "ISET-R": "passive", REFOUT: "output", REFIN: "input", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", "DVDD-EN": "input", "HART-IN": "input", "R3-SENSE": "output", IOUT: "output", BOOST: "output", CAP1: "passive", CAP2: "passive", NC_30: "no_connect", NC_31: "no_connect", NC_32: "no_connect", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", AVDD: "power_in", GND_37: "passive", NC_38: "no_connect", DVDD: "power_in", NC_40: "no_connect", GND_41: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC7750xRHA";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Rail-to-Rail Output, SPI interface, MSOP-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8501E`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8501.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DAC8501E extends Component.withPins({
  "V_{DD}": "1",
  "V_{REF}": "2",
  "V_{FB}": "3",
  "V_{OUT}": "4",
  "~{SYNC}": "5",
  "SCLK": "6",
  "D_{IN}": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{REF}": "input", "V_{FB}": "input", "V_{OUT}": "output", "~{SYNC}": "input", SCLK: "input", "D_{IN}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8501E";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Rail-to-Rail Output, SPI interface, MSOP-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8531E`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8531.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DAC8531E extends Component.withPins({
  "V_{DD}": "1",
  "V_{REF}": "2",
  "V_{FB}": "3",
  "V_{OUT}": "4",
  "~{SYNC}": "5",
  "SCLK": "6",
  "D_{IN}": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{REF}": "input", "V_{FB}": "input", "V_{OUT}": "output", "~{SYNC}": "input", SCLK: "input", "D_{IN}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8531E";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Rail-to-Rail Output, SPI interface, VSON-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8531IDRB`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8531.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SON:VSON-8-1EP_3x3mm_P0.65mm_EP1.65x2.4mm.
 */
export class DAC8531IDRB extends Component.withPins({
  "V_{DD}": "1",
  "V_{REF}": "2",
  "V_{FB}": "3",
  "V_{OUT}": "4",
  "~{SYNC}": "5",
  "SCLK": "6",
  "D_{IN}": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{REF}": "input", "V_{FB}": "input", "V_{OUT}": "output", "~{SYNC}": "input", SCLK: "input", "D_{IN}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8531IDRB";
  override referencePrefix = "U";
}

/**
 * Dual Channel, 16-bit, Low Power, Serial Input Digital-To-Analog Converter, VDD = 2.7..5.5V, up to 30MHz (VDD = 5V), VSSOP-8
 *
 * KiCad symbol: `Analog_DAC:DAC8532xDGK`. Reference prefix: `U`.
 * Footprint filters: *VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8532.pdf
 * Keywords: 3-wire SPI Microwire.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class DAC8532xDGK extends Component.withPins({
  "V_{DD}": "1",
  "V_{REF}": "2",
  "V_{OUT}B": "3",
  "V_{OUT}A": "4",
  "~{SYNC}": "5",
  "SCLK": "6",
  "D_{IN}": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{REF}": "power_in", "V_{OUT}B": "output", "V_{OUT}A": "output", "~{SYNC}": "input", SCLK: "input", "D_{IN}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8532xDGK";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Ultra-Low Glitch, Rail-to-Rail Output, SPI interface, VSON-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8550IxDGK`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8550.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SON:VSON-8-1EP_3x3mm_P0.65mm_EP1.65x2.4mm.
 */
export class DAC8550IxDGK extends Component.withPins({
  "V_{DD}": "1",
  "V_{REF}": "2",
  "V_{FB}": "3",
  "V_{OUT}": "4",
  "~{SYNC}": "5",
  "SCLK": "6",
  "D_{IN}": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{REF}": "input", "V_{FB}": "input", "V_{OUT}": "output", "~{SYNC}": "input", SCLK: "input", "D_{IN}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8550IxDGK";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Ultralow-Glitch, Rail-to-Rail Output, SPI interface, VSON-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8551IxDGK`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8551.pdf
 * Keywords: DAC 16-Bit  Voltage Output Rail-to-Rail SPI.
 * Default footprint: Package_SON:VSON-8-1EP_3x3mm_P0.65mm_EP1.65x2.4mm.
 */
export class DAC8551IxDGK extends Component.withPins({
  "V_{DD}": "1",
  "V_{REF}": "2",
  "V_{FB}": "3",
  "V_{OUT}": "4",
  "~{SYNC}": "5",
  "SCLK": "6",
  "D_{IN}": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{REF}": "input", "V_{FB}": "input", "V_{OUT}": "output", "~{SYNC}": "input", SCLK: "input", "D_{IN}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8551IxDGK";
  override referencePrefix = "U";
}

/**
 * Digital to analog converter, 16 Bit, 2 ch, ultra-low glitch, 2.7 - 5.5 VDD, MSOP-8
 *
 * KiCad symbol: `Analog_DAC:DAC8552`. Reference prefix: `U`.
 * Footprint filters: *S?PDSO?G8*3x3mm*P0.65*.
 * @see https://www.ti.com/lit/ds/symlink/dac8552.pdf
 * Keywords: Texas dual DAC.
 * Default footprint: Package_SO:Texas_S-PDSO-G8_3x3mm_P0.65mm.
 */
export class DAC8552 extends Component.withPins({
  "V_{DD}": "1",
  "V_{REF}": "2",
  "V_{OUT}B": "3",
  "V_{OUT}A": "4",
  "~{SYNC}": "5",
  "SCLK": "6",
  "D_{IN}": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{REF}": "power_in", "V_{OUT}B": "output", "V_{OUT}A": "output", "~{SYNC}": "input", SCLK: "input", "D_{IN}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8552";
  override referencePrefix = "U";
}

/**
 * 16-bit DAC, Voltage Output, Ultra-Low Glitch, Rail-to-Rail Output, 2.5V 2-ppm/°C Internal Reference, SPI interface, VSON-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8560IxDGK`. Reference prefix: `U`.
 * Footprint filters: VSON*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8560.pdf
 * Keywords: DAC 16-Bit Voltage Output Rail-to-Rail Internal Reference SPI.
 * Default footprint: Package_SON:VSON-8-1EP_3x3mm_P0.65mm_EP1.65x2.4mm.
 */
export class DAC8560IxDGK extends Component.withPins({
  "V_{DD}": "1",
  "V_{REF}": "2",
  "V_{FB}": "3",
  "V_{OUT}": "4",
  "~{SYNC}": "5",
  "SCLK": "6",
  "D_{IN}": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{REF}": "bidirectional", "V_{FB}": "input", "V_{OUT}": "output", "~{SYNC}": "input", SCLK: "input", "D_{IN}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8560IxDGK";
  override referencePrefix = "U";
}

/**
 * 16-bit quad-channel voltage output DAC with 2.5V internal reference
 *
 * KiCad symbol: `Analog_DAC:DAC8565`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8565.pdf
 * Keywords: 16-bit quad DAC voltage reference.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DAC8565 extends Component.withPins({
  "VOUTA": "1",
  "VOUTB": "2",
  "VREFH/VREFOUT": "3",
  "AVDD": "4",
  "VREFL": "5",
  "GND": "6",
  "VOUTC": "7",
  "VOUTD": "8",
  "~{SYNC}": "9",
  "SCLK": "10",
  "DIN": "11",
  "IOVDD": "12",
  "~{RST}": "13",
  "RSTSEL": "14",
  "~{ENABLE}": "15",
  "LDAC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUTA: "output", VOUTB: "output", "VREFH/VREFOUT": "bidirectional", AVDD: "power_in", VREFL: "input", GND: "power_in", VOUTC: "output", VOUTD: "output", "~{SYNC}": "input", SCLK: "input", DIN: "input", IOVDD: "power_in", "~{RST}": "input", RSTSEL: "input", "~{ENABLE}": "input", LDAC: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8565";
  override referencePrefix = "U";
}

/**
 * DAC, 16-Bit, Low Power, Voltage Output, Rail-to-Rail Output, I2C Interface, MSOP-8 3x3mm package
 *
 * KiCad symbol: `Analog_DAC:DAC8571IDGK`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/dac8571.pdf
 * Keywords: DAC 16-Bit Voltage Output Rail-to-Rail I2C.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DAC8571IDGK extends Component.withPins({
  "V_{DD}": "1",
  "V_{REF}": "2",
  "V_{SENSE}": "3",
  "V_{OUT}": "4",
  "A0": "5",
  "SCL": "6",
  "SDA": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{REF}": "input", "V_{SENSE}": "input", "V_{OUT}": "output", A0: "input", SCL: "input", SDA: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:DAC8571IDGK";
  override referencePrefix = "U";
}

/**
 * Single Supply 12-bit DAC with Internal Reference Voltage, SOIC-8
 *
 * KiCad symbol: `Analog_DAC:LTC1257`. Reference prefix: `U`.
 * Footprint filters: SOIC*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1257fc.pdf
 * Keywords: DAC 12-bit.
 */
export class LTC1257 extends Component.withPins({
  "CKL": "1",
  "DIN": "2",
  "~{LOAD}": "3",
  "DOUT": "4",
  "GND": "5",
  "VREF": "6",
  "VOUT": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CKL: "input", DIN: "input", "~{LOAD}": "input", DOUT: "output", GND: "power_in", VREF: "bidirectional", VOUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:LTC1257";
  override referencePrefix = "U";
}

/**
 * 2-Channel 12-Bit Rail-To-Rail D/A Converters with SPI Interface and Internal Reference (4.096V)
 *
 * KiCad symbol: `Analog_DAC:LTC1446`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1446fa.pdf
 * Keywords: 12-Bit DAC SPI Reference 2ch.
 */
export class LTC1446 extends Component.withPins({
  "SCK": "1",
  "SDI": "2",
  "~{CS}/LD": "3",
  "SDO": "4",
  "VA": "5",
  "GND": "6",
  "VCC": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCK: "input", SDI: "input", "~{CS}/LD": "input", SDO: "output", VA: "output", GND: "power_in", VCC: "power_in", VB: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:LTC1446";
  override referencePrefix = "U";
}

/**
 * 2-Channel 12-Bit Rail-To-Rail D/A Converters with SPI Interface and Internal Reference (2.500V)
 *
 * KiCad symbol: `Analog_DAC:LTC1446L`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1446fa.pdf
 * Keywords: 12-Bit DAC SPI 2ch.
 */
export class LTC1446L extends Component.withPins({
  "SCK": "1",
  "SDI": "2",
  "~{CS}/LD": "3",
  "SDO": "4",
  "VA": "5",
  "GND": "6",
  "VCC": "7",
  "VB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCK: "input", SDI: "input", "~{CS}/LD": "input", SDO: "output", VA: "output", GND: "power_in", VCC: "power_in", VB: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:LTC1446L";
  override referencePrefix = "U";
}

/**
 * Quad Micropower 10-bit DAC, Standard, SSOP-16
 *
 * KiCad symbol: `Analog_DAC:LTC1664CGN`. Reference prefix: `U`.
 * Footprint filters: *SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1664fa.pdf
 * Keywords: Quad DAC Micropower 10bit 4ch.
 */
export class LTC1664CGN extends Component.withPins({
  "GND": "1",
  "OUTA": "2",
  "OUTB": "3",
  "OUTC": "4",
  "OUTD": "5",
  "REF": "6",
  "~{CS}/LD": "7",
  "SCK": "8",
  "DIN": "9",
  "DOUT": "10",
  "~{CLR}": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", OUTA: "output", OUTB: "output", OUTC: "output", OUTD: "output", REF: "input", "~{CS}/LD": "input", SCK: "input", DIN: "input", DOUT: "output", "~{CLR}": "input", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:LTC1664CGN";
  override referencePrefix = "U";
}

/**
 * Quad Micropower 10-bit DAC, Standard, DIP-16
 *
 * KiCad symbol: `Analog_DAC:LTC1664CN`. Reference prefix: `U`.
 * Footprint filters: *SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1664fa.pdf
 * Keywords: Quad DAC Micropower 10bit 4ch.
 */
export class LTC1664CN extends Component.withPins({
  "GND": "1",
  "OUTA": "2",
  "OUTB": "3",
  "OUTC": "4",
  "OUTD": "5",
  "REF": "6",
  "~{CS}/LD": "7",
  "SCK": "8",
  "DIN": "9",
  "DOUT": "10",
  "~{CLR}": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", OUTA: "output", OUTB: "output", OUTC: "output", OUTD: "output", REF: "input", "~{CS}/LD": "input", SCK: "input", DIN: "input", DOUT: "output", "~{CLR}": "input", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:LTC1664CN";
  override referencePrefix = "U";
}

/**
 * Quad Micropower 10-bit DAC, Industrial, SSOP-16
 *
 * KiCad symbol: `Analog_DAC:LTC1664IGN`. Reference prefix: `U`.
 * Footprint filters: *SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1664fa.pdf
 * Keywords: Quad DAC Micropower 10bit 4ch.
 */
export class LTC1664IGN extends Component.withPins({
  "GND": "1",
  "OUTA": "2",
  "OUTB": "3",
  "OUTC": "4",
  "OUTD": "5",
  "REF": "6",
  "~{CS}/LD": "7",
  "SCK": "8",
  "DIN": "9",
  "DOUT": "10",
  "~{CLR}": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", OUTA: "output", OUTB: "output", OUTC: "output", OUTD: "output", REF: "input", "~{CS}/LD": "input", SCK: "input", DIN: "input", DOUT: "output", "~{CLR}": "input", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:LTC1664IGN";
  override referencePrefix = "U";
}

/**
 * Quad Micropower 10-bit DAC, Industrial, DIP-16
 *
 * KiCad symbol: `Analog_DAC:LTC1664IN`. Reference prefix: `U`.
 * Footprint filters: *SSOP*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1664fa.pdf
 * Keywords: Quad DAC Micropower 10bit 4ch.
 */
export class LTC1664IN extends Component.withPins({
  "GND": "1",
  "OUTA": "2",
  "OUTB": "3",
  "OUTC": "4",
  "OUTD": "5",
  "REF": "6",
  "~{CS}/LD": "7",
  "SCK": "8",
  "DIN": "9",
  "DOUT": "10",
  "~{CLR}": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "NC_15": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", OUTA: "output", OUTB: "output", OUTC: "output", OUTD: "output", REF: "input", "~{CS}/LD": "input", SCK: "input", DIN: "input", DOUT: "output", "~{CLR}": "input", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", NC_15: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:LTC1664IN";
  override referencePrefix = "U";
}

/**
 * Low-Power, Single, 12-Bit, Buffered Voltage-Output DAC
 *
 * KiCad symbol: `Analog_DAC:MAX5139`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*3x3mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5138-MAX5139.pdf
 * Keywords: 12-bit DAC 1CH.
 * Default footprint: Package_DFN_QFN:TQFN-16-1EP_3x3mm_P0.5mm_EP1.23x1.23mm.
 */
export class MAX5139 extends Component.withPins({
  "NC_1": "1",
  "M/~{Z}": "2",
  "~{LDAC}": "3",
  "NC_4": "4",
  "SCLK": "5",
  "~{CS}": "6",
  "DIN": "7",
  "AGND_8": "8",
  "NC_9": "9",
  "~{READY}": "10",
  "DVDD": "11",
  "OUT": "12",
  "AVDD": "13",
  "REFI": "14",
  "REFO": "15",
  "AGND_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "M/~{Z}": "input", "~{LDAC}": "input", NC_4: "no_connect", SCLK: "input", "~{CS}": "input", DIN: "input", AGND_8: "power_in", NC_9: "no_connect", "~{READY}": "output", DVDD: "power_in", OUT: "output", AVDD: "power_in", REFI: "input", REFO: "output", AGND_16: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5139";
  override referencePrefix = "U";
}

/**
 * Low-Power, Single, 16-Bit, Buffered Voltage-Output DAC
 *
 * KiCad symbol: `Analog_DAC:MAX5138`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*3x3mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5138-MAX5139.pdf
 * Keywords: 16-bit DAC 1CH.
 * Default footprint: Package_DFN_QFN:TQFN-16-1EP_3x3mm_P0.5mm_EP1.23x1.23mm.
 */
export class MAX5138 extends Component.withPins({
  "NC_1": "1",
  "M/~{Z}": "2",
  "~{LDAC}": "3",
  "NC_4": "4",
  "SCLK": "5",
  "~{CS}": "6",
  "DIN": "7",
  "AGND_8": "8",
  "NC_9": "9",
  "~{READY}": "10",
  "DVDD": "11",
  "OUT": "12",
  "AVDD": "13",
  "REFI": "14",
  "REFO": "15",
  "AGND_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", "M/~{Z}": "input", "~{LDAC}": "input", NC_4: "no_connect", SCLK: "input", "~{CS}": "input", DIN: "input", AGND_8: "power_in", NC_9: "no_connect", "~{READY}": "output", DVDD: "power_in", OUT: "output", AVDD: "power_in", REFI: "input", REFO: "output", AGND_16: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5138";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 14 Bit, 1 ch, 2.7 - 5.5 VDD, I2C, uMAX-8
 *
 * KiCad symbol: `Analog_DAC:MAX5215`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5215-MAX5217.pdf
 * Keywords: DA 14 Bit 1 ch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MAX5215 extends Component.withPins({
  "REF": "1",
  "ADDR": "2",
  "SCL": "3",
  "SDA": "4",
  "~{AUX}": "5",
  "OUT": "6",
  "VDD": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "power_in", ADDR: "input", SCL: "input", SDA: "bidirectional", "~{AUX}": "input", OUT: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5215";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 16 Bit, 1 ch, 2.7 - 5.5 VDD, I2C, uMAX-8
 *
 * KiCad symbol: `Analog_DAC:MAX5217`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5215-MAX5217.pdf
 * Keywords: DA 16 Bit 1 ch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MAX5217 extends Component.withPins({
  "REF": "1",
  "ADDR": "2",
  "SCL": "3",
  "SDA": "4",
  "~{AUX}": "5",
  "OUT": "6",
  "VDD": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "power_in", ADDR: "input", SCL: "input", SDA: "bidirectional", "~{AUX}": "input", OUT: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5217";
  override referencePrefix = "U";
}

/**
 * 16-bit Voltage Digital-to-Analog converter, SOIC-14
 *
 * KiCad symbol: `Analog_DAC:MAX5717xSD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5717-MAX5719.pdf
 * Keywords: DAC.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class MAX5717xSD extends Component.withPins({
  "RFB": "1",
  "OUT": "2",
  "AGNDF": "3",
  "AGNDS": "4",
  "REFS": "5",
  "REFF": "6",
  "~{CS}": "7",
  "SCLK": "8",
  "NC": "9",
  "DIN": "10",
  "~{LDAC}": "11",
  "DGND": "12",
  "INV": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RFB: "passive", OUT: "output", AGNDF: "power_in", AGNDS: "power_in", REFS: "input", REFF: "input", "~{CS}": "input", SCLK: "input", NC: "no_connect", DIN: "input", "~{LDAC}": "input", DGND: "power_in", INV: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5717xSD";
  override referencePrefix = "U";
}

/**
 * 20-bit Voltage Digital-to-Analog converter, SOIC-14
 *
 * KiCad symbol: `Analog_DAC:MAX5719xSD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5717-MAX5719.pdf
 * Keywords: DAC.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class MAX5719xSD extends Component.withPins({
  "RFB": "1",
  "OUT": "2",
  "AGNDF": "3",
  "AGNDS": "4",
  "REFS": "5",
  "REFF": "6",
  "~{CS}": "7",
  "SCLK": "8",
  "NC": "9",
  "DIN": "10",
  "~{LDAC}": "11",
  "DGND": "12",
  "INV": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RFB: "passive", OUT: "output", AGNDF: "power_in", AGNDS: "power_in", REFS: "input", REFF: "input", "~{CS}": "input", SCLK: "input", NC: "no_connect", DIN: "input", "~{LDAC}": "input", DGND: "power_in", INV: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5719xSD";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 10 Bit, 4 ch, 2.7 - 5.5 VDD, SPI, uMAX-10
 *
 * KiCad symbol: `Analog_DAC:MAX5741`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm?P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5741.pdf
 * Keywords: DA 8 Bit 4 ch.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MAX5741 extends Component.withPins({
  "~{CS}": "1",
  "SCLK": "2",
  "VDD": "3",
  "GND": "4",
  "DIN": "5",
  "REF": "6",
  "OUTA": "7",
  "OUTB": "8",
  "OUTC": "9",
  "OUTD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", SCLK: "input", VDD: "power_in", GND: "power_in", DIN: "input", REF: "power_in", OUTA: "output", OUTB: "output", OUTC: "output", OUTD: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5741";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 8 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14
 *
 * KiCad symbol: `Analog_DAC:MAX5813`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*14*4.4*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 8 Bit 4 ch.
 */
export class MAX5813 extends Component.withPins({
  "REF": "1",
  "OUTA": "2",
  "OUTB": "3",
  "GND": "4",
  "OUTC": "5",
  "OUTD": "6",
  "VDD": "7",
  "ADDR1": "8",
  "ADDR0": "9",
  "SCL": "10",
  "SDA": "11",
  "~{CLR}": "12",
  "VDDIO": "13",
  "~{LDAC}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "power_in", OUTA: "output", OUTB: "output", GND: "power_in", OUTC: "output", OUTD: "output", VDD: "power_in", ADDR1: "input", ADDR0: "input", SCL: "input", SDA: "bidirectional", "~{CLR}": "input", VDDIO: "power_in", "~{LDAC}": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5813";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 8 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14, Maxim_WLP-12
 *
 * KiCad symbol: `Analog_DAC:MAX5813WLP`. Reference prefix: `U`.
 * Footprint filters: *Maxim*WLP*12*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 8 Bit 4 ch.
 */
export class MAX5813WLP extends Component.withPins({
  "OUTA": "A1",
  "OUTB": "A2",
  "OUTC": "A3",
  "OUTD": "A4",
  "REF": "B1",
  "GND": "B2",
  "VDDIO": "B3",
  "VDD": "B4",
  "~{CLR}": "C1",
  "SDA": "C2",
  "SCL": "C3",
  "ADDR0": "C4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUTA: "output", OUTB: "output", OUTC: "output", OUTD: "output", REF: "power_in", GND: "power_in", VDDIO: "power_in", VDD: "power_in", "~{CLR}": "input", SDA: "bidirectional", SCL: "input", ADDR0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5813WLP";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 10 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14
 *
 * KiCad symbol: `Analog_DAC:MAX5814`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*14*4.4*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 10 Bit 4 ch.
 */
export class MAX5814 extends Component.withPins({
  "REF": "1",
  "OUTA": "2",
  "OUTB": "3",
  "GND": "4",
  "OUTC": "5",
  "OUTD": "6",
  "VDD": "7",
  "ADDR1": "8",
  "ADDR0": "9",
  "SCL": "10",
  "SDA": "11",
  "~{CLR}": "12",
  "VDDIO": "13",
  "~{LDAC}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "power_in", OUTA: "output", OUTB: "output", GND: "power_in", OUTC: "output", OUTD: "output", VDD: "power_in", ADDR1: "input", ADDR0: "input", SCL: "input", SDA: "bidirectional", "~{CLR}": "input", VDDIO: "power_in", "~{LDAC}": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5814";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 10 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14, Maxim_WLP-12
 *
 * KiCad symbol: `Analog_DAC:MAX5814WLP`. Reference prefix: `U`.
 * Footprint filters: *Maxim*WLP*12*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 10 Bit 4 ch.
 */
export class MAX5814WLP extends Component.withPins({
  "OUTA": "A1",
  "OUTB": "A2",
  "OUTC": "A3",
  "OUTD": "A4",
  "REF": "B1",
  "GND": "B2",
  "VDDIO": "B3",
  "VDD": "B4",
  "~{CLR}": "C1",
  "SDA": "C2",
  "SCL": "C3",
  "ADDR0": "C4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUTA: "output", OUTB: "output", OUTC: "output", OUTD: "output", REF: "power_in", GND: "power_in", VDDIO: "power_in", VDD: "power_in", "~{CLR}": "input", SDA: "bidirectional", SCL: "input", ADDR0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5814WLP";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 12 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14
 *
 * KiCad symbol: `Analog_DAC:MAX5815`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*14*4.4*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 12 Bit 4 ch.
 */
export class MAX5815 extends Component.withPins({
  "REF": "1",
  "OUTA": "2",
  "OUTB": "3",
  "GND": "4",
  "OUTC": "5",
  "OUTD": "6",
  "VDD": "7",
  "ADDR1": "8",
  "ADDR0": "9",
  "SCL": "10",
  "SDA": "11",
  "~{CLR}": "12",
  "VDDIO": "13",
  "~{LDAC}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { REF: "power_in", OUTA: "output", OUTB: "output", GND: "power_in", OUTC: "output", OUTD: "output", VDD: "power_in", ADDR1: "input", ADDR0: "input", SCL: "input", SDA: "bidirectional", "~{CLR}": "input", VDDIO: "power_in", "~{LDAC}": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5815";
  override referencePrefix = "U";
}

/**
 * Digital to analog, 12 Bit, 4 ch, 2.7 - 5.5 VDD, I2C, TSSOP-14, Maxim_WLP-12
 *
 * KiCad symbol: `Analog_DAC:MAX5815WLP`. Reference prefix: `U`.
 * Footprint filters: *Maxim*WLP*12*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX5813-MAX5815.pdf
 * Keywords: DA 12 Bit 4 ch.
 */
export class MAX5815WLP extends Component.withPins({
  "OUTA": "A1",
  "OUTB": "A2",
  "OUTC": "A3",
  "OUTD": "A4",
  "REF": "B1",
  "GND": "B2",
  "VDDIO": "B3",
  "VDD": "B4",
  "~{CLR}": "C1",
  "SDA": "C2",
  "SCL": "C3",
  "ADDR0": "C4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OUTA: "output", OUTB: "output", OUTC: "output", OUTD: "output", REF: "power_in", GND: "power_in", VDDIO: "power_in", VDD: "power_in", "~{CLR}": "input", SDA: "bidirectional", SCL: "input", ADDR0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MAX5815WLP";
  override referencePrefix = "U";
}

/**
 * 12-bit Digital-to-Analog Converter, integrated EEPROM, I2C interface, SOT-23-6
 *
 * KiCad symbol: `Analog_DAC:MCP4725xxx-xCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22039d.pdf
 * Keywords: dac twi.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class MCP4725xxx_xCH extends Component.withPins({
  "VOUT": "1",
  "VSS": "2",
  "VDD": "3",
  "SDA": "4",
  "SCL": "5",
  "A0": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VOUT: "output", VSS: "power_in", VDD: "power_in", SDA: "bidirectional", SCL: "input", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4725xxx-xCH";
  override referencePrefix = "U";
}

/**
 * 12-bit digital to analog converter, quad output, 2.048V internal reference, integrated EEPROM, I2C interface
 *
 * KiCad symbol: `Analog_DAC:MCP4728`. Reference prefix: `U`.
 * Footprint filters: *SOP*3x3mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22187E.pdf
 * Keywords: dac i2c.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class MCP4728 extends Component.withPins({
  "VDD": "1",
  "SCL": "2",
  "SDA": "3",
  "~{LDAC}": "4",
  "RDY/~{BSY}": "5",
  "VOUTA": "6",
  "VOUTB": "7",
  "VOUTC": "8",
  "VOUTD": "9",
  "VSS": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", SCL: "input", SDA: "bidirectional", "~{LDAC}": "input", "RDY/~{BSY}": "output", VOUTA: "output", VOUTB: "output", VOUTC: "output", VOUTD: "output", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4728";
  override referencePrefix = "U";
}

/**
 * 8-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4801`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 8-Bit DAC SPI Reference 1ch.
 */
export class MCP4801 extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "~{SHDN}": "6",
  "Vss": "7",
  "Vout": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", "~{SHDN}": "input", Vss: "power_in", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4801";
  override referencePrefix = "U";
}

/**
 * 8-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4801-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 8-Bit DAC SPI Reference 1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 */
export class MCP4801_EMC extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "~{SHDN}": "6",
  "Vss": "7",
  "Vout": "8",
  "PAD/Vss": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", "~{SHDN}": "input", Vss: "power_in", Vout: "output", "PAD/Vss": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4801-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 8-Bit D/A Converters with SPI Interface and Internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4802`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002249B.pdf
 * Keywords: 8-Bit DAC SPI Reference 2ch.
 */
export class MCP4802 extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "VB": "6",
  "Vss": "7",
  "VA": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", VB: "output", Vss: "power_in", VA: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4802";
  override referencePrefix = "U";
}

/**
 * 10-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4811`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 10-Bit DAC SPI Reference 1ch.
 */
export class MCP4811 extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "~{SHDN}": "6",
  "Vss": "7",
  "Vout": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", "~{SHDN}": "input", Vss: "power_in", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4811";
  override referencePrefix = "U";
}

/**
 * 10-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4811-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 10-Bit DAC SPI Reference 1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 */
export class MCP4811_EMC extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "~{SHDN}": "6",
  "Vss": "7",
  "Vout": "8",
  "PAD/Vss": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", "~{SHDN}": "input", Vss: "power_in", Vout: "output", "PAD/Vss": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4811-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 10-Bit D/A Converters with SPI Interface and Internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4812`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002249B.pdf
 * Keywords: 10-Bit DAC SPI Reference 2ch.
 */
export class MCP4812 extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "VB": "6",
  "Vss": "7",
  "VA": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", VB: "output", Vss: "power_in", VA: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4812";
  override referencePrefix = "U";
}

/**
 * 12-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4821`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 12-Bit DAC SPI Reference 1ch.
 */
export class MCP4821 extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "~{SHDN}": "6",
  "Vss": "7",
  "Vout": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", "~{SHDN}": "input", Vss: "power_in", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4821";
  override referencePrefix = "U";
}

/**
 * 12-Bit D/A Converters with SPI Interface, internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4821-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22244B.pdf
 * Keywords: 12-Bit DAC SPI Reference 1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 */
export class MCP4821_EMC extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "~{SHDN}": "6",
  "Vss": "7",
  "Vout": "8",
  "PAD/Vss": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", "~{SHDN}": "input", Vss: "power_in", Vout: "output", "PAD/Vss": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4821-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 12-Bit D/A Converters with SPI Interface and Internal Reference (2.048V)
 *
 * KiCad symbol: `Analog_DAC:MCP4822`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002249B.pdf
 * Keywords: 12-Bit DAC SPI Reference 2ch.
 */
export class MCP4822 extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "VB": "6",
  "Vss": "7",
  "VA": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", VB: "output", Vss: "power_in", VA: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4822";
  override referencePrefix = "U";
}

/**
 * 8-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4901`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 8-Bit DAC SPI  1ch.
 */
export class MCP4901 extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "Vref": "6",
  "Vss": "7",
  "Vout": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", Vref: "power_in", Vss: "power_in", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4901";
  override referencePrefix = "U";
}

/**
 * 8-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4901-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 8-Bit DAC SPI  1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 */
export class MCP4901_EMC extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "Vref": "6",
  "Vss": "7",
  "Vout": "8",
  "PAD/Vss": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", Vref: "power_in", Vss: "power_in", Vout: "output", "PAD/Vss": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4901-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 8-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4902`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22250A.pdf
 * Keywords: 8-Bit DAC SPI  2ch.
 */
export class MCP4902 extends Component.withPins({
  "Vdd": "1",
  "NC_2": "2",
  "~{CS}": "3",
  "SCK": "4",
  "SDI": "5",
  "NC_6": "6",
  "NC_7": "7",
  "~{LDAC}": "8",
  "~{SHDN}": "9",
  "VB": "10",
  "VrefB": "11",
  "Vss": "12",
  "VrefA": "13",
  "VA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", NC_2: "no_connect", "~{CS}": "input", SCK: "input", SDI: "input", NC_6: "no_connect", NC_7: "no_connect", "~{LDAC}": "input", "~{SHDN}": "input", VB: "output", VrefB: "input", Vss: "power_in", VrefA: "input", VA: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4902";
  override referencePrefix = "U";
}

/**
 * 10-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4911`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 10-Bit DAC SPI 1ch.
 */
export class MCP4911 extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "Vref": "6",
  "Vss": "7",
  "Vout": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", Vref: "power_in", Vss: "power_in", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4911";
  override referencePrefix = "U";
}

/**
 * 10-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4911-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 10-Bit DAC SPI  1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 */
export class MCP4911_EMC extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "Vref": "6",
  "Vss": "7",
  "Vout": "8",
  "PAD/Vss": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", Vref: "power_in", Vss: "power_in", Vout: "output", "PAD/Vss": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4911-EMC";
  override referencePrefix = "U";
}

/**
 * 2-Channel 10-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4912`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22250A.pdf
 * Keywords: 10-Bit DAC SPI 2ch.
 */
export class MCP4912 extends Component.withPins({
  "Vdd": "1",
  "NC_2": "2",
  "~{CS}": "3",
  "SCK": "4",
  "SDI": "5",
  "NC_6": "6",
  "NC_7": "7",
  "~{LDAC}": "8",
  "~{SHDN}": "9",
  "VB": "10",
  "VrefB": "11",
  "Vss": "12",
  "VrefA": "13",
  "VA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", NC_2: "no_connect", "~{CS}": "input", SCK: "input", SDI: "input", NC_6: "no_connect", NC_7: "no_connect", "~{LDAC}": "input", "~{SHDN}": "input", VB: "output", VrefB: "input", Vss: "power_in", VrefA: "input", VA: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4912";
  override referencePrefix = "U";
}

/**
 * 12-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4921`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 12-Bit DAC SPI 1ch.
 */
export class MCP4921 extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "Vref": "6",
  "Vss": "7",
  "Vout": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", Vref: "power_in", Vss: "power_in", Vout: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4921";
  override referencePrefix = "U";
}

/**
 * 12-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4921-EMC`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22248a.pdf
 * Keywords: 12-Bit DAC SPI  1ch.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 */
export class MCP4921_EMC extends Component.withPins({
  "Vdd": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "Vref": "6",
  "Vss": "7",
  "Vout": "8",
  "PAD/Vss": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", Vref: "power_in", Vss: "power_in", Vout: "output", "PAD/Vss": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4921-EMC";
  override referencePrefix = "U";
}

/**
 * Single 12-bit Digital to Analog Converter, SPI Interface, MSOP-8
 *
 * KiCad symbol: `Analog_DAC:MCP4921-EMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*, SOIC*, DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Single DAC 1ch 12bit SPI.
 */
export class MCP4921_EMS extends Component.withPins({
  "VDD": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "VrefA": "6",
  "AVSS": "7",
  "VoutA": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", VrefA: "passive", AVSS: "power_in", VoutA: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4921-EMS";
  override referencePrefix = "U";
}

/**
 * Single 12-bit Digital to Analog Converter, SPI Interface, PDIP-8
 *
 * KiCad symbol: `Analog_DAC:MCP4921-EP`. Reference prefix: `U`.
 * Footprint filters: MSOP*, SOIC*, DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Single DAC 1ch 12bit SPI.
 */
export class MCP4921_EP extends Component.withPins({
  "VDD": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "VrefA": "6",
  "AVSS": "7",
  "VoutA": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", VrefA: "passive", AVSS: "power_in", VoutA: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4921-EP";
  override referencePrefix = "U";
}

/**
 * Single 12-bit Digital to Analog Converter, SPI Interface, SOIC-8
 *
 * KiCad symbol: `Analog_DAC:MCP4921-ESN`. Reference prefix: `U`.
 * Footprint filters: MSOP*, SOIC*, DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Single DAC 1ch 12bit SPI.
 */
export class MCP4921_ESN extends Component.withPins({
  "VDD": "1",
  "~{CS}": "2",
  "SCK": "3",
  "SDI": "4",
  "~{LDAC}": "5",
  "VrefA": "6",
  "AVSS": "7",
  "VoutA": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "~{CS}": "input", SCK: "input", SDI: "input", "~{LDAC}": "input", VrefA: "passive", AVSS: "power_in", VoutA: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4921-ESN";
  override referencePrefix = "U";
}

/**
 * 2-Channel 12-Bit D/A Converters with SPI Interface
 *
 * KiCad symbol: `Analog_DAC:MCP4922`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22250A.pdf
 * Keywords: 12-Bit DAC SPI 2CH.
 */
export class MCP4922 extends Component.withPins({
  "Vdd": "1",
  "NC_2": "2",
  "~{CS}": "3",
  "SCK": "4",
  "SDI": "5",
  "NC_6": "6",
  "NC_7": "7",
  "~{LDAC}": "8",
  "~{SHDN}": "9",
  "VB": "10",
  "VrefB": "11",
  "Vss": "12",
  "VrefA": "13",
  "VA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd: "power_in", NC_2: "no_connect", "~{CS}": "input", SCK: "input", SDI: "input", NC_6: "no_connect", NC_7: "no_connect", "~{LDAC}": "input", "~{SHDN}": "input", VB: "output", VrefB: "input", Vss: "power_in", VrefA: "input", VA: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4922";
  override referencePrefix = "U";
}

/**
 * Dual 12-bit Digital to Analog Converter, SPI Interface, PDIP-14
 *
 * KiCad symbol: `Analog_DAC:MCP4922-EP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*, TSSOP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Dual DAC 1ch 12bit SPI.
 */
export class MCP4922_EP extends Component.withPins({
  "VDD": "1",
  "NC_2": "2",
  "~{CS}": "3",
  "SCK": "4",
  "SDI": "5",
  "NC_6": "6",
  "NC_7": "7",
  "~{LDAC}": "8",
  "~{SHDN}": "9",
  "VoutB": "10",
  "VrefB": "11",
  "AVSS": "12",
  "VrefA": "13",
  "VoutA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", NC_2: "no_connect", "~{CS}": "input", SCK: "input", SDI: "input", NC_6: "no_connect", NC_7: "no_connect", "~{LDAC}": "input", "~{SHDN}": "input", VoutB: "passive", VrefB: "passive", AVSS: "power_in", VrefA: "passive", VoutA: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4922-EP";
  override referencePrefix = "U";
}

/**
 * Dual 12-bit Digital to Analog Converter, SPI Interface, SOIC-14
 *
 * KiCad symbol: `Analog_DAC:MCP4922-ESL`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*, TSSOP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Dual DAC 1ch 12bit SPI.
 */
export class MCP4922_ESL extends Component.withPins({
  "VDD": "1",
  "NC_2": "2",
  "~{CS}": "3",
  "SCK": "4",
  "SDI": "5",
  "NC_6": "6",
  "NC_7": "7",
  "~{LDAC}": "8",
  "~{SHDN}": "9",
  "VoutB": "10",
  "VrefB": "11",
  "AVSS": "12",
  "VrefA": "13",
  "VoutA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", NC_2: "no_connect", "~{CS}": "input", SCK: "input", SDI: "input", NC_6: "no_connect", NC_7: "no_connect", "~{LDAC}": "input", "~{SHDN}": "input", VoutB: "passive", VrefB: "passive", AVSS: "power_in", VrefA: "passive", VoutA: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4922-ESL";
  override referencePrefix = "U";
}

/**
 * Dual 12-bit Digital to Analog Converter, SPI Interface, TSSOP-14
 *
 * KiCad symbol: `Analog_DAC:MCP4922-EST`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*, TSSOP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21897a.pdf
 * Keywords: Dual DAC 1ch 12bit SPI.
 */
export class MCP4922_EST extends Component.withPins({
  "VDD": "1",
  "NC_2": "2",
  "~{CS}": "3",
  "SCK": "4",
  "SDI": "5",
  "NC_6": "6",
  "NC_7": "7",
  "~{LDAC}": "8",
  "~{SHDN}": "9",
  "VoutB": "10",
  "VrefB": "11",
  "AVSS": "12",
  "VrefA": "13",
  "VoutA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", NC_2: "no_connect", "~{CS}": "input", SCK: "input", SDI: "input", NC_6: "no_connect", NC_7: "no_connect", "~{LDAC}": "input", "~{SHDN}": "input", VoutB: "passive", VrefB: "passive", AVSS: "power_in", VrefA: "passive", VoutA: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:MCP4922-EST";
  override referencePrefix = "U";
}

/**
 * 8-Bit, 100 MSPS, CommsDAC, Parallel Current DAC, SOIC-28
 *
 * KiCad symbol: `Analog_DAC:THS5641AxDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ths5641a.pdf
 * Keywords: DAC IDAC.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class THS5641AxDW extends Component.withPins({
  "D7": "1",
  "D6": "2",
  "D5": "3",
  "D4": "4",
  "D3": "5",
  "D2": "6",
  "D1": "7",
  "D0": "8",
  "NC_9": "9",
  "NC_10": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "SLEEP": "15",
  "EXTLO": "16",
  "EXTIO": "17",
  "BIASJ": "18",
  "COMP1": "19",
  "AGND": "20",
  "~{IOUT2}": "21",
  "IOUT1": "22",
  "COMP2": "23",
  "AVDD": "24",
  "MODE": "25",
  "DGND": "26",
  "DVDD": "27",
  "CLK": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", D0: "input", NC_9: "no_connect", NC_10: "no_connect", NC_11: "no_connect", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", SLEEP: "input", EXTLO: "bidirectional", EXTIO: "bidirectional", BIASJ: "passive", COMP1: "input", AGND: "power_in", "~{IOUT2}": "output", IOUT1: "output", COMP2: "input", AVDD: "power_in", MODE: "input", DGND: "power_in", DVDD: "power_in", CLK: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:THS5641AxDW";
  override referencePrefix = "U";
}

/**
 * 8-Bit, 100 MSPS, CommsDAC, Parallel Current DAC, TSSOP-28
 *
 * KiCad symbol: `Analog_DAC:THS5641AxPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ths5641a.pdf
 * Keywords: DAC IDAC.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class THS5641AxPW extends Component.withPins({
  "D7": "1",
  "D6": "2",
  "D5": "3",
  "D4": "4",
  "D3": "5",
  "D2": "6",
  "D1": "7",
  "D0": "8",
  "NC_9": "9",
  "NC_10": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "SLEEP": "15",
  "EXTLO": "16",
  "EXTIO": "17",
  "BIASJ": "18",
  "COMP1": "19",
  "AGND": "20",
  "~{IOUT2}": "21",
  "IOUT1": "22",
  "COMP2": "23",
  "AVDD": "24",
  "MODE": "25",
  "DGND": "26",
  "DVDD": "27",
  "CLK": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D7: "input", D6: "input", D5: "input", D4: "input", D3: "input", D2: "input", D1: "input", D0: "input", NC_9: "no_connect", NC_10: "no_connect", NC_11: "no_connect", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", SLEEP: "input", EXTLO: "bidirectional", EXTIO: "bidirectional", BIASJ: "passive", COMP1: "input", AGND: "power_in", "~{IOUT2}": "output", IOUT1: "output", COMP2: "input", AVDD: "power_in", MODE: "input", DGND: "power_in", DVDD: "power_in", CLK: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:THS5641AxPW";
  override referencePrefix = "U";
}

/**
 * 4-Channel DAC, 8bit, w/ Power Down, SOIC-16
 *
 * KiCad symbol: `Analog_DAC:TLV5627CD`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/tlv5627.pdf
 * Keywords: DAC 4CH 8bit.
 */
export class TLV5627CD extends Component.withPins({
  "DVDD": "1",
  "~{PD}": "2",
  "~{LDAC}": "3",
  "DIN": "4",
  "SCLK": "5",
  "~{CS}": "6",
  "FS": "7",
  "DGND": "8",
  "AGND": "9",
  "REFINCD": "10",
  "OUTD": "11",
  "OUTC": "12",
  "OUTB": "13",
  "OUTA": "14",
  "REFINAB": "15",
  "AVDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVDD: "power_in", "~{PD}": "input", "~{LDAC}": "input", DIN: "input", SCLK: "input", "~{CS}": "input", FS: "input", DGND: "power_in", AGND: "power_in", REFINCD: "input", OUTD: "output", OUTC: "output", OUTB: "output", OUTA: "output", REFINAB: "input", AVDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:TLV5627CD";
  override referencePrefix = "U";
}

/**
 * 4-Channel DAC, 8bit, w/ Power Down, TSSOP-16
 *
 * KiCad symbol: `Analog_DAC:TLV5627CPW`. Reference prefix: `U`.
 * @see http://www.ti.com/lit/ds/symlink/tlv5627.pdf
 * Keywords: DAC 4CH 8bit.
 */
export class TLV5627CPW extends Component.withPins({
  "DVDD": "1",
  "~{PD}": "2",
  "~{LDAC}": "3",
  "DIN": "4",
  "SCLK": "5",
  "~{CS}": "6",
  "FS": "7",
  "DGND": "8",
  "AGND": "9",
  "REFINCD": "10",
  "OUTD": "11",
  "OUTC": "12",
  "OUTB": "13",
  "OUTA": "14",
  "REFINAB": "15",
  "AVDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVDD: "power_in", "~{PD}": "input", "~{LDAC}": "input", DIN: "input", SCLK: "input", "~{CS}": "input", FS: "input", DGND: "power_in", AGND: "power_in", REFINCD: "input", OUTD: "output", OUTC: "output", OUTB: "output", OUTA: "output", REFINAB: "input", AVDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_DAC:TLV5627CPW";
  override referencePrefix = "U";
}
