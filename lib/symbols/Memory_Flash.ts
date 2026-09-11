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
 */
export class _28F400 extends Component.withPins({
  "VPP": "1",
  "DU": "2",
  "A17": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "A2": "9",
  "A1": "10",
  "A0": "11",
  "CE": "12",
  "GND_13": "13",
  "OE": "14",
  "D0": "15",
  "D8": "16",
  "D1": "17",
  "D9": "18",
  "D2": "19",
  "D10": "20",
  "D3": "21",
  "D11": "22",
  "VCC": "23",
  "D4": "24",
  "D12": "25",
  "D5": "26",
  "D13": "27",
  "D6": "28",
  "D14": "29",
  "D7": "30",
  "A-1/D15": "31",
  "GND_32": "32",
  "BYTE": "33",
  "A16": "34",
  "A15": "35",
  "A14": "36",
  "A13": "37",
  "A12": "38",
  "A11": "39",
  "A10": "40",
  "A9": "41",
  "A8": "42",
  "WE": "43",
  "PR": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VPP: "power_in", DU: "no_connect", A17: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", CE: "input", GND_13: "power_in", OE: "input", D0: "tri_state", D8: "tri_state", D1: "tri_state", D9: "tri_state", D2: "tri_state", D10: "tri_state", D3: "tri_state", D11: "tri_state", VCC: "power_in", D4: "tri_state", D12: "tri_state", D5: "tri_state", D13: "tri_state", D6: "tri_state", D14: "tri_state", D7: "tri_state", "A-1/D15": "tri_state", GND_32: "power_in", BYTE: "input", A16: "input", A15: "input", A14: "input", A13: "input", A12: "input", A11: "input", A10: "input", A9: "input", A8: "input", WE: "input", PR: "input", ...opts.pinTypes } });
  }
  override schema = "Memory_Flash:28F400";
  override referencePrefix = "U";
}

/**
 * Flash EEProm 128Ko (TSOP 32 pack.) 5V prog
 *
 * KiCad symbol: `Memory_Flash:29F010-TSOP-SP`. Reference prefix: `U`.
 * Keywords: EEPROM FLASH 128KO.
 */
export class _29F010_TSOP_SP extends Component.withPins({
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "A14": "5",
  "WE": "7",
  "VCC": "8",
  "A16": "10",
  "A15": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "D0": "21",
  "D1": "22",
  "D2": "23",
  "GND": "24",
  "D3": "25",
  "D4": "26",
  "D5": "27",
  "D6": "28",
  "D7": "29",
  "CE": "30",
  "A10": "31",
  "OE": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", WE: "input", VCC: "input", A16: "input", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "input", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", CE: "input", A10: "input", OE: "input", ...opts.pinTypes } });
  }
  override schema = "Memory_Flash:29F010-TSOP-SP";
  override referencePrefix = "U";
}

/**
 * Flash EEProm 512PP (TSOP 32) 3,3V
 *
 * KiCad symbol: `Memory_Flash:29W040`. Reference prefix: `U`.
 * Keywords: EEPROM FLASH 512KO.
 */
export class _29W040 extends Component.withPins({
  "A11": "1",
  "A9": "2",
  "A8": "3",
  "A13": "4",
  "A14": "5",
  "A17": "6",
  "WE": "7",
  "VCC": "8",
  "A18": "9",
  "A16": "10",
  "A15": "11",
  "A12": "12",
  "A7": "13",
  "A6": "14",
  "A5": "15",
  "A4": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "D0": "21",
  "D1": "22",
  "D2": "23",
  "GND": "24",
  "D3": "25",
  "D4": "26",
  "D5": "27",
  "D6": "28",
  "D7": "29",
  "CE": "30",
  "A10": "31",
  "OE": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", A17: "input", WE: "input", VCC: "power_in", A18: "input", A16: "input", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", CE: "input", A10: "input", OE: "input", ...opts.pinTypes } });
  }
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
 */
export class AM29F400Bx_xxSx extends Component.withPins({
  "NC": "1",
  "RY/~{BY}": "2",
  "A17": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "A2": "9",
  "A1": "10",
  "A0": "11",
  "~{CE}": "12",
  "VSS_13": "13",
  "~{OE}": "14",
  "DQ0": "15",
  "DQ8": "16",
  "DQ1": "17",
  "DQ9": "18",
  "DQ2": "19",
  "DQ10": "20",
  "DQ3": "21",
  "DQ11": "22",
  "VCC": "23",
  "DQ4": "24",
  "DQ12": "25",
  "DQ5": "26",
  "DQ13": "27",
  "DQ6": "28",
  "DQ14": "29",
  "DQ7": "30",
  "DQ15/A-1": "31",
  "VSS_32": "32",
  "~{BYTE}": "33",
  "A16": "34",
  "A15": "35",
  "A14": "36",
  "A13": "37",
  "A12": "38",
  "A11": "39",
  "A10": "40",
  "A9": "41",
  "A8": "42",
  "~{WE}": "43",
  "~{RESET}": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "RY/~{BY}": "open_collector", A17: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "~{CE}": "input", VSS_13: "power_in", "~{OE}": "input", DQ0: "tri_state", DQ8: "tri_state", DQ1: "tri_state", DQ9: "tri_state", DQ2: "tri_state", DQ10: "tri_state", DQ3: "tri_state", DQ11: "tri_state", VCC: "power_in", DQ4: "tri_state", DQ12: "tri_state", DQ5: "tri_state", DQ13: "tri_state", DQ6: "tri_state", DQ14: "tri_state", DQ7: "tri_state", "DQ15/A-1": "tri_state", VSS_32: "passive", "~{BYTE}": "input", A16: "input", A15: "input", A14: "input", A13: "input", A12: "input", A11: "input", A10: "input", A9: "input", A8: "input", "~{WE}": "input", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class AM29F400BB_90SC extends Component.withPins({
  "NC": "1",
  "RY/~{BY}": "2",
  "A17": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "A2": "9",
  "A1": "10",
  "A0": "11",
  "~{CE}": "12",
  "VSS_13": "13",
  "~{OE}": "14",
  "DQ0": "15",
  "DQ8": "16",
  "DQ1": "17",
  "DQ9": "18",
  "DQ2": "19",
  "DQ10": "20",
  "DQ3": "21",
  "DQ11": "22",
  "VCC": "23",
  "DQ4": "24",
  "DQ12": "25",
  "DQ5": "26",
  "DQ13": "27",
  "DQ6": "28",
  "DQ14": "29",
  "DQ7": "30",
  "DQ15/A-1": "31",
  "VSS_32": "32",
  "~{BYTE}": "33",
  "A16": "34",
  "A15": "35",
  "A14": "36",
  "A13": "37",
  "A12": "38",
  "A11": "39",
  "A10": "40",
  "A9": "41",
  "A8": "42",
  "~{WE}": "43",
  "~{RESET}": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "RY/~{BY}": "open_collector", A17: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "~{CE}": "input", VSS_13: "power_in", "~{OE}": "input", DQ0: "tri_state", DQ8: "tri_state", DQ1: "tri_state", DQ9: "tri_state", DQ2: "tri_state", DQ10: "tri_state", DQ3: "tri_state", DQ11: "tri_state", VCC: "power_in", DQ4: "tri_state", DQ12: "tri_state", DQ5: "tri_state", DQ13: "tri_state", DQ6: "tri_state", DQ14: "tri_state", DQ7: "tri_state", "DQ15/A-1": "tri_state", VSS_32: "passive", "~{BYTE}": "input", A16: "input", A15: "input", A14: "input", A13: "input", A12: "input", A11: "input", A10: "input", A9: "input", A8: "input", "~{WE}": "input", "~{RESET}": "input", ...opts.pinTypes } });
  }
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
 */
export class AM29F400Bx_xxEx extends Component.withPins({
  "A11": "5",
  "A15": "1",
  "A14": "2",
  "A13": "3",
  "A12": "4",
  "A10": "6",
  "A9": "7",
  "A8": "8",
  "NC_9": "9",
  "NC_10": "10",
  "~{WE}": "11",
  "~{RESET}": "12",
  "NC_13": "13",
  "NC_14": "14",
  "RY/~{BY}": "15",
  "NC_16": "16",
  "A17": "17",
  "A7": "18",
  "A6": "19",
  "A5": "20",
  "A4": "21",
  "A3": "22",
  "A2": "23",
  "A1": "24",
  "A0": "25",
  "~{CE}": "26",
  "VSS_27": "27",
  "~{OE}": "28",
  "DQ0": "29",
  "DQ8": "30",
  "DQ1": "31",
  "DQ9": "32",
  "DQ2": "33",
  "DQ10": "34",
  "DQ3": "35",
  "DQ11": "36",
  "VCC": "37",
  "DQ4": "38",
  "DQ12": "39",
  "DQ5": "40",
  "DQ13": "41",
  "DQ6": "42",
  "DQ14": "43",
  "DQ7": "44",
  "DQ15/A-1": "45",
  "VSS_46": "46",
  "~{BYTE}": "47",
  "A16": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A11: "input", A15: "input", A14: "input", A13: "input", A12: "input", A10: "input", A9: "input", A8: "input", NC_9: "no_connect", NC_10: "no_connect", "~{WE}": "input", "~{RESET}": "input", NC_13: "no_connect", NC_14: "no_connect", "RY/~{BY}": "open_collector", NC_16: "no_connect", A17: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "~{CE}": "input", VSS_27: "power_in", "~{OE}": "input", DQ0: "tri_state", DQ8: "tri_state", DQ1: "tri_state", DQ9: "tri_state", DQ2: "tri_state", DQ10: "tri_state", DQ3: "tri_state", DQ11: "tri_state", VCC: "power_in", DQ4: "tri_state", DQ12: "tri_state", DQ5: "tri_state", DQ13: "tri_state", DQ6: "tri_state", DQ14: "tri_state", DQ7: "tri_state", "DQ15/A-1": "tri_state", VSS_46: "passive", "~{BYTE}": "input", A16: "input", ...opts.pinTypes } });
  }
  override schema = "Memory_Flash:AM29F400Bx-xxEx";
  override referencePrefix = "U";
}

/**
 * 128 Megabit (8 M x 16-Bit/4 M x 32-Bit), Simultaneous Operation Flash Memory with VersatileIO™ Control
 *
 * KiCad symbol: `Memory_Flash:AM29PDL128G`. Reference prefix: `U`.
 * Footprint filters: BGA80_1mm_15X10.
 */
export class AM29PDL128G extends Component.withPins({
  "A5": "A1",
  "A4": "A2",
  "A2": "A3",
  "RY/BY#": "A4",
  "A21": "A6",
  "WORD#": "A7",
  "OE#": "A8",
  "DQ0": "B1",
  "VCC_B2": "B2",
  "A3": "B3",
  "A0": "B4",
  "WP#": "B5",
  "A20": "B6",
  "CE#": "B7",
  "VSS_B8": "B8",
  "DQ17": "C1",
  "DQ1": "C2",
  "DQ16": "C3",
  "A1": "C4",
  "WE#": "C5",
  "DQ31/A-1": "C6",
  "DQ15": "C7",
  "DQ30": "C8",
  "DQ2": "D1",
  "VIO_D2": "D2",
  "VSS_D3": "D3",
  "DQ18": "D4",
  "DQ29": "D5",
  "DQ14": "D6",
  "VSS_D7": "D7",
  "VIO_D8": "D8",
  "DQ19": "E1",
  "DQ3": "E2",
  "DQ4": "E3",
  "RST#": "E4",
  "ACC": "E5",
  "DQ12": "E6",
  "DQ13": "E7",
  "DQ28": "E8",
  "DQ5": "F1",
  "DQ21": "F2",
  "DQ20": "F3",
  "DQ27": "F6",
  "DQ26": "F7",
  "DQ11": "F8",
  "VIO_G1": "G1",
  "DQ6": "G2",
  "DQ22": "G3",
  "VSS_G4": "G4",
  "DQ10": "G5",
  "DQ25": "G6",
  "VIO_G7": "G7",
  "VSS_G8": "G8",
  "DQ7": "H1",
  "DQ23": "H2",
  "VSS_H3": "H3",
  "A12": "H4",
  "A14": "H5",
  "DQ8": "H6",
  "DQ24": "H7",
  "DQ9": "H8",
  "A6": "J1",
  "A7": "J2",
  "A10": "J3",
  "A13": "J5",
  "A16": "J6",
  "A19": "J7",
  "VCC_J8": "J8",
  "A8": "K1",
  "A9": "K2",
  "A11": "K3",
  "A15": "K6",
  "A17": "K7",
  "A18": "K8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A5: "input", A4: "input", A2: "input", "RY/BY#": "output", A21: "input", "WORD#": "input", "OE#": "input", DQ0: "bidirectional", VCC_B2: "power_in", A3: "input", A0: "input", "WP#": "input", A20: "input", "CE#": "input", VSS_B8: "power_in", DQ17: "bidirectional", DQ1: "bidirectional", DQ16: "bidirectional", A1: "input", "WE#": "input", "DQ31/A-1": "bidirectional", DQ15: "bidirectional", DQ30: "bidirectional", DQ2: "bidirectional", VIO_D2: "input", VSS_D3: "power_in", DQ18: "bidirectional", DQ29: "bidirectional", DQ14: "bidirectional", VSS_D7: "power_in", VIO_D8: "input", DQ19: "bidirectional", DQ3: "bidirectional", DQ4: "bidirectional", "RST#": "input", ACC: "input", DQ12: "bidirectional", DQ13: "bidirectional", DQ28: "bidirectional", DQ5: "bidirectional", DQ21: "bidirectional", DQ20: "bidirectional", DQ27: "bidirectional", DQ26: "bidirectional", DQ11: "bidirectional", VIO_G1: "input", DQ6: "bidirectional", DQ22: "bidirectional", VSS_G4: "passive", DQ10: "bidirectional", DQ25: "bidirectional", VIO_G7: "input", VSS_G8: "power_in", DQ7: "bidirectional", DQ23: "bidirectional", VSS_H3: "power_in", A12: "input", A14: "input", DQ8: "bidirectional", DQ24: "bidirectional", DQ9: "bidirectional", A6: "input", A7: "input", A10: "input", A13: "input", A16: "input", A19: "input", VCC_J8: "power_in", A8: "input", A9: "input", A11: "input", A15: "input", A17: "input", A18: "input", ...opts.pinTypes } });
  }
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
 */
export class AT25DF041x_UxN_x extends Component.withPins({
  "VCC": "A1",
  "~{CS}": "A3",
  "GND": "B2",
  "~{HOLD}": "C1",
  "SO/IO1": "C3",
  "SI/IO0": "D2",
  "SCK": "E1",
  "~{WP}": "E3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "~{CS}": "input", GND: "power_in", "~{HOLD}": "bidirectional", "SO/IO1": "bidirectional", "SI/IO0": "bidirectional", SCK: "input", "~{WP}": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class AT25SF081_SSHD_X extends Component.withPins({
  "~{CS}": "1",
  "SO/IO1": "2",
  "~{WP}/IO2": "3",
  "GND": "4",
  "SI/IO0": "5",
  "SCK": "6",
  "~{HOLD}/IO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/IO1": "bidirectional", "~{WP}/IO2": "bidirectional", GND: "power_in", "SI/IO0": "bidirectional", SCK: "input", "~{HOLD}/IO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT25SF041B_SSHD_X extends Component.withPins({
  "~{CS}": "1",
  "SO/IO1": "2",
  "~{WP}/IO2": "3",
  "GND": "4",
  "SI/IO0": "5",
  "SCK": "6",
  "~{HOLD}/IO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/IO1": "bidirectional", "~{WP}/IO2": "bidirectional", GND: "power_in", "SI/IO0": "bidirectional", SCK: "input", "~{HOLD}/IO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT25SF081_SSHF_X extends Component.withPins({
  "~{CS}": "1",
  "SO/IO1": "2",
  "~{WP}/IO2": "3",
  "GND": "4",
  "SI/IO0": "5",
  "SCK": "6",
  "~{HOLD}/IO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/IO1": "bidirectional", "~{WP}/IO2": "bidirectional", GND: "power_in", "SI/IO0": "bidirectional", SCK: "input", "~{HOLD}/IO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT25SF081_XMHD_X extends Component.withPins({
  "~{CS}": "1",
  "SO/IO1": "2",
  "~{WP}/IO2": "3",
  "GND": "4",
  "SI/IO0": "5",
  "SCK": "6",
  "~{HOLD}/IO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/IO1": "bidirectional", "~{WP}/IO2": "bidirectional", GND: "power_in", "SI/IO0": "bidirectional", SCK: "input", "~{HOLD}/IO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT25SF081_XMHF_X extends Component.withPins({
  "~{CS}": "1",
  "SO/IO1": "2",
  "~{WP}/IO2": "3",
  "GND": "4",
  "SI/IO0": "5",
  "SCK": "6",
  "~{HOLD}/IO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/IO1": "bidirectional", "~{WP}/IO2": "bidirectional", GND: "power_in", "SI/IO0": "bidirectional", SCK: "input", "~{HOLD}/IO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT25SL321_U extends Component.withPins({
  "VCC": "A1",
  "~{CS}": "A2",
  "~{HOLD}/IO3": "B1",
  "SO/IO1": "B2",
  "SCK": "C1",
  "~{WP}/IO2": "C2",
  "SI/IO0": "D1",
  "GND": "D2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "~{CS}": "input", "~{HOLD}/IO3": "bidirectional", "SO/IO1": "bidirectional", SCK: "input", "~{WP}/IO2": "bidirectional", "SI/IO0": "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT45DB161_JC extends Component.withPins({
  "GND": "1",
  "~{CS}": "4",
  "SCK": "5",
  "SI": "6",
  "SO": "7",
  "RDY/~{BUSY}": "27",
  "~{RESET}": "28",
  "~{WP}": "29",
  "VCC": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", "RDY/~{BUSY}": "output", "~{RESET}": "input", "~{WP}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT45DB161_RC extends Component.withPins({
  "GND": "1",
  "~{CS}": "4",
  "SCK": "5",
  "SI": "6",
  "SO": "7",
  "RDY/~{BUSY}": "23",
  "~{RESET}": "24",
  "~{WP}": "25",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", "RDY/~{BUSY}": "output", "~{RESET}": "input", "~{WP}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT45DB161_TC extends Component.withPins({
  "RDY/~{BUSY}": "1",
  "~{RESET}": "2",
  "~{WP}": "3",
  "VCC": "6",
  "GND": "7",
  "~{CS}": "11",
  "SCK": "12",
  "SI": "13",
  "SO": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RDY/~{BUSY}": "output", "~{RESET}": "input", "~{WP}": "input", VCC: "power_in", GND: "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", ...opts.pinTypes } });
  }
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
 */
export class AT45DB161B_RC extends Component.withPins({
  "GND": "1",
  "~{CS}": "4",
  "SCK": "5",
  "SI": "6",
  "SO": "7",
  "RDY/~{BUSY}": "23",
  "~{RESET}": "24",
  "~{WP}": "25",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", "RDY/~{BUSY}": "output", "~{RESET}": "input", "~{WP}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT45DB161B_RC_2_5 extends Component.withPins({
  "GND": "1",
  "~{CS}": "4",
  "SCK": "5",
  "SI": "6",
  "SO": "7",
  "RDY/~{BUSY}": "23",
  "~{RESET}": "24",
  "~{WP}": "25",
  "VCC": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", "RDY/~{BUSY}": "output", "~{RESET}": "input", "~{WP}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT45DB161B_TC extends Component.withPins({
  "RDY/~{BUSY}": "1",
  "~{RESET}": "2",
  "~{WP}": "3",
  "VCC": "6",
  "GND": "7",
  "~{CS}": "11",
  "SCK": "12",
  "SI": "13",
  "SO": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RDY/~{BUSY}": "output", "~{RESET}": "input", "~{WP}": "input", VCC: "power_in", GND: "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", ...opts.pinTypes } });
  }
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
 */
export class AT45DB161B_TC_2_5 extends Component.withPins({
  "RDY/~{BUSY}": "1",
  "~{RESET}": "2",
  "~{WP}": "3",
  "VCC": "6",
  "GND": "7",
  "~{CS}": "11",
  "SCK": "12",
  "SI": "13",
  "SO": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RDY/~{BUSY}": "output", "~{RESET}": "input", "~{WP}": "input", VCC: "power_in", GND: "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", ...opts.pinTypes } });
  }
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
 */
export class AT45DB161D_SU extends Component.withPins({
  "SI": "1",
  "SCK": "2",
  "~{RESET}": "3",
  "~{CS}": "4",
  "~{WP}": "5",
  "VCC": "6",
  "GND": "7",
  "SO": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SI: "input", SCK: "input", "~{RESET}": "bidirectional", "~{CS}": "input", "~{WP}": "input", VCC: "power_in", GND: "power_in", SO: "output", ...opts.pinTypes } });
  }
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
 */
export class EPC2Lx20 extends Component.withPins({
  "TDO": "1",
  "GND": "10",
  "TDI": "11",
  "~{CASC}": "12",
  "~{INIT_CONF}": "13",
  "VPPSEL": "14",
  "NC_15": "15",
  "NC_16": "16",
  "NC_17": "17",
  "VPP": "18",
  "TMS": "19",
  "VCC": "20",
  "DATA": "2",
  "TCK": "3",
  "DCLK": "4",
  "VCCSEL": "5",
  "NC_6": "6",
  "NC_7": "7",
  "OE": "8",
  "~{CS}": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TDO: "output", GND: "power_in", TDI: "input", "~{CASC}": "output", "~{INIT_CONF}": "bidirectional", VPPSEL: "input", NC_15: "no_connect", NC_16: "no_connect", NC_17: "no_connect", VPP: "power_in", TMS: "input", VCC: "power_in", DATA: "output", TCK: "input", DCLK: "bidirectional", VCCSEL: "input", NC_6: "no_connect", NC_7: "no_connect", OE: "bidirectional", "~{CS}": "input", ...opts.pinTypes } });
  }
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
 */
export class EPCQ16ASI8N extends Component.withPins({
  "~{CS}": "1",
  "DATA1": "2",
  "DATA2": "3",
  "GND": "4",
  "DATA0": "5",
  "DCLK": "6",
  "DATA3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", DATA1: "bidirectional", DATA2: "bidirectional", GND: "power_in", DATA0: "bidirectional", DCLK: "input", DATA3: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EPCQ32ASI8N extends Component.withPins({
  "~{CS}": "1",
  "DATA1": "2",
  "DATA2": "3",
  "GND": "4",
  "DATA0": "5",
  "DCLK": "6",
  "DATA3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", DATA1: "bidirectional", DATA2: "bidirectional", GND: "power_in", DATA0: "bidirectional", DCLK: "input", DATA3: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class GD25D10CT extends Component.withPins({
  "~{CS}": "1",
  "O1/SO": "2",
  "~{WP}": "3",
  "VSS": "4",
  "SI/IO0": "5",
  "SCLK": "6",
  "NC": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "O1/SO": "output", "~{WP}": "input", VSS: "power_in", "SI/IO0": "bidirectional", SCLK: "input", NC: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class GD25D05CT extends Component.withPins({
  "~{CS}": "1",
  "O1/SO": "2",
  "~{WP}": "3",
  "VSS": "4",
  "SI/IO0": "5",
  "SCLK": "6",
  "NC": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "O1/SO": "output", "~{WP}": "input", VSS: "power_in", "SI/IO0": "bidirectional", SCLK: "input", NC: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class GD25QxxxEY extends Component.withPins({
  "~{CS}": "1",
  "SO/IO1": "2",
  "~{WP}/IO2": "3",
  "VSS": "4",
  "SI/IO0": "5",
  "SCLK": "6",
  "~{HOLD}/~{RESET}/IO3": "7",
  "VCC": "8",
  "PAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/IO1": "bidirectional", "~{WP}/IO2": "bidirectional", VSS: "power_in", "SI/IO0": "bidirectional", SCLK: "input", "~{HOLD}/~{RESET}/IO3": "bidirectional", VCC: "power_in", PAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class IS25WP256D_xM extends Component.withPins({
  "~{HOLD}/IO3": "1",
  "VCC": "2",
  "~{RESET}/NC": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "~{CE}": "7",
  "SO/IO1": "8",
  "~{WP}/IO2": "9",
  "GND": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "SI/IO0": "15",
  "SCK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{HOLD}/IO3": "bidirectional", VCC: "power_in", "~{RESET}/NC": "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", "~{CE}": "input", "SO/IO1": "bidirectional", "~{WP}/IO2": "bidirectional", GND: "power_in", NC_11: "no_connect", NC_12: "no_connect", NC_13: "no_connect", NC_14: "no_connect", "SI/IO0": "bidirectional", SCK: "input", ...opts.pinTypes } });
  }
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
 */
export class M25PX32_VMP extends Component.withPins({
  "~{S}": "1",
  "DQ1": "2",
  "~{W}/V_{PP}": "3",
  "V_{SS}": "4",
  "DQ0": "5",
  "C": "6",
  "~{HOLD}": "7",
  "V_{CC}": "8",
  "PAD/V_{SS}": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{S}": "input", DQ1: "bidirectional", "~{W}/V_{PP}": "input", "V_{SS}": "power_in", DQ0: "bidirectional", C: "input", "~{HOLD}": "input", "V_{CC}": "power_in", "PAD/V_{SS}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class M25PX32_VMW extends Component.withPins({
  "~{S}": "1",
  "DQ1": "2",
  "~{W}/V_{PP}": "3",
  "V_{SS}": "4",
  "DQ0": "5",
  "C": "6",
  "~{HOLD}": "7",
  "V_{CC}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{S}": "input", DQ1: "bidirectional", "~{W}/V_{PP}": "input", "V_{SS}": "power_in", DQ0: "bidirectional", C: "input", "~{HOLD}": "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_Flash:M25PX32-VMW";
  override referencePrefix = "U";
}

/**
 * Flash EEProm 512Ko (TSOP 40 pack.) 3,3V
 *
 * KiCad symbol: `Memory_Flash:M29W004`. Reference prefix: `U`.
 * Keywords: EEPROM FLASH 512KO.
 */
export class M29W004 extends Component.withPins({
  "A16": "1",
  "A15": "2",
  "A14": "3",
  "A13": "4",
  "A12": "5",
  "A11": "6",
  "A9": "7",
  "A8": "8",
  "WE": "9",
  "Rst/B": "10",
  "Busy": "12",
  "A18": "13",
  "A7": "14",
  "A6": "15",
  "A5": "16",
  "A4": "17",
  "A3": "18",
  "A2": "19",
  "A1": "20",
  "A0": "21",
  "CE": "22",
  "GND_23": "23",
  "OE": "24",
  "D0": "25",
  "D1": "26",
  "D2": "27",
  "D3": "28",
  "VCC_30": "30",
  "VCC_31": "31",
  "D4": "32",
  "D5": "33",
  "D6": "34",
  "D7": "35",
  "A10": "36",
  "GND_39": "39",
  "A17": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A16: "input", A15: "input", A14: "input", A13: "input", A12: "input", A11: "input", A9: "input", A8: "input", WE: "input", "Rst/B": "input", Busy: "output", A18: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", CE: "input", GND_23: "power_in", OE: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", VCC_30: "power_in", VCC_31: "power_in", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", A10: "input", GND_39: "power_in", A17: "input", ...opts.pinTypes } });
  }
  override schema = "Memory_Flash:M29W004";
  override referencePrefix = "U";
}

/**
 * Flash EEProm 1MO (TSOP 40 pack.) 3,3V
 *
 * KiCad symbol: `Memory_Flash:M29W008`. Reference prefix: `U`.
 * Keywords: EEPROM FLASH 1MO.
 */
export class M29W008 extends Component.withPins({
  "A16": "1",
  "A15": "2",
  "A14": "3",
  "A13": "4",
  "A12": "5",
  "A11": "6",
  "A9": "7",
  "A8": "8",
  "WE": "9",
  "Rst/B": "10",
  "Busy": "12",
  "A18": "13",
  "A7": "14",
  "A6": "15",
  "A5": "16",
  "A4": "17",
  "A3": "18",
  "A2": "19",
  "A1": "20",
  "A0": "21",
  "CE": "22",
  "GND_23": "23",
  "OE": "24",
  "D0": "25",
  "D1": "26",
  "D2": "27",
  "D3": "28",
  "VCC_30": "30",
  "VCC_31": "31",
  "D4": "32",
  "D5": "33",
  "D6": "34",
  "D7": "35",
  "A10": "36",
  "A19": "37",
  "GND_39": "39",
  "A17": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A16: "input", A15: "input", A14: "input", A13: "input", A12: "input", A11: "input", A9: "input", A8: "input", WE: "input", "Rst/B": "input", Busy: "output", A18: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", CE: "input", GND_23: "power_in", OE: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", VCC_30: "power_in", VCC_31: "power_in", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", A10: "input", A19: "input", GND_39: "power_in", A17: "input", ...opts.pinTypes } });
  }
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
 */
export class MT25QUxxxxxx1xW7 extends Component.withPins({
  "~{S}": "1",
  "DQ1": "2",
  "~{W}/DQ2": "3",
  "VSS": "4",
  "DQ0": "5",
  "C": "6",
  "~{RESET}/DQ3": "7",
  "VCC": "8",
  "PAD": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{S}": "input", DQ1: "bidirectional", "~{W}/DQ2": "input", VSS: "power_in", DQ0: "bidirectional", C: "input", "~{RESET}/DQ3": "input", VCC: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MX25L3233FM extends Component.withPins({
  "~{HOLD}/SIO3": "1",
  "VCC": "2",
  "~{CS}": "7",
  "SO/SIO1": "8",
  "~{WP}/SIO2": "9",
  "GND": "10",
  "SI/SIO0": "15",
  "SCLK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{HOLD}/SIO3": "bidirectional", VCC: "power_in", "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class MX25R3235FM2xx1 extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "~{WP}/SIO2": "3",
  "GND": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "~{HOLD}/SIO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", "~{HOLD}/SIO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MX25L3233FM1 extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "~{WP}/SIO2": "3",
  "GND": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "~{HOLD}/SIO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", "~{HOLD}/SIO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MX25L3233FM2 extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "~{WP}/SIO2": "3",
  "GND": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "~{HOLD}/SIO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", "~{HOLD}/SIO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MX25L3233FZN extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "~{WP}/SIO2": "3",
  "GND": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "~{HOLD}/SIO3": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", "~{HOLD}/SIO3": "bidirectional", VCC: "power_in", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class MX25R3235FM1xx0 extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "~{WP}/SIO2": "3",
  "GND": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "~{RESET}/SIO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", "~{RESET}/SIO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MX25R3235FM1xx1 extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "~{WP}/SIO2": "3",
  "GND": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "~{HOLD}/SIO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", "~{HOLD}/SIO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MX25R3235FM2xx0 extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "~{WP}/SIO2": "3",
  "GND": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "~{RESET}/SIO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", "~{RESET}/SIO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MX25R3235FZNxx0 extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "~{WP}/SIO2": "3",
  "GND_4": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "~{RESET}/SIO3": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND_4: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", "~{RESET}/SIO3": "bidirectional", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class MX25R3235FZNxx1 extends Component.withPins({
  "~{CS}": "1",
  "SO/SIO1": "2",
  "~{WP}/SIO2": "3",
  "GND_4": "4",
  "SI/SIO0": "5",
  "SCLK": "6",
  "~{HOLD}/SIO3": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/SIO1": "bidirectional", "~{WP}/SIO2": "bidirectional", GND_4: "power_in", "SI/SIO0": "bidirectional", SCLK: "input", "~{HOLD}/SIO3": "bidirectional", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class SST25VF080B_50_4x_S2Ax extends Component.withPins({
  "~{CE}": "1",
  "SO": "2",
  "~{WP}": "3",
  "VSS": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CE}": "input", SO: "output", "~{WP}": "input", VSS: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SST26VF064Bxx_xxxx_MF extends Component.withPins({
  "~{CS}": "1",
  "SO/IO1": "2",
  "~{WP}/IO2": "3",
  "GND": "4",
  "SI/IO0": "5",
  "SCK": "6",
  "~{HOLD}/IO3": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "SO/IO1": "bidirectional", "~{WP}/IO2": "bidirectional", GND: "power_in", "SI/IO0": "bidirectional", SCK: "input", "~{HOLD}/IO3": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_Flash:SST26VF064Bxx-xxxx-MF";
  override referencePrefix = "U";
}

/**
 * Silicon Storage Technology (SSF) 128k x 8 Flash ROM
 *
 * KiCad symbol: `Memory_Flash:SST39SF010`. Reference prefix: `U`.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25022B.pdf
 * Keywords: 128k flash rom.
 */
export class SST39SF010 extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC_1": "1",
  "A16": "2",
  "A15": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "D0": "13",
  "D1": "14",
  "D2": "15",
  "D3": "17",
  "D4": "18",
  "D5": "19",
  "D6": "20",
  "D7": "21",
  "CE": "22",
  "A10": "23",
  "OE": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "A14": "29",
  "NC_30": "30",
  "PGM": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC_1: "input", A16: "input", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", CE: "input", A10: "input", OE: "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", NC_30: "input", PGM: "input", ...opts.pinTypes } });
  }
  override schema = "Memory_Flash:SST39SF010";
  override referencePrefix = "U";
}

/**
 * Silicon Storage Technology (SSF) 256k x 8 Flash ROM
 *
 * KiCad symbol: `Memory_Flash:SST39SF020`. Reference prefix: `U`.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25022B.pdf
 * Keywords: 256k flash rom.
 */
export class SST39SF020 extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "NC": "1",
  "A16": "2",
  "A15": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "D0": "13",
  "D1": "14",
  "D2": "15",
  "D3": "17",
  "D4": "18",
  "D5": "19",
  "D6": "20",
  "D7": "21",
  "CE": "22",
  "A10": "23",
  "OE": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "A14": "29",
  "A17": "30",
  "PGM": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", NC: "input", A16: "input", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", CE: "input", A10: "input", OE: "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", A17: "input", PGM: "input", ...opts.pinTypes } });
  }
  override schema = "Memory_Flash:SST39SF020";
  override referencePrefix = "U";
}

/**
 * Silicon Storage Technology (SSF) 512k x 8 Flash ROM
 *
 * KiCad symbol: `Memory_Flash:SST39SF040`. Reference prefix: `U`.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/25022B.pdf
 * Keywords: 512k flash rom.
 */
export class SST39SF040 extends Component.withPins({
  "GND": "16",
  "VCC": "32",
  "A18": "1",
  "A16": "2",
  "A15": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "D0": "13",
  "D1": "14",
  "D2": "15",
  "D3": "17",
  "D4": "18",
  "D5": "19",
  "D6": "20",
  "D7": "21",
  "CE": "22",
  "A10": "23",
  "OE": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "A14": "29",
  "A17": "30",
  "PGM": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VCC: "power_in", A18: "input", A16: "input", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", CE: "input", A10: "input", OE: "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", A17: "input", PGM: "input", ...opts.pinTypes } });
  }
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
 */
export class W25Q32JVZP extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}/IO_{2}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}/IO_{2}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}/~{RESET}/IO_{3}": "bidirectional", VCC: "power_in", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class W25Q128JVE extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}/IO_{2}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}/IO_{2}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}/~{RESET}/IO_{3}": "bidirectional", VCC: "power_in", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class W25Q128JVP extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}/IO_{2}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}/IO_{2}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}/~{RESET}/IO_{3}": "bidirectional", VCC: "power_in", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class W25Q32JVSS extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}/IO_{2}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}/IO_{2}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}/~{RESET}/IO_{3}": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class W25Q128JVS extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}/IO_{2}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}/IO_{2}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}/~{RESET}/IO_{3}": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class W25Q16JVSS extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}/IO_{2}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}/~{RESET}/IO_{3}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}/IO_{2}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}/~{RESET}/IO_{3}": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class W25X40CLSN extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class W25X20CLSN extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class W25X20CLZP extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}": "bidirectional", VCC: "power_in", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class W25X40CLSS extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class W25X40CLSV extends Component.withPins({
  "~{CS}": "1",
  "DO/IO_{1}": "2",
  "~{WP}": "3",
  "GND": "4",
  "DI/IO_{0}": "5",
  "CLK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", "DO/IO_{1}": "bidirectional", "~{WP}": "bidirectional", GND: "power_in", "DI/IO_{0}": "bidirectional", CLK: "input", "~{HOLD}": "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XTSD01G extends Component.withPins({
  "SD2": "1",
  "SD3/~{CS}": "2",
  "CLK": "3",
  "VSS": "4",
  "CMD/DI": "5",
  "SD0/DO": "6",
  "SD1": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD2: "bidirectional", "SD3/~{CS}": "bidirectional", CLK: "input", VSS: "power_in", "CMD/DI": "input", "SD0/DO": "bidirectional", SD1: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XTSD02G extends Component.withPins({
  "SD2": "1",
  "SD3/~{CS}": "2",
  "CLK": "3",
  "VSS": "4",
  "CMD/DI": "5",
  "SD0/DO": "6",
  "SD1": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD2: "bidirectional", "SD3/~{CS}": "bidirectional", CLK: "input", VSS: "power_in", "CMD/DI": "input", "SD0/DO": "bidirectional", SD1: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XTSD04G extends Component.withPins({
  "SD2": "1",
  "SD3/~{CS}": "2",
  "CLK": "3",
  "VSS": "4",
  "CMD/DI": "5",
  "SD0/DO": "6",
  "SD1": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD2: "bidirectional", "SD3/~{CS}": "bidirectional", CLK: "input", VSS: "power_in", "CMD/DI": "input", "SD0/DO": "bidirectional", SD1: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XTSD08G extends Component.withPins({
  "SD2": "1",
  "SD3/~{CS}": "2",
  "CLK": "3",
  "VSS": "4",
  "CMD/DI": "5",
  "SD0/DO": "6",
  "SD1": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD2: "bidirectional", "SD3/~{CS}": "bidirectional", CLK: "input", VSS: "power_in", "CMD/DI": "input", "SD0/DO": "bidirectional", SD1: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_Flash:XTSD08G";
  override referencePrefix = "U";
}
