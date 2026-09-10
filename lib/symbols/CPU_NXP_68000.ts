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
 */
export class MC68000FN extends Component.withPins({
  "D4": "1",
  "D3": "2",
  "D2": "3",
  "D1": "4",
  "D0": "5",
  "~{AS}": "6",
  "~{UDS}": "7",
  "~{LDS}": "8",
  "R/~{W}": "9",
  "~{DTACK}": "10",
  "~{BG}": "11",
  "~{BGACK}": "12",
  "~{BR}": "13",
  "V_{CC}_14": "14",
  "CLK": "15",
  "GND_16": "16",
  "GND_17": "17",
  "NC_18": "18",
  "~{HALT}": "19",
  "~{RESET}": "20",
  "~{VMA}": "21",
  "E": "22",
  "~{VPA}": "23",
  "~{BERR}": "24",
  "~{IPL2}": "25",
  "~{IPL1}": "26",
  "~{IPL0}": "27",
  "FC2": "28",
  "FC1": "29",
  "FC0": "30",
  "NC_31": "31",
  "A1": "32",
  "A2": "33",
  "A3": "34",
  "A4": "35",
  "A5": "36",
  "A6": "37",
  "A7": "38",
  "A8": "39",
  "A9": "40",
  "A10": "41",
  "A11": "42",
  "A12": "43",
  "A13": "44",
  "A14": "45",
  "A15": "46",
  "A16": "47",
  "A17": "48",
  "A18": "49",
  "A19": "50",
  "A20": "51",
  "V_{CC}_52": "52",
  "A21": "53",
  "A22": "54",
  "A23": "55",
  "GND_56": "56",
  "GND_57": "57",
  "D15": "58",
  "D14": "59",
  "D13": "60",
  "D12": "61",
  "D11": "62",
  "D10": "63",
  "D9": "64",
  "D8": "65",
  "D7": "66",
  "D6": "67",
  "D5": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{AS}": "tri_state", "~{UDS}": "tri_state", "~{LDS}": "tri_state", "R/~{W}": "tri_state", "~{DTACK}": "input", "~{BG}": "output", "~{BGACK}": "input", "~{BR}": "input", "V_{CC}_14": "power_in", CLK: "input", GND_16: "power_in", GND_17: "passive", NC_18: "no_connect", "~{HALT}": "bidirectional", "~{RESET}": "bidirectional", "~{VMA}": "tri_state", E: "output", "~{VPA}": "input", "~{BERR}": "input", "~{IPL2}": "input", "~{IPL1}": "input", "~{IPL0}": "input", FC2: "tri_state", FC1: "tri_state", FC0: "tri_state", NC_31: "no_connect", A1: "tri_state", A2: "tri_state", A3: "tri_state", A4: "tri_state", A5: "tri_state", A6: "tri_state", A7: "tri_state", A8: "tri_state", A9: "tri_state", A10: "tri_state", A11: "tri_state", A12: "tri_state", A13: "tri_state", A14: "tri_state", A15: "tri_state", A16: "tri_state", A17: "tri_state", A18: "tri_state", A19: "tri_state", A20: "tri_state", "V_{CC}_52": "passive", A21: "tri_state", A22: "tri_state", A23: "tri_state", GND_56: "passive", GND_57: "passive", D15: "bidirectional", D14: "bidirectional", D13: "bidirectional", D12: "bidirectional", D11: "bidirectional", D10: "bidirectional", D9: "bidirectional", D8: "bidirectional", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MC68000P extends Component.withPins({
  "D4": "1",
  "D3": "2",
  "D2": "3",
  "D1": "4",
  "D0": "5",
  "~{AS}": "6",
  "~{UDS}": "7",
  "~{LDS}": "8",
  "R/~{W}": "9",
  "~{DTACK}": "10",
  "~{BG}": "11",
  "~{BGACK}": "12",
  "~{BR}": "13",
  "V_{CC}_14": "14",
  "CLK": "15",
  "GND_16": "16",
  "~{HALT}": "17",
  "~{RESET}": "18",
  "~{VMA}": "19",
  "E": "20",
  "~{VPA}": "21",
  "~{BERR}": "22",
  "~{IPL2}": "23",
  "~{IPL1}": "24",
  "~{IPL0}": "25",
  "FC2": "26",
  "FC1": "27",
  "FC0": "28",
  "A1": "29",
  "A2": "30",
  "A3": "31",
  "A4": "32",
  "A5": "33",
  "A6": "34",
  "A7": "35",
  "A8": "36",
  "A9": "37",
  "A10": "38",
  "A11": "39",
  "A12": "40",
  "A13": "41",
  "A14": "42",
  "A15": "43",
  "A16": "44",
  "A17": "45",
  "A18": "46",
  "A19": "47",
  "A20": "48",
  "V_{CC}_49": "49",
  "A21": "50",
  "A22": "51",
  "A23": "52",
  "GND_53": "53",
  "D15": "54",
  "D14": "55",
  "D13": "56",
  "D12": "57",
  "D11": "58",
  "D10": "59",
  "D9": "60",
  "D8": "61",
  "D7": "62",
  "D6": "63",
  "D5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{AS}": "tri_state", "~{UDS}": "tri_state", "~{LDS}": "tri_state", "R/~{W}": "tri_state", "~{DTACK}": "input", "~{BG}": "output", "~{BGACK}": "input", "~{BR}": "input", "V_{CC}_14": "power_in", CLK: "input", GND_16: "power_in", "~{HALT}": "bidirectional", "~{RESET}": "bidirectional", "~{VMA}": "tri_state", E: "output", "~{VPA}": "input", "~{BERR}": "input", "~{IPL2}": "input", "~{IPL1}": "input", "~{IPL0}": "input", FC2: "tri_state", FC1: "tri_state", FC0: "tri_state", A1: "tri_state", A2: "tri_state", A3: "tri_state", A4: "tri_state", A5: "tri_state", A6: "tri_state", A7: "tri_state", A8: "tri_state", A9: "tri_state", A10: "tri_state", A11: "tri_state", A12: "tri_state", A13: "tri_state", A14: "tri_state", A15: "tri_state", A16: "tri_state", A17: "tri_state", A18: "tri_state", A19: "tri_state", A20: "tri_state", "V_{CC}_49": "passive", A21: "tri_state", A22: "tri_state", A23: "tri_state", GND_53: "passive", D15: "bidirectional", D14: "bidirectional", D13: "bidirectional", D12: "bidirectional", D11: "bidirectional", D10: "bidirectional", D9: "bidirectional", D8: "bidirectional", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MC68008FN extends Component.withPins({
  "A2": "1",
  "A3": "2",
  "A4": "3",
  "A5": "4",
  "A6": "5",
  "A7": "6",
  "A8": "7",
  "A9": "8",
  "A10": "9",
  "A11": "10",
  "A12": "11",
  "A13": "12",
  "A21": "13",
  "A14": "14",
  "V_{CC}": "15",
  "A15": "16",
  "GND_17": "17",
  "A16": "18",
  "A17": "19",
  "A18": "20",
  "A19": "21",
  "A20": "22",
  "D7": "23",
  "D6": "24",
  "D5": "25",
  "D4": "26",
  "D3": "27",
  "D2": "28",
  "D1": "29",
  "D0": "30",
  "~{AS}": "31",
  "~{DS}": "32",
  "R/~{W}": "33",
  "~{DTACK}": "34",
  "~{BG}": "35",
  "~{BGACK}": "36",
  "~{BR}": "37",
  "CLK": "38",
  "GND_39": "39",
  "~{HALT}": "40",
  "~{RESET}": "41",
  "E": "42",
  "~{VPA}": "43",
  "~{BERR}": "44",
  "~{IPL1}": "45",
  "~{IPL2}": "46",
  "~{IPL0}": "47",
  "FC2": "48",
  "FC1": "49",
  "FC0": "50",
  "A0": "51",
  "A1": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A2: "tri_state", A3: "tri_state", A4: "tri_state", A5: "tri_state", A6: "tri_state", A7: "tri_state", A8: "tri_state", A9: "tri_state", A10: "tri_state", A11: "tri_state", A12: "tri_state", A13: "tri_state", A21: "tri_state", A14: "tri_state", "V_{CC}": "power_in", A15: "tri_state", GND_17: "power_in", A16: "tri_state", A17: "tri_state", A18: "tri_state", A19: "tri_state", A20: "tri_state", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{AS}": "tri_state", "~{DS}": "tri_state", "R/~{W}": "tri_state", "~{DTACK}": "input", "~{BG}": "output", "~{BGACK}": "input", "~{BR}": "input", CLK: "input", GND_39: "passive", "~{HALT}": "bidirectional", "~{RESET}": "bidirectional", E: "output", "~{VPA}": "input", "~{BERR}": "input", "~{IPL1}": "input", "~{IPL2}": "input", "~{IPL0}": "input", FC2: "tri_state", FC1: "tri_state", FC0: "tri_state", A0: "tri_state", A1: "tri_state", ...opts.pinTypes } });
  }
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
 */
export class MC68008P extends Component.withPins({
  "A3": "1",
  "A4": "2",
  "A5": "3",
  "A6": "4",
  "A7": "5",
  "A8": "6",
  "A9": "7",
  "A10": "8",
  "A11": "9",
  "A12": "10",
  "A13": "11",
  "A14": "12",
  "V_{CC}": "13",
  "A15": "14",
  "GND_15": "15",
  "A16": "16",
  "A17": "17",
  "A18": "18",
  "A19": "19",
  "D7": "20",
  "D6": "21",
  "D5": "22",
  "D4": "23",
  "D3": "24",
  "D2": "25",
  "D1": "26",
  "D0": "27",
  "~{AS}": "28",
  "~{DS}": "29",
  "R/~{W}": "30",
  "~{DTACK}": "31",
  "~{BG}": "32",
  "~{BR}": "33",
  "CLK": "34",
  "GND_35": "35",
  "~{HALT}": "36",
  "~{RESET}": "37",
  "E": "38",
  "~{VPA}": "39",
  "~{BERR}": "40",
  "~{IPL1}": "41",
  "~{IPL2}/~{IPL0}": "42",
  "FC2": "43",
  "FC1": "44",
  "FC0": "45",
  "A0": "46",
  "A1": "47",
  "A2": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A3: "tri_state", A4: "tri_state", A5: "tri_state", A6: "tri_state", A7: "tri_state", A8: "tri_state", A9: "tri_state", A10: "tri_state", A11: "tri_state", A12: "tri_state", A13: "tri_state", A14: "tri_state", "V_{CC}": "power_in", A15: "tri_state", GND_15: "power_in", A16: "tri_state", A17: "tri_state", A18: "tri_state", A19: "tri_state", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{AS}": "tri_state", "~{DS}": "tri_state", "R/~{W}": "tri_state", "~{DTACK}": "input", "~{BG}": "output", "~{BR}": "input", CLK: "input", GND_35: "passive", "~{HALT}": "bidirectional", "~{RESET}": "bidirectional", E: "output", "~{VPA}": "input", "~{BERR}": "input", "~{IPL1}": "input", "~{IPL2}/~{IPL0}": "input", FC2: "tri_state", FC1: "tri_state", FC0: "tri_state", A0: "tri_state", A1: "tri_state", A2: "tri_state", ...opts.pinTypes } });
  }
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
 */
export class MC68010P extends Component.withPins({
  "D4": "1",
  "D3": "2",
  "D2": "3",
  "D1": "4",
  "D0": "5",
  "~{AS}": "6",
  "~{UDS}": "7",
  "~{LDS}": "8",
  "R/~{W}": "9",
  "~{DTACK}": "10",
  "~{BG}": "11",
  "~{BGACK}": "12",
  "~{BR}": "13",
  "V_{CC}_14": "14",
  "CLK": "15",
  "GND_16": "16",
  "~{HALT}": "17",
  "~{RESET}": "18",
  "~{VMA}": "19",
  "E": "20",
  "~{VPA}": "21",
  "~{BERR}": "22",
  "~{IPL2}": "23",
  "~{IPL1}": "24",
  "~{IPL0}": "25",
  "FC2": "26",
  "FC1": "27",
  "FC0": "28",
  "A1": "29",
  "A2": "30",
  "A3": "31",
  "A4": "32",
  "A5": "33",
  "A6": "34",
  "A7": "35",
  "A8": "36",
  "A9": "37",
  "A10": "38",
  "A11": "39",
  "A12": "40",
  "A13": "41",
  "A14": "42",
  "A15": "43",
  "A16": "44",
  "A17": "45",
  "A18": "46",
  "A19": "47",
  "A20": "48",
  "V_{CC}_49": "49",
  "A21": "50",
  "A22": "51",
  "A23": "52",
  "GND_53": "53",
  "D15": "54",
  "D14": "55",
  "D13": "56",
  "D12": "57",
  "D11": "58",
  "D10": "59",
  "D9": "60",
  "D8": "61",
  "D7": "62",
  "D6": "63",
  "D5": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D4: "bidirectional", D3: "bidirectional", D2: "bidirectional", D1: "bidirectional", D0: "bidirectional", "~{AS}": "tri_state", "~{UDS}": "tri_state", "~{LDS}": "tri_state", "R/~{W}": "tri_state", "~{DTACK}": "input", "~{BG}": "output", "~{BGACK}": "input", "~{BR}": "input", "V_{CC}_14": "power_in", CLK: "input", GND_16: "power_in", "~{HALT}": "bidirectional", "~{RESET}": "bidirectional", "~{VMA}": "tri_state", E: "output", "~{VPA}": "input", "~{BERR}": "input", "~{IPL2}": "input", "~{IPL1}": "input", "~{IPL0}": "input", FC2: "tri_state", FC1: "tri_state", FC0: "tri_state", A1: "tri_state", A2: "tri_state", A3: "tri_state", A4: "tri_state", A5: "tri_state", A6: "tri_state", A7: "tri_state", A8: "tri_state", A9: "tri_state", A10: "tri_state", A11: "tri_state", A12: "tri_state", A13: "tri_state", A14: "tri_state", A15: "tri_state", A16: "tri_state", A17: "tri_state", A18: "tri_state", A19: "tri_state", A20: "tri_state", "V_{CC}_49": "passive", A21: "tri_state", A22: "tri_state", A23: "tri_state", GND_53: "passive", D15: "bidirectional", D14: "bidirectional", D13: "bidirectional", D12: "bidirectional", D11: "bidirectional", D10: "bidirectional", D9: "bidirectional", D8: "bidirectional", D7: "bidirectional", D6: "bidirectional", D5: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MC68332 extends Component.withPins({
  "VSS_2": "2",
  "VDD_1": "1",
  "TP11": "3",
  "TP10": "4",
  "TP9": "5",
  "TP8": "6",
  "VDD_7": "7",
  "VSS_8": "8",
  "TP7": "9",
  "TP6": "10",
  "TP5": "11",
  "TP4": "12",
  "TP3": "13",
  "TP2": "14",
  "TP1": "15",
  "TP0": "16",
  "VSS_17": "17",
  "VDD_18": "18",
  "VSTBY": "19",
  "A1": "20",
  "A2": "21",
  "A3": "22",
  "A4": "23",
  "A5": "24",
  "A6": "25",
  "A7": "26",
  "A8": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "A9": "30",
  "A10": "31",
  "A11": "32",
  "A12": "33",
  "VSS_34": "34",
  "A13": "35",
  "A14": "36",
  "A15": "37",
  "A16": "38",
  "VDD_39": "39",
  "VSS_40": "40",
  "A17": "41",
  "A18": "42",
  "MISO": "43",
  "MOSI": "44",
  "SCK": "45",
  "PSCO/SS": "46",
  "PCS1": "47",
  "PCS2": "48",
  "PCS3": "49",
  "VDD_50": "50",
  "VSS_51": "51",
  "TXD": "52",
  "RXD": "53",
  "IPIPE/DSO": "54",
  "IFETCH/DSI": "55",
  "BKPT/DSCLK": "56",
  "TSTME/TSC": "57",
  "FREEZE/QUOT": "58",
  "VSS_59": "59",
  "XTAL": "60",
  "VDDSYN": "61",
  "EXTAL": "62",
  "VDD_63": "63",
  "XFC": "64",
  "VDD_65": "65",
  "CLKOUT": "66",
  "VSS_67": "67",
  "RESET": "68",
  "HALT": "69",
  "BERR": "70",
  "IRQ7": "71",
  "IRQ6": "72",
  "IRQ5": "73",
  "IRQ4": "74",
  "IRQ3": "75",
  "IRQ2": "76",
  "IRQ1": "77",
  "MODCK": "78",
  "R/W": "79",
  "SIZ1": "80",
  "SIZ0": "81",
  "AS": "82",
  "VSS_83": "83",
  "VDD_84": "84",
  "DS": "85",
  "RMC": "86",
  "AVEC": "87",
  "DSACK1": "88",
  "DSACK0": "89",
  "A0": "90",
  "D15": "91",
  "D14": "92",
  "D13": "93",
  "D12": "94",
  "VSS_95": "95",
  "VDD_96": "96",
  "D11": "97",
  "D10": "98",
  "D9": "99",
  "D8": "100",
  "VSS_101": "101",
  "D7": "102",
  "D6": "103",
  "D5": "104",
  "D4": "105",
  "VSS_106": "106",
  "VDD_107": "107",
  "D3": "108",
  "D2": "109",
  "D1": "110",
  "D0": "111",
  "CSBOOT": "112",
  "BR/CS0": "113",
  "BG/CS1": "114",
  "BGACK/CS2": "115",
  "VDD_116": "116",
  "VSS_117": "117",
  "FC0/CS3": "118",
  "FC1/CS4": "119",
  "FC2/CS5": "120",
  "A19/CS6": "121",
  "A20/CS7": "122",
  "A21/CS8": "123",
  "A22/CS9": "124",
  "A23/CS10": "125",
  "VDD_126": "126",
  "VSS_127": "127",
  "T2CLK": "128",
  "TP15": "129",
  "TP14": "130",
  "TP13": "131",
  "TP12": "132",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_2: "power_in", VDD_1: "power_in", TP11: "input", TP10: "input", TP9: "input", TP8: "input", VDD_7: "power_in", VSS_8: "power_in", TP7: "input", TP6: "input", TP5: "input", TP4: "input", TP3: "input", TP2: "input", TP1: "input", TP0: "input", VSS_17: "power_in", VDD_18: "power_in", VSTBY: "input", A1: "output", A2: "output", A3: "output", A4: "output", A5: "output", A6: "output", A7: "output", A8: "output", VDD_28: "power_in", VSS_29: "power_in", A9: "output", A10: "output", A11: "output", A12: "output", VSS_34: "power_in", A13: "output", A14: "output", A15: "output", A16: "output", VDD_39: "power_in", VSS_40: "power_in", A17: "output", A18: "output", MISO: "input", MOSI: "input", SCK: "input", "PSCO/SS": "input", PCS1: "input", PCS2: "input", PCS3: "input", VDD_50: "power_in", VSS_51: "power_in", TXD: "input", RXD: "input", "IPIPE/DSO": "output", "IFETCH/DSI": "input", "BKPT/DSCLK": "input", "TSTME/TSC": "input", "FREEZE/QUOT": "output", VSS_59: "power_in", XTAL: "output", VDDSYN: "input", EXTAL: "input", VDD_63: "power_in", XFC: "input", VDD_65: "power_in", CLKOUT: "output", VSS_67: "power_in", RESET: "input", HALT: "input", BERR: "input", IRQ7: "input", IRQ6: "input", IRQ5: "input", IRQ4: "input", IRQ3: "input", IRQ2: "input", IRQ1: "input", MODCK: "input", "R/W": "input", SIZ1: "input", SIZ0: "input", AS: "input", VSS_83: "power_in", VDD_84: "power_in", DS: "input", RMC: "input", AVEC: "input", DSACK1: "input", DSACK0: "input", A0: "output", D15: "input", D14: "input", D13: "input", D12: "input", VSS_95: "power_in", VDD_96: "power_in", D11: "input", D10: "input", D9: "input", D8: "input", VSS_101: "power_in", D7: "input", D6: "input", D5: "input", D4: "input", VSS_106: "power_in", VDD_107: "power_in", D3: "input", D2: "input", D1: "input", D0: "input", CSBOOT: "output", "BR/CS0": "input", "BG/CS1": "output", "BGACK/CS2": "input", VDD_116: "power_in", VSS_117: "power_in", "FC0/CS3": "output", "FC1/CS4": "output", "FC2/CS5": "output", "A19/CS6": "output", "A20/CS7": "output", "A21/CS8": "output", "A22/CS9": "output", "A23/CS10": "output", VDD_126: "power_in", VSS_127: "power_in", T2CLK: "input", TP15: "input", TP14: "input", TP13: "input", TP12: "input", ...opts.pinTypes } });
  }
  override schema = "CPU_NXP_68000:MC68332";
  override referencePrefix = "U";
}
