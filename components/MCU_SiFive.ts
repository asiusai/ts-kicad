// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * RISC-V MCU, 8KB OTP Program Memory, 8KB ROM, 16KB Instruction Cache, 16KB SRAM, 320MHz, 1.8 and 3.6V, 24 GPIO, QFN-48
 *
 * KiCad symbol: `MCU_SiFive:FE310-G000`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*.
 * @see https://sifive.cdn.prismic.io/sifive%2Ffeb6f967-ff96-418f-9af4-a7f3b7fd1dfc_fe310-g000-ds.pdf
 * Keywords: microcontroller RISC-V SiFive.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FE310_G000 extends Component.withPins({
  /** Physical pin 1: QSPI_DQ_3; bidirectional. */
  "QSPI_DQ_3": "1",
  /** Physical pin 2: QSPI_DQ_2; bidirectional. */
  "QSPI_DQ_2": "2",
  /** Physical pin 3: QSPI_DQ_1; bidirectional. */
  "QSPI_DQ_1": "3",
  /** Physical pin 4: QSPI_DQ_0; bidirectional. */
  "QSPI_DQ_0": "4",
  /** Physical pin 5: ~{QSPI_CS}; output. */
  "~{QSPI_CS}": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: PLL_AVDD; power_in. */
  "PLL_AVDD": "7",
  /** Physical pin 8: PLL_AVSS; power_in. */
  "PLL_AVSS": "8",
  /** Physical pin 9: XTAL_XI; input. */
  "XTAL_XI": "9",
  /** Physical pin 10: XTAL_XO; output. */
  "XTAL_XO": "10",
  /** Physical pin 11: IVDD; power_in. */
  "IVDD_11": "11",
  /** Physical pin 12: OTP_AIVDD; power_in. */
  "OTP_AIVDD": "12",
  /** Physical pin 13: JTAG_TCK; input. */
  "JTAG_TCK": "13",
  /** Physical pin 14: JTAG_TDO; output. */
  "JTAG_TDO": "14",
  /** Physical pin 15: JTAG_TMS; input. */
  "JTAG_TMS": "15",
  /** Physical pin 16: JTAG_TDI; input. */
  "JTAG_TDI": "16",
  /** Physical pin 17: AON_PMU_OUT_1; output. */
  "AON_PMU_OUT_1": "17",
  /** Physical pin 18: ~{AON_PMU_DWAKEUP}; input. */
  "~{AON_PMU_DWAKEUP}": "18",
  /** Physical pin 19: AON_IVDD; power_in. */
  "AON_IVDD": "19",
  /** Physical pin 20: AON_PSD_LFALTCLK; input. */
  "AON_PSD_LFALTCLK": "20",
  /** Physical pin 21: AON_PSD_LFCLKSEL; input. */
  "AON_PSD_LFCLKSEL": "21",
  /** Physical pin 22: AON_PMU_OUT_0; output. */
  "AON_PMU_OUT_0": "22",
  /** Physical pin 23: AON_VDD; power_in. */
  "AON_VDD": "23",
  /** Physical pin 24: ~{AON_ERST}; input. */
  "~{AON_ERST}": "24",
  /** Physical pin 25: GPIO_0; bidirectional. */
  "GPIO_0": "25",
  /** Physical pin 26: GPIO_1; bidirectional. */
  "GPIO_1": "26",
  /** Physical pin 27: GPIO_2; bidirectional. */
  "GPIO_2": "27",
  /** Physical pin 28: GPIO_3; bidirectional. */
  "GPIO_3": "28",
  /** Physical pin 29: GPIO_4; bidirectional. */
  "GPIO_4": "29",
  /** Physical pin 30: VDD; passive. */
  "VDD_30": "30",
  /** Physical pin 31: GPIO_5; bidirectional. */
  "GPIO_5": "31",
  /** Physical pin 32: IVDD; passive. */
  "IVDD_32": "32",
  /** Physical pin 33: GPIO_9; bidirectional. */
  "GPIO_9": "33",
  /** Physical pin 34: GPIO_10; bidirectional. */
  "GPIO_10": "34",
  /** Physical pin 35: GPIO_11; bidirectional. */
  "GPIO_11": "35",
  /** Physical pin 36: GPIO_12; bidirectional. */
  "GPIO_12": "36",
  /** Physical pin 37: GPIO_13; bidirectional. */
  "GPIO_13": "37",
  /** Physical pin 38: GPIO_16; bidirectional. */
  "GPIO_16": "38",
  /** Physical pin 39: GPIO_17; bidirectional. */
  "GPIO_17": "39",
  /** Physical pin 40: GPIO_18; bidirectional. */
  "GPIO_18": "40",
  /** Physical pin 41: GPIO_19; bidirectional. */
  "GPIO_19": "41",
  /** Physical pin 42: GPIO_20; bidirectional. */
  "GPIO_20": "42",
  /** Physical pin 43: GPIO_21; bidirectional. */
  "GPIO_21": "43",
  /** Physical pin 44: GPIO_22; bidirectional. */
  "GPIO_22": "44",
  /** Physical pin 45: GPIO_23; bidirectional. */
  "GPIO_23": "45",
  /** Physical pin 46: VDD; passive. */
  "VDD_46": "46",
  /** Physical pin 47: IVDD; passive. */
  "IVDD_47": "47",
  /** Physical pin 48: QSPI_SCK; output. */
  "QSPI_SCK": "48",
  /** Physical pin 49: GND; power_in. */
  "GND": "49",
}) {
  override schema = "MCU_SiFive:FE310-G000";
  override referencePrefix = "U";
}

/**
 * RISC-V MCU, 8KB OTP Program Memory, 8KB ROM, 16KB Instruction Cache, 16KB SRAM, 320MHz, 1.8 and 3.6V, 24 GPIO, QFN-48
 *
 * KiCad symbol: `MCU_SiFive:FE310-G002`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*.
 * @see https://sifive.cdn.prismic.io/sifive%2F3d777659-a0dd-49ed-a011-5bebba17aecf_fe310-g002-ds.pdf
 * Keywords: microcontroller RISC-V SiFive.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FE310_G002 extends Component.withPins({
  /** Physical pin 1: QSPI_DQ_3; bidirectional. */
  "QSPI_DQ_3": "1",
  /** Physical pin 2: QSPI_DQ_2; bidirectional. */
  "QSPI_DQ_2": "2",
  /** Physical pin 3: QSPI_DQ_1; bidirectional. */
  "QSPI_DQ_1": "3",
  /** Physical pin 4: QSPI_DQ_0; bidirectional. */
  "QSPI_DQ_0": "4",
  /** Physical pin 5: ~{QSPI_CS}; output. */
  "~{QSPI_CS}": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: PLL_AVDD; power_in. */
  "PLL_AVDD": "7",
  /** Physical pin 8: PLL_AVSS; power_in. */
  "PLL_AVSS": "8",
  /** Physical pin 9: XTAL_XI; input. */
  "XTAL_XI": "9",
  /** Physical pin 10: XTAL_XO; output. */
  "XTAL_XO": "10",
  /** Physical pin 11: IVDD; power_in. */
  "IVDD_11": "11",
  /** Physical pin 12: OTP_AIVDD; power_in. */
  "OTP_AIVDD": "12",
  /** Physical pin 13: JTAG_TCK; input. */
  "JTAG_TCK": "13",
  /** Physical pin 14: JTAG_TDO; output. */
  "JTAG_TDO": "14",
  /** Physical pin 15: JTAG_TMS; input. */
  "JTAG_TMS": "15",
  /** Physical pin 16: JTAG_TDI; input. */
  "JTAG_TDI": "16",
  /** Physical pin 17: AON_PMU_OUT_1; output. */
  "AON_PMU_OUT_1": "17",
  /** Physical pin 18: ~{AON_PMU_DWAKEUP}; input. */
  "~{AON_PMU_DWAKEUP}": "18",
  /** Physical pin 19: AON_IVDD; power_in. */
  "AON_IVDD": "19",
  /** Physical pin 20: AON_PSD_LFALTCLK; input. */
  "AON_PSD_LFALTCLK": "20",
  /** Physical pin 21: AON_PSD_LFCLKSEL; input. */
  "AON_PSD_LFCLKSEL": "21",
  /** Physical pin 22: AON_PMU_OUT_0; output. */
  "AON_PMU_OUT_0": "22",
  /** Physical pin 23: AON_VDD; power_in. */
  "AON_VDD": "23",
  /** Physical pin 24: ~{AON_ERST}; input. */
  "~{AON_ERST}": "24",
  /** Physical pin 25: GPIO_0; bidirectional. */
  "GPIO_0": "25",
  /** Physical pin 26: GPIO_1; bidirectional. */
  "GPIO_1": "26",
  /** Physical pin 27: GPIO_2; bidirectional. */
  "GPIO_2": "27",
  /** Physical pin 28: GPIO_3; bidirectional. */
  "GPIO_3": "28",
  /** Physical pin 29: GPIO_4; bidirectional. */
  "GPIO_4": "29",
  /** Physical pin 30: VDD; passive. */
  "VDD_30": "30",
  /** Physical pin 31: GPIO_5; bidirectional. */
  "GPIO_5": "31",
  /** Physical pin 32: IVDD; passive. */
  "IVDD_32": "32",
  /** Physical pin 33: GPIO_9; bidirectional. */
  "GPIO_9": "33",
  /** Physical pin 34: GPIO_10; bidirectional. */
  "GPIO_10": "34",
  /** Physical pin 35: GPIO_11; bidirectional. */
  "GPIO_11": "35",
  /** Physical pin 36: GPIO_12; bidirectional. */
  "GPIO_12": "36",
  /** Physical pin 37: GPIO_13; bidirectional. */
  "GPIO_13": "37",
  /** Physical pin 38: GPIO_16; bidirectional. */
  "GPIO_16": "38",
  /** Physical pin 39: GPIO_17; bidirectional. */
  "GPIO_17": "39",
  /** Physical pin 40: GPIO_18; bidirectional. */
  "GPIO_18": "40",
  /** Physical pin 41: GPIO_19; bidirectional. */
  "GPIO_19": "41",
  /** Physical pin 42: GPIO_20; bidirectional. */
  "GPIO_20": "42",
  /** Physical pin 43: GPIO_21; bidirectional. */
  "GPIO_21": "43",
  /** Physical pin 44: GPIO_22; bidirectional. */
  "GPIO_22": "44",
  /** Physical pin 45: GPIO_23; bidirectional. */
  "GPIO_23": "45",
  /** Physical pin 46: VDD; passive. */
  "VDD_46": "46",
  /** Physical pin 47: IVDD; passive. */
  "IVDD_47": "47",
  /** Physical pin 48: QSPI_SCK; output. */
  "QSPI_SCK": "48",
  /** Physical pin 49: GND; power_in. */
  "GND": "49",
}) {
  override schema = "MCU_SiFive:FE310-G002";
  override referencePrefix = "U";
}

/**
 * 64-bit RISC‑V SoC, BGA-484
 *
 * KiCad symbol: `MCU_SiFive:FU540-C000`. Reference prefix: `U`.
 * Footprint filters: BGA*23.0x23.0mm*P1.0mm*.
 * @see https://static.dev.sifive.com/FU540-C000-v1.0.pdf
 * Keywords: SiFive.
 * Default footprint: Package_BGA:BGA-484_23.0x23.0mm_Layout22x22_P1.0mm.
 * Units: 6.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FU540_C000 extends Component.withPins({
  /** Physical pin AA18: CL_0_B2C_D_2; input. */
  "CL_0_B2C_D_2": "AA18",
  /** Physical pin AA19: CL_0_B2C_D_8; input. */
  "CL_0_B2C_D_8": "AA19",
  /** Physical pin AA20: CL_0_B2C_D_23; input. */
  "CL_0_B2C_D_23": "AA20",
  /** Physical pin AA21: CL_0_B2C_D_29; input. */
  "CL_0_B2C_D_29": "AA21",
  /** Physical pin AA22: CL_0_B2C_CLK; input. */
  "CL_0_B2C_CLK": "AA22",
  /** Physical pin AB18: CL_0_B2C_D_1; input. */
  "CL_0_B2C_D_1": "AB18",
  /** Physical pin AB19: CL_0_B2C_D_13; input. */
  "CL_0_B2C_D_13": "AB19",
  /** Physical pin AB20: CL_0_B2C_D_22; input. */
  "CL_0_B2C_D_22": "AB20",
  /** Physical pin AB21: CL_0_B2C_D_26; input. */
  "CL_0_B2C_D_26": "AB21",
  /** Physical pin K19: CL_0_C2B_D_28; output. */
  "CL_0_C2B_D_28": "K19",
  /** Physical pin K20: CL_0_C2B_D_24; output. */
  "CL_0_C2B_D_24": "K20",
  /** Physical pin K22: CL_0_C2B_D_26; output. */
  "CL_0_C2B_D_26": "K22",
  /** Physical pin L17: CL_0_C2B_D_31; output. */
  "CL_0_C2B_D_31": "L17",
  /** Physical pin L18: CL_0_C2B_D_30; output. */
  "CL_0_C2B_D_30": "L18",
  /** Physical pin L19: CL_0_C2B_D_27; output. */
  "CL_0_C2B_D_27": "L19",
  /** Physical pin L20: CL_0_C2B_D_20; output. */
  "CL_0_C2B_D_20": "L20",
  /** Physical pin L21: CL_0_C2B_D_18; output. */
  "CL_0_C2B_D_18": "L21",
  /** Physical pin L22: CL_0_C2B_D_29; output. */
  "CL_0_C2B_D_29": "L22",
  /** Physical pin M17: CL_0_C2B_D_15; output. */
  "CL_0_C2B_D_15": "M17",
  /** Physical pin M18: CL_0_C2B_D_19; output. */
  "CL_0_C2B_D_19": "M18",
  /** Physical pin M19: CL_0_C2B_D_23; output. */
  "CL_0_C2B_D_23": "M19",
  /** Physical pin M20: CL_0_C2B_D_12; output. */
  "CL_0_C2B_D_12": "M20",
  /** Physical pin M21: CL_0_C2B_D_25; output. */
  "CL_0_C2B_D_25": "M21",
  /** Physical pin M22: CL_0_C2B_D_22; output. */
  "CL_0_C2B_D_22": "M22",
  /** Physical pin N17: CL_0_C2B_SEND; output. */
  "CL_0_C2B_SEND": "N17",
  /** Physical pin N18: CL_0_C2B_D_2; output. */
  "CL_0_C2B_D_2": "N18",
  /** Physical pin N19: CL_0_C2B_D_6; output. */
  "CL_0_C2B_D_6": "N19",
  /** Physical pin N20: CL_0_C2B_D_21; output. */
  "CL_0_C2B_D_21": "N20",
  /** Physical pin N21: CL_0_C2B_D_16; output. */
  "CL_0_C2B_D_16": "N21",
  /** Physical pin N22: CL_0_C2B_D_14; output. */
  "CL_0_C2B_D_14": "N22",
  /** Physical pin P17: CL_0_B2C_RST; input. */
  "CL_0_B2C_RST": "P17",
  /** Physical pin P18: CL_0_B2C_D_21; input. */
  "CL_0_B2C_D_21": "P18",
  /** Physical pin P19: CL_0_C2B_CLK; output. */
  "CL_0_C2B_CLK": "P19",
  /** Physical pin P20: CL_0_C2B_D_4; output. */
  "CL_0_C2B_D_4": "P20",
  /** Physical pin R17: CL_0_B2C_D_24; input. */
  "CL_0_B2C_D_24": "R17",
  /** Physical pin R18: CL_0_B2C_D_17; input. */
  "CL_0_B2C_D_17": "R18",
  /** Physical pin R19: CL_0_C2B_D_1; output. */
  "CL_0_C2B_D_1": "R19",
  /** Physical pin R20: CL_0_C2B_D_3; output. */
  "CL_0_C2B_D_3": "R20",
  /** Physical pin R21: CL_0_C2B_D_8; output. */
  "CL_0_C2B_D_8": "R21",
  /** Physical pin R22: CL_0_C2B_D_17; output. */
  "CL_0_C2B_D_17": "R22",
  /** Physical pin T18: CL_0_B2C_D_19; input. */
  "CL_0_B2C_D_19": "T18",
  /** Physical pin T19: CL_0_C2B_D_0; output. */
  "CL_0_C2B_D_0": "T19",
  /** Physical pin T20: CL_0_C2B_RST; output. */
  "CL_0_C2B_RST": "T20",
  /** Physical pin T21: CL_0_C2B_D_13; output. */
  "CL_0_C2B_D_13": "T21",
  /** Physical pin T22: CL_0_C2B_D_10; output. */
  "CL_0_C2B_D_10": "T22",
  /** Physical pin U17: CL_0_B2C_D_20; input. */
  "CL_0_B2C_D_20": "U17",
  /** Physical pin U18: CL_0_B2C_D_14; input. */
  "CL_0_B2C_D_14": "U18",
  /** Physical pin U19: CL_0_B2C_D_18; input. */
  "CL_0_B2C_D_18": "U19",
  /** Physical pin U20: CL_0_C2B_D_5; output. */
  "CL_0_C2B_D_5": "U20",
  /** Physical pin U21: CL_0_C2B_D_11; output. */
  "CL_0_C2B_D_11": "U21",
  /** Physical pin U22: CL_0_C2B_D_7; output. */
  "CL_0_C2B_D_7": "U22",
  /** Physical pin V16: CL_0_B2C_D_12; input. */
  "CL_0_B2C_D_12": "V16",
  /** Physical pin V17: CL_0_B2C_D_16; input. */
  "CL_0_B2C_D_16": "V17",
  /** Physical pin V18: CL_0_B2C_D_9; input. */
  "CL_0_B2C_D_9": "V18",
  /** Physical pin V19: CL_0_B2C_D_15; input. */
  "CL_0_B2C_D_15": "V19",
  /** Physical pin V20: CL_0_B2C_D_25; input. */
  "CL_0_B2C_D_25": "V20",
  /** Physical pin W16: CL_0_B2C_D_4; input. */
  "CL_0_B2C_D_4": "W16",
  /** Physical pin W17: CL_0_B2C_D_3; input. */
  "CL_0_B2C_D_3": "W17",
  /** Physical pin W18: CL_0_B2C_D_5; input. */
  "CL_0_B2C_D_5": "W18",
  /** Physical pin W19: CL_0_B2C_D_11; input. */
  "CL_0_B2C_D_11": "W19",
  /** Physical pin W20: CL_0_B2C_D_28; input. */
  "CL_0_B2C_D_28": "W20",
  /** Physical pin W21: CL_0_B2C_SEND; input. */
  "CL_0_B2C_SEND": "W21",
  /** Physical pin W22: CL_0_C2B_D_9; output. */
  "CL_0_C2B_D_9": "W22",
  /** Physical pin Y16: CL_0_B2C_D_0; input. */
  "CL_0_B2C_D_0": "Y16",
  /** Physical pin Y17: CL_0_B2C_D_7; input. */
  "CL_0_B2C_D_7": "Y17",
  /** Physical pin Y18: CL_0_B2C_D_6; input. */
  "CL_0_B2C_D_6": "Y18",
  /** Physical pin Y19: CL_0_B2C_D_10; input. */
  "CL_0_B2C_D_10": "Y19",
  /** Physical pin Y20: CL_0_B2C_D_27; input. */
  "CL_0_B2C_D_27": "Y20",
  /** Physical pin Y21: CL_0_B2C_D_31; input. */
  "CL_0_B2C_D_31": "Y21",
  /** Physical pin Y22: CL_0_B2C_D_30; input. */
  "CL_0_B2C_D_30": "Y22",
  /** Physical pin A4: DDR_MEM_D[18]; bidirectional. */
  "DDR_MEM_D[18]": "A4",
  /** Physical pin A5: DDR_MEM_D[19]; bidirectional. */
  "DDR_MEM_D[19]": "A5",
  /** Physical pin A6: DDR_MEM_DQS_P[2]; bidirectional. */
  "DDR_MEM_DQS_P[2]": "A6",
  /** Physical pin A7: DDR_MEM_DQS_M[2]; bidirectional. */
  "DDR_MEM_DQS_M[2]": "A7",
  /** Physical pin AA1: DDR_MEM_D[41]; bidirectional. */
  "DDR_MEM_D[41]": "AA1",
  /** Physical pin AA3: DDR_MEM_D[45]; bidirectional. */
  "DDR_MEM_D[45]": "AA3",
  /** Physical pin AA4: DDR_MEM_D[47]; bidirectional. */
  "DDR_MEM_D[47]": "AA4",
  /** Physical pin AA5: DDR_MEM_ODT[0]; output. */
  "DDR_MEM_ODT[0]": "AA5",
  /** Physical pin AA6: DDR_MEM_CKE[1]; output. */
  "DDR_MEM_CKE[1]": "AA6",
  /** Physical pin AA7: DDR_MEM_DQS_M[6]; bidirectional. */
  "DDR_MEM_DQS_M[6]": "AA7",
  /** Physical pin AA8: DDR_MEM_DQS_P[7]; bidirectional. */
  "DDR_MEM_DQS_P[7]": "AA8",
  /** Physical pin AA9: DDR_MEM_D[62]; bidirectional. */
  "DDR_MEM_D[62]": "AA9",
  /** Physical pin AA10: DDR_MEM_D[61]; bidirectional. */
  "DDR_MEM_D[61]": "AA10",
  /** Physical pin AA11: DDR_MEM_D[63]; bidirectional. */
  "DDR_MEM_D[63]": "AA11",
  /** Physical pin AA12: DDR_MEM_D[58]; bidirectional. */
  "DDR_MEM_D[58]": "AA12",
  /** Physical pin AA13: DDR_MEM_D[56]; bidirectional. */
  "DDR_MEM_D[56]": "AA13",
  /** Physical pin AB2: DDR_MEM_D[44]; bidirectional. */
  "DDR_MEM_D[44]": "AB2",
  /** Physical pin AB3: DDR_MEM_D[46]; bidirectional. */
  "DDR_MEM_D[46]": "AB3",
  /** Physical pin AB5: DDR_MEM_ODT[1]; output. */
  "DDR_MEM_ODT[1]": "AB5",
  /** Physical pin AB6: DDR_MEM_CKE[0]; output. */
  "DDR_MEM_CKE[0]": "AB6",
  /** Physical pin AB8: DDR_MEM_D[57]; bidirectional. */
  "DDR_MEM_D[57]": "AB8",
  /** Physical pin AB9: DDR_MEM_D[59]; bidirectional. */
  "DDR_MEM_D[59]": "AB9",
  /** Physical pin AB11: DDR_MEM_D[60]; bidirectional. */
  "DDR_MEM_D[60]": "AB11",
  /** Physical pin AB12: DDR_MEM_DM[7]; bidirectional. */
  "DDR_MEM_DM[7]": "AB12",
  /** Physical pin B1: DDR_MEM_D[1]; bidirectional. */
  "DDR_MEM_D[1]": "B1",
  /** Physical pin B2: DDR_MEM_D[17]; bidirectional. */
  "DDR_MEM_D[17]": "B2",
  /** Physical pin B3: DDR_MEM_D[22]; bidirectional. */
  "DDR_MEM_D[22]": "B3",
  /** Physical pin B4: DDR_MEM_D[16]; bidirectional. */
  "DDR_MEM_D[16]": "B4",
  /** Physical pin B5: DDR_MEM_D[20]; bidirectional. */
  "DDR_MEM_D[20]": "B5",
  /** Physical pin B6: DDR_MEM_D[23]; bidirectional. */
  "DDR_MEM_D[23]": "B6",
  /** Physical pin C1: DDR_MEM_D[4]; bidirectional. */
  "DDR_MEM_D[4]": "C1",
  /** Physical pin C2: DDR_MEM_D[29]; bidirectional. */
  "DDR_MEM_D[29]": "C2",
  /** Physical pin C3: DDR_MEM_D[27]; bidirectional. */
  "DDR_MEM_D[27]": "C3",
  /** Physical pin C4: DDR_MEM_D[24]; bidirectional. */
  "DDR_MEM_D[24]": "C4",
  /** Physical pin C5: DDR_MEM_D[21]; bidirectional. */
  "DDR_MEM_D[21]": "C5",
  /** Physical pin C6: DDR_MEM_DM[2]; bidirectional. */
  "DDR_MEM_DM[2]": "C6",
  /** Physical pin C7: DDR_MEM_D[31]; bidirectional. */
  "DDR_MEM_D[31]": "C7",
  /** Physical pin D2: DDR_MEM_D[0]; bidirectional. */
  "DDR_MEM_D[0]": "D2",
  /** Physical pin D3: DDR_MEM_D[30]; bidirectional. */
  "DDR_MEM_D[30]": "D3",
  /** Physical pin D4: DDR_MEM_D[25]; bidirectional. */
  "DDR_MEM_D[25]": "D4",
  /** Physical pin D5: DDR_MEM_DM[3]; bidirectional. */
  "DDR_MEM_DM[3]": "D5",
  /** Physical pin D6: DDR_MEM_D[26]; bidirectional. */
  "DDR_MEM_D[26]": "D6",
  /** Physical pin D7: DDR_MEM_DQS_M[3]; bidirectional. */
  "DDR_MEM_DQS_M[3]": "D7",
  /** Physical pin D8: DDR_RSVD1; passive. */
  "DDR_RSVD1": "D8",
  /** Physical pin E1: DDR_MEM_D[6]; bidirectional. */
  "DDR_MEM_D[6]": "E1",
  /** Physical pin E2: DDR_MEM_D[3]; bidirectional. */
  "DDR_MEM_D[3]": "E2",
  /** Physical pin E5: DDR_MEM_DM[0]; bidirectional. */
  "DDR_MEM_DM[0]": "E5",
  /** Physical pin E6: DDR_MEM_D[28]; bidirectional. */
  "DDR_MEM_D[28]": "E6",
  /** Physical pin E7: DDR_MEM_DQS_P[3]; bidirectional. */
  "DDR_MEM_DQS_P[3]": "E7",
  /** Physical pin E8: DDR_RSVD0; passive. */
  "DDR_RSVD0": "E8",
  /** Physical pin F1: DDR_MEM_D[9]; bidirectional. */
  "DDR_MEM_D[9]": "F1",
  /** Physical pin F2: DDR_MEM_DQS_P[0]; bidirectional. */
  "DDR_MEM_DQS_P[0]": "F2",
  /** Physical pin F3: DDR_MEM_DQS_M[0]; bidirectional. */
  "DDR_MEM_DQS_M[0]": "F3",
  /** Physical pin F4: DDR_MEM_D[2]; bidirectional. */
  "DDR_MEM_D[2]": "F4",
  /** Physical pin F5: DDR_MEM_D[10]; bidirectional. */
  "DDR_MEM_D[10]": "F5",
  /** Physical pin F6: DDR_CAL_0; passive. */
  "DDR_CAL_0": "F6",
  /** Physical pin F8: DDR_RSVD2; passive. */
  "DDR_RSVD2": "F8",
  /** Physical pin F9: DDR_RSVD3; passive. */
  "DDR_RSVD3": "F9",
  /** Physical pin G1: DDR_MEM_D[11]; bidirectional. */
  "DDR_MEM_D[11]": "G1",
  /** Physical pin G3: DDR_MEM_D[7]; bidirectional. */
  "DDR_MEM_D[7]": "G3",
  /** Physical pin G4: DDR_MEM_D[5]; bidirectional. */
  "DDR_MEM_D[5]": "G4",
  /** Physical pin G5: DDR_MEM_DM[1]; bidirectional. */
  "DDR_MEM_DM[1]": "G5",
  /** Physical pin H1: DDR_MEM_D[12]; bidirectional. */
  "DDR_MEM_D[12]": "H1",
  /** Physical pin H2: DDR_MEM_DQS_P[1]; bidirectional. */
  "DDR_MEM_DQS_P[1]": "H2",
  /** Physical pin H3: DDR_MEM_DQS_M[1]; bidirectional. */
  "DDR_MEM_DQS_M[1]": "H3",
  /** Physical pin H4: DDR_MEM_D[8]; bidirectional. */
  "DDR_MEM_D[8]": "H4",
  /** Physical pin H5: DDR_MEM_ECC_D[0]; bidirectional. */
  "DDR_MEM_ECC_D[0]": "H5",
  /** Physical pin J2: DDR_MEM_D[14]; bidirectional. */
  "DDR_MEM_D[14]": "J2",
  /** Physical pin J3: DDR_MEM_D[13]; bidirectional. */
  "DDR_MEM_D[13]": "J3",
  /** Physical pin J4: DDR_MEM_D[15]; bidirectional. */
  "DDR_MEM_D[15]": "J4",
  /** Physical pin J5: DDR_MEM_ECC_DM; bidirectional. */
  "DDR_MEM_ECC_DM": "J5",
  /** Physical pin K1: DDR_MEM_ECC_D[1]; bidirectional. */
  "DDR_MEM_ECC_D[1]": "K1",
  /** Physical pin K2: DDR_MEM_ECC_DQS_P; bidirectional. */
  "DDR_MEM_ECC_DQS_P": "K2",
  /** Physical pin K3: DDR_MEM_ECC_DQS_M; bidirectional. */
  "DDR_MEM_ECC_DQS_M": "K3",
  /** Physical pin K4: DDR_MEM_ECC_D[2]; bidirectional. */
  "DDR_MEM_ECC_D[2]": "K4",
  /** Physical pin K5: DDR_MEM_CLK; output. */
  "DDR_MEM_CLK": "K5",
  /** Physical pin L1: DDR_MEM_ECC_D[4]; bidirectional. */
  "DDR_MEM_ECC_D[4]": "L1",
  /** Physical pin L2: DDR_MEM_ECC_D[3]; bidirectional. */
  "DDR_MEM_ECC_D[3]": "L2",
  /** Physical pin L3: DDR_MEM_ECC_D[7]; bidirectional. */
  "DDR_MEM_ECC_D[7]": "L3",
  /** Physical pin L4: DDR_MEM_ECC_D[5]; bidirectional. */
  "DDR_MEM_ECC_D[5]": "L4",
  /** Physical pin L5: DDR_MEM_CLK_N; output. */
  "DDR_MEM_CLK_N": "L5",
  /** Physical pin M1: DDR_MEM_ECC_D[6]; bidirectional. */
  "DDR_MEM_ECC_D[6]": "M1",
  /** Physical pin M2: DDR_MEM_RAS_N; output. */
  "DDR_MEM_RAS_N": "M2",
  /** Physical pin M3: DDR_MEM_CAS_N; output. */
  "DDR_MEM_CAS_N": "M3",
  /** Physical pin M4: DDR_MEM_BANK[0]; output. */
  "DDR_MEM_BANK[0]": "M4",
  /** Physical pin M5: DDR_MEM_BANK[2]; output. */
  "DDR_MEM_BANK[2]": "M5",
  /** Physical pin N1: DDR_MEM_WE_N; output. */
  "DDR_MEM_WE_N": "N1",
  /** Physical pin N2: DDR_MEM_BANK[1]; output. */
  "DDR_MEM_BANK[1]": "N2",
  /** Physical pin N3: DDR_MEM_ADDR[0]; output. */
  "DDR_MEM_ADDR[0]": "N3",
  /** Physical pin N4: DDR_MEM_ADDR[2]; output. */
  "DDR_MEM_ADDR[2]": "N4",
  /** Physical pin N5: DDR_MEM_ADDR[5]; output. */
  "DDR_MEM_ADDR[5]": "N5",
  /** Physical pin P3: DDR_MEM_ADDR[3]; output. */
  "DDR_MEM_ADDR[3]": "P3",
  /** Physical pin P4: DDR_MEM_ADDR[6]; output. */
  "DDR_MEM_ADDR[6]": "P4",
  /** Physical pin P5: DDR_MEM_ADDR[12]; output. */
  "DDR_MEM_ADDR[12]": "P5",
  /** Physical pin R1: DDR_MEM_ADDR[1]; output. */
  "DDR_MEM_ADDR[1]": "R1",
  /** Physical pin R2: DDR_MEM_ADDR[7]; output. */
  "DDR_MEM_ADDR[7]": "R2",
  /** Physical pin R3: DDR_MEM_ADDR[8]; output. */
  "DDR_MEM_ADDR[8]": "R3",
  /** Physical pin R4: DDR_MEM_ADDR[11]; output. */
  "DDR_MEM_ADDR[11]": "R4",
  /** Physical pin R5: DDR_MEM_D[32]; bidirectional. */
  "DDR_MEM_D[32]": "R5",
  /** Physical pin T1: DDR_MEM_ADDR[4]; output. */
  "DDR_MEM_ADDR[4]": "T1",
  /** Physical pin T2: DDR_MEM_ADDR[13]; output. */
  "DDR_MEM_ADDR[13]": "T2",
  /** Physical pin T3: DDR_MEM_ADDR[9]; output. */
  "DDR_MEM_ADDR[9]": "T3",
  /** Physical pin T4: DDR_MEM_D[34]; bidirectional. */
  "DDR_MEM_D[34]": "T4",
  /** Physical pin T5: DDR_MEM_DM[4]; bidirectional. */
  "DDR_MEM_DM[4]": "T5",
  /** Physical pin U1: DDR_MEM_ADDR[10]; output. */
  "DDR_MEM_ADDR[10]": "U1",
  /** Physical pin U2: DDR_MEM_PARITY_IN; output. */
  "DDR_MEM_PARITY_IN": "U2",
  /** Physical pin U3: DDR_MEM_ADDR[14]; output. */
  "DDR_MEM_ADDR[14]": "U3",
  /** Physical pin U4: DDR_MEM_DQS_M[4]; bidirectional. */
  "DDR_MEM_DQS_M[4]": "U4",
  /** Physical pin U5: DDR_MEM_D[39]; bidirectional. */
  "DDR_MEM_D[39]": "U5",
  /** Physical pin V2: DDR_MEM_D[35]; bidirectional. */
  "DDR_MEM_D[35]": "V2",
  /** Physical pin V3: DDR_MEM_ADDR[15]; output. */
  "DDR_MEM_ADDR[15]": "V3",
  /** Physical pin V4: DDR_MEM_DQS_P[4]; bidirectional. */
  "DDR_MEM_DQS_P[4]": "V4",
  /** Physical pin V5: DDR_MEM_D[40]; bidirectional. */
  "DDR_MEM_D[40]": "V5",
  /** Physical pin W1: DDR_MEM_D[33]; bidirectional. */
  "DDR_MEM_D[33]": "W1",
  /** Physical pin W2: DDR_MEM_D[38]; bidirectional. */
  "DDR_MEM_D[38]": "W2",
  /** Physical pin W3: DDR_MEM_D[37]; bidirectional. */
  "DDR_MEM_D[37]": "W3",
  /** Physical pin W4: DDR_MEM_DQS_M[5]; bidirectional. */
  "DDR_MEM_DQS_M[5]": "W4",
  /** Physical pin W5: DDR_MEM_DM[5]; bidirectional. */
  "DDR_MEM_DM[5]": "W5",
  /** Physical pin W6: DDR_MEM_ERROR_N; input. */
  "DDR_MEM_ERROR_N": "W6",
  /** Physical pin W7: DDR_MEM_CS_N[1]; output. */
  "DDR_MEM_CS_N[1]": "W7",
  /** Physical pin W8: DDR_MEM_D[51]; bidirectional. */
  "DDR_MEM_D[51]": "W8",
  /** Physical pin W9: DDR_MEM_D[55]; bidirectional. */
  "DDR_MEM_D[55]": "W9",
  /** Physical pin W10: DDR_MEM_DM[6]; bidirectional. */
  "DDR_MEM_DM[6]": "W10",
  /** Physical pin W11: DDR_MEM_D[49]; bidirectional. */
  "DDR_MEM_D[49]": "W11",
  /** Physical pin W12: DDR_MEM_D[54]; bidirectional. */
  "DDR_MEM_D[54]": "W12",
  /** Physical pin Y1: DDR_MEM_D[36]; bidirectional. */
  "DDR_MEM_D[36]": "Y1",
  /** Physical pin Y2: DDR_MEM_D[43]; bidirectional. */
  "DDR_MEM_D[43]": "Y2",
  /** Physical pin Y3: DDR_MEM_D[42]; bidirectional. */
  "DDR_MEM_D[42]": "Y3",
  /** Physical pin Y4: DDR_MEM_DQS_P[5]; bidirectional. */
  "DDR_MEM_DQS_P[5]": "Y4",
  /** Physical pin Y5: DDR_MEM_RESET_N; output. */
  "DDR_MEM_RESET_N": "Y5",
  /** Physical pin Y6: DDR_MEM_CS_N[0]; output. */
  "DDR_MEM_CS_N[0]": "Y6",
  /** Physical pin Y7: DDR_MEM_DQS_P[6]; bidirectional. */
  "DDR_MEM_DQS_P[6]": "Y7",
  /** Physical pin Y8: DDR_MEM_DQS_M[7]; bidirectional. */
  "DDR_MEM_DQS_M[7]": "Y8",
  /** Physical pin Y9: DDR_MEM_D[53]; bidirectional. */
  "DDR_MEM_D[53]": "Y9",
  /** Physical pin Y10: DDR_MEM_D[52]; bidirectional. */
  "DDR_MEM_D[52]": "Y10",
  /** Physical pin Y11: DDR_MEM_D[50]; bidirectional. */
  "DDR_MEM_D[50]": "Y11",
  /** Physical pin Y12: DDR_MEM_D[48]; bidirectional. */
  "DDR_MEM_D[48]": "Y12",
  /** Physical pin A8: GEMGXL_0_RXD_5; input. */
  "GEMGXL_0_RXD_5": "A8",
  /** Physical pin A10: GEMGXL_0_RXD_2; input. */
  "GEMGXL_0_RXD_2": "A10",
  /** Physical pin A11: GEMGXL_0_RX_DV; input. */
  "GEMGXL_0_RX_DV": "A11",
  /** Physical pin A12: GEMGXL_0_RXD_0; input. */
  "GEMGXL_0_RXD_0": "A12",
  /** Physical pin A13: GEMGXL_0_COL; input. */
  "GEMGXL_0_COL": "A13",
  /** Physical pin B7: GEMGXL_0_TX_EN; output. */
  "GEMGXL_0_TX_EN": "B7",
  /** Physical pin B8: GEMGXL_0_TXD_6; output. */
  "GEMGXL_0_TXD_6": "B8",
  /** Physical pin B10: GEMGXL_0_RXD_1; input. */
  "GEMGXL_0_RXD_1": "B10",
  /** Physical pin B11: GEMGXL_0_RX_ER; input. */
  "GEMGXL_0_RX_ER": "B11",
  /** Physical pin B12: GEMGXL_0_TXD_0; output. */
  "GEMGXL_0_TXD_0": "B12",
  /** Physical pin B13: GEMGXL_0_MDC; output. */
  "GEMGXL_0_MDC": "B13",
  /** Physical pin C8: GEMGXL_0_TX_CLK; input. */
  "GEMGXL_0_TX_CLK": "C8",
  /** Physical pin C9: GEMGXL_0_RXD_6; input. */
  "GEMGXL_0_RXD_6": "C9",
  /** Physical pin C10: GEMGXL_0_TXD_4; output. */
  "GEMGXL_0_TXD_4": "C10",
  /** Physical pin C11: GEMGXL_0_TXD_1; output. */
  "GEMGXL_0_TXD_1": "C11",
  /** Physical pin C12: GEMGXL_0_MDIO; bidirectional. */
  "GEMGXL_0_MDIO": "C12",
  /** Physical pin C13: GEMGXL_0_CRS; input. */
  "GEMGXL_0_CRS": "C13",
  /** Physical pin D9: GEMGXL_0_TXD_7; output. */
  "GEMGXL_0_TXD_7": "D9",
  /** Physical pin D10: GEMGXL_0_TXD_5; output. */
  "GEMGXL_0_TXD_5": "D10",
  /** Physical pin D11: GEMGXL_0_TXD_2; output. */
  "GEMGXL_0_TXD_2": "D11",
  /** Physical pin E9: GEMGXL_0_RXD_7; input. */
  "GEMGXL_0_RXD_7": "E9",
  /** Physical pin E10: GEMGXL_0_RXD_4; input. */
  "GEMGXL_0_RXD_4": "E10",
  /** Physical pin E11: GEMGXL_0_RXD_3; input. */
  "GEMGXL_0_RXD_3": "E11",
  /** Physical pin E12: GEMGXL_0_GTX_CLK; input. */
  "GEMGXL_0_GTX_CLK": "E12",
  /** Physical pin F10: GEMGXL_0_TX_ER; output. */
  "GEMGXL_0_TX_ER": "F10",
  /** Physical pin F11: GEMGXL_0_TXD_3; output. */
  "GEMGXL_0_TXD_3": "F11",
  /** Physical pin F12: GEMGXL_0_RX_CLK; input. */
  "GEMGXL_0_RX_CLK": "F12",
  /** Physical pin A21: GPIO_0_P_9; bidirectional. */
  "GPIO_0_P_9": "A21",
  /** Physical pin AA14: UART_1_RXD; input. */
  "UART_1_RXD": "AA14",
  /** Physical pin AA15: UART_1_TXD; output. */
  "UART_1_TXD": "AA15",
  /** Physical pin AA16: QSPI_2_DQ_0; bidirectional. */
  "QSPI_2_DQ_0": "AA16",
  /** Physical pin AB14: QSPI_2_CS_0; output. */
  "QSPI_2_CS_0": "AB14",
  /** Physical pin AB15: QSPI_2_DQ_1; bidirectional. */
  "QSPI_2_DQ_1": "AB15",
  /** Physical pin AB16: QSPI_2_DQ_2; bidirectional. */
  "QSPI_2_DQ_2": "AB16",
  /** Physical pin B20: GPIO_0_P_11; bidirectional. */
  "GPIO_0_P_11": "B20",
  /** Physical pin B21: GPIO_0_P_12; bidirectional. */
  "GPIO_0_P_12": "B21",
  /** Physical pin B22: GPIO_0_P_14; bidirectional. */
  "GPIO_0_P_14": "B22",
  /** Physical pin C20: GPIO_0_P_7; bidirectional. */
  "GPIO_0_P_7": "C20",
  /** Physical pin C21: GPIO_0_P_2; bidirectional. */
  "GPIO_0_P_2": "C21",
  /** Physical pin C22: GPIO_0_P_1; bidirectional. */
  "GPIO_0_P_1": "C22",
  /** Physical pin D19: GPIO_0_P_8; bidirectional. */
  "GPIO_0_P_8": "D19",
  /** Physical pin D20: GPIO_0_P_5; bidirectional. */
  "GPIO_0_P_5": "D20",
  /** Physical pin D21: GPIO_0_P_3; bidirectional. */
  "GPIO_0_P_3": "D21",
  /** Physical pin D22: PWM_1_P_0; bidirectional. */
  "PWM_1_P_0": "D22",
  /** Physical pin E18: GPIO_0_P_4; bidirectional. */
  "GPIO_0_P_4": "E18",
  /** Physical pin E19: GPIO_0_P_13; bidirectional. */
  "GPIO_0_P_13": "E19",
  /** Physical pin E20: GPIO_0_P_6; bidirectional. */
  "GPIO_0_P_6": "E20",
  /** Physical pin F17: GPIO_0_P_0; bidirectional. */
  "GPIO_0_P_0": "F17",
  /** Physical pin F18: GPIO_0_P_10; bidirectional. */
  "GPIO_0_P_10": "F18",
  /** Physical pin F19: PWM_1_P_3; bidirectional. */
  "PWM_1_P_3": "F19",
  /** Physical pin F20: PWM_0_P_2; bidirectional. */
  "PWM_0_P_2": "F20",
  /** Physical pin F21: PWM_0_P_1; bidirectional. */
  "PWM_0_P_1": "F21",
  /** Physical pin F22: QSPI_1_DQ_2; bidirectional. */
  "QSPI_1_DQ_2": "F22",
  /** Physical pin G17: GPIO_0_P_15; bidirectional. */
  "GPIO_0_P_15": "G17",
  /** Physical pin G18: PWM_1_P_2; bidirectional. */
  "PWM_1_P_2": "G18",
  /** Physical pin G19: PWM_0_P_0; bidirectional. */
  "PWM_0_P_0": "G19",
  /** Physical pin G20: PWM_0_P_3; bidirectional. */
  "PWM_0_P_3": "G20",
  /** Physical pin G21: QSPI_1_CS_1; output. */
  "QSPI_1_CS_1": "G21",
  /** Physical pin G22: QSPI_1_DQ_0; bidirectional. */
  "QSPI_1_DQ_0": "G22",
  /** Physical pin H17: PWM_1_P_1; bidirectional. */
  "PWM_1_P_1": "H17",
  /** Physical pin H18: QSPI_1_SCK; output. */
  "QSPI_1_SCK": "H18",
  /** Physical pin H19: QSPI_1_CS_2; output. */
  "QSPI_1_CS_2": "H19",
  /** Physical pin H20: QSPI_0_DQ_3; bidirectional. */
  "QSPI_0_DQ_3": "H20",
  /** Physical pin H21: QSPI_0_DQ_0; bidirectional. */
  "QSPI_0_DQ_0": "H21",
  /** Physical pin H22: QSPI_0_DQ_1; bidirectional. */
  "QSPI_0_DQ_1": "H22",
  /** Physical pin J17: QSPI_1_DQ_3; bidirectional. */
  "QSPI_1_DQ_3": "J17",
  /** Physical pin J18: QSPI_1_DQ_1; bidirectional. */
  "QSPI_1_DQ_1": "J18",
  /** Physical pin J19: QSPI_0_CS_0; output. */
  "QSPI_0_CS_0": "J19",
  /** Physical pin J20: QSPI_1_CS_3; output. */
  "QSPI_1_CS_3": "J20",
  /** Physical pin J21: QSPI_0_DQ_2; bidirectional. */
  "QSPI_0_DQ_2": "J21",
  /** Physical pin K17: QSPI_1_CS_0; output. */
  "QSPI_1_CS_0": "K17",
  /** Physical pin K18: QSPI_0_SCK; output. */
  "QSPI_0_SCK": "K18",
  /** Physical pin W13: I2C_0_SDA; bidirectional. */
  "I2C_0_SDA": "W13",
  /** Physical pin W14: UART_0_RXD; input. */
  "UART_0_RXD": "W14",
  /** Physical pin W15: QSPI_2_SCK; output. */
  "QSPI_2_SCK": "W15",
  /** Physical pin Y13: UART_0_TXD; output. */
  "UART_0_TXD": "Y13",
  /** Physical pin Y14: I2C_0_SCL; bidirectional. */
  "I2C_0_SCL": "Y14",
  /** Physical pin Y15: QSPI_2_DQ_3; bidirectional. */
  "QSPI_2_DQ_3": "Y15",
  /** Physical pin A15: HFXOSCIN; passive. */
  "HFXOSCIN": "A15",
  /** Physical pin A16: PRCI_RSVD0; passive. */
  "PRCI_RSVD0": "A16",
  /** Physical pin A17: PRCI_PORESET_N; input. */
  "PRCI_PORESET_N": "A17",
  /** Physical pin A19: MSEL_MSEL_0; input. */
  "MSEL_MSEL_0": "A19",
  /** Physical pin A20: MSEL_MSEL_2; input. */
  "MSEL_MSEL_2": "A20",
  /** Physical pin B15: HFXOSCOUT; passive. */
  "HFXOSCOUT": "B15",
  /** Physical pin B16: PRCI_RTCXALTCLKIN; passive. */
  "PRCI_RTCXALTCLKIN": "B16",
  /** Physical pin B17: PRCI_RSVD6; passive. */
  "PRCI_RSVD6": "B17",
  /** Physical pin B19: MSEL_MSEL_3; input. */
  "MSEL_MSEL_3": "B19",
  /** Physical pin C14: PRCI_RSVD15; passive. */
  "PRCI_RSVD15": "C14",
  /** Physical pin C15: PRCI_HFXSEL; input. */
  "PRCI_HFXSEL": "C15",
  /** Physical pin C16: PRCI_RSVD4; passive. */
  "PRCI_RSVD4": "C16",
  /** Physical pin C17: PRCI_ERESET_N; input. */
  "PRCI_ERESET_N": "C17",
  /** Physical pin C18: MSEL_MSEL_1; input. */
  "MSEL_MSEL_1": "C18",
  /** Physical pin C19: JTAG_TDI; input. */
  "JTAG_TDI": "C19",
  /** Physical pin D13: PRCI_RSVD1; passive. */
  "PRCI_RSVD1": "D13",
  /** Physical pin D14: PRCI_RSVD11; passive. */
  "PRCI_RSVD11": "D14",
  /** Physical pin D15: PRCI_RTCXSEL; input. */
  "PRCI_RTCXSEL": "D15",
  /** Physical pin D16: PRCI_RSVD3; passive. */
  "PRCI_RSVD3": "D16",
  /** Physical pin D17: PRCI_RSVD10; passive. */
  "PRCI_RSVD10": "D17",
  /** Physical pin D18: JTAG_TCK; input. */
  "JTAG_TCK": "D18",
  /** Physical pin E13: PRCI_RSVD2; passive. */
  "PRCI_RSVD2": "E13",
  /** Physical pin E14: PRCI_RSVD12; passive. */
  "PRCI_RSVD12": "E14",
  /** Physical pin E15: PRCI_RSVD5; passive. */
  "PRCI_RSVD5": "E15",
  /** Physical pin E16: PRCI_RSVD9; passive. */
  "PRCI_RSVD9": "E16",
  /** Physical pin E17: JTAG_TDO; output. */
  "JTAG_TDO": "E17",
  /** Physical pin F13: PRCI_RSVD14; passive. */
  "PRCI_RSVD14": "F13",
  /** Physical pin F14: PRCI_RSVD13; passive. */
  "PRCI_RSVD13": "F14",
  /** Physical pin F15: PRCI_HFXCLKIN; input. */
  "PRCI_HFXCLKIN": "F15",
  /** Physical pin F16: JTAG_TMS; input. */
  "JTAG_TMS": "F16",
  /** Physical pin G13: PRCI_RSVD7; passive. */
  "PRCI_RSVD7": "G13",
  /** Physical pin H13: PRCI_RSVD8; passive. */
  "PRCI_RSVD8": "H13",
  /** Physical pin A1: VSS; power_in. */
  "VSS_A1": "A1",
  /** Physical pin A2: VSS; passive. */
  "VSS_A2": "A2",
  /** Physical pin A3: VSS; passive. */
  "VSS_A3": "A3",
  /** Physical pin A9: VSS; passive. */
  "VSS_A9": "A9",
  /** Physical pin A14: VSS; passive. */
  "VSS_A14": "A14",
  /** Physical pin A18: VSS; passive. */
  "VSS_A18": "A18",
  /** Physical pin A22: VSS; passive. */
  "VSS_A22": "A22",
  /** Physical pin AA2: VSS; passive. */
  "VSS_AA2": "AA2",
  /** Physical pin AA17: VDD; power_in. */
  "VDD_AA17": "AA17",
  /** Physical pin AB1: VSS; passive. */
  "VSS_AB1": "AB1",
  /** Physical pin AB4: VSS; passive. */
  "VSS_AB4": "AB4",
  /** Physical pin AB7: VSS; passive. */
  "VSS_AB7": "AB7",
  /** Physical pin AB10: VSS; passive. */
  "VSS_AB10": "AB10",
  /** Physical pin AB13: VSS; passive. */
  "VSS_AB13": "AB13",
  /** Physical pin AB17: VSS; passive. */
  "VSS_AB17": "AB17",
  /** Physical pin AB22: VSS; passive. */
  "VSS_AB22": "AB22",
  /** Physical pin B9: VDD; passive. */
  "VDD_B9": "B9",
  /** Physical pin B14: VDD; passive. */
  "VDD_B14": "B14",
  /** Physical pin B18: VDD; passive. */
  "VDD_B18": "B18",
  /** Physical pin D1: VSS; passive. */
  "VSS_D1": "D1",
  /** Physical pin D12: VSS; passive. */
  "VSS_D12": "D12",
  /** Physical pin E3: VDD; passive. */
  "VDD_E3": "E3",
  /** Physical pin E4: VSS; passive. */
  "VSS_E4": "E4",
  /** Physical pin E21: VDD; passive. */
  "VDD_E21": "E21",
  /** Physical pin E22: VSS; passive. */
  "VSS_E22": "E22",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin G2: VSS; passive. */
  "VSS_G2": "G2",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: DDR_VDDQ; power_in. */
  "DDR_VDDQ_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VDD; passive. */
  "VDD_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G11: VDD; passive. */
  "VDD_G11": "G11",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin G14: OTP_VDD; power_in. */
  "OTP_VDD": "G14",
  /** Physical pin G15: VDD; passive. */
  "VDD_G15": "G15",
  /** Physical pin G16: VSS; passive. */
  "VSS_G16": "G16",
  /** Physical pin H6: DDR_VDDQ; passive. */
  "DDR_VDDQ_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VDD; passive. */
  "VDD_H8": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin H10: VDD; passive. */
  "VDD_H10": "H10",
  /** Physical pin H11: GIVSS; power_in. */
  "GIVSS": "H11",
  /** Physical pin H12: VDD; passive. */
  "VDD_H12": "H12",
  /** Physical pin H14: VDD; passive. */
  "VDD_H14": "H14",
  /** Physical pin H15: VSS; passive. */
  "VSS_H15": "H15",
  /** Physical pin H16: VDD; passive. */
  "VDD_H16": "H16",
  /** Physical pin J1: VSS; passive. */
  "VSS_J1": "J1",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: DDR_VDDQ; passive. */
  "DDR_VDDQ_J7": "J7",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin J9: VDD; passive. */
  "VDD_J9": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J11: GIVDD; power_in. */
  "GIVDD": "J11",
  /** Physical pin J12: GEMGXLPLL_AVSS; power_in. */
  "GEMGXLPLL_AVSS": "J12",
  /** Physical pin J13: DDRPLL_AVSS; power_in. */
  "DDRPLL_AVSS": "J13",
  /** Physical pin J14: COREPLL_AVSS; power_in. */
  "COREPLL_AVSS": "J14",
  /** Physical pin J15: VDD; passive. */
  "VDD_J15": "J15",
  /** Physical pin J16: VSS; passive. */
  "VSS_J16": "J16",
  /** Physical pin J22: VSS; passive. */
  "VSS_J22": "J22",
  /** Physical pin K6: DDR_VDDQ; passive. */
  "DDR_VDDQ_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VDD; passive. */
  "VDD_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VDD; passive. */
  "VDD_K10": "K10",
  /** Physical pin K11: VSS; passive. */
  "VSS_K11": "K11",
  /** Physical pin K12: GEMGXLPLL_AVDD; power_in. */
  "GEMGXLPLL_AVDD": "K12",
  /** Physical pin K13: DDRPLL_AVDD; power_in. */
  "DDRPLL_AVDD": "K13",
  /** Physical pin K14: COREPLL_AVDD; power_in. */
  "COREPLL_AVDD": "K14",
  /** Physical pin K15: IVSS; power_in. */
  "IVSS_K15": "K15",
  /** Physical pin K16: IVDD; power_in. */
  "IVDD_K16": "K16",
  /** Physical pin K21: VDD; passive. */
  "VDD_K21": "K21",
  /** Physical pin L6: VSS; passive. */
  "VSS_L6": "L6",
  /** Physical pin L7: DDR_VDDQ; passive. */
  "DDR_VDDQ_L7": "L7",
  /** Physical pin L8: VSS; passive. */
  "VSS_L8": "L8",
  /** Physical pin L9: DDR_VDDPLL; passive. */
  "DDR_VDDPLL_L9": "L9",
  /** Physical pin L10: VSS; passive. */
  "VSS_L10": "L10",
  /** Physical pin L11: VDD; passive. */
  "VDD_L11": "L11",
  /** Physical pin L12: VSS; passive. */
  "VSS_L12": "L12",
  /** Physical pin L13: VDD; passive. */
  "VDD_L13": "L13",
  /** Physical pin L14: VSS; passive. */
  "VSS_L14": "L14",
  /** Physical pin L15: IVSS; passive. */
  "IVSS_L15": "L15",
  /** Physical pin L16: IVDD; passive. */
  "IVDD_L16": "L16",
  /** Physical pin M6: DDR_VDDQ; passive. */
  "DDR_VDDQ_M6": "M6",
  /** Physical pin M7: VSS; passive. */
  "VSS_M7": "M7",
  /** Physical pin M8: VDD; passive. */
  "VDD_M8": "M8",
  /** Physical pin M9: DDR_VDDPLL; power_in. */
  "DDR_VDDPLL_M9": "M9",
  /** Physical pin M10: VDD; passive. */
  "VDD_M10": "M10",
  /** Physical pin M11: VSS; passive. */
  "VSS_M11": "M11",
  /** Physical pin M12: VDD; passive. */
  "VDD_M12": "M12",
  /** Physical pin M13: VSS; passive. */
  "VSS_M13": "M13",
  /** Physical pin M14: VDD; passive. */
  "VDD_M14": "M14",
  /** Physical pin M15: IVSS; passive. */
  "IVSS_M15": "M15",
  /** Physical pin M16: IVDD; passive. */
  "IVDD_M16": "M16",
  /** Physical pin N6: VSS; passive. */
  "VSS_N6": "N6",
  /** Physical pin N7: DDR_VDDQ; passive. */
  "DDR_VDDQ_N7": "N7",
  /** Physical pin N8: VSS; passive. */
  "VSS_N8": "N8",
  /** Physical pin N9: VDD; passive. */
  "VDD_N9": "N9",
  /** Physical pin N10: VSS; passive. */
  "VSS_N10": "N10",
  /** Physical pin N11: VDD; passive. */
  "VDD_N11": "N11",
  /** Physical pin N12: VSS; passive. */
  "VSS_N12": "N12",
  /** Physical pin N13: VDD; passive. */
  "VDD_N13": "N13",
  /** Physical pin N14: VSS; passive. */
  "VSS_N14": "N14",
  /** Physical pin N15: IVSS; passive. */
  "IVSS_N15": "N15",
  /** Physical pin N16: IVDD; passive. */
  "IVDD_N16": "N16",
  /** Physical pin P1: VSS; passive. */
  "VSS_P1": "P1",
  /** Physical pin P2: VDD; passive. */
  "VDD_P2": "P2",
  /** Physical pin P6: DDR_VDDQ; passive. */
  "DDR_VDDQ_P6": "P6",
  /** Physical pin P7: VSS; passive. */
  "VSS_P7": "P7",
  /** Physical pin P8: VDD; passive. */
  "VDD_P8": "P8",
  /** Physical pin P9: VSS; passive. */
  "VSS_P9": "P9",
  /** Physical pin P10: VDD; passive. */
  "VDD_P10": "P10",
  /** Physical pin P11: VSS; passive. */
  "VSS_P11": "P11",
  /** Physical pin P12: VDD; passive. */
  "VDD_P12": "P12",
  /** Physical pin P13: VSS; passive. */
  "VSS_P13": "P13",
  /** Physical pin P14: VDD; passive. */
  "VDD_P14": "P14",
  /** Physical pin P15: VSS; passive. */
  "VSS_P15": "P15",
  /** Physical pin P16: VDD; passive. */
  "VDD_P16": "P16",
  /** Physical pin P21: VDD; passive. */
  "VDD_P21": "P21",
  /** Physical pin P22: VSS; passive. */
  "VSS_P22": "P22",
  /** Physical pin R6: VSS; passive. */
  "VSS_R6": "R6",
  /** Physical pin R7: DDR_VDDQ; passive. */
  "DDR_VDDQ_R7": "R7",
  /** Physical pin R8: VSS; passive. */
  "VSS_R8": "R8",
  /** Physical pin R9: VDD; passive. */
  "VDD_R9": "R9",
  /** Physical pin R10: VSS; passive. */
  "VSS_R10": "R10",
  /** Physical pin R11: VDD; passive. */
  "VDD_R11": "R11",
  /** Physical pin R12: VSS; passive. */
  "VSS_R12": "R12",
  /** Physical pin R13: VDD; passive. */
  "VDD_R13": "R13",
  /** Physical pin R14: VSS; passive. */
  "VSS_R14": "R14",
  /** Physical pin R15: VDD; passive. */
  "VDD_R15": "R15",
  /** Physical pin R16: VSS; passive. */
  "VSS_R16": "R16",
  /** Physical pin T6: DDR_VDDQ; passive. */
  "DDR_VDDQ_T6": "T6",
  /** Physical pin T7: VSS; passive. */
  "VSS_T7": "T7",
  /** Physical pin T8: VDD; passive. */
  "VDD_T8": "T8",
  /** Physical pin T9: VSS; passive. */
  "VSS_T9": "T9",
  /** Physical pin T10: VDD; passive. */
  "VDD_T10": "T10",
  /** Physical pin T11: VSS; passive. */
  "VSS_T11": "T11",
  /** Physical pin T12: VDD; passive. */
  "VDD_T12": "T12",
  /** Physical pin T13: VSS; passive. */
  "VSS_T13": "T13",
  /** Physical pin T14: VDD; passive. */
  "VDD_T14": "T14",
  /** Physical pin T15: VSS; passive. */
  "VSS_T15": "T15",
  /** Physical pin T16: VDD; passive. */
  "VDD_T16": "T16",
  /** Physical pin T17: VSS; passive. */
  "VSS_T17": "T17",
  /** Physical pin U6: VSS; passive. */
  "VSS_U6": "U6",
  /** Physical pin U7: DDR_VDDQCK; power_in. */
  "DDR_VDDQCK": "U7",
  /** Physical pin U8: VSS; passive. */
  "VSS_U8": "U8",
  /** Physical pin U9: VDD; passive. */
  "VDD_U9": "U9",
  /** Physical pin U10: VSS; passive. */
  "VSS_U10": "U10",
  /** Physical pin U11: VDD; passive. */
  "VDD_U11": "U11",
  /** Physical pin U12: VSS; passive. */
  "VSS_U12": "U12",
  /** Physical pin U13: VDD; passive. */
  "VDD_U13": "U13",
  /** Physical pin U14: VSS; passive. */
  "VSS_U14": "U14",
  /** Physical pin U15: VDD; passive. */
  "VDD_U15": "U15",
  /** Physical pin U16: VSS; passive. */
  "VSS_U16": "U16",
  /** Physical pin V1: VSS; passive. */
  "VSS_V1": "V1",
  /** Physical pin V6: VDD; passive. */
  "VDD_V6": "V6",
  /** Physical pin V7: VSS; passive. */
  "VSS_V7": "V7",
  /** Physical pin V8: VDD; passive. */
  "VDD_V8": "V8",
  /** Physical pin V9: VSS; passive. */
  "VSS_V9": "V9",
  /** Physical pin V10: VDD; passive. */
  "VDD_V10": "V10",
  /** Physical pin V11: VSS; passive. */
  "VSS_V11": "V11",
  /** Physical pin V12: VDD; passive. */
  "VDD_V12": "V12",
  /** Physical pin V13: VSS; passive. */
  "VSS_V13": "V13",
  /** Physical pin V14: VDD; passive. */
  "VDD_V14": "V14",
  /** Physical pin V15: VSS; passive. */
  "VSS_V15": "V15",
  /** Physical pin V21: VDD; passive. */
  "VDD_V21": "V21",
  /** Physical pin V22: VSS; passive. */
  "VSS_V22": "V22",
}) {
  override schema = "MCU_SiFive:FU540-C000";
  override referencePrefix = "U";
}

