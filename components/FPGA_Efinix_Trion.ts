// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Efinix Trion FPGA, 7384 LEs, LQFP-144
 *
 * KiCad symbol: `FPGA_Efinix_Trion:T8Q144xx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.efinixinc.com/docs/trion8-ds-v4.4.pdf
 * Keywords: FPGA programmable logic.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 11.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class T8Q144xx extends Component.withPins({
  /** Physical pin 23: VCCIO1A; power_in. */
  "VCCIO1A": "23",
  /** Physical pin 24: TDO; output. */
  "TDO": "24",
  /** Physical pin 25: TMS; input. */
  "TMS": "25",
  /** Physical pin 26: TCK; input. */
  "TCK": "26",
  /** Physical pin 27: TDI; input. */
  "TDI": "27",
  /** Physical pin 28: GPIOL_09_CDI1; bidirectional. */
  "GPIOL_09_CDI1": "28",
  /** Physical pin 29: GPIOL_08_CDI0; bidirectional. */
  "GPIOL_08_CDI0": "29",
  /** Physical pin 30: GPIOL_01_CCK; bidirectional. */
  "GPIOL_01_CCK": "30",
  /** Physical pin 31: GPIOL_00_SS_N; bidirectional. */
  "GPIOL_00_SS_N": "31",
  /** Physical pin 32: GPIOL_04_CSI; bidirectional. */
  "GPIOL_04_CSI": "32",
  /** Physical pin 33: GPIOL_05_CSO; bidirectional. */
  "GPIOL_05_CSO": "33",
  /** Physical pin 34: CDONE; bidirectional. */
  "CDONE": "34",
  /** Physical pin 35: CRESET_N; bidirectional. */
  "CRESET_N": "35",
  /** Physical pin 14: GPIOL_25_CLK1; bidirectional. */
  "GPIOL_25_CLK1": "14",
  /** Physical pin 15: GPIOL_24_CLK0; bidirectional. */
  "GPIOL_24_CLK0": "15",
  /** Physical pin 16: GPIOL_22_CTRL2; bidirectional. */
  "GPIOL_22_CTRL2": "16",
  /** Physical pin 17: GPIOL_21_CTRL1_CDI5; bidirectional. */
  "GPIOL_21_CTRL1_CDI5": "17",
  /** Physical pin 18: GPIOL_20_CTRL0_CDI4; bidirectional. */
  "GPIOL_20_CTRL0_CDI4": "18",
  /** Physical pin 19: GPIOL_13_CDI3; bidirectional. */
  "GPIOL_13_CDI3": "19",
  /** Physical pin 20: GPIOL_12_CDI2; bidirectional. */
  "GPIOL_12_CDI2": "20",
  /** Physical pin 21: VCCIO1B; power_in. */
  "VCCIO1B": "21",
  /** Physical pin 3: GPIOL_53_CDI10; bidirectional. */
  "GPIOL_53_CDI10": "3",
  /** Physical pin 4: GPIOL_54_CDI11; bidirectional. */
  "GPIOL_54_CDI11": "4",
  /** Physical pin 6: GPIOL_46; bidirectional. */
  "GPIOL_46": "6",
  /** Physical pin 7: GPIOL_41_CDI9; bidirectional. */
  "GPIOL_41_CDI9": "7",
  /** Physical pin 8: GPIOL_40_CDI8; bidirectional. */
  "GPIOL_40_CDI8": "8",
  /** Physical pin 10: GPIOL_32_CTRL4_CDI7; bidirectional. */
  "GPIOL_32_CTRL4_CDI7": "10",
  /** Physical pin 11: GPIOL_31_CLK7_CDI6; bidirectional. */
  "GPIOL_31_CLK7_CDI6": "11",
  /** Physical pin 12: VCCIO1C_1D; power_in. */
  "VCCIO1C_1D": "12",
  /** Physical pin 131: GPIOL_75_PLLIN1; bidirectional. */
  "GPIOL_75_PLLIN1": "131",
  /** Physical pin 132: GPIOL_74_PLLIN0; bidirectional. */
  "GPIOL_74_PLLIN0": "132",
  /** Physical pin 134: GPIOL_73_EXTFB1_CDI15; bidirectional. */
  "GPIOL_73_EXTFB1_CDI15": "134",
  /** Physical pin 135: GPIOL_72_EXTFB0_CDI14; bidirectional. */
  "GPIOL_72_EXTFB0_CDI14": "135",
  /** Physical pin 136: GPIOL_71_NSTATUS; bidirectional. */
  "GPIOL_71_NSTATUS": "136",
  /** Physical pin 137: GPIOL_70_CBSEL0; bidirectional. */
  "GPIOL_70_CBSEL0": "137",
  /** Physical pin 138: GPIOL_69_CBSEL1; bidirectional. */
  "GPIOL_69_CBSEL1": "138",
  /** Physical pin 139: GPIOL_68; bidirectional. */
  "GPIOL_68": "139",
  /** Physical pin 140: GPIOL_67_CDI13; bidirectional. */
  "GPIOL_67_CDI13": "140",
  /** Physical pin 141: GPIOL_65; bidirectional. */
  "GPIOL_65": "141",
  /** Physical pin 142: GPIOL_66_CDI12; bidirectional. */
  "GPIOL_66_CDI12": "142",
  /** Physical pin 143: VCCIO1E; power_in. */
  "VCCIO1E": "143",
  /** Physical pin 144: GPIOL_64; bidirectional. */
  "GPIOL_64": "144",
  /** Physical pin 109: GPIOR_88_CDI28; bidirectional. */
  "GPIOR_88_CDI28": "109",
  /** Physical pin 110: GPIOR_87_CDI29; bidirectional. */
  "GPIOR_87_CDI29": "110",
  /** Physical pin 111: GPIOR_85; bidirectional. */
  "GPIOR_85": "111",
  /** Physical pin 112: GPIOR_86; bidirectional. */
  "GPIOR_86": "112",
  /** Physical pin 113: GPIOR_84; bidirectional. */
  "GPIOR_84": "113",
  /** Physical pin 114: GPIOR_83; bidirectional. */
  "GPIOR_83": "114",
  /** Physical pin 115: GPIOR_82; bidirectional. */
  "GPIOR_82": "115",
  /** Physical pin 116: GPIOR_81_MREFCLK; bidirectional. */
  "GPIOR_81_MREFCLK": "116",
  /** Physical pin 117: GPIOR_80; bidirectional. */
  "GPIOR_80": "117",
  /** Physical pin 118: GPIOR_79_EXTFB1_CDI30; bidirectional. */
  "GPIOR_79_EXTFB1_CDI30": "118",
  /** Physical pin 119: GPIOR_78_EXTFB0_CDI31; bidirectional. */
  "GPIOR_78_EXTFB0_CDI31": "119",
  /** Physical pin 122: VCCIO3A; power_in. */
  "VCCIO3A": "122",
  /** Physical pin 123: GPIOR_77_PLLIN1; bidirectional. */
  "GPIOR_77_PLLIN1": "123",
  /** Physical pin 124: GPIOR_76_PLLIN0; bidirectional. */
  "GPIOR_76_PLLIN0": "124",
  /** Physical pin 93: GPIOR_123_CLK12_CDI20; bidirectional. */
  "GPIOR_123_CLK12_CDI20": "93",
  /** Physical pin 95: VCCIO3B_3C; power_in. */
  "VCCIO3B_3C": "95",
  /** Physical pin 97: GPIOR_122_CLK13_CDI21; bidirectional. */
  "GPIOR_122_CLK13_CDI21": "97",
  /** Physical pin 98: GPIOR_117_CTRL14; bidirectional. */
  "GPIOR_117_CTRL14": "98",
  /** Physical pin 99: GPIOR_116_CTRL15; bidirectional. */
  "GPIOR_116_CTRL15": "99",
  /** Physical pin 100: GPIOR_113_CDI22; bidirectional. */
  "GPIOR_113_CDI22": "100",
  /** Physical pin 101: GPIOR_112_CDI23; bidirectional. */
  "GPIOR_112_CDI23": "101",
  /** Physical pin 102: GPIOR_105_CDI24; bidirectional. */
  "GPIOR_105_CDI24": "102",
  /** Physical pin 103: GPIOR_104_CDI25; bidirectional. */
  "GPIOR_104_CDI25": "103",
  /** Physical pin 105: GPIOR_95_CDI26; bidirectional. */
  "GPIOR_95_CDI26": "105",
  /** Physical pin 106: GPIOR_94_CDI27; bidirectional. */
  "GPIOR_94_CDI27": "106",
  /** Physical pin 81: GPIOR_139; bidirectional. */
  "GPIOR_139": "81",
  /** Physical pin 82: GPIOR_138; bidirectional. */
  "GPIOR_138": "82",
  /** Physical pin 83: GPIOR_136_CDI16; bidirectional. */
  "GPIOR_136_CDI16": "83",
  /** Physical pin 84: GPIOR_135_CDI17; bidirectional. */
  "GPIOR_135_CDI17": "84",
  /** Physical pin 86: GPIOR_133_CDI18; bidirectional. */
  "GPIOR_133_CDI18": "86",
  /** Physical pin 87: GPIOR_132_CDI19; bidirectional. */
  "GPIOR_132_CDI19": "87",
  /** Physical pin 89: GPIOR_129_CTRL10; bidirectional. */
  "GPIOR_129_CTRL10": "89",
  /** Physical pin 90: GPIOR_128_CTRL11; bidirectional. */
  "GPIOR_128_CTRL11": "90",
  /** Physical pin 91: VCCIO3D; power_in. */
  "VCCIO3D": "91",
  /** Physical pin 92: GPIOR_125_CLK10; bidirectional. */
  "GPIOR_125_CLK10": "92",
  /** Physical pin 74: GPIOR_158_TEST_N; bidirectional. */
  "GPIOR_158_TEST_N": "74",
  /** Physical pin 75: GPIOR_157_PLLIN; bidirectional. */
  "GPIOR_157_PLLIN": "75",
  /** Physical pin 76: GPIOR_155; bidirectional. */
  "GPIOR_155": "76",
  /** Physical pin 77: GPIOR_154; bidirectional. */
  "GPIOR_154": "77",
  /** Physical pin 78: GPIOR_151_CBUS0; bidirectional. */
  "GPIOR_151_CBUS0": "78",
  /** Physical pin 79: GPIOR_150_CBUS1; bidirectional. */
  "GPIOR_150_CBUS1": "79",
  /** Physical pin 80: GPIOR_149_CBUS2; bidirectional. */
  "GPIOR_149_CBUS2": "80",
  /** Physical pin 88: VCCIO3E; power_in. */
  "VCCIO3E": "88",
  /** Physical pin 55: GPIOB_RXP00; bidirectional. */
  "GPIOB_RXP00": "55",
  /** Physical pin 56: GPIOB_RXN00; bidirectional. */
  "GPIOB_RXN00": "56",
  /** Physical pin 58: GPIOB_RXP02; bidirectional. */
  "GPIOB_RXP02": "58",
  /** Physical pin 59: GPIOB_RXN02; bidirectional. */
  "GPIOB_RXN02": "59",
  /** Physical pin 60: GPIOB_RXN03; bidirectional. */
  "GPIOB_RXN03": "60",
  /** Physical pin 61: GPIOB_RXP03; bidirectional. */
  "GPIOB_RXP03": "61",
  /** Physical pin 62: VCCIO4A; power_in. */
  "VCCIO4A_62": "62",
  /** Physical pin 63: VCCIO4A; passive. */
  "VCCIO4A_63": "63",
  /** Physical pin 65: GPIOB_RXN07; bidirectional. */
  "GPIOB_RXN07": "65",
  /** Physical pin 66: GPIOB_RXP07; bidirectional. */
  "GPIOB_RXP07": "66",
  /** Physical pin 67: GPIOB_RXP10; bidirectional. */
  "GPIOB_RXP10": "67",
  /** Physical pin 68: GPIOB_RXN10; bidirectional. */
  "GPIOB_RXN10": "68",
  /** Physical pin 69: GPIOB_RXN12_EXTFB0; bidirectional. */
  "GPIOB_RXN12_EXTFB0": "69",
  /** Physical pin 70: GPIOB_RXP12_EXTFB0; bidirectional. */
  "GPIOB_RXP12_EXTFB0": "70",
  /** Physical pin 71: GPIOB_CLKP0; bidirectional. */
  "GPIOB_CLKP0": "71",
  /** Physical pin 72: GPIOB_CLKN0; bidirectional. */
  "GPIOB_CLKN0": "72",
  /** Physical pin 36: REF_RES; passive. */
  "REF_RES": "36",
  /** Physical pin 38: GPIOB_TXP00; bidirectional. */
  "GPIOB_TXP00": "38",
  /** Physical pin 39: GPIOB_TXN00; bidirectional. */
  "GPIOB_TXN00": "39",
  /** Physical pin 40: GPIOB_TXP02; bidirectional. */
  "GPIOB_TXP02": "40",
  /** Physical pin 41: GPIOB_TXN02; bidirectional. */
  "GPIOB_TXN02": "41",
  /** Physical pin 42: GPIOB_TXP04; bidirectional. */
  "GPIOB_TXP04": "42",
  /** Physical pin 43: GPIOB_TXN04; bidirectional. */
  "GPIOB_TXN04": "43",
  /** Physical pin 45: GPIOB_TXP06; bidirectional. */
  "GPIOB_TXP06": "45",
  /** Physical pin 46: GPIOB_TXN06; bidirectional. */
  "GPIOB_TXN06": "46",
  /** Physical pin 47: GPIOB_TXP09; bidirectional. */
  "GPIOB_TXP09": "47",
  /** Physical pin 48: GPIOB_TXN09; bidirectional. */
  "GPIOB_TXN09": "48",
  /** Physical pin 51: VCCIO4B; power_in. */
  "VCCIO4B_51": "51",
  /** Physical pin 52: VCCIO4B; passive. */
  "VCCIO4B_52": "52",
  /** Physical pin 53: GPIOB_TXP11; bidirectional. */
  "GPIOB_TXP11": "53",
  /** Physical pin 54: GPIOB_TXN11; bidirectional. */
  "GPIOB_TXN11": "54",
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VCCA_TL; power_in. */
  "VCCA_TL": "2",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 13: VCC; power_in. */
  "VCC_13": "13",
  /** Physical pin 22: VCC; power_in. */
  "VCC_22": "22",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 49: VCC; power_in. */
  "VCC_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 57: VCC; power_in. */
  "VCC_57": "57",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 73: VCCA_BR; power_in. */
  "VCCA_BR": "73",
  /** Physical pin 85: VCC; power_in. */
  "VCC_85": "85",
  /** Physical pin 94: GND; passive. */
  "GND_94": "94",
  /** Physical pin 96: VCC; power_in. */
  "VCC_96": "96",
  /** Physical pin 104: GND; passive. */
  "GND_104": "104",
  /** Physical pin 107: VCCA_TR; power_in. */
  "VCCA_TR": "107",
  /** Physical pin 108: GND; passive. */
  "GND_108": "108",
  /** Physical pin 120: GND; passive. */
  "GND_120": "120",
  /** Physical pin 121: GND; passive. */
  "GND_121": "121",
  /** Physical pin 125: VCC; power_in. */
  "VCC_125": "125",
  /** Physical pin 126: GND; passive. */
  "GND_126": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: VCC; power_in. */
  "VCC_128": "128",
  /** Physical pin 129: GND; passive. */
  "GND_129": "129",
  /** Physical pin 130: VCC; power_in. */
  "VCC_130": "130",
  /** Physical pin 133: GND; passive. */
  "GND_133": "133",
}) {
  override schema = "FPGA_Efinix_Trion:T8Q144xx";
  override referencePrefix = "U";
}

