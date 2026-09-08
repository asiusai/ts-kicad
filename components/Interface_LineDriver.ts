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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS7820 extends Component.withPins({
  /** Physical pin 1: INPUT; input. */
  "INPUT_1": "1",
  /** Physical pin 2: TERMINATION; input. */
  "TERMINATION_2": "2",
  /** Physical pin 3: INPUT; input. */
  "INPUT_3": "3",
  /** Physical pin 4: STROBE; input. */
  "STROBE_4": "4",
  /** Physical pin 5: RESPONSE_TIME; input. */
  "RESPONSE_TIME_5": "5",
  /** Physical pin 6: OUTPUT; input. */
  "OUTPUT_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUTPUT; output. */
  "OUTPUT_8": "8",
  /** Physical pin 9: RESPONSE_TIME; input. */
  "RESPONSE_TIME_9": "9",
  /** Physical pin 10: STROBE; input. */
  "STROBE_10": "10",
  /** Physical pin 11: INPUT; input. */
  "INPUT_11": "11",
  /** Physical pin 12: TERMINATION; input. */
  "TERMINATION_12": "12",
  /** Physical pin 13: INPUT; input. */
  "INPUT_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS7830 extends Component.withPins({
  /** Physical pin 1: A_1; input. */
  "A_1": "1",
  /** Physical pin 2: A_2; input. */
  "A_2": "2",
  /** Physical pin 3: A_3; input. */
  "A_3": "3",
  /** Physical pin 4: A_4; input. */
  "A_4": "4",
  /** Physical pin 5: A_AND_OUTPUT; input. */
  "A_AND_OUTPUT": "5",
  /** Physical pin 6: A_NAND_OUTPUT; input. */
  "A_NAND_OUTPUT": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: B_NAND_OUTPUT; input. */
  "B_NAND_OUTPUT": "8",
  /** Physical pin 9: B_AND_OUTPUT; input. */
  "B_AND_OUTPUT": "9",
  /** Physical pin 10: B_4; input. */
  "B_4": "10",
  /** Physical pin 11: B_3; input. */
  "B_3": "11",
  /** Physical pin 12: B_2; input. */
  "B_2": "12",
  /** Physical pin 13: B_1; input. */
  "B_1": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS8830 extends Component.withPins({
  /** Physical pin 1: A_1; input. */
  "A_1": "1",
  /** Physical pin 2: A_2; input. */
  "A_2": "2",
  /** Physical pin 3: A_3; input. */
  "A_3": "3",
  /** Physical pin 4: A_4; input. */
  "A_4": "4",
  /** Physical pin 5: A_AND_OUTPUT; input. */
  "A_AND_OUTPUT": "5",
  /** Physical pin 6: A_NAND_OUTPUT; input. */
  "A_NAND_OUTPUT": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: B_NAND_OUTPUT; input. */
  "B_NAND_OUTPUT": "8",
  /** Physical pin 9: B_AND_OUTPUT; input. */
  "B_AND_OUTPUT": "9",
  /** Physical pin 10: B_4; input. */
  "B_4": "10",
  /** Physical pin 11: B_3; input. */
  "B_3": "11",
  /** Physical pin 12: B_2; input. */
  "B_2": "12",
  /** Physical pin 13: B_1; input. */
  "B_1": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS89C21 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: RO; output. */
  "RO": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{DO}; output. */
  "~{DO}": "5",
  /** Physical pin 6: DO; output. */
  "DO": "6",
  /** Physical pin 7: ~{RI}; input. */
  "~{RI}": "7",
  /** Physical pin 8: RI; input. */
  "RI": "8",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EL7242C extends Component.withPins({
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 1: IN1; input. */
  "IN1_1": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 7: OUT; output. */
  "OUT_7": "7",
  /** Physical pin 3: IN1; input. */
  "IN1_3": "3",
  /** Physical pin 4: IN; input. */
  "IN_4": "4",
  /** Physical pin 6: OUT; output. */
  "OUT_6": "6",
}) {
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
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC3486N extends Component.withPins({
  /** Physical pin 1: E-; input. */
  "E-_1": "1",
  /** Physical pin 2: E+; input. */
  "E+_2": "2",
  /** Physical pin 3: OUT; tri_state. */
  "OUT_3": "3",
  /** Physical pin 4: ENABLE; input. */
  "ENABLE_4": "4",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 5: OUT; tri_state. */
  "OUT_5": "5",
  /** Physical pin 6: E+; input. */
  "E+_6": "6",
  /** Physical pin 7: E-; input. */
  "E-_7": "7",
  /** Physical pin 9: E-; input. */
  "E-_9": "9",
  /** Physical pin 10: E+; input. */
  "E+_10": "10",
  /** Physical pin 11: OUT; tri_state. */
  "OUT_11": "11",
  /** Physical pin 12: ENABLE; input. */
  "ENABLE_12": "12",
  /** Physical pin 13: OUT; tri_state. */
  "OUT_13": "13",
  /** Physical pin 14: E+; input. */
  "E+_14": "14",
  /** Physical pin 15: E-; input. */
  "E-_15": "15",
}) {
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
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC3487DX extends Component.withPins({
  /** Physical pin 1: INPUT; input. */
  "INPUT_1": "1",
  /** Physical pin 2: OUT+; tri_state. */
  "OUT+_2": "2",
  /** Physical pin 3: OUT-; tri_state. */
  "OUT-_3": "3",
  /** Physical pin 4: ENABLE; input. */
  "ENABLE_4": "4",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 5: OUT-; tri_state. */
  "OUT-_5": "5",
  /** Physical pin 6: OUT+; tri_state. */
  "OUT+_6": "6",
  /** Physical pin 7: INPUT; input. */
  "INPUT_7": "7",
  /** Physical pin 9: INPUT; input. */
  "INPUT_9": "9",
  /** Physical pin 10: OUT+; tri_state. */
  "OUT+_10": "10",
  /** Physical pin 11: OUT-; tri_state. */
  "OUT-_11": "11",
  /** Physical pin 12: ENABLE; input. */
  "ENABLE_12": "12",
  /** Physical pin 13: OUT-; tri_state. */
  "OUT-_13": "13",
  /** Physical pin 14: OUT+; tri_state. */
  "OUT+_14": "14",
  /** Physical pin 15: INPUT; input. */
  "INPUT_15": "15",
}) {
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
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC3487N extends Component.withPins({
  /** Physical pin 1: INPUT; input. */
  "INPUT_1": "1",
  /** Physical pin 2: OUT+; tri_state. */
  "OUT+_2": "2",
  /** Physical pin 3: OUT-; tri_state. */
  "OUT-_3": "3",
  /** Physical pin 4: ENABLE; input. */
  "ENABLE_4": "4",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
  /** Physical pin 5: OUT-; tri_state. */
  "OUT-_5": "5",
  /** Physical pin 6: OUT+; tri_state. */
  "OUT+_6": "6",
  /** Physical pin 7: INPUT; input. */
  "INPUT_7": "7",
  /** Physical pin 9: INPUT; input. */
  "INPUT_9": "9",
  /** Physical pin 10: OUT+; tri_state. */
  "OUT+_10": "10",
  /** Physical pin 11: OUT-; tri_state. */
  "OUT-_11": "11",
  /** Physical pin 12: ENABLE; input. */
  "ENABLE_12": "12",
  /** Physical pin 13: OUT-; tri_state. */
  "OUT-_13": "13",
  /** Physical pin 14: OUT+; tri_state. */
  "OUT+_14": "14",
  /** Physical pin 15: INPUT; input. */
  "INPUT_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UA9637 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: OUT; output. */
  "OUT_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 7: IN-; input. */
  "IN-_7": "7",
  /** Physical pin 8: IN+; input. */
  "IN+_8": "8",
  /** Physical pin 3: OUT; output. */
  "OUT_3": "3",
  /** Physical pin 5: IN-; input. */
  "IN-_5": "5",
  /** Physical pin 6: IN+; input. */
  "IN+_6": "6",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UA9638CD extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 7: OUTA; output. */
  "OUTA_7": "7",
  /** Physical pin 8: OUTB; output. */
  "OUTB_8": "8",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 5: OUTA; output. */
  "OUTA_5": "5",
  /** Physical pin 6: OUTB; output. */
  "OUTB_6": "6",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UA9638CDE4 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 7: OUTA; output. */
  "OUTA_7": "7",
  /** Physical pin 8: OUTB; output. */
  "OUTB_8": "8",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 5: OUTA; output. */
  "OUTA_5": "5",
  /** Physical pin 6: OUTB; output. */
  "OUTB_6": "6",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UA9638CDG4 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 7: OUTA; output. */
  "OUTA_7": "7",
  /** Physical pin 8: OUTB; output. */
  "OUTB_8": "8",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 5: OUTA; output. */
  "OUTA_5": "5",
  /** Physical pin 6: OUTB; output. */
  "OUTB_6": "6",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UA9638CDR extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 7: OUTA; output. */
  "OUTA_7": "7",
  /** Physical pin 8: OUTB; output. */
  "OUTB_8": "8",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 5: OUTA; output. */
  "OUTA_5": "5",
  /** Physical pin 6: OUTB; output. */
  "OUTB_6": "6",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UA9638CDRG4 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 7: OUTA; output. */
  "OUTA_7": "7",
  /** Physical pin 8: OUTB; output. */
  "OUTB_8": "8",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 5: OUTA; output. */
  "OUTA_5": "5",
  /** Physical pin 6: OUTB; output. */
  "OUTB_6": "6",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UA9638CP extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 7: OUTA; output. */
  "OUTA_7": "7",
  /** Physical pin 8: OUTB; output. */
  "OUTB_8": "8",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 5: OUTA; output. */
  "OUTA_5": "5",
  /** Physical pin 6: OUTB; output. */
  "OUTB_6": "6",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UA9638CPE4 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: IN; input. */
  "IN_2": "2",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 7: OUTA; output. */
  "OUTA_7": "7",
  /** Physical pin 8: OUTB; output. */
  "OUTB_8": "8",
  /** Physical pin 3: IN; input. */
  "IN_3": "3",
  /** Physical pin 5: OUTA; output. */
  "OUTA_5": "5",
  /** Physical pin 6: OUTB; output. */
  "OUTB_6": "6",
}) {
  override schema = "Interface_LineDriver:UA9638CPE4";
  override referencePrefix = "U";
}

