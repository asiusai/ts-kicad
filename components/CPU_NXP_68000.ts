// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 16/32-bit microprocessor, 16-bit external data bus, 23-bit external address bus (effectively 24-bit), PLCC-68 (case 779-01)
 *
 * KiCad symbol: `CPU_NXP_68000:MC68000FN`. Reference prefix: `U`.
 * Footprint filters: *PLCC*24.2*x24.2*P1.27mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC68000UM.pdf
 * Keywords: Motorola Freescale m68000 m68k CISC CPU HMOS SCN68000xxA68 HD68000CP TS68000xFN Obsolete.
 * Default footprint: Package_LCC:PLCC-68_24.2x24.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68000FN extends Component.withPins({
  /** Physical pin 1: D4; bidirectional. */
  "D4": "1",
  /** Physical pin 2: D3; bidirectional. */
  "D3": "2",
  /** Physical pin 3: D2; bidirectional. */
  "D2": "3",
  /** Physical pin 4: D1; bidirectional. */
  "D1": "4",
  /** Physical pin 5: D0; bidirectional. */
  "D0": "5",
  /** Physical pin 6: ~{AS}; tri_state. */
  "~{AS}": "6",
  /** Physical pin 7: ~{UDS}; tri_state. */
  "~{UDS}": "7",
  /** Physical pin 8: ~{LDS}; tri_state. */
  "~{LDS}": "8",
  /** Physical pin 9: R/~{W}; tri_state. */
  "R/~{W}": "9",
  /** Physical pin 10: ~{DTACK}; input. */
  "~{DTACK}": "10",
  /** Physical pin 11: ~{BG}; output. */
  "~{BG}": "11",
  /** Physical pin 12: ~{BGACK}; input. */
  "~{BGACK}": "12",
  /** Physical pin 13: ~{BR}; input. */
  "~{BR}": "13",
  /** Physical pin 14: V_{CC}; power_in. */
  "V_{CC}_14": "14",
  /** Physical pin 15: CLK; input. */
  "CLK": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: ~{HALT}; bidirectional. */
  "~{HALT}": "19",
  /** Physical pin 20: ~{RESET}; bidirectional. */
  "~{RESET}": "20",
  /** Physical pin 21: ~{VMA}; tri_state. */
  "~{VMA}": "21",
  /** Physical pin 22: E; output. */
  "E": "22",
  /** Physical pin 23: ~{VPA}; input. */
  "~{VPA}": "23",
  /** Physical pin 24: ~{BERR}; input. */
  "~{BERR}": "24",
  /** Physical pin 25: ~{IPL2}; input. */
  "~{IPL2}": "25",
  /** Physical pin 26: ~{IPL1}; input. */
  "~{IPL1}": "26",
  /** Physical pin 27: ~{IPL0}; input. */
  "~{IPL0}": "27",
  /** Physical pin 28: FC2; tri_state. */
  "FC2": "28",
  /** Physical pin 29: FC1; tri_state. */
  "FC1": "29",
  /** Physical pin 30: FC0; tri_state. */
  "FC0": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: A1; tri_state. */
  "A1": "32",
  /** Physical pin 33: A2; tri_state. */
  "A2": "33",
  /** Physical pin 34: A3; tri_state. */
  "A3": "34",
  /** Physical pin 35: A4; tri_state. */
  "A4": "35",
  /** Physical pin 36: A5; tri_state. */
  "A5": "36",
  /** Physical pin 37: A6; tri_state. */
  "A6": "37",
  /** Physical pin 38: A7; tri_state. */
  "A7": "38",
  /** Physical pin 39: A8; tri_state. */
  "A8": "39",
  /** Physical pin 40: A9; tri_state. */
  "A9": "40",
  /** Physical pin 41: A10; tri_state. */
  "A10": "41",
  /** Physical pin 42: A11; tri_state. */
  "A11": "42",
  /** Physical pin 43: A12; tri_state. */
  "A12": "43",
  /** Physical pin 44: A13; tri_state. */
  "A13": "44",
  /** Physical pin 45: A14; tri_state. */
  "A14": "45",
  /** Physical pin 46: A15; tri_state. */
  "A15": "46",
  /** Physical pin 47: A16; tri_state. */
  "A16": "47",
  /** Physical pin 48: A17; tri_state. */
  "A17": "48",
  /** Physical pin 49: A18; tri_state. */
  "A18": "49",
  /** Physical pin 50: A19; tri_state. */
  "A19": "50",
  /** Physical pin 51: A20; tri_state. */
  "A20": "51",
  /** Physical pin 52: V_{CC}; passive. */
  "V_{CC}_52": "52",
  /** Physical pin 53: A21; tri_state. */
  "A21": "53",
  /** Physical pin 54: A22; tri_state. */
  "A22": "54",
  /** Physical pin 55: A23; tri_state. */
  "A23": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: D15; bidirectional. */
  "D15": "58",
  /** Physical pin 59: D14; bidirectional. */
  "D14": "59",
  /** Physical pin 60: D13; bidirectional. */
  "D13": "60",
  /** Physical pin 61: D12; bidirectional. */
  "D12": "61",
  /** Physical pin 62: D11; bidirectional. */
  "D11": "62",
  /** Physical pin 63: D10; bidirectional. */
  "D10": "63",
  /** Physical pin 64: D9; bidirectional. */
  "D9": "64",
  /** Physical pin 65: D8; bidirectional. */
  "D8": "65",
  /** Physical pin 66: D7; bidirectional. */
  "D7": "66",
  /** Physical pin 67: D6; bidirectional. */
  "D6": "67",
  /** Physical pin 68: D5; bidirectional. */
  "D5": "68",
}) {
  override schema = "CPU_NXP_68000:MC68000FN";
  override referencePrefix = "U";
}

/**
 * 16/32-bit microprocessor, 16-bit external data bus, 23-bit external address bus (effectively 24-bit), DIP-64 (900 mil, case 754-01)
 *
 * KiCad symbol: `CPU_NXP_68000:MC68000P`. Reference prefix: `U`.
 * Footprint filters: DIP*W22.86mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC68000UM.pdf
 * Keywords: Motorola Freescale m68000 m68k CISC CPU HMOS SCN68000xxN64 HD68000P TS68000xP Obsolete.
 * Default footprint: Package_DIP:DIP-64_W22.86mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68000P extends Component.withPins({
  /** Physical pin 1: D4; bidirectional. */
  "D4": "1",
  /** Physical pin 2: D3; bidirectional. */
  "D3": "2",
  /** Physical pin 3: D2; bidirectional. */
  "D2": "3",
  /** Physical pin 4: D1; bidirectional. */
  "D1": "4",
  /** Physical pin 5: D0; bidirectional. */
  "D0": "5",
  /** Physical pin 6: ~{AS}; tri_state. */
  "~{AS}": "6",
  /** Physical pin 7: ~{UDS}; tri_state. */
  "~{UDS}": "7",
  /** Physical pin 8: ~{LDS}; tri_state. */
  "~{LDS}": "8",
  /** Physical pin 9: R/~{W}; tri_state. */
  "R/~{W}": "9",
  /** Physical pin 10: ~{DTACK}; input. */
  "~{DTACK}": "10",
  /** Physical pin 11: ~{BG}; output. */
  "~{BG}": "11",
  /** Physical pin 12: ~{BGACK}; input. */
  "~{BGACK}": "12",
  /** Physical pin 13: ~{BR}; input. */
  "~{BR}": "13",
  /** Physical pin 14: V_{CC}; power_in. */
  "V_{CC}_14": "14",
  /** Physical pin 15: CLK; input. */
  "CLK": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: ~{HALT}; bidirectional. */
  "~{HALT}": "17",
  /** Physical pin 18: ~{RESET}; bidirectional. */
  "~{RESET}": "18",
  /** Physical pin 19: ~{VMA}; tri_state. */
  "~{VMA}": "19",
  /** Physical pin 20: E; output. */
  "E": "20",
  /** Physical pin 21: ~{VPA}; input. */
  "~{VPA}": "21",
  /** Physical pin 22: ~{BERR}; input. */
  "~{BERR}": "22",
  /** Physical pin 23: ~{IPL2}; input. */
  "~{IPL2}": "23",
  /** Physical pin 24: ~{IPL1}; input. */
  "~{IPL1}": "24",
  /** Physical pin 25: ~{IPL0}; input. */
  "~{IPL0}": "25",
  /** Physical pin 26: FC2; tri_state. */
  "FC2": "26",
  /** Physical pin 27: FC1; tri_state. */
  "FC1": "27",
  /** Physical pin 28: FC0; tri_state. */
  "FC0": "28",
  /** Physical pin 29: A1; tri_state. */
  "A1": "29",
  /** Physical pin 30: A2; tri_state. */
  "A2": "30",
  /** Physical pin 31: A3; tri_state. */
  "A3": "31",
  /** Physical pin 32: A4; tri_state. */
  "A4": "32",
  /** Physical pin 33: A5; tri_state. */
  "A5": "33",
  /** Physical pin 34: A6; tri_state. */
  "A6": "34",
  /** Physical pin 35: A7; tri_state. */
  "A7": "35",
  /** Physical pin 36: A8; tri_state. */
  "A8": "36",
  /** Physical pin 37: A9; tri_state. */
  "A9": "37",
  /** Physical pin 38: A10; tri_state. */
  "A10": "38",
  /** Physical pin 39: A11; tri_state. */
  "A11": "39",
  /** Physical pin 40: A12; tri_state. */
  "A12": "40",
  /** Physical pin 41: A13; tri_state. */
  "A13": "41",
  /** Physical pin 42: A14; tri_state. */
  "A14": "42",
  /** Physical pin 43: A15; tri_state. */
  "A15": "43",
  /** Physical pin 44: A16; tri_state. */
  "A16": "44",
  /** Physical pin 45: A17; tri_state. */
  "A17": "45",
  /** Physical pin 46: A18; tri_state. */
  "A18": "46",
  /** Physical pin 47: A19; tri_state. */
  "A19": "47",
  /** Physical pin 48: A20; tri_state. */
  "A20": "48",
  /** Physical pin 49: V_{CC}; passive. */
  "V_{CC}_49": "49",
  /** Physical pin 50: A21; tri_state. */
  "A21": "50",
  /** Physical pin 51: A22; tri_state. */
  "A22": "51",
  /** Physical pin 52: A23; tri_state. */
  "A23": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: D15; bidirectional. */
  "D15": "54",
  /** Physical pin 55: D14; bidirectional. */
  "D14": "55",
  /** Physical pin 56: D13; bidirectional. */
  "D13": "56",
  /** Physical pin 57: D12; bidirectional. */
  "D12": "57",
  /** Physical pin 58: D11; bidirectional. */
  "D11": "58",
  /** Physical pin 59: D10; bidirectional. */
  "D10": "59",
  /** Physical pin 60: D9; bidirectional. */
  "D9": "60",
  /** Physical pin 61: D8; bidirectional. */
  "D8": "61",
  /** Physical pin 62: D7; bidirectional. */
  "D7": "62",
  /** Physical pin 63: D6; bidirectional. */
  "D6": "63",
  /** Physical pin 64: D5; bidirectional. */
  "D5": "64",
}) {
  override schema = "CPU_NXP_68000:MC68000P";
  override referencePrefix = "U";
}

/**
 * 8/32-bit microprocessor, 8-bit external data bus, 22-bit external address bus, PLCC-52 (case 778-01/778-02)
 *
 * KiCad symbol: `CPU_NXP_68000:MC68008FN`. Reference prefix: `U`.
 * Footprint filters: *MO047AD*PLCC*19.1*x19.1*P1.27mm*.
 * @see https://archive.org/details/bitsavers_motorola68Apr85_5825575/mode/1up
 * Keywords: Motorola Freescale m68000 m68k CISC CPU HMOS Obsolete.
 * Default footprint: Package_LCC:MO047AD_PLCC-52_19.1x19.1mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68008FN extends Component.withPins({
  /** Physical pin 1: A2; tri_state. */
  "A2": "1",
  /** Physical pin 2: A3; tri_state. */
  "A3": "2",
  /** Physical pin 3: A4; tri_state. */
  "A4": "3",
  /** Physical pin 4: A5; tri_state. */
  "A5": "4",
  /** Physical pin 5: A6; tri_state. */
  "A6": "5",
  /** Physical pin 6: A7; tri_state. */
  "A7": "6",
  /** Physical pin 7: A8; tri_state. */
  "A8": "7",
  /** Physical pin 8: A9; tri_state. */
  "A9": "8",
  /** Physical pin 9: A10; tri_state. */
  "A10": "9",
  /** Physical pin 10: A11; tri_state. */
  "A11": "10",
  /** Physical pin 11: A12; tri_state. */
  "A12": "11",
  /** Physical pin 12: A13; tri_state. */
  "A13": "12",
  /** Physical pin 13: A21; tri_state. */
  "A21": "13",
  /** Physical pin 14: A14; tri_state. */
  "A14": "14",
  /** Physical pin 15: V_{CC}; power_in. */
  "V_{CC}": "15",
  /** Physical pin 16: A15; tri_state. */
  "A15": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: A16; tri_state. */
  "A16": "18",
  /** Physical pin 19: A17; tri_state. */
  "A17": "19",
  /** Physical pin 20: A18; tri_state. */
  "A18": "20",
  /** Physical pin 21: A19; tri_state. */
  "A19": "21",
  /** Physical pin 22: A20; tri_state. */
  "A20": "22",
  /** Physical pin 23: D7; bidirectional. */
  "D7": "23",
  /** Physical pin 24: D6; bidirectional. */
  "D6": "24",
  /** Physical pin 25: D5; bidirectional. */
  "D5": "25",
  /** Physical pin 26: D4; bidirectional. */
  "D4": "26",
  /** Physical pin 27: D3; bidirectional. */
  "D3": "27",
  /** Physical pin 28: D2; bidirectional. */
  "D2": "28",
  /** Physical pin 29: D1; bidirectional. */
  "D1": "29",
  /** Physical pin 30: D0; bidirectional. */
  "D0": "30",
  /** Physical pin 31: ~{AS}; tri_state. */
  "~{AS}": "31",
  /** Physical pin 32: ~{DS}; tri_state. */
  "~{DS}": "32",
  /** Physical pin 33: R/~{W}; tri_state. */
  "R/~{W}": "33",
  /** Physical pin 34: ~{DTACK}; input. */
  "~{DTACK}": "34",
  /** Physical pin 35: ~{BG}; output. */
  "~{BG}": "35",
  /** Physical pin 36: ~{BGACK}; input. */
  "~{BGACK}": "36",
  /** Physical pin 37: ~{BR}; input. */
  "~{BR}": "37",
  /** Physical pin 38: CLK; input. */
  "CLK": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: ~{HALT}; bidirectional. */
  "~{HALT}": "40",
  /** Physical pin 41: ~{RESET}; bidirectional. */
  "~{RESET}": "41",
  /** Physical pin 42: E; output. */
  "E": "42",
  /** Physical pin 43: ~{VPA}; input. */
  "~{VPA}": "43",
  /** Physical pin 44: ~{BERR}; input. */
  "~{BERR}": "44",
  /** Physical pin 45: ~{IPL1}; input. */
  "~{IPL1}": "45",
  /** Physical pin 46: ~{IPL2}; input. */
  "~{IPL2}": "46",
  /** Physical pin 47: ~{IPL0}; input. */
  "~{IPL0}": "47",
  /** Physical pin 48: FC2; tri_state. */
  "FC2": "48",
  /** Physical pin 49: FC1; tri_state. */
  "FC1": "49",
  /** Physical pin 50: FC0; tri_state. */
  "FC0": "50",
  /** Physical pin 51: A0; tri_state. */
  "A0": "51",
  /** Physical pin 52: A1; tri_state. */
  "A1": "52",
}) {
  override schema = "CPU_NXP_68000:MC68008FN";
  override referencePrefix = "U";
}

/**
 * 8/32-bit microprocessor, 8-bit external data bus, 20-bit external address bus, DIP-48 (600 mil, case 767-02)
 *
 * KiCad symbol: `CPU_NXP_68000:MC68008P`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC68000UM.pdf
 * Keywords: Motorola Freescale m68000 m68k CISC CPU HMOS Obsolete.
 * Default footprint: Package_DIP:DIP-48_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68008P extends Component.withPins({
  /** Physical pin 1: A3; tri_state. */
  "A3": "1",
  /** Physical pin 2: A4; tri_state. */
  "A4": "2",
  /** Physical pin 3: A5; tri_state. */
  "A5": "3",
  /** Physical pin 4: A6; tri_state. */
  "A6": "4",
  /** Physical pin 5: A7; tri_state. */
  "A7": "5",
  /** Physical pin 6: A8; tri_state. */
  "A8": "6",
  /** Physical pin 7: A9; tri_state. */
  "A9": "7",
  /** Physical pin 8: A10; tri_state. */
  "A10": "8",
  /** Physical pin 9: A11; tri_state. */
  "A11": "9",
  /** Physical pin 10: A12; tri_state. */
  "A12": "10",
  /** Physical pin 11: A13; tri_state. */
  "A13": "11",
  /** Physical pin 12: A14; tri_state. */
  "A14": "12",
  /** Physical pin 13: V_{CC}; power_in. */
  "V_{CC}": "13",
  /** Physical pin 14: A15; tri_state. */
  "A15": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: A16; tri_state. */
  "A16": "16",
  /** Physical pin 17: A17; tri_state. */
  "A17": "17",
  /** Physical pin 18: A18; tri_state. */
  "A18": "18",
  /** Physical pin 19: A19; tri_state. */
  "A19": "19",
  /** Physical pin 20: D7; bidirectional. */
  "D7": "20",
  /** Physical pin 21: D6; bidirectional. */
  "D6": "21",
  /** Physical pin 22: D5; bidirectional. */
  "D5": "22",
  /** Physical pin 23: D4; bidirectional. */
  "D4": "23",
  /** Physical pin 24: D3; bidirectional. */
  "D3": "24",
  /** Physical pin 25: D2; bidirectional. */
  "D2": "25",
  /** Physical pin 26: D1; bidirectional. */
  "D1": "26",
  /** Physical pin 27: D0; bidirectional. */
  "D0": "27",
  /** Physical pin 28: ~{AS}; tri_state. */
  "~{AS}": "28",
  /** Physical pin 29: ~{DS}; tri_state. */
  "~{DS}": "29",
  /** Physical pin 30: R/~{W}; tri_state. */
  "R/~{W}": "30",
  /** Physical pin 31: ~{DTACK}; input. */
  "~{DTACK}": "31",
  /** Physical pin 32: ~{BG}; output. */
  "~{BG}": "32",
  /** Physical pin 33: ~{BR}; input. */
  "~{BR}": "33",
  /** Physical pin 34: CLK; input. */
  "CLK": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: ~{HALT}; bidirectional. */
  "~{HALT}": "36",
  /** Physical pin 37: ~{RESET}; bidirectional. */
  "~{RESET}": "37",
  /** Physical pin 38: E; output. */
  "E": "38",
  /** Physical pin 39: ~{VPA}; input. */
  "~{VPA}": "39",
  /** Physical pin 40: ~{BERR}; input. */
  "~{BERR}": "40",
  /** Physical pin 41: ~{IPL1}; input. */
  "~{IPL1}": "41",
  /** Physical pin 42: ~{IPL2}/~{IPL0}; input. */
  "~{IPL2}/~{IPL0}": "42",
  /** Physical pin 43: FC2; tri_state. */
  "FC2": "43",
  /** Physical pin 44: FC1; tri_state. */
  "FC1": "44",
  /** Physical pin 45: FC0; tri_state. */
  "FC0": "45",
  /** Physical pin 46: A0; tri_state. */
  "A0": "46",
  /** Physical pin 47: A1; tri_state. */
  "A1": "47",
  /** Physical pin 48: A2; tri_state. */
  "A2": "48",
}) {
  override schema = "CPU_NXP_68000:MC68008P";
  override referencePrefix = "U";
}

/**
 * 16/32-bit microprocessor, 16-bit external data bus, 23-bit external address bus (effectively 24-bit), virtual memory support, loop mode, DIP-64 (900 mil, case 754-01)
 *
 * KiCad symbol: `CPU_NXP_68000:MC68010P`. Reference prefix: `U`.
 * Footprint filters: DIP*W22.86mm*.
 * @see https://www.nxp.com/docs/en/reference-manual/MC68000UM.pdf
 * Keywords: Motorola Freescale m68000 m68k CISC CPU HMOS SCN68010xxN64 Obsolete.
 * Default footprint: Package_DIP:DIP-64_W22.86mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68010P extends Component.withPins({
  /** Physical pin 1: D4; bidirectional. */
  "D4": "1",
  /** Physical pin 2: D3; bidirectional. */
  "D3": "2",
  /** Physical pin 3: D2; bidirectional. */
  "D2": "3",
  /** Physical pin 4: D1; bidirectional. */
  "D1": "4",
  /** Physical pin 5: D0; bidirectional. */
  "D0": "5",
  /** Physical pin 6: ~{AS}; tri_state. */
  "~{AS}": "6",
  /** Physical pin 7: ~{UDS}; tri_state. */
  "~{UDS}": "7",
  /** Physical pin 8: ~{LDS}; tri_state. */
  "~{LDS}": "8",
  /** Physical pin 9: R/~{W}; tri_state. */
  "R/~{W}": "9",
  /** Physical pin 10: ~{DTACK}; input. */
  "~{DTACK}": "10",
  /** Physical pin 11: ~{BG}; output. */
  "~{BG}": "11",
  /** Physical pin 12: ~{BGACK}; input. */
  "~{BGACK}": "12",
  /** Physical pin 13: ~{BR}; input. */
  "~{BR}": "13",
  /** Physical pin 14: V_{CC}; power_in. */
  "V_{CC}_14": "14",
  /** Physical pin 15: CLK; input. */
  "CLK": "15",
  /** Physical pin 16: GND; power_in. */
  "GND_16": "16",
  /** Physical pin 17: ~{HALT}; bidirectional. */
  "~{HALT}": "17",
  /** Physical pin 18: ~{RESET}; bidirectional. */
  "~{RESET}": "18",
  /** Physical pin 19: ~{VMA}; tri_state. */
  "~{VMA}": "19",
  /** Physical pin 20: E; output. */
  "E": "20",
  /** Physical pin 21: ~{VPA}; input. */
  "~{VPA}": "21",
  /** Physical pin 22: ~{BERR}; input. */
  "~{BERR}": "22",
  /** Physical pin 23: ~{IPL2}; input. */
  "~{IPL2}": "23",
  /** Physical pin 24: ~{IPL1}; input. */
  "~{IPL1}": "24",
  /** Physical pin 25: ~{IPL0}; input. */
  "~{IPL0}": "25",
  /** Physical pin 26: FC2; tri_state. */
  "FC2": "26",
  /** Physical pin 27: FC1; tri_state. */
  "FC1": "27",
  /** Physical pin 28: FC0; tri_state. */
  "FC0": "28",
  /** Physical pin 29: A1; tri_state. */
  "A1": "29",
  /** Physical pin 30: A2; tri_state. */
  "A2": "30",
  /** Physical pin 31: A3; tri_state. */
  "A3": "31",
  /** Physical pin 32: A4; tri_state. */
  "A4": "32",
  /** Physical pin 33: A5; tri_state. */
  "A5": "33",
  /** Physical pin 34: A6; tri_state. */
  "A6": "34",
  /** Physical pin 35: A7; tri_state. */
  "A7": "35",
  /** Physical pin 36: A8; tri_state. */
  "A8": "36",
  /** Physical pin 37: A9; tri_state. */
  "A9": "37",
  /** Physical pin 38: A10; tri_state. */
  "A10": "38",
  /** Physical pin 39: A11; tri_state. */
  "A11": "39",
  /** Physical pin 40: A12; tri_state. */
  "A12": "40",
  /** Physical pin 41: A13; tri_state. */
  "A13": "41",
  /** Physical pin 42: A14; tri_state. */
  "A14": "42",
  /** Physical pin 43: A15; tri_state. */
  "A15": "43",
  /** Physical pin 44: A16; tri_state. */
  "A16": "44",
  /** Physical pin 45: A17; tri_state. */
  "A17": "45",
  /** Physical pin 46: A18; tri_state. */
  "A18": "46",
  /** Physical pin 47: A19; tri_state. */
  "A19": "47",
  /** Physical pin 48: A20; tri_state. */
  "A20": "48",
  /** Physical pin 49: V_{CC}; passive. */
  "V_{CC}_49": "49",
  /** Physical pin 50: A21; tri_state. */
  "A21": "50",
  /** Physical pin 51: A22; tri_state. */
  "A22": "51",
  /** Physical pin 52: A23; tri_state. */
  "A23": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: D15; bidirectional. */
  "D15": "54",
  /** Physical pin 55: D14; bidirectional. */
  "D14": "55",
  /** Physical pin 56: D13; bidirectional. */
  "D13": "56",
  /** Physical pin 57: D12; bidirectional. */
  "D12": "57",
  /** Physical pin 58: D11; bidirectional. */
  "D11": "58",
  /** Physical pin 59: D10; bidirectional. */
  "D10": "59",
  /** Physical pin 60: D9; bidirectional. */
  "D9": "60",
  /** Physical pin 61: D8; bidirectional. */
  "D8": "61",
  /** Physical pin 62: D7; bidirectional. */
  "D7": "62",
  /** Physical pin 63: D6; bidirectional. */
  "D6": "63",
  /** Physical pin 64: D5; bidirectional. */
  "D5": "64",
}) {
  override schema = "CPU_NXP_68000:MC68010P";
  override referencePrefix = "U";
}

/**
 * MCU 32 bit, PQFP-132
 *
 * KiCad symbol: `CPU_NXP_68000:MC68332`. Reference prefix: `U`.
 * Footprint filters: PQFP*24x24mm*P0.635mm*.
 * @see http://pdf.datasheetcatalog.com/datasheet/motorola/SPAKMC332AVFC20.pdf
 * Keywords: MCU 32 bit.
 * Default footprint: Package_QFP:PQFP-132_24x24mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC68332 extends Component.withPins({
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 3: TP11; input. */
  "TP11": "3",
  /** Physical pin 4: TP10; input. */
  "TP10": "4",
  /** Physical pin 5: TP9; input. */
  "TP9": "5",
  /** Physical pin 6: TP8; input. */
  "TP8": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: TP7; input. */
  "TP7": "9",
  /** Physical pin 10: TP6; input. */
  "TP6": "10",
  /** Physical pin 11: TP5; input. */
  "TP5": "11",
  /** Physical pin 12: TP4; input. */
  "TP4": "12",
  /** Physical pin 13: TP3; input. */
  "TP3": "13",
  /** Physical pin 14: TP2; input. */
  "TP2": "14",
  /** Physical pin 15: TP1; input. */
  "TP1": "15",
  /** Physical pin 16: TP0; input. */
  "TP0": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS_17": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD_18": "18",
  /** Physical pin 19: VSTBY; input. */
  "VSTBY": "19",
  /** Physical pin 20: A1; output. */
  "A1": "20",
  /** Physical pin 21: A2; output. */
  "A2": "21",
  /** Physical pin 22: A3; output. */
  "A3": "22",
  /** Physical pin 23: A4; output. */
  "A4": "23",
  /** Physical pin 24: A5; output. */
  "A5": "24",
  /** Physical pin 25: A6; output. */
  "A6": "25",
  /** Physical pin 26: A7; output. */
  "A7": "26",
  /** Physical pin 27: A8; output. */
  "A8": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: A9; output. */
  "A9": "30",
  /** Physical pin 31: A10; output. */
  "A10": "31",
  /** Physical pin 32: A11; output. */
  "A11": "32",
  /** Physical pin 33: A12; output. */
  "A12": "33",
  /** Physical pin 34: VSS; power_in. */
  "VSS_34": "34",
  /** Physical pin 35: A13; output. */
  "A13": "35",
  /** Physical pin 36: A14; output. */
  "A14": "36",
  /** Physical pin 37: A15; output. */
  "A15": "37",
  /** Physical pin 38: A16; output. */
  "A16": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: VSS; power_in. */
  "VSS_40": "40",
  /** Physical pin 41: A17; output. */
  "A17": "41",
  /** Physical pin 42: A18; output. */
  "A18": "42",
  /** Physical pin 43: MISO; input. */
  "MISO": "43",
  /** Physical pin 44: MOSI; input. */
  "MOSI": "44",
  /** Physical pin 45: SCK; input. */
  "SCK": "45",
  /** Physical pin 46: PSCO/SS; input. */
  "PSCO/SS": "46",
  /** Physical pin 47: PCS1; input. */
  "PCS1": "47",
  /** Physical pin 48: PCS2; input. */
  "PCS2": "48",
  /** Physical pin 49: PCS3; input. */
  "PCS3": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: VSS; power_in. */
  "VSS_51": "51",
  /** Physical pin 52: TXD; input. */
  "TXD": "52",
  /** Physical pin 53: RXD; input. */
  "RXD": "53",
  /** Physical pin 54: IPIPE/DSO; output. */
  "IPIPE/DSO": "54",
  /** Physical pin 55: IFETCH/DSI; input. */
  "IFETCH/DSI": "55",
  /** Physical pin 56: BKPT/DSCLK; input. */
  "BKPT/DSCLK": "56",
  /** Physical pin 57: TSTME/TSC; input. */
  "TSTME/TSC": "57",
  /** Physical pin 58: FREEZE/QUOT; output. */
  "FREEZE/QUOT": "58",
  /** Physical pin 59: VSS; power_in. */
  "VSS_59": "59",
  /** Physical pin 60: XTAL; output. */
  "XTAL": "60",
  /** Physical pin 61: VDDSYN; input. */
  "VDDSYN": "61",
  /** Physical pin 62: EXTAL; input. */
  "EXTAL": "62",
  /** Physical pin 63: VDD; power_in. */
  "VDD_63": "63",
  /** Physical pin 64: XFC; input. */
  "XFC": "64",
  /** Physical pin 65: VDD; power_in. */
  "VDD_65": "65",
  /** Physical pin 66: CLKOUT; output. */
  "CLKOUT": "66",
  /** Physical pin 67: VSS; power_in. */
  "VSS_67": "67",
  /** Physical pin 68: RESET; input. */
  "RESET": "68",
  /** Physical pin 69: HALT; input. */
  "HALT": "69",
  /** Physical pin 70: BERR; input. */
  "BERR": "70",
  /** Physical pin 71: IRQ7; input. */
  "IRQ7": "71",
  /** Physical pin 72: IRQ6; input. */
  "IRQ6": "72",
  /** Physical pin 73: IRQ5; input. */
  "IRQ5": "73",
  /** Physical pin 74: IRQ4; input. */
  "IRQ4": "74",
  /** Physical pin 75: IRQ3; input. */
  "IRQ3": "75",
  /** Physical pin 76: IRQ2; input. */
  "IRQ2": "76",
  /** Physical pin 77: IRQ1; input. */
  "IRQ1": "77",
  /** Physical pin 78: MODCK; input. */
  "MODCK": "78",
  /** Physical pin 79: R/W; input. */
  "R/W": "79",
  /** Physical pin 80: SIZ1; input. */
  "SIZ1": "80",
  /** Physical pin 81: SIZ0; input. */
  "SIZ0": "81",
  /** Physical pin 82: AS; input. */
  "AS": "82",
  /** Physical pin 83: VSS; power_in. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: DS; input. */
  "DS": "85",
  /** Physical pin 86: RMC; input. */
  "RMC": "86",
  /** Physical pin 87: AVEC; input. */
  "AVEC": "87",
  /** Physical pin 88: DSACK1; input. */
  "DSACK1": "88",
  /** Physical pin 89: DSACK0; input. */
  "DSACK0": "89",
  /** Physical pin 90: A0; output. */
  "A0": "90",
  /** Physical pin 91: D15; input. */
  "D15": "91",
  /** Physical pin 92: D14; input. */
  "D14": "92",
  /** Physical pin 93: D13; input. */
  "D13": "93",
  /** Physical pin 94: D12; input. */
  "D12": "94",
  /** Physical pin 95: VSS; power_in. */
  "VSS_95": "95",
  /** Physical pin 96: VDD; power_in. */
  "VDD_96": "96",
  /** Physical pin 97: D11; input. */
  "D11": "97",
  /** Physical pin 98: D10; input. */
  "D10": "98",
  /** Physical pin 99: D9; input. */
  "D9": "99",
  /** Physical pin 100: D8; input. */
  "D8": "100",
  /** Physical pin 101: VSS; power_in. */
  "VSS_101": "101",
  /** Physical pin 102: D7; input. */
  "D7": "102",
  /** Physical pin 103: D6; input. */
  "D6": "103",
  /** Physical pin 104: D5; input. */
  "D5": "104",
  /** Physical pin 105: D4; input. */
  "D4": "105",
  /** Physical pin 106: VSS; power_in. */
  "VSS_106": "106",
  /** Physical pin 107: VDD; power_in. */
  "VDD_107": "107",
  /** Physical pin 108: D3; input. */
  "D3": "108",
  /** Physical pin 109: D2; input. */
  "D2": "109",
  /** Physical pin 110: D1; input. */
  "D1": "110",
  /** Physical pin 111: D0; input. */
  "D0": "111",
  /** Physical pin 112: CSBOOT; output. */
  "CSBOOT": "112",
  /** Physical pin 113: BR/CS0; input. */
  "BR/CS0": "113",
  /** Physical pin 114: BG/CS1; output. */
  "BG/CS1": "114",
  /** Physical pin 115: BGACK/CS2; input. */
  "BGACK/CS2": "115",
  /** Physical pin 116: VDD; power_in. */
  "VDD_116": "116",
  /** Physical pin 117: VSS; power_in. */
  "VSS_117": "117",
  /** Physical pin 118: FC0/CS3; output. */
  "FC0/CS3": "118",
  /** Physical pin 119: FC1/CS4; output. */
  "FC1/CS4": "119",
  /** Physical pin 120: FC2/CS5; output. */
  "FC2/CS5": "120",
  /** Physical pin 121: A19/CS6; output. */
  "A19/CS6": "121",
  /** Physical pin 122: A20/CS7; output. */
  "A20/CS7": "122",
  /** Physical pin 123: A21/CS8; output. */
  "A21/CS8": "123",
  /** Physical pin 124: A22/CS9; output. */
  "A22/CS9": "124",
  /** Physical pin 125: A23/CS10; output. */
  "A23/CS10": "125",
  /** Physical pin 126: VDD; power_in. */
  "VDD_126": "126",
  /** Physical pin 127: VSS; power_in. */
  "VSS_127": "127",
  /** Physical pin 128: T2CLK; input. */
  "T2CLK": "128",
  /** Physical pin 129: TP15; input. */
  "TP15": "129",
  /** Physical pin 130: TP14; input. */
  "TP14": "130",
  /** Physical pin 131: TP13; input. */
  "TP13": "131",
  /** Physical pin 132: TP12; input. */
  "TP12": "132",
}) {
  override schema = "CPU_NXP_68000:MC68332";
  override referencePrefix = "U";
}

