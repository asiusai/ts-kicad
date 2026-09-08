// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * PA28F400BX-T/B Flash EEProm 4-MBIT (256Kx16bits, 512Kx8bits) 5V, 12V Prog
 *
 * KiCad symbol: `Memory_Flash:28F400`. Reference prefix: `U`.
 * Footprint filters: PSOP*.
 * @see http://download.intel.com/design/archives/flash/docs/29045101.pdf
 * Keywords: EEPROM FLASH 4MO.
 * Default footprint: Package_SO:PSOP-44_16.9x27.17mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _28F400 extends Component.withPins({
  /** Physical pin 1: VPP; power_in. */
  "VPP": "1",
  /** Physical pin 2: DU; no_connect. */
  "DU": "2",
  /** Physical pin 3: A17; input. */
  "A17": "3",
  /** Physical pin 4: A7; input. */
  "A7": "4",
  /** Physical pin 5: A6; input. */
  "A6": "5",
  /** Physical pin 6: A5; input. */
  "A5": "6",
  /** Physical pin 7: A4; input. */
  "A4": "7",
  /** Physical pin 8: A3; input. */
  "A3": "8",
  /** Physical pin 9: A2; input. */
  "A2": "9",
  /** Physical pin 10: A1; input. */
  "A1": "10",
  /** Physical pin 11: A0; input. */
  "A0": "11",
  /** Physical pin 12: CE; input. */
  "CE": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: OE; input. */
  "OE": "14",
  /** Physical pin 15: D0; tri_state. */
  "D0": "15",
  /** Physical pin 16: D8; tri_state. */
  "D8": "16",
  /** Physical pin 17: D1; tri_state. */
  "D1": "17",
  /** Physical pin 18: D9; tri_state. */
  "D9": "18",
  /** Physical pin 19: D2; tri_state. */
  "D2": "19",
  /** Physical pin 20: D10; tri_state. */
  "D10": "20",
  /** Physical pin 21: D3; tri_state. */
  "D3": "21",
  /** Physical pin 22: D11; tri_state. */
  "D11": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: D4; tri_state. */
  "D4": "24",
  /** Physical pin 25: D12; tri_state. */
  "D12": "25",
  /** Physical pin 26: D5; tri_state. */
  "D5": "26",
  /** Physical pin 27: D13; tri_state. */
  "D13": "27",
  /** Physical pin 28: D6; tri_state. */
  "D6": "28",
  /** Physical pin 29: D14; tri_state. */
  "D14": "29",
  /** Physical pin 30: D7; tri_state. */
  "D7": "30",
  /** Physical pin 31: A-1/D15; tri_state. */
  "A-1/D15": "31",
  /** Physical pin 32: GND; power_in. */
  "GND_32": "32",
  /** Physical pin 33: BYTE; input. */
  "BYTE": "33",
  /** Physical pin 34: A16; input. */
  "A16": "34",
  /** Physical pin 35: A15; input. */
  "A15": "35",
  /** Physical pin 36: A14; input. */
  "A14": "36",
  /** Physical pin 37: A13; input. */
  "A13": "37",
  /** Physical pin 38: A12; input. */
  "A12": "38",
  /** Physical pin 39: A11; input. */
  "A11": "39",
  /** Physical pin 40: A10; input. */
  "A10": "40",
  /** Physical pin 41: A9; input. */
  "A9": "41",
  /** Physical pin 42: A8; input. */
  "A8": "42",
  /** Physical pin 43: WE; input. */
  "WE": "43",
  /** Physical pin 44: PR; input. */
  "PR": "44",
}) {
  override schema = "Memory_Flash:28F400";
  override referencePrefix = "U";
}

/**
 * Flash EEProm 128Ko (TSOP 32 pack.) 5V prog
 *
 * KiCad symbol: `Memory_Flash:29F010-TSOP-SP`. Reference prefix: `U`.
 * Keywords: EEPROM FLASH 128KO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _29F010_TSOP_SP extends Component.withPins({
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: A14; input. */
  "A14": "5",
  /** Physical pin 7: WE; input. */
  "WE": "7",
  /** Physical pin 8: VCC; input. */
  "VCC": "8",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A15; input. */
  "A15": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: D0; tri_state. */
  "D0": "21",
  /** Physical pin 22: D1; tri_state. */
  "D1": "22",
  /** Physical pin 23: D2; tri_state. */
  "D2": "23",
  /** Physical pin 24: GND; input. */
  "GND": "24",
  /** Physical pin 25: D3; tri_state. */
  "D3": "25",
  /** Physical pin 26: D4; tri_state. */
  "D4": "26",
  /** Physical pin 27: D5; tri_state. */
  "D5": "27",
  /** Physical pin 28: D6; tri_state. */
  "D6": "28",
  /** Physical pin 29: D7; tri_state. */
  "D7": "29",
  /** Physical pin 30: CE; input. */
  "CE": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: OE; input. */
  "OE": "32",
}) {
  override schema = "Memory_Flash:29F010-TSOP-SP";
  override referencePrefix = "U";
}

/**
 * Flash EEProm 512PP (TSOP 32) 3,3V
 *
 * KiCad symbol: `Memory_Flash:29W040`. Reference prefix: `U`.
 * Keywords: EEPROM FLASH 512KO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _29W040 extends Component.withPins({
  /** Physical pin 1: A11; input. */
  "A11": "1",
  /** Physical pin 2: A9; input. */
  "A9": "2",
  /** Physical pin 3: A8; input. */
  "A8": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: A14; input. */
  "A14": "5",
  /** Physical pin 6: A17; input. */
  "A17": "6",
  /** Physical pin 7: WE; input. */
  "WE": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: A18; input. */
  "A18": "9",
  /** Physical pin 10: A16; input. */
  "A16": "10",
  /** Physical pin 11: A15; input. */
  "A15": "11",
  /** Physical pin 12: A12; input. */
  "A12": "12",
  /** Physical pin 13: A7; input. */
  "A7": "13",
  /** Physical pin 14: A6; input. */
  "A6": "14",
  /** Physical pin 15: A5; input. */
  "A5": "15",
  /** Physical pin 16: A4; input. */
  "A4": "16",
  /** Physical pin 17: A3; input. */
  "A3": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: A1; input. */
  "A1": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: D0; tri_state. */
  "D0": "21",
  /** Physical pin 22: D1; tri_state. */
  "D1": "22",
  /** Physical pin 23: D2; tri_state. */
  "D2": "23",
  /** Physical pin 24: GND; power_in. */
  "GND": "24",
  /** Physical pin 25: D3; tri_state. */
  "D3": "25",
  /** Physical pin 26: D4; tri_state. */
  "D4": "26",
  /** Physical pin 27: D5; tri_state. */
  "D5": "27",
  /** Physical pin 28: D6; tri_state. */
  "D6": "28",
  /** Physical pin 29: D7; tri_state. */
  "D7": "29",
  /** Physical pin 30: CE; input. */
  "CE": "30",
  /** Physical pin 31: A10; input. */
  "A10": "31",
  /** Physical pin 32: OE; input. */
  "OE": "32",
}) {
  override schema = "Memory_Flash:29W040";
  override referencePrefix = "U";
}

/**
 * 4-Mbit (512k x 8-bit / 256k x 16-bit) CMOS 5.0 Volt-only Boot Sector Flash Memory, SOP-44
 *
 * KiCad symbol: `Memory_Flash:AM29F400Bx-xxSx`. Reference prefix: `U`.
 * Footprint filters: SO*13.*28.*P1.27mm*.
 * @see https://www.mouser.com/datasheet/2/380/AM29F400B_EOL_21505e8-9219.pdf
 * Keywords: FLASH 4Mbit.
 * Default footprint: Package_SO:SOP-44_13.3x28.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM29F400Bx_xxSx extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: RY/~{BY}; open_collector. */
  "RY/~{BY}": "2",
  /** Physical pin 3: A17; input. */
  "A17": "3",
  /** Physical pin 4: A7; input. */
  "A7": "4",
  /** Physical pin 5: A6; input. */
  "A6": "5",
  /** Physical pin 6: A5; input. */
  "A5": "6",
  /** Physical pin 7: A4; input. */
  "A4": "7",
  /** Physical pin 8: A3; input. */
  "A3": "8",
  /** Physical pin 9: A2; input. */
  "A2": "9",
  /** Physical pin 10: A1; input. */
  "A1": "10",
  /** Physical pin 11: A0; input. */
  "A0": "11",
  /** Physical pin 12: ~{CE}; input. */
  "~{CE}": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS_13": "13",
  /** Physical pin 14: ~{OE}; input. */
  "~{OE}": "14",
  /** Physical pin 15: DQ0; tri_state. */
  "DQ0": "15",
  /** Physical pin 16: DQ8; tri_state. */
  "DQ8": "16",
  /** Physical pin 17: DQ1; tri_state. */
  "DQ1": "17",
  /** Physical pin 18: DQ9; tri_state. */
  "DQ9": "18",
  /** Physical pin 19: DQ2; tri_state. */
  "DQ2": "19",
  /** Physical pin 20: DQ10; tri_state. */
  "DQ10": "20",
  /** Physical pin 21: DQ3; tri_state. */
  "DQ3": "21",
  /** Physical pin 22: DQ11; tri_state. */
  "DQ11": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: DQ4; tri_state. */
  "DQ4": "24",
  /** Physical pin 25: DQ12; tri_state. */
  "DQ12": "25",
  /** Physical pin 26: DQ5; tri_state. */
  "DQ5": "26",
  /** Physical pin 27: DQ13; tri_state. */
  "DQ13": "27",
  /** Physical pin 28: DQ6; tri_state. */
  "DQ6": "28",
  /** Physical pin 29: DQ14; tri_state. */
  "DQ14": "29",
  /** Physical pin 30: DQ7; tri_state. */
  "DQ7": "30",
  /** Physical pin 31: DQ15/A-1; tri_state. */
  "DQ15/A-1": "31",
  /** Physical pin 32: VSS; passive. */
  "VSS_32": "32",
  /** Physical pin 33: ~{BYTE}; input. */
  "~{BYTE}": "33",
  /** Physical pin 34: A16; input. */
  "A16": "34",
  /** Physical pin 35: A15; input. */
  "A15": "35",
  /** Physical pin 36: A14; input. */
  "A14": "36",
  /** Physical pin 37: A13; input. */
  "A13": "37",
  /** Physical pin 38: A12; input. */
  "A12": "38",
  /** Physical pin 39: A11; input. */
  "A11": "39",
  /** Physical pin 40: A10; input. */
  "A10": "40",
  /** Physical pin 41: A9; input. */
  "A9": "41",
  /** Physical pin 42: A8; input. */
  "A8": "42",
  /** Physical pin 43: ~{WE}; input. */
  "~{WE}": "43",
  /** Physical pin 44: ~{RESET}; input. */
  "~{RESET}": "44",
}) {
  override schema = "Memory_Flash:AM29F400Bx-xxSx";
  override referencePrefix = "U";
}

/**
 * 4-Mbit (512k x 8-bit / 256k x 16-bit) CMOS 5.0 Volt-only Boot Sector Flash Memory, SOP-44
 *
 * KiCad symbol: `Memory_Flash:AM29F400BB-90SC`. Reference prefix: `U`.
 * Footprint filters: SO*13.*28.*P1.27mm*.
 * @see https://www.mouser.com/datasheet/2/380/AM29F400B_EOL_21505e8-9219.pdf
 * Keywords: FLASH 4Mbit.
 * Default footprint: Package_SO:SOP-44_13.3x28.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM29F400BB_90SC extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: RY/~{BY}; open_collector. */
  "RY/~{BY}": "2",
  /** Physical pin 3: A17; input. */
  "A17": "3",
  /** Physical pin 4: A7; input. */
  "A7": "4",
  /** Physical pin 5: A6; input. */
  "A6": "5",
  /** Physical pin 6: A5; input. */
  "A5": "6",
  /** Physical pin 7: A4; input. */
  "A4": "7",
  /** Physical pin 8: A3; input. */
  "A3": "8",
  /** Physical pin 9: A2; input. */
  "A2": "9",
  /** Physical pin 10: A1; input. */
  "A1": "10",
  /** Physical pin 11: A0; input. */
  "A0": "11",
  /** Physical pin 12: ~{CE}; input. */
  "~{CE}": "12",
  /** Physical pin 13: VSS; power_in. */
  "VSS_13": "13",
  /** Physical pin 14: ~{OE}; input. */
  "~{OE}": "14",
  /** Physical pin 15: DQ0; tri_state. */
  "DQ0": "15",
  /** Physical pin 16: DQ8; tri_state. */
  "DQ8": "16",
  /** Physical pin 17: DQ1; tri_state. */
  "DQ1": "17",
  /** Physical pin 18: DQ9; tri_state. */
  "DQ9": "18",
  /** Physical pin 19: DQ2; tri_state. */
  "DQ2": "19",
  /** Physical pin 20: DQ10; tri_state. */
  "DQ10": "20",
  /** Physical pin 21: DQ3; tri_state. */
  "DQ3": "21",
  /** Physical pin 22: DQ11; tri_state. */
  "DQ11": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC": "23",
  /** Physical pin 24: DQ4; tri_state. */
  "DQ4": "24",
  /** Physical pin 25: DQ12; tri_state. */
  "DQ12": "25",
  /** Physical pin 26: DQ5; tri_state. */
  "DQ5": "26",
  /** Physical pin 27: DQ13; tri_state. */
  "DQ13": "27",
  /** Physical pin 28: DQ6; tri_state. */
  "DQ6": "28",
  /** Physical pin 29: DQ14; tri_state. */
  "DQ14": "29",
  /** Physical pin 30: DQ7; tri_state. */
  "DQ7": "30",
  /** Physical pin 31: DQ15/A-1; tri_state. */
  "DQ15/A-1": "31",
  /** Physical pin 32: VSS; passive. */
  "VSS_32": "32",
  /** Physical pin 33: ~{BYTE}; input. */
  "~{BYTE}": "33",
  /** Physical pin 34: A16; input. */
  "A16": "34",
  /** Physical pin 35: A15; input. */
  "A15": "35",
  /** Physical pin 36: A14; input. */
  "A14": "36",
  /** Physical pin 37: A13; input. */
  "A13": "37",
  /** Physical pin 38: A12; input. */
  "A12": "38",
  /** Physical pin 39: A11; input. */
  "A11": "39",
  /** Physical pin 40: A10; input. */
  "A10": "40",
  /** Physical pin 41: A9; input. */
  "A9": "41",
  /** Physical pin 42: A8; input. */
  "A8": "42",
  /** Physical pin 43: ~{WE}; input. */
  "~{WE}": "43",
  /** Physical pin 44: ~{RESET}; input. */
  "~{RESET}": "44",
}) {
  override schema = "Memory_Flash:AM29F400BB-90SC";
  override referencePrefix = "U";
}

/**
 * 4-Mbit (512k x 8-bit / 256k x 16-bit) CMOS 5.0 Volt-only Boot Sector Flash Memory, TSOP-48
 *
 * KiCad symbol: `Memory_Flash:AM29F400Bx-xxEx`. Reference prefix: `U`.
 * Footprint filters: TSOP*18.*12*P0.5mm*.
 * @see https://www.mouser.com/datasheet/2/380/AM29F400B_EOL_21505e8-9219.pdf
 * Keywords: FLASH 4Mbit.
 * Default footprint: Package_SO:TSOP-I-48_18.4x12mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM29F400Bx_xxEx extends Component.withPins({
  /** Physical pin 5: A11; input. */
  "A11": "5",
  /** Physical pin 1: A15; input. */
  "A15": "1",
  /** Physical pin 2: A14; input. */
  "A14": "2",
  /** Physical pin 3: A13; input. */
  "A13": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 6: A10; input. */
  "A10": "6",
  /** Physical pin 7: A9; input. */
  "A9": "7",
  /** Physical pin 8: A8; input. */
  "A8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: ~{WE}; input. */
  "~{WE}": "11",
  /** Physical pin 12: ~{RESET}; input. */
  "~{RESET}": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: RY/~{BY}; open_collector. */
  "RY/~{BY}": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: A17; input. */
  "A17": "17",
  /** Physical pin 18: A7; input. */
  "A7": "18",
  /** Physical pin 19: A6; input. */
  "A6": "19",
  /** Physical pin 20: A5; input. */
  "A5": "20",
  /** Physical pin 21: A4; input. */
  "A4": "21",
  /** Physical pin 22: A3; input. */
  "A3": "22",
  /** Physical pin 23: A2; input. */
  "A2": "23",
  /** Physical pin 24: A1; input. */
  "A1": "24",
  /** Physical pin 25: A0; input. */
  "A0": "25",
  /** Physical pin 26: ~{CE}; input. */
  "~{CE}": "26",
  /** Physical pin 27: VSS; power_in. */
  "VSS_27": "27",
  /** Physical pin 28: ~{OE}; input. */
  "~{OE}": "28",
  /** Physical pin 29: DQ0; tri_state. */
  "DQ0": "29",
  /** Physical pin 30: DQ8; tri_state. */
  "DQ8": "30",
  /** Physical pin 31: DQ1; tri_state. */
  "DQ1": "31",
  /** Physical pin 32: DQ9; tri_state. */
  "DQ9": "32",
  /** Physical pin 33: DQ2; tri_state. */
  "DQ2": "33",
  /** Physical pin 34: DQ10; tri_state. */
  "DQ10": "34",
  /** Physical pin 35: DQ3; tri_state. */
  "DQ3": "35",
  /** Physical pin 36: DQ11; tri_state. */
  "DQ11": "36",
  /** Physical pin 37: VCC; power_in. */
  "VCC": "37",
  /** Physical pin 38: DQ4; tri_state. */
  "DQ4": "38",
  /** Physical pin 39: DQ12; tri_state. */
  "DQ12": "39",
  /** Physical pin 40: DQ5; tri_state. */
  "DQ5": "40",
  /** Physical pin 41: DQ13; tri_state. */
  "DQ13": "41",
  /** Physical pin 42: DQ6; tri_state. */
  "DQ6": "42",
  /** Physical pin 43: DQ14; tri_state. */
  "DQ14": "43",
  /** Physical pin 44: DQ7; tri_state. */
  "DQ7": "44",
  /** Physical pin 45: DQ15/A-1; tri_state. */
  "DQ15/A-1": "45",
  /** Physical pin 46: VSS; passive. */
  "VSS_46": "46",
  /** Physical pin 47: ~{BYTE}; input. */
  "~{BYTE}": "47",
  /** Physical pin 48: A16; input. */
  "A16": "48",
}) {
  override schema = "Memory_Flash:AM29F400Bx-xxEx";
  override referencePrefix = "U";
}

/**
 * 128 Megabit (8 M x 16-Bit/4 M x 32-Bit), Simultaneous Operation Flash Memory with VersatileIO™ Control
 *
 * KiCad symbol: `Memory_Flash:AM29PDL128G`. Reference prefix: `U`.
 * Footprint filters: BGA80_1mm_15X10.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM29PDL128G extends Component.withPins({
  /** Physical pin A1: A5; input. */
  "A5": "A1",
  /** Physical pin A2: A4; input. */
  "A4": "A2",
  /** Physical pin A3: A2; input. */
  "A2": "A3",
  /** Physical pin A4: RY/BY#; output. */
  "RY/BY#": "A4",
  /** Physical pin A6: A21; input. */
  "A21": "A6",
  /** Physical pin A7: WORD#; input. */
  "WORD#": "A7",
  /** Physical pin A8: OE#; input. */
  "OE#": "A8",
  /** Physical pin B1: DQ0; bidirectional. */
  "DQ0": "B1",
  /** Physical pin B2: VCC; power_in. */
  "VCC_B2": "B2",
  /** Physical pin B3: A3; input. */
  "A3": "B3",
  /** Physical pin B4: A0; input. */
  "A0": "B4",
  /** Physical pin B5: WP#; input. */
  "WP#": "B5",
  /** Physical pin B6: A20; input. */
  "A20": "B6",
  /** Physical pin B7: CE#; input. */
  "CE#": "B7",
  /** Physical pin B8: VSS; power_in. */
  "VSS_B8": "B8",
  /** Physical pin C1: DQ17; bidirectional. */
  "DQ17": "C1",
  /** Physical pin C2: DQ1; bidirectional. */
  "DQ1": "C2",
  /** Physical pin C3: DQ16; bidirectional. */
  "DQ16": "C3",
  /** Physical pin C4: A1; input. */
  "A1": "C4",
  /** Physical pin C5: WE#; input. */
  "WE#": "C5",
  /** Physical pin C6: DQ31/A-1; bidirectional. */
  "DQ31/A-1": "C6",
  /** Physical pin C7: DQ15; bidirectional. */
  "DQ15": "C7",
  /** Physical pin C8: DQ30; bidirectional. */
  "DQ30": "C8",
  /** Physical pin D1: DQ2; bidirectional. */
  "DQ2": "D1",
  /** Physical pin D2: VIO; input. */
  "VIO_D2": "D2",
  /** Physical pin D3: VSS; power_in. */
  "VSS_D3": "D3",
  /** Physical pin D4: DQ18; bidirectional. */
  "DQ18": "D4",
  /** Physical pin D5: DQ29; bidirectional. */
  "DQ29": "D5",
  /** Physical pin D6: DQ14; bidirectional. */
  "DQ14": "D6",
  /** Physical pin D7: VSS; power_in. */
  "VSS_D7": "D7",
  /** Physical pin D8: VIO; input. */
  "VIO_D8": "D8",
  /** Physical pin E1: DQ19; bidirectional. */
  "DQ19": "E1",
  /** Physical pin E2: DQ3; bidirectional. */
  "DQ3": "E2",
  /** Physical pin E3: DQ4; bidirectional. */
  "DQ4": "E3",
  /** Physical pin E4: RST#; input. */
  "RST#": "E4",
  /** Physical pin E5: ACC; input. */
  "ACC": "E5",
  /** Physical pin E6: DQ12; bidirectional. */
  "DQ12": "E6",
  /** Physical pin E7: DQ13; bidirectional. */
  "DQ13": "E7",
  /** Physical pin E8: DQ28; bidirectional. */
  "DQ28": "E8",
  /** Physical pin F1: DQ5; bidirectional. */
  "DQ5": "F1",
  /** Physical pin F2: DQ21; bidirectional. */
  "DQ21": "F2",
  /** Physical pin F3: DQ20; bidirectional. */
  "DQ20": "F3",
  /** Physical pin F6: DQ27; bidirectional. */
  "DQ27": "F6",
  /** Physical pin F7: DQ26; bidirectional. */
  "DQ26": "F7",
  /** Physical pin F8: DQ11; bidirectional. */
  "DQ11": "F8",
  /** Physical pin G1: VIO; input. */
  "VIO_G1": "G1",
  /** Physical pin G2: DQ6; bidirectional. */
  "DQ6": "G2",
  /** Physical pin G3: DQ22; bidirectional. */
  "DQ22": "G3",
  /** Physical pin G4: VSS; passive. */
  "VSS_G4": "G4",
  /** Physical pin G5: DQ10; bidirectional. */
  "DQ10": "G5",
  /** Physical pin G6: DQ25; bidirectional. */
  "DQ25": "G6",
  /** Physical pin G7: VIO; input. */
  "VIO_G7": "G7",
  /** Physical pin G8: VSS; power_in. */
  "VSS_G8": "G8",
  /** Physical pin H1: DQ7; bidirectional. */
  "DQ7": "H1",
  /** Physical pin H2: DQ23; bidirectional. */
  "DQ23": "H2",
  /** Physical pin H3: VSS; power_in. */
  "VSS_H3": "H3",
  /** Physical pin H4: A12; input. */
  "A12": "H4",
  /** Physical pin H5: A14; input. */
  "A14": "H5",
  /** Physical pin H6: DQ8; bidirectional. */
  "DQ8": "H6",
  /** Physical pin H7: DQ24; bidirectional. */
  "DQ24": "H7",
  /** Physical pin H8: DQ9; bidirectional. */
  "DQ9": "H8",
  /** Physical pin J1: A6; input. */
  "A6": "J1",
  /** Physical pin J2: A7; input. */
  "A7": "J2",
  /** Physical pin J3: A10; input. */
  "A10": "J3",
  /** Physical pin J5: A13; input. */
  "A13": "J5",
  /** Physical pin J6: A16; input. */
  "A16": "J6",
  /** Physical pin J7: A19; input. */
  "A19": "J7",
  /** Physical pin J8: VCC; power_in. */
  "VCC_J8": "J8",
  /** Physical pin K1: A8; input. */
  "A8": "K1",
  /** Physical pin K2: A9; input. */
  "A9": "K2",
  /** Physical pin K3: A11; input. */
  "A11": "K3",
  /** Physical pin K6: A15; input. */
  "A15": "K6",
  /** Physical pin K7: A17; input. */
  "A17": "K7",
  /** Physical pin K8: A18; input. */
  "A18": "K8",
}) {
  override schema = "Memory_Flash:AM29PDL128G";
  override referencePrefix = "U";
}

/**
 * 4-Mbit, 1.65V Minimum SPI Serial Flash Memory with Dual-I/O, WLCSP-8
 *
 * KiCad symbol: `Memory_Flash:AT25DF041x-UxN-x`. Reference prefix: `U`.
 * Footprint filters: WLCSP?8*1.58x1.63*Layout3x5*P0.35x0.4mm*Ball0.25mm*.
 * @see http://www.adestotech.com/wp-content/uploads/DS-AT25DF041B_040.pdf
 * Keywords: SPI DSPI 4Mbit 1.65V.
 * Default footprint: Package_CSP:WLCSP-8_1.58x1.63x0.35mm_Layout3x5_P0.35x0.4mm_Ball0.25mm_Pad0.25mm_NSMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT25DF041x_UxN_x extends Component.withPins({
  /** Physical pin A1: VCC; power_in. */
  "VCC": "A1",
  /** Physical pin A3: ~{CS}; input. */
  "~{CS}": "A3",
  /** Physical pin B2: GND; power_in. */
  "GND": "B2",
  /** Physical pin C1: ~{HOLD}; bidirectional. */
  "~{HOLD}": "C1",
  /** Physical pin C3: SO/IO1; bidirectional. */
  "SO/IO1": "C3",
  /** Physical pin D2: SI/IO0; bidirectional. */
  "SI/IO0": "D2",
  /** Physical pin E1: SCK; input. */
  "SCK": "E1",
  /** Physical pin E3: ~{WP}; bidirectional. */
  "~{WP}": "E3",
}) {
  override schema = "Memory_Flash:AT25DF041x-UxN-x";
  override referencePrefix = "U";
}

/**
 * 8-Mbit, 2.5V Minimum SPI Serial Flash Memory with Dual-I/O and Quad-I/O Support, SOIC-8
 *
 * KiCad symbol: `Memory_Flash:AT25SF081-SSHD-X`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9mm*P1.27mm*.
 * @see https://www.adestotech.com/wp-content/uploads/DS-AT25SF081_045.pdf
 * Keywords: SPI DSPI QSPI 8Mbit 2.5V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT25SF081_SSHD_X extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/IO1; bidirectional. */
  "SO/IO1": "2",
  /** Physical pin 3: ~{WP}/IO2; bidirectional. */
  "~{WP}/IO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/IO0; bidirectional. */
  "SI/IO0": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}/IO3; bidirectional. */
  "~{HOLD}/IO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:AT25SF081-SSHD-X";
  override referencePrefix = "U";
}

/**
 * 4-Mbit, 2.5V Minimum SPI Serial Flash Memory with Dual-I/O and Quad-I/O Support, SOIC-8
 *
 * KiCad symbol: `Memory_Flash:AT25SF041B-SSHD-X`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9mm*P1.27mm*, SOIC?8*5.3x5.3mm*P1.27mm*.
 * @see https://www.renesas.com/en/document/dst/at25sf041b-datasheet?r=1608766
 * Keywords: SPI DSPI QSPI 4Mbit 2.5V.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT25SF041B_SSHD_X extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/IO1; bidirectional. */
  "SO/IO1": "2",
  /** Physical pin 3: ~{WP}/IO2; bidirectional. */
  "~{WP}/IO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/IO0; bidirectional. */
  "SI/IO0": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}/IO3; bidirectional. */
  "~{HOLD}/IO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:AT25SF041B-SSHD-X";
  override referencePrefix = "U";
}

/**
 * 8-Mbit, 2.3V Minimum SPI Serial Flash Memory with Dual-I/O and Quad-I/O Support, SOIC-8
 *
 * KiCad symbol: `Memory_Flash:AT25SF081-SSHF-X`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9mm*P1.27mm*.
 * @see https://www.adestotech.com/wp-content/uploads/DS-AT25SF081_045.pdf
 * Keywords: SPI DSPI QSPI 8Mbit 2.3V.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT25SF081_SSHF_X extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/IO1; bidirectional. */
  "SO/IO1": "2",
  /** Physical pin 3: ~{WP}/IO2; bidirectional. */
  "~{WP}/IO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/IO0; bidirectional. */
  "SI/IO0": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}/IO3; bidirectional. */
  "~{HOLD}/IO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:AT25SF081-SSHF-X";
  override referencePrefix = "U";
}

/**
 * 8-Mbit, 2.5V Minimum SPI Serial Flash Memory with Dual-I/O and Quad-I/O Support, TSSOP-8
 *
 * KiCad symbol: `Memory_Flash:AT25SF081-XMHD-X`. Reference prefix: `U`.
 * Footprint filters: TSSOP?8*4.4x3mm*P0.65mm*.
 * @see https://www.adestotech.com/wp-content/uploads/DS-AT25SF081_045.pdf
 * Keywords: SPI DSPI QSPI 8Mbit 2.5V.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT25SF081_XMHD_X extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/IO1; bidirectional. */
  "SO/IO1": "2",
  /** Physical pin 3: ~{WP}/IO2; bidirectional. */
  "~{WP}/IO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/IO0; bidirectional. */
  "SI/IO0": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}/IO3; bidirectional. */
  "~{HOLD}/IO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:AT25SF081-XMHD-X";
  override referencePrefix = "U";
}

/**
 * 8-Mbit, 2.3V Minimum SPI Serial Flash Memory with Dual-I/O and Quad-I/O Support, TSSOP-8
 *
 * KiCad symbol: `Memory_Flash:AT25SF081-XMHF-X`. Reference prefix: `U`.
 * Footprint filters: TSSOP?8*4.4x3mm*P0.65mm*.
 * @see https://www.adestotech.com/wp-content/uploads/DS-AT25SF081_045.pdf
 * Keywords: SPI DSPI QSPI 8Mbit 2.3V.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT25SF081_XMHF_X extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/IO1; bidirectional. */
  "SO/IO1": "2",
  /** Physical pin 3: ~{WP}/IO2; bidirectional. */
  "~{WP}/IO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/IO0; bidirectional. */
  "SI/IO0": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}/IO3; bidirectional. */
  "~{HOLD}/IO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:AT25SF081-XMHF-X";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, 1.7V 2.5V Minimum SPI Serial Flash Memory with Dual-I/O and Quad-I/O Support, WLCSP-8
 *
 * KiCad symbol: `Memory_Flash:AT25SL321-U`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.551x2.284mm*Layout2x4*P0.5mm*.
 * @see https://www.adestotech.com/wp-content/uploads/AT25SL321_112.pdf
 * Keywords: SPI DSPI QSPI 32Mbit 1.7V.
 * Default footprint: Package_CSP:WLCSP-8_1.551x2.284mm_Layout2x4_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT25SL321_U extends Component.withPins({
  /** Physical pin A1: VCC; power_in. */
  "VCC": "A1",
  /** Physical pin A2: ~{CS}; input. */
  "~{CS}": "A2",
  /** Physical pin B1: ~{HOLD}/IO3; bidirectional. */
  "~{HOLD}/IO3": "B1",
  /** Physical pin B2: SO/IO1; bidirectional. */
  "SO/IO1": "B2",
  /** Physical pin C1: SCK; input. */
  "SCK": "C1",
  /** Physical pin C2: ~{WP}/IO2; bidirectional. */
  "~{WP}/IO2": "C2",
  /** Physical pin D1: SI/IO0; bidirectional. */
  "SI/IO0": "D1",
  /** Physical pin D2: GND; power_in. */
  "GND": "D2",
}) {
  override schema = "Memory_Flash:AT25SL321-U";
  override referencePrefix = "U";
}

/**
 * 16Mb Serial DataFlash, 2.7V Vcc, PLCC-32
 *
 * KiCad symbol: `Memory_Flash:AT45DB161-JC`. Reference prefix: `U`.
 * Footprint filters: PLCC?32*11.4x14.0mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc0807.pdf
 * Keywords: Atmel DataFlash.
 * Default footprint: Package_LCC:PLCC-32_11.4x14.0mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT45DB161_JC extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 27: RDY/~{BUSY}; output. */
  "RDY/~{BUSY}": "27",
  /** Physical pin 28: ~{RESET}; input. */
  "~{RESET}": "28",
  /** Physical pin 29: ~{WP}; input. */
  "~{WP}": "29",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
}) {
  override schema = "Memory_Flash:AT45DB161-JC";
  override referencePrefix = "U";
}

/**
 * 16Mb Serial DataFlash, 2.7V Vcc, SOIC-28
 *
 * KiCad symbol: `Memory_Flash:AT45DB161-RC`. Reference prefix: `U`.
 * Footprint filters: SOIC?28*8.7x18.25mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc0807.pdf
 * Keywords: Atmel DataFlash.
 * Default footprint: Package_SO:SOIC-28W_8.7x18.25mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT45DB161_RC extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 23: RDY/~{BUSY}; output. */
  "RDY/~{BUSY}": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: ~{WP}; input. */
  "~{WP}": "25",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_Flash:AT45DB161-RC";
  override referencePrefix = "U";
}

/**
 * 16Mb Serial DataFlash, 2.7V Vcc, TSOP-28
 *
 * KiCad symbol: `Memory_Flash:AT45DB161-TC`. Reference prefix: `U`.
 * Footprint filters: TSOP?28*11.8x8mm*P0.55mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc0807.pdf
 * Keywords: Atmel DataFlash.
 * Default footprint: Package_SO:TSOP-28_11.8x8mm_P0.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT45DB161_TC extends Component.withPins({
  /** Physical pin 1: RDY/~{BUSY}; output. */
  "RDY/~{BUSY}": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: SI; input. */
  "SI": "13",
  /** Physical pin 14: SO; output. */
  "SO": "14",
}) {
  override schema = "Memory_Flash:AT45DB161-TC";
  override referencePrefix = "U";
}

/**
 * 16Mb Serial DataFlash, 2.7V Vcc, SOIC-28
 *
 * KiCad symbol: `Memory_Flash:AT45DB161B-RC`. Reference prefix: `U`.
 * Footprint filters: SOIC?28*8.7x18.25mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc2224.pdf
 * Keywords: Atmel DataFlash.
 * Default footprint: Package_SO:SOIC-28W_8.7x18.25mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT45DB161B_RC extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 23: RDY/~{BUSY}; output. */
  "RDY/~{BUSY}": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: ~{WP}; input. */
  "~{WP}": "25",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_Flash:AT45DB161B-RC";
  override referencePrefix = "U";
}

/**
 * 16Mb Serial DataFlash, 2.5V Vcc, SOIC-28
 *
 * KiCad symbol: `Memory_Flash:AT45DB161B-RC-2.5`. Reference prefix: `U`.
 * Footprint filters: SOIC?28*8.7x18.25mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc2224.pdf
 * Keywords: Atmel DataFlash.
 * Default footprint: Package_SO:SOIC-28W_8.7x18.25mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT45DB161B_RC_2_5 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: SCK; input. */
  "SCK": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 23: RDY/~{BUSY}; output. */
  "RDY/~{BUSY}": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: ~{WP}; input. */
  "~{WP}": "25",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_Flash:AT45DB161B-RC-2.5";
  override referencePrefix = "U";
}

/**
 * 16Mb Serial DataFlash, 2.7V Vcc, TSOP-28
 *
 * KiCad symbol: `Memory_Flash:AT45DB161B-TC`. Reference prefix: `U`.
 * Footprint filters: TSOP?28*11.8x8mm*P0.55mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc2224.pdf
 * Keywords: Atmel DataFlash.
 * Default footprint: Package_SO:TSOP-28_11.8x8mm_P0.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT45DB161B_TC extends Component.withPins({
  /** Physical pin 1: RDY/~{BUSY}; output. */
  "RDY/~{BUSY}": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: SI; input. */
  "SI": "13",
  /** Physical pin 14: SO; output. */
  "SO": "14",
}) {
  override schema = "Memory_Flash:AT45DB161B-TC";
  override referencePrefix = "U";
}

/**
 * 16Mb Serial DataFlash, 2.5V Vcc, TSOP-28
 *
 * KiCad symbol: `Memory_Flash:AT45DB161B-TC-2.5`. Reference prefix: `U`.
 * Footprint filters: TSOP?28*11.8x8mm*P0.55mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc2224.pdf
 * Keywords: Atmel DataFlash.
 * Default footprint: Package_SO:TSOP-28_11.8x8mm_P0.55mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT45DB161B_TC_2_5 extends Component.withPins({
  /** Physical pin 1: RDY/~{BUSY}; output. */
  "RDY/~{BUSY}": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: SI; input. */
  "SI": "13",
  /** Physical pin 14: SO; output. */
  "SO": "14",
}) {
  override schema = "Memory_Flash:AT45DB161B-TC-2.5";
  override referencePrefix = "U";
}

/**
 * 16Mb Serial DataFlash, 2.5V Vcc, SOIC-8
 *
 * KiCad symbol: `Memory_Flash:AT45DB161D-SU`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://www.mouser.com/datasheet/2/698/doc3500-2956563.pdf
 * Keywords: Adesto Flash Memory DataFlash Obsolete.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT45DB161D_SU extends Component.withPins({
  /** Physical pin 1: SI; input. */
  "SI": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: ~{RESET}; bidirectional. */
  "~{RESET}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: ~{WP}; input. */
  "~{WP}": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: SO; output. */
  "SO": "8",
}) {
  override schema = "Memory_Flash:AT45DB161D-SU";
  override referencePrefix = "U";
}

/**
 * FPGA Configuration Device, 1.6Mbit Flash Memory, JTAG, 3.0-3.6V and 4.5-5.5V, PLCC-20
 *
 * KiCad symbol: `Memory_Flash:EPC2Lx20`. Reference prefix: `U`.
 * Footprint filters: *PLCC*.
 * @see https://web.archive.org/web/20230628024332if_/https://cdrdv2-public.intel.com/653809/cfg_cf52004.pdf
 * Keywords: Altera EPC2 Serial FPGA Configuration Device.
 * Default footprint: Package_LCC:PLCC-20_9.0x9.0mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EPC2Lx20 extends Component.withPins({
  /** Physical pin 1: TDO; output. */
  "TDO": "1",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: TDI; input. */
  "TDI": "11",
  /** Physical pin 12: ~{CASC}; output. */
  "~{CASC}": "12",
  /** Physical pin 13: ~{INIT_CONF}; bidirectional. */
  "~{INIT_CONF}": "13",
  /** Physical pin 14: VPPSEL; input. */
  "VPPSEL": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: VPP; power_in. */
  "VPP": "18",
  /** Physical pin 19: TMS; input. */
  "TMS": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 2: DATA; output. */
  "DATA": "2",
  /** Physical pin 3: TCK; input. */
  "TCK": "3",
  /** Physical pin 4: DCLK; bidirectional. */
  "DCLK": "4",
  /** Physical pin 5: VCCSEL; input. */
  "VCCSEL": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: OE; bidirectional. */
  "OE": "8",
  /** Physical pin 9: ~{CS}; input. */
  "~{CS}": "9",
}) {
  override schema = "Memory_Flash:EPC2Lx20";
  override referencePrefix = "U";
}

/**
 * 16Mbit / 2MiB Serial NOR Flash Memory, Standard/Quad SPI, 2.7-3.6V, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Memory_Flash:EPCQ16ASI8N`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://www.intel.com/programmable/technical-pdfs/683078.pdf
 * Keywords: Intel EPCQ16A EPCQ-A Quad-Serial FPGA-Configuration-Device.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EPCQ16ASI8N extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DATA1; bidirectional. */
  "DATA1": "2",
  /** Physical pin 3: DATA2; bidirectional. */
  "DATA2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DATA0; bidirectional. */
  "DATA0": "5",
  /** Physical pin 6: DCLK; input. */
  "DCLK": "6",
  /** Physical pin 7: DATA3; bidirectional. */
  "DATA3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:EPCQ16ASI8N";
  override referencePrefix = "U";
}

/**
 * 32Mbit / 4MiB Serial NOR Flash Memory, Standard/Quad SPI, 2.7-3.6V, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Memory_Flash:EPCQ32ASI8N`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.intel.com/programmable/technical-pdfs/683078.pdf
 * Keywords: Intel EPCQ16A EPCQ-A Quad-Serial FPGA Configuration Device.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EPCQ32ASI8N extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DATA1; bidirectional. */
  "DATA1": "2",
  /** Physical pin 3: DATA2; bidirectional. */
  "DATA2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DATA0; bidirectional. */
  "DATA0": "5",
  /** Physical pin 6: DCLK; input. */
  "DCLK": "6",
  /** Physical pin 7: DATA3; bidirectional. */
  "DATA3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:EPCQ32ASI8N";
  override referencePrefix = "U";
}

/**
 * 1Mbit, 3.0V Standard and Dual Serial Flash, JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_Flash:GD25D10CT`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.elm-tech.com/en/products/spi-flash-memory/gd25d10/gd25d10.pdf
 * Keywords: SPI DSPI QSPI 1Mbit 3.0V.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD25D10CT extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: O1/SO; output. */
  "O1/SO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/IO0; bidirectional. */
  "SI/IO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:GD25D10CT";
  override referencePrefix = "U";
}

/**
 * 512kbit, 3.0V Standard and Dual Serial Flash, JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_Flash:GD25D05CT`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.elm-tech.com/en/products/spi-flash-memory/gd25d10/gd25d10.pdf
 * Keywords: SPI DSPI QSPI 512Kbit 3.0V.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD25D05CT extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: O1/SO; output. */
  "O1/SO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/IO0; bidirectional. */
  "SI/IO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:GD25D05CT";
  override referencePrefix = "U";
}

/**
 * 3.0V, Standard/Dual/Quad Serial Flash, WSON-8
 *
 * KiCad symbol: `Memory_Flash:GD25QxxxEY`. Reference prefix: `U`.
 * Footprint filters: WSON*8x6mm*P1.27mm*.
 * @see https://www.lcsc.com/datasheet/lcsc_datasheet_2201241400_GigaDevice-Semicon-Beijing-GD25Q256EYIGR_C2927043.pdf
 * Keywords: SPI DSPI QSPI 3.0V.
 * Default footprint: Package_SON:WSON-8-1EP_8x6mm_P1.27mm_EP3.4x4.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GD25QxxxEY extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/IO1; bidirectional. */
  "SO/IO1": "2",
  /** Physical pin 3: ~{WP}/IO2; bidirectional. */
  "~{WP}/IO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI/IO0; bidirectional. */
  "SI/IO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{HOLD}/~{RESET}/IO3; bidirectional. */
  "~{HOLD}/~{RESET}/IO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: PAD; passive. */
  "PAD": "9",
}) {
  override schema = "Memory_Flash:GD25QxxxEY";
  override referencePrefix = "U";
}

/**
 * 256-Mbit, 1.8V SPI Serial Flash Memory with Dual-I/O and Quad-I/O Support, SOIC-16
 *
 * KiCad symbol: `Memory_Flash:IS25WP256D-xM`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.issi.com/WW/pdf/IS25LP(WP)256D.pdf
 * Keywords: SPI DSPI QSPI NOR 256Mbit 1.8V.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS25WP256D_xM extends Component.withPins({
  /** Physical pin 1: ~{HOLD}/IO3; bidirectional. */
  "~{HOLD}/IO3": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: ~{RESET}/NC; input. */
  "~{RESET}/NC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: ~{CE}; input. */
  "~{CE}": "7",
  /** Physical pin 8: SO/IO1; bidirectional. */
  "SO/IO1": "8",
  /** Physical pin 9: ~{WP}/IO2; bidirectional. */
  "~{WP}/IO2": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: SI/IO0; bidirectional. */
  "SI/IO0": "15",
  /** Physical pin 16: SCK; input. */
  "SCK": "16",
}) {
  override schema = "Memory_Flash:IS25WP256D-xM";
  override referencePrefix = "U";
}

/**
 * 32Mb, Dual I/O, 4KB Subsector Erase, 3V Serial Flash Memory with 75 MHz SPI Bus Interface, DFN-8
 *
 * KiCad symbol: `Memory_Flash:M25PX32-VMP`. Reference prefix: `U`.
 * Footprint filters: DFN*6x5mm*P1.27mm*.
 * @see https://www.mouser.de/datasheet/2/671/M25PX32-1282938.pdf
 * Keywords: NOR Serial Flash Embedded Memory.
 * Default footprint: Package_DFN_QFN:DFN-S-8-1EP_6x5mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M25PX32_VMP extends Component.withPins({
  /** Physical pin 1: ~{S}; input. */
  "~{S}": "1",
  /** Physical pin 2: DQ1; bidirectional. */
  "DQ1": "2",
  /** Physical pin 3: ~{W}/V_{PP}; input. */
  "~{W}/V_{PP}": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: DQ0; bidirectional. */
  "DQ0": "5",
  /** Physical pin 6: C; input. */
  "C": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
  /** Physical pin 9: PAD/V_{SS}; power_in. */
  "PAD/V_{SS}": "9",
}) {
  override schema = "Memory_Flash:M25PX32-VMP";
  override referencePrefix = "U";
}

/**
 * 32Mb, Dual I/O, 4KB Subsector Erase, 3V Serial Flash Memory with 75 MHz SPI Bus Interface, SOIC-8
 *
 * KiCad symbol: `Memory_Flash:M25PX32-VMW`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://www.mouser.de/datasheet/2/671/M25PX32-1282938.pdf
 * Keywords: NOR Serial Flash Embedded Memory.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M25PX32_VMW extends Component.withPins({
  /** Physical pin 1: ~{S}; input. */
  "~{S}": "1",
  /** Physical pin 2: DQ1; bidirectional. */
  "DQ1": "2",
  /** Physical pin 3: ~{W}/V_{PP}; input. */
  "~{W}/V_{PP}": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: DQ0; bidirectional. */
  "DQ0": "5",
  /** Physical pin 6: C; input. */
  "C": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Memory_Flash:M25PX32-VMW";
  override referencePrefix = "U";
}

/**
 * Flash EEProm 512Ko (TSOP 40 pack.) 3,3V
 *
 * KiCad symbol: `Memory_Flash:M29W004`. Reference prefix: `U`.
 * Keywords: EEPROM FLASH 512KO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M29W004 extends Component.withPins({
  /** Physical pin 1: A16; input. */
  "A16": "1",
  /** Physical pin 2: A15; input. */
  "A15": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: A12; input. */
  "A12": "5",
  /** Physical pin 6: A11; input. */
  "A11": "6",
  /** Physical pin 7: A9; input. */
  "A9": "7",
  /** Physical pin 8: A8; input. */
  "A8": "8",
  /** Physical pin 9: WE; input. */
  "WE": "9",
  /** Physical pin 10: Rst/B; input. */
  "Rst/B": "10",
  /** Physical pin 12: Busy; output. */
  "Busy": "12",
  /** Physical pin 13: A18; input. */
  "A18": "13",
  /** Physical pin 14: A7; input. */
  "A7": "14",
  /** Physical pin 15: A6; input. */
  "A6": "15",
  /** Physical pin 16: A5; input. */
  "A5": "16",
  /** Physical pin 17: A4; input. */
  "A4": "17",
  /** Physical pin 18: A3; input. */
  "A3": "18",
  /** Physical pin 19: A2; input. */
  "A2": "19",
  /** Physical pin 20: A1; input. */
  "A1": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: CE; input. */
  "CE": "22",
  /** Physical pin 23: GND; power_in. */
  "GND_23": "23",
  /** Physical pin 24: OE; input. */
  "OE": "24",
  /** Physical pin 25: D0; tri_state. */
  "D0": "25",
  /** Physical pin 26: D1; tri_state. */
  "D1": "26",
  /** Physical pin 27: D2; tri_state. */
  "D2": "27",
  /** Physical pin 28: D3; tri_state. */
  "D3": "28",
  /** Physical pin 30: VCC; power_in. */
  "VCC_30": "30",
  /** Physical pin 31: VCC; power_in. */
  "VCC_31": "31",
  /** Physical pin 32: D4; tri_state. */
  "D4": "32",
  /** Physical pin 33: D5; tri_state. */
  "D5": "33",
  /** Physical pin 34: D6; tri_state. */
  "D6": "34",
  /** Physical pin 35: D7; tri_state. */
  "D7": "35",
  /** Physical pin 36: A10; input. */
  "A10": "36",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: A17; input. */
  "A17": "40",
}) {
  override schema = "Memory_Flash:M29W004";
  override referencePrefix = "U";
}

/**
 * Flash EEProm 1MO (TSOP 40 pack.) 3,3V
 *
 * KiCad symbol: `Memory_Flash:M29W008`. Reference prefix: `U`.
 * Keywords: EEPROM FLASH 1MO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M29W008 extends Component.withPins({
  /** Physical pin 1: A16; input. */
  "A16": "1",
  /** Physical pin 2: A15; input. */
  "A15": "2",
  /** Physical pin 3: A14; input. */
  "A14": "3",
  /** Physical pin 4: A13; input. */
  "A13": "4",
  /** Physical pin 5: A12; input. */
  "A12": "5",
  /** Physical pin 6: A11; input. */
  "A11": "6",
  /** Physical pin 7: A9; input. */
  "A9": "7",
  /** Physical pin 8: A8; input. */
  "A8": "8",
  /** Physical pin 9: WE; input. */
  "WE": "9",
  /** Physical pin 10: Rst/B; input. */
  "Rst/B": "10",
  /** Physical pin 12: Busy; output. */
  "Busy": "12",
  /** Physical pin 13: A18; input. */
  "A18": "13",
  /** Physical pin 14: A7; input. */
  "A7": "14",
  /** Physical pin 15: A6; input. */
  "A6": "15",
  /** Physical pin 16: A5; input. */
  "A5": "16",
  /** Physical pin 17: A4; input. */
  "A4": "17",
  /** Physical pin 18: A3; input. */
  "A3": "18",
  /** Physical pin 19: A2; input. */
  "A2": "19",
  /** Physical pin 20: A1; input. */
  "A1": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: CE; input. */
  "CE": "22",
  /** Physical pin 23: GND; power_in. */
  "GND_23": "23",
  /** Physical pin 24: OE; input. */
  "OE": "24",
  /** Physical pin 25: D0; tri_state. */
  "D0": "25",
  /** Physical pin 26: D1; tri_state. */
  "D1": "26",
  /** Physical pin 27: D2; tri_state. */
  "D2": "27",
  /** Physical pin 28: D3; tri_state. */
  "D3": "28",
  /** Physical pin 30: VCC; power_in. */
  "VCC_30": "30",
  /** Physical pin 31: VCC; power_in. */
  "VCC_31": "31",
  /** Physical pin 32: D4; tri_state. */
  "D4": "32",
  /** Physical pin 33: D5; tri_state. */
  "D5": "33",
  /** Physical pin 34: D6; tri_state. */
  "D6": "34",
  /** Physical pin 35: D7; tri_state. */
  "D7": "35",
  /** Physical pin 36: A10; input. */
  "A10": "36",
  /** Physical pin 37: A19; input. */
  "A19": "37",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: A17; input. */
  "A17": "40",
}) {
  override schema = "Memory_Flash:M29W008";
  override referencePrefix = "U";
}

/**
 * Micron 128M/256M/512M/1G/2Gbit, 1.8V Multiple I/O Serial NOR Flash Memory, W-PDFN-8
 *
 * KiCad symbol: `Memory_Flash:MT25QUxxxxxx1xW7`. Reference prefix: `U`.
 * Footprint filters: *DFN*6x5mm*P1.27mm*EP3x3mm*.
 * @see https://media-www.micron.com/-/media/client/global/documents/products/data-sheet/nor-flash/serial-nor/mt25q/die-rev-a/mt25q_qljs_u_256_aba_0.pdf
 * Keywords: Flash SPI DSPI QSPI 128Mbit 256Mbit 512Mbit 1Gbit 2Gbit 1.8V.
 * Default footprint: Package_DFN_QFN:W-PDFN-8-1EP_6x5mm_P1.27mm_EP3x3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MT25QUxxxxxx1xW7 extends Component.withPins({
  /** Physical pin 1: ~{S}; input. */
  "~{S}": "1",
  /** Physical pin 2: DQ1; bidirectional. */
  "DQ1": "2",
  /** Physical pin 3: ~{W}/DQ2; input. */
  "~{W}/DQ2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: DQ0; bidirectional. */
  "DQ0": "5",
  /** Physical pin 6: C; input. */
  "C": "6",
  /** Physical pin 7: ~{RESET}/DQ3; input. */
  "~{RESET}/DQ3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: PAD; power_in. */
  "PAD": "9",
}) {
  override schema = "Memory_Flash:MT25QUxxxxxx1xW7";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, 3V (2.65V-3.6V) SPI Serial Flash Memory, SOIC-16
 *
 * KiCad symbol: `Memory_Flash:MX25L3233FM`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.macronix.com/Lists/Datasheet/Attachments/8377/MX25L3233F,%203V,%2032Mb,%20v1.1.pdf
 * Keywords: SPI 32Mbit.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25L3233FM extends Component.withPins({
  /** Physical pin 1: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: SO/SIO1; bidirectional. */
  "SO/SIO1": "8",
  /** Physical pin 9: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 15: SI/SIO0; bidirectional. */
  "SI/SIO0": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
}) {
  override schema = "Memory_Flash:MX25L3233FM";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, Wide Range Voltage SPI Serial Flash Memory, SOIC-8 (SOP-8, 208 mil)
 *
 * KiCad symbol: `Memory_Flash:MX25R3235FM2xx1`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://www.macronix.com/Lists/Datasheet/Attachments/8755/MX25R3235F,%20Wide%20Range,%2032Mb,%20v1.8.pdf
 * Keywords: SPI 32Mbit 1.65V-3.6V.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25R3235FM2xx1 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:MX25R3235FM2xx1";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, 3V (2.65V-3.6V) SPI Serial Flash Memory, JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_Flash:MX25L3233FM1`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.macronix.com/Lists/Datasheet/Attachments/8377/MX25L3233F,%203V,%2032Mb,%20v1.1.pdf
 * Keywords: SPI 32Mbit.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25L3233FM1 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:MX25L3233FM1";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, 3V (2.65V-3.6V) SPI Serial Flash Memory, SOIC-8 (SOP-8, 208 mil)
 *
 * KiCad symbol: `Memory_Flash:MX25L3233FM2`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://www.macronix.com/Lists/Datasheet/Attachments/8933/MX25L3233F,%203V,%2032Mb,%20v1.7.pdf
 * Keywords: SPI 32Mbit.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25L3233FM2 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:MX25L3233FM2";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, 3V (2.65V-3.6V) SPI Serial Flash Memory, WSON-8
 *
 * KiCad symbol: `Memory_Flash:MX25L3233FZN`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*6x5mm*P1.27mm*.
 * @see https://www.macronix.com/Lists/Datasheet/Attachments/8377/MX25L3233F,%203V,%2032Mb,%20v1.1.pdf
 * Keywords: SPI 32Mbit.
 * Default footprint: Package_SON:WSON-8-1EP_6x5mm_P1.27mm_EP3.4x4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25L3233FZN extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Memory_Flash:MX25L3233FZN";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, Wide Range Voltage SPI Serial Flash Memory, JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_Flash:MX25R3235FM1xx0`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.macronix.com/Lists/Datasheet/Attachments/7534/MX25R3235F,%20Wide%20Range,%2032Mb,%20v1.6.pdf
 * Keywords: SPI 32Mbit 1.65V-3.6V.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25R3235FM1xx0 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{RESET}/SIO3; bidirectional. */
  "~{RESET}/SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:MX25R3235FM1xx0";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, Wide Range Voltage SPI Serial Flash Memory, JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_Flash:MX25R3235FM1xx1`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.macronix.com/Lists/Datasheet/Attachments/8755/MX25R3235F,%20Wide%20Range,%2032Mb,%20v1.8.pdf
 * Keywords: SPI 32Mbit 1.65V-3.6V.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25R3235FM1xx1 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:MX25R3235FM1xx1";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, Wide Range Voltage SPI Serial Flash Memory, SOIC-8 (SOP-8, 208 mil)
 *
 * KiCad symbol: `Memory_Flash:MX25R3235FM2xx0`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://www.macronix.com/Lists/Datasheet/Attachments/8755/MX25R3235F,%20Wide%20Range,%2032Mb,%20v1.8.pdf
 * Keywords: SPI 32Mbit 1.65V-3.6V.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25R3235FM2xx0 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{RESET}/SIO3; bidirectional. */
  "~{RESET}/SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:MX25R3235FM2xx0";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, Wide Range Voltage SPI Serial Flash Memory, WSON-8
 *
 * KiCad symbol: `Memory_Flash:MX25R3235FZNxx0`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*6x5mm*P1.27mm*.
 * @see http://www.macronix.com/Lists/Datasheet/Attachments/7534/MX25R3235F,%20Wide%20Range,%2032Mb,%20v1.6.pdf
 * Keywords: SPI 32Mbit 1.65V-3.6V.
 * Default footprint: Package_SON:WSON-8-1EP_6x5mm_P1.27mm_EP3.4x4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25R3235FZNxx0 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{RESET}/SIO3; bidirectional. */
  "~{RESET}/SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_Flash:MX25R3235FZNxx0";
  override referencePrefix = "U";
}

/**
 * 32-Mbit, Wide Range Voltage SPI Serial Flash Memory, WSON-8
 *
 * KiCad symbol: `Memory_Flash:MX25R3235FZNxx1`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*6x5mm*P1.27mm*.
 * @see http://www.macronix.com/Lists/Datasheet/Attachments/7534/MX25R3235F,%20Wide%20Range,%2032Mb,%20v1.6.pdf
 * Keywords: SPI 32Mbit 1.65V-3.6V.
 * Default footprint: Package_SON:WSON-8-1EP_6x5mm_P1.27mm_EP3.4x4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MX25R3235FZNxx1 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/SIO1; bidirectional. */
  "SO/SIO1": "2",
  /** Physical pin 3: ~{WP}/SIO2; bidirectional. */
  "~{WP}/SIO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: SI/SIO0; bidirectional. */
  "SI/SIO0": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: ~{HOLD}/SIO3; bidirectional. */
  "~{HOLD}/SIO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_Flash:MX25R3235FZNxx1";
  override referencePrefix = "U";
}

/**
 * 8-Mbit, 2.7 to 3.6V, SPI Flash Memory, SOIC-8
 *
 * KiCad symbol: `Memory_Flash:SST25VF080B-50-4x-S2Ax`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005045C.pdf
 * Keywords: flash memory spi.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SST25VF080B_50_4x_S2Ax extends Component.withPins({
  /** Physical pin 1: ~{CE}; input. */
  "~{CE}": "1",
  /** Physical pin 2: SO; output. */
  "SO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SI; input. */
  "SI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Memory_Flash:SST25VF080B-50-4x-S2Ax";
  override referencePrefix = "U";
}

/**
 * 64-Mbit, 2.5V Minimum SPI Serial Flash Memory with Dual-I/O and Quad-I/O Support, DFN-8
 *
 * KiCad symbol: `Memory_Flash:SST26VF064Bxx-xxxx-MF`. Reference prefix: `U`.
 * Footprint filters: *WSON*6x5mm?P1.27mm?EP3.4x4mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/SST26VF064B-SST26VF064BA-2.5V-3.0V-64-Mbit-Serial-Quad-IO-Flash-Memory-Data-Sheet-DS20005119J.pdf
 * Keywords: SPI DSPI QSPI 64Mbit 2.5V 3.3V SST26VF064B-104I/MF SST26VF064BT-104I/MF SST26VF064BAT-104I/MF SST26VF064B-104V/MF SST26VF064BT-104V/MF.
 * Default footprint: Package_SON:WSON-8-1EP_6x5mm_P1.27mm_EP3.4x4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SST26VF064Bxx_xxxx_MF extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO/IO1; bidirectional. */
  "SO/IO1": "2",
  /** Physical pin 3: ~{WP}/IO2; bidirectional. */
  "~{WP}/IO2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SI/IO0; bidirectional. */
  "SI/IO0": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}/IO3; bidirectional. */
  "~{HOLD}/IO3": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:SST26VF064Bxx-xxxx-MF";
  override referencePrefix = "U";
}

/**
 * Silicon Storage Technology (SSF) 128k x 8 Flash ROM
 *
 * KiCad symbol: `Memory_Flash:SST39SF010`. Reference prefix: `U`.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25022B.pdf
 * Keywords: 128k flash rom.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SST39SF010 extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; input. */
  "NC_1": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A15; input. */
  "A15": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: D0; tri_state. */
  "D0": "13",
  /** Physical pin 14: D1; tri_state. */
  "D1": "14",
  /** Physical pin 15: D2; tri_state. */
  "D2": "15",
  /** Physical pin 17: D3; tri_state. */
  "D3": "17",
  /** Physical pin 18: D4; tri_state. */
  "D4": "18",
  /** Physical pin 19: D5; tri_state. */
  "D5": "19",
  /** Physical pin 20: D6; tri_state. */
  "D6": "20",
  /** Physical pin 21: D7; tri_state. */
  "D7": "21",
  /** Physical pin 22: CE; input. */
  "CE": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: OE; input. */
  "OE": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: A14; input. */
  "A14": "29",
  /** Physical pin 30: NC; input. */
  "NC_30": "30",
  /** Physical pin 31: PGM; input. */
  "PGM": "31",
}) {
  override schema = "Memory_Flash:SST39SF010";
  override referencePrefix = "U";
}

/**
 * Silicon Storage Technology (SSF) 256k x 8 Flash ROM
 *
 * KiCad symbol: `Memory_Flash:SST39SF020`. Reference prefix: `U`.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25022B.pdf
 * Keywords: 256k flash rom.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SST39SF020 extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: NC; input. */
  "NC": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A15; input. */
  "A15": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: D0; tri_state. */
  "D0": "13",
  /** Physical pin 14: D1; tri_state. */
  "D1": "14",
  /** Physical pin 15: D2; tri_state. */
  "D2": "15",
  /** Physical pin 17: D3; tri_state. */
  "D3": "17",
  /** Physical pin 18: D4; tri_state. */
  "D4": "18",
  /** Physical pin 19: D5; tri_state. */
  "D5": "19",
  /** Physical pin 20: D6; tri_state. */
  "D6": "20",
  /** Physical pin 21: D7; tri_state. */
  "D7": "21",
  /** Physical pin 22: CE; input. */
  "CE": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: OE; input. */
  "OE": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: A14; input. */
  "A14": "29",
  /** Physical pin 30: A17; input. */
  "A17": "30",
  /** Physical pin 31: PGM; input. */
  "PGM": "31",
}) {
  override schema = "Memory_Flash:SST39SF020";
  override referencePrefix = "U";
}

/**
 * Silicon Storage Technology (SSF) 512k x 8 Flash ROM
 *
 * KiCad symbol: `Memory_Flash:SST39SF040`. Reference prefix: `U`.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25022B.pdf
 * Keywords: 512k flash rom.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SST39SF040 extends Component.withPins({
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 1: A18; input. */
  "A18": "1",
  /** Physical pin 2: A16; input. */
  "A16": "2",
  /** Physical pin 3: A15; input. */
  "A15": "3",
  /** Physical pin 4: A12; input. */
  "A12": "4",
  /** Physical pin 5: A7; input. */
  "A7": "5",
  /** Physical pin 6: A6; input. */
  "A6": "6",
  /** Physical pin 7: A5; input. */
  "A5": "7",
  /** Physical pin 8: A4; input. */
  "A4": "8",
  /** Physical pin 9: A3; input. */
  "A3": "9",
  /** Physical pin 10: A2; input. */
  "A2": "10",
  /** Physical pin 11: A1; input. */
  "A1": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: D0; tri_state. */
  "D0": "13",
  /** Physical pin 14: D1; tri_state. */
  "D1": "14",
  /** Physical pin 15: D2; tri_state. */
  "D2": "15",
  /** Physical pin 17: D3; tri_state. */
  "D3": "17",
  /** Physical pin 18: D4; tri_state. */
  "D4": "18",
  /** Physical pin 19: D5; tri_state. */
  "D5": "19",
  /** Physical pin 20: D6; tri_state. */
  "D6": "20",
  /** Physical pin 21: D7; tri_state. */
  "D7": "21",
  /** Physical pin 22: CE; input. */
  "CE": "22",
  /** Physical pin 23: A10; input. */
  "A10": "23",
  /** Physical pin 24: OE; input. */
  "OE": "24",
  /** Physical pin 25: A11; input. */
  "A11": "25",
  /** Physical pin 26: A9; input. */
  "A9": "26",
  /** Physical pin 27: A8; input. */
  "A8": "27",
  /** Physical pin 28: A13; input. */
  "A13": "28",
  /** Physical pin 29: A14; input. */
  "A14": "29",
  /** Physical pin 30: A17; input. */
  "A17": "30",
  /** Physical pin 31: PGM; input. */
  "PGM": "31",
}) {
  override schema = "Memory_Flash:SST39SF040";
  override referencePrefix = "U";
}

/**
 * 32Mbit / 4MiB Serial Flash Memory, Standard/Dual/Quad SPI, 2.7-3.6V, WSON-8
 *
 * KiCad symbol: `Memory_Flash:W25Q32JVZP`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*6x5mm*P1.27mm*.
 * @see http://www.winbond.com/resource-files/w25q32jv%20revg%2003272018%20plus.pdf
 * Keywords: flash memory SPI.
 * Default footprint: Package_SON:WSON-8-1EP_6x5mm_P1.27mm_EP3.4x4.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25Q32JVZP extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}/IO_{2}; bidirectional. */
  "~{WP}/IO_{2}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}/~{RESET}/IO_{3}; bidirectional. */
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Memory_Flash:W25Q32JVZP";
  override referencePrefix = "U";
}

/**
 * 128Mbit / 16MiB Serial Flash Memory, Standard/Dual/Quad SPI, 2.7-3.6V, WSON-8
 *
 * KiCad symbol: `Memory_Flash:W25Q128JVE`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*8x6mm*P1.27mm*.
 * @see https://www.winbond.com/resource-files/w25q128jv_dtr%20revc%2003272018%20plus.pdf
 * Keywords: flash memory SPI QPI DTR.
 * Default footprint: Package_SON:WSON-8-1EP_8x6mm_P1.27mm_EP3.4x4.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25Q128JVE extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}/IO_{2}; bidirectional. */
  "~{WP}/IO_{2}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}/~{RESET}/IO_{3}; bidirectional. */
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Memory_Flash:W25Q128JVE";
  override referencePrefix = "U";
}

/**
 * 128Mbit / 16MiB Serial Flash Memory, Standard/Dual/Quad SPI, 2.7-3.6V, WSON-8
 *
 * KiCad symbol: `Memory_Flash:W25Q128JVP`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*6x5mm*P1.27mm*EP3.4x4.3mm*.
 * @see https://www.winbond.com/resource-files/w25q128jv_dtr%20revc%2003272018%20plus.pdf
 * Keywords: flash memory SPI QPI DTR.
 * Default footprint: Package_SON:WSON-8-1EP_6x5mm_P1.27mm_EP3.4x4.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25Q128JVP extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}/IO_{2}; bidirectional. */
  "~{WP}/IO_{2}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}/~{RESET}/IO_{3}; bidirectional. */
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Memory_Flash:W25Q128JVP";
  override referencePrefix = "U";
}

/**
 * 32Mbit / 4MiB Serial Flash Memory, Standard/Dual/Quad SPI, 2.7-3.6V, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Memory_Flash:W25Q32JVSS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see http://www.winbond.com/resource-files/w25q32jv%20revg%2003272018%20plus.pdf
 * Keywords: flash memory SPI.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25Q32JVSS extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}/IO_{2}; bidirectional. */
  "~{WP}/IO_{2}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}/~{RESET}/IO_{3}; bidirectional. */
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:W25Q32JVSS";
  override referencePrefix = "U";
}

/**
 * 128Mbit / 16MiB Serial Flash Memory, Standard/Dual/Quad SPI, 2.7-3.6V, SOIC-8
 *
 * KiCad symbol: `Memory_Flash:W25Q128JVS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://www.winbond.com/resource-files/w25q128jv_dtr%20revc%2003272018%20plus.pdf
 * Keywords: flash memory SPI QPI DTR.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25Q128JVS extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}/IO_{2}; bidirectional. */
  "~{WP}/IO_{2}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}/~{RESET}/IO_{3}; bidirectional. */
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:W25Q128JVS";
  override referencePrefix = "U";
}

/**
 * 16Mbit / 2MiB Serial Flash Memory, Standard/Dual/Quad SPI, 2.7-3.6V, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Memory_Flash:W25Q16JVSS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://www.winbond.com/hq/support/documentation/levelOne.jsp?__locale=en&DocNo=DA00-W25Q16JV.1
 * Keywords: flash memory SPI.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25Q16JVSS extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}/IO_{2}; bidirectional. */
  "~{WP}/IO_{2}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}/~{RESET}/IO_{3}; bidirectional. */
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:W25Q16JVSS";
  override referencePrefix = "U";
}

/**
 * 4Mbit / 512KiB Serial Flash memory, Standard/Dual I/O SPI, 2.3-3.6V, SOIC-8 (150 mil)
 *
 * KiCad symbol: `Memory_Flash:W25X40CLSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.winbond.com/resource-files/W25X40CL_G%2020210505.pdf
 * Keywords: Memory Flash SPI.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25X40CLSN extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}; bidirectional. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}; bidirectional. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:W25X40CLSN";
  override referencePrefix = "U";
}

/**
 * 2Mbit / 256KiB Serial Flash memory, Standard/Dual I/O SPI, 2.3-3.6V, SOIC-8
 *
 * KiCad symbol: `Memory_Flash:W25X20CLSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.winbond.com/resource-files/w25x20cl_revf%2020150806.pdf
 * Keywords: Memory Flash SPI.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25X20CLSN extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}; bidirectional. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}; bidirectional. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:W25X20CLSN";
  override referencePrefix = "U";
}

/**
 * 2Mbit / 256KiB Serial Flash memory, Standard/Dual I/O SPI, 2.3-3.6V, WSON-8
 *
 * KiCad symbol: `Memory_Flash:W25X20CLZP`. Reference prefix: `U`.
 * Footprint filters: WSON*8*1EP*6x5mm*.
 * @see https://www.winbond.com/resource-files/w25x20cl_revf%2020150806.pdf
 * Keywords: Memory Flash SPI.
 * Default footprint: Package_SON:WSON-8-1EP_6x5mm_P1.27mm_EP3.4x4.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25X20CLZP extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}; bidirectional. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}; bidirectional. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Memory_Flash:W25X20CLZP";
  override referencePrefix = "U";
}

/**
 * 4Mbit / 512KiB Serial Flash memory, Standard/Dual I/O SPI, 2.3-3.6V, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Memory_Flash:W25X40CLSS`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://www.winbond.com/resource-files/W25X40CL_G%2020210505.pdf
 * Keywords: Memory Flash SPI.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25X40CLSS extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}; bidirectional. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}; bidirectional. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:W25X40CLSS";
  override referencePrefix = "U";
}

/**
 * 4Mbit / 512KiB Serial Flash memory, Standard/Dual I/O SPI, 2.3-3.6V, JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Memory_Flash:W25X40CLSV`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.winbond.com/resource-files/W25X40CL_G%2020210505.pdf
 * Keywords: Memory Flash SPI.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class W25X40CLSV extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: DO/IO_{1}; bidirectional. */
  "DO/IO_{1}": "2",
  /** Physical pin 3: ~{WP}; bidirectional. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DI/IO_{0}; bidirectional. */
  "DI/IO_{0}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: ~{HOLD}; bidirectional. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_Flash:W25X40CLSV";
  override referencePrefix = "U";
}

/**
 * 1Gbit NAND flash compliant with SD2.0 interface, 50Mhz 3.3V, LGA-8
 *
 * KiCad symbol: `Memory_Flash:XTSD01G`. Reference prefix: `U`.
 * Footprint filters: *LGA*8x6mm*P1.27mm*.
 * @see https://datasheet.lcsc.com/lcsc/2005251034_XTX-XTSD08GLGEAG_C558840.pdf
 * Keywords: 50MHz 1Gbit NAND FLASH SD2.0 .
 * Default footprint: Package_LGA:LGA-8_8x6mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XTSD01G extends Component.withPins({
  /** Physical pin 1: SD2; bidirectional. */
  "SD2": "1",
  /** Physical pin 2: SD3/~{CS}; bidirectional. */
  "SD3/~{CS}": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: CMD/DI; input. */
  "CMD/DI": "5",
  /** Physical pin 6: SD0/DO; bidirectional. */
  "SD0/DO": "6",
  /** Physical pin 7: SD1; bidirectional. */
  "SD1": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Memory_Flash:XTSD01G";
  override referencePrefix = "U";
}

/**
 * 2Gbit NAND flash compliant with SD2.0 interface, 50Mhz 3.3V, LGA-8
 *
 * KiCad symbol: `Memory_Flash:XTSD02G`. Reference prefix: `U`.
 * Footprint filters: *LGA*8x6mm*P1.27mm*.
 * @see https://datasheet.lcsc.com/lcsc/2005251034_XTX-XTSD08GLGEAG_C558840.pdf
 * Keywords: 50MHz 2Gbit NAND FLASH SD2.0 .
 * Default footprint: Package_LGA:LGA-8_8x6mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XTSD02G extends Component.withPins({
  /** Physical pin 1: SD2; bidirectional. */
  "SD2": "1",
  /** Physical pin 2: SD3/~{CS}; bidirectional. */
  "SD3/~{CS}": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: CMD/DI; input. */
  "CMD/DI": "5",
  /** Physical pin 6: SD0/DO; bidirectional. */
  "SD0/DO": "6",
  /** Physical pin 7: SD1; bidirectional. */
  "SD1": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Memory_Flash:XTSD02G";
  override referencePrefix = "U";
}

/**
 * 4Gbit NAND flash compliant with SD2.0 interface, 50Mhz 3.3V, LGA-8
 *
 * KiCad symbol: `Memory_Flash:XTSD04G`. Reference prefix: `U`.
 * Footprint filters: *LGA*8x6mm*P1.27mm*.
 * @see https://datasheet.lcsc.com/lcsc/2005251034_XTX-XTSD08GLGEAG_C558840.pdf
 * Keywords: 50MHz 4Gbit NAND FLASH SD2.0 .
 * Default footprint: Package_LGA:LGA-8_8x6mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XTSD04G extends Component.withPins({
  /** Physical pin 1: SD2; bidirectional. */
  "SD2": "1",
  /** Physical pin 2: SD3/~{CS}; bidirectional. */
  "SD3/~{CS}": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: CMD/DI; input. */
  "CMD/DI": "5",
  /** Physical pin 6: SD0/DO; bidirectional. */
  "SD0/DO": "6",
  /** Physical pin 7: SD1; bidirectional. */
  "SD1": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Memory_Flash:XTSD04G";
  override referencePrefix = "U";
}

/**
 * 8Gbit NAND flash compliant with SD2.0 interface, 50Mhz 3.3V, LGA-8
 *
 * KiCad symbol: `Memory_Flash:XTSD08G`. Reference prefix: `U`.
 * Footprint filters: *LGA*8x6mm*P1.27mm*.
 * @see https://datasheet.lcsc.com/lcsc/2005251034_XTX-XTSD08GLGEAG_C558840.pdf
 * Keywords: 50MHz 8Gbit NAND FLASH SD2.0 .
 * Default footprint: Package_LGA:LGA-8_8x6mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XTSD08G extends Component.withPins({
  /** Physical pin 1: SD2; bidirectional. */
  "SD2": "1",
  /** Physical pin 2: SD3/~{CS}; bidirectional. */
  "SD3/~{CS}": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: CMD/DI; input. */
  "CMD/DI": "5",
  /** Physical pin 6: SD0/DO; bidirectional. */
  "SD0/DO": "6",
  /** Physical pin 7: SD1; bidirectional. */
  "SD1": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Memory_Flash:XTSD08G";
  override referencePrefix = "U";
}

