// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Dual line receiver, VDD +5V, DIP-14
 *
 * KiCad symbol: `Interface_LineDriver:DS7820`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://pdf1.alldatasheet.com/datasheet-pdf/view/942427/NSC/DS7820.html
 * Keywords: Dual line receiver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class DS7820 extends Component.withPins({
  "INPUT_1": "1",
  "TERMINATION_2": "2",
  "INPUT_3": "3",
  "STROBE_4": "4",
  "RESPONSE_TIME_5": "5",
  "OUTPUT_6": "6",
  "GND": "7",
  "OUTPUT_8": "8",
  "RESPONSE_TIME_9": "9",
  "STROBE_10": "10",
  "INPUT_11": "11",
  "TERMINATION_12": "12",
  "INPUT_13": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INPUT_1: "input", TERMINATION_2: "input", INPUT_3: "input", STROBE_4: "input", RESPONSE_TIME_5: "input", OUTPUT_6: "input", GND: "power_in", OUTPUT_8: "output", RESPONSE_TIME_9: "input", STROBE_10: "input", INPUT_11: "input", TERMINATION_12: "input", INPUT_13: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:DS7820";
  override referencePrefix = "U";
}

/**
 * Dual differential line driver and dual four-input NAND or dual four-input AND function, VDD +5V, DIP-14
 *
 * KiCad symbol: `Interface_LineDriver:DS7830`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://pdf1.alldatasheet.com/datasheet-pdf/view/8473/NSC/DS7830J.html
 * Keywords: Dual differential line driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class DS7830 extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "A_3": "3",
  "A_4": "4",
  "A_AND_OUTPUT": "5",
  "A_NAND_OUTPUT": "6",
  "GND": "7",
  "B_NAND_OUTPUT": "8",
  "B_AND_OUTPUT": "9",
  "B_4": "10",
  "B_3": "11",
  "B_2": "12",
  "B_1": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "input", A_2: "input", A_3: "input", A_4: "input", A_AND_OUTPUT: "input", A_NAND_OUTPUT: "input", GND: "power_in", B_NAND_OUTPUT: "input", B_AND_OUTPUT: "input", B_4: "input", B_3: "input", B_2: "input", B_1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:DS7830";
  override referencePrefix = "U";
}

/**
 * Dual differential line driver and dual four-input NAND or dual four-input AND function, VDD +5V, DIP-14
 *
 * KiCad symbol: `Interface_LineDriver:DS8830`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://pdf1.alldatasheet.com/datasheet-pdf/view/8473/NSC/DS7830J.html
 * Keywords: Dual differential line driver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class DS8830 extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "A_3": "3",
  "A_4": "4",
  "A_AND_OUTPUT": "5",
  "A_NAND_OUTPUT": "6",
  "GND": "7",
  "B_NAND_OUTPUT": "8",
  "B_AND_OUTPUT": "9",
  "B_4": "10",
  "B_3": "11",
  "B_2": "12",
  "B_1": "13",
  "VCC": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "input", A_2: "input", A_3: "input", A_4: "input", A_AND_OUTPUT: "input", A_NAND_OUTPUT: "input", GND: "power_in", B_NAND_OUTPUT: "input", B_AND_OUTPUT: "input", B_4: "input", B_3: "input", B_2: "input", B_1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:DS8830";
  override referencePrefix = "U";
}

/**
 * Differential CMOS Line Driver and Receiver Pair, SOIC-8
 *
 * KiCad symbol: `Interface_LineDriver:DS89C21`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ds89c21.pdf
 * Keywords: rs422 tranciever.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS89C21 extends Component.withPins({
  "VCC": "1",
  "RO": "2",
  "DI": "3",
  "GND": "4",
  "~{DO}": "5",
  "DO": "6",
  "~{RI}": "7",
  "RI": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", RO: "output", DI: "input", GND: "power_in", "~{DO}": "output", DO: "output", "~{RI}": "input", RI: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:DS89C21";
  override referencePrefix = "U";
}

/**
 * Translateur TTL->VMOS. Double driver VMOS
 *
 * KiCad symbol: `Interface_LineDriver:EL7242C`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/elantec/EL7242CN.pdf
 * Keywords: Translateur TTL->VMOS. Double driver VMOS.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class EL7242C extends Component.withPins({
  "GND": "5",
  "V+": "8",
  "IN1_1": "1",
  "IN_2": "2",
  "OUT_7": "7",
  "IN1_3": "3",
  "IN_4": "4",
  "OUT_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "V+": "power_in", IN1_1: "input", IN_2: "input", OUT_7: "output", IN1_3: "input", IN_4: "input", OUT_6: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:EL7242C";
  override referencePrefix = "U";
}

/**
 * Quadruple differential line receiver, SOIC-16
 *
 * KiCad symbol: `Interface_LineDriver:MC3486N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/mc3486.pdf
 * Keywords: Quadruple differential line receiver.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MC3486N extends Component.withPins({
  "E-_1": "1",
  "E+_2": "2",
  "OUT_3": "3",
  "ENABLE_4": "4",
  "GND": "8",
  "VCC": "16",
  "OUT_5": "5",
  "E+_6": "6",
  "E-_7": "7",
  "E-_9": "9",
  "E+_10": "10",
  "OUT_11": "11",
  "ENABLE_12": "12",
  "OUT_13": "13",
  "E+_14": "14",
  "E-_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "E-_1": "input", "E+_2": "input", OUT_3: "tri_state", ENABLE_4: "input", GND: "power_in", VCC: "power_in", OUT_5: "tri_state", "E+_6": "input", "E-_7": "input", "E-_9": "input", "E+_10": "input", OUT_11: "tri_state", ENABLE_12: "input", OUT_13: "tri_state", "E+_14": "input", "E-_15": "input", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:MC3486N";
  override referencePrefix = "U";
}

/**
 * Four independent differential line drivers, SOIC-16
 *
 * KiCad symbol: `Interface_LineDriver:MC3487DX`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/mc3487.pdf
 * Keywords: Four independent differential line drivers.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class MC3487DX extends Component.withPins({
  "INPUT_1": "1",
  "OUT+_2": "2",
  "OUT-_3": "3",
  "ENABLE_4": "4",
  "GND": "8",
  "VCC": "16",
  "OUT-_5": "5",
  "OUT+_6": "6",
  "INPUT_7": "7",
  "INPUT_9": "9",
  "OUT+_10": "10",
  "OUT-_11": "11",
  "ENABLE_12": "12",
  "OUT-_13": "13",
  "OUT+_14": "14",
  "INPUT_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INPUT_1: "input", "OUT+_2": "tri_state", "OUT-_3": "tri_state", ENABLE_4: "input", GND: "power_in", VCC: "power_in", "OUT-_5": "tri_state", "OUT+_6": "tri_state", INPUT_7: "input", INPUT_9: "input", "OUT+_10": "tri_state", "OUT-_11": "tri_state", ENABLE_12: "input", "OUT-_13": "tri_state", "OUT+_14": "tri_state", INPUT_15: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:MC3487DX";
  override referencePrefix = "U";
}

/**
 * Four independent differential line drivers, DIP-16
 *
 * KiCad symbol: `Interface_LineDriver:MC3487N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/mc3487.pdf
 * Keywords: Four independent differential line drivers.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MC3487N extends Component.withPins({
  "INPUT_1": "1",
  "OUT+_2": "2",
  "OUT-_3": "3",
  "ENABLE_4": "4",
  "GND": "8",
  "VCC": "16",
  "OUT-_5": "5",
  "OUT+_6": "6",
  "INPUT_7": "7",
  "INPUT_9": "9",
  "OUT+_10": "10",
  "OUT-_11": "11",
  "ENABLE_12": "12",
  "OUT-_13": "13",
  "OUT+_14": "14",
  "INPUT_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INPUT_1: "input", "OUT+_2": "tri_state", "OUT-_3": "tri_state", ENABLE_4: "input", GND: "power_in", VCC: "power_in", "OUT-_5": "tri_state", "OUT+_6": "tri_state", INPUT_7: "input", INPUT_9: "input", "OUT+_10": "tri_state", "OUT-_11": "tri_state", ENABLE_12: "input", "OUT-_13": "tri_state", "OUT+_14": "tri_state", INPUT_15: "input", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:MC3487N";
  override referencePrefix = "U";
}

/**
 * Dual differential line receiver, DIP-8
 *
 * KiCad symbol: `Interface_LineDriver:UA9637`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets2/28/284473_1.pdf
 * Keywords: Dual differential line receiver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class UA9637 extends Component.withPins({
  "VCC": "1",
  "OUT_2": "2",
  "GND": "4",
  "IN-_7": "7",
  "IN+_8": "8",
  "OUT_3": "3",
  "IN-_5": "5",
  "IN+_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", OUT_2: "output", GND: "power_in", "IN-_7": "input", "IN+_8": "input", OUT_3: "output", "IN-_5": "input", "IN+_6": "input", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:UA9637";
  override referencePrefix = "U";
}

/**
 * Dual high-speed differential line driver, SOIC-8
 *
 * KiCad symbol: `Interface_LineDriver:UA9638CD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ua9638.pdf
 * Keywords: Dual high-speed differential line driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UA9638CD extends Component.withPins({
  "VCC": "1",
  "IN_2": "2",
  "GND": "4",
  "OUTA_7": "7",
  "OUTB_8": "8",
  "IN_3": "3",
  "OUTA_5": "5",
  "OUTB_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", IN_2: "input", GND: "power_in", OUTA_7: "output", OUTB_8: "output", IN_3: "input", OUTA_5: "output", OUTB_6: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:UA9638CD";
  override referencePrefix = "U";
}

/**
 * Dual high-speed differential line driver, SOIC-8
 *
 * KiCad symbol: `Interface_LineDriver:UA9638CDE4`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ua9638.pdf
 * Keywords: Dual high-speed differential line driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UA9638CDE4 extends Component.withPins({
  "VCC": "1",
  "IN_2": "2",
  "GND": "4",
  "OUTA_7": "7",
  "OUTB_8": "8",
  "IN_3": "3",
  "OUTA_5": "5",
  "OUTB_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", IN_2: "input", GND: "power_in", OUTA_7: "output", OUTB_8: "output", IN_3: "input", OUTA_5: "output", OUTB_6: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:UA9638CDE4";
  override referencePrefix = "U";
}

/**
 * Dual high-speed differential line driver, SOIC-8
 *
 * KiCad symbol: `Interface_LineDriver:UA9638CDG4`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ua9638.pdf
 * Keywords: Dual high-speed differential line driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UA9638CDG4 extends Component.withPins({
  "VCC": "1",
  "IN_2": "2",
  "GND": "4",
  "OUTA_7": "7",
  "OUTB_8": "8",
  "IN_3": "3",
  "OUTA_5": "5",
  "OUTB_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", IN_2: "input", GND: "power_in", OUTA_7: "output", OUTB_8: "output", IN_3: "input", OUTA_5: "output", OUTB_6: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:UA9638CDG4";
  override referencePrefix = "U";
}

/**
 * Dual high-speed differential line driver, SOIC-8
 *
 * KiCad symbol: `Interface_LineDriver:UA9638CDR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ua9638.pdf
 * Keywords: Dual high-speed differential line driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UA9638CDR extends Component.withPins({
  "VCC": "1",
  "IN_2": "2",
  "GND": "4",
  "OUTA_7": "7",
  "OUTB_8": "8",
  "IN_3": "3",
  "OUTA_5": "5",
  "OUTB_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", IN_2: "input", GND: "power_in", OUTA_7: "output", OUTB_8: "output", IN_3: "input", OUTA_5: "output", OUTB_6: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:UA9638CDR";
  override referencePrefix = "U";
}

/**
 * Dual high-speed differential line driver, SOIC-8
 *
 * KiCad symbol: `Interface_LineDriver:UA9638CDRG4`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ua9638.pdf
 * Keywords: Dual high-speed differential line driver.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class UA9638CDRG4 extends Component.withPins({
  "VCC": "1",
  "IN_2": "2",
  "GND": "4",
  "OUTA_7": "7",
  "OUTB_8": "8",
  "IN_3": "3",
  "OUTA_5": "5",
  "OUTB_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", IN_2: "input", GND: "power_in", OUTA_7: "output", OUTB_8: "output", IN_3: "input", OUTA_5: "output", OUTB_6: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:UA9638CDRG4";
  override referencePrefix = "U";
}

/**
 * Dual high-speed differential line driver, DIP-8
 *
 * KiCad symbol: `Interface_LineDriver:UA9638CP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ua9638.pdf
 * Keywords: Dual high-speed differential line driver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class UA9638CP extends Component.withPins({
  "VCC": "1",
  "IN_2": "2",
  "GND": "4",
  "OUTA_7": "7",
  "OUTB_8": "8",
  "IN_3": "3",
  "OUTA_5": "5",
  "OUTB_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", IN_2: "input", GND: "power_in", OUTA_7: "output", OUTB_8: "output", IN_3: "input", OUTA_5: "output", OUTB_6: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:UA9638CP";
  override referencePrefix = "U";
}

/**
 * Dual high-speed differential line driver, DIP-8
 *
 * KiCad symbol: `Interface_LineDriver:UA9638CPE4`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/ua9638.pdf
 * Keywords: Dual high-speed differential line driver.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class UA9638CPE4 extends Component.withPins({
  "VCC": "1",
  "IN_2": "2",
  "GND": "4",
  "OUTA_7": "7",
  "OUTB_8": "8",
  "IN_3": "3",
  "OUTA_5": "5",
  "OUTB_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "power_in", IN_2: "input", GND: "power_in", OUTA_7: "output", OUTB_8: "output", IN_3: "input", OUTA_5: "output", OUTB_6: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_LineDriver:UA9638CPE4";
  override referencePrefix = "U";
}
