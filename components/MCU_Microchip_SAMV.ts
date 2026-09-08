// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * SAM V71 Microchip SMART ARM Cortex-M7-based MCU, 2048K Flash, 384K SRAM, LQFP-144
 *
 * KiCad symbol: `MCU_Microchip_SAMV:ATSAMV71Q21B-A`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM-E70-S70-V70-V71-Family-Data-Sheet-DS60001527D.pdf
 * Keywords: 32-bit ARM Cortex-M7 MCU Microcontroller.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ATSAMV71Q21B_A extends Component.withPins({
  /** Physical pin 1: PD0; bidirectional. */
  "PD0": "1",
  /** Physical pin 2: PD31; bidirectional. */
  "PD31": "2",
  /** Physical pin 3: VDDOUT; power_in. */
  "VDDOUT": "3",
  /** Physical pin 4: PE0; bidirectional. */
  "PE0": "4",
  /** Physical pin 5: VDDIN; power_in. */
  "VDDIN": "5",
  /** Physical pin 6: PE1; bidirectional. */
  "PE1": "6",
  /** Physical pin 7: PE2; bidirectional. */
  "PE2": "7",
  /** Physical pin 8: VREFN; bidirectional. */
  "VREFN": "8",
  /** Physical pin 9: VREFP; input. */
  "VREFP": "9",
  /** Physical pin 10: PE3; bidirectional. */
  "PE3": "10",
  /** Physical pin 11: PC0; bidirectional. */
  "PC0": "11",
  /** Physical pin 12: PC27; bidirectional. */
  "PC27": "12",
  /** Physical pin 13: PC26; bidirectional. */
  "PC26": "13",
  /** Physical pin 14: PC31; bidirectional. */
  "PC31": "14",
  /** Physical pin 15: PC30; bidirectional. */
  "PC30": "15",
  /** Physical pin 16: PC29; bidirectional. */
  "PC29": "16",
  /** Physical pin 17: PC12; bidirectional. */
  "PC12": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PC13; bidirectional. */
  "PC13": "19",
  /** Physical pin 20: PB1; bidirectional. */
  "PB1": "20",
  /** Physical pin 21: PB0; bidirectional. */
  "PB0": "21",
  /** Physical pin 22: PA20; bidirectional. */
  "PA20": "22",
  /** Physical pin 23: PA19; bidirectional. */
  "PA19": "23",
  /** Physical pin 24: PA18; bidirectional. */
  "PA18": "24",
  /** Physical pin 25: PA17; bidirectional. */
  "PA17": "25",
  /** Physical pin 26: PB2; bidirectional. */
  "PB2": "26",
  /** Physical pin 27: PE4; bidirectional. */
  "PE4": "27",
  /** Physical pin 28: PE5; bidirectional. */
  "PE5": "28",
  /** Physical pin 29: VDDCORE; power_in. */
  "VDDCORE_29": "29",
  /** Physical pin 30: VDDIO; power_in. */
  "VDDIO_30": "30",
  /** Physical pin 31: PB3; bidirectional. */
  "PB3": "31",
  /** Physical pin 32: PA21; bidirectional. */
  "PA21": "32",
  /** Physical pin 33: VDDCORE; passive. */
  "VDDCORE_33": "33",
  /** Physical pin 34: PD30; bidirectional. */
  "PD30": "34",
  /** Physical pin 35: PA7; bidirectional. */
  "PA7": "35",
  /** Physical pin 36: PA8; bidirectional. */
  "PA8": "36",
  /** Physical pin 37: PA22; bidirectional. */
  "PA22": "37",
  /** Physical pin 38: PC1; bidirectional. */
  "PC1": "38",
  /** Physical pin 39: PC2; bidirectional. */
  "PC2": "39",
  /** Physical pin 40: PC3; bidirectional. */
  "PC3": "40",
  /** Physical pin 41: PC4; bidirectional. */
  "PC4": "41",
  /** Physical pin 42: PA13; bidirectional. */
  "PA13": "42",
  /** Physical pin 43: VDDIO; passive. */
  "VDDIO_43": "43",
  /** Physical pin 44: GND; power_in. */
  "GND_44": "44",
  /** Physical pin 45: PA16; bidirectional. */
  "PA16": "45",
  /** Physical pin 46: PA23; bidirectional. */
  "PA23": "46",
  /** Physical pin 47: PD27; bidirectional. */
  "PD27": "47",
  /** Physical pin 48: PC7; bidirectional. */
  "PC7": "48",
  /** Physical pin 49: PA15; bidirectional. */
  "PA15": "49",
  /** Physical pin 50: VDDCORE; passive. */
  "VDDCORE_50": "50",
  /** Physical pin 51: PA14; bidirectional. */
  "PA14": "51",
  /** Physical pin 52: PD25; bidirectional. */
  "PD25": "52",
  /** Physical pin 53: PD26; bidirectional. */
  "PD26": "53",
  /** Physical pin 54: PC6; bidirectional. */
  "PC6": "54",
  /** Physical pin 55: PD24; bidirectional. */
  "PD24": "55",
  /** Physical pin 56: PA24; bidirectional. */
  "PA24": "56",
  /** Physical pin 57: PD23; bidirectional. */
  "PD23": "57",
  /** Physical pin 58: PC5; bidirectional. */
  "PC5": "58",
  /** Physical pin 59: PA25; bidirectional. */
  "PA25": "59",
  /** Physical pin 60: PD22; bidirectional. */
  "PD22": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: PA26; bidirectional. */
  "PA26": "62",
  /** Physical pin 63: PD21; bidirectional. */
  "PD21": "63",
  /** Physical pin 64: PA11; bidirectional. */
  "PA11": "64",
  /** Physical pin 65: PD20; bidirectional. */
  "PD20": "65",
  /** Physical pin 66: PA10; bidirectional. */
  "PA10": "66",
  /** Physical pin 67: PD19; bidirectional. */
  "PD19": "67",
  /** Physical pin 68: PA12; bidirectional. */
  "PA12": "68",
  /** Physical pin 69: PD18; bidirectional. */
  "PD18": "69",
  /** Physical pin 70: PA27; bidirectional. */
  "PA27": "70",
  /** Physical pin 71: PD28; bidirectional. */
  "PD28": "71",
  /** Physical pin 72: VDDIO; passive. */
  "VDDIO_72": "72",
  /** Physical pin 73: PA5; bidirectional. */
  "PA5": "73",
  /** Physical pin 74: PD17; bidirectional. */
  "PD17": "74",
  /** Physical pin 75: PA9; bidirectional. */
  "PA9": "75",
  /** Physical pin 76: PC28; bidirectional. */
  "PC28": "76",
  /** Physical pin 77: PA4; bidirectional. */
  "PA4": "77",
  /** Physical pin 78: PD16; bidirectional. */
  "PD16": "78",
  /** Physical pin 79: PB6; bidirectional. */
  "PB6": "79",
  /** Physical pin 80: VDDIO; passive. */
  "VDDIO_80": "80",
  /** Physical pin 81: VDDCORE; passive. */
  "VDDCORE_81": "81",
  /** Physical pin 82: PC8; bidirectional. */
  "PC8": "82",
  /** Physical pin 83: NRST; bidirectional. */
  "NRST": "83",
  /** Physical pin 84: PD14; bidirectional. */
  "PD14": "84",
  /** Physical pin 85: TST; input. */
  "TST": "85",
  /** Physical pin 86: PC9; bidirectional. */
  "PC9": "86",
  /** Physical pin 87: PB12; bidirectional. */
  "PB12": "87",
  /** Physical pin 88: PD13; bidirectional. */
  "PD13": "88",
  /** Physical pin 89: PB7; bidirectional. */
  "PB7": "89",
  /** Physical pin 90: PC10; bidirectional. */
  "PC10": "90",
  /** Physical pin 91: PA3; bidirectional. */
  "PA3": "91",
  /** Physical pin 92: PD12; bidirectional. */
  "PD12": "92",
  /** Physical pin 93: PA2; bidirectional. */
  "PA2": "93",
  /** Physical pin 94: PC11; bidirectional. */
  "PC11": "94",
  /** Physical pin 95: GND; passive. */
  "GND_95": "95",
  /** Physical pin 96: VDDIO; passive. */
  "VDDIO_96": "96",
  /** Physical pin 97: PC14; bidirectional. */
  "PC14": "97",
  /** Physical pin 98: PD11; bidirectional. */
  "PD11": "98",
  /** Physical pin 99: PA1; bidirectional. */
  "PA1": "99",
  /** Physical pin 100: PC16; bidirectional. */
  "PC16": "100",
  /** Physical pin 101: PD10; bidirectional. */
  "PD10": "101",
  /** Physical pin 102: PA0; bidirectional. */
  "PA0": "102",
  /** Physical pin 103: PC17; bidirectional. */
  "PC17": "103",
  /** Physical pin 104: JTAGSEL; input. */
  "JTAGSEL": "104",
  /** Physical pin 105: PB4; bidirectional. */
  "PB4": "105",
  /** Physical pin 106: PD15; bidirectional. */
  "PD15": "106",
  /** Physical pin 107: VDDCORE; passive. */
  "VDDCORE_107": "107",
  /** Physical pin 108: PD29; bidirectional. */
  "PD29": "108",
  /** Physical pin 109: PB5; bidirectional. */
  "PB5": "109",
  /** Physical pin 110: PD9; bidirectional. */
  "PD9": "110",
  /** Physical pin 111: PC18; bidirectional. */
  "PC18": "111",
  /** Physical pin 112: PA28; bidirectional. */
  "PA28": "112",
  /** Physical pin 113: PD8; bidirectional. */
  "PD8": "113",
  /** Physical pin 114: PA6; bidirectional. */
  "PA6": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: PA30; bidirectional. */
  "PA30": "116",
  /** Physical pin 117: PC19; bidirectional. */
  "PC19": "117",
  /** Physical pin 118: PA31; bidirectional. */
  "PA31": "118",
  /** Physical pin 119: PD7; bidirectional. */
  "PD7": "119",
  /** Physical pin 120: PC20; bidirectional. */
  "PC20": "120",
  /** Physical pin 121: PD6; bidirectional. */
  "PD6": "121",
  /** Physical pin 122: PC21; bidirectional. */
  "PC21": "122",
  /** Physical pin 123: VDDPLL; power_in. */
  "VDDPLL": "123",
  /** Physical pin 124: PC22; bidirectional. */
  "PC22": "124",
  /** Physical pin 125: PD5; bidirectional. */
  "PD5": "125",
  /** Physical pin 126: PD4; bidirectional. */
  "PD4": "126",
  /** Physical pin 127: PC23; bidirectional. */
  "PC23": "127",
  /** Physical pin 128: PD3; bidirectional. */
  "PD3": "128",
  /** Physical pin 129: PA29; bidirectional. */
  "PA29": "129",
  /** Physical pin 130: PC24; bidirectional. */
  "PC24": "130",
  /** Physical pin 131: PD2; bidirectional. */
  "PD2": "131",
  /** Physical pin 132: PD1; bidirectional. */
  "PD1": "132",
  /** Physical pin 133: PC25; bidirectional. */
  "PC25": "133",
  /** Physical pin 134: VDDUTMII; power_in. */
  "VDDUTMII": "134",
  /** Physical pin 135: GND; passive. */
  "GND_135": "135",
  /** Physical pin 136: HSDM; bidirectional. */
  "HSDM": "136",
  /** Physical pin 137: HSDP; bidirectional. */
  "HSDP": "137",
  /** Physical pin 138: GND; passive. */
  "GND_138": "138",
  /** Physical pin 139: VDDUTMIC; power_in. */
  "VDDUTMIC": "139",
  /** Physical pin 140: VBG; input. */
  "VBG": "140",
  /** Physical pin 141: PB8; bidirectional. */
  "PB8": "141",
  /** Physical pin 142: PB9; bidirectional. */
  "PB9": "142",
  /** Physical pin 143: VDDPLLUSB; power_in. */
  "VDDPLLUSB": "143",
  /** Physical pin 144: PB13; bidirectional. */
  "PB13": "144",
}) {
  override schema = "MCU_Microchip_SAMV:ATSAMV71Q21B-A";
  override referencePrefix = "U";
}

/**
 * SAM V71 Microchip SMART ARM Cortex-M7-based MCU, 512K Flash, 256K SRAM, LQFP-144
 *
 * KiCad symbol: `MCU_Microchip_SAMV:ATSAMV71Q19B-A`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM-E70-S70-V70-V71-Family-Data-Sheet-DS60001527D.pdf
 * Keywords: 32-bit ARM Cortex-M7 MCU Microcontroller.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ATSAMV71Q19B_A extends Component.withPins({
  /** Physical pin 1: PD0; bidirectional. */
  "PD0": "1",
  /** Physical pin 2: PD31; bidirectional. */
  "PD31": "2",
  /** Physical pin 3: VDDOUT; power_in. */
  "VDDOUT": "3",
  /** Physical pin 4: PE0; bidirectional. */
  "PE0": "4",
  /** Physical pin 5: VDDIN; power_in. */
  "VDDIN": "5",
  /** Physical pin 6: PE1; bidirectional. */
  "PE1": "6",
  /** Physical pin 7: PE2; bidirectional. */
  "PE2": "7",
  /** Physical pin 8: VREFN; bidirectional. */
  "VREFN": "8",
  /** Physical pin 9: VREFP; input. */
  "VREFP": "9",
  /** Physical pin 10: PE3; bidirectional. */
  "PE3": "10",
  /** Physical pin 11: PC0; bidirectional. */
  "PC0": "11",
  /** Physical pin 12: PC27; bidirectional. */
  "PC27": "12",
  /** Physical pin 13: PC26; bidirectional. */
  "PC26": "13",
  /** Physical pin 14: PC31; bidirectional. */
  "PC31": "14",
  /** Physical pin 15: PC30; bidirectional. */
  "PC30": "15",
  /** Physical pin 16: PC29; bidirectional. */
  "PC29": "16",
  /** Physical pin 17: PC12; bidirectional. */
  "PC12": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PC13; bidirectional. */
  "PC13": "19",
  /** Physical pin 20: PB1; bidirectional. */
  "PB1": "20",
  /** Physical pin 21: PB0; bidirectional. */
  "PB0": "21",
  /** Physical pin 22: PA20; bidirectional. */
  "PA20": "22",
  /** Physical pin 23: PA19; bidirectional. */
  "PA19": "23",
  /** Physical pin 24: PA18; bidirectional. */
  "PA18": "24",
  /** Physical pin 25: PA17; bidirectional. */
  "PA17": "25",
  /** Physical pin 26: PB2; bidirectional. */
  "PB2": "26",
  /** Physical pin 27: PE4; bidirectional. */
  "PE4": "27",
  /** Physical pin 28: PE5; bidirectional. */
  "PE5": "28",
  /** Physical pin 29: VDDCORE; power_in. */
  "VDDCORE_29": "29",
  /** Physical pin 30: VDDIO; power_in. */
  "VDDIO_30": "30",
  /** Physical pin 31: PB3; bidirectional. */
  "PB3": "31",
  /** Physical pin 32: PA21; bidirectional. */
  "PA21": "32",
  /** Physical pin 33: VDDCORE; passive. */
  "VDDCORE_33": "33",
  /** Physical pin 34: PD30; bidirectional. */
  "PD30": "34",
  /** Physical pin 35: PA7; bidirectional. */
  "PA7": "35",
  /** Physical pin 36: PA8; bidirectional. */
  "PA8": "36",
  /** Physical pin 37: PA22; bidirectional. */
  "PA22": "37",
  /** Physical pin 38: PC1; bidirectional. */
  "PC1": "38",
  /** Physical pin 39: PC2; bidirectional. */
  "PC2": "39",
  /** Physical pin 40: PC3; bidirectional. */
  "PC3": "40",
  /** Physical pin 41: PC4; bidirectional. */
  "PC4": "41",
  /** Physical pin 42: PA13; bidirectional. */
  "PA13": "42",
  /** Physical pin 43: VDDIO; passive. */
  "VDDIO_43": "43",
  /** Physical pin 44: GND; power_in. */
  "GND_44": "44",
  /** Physical pin 45: PA16; bidirectional. */
  "PA16": "45",
  /** Physical pin 46: PA23; bidirectional. */
  "PA23": "46",
  /** Physical pin 47: PD27; bidirectional. */
  "PD27": "47",
  /** Physical pin 48: PC7; bidirectional. */
  "PC7": "48",
  /** Physical pin 49: PA15; bidirectional. */
  "PA15": "49",
  /** Physical pin 50: VDDCORE; passive. */
  "VDDCORE_50": "50",
  /** Physical pin 51: PA14; bidirectional. */
  "PA14": "51",
  /** Physical pin 52: PD25; bidirectional. */
  "PD25": "52",
  /** Physical pin 53: PD26; bidirectional. */
  "PD26": "53",
  /** Physical pin 54: PC6; bidirectional. */
  "PC6": "54",
  /** Physical pin 55: PD24; bidirectional. */
  "PD24": "55",
  /** Physical pin 56: PA24; bidirectional. */
  "PA24": "56",
  /** Physical pin 57: PD23; bidirectional. */
  "PD23": "57",
  /** Physical pin 58: PC5; bidirectional. */
  "PC5": "58",
  /** Physical pin 59: PA25; bidirectional. */
  "PA25": "59",
  /** Physical pin 60: PD22; bidirectional. */
  "PD22": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: PA26; bidirectional. */
  "PA26": "62",
  /** Physical pin 63: PD21; bidirectional. */
  "PD21": "63",
  /** Physical pin 64: PA11; bidirectional. */
  "PA11": "64",
  /** Physical pin 65: PD20; bidirectional. */
  "PD20": "65",
  /** Physical pin 66: PA10; bidirectional. */
  "PA10": "66",
  /** Physical pin 67: PD19; bidirectional. */
  "PD19": "67",
  /** Physical pin 68: PA12; bidirectional. */
  "PA12": "68",
  /** Physical pin 69: PD18; bidirectional. */
  "PD18": "69",
  /** Physical pin 70: PA27; bidirectional. */
  "PA27": "70",
  /** Physical pin 71: PD28; bidirectional. */
  "PD28": "71",
  /** Physical pin 72: VDDIO; passive. */
  "VDDIO_72": "72",
  /** Physical pin 73: PA5; bidirectional. */
  "PA5": "73",
  /** Physical pin 74: PD17; bidirectional. */
  "PD17": "74",
  /** Physical pin 75: PA9; bidirectional. */
  "PA9": "75",
  /** Physical pin 76: PC28; bidirectional. */
  "PC28": "76",
  /** Physical pin 77: PA4; bidirectional. */
  "PA4": "77",
  /** Physical pin 78: PD16; bidirectional. */
  "PD16": "78",
  /** Physical pin 79: PB6; bidirectional. */
  "PB6": "79",
  /** Physical pin 80: VDDIO; passive. */
  "VDDIO_80": "80",
  /** Physical pin 81: VDDCORE; passive. */
  "VDDCORE_81": "81",
  /** Physical pin 82: PC8; bidirectional. */
  "PC8": "82",
  /** Physical pin 83: NRST; bidirectional. */
  "NRST": "83",
  /** Physical pin 84: PD14; bidirectional. */
  "PD14": "84",
  /** Physical pin 85: TST; input. */
  "TST": "85",
  /** Physical pin 86: PC9; bidirectional. */
  "PC9": "86",
  /** Physical pin 87: PB12; bidirectional. */
  "PB12": "87",
  /** Physical pin 88: PD13; bidirectional. */
  "PD13": "88",
  /** Physical pin 89: PB7; bidirectional. */
  "PB7": "89",
  /** Physical pin 90: PC10; bidirectional. */
  "PC10": "90",
  /** Physical pin 91: PA3; bidirectional. */
  "PA3": "91",
  /** Physical pin 92: PD12; bidirectional. */
  "PD12": "92",
  /** Physical pin 93: PA2; bidirectional. */
  "PA2": "93",
  /** Physical pin 94: PC11; bidirectional. */
  "PC11": "94",
  /** Physical pin 95: GND; passive. */
  "GND_95": "95",
  /** Physical pin 96: VDDIO; passive. */
  "VDDIO_96": "96",
  /** Physical pin 97: PC14; bidirectional. */
  "PC14": "97",
  /** Physical pin 98: PD11; bidirectional. */
  "PD11": "98",
  /** Physical pin 99: PA1; bidirectional. */
  "PA1": "99",
  /** Physical pin 100: PC16; bidirectional. */
  "PC16": "100",
  /** Physical pin 101: PD10; bidirectional. */
  "PD10": "101",
  /** Physical pin 102: PA0; bidirectional. */
  "PA0": "102",
  /** Physical pin 103: PC17; bidirectional. */
  "PC17": "103",
  /** Physical pin 104: JTAGSEL; input. */
  "JTAGSEL": "104",
  /** Physical pin 105: PB4; bidirectional. */
  "PB4": "105",
  /** Physical pin 106: PD15; bidirectional. */
  "PD15": "106",
  /** Physical pin 107: VDDCORE; passive. */
  "VDDCORE_107": "107",
  /** Physical pin 108: PD29; bidirectional. */
  "PD29": "108",
  /** Physical pin 109: PB5; bidirectional. */
  "PB5": "109",
  /** Physical pin 110: PD9; bidirectional. */
  "PD9": "110",
  /** Physical pin 111: PC18; bidirectional. */
  "PC18": "111",
  /** Physical pin 112: PA28; bidirectional. */
  "PA28": "112",
  /** Physical pin 113: PD8; bidirectional. */
  "PD8": "113",
  /** Physical pin 114: PA6; bidirectional. */
  "PA6": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: PA30; bidirectional. */
  "PA30": "116",
  /** Physical pin 117: PC19; bidirectional. */
  "PC19": "117",
  /** Physical pin 118: PA31; bidirectional. */
  "PA31": "118",
  /** Physical pin 119: PD7; bidirectional. */
  "PD7": "119",
  /** Physical pin 120: PC20; bidirectional. */
  "PC20": "120",
  /** Physical pin 121: PD6; bidirectional. */
  "PD6": "121",
  /** Physical pin 122: PC21; bidirectional. */
  "PC21": "122",
  /** Physical pin 123: VDDPLL; power_in. */
  "VDDPLL": "123",
  /** Physical pin 124: PC22; bidirectional. */
  "PC22": "124",
  /** Physical pin 125: PD5; bidirectional. */
  "PD5": "125",
  /** Physical pin 126: PD4; bidirectional. */
  "PD4": "126",
  /** Physical pin 127: PC23; bidirectional. */
  "PC23": "127",
  /** Physical pin 128: PD3; bidirectional. */
  "PD3": "128",
  /** Physical pin 129: PA29; bidirectional. */
  "PA29": "129",
  /** Physical pin 130: PC24; bidirectional. */
  "PC24": "130",
  /** Physical pin 131: PD2; bidirectional. */
  "PD2": "131",
  /** Physical pin 132: PD1; bidirectional. */
  "PD1": "132",
  /** Physical pin 133: PC25; bidirectional. */
  "PC25": "133",
  /** Physical pin 134: VDDUTMII; power_in. */
  "VDDUTMII": "134",
  /** Physical pin 135: GND; passive. */
  "GND_135": "135",
  /** Physical pin 136: HSDM; bidirectional. */
  "HSDM": "136",
  /** Physical pin 137: HSDP; bidirectional. */
  "HSDP": "137",
  /** Physical pin 138: GND; passive. */
  "GND_138": "138",
  /** Physical pin 139: VDDUTMIC; power_in. */
  "VDDUTMIC": "139",
  /** Physical pin 140: VBG; input. */
  "VBG": "140",
  /** Physical pin 141: PB8; bidirectional. */
  "PB8": "141",
  /** Physical pin 142: PB9; bidirectional. */
  "PB9": "142",
  /** Physical pin 143: VDDPLLUSB; power_in. */
  "VDDPLLUSB": "143",
  /** Physical pin 144: PB13; bidirectional. */
  "PB13": "144",
}) {
  override schema = "MCU_Microchip_SAMV:ATSAMV71Q19B-A";
  override referencePrefix = "U";
}

/**
 * SAM V71 Microchip SMART ARM Cortex-M7-based MCU, 1024K Flash, 384K SRAM, LQFP-144
 *
 * KiCad symbol: `MCU_Microchip_SAMV:ATSAMV71Q20B-A`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM-E70-S70-V70-V71-Family-Data-Sheet-DS60001527D.pdf
 * Keywords: 32-bit ARM Cortex-M7 MCU Microcontroller.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ATSAMV71Q20B_A extends Component.withPins({
  /** Physical pin 1: PD0; bidirectional. */
  "PD0": "1",
  /** Physical pin 2: PD31; bidirectional. */
  "PD31": "2",
  /** Physical pin 3: VDDOUT; power_in. */
  "VDDOUT": "3",
  /** Physical pin 4: PE0; bidirectional. */
  "PE0": "4",
  /** Physical pin 5: VDDIN; power_in. */
  "VDDIN": "5",
  /** Physical pin 6: PE1; bidirectional. */
  "PE1": "6",
  /** Physical pin 7: PE2; bidirectional. */
  "PE2": "7",
  /** Physical pin 8: VREFN; bidirectional. */
  "VREFN": "8",
  /** Physical pin 9: VREFP; input. */
  "VREFP": "9",
  /** Physical pin 10: PE3; bidirectional. */
  "PE3": "10",
  /** Physical pin 11: PC0; bidirectional. */
  "PC0": "11",
  /** Physical pin 12: PC27; bidirectional. */
  "PC27": "12",
  /** Physical pin 13: PC26; bidirectional. */
  "PC26": "13",
  /** Physical pin 14: PC31; bidirectional. */
  "PC31": "14",
  /** Physical pin 15: PC30; bidirectional. */
  "PC30": "15",
  /** Physical pin 16: PC29; bidirectional. */
  "PC29": "16",
  /** Physical pin 17: PC12; bidirectional. */
  "PC12": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PC13; bidirectional. */
  "PC13": "19",
  /** Physical pin 20: PB1; bidirectional. */
  "PB1": "20",
  /** Physical pin 21: PB0; bidirectional. */
  "PB0": "21",
  /** Physical pin 22: PA20; bidirectional. */
  "PA20": "22",
  /** Physical pin 23: PA19; bidirectional. */
  "PA19": "23",
  /** Physical pin 24: PA18; bidirectional. */
  "PA18": "24",
  /** Physical pin 25: PA17; bidirectional. */
  "PA17": "25",
  /** Physical pin 26: PB2; bidirectional. */
  "PB2": "26",
  /** Physical pin 27: PE4; bidirectional. */
  "PE4": "27",
  /** Physical pin 28: PE5; bidirectional. */
  "PE5": "28",
  /** Physical pin 29: VDDCORE; power_in. */
  "VDDCORE_29": "29",
  /** Physical pin 30: VDDIO; power_in. */
  "VDDIO_30": "30",
  /** Physical pin 31: PB3; bidirectional. */
  "PB3": "31",
  /** Physical pin 32: PA21; bidirectional. */
  "PA21": "32",
  /** Physical pin 33: VDDCORE; passive. */
  "VDDCORE_33": "33",
  /** Physical pin 34: PD30; bidirectional. */
  "PD30": "34",
  /** Physical pin 35: PA7; bidirectional. */
  "PA7": "35",
  /** Physical pin 36: PA8; bidirectional. */
  "PA8": "36",
  /** Physical pin 37: PA22; bidirectional. */
  "PA22": "37",
  /** Physical pin 38: PC1; bidirectional. */
  "PC1": "38",
  /** Physical pin 39: PC2; bidirectional. */
  "PC2": "39",
  /** Physical pin 40: PC3; bidirectional. */
  "PC3": "40",
  /** Physical pin 41: PC4; bidirectional. */
  "PC4": "41",
  /** Physical pin 42: PA13; bidirectional. */
  "PA13": "42",
  /** Physical pin 43: VDDIO; passive. */
  "VDDIO_43": "43",
  /** Physical pin 44: GND; power_in. */
  "GND_44": "44",
  /** Physical pin 45: PA16; bidirectional. */
  "PA16": "45",
  /** Physical pin 46: PA23; bidirectional. */
  "PA23": "46",
  /** Physical pin 47: PD27; bidirectional. */
  "PD27": "47",
  /** Physical pin 48: PC7; bidirectional. */
  "PC7": "48",
  /** Physical pin 49: PA15; bidirectional. */
  "PA15": "49",
  /** Physical pin 50: VDDCORE; passive. */
  "VDDCORE_50": "50",
  /** Physical pin 51: PA14; bidirectional. */
  "PA14": "51",
  /** Physical pin 52: PD25; bidirectional. */
  "PD25": "52",
  /** Physical pin 53: PD26; bidirectional. */
  "PD26": "53",
  /** Physical pin 54: PC6; bidirectional. */
  "PC6": "54",
  /** Physical pin 55: PD24; bidirectional. */
  "PD24": "55",
  /** Physical pin 56: PA24; bidirectional. */
  "PA24": "56",
  /** Physical pin 57: PD23; bidirectional. */
  "PD23": "57",
  /** Physical pin 58: PC5; bidirectional. */
  "PC5": "58",
  /** Physical pin 59: PA25; bidirectional. */
  "PA25": "59",
  /** Physical pin 60: PD22; bidirectional. */
  "PD22": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: PA26; bidirectional. */
  "PA26": "62",
  /** Physical pin 63: PD21; bidirectional. */
  "PD21": "63",
  /** Physical pin 64: PA11; bidirectional. */
  "PA11": "64",
  /** Physical pin 65: PD20; bidirectional. */
  "PD20": "65",
  /** Physical pin 66: PA10; bidirectional. */
  "PA10": "66",
  /** Physical pin 67: PD19; bidirectional. */
  "PD19": "67",
  /** Physical pin 68: PA12; bidirectional. */
  "PA12": "68",
  /** Physical pin 69: PD18; bidirectional. */
  "PD18": "69",
  /** Physical pin 70: PA27; bidirectional. */
  "PA27": "70",
  /** Physical pin 71: PD28; bidirectional. */
  "PD28": "71",
  /** Physical pin 72: VDDIO; passive. */
  "VDDIO_72": "72",
  /** Physical pin 73: PA5; bidirectional. */
  "PA5": "73",
  /** Physical pin 74: PD17; bidirectional. */
  "PD17": "74",
  /** Physical pin 75: PA9; bidirectional. */
  "PA9": "75",
  /** Physical pin 76: PC28; bidirectional. */
  "PC28": "76",
  /** Physical pin 77: PA4; bidirectional. */
  "PA4": "77",
  /** Physical pin 78: PD16; bidirectional. */
  "PD16": "78",
  /** Physical pin 79: PB6; bidirectional. */
  "PB6": "79",
  /** Physical pin 80: VDDIO; passive. */
  "VDDIO_80": "80",
  /** Physical pin 81: VDDCORE; passive. */
  "VDDCORE_81": "81",
  /** Physical pin 82: PC8; bidirectional. */
  "PC8": "82",
  /** Physical pin 83: NRST; bidirectional. */
  "NRST": "83",
  /** Physical pin 84: PD14; bidirectional. */
  "PD14": "84",
  /** Physical pin 85: TST; input. */
  "TST": "85",
  /** Physical pin 86: PC9; bidirectional. */
  "PC9": "86",
  /** Physical pin 87: PB12; bidirectional. */
  "PB12": "87",
  /** Physical pin 88: PD13; bidirectional. */
  "PD13": "88",
  /** Physical pin 89: PB7; bidirectional. */
  "PB7": "89",
  /** Physical pin 90: PC10; bidirectional. */
  "PC10": "90",
  /** Physical pin 91: PA3; bidirectional. */
  "PA3": "91",
  /** Physical pin 92: PD12; bidirectional. */
  "PD12": "92",
  /** Physical pin 93: PA2; bidirectional. */
  "PA2": "93",
  /** Physical pin 94: PC11; bidirectional. */
  "PC11": "94",
  /** Physical pin 95: GND; passive. */
  "GND_95": "95",
  /** Physical pin 96: VDDIO; passive. */
  "VDDIO_96": "96",
  /** Physical pin 97: PC14; bidirectional. */
  "PC14": "97",
  /** Physical pin 98: PD11; bidirectional. */
  "PD11": "98",
  /** Physical pin 99: PA1; bidirectional. */
  "PA1": "99",
  /** Physical pin 100: PC16; bidirectional. */
  "PC16": "100",
  /** Physical pin 101: PD10; bidirectional. */
  "PD10": "101",
  /** Physical pin 102: PA0; bidirectional. */
  "PA0": "102",
  /** Physical pin 103: PC17; bidirectional. */
  "PC17": "103",
  /** Physical pin 104: JTAGSEL; input. */
  "JTAGSEL": "104",
  /** Physical pin 105: PB4; bidirectional. */
  "PB4": "105",
  /** Physical pin 106: PD15; bidirectional. */
  "PD15": "106",
  /** Physical pin 107: VDDCORE; passive. */
  "VDDCORE_107": "107",
  /** Physical pin 108: PD29; bidirectional. */
  "PD29": "108",
  /** Physical pin 109: PB5; bidirectional. */
  "PB5": "109",
  /** Physical pin 110: PD9; bidirectional. */
  "PD9": "110",
  /** Physical pin 111: PC18; bidirectional. */
  "PC18": "111",
  /** Physical pin 112: PA28; bidirectional. */
  "PA28": "112",
  /** Physical pin 113: PD8; bidirectional. */
  "PD8": "113",
  /** Physical pin 114: PA6; bidirectional. */
  "PA6": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: PA30; bidirectional. */
  "PA30": "116",
  /** Physical pin 117: PC19; bidirectional. */
  "PC19": "117",
  /** Physical pin 118: PA31; bidirectional. */
  "PA31": "118",
  /** Physical pin 119: PD7; bidirectional. */
  "PD7": "119",
  /** Physical pin 120: PC20; bidirectional. */
  "PC20": "120",
  /** Physical pin 121: PD6; bidirectional. */
  "PD6": "121",
  /** Physical pin 122: PC21; bidirectional. */
  "PC21": "122",
  /** Physical pin 123: VDDPLL; power_in. */
  "VDDPLL": "123",
  /** Physical pin 124: PC22; bidirectional. */
  "PC22": "124",
  /** Physical pin 125: PD5; bidirectional. */
  "PD5": "125",
  /** Physical pin 126: PD4; bidirectional. */
  "PD4": "126",
  /** Physical pin 127: PC23; bidirectional. */
  "PC23": "127",
  /** Physical pin 128: PD3; bidirectional. */
  "PD3": "128",
  /** Physical pin 129: PA29; bidirectional. */
  "PA29": "129",
  /** Physical pin 130: PC24; bidirectional. */
  "PC24": "130",
  /** Physical pin 131: PD2; bidirectional. */
  "PD2": "131",
  /** Physical pin 132: PD1; bidirectional. */
  "PD1": "132",
  /** Physical pin 133: PC25; bidirectional. */
  "PC25": "133",
  /** Physical pin 134: VDDUTMII; power_in. */
  "VDDUTMII": "134",
  /** Physical pin 135: GND; passive. */
  "GND_135": "135",
  /** Physical pin 136: HSDM; bidirectional. */
  "HSDM": "136",
  /** Physical pin 137: HSDP; bidirectional. */
  "HSDP": "137",
  /** Physical pin 138: GND; passive. */
  "GND_138": "138",
  /** Physical pin 139: VDDUTMIC; power_in. */
  "VDDUTMIC": "139",
  /** Physical pin 140: VBG; input. */
  "VBG": "140",
  /** Physical pin 141: PB8; bidirectional. */
  "PB8": "141",
  /** Physical pin 142: PB9; bidirectional. */
  "PB9": "142",
  /** Physical pin 143: VDDPLLUSB; power_in. */
  "VDDPLLUSB": "143",
  /** Physical pin 144: PB13; bidirectional. */
  "PB13": "144",
}) {
  override schema = "MCU_Microchip_SAMV:ATSAMV71Q20B-A";
  override referencePrefix = "U";
}

