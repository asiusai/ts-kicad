// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Differential 8-channel ±5V, +12V, +5V, and +3.3V iCMOS analog multiplexer, 4.5 Ohm Ron, 37 MHz, LFCSP-32 5x5mm
 *
 * KiCad symbol: `Analog_Switch:ADG1607xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG1606_1607.pdf
 * Keywords: analog switch multiplexer DP8T.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class ADG1607xCP extends Component.withPins({
  "GND": "9",
  "S8B": "1",
  "S7B": "2",
  "S6B": "3",
  "S5B": "4",
  "S4B": "5",
  "S3B": "6",
  "S2B": "7",
  "S1B": "8",
  "A2": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "A1": "14",
  "A0": "15",
  "EN": "16",
  "S1A": "17",
  "S2A": "18",
  "S3A": "19",
  "S4A": "20",
  "S5A": "21",
  "S6A": "22",
  "S7A": "23",
  "S8A": "24",
  "V_{SS}_25": "25",
  "NC_26": "26",
  "DA": "27",
  "NC_28": "28",
  "V_{DD}": "29",
  "NC_30": "30",
  "DB": "31",
  "NC_32": "32",
  "V_{SS}_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", S8B: "bidirectional", S7B: "bidirectional", S6B: "bidirectional", S5B: "bidirectional", S4B: "bidirectional", S3B: "bidirectional", S2B: "bidirectional", S1B: "bidirectional", A2: "input", NC_11: "no_connect", NC_12: "no_connect", NC_13: "no_connect", A1: "input", A0: "input", EN: "input", S1A: "bidirectional", S2A: "bidirectional", S3A: "bidirectional", S4A: "bidirectional", S5A: "bidirectional", S6A: "bidirectional", S7A: "bidirectional", S8A: "bidirectional", "V_{SS}_25": "power_in", NC_26: "no_connect", DA: "bidirectional", NC_28: "no_connect", "V_{DD}": "power_in", NC_30: "no_connect", DB: "bidirectional", NC_32: "no_connect", "V_{SS}_33": "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG1607xCP";
  override referencePrefix = "U";
}

/**
 * Differential 8-channel ±5V, +12V, +5V, and +3.3V iCMOS analog multiplexer, 4.5 Ohm Ron, 37 MHz, LFCSP-32 5x5mm
 *
 * KiCad symbol: `Analog_Switch:ADG1207BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP?32*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG1206_1207.pdf
 * Keywords: analog switch multiplexer DP8T.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class ADG1207BCPZ extends Component.withPins({
  "GND": "9",
  "S8B": "1",
  "S7B": "2",
  "S6B": "3",
  "S5B": "4",
  "S4B": "5",
  "S3B": "6",
  "S2B": "7",
  "S1B": "8",
  "A2": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "A1": "14",
  "A0": "15",
  "EN": "16",
  "S1A": "17",
  "S2A": "18",
  "S3A": "19",
  "S4A": "20",
  "S5A": "21",
  "S6A": "22",
  "S7A": "23",
  "S8A": "24",
  "V_{SS}_25": "25",
  "NC_26": "26",
  "DA": "27",
  "NC_28": "28",
  "V_{DD}": "29",
  "NC_30": "30",
  "DB": "31",
  "NC_32": "32",
  "V_{SS}_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", S8B: "bidirectional", S7B: "bidirectional", S6B: "bidirectional", S5B: "bidirectional", S4B: "bidirectional", S3B: "bidirectional", S2B: "bidirectional", S1B: "bidirectional", A2: "input", NC_11: "no_connect", NC_12: "no_connect", NC_13: "no_connect", A1: "input", A0: "input", EN: "input", S1A: "bidirectional", S2A: "bidirectional", S3A: "bidirectional", S4A: "bidirectional", S5A: "bidirectional", S6A: "bidirectional", S7A: "bidirectional", S8A: "bidirectional", "V_{SS}_25": "power_in", NC_26: "no_connect", DA: "bidirectional", NC_28: "no_connect", "V_{DD}": "power_in", NC_30: "no_connect", DB: "bidirectional", NC_32: "no_connect", "V_{SS}_33": "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG1207BCPZ";
  override referencePrefix = "U";
}

/**
 * 8-channel iCMOS analog multiplexer, 4.7 Ohm Ron, 60 MHz, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:ADG1408YRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG1408_1409.pdf
 * Keywords: analog switch  multiplexer SP8T.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class ADG1408YRUZ extends Component.withPins({
  "GND": "14",
  "A0": "1",
  "EN": "2",
  "VSS": "3",
  "S1": "4",
  "S2": "5",
  "S3": "6",
  "S4": "7",
  "D": "8",
  "S8": "9",
  "S7": "10",
  "S6": "11",
  "S5": "12",
  "VDD": "13",
  "A2": "15",
  "A1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", A0: "input", EN: "input", VSS: "power_in", S1: "bidirectional", S2: "bidirectional", S3: "bidirectional", S4: "bidirectional", D: "bidirectional", S8: "bidirectional", S7: "bidirectional", S6: "bidirectional", S5: "bidirectional", VDD: "power_in", A2: "input", A1: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG1408YRUZ";
  override referencePrefix = "U";
}

/**
 * ±15V, +12V, ±5V, 9.5 Ohm on resistance, iCMOS Serially-Controlled Octal SPST Switches, TSSOP-24
 *
 * KiCad symbol: `Analog_Switch:ADG1414BRU`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG1414.pdf
 * Keywords: SPI SPST Analog Switches.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class ADG1414BRU extends Component.withPins({
  "SCLK": "1",
  "VDD": "2",
  "DIN": "3",
  "GND": "4",
  "S1": "5",
  "D1": "6",
  "S2": "7",
  "D2": "8",
  "S3": "9",
  "D3": "10",
  "S4": "11",
  "D4": "12",
  "D5": "13",
  "S5": "14",
  "D6": "15",
  "S6": "16",
  "D7": "17",
  "S7": "18",
  "D8": "19",
  "S8": "20",
  "VSS": "21",
  "SDO": "22",
  "VL": "23",
  "~{SYNC}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCLK: "input", VDD: "power_in", DIN: "input", GND: "power_in", S1: "passive", D1: "passive", S2: "passive", D2: "passive", S3: "passive", D3: "passive", S4: "passive", D4: "passive", D5: "passive", S5: "passive", D6: "passive", S6: "passive", D7: "passive", S7: "passive", D8: "passive", S8: "passive", VSS: "power_in", SDO: "open_collector", VL: "power_in", "~{SYNC}": "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG1414BRU";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic CMOS Analog Switch, normally OFF, 20Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:DG418xJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DG418xJ extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG418xJ";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic LC²MOS Analog Switch, normally OFF, 25Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:ADG417BN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG417.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class ADG417BN extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG417BN";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic CMOS Analog Switch, normally OFF, 20Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:DG418xY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DG418xY extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG418xY";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic LC²MOS Analog Switch, normally OFF, 25Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:ADG417BR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG417.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADG417BR extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG417BR";
  override referencePrefix = "U";
}

/**
 * Single SPDT Monolithic CMOS Analog Switch, 20Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:DG419xJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DG419xJ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG419xJ";
  override referencePrefix = "U";
}

/**
 * Single SPDT Monolithic LC²MOS Analog Switch, 25Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:ADG419BN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class ADG419BN extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG419BN";
  override referencePrefix = "U";
}

/**
 * Single SPDT Monolithic CMOS Analog Switch, 20Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:DG419xY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DG419xY extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG419xY";
  override referencePrefix = "U";
}

/**
 * Single SPDT Monolithic LC²MOS Analog Switch, 25Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:ADG419BR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ADG419BR extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG419BR";
  override referencePrefix = "U";
}

/**
 * Single SPDT Monolithic LC²MOS Analog Switch, 25Ohm Ron, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:ADG419BRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class ADG419BRM extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG419BRM";
  override referencePrefix = "U";
}

/**
 * Triple SPDT CMOS Analog Switch, 52Ohm Ron, LFCSP-16
 *
 * KiCad symbol: `Analog_Switch:ADG633YCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adg633.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_CSP:LFCSP-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 */
export class ADG633YCP extends Component.withPins({
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P8": "8",
  "P13": "13",
  "P15": "15",
  "P16": "16",
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P7": "7",
  "~{EN}": "4",
  "VSS": "5",
  "GND": "6",
  "VDD": "14",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P9: "input", P10: "passive", P11: "passive", P12: "passive", P8: "input", P13: "passive", P15: "passive", P16: "passive", P1: "passive", P2: "passive", P3: "passive", P7: "input", "~{EN}": "input", VSS: "power_in", GND: "power_in", VDD: "power_in", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG633YCP";
  override referencePrefix = "U";
}

/**
 * Triple SPDT CMOS Analog Switch, 52Ohm Ron, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:ADG633YRU`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG633.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class ADG633YRU extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P1": "1",
  "P2": "2",
  "P10": "10",
  "P15": "15",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P9": "9",
  "~{EN}": "6",
  "VSS": "7",
  "GND": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P11: "input", P12: "passive", P13: "passive", P14: "passive", P1: "passive", P2: "passive", P10: "input", P15: "passive", P3: "passive", P4: "passive", P5: "passive", P9: "input", "~{EN}": "input", VSS: "power_in", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG633YRU";
  override referencePrefix = "U";
}

/**
 * 8-channel iCMOS analog multiplexer, 45 Ohm Ron, 210 MHz, LFCSP-16
 *
 * KiCad symbol: `Analog_Switch:ADG658YCP`. Reference prefix: `U`.
 * Footprint filters: *LFCSP*1EP*4x4mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG658_659.pdf
 * Keywords: analog switch multiplexer SP8T.
 * Default footprint: Package_CSP:Analog_LFCSP-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 */
export class ADG658YCP extends Component.withPins({
  "GND": "6",
  "D": "1",
  "S8": "2",
  "S6": "3",
  "~{EN}": "4",
  "V_{SS}": "5",
  "A2": "7",
  "A1": "8",
  "A0": "9",
  "S4": "10",
  "S1": "11",
  "S2": "12",
  "S3": "13",
  "V_{DD}": "14",
  "S5": "15",
  "S7": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", D: "bidirectional", S8: "bidirectional", S6: "bidirectional", "~{EN}": "input", "V_{SS}": "power_in", A2: "input", A1: "input", A0: "input", S4: "bidirectional", S1: "bidirectional", S2: "bidirectional", S3: "bidirectional", "V_{DD}": "power_in", S5: "bidirectional", S7: "bidirectional", EPAD: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG658YCP";
  override referencePrefix = "U";
}

/**
 * Differential 8-to-1 Multiplexer, 2.5 Ohm Ron, 36Mhz, TSSOP-28
 *
 * KiCad symbol: `Analog_Switch:ADG707BRU`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG706_707.pdf
 * Keywords: analog switch selector differencial multiplexer.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class ADG707BRU extends Component.withPins({
  "VDD": "1",
  "DB": "2",
  "NC_3": "3",
  "S8B": "4",
  "S7B": "5",
  "S6B": "6",
  "S5B": "7",
  "S4B": "8",
  "S3B": "9",
  "S2B": "10",
  "S1B": "11",
  "GND": "12",
  "NC_13": "13",
  "NC_14": "14",
  "A2": "15",
  "A1": "16",
  "A0": "17",
  "EN": "18",
  "S1A": "19",
  "S2A": "20",
  "S3A": "21",
  "S4A": "22",
  "S5A": "23",
  "S6A": "24",
  "S7A": "25",
  "S8A": "26",
  "VSS": "27",
  "DA": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", DB: "passive", NC_3: "no_connect", S8B: "passive", S7B: "passive", S6B: "passive", S5B: "passive", S4B: "passive", S3B: "passive", S2B: "passive", S1B: "passive", GND: "power_in", NC_13: "no_connect", NC_14: "no_connect", A2: "input", A1: "input", A0: "input", EN: "input", S1A: "passive", S2A: "passive", S3A: "passive", S4A: "passive", S5A: "passive", S6A: "passive", S7A: "passive", S8A: "passive", VSS: "power_in", DA: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG707BRU";
  override referencePrefix = "U";
}

/**
 * CMOS, Low Voltage, Serially Controlled, Octal SPST Switch, I2C interface, TSSOP-24
 *
 * KiCad symbol: `Analog_Switch:ADG715`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG714_715.pdf
 * Keywords: CMOS, Switch, I2C.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class ADG715 extends Component.withPins({
  "SCL": "1",
  "VDD": "2",
  "SDA": "3",
  "GND": "4",
  "S1": "5",
  "D1": "6",
  "S2": "7",
  "D2": "8",
  "S3": "9",
  "D3": "10",
  "S4": "11",
  "D4": "12",
  "D5": "13",
  "S5": "14",
  "D6": "15",
  "S6": "16",
  "D7": "17",
  "S7": "18",
  "D8": "19",
  "S8": "20",
  "VSS": "21",
  "A1": "22",
  "~{RESET}": "23",
  "A0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", VDD: "power_in", SDA: "bidirectional", GND: "power_in", S1: "passive", D1: "passive", S2: "passive", D2: "passive", S3: "passive", D3: "passive", S4: "passive", D4: "passive", D5: "passive", S5: "passive", D6: "passive", S6: "passive", D7: "passive", S7: "passive", D8: "passive", S8: "passive", VSS: "power_in", A1: "input", "~{RESET}": "input", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG715";
  override referencePrefix = "U";
}

/**
 * Single 8-to-1 CMOS Low Voltage 2-Wire Serially Controlled, Matrix Switches
 *
 * KiCad symbol: `Analog_Switch:ADG728`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG728_729.pdf
 * Keywords: analog switch selector multiplexer TWI I2C IIC 8-to-1.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class ADG728 extends Component.withPins({
  "SCL": "1",
  "~{RESET}": "2",
  "SDA": "3",
  "S1": "4",
  "S2": "5",
  "S3": "6",
  "S4": "7",
  "D": "8",
  "S8": "9",
  "S7": "10",
  "S6": "11",
  "S5": "12",
  "VDD": "13",
  "GND": "14",
  "A1": "15",
  "A0": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", "~{RESET}": "input", SDA: "bidirectional", S1: "bidirectional", S2: "bidirectional", S3: "bidirectional", S4: "bidirectional", D: "bidirectional", S8: "bidirectional", S7: "bidirectional", S6: "bidirectional", S5: "bidirectional", VDD: "power_in", GND: "power_in", A1: "input", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG728";
  override referencePrefix = "U";
}

/**
 * Dual 4-to-1 CMOS Low Voltage 2-Wire Serially Controlled, Matrix Switches
 *
 * KiCad symbol: `Analog_Switch:ADG729`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG728_729.pdf
 * Keywords: analog switch selector multiplexer TWI I2C IIC 4-to-1.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class ADG729 extends Component.withPins({
  "SCL": "1",
  "A1": "2",
  "SDA": "3",
  "S1A": "4",
  "S2A": "5",
  "S3A": "6",
  "S4A": "7",
  "DA": "8",
  "DB": "9",
  "S4B": "10",
  "S3B": "11",
  "S2B": "12",
  "S1B": "13",
  "VDD": "14",
  "GND": "15",
  "A0": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", A1: "input", SDA: "bidirectional", S1A: "bidirectional", S2A: "bidirectional", S3A: "bidirectional", S4A: "bidirectional", DA: "bidirectional", DB: "bidirectional", S4B: "bidirectional", S3B: "bidirectional", S2B: "bidirectional", S1B: "bidirectional", VDD: "power_in", GND: "power_in", A0: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG729";
  override referencePrefix = "U";
}

/**
 * Triple SPDT CMOS Analog Switch, 2.5Ohm Ron, QSOP-16
 *
 * KiCad symbol: `Analog_Switch:ADG733BRQ`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x4.9mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG733_734.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:QSOP-16_3.9x4.9mm_P0.635mm.
 */
export class ADG733BRQ extends Component.withPins({
  "6": "~{EN}",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P1": "1",
  "P2": "2",
  "P10": "10",
  "P15": "15",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P9": "9",
  "VSS": "7",
  "GND": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "6": "input", P11: "input", P12: "passive", P13: "passive", P14: "passive", P1: "passive", P2: "passive", P10: "input", P15: "passive", P3: "passive", P4: "passive", P5: "passive", P9: "input", VSS: "power_in", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG733BRQ";
  override referencePrefix = "U";
}

/**
 * Triple SPDT CMOS Analog Switch, 2.5Ohm Ron, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:ADG733BRU`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG733_734.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class ADG733BRU extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P1": "1",
  "P2": "2",
  "P10": "10",
  "P15": "15",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P9": "9",
  "~{EN}": "6",
  "VSS": "7",
  "GND": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P11: "input", P12: "passive", P13: "passive", P14: "passive", P1: "passive", P2: "passive", P10: "input", P15: "passive", P3: "passive", P4: "passive", P5: "passive", P9: "input", "~{EN}": "input", VSS: "power_in", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG733BRU";
  override referencePrefix = "U";
}

/**
 * Quad SPDT CMOS Analog Switch, 2.5Ohm Ron, TSSOP-20
 *
 * KiCad symbol: `Analog_Switch:ADG734`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG733_734.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class ADG734 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "VSS": "5",
  "GND": "6",
  "NC": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P4: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "input", P11: "input", P12: "passive", P13: "passive", P14: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "input", VSS: "power_in", GND: "power_in", NC: "no_connect", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG734";
  override referencePrefix = "U";
}

/**
 * 8-channel CMOS analog multiplexer, 3 Ohm Ron, 55 MHz, LFCSP-20
 *
 * KiCad symbol: `Analog_Switch:ADG758CPZ`. Reference prefix: `U`.
 * Footprint filters: *LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG758_759.pdf
 * Keywords: analog switch multiplexer SP8T.
 * Default footprint: Package_CSP:LFCSP-20-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class ADG758CPZ extends Component.withPins({
  "GND": "15",
  "EN": "1",
  "V_{SS}_2": "2",
  "S1": "3",
  "S2": "4",
  "S3": "5",
  "S4": "6",
  "D": "7",
  "NC_8": "8",
  "NC_9": "9",
  "S8": "10",
  "S7": "11",
  "S6": "12",
  "S5": "13",
  "V_{DD}": "14",
  "NC_16": "16",
  "A2": "17",
  "A1": "18",
  "A0": "19",
  "NC_20": "20",
  "V_{SS}_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", EN: "input", "V_{SS}_2": "power_in", S1: "bidirectional", S2: "bidirectional", S3: "bidirectional", S4: "bidirectional", D: "bidirectional", NC_8: "no_connect", NC_9: "no_connect", S8: "bidirectional", S7: "bidirectional", S6: "bidirectional", S5: "bidirectional", "V_{DD}": "power_in", NC_16: "no_connect", A2: "input", A1: "input", A0: "input", NC_20: "no_connect", "V_{SS}_21": "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG758CPZ";
  override referencePrefix = "U";
}

/**
 * 0.5Ω CMOS 1.65V to 3.6V Dual SPDT/2:1 MUX, Mini LFCSP-10 Package 1.3x1.6mm
 *
 * KiCad symbol: `Analog_Switch:ADG824BCP`. Reference prefix: `U`.
 * Footprint filters: Analog_LFCSP*1.3x1.6mm*P0.4mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG884.pdf
 * Keywords: analog switch.
 * Default footprint: Package_CSP:Analog_LFCSP-UQ-10_1.3x1.6mm_P0.4mm.
 */
export class ADG824BCP extends Component.withPins({
  "S1A": "1",
  "D1": "2",
  "S1B": "3",
  "IN1": "4",
  "IN2": "5",
  "VDD": "6",
  "S2B": "7",
  "D2": "8",
  "S2A": "9",
  "GND": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S1A: "bidirectional", D1: "bidirectional", S1B: "bidirectional", IN1: "input", IN2: "input", VDD: "power_in", S2B: "bidirectional", D2: "bidirectional", S2A: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG824BCP";
  override referencePrefix = "U";
}

/**
 * 0.5Ω CMOS, Dual 2:1 MUX/SPDT Audio Switch, LFCSP-WD-10
 *
 * KiCad symbol: `Analog_Switch:ADG884xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG884.pdf
 * Keywords: analog switch.
 * Default footprint: Package_CSP:LFCSP-WD-10-1EP_3x3mm_P0.5mm_EP1.64x2.38mm.
 */
export class ADG884xCP extends Component.withPins({
  "VDD": "1",
  "S1A": "2",
  "D1": "3",
  "IN1": "4",
  "S1B": "5",
  "GND_6": "6",
  "S2B": "7",
  "IN2": "8",
  "D2": "9",
  "S2A": "10",
  "GND_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", S1A: "bidirectional", D1: "bidirectional", IN1: "input", S1B: "bidirectional", GND_6: "power_in", S2B: "bidirectional", IN2: "input", D2: "bidirectional", S2A: "bidirectional", GND_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG884xCP";
  override referencePrefix = "U";
}

/**
 * 0.5Ω CMOS, Dual 2:1 MUX/SPDT Audio Switch, MSOP-10
 *
 * KiCad symbol: `Analog_Switch:ADG884xRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADG884.pdf
 * Keywords: analog switch.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class ADG884xRM extends Component.withPins({
  "VDD": "1",
  "S1A": "2",
  "D1": "3",
  "IN1": "4",
  "S1B": "5",
  "GND": "6",
  "S2B": "7",
  "IN2": "8",
  "D2": "9",
  "S2A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", S1A: "bidirectional", D1: "bidirectional", IN1: "input", S1B: "bidirectional", GND: "power_in", S2B: "bidirectional", IN2: "input", D2: "bidirectional", S2A: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:ADG884xRM";
  override referencePrefix = "U";
}

/**
 * 3.3 V, 2 differential channel, 2:1 MUX/deMUX switch, 10 Gbps, WQFN-20
 *
 * KiCad symbol: `Analog_Switch:CBTL02043A`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*2.5x4.5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/CBTL02043A_CBTL02043B.pdf
 * Keywords: Multiplexer Demultiplexer Switch Hi-Speed.
 * Default footprint: Package_DFN_QFN:WQFN-20-1EP_2.5x4.5mm_P0.5mm_EP1x2.9mm.
 */
export class CBTL02043A extends Component.withPins({
  "VDD_1": "1",
  "XSD": "2",
  "A0_P": "3",
  "A0_N": "4",
  "GND_5": "5",
  "VDD_6": "6",
  "A1_P": "7",
  "A1_N": "8",
  "SEL": "9",
  "VDD_10": "10",
  "GND_11": "11",
  "C1_N": "12",
  "C1_P": "13",
  "C0_N": "14",
  "C0_P": "15",
  "B1_N": "16",
  "B1_P": "17",
  "B0_N": "18",
  "B0_P": "19",
  "GND_20": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", XSD: "input", A0_P: "passive", A0_N: "passive", GND_5: "power_in", VDD_6: "passive", A1_P: "passive", A1_N: "passive", SEL: "input", VDD_10: "passive", GND_11: "passive", C1_N: "passive", C1_P: "passive", C0_N: "passive", C0_P: "passive", B1_N: "passive", B1_P: "passive", B0_N: "passive", B0_P: "passive", GND_20: "passive", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CBTL02043A";
  override referencePrefix = "U";
}

/**
 * 3.3 V, 2 differential channel, 2:1 MUX/deMUX switch, 10 Gbps, WQFN-20
 *
 * KiCad symbol: `Analog_Switch:CBTL02043B`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*2.5x4.5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/CBTL02043A_CBTL02043B.pdf
 * Keywords: Multiplexer Demultiplexer Switch Hi-Speed.
 * Default footprint: Package_DFN_QFN:WQFN-20-1EP_2.5x4.5mm_P0.5mm_EP1x2.9mm.
 */
export class CBTL02043B extends Component.withPins({
  "GND_1": "1",
  "A0_P": "2",
  "A0_N": "3",
  "C0_P": "4",
  "C0_N": "5",
  "A1_P": "6",
  "A1_N": "7",
  "C1_P": "8",
  "C1_N": "9",
  "GND_10": "10",
  "VDD_11": "11",
  "SEL": "12",
  "B1_N": "13",
  "B1_P": "14",
  "GND_15": "15",
  "VDD_16": "16",
  "B0_N": "17",
  "B0_P": "18",
  "XSD": "19",
  "VDD_20": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", A0_P: "passive", A0_N: "passive", C0_P: "passive", C0_N: "passive", A1_P: "passive", A1_N: "passive", C1_P: "passive", C1_N: "passive", GND_10: "passive", VDD_11: "power_in", SEL: "input", B1_N: "passive", B1_P: "passive", GND_15: "passive", VDD_16: "passive", B0_N: "passive", B0_P: "passive", XSD: "input", VDD_20: "passive", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CBTL02043B";
  override referencePrefix = "U";
}

/**
 * CMOS single 8-channel analog multiplexer demultiplexer, TSSOP-16/DIP-16/SOIC-16
 *
 * KiCad symbol: `Analog_Switch:CD4051B`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*, DIP*W7.62*, SOIC*3.9x9.9mm*P1.27mm*, SO*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd4052b.pdf
 * Keywords: analog switch selector multiplexer.
 */
export class CD4051B extends Component.withPins({
  "X4": "1",
  "X6": "2",
  "X": "3",
  "X7": "4",
  "X5": "5",
  "INH": "6",
  "VEE": "7",
  "VSS": "8",
  "C": "9",
  "B": "10",
  "A": "11",
  "X3": "12",
  "X0": "13",
  "X1": "14",
  "X2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X4: "bidirectional", X6: "bidirectional", X: "bidirectional", X7: "bidirectional", X5: "bidirectional", INH: "input", VEE: "power_in", VSS: "power_in", C: "input", B: "input", A: "input", X3: "bidirectional", X0: "bidirectional", X1: "bidirectional", X2: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CD4051B";
  override referencePrefix = "U";
}

/**
 * CMOS double 4-channel analog multiplexer/demultiplexer, TSSOP-16/DIP-16/SOIC-16
 *
 * KiCad symbol: `Analog_Switch:CD4052B`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*, DIP*W7.62*, SOIC*3.9x9.9mm*P1.27mm*, SO*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd4052b.pdf
 * Keywords: analog switch selector multiplexer.
 */
export class CD4052B extends Component.withPins({
  "Y0": "1",
  "Y2": "2",
  "Y": "3",
  "Y3": "4",
  "Y1": "5",
  "INH": "6",
  "VEE": "7",
  "VSS": "8",
  "B": "9",
  "A": "10",
  "X3": "11",
  "X0": "12",
  "X": "13",
  "X1": "14",
  "X2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Y0: "bidirectional", Y2: "bidirectional", Y: "bidirectional", Y3: "bidirectional", Y1: "bidirectional", INH: "input", VEE: "power_in", VSS: "power_in", B: "input", A: "input", X3: "bidirectional", X0: "bidirectional", X: "bidirectional", X1: "bidirectional", X2: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CD4052B";
  override referencePrefix = "U";
}

/**
 * CMOS triple 2-channel analog multiplexer/demultiplexer, TSSOP-16/DIP-16/SOIC-16
 *
 * KiCad symbol: `Analog_Switch:CD4053B`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*, DIP*W7.62*, SOIC*3.9x9.9mm*P1.27mm*, SO*5.3x10.2mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd4052b.pdf
 * Keywords: analog switch selector multiplexer.
 */
export class CD4053B extends Component.withPins({
  "B1": "1",
  "B0": "2",
  "C1": "3",
  "C": "4",
  "C0": "5",
  "INH": "6",
  "VEE": "7",
  "VSS": "8",
  "S3": "9",
  "S2": "10",
  "S1": "11",
  "A0": "12",
  "A1": "13",
  "A": "14",
  "B": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { B1: "bidirectional", B0: "bidirectional", C1: "bidirectional", C: "bidirectional", C0: "bidirectional", INH: "input", VEE: "power_in", VSS: "power_in", S3: "input", S2: "input", S1: "input", A0: "bidirectional", A1: "bidirectional", A: "bidirectional", B: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CD4053B";
  override referencePrefix = "U";
}

/**
 * Quad 20V analog SPST 1:1 switch, DIP-14
 *
 * KiCad symbol: `Analog_Switch:CD4066BE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62*.
 * @see https://www.ti.com/lit/ds/symlink/cd4066b.pdf
 * Keywords: analog switch selector multiplexer spst mux amux.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class CD4066BE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "V_{SS}": "7",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "bidirectional", P2: "bidirectional", P13: "input", P3: "bidirectional", P4: "bidirectional", P5: "input", P6: "input", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CD4066BE";
  override referencePrefix = "U";
}

/**
 * Quad 20V analog SPST 1:1 switch, SO-14 (3.9x8.65mm)
 *
 * KiCad symbol: `Analog_Switch:CD4066BM`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x8.65mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd4066b.pdf
 * Keywords: analog switch selector multiplexer spst mux amux.
 * Default footprint: Package_SO:SO-14_3.9x8.65mm_P1.27mm.
 */
export class CD4066BM extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "V_{SS}": "7",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "bidirectional", P2: "bidirectional", P13: "input", P3: "bidirectional", P4: "bidirectional", P5: "input", P6: "input", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CD4066BM";
  override referencePrefix = "U";
}

/**
 * Quad 20V analog SPST 1:1 switch, SO-14 (5.3x10.2mm)
 *
 * KiCad symbol: `Analog_Switch:CD4066BNS`. Reference prefix: `U`.
 * Footprint filters: SO*5.3x10.2mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd4066b.pdf
 * Keywords: analog switch selector multiplexer spst mux amux.
 * Default footprint: Package_SO:SO-14_5.3x10.2mm_P1.27mm.
 */
export class CD4066BNS extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "V_{SS}": "7",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "bidirectional", P2: "bidirectional", P13: "input", P3: "bidirectional", P4: "bidirectional", P5: "input", P6: "input", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CD4066BNS";
  override referencePrefix = "U";
}

/**
 * Quad 20V analog SPST 1:1 switch, TSSOP-14
 *
 * KiCad symbol: `Analog_Switch:CD4066BPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd4066b.pdf
 * Keywords: analog switch selector multiplexer spst mux amux.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class CD4066BPW extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "V_{SS}": "7",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "bidirectional", P2: "bidirectional", P13: "input", P3: "bidirectional", P4: "bidirectional", P5: "input", P6: "input", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "input", "V_{SS}": "power_in", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CD4066BPW";
  override referencePrefix = "U";
}

/**
 * CMOS double 8-channel analog multiplexer/demultiplexer, TSSOP-24/DIP-24/SOIC-24
 *
 * KiCad symbol: `Analog_Switch:CD4097B`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*, SOIC*7.5*15.4*1.27mm*, SO*5.3x15.0mm*P1.27mm*, DIP*15.24mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd4097b.pdf
 * Keywords: analog switch selector multiplexer.
 */
export class CD4097B extends Component.withPins({
  "X": "1",
  "X7": "2",
  "X6": "3",
  "X5": "4",
  "X4": "5",
  "X3": "6",
  "X2": "7",
  "X1": "8",
  "X0": "9",
  "A": "10",
  "B": "11",
  "VSS": "12",
  "INH": "13",
  "C": "14",
  "Y7": "15",
  "Y6": "16",
  "Y": "17",
  "Y5": "18",
  "Y4": "19",
  "Y3": "20",
  "Y2": "21",
  "Y1": "22",
  "Y0": "23",
  "VDD": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X: "bidirectional", X7: "bidirectional", X6: "bidirectional", X5: "bidirectional", X4: "bidirectional", X3: "bidirectional", X2: "bidirectional", X1: "bidirectional", X0: "bidirectional", A: "input", B: "input", VSS: "power_in", INH: "input", C: "input", Y7: "bidirectional", Y6: "bidirectional", Y: "bidirectional", Y5: "bidirectional", Y4: "bidirectional", Y3: "bidirectional", Y2: "bidirectional", Y1: "bidirectional", Y0: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:CD4097B";
  override referencePrefix = "U";
}

/**
 * Quad SPST Analog Switches, normally OFF, 60Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:DG308AxJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets/70/494502_DS.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class DG308AxJ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "NC": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG308AxJ";
  override referencePrefix = "U";
}

/**
 * Quad SPST Analog Switches, normally OFF, 60Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:DG308AxY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets/70/494502_DS.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class DG308AxY extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "NC": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG308AxY";
  override referencePrefix = "U";
}

/**
 * Quad SPST Analog Switches, normally ON, 60Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:DG309xJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets/70/494502_DS.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class DG309xJ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "NC": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG309xJ";
  override referencePrefix = "U";
}

/**
 * Quad SPST Analog Switches, normally ON, 60Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:DG309xY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets/70/494502_DS.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class DG309xY extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "NC": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG309xY";
  override referencePrefix = "U";
}

/**
 * Quad SPST Monolithic CMOS Analog Switches, normally ON, 17Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:DG411xJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG411-DG413.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class DG411xJ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG411xJ";
  override referencePrefix = "U";
}

/**
 * Quad SPST Monolithic CMOS Analog Switches, normally ON, 17Ohm Ron, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:DG411xUE`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG411-DG413.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DG411xUE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG411xUE";
  override referencePrefix = "U";
}

/**
 * Quad SPST Monolithic CMOS Analog Switches, normally ON, 17Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:DG411xY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG411-DG413.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class DG411xY extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG411xY";
  override referencePrefix = "U";
}

/**
 * Quad SPST Monolithic CMOS Analog Switches, normally OFF, 17Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:DG412xJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG411-DG413.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class DG412xJ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG412xJ";
  override referencePrefix = "U";
}

/**
 * Quad SPST Monolithic CMOS Analog Switches, normally OFF, 17Ohm Ron, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:DG412xUE`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG411-DG413.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DG412xUE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG412xUE";
  override referencePrefix = "U";
}

/**
 * Quad SPST Monolithic CMOS Analog Switches, normally OFF, 17Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:DG412xY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG411-DG413.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class DG412xY extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG412xY";
  override referencePrefix = "U";
}

/**
 * Quad SPST Monolithic CMOS Analog Switches, normally 2xON + 2xOFF, 17Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:DG413xJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG411-DG413.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class DG413xJ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG413xJ";
  override referencePrefix = "U";
}

/**
 * Quad SPST Monolithic CMOS Analog Switches, normally 2xON + 2xOFF, 17Ohm Ron, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:DG413xUE`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG411-DG413.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class DG413xUE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG413xUE";
  override referencePrefix = "U";
}

/**
 * Quad SPST Monolithic CMOS Analog Switches, normally 2xON + 2xOFF, 17Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:DG413xY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG411-DG413.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class DG413xY extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG413xY";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally ON, 35Ohm Ron, with Vlogic, DIP-8
 *
 * KiCad symbol: `Analog_Switch:DG417LDJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417L-DG419L.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DG417LDJ extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG417LDJ";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally ON, 35Ohm Ron, Maxim-variant without Vlogic, DIP-8
 *
 * KiCad symbol: `Analog_Switch:DG417LDJ_Maxim`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417L-DG419L.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DG417LDJ_Maxim extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC_2": "2",
  "GND": "3",
  "V+": "4",
  "NC_5": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC_2: "no_connect", GND: "power_in", "V+": "power_in", NC_5: "no_connect", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG417LDJ_Maxim";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally ON, 20Ohm Ron, with Vlogic, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:DG417LDY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DG417LDY extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG417LDY";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally ON, 20Ohm Ron, Maxim-variant without Vlogic, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:DG417LDY_Maxim`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DG417LDY_Maxim extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC_2": "2",
  "GND": "3",
  "V+": "4",
  "NC_5": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC_2: "no_connect", GND: "power_in", "V+": "power_in", NC_5: "no_connect", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG417LDY_Maxim";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally ON, 20Ohm Ron, with Vlogic, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:DG417LEUA`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DG417LEUA extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG417LEUA";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally ON, 20Ohm Ron, Maxim-variant without Vlogic, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:DG417LEUA_Maxim`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DG417LEUA_Maxim extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC_2": "2",
  "GND": "3",
  "V+": "4",
  "NC_5": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC_2: "no_connect", GND: "power_in", "V+": "power_in", NC_5: "no_connect", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG417LEUA_Maxim";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic CMOS Analog Switch, normally ON, 20Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:DG417xJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DG417xJ extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG417xJ";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic CMOS Analog Switch, normally ON, 20Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:DG417xY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DG417xY extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG417xY";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally OFF, 35Ohm Ron, with Vlogic, DIP-8
 *
 * KiCad symbol: `Analog_Switch:DG418LDJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DG418LDJ extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG418LDJ";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally OFF, 35Ohm Ron, Maxim-variant without Vlogic, DIP-8
 *
 * KiCad symbol: `Analog_Switch:DG418LDJ_Maxim`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DG418LDJ_Maxim extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC_2": "2",
  "GND": "3",
  "V+": "4",
  "NC_5": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC_2: "no_connect", GND: "power_in", "V+": "power_in", NC_5: "no_connect", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG418LDJ_Maxim";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally OFF, 35Ohm Ron, with Vlogic, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:DG418LDY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DG418LDY extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG418LDY";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally OFF, 35Ohm Ron, Maxim-variant without Vlogic, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:DG418LDY_Maxim`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DG418LDY_Maxim extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC_2": "2",
  "GND": "3",
  "V+": "4",
  "NC_5": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC_2: "no_connect", GND: "power_in", "V+": "power_in", NC_5: "no_connect", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG418LDY_Maxim";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally OFF, 35Ohm Ron, with Vlogic, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:DG418LEUA`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DG418LEUA extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG418LEUA";
  override referencePrefix = "U";
}

/**
 * Single SPST 3V Logic Compatible CMOS Analog Switch, normally OFF, 35Ohm Ron, Maxim-variant without Vlogic, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:DG418LEUA_Maxim`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DG418LEUA_Maxim extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC_2": "2",
  "GND": "3",
  "V+": "4",
  "NC_5": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC_2: "no_connect", GND: "power_in", "V+": "power_in", NC_5: "no_connect", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG418LEUA_Maxim";
  override referencePrefix = "U";
}

/**
 * Single SPDT 3V Logic Compatible CMOS Analog Switch, 35Ohm Ron, with Vlogic, DIP-8
 *
 * KiCad symbol: `Analog_Switch:DG419LDJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DG419LDJ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG419LDJ";
  override referencePrefix = "U";
}

/**
 * Single SPDT 3V Logic Compatible CMOS Analog Switch, 35Ohm Ron, Maxim-variant without Vlogic, DIP-8
 *
 * KiCad symbol: `Analog_Switch:DG419LDJ_Maxim`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DG419LDJ_Maxim extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "NC": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", NC: "no_connect", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG419LDJ_Maxim";
  override referencePrefix = "U";
}

/**
 * Single SPDT 3V Logic Compatible CMOS Analog Switch, 35Ohm Ron, with Vlogic, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:DG419LDY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DG419LDY extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG419LDY";
  override referencePrefix = "U";
}

/**
 * Single SPDT 3V Logic Compatible CMOS Analog Switch, 35Ohm Ron, Maxim-variant without Vlogic, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:DG419LDY_Maxim`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DG419LDY_Maxim extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "NC": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", NC: "no_connect", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG419LDY_Maxim";
  override referencePrefix = "U";
}

/**
 * Single SPDT 3V Logic Compatible CMOS Analog Switch, 35Ohm Ron, with Vlogic, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:DG419LEUA`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DG419LEUA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG419LEUA";
  override referencePrefix = "U";
}

/**
 * Single SPDT 3V Logic Compatible CMOS Analog Switch, 35Ohm Ron, Maxim-variant without Vlogic, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:DG419LEUA_Maxim`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG417-DG419.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DG419LEUA_Maxim extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "NC": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", NC: "no_connect", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG419LEUA_Maxim";
  override referencePrefix = "U";
}

/**
 * Quad SPST Analog Switches, normally ON, 60Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:DG441xJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG441-DG442.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class DG441xJ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "NC": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG441xJ";
  override referencePrefix = "U";
}

/**
 * Quad SPST Analog Switches, normally ON, 60Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:DG441xY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG441-DG442.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class DG441xY extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "NC": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG441xY";
  override referencePrefix = "U";
}

/**
 * Quad SPST Analog Switches, normally OFF, 60Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:DG442xJ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG441-DG442.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class DG442xJ extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "NC": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG442xJ";
  override referencePrefix = "U";
}

/**
 * Quad SPST Analog Switches, normally OFF, 60Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:DG442xY`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DG441-DG442.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class DG442xY extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "NC": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG442xY";
  override referencePrefix = "U";
}

/**
 * 8 x 4 Wideband Video Crosspoint Array, 45Ohm Ron, PLCC-44
 *
 * KiCad symbol: `Analog_Switch:DG884DN`. Reference prefix: `U`.
 * Footprint filters: PLCC?44*.
 * @see http://www.vishay.com/docs/70071/dg884.pdf
 * Keywords: CMOS Analog Switch Video Crosspoint.
 * Default footprint: Package_LCC:PLCC-44.
 */
export class DG884DN extends Component.withPins({
  "GNDA_1": "1",
  "OUT1": "2",
  "GNDA_3": "3",
  "GNDA_4": "4",
  "IN1": "5",
  "GNDA_6": "6",
  "IN2": "7",
  "GNDA_8": "8",
  "IN3": "9",
  "GNDA_10": "10",
  "IN4": "11",
  "GNDA_12": "12",
  "IN5": "13",
  "GNDA_14": "14",
  "IN6": "15",
  "GNDA_16": "16",
  "IN7": "17",
  "GNDA_18": "18",
  "IN8": "19",
  "GNDA_20": "20",
  "V-": "21",
  "~{DIS1}": "22",
  "~{DIS2}": "23",
  "~{DIS3}": "24",
  "~{DIS4}": "25",
  "V+": "26",
  "B0": "27",
  "B1": "28",
  "~{I}/O": "29",
  "~{CS}": "30",
  "A0": "31",
  "A1": "32",
  "A2": "33",
  "A3": "34",
  "~{WR}": "35",
  "~{SALVO}": "36",
  "~{RS}": "37",
  "VCC": "38",
  "GND": "39",
  "OUT4": "40",
  "GNDA_41": "41",
  "OUT3": "42",
  "GNDA_43": "43",
  "OUT2": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GNDA_1: "power_in", OUT1: "output", GNDA_3: "passive", GNDA_4: "passive", IN1: "input", GNDA_6: "passive", IN2: "input", GNDA_8: "passive", IN3: "input", GNDA_10: "passive", IN4: "input", GNDA_12: "passive", IN5: "input", GNDA_14: "passive", IN6: "input", GNDA_16: "passive", IN7: "input", GNDA_18: "passive", IN8: "input", GNDA_20: "passive", "V-": "passive", "~{DIS1}": "open_collector", "~{DIS2}": "open_collector", "~{DIS3}": "open_collector", "~{DIS4}": "open_collector", "V+": "passive", B0: "input", B1: "input", "~{I}/O": "input", "~{CS}": "input", A0: "input", A1: "input", A2: "input", A3: "input", "~{WR}": "input", "~{SALVO}": "input", "~{RS}": "input", VCC: "power_in", GND: "power_in", OUT4: "output", GNDA_41: "passive", OUT3: "output", GNDA_43: "passive", OUT2: "output", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG884DN";
  override referencePrefix = "U";
}

/**
 * Single SPST Precision Low-Voltage, Low-Glitch CMOS Analog Switch, normally ON, 2Ohm Ron, TSOP-6
 *
 * KiCad symbol: `Analog_Switch:DG9421DV`. Reference prefix: `U`.
 * Footprint filters: TSOP*1.65x3.05mm*P0.95mm*.
 * @see https://www.vishay.com/docs/70679/dg9421.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSOP-6_1.65x3.05mm_P0.95mm.
 */
export class DG9421DV extends Component.withPins({
  "P2": "2",
  "P5": "5",
  "P6": "6",
  "V+": "1",
  "V-": "3",
  "GND": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P2: "passive", P5: "passive", P6: "input", "V+": "power_in", "V-": "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG9421DV";
  override referencePrefix = "U";
}

/**
 * Single SPST Precision Low-Voltage, Low-Glitch CMOS Analog Switch, normally OFF, 2Ohm Ron, TSOP-6
 *
 * KiCad symbol: `Analog_Switch:DG9422DV`. Reference prefix: `U`.
 * Footprint filters: TSOP*1.65x3.05mm*P0.95mm*.
 * @see https://www.vishay.com/docs/70679/dg9421.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSOP-6_1.65x3.05mm_P0.95mm.
 */
export class DG9422DV extends Component.withPins({
  "P2": "2",
  "P5": "5",
  "P6": "6",
  "V+": "1",
  "V-": "3",
  "GND": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P2: "passive", P5: "passive", P6: "input", "V+": "power_in", "V-": "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:DG9422DV";
  override referencePrefix = "U";
}

/**
 * Single SPDT Low-Voltage Analog Switch or 2:1 Multiplexer/De-Multiplexer Bus Switch, 10Ohm Ron, MicroPak-6
 *
 * KiCad symbol: `Analog_Switch:NC7SB3157L6X`. Reference prefix: `U`.
 * Footprint filters: Fairchild*MicroPak*1.0x1.45mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/NC7SB3157-D.PDF
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SON:Fairchild_MicroPak-6_1.0x1.45mm_P0.5mm.
 */
export class NC7SB3157L6X extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:NC7SB3157L6X";
  override referencePrefix = "U";
}

/**
 * Single SPDT Low-Voltage Analog Switch or 2:1 Multiplexer/De-Multiplexer Bus Switch, 10Ohm Ron, MicroPak-6
 *
 * KiCad symbol: `Analog_Switch:FSA3157L6X`. Reference prefix: `U`.
 * Footprint filters: Fairchild*MicroPak*1.0x1.45mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/NC7SB3157-D.PDF
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SON:Fairchild_MicroPak-6_1.0x1.45mm_P0.5mm.
 */
export class FSA3157L6X extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:FSA3157L6X";
  override referencePrefix = "U";
}

/**
 * Single SPDT Low-Voltage Analog Switch or 2:1 Multiplexer/De-Multiplexer Bus Switch, 10Ohm Ron, SC-70-6
 *
 * KiCad symbol: `Analog_Switch:NC7SB3157P6X`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NC7SB3157-D.PDF
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class NC7SB3157P6X extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:NC7SB3157P6X";
  override referencePrefix = "U";
}

/**
 * Single SPDT Low-Voltage Analog Switch or 2:1 Multiplexer/De-Multiplexer Bus Switch, 10Ohm Ron, SC-70-6
 *
 * KiCad symbol: `Analog_Switch:FSA3157P6X`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.onsemi.com/pub/Collateral/NC7SB3157-D.PDF
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class FSA3157P6X extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:FSA3157P6X";
  override referencePrefix = "U";
}

/**
 * 8-channel analog multiplexer / demultiplexer, 3.0..15.0V supply voltage, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:HEF4051BT`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4051B.pdf
 * Keywords: mux demux analog-switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class HEF4051BT extends Component.withPins({
  "Y4": "1",
  "Y6": "2",
  "Z": "3",
  "Y7": "4",
  "Y5": "5",
  "~{E}": "6",
  "VEE": "7",
  "VSS": "8",
  "S3": "9",
  "S2": "10",
  "S1": "11",
  "Y3": "12",
  "Y0": "13",
  "Y1": "14",
  "Y2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Y4: "passive", Y6: "passive", Z: "passive", Y7: "passive", Y5: "passive", "~{E}": "input", VEE: "power_in", VSS: "power_in", S3: "input", S2: "input", S1: "input", Y3: "passive", Y0: "passive", Y1: "passive", Y2: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:HEF4051BT";
  override referencePrefix = "U";
}

/**
 * 8-channel analog multiplexer / demultiplexer, 3.0..15.0V supply voltage, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:HEF4051BTT`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4051B.pdf
 * Keywords: mux demux analog-switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class HEF4051BTT extends Component.withPins({
  "Y4": "1",
  "Y6": "2",
  "Z": "3",
  "Y7": "4",
  "Y5": "5",
  "~{E}": "6",
  "VEE": "7",
  "VSS": "8",
  "S3": "9",
  "S2": "10",
  "S1": "11",
  "Y3": "12",
  "Y0": "13",
  "Y1": "14",
  "Y2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Y4: "passive", Y6: "passive", Z: "passive", Y7: "passive", Y5: "passive", "~{E}": "input", VEE: "power_in", VSS: "power_in", S3: "input", S2: "input", S1: "input", Y3: "passive", Y0: "passive", Y1: "passive", Y2: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:HEF4051BTT";
  override referencePrefix = "U";
}

/**
 * Dual 4-channel analog multiplexer / demultiplexer, 3.0..15.0V supply voltage, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:HEF4052BT`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4052B.pdf
 * Keywords: mux demux analog-switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class HEF4052BT extends Component.withPins({
  "2Y0": "1",
  "2Y2": "2",
  "2Z": "3",
  "2Y3": "4",
  "2Y1": "5",
  "~{E}": "6",
  "VEE": "7",
  "VSS": "8",
  "S2": "9",
  "S1": "10",
  "1Y3": "11",
  "1Y0": "12",
  "1Z": "13",
  "1Y1": "14",
  "1Y2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "2Y0": "passive", "2Y2": "passive", "2Z": "passive", "2Y3": "passive", "2Y1": "passive", "~{E}": "input", VEE: "power_in", VSS: "power_in", S2: "input", S1: "input", "1Y3": "passive", "1Y0": "passive", "1Z": "passive", "1Y1": "passive", "1Y2": "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:HEF4052BT";
  override referencePrefix = "U";
}

/**
 * Dual 4-channel analog multiplexer / demultiplexer, 3.0..15.0V supply voltage, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:HEF4052BTT`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4052B.pdf
 * Keywords: mux demux analog-switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class HEF4052BTT extends Component.withPins({
  "2Y0": "1",
  "2Y2": "2",
  "2Z": "3",
  "2Y3": "4",
  "2Y1": "5",
  "~{E}": "6",
  "VEE": "7",
  "VSS": "8",
  "S2": "9",
  "S1": "10",
  "1Y3": "11",
  "1Y0": "12",
  "1Z": "13",
  "1Y1": "14",
  "1Y2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "2Y0": "passive", "2Y2": "passive", "2Z": "passive", "2Y3": "passive", "2Y1": "passive", "~{E}": "input", VEE: "power_in", VSS: "power_in", S2: "input", S1: "input", "1Y3": "passive", "1Y0": "passive", "1Z": "passive", "1Y1": "passive", "1Y2": "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:HEF4052BTT";
  override referencePrefix = "U";
}

/**
 * Quad single-pole single-throw analog switch, 3.0...15.0V supply, VI = 0...VDD, f(-3dB) = 90MHz, RON(peak) = 350 / 80 / 60 ohms (for VI from 0V to VDD, with VDD 5 / 10 / 15V respectively), SOIC-14
 *
 * KiCad symbol: `Analog_Switch:HEF4066BT`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9*8.*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4066B.pdf
 * Keywords: ESD CMOS.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class HEF4066BT extends Component.withPins({
  "1Y": "1",
  "1Z": "2",
  "1E": "13",
  "2Z": "3",
  "2Y": "4",
  "2E": "5",
  "3E": "6",
  "3Y": "8",
  "3Z": "9",
  "4Z": "10",
  "4Y": "11",
  "4E": "12",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "1Y": "passive", "1Z": "passive", "1E": "input", "2Z": "passive", "2Y": "passive", "2E": "input", "3E": "input", "3Y": "passive", "3Z": "passive", "4Z": "passive", "4Y": "passive", "4E": "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:HEF4066BT";
  override referencePrefix = "U";
}

/**
 * 16-channel analog multiplexer / demultiplexer, 3.0..15.0V supply voltage, SOIC-24
 *
 * KiCad symbol: `Analog_Switch:HEF4067BT`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x15.4mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4067B.pdf
 * Keywords: mux demux analog-switch.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 */
export class HEF4067BT extends Component.withPins({
  "Z": "1",
  "Y7": "2",
  "Y6": "3",
  "Y5": "4",
  "Y4": "5",
  "Y3": "6",
  "Y2": "7",
  "Y1": "8",
  "Y0": "9",
  "A0": "10",
  "A1": "11",
  "VSS": "12",
  "A3": "13",
  "A2": "14",
  "~{E}": "15",
  "Y15": "16",
  "Y14": "17",
  "Y13": "18",
  "Y12": "19",
  "Y11": "20",
  "Y10": "21",
  "Y9": "22",
  "Y8": "23",
  "VDD": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Z: "passive", Y7: "passive", Y6: "passive", Y5: "passive", Y4: "passive", Y3: "passive", Y2: "passive", Y1: "passive", Y0: "passive", A0: "input", A1: "input", VSS: "power_in", A3: "input", A2: "input", "~{E}": "input", Y15: "passive", Y14: "passive", Y13: "passive", Y12: "passive", Y11: "passive", Y10: "passive", Y9: "passive", Y8: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:HEF4067BT";
  override referencePrefix = "U";
}

/**
 * 16-channel analog multiplexer / demultiplexer, 3.0..15.0V supply voltage, TSSOP-24
 *
 * KiCad symbol: `Analog_Switch:HEF4067BTT`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4067B.pdf
 * Keywords: mux demux analog-switch.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class HEF4067BTT extends Component.withPins({
  "Z": "1",
  "Y7": "2",
  "Y6": "3",
  "Y5": "4",
  "Y4": "5",
  "Y3": "6",
  "Y2": "7",
  "Y1": "8",
  "Y0": "9",
  "A0": "10",
  "A1": "11",
  "VSS": "12",
  "A3": "13",
  "A2": "14",
  "~{E}": "15",
  "Y15": "16",
  "Y14": "17",
  "Y13": "18",
  "Y12": "19",
  "Y11": "20",
  "Y10": "21",
  "Y9": "22",
  "Y8": "23",
  "VDD": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Z: "passive", Y7: "passive", Y6: "passive", Y5: "passive", Y4: "passive", Y3: "passive", Y2: "passive", Y1: "passive", Y0: "passive", A0: "input", A1: "input", VSS: "power_in", A3: "input", A2: "input", "~{E}": "input", Y15: "passive", Y14: "passive", Y13: "passive", Y12: "passive", Y11: "passive", Y10: "passive", Y9: "passive", Y8: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:HEF4067BTT";
  override referencePrefix = "U";
}

/**
 * 4-Channel Wideband and Video Multiplexer, DIP-18
 *
 * KiCad symbol: `Analog_Switch:HI524`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.intersil.com/content/dam/Intersil/documents/hi-5/hi-524.pdf
 * Keywords: Video Multiplexer analog switch.
 * Default footprint: Package_DIP:DIP-18_W7.62mm.
 */
export class HI524 extends Component.withPins({
  "V+": "1",
  "OUT": "2",
  "SIGGND_3": "3",
  "SIGGND_4": "4",
  "IN4": "5",
  "SIGGND_6": "6",
  "IN3": "7",
  "GND": "8",
  "A1": "9",
  "A0": "10",
  "EN": "11",
  "IN1": "12",
  "SIGGND_13": "13",
  "IN2": "14",
  "SIGGND_15": "15",
  "FBO": "16",
  "V-": "17",
  "FBI": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", OUT: "output", SIGGND_3: "power_in", SIGGND_4: "passive", IN4: "input", SIGGND_6: "passive", IN3: "input", GND: "power_in", A1: "input", A0: "input", EN: "input", IN1: "input", SIGGND_13: "passive", IN2: "input", SIGGND_15: "passive", FBO: "output", "V-": "power_in", FBI: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:HI524";
  override referencePrefix = "U";
}

/**
 * Analog Switch, beyond-the-Rails 8xSPST, I²C/SPI interface, 1.6..5.5V supply, 0.425Ohm Ron, WQFN-28
 *
 * KiCad symbol: `Analog_Switch:MAX14662`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.4mm*EP2.7x2.7*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX14662.pdf
 * Keywords: octal SPST i2c spi.
 * Default footprint: Package_DFN_QFN:WQFN-28-1EP_4x4mm_P0.4mm_EP2.7x2.7mm.
 */
export class MAX14662 extends Component.withPins({
  "~{CS}/AD0": "23",
  "NC_10": "10",
  "NC_12": "12",
  "NC_13": "13",
  "V_{CC}": "26",
  "DIN/SDA": "27",
  "DOUT/AD1": "28",
  "SPI/~{I²C}": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "A7": "8",
  "A8": "9",
  "GND_11": "11",
  "B8": "14",
  "B7": "15",
  "B6": "16",
  "B5": "17",
  "B4": "18",
  "B3": "19",
  "B2": "20",
  "B1": "21",
  "~{SD}": "22",
  "SCLK/SCL": "24",
  "GND_25": "25",
  "GND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}/AD0": "input", NC_10: "no_connect", NC_12: "no_connect", NC_13: "no_connect", "V_{CC}": "power_in", "DIN/SDA": "bidirectional", "DOUT/AD1": "bidirectional", "SPI/~{I²C}": "input", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", GND_11: "power_in", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", "~{SD}": "input", "SCLK/SCL": "input", GND_25: "passive", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX14662";
  override referencePrefix = "U";
}

/**
 * Above- and Below-the-Rails Low On-Resistance Analog Switches, max 2 Ohms On-Resistance, TDFN-8
 *
 * KiCad symbol: `Analog_Switch:MAX14759`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX14759-MAX14763.pdf
 * Keywords: analog switch low resistance above below rails.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class MAX14759 extends Component.withPins({
  "B": "4",
  "A": "5",
  "EN": "8",
  "VCC": "1",
  "GND": "2",
  "VN_3": "3",
  "VP": "6",
  "NC": "7",
  "VN_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { B: "passive", A: "passive", EN: "input", VCC: "power_in", GND: "power_in", VN_3: "passive", VP: "passive", NC: "no_connect", VN_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX14759";
  override referencePrefix = "U";
}

/**
 * Above- and Below-the-Rails Low On-Resistance Analog Switches, max 2 Ohm On resistor, TDFN-10
 *
 * KiCad symbol: `Analog_Switch:MAX14761`. Reference prefix: `U`.
 * Footprint filters: DFN*3x3mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX14759-MAX14763.pdf
 * Keywords: analog switch low resistance above below rails.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.55x2.48mm.
 */
export class MAX14761 extends Component.withPins({
  "B1": "3",
  "A1": "8",
  "EN1": "10",
  "B2": "5",
  "A2": "6",
  "EN2": "9",
  "VCC": "1",
  "GND": "2",
  "VN_4": "4",
  "VP": "7",
  "VN_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { B1: "passive", A1: "passive", EN1: "input", B2: "passive", A2: "passive", EN2: "input", VCC: "power_in", GND: "power_in", VN_4: "passive", VP: "passive", VN_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX14761";
  override referencePrefix = "U";
}

/**
 * Dual ±25V Above- and Below-the-Rails 4:1 Analog Multiplexer, TQFN-20
 *
 * KiCad symbol: `Analog_Switch:MAX14778`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*5x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX14778.pdf
 * Keywords: Analog Differential Multiplexer.
 * Default footprint: Package_DFN_QFN:TQFN-20-1EP_5x5mm_P0.65mm_EP3.1x3.1mm.
 */
export class MAX14778 extends Component.withPins({
  "BCOM": "1",
  "VP": "2",
  "GND": "3",
  "VN_4": "4",
  "ACOM": "5",
  "A0": "6",
  "A1": "7",
  "A2": "8",
  "A3": "9",
  "ENA": "10",
  "SA0": "11",
  "SA1": "12",
  "VDD": "13",
  "SB1": "14",
  "SB0": "15",
  "ENB": "16",
  "B3": "17",
  "B2": "18",
  "B1": "19",
  "B0": "20",
  "VN_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BCOM: "passive", VP: "passive", GND: "power_in", VN_4: "passive", ACOM: "passive", A0: "passive", A1: "passive", A2: "passive", A3: "passive", ENA: "input", SA0: "input", SA1: "input", VDD: "power_in", SB1: "input", SB0: "input", ENB: "input", B3: "passive", B2: "passive", B1: "passive", B0: "passive", VN_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX14778";
  override referencePrefix = "U";
}

/**
 * Quad SPST CMOS Analog Switches, normally ON, 6.5Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:MAX312CPE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX312-MAX314.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX312CPE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX312CPE";
  override referencePrefix = "U";
}

/**
 * Quad SPST CMOS Analog Switches, normally ON, 6.5Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:MAX312CSE`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX312-MAX314.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MAX312CSE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX312CSE";
  override referencePrefix = "U";
}

/**
 * Quad SPST CMOS Analog Switches, normally ON, 6.5Ohm Ron, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:MAX312CUE`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX312-MAX314.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MAX312CUE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX312CUE";
  override referencePrefix = "U";
}

/**
 * Quad SPST CMOS Analog Switches, normally OFF, 6.5Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:MAX313CPE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX312-MAX314.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX313CPE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX313CPE";
  override referencePrefix = "U";
}

/**
 * Quad SPST CMOS Analog Switches, normally OFF, 6.5Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:MAX313CSE`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX312-MAX314.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MAX313CSE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX313CSE";
  override referencePrefix = "U";
}

/**
 * Quad SPST CMOS Analog Switches, normally OFF, 6.5Ohm Ron, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:MAX313CUE`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX312-MAX314.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MAX313CUE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX313CUE";
  override referencePrefix = "U";
}

/**
 * Quad SPST CMOS Analog Switches, normally 2xON + 2xOFF, 6.5Ohm Ron, DIP-16
 *
 * KiCad symbol: `Analog_Switch:MAX314CPE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX312-MAX314.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MAX314CPE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX314CPE";
  override referencePrefix = "U";
}

/**
 * Quad SPST CMOS Analog Switches, normally 2xON + 2xOFF, 6.5Ohm Ron, SOIC-16
 *
 * KiCad symbol: `Analog_Switch:MAX314CSE`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX312-MAX314.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MAX314CSE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX314CSE";
  override referencePrefix = "U";
}

/**
 * Quad SPST CMOS Analog Switches, normally 2xON + 2xOFF, 6.5Ohm Ron, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:MAX314CUE`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX312-MAX314.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class MAX314CUE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "V-": "4",
  "GND": "5",
  "VL": "12",
  "V+": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P6: "passive", P7: "passive", P8: "input", P9: "input", P10: "passive", P11: "passive", P14: "passive", P15: "passive", P16: "input", "V-": "power_in", GND: "power_in", VL: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX314CUE";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic CMOS Analog Switch, normally ON, 20Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:MAX317xPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX317-MAX319.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MAX317xPA extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX317xPA";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic CMOS Analog Switch, normally ON, 20Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:MAX317xSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX317-MAX319.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX317xSA extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX317xSA";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic CMOS Analog Switch, normally OFF, 20Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:MAX318xPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX317-MAX319.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MAX318xPA extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX318xPA";
  override referencePrefix = "U";
}

/**
 * Single SPST Monolithic CMOS Analog Switch, normally OFF, 20Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:MAX318xSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX317-MAX319.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX318xSA extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P8": "8",
  "NC": "2",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P6: "input", P8: "passive", NC: "no_connect", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX318xSA";
  override referencePrefix = "U";
}

/**
 * Single SPDT Monolithic CMOS Analog Switch, 20Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:MAX319xPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX317-MAX319.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MAX319xPA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX319xPA";
  override referencePrefix = "U";
}

/**
 * Single SPDT Monolithic CMOS Analog Switch, 20Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:MAX319xSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX317-MAX319.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX319xSA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "GND": "3",
  "V+": "4",
  "VL": "5",
  "V-": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "input", P8: "passive", GND: "power_in", "V+": "power_in", VL: "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX319xSA";
  override referencePrefix = "U";
}

/**
 * Dual SPST CMOS Analog Switches, normally OFF, 60Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:MAX323CPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX323-MAX325.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MAX323CPA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "V-": "4",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P7: "input", P3: "input", P5: "passive", P6: "passive", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX323CPA";
  override referencePrefix = "U";
}

/**
 * Dual SPST CMOS Analog Switches, normally OFF, 60Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:MAX323CSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX323-MAX325.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX323CSA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "V-": "4",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P7: "input", P3: "input", P5: "passive", P6: "passive", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX323CSA";
  override referencePrefix = "U";
}

/**
 * Dual SPST CMOS Analog Switches, normally OFF, 60Ohm Ron, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:MAX323CUA`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX323-MAX325.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MAX323CUA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "V-": "4",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P7: "input", P3: "input", P5: "passive", P6: "passive", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX323CUA";
  override referencePrefix = "U";
}

/**
 * Dual SPST CMOS Analog Switches, normally ON, 60Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:MAX324CPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX323-MAX325.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MAX324CPA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "V-": "4",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P7: "input", P3: "input", P5: "passive", P6: "passive", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX324CPA";
  override referencePrefix = "U";
}

/**
 * Dual SPST CMOS Analog Switches, normally ON, 60Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:MAX324CSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX323-MAX325.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX324CSA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "V-": "4",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P7: "input", P3: "input", P5: "passive", P6: "passive", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX324CSA";
  override referencePrefix = "U";
}

/**
 * Dual SPST CMOS Analog Switches, normally ON, 60Ohm Ron, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:MAX324CUA`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX323-MAX325.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MAX324CUA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "V-": "4",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P7: "input", P3: "input", P5: "passive", P6: "passive", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX324CUA";
  override referencePrefix = "U";
}

/**
 * Dual SPST CMOS Analog Switches, normally 1xOFF and 1xON, 60Ohm Ron, DIP-8
 *
 * KiCad symbol: `Analog_Switch:MAX325CPA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX323-MAX325.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MAX325CPA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "V-": "4",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P7: "input", P3: "input", P5: "passive", P6: "passive", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX325CPA";
  override referencePrefix = "U";
}

/**
 * Dual SPST CMOS Analog Switches, normally 1xOFF and 1xON, 60Ohm Ron, SOIC-8
 *
 * KiCad symbol: `Analog_Switch:MAX325CSA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX323-MAX325.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX325CSA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "V-": "4",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P7: "input", P3: "input", P5: "passive", P6: "passive", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX325CSA";
  override referencePrefix = "U";
}

/**
 * Dual SPST CMOS Analog Switches, normally 1xOFF and 1xON, 60Ohm Ron, MSOP-8
 *
 * KiCad symbol: `Analog_Switch:MAX325CUA`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX323-MAX325.pdf
 * Keywords: CMOS Analog Switch.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MAX325CUA extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "V-": "4",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P7: "input", P3: "input", P5: "passive", P6: "passive", "V-": "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX325CUA";
  override referencePrefix = "U";
}

/**
 * Quad SPDT CMOS Analog Switch, DIP-20/SOIC-20/SSOP-20
 *
 * KiCad symbol: `Analog_Switch:MAX333`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*, SOIC*7.5x10.3mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX333.pdf
 * Keywords: CMOS Analog Switch.
 */
export class MAX333 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "V-": "5",
  "GND": "6",
  "NC": "15",
  "V+": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P4: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "input", P11: "input", P12: "passive", P13: "passive", P14: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX333";
  override referencePrefix = "U";
}

/**
 * Quad SPDT CMOS Analog Switch, 17Ohm Ron, DIP-20/SOIC-20/SSOP-20/TSSOP-20
 *
 * KiCad symbol: `Analog_Switch:MAX333A`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*, SSOP*5.3x7.2mm*P0.65mm*, SOIC*7.5x10.3mm*P1.27mm*, DIP*W7.62mm*, SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX333A.pdf
 * Keywords: CMOS Analog Switch.
 */
export class MAX333A extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "V-": "5",
  "GND": "6",
  "NC": "15",
  "V+": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P4: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "input", P11: "input", P12: "passive", P13: "passive", P14: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX333A";
  override referencePrefix = "U";
}

/**
 * Quad SPDT CMOS Analog Switch, 35Ohm Ron, DIP-20/SOIC-20/SSOP-20/TSSOP-20
 *
 * KiCad symbol: `Analog_Switch:MAX394`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*, SSOP*5.3x7.2mm*P0.65mm*, SOIC*7.5x10.3mm*P1.27mm*, DIP*W7.62mm*, SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX394.pdf
 * Keywords: CMOS Analog Switch.
 */
export class MAX394 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P17": "17",
  "P18": "18",
  "P19": "19",
  "P20": "20",
  "V-": "5",
  "GND": "6",
  "NC": "15",
  "V+": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P3: "passive", P4: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "input", P11: "input", P12: "passive", P13: "passive", P14: "passive", P17: "passive", P18: "passive", P19: "passive", P20: "input", "V-": "power_in", GND: "power_in", NC: "no_connect", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX394";
  override referencePrefix = "U";
}

/**
 * Ideal Diode, Ultra-Low Voltage Drop, 1.5-5.5V, 1A, WLP-4
 *
 * KiCad symbol: `Analog_Switch:MAX40200ANS`. Reference prefix: `U`.
 * Footprint filters: WLP*0.728x0.728mm*Layout2x2*P0.35mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX40200.pdf
 * Keywords: current switch.
 * Default footprint: Package_BGA:WLP-4_0.728x0.728mm_Layout2x2_P0.35mm.
 */
export class MAX40200ANS extends Component.withPins({
  "VDD": "A1",
  "OUT": "A2",
  "EN": "B1",
  "GND": "B2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OUT: "passive", EN: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX40200ANS";
  override referencePrefix = "U";
}

/**
 * Ideal Diode, Ultra-Low Voltage Drop, 1.5-5.5V, 1A, SOT-23-5
 *
 * KiCad symbol: `Analog_Switch:MAX40200AUK`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX40200.pdf
 * Keywords: current switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MAX40200AUK extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "EN": "3",
  "NC": "4",
  "OUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", EN: "input", NC: "no_connect", OUT: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:MAX40200AUK";
  override referencePrefix = "U";
}

/**
 * 8-channel analog switch multiplexer and demultiplexer with injection-current control, 1.5..5.5V supply voltage, DHVQFN-16
 *
 * KiCad symbol: `Analog_Switch:NMUX1308BQ`. Reference prefix: `U`.
 * Footprint filters: DHVQFN*2.5x3.5mm*P0.5mm*EP1*x2*.
 * @see https://assets.nexperia.com/documents/data-sheet/NMUX1308.pdf
 * Keywords: mux demux CMOS 4851 4051 NMUX1308BQ-Q100.
 * Default footprint: Package_DFN_QFN:DHVQFN-16-1EP_2.5x3.5mm_P0.5mm_EP1x2mm.
 */
export class NMUX1308BQ extends Component.withPins({
  "Y4": "1",
  "Y6": "2",
  "Z": "3",
  "Y7": "4",
  "Y5": "5",
  "~{E}": "6",
  "NC": "7",
  "GND": "8",
  "S2": "9",
  "S1": "10",
  "S0": "11",
  "Y3": "12",
  "Y0": "13",
  "Y1": "14",
  "Y2": "15",
  "V_{CC}": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Y4: "passive", Y6: "passive", Z: "passive", Y7: "passive", Y5: "passive", "~{E}": "input", NC: "no_connect", GND: "power_in", S2: "input", S1: "input", S0: "input", Y3: "passive", Y0: "passive", Y1: "passive", Y2: "passive", "V_{CC}": "power_in", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:NMUX1308BQ";
  override referencePrefix = "U";
}

/**
 * 8-channel analog switch multiplexer and demultiplexer with injection-current control, 1.5..5.5V supply voltage, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:NMUX1308PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/NMUX1308.pdf
 * Keywords: mux demux CMOS 4851 4051 NMUX1308PW-Q100.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class NMUX1308PW extends Component.withPins({
  "Y4": "1",
  "Y6": "2",
  "Z": "3",
  "Y7": "4",
  "Y5": "5",
  "~{E}": "6",
  "NC": "7",
  "GND": "8",
  "S2": "9",
  "S1": "10",
  "S0": "11",
  "Y3": "12",
  "Y0": "13",
  "Y1": "14",
  "Y2": "15",
  "V_{CC}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Y4: "passive", Y6: "passive", Z: "passive", Y7: "passive", Y5: "passive", "~{E}": "input", NC: "no_connect", GND: "power_in", S2: "input", S1: "input", S0: "input", Y3: "passive", Y0: "passive", Y1: "passive", Y2: "passive", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:NMUX1308PW";
  override referencePrefix = "U";
}

/**
 * Dual 4-channel analog switch multiplexer and demultiplexer with injection-current control, 1.5..5.5V supply voltage, DHVQFN-16
 *
 * KiCad symbol: `Analog_Switch:NMUX1309BQ`. Reference prefix: `U`.
 * Footprint filters: DHVQFN*2.5x3.5mm*P0.5mm*EP1*x2*.
 * @see https://assets.nexperia.com/documents/data-sheet/NMUX1309.pdf
 * Keywords: mux demux CMOS 4852 4052 NMUX1309BQ-Q100.
 * Default footprint: Package_DFN_QFN:DHVQFN-16-1EP_2.5x3.5mm_P0.5mm_EP1x2mm.
 */
export class NMUX1309BQ extends Component.withPins({
  "2Y0": "1",
  "2Y2": "2",
  "2Z": "3",
  "2Y3": "4",
  "2Y1": "5",
  "~{E}": "6",
  "NC": "7",
  "GND": "8",
  "S1": "9",
  "S0": "10",
  "1Y3": "11",
  "1Y0": "12",
  "1Z": "13",
  "1Y1": "14",
  "1Y2": "15",
  "V_{CC}": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "2Y0": "passive", "2Y2": "passive", "2Z": "passive", "2Y3": "passive", "2Y1": "passive", "~{E}": "input", NC: "no_connect", GND: "power_in", S1: "input", S0: "input", "1Y3": "passive", "1Y0": "passive", "1Z": "passive", "1Y1": "passive", "1Y2": "passive", "V_{CC}": "power_in", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:NMUX1309BQ";
  override referencePrefix = "U";
}

/**
 * Dual 4-channel analog switch multiplexer and demultiplexer with injection-current control, 1.5..5.5V supply voltage, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:NMUX1309PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/NMUX1309.pdf
 * Keywords: mux demux CMOS 4852 4052 NMUX1309PW-Q100.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class NMUX1309PW extends Component.withPins({
  "2Y0": "1",
  "2Y2": "2",
  "2Z": "3",
  "2Y3": "4",
  "2Y1": "5",
  "~{E}": "6",
  "NC": "7",
  "GND": "8",
  "S1": "9",
  "S0": "10",
  "1Y3": "11",
  "1Y0": "12",
  "1Z": "13",
  "1Y1": "14",
  "1Y2": "15",
  "V_{CC}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "2Y0": "passive", "2Y2": "passive", "2Z": "passive", "2Y3": "passive", "2Y1": "passive", "~{E}": "input", NC: "no_connect", GND: "power_in", S1: "input", S0: "input", "1Y3": "passive", "1Y0": "passive", "1Z": "passive", "1Y1": "passive", "1Y2": "passive", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:NMUX1309PW";
  override referencePrefix = "U";
}

/**
 * Single 8-channel analog switch, break before switch, low-ohmic 0.5 Ohm, 1.4V-4.3V , HXQFN-16
 *
 * KiCad symbol: `Analog_Switch:NX3L4051HR`. Reference prefix: `U`.
 * Footprint filters: HXQFN*16*3x3mm*P0.5mm*EP1.85x1.85mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/NX3L4051.pdf
 * Keywords: multiplexer SP8T.
 * Default footprint: Package_DFN_QFN:HXQFN-16-1EP_3x3mm_P0.5mm_EP1.85x1.85mm.
 */
export class NX3L4051HR extends Component.withPins({
  "NC": "5",
  "GND": "6",
  "EP": "17",
  "Z": "1",
  "Y7": "2",
  "Y5": "3",
  "~{E}": "4",
  "S3": "7",
  "S2": "8",
  "S1": "9",
  "Y3": "10",
  "Y0": "11",
  "Y1": "12",
  "Y2": "13",
  "V_{CC}": "14",
  "Y4": "15",
  "Y6": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", EP: "passive", Z: "bidirectional", Y7: "bidirectional", Y5: "bidirectional", "~{E}": "input", S3: "input", S2: "input", S1: "input", Y3: "bidirectional", Y0: "bidirectional", Y1: "bidirectional", Y2: "bidirectional", "V_{CC}": "power_in", Y4: "bidirectional", Y6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:NX3L4051HR";
  override referencePrefix = "U";
}

/**
 * Single 8-channel analog switch, break before switch, low-ohmic 0.5 Ohm, 1.4V-4.3V , TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:NX3L4051PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*16*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/NX3L4051.pdf
 * Keywords: multiplexer SP8T.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class NX3L4051PW extends Component.withPins({
  "NC": "7",
  "GND": "8",
  "Y4": "1",
  "Y6": "2",
  "Z": "3",
  "Y7": "4",
  "Y5": "5",
  "~{E}": "6",
  "S3": "9",
  "S2": "10",
  "S1": "11",
  "Y3": "12",
  "Y0": "13",
  "Y1": "14",
  "Y2": "15",
  "V_{CC}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", Y4: "bidirectional", Y6: "bidirectional", Z: "bidirectional", Y7: "bidirectional", Y5: "bidirectional", "~{E}": "input", S3: "input", S2: "input", S1: "input", Y3: "bidirectional", Y0: "bidirectional", Y1: "bidirectional", Y2: "bidirectional", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:NX3L4051PW";
  override referencePrefix = "U";
}

/**
 * Dual 1 to 4 Analog Multiplexer
 *
 * KiCad symbol: `Analog_Switch:SN74CBT3253`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SSOP*5.3x6.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/gpn/sn74cbt3253
 * Keywords: TTL Analog Multiplexer.
 */
export class SN74CBT3253 extends Component.withPins({
  "1~{OE}": "1",
  "S1": "2",
  "1B4": "3",
  "1B3": "4",
  "1B2": "5",
  "1B1": "6",
  "1A": "7",
  "GND": "8",
  "2A": "9",
  "2B1": "10",
  "2B2": "11",
  "2B3": "12",
  "2B4": "13",
  "S0": "14",
  "2~{OE}": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "1~{OE}": "input", S1: "input", "1B4": "bidirectional", "1B3": "bidirectional", "1B2": "bidirectional", "1B1": "bidirectional", "1A": "bidirectional", GND: "power_in", "2A": "bidirectional", "2B1": "bidirectional", "2B2": "bidirectional", "2B3": "bidirectional", "2B4": "bidirectional", S0: "input", "2~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:SN74CBT3253";
  override referencePrefix = "U";
}

/**
 * SPST Analog Switch, 1.08V to 5.5V Supply, 3pA Leakage Current, Normally OFF, 1.8Ohm Ron, SOT-23-5
 *
 * KiCad symbol: `Analog_Switch:TMUX1101DBV`. Reference prefix: `U`.
 * Footprint filters: *SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1101.pdf
 * Keywords: Analog Switch SPST.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMUX1101DBV extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "V_{DD}": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", GND: "power_in", P4: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1101DBV";
  override referencePrefix = "U";
}

/**
 * SPST Analog Switch, 1.08V to 5.5V Supply, 3pA Leakage Current, Normally OFF, 1.8Ohm Ron, SC-70
 *
 * KiCad symbol: `Analog_Switch:TMUX1101DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1101.pdf
 * Keywords: Analog Switch SPST.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class TMUX1101DCK extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "V_{DD}": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", GND: "power_in", P4: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1101DCK";
  override referencePrefix = "U";
}

/**
 * SPST Analog Switch, 1.08V to 5.5V Supply, 3pA Leakage Current, Normally ON, 1.8Ohm Ron, SOT-23-5
 *
 * KiCad symbol: `Analog_Switch:TMUX1102DBV`. Reference prefix: `U`.
 * Footprint filters: *SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1102.pdf
 * Keywords: Analog Switch SPST.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMUX1102DBV extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "V_{DD}": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", GND: "power_in", P4: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1102DBV";
  override referencePrefix = "U";
}

/**
 * SPST Analog Switch, 1.08V to 5.5V Supply, 3pA Leakage Current, Normally ON, 1.8Ohm Ron, SC-70
 *
 * KiCad symbol: `Analog_Switch:TMUX1102DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1102.pdf
 * Keywords: Analog Switch SPST.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class TMUX1102DCK extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "V_{DD}": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", GND: "power_in", P4: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1102DCK";
  override referencePrefix = "U";
}

/**
 * 5V / ±2.5V, Low-Leakage-Current, 8:1 Precision Multiplexer, 2.5 Ohm Ron, 90Mhz, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:TMUX1108PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1108.pdf
 * Keywords: analog switch selector multiplexer.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class TMUX1108PW extends Component.withPins({
  "GND": "14",
  "A0": "1",
  "EN": "2",
  "VSS": "3",
  "S1": "4",
  "S2": "5",
  "S3": "6",
  "S4": "7",
  "D": "8",
  "S8": "9",
  "S7": "10",
  "S6": "11",
  "S5": "12",
  "VDD": "13",
  "A2": "15",
  "A1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", A0: "input", EN: "input", VSS: "power_in", S1: "bidirectional", S2: "bidirectional", S3: "bidirectional", S4: "bidirectional", D: "bidirectional", S8: "bidirectional", S7: "bidirectional", S6: "bidirectional", S5: "bidirectional", VDD: "power_in", A2: "input", A1: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1108PW";
  override referencePrefix = "U";
}

/**
 * 5V / ±2.5V, Low-Leakage-Current, 8:1 Precision Multiplexer, 2.5 Ohm Ron, 90Mhz, QFN-16
 *
 * KiCad symbol: `Analog_Switch:TMUX1108RSV`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.8x2.6mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1108.pdf
 * Keywords: analog switch selector multiplexer.
 * Default footprint: Package_DFN_QFN:UQFN-16_1.8x2.6mm_P0.4mm.
 */
export class TMUX1108RSV extends Component.withPins({
  "GND": "12",
  "VSS": "1",
  "S1": "2",
  "S2": "3",
  "S3": "4",
  "S4": "5",
  "D": "6",
  "S8": "7",
  "S7": "8",
  "S6": "9",
  "S5": "10",
  "VDD": "11",
  "A2": "13",
  "A1": "14",
  "A0": "15",
  "EN": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VSS: "power_in", S1: "bidirectional", S2: "bidirectional", S3: "bidirectional", S4: "bidirectional", D: "bidirectional", S8: "bidirectional", S7: "bidirectional", S6: "bidirectional", S5: "bidirectional", VDD: "power_in", A2: "input", A1: "input", A0: "input", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1108RSV";
  override referencePrefix = "U";
}

/**
 * 5V, 8:1 General Purpose Analog Multiplexer, 5 Ohm Ron, 65 Mhz, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:TMUX1208PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1208.pdf
 * Keywords: analog switch selector multiplexer.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class TMUX1208PW extends Component.withPins({
  "GND": "14",
  "A0": "1",
  "EN": "2",
  "VSS": "3",
  "S1": "4",
  "S2": "5",
  "S3": "6",
  "S4": "7",
  "D": "8",
  "S8": "9",
  "S7": "10",
  "S6": "11",
  "S5": "12",
  "VDD": "13",
  "A2": "15",
  "A1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", A0: "input", EN: "input", VSS: "power_in", S1: "bidirectional", S2: "bidirectional", S3: "bidirectional", S4: "bidirectional", D: "bidirectional", S8: "bidirectional", S7: "bidirectional", S6: "bidirectional", S5: "bidirectional", VDD: "power_in", A2: "input", A1: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1208PW";
  override referencePrefix = "U";
}

/**
 * 5V, 8:1 General Purpose Analog Multiplexer, 5 Ohm Ron, 65 Mhz, QFN-16
 *
 * KiCad symbol: `Analog_Switch:TMUX1208RSV`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.8x2.6mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1208.pdf
 * Keywords: analog switch selector multiplexer.
 * Default footprint: Package_DFN_QFN:UQFN-16_1.8x2.6mm_P0.4mm.
 */
export class TMUX1208RSV extends Component.withPins({
  "GND": "12",
  "VSS": "1",
  "S1": "2",
  "S2": "3",
  "S3": "4",
  "S4": "5",
  "D": "6",
  "S8": "7",
  "S7": "8",
  "S6": "9",
  "S5": "10",
  "VDD": "11",
  "A2": "13",
  "A1": "14",
  "A0": "15",
  "EN": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VSS: "power_in", S1: "bidirectional", S2: "bidirectional", S3: "bidirectional", S4: "bidirectional", D: "bidirectional", S8: "bidirectional", S7: "bidirectional", S6: "bidirectional", S5: "bidirectional", VDD: "power_in", A2: "input", A1: "input", A0: "input", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1208RSV";
  override referencePrefix = "U";
}

/**
 * Low Capacitance, R_{on} 5.5Ω, 2-Channel, 3:1 Switch, 2.5-4.3V, WQFN-12
 *
 * KiCad symbol: `Analog_Switch:TMUX131RMG`. Reference prefix: `U`.
 * Footprint filters: *RMG0012A*WQFN*1.8x1.8*.
 * @see https://www.ti.com/lit/ds/symlink/tmux131.pdf
 * Keywords: 3:1 mux dual.
 * Default footprint: Package_DFN_QFN:Texas_RMG0012A_WQFN-12_1.8x1.8mm_P0.4mm.
 */
export class TMUX131RMG extends Component.withPins({
  "SEL0": "1",
  "SEL1": "2",
  "S1B": "3",
  "S2B": "4",
  "S1C": "5",
  "S2C": "6",
  "S1A": "7",
  "S2A": "8",
  "GND": "9",
  "D2": "10",
  "D1": "11",
  "VDD": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SEL0: "input", SEL1: "input", S1B: "passive", S2B: "passive", S1C: "passive", S2C: "passive", S1A: "passive", S2A: "passive", GND: "power_in", D2: "passive", D1: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX131RMG";
  override referencePrefix = "U";
}

/**
 * ESD-Protected, Low Capacitance, 2-Channel, 2:1 Switch, With Powered-off Protection, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Analog_Switch:TMUX154EDGS`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux154e.pdf
 * Keywords: mux multiplexer.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class TMUX154EDGS extends Component.withPins({
  "SEL": "1",
  "A0": "2",
  "A1": "3",
  "A": "4",
  "GND": "5",
  "B": "6",
  "B1": "7",
  "B0": "8",
  "~{EN}": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SEL: "passive", A0: "passive", A1: "passive", A: "passive", GND: "power_in", B: "passive", B1: "passive", B0: "passive", "~{EN}": "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX154EDGS";
  override referencePrefix = "U";
}

/**
 * ESD-Protected, Low Capacitance, 2-Channel, 2:1 Switch, With Powered-off Protection, UQFN-10
 *
 * KiCad symbol: `Analog_Switch:TMUX154ERSW`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.4x1.8mm?P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux154e.pdf
 * Keywords: mux multiplexer.
 * Default footprint: Package_DFN_QFN:UQFN-10_1.4x1.8mm_P0.4mm.
 */
export class TMUX154ERSW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A": "3",
  "GND": "4",
  "B": "5",
  "B1": "6",
  "B0": "7",
  "~{EN}": "8",
  "VCC": "9",
  "SEL": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "passive", A1: "passive", A: "passive", GND: "power_in", B: "passive", B1: "passive", B0: "passive", "~{EN}": "passive", VCC: "power_in", SEL: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX154ERSW";
  override referencePrefix = "U";
}

/**
 * Low Capacitance and low resistance 2Ω, 4-Channel, 2:1 Switch, Powered-off Protection with 1.8V logic, 1.5 - 5.5V, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:TMUX1574PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1574.pdf
 * Keywords: mux quad 2:1.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class TMUX1574PW extends Component.withPins({
  "SEL": "1",
  "S1A": "2",
  "S1B": "3",
  "D1": "4",
  "S2A": "5",
  "S2B": "6",
  "D2": "7",
  "GND": "8",
  "D3": "9",
  "S3B": "10",
  "S3A": "11",
  "D4": "12",
  "S4B": "13",
  "S4A": "14",
  "~{EN}": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SEL: "input", S1A: "passive", S1B: "passive", D1: "passive", S2A: "passive", S2B: "passive", D2: "passive", GND: "power_in", D3: "passive", S3B: "passive", S3A: "passive", D4: "passive", S4B: "passive", S4A: "passive", "~{EN}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1574PW";
  override referencePrefix = "U";
}

/**
 * Low Capacitance, 4-Channel, 2 to 1 Switch, Powered-off Protection with 1.8V logic, TSOT-23-16
 *
 * KiCad symbol: `Analog_Switch:TMUX1574DYY`. Reference prefix: `U`.
 * Footprint filters: *TSOT*23?16*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1574.pdf
 * Keywords: 2 to 1 Switch 4-Channel.
 * Default footprint: Package_SO:Texas_DYY0016A_TSOT-23-16_2x4.2mm_P0.5mm.
 */
export class TMUX1574DYY extends Component.withPins({
  "SEL": "1",
  "S1A": "2",
  "S1B": "3",
  "D1": "4",
  "S2A": "5",
  "S2B": "6",
  "D2": "7",
  "GND": "8",
  "D3": "9",
  "S3B": "10",
  "S3A": "11",
  "D4": "12",
  "S4B": "13",
  "S4A": "14",
  "~{EN}": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SEL: "input", S1A: "passive", S1B: "passive", D1: "passive", S2A: "passive", S2B: "passive", D2: "passive", GND: "power_in", D3: "passive", S3B: "passive", S3A: "passive", D4: "passive", S4B: "passive", S4A: "passive", "~{EN}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1574DYY";
  override referencePrefix = "U";
}

/**
 * Low Capacitance and low resistance 2Ω, 4-Channel, 2:1 Switch, Powered-off Protection with 1.8V logic, 1.5 - 5.5V, UQFN-16
 *
 * KiCad symbol: `Analog_Switch:TMUX1574RSV`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.8x2.6mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux1574.pdf
 * Keywords: mux quad 2:1.
 * Default footprint: Package_DFN_QFN:UQFN-16_1.8x2.6mm_P0.4mm.
 */
export class TMUX1574RSV extends Component.withPins({
  "S1B": "1",
  "D1": "2",
  "S2A": "3",
  "S2B": "4",
  "D2": "5",
  "GND": "6",
  "D3": "7",
  "S3B": "8",
  "S3A": "9",
  "D4": "10",
  "S4B": "11",
  "S4A": "12",
  "~{EN}": "13",
  "VDD": "14",
  "SEL": "15",
  "S1A": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S1B: "passive", D1: "passive", S2A: "passive", S2B: "passive", D2: "passive", GND: "power_in", D3: "passive", S3B: "passive", S3A: "passive", D4: "passive", S4B: "passive", S4A: "passive", "~{EN}": "input", VDD: "power_in", SEL: "input", S1A: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX1574RSV";
  override referencePrefix = "U";
}

/**
 * CMOS single 8:1 analog multiplexer/demultiplexer, 1.8V logic compatible, 60Ohm Ron typ, 5..24V/±12V supply, WQFN-16
 *
 * KiCad symbol: `Analog_Switch:TMUX4051BQB`. Reference prefix: `U`.
 * Footprint filters: *QFN*2.5x3.5mm*P0.5mm*EP1x2mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux4051.pdf
 * Keywords: texas amux octuple.
 * Default footprint: Package_DFN_QFN:DHVQFN-16-1EP_2.5x3.5mm_P0.5mm_EP1x2mm.
 */
export class TMUX4051BQB extends Component.withPins({
  "S4": "1",
  "S6": "2",
  "D": "3",
  "S7": "4",
  "S5": "5",
  "~{EN}": "6",
  "VSS": "7",
  "GND_8": "8",
  "A2": "9",
  "A1": "10",
  "A0": "11",
  "S3": "12",
  "S0": "13",
  "S1": "14",
  "S2": "15",
  "VDD": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S4: "bidirectional", S6: "bidirectional", D: "bidirectional", S7: "bidirectional", S5: "bidirectional", "~{EN}": "input", VSS: "power_in", GND_8: "power_in", A2: "input", A1: "input", A0: "input", S3: "bidirectional", S0: "bidirectional", S1: "bidirectional", S2: "bidirectional", VDD: "power_in", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX4051BQB";
  override referencePrefix = "U";
}

/**
 * CMOS single 8:1 analog multiplexer/demultiplexer, 1.8V logic compatible, 60Ohm Ron typ, 5..24V/±12V supply, TSSOP-16
 *
 * KiCad symbol: `Analog_Switch:TMUX4051PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux4051.pdf
 * Keywords: texas amux octuple.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class TMUX4051PW extends Component.withPins({
  "S4": "1",
  "S6": "2",
  "D": "3",
  "S7": "4",
  "S5": "5",
  "~{EN}": "6",
  "VSS": "7",
  "GND": "8",
  "A2": "9",
  "A1": "10",
  "A0": "11",
  "S3": "12",
  "S0": "13",
  "S1": "14",
  "S2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S4: "bidirectional", S6: "bidirectional", D: "bidirectional", S7: "bidirectional", S5: "bidirectional", "~{EN}": "input", VSS: "power_in", GND: "power_in", A2: "input", A1: "input", A0: "input", S3: "bidirectional", S0: "bidirectional", S1: "bidirectional", S2: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX4051PW";
  override referencePrefix = "U";
}

/**
 * CMOS single 8:1 analog multiplexer/demultiplexer, 1.8V logic compatible, 60Ohm Ron typ, 5..24V/±12V supply, SOT-23-16
 *
 * KiCad symbol: `Analog_Switch:TMUX4051DYY`. Reference prefix: `U`.
 * Footprint filters: Texas*DYY0016A*2x4.2mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmux4051.pdf
 * Keywords: texas amux octuple.
 * Default footprint: Package_SO:Texas_DYY0016A_TSOT-23-16_2x4.2mm_P0.5mm.
 */
export class TMUX4051DYY extends Component.withPins({
  "S4": "1",
  "S6": "2",
  "D": "3",
  "S7": "4",
  "S5": "5",
  "~{EN}": "6",
  "VSS": "7",
  "GND": "8",
  "A2": "9",
  "A1": "10",
  "A0": "11",
  "S3": "12",
  "S0": "13",
  "S1": "14",
  "S2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S4: "bidirectional", S6: "bidirectional", D: "bidirectional", S7: "bidirectional", S5: "bidirectional", "~{EN}": "input", VSS: "power_in", GND: "power_in", A2: "input", A1: "input", A0: "input", S3: "bidirectional", S0: "bidirectional", S1: "bidirectional", S2: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TMUX4051DYY";
  override referencePrefix = "U";
}

/**
 * Dual SPDT 0.3Ω Bidirectional Analog Switch, TSSOP-10
 *
 * KiCad symbol: `Analog_Switch:TS3A24159DGS`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ts3a24159.pdf
 * Keywords: switch analog SPDT.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class TS3A24159DGS extends Component.withPins({
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "VCC": "1",
  "GND": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P2: "passive", P3: "passive", P4: "input", P5: "passive", P7: "passive", P8: "input", P9: "passive", P10: "passive", VCC: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3A24159DGS";
  override referencePrefix = "U";
}

/**
 * Dual SPDT 0.3Ω Bidirectional Analog Switch, VSON-10
 *
 * KiCad symbol: `Analog_Switch:TS3A24159DRC`. Reference prefix: `U`.
 * Footprint filters: Texas*S?PVSON?N10*.
 * @see http://www.ti.com/lit/ds/symlink/ts3a24159.pdf
 * Keywords: switch analog SPDT.
 * Default footprint: Package_SON:Texas_S-PVSON-N10.
 */
export class TS3A24159DRC extends Component.withPins({
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "VCC": "1",
  "GND": "6",
  "PAD": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P2: "passive", P3: "passive", P4: "input", P5: "passive", P7: "passive", P8: "input", P9: "passive", P10: "passive", VCC: "power_in", GND: "power_in", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3A24159DRC";
  override referencePrefix = "U";
}

/**
 * Dual SPDT 0.3Ω Bidirectional Analog Switch, DSBGA-10
 *
 * KiCad symbol: `Analog_Switch:TS3A24159YZP`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*1.36x1.86mm*Layout3x4*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ts3a24159.pdf
 * Keywords: switch analog SPDT.
 * Default footprint: Package_BGA:Texas_DSBGA-10_1.36x1.86mm_Layout3x4_P0.5mm.
 */
export class TS3A24159YZP extends Component.withPins({
  "PA1": "A1",
  "PB1": "B1",
  "PC1": "C1",
  "PD1": "D1",
  "PA3": "A3",
  "PB3": "B3",
  "PC3": "C3",
  "PD3": "D3",
  "GND": "A2",
  "VCC": "D2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA1: "passive", PB1: "input", PC1: "passive", PD1: "passive", PA3: "passive", PB3: "input", PC3: "passive", PD3: "passive", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3A24159YZP";
  override referencePrefix = "U";
}

/**
 * 6-channel analog mux, TSSOP-24
 *
 * KiCad symbol: `Analog_Switch:TS3A27518EPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ts3a27518e.pdf
 * Keywords: SPI qSPI multiplexer demux.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class TS3A27518EPW extends Component.withPins({
  "NC2": "1",
  "NC1": "2",
  "N.C.": "3",
  "COM1": "4",
  "GND": "5",
  "COM2": "6",
  "COM3": "7",
  "VCC": "8",
  "COM4": "9",
  "COM5": "10",
  "NO1": "11",
  "COM6": "12",
  "NO2": "13",
  "IN2": "14",
  "NO3": "15",
  "NO6": "16",
  "NO4": "17",
  "NO5": "18",
  "NC5": "19",
  "~{EN}": "20",
  "NC4": "21",
  "NC6": "22",
  "NC3": "23",
  "IN1": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC2: "bidirectional", NC1: "bidirectional", "N.C.": "no_connect", COM1: "bidirectional", GND: "power_in", COM2: "bidirectional", COM3: "bidirectional", VCC: "power_in", COM4: "bidirectional", COM5: "bidirectional", NO1: "bidirectional", COM6: "bidirectional", NO2: "bidirectional", IN2: "input", NO3: "bidirectional", NO6: "bidirectional", NO4: "bidirectional", NO5: "bidirectional", NC5: "bidirectional", "~{EN}": "input", NC4: "bidirectional", NC6: "bidirectional", NC3: "bidirectional", IN1: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3A27518EPW";
  override referencePrefix = "U";
}

/**
 * 6-channel analog mux, WQFN-24
 *
 * KiCad symbol: `Analog_Switch:TS3A27518ERTW`. Reference prefix: `U`.
 * Footprint filters: WQFN*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ts3a27518e.pdf
 * Keywords: SPI qSPI multiplexer demux.
 * Default footprint: Package_DFN_QFN:WQFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class TS3A27518ERTW extends Component.withPins({
  "COM1": "1",
  "GND_2": "2",
  "COM2": "3",
  "COM3": "4",
  "VCC": "5",
  "COM4": "6",
  "COM5": "7",
  "NO1": "8",
  "COM6": "9",
  "NO2": "10",
  "IN2": "11",
  "NO3": "12",
  "NO6": "13",
  "NO4": "14",
  "NO5": "15",
  "NC5": "16",
  "~{EN}": "17",
  "NC4": "18",
  "NC6": "19",
  "NC3": "20",
  "IN1": "21",
  "NC2": "22",
  "NC1": "23",
  "N.C.": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { COM1: "bidirectional", GND_2: "power_in", COM2: "bidirectional", COM3: "bidirectional", VCC: "power_in", COM4: "bidirectional", COM5: "bidirectional", NO1: "bidirectional", COM6: "bidirectional", NO2: "bidirectional", IN2: "input", NO3: "bidirectional", NO6: "bidirectional", NO4: "bidirectional", NO5: "bidirectional", NC5: "bidirectional", "~{EN}": "input", NC4: "bidirectional", NC6: "bidirectional", NC3: "bidirectional", IN1: "input", NC2: "bidirectional", NC1: "bidirectional", "N.C.": "no_connect", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3A27518ERTW";
  override referencePrefix = "U";
}

/**
 * Dual SP4T Analog Switch Mux Demux, VQFN
 *
 * KiCad symbol: `Analog_Switch:TS3A5017RGY`. Reference prefix: `U`.
 * Footprint filters: Texas*RGY*R*PVQFN*N*.
 * @see https://www.ti.com/lit/ds/symlink/ts3a5017.pdf
 * Keywords: Analog switch SP4T.
 * Default footprint: Package_DFN_QFN:Texas_RGY_R-PVQFN-N16_EP2.05x2.55mm.
 */
export class TS3A5017RGY extends Component.withPins({
  "1~{EN}": "1",
  "IN2": "2",
  "1S4": "3",
  "1S3": "4",
  "1S2": "5",
  "1S1": "6",
  "1D": "7",
  "GND_8": "8",
  "2D": "9",
  "2S1": "10",
  "2S2": "11",
  "2S3": "12",
  "2S4": "13",
  "IN1": "14",
  "2~{EN}": "15",
  "V+": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "1~{EN}": "input", IN2: "input", "1S4": "bidirectional", "1S3": "bidirectional", "1S2": "bidirectional", "1S1": "bidirectional", "1D": "bidirectional", GND_8: "power_in", "2D": "bidirectional", "2S1": "bidirectional", "2S2": "bidirectional", "2S3": "bidirectional", "2S4": "bidirectional", IN1: "input", "2~{EN}": "input", "V+": "power_in", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3A5017RGY";
  override referencePrefix = "U";
}

/**
 * Dual SP4T Analog Switch Mux Demux, UQFN-16
 *
 * KiCad symbol: `Analog_Switch:TS3A5017RSV`. Reference prefix: `U`.
 * Footprint filters: UQFN*1.8x2.6mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/ts3a5017.pdf
 * Keywords: Analog switch SP4T.
 * Default footprint: Package_DFN_QFN:UQFN-16_1.8x2.6mm_P0.4mm.
 */
export class TS3A5017RSV extends Component.withPins({
  "1S4": "1",
  "1S3": "2",
  "1S2": "3",
  "1S1": "4",
  "1D": "5",
  "GND": "6",
  "2D": "7",
  "2S1": "8",
  "2S2": "9",
  "2S3": "10",
  "2S4": "11",
  "IN1": "12",
  "2~{EN}": "13",
  "V+": "14",
  "1~{EN}": "15",
  "IN2": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "1S4": "bidirectional", "1S3": "bidirectional", "1S2": "bidirectional", "1S1": "bidirectional", "1D": "bidirectional", GND: "power_in", "2D": "bidirectional", "2S1": "bidirectional", "2S2": "bidirectional", "2S3": "bidirectional", "2S4": "bidirectional", IN1: "input", "2~{EN}": "input", "V+": "power_in", "1~{EN}": "input", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3A5017RSV";
  override referencePrefix = "U";
}

/**
 * Dual SPDT 0.45..0.85mΩ Bidirectional Analog switch, 1.65..3.6V supply, UQFN-10
 *
 * KiCad symbol: `Analog_Switch:TS3A5223RSW`. Reference prefix: `U`.
 * Footprint filters: *UQFN*1.4*1.8*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/ts3a5223.pdf
 * Keywords: MUX DEMUX Texas.
 * Default footprint: Package_DFN_QFN:Texas_RSW0010A_UQFN-10_1.4x1.8mm_P0.4mm.
 */
export class TS3A5223RSW extends Component.withPins({
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "VCC": "1",
  "GND": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P2: "passive", P3: "passive", P4: "input", P5: "passive", P7: "passive", P8: "input", P9: "passive", P10: "passive", VCC: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3A5223RSW";
  override referencePrefix = "U";
}

/**
 * High-Speed Differential Crosspoint, WQFN-20
 *
 * KiCad symbol: `Analog_Switch:TS3DS10224RUK`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*3x3mm*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/ts3ds10224.pdf
 * Keywords: multiplexer demultiplexer 1:4 differential.
 * Default footprint: Package_DFN_QFN:WQFN-20-1EP_3x3mm_P0.4mm_EP1.7x1.7mm_ThermalVias.
 */
export class TS3DS10224RUK extends Component.withPins({
  "INA+": "1",
  "INA-": "2",
  "INB+": "3",
  "INB-": "4",
  "GND": "5",
  "OUTB1+": "6",
  "OUTB1-": "7",
  "OUTB0+": "8",
  "OUTB0-": "9",
  "ENB": "10",
  "SBO": "11",
  "SBI": "12",
  "VCC": "13",
  "SAI": "14",
  "SAO": "15",
  "ENA": "16",
  "OUTA0-": "17",
  "OUTA0+": "18",
  "OUTA1-": "19",
  "OUTA1+": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "INA+": "bidirectional", "INA-": "bidirectional", "INB+": "bidirectional", "INB-": "bidirectional", GND: "power_in", "OUTB1+": "bidirectional", "OUTB1-": "bidirectional", "OUTB0+": "bidirectional", "OUTB0-": "bidirectional", ENB: "input", SBO: "input", SBI: "input", VCC: "power_in", SAI: "input", SAO: "input", ENA: "input", "OUTA0-": "bidirectional", "OUTA0+": "bidirectional", "OUTA1-": "bidirectional", "OUTA1+": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3DS10224RUK";
  override referencePrefix = "U";
}

/**
 * 8-Channel SPDT/16-Bit to 8-Bit Multiplexer and Demultiplexer, Ethernet LAN Switch With Power-Down Mode, WQFN-42
 *
 * KiCad symbol: `Analog_Switch:TS3L501ERUA`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*3.5x9mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ts3l501e.pdf
 * Keywords: gbit base-t lvds lvpecl video.
 * Default footprint: Package_DFN_QFN:WQFN-42-1EP_3.5x9mm_P0.5mm_EP2.05x7.55mm.
 */
export class TS3L501ERUA extends Component.withPins({
  "A0": "2",
  "A1": "3",
  "C1": "35",
  "C0": "36",
  "B1": "37",
  "B0": "38",
  "A2": "6",
  "A3": "7",
  "C3": "31",
  "C2": "32",
  "B3": "33",
  "B2": "34",
  "A4": "9",
  "A5": "10",
  "C5": "26",
  "C4": "27",
  "B5": "28",
  "B4": "29",
  "A6": "11",
  "A7": "12",
  "C7": "22",
  "C6": "23",
  "B7": "24",
  "B6": "25",
  "LED_A0": "15",
  "LED_A1": "16",
  "LED_B0": "17",
  "LED_B1": "18",
  "LED_C0": "19",
  "LED_C1": "20",
  "LED_C2": "40",
  "LED_B2": "41",
  "LED_A2": "42",
  "VDD_1": "1",
  "VDD_4": "4",
  "PD": "5",
  "VDD_8": "8",
  "SEL": "13",
  "VDD_14": "14",
  "VDD_21": "21",
  "VDD_30": "30",
  "VDD_39": "39",
  "GND": "43",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "bidirectional", A1: "bidirectional", C1: "bidirectional", C0: "bidirectional", B1: "bidirectional", B0: "bidirectional", A2: "bidirectional", A3: "bidirectional", C3: "bidirectional", C2: "bidirectional", B3: "bidirectional", B2: "bidirectional", A4: "bidirectional", A5: "bidirectional", C5: "bidirectional", C4: "bidirectional", B5: "bidirectional", B4: "bidirectional", A6: "bidirectional", A7: "bidirectional", C7: "bidirectional", C6: "bidirectional", B7: "bidirectional", B6: "bidirectional", LED_A0: "bidirectional", LED_A1: "bidirectional", LED_B0: "bidirectional", LED_B1: "bidirectional", LED_C0: "bidirectional", LED_C1: "bidirectional", LED_C2: "bidirectional", LED_B2: "bidirectional", LED_A2: "bidirectional", VDD_1: "power_in", VDD_4: "power_in", PD: "input", VDD_8: "power_in", SEL: "input", VDD_14: "power_in", VDD_21: "power_in", VDD_30: "power_in", VDD_39: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS3L501ERUA";
  override referencePrefix = "U";
}

/**
 * Dual 1 ohm SPDT Analog Switch, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Analog_Switch:TS5A23159DGS`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a23159.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class TS5A23159DGS extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P9": "9",
  "P10": "10",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "GND": "3",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P9: "passive", P10: "passive", P4: "passive", P5: "input", P6: "passive", P7: "passive", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A23159DGS";
  override referencePrefix = "U";
}

/**
 * Dual 10 ohms SPDT Analog Switch, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Analog_Switch:TS5A23157DGS`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ts5a23157.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class TS5A23157DGS extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P9": "9",
  "P10": "10",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "GND": "3",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P9: "passive", P10: "passive", P4: "passive", P5: "input", P6: "passive", P7: "passive", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A23157DGS";
  override referencePrefix = "U";
}

/**
 * Dual 1 ohm SPDT Analog Switch, UQFN-10
 *
 * KiCad symbol: `Analog_Switch:TS5A23159RSE`. Reference prefix: `U`.
 * Footprint filters: *UQFN*1.5x2mm?P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a23159.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_DFN_QFN:Texas_UQFN-10_1.5x2mm_P0.5mm.
 */
export class TS5A23159RSE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P9": "9",
  "P10": "10",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "GND": "3",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P9: "passive", P10: "passive", P4: "passive", P5: "input", P6: "passive", P7: "passive", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A23159RSE";
  override referencePrefix = "U";
}

/**
 * Dual 10 ohms SPDT Analog Switch, UQFN-10
 *
 * KiCad symbol: `Analog_Switch:TS5A23157RSE`. Reference prefix: `U`.
 * Footprint filters: *UQFN*1.5x2mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ts5a23157.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_DFN_QFN:Texas_UQFN-10_1.5x2mm_P0.5mm.
 */
export class TS5A23157RSE extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P9": "9",
  "P10": "10",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "GND": "3",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "passive", P9: "passive", P10: "passive", P4: "passive", P5: "input", P6: "passive", P7: "passive", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A23157RSE";
  override referencePrefix = "U";
}

/**
 * Single SPDT Analog Switch, 1.65-V to 5.5-V Single-Supply Operation, 1Ohm Ron, SOT-23-6
 *
 * KiCad symbol: `Analog_Switch:TS5A3159DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a3159.pdf
 * Keywords: Analog Switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TS5A3159DBV extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A3159DBV";
  override referencePrefix = "U";
}

/**
 * Single SPDT Analog Switch, 1.65-V to 5.5-V Single-Supply Operation, 1Ohm Ron, SOT-23-6
 *
 * KiCad symbol: `Analog_Switch:TS5A3159ADBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a3159a.pdf
 * Keywords: Analog Switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TS5A3159ADBVR extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A3159ADBVR";
  override referencePrefix = "U";
}

/**
 * Single SPDT Analog Switch, 1.65-V to 5.5-V Single-Supply Operation, 1Ohm Ron, SC-70-6
 *
 * KiCad symbol: `Analog_Switch:TS5A3159ADCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a3159a.pdf
 * Keywords: Analog Switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class TS5A3159ADCK extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A3159ADCK";
  override referencePrefix = "U";
}

/**
 * Single SPDT Analog Switch, 1.65-V to 5.5-V Single-Supply Operation, 1Ohm Ron, DSBGA-6
 *
 * KiCad symbol: `Analog_Switch:TS5A3159AYZPR`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*0.9x1.4mm*2x3*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a3159a.pdf
 * Keywords: Analog Switch.
 * Default footprint: Package_BGA:Texas_DSBGA-6_0.9x1.4mm_Layout2x3_P0.5mm.
 */
export class TS5A3159AYZPR extends Component.withPins({
  "PA1": "A1",
  "PA2": "A2",
  "PC1": "C1",
  "PC2": "C2",
  "GND": "B1",
  "V+": "B2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA1: "passive", PA2: "input", PC1: "passive", PC2: "passive", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A3159AYZPR";
  override referencePrefix = "U";
}

/**
 * Single SPDT Analog Switch, 1.65-V to 5.5-V Single-Supply Operation, 1Ohm Ron, SC-70-6
 *
 * KiCad symbol: `Analog_Switch:TS5A3159DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a3159.pdf
 * Keywords: Analog Switch SPDT.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class TS5A3159DCK extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A3159DCK";
  override referencePrefix = "U";
}

/**
 * Single SPDT Analog Switch, 1.65-V to 5.5-V Single-Supply Operation, 1Ohm Ron, SOT-23-6
 *
 * KiCad symbol: `Analog_Switch:TS5A3160DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a3160.pdf
 * Keywords: Analog Switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TS5A3160DBV extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A3160DBV";
  override referencePrefix = "U";
}

/**
 * Single SPDT Analog Switch, 1.65-V to 5.5-V Single-Supply Operation, 1Ohm Ron, SC-70-6
 *
 * KiCad symbol: `Analog_Switch:TS5A3160DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a3160.pdf
 * Keywords: Analog Switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class TS5A3160DCK extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A3160DCK";
  override referencePrefix = "U";
}

/**
 * Single SPST Analog Switch, 5-V/3.3-V, normally OFF, 0.9Ohm Ron, SOT-23-5
 *
 * KiCad symbol: `Analog_Switch:TS5A3166DBVR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a3166.pdf
 * Keywords: Analog Switch SPST.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TS5A3166DBVR extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", GND: "power_in", P4: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A3166DBVR";
  override referencePrefix = "U";
}

/**
 * Single SPST Analog Switch, 5-V/3.3-V, normally OFF, 0.9Ohm Ron, SC-70
 *
 * KiCad symbol: `Analog_Switch:TS5A3166DCKR`. Reference prefix: `U`.
 * Footprint filters: *SC?70?5*.
 * @see http://www.ti.com/lit/ds/symlink/ts5a3166.pdf
 * Keywords: Analog Switch SPST.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class TS5A3166DCKR extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", GND: "power_in", P4: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A3166DCKR";
  override referencePrefix = "U";
}

/**
 * Single SPDT Analog Switch, 5V/3.3V Single-Supply Operation, 12Ohm Ron, SOT-23-6
 *
 * KiCad symbol: `Analog_Switch:TS5A63157DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/ts5a63157.pdf
 * Keywords: Analog Switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TS5A63157DBV extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P6: "input", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Analog_Switch:TS5A63157DBV";
  override referencePrefix = "U";
}
