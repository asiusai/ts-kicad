// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Dual supply translating transceiver, 3-state, 2-bit, VSSOP-8
 *
 * KiCad symbol: `Logic_LevelTranslator:74LVC2T45DC`. Reference prefix: `U`.
 * Footprint filters: VSSOP*2.3x2mm*P0.5mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74LVC_LVCH2T45.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 */
export class _74LVC2T45DC extends Component.withPins({
  "VCCA": "1",
  "1A": "2",
  "2A": "3",
  "GND": "4",
  "DIR": "5",
  "2B": "6",
  "1B": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", "1A": "bidirectional", "2A": "bidirectional", GND: "power_in", DIR: "input", "2B": "bidirectional", "1B": "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:74LVC2T45DC";
  override referencePrefix = "U";
}

/**
 * Dual supply translating transceiver with bus-hold for unused/floating inputs, 3-state, 2-bit, VSSOP-8
 *
 * KiCad symbol: `Logic_LevelTranslator:74LVCH2T45DC`. Reference prefix: `U`.
 * Footprint filters: VSSOP*2.3x2mm*P0.5mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/74LVC_LVCH2T45.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 */
export class _74LVCH2T45DC extends Component.withPins({
  "VCCA": "1",
  "1A": "2",
  "2A": "3",
  "GND": "4",
  "DIR": "5",
  "2B": "6",
  "1B": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", "1A": "bidirectional", "2A": "bidirectional", GND: "power_in", DIR: "input", "2B": "bidirectional", "1B": "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:74LVCH2T45DC";
  override referencePrefix = "U";
}

/**
 * CMOS Quad Low to High Voltage Level Shifter, Input 3 to 18V, up to 18V output , TSSOP-16
 *
 * KiCad symbol: `Logic_LevelTranslator:CD40109BPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd40109b.pdf
 * Keywords: voltage level shifter.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class CD40109BPW extends Component.withPins({
  "V_{CC}": "1",
  "ENABLE_A": "2",
  "A": "3",
  "E": "4",
  "F": "5",
  "B": "6",
  "ENABLE_B": "7",
  "V_{SS}": "8",
  "ENABLE_C": "9",
  "C": "10",
  "G": "11",
  "NC": "12",
  "H": "13",
  "D": "14",
  "ENABLE_D": "15",
  "V_{DD}": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", ENABLE_A: "input", A: "input", E: "output", F: "output", B: "input", ENABLE_B: "input", "V_{SS}": "power_in", ENABLE_C: "input", C: "input", G: "output", NC: "no_connect", H: "output", D: "input", ENABLE_D: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:CD40109BPW";
  override referencePrefix = "U";
}

/**
 * Dual-Supply, 8-Bit Signal Translator with Configurable Voltage Supplies and Signals Levels, 3-State Outputs and Auto Direction Sensing, WQFN-20
 *
 * KiCad symbol: `Logic_LevelTranslator:FXMA108`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*2.5x4.5mm*P0.5mm*.
 * @see http://www.onsemi.com/pub/Collateral/FXMA108-D.pdf
 * Keywords: Level shifter translator bidirectional.
 * Default footprint: Package_DFN_QFN:WQFN-20-1EP_2.5x4.5mm_P0.5mm_EP1x2.9mm.
 */
export class FXMA108 extends Component.withPins({
  "VCCA": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "GND": "10",
  "~{OE}": "11",
  "B7": "12",
  "B6": "13",
  "B5": "14",
  "B4": "15",
  "B3": "16",
  "B2": "17",
  "B1": "18",
  "B0": "19",
  "VCCB": "20",
  "NC": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A0: "bidirectional", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", GND: "power_in", "~{OE}": "input", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", B0: "bidirectional", VCCB: "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:FXMA108";
  override referencePrefix = "U";
}

/**
 * 8-bit Bidirectional Voltage Level Translator, Auto Direction Sensing, 0 to +5V, 100MHz , DHVQFN-20
 *
 * KiCad symbol: `Logic_LevelTranslator:LSF0108BQ`. Reference prefix: `U`.
 * Footprint filters: *DHVQFN*2.5x4.5mm?P0.5mm?EP1x3mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/LSF0108.pdf
 * Keywords: Nexperia open-drain push-pull.
 * Default footprint: Package_DFN_QFN:DHVQFN-20-1EP_2.5x4.5mm_P0.5mm_EP1x3mm.
 */
export class LSF0108BQ extends Component.withPins({
  "GND": "1",
  "RefA": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "A8": "10",
  "B8": "11",
  "B7": "12",
  "B6": "13",
  "B5": "14",
  "B4": "15",
  "B3": "16",
  "B2": "17",
  "B1": "18",
  "RefB": "19",
  "EN": "20",
  "EPAD": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", RefA: "power_in", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", RefB: "power_in", EN: "input", EPAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:LSF0108BQ";
  override referencePrefix = "U";
}

/**
 * 8-bit Bidirectional Voltage Level Translator, Auto Direction Sensing, 0 to +5V, 100MHz , TSSOP-20
 *
 * KiCad symbol: `Logic_LevelTranslator:LSF0108PW`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/LSF0108.pdf
 * Keywords: Nexperia open-drain push-pull.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class LSF0108PW extends Component.withPins({
  "GND": "1",
  "RefA": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "A8": "10",
  "B8": "11",
  "B7": "12",
  "B6": "13",
  "B5": "14",
  "B4": "15",
  "B3": "16",
  "B2": "17",
  "B1": "18",
  "RefB": "19",
  "EN": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", RefA: "power_in", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", RefB: "power_in", EN: "input", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:LSF0108PW";
  override referencePrefix = "U";
}

/**
 * SIM Card Power Supply and Level Shifter, QFN-16
 *
 * KiCad symbol: `Logic_LevelTranslator:NCN4555MN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCN4555-D.PDF
 * Keywords: SIM Card Level Shifter.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.75x1.75mm.
 */
export class NCN4555MN extends Component.withPins({
  "~{STOP}": "1",
  "MOD_VCC": "2",
  "VDD": "3",
  "NC_4": "4",
  "VBAT": "5",
  "NC_6": "6",
  "SIM_VCC": "7",
  "SIM_I/O": "8",
  "SIM_RST": "9",
  "GND_10": "10",
  "SIM_CLK": "11",
  "NC_12": "12",
  "CLK": "13",
  "RST": "14",
  "I/O": "15",
  "NC_16": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{STOP}": "input", MOD_VCC: "input", VDD: "power_in", NC_4: "no_connect", VBAT: "power_in", NC_6: "no_connect", SIM_VCC: "power_out", "SIM_I/O": "bidirectional", SIM_RST: "output", GND_10: "power_in", SIM_CLK: "output", NC_12: "no_connect", CLK: "input", RST: "input", "I/O": "bidirectional", NC_16: "no_connect", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:NCN4555MN";
  override referencePrefix = "U";
}

/**
 * Dual-Bit Dual-Supply Non-Inverting Level Translator, Output Enable, SOIC-8
 *
 * KiCad symbol: `Logic_LevelTranslator:NLSV2T244D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NLSV2T244-D.PDF
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NLSV2T244D extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "~{OE}": "4",
  "GND": "5",
  "B2": "6",
  "B1": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "input", A2: "input", "~{OE}": "input", GND: "power_in", B2: "output", B1: "output", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:NLSV2T244D";
  override referencePrefix = "U";
}

/**
 * Dual-Bit Dual-Supply Non-Inverting Level Translator, Output Enable, MSOP-8
 *
 * KiCad symbol: `Logic_LevelTranslator:NLSV2T244DM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.onsemi.com/pub/Collateral/NLSV2T244-D.PDF
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class NLSV2T244DM extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "~{OE}": "4",
  "GND": "5",
  "B2": "6",
  "B1": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "input", A2: "input", "~{OE}": "input", GND: "power_in", B2: "output", B1: "output", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:NLSV2T244DM";
  override referencePrefix = "U";
}

/**
 * Dual-Bit Dual-Supply Non-Inverting Level Translator, Output Enable, UDFN-8
 *
 * KiCad symbol: `Logic_LevelTranslator:NLSV2T244MU`. Reference prefix: `U`.
 * Footprint filters: OnSemi*UDFN*1.2x1.8mm*P0.4mm*.
 * @see http://www.onsemi.com/pub/Collateral/NLSV2T244-D.PDF
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_DFN_QFN:OnSemi_UDFN-8_1.2x1.8mm_P0.4mm.
 */
export class NLSV2T244MU extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "~{OE}": "4",
  "GND": "5",
  "B2": "6",
  "B1": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "input", A2: "input", "~{OE}": "input", GND: "power_in", B2: "output", B1: "output", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:NLSV2T244MU";
  override referencePrefix = "U";
}

/**
 * 1-Bit Unidirectional Voltage-Level Translator, SC-70
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74AUP1T34DCK`. Reference prefix: `U`.
 * Footprint filters: SOT*353*.
 * @see http://www.ti.com/lit/ds/symlink/sn74aup1t34.pdf
 * Keywords: Noninverting.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class SN74AUP1T34DCK extends Component.withPins({
  "VCCA": "1",
  "A": "2",
  "GND": "3",
  "B": "4",
  "VCCB": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A: "input", GND: "power_in", B: "output", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74AUP1T34DCK";
  override referencePrefix = "U";
}

/**
 * 4-Bit Dual-Supply Bus Transceiver With Configurable Voltage Translation and 3-State Outputs, TSSOP-16
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74AVC4T245PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74avc4t245.pdf
 * Keywords: Noninverting Bidirectional.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class SN74AVC4T245PW extends Component.withPins({
  "VCCA": "1",
  "1DIR": "2",
  "2DIR": "3",
  "1A1": "4",
  "1A2": "5",
  "2A1": "6",
  "2A2": "7",
  "GND_8": "8",
  "GND_9": "9",
  "2B2": "10",
  "2B1": "11",
  "1B2": "12",
  "1B1": "13",
  "2~{OE}": "14",
  "1~{OE}": "15",
  "VCCB": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", "1DIR": "input", "2DIR": "input", "1A1": "bidirectional", "1A2": "bidirectional", "2A1": "bidirectional", "2A2": "bidirectional", GND_8: "power_in", GND_9: "passive", "2B2": "bidirectional", "2B1": "bidirectional", "1B2": "bidirectional", "1B1": "bidirectional", "2~{OE}": "input", "1~{OE}": "input", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74AVC4T245PW";
  override referencePrefix = "U";
}

/**
 * 8-Bit Dual-Supply Bus Transceiver With Configurable Voltage Translation and 3-State Outputs, TSSOP-24
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74AVC8T245PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74avc8t245.pdf
 * Keywords: Noninverting Bidirectional.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class SN74AVC8T245PW extends Component.withPins({
  "VCCA": "1",
  "DIR": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "A8": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "B8": "14",
  "B7": "15",
  "B6": "16",
  "B5": "17",
  "B4": "18",
  "B3": "19",
  "B2": "20",
  "B1": "21",
  "~{OE}": "22",
  "VCCB_23": "23",
  "VCCB_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", DIR: "input", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", GND_11: "power_in", GND_12: "passive", GND_13: "passive", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", "~{OE}": "input", VCCB_23: "power_in", VCCB_24: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74AVC8T245PW";
  override referencePrefix = "U";
}

/**
 * Single Power Supply, Single Buffer Gate with 3-State Output, CMOS Logic Level Shifter Level Shifter, SC70-5
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LV1T125DCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lv1t125.pdf
 * Keywords: single buffer level shift.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class SN74LV1T125DCK extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "GND": "3",
  "Y": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", GND: "power_in", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LV1T125DCK";
  override referencePrefix = "U";
}

/**
 * Single Power Supply, Single Buffer Gate with 3-State Output, CMOS Logic Level Shifter Level Shifter, SOT-23-5
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LV1T125DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lv1t125.pdf
 * Keywords: single buffer level shift.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class SN74LV1T125DBV extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "GND": "3",
  "Y": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", GND: "power_in", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LV1T125DBV";
  override referencePrefix = "U";
}

/**
 * Single Power Supply, Single Buffer GATE, CMOS Logic, Level Shifter, SOT-23-5
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LV1T34DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lv1t34.pdf
 * Keywords: single buffer level shift.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class SN74LV1T34DBV extends Component.withPins({
  "NC": "1",
  "A": "2",
  "GND": "3",
  "Y": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A: "input", GND: "power_in", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LV1T34DBV";
  override referencePrefix = "U";
}

/**
 * Single Power Supply, Single Buffer GATE, CMOS Logic, Level Shifter, SOT-353
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LV1T34DCK`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lv1t34.pdf
 * Keywords: single buffer level shift.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class SN74LV1T34DCK extends Component.withPins({
  "NC": "1",
  "A": "2",
  "GND": "3",
  "Y": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A: "input", GND: "power_in", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LV1T34DCK";
  override referencePrefix = "U";
}

/**
 * Single-Bit Dual-Supply Bus Transceiver With Configurable Voltage Translation and 3-State Outputs, SOT-23-6
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LVC1T45DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1t45.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class SN74LVC1T45DBV extends Component.withPins({
  "VCCA": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "DIR": "5",
  "VCCB": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", GND: "power_in", A: "bidirectional", B: "bidirectional", DIR: "input", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LVC1T45DBV";
  override referencePrefix = "U";
}

/**
 * Single-Bit Dual-Supply Bus Transceiver With Configurable Voltage Translation and 3-State Outputs, SOT-363
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LVC1T45DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1t45.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class SN74LVC1T45DCK extends Component.withPins({
  "VCCA": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "DIR": "5",
  "VCCB": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", GND: "power_in", A: "bidirectional", B: "bidirectional", DIR: "input", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LVC1T45DCK";
  override referencePrefix = "U";
}

/**
 * Single-Bit Dual-Supply Bus Transceiver With Configurable Voltage Translation and 3-State Outputs, SOT-563
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LVC1T45DRL`. Reference prefix: `U`.
 * Footprint filters: *SOT?563*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1t45.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_TO_SOT_SMD:SOT-563.
 */
export class SN74LVC1T45DRL extends Component.withPins({
  "VCCA": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "DIR": "5",
  "VCCB": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", GND: "power_in", A: "bidirectional", B: "bidirectional", DIR: "input", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LVC1T45DRL";
  override referencePrefix = "U";
}

/**
 * 8-Bit Single-Supply Bus Transceiver With 5V tolerant input voltage and 3-State Outputs 24mA, TSSOP-20
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LVC245APW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/scas218x/scas218x.pdf
 * Keywords: Noninverting Bidirectional.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class SN74LVC245APW extends Component.withPins({
  "DIR": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "A7": "8",
  "A8": "9",
  "GND": "10",
  "B8": "11",
  "B7": "12",
  "B6": "13",
  "B5": "14",
  "B4": "15",
  "B3": "16",
  "B2": "17",
  "B1": "18",
  "~{OE}": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DIR: "input", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", GND: "power_in", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", "~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LVC245APW";
  override referencePrefix = "U";
}

/**
 * Dual-Bit Dual-Supply Bus Transceiver With Configurable Voltage Translation and 3-State Outputs, VSSOP-8
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LVC2T45DCUR`. Reference prefix: `U`.
 * Footprint filters: VSSOP*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc2t45.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 */
export class SN74LVC2T45DCUR extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "DIR": "5",
  "B2": "6",
  "B1": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "bidirectional", A2: "bidirectional", GND: "power_in", DIR: "input", B2: "bidirectional", B1: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LVC2T45DCUR";
  override referencePrefix = "U";
}

/**
 * Dual-Bit Dual-Supply Bus Transceiver With Configurable Voltage Translation and 3-State Outputs, DSBGA-8
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LVC2T45YZP`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*0.9x1.9mm*Layout2x4*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc2t45.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_BGA:Texas_DSBGA-8_0.9x1.9mm_Layout2x4_P0.5mm.
 */
export class SN74LVC2T45YZP extends Component.withPins({
  "VCCA": "A1",
  "VCCB": "A2",
  "A1": "B1",
  "B1": "B2",
  "A2": "C1",
  "B2": "C2",
  "GND": "D1",
  "DIR": "D2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", VCCB: "power_in", A1: "bidirectional", B1: "bidirectional", A2: "bidirectional", B2: "bidirectional", GND: "power_in", DIR: "input", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LVC2T45YZP";
  override referencePrefix = "U";
}

/**
 * 8-Bit Dual-Supply Bus Transceiver With Configurable Voltage Translation and 3-State Outputs
 *
 * KiCad symbol: `Logic_LevelTranslator:SN74LVC8T245`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*, SSOP*3.9x8.7mm*, TSSOP*4.4x7.8mm*, TVSOP*4.4x5.0mm*, Texas*VQFN*RHL*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc8t245.pdf
 * Keywords: Dual Supply Level-Shifter CMOS-TTL-Translation.
 */
export class SN74LVC8T245 extends Component.withPins({
  "V_{CCA}": "1",
  "DIR": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "A4": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "A8": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "B8": "14",
  "B7": "15",
  "B6": "16",
  "B5": "17",
  "B4": "18",
  "B3": "19",
  "B2": "20",
  "B1": "21",
  "~{OE}": "22",
  "V_{CCB}_23": "23",
  "V_{CCB}_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CCA}": "power_in", DIR: "input", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", GND_11: "power_in", GND_12: "passive", GND_13: "passive", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", "~{OE}": "input", "V_{CCB}_23": "power_in", "V_{CCB}_24": "passive", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:SN74LVC8T245";
  override referencePrefix = "U";
}

/**
 * Level-Translating I2C Bus Buffer/Repeater, VSSOP-8
 *
 * KiCad symbol: `Logic_LevelTranslator:TCA9517ADGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tca9517a.pdf
 * Keywords: I2C buffer repeater.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class TCA9517ADGK extends Component.withPins({
  "VCCA": "1",
  "SCLA": "2",
  "SDAA": "3",
  "GND": "4",
  "EN": "5",
  "SDAB": "6",
  "SCLB": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", SCLA: "bidirectional", SDAA: "bidirectional", GND: "power_in", EN: "passive", SDAB: "bidirectional", SCLB: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TCA9517ADGK";
  override referencePrefix = "U";
}

/**
 * Level-Translating I2C Bus Buffer/Repeater With Enable Function, SOIC-8
 *
 * KiCad symbol: `Logic_LevelTranslator:TCA9517D`. Reference prefix: `U`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tca9517.pdf
 * Keywords: I2C buffer repeater.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TCA9517D extends Component.withPins({
  "VCCA": "1",
  "SCLA": "2",
  "SDAA": "3",
  "GND": "4",
  "EN": "5",
  "SDAB": "6",
  "SCLB": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", SCLA: "bidirectional", SDAA: "bidirectional", GND: "power_in", EN: "passive", SDAB: "bidirectional", SCLB: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TCA9517D";
  override referencePrefix = "U";
}

/**
 * 1-Bit Bidirectional Voltage-Level Translator With Auto Direction Sensing and ±15-kV ESD Protection, SOT-23-6
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0101DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23?6*.
 * @see http://www.ti.com/lit/ds/symlink/txb0101.pdf
 * Keywords: bidirectional voltage level translator.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TXB0101DBV extends Component.withPins({
  "V_{CCA}": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "OE": "5",
  "V_{CCB}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CCA}": "power_in", GND: "power_in", A: "bidirectional", B: "bidirectional", OE: "input", "V_{CCB}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0101DBV";
  override referencePrefix = "U";
}

/**
 * 1-Bit Bidirectional Voltage-Level Translator With Auto Direction Sensing and ±15-kV ESD Protection, SC-70-6
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0101DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70?6*.
 * @see http://www.ti.com/lit/ds/symlink/txb0101.pdf
 * Keywords: bidirectional voltage level translator.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class TXB0101DCK extends Component.withPins({
  "V_{CCA}": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "OE": "5",
  "V_{CCB}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CCA}": "power_in", GND: "power_in", A: "bidirectional", B: "bidirectional", OE: "input", "V_{CCB}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0101DCK";
  override referencePrefix = "U";
}

/**
 * 1-Bit Bidirectional Voltage-Level Translator With Auto Direction Sensing and ±15-kV ESD Protection, SOT-563
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0101DRL`. Reference prefix: `U`.
 * Footprint filters: SOT?563*.
 * @see http://www.ti.com/lit/ds/symlink/txb0101.pdf
 * Keywords: bidirectional voltage level translator.
 * Default footprint: Package_TO_SOT_SMD:SOT-563.
 */
export class TXB0101DRL extends Component.withPins({
  "V_{CCA}": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "OE": "5",
  "V_{CCB}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CCA}": "power_in", GND: "power_in", A: "bidirectional", B: "bidirectional", OE: "input", "V_{CCB}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0101DRL";
  override referencePrefix = "U";
}

/**
 * 1-Bit Bidirectional Voltage-Level Translator With Auto Direction Sensing and ±15-kV ESD Protection, DSBGA-6
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0101YZP`. Reference prefix: `U`.
 * Footprint filters: *DSBGA?6*.
 * @see http://www.ti.com/lit/ds/symlink/txb0101.pdf
 * Keywords: bidirectional voltage level translator.
 * Default footprint: Package_BGA:Texas_DSBGA-6_0.9x1.4mm_Layout2x3_P0.5mm.
 */
export class TXB0101YZP extends Component.withPins({
  "V_{CCA}": "A1",
  "V_{CCB}": "A2",
  "GND": "B1",
  "OE": "B2",
  "A": "C1",
  "B": "C2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CCA}": "power_in", "V_{CCB}": "power_in", GND: "power_in", OE: "input", A: "bidirectional", B: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0101YZP";
  override referencePrefix = "U";
}

/**
 * 2-Bit Bidirectional Voltage-Level Translator With Auto Direction Sensing and ±15-kV ESD Protection, VSSOP-8
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0102DCU`. Reference prefix: `U`.
 * Footprint filters: VSSOP*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/txb0102.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 */
export class TXB0102DCU extends Component.withPins({
  "B2": "1",
  "GND": "2",
  "VCCA": "3",
  "A2": "4",
  "A1": "5",
  "OE": "6",
  "VCCB": "7",
  "B1": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B2: "bidirectional", GND: "power_in", VCCA: "power_in", A2: "bidirectional", A1: "bidirectional", OE: "input", VCCB: "power_in", B1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0102DCU";
  override referencePrefix = "U";
}

/**
 * 2-Bit Bidirectional Voltage-Level Translator With Auto Direction Sensing and ±15-kV ESD Protection, DSBGA-8
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0102YZP`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*0.9x1.9mm*Layout2x4*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/txb0102.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_BGA:Texas_DSBGA-8_0.9x1.9mm_Layout2x4_P0.5mm.
 */
export class TXB0102YZP extends Component.withPins({
  "B2": "A1",
  "B1": "A2",
  "GND": "B1",
  "VCCB": "B2",
  "VCCA": "C1",
  "OE": "C2",
  "A2": "D1",
  "A1": "D2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B2: "bidirectional", B1: "bidirectional", GND: "power_in", VCCB: "power_in", VCCA: "power_in", OE: "input", A2: "bidirectional", A1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0102YZP";
  override referencePrefix = "U";
}

/**
 * 4-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, Texas_PVGFN-14
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0104RGY`. Reference prefix: `U`.
 * Footprint filters: Texas*S*PVQFN*N14*.
 * @see http://www.ti.com/lit/ds/symlink/txb0104.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_DFN_QFN:Texas_S-PVQFN-N14.
 */
export class TXB0104RGY extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "NC_6": "6",
  "GND": "7",
  "OE": "8",
  "NC_9": "9",
  "B4": "10",
  "B3": "11",
  "B2": "12",
  "B1": "13",
  "VCCB": "14",
  "Pad": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", NC_6: "no_connect", GND: "power_in", OE: "input", NC_9: "no_connect", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", VCCB: "power_in", Pad: "input", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0104RGY";
  override referencePrefix = "U";
}

/**
 * 4-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, WQFN-14-EP (BQB)
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0104BQA`. Reference prefix: `U`.
 * Footprint filters: DHWQFN*1EP*2.5x3mm*P0.5mm*EP1x1.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/txb0104.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_DFN_QFN:DHWQFN-14-1EP_2.5x3mm_P0.5mm_EP1x1.5mm.
 */
export class TXB0104BQA extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "NC_6": "6",
  "GND": "7",
  "OE": "8",
  "NC_9": "9",
  "B4": "10",
  "B3": "11",
  "B2": "12",
  "B1": "13",
  "VCCB": "14",
  "Pad": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", NC_6: "no_connect", GND: "power_in", OE: "input", NC_9: "no_connect", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", VCCB: "power_in", Pad: "input", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0104BQA";
  override referencePrefix = "U";
}

/**
 * 4-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, SOIC-14
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0104D`. Reference prefix: `U`.
 * Footprint filters: SOIC*14*7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/txb0104.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class TXB0104D extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "NC_6": "6",
  "GND": "7",
  "OE": "8",
  "NC_9": "9",
  "B4": "10",
  "B3": "11",
  "B2": "12",
  "B1": "13",
  "VCCB": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", NC_6: "no_connect", GND: "power_in", OE: "input", NC_9: "no_connect", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0104D";
  override referencePrefix = "U";
}

/**
 * 4-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, TSSOP-14
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0104PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*14*5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/txb0104.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class TXB0104PW extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "NC_6": "6",
  "GND": "7",
  "OE": "8",
  "NC_9": "9",
  "B4": "10",
  "B3": "11",
  "B2": "12",
  "B1": "13",
  "VCCB": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", NC_6: "no_connect", GND: "power_in", OE: "input", NC_9: "no_connect", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0104PW";
  override referencePrefix = "U";
}

/**
 * 4-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, Texas_PUQFN-12
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0104RUT`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PUQFN*N12*.
 * @see http://www.ti.com/lit/ds/symlink/txb0104.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_DFN_QFN:Texas_R-PUQFN-N12.
 */
export class TXB0104RUT extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "GND": "6",
  "B4": "7",
  "B3": "8",
  "B2": "9",
  "B1": "10",
  "VCCB": "11",
  "OE": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "tri_state", A2: "tri_state", A3: "tri_state", A4: "tri_state", GND: "power_in", B4: "tri_state", B3: "tri_state", B2: "tri_state", B1: "tri_state", VCCB: "power_in", OE: "input", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0104RUT";
  override referencePrefix = "U";
}

/**
 * 4-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, DSBGA-12
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0104YZT`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*1.36x1.86mm*Layout3x4*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/txb0104.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_BGA:Texas_DSBGA-12_1.36x1.86mm_Layout3x4_P0.5mm.
 */
export class TXB0104YZT extends Component.withPins({
  "B1": "A1",
  "VCCB": "A2",
  "A1": "A3",
  "B2": "B1",
  "VCCA": "B2",
  "A2": "B3",
  "B3": "C1",
  "OE": "C2",
  "A3": "C3",
  "B4": "D1",
  "GND": "D2",
  "A4": "D3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B1: "bidirectional", VCCB: "power_in", A1: "bidirectional", B2: "bidirectional", VCCA: "power_in", A2: "bidirectional", B3: "bidirectional", OE: "input", A3: "bidirectional", B4: "bidirectional", GND: "power_in", A4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0104YZT";
  override referencePrefix = "U";
}

/**
 * 4-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, Texas_Junior-12
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0104ZXU`. Reference prefix: `U`.
 * Footprint filters: Texas*Junior*BGA*2.0x2.5mm*Layout4x3*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/txb0104.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-12_2.0x2.5mm_Layout4x3_P0.5mm.
 */
export class TXB0104ZXU extends Component.withPins({
  "PA1": "A1",
  "PA2": "A2",
  "PA3": "A3",
  "PA4": "A4",
  "VCCB": "B1",
  "VCCA": "B2",
  "OE": "B3",
  "GND": "B4",
  "B1": "C1",
  "B2": "C2",
  "B3": "C3",
  "B4": "C4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", VCCB: "power_in", VCCA: "power_in", OE: "input", GND: "power_in", B1: "bidirectional", B2: "bidirectional", B3: "bidirectional", B4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0104ZXU";
  override referencePrefix = "U";
}

/**
 * 6-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, TSSOP-16
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0106PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/txb0106.pdf
 * Keywords: bidirectional voltage level translator.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class TXB0106PW extends Component.withPins({
  "A1": "1",
  "V_{CCA}": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "OE": "8",
  "GND": "9",
  "B6": "10",
  "B5": "11",
  "B4": "12",
  "B3": "13",
  "B2": "14",
  "V_{CCB}": "15",
  "B1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "bidirectional", "V_{CCA}": "power_in", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", OE: "input", GND: "power_in", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", "V_{CCB}": "power_in", B1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0106PW";
  override referencePrefix = "U";
}

/**
 * 6-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, VQFN-16
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0106RGY`. Reference prefix: `U`.
 * Footprint filters: *RGY*PVQFN*.
 * @see http://www.ti.com/lit/ds/symlink/txb0106.pdf
 * Keywords: bidirectional voltage level translator.
 * Default footprint: Package_DFN_QFN:Texas_RGY_R-PVQFN-N16_EP2.05x2.55mm.
 */
export class TXB0106RGY extends Component.withPins({
  "A1": "1",
  "V_{CCA}": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "OE": "8",
  "GND_9": "9",
  "B6": "10",
  "B5": "11",
  "B4": "12",
  "B3": "13",
  "B2": "14",
  "V_{CCB}": "15",
  "B1": "16",
  "GND_17": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "bidirectional", "V_{CCA}": "power_in", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", OE: "input", GND_9: "power_in", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", "V_{CCB}": "power_in", B1: "bidirectional", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0106RGY";
  override referencePrefix = "U";
}

/**
 * 8-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, USON-20
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0108DQSR`. Reference prefix: `U`.
 * Footprint filters: USON*2x4mm*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/txb0108.pdf
 * Keywords: bidirectional voltage level translator.
 * Default footprint: Package_SON:USON-20_2x4mm_P0.4mm.
 */
export class TXB0108DQSR extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "A3": "3",
  "A4": "4",
  "VCCA": "5",
  "OE": "6",
  "A5": "7",
  "A6": "8",
  "A7": "9",
  "A8": "10",
  "B8": "11",
  "B7": "12",
  "B6": "13",
  "B5": "14",
  "GND": "15",
  "VCCB": "16",
  "B4": "17",
  "B3": "18",
  "B2": "19",
  "B1": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", VCCA: "power_in", OE: "input", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", GND: "power_in", VCCB: "power_in", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0108DQSR";
  override referencePrefix = "U";
}

/**
 * 8-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, TSSOP-20
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0108PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/txb0108.pdf
 * Keywords: bidirectional voltage level translator.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class TXB0108PW extends Component.withPins({
  "A1": "1",
  "V_{CCA}": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "A7": "8",
  "A8": "9",
  "OE": "10",
  "GND": "11",
  "B8": "12",
  "B7": "13",
  "B6": "14",
  "B5": "15",
  "B4": "16",
  "B3": "17",
  "B2": "18",
  "V_{CCB}": "19",
  "B1": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "bidirectional", "V_{CCA}": "power_in", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", OE: "input", GND: "power_in", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", "V_{CCB}": "power_in", B1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0108PW";
  override referencePrefix = "U";
}

/**
 * 8-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing and ±15-kV ESD Protection, 1.2 - 3.6V APort, 1.65 - 5.5V BPort, VQFN-20
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0108RGY`. Reference prefix: `U`.
 * Footprint filters: *RGY*PVQFN*.
 * @see http://www.ti.com/lit/ds/symlink/txb0108.pdf
 * Keywords: bidirectional voltage level translator.
 * Default footprint: Package_DFN_QFN:Texas_RGY_R-PVQFN-N20_EP2.05x3.05mm.
 */
export class TXB0108RGY extends Component.withPins({
  "A1": "1",
  "V_{CCA}": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "A7": "8",
  "A8": "9",
  "OE": "10",
  "GND_11": "11",
  "B8": "12",
  "B7": "13",
  "B6": "14",
  "B5": "15",
  "B4": "16",
  "B3": "17",
  "B2": "18",
  "V_{CCB}": "19",
  "B1": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "bidirectional", "V_{CCA}": "power_in", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", OE: "input", GND_11: "power_in", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", "V_{CCB}": "power_in", B1: "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0108RGY";
  override referencePrefix = "U";
}

/**
 * 4-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing, 0.9 - 3.6V APort, 0.9 - 3.6V BPort, Active High Output Enable, Texas_PUQFN-12
 *
 * KiCad symbol: `Logic_LevelTranslator:TXB0304RUT`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PUQFN*N12*.
 * @see http://www.ti.com/lit/ds/symlink/txb0304.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_DFN_QFN:Texas_R-PUQFN-N12.
 */
export class TXB0304RUT extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "GND": "6",
  "B4": "7",
  "B3": "8",
  "B2": "9",
  "B1": "10",
  "VCCB": "11",
  "OE": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "tri_state", A2: "tri_state", A3: "tri_state", A4: "tri_state", GND: "power_in", B4: "tri_state", B3: "tri_state", B2: "tri_state", B1: "tri_state", VCCB: "power_in", OE: "input", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXB0304RUT";
  override referencePrefix = "U";
}

/**
 * 4-Bit Bidirectional Voltage-Level Translator, Auto Direction Sensing, 0.9 - 3.6V APort, 0.9 - 3.6V BPort, Active Low Output Enable, Texas_PUQFN-12
 *
 * KiCad symbol: `Logic_LevelTranslator:TXBN0304RUT`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PUQFN*N12*.
 * @see http://www.ti.com/lit/ds/symlink/txb0304.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_DFN_QFN:Texas_R-PUQFN-N12.
 */
export class TXBN0304RUT extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "GND": "6",
  "B4": "7",
  "B3": "8",
  "B2": "9",
  "B1": "10",
  "VCCB": "11",
  "~{OE}": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "tri_state", A2: "tri_state", A3: "tri_state", A4: "tri_state", GND: "power_in", B4: "tri_state", B3: "tri_state", B2: "tri_state", B1: "tri_state", VCCB: "power_in", "~{OE}": "input", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXBN0304RUT";
  override referencePrefix = "U";
}

/**
 * 1-Bit Bidirectional Voltage-Level Shifter for Open-Drain and Push-Pull Application, SOT-23
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0101DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/txs0101.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TXS0101DBV extends Component.withPins({
  "V_{CCA}": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "OE": "5",
  "V_{CCB}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CCA}": "power_in", GND: "power_in", A: "bidirectional", B: "bidirectional", OE: "input", "V_{CCB}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0101DBV";
  override referencePrefix = "U";
}

/**
 * 1-Bit Bidirectional Voltage-Level Shifter for Open-Drain and Push-Pull Application, SOT-363
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0101DCK`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.ti.com/lit/ds/symlink/txs0101.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class TXS0101DCK extends Component.withPins({
  "V_{CCA}": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "OE": "5",
  "V_{CCB}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CCA}": "power_in", GND: "power_in", A: "bidirectional", B: "bidirectional", OE: "input", "V_{CCB}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0101DCK";
  override referencePrefix = "U";
}

/**
 * 1-Bit Bidirectional Voltage-Level Shifter for Open-Drain and Push-Pull Application, SOT-563
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0101DRL`. Reference prefix: `U`.
 * Footprint filters: SOT?563*.
 * @see https://www.ti.com/lit/ds/symlink/txs0101.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_TO_SOT_SMD:SOT-563.
 */
export class TXS0101DRL extends Component.withPins({
  "V_{CCA}": "1",
  "GND": "2",
  "A": "3",
  "B": "4",
  "OE": "5",
  "V_{CCB}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CCA}": "power_in", GND: "power_in", A: "bidirectional", B: "bidirectional", OE: "input", "V_{CCB}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0101DRL";
  override referencePrefix = "U";
}

/**
 * 1-Bit Bidirectional Voltage-Level Shifter for Open-Drain and Push-Pull Application, Texas DSBGA-6
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0101YZP`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*0.9x1.4mm*Layout2x3*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/txs0101.pdf
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_BGA:Texas_DSBGA-6_0.9x1.4mm_Layout2x3_P0.5mm.
 */
export class TXS0101YZP extends Component.withPins({
  "V_{CCA}": "A1",
  "V_{CCB}": "A2",
  "GND": "B1",
  "OE": "B2",
  "A": "C1",
  "B": "C2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CCA}": "power_in", "V_{CCB}": "power_in", GND: "power_in", OE: "input", A: "bidirectional", B: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0101YZP";
  override referencePrefix = "U";
}

/**
 * 2-Bit Bidirectional Voltage-Level Shifter for Open-Drain and Push-Pull Application, SSOP-8
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0102DCT`. Reference prefix: `U`.
 * Footprint filters: SSOP*2.95x2.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/gpn/txs0102
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:SSOP-8_2.95x2.8mm_P0.65mm.
 */
export class TXS0102DCT extends Component.withPins({
  "B2": "1",
  "GND": "2",
  "VCCA": "3",
  "A2": "4",
  "A1": "5",
  "OE": "6",
  "VCCB": "7",
  "B1": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B2: "bidirectional", GND: "power_in", VCCA: "power_in", A2: "bidirectional", A1: "bidirectional", OE: "input", VCCB: "power_in", B1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0102DCT";
  override referencePrefix = "U";
}

/**
 * 2-Bit Bidirectional Voltage-Level Shifter for Open-Drain and Push-Pull Application, VSSOP-8
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0102DCU`. Reference prefix: `U`.
 * Footprint filters: VSSOP*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/gpn/txs0102
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SO:VSSOP-8_2.3x2mm_P0.5mm.
 */
export class TXS0102DCU extends Component.withPins({
  "B2": "1",
  "GND": "2",
  "VCCA": "3",
  "A2": "4",
  "A1": "5",
  "OE": "6",
  "VCCB": "7",
  "B1": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B2: "bidirectional", GND: "power_in", VCCA: "power_in", A2: "bidirectional", A1: "bidirectional", OE: "input", VCCB: "power_in", B1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0102DCU";
  override referencePrefix = "U";
}

/**
 * 2-Bit Bidirectional Voltage-Level Shifter for Open-Drain and Push-Pull Application, X2SON-8
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0102DQE`. Reference prefix: `U`.
 * Footprint filters: X2SON*1.4x1mm*P0.35mm*.
 * @see http://www.ti.com/lit/gpn/txs0102
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_SON:X2SON-8_1.4x1mm_P0.35mm.
 */
export class TXS0102DQE extends Component.withPins({
  "VCCA": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "OE": "5",
  "B2": "6",
  "B1": "7",
  "VCCB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCA: "power_in", A1: "bidirectional", A2: "bidirectional", GND: "power_in", OE: "input", B2: "bidirectional", B1: "bidirectional", VCCB: "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0102DQE";
  override referencePrefix = "U";
}

/**
 * 2-Bit Bidirectional Voltage-Level Shifter for Open-Drain and Push-Pull Application, DSBGA-8
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0102YZP`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*0.9x1.9mm*Layout2x4*P0.5mm*.
 * @see http://www.ti.com/lit/gpn/txs0102
 * Keywords: Level-Shifter CMOS-TTL-Translation.
 * Default footprint: Package_BGA:Texas_DSBGA-8_0.9x1.9mm_Layout2x4_P0.5mm.
 */
export class TXS0102YZP extends Component.withPins({
  "B2": "A1",
  "B1": "A2",
  "GND": "B1",
  "VCCB": "B2",
  "VCCA": "C1",
  "OE": "C2",
  "A2": "D1",
  "A1": "D2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B2: "bidirectional", B1: "bidirectional", GND: "power_in", VCCB: "power_in", VCCA: "power_in", OE: "input", A2: "bidirectional", A1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0102YZP";
  override referencePrefix = "U";
}

/**
 * Bidirectional  level-shifting voltage translator, TSSOP-14
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0104EPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see www.ti.com/lit/ds/symlink/txs0104e.pdf
 * Keywords: 4-bit.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class TXS0104EPW extends Component.withPins({
  "NC_6": "6",
  "NC_9": "9",
  "V_{CCA}": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "GND": "7",
  "OE": "8",
  "B4": "10",
  "B3": "11",
  "B2": "12",
  "B1": "13",
  "V_{CCB}": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_6: "no_connect", NC_9: "no_connect", "V_{CCA}": "power_in", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", GND: "power_in", OE: "input", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", "V_{CCB}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0104EPW";
  override referencePrefix = "U";
}

/**
 * Bidirectional  level-shifting voltage translator, SOIC-14
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0104ED`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see www.ti.com/lit/ds/symlink/txs0104e.pdf
 * Keywords: 4-bit.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class TXS0104ED extends Component.withPins({
  "NC_6": "6",
  "NC_9": "9",
  "V_{CCA}": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "GND": "7",
  "OE": "8",
  "B4": "10",
  "B3": "11",
  "B2": "12",
  "B1": "13",
  "V_{CCB}": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_6: "no_connect", NC_9: "no_connect", "V_{CCA}": "power_in", A1: "bidirectional", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", GND: "power_in", OE: "input", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", B1: "bidirectional", "V_{CCB}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0104ED";
  override referencePrefix = "U";
}

/**
 * Bidirectional  level-shifting voltage translator, TSSOP-20
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS0108EPW`. Reference prefix: `U`.
 * Footprint filters: *SSOP*4.4x6.5mm*P0.65mm*.
 * @see www.ti.com/lit/ds/symlink/txs0108e.pdf
 * Keywords: 8-bit.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class TXS0108EPW extends Component.withPins({
  "A1": "1",
  "VCCA": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "A5": "6",
  "A6": "7",
  "A7": "8",
  "A8": "9",
  "OE": "10",
  "GND": "11",
  "B8": "12",
  "B7": "13",
  "B6": "14",
  "B5": "15",
  "B4": "16",
  "B3": "17",
  "B2": "18",
  "VCCB": "19",
  "B1": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "bidirectional", VCCA: "power_in", A2: "bidirectional", A3: "bidirectional", A4: "bidirectional", A5: "bidirectional", A6: "bidirectional", A7: "bidirectional", A8: "bidirectional", OE: "input", GND: "power_in", B8: "bidirectional", B7: "bidirectional", B6: "bidirectional", B5: "bidirectional", B4: "bidirectional", B3: "bidirectional", B2: "bidirectional", VCCB: "power_in", B1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS0108EPW";
  override referencePrefix = "U";
}

/**
 * SDIO port expander with voltage-level translation, 6:12 Demultiplexer/Multiplexer, 1.1V to 3.6V supply range, QFN-24
 *
 * KiCad symbol: `Logic_LevelTranslator:TXS02612RTW`. Reference prefix: `U`.
 * Footprint filters: *WQFN*24*4x4mm*.
 * @see https://www.ti.com/lit/gpn/TXS02612
 * Keywords: SDIO level translator.
 * Default footprint: Package_DFN_QFN:WQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm_ThermalVias.
 */
export class TXS02612RTW extends Component.withPins({
  "DAT2A": "1",
  "GND_2": "2",
  "DAT3A": "3",
  "CMDA": "4",
  "V_{CCA}": "5",
  "DAT0A": "6",
  "DAT1A": "7",
  "DAT2_{B1}": "8",
  "CLKA": "9",
  "DAT3_{B1}": "10",
  "GND_11": "11",
  "CMD_{B1}": "12",
  "CLK_{B1}": "13",
  "DAT0_{B1}": "14",
  "DAT1_{B1}": "15",
  "DAT1_{B0}": "16",
  "VCC_{B1}": "17",
  "DAT0_{B0}": "18",
  "CLK_{B0}": "19",
  "CMD_{B0}": "20",
  "VCC_{B0}": "21",
  "DAT3_{B0}": "22",
  "DAT2_{B0}": "23",
  "SEL": "24",
  "EPAD": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DAT2A: "bidirectional", GND_2: "power_in", DAT3A: "bidirectional", CMDA: "bidirectional", "V_{CCA}": "power_in", DAT0A: "bidirectional", DAT1A: "bidirectional", "DAT2_{B1}": "bidirectional", CLKA: "input", "DAT3_{B1}": "bidirectional", GND_11: "passive", "CMD_{B1}": "bidirectional", "CLK_{B1}": "output", "DAT0_{B1}": "bidirectional", "DAT1_{B1}": "bidirectional", "DAT1_{B0}": "bidirectional", "VCC_{B1}": "power_in", "DAT0_{B0}": "bidirectional", "CLK_{B0}": "output", "CMD_{B0}": "bidirectional", "VCC_{B0}": "power_in", "DAT3_{B0}": "bidirectional", "DAT2_{B0}": "bidirectional", SEL: "input", EPAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Logic_LevelTranslator:TXS02612RTW";
  override referencePrefix = "U";
}
