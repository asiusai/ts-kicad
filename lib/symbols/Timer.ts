// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * CHMOS Programmable Interval Timer, PDIP-24
 *
 * KiCad symbol: `Timer:82C54`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://download.intel.com/design/archives/periphrl/docs/23124406.pdf
 * Keywords: Timer Counter.
 * Default footprint: Package_DIP:DIP-24_W15.24mm.
 */
export class _82C54 extends Component.withPins({
  "D7": "1",
  "D6": "2",
  "D5": "3",
  "D4": "4",
  "D3": "5",
  "D2": "6",
  "D1": "7",
  "D0": "8",
  "CLK0": "9",
  "OUT0": "10",
  "G0": "11",
  "GND": "12",
  "OUT1": "13",
  "G1": "14",
  "CLK1": "15",
  "G2": "16",
  "OUT2": "17",
  "CLK2": "18",
  "A0": "19",
  "A1": "20",
  "~{CS}": "21",
  "~{RD}": "22",
  "~{WR}": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", CLK0: "input", OUT0: "output", G0: "input", GND: "power_in", OUT1: "output", G1: "input", CLK1: "input", G2: "input", OUT2: "output", CLK2: "input", A0: "input", A1: "input", "~{CS}": "input", "~{RD}": "input", "~{WR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:82C54";
  override referencePrefix = "U";
}

/**
 * Programmable Interval Timer, PDIP-24
 *
 * KiCad symbol: `Timer:8253`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://www.cpcwiki.eu/imgs/e/e3/8253.pdf
 * Keywords: Timer Counter.
 * Default footprint: Package_DIP:DIP-24_W15.24mm.
 */
export class _8253 extends Component.withPins({
  "D7": "1",
  "D6": "2",
  "D5": "3",
  "D4": "4",
  "D3": "5",
  "D2": "6",
  "D1": "7",
  "D0": "8",
  "CLK0": "9",
  "OUT0": "10",
  "G0": "11",
  "GND": "12",
  "OUT1": "13",
  "G1": "14",
  "CLK1": "15",
  "G2": "16",
  "OUT2": "17",
  "CLK2": "18",
  "A0": "19",
  "A1": "20",
  "~{CS}": "21",
  "~{RD}": "22",
  "~{WR}": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", CLK0: "input", OUT0: "output", G0: "input", GND: "power_in", OUT1: "output", G1: "input", CLK1: "input", G2: "input", OUT2: "output", CLK2: "input", A0: "input", A1: "input", "~{CS}": "input", "~{RD}": "input", "~{WR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:8253";
  override referencePrefix = "U";
}

/**
 * Programmable Interval Timer, PDIP-24
 *
 * KiCad symbol: `Timer:8254`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://www.scs.stanford.edu/10wi-cs140/pintos/specs/8254.pdf
 * Keywords: Timer Counter.
 * Default footprint: Package_DIP:DIP-24_W15.24mm.
 */
export class _8254 extends Component.withPins({
  "D7": "1",
  "D6": "2",
  "D5": "3",
  "D4": "4",
  "D3": "5",
  "D2": "6",
  "D1": "7",
  "D0": "8",
  "CLK0": "9",
  "OUT0": "10",
  "G0": "11",
  "GND": "12",
  "OUT1": "13",
  "G1": "14",
  "CLK1": "15",
  "G2": "16",
  "OUT2": "17",
  "CLK2": "18",
  "A0": "19",
  "A1": "20",
  "~{CS}": "21",
  "~{RD}": "22",
  "~{WR}": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", CLK0: "input", OUT0: "output", G0: "input", GND: "power_in", OUT1: "output", G1: "input", CLK1: "input", G2: "input", OUT2: "output", CLK2: "input", A0: "input", A1: "input", "~{CS}": "input", "~{RD}": "input", "~{WR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:8254";
  override referencePrefix = "U";
}

/**
 * Clock Generator and Driver for i8086/88 Microcontrollers, PDIP-18
 *
 * KiCad symbol: `Timer:8284`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.cpu-galaxy.at/cpu/ram%20rom%20eprom/other_intel_chips/other_intel-Dateien/D8284A_Datasheet.pdf
 * Keywords: Clock Generator.
 * Default footprint: Package_DIP:DIP-18_W7.62mm.
 */
export class _8284 extends Component.withPins({
  "CSYNC": "1",
  "PCLK": "2",
  "~{AEN1}": "3",
  "RDY1": "4",
  "READY": "5",
  "RDY2": "6",
  "~{AEN2}": "7",
  "CLK": "8",
  "GND": "9",
  "RESET": "10",
  "~{RES}": "11",
  "OSC": "12",
  "F/~{C}": "13",
  "EFI": "14",
  "~{ASYNC}": "15",
  "X2": "16",
  "X1": "17",
  "VCC": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CSYNC: "input", PCLK: "output", "~{AEN1}": "input", RDY1: "input", READY: "output", RDY2: "input", "~{AEN2}": "input", CLK: "output", GND: "power_in", RESET: "output", "~{RES}": "input", OSC: "output", "F/~{C}": "input", EFI: "input", "~{ASYNC}": "input", X2: "output", X1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:8284";
  override referencePrefix = "U";
}

/**
 * CHMOS Programmable Interval Timer, PLCC-28
 *
 * KiCad symbol: `Timer:82C54_PLCC`. Reference prefix: `U`.
 * Footprint filters: *PLCC?28*.
 * @see http://download.intel.com/design/archives/periphrl/docs/23124406.pdf
 * Keywords: Timer Counter.
 * Default footprint: Package_LCC:PLCC-28.
 */
export class _82C54_PLCC extends Component.withPins({
  "NC_1": "1",
  "D7": "2",
  "D6": "3",
  "D5": "4",
  "D4": "5",
  "D3": "6",
  "D2": "7",
  "D1": "8",
  "D0": "9",
  "CLK0": "10",
  "NC_11": "11",
  "OUT0": "12",
  "G0": "13",
  "GND": "14",
  "NC_15": "15",
  "OUT1": "16",
  "G1": "17",
  "CLK1": "18",
  "G2": "19",
  "OUT2": "20",
  "CLK2": "21",
  "A0": "22",
  "A1": "23",
  "~{CS}": "24",
  "NC_25": "25",
  "~{RD}": "26",
  "~{WR}": "27",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", CLK0: "input", NC_11: "no_connect", OUT0: "output", G0: "input", GND: "power_in", NC_15: "no_connect", OUT1: "output", G1: "input", CLK1: "input", G2: "input", OUT2: "output", CLK2: "input", A0: "input", A1: "input", "~{CS}": "input", NC_25: "no_connect", "~{RD}": "input", "~{WR}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:82C54_PLCC";
  override referencePrefix = "U";
}

/**
 * 800 MHz, 3 Outputs, Clock Distribution IC, Divider, Delay Adjust, LFCSP-32
 *
 * KiCad symbol: `Timer:AD9513`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9513.pdf
 * Keywords: clock distribution LVDS CMOS.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AD9513 extends Component.withPins({
  "VS_1": "1",
  "CLK": "2",
  "CLKB": "3",
  "VS_4": "4",
  "SYNCB": "5",
  "VREF": "6",
  "S10": "7",
  "S9": "8",
  "S8": "9",
  "S7": "10",
  "S6": "11",
  "S5": "12",
  "S4": "13",
  "S3": "14",
  "S2": "15",
  "S1": "16",
  "VS_17": "17",
  "OUT2B": "18",
  "OUT2": "19",
  "VS_20": "20",
  "VS_21": "21",
  "OUT1B": "22",
  "OUT1": "23",
  "VS_24": "24",
  "S0": "25",
  "VS_26": "26",
  "OUT0B": "27",
  "OUT0": "28",
  "VS_29": "29",
  "VS_30": "30",
  "GND_31": "31",
  "RSET": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VS_1: "power_in", CLK: "input", CLKB: "input", VS_4: "power_in", SYNCB: "input", VREF: "power_out", S10: "input", S9: "input", S8: "input", S7: "input", S6: "input", S5: "input", S4: "input", S3: "input", S2: "input", S1: "input", VS_17: "power_in", OUT2B: "output", OUT2: "output", VS_20: "power_in", VS_21: "power_in", OUT1B: "output", OUT1: "output", VS_24: "power_in", S0: "input", VS_26: "power_in", OUT0B: "output", OUT0: "output", VS_29: "power_in", VS_30: "power_in", GND_31: "power_in", RSET: "passive", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer:AD9513";
  override referencePrefix = "U";
}

/**
 * 1.6 GHz, 3 Outputs, Clock Distribution IC, Divider, Delay Adjust, LFCSP-32
 *
 * KiCad symbol: `Timer:AD9514`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9514.pdf
 * Keywords: clock distribution LVPECL LVDS CMOS.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AD9514 extends Component.withPins({
  "VS_1": "1",
  "CLK": "2",
  "CLKB": "3",
  "VS_4": "4",
  "SYNCB": "5",
  "VREF": "6",
  "S10": "7",
  "S9": "8",
  "S8": "9",
  "S7": "10",
  "S6": "11",
  "S5": "12",
  "S4": "13",
  "S3": "14",
  "S2": "15",
  "S1": "16",
  "VS_17": "17",
  "OUT2B": "18",
  "OUT2": "19",
  "VS_20": "20",
  "VS_21": "21",
  "OUT1B": "22",
  "OUT1": "23",
  "VS_24": "24",
  "S0": "25",
  "VS_26": "26",
  "OUT0B": "27",
  "OUT0": "28",
  "VS_29": "29",
  "VS_30": "30",
  "GND_31": "31",
  "RSET": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VS_1: "power_in", CLK: "input", CLKB: "input", VS_4: "power_in", SYNCB: "input", VREF: "power_out", S10: "input", S9: "input", S8: "input", S7: "input", S6: "input", S5: "input", S4: "input", S3: "input", S2: "input", S1: "input", VS_17: "power_in", OUT2B: "output", OUT2: "output", VS_20: "power_in", VS_21: "power_in", OUT1B: "open_emitter", OUT1: "open_emitter", VS_24: "power_in", S0: "input", VS_26: "power_in", OUT0B: "open_emitter", OUT0: "open_emitter", VS_29: "power_in", VS_30: "power_in", GND_31: "power_in", RSET: "passive", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer:AD9514";
  override referencePrefix = "U";
}

/**
 * 1.6 GHz, 2 Outputs, Clock Distribution IC, Divider, Delay Adjust, LFCSP-32
 *
 * KiCad symbol: `Timer:AD9515`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9515.pdf
 * Keywords: clock distribution LVPECL LVDS CMOS.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AD9515 extends Component.withPins({
  "VS_1": "1",
  "CLK": "2",
  "CLKB": "3",
  "VS_4": "4",
  "SYNCB": "5",
  "VREF": "6",
  "S10": "7",
  "S9": "8",
  "S8": "9",
  "S7": "10",
  "S6": "11",
  "S5": "12",
  "S4": "13",
  "S3": "14",
  "S2": "15",
  "S1": "16",
  "VS_17": "17",
  "OUT1B": "18",
  "OUT1": "19",
  "VS_20": "20",
  "VS_21": "21",
  "OUT0B": "22",
  "OUT0": "23",
  "VS_24": "24",
  "S0": "25",
  "VS_26": "26",
  "NC_27": "27",
  "NC_28": "28",
  "VS_29": "29",
  "VS_30": "30",
  "GND_31": "31",
  "RSET": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VS_1: "power_in", CLK: "input", CLKB: "input", VS_4: "power_in", SYNCB: "input", VREF: "power_out", S10: "input", S9: "input", S8: "input", S7: "input", S6: "input", S5: "input", S4: "input", S3: "input", S2: "input", S1: "input", VS_17: "power_in", OUT1B: "output", OUT1: "output", VS_20: "power_in", VS_21: "power_in", OUT0B: "output", OUT0: "output", VS_24: "power_in", S0: "input", VS_26: "power_in", NC_27: "no_connect", NC_28: "no_connect", VS_29: "power_in", VS_30: "power_in", GND_31: "power_in", RSET: "passive", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer:AD9515";
  override referencePrefix = "U";
}

/**
 * 20V, Programmable Timer, PDIP-14
 *
 * KiCad symbol: `Timer:CD4541BE`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd4541b.pdf
 * Keywords: cmos.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class CD4541BE extends Component.withPins({
  "R_{TC}": "1",
  "C_{TC}": "2",
  "R_{S}": "3",
  "NC_4": "4",
  "AR": "5",
  "MR": "6",
  "V_{SS}": "7",
  "OUTPUT/Q": "8",
  "Q/~{Q}_SELECT": "9",
  "MODE": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R_{TC}": "input", "C_{TC}": "input", "R_{S}": "input", NC_4: "no_connect", AR: "input", MR: "input", "V_{SS}": "power_in", "OUTPUT/Q": "output", "Q/~{Q}_SELECT": "input", MODE: "input", NC_11: "no_connect", A: "input", B: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:CD4541BE";
  override referencePrefix = "U";
}

/**
 * 20V, Programmable Timer, SOIC-14
 *
 * KiCad symbol: `Timer:CD4541BM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd4541b.pdf
 * Keywords: cmos.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class CD4541BM extends Component.withPins({
  "R_{TC}": "1",
  "C_{TC}": "2",
  "R_{S}": "3",
  "NC_4": "4",
  "AR": "5",
  "MR": "6",
  "V_{SS}": "7",
  "OUTPUT/Q": "8",
  "Q/~{Q}_SELECT": "9",
  "MODE": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R_{TC}": "input", "C_{TC}": "input", "R_{S}": "input", NC_4: "no_connect", AR: "input", MR: "input", "V_{SS}": "power_in", "OUTPUT/Q": "output", "Q/~{Q}_SELECT": "input", MODE: "input", NC_11: "no_connect", A: "input", B: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:CD4541BM";
  override referencePrefix = "U";
}

/**
 * 20V, Programmable Timer, TSSOP-14
 *
 * KiCad symbol: `Timer:CD4541BPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd4541b.pdf
 * Keywords: cmos.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class CD4541BPW extends Component.withPins({
  "R_{TC}": "1",
  "C_{TC}": "2",
  "R_{S}": "3",
  "NC_4": "4",
  "AR": "5",
  "MR": "6",
  "V_{SS}": "7",
  "OUTPUT/Q": "8",
  "Q/~{Q}_SELECT": "9",
  "MODE": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R_{TC}": "input", "C_{TC}": "input", "R_{S}": "input", NC_4: "no_connect", AR: "input", MR: "input", "V_{SS}": "power_in", "OUTPUT/Q": "output", "Q/~{Q}_SELECT": "input", MODE: "input", NC_11: "no_connect", A: "input", B: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:CD4541BPW";
  override referencePrefix = "U";
}

/**
 * 8-bit Programamble Delay Line / Timing Element, 5V supply, SOIC-16W package.
 *
 * KiCad symbol: `Timer:DS1023S`. Reference prefix: `U`.
 * Footprint filters: SOIC*W?7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS1023.pdf
 * Keywords: Delay Line.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 */
export class DS1023S extends Component.withPins({
  "IN": "1",
  "LE": "2",
  "Q/P0": "3",
  "CLK/P1": "4",
  "D/P2": "5",
  "P3": "6",
  "P4": "7",
  "GND": "8",
  "REF/PWM": "9",
  "P5": "10",
  "MS": "11",
  "P6": "12",
  "P7": "13",
  "~{P}/S": "14",
  "OUT/~{OUT}": "15",
  "V_{CC}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", LE: "input", "Q/P0": "input", "CLK/P1": "input", "D/P2": "input", P3: "input", P4: "input", GND: "power_in", "REF/PWM": "output", P5: "input", MS: "input", P6: "input", P7: "input", "~{P}/S": "input", "OUT/~{OUT}": "output", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:DS1023S";
  override referencePrefix = "U";
}

/**
 * Timebase generator, DIP-8
 *
 * KiCad symbol: `Timer:ICM7209`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets/320/500974_DS.pdf
 * Keywords: Timebase generator.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class ICM7209 extends Component.withPins({
  "OSC_OUT": "1",
  "OSC_IN": "2",
  "DISABLE": "3",
  "VDD": "4",
  "OUT/1": "5",
  "OUT/8": "6",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OSC_OUT: "output", OSC_IN: "input", DISABLE: "input", VDD: "power_in", "OUT/1": "output", "OUT/8": "output", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:ICM7209";
  override referencePrefix = "U";
}

/**
 * Precision Timers, 555 compatible, SOIC-8
 *
 * KiCad symbol: `Timer:NE555D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NE555D extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:NE555D";
  override referencePrefix = "U";
}

/**
 * CMOS General Purpose Timer, 555 compatible, SOIC-8
 *
 * KiCad symbol: `Timer:ICM7555xB`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/icm7/icm7555-56.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ICM7555xB extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:ICM7555xB";
  override referencePrefix = "U";
}

/**
 * CMOS General Purpose Timer, 555 compatible, PDIP-8
 *
 * KiCad symbol: `Timer:ICM7555xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/icm7/icm7555-56.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class ICM7555xP extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:ICM7555xP";
  override referencePrefix = "U";
}

/**
 * Dual Timer, DIP-14/SOIC-14
 *
 * KiCad symbol: `Timer:LM556`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, TSSOP*5.3x6.2mm*P0.65mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.mouser.com/datasheet/2/405/lm556-405954.pdf
 * Keywords: dual timer.
 */
export class LM556 extends Component.withPins({
  "GND": "7",
  "VCC": "14",
  "DISCH_1": "1",
  "THRES_2": "2",
  "CONT_3": "3",
  "~{RST}_4": "4",
  "OUT_5": "5",
  "TRIG_6": "6",
  "TRIG_8": "8",
  "OUT_9": "9",
  "~{RST}_10": "10",
  "CONT_11": "11",
  "THRES_12": "12",
  "DISCH_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", DISCH_1: "input", THRES_2: "input", CONT_3: "passive", "~{RST}_4": "input", OUT_5: "output", TRIG_6: "input", TRIG_8: "input", OUT_9: "output", "~{RST}_10": "input", CONT_11: "passive", THRES_12: "input", DISCH_13: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:LM556";
  override referencePrefix = "U";
}

/**
 * Dual CMOS General Purpose Timer, DIP-14/SOIC-14
 *
 * KiCad symbol: `Timer:ICM7556`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, TSSOP*5.3x6.2mm*P0.65mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/icm7/icm7555-56.pdf
 * Keywords: dual timer 556.
 */
export class ICM7556 extends Component.withPins({
  "GND": "7",
  "VCC": "14",
  "DISCH_1": "1",
  "THRES_2": "2",
  "CONT_3": "3",
  "~{RST}_4": "4",
  "OUT_5": "5",
  "TRIG_6": "6",
  "TRIG_8": "8",
  "OUT_9": "9",
  "~{RST}_10": "10",
  "CONT_11": "11",
  "THRES_12": "12",
  "DISCH_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", DISCH_1: "input", THRES_2: "input", CONT_3: "passive", "~{RST}_4": "input", OUT_5: "output", TRIG_6: "input", TRIG_8: "input", OUT_9: "output", "~{RST}_10": "input", CONT_11: "passive", THRES_12: "input", DISCH_13: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:ICM7556";
  override referencePrefix = "U";
}

/**
 * Timer, 555 compatible, SOIC-8
 *
 * KiCad symbol: `Timer:LM555xM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM555xM extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:LM555xM";
  override referencePrefix = "U";
}

/**
 * Precision Timer, 555 compatible, VSSOP-8
 *
 * KiCad symbol: `Timer:LM555xMM`. Reference prefix: `U`.
 * Footprint filters: *VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class LM555xMM extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:LM555xMM";
  override referencePrefix = "U";
}

/**
 * Timer, 555 compatible, PDIP-8
 *
 * KiCad symbol: `Timer:LM555xN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class LM555xN extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:LM555xN";
  override referencePrefix = "U";
}

/**
 * CMOS Timer, 555 compatible, SOIC-8
 *
 * KiCad symbol: `Timer:LMC555xM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmc555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LMC555xM extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:LMC555xM";
  override referencePrefix = "U";
}

/**
 * CMOS Timer, 555 compatible, VSSOP-8
 *
 * KiCad symbol: `Timer:LMC555xMM`. Reference prefix: `U`.
 * Footprint filters: *VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmc555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class LMC555xMM extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:LMC555xMM";
  override referencePrefix = "U";
}

/**
 * CMOS Timer, 555 compatible, PDIP-8
 *
 * KiCad symbol: `Timer:LMC555xN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmc555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class LMC555xN extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:LMC555xN";
  override referencePrefix = "U";
}

/**
 * CMOS Timer, DSBGA-8
 *
 * KiCad symbol: `Timer:LMC555xTP`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lmc555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_BGA:Texas_DSBGA-8_1.43x1.41mm_Layout3x3_P0.5mm.
 */
export class LMC555xTP extends Component.withPins({
  "VCC": "A2",
  "GND": "A3",
  "DISCH": "A1",
  "THRES": "B1",
  "TRIG": "B3",
  "CONT": "C1",
  "~{RST}": "C2",
  "OUT": "C3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", DISCH: "input", THRES: "input", TRIG: "input", CONT: "passive", "~{RST}": "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:LMC555xTP";
  override referencePrefix = "U";
}

/**
 * Multiphase oscillator, spread spectrum frequency modulation, MSOP-10
 *
 * KiCad symbol: `Timer:LTC6902`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6902f.pdf
 * Keywords: clock generator dual triple quad signal.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class LTC6902 extends Component.withPins({
  "V+": "1",
  "DIV": "2",
  "PH": "3",
  "OUT1": "4",
  "OUT2": "5",
  "OUT3": "6",
  "OUT4": "7",
  "GND": "8",
  "MOD": "9",
  "SET": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", DIV: "input", PH: "input", OUT1: "output", OUT2: "output", OUT3: "output", OUT4: "output", GND: "power_in", MOD: "passive", SET: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6902";
  override referencePrefix = "U";
}

/**
 * Multiphase oscillator, spread spectrum frequency modulation, MSOP-16
 *
 * KiCad symbol: `Timer:LTC6909`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6909fa.pdf
 * Keywords: clock generator signal.
 * Default footprint: Package_SO:MSOP-16_3x4.039mm_P0.5mm.
 */
export class LTC6909 extends Component.withPins({
  "V+A": "1",
  "GND": "2",
  "PH0": "3",
  "PH1": "4",
  "OUT1": "5",
  "OUT2": "6",
  "OUT3": "7",
  "OUT4": "8",
  "OUT5": "9",
  "OUT6": "10",
  "OUT7": "11",
  "OUT8": "12",
  "V+D": "13",
  "MOD": "14",
  "PH2": "15",
  "SET": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+A": "power_in", GND: "power_in", PH0: "input", PH1: "input", OUT1: "tri_state", OUT2: "tri_state", OUT3: "tri_state", OUT4: "tri_state", OUT5: "tri_state", OUT6: "tri_state", OUT7: "tri_state", OUT8: "tri_state", "V+D": "power_in", MOD: "passive", PH2: "input", SET: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6909";
  override referencePrefix = "U";
}

/**
 * TimerBlox Monostable Pulse Generator (One Shot), Rising-edge input, non-retriggerable, TSOT-23-6
 *
 * KiCad symbol: `Timer:LTC6993xS6-1`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/69931234fc.pdf
 * Keywords: Timer TimerBlox monostable pulse.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LTC6993xS6_1 extends Component.withPins({
  "TRIG": "1",
  "GND": "2",
  "SET": "3",
  "DIV": "4",
  "V+": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TRIG: "input", GND: "power_in", SET: "passive", DIV: "input", "V+": "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6993xS6-1";
  override referencePrefix = "U";
}

/**
 * TimerBlox Monostable Pulse Generator (One Shot), Rising-edge input, retriggerable, TSOT-23-6
 *
 * KiCad symbol: `Timer:LTC6993xS6-2`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/69931234fc.pdf
 * Keywords: Timer TimerBlox monostable pulse.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LTC6993xS6_2 extends Component.withPins({
  "TRIG": "1",
  "GND": "2",
  "SET": "3",
  "DIV": "4",
  "V+": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TRIG: "input", GND: "power_in", SET: "passive", DIV: "input", "V+": "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6993xS6-2";
  override referencePrefix = "U";
}

/**
 * TimerBlox Monostable Pulse Generator (One Shot), Falling-edge input, non-retriggerable, TSOT-23-6
 *
 * KiCad symbol: `Timer:LTC6993xS6-3`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/69931234fc.pdf
 * Keywords: Timer TimerBlox monostable pulse.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LTC6993xS6_3 extends Component.withPins({
  "TRIG": "1",
  "GND": "2",
  "SET": "3",
  "DIV": "4",
  "V+": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TRIG: "input", GND: "power_in", SET: "passive", DIV: "input", "V+": "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6993xS6-3";
  override referencePrefix = "U";
}

/**
 * TimerBlox Monostable Pulse Generator (One Shot), Falling-edge input, retriggerable, TSOT-23-6
 *
 * KiCad symbol: `Timer:LTC6993xS6-4`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/69931234fc.pdf
 * Keywords: Timer TimerBlox monostable pulse.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LTC6993xS6_4 extends Component.withPins({
  "TRIG": "1",
  "GND": "2",
  "SET": "3",
  "DIV": "4",
  "V+": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TRIG: "input", GND: "power_in", SET: "passive", DIV: "input", "V+": "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6993xS6-4";
  override referencePrefix = "U";
}

/**
 * TimerBlox Delay Block, Programmable, Noise Discriminator, Rising or Falling Edge, DFN-6
 *
 * KiCad symbol: `Timer:LTC6994xDCB-1`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/699412fb.pdf
 * Keywords: TimerBlox delay block noise discriminator.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x2mm_P0.5mm_EP1.65x1.35mm.
 */
export class LTC6994xDCB_1 extends Component.withPins({
  "V+": "1",
  "DIV": "2",
  "SET": "3",
  "IN": "4",
  "GND": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", DIV: "input", SET: "passive", IN: "input", GND: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6994xDCB-1";
  override referencePrefix = "U";
}

/**
 * TimerBlox Debouncer, Programmable, Noise Discriminator, Rising and Falling Edges, DFN-6
 *
 * KiCad symbol: `Timer:LTC6994xDCB-2`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/699412fb.pdf
 * Keywords: TimerBlox debouncer noise discriminator.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x2mm_P0.5mm_EP1.65x1.35mm.
 */
export class LTC6994xDCB_2 extends Component.withPins({
  "V+": "1",
  "DIV": "2",
  "SET": "3",
  "IN": "4",
  "GND": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", DIV: "input", SET: "passive", IN: "input", GND: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6994xDCB-2";
  override referencePrefix = "U";
}

/**
 * TimerBlox Delay Block, Programmable, Noise Discriminator, Rising or Falling Edge, TSOT-23-6
 *
 * KiCad symbol: `Timer:LTC6994xS6-1`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/699412fb.pdf
 * Keywords: TimerBlox delay block noise discriminator.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LTC6994xS6_1 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "SET": "3",
  "DIV": "4",
  "V+": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", GND: "power_in", SET: "passive", DIV: "input", "V+": "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6994xS6-1";
  override referencePrefix = "U";
}

/**
 * TimerBlox Debouncer, Programmable, Noise Discriminator, Rising and Falling Edges, TSOT-23-6
 *
 * KiCad symbol: `Timer:LTC6994xS6-2`. Reference prefix: `U`.
 * Footprint filters: TSOT*23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/699412fb.pdf
 * Keywords: TimerBlox debouncer noise discriminator.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LTC6994xS6_2 extends Component.withPins({
  "IN": "1",
  "GND": "2",
  "SET": "3",
  "DIV": "4",
  "V+": "5",
  "OUT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", GND: "power_in", SET: "passive", DIV: "input", "V+": "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:LTC6994xS6-2";
  override referencePrefix = "U";
}

/**
 * 18V, Programmable Timer, SOIC-14
 *
 * KiCad symbol: `Timer:MC14541BD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.onsemi.com/pdf/datasheet/mc14541b-d.pdf
 * Keywords: cmos.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class MC14541BD extends Component.withPins({
  "R_{TC}": "1",
  "C_{TC}": "2",
  "R_{S}": "3",
  "NC_4": "4",
  "AR": "5",
  "MR": "6",
  "V_{SS}": "7",
  "OUTPUT/Q": "8",
  "Q/~{Q}_SELECT": "9",
  "MODE": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R_{TC}": "input", "C_{TC}": "input", "R_{S}": "input", NC_4: "no_connect", AR: "input", MR: "input", "V_{SS}": "power_in", "OUTPUT/Q": "output", "Q/~{Q}_SELECT": "input", MODE: "input", NC_11: "no_connect", A: "input", B: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:MC14541BD";
  override referencePrefix = "U";
}

/**
 * 18V, Programmable Timer, TSSOP-14
 *
 * KiCad symbol: `Timer:MC14541BDT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.onsemi.com/pdf/datasheet/mc14541b-d.pdf
 * Keywords: cmos.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MC14541BDT extends Component.withPins({
  "R_{TC}": "1",
  "C_{TC}": "2",
  "R_{S}": "3",
  "NC_4": "4",
  "AR": "5",
  "MR": "6",
  "V_{SS}": "7",
  "OUTPUT/Q": "8",
  "Q/~{Q}_SELECT": "9",
  "MODE": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R_{TC}": "input", "C_{TC}": "input", "R_{S}": "input", NC_4: "no_connect", AR: "input", MR: "input", "V_{SS}": "power_in", "OUTPUT/Q": "output", "Q/~{Q}_SELECT": "input", MODE: "input", NC_11: "no_connect", A: "input", B: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:MC14541BDT";
  override referencePrefix = "U";
}

/**
 * Timer, 555 compatible, SOIC-8
 *
 * KiCad symbol: `Timer:MC1455B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC1455-D.PDF
 * Keywords: single timer 555.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MC1455B extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:MC1455B";
  override referencePrefix = "U";
}

/**
 * Timer, 555 compatible, PDIP-8
 *
 * KiCad symbol: `Timer:MC1455P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.onsemi.com/pub/Collateral/MC1455-D.PDF
 * Keywords: single timer 555.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MC1455P extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:MC1455P";
  override referencePrefix = "U";
}

/**
 * Clock Generator Driver/Driver for MN3000 Series BBD (bucket brigade device), -8V to -16V, DIP-8
 *
 * KiCad symbol: `Timer:MN3101`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.experimentalistsanonymous.com/diy/Datasheets/MN3101.pdf
 * Keywords: Matsushita Panasonic BBD CMOS.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MN3101 extends Component.withPins({
  "GND": "1",
  "CP1": "2",
  "VDD": "3",
  "CP2": "4",
  "OX3": "5",
  "OX2": "6",
  "OX1": "7",
  "VGG_OUT": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", CP1: "output", VDD: "power_in", CP2: "output", OX3: "input", OX2: "input", OX1: "input", VGG_OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Timer:MN3101";
  override referencePrefix = "U";
}

/**
 * Clock Generator Driver/Driver for MN3000 Series BBD (bucket brigade device), 4V to 10V, DIP-8
 *
 * KiCad symbol: `Timer:MN3102`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.experimentalistsanonymous.com/diy/Datasheets/MN3102.pdf
 * Keywords: Matsushita Panasonic BBD CMOS.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class MN3102 extends Component.withPins({
  "VDD": "1",
  "CP1": "2",
  "GND": "3",
  "CP2": "4",
  "OX3": "5",
  "OX2": "6",
  "OX1": "7",
  "VGG_OUT": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CP1: "output", GND: "power_in", CP2: "output", OX3: "input", OX2: "input", OX1: "input", VGG_OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Timer:MN3102";
  override referencePrefix = "U";
}

/**
 * Precision Timers, 555 compatible, SOIC-8
 *
 * KiCad symbol: `Timer:NA555D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NA555D extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:NA555D";
  override referencePrefix = "U";
}

/**
 * Precision Timers, 555 compatible, PDIP-8
 *
 * KiCad symbol: `Timer:NA555P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NA555P extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:NA555P";
  override referencePrefix = "U";
}

/**
 * Dual Precision Timers, DIP-14/SOIC-14/SSOP-14
 *
 * KiCad symbol: `Timer:NA556`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, TSSOP*5.3x6.2mm*P0.65mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/se556.pdf
 * Keywords: dual timer.
 */
export class NA556 extends Component.withPins({
  "GND": "7",
  "VCC": "14",
  "DISCH_1": "1",
  "THRES_2": "2",
  "CONT_3": "3",
  "~{RST}_4": "4",
  "OUT_5": "5",
  "TRIG_6": "6",
  "TRIG_8": "8",
  "OUT_9": "9",
  "~{RST}_10": "10",
  "CONT_11": "11",
  "THRES_12": "12",
  "DISCH_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", DISCH_1: "input", THRES_2: "input", CONT_3: "passive", "~{RST}_4": "input", OUT_5: "output", TRIG_6: "input", TRIG_8: "input", OUT_9: "output", "~{RST}_10": "input", CONT_11: "passive", THRES_12: "input", DISCH_13: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:NA556";
  override referencePrefix = "U";
}

/**
 * Precision Timers, 555 compatible, PDIP-8
 *
 * KiCad symbol: `Timer:NE555P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class NE555P extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:NE555P";
  override referencePrefix = "U";
}

/**
 * Dual Precision Timers, DIP-14/SOIC-14
 *
 * KiCad symbol: `Timer:NE556`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, TSSOP*5.3x6.2mm*P0.65mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne556.pdf
 * Keywords: dual timer.
 */
export class NE556 extends Component.withPins({
  "GND": "7",
  "VCC": "14",
  "DISCH_1": "1",
  "THRES_2": "2",
  "CONT_3": "3",
  "~{RST}_4": "4",
  "OUT_5": "5",
  "TRIG_6": "6",
  "TRIG_8": "8",
  "OUT_9": "9",
  "~{RST}_10": "10",
  "CONT_11": "11",
  "THRES_12": "12",
  "DISCH_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", DISCH_1: "input", THRES_2: "input", CONT_3: "passive", "~{RST}_4": "input", OUT_5: "output", TRIG_6: "input", TRIG_8: "input", OUT_9: "output", "~{RST}_10": "input", CONT_11: "passive", THRES_12: "input", DISCH_13: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:NE556";
  override referencePrefix = "U";
}

/**
 * Tone Decoder/Phase-Locked Loop, DIP-8/SOIC-8
 *
 * KiCad symbol: `Timer:NE567`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm567.pdf
 * Keywords: tone decoder PLL.
 */
export class NE567 extends Component.withPins({
  "OFLT_C": "1",
  "LP_FLT_C": "2",
  "INPUT": "3",
  "VCC": "4",
  "TIM_R": "5",
  "TIM_RC": "6",
  "GND": "7",
  "OUTPUT": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OFLT_C: "output", LP_FLT_C: "output", INPUT: "input", VCC: "power_in", TIM_R: "input", TIM_RC: "input", GND: "power_in", OUTPUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:NE567";
  override referencePrefix = "U";
}

/**
 * 18V, Programmable Timer, AEC Q100, SOIC-14
 *
 * KiCad symbol: `Timer:NLV14541BD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.onsemi.com/pdf/datasheet/mc14541b-d.pdf
 * Keywords: cmos.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class NLV14541BD extends Component.withPins({
  "R_{TC}": "1",
  "C_{TC}": "2",
  "R_{S}": "3",
  "NC_4": "4",
  "AR": "5",
  "MR": "6",
  "V_{SS}": "7",
  "OUTPUT/Q": "8",
  "Q/~{Q}_SELECT": "9",
  "MODE": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R_{TC}": "input", "C_{TC}": "input", "R_{S}": "input", NC_4: "no_connect", AR: "input", MR: "input", "V_{SS}": "power_in", "OUTPUT/Q": "output", "Q/~{Q}_SELECT": "input", MODE: "input", NC_11: "no_connect", A: "input", B: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:NLV14541BD";
  override referencePrefix = "U";
}

/**
 * 18V, Programmable Timer, AEC Q100, TSSOP-14
 *
 * KiCad symbol: `Timer:NLV14541BDT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.onsemi.com/pdf/datasheet/mc14541b-d.pdf
 * Keywords: cmos.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class NLV14541BDT extends Component.withPins({
  "R_{TC}": "1",
  "C_{TC}": "2",
  "R_{S}": "3",
  "NC_4": "4",
  "AR": "5",
  "MR": "6",
  "V_{SS}": "7",
  "OUTPUT/Q": "8",
  "Q/~{Q}_SELECT": "9",
  "MODE": "10",
  "NC_11": "11",
  "A": "12",
  "B": "13",
  "V_{DD}": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "R_{TC}": "input", "C_{TC}": "input", "R_{S}": "input", NC_4: "no_connect", AR: "input", MR: "input", "V_{SS}": "power_in", "OUTPUT/Q": "output", "Q/~{Q}_SELECT": "input", MODE: "input", NC_11: "no_connect", A: "input", B: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:NLV14541BDT";
  override referencePrefix = "U";
}

/**
 * Programmable Clock, Dual Programmable Clock Outputs, Up To 200MHz, SOT-23-6
 *
 * KiCad symbol: `Timer:PL611-01-xxxT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PL611-01.pdf
 * Keywords: clock generator dual programmable.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PL611_01_xxxT extends Component.withPins({
  "CLK1": "1",
  "GND": "2",
  "XIN,FIN": "3",
  "XOUT": "4",
  "CLK2,OE,~{PDB},FSEL": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLK1: "output", GND: "power_in", "XIN,FIN": "input", XOUT: "output", "CLK2,OE,~{PDB},FSEL": "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer:PL611-01-xxxT";
  override referencePrefix = "U";
}

/**
 * Precision Timers, 555 compatible, SOIC-8
 *
 * KiCad symbol: `Timer:SA555D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SA555D extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:SA555D";
  override referencePrefix = "U";
}

/**
 * Precision Timers, 555 compatible, PDIP-8
 *
 * KiCad symbol: `Timer:SA555P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class SA555P extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:SA555P";
  override referencePrefix = "U";
}

/**
 * Dual Precision Timers, DIP-14/SOIC-14
 *
 * KiCad symbol: `Timer:SA556`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, TSSOP*5.3x6.2mm*P0.65mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne556.pdf
 * Keywords: dual timer.
 */
export class SA556 extends Component.withPins({
  "GND": "7",
  "VCC": "14",
  "DISCH_1": "1",
  "THRES_2": "2",
  "CONT_3": "3",
  "~{RST}_4": "4",
  "OUT_5": "5",
  "TRIG_6": "6",
  "TRIG_8": "8",
  "OUT_9": "9",
  "~{RST}_10": "10",
  "CONT_11": "11",
  "THRES_12": "12",
  "DISCH_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", DISCH_1: "input", THRES_2: "input", CONT_3: "passive", "~{RST}_4": "input", OUT_5: "output", TRIG_6: "input", TRIG_8: "input", OUT_9: "output", "~{RST}_10": "input", CONT_11: "passive", THRES_12: "input", DISCH_13: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:SA556";
  override referencePrefix = "U";
}

/**
 * Precision Timers, 555 compatible, SOIC-8
 *
 * KiCad symbol: `Timer:SE555D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SE555D extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:SE555D";
  override referencePrefix = "U";
}

/**
 * Precision Timers, 555 compatible, PDIP-8
 *
 * KiCad symbol: `Timer:SE555P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class SE555P extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:SE555P";
  override referencePrefix = "U";
}

/**
 * Dual Precision Timers, DIP-14/SOIC-14
 *
 * KiCad symbol: `Timer:SE556`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, TSSOP*5.3x6.2mm*P0.65mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ne556.pdf
 * Keywords: dual timer.
 */
export class SE556 extends Component.withPins({
  "GND": "7",
  "VCC": "14",
  "DISCH_1": "1",
  "THRES_2": "2",
  "CONT_3": "3",
  "~{RST}_4": "4",
  "OUT_5": "5",
  "TRIG_6": "6",
  "TRIG_8": "8",
  "OUT_9": "9",
  "~{RST}_10": "10",
  "CONT_11": "11",
  "THRES_12": "12",
  "DISCH_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", DISCH_1: "input", THRES_2: "input", CONT_3: "passive", "~{RST}_4": "input", OUT_5: "output", TRIG_6: "input", TRIG_8: "input", OUT_9: "output", "~{RST}_10": "input", CONT_11: "passive", THRES_12: "input", DISCH_13: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:SE556";
  override referencePrefix = "U";
}

/**
 * Tone Decoder/Phase-Locked Loop, DIP-8/SOIC-8
 *
 * KiCad symbol: `Timer:SE567`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm567.pdf
 * Keywords: tone decoder PLL.
 */
export class SE567 extends Component.withPins({
  "OFLT_C": "1",
  "LP_FLT_C": "2",
  "INPUT": "3",
  "VCC": "4",
  "TIM_R": "5",
  "TIM_RC": "6",
  "GND": "7",
  "OUTPUT": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OFLT_C: "output", LP_FLT_C: "output", INPUT: "input", VCC: "power_in", TIM_R: "input", TIM_RC: "input", GND: "power_in", OUTPUT: "output", ...opts.pinTypes } });
  }
  override schema = "Timer:SE567";
  override referencePrefix = "U";
}

/**
 * 1:8 CML Fanout Buffer 75fsRMS, QFN-32
 *
 * KiCad symbol: `Timer:SY58031U`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/sy58031u.pdf
 * Keywords: CML 2.5V/3.3V differential LVPECL LVDS.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm_ThermalVias.
 */
export class SY58031U extends Component.withPins({
  "VCC_1": "1",
  "GND_2": "2",
  "IN": "3",
  "VT": "4",
  "VREF-AC": "5",
  "~{IN}": "6",
  "GND_7": "7",
  "VCC_8": "8",
  "VCC_9": "9",
  "~{Q7}": "10",
  "Q7": "11",
  "~{Q6}": "12",
  "Q6": "13",
  "~{Q5}": "14",
  "Q5": "15",
  "VCC_16": "16",
  "GND_17": "17",
  "VCC_18": "18",
  "~{Q4}": "19",
  "Q4": "20",
  "~{Q3}": "21",
  "Q3": "22",
  "VCC_23": "23",
  "GND_24": "24",
  "VCC_25": "25",
  "~{Q2}": "26",
  "Q2": "27",
  "~{Q1}": "28",
  "Q1": "29",
  "~{Q0}": "30",
  "Q0": "31",
  "VCC_32": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC_1: "power_in", GND_2: "power_in", IN: "input", VT: "passive", "VREF-AC": "passive", "~{IN}": "input", GND_7: "passive", VCC_8: "power_in", VCC_9: "power_in", "~{Q7}": "output", Q7: "output", "~{Q6}": "output", Q6: "output", "~{Q5}": "output", Q5: "output", VCC_16: "power_in", GND_17: "passive", VCC_18: "power_in", "~{Q4}": "output", Q4: "output", "~{Q3}": "output", Q3: "output", VCC_23: "power_in", GND_24: "passive", VCC_25: "power_in", "~{Q2}": "output", Q2: "output", "~{Q1}": "output", Q1: "output", "~{Q0}": "output", Q0: "output", VCC_32: "power_in", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer:SY58031U";
  override referencePrefix = "U";
}

/**
 * 1:8 LVPECL Fanout Buffer 75fsRMS, QFN-32
 *
 * KiCad symbol: `Timer:SY58032U`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/sy58032u.pdf
 * Keywords: 2.5V/3.3V differential LVPECL LVDS.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm_ThermalVias.
 */
export class SY58032U extends Component.withPins({
  "VCC_1": "1",
  "GND_2": "2",
  "IN": "3",
  "VT": "4",
  "VREF-AC": "5",
  "~{IN}": "6",
  "GND_7": "7",
  "VCC_8": "8",
  "VCC_9": "9",
  "~{Q7}": "10",
  "Q7": "11",
  "~{Q6}": "12",
  "Q6": "13",
  "~{Q5}": "14",
  "Q5": "15",
  "VCC_16": "16",
  "GND_17": "17",
  "VCC_18": "18",
  "~{Q4}": "19",
  "Q4": "20",
  "~{Q3}": "21",
  "Q3": "22",
  "VCC_23": "23",
  "GND_24": "24",
  "VCC_25": "25",
  "~{Q2}": "26",
  "Q2": "27",
  "~{Q1}": "28",
  "Q1": "29",
  "~{Q0}": "30",
  "Q0": "31",
  "VCC_32": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC_1: "power_in", GND_2: "power_in", IN: "input", VT: "passive", "VREF-AC": "passive", "~{IN}": "input", GND_7: "passive", VCC_8: "power_in", VCC_9: "power_in", "~{Q7}": "open_emitter", Q7: "open_emitter", "~{Q6}": "open_emitter", Q6: "open_emitter", "~{Q5}": "open_emitter", Q5: "open_emitter", VCC_16: "power_in", GND_17: "passive", VCC_18: "power_in", "~{Q4}": "open_emitter", Q4: "open_emitter", "~{Q3}": "open_emitter", Q3: "open_emitter", VCC_23: "power_in", GND_24: "passive", VCC_25: "power_in", "~{Q2}": "open_emitter", Q2: "open_emitter", "~{Q1}": "open_emitter", Q1: "open_emitter", "~{Q0}": "open_emitter", Q0: "open_emitter", VCC_32: "power_in", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer:SY58032U";
  override referencePrefix = "U";
}

/**
 * 1:8 400mV LVPECL Fanout Buffer 75fsRMS, QFN-32
 *
 * KiCad symbol: `Timer:SY58033U`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/sy58033u.pdf
 * Keywords: 2.5V/3.3V differential LVPECL LVDS.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm_ThermalVias.
 */
export class SY58033U extends Component.withPins({
  "VCC_1": "1",
  "GND_2": "2",
  "IN": "3",
  "VT": "4",
  "VREF-AC": "5",
  "~{IN}": "6",
  "GND_7": "7",
  "VCC_8": "8",
  "VCC_9": "9",
  "~{Q7}": "10",
  "Q7": "11",
  "~{Q6}": "12",
  "Q6": "13",
  "~{Q5}": "14",
  "Q5": "15",
  "VCC_16": "16",
  "GND_17": "17",
  "VCC_18": "18",
  "~{Q4}": "19",
  "Q4": "20",
  "~{Q3}": "21",
  "Q3": "22",
  "VCC_23": "23",
  "GND_24": "24",
  "VCC_25": "25",
  "~{Q2}": "26",
  "Q2": "27",
  "~{Q1}": "28",
  "Q1": "29",
  "~{Q0}": "30",
  "Q0": "31",
  "VCC_32": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC_1: "power_in", GND_2: "power_in", IN: "input", VT: "passive", "VREF-AC": "passive", "~{IN}": "input", GND_7: "passive", VCC_8: "power_in", VCC_9: "power_in", "~{Q7}": "open_emitter", Q7: "open_emitter", "~{Q6}": "open_emitter", Q6: "open_emitter", "~{Q5}": "open_emitter", Q5: "open_emitter", VCC_16: "power_in", GND_17: "passive", VCC_18: "power_in", "~{Q4}": "open_emitter", Q4: "open_emitter", "~{Q3}": "open_emitter", Q3: "open_emitter", VCC_23: "power_in", GND_24: "passive", VCC_25: "power_in", "~{Q2}": "open_emitter", Q2: "open_emitter", "~{Q1}": "open_emitter", Q1: "open_emitter", "~{Q0}": "open_emitter", Q0: "open_emitter", VCC_32: "power_in", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer:SY58033U";
  override referencePrefix = "U";
}

/**
 * Single LinCMOS Timer, 555 compatible, SOIC-8
 *
 * KiCad symbol: `Timer:TLC555xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TLC555xD extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:TLC555xD";
  override referencePrefix = "U";
}

/**
 * Single LinCMOS Timer, 555 compatible, PDIP-8
 *
 * KiCad symbol: `Timer:TLC555xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class TLC555xP extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:TLC555xP";
  override referencePrefix = "U";
}

/**
 * Single LinCMOS Timer, 555 compatible, VSSOP-8
 *
 * KiCad symbol: `Timer:TLC555xPS`. Reference prefix: `U`.
 * Footprint filters: *VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class TLC555xPS extends Component.withPins({
  "GND": "1",
  "VCC": "8",
  "TRIG": "2",
  "OUT": "3",
  "~{RST}": "4",
  "CONT": "5",
  "THRES": "6",
  "DISCH": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", TRIG: "input", OUT: "output", "~{RST}": "input", CONT: "passive", THRES: "input", DISCH: "input", ...opts.pinTypes } });
  }
  override schema = "Timer:TLC555xPS";
  override referencePrefix = "U";
}

/**
 * Single LinCMOS Timer, TSSOP-14
 *
 * KiCad symbol: `Timer:TLC555xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc555.pdf
 * Keywords: single timer 555.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class TLC555xPW extends Component.withPins({
  "GND": "1",
  "VDD": "14",
  "NC_2": "2",
  "TRIG": "3",
  "NC_4": "4",
  "OUT": "5",
  "NC_6": "6",
  "~{RST}": "7",
  "CONT": "8",
  "NC_9": "9",
  "THRES": "10",
  "NC_11": "11",
  "DISCH": "12",
  "NC_13": "13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", NC_2: "no_connect", TRIG: "input", NC_4: "no_connect", OUT: "output", NC_6: "no_connect", "~{RST}": "input", CONT: "passive", NC_9: "no_connect", THRES: "input", NC_11: "no_connect", DISCH: "input", NC_13: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Timer:TLC555xPW";
  override referencePrefix = "U";
}

/**
 * Timer, Nano Power, Watchdog, 35 nA, 100 ms to 7200 s, VDD 1.8V to 5.5V, Iout max 1mA
 *
 * KiCad symbol: `Timer:TPL5010`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tpl5010.pdf
 * Keywords: timer watchdog nano wake done.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPL5010 extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "DELAY/M_RST": "3",
  "DONE": "4",
  "WAKE": "5",
  "~{RST}": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", "DELAY/M_RST": "input", DONE: "input", WAKE: "output", "~{RST}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Timer:TPL5010";
  override referencePrefix = "U";
}

/**
 * Timer, Nano Power, Active-Low, 35 nA, 100 ms to 7200 s, VDD 1.8V to 5.5V, Iout max 1mA, SOT-23-6
 *
 * KiCad symbol: `Timer:TPL5110`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tpl5110.pdf
 * Keywords: timer active-low nano wake done.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPL5110 extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "DELAY/M_DRV": "3",
  "DONE": "4",
  "DRV": "5",
  "EN/ONE_SHOT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", "DELAY/M_DRV": "input", DONE: "input", DRV: "output", "EN/ONE_SHOT": "input", ...opts.pinTypes } });
  }
  override schema = "Timer:TPL5110";
  override referencePrefix = "U";
}

/**
 * Timer, Nano Power, Active-High, 35 nA, 100 ms to 7200 s, VDD 1.8V to 5.5V, Iout max 1mA, SOT-23-6
 *
 * KiCad symbol: `Timer:TPL5111`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/tpl5111.pdf
 * Keywords: timer active-high nano wake done.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPL5111 extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "DELAY/M_DRV": "3",
  "DONE": "4",
  "~{DRV}": "5",
  "EN/ONE_SHOT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", "DELAY/M_DRV": "input", DONE: "input", "~{DRV}": "output", "EN/ONE_SHOT": "input", ...opts.pinTypes } });
  }
  override schema = "Timer:TPL5111";
  override referencePrefix = "U";
}
