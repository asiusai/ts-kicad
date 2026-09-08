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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _74LVC2T45DC extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: 1A; bidirectional. */
  "1A": "2",
  /** Physical pin 3: 2A; bidirectional. */
  "2A": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DIR; input. */
  "DIR": "5",
  /** Physical pin 6: 2B; bidirectional. */
  "2B": "6",
  /** Physical pin 7: 1B; bidirectional. */
  "1B": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _74LVCH2T45DC extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: 1A; bidirectional. */
  "1A": "2",
  /** Physical pin 3: 2A; bidirectional. */
  "2A": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DIR; input. */
  "DIR": "5",
  /** Physical pin 6: 2B; bidirectional. */
  "2B": "6",
  /** Physical pin 7: 1B; bidirectional. */
  "1B": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CD40109BPW extends Component.withPins({
  /** Physical pin 1: V_{CC}; power_in. */
  "V_{CC}": "1",
  /** Physical pin 2: ENABLE_A; input. */
  "ENABLE_A": "2",
  /** Physical pin 3: A; input. */
  "A": "3",
  /** Physical pin 4: E; output. */
  "E": "4",
  /** Physical pin 5: F; output. */
  "F": "5",
  /** Physical pin 6: B; input. */
  "B": "6",
  /** Physical pin 7: ENABLE_B; input. */
  "ENABLE_B": "7",
  /** Physical pin 8: V_{SS}; power_in. */
  "V_{SS}": "8",
  /** Physical pin 9: ENABLE_C; input. */
  "ENABLE_C": "9",
  /** Physical pin 10: C; input. */
  "C": "10",
  /** Physical pin 11: G; output. */
  "G": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC": "12",
  /** Physical pin 13: H; output. */
  "H": "13",
  /** Physical pin 14: D; input. */
  "D": "14",
  /** Physical pin 15: ENABLE_D; input. */
  "ENABLE_D": "15",
  /** Physical pin 16: V_{DD}; power_in. */
  "V_{DD}": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FXMA108 extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A0; bidirectional. */
  "A0": "2",
  /** Physical pin 3: A1; bidirectional. */
  "A1": "3",
  /** Physical pin 4: A2; bidirectional. */
  "A2": "4",
  /** Physical pin 5: A3; bidirectional. */
  "A3": "5",
  /** Physical pin 6: A4; bidirectional. */
  "A4": "6",
  /** Physical pin 7: A5; bidirectional. */
  "A5": "7",
  /** Physical pin 8: A6; bidirectional. */
  "A6": "8",
  /** Physical pin 9: A7; bidirectional. */
  "A7": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{OE}; input. */
  "~{OE}": "11",
  /** Physical pin 12: B7; bidirectional. */
  "B7": "12",
  /** Physical pin 13: B6; bidirectional. */
  "B6": "13",
  /** Physical pin 14: B5; bidirectional. */
  "B5": "14",
  /** Physical pin 15: B4; bidirectional. */
  "B4": "15",
  /** Physical pin 16: B3; bidirectional. */
  "B3": "16",
  /** Physical pin 17: B2; bidirectional. */
  "B2": "17",
  /** Physical pin 18: B1; bidirectional. */
  "B1": "18",
  /** Physical pin 19: B0; bidirectional. */
  "B0": "19",
  /** Physical pin 20: VCCB; power_in. */
  "VCCB": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LSF0108BQ extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: RefA; power_in. */
  "RefA": "2",
  /** Physical pin 3: A1; bidirectional. */
  "A1": "3",
  /** Physical pin 4: A2; bidirectional. */
  "A2": "4",
  /** Physical pin 5: A3; bidirectional. */
  "A3": "5",
  /** Physical pin 6: A4; bidirectional. */
  "A4": "6",
  /** Physical pin 7: A5; bidirectional. */
  "A5": "7",
  /** Physical pin 8: A6; bidirectional. */
  "A6": "8",
  /** Physical pin 9: A7; bidirectional. */
  "A7": "9",
  /** Physical pin 10: A8; bidirectional. */
  "A8": "10",
  /** Physical pin 11: B8; bidirectional. */
  "B8": "11",
  /** Physical pin 12: B7; bidirectional. */
  "B7": "12",
  /** Physical pin 13: B6; bidirectional. */
  "B6": "13",
  /** Physical pin 14: B5; bidirectional. */
  "B5": "14",
  /** Physical pin 15: B4; bidirectional. */
  "B4": "15",
  /** Physical pin 16: B3; bidirectional. */
  "B3": "16",
  /** Physical pin 17: B2; bidirectional. */
  "B2": "17",
  /** Physical pin 18: B1; bidirectional. */
  "B1": "18",
  /** Physical pin 19: RefB; power_in. */
  "RefB": "19",
  /** Physical pin 20: EN; input. */
  "EN": "20",
  /** Physical pin 21: EPAD; passive. */
  "EPAD": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LSF0108PW extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: RefA; power_in. */
  "RefA": "2",
  /** Physical pin 3: A1; bidirectional. */
  "A1": "3",
  /** Physical pin 4: A2; bidirectional. */
  "A2": "4",
  /** Physical pin 5: A3; bidirectional. */
  "A3": "5",
  /** Physical pin 6: A4; bidirectional. */
  "A4": "6",
  /** Physical pin 7: A5; bidirectional. */
  "A5": "7",
  /** Physical pin 8: A6; bidirectional. */
  "A6": "8",
  /** Physical pin 9: A7; bidirectional. */
  "A7": "9",
  /** Physical pin 10: A8; bidirectional. */
  "A8": "10",
  /** Physical pin 11: B8; bidirectional. */
  "B8": "11",
  /** Physical pin 12: B7; bidirectional. */
  "B7": "12",
  /** Physical pin 13: B6; bidirectional. */
  "B6": "13",
  /** Physical pin 14: B5; bidirectional. */
  "B5": "14",
  /** Physical pin 15: B4; bidirectional. */
  "B4": "15",
  /** Physical pin 16: B3; bidirectional. */
  "B3": "16",
  /** Physical pin 17: B2; bidirectional. */
  "B2": "17",
  /** Physical pin 18: B1; bidirectional. */
  "B1": "18",
  /** Physical pin 19: RefB; power_in. */
  "RefB": "19",
  /** Physical pin 20: EN; input. */
  "EN": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCN4555MN extends Component.withPins({
  /** Physical pin 1: ~{STOP}; input. */
  "~{STOP}": "1",
  /** Physical pin 2: MOD_VCC; input. */
  "MOD_VCC": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VBAT; power_in. */
  "VBAT": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: SIM_VCC; power_out. */
  "SIM_VCC": "7",
  /** Physical pin 8: SIM_I/O; bidirectional. */
  "SIM_I/O": "8",
  /** Physical pin 9: SIM_RST; output. */
  "SIM_RST": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: SIM_CLK; output. */
  "SIM_CLK": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: CLK; input. */
  "CLK": "13",
  /** Physical pin 14: RST; input. */
  "RST": "14",
  /** Physical pin 15: I/O; bidirectional. */
  "I/O": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NLSV2T244D extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: ~{OE}; input. */
  "~{OE}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: B2; output. */
  "B2": "6",
  /** Physical pin 7: B1; output. */
  "B1": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NLSV2T244DM extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: ~{OE}; input. */
  "~{OE}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: B2; output. */
  "B2": "6",
  /** Physical pin 7: B1; output. */
  "B1": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NLSV2T244MU extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: ~{OE}; input. */
  "~{OE}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: B2; output. */
  "B2": "6",
  /** Physical pin 7: B1; output. */
  "B1": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74AUP1T34DCK extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A; input. */
  "A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: B; output. */
  "B": "4",
  /** Physical pin 5: VCCB; power_in. */
  "VCCB": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74AVC4T245PW extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: 1DIR; input. */
  "1DIR": "2",
  /** Physical pin 3: 2DIR; input. */
  "2DIR": "3",
  /** Physical pin 4: 1A1; bidirectional. */
  "1A1": "4",
  /** Physical pin 5: 1A2; bidirectional. */
  "1A2": "5",
  /** Physical pin 6: 2A1; bidirectional. */
  "2A1": "6",
  /** Physical pin 7: 2A2; bidirectional. */
  "2A2": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: 2B2; bidirectional. */
  "2B2": "10",
  /** Physical pin 11: 2B1; bidirectional. */
  "2B1": "11",
  /** Physical pin 12: 1B2; bidirectional. */
  "1B2": "12",
  /** Physical pin 13: 1B1; bidirectional. */
  "1B1": "13",
  /** Physical pin 14: 2~{OE}; input. */
  "2~{OE}": "14",
  /** Physical pin 15: 1~{OE}; input. */
  "1~{OE}": "15",
  /** Physical pin 16: VCCB; power_in. */
  "VCCB": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74AVC8T245PW extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: DIR; input. */
  "DIR": "2",
  /** Physical pin 3: A1; bidirectional. */
  "A1": "3",
  /** Physical pin 4: A2; bidirectional. */
  "A2": "4",
  /** Physical pin 5: A3; bidirectional. */
  "A3": "5",
  /** Physical pin 6: A4; bidirectional. */
  "A4": "6",
  /** Physical pin 7: A5; bidirectional. */
  "A5": "7",
  /** Physical pin 8: A6; bidirectional. */
  "A6": "8",
  /** Physical pin 9: A7; bidirectional. */
  "A7": "9",
  /** Physical pin 10: A8; bidirectional. */
  "A8": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: B8; bidirectional. */
  "B8": "14",
  /** Physical pin 15: B7; bidirectional. */
  "B7": "15",
  /** Physical pin 16: B6; bidirectional. */
  "B6": "16",
  /** Physical pin 17: B5; bidirectional. */
  "B5": "17",
  /** Physical pin 18: B4; bidirectional. */
  "B4": "18",
  /** Physical pin 19: B3; bidirectional. */
  "B3": "19",
  /** Physical pin 20: B2; bidirectional. */
  "B2": "20",
  /** Physical pin 21: B1; bidirectional. */
  "B1": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: VCCB; power_in. */
  "VCCB_23": "23",
  /** Physical pin 24: VCCB; power_in. */
  "VCCB_24": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LV1T125DCK extends Component.withPins({
  /** Physical pin 1: ~{OE}; input. */
  "~{OE}": "1",
  /** Physical pin 2: A; input. */
  "A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: Y; output. */
  "Y": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LV1T125DBV extends Component.withPins({
  /** Physical pin 1: ~{OE}; input. */
  "~{OE}": "1",
  /** Physical pin 2: A; input. */
  "A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: Y; output. */
  "Y": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LV1T34DBV extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A; input. */
  "A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: Y; output. */
  "Y": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LV1T34DCK extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A; input. */
  "A": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: Y; output. */
  "Y": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LVC1T45DBV extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; bidirectional. */
  "A": "3",
  /** Physical pin 4: B; bidirectional. */
  "B": "4",
  /** Physical pin 5: DIR; input. */
  "DIR": "5",
  /** Physical pin 6: VCCB; power_in. */
  "VCCB": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LVC1T45DCK extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; bidirectional. */
  "A": "3",
  /** Physical pin 4: B; bidirectional. */
  "B": "4",
  /** Physical pin 5: DIR; input. */
  "DIR": "5",
  /** Physical pin 6: VCCB; power_in. */
  "VCCB": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LVC1T45DRL extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; bidirectional. */
  "A": "3",
  /** Physical pin 4: B; bidirectional. */
  "B": "4",
  /** Physical pin 5: DIR; input. */
  "DIR": "5",
  /** Physical pin 6: VCCB; power_in. */
  "VCCB": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LVC245APW extends Component.withPins({
  /** Physical pin 1: DIR; input. */
  "DIR": "1",
  /** Physical pin 2: A1; bidirectional. */
  "A1": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: A5; bidirectional. */
  "A5": "6",
  /** Physical pin 7: A6; bidirectional. */
  "A6": "7",
  /** Physical pin 8: A7; bidirectional. */
  "A7": "8",
  /** Physical pin 9: A8; bidirectional. */
  "A8": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: B8; bidirectional. */
  "B8": "11",
  /** Physical pin 12: B7; bidirectional. */
  "B7": "12",
  /** Physical pin 13: B6; bidirectional. */
  "B6": "13",
  /** Physical pin 14: B5; bidirectional. */
  "B5": "14",
  /** Physical pin 15: B4; bidirectional. */
  "B4": "15",
  /** Physical pin 16: B3; bidirectional. */
  "B3": "16",
  /** Physical pin 17: B2; bidirectional. */
  "B2": "17",
  /** Physical pin 18: B1; bidirectional. */
  "B1": "18",
  /** Physical pin 19: ~{OE}; input. */
  "~{OE}": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LVC2T45DCUR extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; bidirectional. */
  "A1": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DIR; input. */
  "DIR": "5",
  /** Physical pin 6: B2; bidirectional. */
  "B2": "6",
  /** Physical pin 7: B1; bidirectional. */
  "B1": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LVC2T45YZP extends Component.withPins({
  /** Physical pin A1: VCCA; power_in. */
  "VCCA": "A1",
  /** Physical pin A2: VCCB; power_in. */
  "VCCB": "A2",
  /** Physical pin B1: A1; bidirectional. */
  "A1": "B1",
  /** Physical pin B2: B1; bidirectional. */
  "B1": "B2",
  /** Physical pin C1: A2; bidirectional. */
  "A2": "C1",
  /** Physical pin C2: B2; bidirectional. */
  "B2": "C2",
  /** Physical pin D1: GND; power_in. */
  "GND": "D1",
  /** Physical pin D2: DIR; input. */
  "DIR": "D2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SN74LVC8T245 extends Component.withPins({
  /** Physical pin 1: V_{CCA}; power_in. */
  "V_{CCA}": "1",
  /** Physical pin 2: DIR; input. */
  "DIR": "2",
  /** Physical pin 3: A1; bidirectional. */
  "A1": "3",
  /** Physical pin 4: A2; bidirectional. */
  "A2": "4",
  /** Physical pin 5: A3; bidirectional. */
  "A3": "5",
  /** Physical pin 6: A4; bidirectional. */
  "A4": "6",
  /** Physical pin 7: A5; bidirectional. */
  "A5": "7",
  /** Physical pin 8: A6; bidirectional. */
  "A6": "8",
  /** Physical pin 9: A7; bidirectional. */
  "A7": "9",
  /** Physical pin 10: A8; bidirectional. */
  "A8": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: B8; bidirectional. */
  "B8": "14",
  /** Physical pin 15: B7; bidirectional. */
  "B7": "15",
  /** Physical pin 16: B6; bidirectional. */
  "B6": "16",
  /** Physical pin 17: B5; bidirectional. */
  "B5": "17",
  /** Physical pin 18: B4; bidirectional. */
  "B4": "18",
  /** Physical pin 19: B3; bidirectional. */
  "B3": "19",
  /** Physical pin 20: B2; bidirectional. */
  "B2": "20",
  /** Physical pin 21: B1; bidirectional. */
  "B1": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: V_{CCB}; power_in. */
  "V_{CCB}_23": "23",
  /** Physical pin 24: V_{CCB}; passive. */
  "V_{CCB}_24": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9517ADGK extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: SCLA; bidirectional. */
  "SCLA": "2",
  /** Physical pin 3: SDAA; bidirectional. */
  "SDAA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: EN; passive. */
  "EN": "5",
  /** Physical pin 6: SDAB; bidirectional. */
  "SDAB": "6",
  /** Physical pin 7: SCLB; bidirectional. */
  "SCLB": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9517D extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: SCLA; bidirectional. */
  "SCLA": "2",
  /** Physical pin 3: SDAA; bidirectional. */
  "SDAA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: EN; passive. */
  "EN": "5",
  /** Physical pin 6: SDAB; bidirectional. */
  "SDAB": "6",
  /** Physical pin 7: SCLB; bidirectional. */
  "SCLB": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0101DBV extends Component.withPins({
  /** Physical pin 1: V_{CCA}; power_in. */
  "V_{CCA}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; bidirectional. */
  "A": "3",
  /** Physical pin 4: B; bidirectional. */
  "B": "4",
  /** Physical pin 5: OE; input. */
  "OE": "5",
  /** Physical pin 6: V_{CCB}; power_in. */
  "V_{CCB}": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0101DCK extends Component.withPins({
  /** Physical pin 1: V_{CCA}; power_in. */
  "V_{CCA}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; bidirectional. */
  "A": "3",
  /** Physical pin 4: B; bidirectional. */
  "B": "4",
  /** Physical pin 5: OE; input. */
  "OE": "5",
  /** Physical pin 6: V_{CCB}; power_in. */
  "V_{CCB}": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0101DRL extends Component.withPins({
  /** Physical pin 1: V_{CCA}; power_in. */
  "V_{CCA}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; bidirectional. */
  "A": "3",
  /** Physical pin 4: B; bidirectional. */
  "B": "4",
  /** Physical pin 5: OE; input. */
  "OE": "5",
  /** Physical pin 6: V_{CCB}; power_in. */
  "V_{CCB}": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0101YZP extends Component.withPins({
  /** Physical pin A1: V_{CCA}; power_in. */
  "V_{CCA}": "A1",
  /** Physical pin A2: V_{CCB}; power_in. */
  "V_{CCB}": "A2",
  /** Physical pin B1: GND; power_in. */
  "GND": "B1",
  /** Physical pin B2: OE; input. */
  "OE": "B2",
  /** Physical pin C1: A; bidirectional. */
  "A": "C1",
  /** Physical pin C2: B; bidirectional. */
  "B": "C2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0102DCU extends Component.withPins({
  /** Physical pin 1: B2; bidirectional. */
  "B2": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCCA; power_in. */
  "VCCA": "3",
  /** Physical pin 4: A2; bidirectional. */
  "A2": "4",
  /** Physical pin 5: A1; bidirectional. */
  "A1": "5",
  /** Physical pin 6: OE; input. */
  "OE": "6",
  /** Physical pin 7: VCCB; power_in. */
  "VCCB": "7",
  /** Physical pin 8: B1; bidirectional. */
  "B1": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0102YZP extends Component.withPins({
  /** Physical pin A1: B2; bidirectional. */
  "B2": "A1",
  /** Physical pin A2: B1; bidirectional. */
  "B1": "A2",
  /** Physical pin B1: GND; power_in. */
  "GND": "B1",
  /** Physical pin B2: VCCB; power_in. */
  "VCCB": "B2",
  /** Physical pin C1: VCCA; power_in. */
  "VCCA": "C1",
  /** Physical pin C2: OE; input. */
  "OE": "C2",
  /** Physical pin D1: A2; bidirectional. */
  "A2": "D1",
  /** Physical pin D2: A1; bidirectional. */
  "A1": "D2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0104RGY extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; bidirectional. */
  "A1": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OE; input. */
  "OE": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: B4; bidirectional. */
  "B4": "10",
  /** Physical pin 11: B3; bidirectional. */
  "B3": "11",
  /** Physical pin 12: B2; bidirectional. */
  "B2": "12",
  /** Physical pin 13: B1; bidirectional. */
  "B1": "13",
  /** Physical pin 14: VCCB; power_in. */
  "VCCB": "14",
  /** Physical pin 15: Pad; input. */
  "Pad": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0104BQA extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; bidirectional. */
  "A1": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OE; input. */
  "OE": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: B4; bidirectional. */
  "B4": "10",
  /** Physical pin 11: B3; bidirectional. */
  "B3": "11",
  /** Physical pin 12: B2; bidirectional. */
  "B2": "12",
  /** Physical pin 13: B1; bidirectional. */
  "B1": "13",
  /** Physical pin 14: VCCB; power_in. */
  "VCCB": "14",
  /** Physical pin 15: Pad; input. */
  "Pad": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0104D extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; bidirectional. */
  "A1": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OE; input. */
  "OE": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: B4; bidirectional. */
  "B4": "10",
  /** Physical pin 11: B3; bidirectional. */
  "B3": "11",
  /** Physical pin 12: B2; bidirectional. */
  "B2": "12",
  /** Physical pin 13: B1; bidirectional. */
  "B1": "13",
  /** Physical pin 14: VCCB; power_in. */
  "VCCB": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0104PW extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; bidirectional. */
  "A1": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OE; input. */
  "OE": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: B4; bidirectional. */
  "B4": "10",
  /** Physical pin 11: B3; bidirectional. */
  "B3": "11",
  /** Physical pin 12: B2; bidirectional. */
  "B2": "12",
  /** Physical pin 13: B1; bidirectional. */
  "B1": "13",
  /** Physical pin 14: VCCB; power_in. */
  "VCCB": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0104RUT extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; tri_state. */
  "A1": "2",
  /** Physical pin 3: A2; tri_state. */
  "A2": "3",
  /** Physical pin 4: A3; tri_state. */
  "A3": "4",
  /** Physical pin 5: A4; tri_state. */
  "A4": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: B4; tri_state. */
  "B4": "7",
  /** Physical pin 8: B3; tri_state. */
  "B3": "8",
  /** Physical pin 9: B2; tri_state. */
  "B2": "9",
  /** Physical pin 10: B1; tri_state. */
  "B1": "10",
  /** Physical pin 11: VCCB; power_in. */
  "VCCB": "11",
  /** Physical pin 12: OE; input. */
  "OE": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0104YZT extends Component.withPins({
  /** Physical pin A1: B1; bidirectional. */
  "B1": "A1",
  /** Physical pin A2: VCCB; power_in. */
  "VCCB": "A2",
  /** Physical pin A3: A1; bidirectional. */
  "A1": "A3",
  /** Physical pin B1: B2; bidirectional. */
  "B2": "B1",
  /** Physical pin B2: VCCA; power_in. */
  "VCCA": "B2",
  /** Physical pin B3: A2; bidirectional. */
  "A2": "B3",
  /** Physical pin C1: B3; bidirectional. */
  "B3": "C1",
  /** Physical pin C2: OE; input. */
  "OE": "C2",
  /** Physical pin C3: A3; bidirectional. */
  "A3": "C3",
  /** Physical pin D1: B4; bidirectional. */
  "B4": "D1",
  /** Physical pin D2: GND; power_in. */
  "GND": "D2",
  /** Physical pin D3: A4; bidirectional. */
  "A4": "D3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0104ZXU extends Component.withPins({
  /** Physical pin A1: A1; bidirectional. */
  "PA1": "A1",
  /** Physical pin A2: A2; bidirectional. */
  "PA2": "A2",
  /** Physical pin A3: A3; bidirectional. */
  "PA3": "A3",
  /** Physical pin A4: A4; bidirectional. */
  "PA4": "A4",
  /** Physical pin B1: VCCB; power_in. */
  "VCCB": "B1",
  /** Physical pin B2: VCCA; power_in. */
  "VCCA": "B2",
  /** Physical pin B3: OE; input. */
  "OE": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND": "B4",
  /** Physical pin C1: B1; bidirectional. */
  "B1": "C1",
  /** Physical pin C2: B2; bidirectional. */
  "B2": "C2",
  /** Physical pin C3: B3; bidirectional. */
  "B3": "C3",
  /** Physical pin C4: B4; bidirectional. */
  "B4": "C4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0106PW extends Component.withPins({
  /** Physical pin 1: A1; bidirectional. */
  "A1": "1",
  /** Physical pin 2: V_{CCA}; power_in. */
  "V_{CCA}": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: A5; bidirectional. */
  "A5": "6",
  /** Physical pin 7: A6; bidirectional. */
  "A6": "7",
  /** Physical pin 8: OE; input. */
  "OE": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: B6; bidirectional. */
  "B6": "10",
  /** Physical pin 11: B5; bidirectional. */
  "B5": "11",
  /** Physical pin 12: B4; bidirectional. */
  "B4": "12",
  /** Physical pin 13: B3; bidirectional. */
  "B3": "13",
  /** Physical pin 14: B2; bidirectional. */
  "B2": "14",
  /** Physical pin 15: V_{CCB}; power_in. */
  "V_{CCB}": "15",
  /** Physical pin 16: B1; bidirectional. */
  "B1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0106RGY extends Component.withPins({
  /** Physical pin 1: A1; bidirectional. */
  "A1": "1",
  /** Physical pin 2: V_{CCA}; power_in. */
  "V_{CCA}": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: A5; bidirectional. */
  "A5": "6",
  /** Physical pin 7: A6; bidirectional. */
  "A6": "7",
  /** Physical pin 8: OE; input. */
  "OE": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: B6; bidirectional. */
  "B6": "10",
  /** Physical pin 11: B5; bidirectional. */
  "B5": "11",
  /** Physical pin 12: B4; bidirectional. */
  "B4": "12",
  /** Physical pin 13: B3; bidirectional. */
  "B3": "13",
  /** Physical pin 14: B2; bidirectional. */
  "B2": "14",
  /** Physical pin 15: V_{CCB}; power_in. */
  "V_{CCB}": "15",
  /** Physical pin 16: B1; bidirectional. */
  "B1": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0108DQSR extends Component.withPins({
  /** Physical pin 1: A1; bidirectional. */
  "A1": "1",
  /** Physical pin 2: A2; bidirectional. */
  "A2": "2",
  /** Physical pin 3: A3; bidirectional. */
  "A3": "3",
  /** Physical pin 4: A4; bidirectional. */
  "A4": "4",
  /** Physical pin 5: VCCA; power_in. */
  "VCCA": "5",
  /** Physical pin 6: OE; input. */
  "OE": "6",
  /** Physical pin 7: A5; bidirectional. */
  "A5": "7",
  /** Physical pin 8: A6; bidirectional. */
  "A6": "8",
  /** Physical pin 9: A7; bidirectional. */
  "A7": "9",
  /** Physical pin 10: A8; bidirectional. */
  "A8": "10",
  /** Physical pin 11: B8; bidirectional. */
  "B8": "11",
  /** Physical pin 12: B7; bidirectional. */
  "B7": "12",
  /** Physical pin 13: B6; bidirectional. */
  "B6": "13",
  /** Physical pin 14: B5; bidirectional. */
  "B5": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: VCCB; power_in. */
  "VCCB": "16",
  /** Physical pin 17: B4; bidirectional. */
  "B4": "17",
  /** Physical pin 18: B3; bidirectional. */
  "B3": "18",
  /** Physical pin 19: B2; bidirectional. */
  "B2": "19",
  /** Physical pin 20: B1; bidirectional. */
  "B1": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0108PW extends Component.withPins({
  /** Physical pin 1: A1; bidirectional. */
  "A1": "1",
  /** Physical pin 2: V_{CCA}; power_in. */
  "V_{CCA}": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: A5; bidirectional. */
  "A5": "6",
  /** Physical pin 7: A6; bidirectional. */
  "A6": "7",
  /** Physical pin 8: A7; bidirectional. */
  "A7": "8",
  /** Physical pin 9: A8; bidirectional. */
  "A8": "9",
  /** Physical pin 10: OE; input. */
  "OE": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: B8; bidirectional. */
  "B8": "12",
  /** Physical pin 13: B7; bidirectional. */
  "B7": "13",
  /** Physical pin 14: B6; bidirectional. */
  "B6": "14",
  /** Physical pin 15: B5; bidirectional. */
  "B5": "15",
  /** Physical pin 16: B4; bidirectional. */
  "B4": "16",
  /** Physical pin 17: B3; bidirectional. */
  "B3": "17",
  /** Physical pin 18: B2; bidirectional. */
  "B2": "18",
  /** Physical pin 19: V_{CCB}; power_in. */
  "V_{CCB}": "19",
  /** Physical pin 20: B1; bidirectional. */
  "B1": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0108RGY extends Component.withPins({
  /** Physical pin 1: A1; bidirectional. */
  "A1": "1",
  /** Physical pin 2: V_{CCA}; power_in. */
  "V_{CCA}": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: A5; bidirectional. */
  "A5": "6",
  /** Physical pin 7: A6; bidirectional. */
  "A6": "7",
  /** Physical pin 8: A7; bidirectional. */
  "A7": "8",
  /** Physical pin 9: A8; bidirectional. */
  "A8": "9",
  /** Physical pin 10: OE; input. */
  "OE": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: B8; bidirectional. */
  "B8": "12",
  /** Physical pin 13: B7; bidirectional. */
  "B7": "13",
  /** Physical pin 14: B6; bidirectional. */
  "B6": "14",
  /** Physical pin 15: B5; bidirectional. */
  "B5": "15",
  /** Physical pin 16: B4; bidirectional. */
  "B4": "16",
  /** Physical pin 17: B3; bidirectional. */
  "B3": "17",
  /** Physical pin 18: B2; bidirectional. */
  "B2": "18",
  /** Physical pin 19: V_{CCB}; power_in. */
  "V_{CCB}": "19",
  /** Physical pin 20: B1; bidirectional. */
  "B1": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXB0304RUT extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; tri_state. */
  "A1": "2",
  /** Physical pin 3: A2; tri_state. */
  "A2": "3",
  /** Physical pin 4: A3; tri_state. */
  "A3": "4",
  /** Physical pin 5: A4; tri_state. */
  "A4": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: B4; tri_state. */
  "B4": "7",
  /** Physical pin 8: B3; tri_state. */
  "B3": "8",
  /** Physical pin 9: B2; tri_state. */
  "B2": "9",
  /** Physical pin 10: B1; tri_state. */
  "B1": "10",
  /** Physical pin 11: VCCB; power_in. */
  "VCCB": "11",
  /** Physical pin 12: OE; input. */
  "OE": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXBN0304RUT extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; tri_state. */
  "A1": "2",
  /** Physical pin 3: A2; tri_state. */
  "A2": "3",
  /** Physical pin 4: A3; tri_state. */
  "A3": "4",
  /** Physical pin 5: A4; tri_state. */
  "A4": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: B4; tri_state. */
  "B4": "7",
  /** Physical pin 8: B3; tri_state. */
  "B3": "8",
  /** Physical pin 9: B2; tri_state. */
  "B2": "9",
  /** Physical pin 10: B1; tri_state. */
  "B1": "10",
  /** Physical pin 11: VCCB; power_in. */
  "VCCB": "11",
  /** Physical pin 12: ~{OE}; input. */
  "~{OE}": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0101DBV extends Component.withPins({
  /** Physical pin 1: V_{CCA}; power_in. */
  "V_{CCA}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; bidirectional. */
  "A": "3",
  /** Physical pin 4: B; bidirectional. */
  "B": "4",
  /** Physical pin 5: OE; input. */
  "OE": "5",
  /** Physical pin 6: V_{CCB}; power_in. */
  "V_{CCB}": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0101DCK extends Component.withPins({
  /** Physical pin 1: V_{CCA}; power_in. */
  "V_{CCA}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; bidirectional. */
  "A": "3",
  /** Physical pin 4: B; bidirectional. */
  "B": "4",
  /** Physical pin 5: OE; input. */
  "OE": "5",
  /** Physical pin 6: V_{CCB}; power_in. */
  "V_{CCB}": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0101DRL extends Component.withPins({
  /** Physical pin 1: V_{CCA}; power_in. */
  "V_{CCA}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: A; bidirectional. */
  "A": "3",
  /** Physical pin 4: B; bidirectional. */
  "B": "4",
  /** Physical pin 5: OE; input. */
  "OE": "5",
  /** Physical pin 6: V_{CCB}; power_in. */
  "V_{CCB}": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0101YZP extends Component.withPins({
  /** Physical pin A1: V_{CCA}; power_in. */
  "V_{CCA}": "A1",
  /** Physical pin A2: V_{CCB}; power_in. */
  "V_{CCB}": "A2",
  /** Physical pin B1: GND; power_in. */
  "GND": "B1",
  /** Physical pin B2: OE; input. */
  "OE": "B2",
  /** Physical pin C1: A; bidirectional. */
  "A": "C1",
  /** Physical pin C2: B; bidirectional. */
  "B": "C2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0102DCT extends Component.withPins({
  /** Physical pin 1: B2; bidirectional. */
  "B2": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCCA; power_in. */
  "VCCA": "3",
  /** Physical pin 4: A2; bidirectional. */
  "A2": "4",
  /** Physical pin 5: A1; bidirectional. */
  "A1": "5",
  /** Physical pin 6: OE; input. */
  "OE": "6",
  /** Physical pin 7: VCCB; power_in. */
  "VCCB": "7",
  /** Physical pin 8: B1; bidirectional. */
  "B1": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0102DCU extends Component.withPins({
  /** Physical pin 1: B2; bidirectional. */
  "B2": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCCA; power_in. */
  "VCCA": "3",
  /** Physical pin 4: A2; bidirectional. */
  "A2": "4",
  /** Physical pin 5: A1; bidirectional. */
  "A1": "5",
  /** Physical pin 6: OE; input. */
  "OE": "6",
  /** Physical pin 7: VCCB; power_in. */
  "VCCB": "7",
  /** Physical pin 8: B1; bidirectional. */
  "B1": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0102DQE extends Component.withPins({
  /** Physical pin 1: VCCA; power_in. */
  "VCCA": "1",
  /** Physical pin 2: A1; bidirectional. */
  "A1": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OE; input. */
  "OE": "5",
  /** Physical pin 6: B2; bidirectional. */
  "B2": "6",
  /** Physical pin 7: B1; bidirectional. */
  "B1": "7",
  /** Physical pin 8: VCCB; power_in. */
  "VCCB": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0102YZP extends Component.withPins({
  /** Physical pin A1: B2; bidirectional. */
  "B2": "A1",
  /** Physical pin A2: B1; bidirectional. */
  "B1": "A2",
  /** Physical pin B1: GND; power_in. */
  "GND": "B1",
  /** Physical pin B2: VCCB; power_in. */
  "VCCB": "B2",
  /** Physical pin C1: VCCA; power_in. */
  "VCCA": "C1",
  /** Physical pin C2: OE; input. */
  "OE": "C2",
  /** Physical pin D1: A2; bidirectional. */
  "A2": "D1",
  /** Physical pin D2: A1; bidirectional. */
  "A1": "D2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0104EPW extends Component.withPins({
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 1: V_{CCA}; power_in. */
  "V_{CCA}": "1",
  /** Physical pin 2: A1; bidirectional. */
  "A1": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OE; input. */
  "OE": "8",
  /** Physical pin 10: B4; bidirectional. */
  "B4": "10",
  /** Physical pin 11: B3; bidirectional. */
  "B3": "11",
  /** Physical pin 12: B2; bidirectional. */
  "B2": "12",
  /** Physical pin 13: B1; bidirectional. */
  "B1": "13",
  /** Physical pin 14: V_{CCB}; power_in. */
  "V_{CCB}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0104ED extends Component.withPins({
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 1: V_{CCA}; power_in. */
  "V_{CCA}": "1",
  /** Physical pin 2: A1; bidirectional. */
  "A1": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OE; input. */
  "OE": "8",
  /** Physical pin 10: B4; bidirectional. */
  "B4": "10",
  /** Physical pin 11: B3; bidirectional. */
  "B3": "11",
  /** Physical pin 12: B2; bidirectional. */
  "B2": "12",
  /** Physical pin 13: B1; bidirectional. */
  "B1": "13",
  /** Physical pin 14: V_{CCB}; power_in. */
  "V_{CCB}": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS0108EPW extends Component.withPins({
  /** Physical pin 1: A1; bidirectional. */
  "A1": "1",
  /** Physical pin 2: VCCA; power_in. */
  "VCCA": "2",
  /** Physical pin 3: A2; bidirectional. */
  "A2": "3",
  /** Physical pin 4: A3; bidirectional. */
  "A3": "4",
  /** Physical pin 5: A4; bidirectional. */
  "A4": "5",
  /** Physical pin 6: A5; bidirectional. */
  "A5": "6",
  /** Physical pin 7: A6; bidirectional. */
  "A6": "7",
  /** Physical pin 8: A7; bidirectional. */
  "A7": "8",
  /** Physical pin 9: A8; bidirectional. */
  "A8": "9",
  /** Physical pin 10: OE; input. */
  "OE": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: B8; bidirectional. */
  "B8": "12",
  /** Physical pin 13: B7; bidirectional. */
  "B7": "13",
  /** Physical pin 14: B6; bidirectional. */
  "B6": "14",
  /** Physical pin 15: B5; bidirectional. */
  "B5": "15",
  /** Physical pin 16: B4; bidirectional. */
  "B4": "16",
  /** Physical pin 17: B3; bidirectional. */
  "B3": "17",
  /** Physical pin 18: B2; bidirectional. */
  "B2": "18",
  /** Physical pin 19: VCCB; power_in. */
  "VCCB": "19",
  /** Physical pin 20: B1; bidirectional. */
  "B1": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXS02612RTW extends Component.withPins({
  /** Physical pin 1: DAT2A; bidirectional. */
  "DAT2A": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: DAT3A; bidirectional. */
  "DAT3A": "3",
  /** Physical pin 4: CMDA; bidirectional. */
  "CMDA": "4",
  /** Physical pin 5: V_{CCA}; power_in. */
  "V_{CCA}": "5",
  /** Physical pin 6: DAT0A; bidirectional. */
  "DAT0A": "6",
  /** Physical pin 7: DAT1A; bidirectional. */
  "DAT1A": "7",
  /** Physical pin 8: DAT2_{B1}; bidirectional. */
  "DAT2_{B1}": "8",
  /** Physical pin 9: CLKA; input. */
  "CLKA": "9",
  /** Physical pin 10: DAT3_{B1}; bidirectional. */
  "DAT3_{B1}": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: CMD_{B1}; bidirectional. */
  "CMD_{B1}": "12",
  /** Physical pin 13: CLK_{B1}; output. */
  "CLK_{B1}": "13",
  /** Physical pin 14: DAT0_{B1}; bidirectional. */
  "DAT0_{B1}": "14",
  /** Physical pin 15: DAT1_{B1}; bidirectional. */
  "DAT1_{B1}": "15",
  /** Physical pin 16: DAT1_{B0}; bidirectional. */
  "DAT1_{B0}": "16",
  /** Physical pin 17: VCC_{B1}; power_in. */
  "VCC_{B1}": "17",
  /** Physical pin 18: DAT0_{B0}; bidirectional. */
  "DAT0_{B0}": "18",
  /** Physical pin 19: CLK_{B0}; output. */
  "CLK_{B0}": "19",
  /** Physical pin 20: CMD_{B0}; bidirectional. */
  "CMD_{B0}": "20",
  /** Physical pin 21: VCC_{B0}; power_in. */
  "VCC_{B0}": "21",
  /** Physical pin 22: DAT3_{B0}; bidirectional. */
  "DAT3_{B0}": "22",
  /** Physical pin 23: DAT2_{B0}; bidirectional. */
  "DAT2_{B0}": "23",
  /** Physical pin 24: SEL; input. */
  "SEL": "24",
  /** Physical pin 25: EPAD; passive. */
  "EPAD": "25",
}) {
  override schema = "Logic_LevelTranslator:TXS02612RTW";
  override referencePrefix = "U";
}

