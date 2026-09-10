// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * quad 2-input NAND gate
 *
 * KiCad symbol: `74xx:74LS00`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SO14*.
 * @see http://www.ti.com/lit/gpn/sn74ls00
 * Keywords: TTL nand 2-input.
 */
export class _74LS00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS00";
  override referencePrefix = "U";
}

/**
 * quad 2-input NAND gate
 *
 * KiCad symbol: `74xx:7400`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SO14*.
 * @see http://www.ti.com/lit/gpn/sn7400
 * Keywords: TTL nand 2-input.
 */
export class _7400 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:7400";
  override referencePrefix = "U";
}

/**
 * quad 2-input NOR gate
 *
 * KiCad symbol: `74xx:74LS02`. Reference prefix: `U`.
 * Footprint filters: SO14*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74ls02
 * Keywords: TTL Nor2.
 */
export class _74LS02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", P2: "input", P3: "input", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "input", P12: "input", P13: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS02";
  override referencePrefix = "U";
}

/**
 * quad 2-input NOR gate
 *
 * KiCad symbol: `74xx:7402`. Reference prefix: `U`.
 * Footprint filters: SO14*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn7402
 * Keywords: TTL Nor2.
 */
export class _7402 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", P2: "input", P3: "input", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "input", P12: "input", P13: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:7402";
  override referencePrefix = "U";
}

/**
 * 8-bit synchronous up/down counter, parallel load and hold capability (obsolete)
 *
 * KiCad symbol: `74xx:74469`. Reference prefix: `U`.
 * Footprint filters: DIP?24*.
 * @see http://www.ti.com/lit/gpn/sn74469
 * Keywords: counter.
 */
export class _74469 extends Component.withPins({
  "CLK": "1",
  "LD": "2",
  "D0": "3",
  "D1": "4",
  "D2": "5",
  "D3": "6",
  "D4": "7",
  "D5": "8",
  "D6": "9",
  "D7": "10",
  "UD": "11",
  "GND": "12",
  "OE": "13",
  "CBO": "14",
  "Q7": "15",
  "Q6": "16",
  "Q5": "17",
  "Q4": "18",
  "Q3": "19",
  "Q2": "20",
  "Q1": "21",
  "Q0": "22",
  "CBI": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLK: "input", LD: "input", D0: "input", D1: "input", D2: "input", D3: "input", D4: "input", D5: "input", D6: "input", D7: "input", UD: "input", GND: "power_in", OE: "input", CBO: "output", Q7: "tri_state", Q6: "tri_state", Q5: "tri_state", Q4: "tri_state", Q3: "tri_state", Q2: "tri_state", Q1: "tri_state", Q0: "tri_state", CBI: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74469";
  override referencePrefix = "U";
}

/**
 * And-Nor (Y = /(AB + CD + EF + GH) ), DIP-14
 *
 * KiCad symbol: `74xx:7454`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn54ls54.pdf
 * Keywords: TTL ANDNOR.
 */
export class _7454 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P9": "9",
  "P10": "10",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "input", P4: "input", P5: "input", P6: "output", P9: "input", P10: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:7454";
  override referencePrefix = "U";
}

/**
 * Hex Inverter
 *
 * KiCad symbol: `74xx:74LS04`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SSOP?14*, TSSOP?14*.
 * @see http://www.ti.com/lit/gpn/sn74LS04
 * Keywords: TTL not inv.
 */
export class _74LS04 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS04";
  override referencePrefix = "U";
}

/**
 * Hex Inverter
 *
 * KiCad symbol: `74xx:74AHC04`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SSOP?14*, TSSOP?14*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT04.pdf
 * Keywords: AHCMOS not inv.
 */
export class _74AHC04 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHC04";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state Inverting
 *
 * KiCad symbol: `74xx:74HC240`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x12.8mm*P1.27mm*, TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT240.pdf
 * Keywords: HCMOS BUFFER 3State inv.
 */
export class _74HC240 extends Component.withPins({
  "1OE": "1",
  "1A0": "2",
  "2Y0": "3",
  "1A1": "4",
  "2Y1": "5",
  "1A2": "6",
  "2Y2": "7",
  "1A3": "8",
  "2Y3": "9",
  "GND": "10",
  "2A3": "11",
  "1Y3": "12",
  "2A2": "13",
  "1Y2": "14",
  "2A1": "15",
  "1Y1": "16",
  "2A0": "17",
  "1Y0": "18",
  "2OE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1OE": "input", "1A0": "input", "2Y0": "tri_state", "1A1": "input", "2Y1": "tri_state", "1A2": "input", "2Y2": "tri_state", "1A3": "input", "2Y3": "tri_state", GND: "power_in", "2A3": "input", "1Y3": "tri_state", "2A2": "input", "1Y2": "tri_state", "2A1": "input", "1Y1": "tri_state", "2A0": "input", "1Y0": "tri_state", "2OE": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC240";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state Inverting
 *
 * KiCad symbol: `74xx:74AHC240`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x12.8mm*P1.27mm*, TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn54ahc240.pdf
 * Keywords: AHCMOS BUFFER 3State inv.
 */
export class _74AHC240 extends Component.withPins({
  "1OE": "1",
  "1A0": "2",
  "2Y0": "3",
  "1A1": "4",
  "2Y1": "5",
  "1A2": "6",
  "2Y2": "7",
  "1A3": "8",
  "2Y3": "9",
  "GND": "10",
  "2A3": "11",
  "1Y3": "12",
  "2A2": "13",
  "1Y2": "14",
  "2A1": "15",
  "1Y1": "16",
  "2A0": "17",
  "1Y0": "18",
  "2OE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1OE": "input", "1A0": "input", "2Y0": "tri_state", "1A1": "input", "2Y1": "tri_state", "1A2": "input", "2Y2": "tri_state", "1A3": "input", "2Y3": "tri_state", GND: "power_in", "2A3": "input", "1Y3": "tri_state", "2A2": "input", "1Y2": "tri_state", "2A1": "input", "1Y1": "tri_state", "2A0": "input", "1Y0": "tri_state", "2OE": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHC240";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state
 *
 * KiCad symbol: `74xx:74HC244`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT244.pdf
 * Keywords: HCMOS BUFFER 3State.
 */
export class _74HC244 extends Component.withPins({
  "1OE": "1",
  "1A0": "2",
  "2Y0": "3",
  "1A1": "4",
  "2Y1": "5",
  "1A2": "6",
  "2Y2": "7",
  "1A3": "8",
  "2Y3": "9",
  "GND": "10",
  "2A3": "11",
  "1Y3": "12",
  "2A2": "13",
  "1Y2": "14",
  "2A1": "15",
  "1Y1": "16",
  "2A0": "17",
  "1Y0": "18",
  "2OE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1OE": "input", "1A0": "input", "2Y0": "tri_state", "1A1": "input", "2Y1": "tri_state", "1A2": "input", "2Y2": "tri_state", "1A3": "input", "2Y3": "tri_state", GND: "power_in", "2A3": "input", "1Y3": "tri_state", "2A2": "input", "1Y2": "tri_state", "2A1": "input", "1Y1": "tri_state", "2A0": "input", "1Y0": "tri_state", "2OE": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC244";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state
 *
 * KiCad symbol: `74xx:74AHC244`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT244.pdf
 * Keywords: AHCMOS BUFFER 3State.
 */
export class _74AHC244 extends Component.withPins({
  "1OE": "1",
  "1A0": "2",
  "2Y0": "3",
  "1A1": "4",
  "2Y1": "5",
  "1A2": "6",
  "2Y2": "7",
  "1A3": "8",
  "2Y3": "9",
  "GND": "10",
  "2A3": "11",
  "1Y3": "12",
  "2A2": "13",
  "1Y2": "14",
  "2A1": "15",
  "1Y1": "16",
  "2A0": "17",
  "1Y0": "18",
  "2OE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1OE": "input", "1A0": "input", "2Y0": "tri_state", "1A1": "input", "2Y1": "tri_state", "1A2": "input", "2Y2": "tri_state", "1A3": "input", "2Y3": "tri_state", GND: "power_in", "2A3": "input", "1Y3": "tri_state", "2A2": "input", "1Y2": "tri_state", "2A1": "input", "1Y1": "tri_state", "2A0": "input", "1Y0": "tri_state", "2OE": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHC244";
  override referencePrefix = "U";
}

/**
 * 8-bit D Flip-Flop, reset
 *
 * KiCad symbol: `74xx:74LS273`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SO?20*, SOIC?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS273
 * Keywords: TTL DFF DFF8.
 */
export class _74LS273 extends Component.withPins({
  "~{Mr}": "1",
  "Q0": "2",
  "D0": "3",
  "D1": "4",
  "Q1": "5",
  "Q2": "6",
  "D2": "7",
  "D3": "8",
  "Q3": "9",
  "GND": "10",
  "Cp": "11",
  "Q4": "12",
  "D4": "13",
  "D5": "14",
  "Q5": "15",
  "Q6": "16",
  "D6": "17",
  "D7": "18",
  "Q7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{Mr}": "input", Q0: "output", D0: "input", D1: "input", Q1: "output", Q2: "output", D2: "input", D3: "input", Q3: "output", GND: "power_in", Cp: "input", Q4: "output", D4: "input", D5: "input", Q5: "output", Q6: "output", D6: "input", D7: "input", Q7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS273";
  override referencePrefix = "U";
}

/**
 * 8-bit D Flip-Flop, reset
 *
 * KiCad symbol: `74xx:74AHC273`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SO?20*, SOIC?20*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT273.pdf
 * Keywords: AHCMOS DFF DFF8.
 */
export class _74AHC273 extends Component.withPins({
  "~{Mr}": "1",
  "Q0": "2",
  "D0": "3",
  "D1": "4",
  "Q1": "5",
  "Q2": "6",
  "D2": "7",
  "D3": "8",
  "Q3": "9",
  "GND": "10",
  "Cp": "11",
  "Q4": "12",
  "D4": "13",
  "D5": "14",
  "Q5": "15",
  "Q6": "16",
  "D6": "17",
  "D7": "18",
  "Q7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{Mr}": "input", Q0: "output", D0: "input", D1: "input", Q1: "output", Q2: "output", D2: "input", D3: "input", Q3: "output", GND: "power_in", Cp: "input", Q4: "output", D4: "input", D5: "input", Q5: "output", Q6: "output", D6: "input", D7: "input", Q7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHC273";
  override referencePrefix = "U";
}

/**
 * 8-bit Latch, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS373`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*, SSOP?20*, TSSOP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS373
 * Keywords: TTL REG DFF DFF8 LATCH.
 */
export class _74LS373 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "LE": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", LE: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS373";
  override referencePrefix = "U";
}

/**
 * 8-bit Latch, 3-state outputs
 *
 * KiCad symbol: `74xx:74AHC373`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*, SSOP?20*, TSSOP?20*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC373.pdf
 * Keywords: AHCMOS REG DFF DFF8 LATCH.
 */
export class _74AHC373 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "LE": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", LE: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHC373";
  override referencePrefix = "U";
}

/**
 * 8-bit Register, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS374`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS374
 * Keywords: TTL DFF DFF8 REG 3State.
 */
export class _74LS374 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "Cp": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", Cp: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS374";
  override referencePrefix = "U";
}

/**
 * 8-bit Register, 3-state outputs
 *
 * KiCad symbol: `74xx:74AHC374`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT374.pdf
 * Keywords: AHCMOS DFF DFF8 REG 3State.
 */
export class _74AHC374 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "Cp": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", Cp: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHC374";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state outputs
 *
 * KiCad symbol: `74xx:74LS541`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS541
 * Keywords: TTL BUFFER 3State BUS.
 */
export class _74LS541 extends Component.withPins({
  "G1": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "GND": "10",
  "Y7": "11",
  "Y6": "12",
  "Y5": "13",
  "Y4": "14",
  "Y3": "15",
  "Y2": "16",
  "Y1": "17",
  "Y0": "18",
  "G2": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", A5: "input", A6: "input", A7: "input", GND: "power_in", Y7: "tri_state", Y6: "tri_state", Y5: "tri_state", Y4: "tri_state", Y3: "tri_state", Y2: "tri_state", Y1: "tri_state", Y0: "tri_state", G2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS541";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state outputs
 *
 * KiCad symbol: `74xx:74AHC541`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC*7.5x12.8mm*P1.27mm*, TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74ahc541.pdf
 * Keywords: TTL BUFFER 3State BUS.
 */
export class _74AHC541 extends Component.withPins({
  "G1": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "GND": "10",
  "Y7": "11",
  "Y6": "12",
  "Y5": "13",
  "Y4": "14",
  "Y3": "15",
  "Y2": "16",
  "Y1": "17",
  "Y0": "18",
  "G2": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", A5: "input", A6: "input", A7: "input", GND: "power_in", Y7: "tri_state", Y6: "tri_state", Y5: "tri_state", Y4: "tri_state", Y3: "tri_state", Y2: "tri_state", Y1: "tri_state", Y0: "tri_state", G2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHC541";
  override referencePrefix = "U";
}

/**
 * 8-bit serial in/out Shift Register 3-State Outputs
 *
 * KiCad symbol: `74xx:74HC595`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74hc595.pdf
 * Keywords: HCMOS SR 3State.
 */
export class _74HC595 extends Component.withPins({
  "QB": "1",
  "QC": "2",
  "QD": "3",
  "QE": "4",
  "QF": "5",
  "QG": "6",
  "QH": "7",
  "GND": "8",
  "QH'": "9",
  "~{SRCLR}": "10",
  "SRCLK": "11",
  "RCLK": "12",
  "~{OE}": "13",
  "SER": "14",
  "QA": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QB: "tri_state", QC: "tri_state", QD: "tri_state", QE: "tri_state", QF: "tri_state", QG: "tri_state", QH: "tri_state", GND: "power_in", "QH'": "output", "~{SRCLR}": "input", SRCLK: "input", RCLK: "input", "~{OE}": "input", SER: "input", QA: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC595";
  override referencePrefix = "U";
}

/**
 * 8-bit serial in/out Shift Register 3-State Outputs
 *
 * KiCad symbol: `74xx:74AHC595`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT595.pdf
 * Keywords: AHCMOS SR 3State.
 */
export class _74AHC595 extends Component.withPins({
  "QB": "1",
  "QC": "2",
  "QD": "3",
  "QE": "4",
  "QF": "5",
  "QG": "6",
  "QH": "7",
  "GND": "8",
  "QH'": "9",
  "~{SRCLR}": "10",
  "SRCLK": "11",
  "RCLK": "12",
  "~{OE}": "13",
  "SER": "14",
  "QA": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QB: "tri_state", QC: "tri_state", QD: "tri_state", QE: "tri_state", QF: "tri_state", QG: "tri_state", QH: "tri_state", GND: "power_in", "QH'": "output", "~{SRCLR}": "input", SRCLK: "input", RCLK: "input", "~{OE}": "input", SER: "input", QA: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHC595";
  override referencePrefix = "U";
}

/**
 * Hex Inverter
 *
 * KiCad symbol: `74xx:74AHCT04`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SSOP?14*, TSSOP?14*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT04.pdf
 * Keywords: AHCTMOS not inv.
 */
export class _74AHCT04 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT04";
  override referencePrefix = "U";
}

/**
 * Dual retriggerable Monostable
 *
 * KiCad symbol: `74xx:74LS123`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS123
 * Keywords: TTL monostable.
 */
export class _74LS123 extends Component.withPins({
  "A_1": "1",
  "B_2": "2",
  "Clr_3": "3",
  "~{Q}_4": "4",
  "Q_13": "13",
  "Cext_14": "14",
  "RCext_15": "15",
  "Q_5": "5",
  "Cext_6": "6",
  "RCext_7": "7",
  "A_9": "9",
  "B_10": "10",
  "Clr_11": "11",
  "~{Q}_12": "12",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "input", B_2: "input", Clr_3: "input", "~{Q}_4": "output", Q_13: "output", Cext_14: "input", RCext_15: "input", Q_5: "output", Cext_6: "input", RCext_7: "input", A_9: "input", B_10: "input", Clr_11: "input", "~{Q}_12": "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS123";
  override referencePrefix = "U";
}

/**
 * Dual retriggerable monostable multivibrator
 *
 * KiCad symbol: `74xx:74AHCT123`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74ahct123a
 * Keywords: TTL monostable, multivibrator.
 */
export class _74AHCT123 extends Component.withPins({
  "A_1": "1",
  "B_2": "2",
  "Clr_3": "3",
  "~{Q}_4": "4",
  "Q_13": "13",
  "Cext_14": "14",
  "RCext_15": "15",
  "Q_5": "5",
  "Cext_6": "6",
  "RCext_7": "7",
  "A_9": "9",
  "B_10": "10",
  "Clr_11": "11",
  "~{Q}_12": "12",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "input", B_2: "input", Clr_3: "input", "~{Q}_4": "output", Q_13: "output", Cext_14: "input", RCext_15: "input", Q_5: "output", Cext_6: "input", RCext_7: "input", A_9: "input", B_10: "input", Clr_11: "input", "~{Q}_12": "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT123";
  override referencePrefix = "U";
}

/**
 * Quad buffer 3-State outputs
 *
 * KiCad symbol: `74xx:74LS125`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS125
 * Keywords: TTL buffer 3State.
 */
export class _74LS125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "tri_state", P4: "input", P5: "input", P6: "tri_state", P8: "tri_state", P9: "input", P10: "input", P11: "tri_state", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS125";
  override referencePrefix = "U";
}

/**
 * Quadruple Bus Buffer Gates With 3-State Outputs
 *
 * KiCad symbol: `74xx:74AHCT125`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SO14*, SSOP?14*, TSSOP?14*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74ahct125.pdf
 * Keywords: buffer 3State.
 */
export class _74AHCT125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "tri_state", P4: "input", P5: "input", P6: "tri_state", P8: "tri_state", P9: "input", P10: "input", P11: "tri_state", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT125";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state Inverting
 *
 * KiCad symbol: `74xx:74AHCT240`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x12.8mm*P1.27mm*, TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHCT240.pdf
 * Keywords: AHCTMOS BUFFER 3State inv.
 */
export class _74AHCT240 extends Component.withPins({
  "1OE": "1",
  "1A0": "2",
  "2Y0": "3",
  "1A1": "4",
  "2Y1": "5",
  "1A2": "6",
  "2Y2": "7",
  "1A3": "8",
  "2Y3": "9",
  "GND": "10",
  "2A3": "11",
  "1Y3": "12",
  "2A2": "13",
  "1Y2": "14",
  "2A1": "15",
  "1Y1": "16",
  "2A0": "17",
  "1Y0": "18",
  "2OE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1OE": "input", "1A0": "input", "2Y0": "tri_state", "1A1": "input", "2Y1": "tri_state", "1A2": "input", "2Y2": "tri_state", "1A3": "input", "2Y3": "tri_state", GND: "power_in", "2A3": "input", "1Y3": "tri_state", "2A2": "input", "1Y2": "tri_state", "2A1": "input", "1Y1": "tri_state", "2A0": "input", "1Y0": "tri_state", "2OE": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT240";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state
 *
 * KiCad symbol: `74xx:74AHCT244`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT244.pdf
 * Keywords: AHCTMOS BUFFER 3State.
 */
export class _74AHCT244 extends Component.withPins({
  "1OE": "1",
  "1A0": "2",
  "2Y0": "3",
  "1A1": "4",
  "2Y1": "5",
  "1A2": "6",
  "2Y2": "7",
  "1A3": "8",
  "2Y3": "9",
  "GND": "10",
  "2A3": "11",
  "1Y3": "12",
  "2A2": "13",
  "1Y2": "14",
  "2A1": "15",
  "1Y1": "16",
  "2A0": "17",
  "1Y0": "18",
  "2OE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1OE": "input", "1A0": "input", "2Y0": "tri_state", "1A1": "input", "2Y1": "tri_state", "1A2": "input", "2Y2": "tri_state", "1A3": "input", "2Y3": "tri_state", GND: "power_in", "2A3": "input", "1Y3": "tri_state", "2A2": "input", "1Y2": "tri_state", "2A1": "input", "1Y1": "tri_state", "2A0": "input", "1Y0": "tri_state", "2OE": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT244";
  override referencePrefix = "U";
}

/**
 * 8-bit D Flip-Flop, reset
 *
 * KiCad symbol: `74xx:74AHCT273`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SO?20*, SOIC?20*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT273.pdf
 * Keywords: AHCTMOS DFF DFF8.
 */
export class _74AHCT273 extends Component.withPins({
  "~{Mr}": "1",
  "Q0": "2",
  "D0": "3",
  "D1": "4",
  "Q1": "5",
  "Q2": "6",
  "D2": "7",
  "D3": "8",
  "Q3": "9",
  "GND": "10",
  "Cp": "11",
  "Q4": "12",
  "D4": "13",
  "D5": "14",
  "Q5": "15",
  "Q6": "16",
  "D6": "17",
  "D7": "18",
  "Q7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{Mr}": "input", Q0: "output", D0: "input", D1: "input", Q1: "output", Q2: "output", D2: "input", D3: "input", Q3: "output", GND: "power_in", Cp: "input", Q4: "output", D4: "input", D5: "input", Q5: "output", Q6: "output", D6: "input", D7: "input", Q7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT273";
  override referencePrefix = "U";
}

/**
 * 8-bit Latch, 3-state outputs
 *
 * KiCad symbol: `74xx:74AHCT373`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*, SSOP?20*, TSSOP?20*.
 * @see https://www.ti.com/lit/ds/symlink/sn74ahct373.pdf
 * Keywords: AHCTMOS REG DFF DFF8 LATCH.
 */
export class _74AHCT373 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "LE": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", LE: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT373";
  override referencePrefix = "U";
}

/**
 * 8-bit Register, 3-state outputs
 *
 * KiCad symbol: `74xx:74AHCT374`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT374.pdf
 * Keywords: AHCTMOS DFF DFF8 REG 3State.
 */
export class _74AHCT374 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "Cp": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", Cp: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT374";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state outputs
 *
 * KiCad symbol: `74xx:74AHCT541`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC*7.5x12.8mm*P1.27mm*, TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74ahct541.pdf
 * Keywords: TTL BUFFER 3State BUS.
 */
export class _74AHCT541 extends Component.withPins({
  "G1": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "GND": "10",
  "Y7": "11",
  "Y6": "12",
  "Y5": "13",
  "Y4": "14",
  "Y3": "15",
  "Y2": "16",
  "Y1": "17",
  "Y0": "18",
  "G2": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", A5: "input", A6: "input", A7: "input", GND: "power_in", Y7: "tri_state", Y6: "tri_state", Y5: "tri_state", Y4: "tri_state", Y3: "tri_state", Y2: "tri_state", Y1: "tri_state", Y0: "tri_state", G2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT541";
  override referencePrefix = "U";
}

/**
 * 8-bit serial in/out Shift Register 3-State Outputs
 *
 * KiCad symbol: `74xx:74AHCT595`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT595.pdf
 * Keywords: AHCTMOS SR 3State.
 */
export class _74AHCT595 extends Component.withPins({
  "QB": "1",
  "QC": "2",
  "QD": "3",
  "QE": "4",
  "QF": "5",
  "QG": "6",
  "QH": "7",
  "GND": "8",
  "QH'": "9",
  "~{SRCLR}": "10",
  "SRCLK": "11",
  "RCLK": "12",
  "~{OE}": "13",
  "SER": "14",
  "QA": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QB: "tri_state", QC: "tri_state", QD: "tri_state", QE: "tri_state", QF: "tri_state", QG: "tri_state", QH: "tri_state", GND: "power_in", "QH'": "output", "~{SRCLR}": "input", SRCLK: "input", RCLK: "input", "~{OE}": "input", SER: "input", QA: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCT595";
  override referencePrefix = "U";
}

/**
 * 6-gate schmitt trigger buffer, TSSOP-14
 *
 * KiCad symbol: `74xx:74AHCV17APW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHCV17A.pdf
 * Keywords: Buf LVC CMOS.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class _74AHCV17APW extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74AHCV17APW";
  override referencePrefix = "U";
}

/**
 * 16-Bit 2.5V to 3.3V or 3.3V to 5V Level-Shifting Transceiver With 3-State Outputs, TSSOP-48
 *
 * KiCad symbol: `74xx:74ALVC164245`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74ALVC164245.pdf
 * Keywords: transceiver.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 */
export class _74ALVC164245 extends Component.withPins({
  "1DIR": "1",
  "1B0": "2",
  "1B1": "3",
  "GND_4": "4",
  "1B2": "5",
  "1B3": "6",
  "V_{CC(B)}_7": "7",
  "1B4": "8",
  "1B5": "9",
  "GND_10": "10",
  "1B6": "11",
  "1B7": "12",
  "2B0": "13",
  "2B1": "14",
  "GND_15": "15",
  "2B2": "16",
  "2B3": "17",
  "V_{CC(B)}_18": "18",
  "2B4": "19",
  "2B5": "20",
  "GND_21": "21",
  "2B6": "22",
  "2B7": "23",
  "2DIR": "24",
  "2~{OE}": "25",
  "2A7": "26",
  "2A6": "27",
  "GND_28": "28",
  "2A5": "29",
  "2A4": "30",
  "V_{CC(A)}_31": "31",
  "2A3": "32",
  "2A2": "33",
  "GND_34": "34",
  "2A1": "35",
  "2A0": "36",
  "1A7": "37",
  "1A6": "38",
  "GND_39": "39",
  "1A5": "40",
  "1A4": "41",
  "V_{CC(A)}_42": "42",
  "1A3": "43",
  "1A2": "44",
  "GND_45": "45",
  "1A1": "46",
  "1A0": "47",
  "1~{OE}": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1DIR": "input", "1B0": "bidirectional", "1B1": "bidirectional", GND_4: "power_in", "1B2": "bidirectional", "1B3": "bidirectional", "V_{CC(B)}_7": "power_in", "1B4": "bidirectional", "1B5": "bidirectional", GND_10: "passive", "1B6": "bidirectional", "1B7": "bidirectional", "2B0": "bidirectional", "2B1": "bidirectional", GND_15: "passive", "2B2": "bidirectional", "2B3": "bidirectional", "V_{CC(B)}_18": "passive", "2B4": "bidirectional", "2B5": "bidirectional", GND_21: "passive", "2B6": "bidirectional", "2B7": "bidirectional", "2DIR": "input", "2~{OE}": "input", "2A7": "bidirectional", "2A6": "bidirectional", GND_28: "passive", "2A5": "bidirectional", "2A4": "bidirectional", "V_{CC(A)}_31": "power_in", "2A3": "bidirectional", "2A2": "bidirectional", GND_34: "passive", "2A1": "bidirectional", "2A0": "bidirectional", "1A7": "bidirectional", "1A6": "bidirectional", GND_39: "passive", "1A5": "bidirectional", "1A4": "bidirectional", "V_{CC(A)}_42": "passive", "1A3": "bidirectional", "1A2": "bidirectional", GND_45: "passive", "1A1": "bidirectional", "1A0": "bidirectional", "1~{OE}": "input", ...opts.pinTypes } });
  }
  override schema = "74xx:74ALVC164245";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, TSSOP-48
 *
 * KiCad symbol: `74xx:74CB3Q16210DGG`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cb3q16210.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 */
export class _74CB3Q16210DGG extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CB3Q16210DGG";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, TVSOP-48
 *
 * KiCad symbol: `74xx:74CB3Q16210DGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cb3q16210.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:TSSOP-48_4.4x9.7mm_P0.4mm.
 */
export class _74CB3Q16210DGV extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CB3Q16210DGV";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, SSOP-48
 *
 * KiCad symbol: `74xx:74CB3Q16210DL`. Reference prefix: `U`.
 * Footprint filters: SSOP*7.5x15.9mm*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cb3q16210.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:SSOP-48_7.5x15.9mm_P0.635mm.
 */
export class _74CB3Q16210DL extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CB3Q16210DL";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, TSSOP-48
 *
 * KiCad symbol: `74xx:74CB3T16210DGG`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cb3t16210.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 */
export class _74CB3T16210DGG extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CB3T16210DGG";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, TVSOP-48
 *
 * KiCad symbol: `74xx:74CB3T16210DGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cb3t16210.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:TSSOP-48_4.4x9.7mm_P0.4mm.
 */
export class _74CB3T16210DGV extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CB3T16210DGV";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, TSSOP-48
 *
 * KiCad symbol: `74xx:74CBT16210CDGG`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cbt16210c.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 */
export class _74CBT16210CDGG extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBT16210CDGG";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, TVSOP-48
 *
 * KiCad symbol: `74xx:74CBT16210CDGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cbt16210c.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:TSSOP-48_4.4x9.7mm_P0.4mm.
 */
export class _74CBT16210CDGV extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBT16210CDGV";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, SSOP-48
 *
 * KiCad symbol: `74xx:74CBT16210CDL`. Reference prefix: `U`.
 * Footprint filters: SSOP*7.5x15.9mm*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cbt16210c.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:SSOP-48_7.5x15.9mm_P0.635mm.
 */
export class _74CBT16210CDL extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBT16210CDL";
  override referencePrefix = "U";
}

/**
 * Low-voltage 10-bit FET bus switch
 *
 * KiCad symbol: `74xx:74CBTLV3861`. Reference prefix: `U`.
 * Footprint filters: DIP?24*.
 * @see http://www.ti.com/lit/gpn/sn74cbtlv3861
 * Keywords: bus.
 */
export class _74CBTLV3861 extends Component.withPins({
  "NC": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "A10": "11",
  "GND": "12",
  "B10": "13",
  "B9": "14",
  "B8": "15",
  "B7": "16",
  "B6": "17",
  "B5": "18",
  "B4": "19",
  "B3": "20",
  "B2": "21",
  "B1": "22",
  "~{OE}": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A1: "passive", A2: "passive", A3: "passive", A4: "passive", A5: "passive", A6: "passive", A7: "passive", A8: "passive", A9: "passive", A10: "passive", GND: "power_in", B10: "passive", B9: "passive", B8: "passive", B7: "passive", B6: "passive", B5: "passive", B4: "passive", B3: "passive", B2: "passive", B1: "passive", "~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBTLV3861";
  override referencePrefix = "U";
}

/**
 * 10-bit FET bus switch
 *
 * KiCad symbol: `74xx:74CBT3861`. Reference prefix: `U`.
 * Footprint filters: DIP?24*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cbt3861.pdf
 * Keywords: bus.
 */
export class _74CBT3861 extends Component.withPins({
  "NC": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "A10": "11",
  "GND": "12",
  "B10": "13",
  "B9": "14",
  "B8": "15",
  "B7": "16",
  "B6": "17",
  "B5": "18",
  "B4": "19",
  "B3": "20",
  "B2": "21",
  "B1": "22",
  "~{OE}": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A1: "passive", A2: "passive", A3: "passive", A4: "passive", A5: "passive", A6: "passive", A7: "passive", A8: "passive", A9: "passive", A10: "passive", GND: "power_in", B10: "passive", B9: "passive", B8: "passive", B7: "passive", B6: "passive", B5: "passive", B4: "passive", B3: "passive", B2: "passive", B1: "passive", "~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBT3861";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, TSSOP-48
 *
 * KiCad symbol: `74xx:74CBTD16210DGG`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cbtd16210.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 */
export class _74CBTD16210DGG extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBTD16210DGG";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, TVSOP-48
 *
 * KiCad symbol: `74xx:74CBTD16210DGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cbtd16210.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:TSSOP-48_4.4x9.7mm_P0.4mm.
 */
export class _74CBTD16210DGV extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBTD16210DGV";
  override referencePrefix = "U";
}

/**
 * 20-bit FET bus switch with 10-bit output enables, SSOP-48
 *
 * KiCad symbol: `74xx:74CBTD16210DL`. Reference prefix: `U`.
 * Footprint filters: SSOP*7.5x15.9mm*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cbtd16210.pdf
 * Keywords: bus transmission gates fet switch bidirectional.
 * Default footprint: Package_SO:SSOP-48_7.5x15.9mm_P0.635mm.
 */
export class _74CBTD16210DL extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "1A3": "4",
  "1A4": "5",
  "1A5": "6",
  "1A6": "7",
  "GND_8": "8",
  "1A7": "9",
  "1A8": "10",
  "1A9": "11",
  "1A10": "12",
  "2A1": "13",
  "2A2": "14",
  "VCC": "15",
  "2A3": "16",
  "GND_17": "17",
  "2A4": "18",
  "2A5": "19",
  "2A6": "20",
  "2A7": "21",
  "2A8": "22",
  "2A9": "23",
  "2A10": "24",
  "2B10": "25",
  "2B9": "26",
  "2B8": "27",
  "2B7": "28",
  "2B6": "29",
  "2B5": "30",
  "2B4": "31",
  "GND_32": "32",
  "2B3": "33",
  "2B2": "34",
  "2B1": "35",
  "1B10": "36",
  "1B9": "37",
  "1B8": "38",
  "1B7": "39",
  "1B6": "40",
  "GND_41": "41",
  "1B5": "42",
  "1B4": "43",
  "1B3": "44",
  "1B2": "45",
  "1B1": "46",
  "2~{OE}": "47",
  "1~{OE}": "48",
  "NC": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "passive", "1A2": "passive", "1A3": "passive", "1A4": "passive", "1A5": "passive", "1A6": "passive", GND_8: "power_in", "1A7": "passive", "1A8": "passive", "1A9": "passive", "1A10": "passive", "2A1": "passive", "2A2": "passive", VCC: "power_in", "2A3": "passive", GND_17: "passive", "2A4": "passive", "2A5": "passive", "2A6": "passive", "2A7": "passive", "2A8": "passive", "2A9": "passive", "2A10": "passive", "2B10": "passive", "2B9": "passive", "2B8": "passive", "2B7": "passive", "2B6": "passive", "2B5": "passive", "2B4": "passive", GND_32: "passive", "2B3": "passive", "2B2": "passive", "2B1": "passive", "1B10": "passive", "1B9": "passive", "1B8": "passive", "1B7": "passive", "1B6": "passive", GND_41: "passive", "1B5": "passive", "1B4": "passive", "1B3": "passive", "1B2": "passive", "1B1": "passive", "2~{OE}": "input", "1~{OE}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBTD16210DL";
  override referencePrefix = "U";
}

/**
 * 10-bit FET Bus switch
 *
 * KiCad symbol: `74xx:74CBTD3861`. Reference prefix: `U`.
 * Footprint filters: DIP?24*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cbtd3861.pdf
 * Keywords: bus.
 */
export class _74CBTD3861 extends Component.withPins({
  "NC": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "A7": "8",
  "A8": "9",
  "A9": "10",
  "A10": "11",
  "GND": "12",
  "B10": "13",
  "B9": "14",
  "B8": "15",
  "B7": "16",
  "B6": "17",
  "B5": "18",
  "B4": "19",
  "B3": "20",
  "B2": "21",
  "B1": "22",
  "~{OE}": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A1: "passive", A2: "passive", A3: "passive", A4: "passive", A5: "passive", A6: "passive", A7: "passive", A8: "passive", A9: "passive", A10: "passive", GND: "power_in", B10: "passive", B9: "passive", B8: "passive", B7: "passive", B6: "passive", B5: "passive", B4: "passive", B3: "passive", B2: "passive", B1: "passive", "~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBTD3861";
  override referencePrefix = "U";
}

/**
 * Low-voltage 24-bit FET Bus-exchange switch
 *
 * KiCad symbol: `74xx:74CBTLV16212`. Reference prefix: `U`.
 * Footprint filters: SSOP*, TSSOP*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cbtlv16212.pdf
 * Keywords: bus.
 */
export class _74CBTLV16212 extends Component.withPins({
  "1A1": "2",
  "1A2": "3",
  "2A1": "4",
  "2A2": "5",
  "3A1": "6",
  "3A2": "7",
  "GND_8": "8",
  "4A1": "9",
  "4A2": "10",
  "5A1": "11",
  "5A2": "12",
  "6A1": "13",
  "6A2": "14",
  "7A1": "15",
  "7A2": "16",
  "VCC": "17",
  "8A1": "18",
  "GND_19": "19",
  "8A2": "20",
  "9A1": "21",
  "9A2": "22",
  "10A1": "23",
  "10A2": "24",
  "11A1": "25",
  "11A2": "26",
  "12A1": "27",
  "12A2": "28",
  "12B2": "29",
  "12B1": "30",
  "11B2": "31",
  "11B1": "32",
  "10B2": "33",
  "10B1": "34",
  "9B2": "35",
  "9B1": "36",
  "8B2": "37",
  "GND_38": "38",
  "8B1": "39",
  "7B2": "40",
  "7B1": "41",
  "6B2": "42",
  "6B1": "43",
  "5B2": "44",
  "5B1": "45",
  "4B2": "46",
  "4B1": "47",
  "3B2": "48",
  "GND_49": "49",
  "3B1": "50",
  "2B2": "51",
  "2B1": "52",
  "1B2": "53",
  "1B1": "54",
  "S2": "55",
  "S1": "56",
  "S0": "1",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A1": "bidirectional", "1A2": "bidirectional", "2A1": "bidirectional", "2A2": "bidirectional", "3A1": "bidirectional", "3A2": "bidirectional", GND_8: "power_in", "4A1": "bidirectional", "4A2": "bidirectional", "5A1": "bidirectional", "5A2": "bidirectional", "6A1": "bidirectional", "6A2": "bidirectional", "7A1": "bidirectional", "7A2": "bidirectional", VCC: "power_in", "8A1": "bidirectional", GND_19: "passive", "8A2": "bidirectional", "9A1": "bidirectional", "9A2": "bidirectional", "10A1": "bidirectional", "10A2": "bidirectional", "11A1": "bidirectional", "11A2": "bidirectional", "12A1": "bidirectional", "12A2": "bidirectional", "12B2": "bidirectional", "12B1": "bidirectional", "11B2": "bidirectional", "11B1": "bidirectional", "10B2": "bidirectional", "10B1": "bidirectional", "9B2": "bidirectional", "9B1": "bidirectional", "8B2": "bidirectional", GND_38: "passive", "8B1": "bidirectional", "7B2": "bidirectional", "7B1": "bidirectional", "6B2": "bidirectional", "6B1": "bidirectional", "5B2": "bidirectional", "5B1": "bidirectional", "4B2": "bidirectional", "4B1": "bidirectional", "3B2": "bidirectional", GND_49: "passive", "3B1": "bidirectional", "2B2": "bidirectional", "2B1": "bidirectional", "1B2": "bidirectional", "1B1": "bidirectional", S2: "input", S1: "input", S0: "input", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBTLV16212";
  override referencePrefix = "U";
}

/**
 * Quad 1:2 FET Multiplexer/Demultiplexer, Low-Voltage
 *
 * KiCad symbol: `74xx:74CBTLV3257`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*, TSSOP*4.4x5mm*P0.65mm*, TVSOP*4.4x3.6mm*P0.4mm*, SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74cbtlv3257.pdf
 * Keywords: mux demux low-voltage.
 */
export class _74CBTLV3257 extends Component.withPins({
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "S": "1",
  "GND": "8",
  "~{OE}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "passive", P13: "passive", P14: "passive", S: "input", GND: "power_in", "~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74CBTLV3257";
  override referencePrefix = "U";
}

/**
 * quad 2-input NAND gate
 *
 * KiCad symbol: `74xx:74HC00`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SO14*.
 * @see http://www.ti.com/lit/gpn/sn74hc00
 * Keywords: HCMOS nand 2-input.
 */
export class _74HC00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC00";
  override referencePrefix = "U";
}

/**
 * quad 2-input NOR gate
 *
 * KiCad symbol: `74xx:74HC02`. Reference prefix: `U`.
 * Footprint filters: SO14*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74hc02
 * Keywords: HCMOS Nor2.
 */
export class _74HC02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", P2: "input", P3: "input", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "input", P12: "input", P13: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC02";
  override referencePrefix = "U";
}

/**
 * Hex Inverter
 *
 * KiCad symbol: `74xx:74HC04`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SSOP?14*, TSSOP?14*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT04.pdf
 * Keywords: HCMOS not inv.
 */
export class _74HC04 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC04";
  override referencePrefix = "U";
}

/**
 * Dual retriggerable monostable multivibrator
 *
 * KiCad symbol: `74xx:74HC123`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT123.pdf
 * Keywords: TTL monostable, multivibrator.
 */
export class _74HC123 extends Component.withPins({
  "A_1": "1",
  "B_2": "2",
  "Clr_3": "3",
  "~{Q}_4": "4",
  "Q_13": "13",
  "Cext_14": "14",
  "RCext_15": "15",
  "Q_5": "5",
  "Cext_6": "6",
  "RCext_7": "7",
  "A_9": "9",
  "B_10": "10",
  "Clr_11": "11",
  "~{Q}_12": "12",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "input", B_2: "input", Clr_3: "input", "~{Q}_4": "output", Q_13: "output", Cext_14: "input", RCext_15: "input", Q_5: "output", Cext_6: "input", RCext_7: "input", A_9: "input", B_10: "input", Clr_11: "input", "~{Q}_12": "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC123";
  override referencePrefix = "U";
}

/**
 * 3-to-8 line decoder/multiplexer with address latches, DIP-16/SOIC-16/SSOP-16
 *
 * KiCad symbol: `74xx:74HC137`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*5.3x6.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hc237.pdf
 * Keywords: demux.
 */
export class _74HC137 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{LE}": "4",
  "~{E1}": "5",
  "E2": "6",
  "~{Y7}": "7",
  "GND": "8",
  "~{Y6}": "9",
  "~{Y5}": "10",
  "~{Y4}": "11",
  "~{Y3}": "12",
  "~{Y2}": "13",
  "~{Y1}": "14",
  "~{Y0}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{LE}": "input", "~{E1}": "input", E2: "input", "~{Y7}": "output", GND: "power_in", "~{Y6}": "output", "~{Y5}": "output", "~{Y4}": "output", "~{Y3}": "output", "~{Y2}": "output", "~{Y1}": "output", "~{Y0}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC137";
  override referencePrefix = "U";
}

/**
 * 3-to-8 line decoder/multiplexer inverting, DIP-16/SOIC-16/SSOP-16
 *
 * KiCad symbol: `74xx:74HC138`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*5.3x6.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hc238.pdf
 * Keywords: demux.
 */
export class _74HC138 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{E0}": "4",
  "~{E1}": "5",
  "E2": "6",
  "~{Y7}": "7",
  "GND": "8",
  "~{Y6}": "9",
  "~{Y5}": "10",
  "~{Y4}": "11",
  "~{Y3}": "12",
  "~{Y2}": "13",
  "~{Y1}": "14",
  "~{Y0}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{E0}": "input", "~{E1}": "input", E2: "input", "~{Y7}": "output", GND: "power_in", "~{Y6}": "output", "~{Y5}": "output", "~{Y4}": "output", "~{Y3}": "output", "~{Y2}": "output", "~{Y1}": "output", "~{Y0}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC138";
  override referencePrefix = "U";
}

/**
 * Hex inverter schmitt trigger
 *
 * KiCad symbol: `74xx:74HC14`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74HC14
 * Keywords: HCMOS not inverter.
 */
export class _74HC14 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC14";
  override referencePrefix = "U";
}

/**
 * 8-bit serial-in parallel-out shift register
 *
 * KiCad symbol: `74xx:74HC164`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7*P1.27mm*, ?SSOP*P0.65mm*, DIP*W7.62mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT164.pdf
 * Keywords: 8-bit shift register.
 */
export class _74HC164 extends Component.withPins({
  "DSA": "1",
  "DSB": "2",
  "Q0": "3",
  "Q1": "4",
  "Q2": "5",
  "Q3": "6",
  "GND": "7",
  "CP": "8",
  "~{MR}": "9",
  "Q4": "10",
  "Q5": "11",
  "Q6": "12",
  "Q7": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DSA: "input", DSB: "input", Q0: "output", Q1: "output", Q2: "output", Q3: "output", GND: "power_in", CP: "input", "~{MR}": "input", Q4: "output", Q5: "output", Q6: "output", Q7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC164";
  override referencePrefix = "U";
}

/**
 * Shift Register 8-bit, parallel load
 *
 * KiCad symbol: `74xx:74LS165`. Reference prefix: `U`.
 * Footprint filters: DIP?16*, SO*16*3.9x9.9mm*P1.27mm*, SSOP*16*5.3x6.2mm*P0.65mm*, TSSOP*16*4.4x5mm*P0.65*.
 * @see https://www.ti.com/lit/ds/symlink/sn74ls165a.pdf
 * Keywords: TTL SR SR8.
 */
export class _74LS165 extends Component.withPins({
  "~{PL}": "1",
  "CP": "2",
  "D4": "3",
  "D5": "4",
  "D6": "5",
  "D7": "6",
  "~{Q7}": "7",
  "GND": "8",
  "Q7": "9",
  "DS": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "D3": "14",
  "~{CE}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{PL}": "input", CP: "input", D4: "input", D5: "input", D6: "input", D7: "input", "~{Q7}": "output", GND: "power_in", Q7: "output", DS: "input", D0: "input", D1: "input", D2: "input", D3: "input", "~{CE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS165";
  override referencePrefix = "U";
}

/**
 * Shift Register, 8-bit, Parallel Load
 *
 * KiCad symbol: `74xx:74HC165`. Reference prefix: `U`.
 * Footprint filters: DIP?16*, SO*16*3.9x9.9mm*P1.27mm*, SSOP*16*5.3x6.2mm*P0.65mm*, TSSOP*16*4.4x5mm*P0.65*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT165.pdf
 * Keywords: 8 bit shift register parallel load cmos.
 */
export class _74HC165 extends Component.withPins({
  "~{PL}": "1",
  "CP": "2",
  "D4": "3",
  "D5": "4",
  "D6": "5",
  "D7": "6",
  "~{Q7}": "7",
  "GND": "8",
  "Q7": "9",
  "DS": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "D3": "14",
  "~{CE}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{PL}": "input", CP: "input", D4: "input", D5: "input", D6: "input", D7: "input", "~{Q7}": "output", GND: "power_in", Q7: "output", DS: "input", D0: "input", D1: "input", D2: "input", D3: "input", "~{CE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC165";
  override referencePrefix = "U";
}

/**
 * 4-bit D-type Register, 3 state out
 *
 * KiCad symbol: `74xx:74LS173`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS173
 * Keywords: TTL REG REG4 3State DFF.
 */
export class _74LS173 extends Component.withPins({
  "Oe1": "1",
  "Oe2": "2",
  "Q0": "3",
  "Q1": "4",
  "Q2": "5",
  "Q3": "6",
  "Cp": "7",
  "GND": "8",
  "E1": "9",
  "E2": "10",
  "D3": "11",
  "D2": "12",
  "D1": "13",
  "D0": "14",
  "Mr": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Oe1: "input", Oe2: "input", Q0: "tri_state", Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Cp: "input", GND: "power_in", E1: "input", E2: "input", D3: "input", D2: "input", D1: "input", D0: "input", Mr: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS173";
  override referencePrefix = "U";
}

/**
 * 4-bit D-type Register, 3 state out
 *
 * KiCad symbol: `74xx:74HC173`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62*, SOIC*3.9*9.9mm*P1.27mm*, TSSOP*4.4*5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd74hc173.pdf
 * Keywords: TTL REG REG4 3State DFF.
 */
export class _74HC173 extends Component.withPins({
  "Oe1": "1",
  "Oe2": "2",
  "Q0": "3",
  "Q1": "4",
  "Q2": "5",
  "Q3": "6",
  "Cp": "7",
  "GND": "8",
  "E1": "9",
  "E2": "10",
  "D3": "11",
  "D2": "12",
  "D1": "13",
  "D0": "14",
  "Mr": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Oe1: "input", Oe2: "input", Q0: "tri_state", Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Cp: "input", GND: "power_in", E1: "input", E2: "input", D3: "input", D2: "input", D1: "input", D0: "input", Mr: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC173";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit Up/Down (2 clk) counter
 *
 * KiCad symbol: `74xx:74LS192`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls193.pdf
 * Keywords: TTL CNT CNT4.
 */
export class _74LS192 extends Component.withPins({
  "B": "1",
  "QB": "2",
  "QA": "3",
  "DOWN": "4",
  "UP": "5",
  "QC": "6",
  "QD": "7",
  "GND": "8",
  "D": "9",
  "C": "10",
  "~{LOAD}": "11",
  "~{CO}": "12",
  "~{BO}": "13",
  "CLR": "14",
  "A": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", QB: "output", QA: "output", DOWN: "input", UP: "input", QC: "output", QD: "output", GND: "power_in", D: "input", C: "input", "~{LOAD}": "input", "~{CO}": "output", "~{BO}": "output", CLR: "input", A: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS192";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit Up/Down (2 clk) counter
 *
 * KiCad symbol: `74xx:74HC192`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, DIP*W7.62mm*, SO*3.9*9.9*P1.27mm*, TSSOP*4.4*5mm*P0.65*.
 * @see https://www.ti.com/lit/ds/symlink/cd74hc192.pdf
 * Keywords: TTL CNT CNT4.
 */
export class _74HC192 extends Component.withPins({
  "B": "1",
  "QB": "2",
  "QA": "3",
  "DOWN": "4",
  "UP": "5",
  "QC": "6",
  "QD": "7",
  "GND": "8",
  "D": "9",
  "C": "10",
  "~{LOAD}": "11",
  "~{CO}": "12",
  "~{BO}": "13",
  "CLR": "14",
  "A": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", QB: "output", QA: "output", DOWN: "input", UP: "input", QC: "output", QD: "output", GND: "power_in", D: "input", C: "input", "~{LOAD}": "input", "~{CO}": "output", "~{BO}": "output", CLR: "input", A: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC192";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit Up/Down (2 clk) counter
 *
 * KiCad symbol: `74xx:74HC193`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, DIP*W7.62mm*, SO*3.9*9.9mm*P1.27mm*, TSSOP*4.4*5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT193.pdf
 * Keywords: TTL CNT CNT4.
 */
export class _74HC193 extends Component.withPins({
  "B": "1",
  "QB": "2",
  "QA": "3",
  "DOWN": "4",
  "UP": "5",
  "QC": "6",
  "QD": "7",
  "GND": "8",
  "D": "9",
  "C": "10",
  "~{LOAD}": "11",
  "~{CO}": "12",
  "~{BO}": "13",
  "CLR": "14",
  "A": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", QB: "output", QA: "output", DOWN: "input", UP: "input", QC: "output", QD: "output", GND: "power_in", D: "input", C: "input", "~{LOAD}": "input", "~{CO}": "output", "~{BO}": "output", CLR: "input", A: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC193";
  override referencePrefix = "U";
}

/**
 * 3-to-8 line decoder/multiplexer with address latches, DIP-16/SOIC-16/SSOP-16
 *
 * KiCad symbol: `74xx:74HC237`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*5.3x6.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hc237.pdf
 * Keywords: demux.
 */
export class _74HC237 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{LE}": "4",
  "~{E1}": "5",
  "E2": "6",
  "Y7": "7",
  "GND": "8",
  "Y6": "9",
  "Y5": "10",
  "Y4": "11",
  "Y3": "12",
  "Y2": "13",
  "Y1": "14",
  "Y0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{LE}": "input", "~{E1}": "input", E2: "input", Y7: "output", GND: "power_in", Y6: "output", Y5: "output", Y4: "output", Y3: "output", Y2: "output", Y1: "output", Y0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC237";
  override referencePrefix = "U";
}

/**
 * 3-to-8 line decoder/multiplexer, DIP-16/SOIC-16/SSOP-16
 *
 * KiCad symbol: `74xx:74HC238`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd74hc238.pdf
 * Keywords: demux.
 */
export class _74HC238 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{E1}": "4",
  "~{E2}": "5",
  "E3": "6",
  "Y7": "7",
  "GND": "8",
  "Y6": "9",
  "Y5": "10",
  "Y4": "11",
  "Y3": "12",
  "Y2": "13",
  "Y1": "14",
  "Y0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{E1}": "input", "~{E2}": "input", E3: "input", Y7: "output", GND: "power_in", Y6: "output", Y5: "output", Y4: "output", Y3: "output", Y2: "output", Y1: "output", Y0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC238";
  override referencePrefix = "U";
}

/**
 * Octal BUS Transceivers, 3-State outputs
 *
 * KiCad symbol: `74xx:74LS245`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS245
 * Keywords: TTL BUS 3State.
 */
export class _74LS245 extends Component.withPins({
  "A->B": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "GND": "10",
  "B7": "11",
  "B6": "12",
  "B5": "13",
  "B4": "14",
  "B3": "15",
  "B2": "16",
  "B1": "17",
  "B0": "18",
  "CE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "A->B": "input", A0: "tri_state", A1: "tri_state", A2: "tri_state", A3: "tri_state", A4: "tri_state", A5: "tri_state", A6: "tri_state", A7: "tri_state", GND: "power_in", B7: "tri_state", B6: "tri_state", B5: "tri_state", B4: "tri_state", B3: "tri_state", B2: "tri_state", B1: "tri_state", B0: "tri_state", CE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS245";
  override referencePrefix = "U";
}

/**
 * Octal BUS Transceivers, 3-State outputs
 *
 * KiCad symbol: `74xx:74HC245`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74HC245
 * Keywords: HCMOS BUS 3State.
 */
export class _74HC245 extends Component.withPins({
  "A->B": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "GND": "10",
  "B7": "11",
  "B6": "12",
  "B5": "13",
  "B4": "14",
  "B3": "15",
  "B2": "16",
  "B1": "17",
  "B0": "18",
  "CE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "A->B": "input", A0: "tri_state", A1: "tri_state", A2: "tri_state", A3: "tri_state", A4: "tri_state", A5: "tri_state", A6: "tri_state", A7: "tri_state", GND: "power_in", B7: "tri_state", B6: "tri_state", B5: "tri_state", B4: "tri_state", B3: "tri_state", B2: "tri_state", B1: "tri_state", B0: "tri_state", CE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC245";
  override referencePrefix = "U";
}

/**
 * 8-bit D Flip-Flop, reset
 *
 * KiCad symbol: `74xx:74HC273`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SO?20*, SOIC?20*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT273.pdf
 * Keywords: HCMOS DFF DFF8.
 */
export class _74HC273 extends Component.withPins({
  "~{Mr}": "1",
  "Q0": "2",
  "D0": "3",
  "D1": "4",
  "Q1": "5",
  "Q2": "6",
  "D2": "7",
  "D3": "8",
  "Q3": "9",
  "GND": "10",
  "Cp": "11",
  "Q4": "12",
  "D4": "13",
  "D5": "14",
  "Q5": "15",
  "Q6": "16",
  "D6": "17",
  "D7": "18",
  "Q7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{Mr}": "input", Q0: "output", D0: "input", D1: "input", Q1: "output", Q2: "output", D2: "input", D3: "input", Q3: "output", GND: "power_in", Cp: "input", Q4: "output", D4: "input", D5: "input", Q5: "output", Q6: "output", D6: "input", D7: "input", Q7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC273";
  override referencePrefix = "U";
}

/**
 * 8-bit Latch, 3-state outputs
 *
 * KiCad symbol: `74xx:74HC373`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*, SSOP?20*, TSSOP?20*.
 * @see https://www.ti.com/lit/ds/symlink/cd54hc373.pdf
 * Keywords: HCMOS REG DFF DFF8 LATCH.
 */
export class _74HC373 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "LE": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", LE: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC373";
  override referencePrefix = "U";
}

/**
 * 8-bit Register, 3-state outputs
 *
 * KiCad symbol: `74xx:74HC374`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*.
 * @see https://www.ti.com/lit/ds/symlink/cd74hct374.pdf
 * Keywords: HCMOS DFF DFF8 REG 3State.
 */
export class _74HC374 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "Cp": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", Cp: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC374";
  override referencePrefix = "U";
}

/**
 * 7-stage binary ripple counter, SOIC-14
 *
 * KiCad symbol: `74xx:74HC4024`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC4024.pdf
 * Keywords: binary counter.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class _74HC4024 extends Component.withPins({
  "~{CP}": "1",
  "MR": "2",
  "Q6": "3",
  "Q5": "4",
  "Q4": "5",
  "Q3": "6",
  "GND": "7",
  "P8": "8",
  "Q2": "9",
  "P10": "10",
  "Q1": "11",
  "Q0": "12",
  "P13": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CP}": "input", MR: "input", Q6: "output", Q5: "output", Q4: "output", Q3: "output", GND: "power_in", P8: "no_connect", Q2: "output", P10: "no_connect", Q1: "output", Q0: "output", P13: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC4024";
  override referencePrefix = "U";
}

/**
 * 8-channel analog multiplexer/demultiplexer, DIP-16/SOIC-16/TSSOP-16
 *
 * KiCad symbol: `74xx:74HC4051`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SOIC*5.3x10.2mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hc4051.pdf
 * Keywords: HCMOS Multiplexer Demultiplexer Analog.
 */
export class _74HC4051 extends Component.withPins({
  "A4": "1",
  "A6": "2",
  "A": "3",
  "A7": "4",
  "A5": "5",
  "~{E}": "6",
  "VEE": "7",
  "GND": "8",
  "S2": "9",
  "S1": "10",
  "S0": "11",
  "A3": "12",
  "A0": "13",
  "A1": "14",
  "A2": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A4: "passive", A6: "passive", A: "passive", A7: "passive", A5: "passive", "~{E}": "input", VEE: "power_in", GND: "power_in", S2: "input", S1: "input", S0: "input", A3: "passive", A0: "passive", A1: "passive", A2: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC4051";
  override referencePrefix = "U";
}

/**
 * Binary counter (14-stages) and oscillator
 *
 * KiCad symbol: `74xx:74HC4060`. Reference prefix: `U`.
 * Footprint filters: DIP?16*7.62*, TSSOP*16*4.4x5*, SOIC*16*3.9x9.9*.
 * @see https://www.st.com/resource/en/datasheet/m74hc4060.pdf
 * Keywords: binary counter oscillator.
 */
export class _74HC4060 extends Component.withPins({
  "Q12": "1",
  "Q13": "2",
  "Q14": "3",
  "Q6": "4",
  "Q5": "5",
  "Q7": "6",
  "Q4": "7",
  "VSS": "8",
  "~{Φ0}": "9",
  "Φ0": "10",
  "~{Φ1}": "11",
  "CLR": "12",
  "Q9": "13",
  "Q8": "14",
  "Q10": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q12: "output", Q13: "output", Q14: "output", Q6: "output", Q5: "output", Q7: "output", Q4: "output", VSS: "power_in", "~{Φ0}": "input", "Φ0": "input", "~{Φ1}": "input", CLR: "input", Q9: "output", Q8: "output", Q10: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC4060";
  override referencePrefix = "U";
}

/**
 * 8-bit Binary Counter with Output Register 3-State Outputs, SOIC-16/TSSOP-16
 *
 * KiCad symbol: `74xx:74HC590`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC590.pdf
 * Keywords: HCMOS Counter 3State.
 */
export class _74HC590 extends Component.withPins({
  "Q1": "1",
  "Q2": "2",
  "Q3": "3",
  "Q4": "4",
  "Q5": "5",
  "Q6": "6",
  "Q7": "7",
  "GND": "8",
  "~{RCO}": "9",
  "~{MRC}": "10",
  "CPC": "11",
  "~{CE}": "12",
  "CPR": "13",
  "~{OE}": "14",
  "Q0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Q4: "tri_state", Q5: "tri_state", Q6: "tri_state", Q7: "tri_state", GND: "power_in", "~{RCO}": "output", "~{MRC}": "input", CPC: "input", "~{CE}": "input", CPR: "input", "~{OE}": "input", Q0: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC590";
  override referencePrefix = "U";
}

/**
 * 8-bit Binary Counter with Output Register 3-State Outputs, DIP-16/SOIC-16/SOIC-16W
 *
 * KiCad symbol: `74xx:74HC590A`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74hc590a.pdf
 * Keywords: HCMOS Counter 3State.
 */
export class _74HC590A extends Component.withPins({
  "Q1": "1",
  "Q2": "2",
  "Q3": "3",
  "Q4": "4",
  "Q5": "5",
  "Q6": "6",
  "Q7": "7",
  "GND": "8",
  "~{RCO}": "9",
  "~{MRC}": "10",
  "CPC": "11",
  "~{CE}": "12",
  "CPR": "13",
  "~{OE}": "14",
  "Q0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Q4: "tri_state", Q5: "tri_state", Q6: "tri_state", Q7: "tri_state", GND: "power_in", "~{RCO}": "output", "~{MRC}": "input", CPC: "input", "~{CE}": "input", CPR: "input", "~{OE}": "input", Q0: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC590A";
  override referencePrefix = "U";
}

/**
 * 8-Bit Shift Registers With Output Registers
 *
 * KiCad symbol: `74xx:74HC594`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74hc594.pdf
 * Keywords: HCMOS SR.
 */
export class _74HC594 extends Component.withPins({
  "QB": "1",
  "QC": "2",
  "QD": "3",
  "QE": "4",
  "QF": "5",
  "QG": "6",
  "QH": "7",
  "GND": "8",
  "QH'": "9",
  "~{SRCLR}": "10",
  "SRCLK": "11",
  "RCLK": "12",
  "~{RCLR}": "13",
  "SER": "14",
  "QA": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QB: "output", QC: "output", QD: "output", QE: "output", QF: "output", QG: "output", QH: "output", GND: "power_in", "QH'": "output", "~{SRCLR}": "input", SRCLK: "input", RCLK: "input", "~{RCLR}": "input", SER: "input", QA: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC594";
  override referencePrefix = "U";
}

/**
 * 8-bit serial in/out Shift Register Open Collector Outputs
 *
 * KiCad symbol: `74xx:74HC596`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT595.pdf
 * Keywords: HCMOS SR OpenCollector.
 */
export class _74HC596 extends Component.withPins({
  "QB": "1",
  "QC": "2",
  "QD": "3",
  "QE": "4",
  "QF": "5",
  "QG": "6",
  "QH": "7",
  "GND": "8",
  "QH'": "9",
  "~{SRCLR}": "10",
  "SRCLK": "11",
  "RCLK": "12",
  "~{OE}": "13",
  "SER": "14",
  "QA": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QB: "open_collector", QC: "open_collector", QD: "open_collector", QE: "open_collector", QF: "open_collector", QG: "open_collector", QH: "open_collector", GND: "power_in", "QH'": "output", "~{SRCLR}": "input", SRCLK: "input", RCLK: "input", "~{OE}": "input", SER: "input", QA: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC596";
  override referencePrefix = "U";
}

/**
 * 8-bit magnitude comparator
 *
 * KiCad symbol: `74xx:74LS688`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*, TSSOP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS688
 * Keywords: TTL DECOD Arith.
 */
export class _74LS688 extends Component.withPins({
  "G": "1",
  "P0": "2",
  "R0": "3",
  "P1": "4",
  "R1": "5",
  "P2": "6",
  "R2": "7",
  "P3": "8",
  "R3": "9",
  "GND": "10",
  "P4": "11",
  "R4": "12",
  "P5": "13",
  "R5": "14",
  "P6": "15",
  "R6": "16",
  "P7": "17",
  "R7": "18",
  "P=R": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", P0: "input", R0: "input", P1: "input", R1: "input", P2: "input", R2: "input", P3: "input", R3: "input", GND: "power_in", P4: "input", R4: "input", P5: "input", R5: "input", P6: "input", R6: "input", P7: "input", R7: "input", "P=R": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS688";
  override referencePrefix = "U";
}

/**
 * 8-bit magnitude comparator
 *
 * KiCad symbol: `74xx:74HC688`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*, TSSOP?20*.
 * @see https://www.ti.com/lit/ds/symlink/cd54hc688.pdf
 * Keywords: HCMOS DECOD Arith.
 */
export class _74HC688 extends Component.withPins({
  "G": "1",
  "P0": "2",
  "R0": "3",
  "P1": "4",
  "R1": "5",
  "P2": "6",
  "R2": "7",
  "P3": "8",
  "R3": "9",
  "GND": "10",
  "P4": "11",
  "R4": "12",
  "P5": "13",
  "R5": "14",
  "P6": "15",
  "R6": "16",
  "P7": "17",
  "R7": "18",
  "P=R": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", P0: "input", R0: "input", P1: "input", R1: "input", P2: "input", R2: "input", P3: "input", R3: "input", GND: "power_in", P4: "input", R4: "input", P5: "input", R5: "input", P6: "input", R6: "input", P7: "input", R7: "input", "P=R": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC688";
  override referencePrefix = "U";
}

/**
 * Hex non-inverting buffer with precision Schmitt Trigger inputs, SOIC-14
 *
 * KiCad symbol: `74xx:74HC7014`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC7014.pdf
 * Keywords: Hex non-inverting Schmitt buffer.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class _74HC7014 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC7014";
  override referencePrefix = "U";
}

/**
 * Dual D Flip-flop, Set & Reset
 *
 * KiCad symbol: `74xx:74LS74`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74ls74a.pdf
 * Keywords: TTL DFF.
 */
export class _74LS74 extends Component.withPins({
  "~{R}_1": "1",
  "D_2": "2",
  "C_3": "3",
  "~{S}_4": "4",
  "Q_5": "5",
  "~{Q}_6": "6",
  "~{Q}_8": "8",
  "Q_9": "9",
  "~{S}_10": "10",
  "C_11": "11",
  "D_12": "12",
  "~{R}_13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{R}_1": "input", D_2: "input", C_3: "input", "~{S}_4": "input", Q_5: "output", "~{Q}_6": "output", "~{Q}_8": "output", Q_9: "output", "~{S}_10": "input", C_11: "input", D_12: "input", "~{R}_13": "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS74";
  override referencePrefix = "U";
}

/**
 * Dual D Flip-flop, Set & Reset
 *
 * KiCad symbol: `74xx:74HC74`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT74.pdf
 * Keywords: TTL DFF.
 */
export class _74HC74 extends Component.withPins({
  "~{R}_1": "1",
  "D_2": "2",
  "C_3": "3",
  "~{S}_4": "4",
  "Q_5": "5",
  "~{Q}_6": "6",
  "~{Q}_8": "8",
  "Q_9": "9",
  "~{S}_10": "10",
  "C_11": "11",
  "D_12": "12",
  "~{R}_13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{R}_1": "input", D_2: "input", C_3: "input", "~{S}_4": "input", Q_5: "output", "~{Q}_6": "output", "~{Q}_8": "output", Q_9: "output", "~{S}_10": "input", C_11: "input", D_12: "input", "~{R}_13": "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC74";
  override referencePrefix = "U";
}

/**
 * 4-bit Comparator
 *
 * KiCad symbol: `74xx:74LS85`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS85
 * Keywords: TTL COMP ARITH.
 */
export class _74LS85 extends Component.withPins({
  "B3": "1",
  "Ia<b": "2",
  "Ia=b": "3",
  "Ia>b": "4",
  "Oa>b": "5",
  "Oa=b": "6",
  "Oa<b": "7",
  "GND": "8",
  "B0": "9",
  "A0": "10",
  "B1": "11",
  "A1": "12",
  "A2": "13",
  "B2": "14",
  "A3": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B3: "input", "Ia<b": "input", "Ia=b": "input", "Ia>b": "input", "Oa>b": "output", "Oa=b": "output", "Oa<b": "output", GND: "power_in", B0: "input", A0: "input", B1: "input", A1: "input", A2: "input", B2: "input", A3: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS85";
  override referencePrefix = "U";
}

/**
 * 4-bit Comparator
 *
 * KiCad symbol: `74xx:74HC85`. Reference prefix: `U`.
 * Footprint filters: DIP?16*, TSSOP*4.4*5mm*P0.65mm*, SO*3.9*9.9mm*P1.27mm*, SO*5.3*10.2mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT85.pdf
 * Keywords: TTL COMP ARITH.
 */
export class _74HC85 extends Component.withPins({
  "B3": "1",
  "Ia<b": "2",
  "Ia=b": "3",
  "Ia>b": "4",
  "Oa>b": "5",
  "Oa=b": "6",
  "Oa<b": "7",
  "GND": "8",
  "B0": "9",
  "A0": "10",
  "B1": "11",
  "A1": "12",
  "A2": "13",
  "B2": "14",
  "A3": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B3: "input", "Ia<b": "input", "Ia=b": "input", "Ia>b": "input", "Oa>b": "output", "Oa=b": "output", "Oa<b": "output", GND: "power_in", B0: "input", A0: "input", B1: "input", A1: "input", A2: "input", B2: "input", A3: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC85";
  override referencePrefix = "U";
}

/**
 * Quad 2-input XOR
 *
 * KiCad symbol: `74xx:74LS86`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.jameco.com/Jameco/Products/ProdDS/48098.pdf
 * Keywords: TTL XOR2.
 */
export class _74LS86 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS86";
  override referencePrefix = "U";
}

/**
 * Quad 2-input XOR
 *
 * KiCad symbol: `74xx:74HC86`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74HC86
 * Keywords: TTL XOR2.
 */
export class _74HC86 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HC86";
  override referencePrefix = "U";
}

/**
 * quad 2-input NAND gate
 *
 * KiCad symbol: `74xx:74HCT00`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SO14*.
 * @see http://www.ti.com/lit/gpn/sn74hct00
 * Keywords: HCTMOS nand 2-input.
 */
export class _74HCT00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT00";
  override referencePrefix = "U";
}

/**
 * quad 2-input NOR gate
 *
 * KiCad symbol: `74xx:74HCT02`. Reference prefix: `U`.
 * Footprint filters: SO14*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74hct02
 * Keywords: HCTMOS Nor2.
 */
export class _74HCT02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", P2: "input", P3: "input", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "input", P12: "input", P13: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT02";
  override referencePrefix = "U";
}

/**
 * Hex Inverter
 *
 * KiCad symbol: `74xx:74HCT04`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SSOP?14*, TSSOP?14*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT04.pdf
 * Keywords: HCTMOS not inv.
 */
export class _74HCT04 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT04";
  override referencePrefix = "U";
}

/**
 * Dual retriggerable monostable multivibrator
 *
 * KiCad symbol: `74xx:74HCT123`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT123.pdf
 * Keywords: TTL monostable, multivibrator.
 */
export class _74HCT123 extends Component.withPins({
  "A_1": "1",
  "B_2": "2",
  "Clr_3": "3",
  "~{Q}_4": "4",
  "Q_13": "13",
  "Cext_14": "14",
  "RCext_15": "15",
  "Q_5": "5",
  "Cext_6": "6",
  "RCext_7": "7",
  "A_9": "9",
  "B_10": "10",
  "Clr_11": "11",
  "~{Q}_12": "12",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "input", B_2: "input", Clr_3: "input", "~{Q}_4": "output", Q_13: "output", Cext_14: "input", RCext_15: "input", Q_5: "output", Cext_6: "input", RCext_7: "input", A_9: "input", B_10: "input", Clr_11: "input", "~{Q}_12": "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT123";
  override referencePrefix = "U";
}

/**
 * 3-to-8 line decoder/multiplexer with address latches, DIP-16/SOIC-16/SSOP-16
 *
 * KiCad symbol: `74xx:74HCT137`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*5.3x6.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hc237.pdf
 * Keywords: demux.
 */
export class _74HCT137 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{LE}": "4",
  "~{E1}": "5",
  "E2": "6",
  "~{Y7}": "7",
  "GND": "8",
  "~{Y6}": "9",
  "~{Y5}": "10",
  "~{Y4}": "11",
  "~{Y3}": "12",
  "~{Y2}": "13",
  "~{Y1}": "14",
  "~{Y0}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{LE}": "input", "~{E1}": "input", E2: "input", "~{Y7}": "output", GND: "power_in", "~{Y6}": "output", "~{Y5}": "output", "~{Y4}": "output", "~{Y3}": "output", "~{Y2}": "output", "~{Y1}": "output", "~{Y0}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT137";
  override referencePrefix = "U";
}

/**
 * 3-to-8 line decoder/multiplexer inverting, DIP-16/SOIC-16/SSOP-16
 *
 * KiCad symbol: `74xx:74HCT138`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*5.3x6.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hc238.pdf
 * Keywords: demux.
 */
export class _74HCT138 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{E0}": "4",
  "~{E1}": "5",
  "E2": "6",
  "~{Y7}": "7",
  "GND": "8",
  "~{Y6}": "9",
  "~{Y5}": "10",
  "~{Y4}": "11",
  "~{Y3}": "12",
  "~{Y2}": "13",
  "~{Y1}": "14",
  "~{Y0}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{E0}": "input", "~{E1}": "input", E2: "input", "~{Y7}": "output", GND: "power_in", "~{Y6}": "output", "~{Y5}": "output", "~{Y4}": "output", "~{Y3}": "output", "~{Y2}": "output", "~{Y1}": "output", "~{Y0}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT138";
  override referencePrefix = "U";
}

/**
 * 8-bit serial-in parallel-out shift register
 *
 * KiCad symbol: `74xx:74HCT164`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7*P1.27mm*, ?SSOP*P0.65mm*, DIP*W7.62mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT164.pdf
 * Keywords: 8-bit shift register.
 */
export class _74HCT164 extends Component.withPins({
  "DSA": "1",
  "DSB": "2",
  "Q0": "3",
  "Q1": "4",
  "Q2": "5",
  "Q3": "6",
  "GND": "7",
  "CP": "8",
  "~{MR}": "9",
  "Q4": "10",
  "Q5": "11",
  "Q6": "12",
  "Q7": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DSA: "input", DSB: "input", Q0: "output", Q1: "output", Q2: "output", Q3: "output", GND: "power_in", CP: "input", "~{MR}": "input", Q4: "output", Q5: "output", Q6: "output", Q7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT164";
  override referencePrefix = "U";
}

/**
 * 4-bit D-type Register, 3 state out
 *
 * KiCad symbol: `74xx:74HCT173`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62*, SOIC*3.9*9.9mm*P1.27mm*, TSSOP*4.4*5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd74hc173.pdf
 * Keywords: TTL REG REG4 3State DFF.
 */
export class _74HCT173 extends Component.withPins({
  "Oe1": "1",
  "Oe2": "2",
  "Q0": "3",
  "Q1": "4",
  "Q2": "5",
  "Q3": "6",
  "Cp": "7",
  "GND": "8",
  "E1": "9",
  "E2": "10",
  "D3": "11",
  "D2": "12",
  "D1": "13",
  "D0": "14",
  "Mr": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Oe1: "input", Oe2: "input", Q0: "tri_state", Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Cp: "input", GND: "power_in", E1: "input", E2: "input", D3: "input", D2: "input", D1: "input", D0: "input", Mr: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT173";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit Up/Down (2 clk) counter
 *
 * KiCad symbol: `74xx:74HCT193`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, DIP*W7.62mm*, SO*3.9*9.9mm*P1.27mm*, TSSOP*4.4*5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT193.pdf
 * Keywords: TTL CNT CNT4.
 */
export class _74HCT193 extends Component.withPins({
  "B": "1",
  "QB": "2",
  "QA": "3",
  "DOWN": "4",
  "UP": "5",
  "QC": "6",
  "QD": "7",
  "GND": "8",
  "D": "9",
  "C": "10",
  "~{LOAD}": "11",
  "~{CO}": "12",
  "~{BO}": "13",
  "CLR": "14",
  "A": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", QB: "output", QA: "output", DOWN: "input", UP: "input", QC: "output", QD: "output", GND: "power_in", D: "input", C: "input", "~{LOAD}": "input", "~{CO}": "output", "~{BO}": "output", CLR: "input", A: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT193";
  override referencePrefix = "U";
}

/**
 * 3-to-8 line decoder/multiplexer with address latches, DIP-16/SOIC-16/SSOP-16
 *
 * KiCad symbol: `74xx:74HCT237`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SSOP*5.3x6.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hc237.pdf
 * Keywords: demux.
 */
export class _74HCT237 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{LE}": "4",
  "~{E1}": "5",
  "E2": "6",
  "Y7": "7",
  "GND": "8",
  "Y6": "9",
  "Y5": "10",
  "Y4": "11",
  "Y3": "12",
  "Y2": "13",
  "Y1": "14",
  "Y0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{LE}": "input", "~{E1}": "input", E2: "input", Y7: "output", GND: "power_in", Y6: "output", Y5: "output", Y4: "output", Y3: "output", Y2: "output", Y1: "output", Y0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT237";
  override referencePrefix = "U";
}

/**
 * 3-to-8 line decoder/multiplexer, DIP-16/SOIC-16/SSOP-16
 *
 * KiCad symbol: `74xx:74HCT238`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd74hc238.pdf
 * Keywords: demux.
 */
export class _74HCT238 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{E1}": "4",
  "~{E2}": "5",
  "E3": "6",
  "Y7": "7",
  "GND": "8",
  "Y6": "9",
  "Y5": "10",
  "Y4": "11",
  "Y3": "12",
  "Y2": "13",
  "Y1": "14",
  "Y0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{E1}": "input", "~{E2}": "input", E3: "input", Y7: "output", GND: "power_in", Y6: "output", Y5: "output", Y4: "output", Y3: "output", Y2: "output", Y1: "output", Y0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT238";
  override referencePrefix = "U";
}

/**
 * 8-bit buffer; 3-state; inverting
 *
 * KiCad symbol: `74xx:74HCT240`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x12.8mm*P1.27mm*, TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT240.pdf
 * Keywords: HCTMOS BUFFER 3State inv.
 */
export class _74HCT240 extends Component.withPins({
  "1OE": "1",
  "1A0": "2",
  "2Y0": "3",
  "1A1": "4",
  "2Y1": "5",
  "1A2": "6",
  "2Y2": "7",
  "1A3": "8",
  "2Y3": "9",
  "GND": "10",
  "2A3": "11",
  "1Y3": "12",
  "2A2": "13",
  "1Y2": "14",
  "2A1": "15",
  "1Y1": "16",
  "2A0": "17",
  "1Y0": "18",
  "2OE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1OE": "input", "1A0": "input", "2Y0": "tri_state", "1A1": "input", "2Y1": "tri_state", "1A2": "input", "2Y2": "tri_state", "1A3": "input", "2Y3": "tri_state", GND: "power_in", "2A3": "input", "1Y3": "tri_state", "2A2": "input", "1Y2": "tri_state", "2A1": "input", "1Y1": "tri_state", "2A0": "input", "1Y0": "tri_state", "2OE": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT240";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state
 *
 * KiCad symbol: `74xx:74HCT244`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*, SSOP*4.4x6.5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT244.pdf
 * Keywords: HCTMOS BUFFER 3State.
 */
export class _74HCT244 extends Component.withPins({
  "1OE": "1",
  "1A0": "2",
  "2Y0": "3",
  "1A1": "4",
  "2Y1": "5",
  "1A2": "6",
  "2Y2": "7",
  "1A3": "8",
  "2Y3": "9",
  "GND": "10",
  "2A3": "11",
  "1Y3": "12",
  "2A2": "13",
  "1Y2": "14",
  "2A1": "15",
  "1Y1": "16",
  "2A0": "17",
  "1Y0": "18",
  "2OE": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1OE": "input", "1A0": "input", "2Y0": "tri_state", "1A1": "input", "2Y1": "tri_state", "1A2": "input", "2Y2": "tri_state", "1A3": "input", "2Y3": "tri_state", GND: "power_in", "2A3": "input", "1Y3": "tri_state", "2A2": "input", "1Y2": "tri_state", "2A1": "input", "1Y1": "tri_state", "2A0": "input", "1Y0": "tri_state", "2OE": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT244";
  override referencePrefix = "U";
}

/**
 * 8-bit D Flip-Flop, reset
 *
 * KiCad symbol: `74xx:74HCT273`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SO?20*, SOIC?20*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT273.pdf
 * Keywords: HCTMOS DFF DFF8.
 */
export class _74HCT273 extends Component.withPins({
  "~{Mr}": "1",
  "Q0": "2",
  "D0": "3",
  "D1": "4",
  "Q1": "5",
  "Q2": "6",
  "D2": "7",
  "D3": "8",
  "Q3": "9",
  "GND": "10",
  "Cp": "11",
  "Q4": "12",
  "D4": "13",
  "D5": "14",
  "Q5": "15",
  "Q6": "16",
  "D6": "17",
  "D7": "18",
  "Q7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{Mr}": "input", Q0: "output", D0: "input", D1: "input", Q1: "output", Q2: "output", D2: "input", D3: "input", Q3: "output", GND: "power_in", Cp: "input", Q4: "output", D4: "input", D5: "input", Q5: "output", Q6: "output", D6: "input", D7: "input", Q7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT273";
  override referencePrefix = "U";
}

/**
 * 8-bit Latch, 3-state outputs
 *
 * KiCad symbol: `74xx:74HCT373`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*, SSOP?20*, TSSOP?20*.
 * @see https://www.ti.com/lit/ds/symlink/sn74hct373.pdf
 * Keywords: HCTMOS REG DFF DFF8 LATCH.
 */
export class _74HCT373 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "LE": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", LE: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT373";
  override referencePrefix = "U";
}

/**
 * 8-bit Register, 3-state outputs
 *
 * KiCad symbol: `74xx:74HCT374`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*.
 * @see https://www.ti.com/lit/ds/symlink/cd74hct374.pdf
 * Keywords: HCTMOS DFF DFF8 REG 3State.
 */
export class _74HCT374 extends Component.withPins({
  "OE": "1",
  "O0": "2",
  "D0": "3",
  "D1": "4",
  "O1": "5",
  "O2": "6",
  "D2": "7",
  "D3": "8",
  "O3": "9",
  "GND": "10",
  "Cp": "11",
  "O4": "12",
  "D4": "13",
  "D5": "14",
  "O5": "15",
  "O6": "16",
  "D6": "17",
  "D7": "18",
  "O7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", O0: "tri_state", D0: "input", D1: "input", O1: "tri_state", O2: "tri_state", D2: "input", D3: "input", O3: "tri_state", GND: "power_in", Cp: "input", O4: "tri_state", D4: "input", D5: "input", O5: "tri_state", O6: "tri_state", D6: "input", D7: "input", O7: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT374";
  override referencePrefix = "U";
}

/**
 * 8-channel analog multiplexer/demultiplexer, DIP-16/SOIC-16/TSSOP-16
 *
 * KiCad symbol: `74xx:74HCT4051`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SOIC*5.3x10.2mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hct4051.pdf
 * Keywords: TTL Multiplexer Demultiplexer Analog.
 */
export class _74HCT4051 extends Component.withPins({
  "A4": "1",
  "A6": "2",
  "A": "3",
  "A7": "4",
  "A5": "5",
  "~{E}": "6",
  "VEE": "7",
  "GND": "8",
  "S2": "9",
  "S1": "10",
  "S0": "11",
  "A3": "12",
  "A0": "13",
  "A1": "14",
  "A2": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A4: "passive", A6: "passive", A: "passive", A7: "passive", A5: "passive", "~{E}": "input", VEE: "power_in", GND: "power_in", S2: "input", S1: "input", S0: "input", A3: "passive", A0: "passive", A1: "passive", A2: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT4051";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line Driver 3-state outputs
 *
 * KiCad symbol: `74xx:74HCT541`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74HCT541
 * Keywords: TTL BUFFER 3State BUS.
 */
export class _74HCT541 extends Component.withPins({
  "G1": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "GND": "10",
  "Y7": "11",
  "Y6": "12",
  "Y5": "13",
  "Y4": "14",
  "Y3": "15",
  "Y2": "16",
  "Y1": "17",
  "Y0": "18",
  "G2": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", A5: "input", A6: "input", A7: "input", GND: "power_in", Y7: "tri_state", Y6: "tri_state", Y5: "tri_state", Y4: "tri_state", Y3: "tri_state", Y2: "tri_state", Y1: "tri_state", Y0: "tri_state", G2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT541";
  override referencePrefix = "U";
}

/**
 * 8-bit Register, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS574`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS574
 * Keywords: TTL REG DFF DFF8 3State.
 */
export class _74LS574 extends Component.withPins({
  "OE": "1",
  "D0": "2",
  "D1": "3",
  "D2": "4",
  "D3": "5",
  "D4": "6",
  "D5": "7",
  "D6": "8",
  "D7": "9",
  "GND": "10",
  "Cp": "11",
  "Q7": "12",
  "Q6": "13",
  "Q5": "14",
  "Q4": "15",
  "Q3": "16",
  "Q2": "17",
  "Q1": "18",
  "Q0": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", D0: "input", D1: "input", D2: "input", D3: "input", D4: "input", D5: "input", D6: "input", D7: "input", GND: "power_in", Cp: "input", Q7: "tri_state", Q6: "tri_state", Q5: "tri_state", Q4: "tri_state", Q3: "tri_state", Q2: "tri_state", Q1: "tri_state", Q0: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS574";
  override referencePrefix = "U";
}

/**
 * 8-bit Register, 3-state outputs
 *
 * KiCad symbol: `74xx:74HCT574`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74HCT574
 * Keywords: TTL REG DFF DFF8 3State.
 */
export class _74HCT574 extends Component.withPins({
  "OE": "1",
  "D0": "2",
  "D1": "3",
  "D2": "4",
  "D3": "5",
  "D4": "6",
  "D5": "7",
  "D6": "8",
  "D7": "9",
  "GND": "10",
  "Cp": "11",
  "Q7": "12",
  "Q6": "13",
  "Q5": "14",
  "Q4": "15",
  "Q3": "16",
  "Q2": "17",
  "Q1": "18",
  "Q0": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", D0: "input", D1: "input", D2: "input", D3: "input", D4: "input", D5: "input", D6: "input", D7: "input", GND: "power_in", Cp: "input", Q7: "tri_state", Q6: "tri_state", Q5: "tri_state", Q4: "tri_state", Q3: "tri_state", Q2: "tri_state", Q1: "tri_state", Q0: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT574";
  override referencePrefix = "U";
}

/**
 * 8-bit serial in/out Shift Register 3-State Outputs
 *
 * KiCad symbol: `74xx:74HCT595`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT595.pdf
 * Keywords: HCTMOS SR 3State.
 */
export class _74HCT595 extends Component.withPins({
  "QB": "1",
  "QC": "2",
  "QD": "3",
  "QE": "4",
  "QF": "5",
  "QG": "6",
  "QH": "7",
  "GND": "8",
  "QH'": "9",
  "~{SRCLR}": "10",
  "SRCLK": "11",
  "RCLK": "12",
  "~{OE}": "13",
  "SER": "14",
  "QA": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QB: "tri_state", QC: "tri_state", QD: "tri_state", QE: "tri_state", QF: "tri_state", QG: "tri_state", QH: "tri_state", GND: "power_in", "QH'": "output", "~{SRCLR}": "input", SRCLK: "input", RCLK: "input", "~{OE}": "input", SER: "input", QA: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT595";
  override referencePrefix = "U";
}

/**
 * 8-bit serial in/out Shift Register Open Collector Outputs
 *
 * KiCad symbol: `74xx:74HCT596`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT595.pdf
 * Keywords: HCTMOS SR OpenCollector.
 */
export class _74HCT596 extends Component.withPins({
  "QB": "1",
  "QC": "2",
  "QD": "3",
  "QE": "4",
  "QF": "5",
  "QG": "6",
  "QH": "7",
  "GND": "8",
  "QH'": "9",
  "~{SRCLR}": "10",
  "SRCLK": "11",
  "RCLK": "12",
  "~{OE}": "13",
  "SER": "14",
  "QA": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QB: "open_collector", QC: "open_collector", QD: "open_collector", QE: "open_collector", QF: "open_collector", QG: "open_collector", QH: "open_collector", GND: "power_in", "QH'": "output", "~{SRCLR}": "input", SRCLK: "input", RCLK: "input", "~{OE}": "input", SER: "input", QA: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT596";
  override referencePrefix = "U";
}

/**
 * 8-bit magnitude comparator
 *
 * KiCad symbol: `74xx:74HCT688`. Reference prefix: `U`.
 * Footprint filters: DIP?20*, SOIC?20*, SO?20*, TSSOP?20*.
 * @see https://www.ti.com/lit/ds/symlink/cd54hc688.pdf
 * Keywords: HCTMOS DECOD Arith.
 */
export class _74HCT688 extends Component.withPins({
  "G": "1",
  "P0": "2",
  "R0": "3",
  "P1": "4",
  "R1": "5",
  "P2": "6",
  "R2": "7",
  "P3": "8",
  "R3": "9",
  "GND": "10",
  "P4": "11",
  "R4": "12",
  "P5": "13",
  "R5": "14",
  "P6": "15",
  "R6": "16",
  "P7": "17",
  "R7": "18",
  "P=R": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", P0: "input", R0: "input", P1: "input", R1: "input", P2: "input", R2: "input", P3: "input", R3: "input", GND: "power_in", P4: "input", R4: "input", P5: "input", R5: "input", P6: "input", R6: "input", P7: "input", R7: "input", "P=R": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT688";
  override referencePrefix = "U";
}

/**
 * Dual D Flip-flop, Set & Reset
 *
 * KiCad symbol: `74xx:74HCT74`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x8.65mm_P1.27mm*, TSSOP*4.4x5mm_P0.65mm*, DHVQFN*2.5x3mm_P0.5mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT74.pdf
 * Keywords: TTL DFF.
 */
export class _74HCT74 extends Component.withPins({
  "~{R}_1": "1",
  "D_2": "2",
  "C_3": "3",
  "~{S}_4": "4",
  "Q_5": "5",
  "~{Q}_6": "6",
  "~{Q}_8": "8",
  "Q_9": "9",
  "~{S}_10": "10",
  "C_11": "11",
  "D_12": "12",
  "~{R}_13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{R}_1": "input", D_2: "input", C_3: "input", "~{S}_4": "input", Q_5: "output", "~{Q}_6": "output", "~{Q}_8": "output", Q_9: "output", "~{S}_10": "input", C_11: "input", D_12: "input", "~{R}_13": "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT74";
  override referencePrefix = "U";
}

/**
 * 4-bit Comparator
 *
 * KiCad symbol: `74xx:74HCT85`. Reference prefix: `U`.
 * Footprint filters: DIP?16*, SO*3.9*9.9mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT85.pdf
 * Keywords: TTL COMP ARITH.
 */
export class _74HCT85 extends Component.withPins({
  "B3": "1",
  "Ia<b": "2",
  "Ia=b": "3",
  "Ia>b": "4",
  "Oa>b": "5",
  "Oa=b": "6",
  "Oa<b": "7",
  "GND": "8",
  "B0": "9",
  "A0": "10",
  "B1": "11",
  "A1": "12",
  "A2": "13",
  "B2": "14",
  "A3": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B3: "input", "Ia<b": "input", "Ia=b": "input", "Ia>b": "input", "Oa>b": "output", "Oa=b": "output", "Oa<b": "output", GND: "power_in", B0: "input", A0: "input", B1: "input", A1: "input", A2: "input", B2: "input", A3: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74HCT85";
  override referencePrefix = "U";
}

/**
 * CMOS hex buffer (open drain) with 5V tolerant inputs
 *
 * KiCad symbol: `74xx:74LCX07`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, DIP*W7.62mm*.
 * @see www.st.com/resource/en/datasheet/74lcx07.pdf
 * Keywords: CMOS hex buffer.
 */
export class _74LCX07 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "open_collector", P3: "input", P4: "open_collector", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "open_collector", P11: "input", P12: "open_collector", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LCX07";
  override referencePrefix = "U";
}

/**
 * quad 2-input NAND gate, open collector outputs NRND
 *
 * KiCad symbol: `74xx:74LS01`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.nteinc.com/specs/7400to7499/pdf/nte74LS01.pdf
 * Keywords: TTL nand 2-input open collector.
 */
export class _74LS01 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "open_collector", P2: "input", P3: "input", P4: "open_collector", P5: "input", P6: "input", P8: "input", P9: "input", P10: "open_collector", P11: "input", P12: "input", P13: "open_collector", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS01";
  override referencePrefix = "U";
}

/**
 * Quad 2-input NAND open collector
 *
 * KiCad symbol: `74xx:74LS03`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm**.
 * @see http://www.ti.com/lit/gpn/sn74LS03
 * Keywords: TTL Nand2 OpenColl.
 */
export class _74LS03 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "open_collector", P4: "input", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "input", P11: "open_collector", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS03";
  override referencePrefix = "U";
}

/**
 * Inverter Open Collect
 *
 * KiCad symbol: `74xx:74LS05`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS05
 * Keywords: TTL not inv OpenCol.
 */
export class _74LS05 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "open_collector", P3: "input", P4: "open_collector", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "open_collector", P11: "input", P12: "open_collector", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS05";
  override referencePrefix = "U";
}

/**
 * Inverter Open Collect
 *
 * KiCad symbol: `74xx:74LS06`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS06
 * Keywords: TTL not inv OpenCol.
 */
export class _74LS06 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "open_collector", P3: "input", P4: "open_collector", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "open_collector", P11: "input", P12: "open_collector", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS06";
  override referencePrefix = "U";
}

/**
 * Inverter Open Collect
 *
 * KiCad symbol: `74xx:74LS06N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS06N
 * Keywords: TTL not inv OpenCol.
 */
export class _74LS06N extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "open_collector", P3: "input", P4: "open_collector", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "open_collector", P11: "input", P12: "open_collector", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS06N";
  override referencePrefix = "U";
}

/**
 * Hex Buffers and Drivers With Open Collector High Voltage Outputs
 *
 * KiCad symbol: `74xx:74LS07`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, DIP*W7.62mm*.
 * @see www.ti.com/lit/ds/symlink/sn74ls07.pdf
 * Keywords: TTL hex buffer OpenCol.
 */
export class _74LS07 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "open_collector", P3: "input", P4: "open_collector", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "open_collector", P11: "input", P12: "open_collector", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS07";
  override referencePrefix = "U";
}

/**
 * Quad And2
 *
 * KiCad symbol: `74xx:74LS08`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS08
 * Keywords: TTL and2.
 */
export class _74LS08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS08";
  override referencePrefix = "U";
}

/**
 * Quad 2-input AND Open Collect
 *
 * KiCad symbol: `74xx:74LS09`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS09
 * Keywords: TTL and2 OpenCol.
 */
export class _74LS09 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "open_collector", P4: "input", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "input", P11: "open_collector", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS09";
  override referencePrefix = "U";
}

/**
 * Triple 3-input NAND
 *
 * KiCad symbol: `74xx:74LS10`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS10
 * Keywords: TTL Nand3.
 */
export class _74LS10 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P12": "12",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P12: "output", P13: "input", P3: "input", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS10";
  override referencePrefix = "U";
}

/**
 * Dual JK Flip-Flop, reset
 *
 * KiCad symbol: `74xx:74LS107`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS107
 * Keywords: TTL JK.
 */
export class _74LS107 extends Component.withPins({
  "J_1": "1",
  "~{Q}_2": "2",
  "Q_3": "3",
  "K_4": "4",
  "C_12": "12",
  "~{R}_13": "13",
  "Q_5": "5",
  "~{Q}_6": "6",
  "J_8": "8",
  "C_9": "9",
  "~{R}_10": "10",
  "K_11": "11",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { J_1: "input", "~{Q}_2": "output", Q_3: "output", K_4: "input", C_12: "input", "~{R}_13": "input", Q_5: "output", "~{Q}_6": "output", J_8: "input", C_9: "input", "~{R}_10": "input", K_11: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS107";
  override referencePrefix = "U";
}

/**
 * Dual JK Flip-Flop, Set & Reset
 *
 * KiCad symbol: `74xx:74LS109`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS109
 * Keywords: TTL JK.
 */
export class _74LS109 extends Component.withPins({
  "~{R}_1": "1",
  "J_2": "2",
  "~{K}_3": "3",
  "C_4": "4",
  "~{S}_5": "5",
  "Q_6": "6",
  "~{Q}_7": "7",
  "~{Q}_9": "9",
  "Q_10": "10",
  "~{S}_11": "11",
  "C_12": "12",
  "~{K}_13": "13",
  "J_14": "14",
  "~{R}_15": "15",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{R}_1": "input", J_2: "input", "~{K}_3": "input", C_4: "input", "~{S}_5": "input", Q_6: "output", "~{Q}_7": "output", "~{Q}_9": "output", Q_10: "output", "~{S}_11": "input", C_12: "input", "~{K}_13": "input", J_14: "input", "~{R}_15": "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS109";
  override referencePrefix = "U";
}

/**
 * Triple 3-input AND
 *
 * KiCad symbol: `74xx:74LS11`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS11
 * Keywords: TTL And3.
 */
export class _74LS11 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P12": "12",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P12: "output", P13: "input", P3: "input", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS11";
  override referencePrefix = "U";
}

/**
 * dual JK Flip-Flop, Set & Reset
 *
 * KiCad symbol: `74xx:74LS112`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS112
 * Keywords: TTL JK.
 */
export class _74LS112 extends Component.withPins({
  "C_1": "1",
  "K_2": "2",
  "J_3": "3",
  "~{S}_4": "4",
  "Q_5": "5",
  "~{Q}_6": "6",
  "~{R}_15": "15",
  "~{Q}_7": "7",
  "Q_9": "9",
  "~{S}_10": "10",
  "J_11": "11",
  "K_12": "12",
  "C_13": "13",
  "~{R}_14": "14",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_1: "input", K_2: "input", J_3: "input", "~{S}_4": "input", Q_5: "output", "~{Q}_6": "output", "~{R}_15": "input", "~{Q}_7": "output", Q_9: "output", "~{S}_10": "input", J_11: "input", K_12: "input", C_13: "input", "~{R}_14": "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS112";
  override referencePrefix = "U";
}

/**
 * dual JK flip-flop, Set
 *
 * KiCad symbol: `74xx:74LS113`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS113
 * Keywords: TTL JK.
 */
export class _74LS113 extends Component.withPins({
  "C_1": "1",
  "K_2": "2",
  "J_3": "3",
  "~{S}_4": "4",
  "Q_5": "5",
  "~{Q}_6": "6",
  "~{Q}_8": "8",
  "Q_9": "9",
  "~{S}_10": "10",
  "J_11": "11",
  "K_12": "12",
  "C_13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_1: "input", K_2: "input", J_3: "input", "~{S}_4": "input", Q_5: "output", "~{Q}_6": "output", "~{Q}_8": "output", Q_9: "output", "~{S}_10": "input", J_11: "input", K_12: "input", C_13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS113";
  override referencePrefix = "U";
}

/**
 * Dual JK flip-flop, common Clock & Reset, Set
 *
 * KiCad symbol: `74xx:74LS114`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS114
 * Keywords: TTL JK.
 */
export class _74LS114 extends Component.withPins({
  "~{R}": "1",
  "K_2": "2",
  "J_3": "3",
  "~{S}_4": "4",
  "Q_5": "5",
  "~{Q}_6": "6",
  "C": "13",
  "~{Q}_8": "8",
  "Q_9": "9",
  "~{S}_10": "10",
  "J_11": "11",
  "K_12": "12",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{R}": "input", K_2: "input", J_3: "input", "~{S}_4": "input", Q_5: "output", "~{Q}_6": "output", C: "input", "~{Q}_8": "output", Q_9: "output", "~{S}_10": "input", J_11: "input", K_12: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS114";
  override referencePrefix = "U";
}

/**
 * Triple 3-input NAND Open Collector
 *
 * KiCad symbol: `74xx:74LS12`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS12
 * Keywords: TTL Nand3 OpenCol.
 */
export class _74LS12 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P12": "12",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P12: "open_collector", P13: "input", P3: "input", P4: "input", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "input", P11: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS12";
  override referencePrefix = "U";
}

/**
 * monostable multivibrator with Schmitt-trigger inputs
 *
 * KiCad symbol: `74xx:74LS121`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74121
 * Keywords: monostable.
 */
export class _74LS121 extends Component.withPins({
  "~{Q}": "1",
  "A1": "3",
  "A2": "4",
  "B": "5",
  "Q": "6",
  "GND": "7",
  "Rint": "9",
  "Cext": "10",
  "R/Cext": "11",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{Q}": "output", A1: "input", A2: "input", B: "input", Q: "output", GND: "power_in", Rint: "input", Cext: "input", "R/Cext": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS121";
  override referencePrefix = "U";
}

/**
 * Retriggerable Monostable
 *
 * KiCad symbol: `74xx:74LS122`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS122
 * Keywords: TTL monostable.
 */
export class _74LS122 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "B1": "3",
  "B2": "4",
  "Clr": "5",
  "~{Q}": "6",
  "GND": "7",
  "Q": "8",
  "Rint": "9",
  "Cext": "11",
  "R/Cext": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "input", A2: "input", B1: "input", B2: "input", Clr: "input", "~{Q}": "output", GND: "power_in", Q: "output", Rint: "input", Cext: "input", "R/Cext": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS122";
  override referencePrefix = "U";
}

/**
 * Quad buffer 3-State outputs
 *
 * KiCad symbol: `74xx:74LS126`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS126
 * Keywords: TTL Buffer 3State.
 */
export class _74LS126 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "tri_state", P4: "input", P5: "input", P6: "tri_state", P8: "tri_state", P9: "input", P10: "input", P11: "tri_state", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS126";
  override referencePrefix = "U";
}

/**
 * Dual 4-input NAND Schmitt trigger
 *
 * KiCad symbol: `74xx:74LS13`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS13
 * Keywords: TTL Nand4.
 */
export class _74LS13 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS13";
  override referencePrefix = "U";
}

/**
 * Quad 2-input NAND Schmitt trigger
 *
 * KiCad symbol: `74xx:74LS132`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS132
 * Keywords: TTL Nand2.
 */
export class _74LS132 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS132";
  override referencePrefix = "U";
}

/**
 * NAND 13-input
 *
 * KiCad symbol: `74xx:74LS133`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS133
 * Keywords: TTL Nand13.
 */
export class _74LS133 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "input", P4: "input", P5: "input", P6: "input", P7: "input", P9: "output", P10: "input", P11: "input", P12: "input", P13: "input", P14: "input", P15: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS133";
  override referencePrefix = "U";
}

/**
 * Quad 2-input XOR Open Collector
 *
 * KiCad symbol: `74xx:74LS136`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn54ls136.pdf
 * Keywords: TTL XOR2 OpenCol.
 */
export class _74LS136 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "open_collector", P4: "input", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "input", P11: "open_collector", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS136";
  override referencePrefix = "U";
}

/**
 * Decoder 3 to 8, address latches
 *
 * KiCad symbol: `74xx:74LS137`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS137
 * Keywords: TTL DECOD8 DECOD.
 */
export class _74LS137 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{GL}": "4",
  "~{G2}": "5",
  "G1": "6",
  "Y7": "7",
  "GND": "8",
  "Y6": "9",
  "Y5": "10",
  "Y4": "11",
  "Y3": "12",
  "Y2": "13",
  "Y1": "14",
  "Y0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{GL}": "input", "~{G2}": "input", G1: "input", Y7: "output", GND: "power_in", Y6: "output", Y5: "output", Y4: "output", Y3: "output", Y2: "output", Y1: "output", Y0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS137";
  override referencePrefix = "U";
}

/**
 * Decoder 3 to 8 active low outputs
 *
 * KiCad symbol: `74xx:74LS138`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS138
 * Keywords: TTL DECOD DECOD8.
 */
export class _74LS138 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "E1": "4",
  "E2": "5",
  "E3": "6",
  "O7": "7",
  "GND": "8",
  "O6": "9",
  "O5": "10",
  "O4": "11",
  "O3": "12",
  "O2": "13",
  "O1": "14",
  "O0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", E1: "input", E2: "input", E3: "input", O7: "output", GND: "power_in", O6: "output", O5: "output", O4: "output", O3: "output", O2: "output", O1: "output", O0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS138";
  override referencePrefix = "U";
}

/**
 * Dual Decoder 1 of 4, Active low outputs
 *
 * KiCad symbol: `74xx:74LS139`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls139a.pdf
 * Keywords: TTL DECOD4.
 */
export class _74LS139 extends Component.withPins({
  "E_1": "1",
  "A0_2": "2",
  "A1_3": "3",
  "O0_4": "4",
  "O1_5": "5",
  "O2_6": "6",
  "O3_7": "7",
  "O3_9": "9",
  "O2_10": "10",
  "O1_11": "11",
  "O0_12": "12",
  "A1_13": "13",
  "A0_14": "14",
  "E_15": "15",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E_1: "input", A0_2: "input", A1_3: "input", O0_4: "output", O1_5: "output", O2_6: "output", O3_7: "output", O3_9: "output", O2_10: "output", O1_11: "output", O0_12: "output", A1_13: "input", A0_14: "input", E_15: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS139";
  override referencePrefix = "U";
}

/**
 * Hex inverter schmitt trigger
 *
 * KiCad symbol: `74xx:74LS14`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS14
 * Keywords: TTL not inverter.
 */
export class _74LS14 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS14";
  override referencePrefix = "U";
}

/**
 * Decoder 1 to 10, Open Collector
 *
 * KiCad symbol: `74xx:74LS145`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS145
 * Keywords: TTL DECOD10 OpenColl.
 */
export class _74LS145 extends Component.withPins({
  "Q0": "1",
  "Q1": "2",
  "Q2": "3",
  "Q3": "4",
  "Q4": "5",
  "Q5": "6",
  "Q6": "7",
  "GND": "8",
  "Q7": "9",
  "Q8": "10",
  "Q9": "11",
  "P3": "12",
  "P2": "13",
  "P1": "14",
  "P0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q0: "open_collector", Q1: "open_collector", Q2: "open_collector", Q3: "open_collector", Q4: "open_collector", Q5: "open_collector", Q6: "open_collector", GND: "power_in", Q7: "open_collector", Q8: "open_collector", Q9: "open_collector", P3: "input", P2: "input", P1: "input", P0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS145";
  override referencePrefix = "U";
}

/**
 * Priority Encoder, 10 to 4
 *
 * KiCad symbol: `74xx:74LS147`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS147
 * Keywords: TTL ENCOD.
 */
export class _74LS147 extends Component.withPins({
  "E4": "1",
  "E5": "2",
  "E6": "3",
  "E7": "4",
  "E8": "5",
  "S2": "6",
  "S1": "7",
  "GND": "8",
  "S0": "9",
  "E9": "10",
  "E1": "11",
  "E2": "12",
  "E3": "13",
  "S3": "14",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E4: "input", E5: "input", E6: "input", E7: "input", E8: "input", S2: "output", S1: "output", GND: "power_in", S0: "output", E9: "input", E1: "input", E2: "input", E3: "input", S3: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS147";
  override referencePrefix = "U";
}

/**
 * Priority Encoder 3 to 8 cascadable
 *
 * KiCad symbol: `74xx:74LS148`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS148
 * Keywords: TTL ENCOD.
 */
export class _74LS148 extends Component.withPins({
  "I4": "1",
  "I5": "2",
  "I6": "3",
  "I7": "4",
  "EI": "5",
  "S2": "6",
  "S1": "7",
  "GND": "8",
  "S0": "9",
  "IO": "10",
  "I1": "11",
  "I2": "12",
  "I3": "13",
  "GS": "14",
  "EO": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { I4: "input", I5: "input", I6: "input", I7: "input", EI: "input", S2: "output", S1: "output", GND: "power_in", S0: "output", IO: "input", I1: "input", I2: "input", I3: "input", GS: "output", EO: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS148";
  override referencePrefix = "U";
}

/**
 * Triple 3-input AND
 *
 * KiCad symbol: `74xx:74LS15`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS15
 * Keywords: TTL And3.
 */
export class _74LS15 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P12": "12",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P12: "open_collector", P13: "input", P3: "input", P4: "input", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "input", P11: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS15";
  override referencePrefix = "U";
}

/**
 * Multiplexer 8 to 1
 *
 * KiCad symbol: `74xx:74LS151`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS151
 * Keywords: TTL MUX8.
 */
export class _74LS151 extends Component.withPins({
  "I3": "1",
  "I2": "2",
  "I1": "3",
  "I0": "4",
  "Z": "5",
  "~{Z}": "6",
  "~{E}": "7",
  "GND": "8",
  "S2": "9",
  "S1": "10",
  "S0": "11",
  "I7": "12",
  "I6": "13",
  "I5": "14",
  "I4": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { I3: "input", I2: "input", I1: "input", I0: "input", Z: "output", "~{Z}": "output", "~{E}": "input", GND: "power_in", S2: "input", S1: "input", S0: "input", I7: "input", I6: "input", I5: "input", I4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS151";
  override referencePrefix = "U";
}

/**
 * Dual Multiplexer 4 to 1
 *
 * KiCad symbol: `74xx:74LS153`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS153
 * Keywords: TTL Mux4.
 */
export class _74LS153 extends Component.withPins({
  "Ea": "1",
  "S1": "2",
  "I3a": "3",
  "I2a": "4",
  "I1a": "5",
  "I0a": "6",
  "Za": "7",
  "GND": "8",
  "Zb": "9",
  "I0b": "10",
  "I1b": "11",
  "I2b": "12",
  "I3b": "13",
  "S0": "14",
  "Eb": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Ea: "input", S1: "input", I3a: "input", I2a: "input", I1a: "input", I0a: "input", Za: "output", GND: "power_in", Zb: "output", I0b: "input", I1b: "input", I2b: "input", I3b: "input", S0: "input", Eb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS153";
  override referencePrefix = "U";
}

/**
 * Decoder 4 to 16
 *
 * KiCad symbol: `74xx:74LS154`. Reference prefix: `U`.
 * Footprint filters: DIP?24*.
 * @see http://www.ti.com/lit/gpn/sn74LS154
 * Keywords: TTL DECOD16 DECOD.
 */
export class _74LS154 extends Component.withPins({
  "S0": "1",
  "S1": "2",
  "S2": "3",
  "S3": "4",
  "S4": "5",
  "S5": "6",
  "S6": "7",
  "S7": "8",
  "S8": "9",
  "S9": "10",
  "S10": "11",
  "GND": "12",
  "S11": "13",
  "S12": "14",
  "S13": "15",
  "S14": "16",
  "S15": "17",
  "E0": "18",
  "E1": "19",
  "A3": "20",
  "A2": "21",
  "A1": "22",
  "A0": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S0: "output", S1: "output", S2: "output", S3: "output", S4: "output", S5: "output", S6: "output", S7: "output", S8: "output", S9: "output", S10: "output", GND: "power_in", S11: "output", S12: "output", S13: "output", S14: "output", S15: "output", E0: "input", E1: "input", A3: "input", A2: "input", A1: "input", A0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS154";
  override referencePrefix = "U";
}

/**
 * Dual 2 to 4 lines Decoder/Demultiplexer
 *
 * KiCad symbol: `74xx:74LS155`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS155
 * Keywords: TTL DECOD8 DECOD4 DEMUX4 DEMUX8 DEMUX DECOD.
 */
export class _74LS155 extends Component.withPins({
  "Ea1": "1",
  "Ea2": "2",
  "A1": "3",
  "Q3a": "4",
  "Q2a": "5",
  "Q1a": "6",
  "Q0a": "7",
  "GND": "8",
  "Q0b": "9",
  "Q1b": "10",
  "Q2b": "11",
  "Q3b": "12",
  "A0": "13",
  "Eb1": "14",
  "Eb2": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Ea1: "input", Ea2: "input", A1: "input", Q3a: "output", Q2a: "output", Q1a: "output", Q0a: "output", GND: "power_in", Q0b: "output", Q1b: "output", Q2b: "output", Q3b: "output", A0: "input", Eb1: "input", Eb2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS155";
  override referencePrefix = "U";
}

/**
 * Dual 2 to 4 lines Decoder/Demultiplexer, Open Collector
 *
 * KiCad symbol: `74xx:74LS156`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS156
 * Keywords: TTL DECOD8 DECOD4 DEMUX4 DEMUX8 OpenCol.
 */
export class _74LS156 extends Component.withPins({
  "Ea1": "1",
  "Ea2": "2",
  "A1": "3",
  "Q3a": "4",
  "Q2a": "5",
  "Q1a": "6",
  "Q0a": "7",
  "GND": "8",
  "Q0b": "9",
  "Q1b": "10",
  "Q2b": "11",
  "Q3b": "12",
  "A0": "13",
  "Eb1": "14",
  "Eb2": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Ea1: "input", Ea2: "input", A1: "input", Q3a: "output", Q2a: "output", Q1a: "output", Q0a: "output", GND: "power_in", Q0b: "output", Q1b: "output", Q2b: "output", Q3b: "output", A0: "input", Eb1: "input", Eb2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS156";
  override referencePrefix = "U";
}

/**
 * Quad 2 to 1 line Multiplexer
 *
 * KiCad symbol: `74xx:74LS157`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS157
 * Keywords: TTL MUX MUX2.
 */
export class _74LS157 extends Component.withPins({
  "S": "1",
  "I0a": "2",
  "I1a": "3",
  "Za": "4",
  "I0b": "5",
  "I1b": "6",
  "Zb": "7",
  "GND": "8",
  "Zc": "9",
  "I1c": "10",
  "I0c": "11",
  "Zd": "12",
  "I1d": "13",
  "I0d": "14",
  "E": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "input", I0a: "input", I1a: "input", Za: "output", I0b: "input", I1b: "input", Zb: "output", GND: "power_in", Zc: "output", I1c: "input", I0c: "input", Zd: "output", I1d: "input", I0d: "input", E: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS157";
  override referencePrefix = "U";
}

/**
 * Quad 2 to 1 multiplexer
 *
 * KiCad symbol: `74xx:74LS158`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS158
 * Keywords: TTL Mux MUX2.
 */
export class _74LS158 extends Component.withPins({
  "S": "1",
  "I0a": "2",
  "I1a": "3",
  "Za": "4",
  "I0b": "5",
  "I1b": "6",
  "Zb": "7",
  "GND": "8",
  "Zd": "9",
  "I1d": "10",
  "I0d": "11",
  "Zc": "12",
  "I1c": "13",
  "I0c": "14",
  "E": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "input", I0a: "input", I1a: "input", Za: "output", I0b: "input", I1b: "input", Zb: "output", GND: "power_in", Zd: "output", I1d: "input", I0d: "input", Zc: "output", I1c: "input", I0c: "input", E: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS158";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit programmable binary Counter
 *
 * KiCad symbol: `74xx:74LS161`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS161
 * Keywords: TTL CNT CNT4.
 */
export class _74LS161 extends Component.withPins({
  "~{MR}": "1",
  "CP": "2",
  "D0": "3",
  "D1": "4",
  "D2": "5",
  "D3": "6",
  "CEP": "7",
  "GND": "8",
  "~{PE}": "9",
  "CET": "10",
  "Q3": "11",
  "Q2": "12",
  "Q1": "13",
  "Q0": "14",
  "TC": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "input", CP: "input", D0: "input", D1: "input", D2: "input", D3: "input", CEP: "input", GND: "power_in", "~{PE}": "input", CET: "input", Q3: "output", Q2: "output", Q1: "output", Q0: "output", TC: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS161";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit programmable decimal Counter
 *
 * KiCad symbol: `74xx:74LS160`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS160
 * Keywords: TTL CNT CNT4.
 */
export class _74LS160 extends Component.withPins({
  "~{MR}": "1",
  "CP": "2",
  "D0": "3",
  "D1": "4",
  "D2": "5",
  "D3": "6",
  "CEP": "7",
  "GND": "8",
  "~{PE}": "9",
  "CET": "10",
  "Q3": "11",
  "Q2": "12",
  "Q1": "13",
  "Q0": "14",
  "TC": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "input", CP: "input", D0: "input", D1: "input", D2: "input", D3: "input", CEP: "input", GND: "power_in", "~{PE}": "input", CET: "input", Q3: "output", Q2: "output", Q1: "output", Q0: "output", TC: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS160";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit programmable decimal Counter
 *
 * KiCad symbol: `74xx:74LS162`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS162
 * Keywords: TTL CNT CNT4.
 */
export class _74LS162 extends Component.withPins({
  "~{MR}": "1",
  "CP": "2",
  "D0": "3",
  "D1": "4",
  "D2": "5",
  "D3": "6",
  "CEP": "7",
  "GND": "8",
  "~{PE}": "9",
  "CET": "10",
  "Q3": "11",
  "Q2": "12",
  "Q1": "13",
  "Q0": "14",
  "TC": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "input", CP: "input", D0: "input", D1: "input", D2: "input", D3: "input", CEP: "input", GND: "power_in", "~{PE}": "input", CET: "input", Q3: "output", Q2: "output", Q1: "output", Q0: "output", TC: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS162";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit programmable binary Counter
 *
 * KiCad symbol: `74xx:74LS163`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS163
 * Keywords: TTL CNT CNT4.
 */
export class _74LS163 extends Component.withPins({
  "~{MR}": "1",
  "CP": "2",
  "D0": "3",
  "D1": "4",
  "D2": "5",
  "D3": "6",
  "CEP": "7",
  "GND": "8",
  "~{PE}": "9",
  "CET": "10",
  "Q3": "11",
  "Q2": "12",
  "Q1": "13",
  "Q0": "14",
  "TC": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "input", CP: "input", D0: "input", D1: "input", D2: "input", D3: "input", CEP: "input", GND: "power_in", "~{PE}": "input", CET: "input", Q3: "output", Q2: "output", Q1: "output", Q0: "output", TC: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS163";
  override referencePrefix = "U";
}

/**
 * Shift Register 8-bit, parallel load
 *
 * KiCad symbol: `74xx:74LS166`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS166
 * Keywords: TTL SR SR8.
 */
export class _74LS166 extends Component.withPins({
  "Ds": "1",
  "A": "2",
  "B": "3",
  "C": "4",
  "D": "5",
  "CE": "6",
  "Clk": "7",
  "GND": "8",
  "Clr": "9",
  "E": "10",
  "F": "11",
  "G": "12",
  "Qh": "13",
  "H": "14",
  "PE": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Ds: "input", A: "input", B: "input", C: "input", D: "input", CE: "input", Clk: "input", GND: "power_in", Clr: "input", E: "input", F: "input", G: "input", Qh: "output", H: "input", PE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS166";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit Up/Down Decimal counter
 *
 * KiCad symbol: `74xx:74LS168`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS168
 * Keywords: TTL CNT CNT4.
 */
export class _74LS168 extends Component.withPins({
  "U/~{D}": "1",
  "CP": "2",
  "P0": "3",
  "P1": "4",
  "P2": "5",
  "P3": "6",
  "~{CEP}": "7",
  "GND": "8",
  "~{PE}": "9",
  "~{CET}": "10",
  "Q3": "11",
  "Q2": "12",
  "Q1": "13",
  "Q0": "14",
  "~{TC}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "U/~{D}": "input", CP: "input", P0: "input", P1: "input", P2: "input", P3: "input", "~{CEP}": "input", GND: "power_in", "~{PE}": "input", "~{CET}": "input", Q3: "output", Q2: "output", Q1: "output", Q0: "output", "~{TC}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS168";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit Up/Down binary counter
 *
 * KiCad symbol: `74xx:74LS169`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS169
 * Keywords: TTL CNT CNT4.
 */
export class _74LS169 extends Component.withPins({
  "U/~{D}": "1",
  "CP": "2",
  "P0": "3",
  "P1": "4",
  "P2": "5",
  "P3": "6",
  "~{CEP}": "7",
  "GND": "8",
  "~{PE}": "9",
  "~{CET}": "10",
  "Q3": "11",
  "Q2": "12",
  "Q1": "13",
  "Q0": "14",
  "~{TC}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "U/~{D}": "input", CP: "input", P0: "input", P1: "input", P2: "input", P3: "input", "~{CEP}": "input", GND: "power_in", "~{PE}": "input", "~{CET}": "input", Q3: "output", Q2: "output", Q1: "output", Q0: "output", "~{TC}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS169";
  override referencePrefix = "U";
}

/**
 * 4 x 4 Register Files Open Collector
 *
 * KiCad symbol: `74xx:74LS170`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS170
 * Keywords: TTL Register OpenCol.
 */
export class _74LS170 extends Component.withPins({
  "D2": "1",
  "D3": "2",
  "D4": "3",
  "Rb": "4",
  "Ra": "5",
  "Q4": "6",
  "Q3": "7",
  "GND": "8",
  "Q2": "9",
  "Q1": "10",
  "~{Er}": "11",
  "~{Ew}": "12",
  "Wb": "13",
  "Wa": "14",
  "D1": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D2: "input", D3: "input", D4: "input", Rb: "input", Ra: "input", Q4: "tri_state", Q3: "tri_state", GND: "power_in", Q2: "tri_state", Q1: "tri_state", "~{Er}": "input", "~{Ew}": "input", Wb: "input", Wa: "input", D1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS170";
  override referencePrefix = "U";
}

/**
 * Hex D-type Flip-Flop, reset
 *
 * KiCad symbol: `74xx:74LS174`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS174
 * Keywords: TTL REG REG6 DFF.
 */
export class _74LS174 extends Component.withPins({
  "~{Mr}": "1",
  "Q0": "2",
  "D0": "3",
  "D1": "4",
  "Q1": "5",
  "D2": "6",
  "Q2": "7",
  "GND": "8",
  "Cp": "9",
  "Q3": "10",
  "D3": "11",
  "Q4": "12",
  "D4": "13",
  "D5": "14",
  "Q5": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{Mr}": "input", Q0: "output", D0: "input", D1: "input", Q1: "output", D2: "input", Q2: "output", GND: "power_in", Cp: "input", Q3: "output", D3: "input", Q4: "output", D4: "input", D5: "input", Q5: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS174";
  override referencePrefix = "U";
}

/**
 * 4-bit D Flip-Flop, reset
 *
 * KiCad symbol: `74xx:74LS175`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS175
 * Keywords: TTL REG REG4 DFF.
 */
export class _74LS175 extends Component.withPins({
  "~{Mr}": "1",
  "Q0": "2",
  "~{Q0}": "3",
  "D0": "4",
  "D1": "5",
  "~{Q1}": "6",
  "Q1": "7",
  "GND": "8",
  "Cp": "9",
  "Q2": "10",
  "~{Q2}": "11",
  "D2": "12",
  "D3": "13",
  "~{Q3}": "14",
  "Q3": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{Mr}": "input", Q0: "output", "~{Q0}": "output", D0: "input", D1: "input", "~{Q1}": "output", Q1: "output", GND: "power_in", Cp: "input", Q2: "output", "~{Q2}": "output", D2: "input", D3: "input", "~{Q3}": "output", Q3: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS175";
  override referencePrefix = "U";
}

/**
 * Arithmetic logic unit
 *
 * KiCad symbol: `74xx:74LS181`. Reference prefix: `U`.
 * Footprint filters: DIP?24*.
 * @see https://datasheets.chipdb.org/Fairchild/74F181PC.pdf
 * Keywords: TTL ALU ARITH.
 */
export class _74LS181 extends Component.withPins({
  "B0": "1",
  "A0": "2",
  "S3": "3",
  "S2": "4",
  "S1": "5",
  "S0": "6",
  "Cn": "7",
  "M": "8",
  "F0": "9",
  "F1": "10",
  "F2": "11",
  "GND": "12",
  "F3": "13",
  "A=B": "14",
  "X": "15",
  "Cn+4": "16",
  "Y": "17",
  "B3": "18",
  "A3": "19",
  "B2": "20",
  "A2": "21",
  "B1": "22",
  "A1": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B0: "input", A0: "input", S3: "input", S2: "input", S1: "input", S0: "input", Cn: "input", M: "input", F0: "output", F1: "output", F2: "output", GND: "power_in", F3: "output", "A=B": "output", X: "output", "Cn+4": "output", Y: "output", B3: "input", A3: "input", B2: "input", A2: "input", B1: "input", A1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS181";
  override referencePrefix = "U";
}

/**
 * Carry generator
 *
 * KiCad symbol: `74xx:74LS182`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS182
 * Keywords: TTL ALU ARITH.
 */
export class _74LS182 extends Component.withPins({
  "G1": "1",
  "P1": "2",
  "G0": "3",
  "P0": "4",
  "G3": "5",
  "P3": "6",
  "P": "7",
  "GND": "8",
  "Cn+z": "9",
  "G": "10",
  "Cn+y": "11",
  "Cn+x": "12",
  "Cn": "13",
  "G2": "14",
  "P2": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", P1: "input", G0: "input", P0: "input", G3: "input", P3: "input", P: "output", GND: "power_in", "Cn+z": "output", G: "output", "Cn+y": "output", "Cn+x": "output", Cn: "input", G2: "input", P2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS182";
  override referencePrefix = "U";
}

/**
 * 4-bit Synchronous Up/Down BCD Counter
 *
 * KiCad symbol: `74xx:74LS190`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS190
 * Keywords: TTL CNT CNT4.
 */
export class _74LS190 extends Component.withPins({
  "P1": "1",
  "Q1": "2",
  "Q0": "3",
  "Ce": "4",
  "D/U": "5",
  "Q2": "6",
  "Q3": "7",
  "GND": "8",
  "P3": "9",
  "P2": "10",
  "Pl": "11",
  "Tc": "12",
  "Rc": "13",
  "Cp": "14",
  "P0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", Q1: "output", Q0: "output", Ce: "input", "D/U": "input", Q2: "output", Q3: "output", GND: "power_in", P3: "input", P2: "input", Pl: "input", Tc: "output", Rc: "output", Cp: "input", P0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS190";
  override referencePrefix = "U";
}

/**
 * 4-bit Synchronous Up/Down binary Counter
 *
 * KiCad symbol: `74xx:74LS191`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS191
 * Keywords: TTL CNT CNT4.
 */
export class _74LS191 extends Component.withPins({
  "P1": "1",
  "Q1": "2",
  "Q0": "3",
  "Ce": "4",
  "D/U": "5",
  "Q2": "6",
  "Q3": "7",
  "GND": "8",
  "P3": "9",
  "P2": "10",
  "Pl": "11",
  "Tc": "12",
  "Rc": "13",
  "Cp": "14",
  "P0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", Q1: "output", Q0: "output", Ce: "input", "D/U": "input", Q2: "output", Q3: "output", GND: "power_in", P3: "input", P2: "input", Pl: "input", Tc: "output", Rc: "output", Cp: "input", P0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS191";
  override referencePrefix = "U";
}

/**
 * Synchronous 4-bit Up/Down (2 clk) counter
 *
 * KiCad symbol: `74xx:74LS193`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls193.pdf
 * Keywords: TTL CNT CNT4.
 */
export class _74LS193 extends Component.withPins({
  "B": "1",
  "QB": "2",
  "QA": "3",
  "DOWN": "4",
  "UP": "5",
  "QC": "6",
  "QD": "7",
  "GND": "8",
  "D": "9",
  "C": "10",
  "~{LOAD}": "11",
  "~{CO}": "12",
  "~{BO}": "13",
  "CLR": "14",
  "A": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", QB: "output", QA: "output", DOWN: "input", UP: "input", QC: "output", QD: "output", GND: "power_in", D: "input", C: "input", "~{LOAD}": "input", "~{CO}": "output", "~{BO}": "output", CLR: "input", A: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS193";
  override referencePrefix = "U";
}

/**
 * Shift Register 4-bit Bidirectional
 *
 * KiCad symbol: `74xx:74LS194`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS194
 * Keywords: TTL RS SR4.
 */
export class _74LS194 extends Component.withPins({
  "Mr": "1",
  "Dsr": "2",
  "P0": "3",
  "P1": "4",
  "P2": "5",
  "P3": "6",
  "Dsl": "7",
  "GND": "8",
  "S0": "9",
  "S1": "10",
  "Cp": "11",
  "Q3": "12",
  "Q2": "13",
  "Q1": "14",
  "Q0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Mr: "input", Dsr: "input", P0: "input", P1: "input", P2: "input", P3: "input", Dsl: "input", GND: "power_in", S0: "input", S1: "input", Cp: "input", Q3: "output", Q2: "output", Q1: "output", Q0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS194";
  override referencePrefix = "U";
}

/**
 * Shift Register 4-bit, parallel
 *
 * KiCad symbol: `74xx:74LS195`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS195
 * Keywords: TTL SR SR4.
 */
export class _74LS195 extends Component.withPins({
  "~{MR}": "1",
  "J": "2",
  "~{K}": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "~{PE}": "9",
  "CP": "10",
  "~{Q3}": "11",
  "Q3": "12",
  "Q2": "13",
  "Q1": "14",
  "Q0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "input", J: "input", "~{K}": "input", P0: "input", P1: "input", P2: "input", P3: "input", GND: "power_in", "~{PE}": "input", CP: "input", "~{Q3}": "output", Q3: "output", Q2: "output", Q1: "output", Q0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS195";
  override referencePrefix = "U";
}

/**
 * 4 (3+1)-bit presettable BCD counter
 *
 * KiCad symbol: `74xx:74LS196`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS196
 * Keywords: TTL CNT CNT4.
 */
export class _74LS196 extends Component.withPins({
  "Pl": "1",
  "Q2": "2",
  "P2": "3",
  "P0": "4",
  "Q0": "5",
  "Cp1": "6",
  "GND": "7",
  "Cp0": "8",
  "Q1": "9",
  "P1": "10",
  "P3": "11",
  "Q3": "12",
  "Mr": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pl: "input", Q2: "output", P2: "input", P0: "input", Q0: "output", Cp1: "input", GND: "power_in", Cp0: "input", Q1: "output", P1: "input", P3: "input", Q3: "output", Mr: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS196";
  override referencePrefix = "U";
}

/**
 * 4 (3+1)-bit presettable binary counter
 *
 * KiCad symbol: `74xx:74LS197`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS197
 * Keywords: TTL CNT CNT4.
 */
export class _74LS197 extends Component.withPins({
  "Pl": "1",
  "Q2": "2",
  "P2": "3",
  "P0": "4",
  "Q0": "5",
  "Cp1": "6",
  "GND": "7",
  "Cp0": "8",
  "Q1": "9",
  "P1": "10",
  "P3": "11",
  "Q3": "12",
  "Mr": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Pl: "input", Q2: "output", P2: "input", P0: "input", Q0: "output", Cp1: "input", GND: "power_in", Cp0: "input", Q1: "output", P1: "input", P3: "input", Q3: "output", Mr: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS197";
  override referencePrefix = "U";
}

/**
 * Dual 4-input NAND
 *
 * KiCad symbol: `74xx:74LS20`. Reference prefix: `U`.
 * Footprint filters: DIP?12*.
 * @see http://www.ti.com/lit/gpn/sn74LS20
 * Keywords: TTL Nand4.
 */
export class _74LS20 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS20";
  override referencePrefix = "U";
}

/**
 * Dual 4-input AND
 *
 * KiCad symbol: `74xx:74LS21`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.ti.com/lit/gpn/sn74LS21
 * Keywords: TTL And4.
 */
export class _74LS21 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS21";
  override referencePrefix = "U";
}

/**
 * Dual 4-input NAND Open Collector
 *
 * KiCad symbol: `74xx:74LS22`. Reference prefix: `U`.
 * Footprint filters: DIP?12*.
 * @see http://www.ti.com/lit/gpn/sn74LS22
 * Keywords: TTL Nand4 OpenColl.
 */
export class _74LS22 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS22";
  override referencePrefix = "U";
}

/**
 * Dual Monostable
 *
 * KiCad symbol: `74xx:74LS221`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS221
 * Keywords: TTL Monostable.
 */
export class _74LS221 extends Component.withPins({
  "~{A}_1": "1",
  "B_2": "2",
  "~{CLR}_3": "3",
  "~{Q}_4": "4",
  "Q_13": "13",
  "Cext_14": "14",
  "RCext_15": "15",
  "Q_5": "5",
  "Cext_6": "6",
  "RCext_7": "7",
  "~{A}_9": "9",
  "B_10": "10",
  "~{CLR}_11": "11",
  "~{Q}_12": "12",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{A}_1": "input", B_2: "input", "~{CLR}_3": "input", "~{Q}_4": "output", Q_13: "output", Cext_14: "input", RCext_15: "input", Q_5: "output", Cext_6: "input", RCext_7: "input", "~{A}_9": "input", B_10: "input", "~{CLR}_11": "input", "~{Q}_12": "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS221";
  override referencePrefix = "U";
}

/**
 * Octal Buffer and Line Driver With 3-State Output, active-low enables, inverting outputs
 *
 * KiCad symbol: `74xx:74LS240`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls240.pdf
 * Keywords: 7400 logic ttl low power schottky.
 */
export class _74LS240 extends Component.withPins({
  "OEa": "1",
  "I0a": "2",
  "O3b": "3",
  "I1a": "4",
  "O2b": "5",
  "I2a": "6",
  "O1b": "7",
  "I3a": "8",
  "O0b": "9",
  "GND": "10",
  "I0b": "11",
  "O3a": "12",
  "I1b": "13",
  "O2a": "14",
  "I2b": "15",
  "O1a": "16",
  "I3b": "17",
  "O0a": "18",
  "OEb": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OEa: "input", I0a: "input", O3b: "tri_state", I1a: "input", O2b: "tri_state", I2a: "input", O1b: "tri_state", I3a: "input", O0b: "tri_state", GND: "power_in", I0b: "input", O3a: "tri_state", I1b: "input", O2a: "tri_state", I2b: "input", O1a: "tri_state", I3b: "input", O0a: "tri_state", OEb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS240";
  override referencePrefix = "U";
}

/**
 * Octal Buffer and Line Driver With 3-State Output, active-low enables, inverting outputs, split symbol
 *
 * KiCad symbol: `74xx:74LS240_Split`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x12.8mm*P1.27mm*, *SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls240.pdf
 * Keywords: 7400 logic ttl low power schottky.
 */
export class _74LS240_Split extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P18": "18",
  "P4": "4",
  "P16": "16",
  "P6": "6",
  "P14": "14",
  "P8": "8",
  "P12": "12",
  "P9": "9",
  "P11": "11",
  "P19": "19",
  "P7": "7",
  "P13": "13",
  "P5": "5",
  "P15": "15",
  "P3": "3",
  "P17": "17",
  "GND": "10",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P18: "tri_state", P4: "input", P16: "tri_state", P6: "input", P14: "tri_state", P8: "input", P12: "tri_state", P9: "tri_state", P11: "input", P19: "input", P7: "tri_state", P13: "input", P5: "tri_state", P15: "input", P3: "tri_state", P17: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS240_Split";
  override referencePrefix = "U";
}

/**
 * Octal Buffer and Line Driver With 3-State Output, complementary enables, non-inverting outputs
 *
 * KiCad symbol: `74xx:74LS241`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls241.pdf
 * Keywords: 7400 logic ttl low power schottky.
 */
export class _74LS241 extends Component.withPins({
  "OEa": "1",
  "I0a": "2",
  "O3b": "3",
  "I1a": "4",
  "O2b": "5",
  "I2a": "6",
  "O1b": "7",
  "I3a": "8",
  "O0b": "9",
  "GND": "10",
  "I0b": "11",
  "O3a": "12",
  "I1b": "13",
  "O2a": "14",
  "I2b": "15",
  "O1a": "16",
  "I3b": "17",
  "O0a": "18",
  "OEb": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OEa: "input", I0a: "input", O3b: "tri_state", I1a: "input", O2b: "tri_state", I2a: "input", O1b: "tri_state", I3a: "input", O0b: "tri_state", GND: "power_in", I0b: "input", O3a: "tri_state", I1b: "input", O2a: "tri_state", I2b: "input", O1a: "tri_state", I3b: "input", O0a: "tri_state", OEb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS241";
  override referencePrefix = "U";
}

/**
 * Octal Buffer and Line Driver With 3-State Output, complementary enables, non-inverting outputs, split symbol
 *
 * KiCad symbol: `74xx:74LS241_Split`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x12.8mm*P1.27mm*, *SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls241.pdf
 * Keywords: 7400 logic ttl low power schottky.
 */
export class _74LS241_Split extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P18": "18",
  "P4": "4",
  "P16": "16",
  "P6": "6",
  "P14": "14",
  "P8": "8",
  "P12": "12",
  "P9": "9",
  "P11": "11",
  "P19": "19",
  "P7": "7",
  "P13": "13",
  "P5": "5",
  "P15": "15",
  "P3": "3",
  "P17": "17",
  "GND": "10",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P18: "tri_state", P4: "input", P16: "tri_state", P6: "input", P14: "tri_state", P8: "input", P12: "tri_state", P9: "tri_state", P11: "input", P19: "input", P7: "tri_state", P13: "input", P5: "tri_state", P15: "input", P3: "tri_state", P17: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS241_Split";
  override referencePrefix = "U";
}

/**
 * quad bus transceiver, inverting 3-state outputs
 *
 * KiCad symbol: `74xx:74LS242`. Reference prefix: `U`.
 * Footprint filters: DIP?14*, SOIC?14*.
 * @see https://unicornelectronics.com/ftp/Data%20Sheets/74ls242-243.pdf
 * Keywords: bus 3state.
 */
export class _74LS242 extends Component.withPins({
  "OEa": "1",
  "NC_2": "2",
  "A0": "3",
  "A1": "4",
  "A2": "5",
  "A3": "6",
  "GND": "7",
  "B3": "8",
  "B2": "9",
  "B1": "10",
  "B0": "11",
  "NC_12": "12",
  "OEb": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OEa: "input", NC_2: "no_connect", A0: "input", A1: "input", A2: "input", A3: "input", GND: "power_in", B3: "tri_state", B2: "tri_state", B1: "tri_state", B0: "tri_state", NC_12: "no_connect", OEb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS242";
  override referencePrefix = "U";
}

/**
 * 4-bit Bus Transceiver
 *
 * KiCad symbol: `74xx:74LS243`. Reference prefix: `U`.
 * Footprint filters: DIP?14*, SOIC?14*.
 * @see http://www.ti.com/lit/gpn/sn74LS243
 * Keywords: TTL Buffer 3State BUS BIDI.
 */
export class _74LS243 extends Component.withPins({
  "OEa": "1",
  "A0": "3",
  "A1": "4",
  "A2": "5",
  "A3": "6",
  "GND": "7",
  "B3": "8",
  "B2": "9",
  "B1": "10",
  "B0": "11",
  "OEb": "13",
  "VCC": "14",
  "NC_2": "2",
  "NC_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OEa: "input", A0: "input", A1: "input", A2: "input", A3: "input", GND: "power_in", B3: "tri_state", B2: "tri_state", B1: "tri_state", B0: "tri_state", OEb: "input", VCC: "power_in", NC_2: "no_connect", NC_12: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS243";
  override referencePrefix = "U";
}

/**
 * Octal Buffer and Line Driver With 3-State Output, active-low enables, non-inverting outputs
 *
 * KiCad symbol: `74xx:74LS244`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls244.pdf
 * Keywords: 7400 logic ttl low power schottky.
 */
export class _74LS244 extends Component.withPins({
  "OEa": "1",
  "I0a": "2",
  "O3b": "3",
  "I1a": "4",
  "O2b": "5",
  "I2a": "6",
  "O1b": "7",
  "I3a": "8",
  "O0b": "9",
  "GND": "10",
  "I0b": "11",
  "O3a": "12",
  "I1b": "13",
  "O2a": "14",
  "I2b": "15",
  "O1a": "16",
  "I3b": "17",
  "O0a": "18",
  "OEb": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OEa: "input", I0a: "input", O3b: "tri_state", I1a: "input", O2b: "tri_state", I2a: "input", O1b: "tri_state", I3a: "input", O0b: "tri_state", GND: "power_in", I0b: "input", O3a: "tri_state", I1b: "input", O2a: "tri_state", I2b: "input", O1a: "tri_state", I3b: "input", O0a: "tri_state", OEb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS244";
  override referencePrefix = "U";
}

/**
 * Octal Buffer and Line Driver With 3-State Output, active-low enables, non-inverting outputs, split symbol
 *
 * KiCad symbol: `74xx:74LS244_Split`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*7.5x12.8mm*P1.27mm*, *SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls241.pdf
 * Keywords: 7400 logic ttl low power schottky.
 */
export class _74LS244_Split extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P18": "18",
  "P4": "4",
  "P16": "16",
  "P6": "6",
  "P14": "14",
  "P8": "8",
  "P12": "12",
  "P9": "9",
  "P11": "11",
  "P19": "19",
  "P7": "7",
  "P13": "13",
  "P5": "5",
  "P15": "15",
  "P3": "3",
  "P17": "17",
  "GND": "10",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P18: "tri_state", P4: "input", P16: "tri_state", P6: "input", P14: "tri_state", P8: "input", P12: "tri_state", P9: "tri_state", P11: "input", P19: "input", P7: "tri_state", P13: "input", P5: "tri_state", P15: "input", P3: "tri_state", P17: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS244_Split";
  override referencePrefix = "U";
}

/**
 * BCD to 7 segments Decoder Open Collector active Low
 *
 * KiCad symbol: `74xx:74LS247`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS247
 * Keywords: TTL DECOD.
 */
export class _74LS247 extends Component.withPins({
  "B": "1",
  "C": "2",
  "Lt": "3",
  "Rbo": "4",
  "Rbi": "5",
  "D": "6",
  "A": "7",
  "GND": "8",
  "e": "9",
  "d": "10",
  "c": "11",
  "b": "12",
  "a": "13",
  "g": "14",
  "f": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "input", Lt: "input", Rbo: "output", Rbi: "input", D: "input", A: "input", GND: "power_in", e: "open_collector", d: "open_collector", c: "open_collector", b: "open_collector", a: "open_collector", g: "open_collector", f: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS247";
  override referencePrefix = "U";
}

/**
 * BCD to 7-segment Decoder Open Collector active Low
 *
 * KiCad symbol: `74xx:74LS246`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS246
 * Keywords: TTL DECOD.
 */
export class _74LS246 extends Component.withPins({
  "B": "1",
  "C": "2",
  "Lt": "3",
  "Rbo": "4",
  "Rbi": "5",
  "D": "6",
  "A": "7",
  "GND": "8",
  "e": "9",
  "d": "10",
  "c": "11",
  "b": "12",
  "a": "13",
  "g": "14",
  "f": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "input", Lt: "input", Rbo: "output", Rbi: "input", D: "input", A: "input", GND: "power_in", e: "open_collector", d: "open_collector", c: "open_collector", b: "open_collector", a: "open_collector", g: "open_collector", f: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS246";
  override referencePrefix = "U";
}

/**
 * BCD to 7-segment Decoder, Active High
 *
 * KiCad symbol: `74xx:74LS248`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS248
 * Keywords: TTL DECOD.
 */
export class _74LS248 extends Component.withPins({
  "B": "1",
  "C": "2",
  "~{LT}": "3",
  "~{BI}/~{RBO}": "4",
  "~{RBI}": "5",
  "D": "6",
  "A": "7",
  "GND": "8",
  "e": "9",
  "d": "10",
  "c": "11",
  "b": "12",
  "a": "13",
  "g": "14",
  "f": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "input", "~{LT}": "input", "~{BI}/~{RBO}": "open_collector", "~{RBI}": "input", D: "input", A: "input", GND: "power_in", e: "open_collector", d: "open_collector", c: "open_collector", b: "open_collector", a: "open_collector", g: "open_collector", f: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS248";
  override referencePrefix = "U";
}

/**
 * BCD to 7-segment Decoder, Open collector, Active High
 *
 * KiCad symbol: `74xx:74LS249`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS249
 * Keywords: TTL DECOD OpenCol.
 */
export class _74LS249 extends Component.withPins({
  "B": "1",
  "C": "2",
  "~{LT}": "3",
  "~{BI}/~{RBO}": "4",
  "~{RBI}": "5",
  "D": "6",
  "A": "7",
  "GND": "8",
  "e": "9",
  "d": "10",
  "c": "11",
  "b": "12",
  "a": "13",
  "g": "14",
  "f": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "input", "~{LT}": "input", "~{BI}/~{RBO}": "open_collector", "~{RBI}": "input", D: "input", A: "input", GND: "power_in", e: "open_collector", d: "open_collector", c: "open_collector", b: "open_collector", a: "open_collector", g: "open_collector", f: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS249";
  override referencePrefix = "U";
}

/**
 * Multiplexer 8 to 1, 3-state Outputs
 *
 * KiCad symbol: `74xx:74LS251`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS251
 * Keywords: TTL MUX MUX8 3State.
 */
export class _74LS251 extends Component.withPins({
  "I3": "1",
  "I2": "2",
  "I1": "3",
  "I0": "4",
  "Y": "5",
  "~{Y}": "6",
  "~{OE}": "7",
  "GND": "8",
  "S2": "9",
  "S1": "10",
  "S0": "11",
  "I7": "12",
  "I6": "13",
  "I5": "14",
  "I4": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { I3: "input", I2: "input", I1: "input", I0: "input", Y: "tri_state", "~{Y}": "tri_state", "~{OE}": "input", GND: "power_in", S2: "input", S1: "input", S0: "input", I7: "input", I6: "input", I5: "input", I4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS251";
  override referencePrefix = "U";
}

/**
 * Dual Multiplexer 4 to 1, 3-State Outputs
 *
 * KiCad symbol: `74xx:74LS253`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS253
 * Keywords: TTL MUX MUX4 3State.
 */
export class _74LS253 extends Component.withPins({
  "OEa": "1",
  "A1": "2",
  "I3a": "3",
  "I2a": "4",
  "I1a": "5",
  "I0a": "6",
  "Za": "7",
  "GND": "8",
  "Zb": "9",
  "I0b": "10",
  "I1b": "11",
  "I2b": "12",
  "I3b": "13",
  "A0": "14",
  "OEb": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OEa: "input", A1: "input", I3a: "input", I2a: "input", I1a: "input", I0a: "input", Za: "tri_state", GND: "power_in", Zb: "tri_state", I0b: "input", I1b: "input", I2b: "input", I3b: "input", A0: "input", OEb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS253";
  override referencePrefix = "U";
}

/**
 * dual 4-bit addressable latch
 *
 * KiCad symbol: `74xx:74LS256`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see https://alfter.us/wp-content/uploads/2022/12/74LS256.pdf
 * Keywords: latch.
 */
export class _74LS256 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "Da": "3",
  "Q_{0a}": "4",
  "Q_{1a}": "5",
  "Q_{2a}": "6",
  "Q_{3a}": "7",
  "GND": "8",
  "Q_{0b}": "9",
  "Q_{1b}": "10",
  "Q_{2b}": "11",
  "Q_{3b}": "12",
  "Db": "13",
  "~{E}": "14",
  "~{CL}": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", Da: "input", "Q_{0a}": "output", "Q_{1a}": "output", "Q_{2a}": "output", "Q_{3a}": "output", GND: "power_in", "Q_{0b}": "output", "Q_{1b}": "output", "Q_{2b}": "output", "Q_{3b}": "output", Db: "input", "~{E}": "input", "~{CL}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS256";
  override referencePrefix = "U";
}

/**
 * Quad 2 to 1 Multiplexer
 *
 * KiCad symbol: `74xx:74LS257`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS257
 * Keywords: TTL MUX MUX2.
 */
export class _74LS257 extends Component.withPins({
  "S": "1",
  "I0a": "2",
  "I1a": "3",
  "Za": "4",
  "I0b": "5",
  "I1b": "6",
  "Zb": "7",
  "GND": "8",
  "Zd": "9",
  "I1d": "10",
  "I0d": "11",
  "Zc": "12",
  "I1c": "13",
  "I0c": "14",
  "OE": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "input", I0a: "input", I1a: "input", Za: "tri_state", I0b: "input", I1b: "input", Zb: "tri_state", GND: "power_in", Zd: "tri_state", I1d: "input", I0d: "input", Zc: "tri_state", I1c: "input", I0c: "input", OE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS257";
  override referencePrefix = "U";
}

/**
 * Quad 2 to 1 Multiplexer, inverting
 *
 * KiCad symbol: `74xx:74LS258`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS258
 * Keywords: TTL MUX MUX2.
 */
export class _74LS258 extends Component.withPins({
  "S": "1",
  "I0a": "2",
  "I1a": "3",
  "Za": "4",
  "I0b": "5",
  "I1b": "6",
  "Zb": "7",
  "GND": "8",
  "Zd": "9",
  "I1d": "10",
  "I0d": "11",
  "Zc": "12",
  "I1c": "13",
  "I0c": "14",
  "OE": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "input", I0a: "input", I1a: "input", Za: "tri_state", I0b: "input", I1b: "input", Zb: "tri_state", GND: "power_in", Zd: "tri_state", I1d: "input", I0d: "input", Zc: "tri_state", I1c: "input", I0c: "input", OE: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS258";
  override referencePrefix = "U";
}

/**
 * 8-bit addressable latch
 *
 * KiCad symbol: `74xx:74LS259`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS259
 * Keywords: TTL REG DFF.
 */
export class _74LS259 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "Q0": "4",
  "Q1": "5",
  "Q2": "6",
  "Q3": "7",
  "GND": "8",
  "Q4": "9",
  "Q5": "10",
  "Q6": "11",
  "Q7": "12",
  "D": "13",
  "E": "14",
  "Clr": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", Q0: "output", Q1: "output", Q2: "output", Q3: "output", GND: "power_in", Q4: "output", Q5: "output", Q6: "output", Q7: "output", D: "input", E: "input", Clr: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS259";
  override referencePrefix = "U";
}

/**
 * Quad 2-input NAND Open collector
 *
 * KiCad symbol: `74xx:74LS26`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS26
 * Keywords: TTL Nand2 OpenCol.
 */
export class _74LS26 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "open_collector", P4: "input", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "input", P11: "open_collector", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS26";
  override referencePrefix = "U";
}

/**
 * Triple 3-input NOR
 *
 * KiCad symbol: `74xx:74LS27`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS27
 * Keywords: TTL Nor3.
 */
export class _74LS27 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P12": "12",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P12: "output", P13: "input", P3: "input", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS27";
  override referencePrefix = "U";
}

/**
 * Quad SR latch, DIP-16/SOIC-16/SOIC-16W
 *
 * KiCad symbol: `74xx:74LS279`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, SOIC*5.3x10.2mm*P1.27mm*.
 * @see https://www.ti.com/lit/gpn/sn54ls279a
 * Keywords: TTL latch set reset srs flip flop flipflop rs-flipflop.
 */
export class _74LS279 extends Component.withPins({
  "~{R}_1": "1",
  "~{S}_2": "2",
  "~{S}_3": "3",
  "Q_4": "4",
  "~{R}_5": "5",
  "~{S}_6": "6",
  "Q_7": "7",
  "Q_9": "9",
  "~{R}_10": "10",
  "~{S}_11": "11",
  "~{S}_12": "12",
  "Q_13": "13",
  "~{R}_14": "14",
  "~{S}_15": "15",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{R}_1": "input", "~{S}_2": "input", "~{S}_3": "input", Q_4: "output", "~{R}_5": "input", "~{S}_6": "input", Q_7: "output", Q_9: "output", "~{R}_10": "input", "~{S}_11": "input", "~{S}_12": "input", Q_13: "output", "~{R}_14": "input", "~{S}_15": "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS279";
  override referencePrefix = "U";
}

/**
 * quad 2-input NOR buffer NRND
 *
 * KiCad symbol: `74xx:74LS28`. Reference prefix: `U`.
 * Footprint filters: SO14*, DIP*W7.62mm*.
 * @see http://eeshop.unl.edu/pdf/74ls28.pdf
 * Keywords: TTL Nor2 Buffer.
 */
export class _74LS28 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", P2: "input", P3: "input", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "input", P12: "input", P13: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS28";
  override referencePrefix = "U";
}

/**
 * Parity Generator/Checker
 *
 * KiCad symbol: `74xx:74LS280`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS280
 * Keywords: TTL ALU Arith.
 */
export class _74LS280 extends Component.withPins({
  "G": "1",
  "H": "2",
  "I": "4",
  "Even": "5",
  "Odd": "6",
  "GND": "7",
  "A": "8",
  "B": "9",
  "C": "10",
  "D": "11",
  "E": "12",
  "F": "13",
  "VCC": "14",
  "NC": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", H: "input", I: "input", Even: "output", Odd: "output", GND: "power_in", A: "input", B: "input", C: "input", D: "input", E: "input", F: "input", VCC: "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS280";
  override referencePrefix = "U";
}

/**
 * 4-bit full Adder
 *
 * KiCad symbol: `74xx:74LS283`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS283
 * Keywords: TTL ADD Arith ALU.
 */
export class _74LS283 extends Component.withPins({
  "S2": "1",
  "B2": "2",
  "A2": "3",
  "S1": "4",
  "A1": "5",
  "B1": "6",
  "C0": "7",
  "GND": "8",
  "C4": "9",
  "S4": "10",
  "B4": "11",
  "A4": "12",
  "S3": "13",
  "A3": "14",
  "B3": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S2: "output", B2: "input", A2: "input", S1: "output", A1: "input", B1: "input", C0: "input", GND: "power_in", C4: "output", S4: "output", B4: "input", A4: "input", S3: "output", A3: "input", B3: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS283";
  override referencePrefix = "U";
}

/**
 * 4-bit BCD counter
 *
 * KiCad symbol: `74xx:74LS290`. Reference prefix: `U`.
 * Footprint filters: DIP?12*.
 * @see http://www.ti.com/lit/gpn/sn74LS290
 * Keywords: TTL CNT CNT4.
 */
export class _74LS290 extends Component.withPins({
  "Ms1": "1",
  "Ms2": "3",
  "Q2": "4",
  "Q1": "5",
  "GND": "7",
  "Q3": "8",
  "Q0": "9",
  "Cp0": "10",
  "Cp1": "11",
  "Mr1": "12",
  "Mr2": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Ms1: "input", Ms2: "input", Q2: "output", Q1: "output", GND: "power_in", Q3: "output", Q0: "output", Cp0: "input", Cp1: "input", Mr1: "input", Mr2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS290";
  override referencePrefix = "U";
}

/**
 * 4-bit binary counter
 *
 * KiCad symbol: `74xx:74LS293`. Reference prefix: `U`.
 * Footprint filters: DIP?12*.
 * @see http://www.ti.com/lit/gpn/sn74LS293
 * Keywords: TTL CNT CNT4.
 */
export class _74LS293 extends Component.withPins({
  "Ms1": "1",
  "Ms2": "3",
  "Q2": "4",
  "Q1": "5",
  "GND": "7",
  "Q3": "8",
  "Q0": "9",
  "Cp0": "10",
  "Cp1": "11",
  "Mr1": "12",
  "Mr2": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Ms1: "input", Ms2: "input", Q2: "output", Q1: "output", GND: "power_in", Q3: "output", Q0: "output", Cp0: "input", Cp1: "input", Mr1: "input", Mr2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS293";
  override referencePrefix = "U";
}

/**
 * 4-bit bidirectional register, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS295`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS295
 * Keywords: register.
 */
export class _74LS295 extends Component.withPins({
  "Ds": "1",
  "P0": "2",
  "P1": "3",
  "P2": "4",
  "P3": "5",
  "Pe": "6",
  "GND": "7",
  "OE": "8",
  "Cp": "9",
  "Q3": "10",
  "Q2": "11",
  "Q1": "12",
  "Q0": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Ds: "input", P0: "input", P1: "input", P2: "input", P3: "input", Pe: "input", GND: "power_in", OE: "input", Cp: "input", Q3: "output", Q2: "output", Q1: "output", Q0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS295";
  override referencePrefix = "U";
}

/**
 * Quad 2 to 1 multiplexer with storage
 *
 * KiCad symbol: `74xx:74LS298`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS298
 * Keywords: TTL MUX MUX2.
 */
export class _74LS298 extends Component.withPins({
  "I1b": "1",
  "I1a": "2",
  "I0a": "3",
  "I0b": "4",
  "I1c": "5",
  "I1d": "6",
  "I0d": "7",
  "GND": "8",
  "I0c": "9",
  "S": "10",
  "Cp": "11",
  "Qd": "12",
  "Qc": "13",
  "Qb": "14",
  "Qa": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { I1b: "input", I1a: "input", I0a: "input", I0b: "input", I1c: "input", I1d: "input", I0d: "input", GND: "power_in", I0c: "input", S: "input", Cp: "input", Qd: "output", Qc: "output", Qb: "output", Qa: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS298";
  override referencePrefix = "U";
}

/**
 * 8-bit Universal shift/storage Register
 *
 * KiCad symbol: `74xx:74LS299`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS299
 * Keywords: TTL REG SR SR8.
 */
export class _74LS299 extends Component.withPins({
  "S0": "1",
  "OE1": "2",
  "OE2": "3",
  "IO6": "4",
  "IO4": "5",
  "IO2": "6",
  "IO0": "7",
  "Q0": "8",
  "Mr": "9",
  "GND": "10",
  "Ds0": "11",
  "Cp": "12",
  "IO1": "13",
  "IO3": "14",
  "IO5": "15",
  "IO7": "16",
  "Q7": "17",
  "Ds7": "18",
  "S1": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S0: "input", OE1: "input", OE2: "input", IO6: "tri_state", IO4: "tri_state", IO2: "tri_state", IO0: "tri_state", Q0: "output", Mr: "input", GND: "power_in", Ds0: "input", Cp: "input", IO1: "tri_state", IO3: "tri_state", IO5: "tri_state", IO7: "tri_state", Q7: "output", Ds7: "input", S1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS299";
  override referencePrefix = "U";
}

/**
 * 8-input NAND
 *
 * KiCad symbol: `74xx:74LS30`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS30
 * Keywords: TTL Nand8.
 */
export class _74LS30 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P11": "11",
  "P12": "12",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "input", P4: "input", P5: "input", P6: "input", P8: "output", P11: "input", P12: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS30";
  override referencePrefix = "U";
}

/**
 * Quad 2-input OR
 *
 * KiCad symbol: `74xx:74LS32`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.ti.com/lit/gpn/sn74LS32
 * Keywords: TTL Or2.
 */
export class _74LS32 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS32";
  override referencePrefix = "U";
}

/**
 * 8-bit shift register, sign extend, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS322`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS322
 * Keywords: register.
 */
export class _74LS322 extends Component.withPins({
  "G": "1",
  "S/P": "2",
  "D0": "3",
  "A/Qa": "4",
  "C/Qc": "5",
  "E/Qe": "6",
  "G/Qg": "7",
  "OE": "8",
  "Clr": "9",
  "GND": "10",
  "Clk": "11",
  "Qh": "12",
  "H/Qh": "13",
  "F/Qf": "14",
  "D/Qd": "15",
  "B/Qb": "16",
  "D1": "17",
  "SE": "18",
  "DS": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", "S/P": "input", D0: "input", "A/Qa": "tri_state", "C/Qc": "tri_state", "E/Qe": "tri_state", "G/Qg": "tri_state", OE: "input", Clr: "input", GND: "power_in", Clk: "input", Qh: "output", "H/Qh": "tri_state", "F/Qf": "tri_state", "D/Qd": "tri_state", "B/Qb": "tri_state", D1: "input", SE: "input", DS: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS322";
  override referencePrefix = "U";
}

/**
 * 8-bit Universal Shift/Storage Register
 *
 * KiCad symbol: `74xx:74LS323`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS323
 * Keywords: TTL REG SR SR8.
 */
export class _74LS323 extends Component.withPins({
  "S0": "1",
  "OE1": "2",
  "OE2": "3",
  "IO6": "4",
  "IO4": "5",
  "IO2": "6",
  "IO0": "7",
  "Q0": "8",
  "SR": "9",
  "GND": "10",
  "DS0": "11",
  "Cp": "12",
  "IO1": "13",
  "IO3": "14",
  "IO5": "15",
  "IO7": "16",
  "Q7": "17",
  "DS7": "18",
  "S1": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S0: "input", OE1: "input", OE2: "input", IO6: "tri_state", IO4: "tri_state", IO2: "tri_state", IO0: "tri_state", Q0: "output", SR: "input", GND: "power_in", DS0: "input", Cp: "input", IO1: "tri_state", IO3: "tri_state", IO5: "tri_state", IO7: "tri_state", Q7: "output", DS7: "input", S1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS323";
  override referencePrefix = "U";
}

/**
 * Quad 2-input NOR, Open collector
 *
 * KiCad symbol: `74xx:74LS33`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS33
 * Keywords: TTL Nor2 OpenColl.
 */
export class _74LS33 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "open_collector", P2: "input", P3: "input", P4: "open_collector", P5: "input", P6: "input", P8: "input", P9: "input", P10: "open_collector", P11: "input", P12: "input", P13: "open_collector", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS33";
  override referencePrefix = "U";
}

/**
 * 8 to 3 lines Priority Encoder
 *
 * KiCad symbol: `74xx:74LS348`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS348
 * Keywords: TTL ENCOD Arith.
 */
export class _74LS348 extends Component.withPins({
  "0": "10",
  "1": "11",
  "2": "12",
  "3": "13",
  "4": "1",
  "5": "2",
  "6": "3",
  "7": "4",
  "EI": "5",
  "A2": "6",
  "A1": "7",
  "GND": "8",
  "A0": "9",
  "GS": "14",
  "E0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "0": "input", "1": "input", "2": "input", "3": "input", "4": "input", "5": "input", "6": "input", "7": "input", EI: "input", A2: "tri_state", A1: "tri_state", GND: "power_in", A0: "tri_state", GS: "output", E0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS348";
  override referencePrefix = "U";
}

/**
 * Dual 4 to 1 line Multiplexer
 *
 * KiCad symbol: `74xx:74LS352`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS352
 * Keywords: TTL Mux MUX4.
 */
export class _74LS352 extends Component.withPins({
  "Ea": "1",
  "S1": "2",
  "I3a": "3",
  "I2a": "4",
  "I1a": "5",
  "I0a": "6",
  "Za": "7",
  "GND": "8",
  "Zb": "9",
  "I0b": "10",
  "I1b": "11",
  "I2b": "12",
  "I3b": "13",
  "S0": "14",
  "Eb": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Ea: "input", S1: "input", I3a: "input", I2a: "input", I1a: "input", I0a: "input", Za: "output", GND: "power_in", Zb: "output", I0b: "input", I1b: "input", I2b: "input", I3b: "input", S0: "input", Eb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS352";
  override referencePrefix = "U";
}

/**
 * Dual 4 to 1 line Multiplexer, inverter
 *
 * KiCad symbol: `74xx:74LS353`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS353
 * Keywords: TTL MUX MUX2.
 */
export class _74LS353 extends Component.withPins({
  "OEa": "1",
  "A1": "2",
  "I3a": "3",
  "I2a": "4",
  "I1a": "5",
  "I0a": "6",
  "Za": "7",
  "GND": "8",
  "Zb": "9",
  "I0b": "10",
  "I1b": "11",
  "I2b": "12",
  "I3b": "13",
  "A0": "14",
  "OEb": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OEa: "input", A1: "input", I3a: "input", I2a: "input", I1a: "input", I0a: "input", Za: "tri_state", GND: "power_in", Zb: "tri_state", I0b: "input", I1b: "input", I2b: "input", I3b: "input", A0: "input", OEb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS353";
  override referencePrefix = "U";
}

/**
 * Hex Bus Driver, 3-State Outputs
 *
 * KiCad symbol: `74xx:74LS365`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS365
 * Keywords: TTL Buffer BUS 3State.
 */
export class _74LS365 extends Component.withPins({
  "E1": "1",
  "I1": "2",
  "O1": "3",
  "I2": "4",
  "O2": "5",
  "I3": "6",
  "O3": "7",
  "GND": "8",
  "O4": "9",
  "I4": "10",
  "O5": "11",
  "I5": "12",
  "O6": "13",
  "I6": "14",
  "E2": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "input", I1: "input", O1: "tri_state", I2: "input", O2: "tri_state", I3: "input", O3: "tri_state", GND: "power_in", O4: "tri_state", I4: "input", O5: "tri_state", I5: "input", O6: "tri_state", I6: "input", E2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS365";
  override referencePrefix = "U";
}

/**
 * Hex Bus Driver inverter, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS366`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS366
 * Keywords: TTL Buffer BUS 3State.
 */
export class _74LS366 extends Component.withPins({
  "E1": "1",
  "I1": "2",
  "O1": "3",
  "I2": "4",
  "O2": "5",
  "I3": "6",
  "O3": "7",
  "GND": "8",
  "O4": "9",
  "I4": "10",
  "O5": "11",
  "I5": "12",
  "O6": "13",
  "I6": "14",
  "E2": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "input", I1: "input", O1: "tri_state", I2: "input", O2: "tri_state", I3: "input", O3: "tri_state", GND: "power_in", O4: "tri_state", I4: "input", O5: "tri_state", I5: "input", O6: "tri_state", I6: "input", E2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS366";
  override referencePrefix = "U";
}

/**
 * Hex Bus Driver 3-state outputs
 *
 * KiCad symbol: `74xx:74LS367`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS367
 * Keywords: TTL Buffer BUS 3State.
 */
export class _74LS367 extends Component.withPins({
  "OEa": "1",
  "I1": "2",
  "O1a": "3",
  "I2": "4",
  "O2a": "5",
  "I3": "6",
  "O3a": "7",
  "GND": "8",
  "O4a": "9",
  "I4": "10",
  "O5b": "11",
  "I5": "12",
  "O6b": "13",
  "I6": "14",
  "OEb": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OEa: "input", I1: "input", O1a: "tri_state", I2: "input", O2a: "tri_state", I3: "input", O3a: "tri_state", GND: "power_in", O4a: "tri_state", I4: "input", O5b: "tri_state", I5: "input", O6b: "tri_state", I6: "input", OEb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS367";
  override referencePrefix = "U";
}

/**
 * Hex Bus Driver inverter, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS368`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS368
 * Keywords: TTL Buffer BUS 3State.
 */
export class _74LS368 extends Component.withPins({
  "OEa": "1",
  "I1": "2",
  "O1a": "3",
  "I2": "4",
  "O2a": "5",
  "I3": "6",
  "O3a": "7",
  "GND": "8",
  "O4a": "9",
  "I4": "10",
  "O5b": "11",
  "I5": "12",
  "O6b": "13",
  "I6": "14",
  "OEb": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OEa: "input", I1: "input", O1a: "tri_state", I2: "input", O2a: "tri_state", I3: "input", O3a: "tri_state", GND: "power_in", O4a: "tri_state", I4: "input", O5b: "tri_state", I5: "input", O6b: "tri_state", I6: "input", OEb: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS368";
  override referencePrefix = "U";
}

/**
 * quad 2-input NAND buffer
 *
 * KiCad symbol: `74xx:74LS37`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SO14*.
 * @see http://www.ti.com/lit/gpn/sn74ls37
 * Keywords: TTL nand 2-input buffer.
 */
export class _74LS37 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS37";
  override referencePrefix = "U";
}

/**
 * 4-bit Latch
 *
 * KiCad symbol: `74xx:74LS375`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS375
 * Keywords: TTL DFF DFF4 Latch.
 */
export class _74LS375 extends Component.withPins({
  "D0": "1",
  "~{Q0}": "2",
  "Q0": "3",
  "E01": "4",
  "Q1": "5",
  "~{Q1}": "6",
  "D1": "7",
  "GND": "8",
  "D2": "9",
  "~{Q2}": "10",
  "Q2": "11",
  "E23": "12",
  "Q3": "13",
  "~{Q3}": "14",
  "D3": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D0: "input", "~{Q0}": "output", Q0: "output", E01: "input", Q1: "output", "~{Q1}": "output", D1: "input", GND: "power_in", D2: "input", "~{Q2}": "output", Q2: "output", E23: "input", Q3: "output", "~{Q3}": "output", D3: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS375";
  override referencePrefix = "U";
}

/**
 * 8-bit Register
 *
 * KiCad symbol: `74xx:74LS377`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS377
 * Keywords: TTL REG DFF DFF8.
 */
export class _74LS377 extends Component.withPins({
  "~{E}": "1",
  "Q0": "2",
  "D0": "3",
  "D1": "4",
  "Q1": "5",
  "Q2": "6",
  "D2": "7",
  "D3": "8",
  "Q3": "9",
  "GND": "10",
  "CP": "11",
  "Q4": "12",
  "D4": "13",
  "D5": "14",
  "Q5": "15",
  "Q6": "16",
  "D6": "17",
  "D7": "18",
  "Q7": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{E}": "input", Q0: "output", D0: "input", D1: "input", Q1: "output", Q2: "output", D2: "input", D3: "input", Q3: "output", GND: "power_in", CP: "input", Q4: "output", D4: "input", D5: "input", Q5: "output", Q6: "output", D6: "input", D7: "input", Q7: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS377";
  override referencePrefix = "U";
}

/**
 * 6-bit Register
 *
 * KiCad symbol: `74xx:74LS378`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS378
 * Keywords: TTL REG DFF DFF6.
 */
export class _74LS378 extends Component.withPins({
  "~{E}": "1",
  "Q0": "2",
  "D0": "3",
  "D1": "4",
  "Q1": "5",
  "D2": "6",
  "Q2": "7",
  "GND": "8",
  "C": "9",
  "Q3": "10",
  "D3": "11",
  "Q4": "12",
  "D4": "13",
  "D5": "14",
  "Q5": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{E}": "input", Q0: "output", D0: "input", D1: "input", Q1: "output", D2: "input", Q2: "output", GND: "power_in", C: "input", Q3: "output", D3: "input", Q4: "output", D4: "input", D5: "input", Q5: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS378";
  override referencePrefix = "U";
}

/**
 * 4-bit Register
 *
 * KiCad symbol: `74xx:74LS379`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS379
 * Keywords: TTL REG DFF DFF4.
 */
export class _74LS379 extends Component.withPins({
  "~{E}": "1",
  "Q0": "2",
  "~{Q0}": "3",
  "D0": "4",
  "D1": "5",
  "~{Q1}": "6",
  "Q1": "7",
  "GND": "8",
  "CP": "9",
  "Q2": "10",
  "~{Q2}": "11",
  "D2": "12",
  "D3": "13",
  "~{Q3}": "14",
  "Q3": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{E}": "input", Q0: "output", "~{Q0}": "output", D0: "input", D1: "input", "~{Q1}": "output", Q1: "output", GND: "power_in", CP: "input", Q2: "output", "~{Q2}": "output", D2: "input", D3: "input", "~{Q3}": "output", Q3: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS379";
  override referencePrefix = "U";
}

/**
 * Quad Buffer 2-input NAND Open collector
 *
 * KiCad symbol: `74xx:74LS38`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS38
 * Keywords: TTL Nand2 OpenCol Buffer.
 */
export class _74LS38 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "open_collector", P4: "input", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "input", P11: "open_collector", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS38";
  override referencePrefix = "U";
}

/**
 * Quad serial Adder
 *
 * KiCad symbol: `74xx:74LS385`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS385
 * Keywords: TTL ADD Arith ALU.
 */
export class _74LS385 extends Component.withPins({
  "Clk": "1",
  "1S": "2",
  "1S/A": "3",
  "1B": "4",
  "1A": "5",
  "2A": "6",
  "2B": "7",
  "2S/A": "8",
  "2S": "9",
  "GND": "10",
  "Clr": "11",
  "3S": "12",
  "3S/A": "13",
  "3B": "14",
  "3A": "15",
  "4A": "16",
  "4B": "17",
  "4S/A": "18",
  "4S": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Clk: "input", "1S": "input", "1S/A": "input", "1B": "input", "1A": "input", "2A": "input", "2B": "input", "2S/A": "input", "2S": "input", GND: "power_in", Clr: "input", "3S": "output", "3S/A": "output", "3B": "output", "3A": "output", "4A": "output", "4B": "output", "4S/A": "output", "4S": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS385";
  override referencePrefix = "U";
}

/**
 * Quad 2-input XOR
 *
 * KiCad symbol: `74xx:74LS386`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS386
 * Keywords: TTL XOR2.
 */
export class _74LS386 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS386";
  override referencePrefix = "U";
}

/**
 * Dual BCD 4-bit counter
 *
 * KiCad symbol: `74xx:74LS390`. Reference prefix: `U`.
 * Footprint filters: DIP?16*, SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS390
 * Keywords: TTL CNT CNT4.
 */
export class _74LS390 extends Component.withPins({
  "~{CP0}_1": "1",
  "MR_2": "2",
  "Q0_3": "3",
  "~{CP1}_4": "4",
  "Q1_5": "5",
  "Q2_6": "6",
  "Q3_7": "7",
  "Q3_9": "9",
  "Q2_10": "10",
  "Q1_11": "11",
  "~{CP1}_12": "12",
  "Q0_13": "13",
  "MR_14": "14",
  "~{CP0}_15": "15",
  "GND": "8",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CP0}_1": "input", MR_2: "input", Q0_3: "output", "~{CP1}_4": "input", Q1_5: "output", Q2_6: "output", Q3_7: "output", Q3_9: "output", Q2_10: "output", Q1_11: "output", "~{CP1}_12": "input", Q0_13: "output", MR_14: "input", "~{CP0}_15": "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS390";
  override referencePrefix = "U";
}

/**
 * Dual BCD 4-bit counter
 *
 * KiCad symbol: `74xx:74LS393`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74ls393.pdf
 * Keywords: TTL CNT CNT4.
 */
export class _74LS393 extends Component.withPins({
  "CP_1": "1",
  "MR_2": "2",
  "Q0_3": "3",
  "Q1_4": "4",
  "Q2_5": "5",
  "Q3_6": "6",
  "Q3_8": "8",
  "Q2_9": "9",
  "Q1_10": "10",
  "Q0_11": "11",
  "MR_12": "12",
  "CP_13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CP_1: "input", MR_2: "input", Q0_3: "output", Q1_4: "output", Q2_5: "output", Q3_6: "output", Q3_8: "output", Q2_9: "output", Q1_10: "output", Q0_11: "output", MR_12: "input", CP_13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS393";
  override referencePrefix = "U";
}

/**
 * 4-bit universal shift register, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS395`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS395
 * Keywords: TTL SR SR4 REG 3State.
 */
export class _74LS395 extends Component.withPins({
  "~{MR}": "1",
  "Ds": "2",
  "P0": "3",
  "P1": "4",
  "P2": "5",
  "P3": "6",
  "LD/~{SH}": "7",
  "GND": "8",
  "~{OE}": "9",
  "~{CP}": "10",
  "Q'3": "11",
  "Q3": "12",
  "Q2": "13",
  "Q1": "14",
  "Q0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MR}": "input", Ds: "input", P0: "input", P1: "input", P2: "input", P3: "input", "LD/~{SH}": "input", GND: "power_in", "~{OE}": "input", "~{CP}": "input", "Q'3": "output", Q3: "tri_state", Q2: "tri_state", Q1: "tri_state", Q0: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS395";
  override referencePrefix = "U";
}

/**
 * Quad 2 to 1 line Multiplexer, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS398`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS398
 * Keywords: TTL MUX MUX2 3State.
 */
export class _74LS398 extends Component.withPins({
  "S": "1",
  "Qa": "2",
  "~{Qa}": "3",
  "I0a": "4",
  "I1a": "5",
  "I1b": "6",
  "I0b": "7",
  "~{Qb}": "8",
  "Qb": "9",
  "GND": "10",
  "CP": "11",
  "Qc": "12",
  "~{Qc}": "13",
  "I0c": "14",
  "I1c": "15",
  "I1d": "16",
  "I0d": "17",
  "~{Qd}": "18",
  "Qd": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "input", Qa: "output", "~{Qa}": "output", I0a: "input", I1a: "input", I1b: "input", I0b: "input", "~{Qb}": "output", Qb: "output", GND: "power_in", CP: "input", Qc: "output", "~{Qc}": "output", I0c: "input", I1c: "input", I1d: "input", I0d: "input", "~{Qd}": "output", Qd: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS398";
  override referencePrefix = "U";
}

/**
 * Quad 2 to 1 line multiplexer with storage
 *
 * KiCad symbol: `74xx:74LS399`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS399
 * Keywords: TTL MUX MUX2.
 */
export class _74LS399 extends Component.withPins({
  "S": "1",
  "Qa": "2",
  "I0a": "3",
  "I1a": "4",
  "I1b": "5",
  "I0b": "6",
  "Qb": "7",
  "GND": "8",
  "CP": "9",
  "Qc": "10",
  "I0c": "11",
  "I1c": "12",
  "I1d": "13",
  "I0d": "14",
  "Qd": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "input", Qa: "output", I0a: "input", I1a: "input", I1b: "input", I0b: "input", Qb: "output", GND: "power_in", CP: "input", Qc: "output", I0c: "input", I1c: "input", I1d: "input", I0d: "input", Qd: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS399";
  override referencePrefix = "U";
}

/**
 * Dual 4-input NAND
 *
 * KiCad symbol: `74xx:74LS40`. Reference prefix: `U`.
 * Footprint filters: DIP?12*.
 * @see http://www.ti.com/lit/gpn/sn74LS40
 * Keywords: TTL Nand4.
 */
export class _74LS40 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P4: "input", P5: "input", P6: "output", P8: "output", P9: "input", P10: "input", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS40";
  override referencePrefix = "U";
}

/**
 * 4 to 10 line Decoder
 *
 * KiCad symbol: `74xx:74LS42`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS42
 * Keywords: TTL DECOD DECOD10.
 */
export class _74LS42 extends Component.withPins({
  "0": "1",
  "1": "2",
  "2": "3",
  "3": "4",
  "4": "5",
  "5": "6",
  "6": "7",
  "7": "9",
  "8": "10",
  "9": "11",
  "GND": "8",
  "A3": "12",
  "A2": "13",
  "A1": "14",
  "A0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "0": "output", "1": "output", "2": "output", "3": "output", "4": "output", "5": "output", "6": "output", "7": "output", "8": "output", "9": "output", GND: "power_in", A3: "input", A2: "input", A1: "input", A0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS42";
  override referencePrefix = "U";
}

/**
 * BCD to 7-segment Driver, Open Collector, 30V outputs
 *
 * KiCad symbol: `74xx:74LS47`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS47
 * Keywords: TTL DECOD DECOD7 OpenCol.
 */
export class _74LS47 extends Component.withPins({
  "B": "1",
  "C": "2",
  "LT": "3",
  "BI": "4",
  "RBI": "5",
  "D": "6",
  "A": "7",
  "GND": "8",
  "e": "9",
  "d": "10",
  "c": "11",
  "b": "12",
  "a": "13",
  "g": "14",
  "f": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "input", LT: "input", BI: "input", RBI: "input", D: "input", A: "input", GND: "power_in", e: "open_collector", d: "open_collector", c: "open_collector", b: "open_collector", a: "open_collector", g: "open_collector", f: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS47";
  override referencePrefix = "U";
}

/**
 * BCD to 7-segment Driver, Open Collector, 15V outputs
 *
 * KiCad symbol: `74xx:74LS46`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS46
 * Keywords: TTL DECOD DECOD7 OpenCol.
 */
export class _74LS46 extends Component.withPins({
  "B": "1",
  "C": "2",
  "LT": "3",
  "BI": "4",
  "RBI": "5",
  "D": "6",
  "A": "7",
  "GND": "8",
  "e": "9",
  "d": "10",
  "c": "11",
  "b": "12",
  "a": "13",
  "g": "14",
  "f": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "input", LT: "input", BI: "input", RBI: "input", D: "input", A: "input", GND: "power_in", e: "open_collector", d: "open_collector", c: "open_collector", b: "open_collector", a: "open_collector", g: "open_collector", f: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS46";
  override referencePrefix = "U";
}

/**
 * BCD to 7-segment Decoder/driver, Active High outputs
 *
 * KiCad symbol: `74xx:74LS48`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS48
 * Keywords: TTL DECOD DECOD7.
 */
export class _74LS48 extends Component.withPins({
  "B": "1",
  "C": "2",
  "LT": "3",
  "BI": "4",
  "RBI": "5",
  "D": "6",
  "A": "7",
  "GND": "8",
  "e": "9",
  "d": "10",
  "c": "11",
  "b": "12",
  "a": "13",
  "g": "14",
  "f": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "input", LT: "input", BI: "input", RBI: "input", D: "input", A: "input", GND: "power_in", e: "open_collector", d: "open_collector", c: "open_collector", b: "open_collector", a: "open_collector", g: "open_collector", f: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS48";
  override referencePrefix = "U";
}

/**
 * BCD to 7-segment decoder/driver, Open collector
 *
 * KiCad symbol: `74xx:74LS49`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74ls47
 * Keywords: TTL DECOD DECOD7 OpenCol.
 */
export class _74LS49 extends Component.withPins({
  "B": "1",
  "C": "2",
  "~{BI}": "3",
  "D": "4",
  "A": "5",
  "e": "6",
  "GND": "7",
  "d": "8",
  "c": "9",
  "b": "10",
  "a": "11",
  "g": "12",
  "f": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "input", "~{BI}": "input", D: "input", A: "input", e: "open_collector", GND: "power_in", d: "open_collector", c: "open_collector", b: "open_collector", a: "open_collector", g: "open_collector", f: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS49";
  override referencePrefix = "U";
}

/**
 * Dual 3- and 2-input AND-NOR ( S = /(AB[C] + DE[F]) )
 *
 * KiCad symbol: `74xx:74LS51`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74ls51.pdf
 * Keywords: TTL ANDNOR.
 */
export class _74LS51 extends Component.withPins({
  "P1": "1",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P8: "output", P9: "input", P10: "input", P11: "input", P12: "input", P13: "input", P2: "input", P3: "input", P4: "input", P5: "input", P6: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS51";
  override referencePrefix = "U";
}

/**
 * 8-bit Buffer/Line driver Inverter, 3-state outputs
 *
 * KiCad symbol: `74xx:74LS540`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/sn74LS540
 * Keywords: BUFFER BUS TTL 3State.
 */
export class _74LS540 extends Component.withPins({
  "G1": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "GND": "10",
  "Y7": "11",
  "Y6": "12",
  "Y5": "13",
  "Y4": "14",
  "Y3": "15",
  "Y2": "16",
  "Y1": "17",
  "Y0": "18",
  "G2": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", A5: "input", A6: "input", A7: "input", GND: "power_in", Y7: "tri_state", Y6: "tri_state", Y5: "tri_state", Y4: "tri_state", Y3: "tri_state", Y2: "tri_state", Y1: "tri_state", Y0: "tri_state", G2: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS540";
  override referencePrefix = "U";
}

/**
 * And-Nor (Y = /(AB + CDE + FGH + IJ) ), DIP-14
 *
 * KiCad symbol: `74xx:74LS54N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn54ls54.pdf
 * Keywords: TTL ANDNOR.
 */
export class _74LS54N extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "input", P4: "input", P5: "input", P6: "output", P9: "input", P10: "input", P11: "input", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS54N";
  override referencePrefix = "U";
}

/**
 * AND-NOR ( S = / (ABCD + EFGH) )
 *
 * KiCad symbol: `74xx:74LS55`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS55
 * Keywords: TTL ANDNOR.
 */
export class _74LS55 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P8": "8",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "input", P4: "input", P8: "output", P10: "input", P11: "input", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS55";
  override referencePrefix = "U";
}

/**
 * 8-bit Latch 3-state outputs
 *
 * KiCad symbol: `74xx:74LS573`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see https://assets.nexperia.com/documents/data-sheet/74HC_HCT573.pdf
 * Keywords: TTL DFF DFF8 LATCH 3State.
 */
export class _74LS573 extends Component.withPins({
  "OE": "1",
  "D0": "2",
  "D1": "3",
  "D2": "4",
  "D3": "5",
  "D4": "6",
  "D5": "7",
  "D6": "8",
  "D7": "9",
  "GND": "10",
  "Load": "11",
  "Q7": "12",
  "Q6": "13",
  "Q5": "14",
  "Q4": "15",
  "Q3": "16",
  "Q2": "17",
  "Q1": "18",
  "Q0": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OE: "input", D0: "input", D1: "input", D2: "input", D3: "input", D4: "input", D5: "input", D6: "input", D7: "input", GND: "power_in", Load: "input", Q7: "tri_state", Q6: "tri_state", Q5: "tri_state", Q4: "tri_state", Q3: "tri_state", Q2: "tri_state", Q1: "tri_state", Q0: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS573";
  override referencePrefix = "U";
}

/**
 * 8-bit Binary Counter with Output Register 3-State Outputs, DIP-16/SOIC-16/SOIC-16W
 *
 * KiCad symbol: `74xx:74LS590`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/gpn/sn74ls590
 * Keywords: TTL Counter 3State.
 */
export class _74LS590 extends Component.withPins({
  "Q1": "1",
  "Q2": "2",
  "Q3": "3",
  "Q4": "4",
  "Q5": "5",
  "Q6": "6",
  "Q7": "7",
  "GND": "8",
  "~{RCO}": "9",
  "~{MRC}": "10",
  "CPC": "11",
  "~{CE}": "12",
  "CPR": "13",
  "~{OE}": "14",
  "Q0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Q1: "tri_state", Q2: "tri_state", Q3: "tri_state", Q4: "tri_state", Q5: "tri_state", Q6: "tri_state", Q7: "tri_state", GND: "power_in", "~{RCO}": "output", "~{MRC}": "input", CPC: "input", "~{CE}": "input", CPR: "input", "~{OE}": "input", Q0: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS590";
  override referencePrefix = "U";
}

/**
 * 8-bit serial in/out Shift Register 3-State Outputs
 *
 * KiCad symbol: `74xx:74LS595`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/gpn/sn74ls595
 * Keywords: TTL SR 3State.
 */
export class _74LS595 extends Component.withPins({
  "QB": "1",
  "QC": "2",
  "QD": "3",
  "QE": "4",
  "QF": "5",
  "QG": "6",
  "QH": "7",
  "GND": "8",
  "QH'": "9",
  "~{SRCLR}": "10",
  "SRCLK": "11",
  "RCLK": "12",
  "~{OE}": "13",
  "SER": "14",
  "QA": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QB: "tri_state", QC: "tri_state", QD: "tri_state", QE: "tri_state", QF: "tri_state", QG: "tri_state", QH: "tri_state", GND: "power_in", "QH'": "output", "~{SRCLR}": "input", SRCLK: "input", RCLK: "input", "~{OE}": "input", SER: "input", QA: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS595";
  override referencePrefix = "U";
}

/**
 * 8-bit serial in/out Shift Register Open Collector outputs
 *
 * KiCad symbol: `74xx:74LS596`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*, SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/gpn/sn74ls596
 * Keywords: HCMOS SR OpenCollector.
 */
export class _74LS596 extends Component.withPins({
  "QB": "1",
  "QC": "2",
  "QD": "3",
  "QE": "4",
  "QF": "5",
  "QG": "6",
  "QH": "7",
  "GND": "8",
  "QH'": "9",
  "~{SRCLR}": "10",
  "SRCLK": "11",
  "RCLK": "12",
  "~{OE}": "13",
  "SER": "14",
  "QA": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { QB: "open_collector", QC: "open_collector", QD: "open_collector", QE: "open_collector", QF: "open_collector", QG: "open_collector", QH: "open_collector", GND: "power_in", "QH'": "output", "~{SRCLR}": "input", SRCLK: "input", RCLK: "input", "~{OE}": "input", SER: "input", QA: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS596";
  override referencePrefix = "U";
}

/**
 * dual voltage-controlled oscillator, enable control, range control
 *
 * KiCad symbol: `74xx:74LS629`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS629
 * Keywords: VCO.
 */
export class _74LS629 extends Component.withPins({
  "FC_2": "2",
  "RNG_3": "3",
  "CX1_4": "4",
  "CX2_5": "5",
  "EN_6": "6",
  "Y_7": "7",
  "OSC_15": "15",
  "FC_1": "1",
  "OSC_8": "8",
  "Y_10": "10",
  "EN_11": "11",
  "CX2_12": "12",
  "CX1_13": "13",
  "RNG_14": "14",
  "GND": "9",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FC_2: "input", RNG_3: "input", CX1_4: "passive", CX2_5: "passive", EN_6: "input", Y_7: "output", OSC_15: "passive", FC_1: "input", OSC_8: "passive", Y_10: "output", EN_11: "input", CX2_12: "passive", CX1_13: "passive", RNG_14: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS629";
  override referencePrefix = "U";
}

/**
 * 4 x 4 Register Files 3-State Outputs
 *
 * KiCad symbol: `74xx:74LS670`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS670
 * Keywords: TTL Register 3State.
 */
export class _74LS670 extends Component.withPins({
  "D2": "1",
  "D3": "2",
  "D4": "3",
  "Rb": "4",
  "Ra": "5",
  "Q4": "6",
  "Q3": "7",
  "GND": "8",
  "Q2": "9",
  "Q1": "10",
  "~{Er}": "11",
  "~{Ew}": "12",
  "Wb": "13",
  "Wa": "14",
  "D1": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D2: "input", D3: "input", D4: "input", Rb: "input", Ra: "input", Q4: "tri_state", Q3: "tri_state", GND: "power_in", Q2: "tri_state", Q1: "tri_state", "~{Er}": "input", "~{Ew}": "input", Wb: "input", Wa: "input", D1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS670";
  override referencePrefix = "U";
}

/**
 * Dual JK Flip-Flop, reset
 *
 * KiCad symbol: `74xx:74LS73`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS73
 * Keywords: TTL JK JKFF.
 */
export class _74LS73 extends Component.withPins({
  "C_5": "5",
  "~{R}_6": "6",
  "J_7": "7",
  "~{Q}_8": "8",
  "Q_9": "9",
  "K_10": "10",
  "C_1": "1",
  "~{R}_2": "2",
  "K_3": "3",
  "Q_12": "12",
  "~{Q}_13": "13",
  "J_14": "14",
  "VCC": "4",
  "GND": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_5: "input", "~{R}_6": "input", J_7: "input", "~{Q}_8": "output", Q_9: "output", K_10: "input", C_1: "input", "~{R}_2": "input", K_3: "input", Q_12: "output", "~{Q}_13": "output", J_14: "input", VCC: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS73";
  override referencePrefix = "U";
}

/**
 * 4-bit Latch
 *
 * KiCad symbol: `74xx:74LS75`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS75
 * Keywords: TTL DFF Latch.
 */
export class _74LS75 extends Component.withPins({
  "~{Q0}": "1",
  "D0": "2",
  "D1": "3",
  "E23": "4",
  "VCC": "5",
  "D2": "6",
  "D3": "7",
  "~{Q3}": "8",
  "Q3": "9",
  "Q2": "10",
  "~{Q2}": "11",
  "GND": "12",
  "E01": "13",
  "~{Q1}": "14",
  "Q1": "15",
  "Q0": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{Q0}": "output", D0: "input", D1: "input", E23: "input", VCC: "power_in", D2: "input", D3: "input", "~{Q3}": "output", Q3: "output", Q2: "output", "~{Q2}": "output", GND: "power_in", E01: "input", "~{Q1}": "output", Q1: "output", Q0: "output", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS75";
  override referencePrefix = "U";
}

/**
 * Dual JK Flip-flop, Set & Reset
 *
 * KiCad symbol: `74xx:74LS76`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS76
 * Keywords: TTL JK JKFF.
 */
export class _74LS76 extends Component.withPins({
  "C_1": "1",
  "~{S}_2": "2",
  "~{R}_3": "3",
  "J_4": "4",
  "~{Q}_14": "14",
  "Q_15": "15",
  "K_16": "16",
  "C_6": "6",
  "~{S}_7": "7",
  "~{R}_8": "8",
  "J_9": "9",
  "~{Q}_10": "10",
  "Q_11": "11",
  "K_12": "12",
  "VCC": "5",
  "GND": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_1: "input", "~{S}_2": "input", "~{R}_3": "input", J_4: "input", "~{Q}_14": "output", Q_15: "output", K_16: "input", C_6: "input", "~{S}_7": "input", "~{R}_8": "input", J_9: "input", "~{Q}_10": "output", Q_11: "output", K_12: "input", VCC: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS76";
  override referencePrefix = "U";
}

/**
 * 4-bit Latch
 *
 * KiCad symbol: `74xx:74LS77`. Reference prefix: `U`.
 * Footprint filters: DIP?12*.
 * @see http://www.ti.com/lit/gpn/sn74LS77
 * Keywords: TTL DFF Latch.
 */
export class _74LS77 extends Component.withPins({
  "D0": "1",
  "D1": "2",
  "E23": "3",
  "VCC": "4",
  "D2": "5",
  "D3": "6",
  "Q3": "8",
  "Q2": "9",
  "GND": "11",
  "E01": "12",
  "Q1": "13",
  "Q0": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D0: "input", D1: "input", E23: "input", VCC: "power_in", D2: "input", D3: "input", Q3: "output", Q2: "output", GND: "power_in", E01: "input", Q1: "output", Q0: "output", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS77";
  override referencePrefix = "U";
}

/**
 * Dual JK Flip-flop, Set, Common clock & reset
 *
 * KiCad symbol: `74xx:74LS78`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS78
 * Keywords: TTL JK JKFF.
 */
export class _74LS78 extends Component.withPins({
  "C": "1",
  "~{S}_2": "2",
  "J_3": "3",
  "~{R}": "5",
  "~{Q}_12": "12",
  "Q_13": "13",
  "K_14": "14",
  "~{S}_6": "6",
  "K_7": "7",
  "Q_8": "8",
  "~{Q}_9": "9",
  "J_10": "10",
  "VCC": "4",
  "GND": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "input", "~{S}_2": "input", J_3: "input", "~{R}": "input", "~{Q}_12": "output", Q_13: "output", K_14: "input", "~{S}_6": "input", K_7: "input", Q_8: "output", "~{Q}_9": "output", J_10: "input", VCC: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS78";
  override referencePrefix = "U";
}

/**
 * 4-bit Full Adder
 *
 * KiCad symbol: `74xx:74LS83`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/gpn/sn74LS83
 * Keywords: TTL ADD ARITH ALU.
 */
export class _74LS83 extends Component.withPins({
  "A4": "1",
  "S3": "2",
  "A3": "3",
  "B3": "4",
  "VCC": "5",
  "S2": "6",
  "B2": "7",
  "A2": "8",
  "S1": "9",
  "A1": "10",
  "B1": "11",
  "GND": "12",
  "C0": "13",
  "C4": "14",
  "S4": "15",
  "B4": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A4: "input", S3: "output", A3: "input", B3: "input", VCC: "power_in", S2: "output", B2: "input", A2: "input", S1: "output", A1: "input", B1: "input", GND: "power_in", C0: "input", C4: "output", S4: "output", B4: "input", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS83";
  override referencePrefix = "U";
}

/**
 * BCD Counter ( div 2 & div 5 )
 *
 * KiCad symbol: `74xx:74LS90`. Reference prefix: `U`.
 * Footprint filters: DIP?12*.
 * @see http://www.ti.com/lit/gpn/sn74LS90
 * Keywords: TTL CNT CNT4.
 */
export class _74LS90 extends Component.withPins({
  "CP1..3": "1",
  "R0(1)": "2",
  "R0(2)": "3",
  "VCC": "5",
  "R9(1)": "6",
  "R9(2)": "7",
  "Q2": "8",
  "Q1": "9",
  "GND": "10",
  "Q3": "11",
  "Q0": "12",
  "CP0": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CP1..3": "input", "R0(1)": "input", "R0(2)": "input", VCC: "power_in", "R9(1)": "input", "R9(2)": "input", Q2: "output", Q1: "output", GND: "power_in", Q3: "output", Q0: "output", CP0: "input", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS90";
  override referencePrefix = "U";
}

/**
 * 8-bit Serial Register
 *
 * KiCad symbol: `74xx:74LS91`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS91
 * Keywords: TTL SR SR8.
 */
export class _74LS91 extends Component.withPins({
  "VCC": "5",
  "CLK": "9",
  "GND": "10",
  "B": "11",
  "A": "12",
  "Qh": "13",
  "~{Qh}": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", CLK: "input", GND: "power_in", B: "input", A: "input", Qh: "output", "~{Qh}": "output", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS91";
  override referencePrefix = "U";
}

/**
 * Divide by 12 counter
 *
 * KiCad symbol: `74xx:74LS92`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS92
 * Keywords: TTL CNT CNT4.
 */
export class _74LS92 extends Component.withPins({
  "CP1..3": "1",
  "VCC": "5",
  "R0(1)": "6",
  "R0(2)": "7",
  "Q3": "8",
  "Q2": "9",
  "GND": "10",
  "Q1": "11",
  "Q0": "12",
  "CP0": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CP1..3": "input", VCC: "power_in", "R0(1)": "input", "R0(2)": "input", Q3: "output", Q2: "output", GND: "power_in", Q1: "output", Q0: "output", CP0: "input", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS92";
  override referencePrefix = "U";
}

/**
 * Divide by 2 & 8 counter
 *
 * KiCad symbol: `74xx:74LS93`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS93
 * Keywords: TTL CNT CNT4.
 */
export class _74LS93 extends Component.withPins({
  "CP1..3": "1",
  "R0(1)": "2",
  "R0(2)": "3",
  "VCC": "5",
  "Q2": "8",
  "Q1": "9",
  "GND": "10",
  "Q3": "11",
  "Q0": "12",
  "CP0": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CP1..3": "input", "R0(1)": "input", "R0(2)": "input", VCC: "power_in", Q2: "output", Q1: "output", GND: "power_in", Q3: "output", Q0: "output", CP0: "input", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS93";
  override referencePrefix = "U";
}

/**
 * Shift Register 5-bit (in/out)
 *
 * KiCad symbol: `74xx:74LS95`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LS95
 * Keywords: TTL SR SR4.
 */
export class _74LS95 extends Component.withPins({
  "Ds": "1",
  "P0": "2",
  "P1": "3",
  "P2": "4",
  "P3": "5",
  "Mode": "6",
  "GND": "7",
  "Cp2.Lshift": "8",
  "Cp1.Rshift": "9",
  "Q3": "10",
  "Q2": "11",
  "Q1": "12",
  "Q0": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Ds: "input", P0: "input", P1: "input", P2: "input", P3: "input", Mode: "input", GND: "power_in", "Cp2.Lshift": "input", "Cp1.Rshift": "input", Q3: "output", Q2: "output", Q1: "output", Q0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LS95";
  override referencePrefix = "U";
}

/**
 * Hex Inverter
 *
 * KiCad symbol: `74xx:74LV14`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LV14
 * Keywords: TTL not inv.
 */
export class _74LV14 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "3.3V": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", GND: "power_in", "3.3V": "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LV14";
  override referencePrefix = "U";
}

/**
 * 2-input single supply translating AND gate, SOT-353
 *
 * KiCad symbol: `74xx:74LV1T08GW`. Reference prefix: `U`.
 * Footprint filters: SOT*353*.
 * @see https://assets.nexperia.com/documents/data-sheet/74LV1T08.pdf
 * Keywords: Single AND Gate voltage translator.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class _74LV1T08GW extends Component.withPins({
  "B": "1",
  "A": "2",
  "GND": "3",
  "Y": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", A: "input", GND: "power_in", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LV1T08GW";
  override referencePrefix = "U";
}

/**
 * 2-input single supply translating AND gate, SC-74A-5
 *
 * KiCad symbol: `74xx:74LV1T08GV`. Reference prefix: `U`.
 * Footprint filters: *SC*74A*.
 * @see https://assets.nexperia.com/documents/data-sheet/74LV1T08.pdf
 * Keywords: Single AND Gate voltage translator.
 * Default footprint: Package_TO_SOT_SMD:SC-74A-5_1.55x2.9mm_P0.95mm.
 */
export class _74LV1T08GV extends Component.withPins({
  "B": "1",
  "A": "2",
  "GND": "3",
  "Y": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", A: "input", GND: "power_in", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LV1T08GV";
  override referencePrefix = "U";
}

/**
 * Dual 16-bit binary counter
 *
 * KiCad symbol: `74xx:74LV8154`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lv8154.pdf
 * Keywords: counter binary.
 */
export class _74LV8154 extends Component.withPins({
  "CKLA": "1",
  "CLKB": "2",
  "~{GAL}": "3",
  "~{GAU}": "4",
  "~{GBL}": "5",
  "~{GBU}": "6",
  "RCLK": "7",
  "~{RCOA}": "8",
  "~{CLKBEN}": "9",
  "GND": "10",
  "~{CCLR}": "11",
  "Y7": "12",
  "Y6": "13",
  "Y5": "14",
  "Y4": "15",
  "Y3": "16",
  "Y2": "17",
  "Y1": "18",
  "Y0": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CKLA: "input", CLKB: "input", "~{GAL}": "input", "~{GAU}": "input", "~{GBL}": "input", "~{GBU}": "input", RCLK: "input", "~{RCOA}": "output", "~{CLKBEN}": "input", GND: "power_in", "~{CCLR}": "input", Y7: "output", Y6: "output", Y5: "output", Y4: "output", Y3: "output", Y2: "output", Y1: "output", Y0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LV8154";
  override referencePrefix = "U";
}

/**
 * Quad buffer 3-State outputs
 *
 * KiCad symbol: `74xx:74LVC125`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/gpn/sn74LVC125
 * Keywords: TTL buffer 3State.
 */
export class _74LVC125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "tri_state", P4: "input", P5: "input", P6: "tri_state", P8: "tri_state", P9: "input", P10: "input", P11: "tri_state", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74LVC125";
  override referencePrefix = "U";
}

/**
 * 8-bit Universal Shift Register, 2V to 5.5V, TSSOP-16
 *
 * KiCad symbol: `74xx:74VHC9164FT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://toshiba.semicon-storage.com/info/docget.jsp?did=15655&prodName=74VHC9164FT
 * Keywords: shift register universal serial parallel.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class _74VHC9164FT extends Component.withPins({
  "P/S_CONT": "1",
  "~{CLR_LOAD}": "2",
  "SI": "3",
  "CK": "4",
  "Q/D1": "5",
  "Q/D2": "6",
  "Q/D3": "7",
  "GND": "8",
  "Q/D4": "9",
  "Q/D5": "10",
  "Q/D6": "11",
  "Q/D7": "12",
  "Q/D8": "13",
  "Q8'": "14",
  "Q8C": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P/S_CONT": "input", "~{CLR_LOAD}": "input", SI: "input", CK: "input", "Q/D1": "bidirectional", "Q/D2": "bidirectional", "Q/D3": "bidirectional", GND: "power_in", "Q/D4": "bidirectional", "Q/D5": "bidirectional", "Q/D6": "bidirectional", "Q/D7": "bidirectional", "Q/D8": "bidirectional", "Q8'": "output", Q8C: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:74VHC9164FT";
  override referencePrefix = "U";
}

/**
 * 3-to-8 line decoder/multiplexer, SOIC-16
 *
 * KiCad symbol: `74xx:CD74AC238`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd74ac238.pdf
 * Keywords: demux.
 */
export class CD74AC238 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{E1}": "4",
  "~{E2}": "5",
  "E3": "6",
  "Y7": "7",
  "GND": "8",
  "Y6": "9",
  "Y5": "10",
  "Y4": "11",
  "Y3": "12",
  "Y2": "13",
  "Y1": "14",
  "Y0": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{E1}": "input", "~{E2}": "input", E3: "input", Y7: "output", GND: "power_in", Y6: "output", Y5: "output", Y4: "output", Y3: "output", Y2: "output", Y1: "output", Y0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:CD74AC238";
  override referencePrefix = "U";
}

/**
 * High-Speed CMOS Logic 16-Channel Analog Multiplexer/Demultiplexer, SOIC-24
 *
 * KiCad symbol: `74xx:CD74HC4067M`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x15.4mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hc4067.pdf
 * Keywords: multiplexer demultiplexer mux demux.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 */
export class CD74HC4067M extends Component.withPins({
  "COM": "1",
  "I7": "2",
  "I6": "3",
  "I5": "4",
  "I4": "5",
  "I3": "6",
  "I2": "7",
  "I1": "8",
  "I0": "9",
  "S0": "10",
  "S1": "11",
  "GND": "12",
  "S3": "13",
  "S2": "14",
  "~{E}": "15",
  "I15": "16",
  "I14": "17",
  "I13": "18",
  "I12": "19",
  "I11": "20",
  "I10": "21",
  "I9": "22",
  "I8": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COM: "passive", I7: "passive", I6: "passive", I5: "passive", I4: "passive", I3: "passive", I2: "passive", I1: "passive", I0: "passive", S0: "input", S1: "input", GND: "power_in", S3: "input", S2: "input", "~{E}": "input", I15: "passive", I14: "passive", I13: "passive", I12: "passive", I11: "passive", I10: "passive", I9: "passive", I8: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:CD74HC4067M";
  override referencePrefix = "U";
}

/**
 * High-Speed CMOS Logic 16-Channel Analog Multiplexer/Demultiplexer, SSOP-24
 *
 * KiCad symbol: `74xx:CD74HC4067SM`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd74hc4067.pdf
 * Keywords: multiplexer demultiplexer mux demux.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 */
export class CD74HC4067SM extends Component.withPins({
  "COM": "1",
  "I7": "2",
  "I6": "3",
  "I5": "4",
  "I4": "5",
  "I3": "6",
  "I2": "7",
  "I1": "8",
  "I0": "9",
  "S0": "10",
  "S1": "11",
  "GND": "12",
  "S3": "13",
  "S2": "14",
  "~{E}": "15",
  "I15": "16",
  "I14": "17",
  "I13": "18",
  "I12": "19",
  "I11": "20",
  "I10": "21",
  "I9": "22",
  "I8": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COM: "passive", I7: "passive", I6: "passive", I5: "passive", I4: "passive", I3: "passive", I2: "passive", I1: "passive", I0: "passive", S0: "input", S1: "input", GND: "power_in", S3: "input", S2: "input", "~{E}": "input", I15: "passive", I14: "passive", I13: "passive", I12: "passive", I11: "passive", I10: "passive", I9: "passive", I8: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:CD74HC4067SM";
  override referencePrefix = "U";
}

/**
 * Low Voltage 16-Bit Bidirectional Transceiver with 5V Tolerant Inputs and Outputs, TSSOP-48
 *
 * KiCad symbol: `74xx:MC74LCX16245DT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.onsemi.com/pdf/datasheet/mc74lcx16245-d.pdf
 * Keywords: transceiver.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 */
export class MC74LCX16245DT extends Component.withPins({
  "T/~{R}1": "1",
  "B0": "2",
  "B1": "3",
  "GND_4": "4",
  "B2": "5",
  "B3": "6",
  "VCC_7": "7",
  "B4": "8",
  "B5": "9",
  "GND_10": "10",
  "B6": "11",
  "B7": "12",
  "B8": "13",
  "B9": "14",
  "GND_15": "15",
  "B10": "16",
  "B11": "17",
  "VCC_18": "18",
  "B12": "19",
  "B13": "20",
  "GND_21": "21",
  "B14": "22",
  "B15": "23",
  "T/~{R}2": "24",
  "~{OE2}": "25",
  "A15": "26",
  "A14": "27",
  "GND_28": "28",
  "A13": "29",
  "A12": "30",
  "VCC_31": "31",
  "A11": "32",
  "A10": "33",
  "GND_34": "34",
  "A9": "35",
  "A8": "36",
  "A7": "37",
  "A6": "38",
  "GND_39": "39",
  "A5": "40",
  "A4": "41",
  "VCC_42": "42",
  "A3": "43",
  "A2": "44",
  "GND_45": "45",
  "A1": "46",
  "A0": "47",
  "~{OE1}": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "T/~{R}1": "input", B0: "bidirectional", B1: "bidirectional", GND_4: "power_in", B2: "bidirectional", B3: "bidirectional", VCC_7: "power_in", B4: "bidirectional", B5: "bidirectional", GND_10: "passive", B6: "bidirectional", B7: "bidirectional", B8: "bidirectional", B9: "bidirectional", GND_15: "passive", B10: "bidirectional", B11: "bidirectional", VCC_18: "passive", B12: "bidirectional", B13: "bidirectional", GND_21: "passive", B14: "bidirectional", B15: "bidirectional", "T/~{R}2": "input", "~{OE2}": "input", A15: "bidirectional", A14: "bidirectional", GND_28: "passive", A13: "bidirectional", A12: "bidirectional", VCC_31: "passive", A11: "bidirectional", A10: "bidirectional", GND_34: "passive", A9: "bidirectional", A8: "bidirectional", A7: "bidirectional", A6: "bidirectional", GND_39: "passive", A5: "bidirectional", A4: "bidirectional", VCC_42: "passive", A3: "bidirectional", A2: "bidirectional", GND_45: "passive", A1: "bidirectional", A0: "bidirectional", "~{OE1}": "input", ...opts.pinTypes } });
  }
  override schema = "74xx:MC74LCX16245DT";
  override referencePrefix = "U";
}

/**
 * 20-key encoder
 *
 * KiCad symbol: `74xx:MM74C923`. Reference prefix: `U`.
 * Footprint filters: DIP?20*.
 * @see http://www.ti.com/lit/gpn/snMM74C923
 * Keywords: encoder.
 */
export class MM74C923 extends Component.withPins({
  "Y1": "1",
  "Y2": "2",
  "Y3": "3",
  "Y4": "4",
  "Y5": "5",
  "OSC": "6",
  "KBM": "7",
  "X4": "8",
  "X3": "9",
  "GND": "10",
  "X2": "11",
  "X1": "12",
  "DA": "13",
  "XOE": "14",
  "E": "15",
  "D": "16",
  "C": "17",
  "B": "18",
  "A": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Y1: "input", Y2: "input", Y3: "input", Y4: "input", Y5: "input", OSC: "input", KBM: "input", X4: "output", X3: "output", GND: "power_in", X2: "output", X1: "output", DA: "output", XOE: "input", E: "tri_state", D: "tri_state", C: "tri_state", B: "tri_state", A: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:MM74C923";
  override referencePrefix = "U";
}

/**
 * 16-Bit 2.5V to 3.3V or 3.3V to 5V Level-Shifting Transceiver With 3-State Outputs, TSSOP-48
 *
 * KiCad symbol: `74xx:SN74ALVC164245DGG`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74alvc164245.pdf
 * Keywords: transceiver.
 * Default footprint: Package_SO:TSSOP-48_6.1x12.5mm_P0.5mm.
 */
export class SN74ALVC164245DGG extends Component.withPins({
  "1DIR": "1",
  "1B0": "2",
  "1B1": "3",
  "GND_4": "4",
  "1B2": "5",
  "1B3": "6",
  "V_{CC(B)}_7": "7",
  "1B4": "8",
  "1B5": "9",
  "GND_10": "10",
  "1B6": "11",
  "1B7": "12",
  "2B0": "13",
  "2B1": "14",
  "GND_15": "15",
  "2B2": "16",
  "2B3": "17",
  "V_{CC(B)}_18": "18",
  "2B4": "19",
  "2B5": "20",
  "GND_21": "21",
  "2B6": "22",
  "2B7": "23",
  "2DIR": "24",
  "2~{OE}": "25",
  "2A7": "26",
  "2A6": "27",
  "GND_28": "28",
  "2A5": "29",
  "2A4": "30",
  "V_{CC(A)}_31": "31",
  "2A3": "32",
  "2A2": "33",
  "GND_34": "34",
  "2A1": "35",
  "2A0": "36",
  "1A7": "37",
  "1A6": "38",
  "GND_39": "39",
  "1A5": "40",
  "1A4": "41",
  "V_{CC(A)}_42": "42",
  "1A3": "43",
  "1A2": "44",
  "GND_45": "45",
  "1A1": "46",
  "1A0": "47",
  "1~{OE}": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1DIR": "input", "1B0": "bidirectional", "1B1": "bidirectional", GND_4: "power_in", "1B2": "bidirectional", "1B3": "bidirectional", "V_{CC(B)}_7": "power_in", "1B4": "bidirectional", "1B5": "bidirectional", GND_10: "passive", "1B6": "bidirectional", "1B7": "bidirectional", "2B0": "bidirectional", "2B1": "bidirectional", GND_15: "passive", "2B2": "bidirectional", "2B3": "bidirectional", "V_{CC(B)}_18": "passive", "2B4": "bidirectional", "2B5": "bidirectional", GND_21: "passive", "2B6": "bidirectional", "2B7": "bidirectional", "2DIR": "input", "2~{OE}": "input", "2A7": "bidirectional", "2A6": "bidirectional", GND_28: "passive", "2A5": "bidirectional", "2A4": "bidirectional", "V_{CC(A)}_31": "power_in", "2A3": "bidirectional", "2A2": "bidirectional", GND_34: "passive", "2A1": "bidirectional", "2A0": "bidirectional", "1A7": "bidirectional", "1A6": "bidirectional", GND_39: "passive", "1A5": "bidirectional", "1A4": "bidirectional", "V_{CC(A)}_42": "passive", "1A3": "bidirectional", "1A2": "bidirectional", GND_45: "passive", "1A1": "bidirectional", "1A0": "bidirectional", "1~{OE}": "input", ...opts.pinTypes } });
  }
  override schema = "74xx:SN74ALVC164245DGG";
  override referencePrefix = "U";
}

/**
 * 16-Bit 2.5V to 3.3V or 3.3V to 5V Level-Shifting Transceiver With 3-State Outputs, SSOP-48
 *
 * KiCad symbol: `74xx:SN74ALVC164245DL`. Reference prefix: `U`.
 * Footprint filters: SSOP*7.5x15.9mm*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74alvc164245.pdf
 * Keywords: transceiver.
 * Default footprint: Package_SO:SSOP-48_7.5x15.9mm_P0.635mm.
 */
export class SN74ALVC164245DL extends Component.withPins({
  "1DIR": "1",
  "1B0": "2",
  "1B1": "3",
  "GND_4": "4",
  "1B2": "5",
  "1B3": "6",
  "V_{CC(B)}_7": "7",
  "1B4": "8",
  "1B5": "9",
  "GND_10": "10",
  "1B6": "11",
  "1B7": "12",
  "2B0": "13",
  "2B1": "14",
  "GND_15": "15",
  "2B2": "16",
  "2B3": "17",
  "V_{CC(B)}_18": "18",
  "2B4": "19",
  "2B5": "20",
  "GND_21": "21",
  "2B6": "22",
  "2B7": "23",
  "2DIR": "24",
  "2~{OE}": "25",
  "2A7": "26",
  "2A6": "27",
  "GND_28": "28",
  "2A5": "29",
  "2A4": "30",
  "V_{CC(A)}_31": "31",
  "2A3": "32",
  "2A2": "33",
  "GND_34": "34",
  "2A1": "35",
  "2A0": "36",
  "1A7": "37",
  "1A6": "38",
  "GND_39": "39",
  "1A5": "40",
  "1A4": "41",
  "V_{CC(A)}_42": "42",
  "1A3": "43",
  "1A2": "44",
  "GND_45": "45",
  "1A1": "46",
  "1A0": "47",
  "1~{OE}": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1DIR": "input", "1B0": "bidirectional", "1B1": "bidirectional", GND_4: "power_in", "1B2": "bidirectional", "1B3": "bidirectional", "V_{CC(B)}_7": "power_in", "1B4": "bidirectional", "1B5": "bidirectional", GND_10: "passive", "1B6": "bidirectional", "1B7": "bidirectional", "2B0": "bidirectional", "2B1": "bidirectional", GND_15: "passive", "2B2": "bidirectional", "2B3": "bidirectional", "V_{CC(B)}_18": "passive", "2B4": "bidirectional", "2B5": "bidirectional", GND_21: "passive", "2B6": "bidirectional", "2B7": "bidirectional", "2DIR": "input", "2~{OE}": "input", "2A7": "bidirectional", "2A6": "bidirectional", GND_28: "passive", "2A5": "bidirectional", "2A4": "bidirectional", "V_{CC(A)}_31": "power_in", "2A3": "bidirectional", "2A2": "bidirectional", GND_34: "passive", "2A1": "bidirectional", "2A0": "bidirectional", "1A7": "bidirectional", "1A6": "bidirectional", GND_39: "passive", "1A5": "bidirectional", "1A4": "bidirectional", "V_{CC(A)}_42": "passive", "1A3": "bidirectional", "1A2": "bidirectional", GND_45: "passive", "1A1": "bidirectional", "1A0": "bidirectional", "1~{OE}": "input", ...opts.pinTypes } });
  }
  override schema = "74xx:SN74ALVC164245DL";
  override referencePrefix = "U";
}

/**
 * 20-Bit Buffer/Driver With 3-State Outputs
 *
 * KiCad symbol: `74xx:SN74AVC16827DGGR`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x14mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74avc16827.pdf
 * Keywords: Buffer Driver 3-State.
 * Default footprint: Package_SO:TSSOP-56_6.1x14mm_P0.5mm.
 */
export class SN74AVC16827DGGR extends Component.withPins({
  "1OE1": "1",
  "1Y1": "2",
  "1Y2": "3",
  "GND_4": "4",
  "1Y3": "5",
  "1Y4": "6",
  "VCC_7": "7",
  "1Y5": "8",
  "1Y6": "9",
  "1Y7": "10",
  "GND_11": "11",
  "1Y8": "12",
  "1Y9": "13",
  "1Y10": "14",
  "2Y1": "15",
  "2Y2": "16",
  "2Y3": "17",
  "GND_18": "18",
  "2Y4": "19",
  "2Y5": "20",
  "2Y6": "21",
  "VCC_22": "22",
  "2Y7": "23",
  "2Y8": "24",
  "GND_25": "25",
  "2Y9": "26",
  "2Y10": "27",
  "2OE1": "28",
  "2OE2": "29",
  "2A10": "30",
  "2A9": "31",
  "GND_32": "32",
  "2A8": "33",
  "2A7": "34",
  "VCC_35": "35",
  "2A6": "36",
  "2A5": "37",
  "2A4": "38",
  "GND_39": "39",
  "2A3": "40",
  "2A2": "41",
  "2A1": "42",
  "1A10": "43",
  "1A9": "44",
  "1A8": "45",
  "GND_46": "46",
  "1A7": "47",
  "1A6": "48",
  "1A5": "49",
  "VCC_50": "50",
  "1A4": "51",
  "1A3": "52",
  "GND_53": "53",
  "1A2": "54",
  "1A1": "55",
  "1OE2": "56",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1OE1": "input", "1Y1": "output", "1Y2": "output", GND_4: "power_in", "1Y3": "output", "1Y4": "output", VCC_7: "power_in", "1Y5": "output", "1Y6": "output", "1Y7": "output", GND_11: "passive", "1Y8": "output", "1Y9": "output", "1Y10": "output", "2Y1": "output", "2Y2": "output", "2Y3": "output", GND_18: "passive", "2Y4": "output", "2Y5": "output", "2Y6": "output", VCC_22: "passive", "2Y7": "output", "2Y8": "output", GND_25: "passive", "2Y9": "output", "2Y10": "output", "2OE1": "input", "2OE2": "input", "2A10": "input", "2A9": "input", GND_32: "passive", "2A8": "input", "2A7": "input", VCC_35: "passive", "2A6": "input", "2A5": "input", "2A4": "input", GND_39: "passive", "2A3": "input", "2A2": "input", "2A1": "input", "1A10": "input", "1A9": "input", "1A8": "input", GND_46: "passive", "1A7": "input", "1A6": "input", "1A5": "input", VCC_50: "passive", "1A4": "input", "1A3": "input", GND_53: "passive", "1A2": "input", "1A1": "input", "1OE2": "input", ...opts.pinTypes } });
  }
  override schema = "74xx:SN74AVC16827DGGR";
  override referencePrefix = "U";
}

/**
 * FET Bus Switch, 10bit, 500MHz, 3.3V, SSOP-24
 *
 * KiCad symbol: `74xx:SN74CB3Q3384ADBQ`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cb3q3384a.pdf?ts=1634790233466
 * Keywords: low voltage high bandwidth.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 */
export class SN74CB3Q3384ADBQ extends Component.withPins({
  "~{1OE}": "1",
  "1B1": "2",
  "1A1": "3",
  "1A2": "4",
  "1B2": "5",
  "1B3": "6",
  "1A3": "7",
  "1A4": "8",
  "1B4": "9",
  "1B5": "10",
  "1A5": "11",
  "GND": "12",
  "~{2OE}": "13",
  "2A1": "14",
  "2B1": "15",
  "2B2": "16",
  "2A2": "17",
  "2A3": "18",
  "2B3": "19",
  "2B4": "20",
  "2A4": "21",
  "2A5": "22",
  "2B5": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{1OE}": "input", "1B1": "tri_state", "1A1": "tri_state", "1A2": "tri_state", "1B2": "tri_state", "1B3": "tri_state", "1A3": "tri_state", "1A4": "tri_state", "1B4": "tri_state", "1B5": "tri_state", "1A5": "tri_state", GND: "power_in", "~{2OE}": "input", "2A1": "tri_state", "2B1": "tri_state", "2B2": "tri_state", "2A2": "tri_state", "2A3": "tri_state", "2B3": "tri_state", "2B4": "tri_state", "2A4": "tri_state", "2A5": "tri_state", "2B5": "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:SN74CB3Q3384ADBQ";
  override referencePrefix = "U";
}

/**
 * FET Bus Switch, 10bit, 500MHz, 3.3V, TSSOP-24
 *
 * KiCad symbol: `74xx:SN74CB3Q3384APW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74cb3q3384a.pdf?ts=1634790233466
 * Keywords: low voltage high bandwidth.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class SN74CB3Q3384APW extends Component.withPins({
  "~{1OE}": "1",
  "1B1": "2",
  "1A1": "3",
  "1A2": "4",
  "1B2": "5",
  "1B3": "6",
  "1A3": "7",
  "1A4": "8",
  "1B4": "9",
  "1B5": "10",
  "1A5": "11",
  "GND": "12",
  "~{2OE}": "13",
  "2A1": "14",
  "2B1": "15",
  "2B2": "16",
  "2A2": "17",
  "2A3": "18",
  "2B3": "19",
  "2B4": "20",
  "2A4": "21",
  "2A5": "22",
  "2B5": "23",
  "VCC": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{1OE}": "input", "1B1": "tri_state", "1A1": "tri_state", "1A2": "tri_state", "1B2": "tri_state", "1B3": "tri_state", "1A3": "tri_state", "1A4": "tri_state", "1B4": "tri_state", "1B5": "tri_state", "1A5": "tri_state", GND: "power_in", "~{2OE}": "input", "2A1": "tri_state", "2B1": "tri_state", "2B2": "tri_state", "2A2": "tri_state", "2A3": "tri_state", "2B3": "tri_state", "2B4": "tri_state", "2A4": "tri_state", "2A5": "tri_state", "2B5": "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:SN74CB3Q3384APW";
  override referencePrefix = "U";
}

/**
 * Hex Buffers and Drivers With Open Collector High Voltage Outputs
 *
 * KiCad symbol: `74xx:SN74LS07`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, DIP*W7.62mm*.
 * @see www.ti.com/lit/ds/symlink/sn74ls07.pdf
 * Keywords: TTL hex buffer OpenCol.
 */
export class SN74LS07 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "open_collector", P3: "input", P4: "open_collector", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "open_collector", P11: "input", P12: "open_collector", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:SN74LS07";
  override referencePrefix = "U";
}

/**
 * Hex Buffers and Drivers With Open Collector High Voltage Outputs
 *
 * KiCad symbol: `74xx:SN74LS07N`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, DIP*W7.62mm*.
 * @see www.ti.com/lit/ds/symlink/sn74ls07.pdf
 * Keywords: TTL hex buffer OpenCol.
 */
export class SN74LS07N extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "open_collector", P3: "input", P4: "open_collector", P5: "input", P6: "open_collector", P8: "open_collector", P9: "input", P10: "open_collector", P11: "input", P12: "open_collector", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:SN74LS07N";
  override referencePrefix = "U";
}

/**
 * Single Supply Logic Level Translator Quad Buffer with 3-State Outputs
 *
 * KiCad symbol: `74xx:SN74LV4T125`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lv4t125.pdf
 * Keywords: 3State CMOS shifter translator.
 */
export class SN74LV4T125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "tri_state", P4: "input", P5: "input", P6: "tri_state", P8: "tri_state", P9: "input", P10: "input", P11: "tri_state", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xx:SN74LV4T125";
  override referencePrefix = "U";
}
