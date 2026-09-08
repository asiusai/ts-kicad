// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Quectel NB-IoT Global, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BC66`. Reference prefix: `U`.
 * Footprint filters: Quectel*BC66*.
 * @see https://www.quectel.com/UploadImage/Downlad/Quectel_BC66_Hardware_Design_V1.1.pdf
 * Keywords: NB-IoT Data SMS.
 * Default footprint: RF_GSM:Quectel_BC66.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BC66 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: RESERVED; no_connect. */
  "RESERVED_2": "2",
  /** Physical pin 3: SPI_MISO; input. */
  "SPI_MISO": "3",
  /** Physical pin 4: SPI_MOSI; output. */
  "SPI_MOSI": "4",
  /** Physical pin 5: SPI_SCLK; output. */
  "SPI_SCLK": "5",
  /** Physical pin 6: SPI_CS; output. */
  "SPI_CS": "6",
  /** Physical pin 7: PWRKEY; input. */
  "PWRKEY": "7",
  /** Physical pin 8: RESERVED; no_connect. */
  "RESERVED_8": "8",
  /** Physical pin 9: ADC0; input. */
  "ADC0": "9",
  /** Physical pin 10: SIM_GND; power_out. */
  "SIM_GND": "10",
  /** Physical pin 11: SIM_DATA; bidirectional. */
  "SIM_DATA": "11",
  /** Physical pin 12: SIM_RST; output. */
  "SIM_RST": "12",
  /** Physical pin 13: SIM_CLK; output. */
  "SIM_CLK": "13",
  /** Physical pin 14: SIM_VDD; power_out. */
  "SIM_VDD": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: NETLIGHT; output. */
  "NETLIGHT": "16",
  /** Physical pin 17: TXD; output. */
  "TXD": "17",
  /** Physical pin 18: RXD; input. */
  "RXD": "18",
  /** Physical pin 19: PSM_EINT; input. */
  "PSM_EINT": "19",
  /** Physical pin 20: RI; output. */
  "RI": "20",
  /** Physical pin 21: RESERVED; no_connect. */
  "RESERVED_21": "21",
  /** Physical pin 22: RESERVED; no_connect. */
  "RESERVED_22": "22",
  /** Physical pin 23: RESERVED; no_connect. */
  "RESERVED_23": "23",
  /** Physical pin 24: VDD_EXT; power_out. */
  "VDD_EXT": "24",
  /** Physical pin 25: RESERVED; no_connect. */
  "RESERVED_25": "25",
  /** Physical pin 26: RESERVED; no_connect. */
  "RESERVED_26": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: RXD_AUX; input. */
  "RXD_AUX": "28",
  /** Physical pin 29: TXD_AUX; output. */
  "TXD_AUX": "29",
  /** Physical pin 30: RESERVED; no_connect. */
  "RESERVED_30": "30",
  /** Physical pin 31: RESERVED; no_connect. */
  "RESERVED_31": "31",
  /** Physical pin 32: RESERVED; no_connect. */
  "RESERVED_32": "32",
  /** Physical pin 33: RESERVED; no_connect. */
  "RESERVED_33": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 35: RF_ANT; passive. */
  "RF_ANT": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: RXD_DBG; input. */
  "RXD_DBG": "38",
  /** Physical pin 39: TXD_DBG; output. */
  "TXD_DBG": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: VBAT_BB; power_in. */
  "VBAT_BB": "42",
  /** Physical pin 43: VBAT_RF; power_in. */
  "VBAT_RF": "43",
  /** Physical pin 44: RESERVED; no_connect. */
  "RESERVED_44": "44",
  /** Physical pin 45: RESERVED; no_connect. */
  "RESERVED_45": "45",
  /** Physical pin 46: RESERVED; no_connect. */
  "RESERVED_46": "46",
  /** Physical pin 47: RESERVED; no_connect. */
  "RESERVED_47": "47",
  /** Physical pin 48: RESERVED; no_connect. */
  "RESERVED_48": "48",
  /** Physical pin 49: RESERVED; no_connect. */
  "RESERVED_49": "49",
  /** Physical pin 50: RESERVED; no_connect. */
  "RESERVED_50": "50",
  /** Physical pin 51: RESERVED; no_connect. */
  "RESERVED_51": "51",
  /** Physical pin 52: RESERVED; no_connect. */
  "RESERVED_52": "52",
  /** Physical pin 53: RESERVED; no_connect. */
  "RESERVED_53": "53",
  /** Physical pin 54: RESERVED; no_connect. */
  "RESERVED_54": "54",
  /** Physical pin 55: RESERVED; no_connect. */
  "RESERVED_55": "55",
  /** Physical pin 56: RESERVED; no_connect. */
  "RESERVED_56": "56",
  /** Physical pin 57: RESERVED; no_connect. */
  "RESERVED_57": "57",
  /** Physical pin 58: RESERVED; no_connect. */
  "RESERVED_58": "58",
}) {
  override schema = "RF_GSM:BC66";
  override referencePrefix = "U";
}

/**
 * NB-IoT, GSM Quad-Band Communication Module, GPRS, Audio Engine, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BC95`. Reference prefix: `U`.
 * Footprint filters: Quectel?BC95*.
 * @see https://www.quectel.com/UploadImage/Downlad/Quectel_BC95_Hardware_Design_V1.3.pdf
 * Keywords: NB-IoT GSM GPRS Quad-Band SMS.
 * Default footprint: RF_GSM:Quectel_BC95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BC95 extends Component.withPins({
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 15: RESET; input. */
  "RESET": "15",
  /** Physical pin 18: NETLIGHT; output. */
  "NETLIGHT": "18",
  /** Physical pin 19: DBG_RXD; input. */
  "DBG_RXD": "19",
  /** Physical pin 20: DBG_TXD; output. */
  "DBG_TXD": "20",
  /** Physical pin 21: ADC; input. */
  "ADC": "21",
  /** Physical pin 26: VDD_EXT; power_out. */
  "VDD_EXT": "26",
  /** Physical pin 29: RXD; input. */
  "RXD": "29",
  /** Physical pin 30: TXD; output. */
  "TXD": "30",
  /** Physical pin 34: RI; output. */
  "RI": "34",
  /** Physical pin 38: USIM_VDD; power_out. */
  "USIM_VDD": "38",
  /** Physical pin 39: USIM_RST; output. */
  "USIM_RST": "39",
  /** Physical pin 40: USIM_DATA; bidirectional. */
  "USIM_DATA": "40",
  /** Physical pin 41: USIM_CLK; output. */
  "USIM_CLK": "41",
  /** Physical pin 42: USIM_GND; power_in. */
  "USIM_GND": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 45: VBAT; power_in. */
  "VBAT_45": "45",
  /** Physical pin 46: VBAT; passive. */
  "VBAT_46": "46",
  /** Physical pin 47: GND; passive. */
  "GND_47": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: GND; passive. */
  "GND_52": "52",
  /** Physical pin 53: RF_ANT; passive. */
  "RF_ANT": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
  /** Physical pin 66: GND; passive. */
  "GND_66": "66",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GND; passive. */
  "GND_83": "83",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: GND; passive. */
  "GND_93": "93",
  /** Physical pin 94: GND; passive. */
  "GND_94": "94",
}) {
  override schema = "RF_GSM:BC95";
  override referencePrefix = "U";
}

/**
 * NB-IoT, Cat M1 Communication Module, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BG95-M1`. Reference prefix: `U`.
 * Footprint filters: Quectel?BG95*.
 * @see https://images.quectel.com/python/sites/2/2023/05/Quectel_BG95_Series_QuecOpen_Hardware_Design_V1.3.pdf
 * Keywords: NB-IoT Cat M1 GNSS.
 * Default footprint: RF_GSM:Quectel_BG95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BG95_M1 extends Component.withPins({
  /** Physical pin 1: PSM_IND; output. */
  "PSM_IND": "1",
  /** Physical pin 2: ADC1; input. */
  "ADC1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GPIO1; bidirectional. */
  "GPIO1": "4",
  /** Physical pin 5: GPIO2; bidirectional. */
  "GPIO2": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: VBUS; power_in. */
  "VBUS": "8",
  /** Physical pin 9: USB_DP; bidirectional. */
  "USB_DP": "9",
  /** Physical pin 10: USB_DM; bidirectional. */
  "USB_DM": "10",
  /** Physical pin 11: RESERVED; no_connect. */
  "RESERVED_11": "11",
  /** Physical pin 12: RESERVED; no_connect. */
  "RESERVED_12": "12",
  /** Physical pin 13: RESERVED; no_connect. */
  "RESERVED_13": "13",
  /** Physical pin 14: RESERVED; no_connect. */
  "RESERVED_14": "14",
  /** Physical pin 15: PWRKEY; bidirectional. */
  "PWRKEY": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: GPIO5; bidirectional. */
  "GPIO5": "18",
  /** Physical pin 19: GPIO6; bidirectional. */
  "GPIO6": "19",
  /** Physical pin 20: STATUS; output. */
  "STATUS": "20",
  /** Physical pin 21: NET_STATUS; output. */
  "NET_STATUS": "21",
  /** Physical pin 22: GPIO7; bidirectional. */
  "GPIO7": "22",
  /** Physical pin 23: GPIO8; bidirectional. */
  "GPIO8": "23",
  /** Physical pin 24: ADC0; input. */
  "ADC0": "24",
  /** Physical pin 25: GPIO9; bidirectional. */
  "GPIO9": "25",
  /** Physical pin 26: GPIO10; bidirectional. */
  "GPIO10": "26",
  /** Physical pin 27: GPIO11; bidirectional. */
  "GPIO11": "27",
  /** Physical pin 28: GPIO12; bidirectional. */
  "GPIO12": "28",
  /** Physical pin 29: VDD_EXT; power_out. */
  "VDD_EXT": "29",
  /** Physical pin 30: MAIN_DTR; input. */
  "MAIN_DTR": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: VBAT_BB; power_in. */
  "VBAT_BB_32": "32",
  /** Physical pin 33: VBAT_BB; passive. */
  "VBAT_BB_33": "33",
  /** Physical pin 34: MAIN_RXD; input. */
  "MAIN_RXD": "34",
  /** Physical pin 35: MAIN_TXD; output. */
  "MAIN_TXD": "35",
  /** Physical pin 36: MAIN_CTS; output. */
  "MAIN_CTS": "36",
  /** Physical pin 37: MAIN_RTS; input. */
  "MAIN_RTS": "37",
  /** Physical pin 38: MAIN_DCD; output. */
  "MAIN_DCD": "38",
  /** Physical pin 39: MAIN_RI; output. */
  "MAIN_RI": "39",
  /** Physical pin 40: GPIO13; bidirectional. */
  "GPIO13": "40",
  /** Physical pin 41: GPIO14; bidirectional. */
  "GPIO14": "41",
  /** Physical pin 42: USIM_DET; input. */
  "USIM_DET": "42",
  /** Physical pin 43: USIM_VDD; power_out. */
  "USIM_VDD": "43",
  /** Physical pin 44: USIM_RST; output. */
  "USIM_RST": "44",
  /** Physical pin 45: USIM_DATA; bidirectional. */
  "USIM_DATA": "45",
  /** Physical pin 46: USIM_CLK; output. */
  "USIM_CLK": "46",
  /** Physical pin 47: USIM_GND; power_in. */
  "USIM_GND": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ANT_GNSS; passive. */
  "ANT_GNSS": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: RESERVED; no_connect. */
  "RESERVED_51": "51",
  /** Physical pin 52: VBAT_RF; power_in. */
  "VBAT_RF_52": "52",
  /** Physical pin 53: VBAT_RF; passive. */
  "VBAT_RF_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT_WIFI; no_connect. */
  "ANT_WIFI": "56",
  /** Physical pin 57: RESERVED; no_connect. */
  "RESERVED_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: ANT_MAIN; passive. */
  "ANT_MAIN": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: RESERVED; no_connect. */
  "RESERVED_63": "63",
  /** Physical pin 64: GPIO15; bidirectional. */
  "GPIO15": "64",
  /** Physical pin 65: GPIO16; bidirectional. */
  "GPIO16": "65",
  /** Physical pin 66: GPIO17; bidirectional. */
  "GPIO17": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: USB_BOOT; input. */
  "USB_BOOT": "75",
  /** Physical pin 76: RESERVED; no_connect. */
  "RESERVED_76": "76",
  /** Physical pin 77: RESERVED; no_connect. */
  "RESERVED_77": "77",
  /** Physical pin 78: RESERVED; no_connect. */
  "RESERVED_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GRFC1; output. */
  "GRFC1": "83",
  /** Physical pin 84: GRFC2; output. */
  "GRFC2": "84",
  /** Physical pin 85: GPIO18; bidirectional. */
  "GPIO18": "85",
  /** Physical pin 86: GPIO19; bidirectional. */
  "GPIO19": "86",
  /** Physical pin 87: GPIO20; bidirectional. */
  "GPIO20": "87",
  /** Physical pin 88: GPIO21; bidirectional. */
  "GPIO21": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: RESERVED; no_connect. */
  "RESERVED_92": "92",
  /** Physical pin 93: RESERVED; no_connect. */
  "RESERVED_93": "93",
  /** Physical pin 94: RESERVED; no_connect. */
  "RESERVED_94": "94",
  /** Physical pin 95: RESERVED; no_connect. */
  "RESERVED_95": "95",
  /** Physical pin 96: PON_TRIG; input. */
  "PON_TRIG": "96",
  /** Physical pin 97: RESERVED; no_connect. */
  "RESERVED_97": "97",
  /** Physical pin 98: RESERVED; no_connect. */
  "RESERVED_98": "98",
  /** Physical pin 99: RESERVED; no_connect. */
  "RESERVED_99": "99",
  /** Physical pin 100: GND; passive. */
  "GND_100": "100",
  /** Physical pin 101: GND; passive. */
  "GND_101": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
}) {
  override schema = "RF_GSM:BG95-M1";
  override referencePrefix = "U";
}

/**
 * NB-IoT, Cat M1 Cat NB2 Communication Module, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BG95-M2`. Reference prefix: `U`.
 * Footprint filters: Quectel?BG95*.
 * @see https://images.quectel.com/python/sites/2/2023/05/Quectel_BG95_Series_QuecOpen_Hardware_Design_V1.3.pdf
 * Keywords: NB-IoT Cat M1 NB2 GNSS.
 * Default footprint: RF_GSM:Quectel_BG95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BG95_M2 extends Component.withPins({
  /** Physical pin 1: PSM_IND; output. */
  "PSM_IND": "1",
  /** Physical pin 2: ADC1; input. */
  "ADC1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GPIO1; bidirectional. */
  "GPIO1": "4",
  /** Physical pin 5: GPIO2; bidirectional. */
  "GPIO2": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: VBUS; power_in. */
  "VBUS": "8",
  /** Physical pin 9: USB_DP; bidirectional. */
  "USB_DP": "9",
  /** Physical pin 10: USB_DM; bidirectional. */
  "USB_DM": "10",
  /** Physical pin 11: RESERVED; no_connect. */
  "RESERVED_11": "11",
  /** Physical pin 12: RESERVED; no_connect. */
  "RESERVED_12": "12",
  /** Physical pin 13: RESERVED; no_connect. */
  "RESERVED_13": "13",
  /** Physical pin 14: RESERVED; no_connect. */
  "RESERVED_14": "14",
  /** Physical pin 15: PWRKEY; bidirectional. */
  "PWRKEY": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: GPIO5; bidirectional. */
  "GPIO5": "18",
  /** Physical pin 19: GPIO6; bidirectional. */
  "GPIO6": "19",
  /** Physical pin 20: STATUS; output. */
  "STATUS": "20",
  /** Physical pin 21: NET_STATUS; output. */
  "NET_STATUS": "21",
  /** Physical pin 22: GPIO7; bidirectional. */
  "GPIO7": "22",
  /** Physical pin 23: GPIO8; bidirectional. */
  "GPIO8": "23",
  /** Physical pin 24: ADC0; input. */
  "ADC0": "24",
  /** Physical pin 25: GPIO9; bidirectional. */
  "GPIO9": "25",
  /** Physical pin 26: GPIO10; bidirectional. */
  "GPIO10": "26",
  /** Physical pin 27: GPIO11; bidirectional. */
  "GPIO11": "27",
  /** Physical pin 28: GPIO12; bidirectional. */
  "GPIO12": "28",
  /** Physical pin 29: VDD_EXT; power_out. */
  "VDD_EXT": "29",
  /** Physical pin 30: MAIN_DTR; input. */
  "MAIN_DTR": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: VBAT_BB; power_in. */
  "VBAT_BB_32": "32",
  /** Physical pin 33: VBAT_BB; passive. */
  "VBAT_BB_33": "33",
  /** Physical pin 34: MAIN_RXD; input. */
  "MAIN_RXD": "34",
  /** Physical pin 35: MAIN_TXD; output. */
  "MAIN_TXD": "35",
  /** Physical pin 36: MAIN_CTS; output. */
  "MAIN_CTS": "36",
  /** Physical pin 37: MAIN_RTS; input. */
  "MAIN_RTS": "37",
  /** Physical pin 38: MAIN_DCD; output. */
  "MAIN_DCD": "38",
  /** Physical pin 39: MAIN_RI; output. */
  "MAIN_RI": "39",
  /** Physical pin 40: GPIO13; bidirectional. */
  "GPIO13": "40",
  /** Physical pin 41: GPIO14; bidirectional. */
  "GPIO14": "41",
  /** Physical pin 42: USIM_DET; input. */
  "USIM_DET": "42",
  /** Physical pin 43: USIM_VDD; power_out. */
  "USIM_VDD": "43",
  /** Physical pin 44: USIM_RST; output. */
  "USIM_RST": "44",
  /** Physical pin 45: USIM_DATA; bidirectional. */
  "USIM_DATA": "45",
  /** Physical pin 46: USIM_CLK; output. */
  "USIM_CLK": "46",
  /** Physical pin 47: USIM_GND; power_in. */
  "USIM_GND": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ANT_GNSS; passive. */
  "ANT_GNSS": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: RESERVED; no_connect. */
  "RESERVED_51": "51",
  /** Physical pin 52: VBAT_RF; power_in. */
  "VBAT_RF_52": "52",
  /** Physical pin 53: VBAT_RF; passive. */
  "VBAT_RF_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT_WIFI; no_connect. */
  "ANT_WIFI": "56",
  /** Physical pin 57: RESERVED; no_connect. */
  "RESERVED_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: ANT_MAIN; passive. */
  "ANT_MAIN": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: RESERVED; no_connect. */
  "RESERVED_63": "63",
  /** Physical pin 64: GPIO15; bidirectional. */
  "GPIO15": "64",
  /** Physical pin 65: GPIO16; bidirectional. */
  "GPIO16": "65",
  /** Physical pin 66: GPIO17; bidirectional. */
  "GPIO17": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: USB_BOOT; input. */
  "USB_BOOT": "75",
  /** Physical pin 76: RESERVED; no_connect. */
  "RESERVED_76": "76",
  /** Physical pin 77: RESERVED; no_connect. */
  "RESERVED_77": "77",
  /** Physical pin 78: RESERVED; no_connect. */
  "RESERVED_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GRFC1; output. */
  "GRFC1": "83",
  /** Physical pin 84: GRFC2; output. */
  "GRFC2": "84",
  /** Physical pin 85: GPIO18; bidirectional. */
  "GPIO18": "85",
  /** Physical pin 86: GPIO19; bidirectional. */
  "GPIO19": "86",
  /** Physical pin 87: GPIO20; bidirectional. */
  "GPIO20": "87",
  /** Physical pin 88: GPIO21; bidirectional. */
  "GPIO21": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: RESERVED; no_connect. */
  "RESERVED_92": "92",
  /** Physical pin 93: RESERVED; no_connect. */
  "RESERVED_93": "93",
  /** Physical pin 94: RESERVED; no_connect. */
  "RESERVED_94": "94",
  /** Physical pin 95: RESERVED; no_connect. */
  "RESERVED_95": "95",
  /** Physical pin 96: PON_TRIG; input. */
  "PON_TRIG": "96",
  /** Physical pin 97: RESERVED; no_connect. */
  "RESERVED_97": "97",
  /** Physical pin 98: RESERVED; no_connect. */
  "RESERVED_98": "98",
  /** Physical pin 99: RESERVED; no_connect. */
  "RESERVED_99": "99",
  /** Physical pin 100: GND; passive. */
  "GND_100": "100",
  /** Physical pin 101: GND; passive. */
  "GND_101": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
}) {
  override schema = "RF_GSM:BG95-M2";
  override referencePrefix = "U";
}

/**
 * NB-IoT, Cat M1 Cat NB2 EGPRS Communication Module, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BG95-M3`. Reference prefix: `U`.
 * Footprint filters: Quectel?BG95*.
 * @see https://images.quectel.com/python/sites/2/2023/05/Quectel_BG95_Series_QuecOpen_Hardware_Design_V1.3.pdf
 * Keywords: NB-IoT Cat M1 NB2 EGPRS GNSS.
 * Default footprint: RF_GSM:Quectel_BG95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BG95_M3 extends Component.withPins({
  /** Physical pin 1: PSM_IND; output. */
  "PSM_IND": "1",
  /** Physical pin 2: ADC1; input. */
  "ADC1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GPIO1; bidirectional. */
  "GPIO1": "4",
  /** Physical pin 5: GPIO2; bidirectional. */
  "GPIO2": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: VBUS; power_in. */
  "VBUS": "8",
  /** Physical pin 9: USB_DP; bidirectional. */
  "USB_DP": "9",
  /** Physical pin 10: USB_DM; bidirectional. */
  "USB_DM": "10",
  /** Physical pin 11: RESERVED; no_connect. */
  "RESERVED_11": "11",
  /** Physical pin 12: RESERVED; no_connect. */
  "RESERVED_12": "12",
  /** Physical pin 13: RESERVED; no_connect. */
  "RESERVED_13": "13",
  /** Physical pin 14: RESERVED; no_connect. */
  "RESERVED_14": "14",
  /** Physical pin 15: PWRKEY; bidirectional. */
  "PWRKEY": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: GPIO5; bidirectional. */
  "GPIO5": "18",
  /** Physical pin 19: GPIO6; bidirectional. */
  "GPIO6": "19",
  /** Physical pin 20: STATUS; output. */
  "STATUS": "20",
  /** Physical pin 21: NET_STATUS; output. */
  "NET_STATUS": "21",
  /** Physical pin 22: GPIO7; bidirectional. */
  "GPIO7": "22",
  /** Physical pin 23: GPIO8; bidirectional. */
  "GPIO8": "23",
  /** Physical pin 24: ADC0; input. */
  "ADC0": "24",
  /** Physical pin 25: GPIO9; bidirectional. */
  "GPIO9": "25",
  /** Physical pin 26: GPIO10; bidirectional. */
  "GPIO10": "26",
  /** Physical pin 27: GPIO11; bidirectional. */
  "GPIO11": "27",
  /** Physical pin 28: GPIO12; bidirectional. */
  "GPIO12": "28",
  /** Physical pin 29: VDD_EXT; power_out. */
  "VDD_EXT": "29",
  /** Physical pin 30: MAIN_DTR; input. */
  "MAIN_DTR": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: VBAT_BB; power_in. */
  "VBAT_BB_32": "32",
  /** Physical pin 33: VBAT_BB; passive. */
  "VBAT_BB_33": "33",
  /** Physical pin 34: MAIN_RXD; input. */
  "MAIN_RXD": "34",
  /** Physical pin 35: MAIN_TXD; output. */
  "MAIN_TXD": "35",
  /** Physical pin 36: MAIN_CTS; output. */
  "MAIN_CTS": "36",
  /** Physical pin 37: MAIN_RTS; input. */
  "MAIN_RTS": "37",
  /** Physical pin 38: MAIN_DCD; output. */
  "MAIN_DCD": "38",
  /** Physical pin 39: MAIN_RI; output. */
  "MAIN_RI": "39",
  /** Physical pin 40: GPIO13; bidirectional. */
  "GPIO13": "40",
  /** Physical pin 41: GPIO14; bidirectional. */
  "GPIO14": "41",
  /** Physical pin 42: USIM_DET; input. */
  "USIM_DET": "42",
  /** Physical pin 43: USIM_VDD; power_out. */
  "USIM_VDD": "43",
  /** Physical pin 44: USIM_RST; output. */
  "USIM_RST": "44",
  /** Physical pin 45: USIM_DATA; bidirectional. */
  "USIM_DATA": "45",
  /** Physical pin 46: USIM_CLK; output. */
  "USIM_CLK": "46",
  /** Physical pin 47: USIM_GND; power_in. */
  "USIM_GND": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ANT_GNSS; passive. */
  "ANT_GNSS": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: RESERVED; no_connect. */
  "RESERVED_51": "51",
  /** Physical pin 52: VBAT_RF; power_in. */
  "VBAT_RF_52": "52",
  /** Physical pin 53: VBAT_RF; passive. */
  "VBAT_RF_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT_WIFI; no_connect. */
  "ANT_WIFI": "56",
  /** Physical pin 57: RESERVED; no_connect. */
  "RESERVED_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: ANT_MAIN; passive. */
  "ANT_MAIN": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: RESERVED; no_connect. */
  "RESERVED_63": "63",
  /** Physical pin 64: GPIO15; bidirectional. */
  "GPIO15": "64",
  /** Physical pin 65: GPIO16; bidirectional. */
  "GPIO16": "65",
  /** Physical pin 66: GPIO17; bidirectional. */
  "GPIO17": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: USB_BOOT; input. */
  "USB_BOOT": "75",
  /** Physical pin 76: RESERVED; no_connect. */
  "RESERVED_76": "76",
  /** Physical pin 77: RESERVED; no_connect. */
  "RESERVED_77": "77",
  /** Physical pin 78: RESERVED; no_connect. */
  "RESERVED_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GRFC1; output. */
  "GRFC1": "83",
  /** Physical pin 84: GRFC2; output. */
  "GRFC2": "84",
  /** Physical pin 85: GPIO18; bidirectional. */
  "GPIO18": "85",
  /** Physical pin 86: GPIO19; bidirectional. */
  "GPIO19": "86",
  /** Physical pin 87: GPIO20; bidirectional. */
  "GPIO20": "87",
  /** Physical pin 88: GPIO21; bidirectional. */
  "GPIO21": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: RESERVED; no_connect. */
  "RESERVED_92": "92",
  /** Physical pin 93: RESERVED; no_connect. */
  "RESERVED_93": "93",
  /** Physical pin 94: RESERVED; no_connect. */
  "RESERVED_94": "94",
  /** Physical pin 95: RESERVED; no_connect. */
  "RESERVED_95": "95",
  /** Physical pin 96: PON_TRIG; input. */
  "PON_TRIG": "96",
  /** Physical pin 97: RESERVED; no_connect. */
  "RESERVED_97": "97",
  /** Physical pin 98: RESERVED; no_connect. */
  "RESERVED_98": "98",
  /** Physical pin 99: RESERVED; no_connect. */
  "RESERVED_99": "99",
  /** Physical pin 100: GND; passive. */
  "GND_100": "100",
  /** Physical pin 101: GND; passive. */
  "GND_101": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
}) {
  override schema = "RF_GSM:BG95-M3";
  override referencePrefix = "U";
}

/**
 * NB-IoT, Cat M1  Cat NB2 Communication Module, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BG95-M4`. Reference prefix: `U`.
 * Footprint filters: Quectel?BG95*.
 * @see https://images.quectel.com/python/sites/2/2023/05/Quectel_BG95_Series_QuecOpen_Hardware_Design_V1.3.pdf
 * Keywords: NB-IoT Cat M1 NB2 GNSS.
 * Default footprint: RF_GSM:Quectel_BG95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BG95_M4 extends Component.withPins({
  /** Physical pin 1: PSM_IND; output. */
  "PSM_IND": "1",
  /** Physical pin 2: ADC1; input. */
  "ADC1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GPIO1; bidirectional. */
  "GPIO1": "4",
  /** Physical pin 5: GPIO2; bidirectional. */
  "GPIO2": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: VBUS; power_in. */
  "VBUS": "8",
  /** Physical pin 9: USB_DP; bidirectional. */
  "USB_DP": "9",
  /** Physical pin 10: USB_DM; bidirectional. */
  "USB_DM": "10",
  /** Physical pin 11: RESERVED; no_connect. */
  "RESERVED_11": "11",
  /** Physical pin 12: RESERVED; no_connect. */
  "RESERVED_12": "12",
  /** Physical pin 13: RESERVED; no_connect. */
  "RESERVED_13": "13",
  /** Physical pin 14: RESERVED; no_connect. */
  "RESERVED_14": "14",
  /** Physical pin 15: PWRKEY; bidirectional. */
  "PWRKEY": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: GPIO5; bidirectional. */
  "GPIO5": "18",
  /** Physical pin 19: GPIO6; bidirectional. */
  "GPIO6": "19",
  /** Physical pin 20: STATUS; output. */
  "STATUS": "20",
  /** Physical pin 21: NET_STATUS; output. */
  "NET_STATUS": "21",
  /** Physical pin 22: GPIO7; bidirectional. */
  "GPIO7": "22",
  /** Physical pin 23: GPIO8; bidirectional. */
  "GPIO8": "23",
  /** Physical pin 24: ADC0; input. */
  "ADC0": "24",
  /** Physical pin 25: GPIO9; bidirectional. */
  "GPIO9": "25",
  /** Physical pin 26: GPIO10; bidirectional. */
  "GPIO10": "26",
  /** Physical pin 27: GPIO11; bidirectional. */
  "GPIO11": "27",
  /** Physical pin 28: GPIO12; bidirectional. */
  "GPIO12": "28",
  /** Physical pin 29: VDD_EXT; power_out. */
  "VDD_EXT": "29",
  /** Physical pin 30: MAIN_DTR; input. */
  "MAIN_DTR": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: VBAT_BB; power_in. */
  "VBAT_BB_32": "32",
  /** Physical pin 33: VBAT_BB; passive. */
  "VBAT_BB_33": "33",
  /** Physical pin 34: MAIN_RXD; input. */
  "MAIN_RXD": "34",
  /** Physical pin 35: MAIN_TXD; output. */
  "MAIN_TXD": "35",
  /** Physical pin 36: MAIN_CTS; output. */
  "MAIN_CTS": "36",
  /** Physical pin 37: MAIN_RTS; input. */
  "MAIN_RTS": "37",
  /** Physical pin 38: MAIN_DCD; output. */
  "MAIN_DCD": "38",
  /** Physical pin 39: MAIN_RI; output. */
  "MAIN_RI": "39",
  /** Physical pin 40: GPIO13; bidirectional. */
  "GPIO13": "40",
  /** Physical pin 41: GPIO14; bidirectional. */
  "GPIO14": "41",
  /** Physical pin 42: USIM_DET; input. */
  "USIM_DET": "42",
  /** Physical pin 43: USIM_VDD; power_out. */
  "USIM_VDD": "43",
  /** Physical pin 44: USIM_RST; output. */
  "USIM_RST": "44",
  /** Physical pin 45: USIM_DATA; bidirectional. */
  "USIM_DATA": "45",
  /** Physical pin 46: USIM_CLK; output. */
  "USIM_CLK": "46",
  /** Physical pin 47: USIM_GND; power_in. */
  "USIM_GND": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ANT_GNSS; passive. */
  "ANT_GNSS": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: RESERVED; no_connect. */
  "RESERVED_51": "51",
  /** Physical pin 52: VBAT_RF; power_in. */
  "VBAT_RF_52": "52",
  /** Physical pin 53: VBAT_RF; passive. */
  "VBAT_RF_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT_WIFI; no_connect. */
  "ANT_WIFI": "56",
  /** Physical pin 57: RESERVED; no_connect. */
  "RESERVED_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: ANT_MAIN; passive. */
  "ANT_MAIN": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: RESERVED; no_connect. */
  "RESERVED_63": "63",
  /** Physical pin 64: GPIO15; bidirectional. */
  "GPIO15": "64",
  /** Physical pin 65: GPIO16; bidirectional. */
  "GPIO16": "65",
  /** Physical pin 66: GPIO17; bidirectional. */
  "GPIO17": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: USB_BOOT; input. */
  "USB_BOOT": "75",
  /** Physical pin 76: RESERVED; no_connect. */
  "RESERVED_76": "76",
  /** Physical pin 77: RESERVED; no_connect. */
  "RESERVED_77": "77",
  /** Physical pin 78: RESERVED; no_connect. */
  "RESERVED_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GRFC1; output. */
  "GRFC1": "83",
  /** Physical pin 84: GRFC2; output. */
  "GRFC2": "84",
  /** Physical pin 85: GPIO18; bidirectional. */
  "GPIO18": "85",
  /** Physical pin 86: GPIO19; bidirectional. */
  "GPIO19": "86",
  /** Physical pin 87: GPIO20; bidirectional. */
  "GPIO20": "87",
  /** Physical pin 88: GPIO21; bidirectional. */
  "GPIO21": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: RESERVED; no_connect. */
  "RESERVED_92": "92",
  /** Physical pin 93: RESERVED; no_connect. */
  "RESERVED_93": "93",
  /** Physical pin 94: RESERVED; no_connect. */
  "RESERVED_94": "94",
  /** Physical pin 95: RESERVED; no_connect. */
  "RESERVED_95": "95",
  /** Physical pin 96: PON_TRIG; input. */
  "PON_TRIG": "96",
  /** Physical pin 97: RESERVED; no_connect. */
  "RESERVED_97": "97",
  /** Physical pin 98: RESERVED; no_connect. */
  "RESERVED_98": "98",
  /** Physical pin 99: RESERVED; no_connect. */
  "RESERVED_99": "99",
  /** Physical pin 100: GND; passive. */
  "GND_100": "100",
  /** Physical pin 101: GND; passive. */
  "GND_101": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
}) {
  override schema = "RF_GSM:BG95-M4";
  override referencePrefix = "U";
}

/**
 * NB-IoT, Cat M1 NB2 EGPRS Communication Module, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BG95-M5`. Reference prefix: `U`.
 * Footprint filters: Quectel?BG95*.
 * @see https://images.quectel.com/python/sites/2/2023/05/Quectel_BG95_Series_QuecOpen_Hardware_Design_V1.3.pdf
 * Keywords: NB-IoT Cat M1 NB2 EGPRS GNSS.
 * Default footprint: RF_GSM:Quectel_BG95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BG95_M5 extends Component.withPins({
  /** Physical pin 1: PSM_IND; output. */
  "PSM_IND": "1",
  /** Physical pin 2: ADC1; input. */
  "ADC1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GPIO1; bidirectional. */
  "GPIO1": "4",
  /** Physical pin 5: GPIO2; bidirectional. */
  "GPIO2": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: VBUS; power_in. */
  "VBUS": "8",
  /** Physical pin 9: USB_DP; bidirectional. */
  "USB_DP": "9",
  /** Physical pin 10: USB_DM; bidirectional. */
  "USB_DM": "10",
  /** Physical pin 11: RESERVED; no_connect. */
  "RESERVED_11": "11",
  /** Physical pin 12: RESERVED; no_connect. */
  "RESERVED_12": "12",
  /** Physical pin 13: RESERVED; no_connect. */
  "RESERVED_13": "13",
  /** Physical pin 14: RESERVED; no_connect. */
  "RESERVED_14": "14",
  /** Physical pin 15: PWRKEY; bidirectional. */
  "PWRKEY": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: GPIO5; bidirectional. */
  "GPIO5": "18",
  /** Physical pin 19: GPIO6; bidirectional. */
  "GPIO6": "19",
  /** Physical pin 20: STATUS; output. */
  "STATUS": "20",
  /** Physical pin 21: NET_STATUS; output. */
  "NET_STATUS": "21",
  /** Physical pin 22: GPIO7; bidirectional. */
  "GPIO7": "22",
  /** Physical pin 23: GPIO8; bidirectional. */
  "GPIO8": "23",
  /** Physical pin 24: ADC0; input. */
  "ADC0": "24",
  /** Physical pin 25: GPIO9; bidirectional. */
  "GPIO9": "25",
  /** Physical pin 26: GPIO10; bidirectional. */
  "GPIO10": "26",
  /** Physical pin 27: GPIO11; bidirectional. */
  "GPIO11": "27",
  /** Physical pin 28: GPIO12; bidirectional. */
  "GPIO12": "28",
  /** Physical pin 29: VDD_EXT; power_out. */
  "VDD_EXT": "29",
  /** Physical pin 30: MAIN_DTR; input. */
  "MAIN_DTR": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: VBAT_BB; power_in. */
  "VBAT_BB_32": "32",
  /** Physical pin 33: VBAT_BB; passive. */
  "VBAT_BB_33": "33",
  /** Physical pin 34: MAIN_RXD; input. */
  "MAIN_RXD": "34",
  /** Physical pin 35: MAIN_TXD; output. */
  "MAIN_TXD": "35",
  /** Physical pin 36: MAIN_CTS; output. */
  "MAIN_CTS": "36",
  /** Physical pin 37: MAIN_RTS; input. */
  "MAIN_RTS": "37",
  /** Physical pin 38: MAIN_DCD; output. */
  "MAIN_DCD": "38",
  /** Physical pin 39: MAIN_RI; output. */
  "MAIN_RI": "39",
  /** Physical pin 40: GPIO13; bidirectional. */
  "GPIO13": "40",
  /** Physical pin 41: GPIO14; bidirectional. */
  "GPIO14": "41",
  /** Physical pin 42: USIM_DET; input. */
  "USIM_DET": "42",
  /** Physical pin 43: USIM_VDD; power_out. */
  "USIM_VDD": "43",
  /** Physical pin 44: USIM_RST; output. */
  "USIM_RST": "44",
  /** Physical pin 45: USIM_DATA; bidirectional. */
  "USIM_DATA": "45",
  /** Physical pin 46: USIM_CLK; output. */
  "USIM_CLK": "46",
  /** Physical pin 47: USIM_GND; power_in. */
  "USIM_GND": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ANT_GNSS; passive. */
  "ANT_GNSS": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: RESERVED; no_connect. */
  "RESERVED_51": "51",
  /** Physical pin 52: VBAT_RF; power_in. */
  "VBAT_RF_52": "52",
  /** Physical pin 53: VBAT_RF; passive. */
  "VBAT_RF_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT_WIFI; no_connect. */
  "ANT_WIFI": "56",
  /** Physical pin 57: RESERVED; no_connect. */
  "RESERVED_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: ANT_MAIN; passive. */
  "ANT_MAIN": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: RESERVED; no_connect. */
  "RESERVED_63": "63",
  /** Physical pin 64: GPIO15; bidirectional. */
  "GPIO15": "64",
  /** Physical pin 65: GPIO16; bidirectional. */
  "GPIO16": "65",
  /** Physical pin 66: GPIO17; bidirectional. */
  "GPIO17": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: USB_BOOT; input. */
  "USB_BOOT": "75",
  /** Physical pin 76: RESERVED; no_connect. */
  "RESERVED_76": "76",
  /** Physical pin 77: RESERVED; no_connect. */
  "RESERVED_77": "77",
  /** Physical pin 78: RESERVED; no_connect. */
  "RESERVED_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GRFC1; output. */
  "GRFC1": "83",
  /** Physical pin 84: GRFC2; output. */
  "GRFC2": "84",
  /** Physical pin 85: GPIO18; bidirectional. */
  "GPIO18": "85",
  /** Physical pin 86: GPIO19; bidirectional. */
  "GPIO19": "86",
  /** Physical pin 87: GPIO20; bidirectional. */
  "GPIO20": "87",
  /** Physical pin 88: GPIO21; bidirectional. */
  "GPIO21": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: RESERVED; no_connect. */
  "RESERVED_92": "92",
  /** Physical pin 93: RESERVED; no_connect. */
  "RESERVED_93": "93",
  /** Physical pin 94: RESERVED; no_connect. */
  "RESERVED_94": "94",
  /** Physical pin 95: RESERVED; no_connect. */
  "RESERVED_95": "95",
  /** Physical pin 96: PON_TRIG; input. */
  "PON_TRIG": "96",
  /** Physical pin 97: RESERVED; no_connect. */
  "RESERVED_97": "97",
  /** Physical pin 98: RESERVED; no_connect. */
  "RESERVED_98": "98",
  /** Physical pin 99: RESERVED; no_connect. */
  "RESERVED_99": "99",
  /** Physical pin 100: GND; passive. */
  "GND_100": "100",
  /** Physical pin 101: GND; passive. */
  "GND_101": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
}) {
  override schema = "RF_GSM:BG95-M5";
  override referencePrefix = "U";
}

/**
 * NB-IoT, Cat M1 Cat NB2 Communication Module, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BG95-M6`. Reference prefix: `U`.
 * Footprint filters: Quectel?BG95*.
 * @see https://images.quectel.com/python/sites/2/2023/05/Quectel_BG95_Series_QuecOpen_Hardware_Design_V1.3.pdf
 * Keywords: NB-IoT Cat M1 NB2 GNSS.
 * Default footprint: RF_GSM:Quectel_BG95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BG95_M6 extends Component.withPins({
  /** Physical pin 1: PSM_IND; output. */
  "PSM_IND": "1",
  /** Physical pin 2: ADC1; input. */
  "ADC1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GPIO1; bidirectional. */
  "GPIO1": "4",
  /** Physical pin 5: GPIO2; bidirectional. */
  "GPIO2": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: VBUS; power_in. */
  "VBUS": "8",
  /** Physical pin 9: USB_DP; bidirectional. */
  "USB_DP": "9",
  /** Physical pin 10: USB_DM; bidirectional. */
  "USB_DM": "10",
  /** Physical pin 11: RESERVED; no_connect. */
  "RESERVED_11": "11",
  /** Physical pin 12: RESERVED; no_connect. */
  "RESERVED_12": "12",
  /** Physical pin 13: RESERVED; no_connect. */
  "RESERVED_13": "13",
  /** Physical pin 14: RESERVED; no_connect. */
  "RESERVED_14": "14",
  /** Physical pin 15: PWRKEY; bidirectional. */
  "PWRKEY": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: GPIO5; bidirectional. */
  "GPIO5": "18",
  /** Physical pin 19: GPIO6; bidirectional. */
  "GPIO6": "19",
  /** Physical pin 20: STATUS; output. */
  "STATUS": "20",
  /** Physical pin 21: NET_STATUS; output. */
  "NET_STATUS": "21",
  /** Physical pin 22: GPIO7; bidirectional. */
  "GPIO7": "22",
  /** Physical pin 23: GPIO8; bidirectional. */
  "GPIO8": "23",
  /** Physical pin 24: ADC0; input. */
  "ADC0": "24",
  /** Physical pin 25: GPIO9; bidirectional. */
  "GPIO9": "25",
  /** Physical pin 26: GPIO10; bidirectional. */
  "GPIO10": "26",
  /** Physical pin 27: GPIO11; bidirectional. */
  "GPIO11": "27",
  /** Physical pin 28: GPIO12; bidirectional. */
  "GPIO12": "28",
  /** Physical pin 29: VDD_EXT; power_out. */
  "VDD_EXT": "29",
  /** Physical pin 30: MAIN_DTR; input. */
  "MAIN_DTR": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: VBAT_BB; power_in. */
  "VBAT_BB_32": "32",
  /** Physical pin 33: VBAT_BB; passive. */
  "VBAT_BB_33": "33",
  /** Physical pin 34: MAIN_RXD; input. */
  "MAIN_RXD": "34",
  /** Physical pin 35: MAIN_TXD; output. */
  "MAIN_TXD": "35",
  /** Physical pin 36: MAIN_CTS; output. */
  "MAIN_CTS": "36",
  /** Physical pin 37: MAIN_RTS; input. */
  "MAIN_RTS": "37",
  /** Physical pin 38: MAIN_DCD; output. */
  "MAIN_DCD": "38",
  /** Physical pin 39: MAIN_RI; output. */
  "MAIN_RI": "39",
  /** Physical pin 40: GPIO13; bidirectional. */
  "GPIO13": "40",
  /** Physical pin 41: GPIO14; bidirectional. */
  "GPIO14": "41",
  /** Physical pin 42: USIM_DET; input. */
  "USIM_DET": "42",
  /** Physical pin 43: USIM_VDD; power_out. */
  "USIM_VDD": "43",
  /** Physical pin 44: USIM_RST; output. */
  "USIM_RST": "44",
  /** Physical pin 45: USIM_DATA; bidirectional. */
  "USIM_DATA": "45",
  /** Physical pin 46: USIM_CLK; output. */
  "USIM_CLK": "46",
  /** Physical pin 47: USIM_GND; power_in. */
  "USIM_GND": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ANT_GNSS; passive. */
  "ANT_GNSS": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: RESERVED; no_connect. */
  "RESERVED_51": "51",
  /** Physical pin 52: VBAT_RF; power_in. */
  "VBAT_RF_52": "52",
  /** Physical pin 53: VBAT_RF; passive. */
  "VBAT_RF_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT_WIFI; no_connect. */
  "ANT_WIFI": "56",
  /** Physical pin 57: RESERVED; no_connect. */
  "RESERVED_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: ANT_MAIN; passive. */
  "ANT_MAIN": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: RESERVED; no_connect. */
  "RESERVED_63": "63",
  /** Physical pin 64: GPIO15; bidirectional. */
  "GPIO15": "64",
  /** Physical pin 65: GPIO16; bidirectional. */
  "GPIO16": "65",
  /** Physical pin 66: GPIO17; bidirectional. */
  "GPIO17": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: USB_BOOT; input. */
  "USB_BOOT": "75",
  /** Physical pin 76: RESERVED; no_connect. */
  "RESERVED_76": "76",
  /** Physical pin 77: RESERVED; no_connect. */
  "RESERVED_77": "77",
  /** Physical pin 78: RESERVED; no_connect. */
  "RESERVED_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GRFC1; output. */
  "GRFC1": "83",
  /** Physical pin 84: GRFC2; output. */
  "GRFC2": "84",
  /** Physical pin 85: GPIO18; bidirectional. */
  "GPIO18": "85",
  /** Physical pin 86: GPIO19; bidirectional. */
  "GPIO19": "86",
  /** Physical pin 87: GPIO20; bidirectional. */
  "GPIO20": "87",
  /** Physical pin 88: GPIO21; bidirectional. */
  "GPIO21": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: RESERVED; no_connect. */
  "RESERVED_92": "92",
  /** Physical pin 93: RESERVED; no_connect. */
  "RESERVED_93": "93",
  /** Physical pin 94: RESERVED; no_connect. */
  "RESERVED_94": "94",
  /** Physical pin 95: RESERVED; no_connect. */
  "RESERVED_95": "95",
  /** Physical pin 96: PON_TRIG; input. */
  "PON_TRIG": "96",
  /** Physical pin 97: RESERVED; no_connect. */
  "RESERVED_97": "97",
  /** Physical pin 98: RESERVED; no_connect. */
  "RESERVED_98": "98",
  /** Physical pin 99: RESERVED; no_connect. */
  "RESERVED_99": "99",
  /** Physical pin 100: GND; passive. */
  "GND_100": "100",
  /** Physical pin 101: GND; passive. */
  "GND_101": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
}) {
  override schema = "RF_GSM:BG95-M6";
  override referencePrefix = "U";
}

/**
 * NB-IoT, Cat M1 Cat NB2 EGPRS Communication Module, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BG95-M8`. Reference prefix: `U`.
 * Footprint filters: Quectel?BG95*.
 * @see https://images.quectel.com/python/sites/2/2023/05/Quectel_BG95_Series_QuecOpen_Hardware_Design_V1.3.pdf
 * Keywords: NB-IoT Cat M1 NB2 EGPRS GNSS.
 * Default footprint: RF_GSM:Quectel_BG95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BG95_M8 extends Component.withPins({
  /** Physical pin 1: PSM_IND; output. */
  "PSM_IND": "1",
  /** Physical pin 2: ADC1; input. */
  "ADC1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GPIO1; bidirectional. */
  "GPIO1": "4",
  /** Physical pin 5: GPIO2; bidirectional. */
  "GPIO2": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: VBUS; power_in. */
  "VBUS": "8",
  /** Physical pin 9: USB_DP; bidirectional. */
  "USB_DP": "9",
  /** Physical pin 10: USB_DM; bidirectional. */
  "USB_DM": "10",
  /** Physical pin 11: RESERVED; no_connect. */
  "RESERVED_11": "11",
  /** Physical pin 12: RESERVED; no_connect. */
  "RESERVED_12": "12",
  /** Physical pin 13: RESERVED; no_connect. */
  "RESERVED_13": "13",
  /** Physical pin 14: RESERVED; no_connect. */
  "RESERVED_14": "14",
  /** Physical pin 15: PWRKEY; bidirectional. */
  "PWRKEY": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: GPIO5; bidirectional. */
  "GPIO5": "18",
  /** Physical pin 19: GPIO6; bidirectional. */
  "GPIO6": "19",
  /** Physical pin 20: STATUS; output. */
  "STATUS": "20",
  /** Physical pin 21: NET_STATUS; output. */
  "NET_STATUS": "21",
  /** Physical pin 22: GPIO7; bidirectional. */
  "GPIO7": "22",
  /** Physical pin 23: GPIO8; bidirectional. */
  "GPIO8": "23",
  /** Physical pin 24: ADC0; input. */
  "ADC0": "24",
  /** Physical pin 25: GPIO9; bidirectional. */
  "GPIO9": "25",
  /** Physical pin 26: GPIO10; bidirectional. */
  "GPIO10": "26",
  /** Physical pin 27: GPIO11; bidirectional. */
  "GPIO11": "27",
  /** Physical pin 28: GPIO12; bidirectional. */
  "GPIO12": "28",
  /** Physical pin 29: VDD_EXT; power_out. */
  "VDD_EXT": "29",
  /** Physical pin 30: MAIN_DTR; input. */
  "MAIN_DTR": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: VBAT_BB; power_in. */
  "VBAT_BB_32": "32",
  /** Physical pin 33: VBAT_BB; passive. */
  "VBAT_BB_33": "33",
  /** Physical pin 34: MAIN_RXD; input. */
  "MAIN_RXD": "34",
  /** Physical pin 35: MAIN_TXD; output. */
  "MAIN_TXD": "35",
  /** Physical pin 36: MAIN_CTS; output. */
  "MAIN_CTS": "36",
  /** Physical pin 37: MAIN_RTS; input. */
  "MAIN_RTS": "37",
  /** Physical pin 38: MAIN_DCD; output. */
  "MAIN_DCD": "38",
  /** Physical pin 39: MAIN_RI; output. */
  "MAIN_RI": "39",
  /** Physical pin 40: GPIO13; bidirectional. */
  "GPIO13": "40",
  /** Physical pin 41: GPIO14; bidirectional. */
  "GPIO14": "41",
  /** Physical pin 42: USIM_DET; input. */
  "USIM_DET": "42",
  /** Physical pin 43: USIM_VDD; power_out. */
  "USIM_VDD": "43",
  /** Physical pin 44: USIM_RST; output. */
  "USIM_RST": "44",
  /** Physical pin 45: USIM_DATA; bidirectional. */
  "USIM_DATA": "45",
  /** Physical pin 46: USIM_CLK; output. */
  "USIM_CLK": "46",
  /** Physical pin 47: USIM_GND; power_in. */
  "USIM_GND": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ANT_GNSS; passive. */
  "ANT_GNSS": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: RESERVED; no_connect. */
  "RESERVED_51": "51",
  /** Physical pin 52: VBAT_RF; power_in. */
  "VBAT_RF_52": "52",
  /** Physical pin 53: VBAT_RF; passive. */
  "VBAT_RF_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT_WIFI; no_connect. */
  "ANT_WIFI": "56",
  /** Physical pin 57: RESERVED; no_connect. */
  "RESERVED_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: ANT_MAIN; passive. */
  "ANT_MAIN": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: RESERVED; no_connect. */
  "RESERVED_63": "63",
  /** Physical pin 64: GPIO15; bidirectional. */
  "GPIO15": "64",
  /** Physical pin 65: GPIO16; bidirectional. */
  "GPIO16": "65",
  /** Physical pin 66: GPIO17; bidirectional. */
  "GPIO17": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: USB_BOOT; input. */
  "USB_BOOT": "75",
  /** Physical pin 76: RESERVED; no_connect. */
  "RESERVED_76": "76",
  /** Physical pin 77: RESERVED; no_connect. */
  "RESERVED_77": "77",
  /** Physical pin 78: RESERVED; no_connect. */
  "RESERVED_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GRFC1; output. */
  "GRFC1": "83",
  /** Physical pin 84: GRFC2; output. */
  "GRFC2": "84",
  /** Physical pin 85: GPIO18; bidirectional. */
  "GPIO18": "85",
  /** Physical pin 86: GPIO19; bidirectional. */
  "GPIO19": "86",
  /** Physical pin 87: GPIO20; bidirectional. */
  "GPIO20": "87",
  /** Physical pin 88: GPIO21; bidirectional. */
  "GPIO21": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: RESERVED; no_connect. */
  "RESERVED_92": "92",
  /** Physical pin 93: RESERVED; no_connect. */
  "RESERVED_93": "93",
  /** Physical pin 94: RESERVED; no_connect. */
  "RESERVED_94": "94",
  /** Physical pin 95: RESERVED; no_connect. */
  "RESERVED_95": "95",
  /** Physical pin 96: PON_TRIG; input. */
  "PON_TRIG": "96",
  /** Physical pin 97: RESERVED; no_connect. */
  "RESERVED_97": "97",
  /** Physical pin 98: RESERVED; no_connect. */
  "RESERVED_98": "98",
  /** Physical pin 99: RESERVED; no_connect. */
  "RESERVED_99": "99",
  /** Physical pin 100: GND; passive. */
  "GND_100": "100",
  /** Physical pin 101: GND; passive. */
  "GND_101": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
}) {
  override schema = "RF_GSM:BG95-M8";
  override referencePrefix = "U";
}

/**
 * NB-IoT, Cat M1 Cat NB2 Wifi Communication Module, AT Command Set
 *
 * KiCad symbol: `RF_GSM:BG95-MF`. Reference prefix: `U`.
 * Footprint filters: Quectel?BG95*.
 * @see https://images.quectel.com/python/sites/2/2023/05/Quectel_BG95_Series_QuecOpen_Hardware_Design_V1.3.pdf
 * Keywords: NB-IoT Cat M1 NB2 Wifi GNSS.
 * Default footprint: RF_GSM:Quectel_BG95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BG95_MF extends Component.withPins({
  /** Physical pin 1: PSM_IND; output. */
  "PSM_IND": "1",
  /** Physical pin 2: ADC1; input. */
  "ADC1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GPIO1; bidirectional. */
  "GPIO1": "4",
  /** Physical pin 5: GPIO2; bidirectional. */
  "GPIO2": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: VBUS; power_in. */
  "VBUS": "8",
  /** Physical pin 9: USB_DP; bidirectional. */
  "USB_DP": "9",
  /** Physical pin 10: USB_DM; bidirectional. */
  "USB_DM": "10",
  /** Physical pin 11: RESERVED; no_connect. */
  "RESERVED_11": "11",
  /** Physical pin 12: RESERVED; no_connect. */
  "RESERVED_12": "12",
  /** Physical pin 13: RESERVED; no_connect. */
  "RESERVED_13": "13",
  /** Physical pin 14: RESERVED; no_connect. */
  "RESERVED_14": "14",
  /** Physical pin 15: PWRKEY; bidirectional. */
  "PWRKEY": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: GPIO5; bidirectional. */
  "GPIO5": "18",
  /** Physical pin 19: GPIO6; bidirectional. */
  "GPIO6": "19",
  /** Physical pin 20: STATUS; output. */
  "STATUS": "20",
  /** Physical pin 21: NET_STATUS; output. */
  "NET_STATUS": "21",
  /** Physical pin 22: GPIO7; bidirectional. */
  "GPIO7": "22",
  /** Physical pin 23: GPIO8; bidirectional. */
  "GPIO8": "23",
  /** Physical pin 24: ADC0; input. */
  "ADC0": "24",
  /** Physical pin 25: GPIO9; bidirectional. */
  "GPIO9": "25",
  /** Physical pin 26: GPIO10; bidirectional. */
  "GPIO10": "26",
  /** Physical pin 27: GPIO11; bidirectional. */
  "GPIO11": "27",
  /** Physical pin 28: GPIO12; bidirectional. */
  "GPIO12": "28",
  /** Physical pin 29: VDD_EXT; power_out. */
  "VDD_EXT": "29",
  /** Physical pin 30: MAIN_DTR; input. */
  "MAIN_DTR": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: VBAT_BB; power_in. */
  "VBAT_BB_32": "32",
  /** Physical pin 33: VBAT_BB; passive. */
  "VBAT_BB_33": "33",
  /** Physical pin 34: MAIN_RXD; input. */
  "MAIN_RXD": "34",
  /** Physical pin 35: MAIN_TXD; output. */
  "MAIN_TXD": "35",
  /** Physical pin 36: MAIN_CTS; output. */
  "MAIN_CTS": "36",
  /** Physical pin 37: MAIN_RTS; input. */
  "MAIN_RTS": "37",
  /** Physical pin 38: MAIN_DCD; output. */
  "MAIN_DCD": "38",
  /** Physical pin 39: MAIN_RI; output. */
  "MAIN_RI": "39",
  /** Physical pin 40: GPIO13; bidirectional. */
  "GPIO13": "40",
  /** Physical pin 41: GPIO14; bidirectional. */
  "GPIO14": "41",
  /** Physical pin 42: USIM_DET; input. */
  "USIM_DET": "42",
  /** Physical pin 43: USIM_VDD; power_out. */
  "USIM_VDD": "43",
  /** Physical pin 44: USIM_RST; output. */
  "USIM_RST": "44",
  /** Physical pin 45: USIM_DATA; bidirectional. */
  "USIM_DATA": "45",
  /** Physical pin 46: USIM_CLK; output. */
  "USIM_CLK": "46",
  /** Physical pin 47: USIM_GND; power_in. */
  "USIM_GND": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ANT_GNSS; passive. */
  "ANT_GNSS": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: RESERVED; no_connect. */
  "RESERVED_51": "51",
  /** Physical pin 52: VBAT_RF; power_in. */
  "VBAT_RF_52": "52",
  /** Physical pin 53: VBAT_RF; passive. */
  "VBAT_RF_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT_WIFI; passive. */
  "ANT_WIFI": "56",
  /** Physical pin 57: RESERVED; no_connect. */
  "RESERVED_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: ANT_MAIN; passive. */
  "ANT_MAIN": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: RESERVED; no_connect. */
  "RESERVED_63": "63",
  /** Physical pin 64: GPIO15; bidirectional. */
  "GPIO15": "64",
  /** Physical pin 65: GPIO16; bidirectional. */
  "GPIO16": "65",
  /** Physical pin 66: GPIO17; bidirectional. */
  "GPIO17": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: USB_BOOT; input. */
  "USB_BOOT": "75",
  /** Physical pin 76: RESERVED; no_connect. */
  "RESERVED_76": "76",
  /** Physical pin 77: RESERVED; no_connect. */
  "RESERVED_77": "77",
  /** Physical pin 78: RESERVED; no_connect. */
  "RESERVED_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GRFC1; output. */
  "GRFC1": "83",
  /** Physical pin 84: GRFC2; output. */
  "GRFC2": "84",
  /** Physical pin 85: GPIO18; bidirectional. */
  "GPIO18": "85",
  /** Physical pin 86: GPIO19; bidirectional. */
  "GPIO19": "86",
  /** Physical pin 87: GPIO20; bidirectional. */
  "GPIO20": "87",
  /** Physical pin 88: GPIO21; bidirectional. */
  "GPIO21": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: RESERVED; no_connect. */
  "RESERVED_92": "92",
  /** Physical pin 93: RESERVED; no_connect. */
  "RESERVED_93": "93",
  /** Physical pin 94: RESERVED; no_connect. */
  "RESERVED_94": "94",
  /** Physical pin 95: RESERVED; no_connect. */
  "RESERVED_95": "95",
  /** Physical pin 96: PON_TRIG; input. */
  "PON_TRIG": "96",
  /** Physical pin 97: RESERVED; no_connect. */
  "RESERVED_97": "97",
  /** Physical pin 98: RESERVED; no_connect. */
  "RESERVED_98": "98",
  /** Physical pin 99: RESERVED; no_connect. */
  "RESERVED_99": "99",
  /** Physical pin 100: GND; passive. */
  "GND_100": "100",
  /** Physical pin 101: GND; passive. */
  "GND_101": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
}) {
  override schema = "RF_GSM:BG95-MF";
  override referencePrefix = "U";
}

/**
 * Ublox HSPA GSM Quad-Band Communication Module, AT Command Set, AT Command Set, Worldwide , LGA-100
 *
 * KiCad symbol: `RF_GSM:LENA-R8001`. Reference prefix: `U`.
 * Footprint filters: ublox*LENA?R8*.
 * @see https://content.u-blox.com/sites/default/files/documents/LENA-R8_SysIntegrManual_UBX-22015376.pdf
 * Keywords: GSM LTE 2G 4G.
 * Default footprint: RF_GSM:ublox_LENA-R8_LGA-100.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LENA_R8001 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: V_BCKP; power_in. */
  "V_BCKP": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: V_INT; power_out. */
  "V_INT": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: DSR; bidirectional. */
  "DSR": "6",
  /** Physical pin 7: RI; output. */
  "RI": "7",
  /** Physical pin 8: DCD; output. */
  "DCD": "8",
  /** Physical pin 9: DTR; input. */
  "DTR": "9",
  /** Physical pin 10: RTS; input. */
  "RTS": "10",
  /** Physical pin 11: CTS; output. */
  "CTS": "11",
  /** Physical pin 12: TXD; input. */
  "TXD": "12",
  /** Physical pin 13: RXD; output. */
  "RXD": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: PWR_ON; input. */
  "PWR_ON": "15",
  /** Physical pin 16: GPIO1; bidirectional. */
  "GPIO1": "16",
  /** Physical pin 17: VUSB_DET; input. */
  "VUSB_DET": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: GPIO6; bidirectional. */
  "GPIO6": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: RSVD; no_connect. */
  "RSVD_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GPIO2; bidirectional. */
  "GPIO2": "23",
  /** Physical pin 24: GPIO3; bidirectional. */
  "GPIO3": "24",
  /** Physical pin 25: GPIO4; bidirectional. */
  "GPIO4": "25",
  /** Physical pin 26: SDA; bidirectional. */
  "SDA": "26",
  /** Physical pin 27: SCL; output. */
  "SCL": "27",
  /** Physical pin 28: USB_D-; bidirectional. */
  "USB_D-": "28",
  /** Physical pin 29: USB_D+; bidirectional. */
  "USB_D+": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: RSVD; no_connect. */
  "RSVD_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: USB_BOOT; input. */
  "USB_BOOT": "33",
  /** Physical pin 34: I2S_WA; input. */
  "I2S_WA": "34",
  /** Physical pin 35: I2S_TXD; output. */
  "I2S_TXD": "35",
  /** Physical pin 36: I2S_CLK; input. */
  "I2S_CLK": "36",
  /** Physical pin 37: I2S_RXD; input. */
  "I2S_RXD": "37",
  /** Physical pin 38: SIM_CLK; output. */
  "SIM_CLK": "38",
  /** Physical pin 39: SIM_IO; bidirectional. */
  "SIM_IO": "39",
  /** Physical pin 40: SIM_RST; output. */
  "SIM_RST": "40",
  /** Physical pin 41: VSIM; power_out. */
  "VSIM": "41",
  /** Physical pin 42: GPIO5; bidirectional. */
  "GPIO5": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: RSVD; no_connect. */
  "RSVD_44": "44",
  /** Physical pin 45: RSVD; no_connect. */
  "RSVD_45": "45",
  /** Physical pin 46: RSVD; no_connect. */
  "RSVD_46": "46",
  /** Physical pin 47: RSVD; no_connect. */
  "RSVD_47": "47",
  /** Physical pin 48: RSVD; no_connect. */
  "RSVD_48": "48",
  /** Physical pin 49: RSVD; no_connect. */
  "RSVD_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: VCC; power_in. */
  "VCC_51": "51",
  /** Physical pin 52: VCC; passive. */
  "VCC_52": "52",
  /** Physical pin 53: VCC; passive. */
  "VCC_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT; passive. */
  "ANT": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: ANT_DET; input. */
  "ANT_DET": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: RSVD; no_connect. */
  "RSVD_62": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
  /** Physical pin 66: GND; passive. */
  "GND_66": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GND; passive. */
  "GND_75": "75",
  /** Physical pin 76: GND; passive. */
  "GND_76": "76",
  /** Physical pin 77: GND; passive. */
  "GND_77": "77",
  /** Physical pin 78: GND; passive. */
  "GND_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GND; passive. */
  "GND_83": "83",
  /** Physical pin 84: GND; passive. */
  "GND_84": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GND; passive. */
  "GND_87": "87",
  /** Physical pin 88: GND; passive. */
  "GND_88": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: GND; passive. */
  "GND_93": "93",
  /** Physical pin 94: GND; passive. */
  "GND_94": "94",
  /** Physical pin 95: GND; passive. */
  "GND_95": "95",
  /** Physical pin 96: GND; passive. */
  "GND_96": "96",
  /** Physical pin 97: RFCTRL1; output. */
  "RFCTRL1": "97",
  /** Physical pin 98: RFCTRL2; output. */
  "RFCTRL2": "98",
  /** Physical pin 99: RSVD; no_connect. */
  "RSVD_99": "99",
  /** Physical pin 100: RSVD; no_connect. */
  "RSVD_100": "100",
}) {
  override schema = "RF_GSM:LENA-R8001";
  override referencePrefix = "U";
}

/**
 * Quectel quad-band GSM/GPRS module in LCC package
 *
 * KiCad symbol: `RF_GSM:M95`. Reference prefix: `U`.
 * Footprint filters: Quectel*M95*.
 * @see https://www.quectel.com/UploadImage/Downlad/M95_Hardware_Design_V1.3.pdf
 * Keywords: GSM GPRS AT SMS voice TCP/IP.
 * Default footprint: RF_GSM:Quectel_M95.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M95 extends Component.withPins({
  /** Physical pin 1: AGND; power_in. */
  "AGND": "1",
  /** Physical pin 2: MIC2P; input. */
  "MIC2P": "2",
  /** Physical pin 3: MIC2N; input. */
  "MIC2N": "3",
  /** Physical pin 4: MIC1P; input. */
  "MIC1P": "4",
  /** Physical pin 5: MIC1N; input. */
  "MIC1N": "5",
  /** Physical pin 6: SPK1N; output. */
  "SPK1N": "6",
  /** Physical pin 7: SPK1P; output. */
  "SPK1P": "7",
  /** Physical pin 8: LOUDSPKN; output. */
  "LOUDSPKN": "8",
  /** Physical pin 9: LOUDSPKP; output. */
  "LOUDSPKP": "9",
  /** Physical pin 10: ~{PWRKEY}; input. */
  "~{PWRKEY}": "10",
  /** Physical pin 11: ~{EMERG_OFF}; input. */
  "~{EMERG_OFF}": "11",
  /** Physical pin 12: STATUS; output. */
  "STATUS": "12",
  /** Physical pin 13: NETLIGHT; output. */
  "NETLIGHT": "13",
  /** Physical pin 14: DBG_RXD; input. */
  "DBG_RXD": "14",
  /** Physical pin 15: DBG_TXD; output. */
  "DBG_TXD": "15",
  /** Physical pin 16: RESERVED; no_connect. */
  "RESERVED_16": "16",
  /** Physical pin 17: RESERVED; no_connect. */
  "RESERVED_17": "17",
  /** Physical pin 18: RESERVED; no_connect. */
  "RESERVED_18": "18",
  /** Physical pin 19: VDD_EXT; power_out. */
  "VDD_EXT": "19",
  /** Physical pin 20: DTR; input. */
  "DTR": "20",
  /** Physical pin 21: RXD; input. */
  "RXD": "21",
  /** Physical pin 22: TXD; output. */
  "TXD": "22",
  /** Physical pin 23: CTS; output. */
  "CTS": "23",
  /** Physical pin 24: RTS; input. */
  "RTS": "24",
  /** Physical pin 25: DCD; output. */
  "DCD": "25",
  /** Physical pin 26: RI; output. */
  "RI": "26",
  /** Physical pin 27: SIM_VDD; power_out. */
  "SIM_VDD": "27",
  /** Physical pin 28: SIM_RST; output. */
  "SIM_RST": "28",
  /** Physical pin 29: SIM_DATA; bidirectional. */
  "SIM_DATA": "29",
  /** Physical pin 30: SIM_CLK; output. */
  "SIM_CLK": "30",
  /** Physical pin 31: SIM_GND; power_out. */
  "SIM_GND": "31",
  /** Physical pin 32: VRTC; power_in. */
  "VRTC": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT_33": "33",
  /** Physical pin 34: VBAT; passive. */
  "VBAT_34": "34",
  /** Physical pin 35: GND; power_in. */
  "GND_35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: RF_ANT; passive. */
  "RF_ANT": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: RESERVED; no_connect. */
  "RESERVED_41": "41",
  /** Physical pin 42: RESERVED; no_connect. */
  "RESERVED_42": "42",
}) {
  override schema = "RF_GSM:M95";
  override referencePrefix = "U";
}

/**
 * Ublox HSPA GSM Quad-Band Communication Module, AT Command Set, AT Command Set, Worldwide , LGA-96
 *
 * KiCad symbol: `RF_GSM:SARA-U201`. Reference prefix: `U`.
 * Footprint filters: ublox*SARA*.
 * @see https://www.u-blox.com/sites/default/files/SARA-U2_DataSheet_(UBX-13005287).pdf
 * Keywords: GSM HSPA 2G 3G.
 * Default footprint: RF_GSM:ublox_SARA_LGA-96.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SARA_U201 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: V_BCKP; power_out. */
  "V_BCKP": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: V_INT; power_out. */
  "V_INT": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: DSR; output. */
  "DSR": "6",
  /** Physical pin 7: RI; output. */
  "RI": "7",
  /** Physical pin 8: DCD; output. */
  "DCD": "8",
  /** Physical pin 9: DTR; input. */
  "DTR": "9",
  /** Physical pin 10: RTS; input. */
  "RTS": "10",
  /** Physical pin 11: CTS; output. */
  "CTS": "11",
  /** Physical pin 12: TXD; input. */
  "TXD": "12",
  /** Physical pin 13: RXD; output. */
  "RXD": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: PWR_ON; input. */
  "PWR_ON": "15",
  /** Physical pin 16: GPIO1; bidirectional. */
  "GPIO1": "16",
  /** Physical pin 17: VUSB_DET; input. */
  "VUSB_DET": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: CODEC_CLK; output. */
  "CODEC_CLK": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GPIO2; bidirectional. */
  "GPIO2": "23",
  /** Physical pin 24: GPIO3; bidirectional. */
  "GPIO3": "24",
  /** Physical pin 25: GPIO4; bidirectional. */
  "GPIO4": "25",
  /** Physical pin 26: SDA; bidirectional. */
  "SDA": "26",
  /** Physical pin 27: SCL; output. */
  "SCL": "27",
  /** Physical pin 28: USB_D-; bidirectional. */
  "USB_D-": "28",
  /** Physical pin 29: USB_D+; bidirectional. */
  "USB_D+": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: RSVD; no_connect. */
  "RSVD_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RSVD; no_connect. */
  "RSVD_33": "33",
  /** Physical pin 34: I2S_WA; bidirectional. */
  "I2S_WA": "34",
  /** Physical pin 35: I2S_TXD; output. */
  "I2S_TXD": "35",
  /** Physical pin 36: I2S_CLK; output. */
  "I2S_CLK": "36",
  /** Physical pin 37: I2S_RXD; input. */
  "I2S_RXD": "37",
  /** Physical pin 38: SIM_CLK; output. */
  "SIM_CLK": "38",
  /** Physical pin 39: SIM_IO; bidirectional. */
  "SIM_IO": "39",
  /** Physical pin 40: SIM_RST; output. */
  "SIM_RST": "40",
  /** Physical pin 41: VSIM; power_out. */
  "VSIM": "41",
  /** Physical pin 42: SIM_DET; input. */
  "SIM_DET": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: RSVD; no_connect. */
  "RSVD_44": "44",
  /** Physical pin 45: RSVD; no_connect. */
  "RSVD_45": "45",
  /** Physical pin 46: RSVD; no_connect. */
  "RSVD_46": "46",
  /** Physical pin 47: RSVD; no_connect. */
  "RSVD_47": "47",
  /** Physical pin 48: RSVD; no_connect. */
  "RSVD_48": "48",
  /** Physical pin 49: RSVD; no_connect. */
  "RSVD_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: VCC; power_in. */
  "VCC_51": "51",
  /** Physical pin 52: VCC; passive. */
  "VCC_52": "52",
  /** Physical pin 53: VCC; passive. */
  "VCC_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT; passive. */
  "ANT": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: ANT_DET; input. */
  "ANT_DET": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
  /** Physical pin 66: GND; passive. */
  "GND_66": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GND; passive. */
  "GND_75": "75",
  /** Physical pin 76: GND; passive. */
  "GND_76": "76",
  /** Physical pin 77: GND; passive. */
  "GND_77": "77",
  /** Physical pin 78: GND; passive. */
  "GND_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GND; passive. */
  "GND_83": "83",
  /** Physical pin 84: GND; passive. */
  "GND_84": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GND; passive. */
  "GND_87": "87",
  /** Physical pin 88: GND; passive. */
  "GND_88": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: GND; passive. */
  "GND_93": "93",
  /** Physical pin 94: GND; passive. */
  "GND_94": "94",
  /** Physical pin 95: GND; passive. */
  "GND_95": "95",
  /** Physical pin 96: GND; passive. */
  "GND_96": "96",
}) {
  override schema = "RF_GSM:SARA-U201";
  override referencePrefix = "U";
}

/**
 * Ublox HSPA GSM Quad-Band Communication Module, AT Command Set, Designed for America, LGA-96
 *
 * KiCad symbol: `RF_GSM:SARA-U260`. Reference prefix: `U`.
 * Footprint filters: ublox*SARA*.
 * @see https://www.u-blox.com/sites/default/files/SARA-U2_DataSheet_(UBX-13005287).pdf
 * Keywords: GSM HSPA 2G 3G.
 * Default footprint: RF_GSM:ublox_SARA_LGA-96.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SARA_U260 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: V_BCKP; power_out. */
  "V_BCKP": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: V_INT; power_out. */
  "V_INT": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: DSR; output. */
  "DSR": "6",
  /** Physical pin 7: RI; output. */
  "RI": "7",
  /** Physical pin 8: DCD; output. */
  "DCD": "8",
  /** Physical pin 9: DTR; input. */
  "DTR": "9",
  /** Physical pin 10: RTS; input. */
  "RTS": "10",
  /** Physical pin 11: CTS; output. */
  "CTS": "11",
  /** Physical pin 12: TXD; input. */
  "TXD": "12",
  /** Physical pin 13: RXD; output. */
  "RXD": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: PWR_ON; input. */
  "PWR_ON": "15",
  /** Physical pin 16: GPIO1; bidirectional. */
  "GPIO1": "16",
  /** Physical pin 17: VUSB_DET; input. */
  "VUSB_DET": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: CODEC_CLK; output. */
  "CODEC_CLK": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GPIO2; bidirectional. */
  "GPIO2": "23",
  /** Physical pin 24: GPIO3; bidirectional. */
  "GPIO3": "24",
  /** Physical pin 25: GPIO4; bidirectional. */
  "GPIO4": "25",
  /** Physical pin 26: SDA; bidirectional. */
  "SDA": "26",
  /** Physical pin 27: SCL; output. */
  "SCL": "27",
  /** Physical pin 28: USB_D-; bidirectional. */
  "USB_D-": "28",
  /** Physical pin 29: USB_D+; bidirectional. */
  "USB_D+": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: RSVD; no_connect. */
  "RSVD_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RSVD; no_connect. */
  "RSVD_33": "33",
  /** Physical pin 34: I2S_WA; bidirectional. */
  "I2S_WA": "34",
  /** Physical pin 35: I2S_TXD; output. */
  "I2S_TXD": "35",
  /** Physical pin 36: I2S_CLK; output. */
  "I2S_CLK": "36",
  /** Physical pin 37: I2S_RXD; input. */
  "I2S_RXD": "37",
  /** Physical pin 38: SIM_CLK; output. */
  "SIM_CLK": "38",
  /** Physical pin 39: SIM_IO; bidirectional. */
  "SIM_IO": "39",
  /** Physical pin 40: SIM_RST; output. */
  "SIM_RST": "40",
  /** Physical pin 41: VSIM; power_out. */
  "VSIM": "41",
  /** Physical pin 42: SIM_DET; input. */
  "SIM_DET": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: RSVD; no_connect. */
  "RSVD_44": "44",
  /** Physical pin 45: RSVD; no_connect. */
  "RSVD_45": "45",
  /** Physical pin 46: RSVD; no_connect. */
  "RSVD_46": "46",
  /** Physical pin 47: RSVD; no_connect. */
  "RSVD_47": "47",
  /** Physical pin 48: RSVD; no_connect. */
  "RSVD_48": "48",
  /** Physical pin 49: RSVD; no_connect. */
  "RSVD_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: VCC; power_in. */
  "VCC_51": "51",
  /** Physical pin 52: VCC; passive. */
  "VCC_52": "52",
  /** Physical pin 53: VCC; passive. */
  "VCC_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT; passive. */
  "ANT": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: ANT_DET; input. */
  "ANT_DET": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
  /** Physical pin 66: GND; passive. */
  "GND_66": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GND; passive. */
  "GND_75": "75",
  /** Physical pin 76: GND; passive. */
  "GND_76": "76",
  /** Physical pin 77: GND; passive. */
  "GND_77": "77",
  /** Physical pin 78: GND; passive. */
  "GND_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GND; passive. */
  "GND_83": "83",
  /** Physical pin 84: GND; passive. */
  "GND_84": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GND; passive. */
  "GND_87": "87",
  /** Physical pin 88: GND; passive. */
  "GND_88": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: GND; passive. */
  "GND_93": "93",
  /** Physical pin 94: GND; passive. */
  "GND_94": "94",
  /** Physical pin 95: GND; passive. */
  "GND_95": "95",
  /** Physical pin 96: GND; passive. */
  "GND_96": "96",
}) {
  override schema = "RF_GSM:SARA-U260";
  override referencePrefix = "U";
}

/**
 * Ublox HSPA GSM Quad-Band Communication Module, AT Command Set, Designed for Europe, Asia and Others, LGA-96
 *
 * KiCad symbol: `RF_GSM:SARA-U270`. Reference prefix: `U`.
 * Footprint filters: ublox*SARA*.
 * @see https://www.u-blox.com/sites/default/files/SARA-U2_DataSheet_(UBX-13005287).pdf
 * Keywords: GSM HSPA 2G 3G.
 * Default footprint: RF_GSM:ublox_SARA_LGA-96.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SARA_U270 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: V_BCKP; power_out. */
  "V_BCKP": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: V_INT; power_out. */
  "V_INT": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: DSR; output. */
  "DSR": "6",
  /** Physical pin 7: RI; output. */
  "RI": "7",
  /** Physical pin 8: DCD; output. */
  "DCD": "8",
  /** Physical pin 9: DTR; input. */
  "DTR": "9",
  /** Physical pin 10: RTS; input. */
  "RTS": "10",
  /** Physical pin 11: CTS; output. */
  "CTS": "11",
  /** Physical pin 12: TXD; input. */
  "TXD": "12",
  /** Physical pin 13: RXD; output. */
  "RXD": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: PWR_ON; input. */
  "PWR_ON": "15",
  /** Physical pin 16: GPIO1; bidirectional. */
  "GPIO1": "16",
  /** Physical pin 17: VUSB_DET; input. */
  "VUSB_DET": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: CODEC_CLK; output. */
  "CODEC_CLK": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GPIO2; bidirectional. */
  "GPIO2": "23",
  /** Physical pin 24: GPIO3; bidirectional. */
  "GPIO3": "24",
  /** Physical pin 25: GPIO4; bidirectional. */
  "GPIO4": "25",
  /** Physical pin 26: SDA; bidirectional. */
  "SDA": "26",
  /** Physical pin 27: SCL; output. */
  "SCL": "27",
  /** Physical pin 28: USB_D-; bidirectional. */
  "USB_D-": "28",
  /** Physical pin 29: USB_D+; bidirectional. */
  "USB_D+": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: RSVD; no_connect. */
  "RSVD_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RSVD; no_connect. */
  "RSVD_33": "33",
  /** Physical pin 34: I2S_WA; bidirectional. */
  "I2S_WA": "34",
  /** Physical pin 35: I2S_TXD; output. */
  "I2S_TXD": "35",
  /** Physical pin 36: I2S_CLK; output. */
  "I2S_CLK": "36",
  /** Physical pin 37: I2S_RXD; input. */
  "I2S_RXD": "37",
  /** Physical pin 38: SIM_CLK; output. */
  "SIM_CLK": "38",
  /** Physical pin 39: SIM_IO; bidirectional. */
  "SIM_IO": "39",
  /** Physical pin 40: SIM_RST; output. */
  "SIM_RST": "40",
  /** Physical pin 41: VSIM; power_out. */
  "VSIM": "41",
  /** Physical pin 42: SIM_DET; input. */
  "SIM_DET": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: RSVD; no_connect. */
  "RSVD_44": "44",
  /** Physical pin 45: RSVD; no_connect. */
  "RSVD_45": "45",
  /** Physical pin 46: RSVD; no_connect. */
  "RSVD_46": "46",
  /** Physical pin 47: RSVD; no_connect. */
  "RSVD_47": "47",
  /** Physical pin 48: RSVD; no_connect. */
  "RSVD_48": "48",
  /** Physical pin 49: RSVD; no_connect. */
  "RSVD_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: VCC; power_in. */
  "VCC_51": "51",
  /** Physical pin 52: VCC; passive. */
  "VCC_52": "52",
  /** Physical pin 53: VCC; passive. */
  "VCC_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT; passive. */
  "ANT": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: ANT_DET; input. */
  "ANT_DET": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
  /** Physical pin 66: GND; passive. */
  "GND_66": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GND; passive. */
  "GND_75": "75",
  /** Physical pin 76: GND; passive. */
  "GND_76": "76",
  /** Physical pin 77: GND; passive. */
  "GND_77": "77",
  /** Physical pin 78: GND; passive. */
  "GND_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GND; passive. */
  "GND_83": "83",
  /** Physical pin 84: GND; passive. */
  "GND_84": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GND; passive. */
  "GND_87": "87",
  /** Physical pin 88: GND; passive. */
  "GND_88": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: GND; passive. */
  "GND_93": "93",
  /** Physical pin 94: GND; passive. */
  "GND_94": "94",
  /** Physical pin 95: GND; passive. */
  "GND_95": "95",
  /** Physical pin 96: GND; passive. */
  "GND_96": "96",
}) {
  override schema = "RF_GSM:SARA-U270";
  override referencePrefix = "U";
}

/**
 * Ublox HSPA GSM Quad-Band Communication Module, AT Command Set, Designed for America, LGA-96
 *
 * KiCad symbol: `RF_GSM:SARA-U280`. Reference prefix: `U`.
 * Footprint filters: ublox*SARA*.
 * @see https://www.u-blox.com/sites/default/files/SARA-U2_DataSheet_(UBX-13005287).pdf
 * Keywords: GSM HSPA 2G 3G.
 * Default footprint: RF_GSM:ublox_SARA_LGA-96.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SARA_U280 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: V_BCKP; power_out. */
  "V_BCKP": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: V_INT; power_out. */
  "V_INT": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: DSR; output. */
  "DSR": "6",
  /** Physical pin 7: RI; output. */
  "RI": "7",
  /** Physical pin 8: DCD; output. */
  "DCD": "8",
  /** Physical pin 9: DTR; input. */
  "DTR": "9",
  /** Physical pin 10: RTS; input. */
  "RTS": "10",
  /** Physical pin 11: CTS; output. */
  "CTS": "11",
  /** Physical pin 12: TXD; input. */
  "TXD": "12",
  /** Physical pin 13: RXD; output. */
  "RXD": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: PWR_ON; input. */
  "PWR_ON": "15",
  /** Physical pin 16: GPIO1; bidirectional. */
  "GPIO1": "16",
  /** Physical pin 17: VUSB_DET; input. */
  "VUSB_DET": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: CODEC_CLK; output. */
  "CODEC_CLK": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GPIO2; bidirectional. */
  "GPIO2": "23",
  /** Physical pin 24: GPIO3; bidirectional. */
  "GPIO3": "24",
  /** Physical pin 25: GPIO4; bidirectional. */
  "GPIO4": "25",
  /** Physical pin 26: SDA; bidirectional. */
  "SDA": "26",
  /** Physical pin 27: SCL; output. */
  "SCL": "27",
  /** Physical pin 28: USB_D-; bidirectional. */
  "USB_D-": "28",
  /** Physical pin 29: USB_D+; bidirectional. */
  "USB_D+": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: RSVD; no_connect. */
  "RSVD_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: RSVD; no_connect. */
  "RSVD_33": "33",
  /** Physical pin 34: I2S_WA; bidirectional. */
  "I2S_WA": "34",
  /** Physical pin 35: I2S_TXD; output. */
  "I2S_TXD": "35",
  /** Physical pin 36: I2S_CLK; output. */
  "I2S_CLK": "36",
  /** Physical pin 37: I2S_RXD; input. */
  "I2S_RXD": "37",
  /** Physical pin 38: SIM_CLK; output. */
  "SIM_CLK": "38",
  /** Physical pin 39: SIM_IO; bidirectional. */
  "SIM_IO": "39",
  /** Physical pin 40: SIM_RST; output. */
  "SIM_RST": "40",
  /** Physical pin 41: VSIM; power_out. */
  "VSIM": "41",
  /** Physical pin 42: SIM_DET; input. */
  "SIM_DET": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: RSVD; no_connect. */
  "RSVD_44": "44",
  /** Physical pin 45: RSVD; no_connect. */
  "RSVD_45": "45",
  /** Physical pin 46: RSVD; no_connect. */
  "RSVD_46": "46",
  /** Physical pin 47: RSVD; no_connect. */
  "RSVD_47": "47",
  /** Physical pin 48: RSVD; no_connect. */
  "RSVD_48": "48",
  /** Physical pin 49: RSVD; no_connect. */
  "RSVD_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: VCC; power_in. */
  "VCC_51": "51",
  /** Physical pin 52: VCC; passive. */
  "VCC_52": "52",
  /** Physical pin 53: VCC; passive. */
  "VCC_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: ANT; passive. */
  "ANT": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: ANT_DET; input. */
  "ANT_DET": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
  /** Physical pin 66: GND; passive. */
  "GND_66": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GND; passive. */
  "GND_75": "75",
  /** Physical pin 76: GND; passive. */
  "GND_76": "76",
  /** Physical pin 77: GND; passive. */
  "GND_77": "77",
  /** Physical pin 78: GND; passive. */
  "GND_78": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: GND; passive. */
  "GND_83": "83",
  /** Physical pin 84: GND; passive. */
  "GND_84": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GND; passive. */
  "GND_87": "87",
  /** Physical pin 88: GND; passive. */
  "GND_88": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: GND; passive. */
  "GND_93": "93",
  /** Physical pin 94: GND; passive. */
  "GND_94": "94",
  /** Physical pin 95: GND; passive. */
  "GND_95": "95",
  /** Physical pin 96: GND; passive. */
  "GND_96": "96",
}) {
  override schema = "RF_GSM:SARA-U280";
  override referencePrefix = "U";
}

/**
 * GSM, WCDMA,LTE, multi-mode and multi-band wireless smart module, 3.4V to 4.4V power supply, 40.5 x 40.5 x 2.8mm
 *
 * KiCad symbol: `RF_GSM:SE150A4`. Reference prefix: `U`.
 * Footprint filters: *Telit*SE150A4*.
 * @see https://atoma.spb.ru/sites/default/files/documents/telit_se150a4_smart_module_hardware_user_guide_r1.pdf
 * Keywords: GPRS LTE WCDMA.
 * Default footprint: RF_GSM:Telit_SE150A4.
 * Units: 7.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SE150A4 extends Component.withPins({
  /** Physical pin 1: VBAT_BB; passive. */
  "VBAT_BB_1": "1",
  /** Physical pin 2: VBAT_BB; passive. */
  "VBAT_BB_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 76: GND; passive. */
  "GND_76": "76",
  /** Physical pin 78: GND; passive. */
  "GND_78": "78",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 88: GND; passive. */
  "GND_88": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 111: LDO5_1V8; power_out. */
  "LDO5_1V8": "111",
  /** Physical pin 120: GND; passive. */
  "GND_120": "120",
  /** Physical pin 122: GND; passive. */
  "GND_122": "122",
  /** Physical pin 125: LDO6_1V8; power_out. */
  "LDO6_1V8": "125",
  /** Physical pin 126: VRTC; passive. */
  "VRTC": "126",
  /** Physical pin 127: CHARGE_SEL; output. */
  "CHARGE_SEL": "127",
  /** Physical pin 129: LDO17_2V85; power_out. */
  "LDO17_2V85": "129",
  /** Physical pin 130: GND; passive. */
  "GND_130": "130",
  /** Physical pin 132: GND; passive. */
  "GND_132": "132",
  /** Physical pin 133: VBAT_SNS; input. */
  "VBAT_SNS": "133",
  /** Physical pin 134: VBAT_THERM; passive. */
  "VBAT_THERM": "134",
  /** Physical pin 135: GND; passive. */
  "GND_135": "135",
  /** Physical pin 140: GND; passive. */
  "GND_140": "140",
  /** Physical pin 143: GND; passive. */
  "GND_143": "143",
  /** Physical pin 144: GND; passive. */
  "GND_144": "144",
  /** Physical pin 145: VBAT_RF; power_in. */
  "VBAT_RF_145": "145",
  /** Physical pin 146: VBAT_RF; passive. */
  "VBAT_RF_146": "146",
  /** Physical pin 147: GND; passive. */
  "GND_147": "147",
  /** Physical pin 148: GND; passive. */
  "GND_148": "148",
  /** Physical pin 149: GND; passive. */
  "GND_149": "149",
  /** Physical pin 150: GND; passive. */
  "GND_150": "150",
  /** Physical pin 151: SMPS_S3_1V35; power_out. */
  "SMPS_S3_1V35": "151",
  /** Physical pin 153: LDO10_2V85; power_out. */
  "LDO10_2V85": "153",
  /** Physical pin 160: GND; passive. */
  "GND_160": "160",
  /** Physical pin 161: GND; passive. */
  "GND_161": "161",
  /** Physical pin 162: GND; passive. */
  "GND_162": "162",
  /** Physical pin 163: GND; passive. */
  "GND_163": "163",
  /** Physical pin 164: GND; passive. */
  "GND_164": "164",
  /** Physical pin 165: GND; passive. */
  "GND_165": "165",
  /** Physical pin 166: GND; passive. */
  "GND_166": "166",
  /** Physical pin 167: GND; passive. */
  "GND_167": "167",
  /** Physical pin 168: GND; passive. */
  "GND_168": "168",
  /** Physical pin 169: GND; passive. */
  "GND_169": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: GND; passive. */
  "GND_171": "171",
  /** Physical pin 172: GND; passive. */
  "GND_172": "172",
  /** Physical pin 173: GND; passive. */
  "GND_173": "173",
  /** Physical pin 174: GND; passive. */
  "GND_174": "174",
  /** Physical pin 175: GND; passive. */
  "GND_175": "175",
  /** Physical pin 176: GND; passive. */
  "GND_176": "176",
  /** Physical pin 177: GND; passive. */
  "GND_177": "177",
  /** Physical pin 178: GND; passive. */
  "GND_178": "178",
  /** Physical pin 180: GND; passive. */
  "GND_180": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: GND; passive. */
  "GND_182": "182",
  /** Physical pin 184: GND; passive. */
  "GND_184": "184",
  /** Physical pin 185: GND; passive. */
  "GND_185": "185",
  /** Physical pin 186: GND; passive. */
  "GND_186": "186",
  /** Physical pin 187: RESERVED; no_connect. */
  "RESERVED_187": "187",
  /** Physical pin 188: GND; passive. */
  "GND_188": "188",
  /** Physical pin 189: GND; passive. */
  "GND_189": "189",
  /** Physical pin 190: RESERVED; no_connect. */
  "RESERVED_190": "190",
  /** Physical pin 191: RESERVED; no_connect. */
  "RESERVED_191": "191",
  /** Physical pin 192: GND; passive. */
  "GND_192": "192",
  /** Physical pin 193: GND; passive. */
  "GND_193": "193",
  /** Physical pin 195: LDO16_2V85; power_out. */
  "LDO16_2V85": "195",
  /** Physical pin 196: VREF_BATT_THERM; bidirectional. */
  "VREF_BATT_THERM": "196",
  /** Physical pin 197: CHG_RED_LED; input. */
  "CHG_RED_LED": "197",
  /** Physical pin 198: GND; passive. */
  "GND_198": "198",
  /** Physical pin 199: RESERVED; no_connect. */
  "RESERVED_199": "199",
  /** Physical pin 200: GND; passive. */
  "GND_200": "200",
  /** Physical pin 201: GND; passive. */
  "GND_201": "201",
  /** Physical pin 202: RESERVED; no_connect. */
  "RESERVED_202": "202",
  /** Physical pin 203: RESERVED; no_connect. */
  "RESERVED_203": "203",
  /** Physical pin 204: RESERVED; no_connect. */
  "RESERVED_204": "204",
  /** Physical pin 205: RESERVED; no_connect. */
  "RESERVED_205": "205",
  /** Physical pin 206: RESERVED; no_connect. */
  "RESERVED_206": "206",
  /** Physical pin 207: RESERVED; no_connect. */
  "RESERVED_207": "207",
  /** Physical pin 208: GND; passive. */
  "GND_208": "208",
  /** Physical pin 209: GND; passive. */
  "GND_209": "209",
  /** Physical pin 13: USB_DM; bidirectional. */
  "USB_DM": "13",
  /** Physical pin 14: USB_DP; bidirectional. */
  "USB_DP": "14",
  /** Physical pin 16: USB_ID; input. */
  "USB_ID": "16",
  /** Physical pin 32: SD_LDO12; power_out. */
  "SD_LDO12": "32",
  /** Physical pin 34: UART1_TXD; output. */
  "UART1_TXD": "34",
  /** Physical pin 35: UART1_RXD; input. */
  "UART1_RXD": "35",
  /** Physical pin 36: UART1_CTS; input. */
  "UART1_CTS": "36",
  /** Physical pin 37: UART1_RTS; output. */
  "UART1_RTS": "37",
  /** Physical pin 38: SD_LDO11; power_out. */
  "SD_LDO11": "38",
  /** Physical pin 39: SD_CLK; output. */
  "SD_CLK": "39",
  /** Physical pin 40: SD_CMD; output. */
  "SD_CMD": "40",
  /** Physical pin 41: SD_DATA0; bidirectional. */
  "SD_DATA0": "41",
  /** Physical pin 42: SD_DATA1; bidirectional. */
  "SD_DATA1": "42",
  /** Physical pin 43: SD_DATA2; bidirectional. */
  "SD_DATA2": "43",
  /** Physical pin 44: SD_DATA3; bidirectional. */
  "SD_DATA3": "44",
  /** Physical pin 45: SD_DET; input. */
  "SD_DET": "45",
  /** Physical pin 46: USB_BOOT; input. */
  "USB_BOOT": "46",
  /** Physical pin 93: UART2_RXD; input. */
  "UART2_RXD": "93",
  /** Physical pin 94: UART2_TXD; output. */
  "UART2_TXD": "94",
  /** Physical pin 141: USB_VBUS; power_in. */
  "USB_VBUS_141": "141",
  /** Physical pin 142: USB_VBUS; passive. */
  "USB_VBUS_142": "142",
  /** Physical pin 17: USIM2_DET; input. */
  "USIM2_DET": "17",
  /** Physical pin 18: USIM2_RST; output. */
  "USIM2_RST": "18",
  /** Physical pin 19: USIM2_CLK; output. */
  "USIM2_CLK": "19",
  /** Physical pin 20: USIM2_DATA; bidirectional. */
  "USIM2_DATA": "20",
  /** Physical pin 21: USIM2_VDD; power_out. */
  "USIM2_VDD": "21",
  /** Physical pin 22: USIM1_DET; input. */
  "USIM1_DET": "22",
  /** Physical pin 23: USIM1_RST; output. */
  "USIM1_RST": "23",
  /** Physical pin 24: USIM1_CLK; output. */
  "USIM1_CLK": "24",
  /** Physical pin 25: USIM1_DATA; bidirectional. */
  "USIM1_DATA": "25",
  /** Physical pin 26: USIM1_VDD; power_out. */
  "USIM1_VDD": "26",
  /** Physical pin 29: PWM; output. */
  "PWM": "29",
  /** Physical pin 30: ~{TP_INT}; input. */
  "~{TP_INT}": "30",
  /** Physical pin 31: ~{TP_RST}; output. */
  "~{TP_RST}": "31",
  /** Physical pin 47: TP_I2C_SCL; output. */
  "TP_I2C_SCL": "47",
  /** Physical pin 48: TP_I2C_SDA; bidirectional. */
  "TP_I2C_SDA": "48",
  /** Physical pin 49: ~{LCD_RST}; output. */
  "~{LCD_RST}": "49",
  /** Physical pin 50: LCD_TE; input. */
  "LCD_TE": "50",
  /** Physical pin 52: MIPI_DSI_CLK_M; output. */
  "MIPI_DSI_CLK_M": "52",
  /** Physical pin 53: MIPI_DSI_CLK_P; output. */
  "MIPI_DSI_CLK_P": "53",
  /** Physical pin 54: MIPI_DSI_LANE0M; output. */
  "MIPI_DSI_LANE0M": "54",
  /** Physical pin 55: MIPI_DSI_LANE0P; output. */
  "MIPI_DSI_LANE0P": "55",
  /** Physical pin 56: MIPI_DSI_LANE1M; output. */
  "MIPI_DSI_LANE1M": "56",
  /** Physical pin 57: MIPI_DSI_LANE1P; output. */
  "MIPI_DSI_LANE1P": "57",
  /** Physical pin 58: MIPI_DSI_LANE2M; output. */
  "MIPI_DSI_LANE2M": "58",
  /** Physical pin 59: MIPI_DSI_LANE2P; output. */
  "MIPI_DSI_LANE2P": "59",
  /** Physical pin 60: MIPI_DSI_LANE3M; output. */
  "MIPI_DSI_LANE3M": "60",
  /** Physical pin 61: MIPI_DSI_LANE3P; output. */
  "MIPI_DSI_LANE3P": "61",
  /** Physical pin 63: MIPI_CSI0_CLK_M; output. */
  "MIPI_CSI0_CLK_M": "63",
  /** Physical pin 64: MIPI_CSI0_CLK_P; output. */
  "MIPI_CSI0_CLK_P": "64",
  /** Physical pin 65: MIPI_CSI0_LN0_M; input. */
  "MIPI_CSI0_LN0_M": "65",
  /** Physical pin 66: MIPI_CSI0_LN0_P; input. */
  "MIPI_CSI0_LN0_P": "66",
  /** Physical pin 67: MIPI_CSI0_LN1_M; input. */
  "MIPI_CSI0_LN1_M": "67",
  /** Physical pin 68: MIPI_CSI0_LN1_P; input. */
  "MIPI_CSI0_LN1_P": "68",
  /** Physical pin 70: MIPI_CSI1_CLK_M; output. */
  "MIPI_CSI1_CLK_M": "70",
  /** Physical pin 71: MIPI_CSI1_CLK_P; output. */
  "MIPI_CSI1_CLK_P": "71",
  /** Physical pin 72: MIPI_CSI1_LN0_M; input. */
  "MIPI_CSI1_LN0_M": "72",
  /** Physical pin 73: MIPI_CSI1_LN0_P; input. */
  "MIPI_CSI1_LN0_P": "73",
  /** Physical pin 74: CAM0_MCLK; output. */
  "CAM0_MCLK": "74",
  /** Physical pin 75: CAM1_MCLK; output. */
  "CAM1_MCLK": "75",
  /** Physical pin 79: ~{CAM0_RST}; output. */
  "~{CAM0_RST}": "79",
  /** Physical pin 80: CAM0_PWDN; output. */
  "CAM0_PWDN": "80",
  /** Physical pin 81: ~{CAM1_RST}; output. */
  "~{CAM1_RST}": "81",
  /** Physical pin 82: CAM1_PWDN; output. */
  "CAM1_PWDN": "82",
  /** Physical pin 83: CAM_I2C_SCL; output. */
  "CAM_I2C_SCL": "83",
  /** Physical pin 84: CAM_I2C_SDA; bidirectional. */
  "CAM_I2C_SDA": "84",
  /** Physical pin 154: MIPI_CSI1_LN1_P; input. */
  "MIPI_CSI1_LN1_P": "154",
  /** Physical pin 155: MIPI_CSI1_LN1_M; input. */
  "MIPI_CSI1_LN1_M": "155",
  /** Physical pin 156: MIPI_CSI0_LN2_P; input. */
  "MIPI_CSI0_LN2_P": "156",
  /** Physical pin 157: MIPI_CSI0_LN2_M; input. */
  "MIPI_CSI0_LN2_M": "157",
  /** Physical pin 158: MIPI_CSI0_LN3_M; input. */
  "MIPI_CSI0_LN3_M": "158",
  /** Physical pin 159: MIPI_CSI0_LN3_P; input. */
  "MIPI_CSI0_LN3_P": "159",
  /** Physical pin 28: ~{VIB_DRV}; output. */
  "~{VIB_DRV}": "28",
  /** Physical pin 33: GPIO_61; bidirectional. */
  "GPIO_61": "33",
  /** Physical pin 90: GPIO_94; bidirectional. */
  "GPIO_94": "90",
  /** Physical pin 91: SENSOR_I2C_SCL; output. */
  "SENSOR_I2C_SCL": "91",
  /** Physical pin 92: SENSOR_I2C_SDA; bidirectional. */
  "SENSOR_I2C_SDA": "92",
  /** Physical pin 95: ~{KEY_VOL_UP}; input. */
  "~{KEY_VOL_UP}": "95",
  /** Physical pin 96: ~{KEY_VOL_DOWN}; input. */
  "~{KEY_VOL_DOWN}": "96",
  /** Physical pin 99: GPIO_33; bidirectional. */
  "GPIO_33": "99",
  /** Physical pin 100: GPIO_34; bidirectional. */
  "GPIO_34": "100",
  /** Physical pin 101: GPIO_108; bidirectional. */
  "GPIO_108": "101",
  /** Physical pin 102: GPIO_107; bidirectional. */
  "GPIO_107": "102",
  /** Physical pin 103: GPIO_85; bidirectional. */
  "GPIO_85": "103",
  /** Physical pin 104: GPIO_86; bidirectional. */
  "GPIO_86": "104",
  /** Physical pin 105: GPIO_87; bidirectional. */
  "GPIO_87": "105",
  /** Physical pin 106: GPIO_88; bidirectional. */
  "GPIO_88": "106",
  /** Physical pin 107: ~{ALSP_INT}; input. */
  "~{ALSP_INT}": "107",
  /** Physical pin 108: ~{MAG_INT}; input. */
  "~{MAG_INT}": "108",
  /** Physical pin 109: ~{ACCL_INT2}; input. */
  "~{ACCL_INT2}": "109",
  /** Physical pin 110: ~{ACCL_INT1}; input. */
  "~{ACCL_INT1}": "110",
  /** Physical pin 112: GPIO_7; bidirectional. */
  "GPIO_7": "112",
  /** Physical pin 113: GPIO_6; bidirectional. */
  "GPIO_6": "113",
  /** Physical pin 114: PWRKEY; input. */
  "PWRKEY": "114",
  /** Physical pin 115: GPIO_25; bidirectional. */
  "GPIO_25": "115",
  /** Physical pin 116: GPIO_23; bidirectional. */
  "GPIO_23": "116",
  /** Physical pin 117: GPIO_22; bidirectional. */
  "GPIO_22": "117",
  /** Physical pin 118: GPIO_21; bidirectional. */
  "GPIO_21": "118",
  /** Physical pin 119: GPIO_20; bidirectional. */
  "GPIO_20": "119",
  /** Physical pin 123: GPIO_8; bidirectional. */
  "GPIO_8": "123",
  /** Physical pin 124: GPIO_9; bidirectional. */
  "GPIO_9": "124",
  /** Physical pin 128: ADC; input. */
  "ADC": "128",
  /** Physical pin 179: ~{RESET}; input. */
  "~{RESET}": "179",
  /** Physical pin 183: ADC2; input. */
  "ADC2": "183",
  /** Physical pin 4: MIC1P; input. */
  "MIC1P": "4",
  /** Physical pin 5: GND_MIC; power_in. */
  "GND_MIC": "5",
  /** Physical pin 6: MIC2P; input. */
  "MIC2P": "6",
  /** Physical pin 8: EAR_P; output. */
  "EAR_P": "8",
  /** Physical pin 9: EAR_N; output. */
  "EAR_N": "9",
  /** Physical pin 10: SPK_P; output. */
  "SPK_P": "10",
  /** Physical pin 11: SPK_N; output. */
  "SPK_N": "11",
  /** Physical pin 97: DMIC_CLK; output. */
  "DMIC_CLK": "97",
  /** Physical pin 98: DMIC_DATA; bidirectional. */
  "DMIC_DATA": "98",
  /** Physical pin 136: HPH_R; output. */
  "HPH_R": "136",
  /** Physical pin 137: HPH_GND; power_in. */
  "HPH_GND": "137",
  /** Physical pin 138: HPH_L; output. */
  "HPH_L": "138",
  /** Physical pin 139: HS_DET; input. */
  "HS_DET": "139",
  /** Physical pin 152: MIC3P; input. */
  "MIC3P": "152",
  /** Physical pin 194: MIC_BIAS1; output. */
  "MIC_BIAS1": "194",
  /** Physical pin 210: MIC_BIAS2; output. */
  "MIC_BIAS2": "210",
  /** Physical pin 77: ANT-WIFI/BT; passive. */
  "ANT-WIFI/BT": "77",
  /** Physical pin 87: ANT_TRX; passive. */
  "ANT_TRX": "87",
  /** Physical pin 121: ANT_GNSS; passive. */
  "ANT_GNSS": "121",
  /** Physical pin 131: ANT_DRX; passive. */
  "ANT_DRX": "131",
}) {
  override schema = "RF_GSM:SE150A4";
  override referencePrefix = "U";
}

/**
 * NB-IoT B1/B3/B5/B8/B20/B28, AT Command Set
 *
 * KiCad symbol: `RF_GSM:SIM7020E`. Reference prefix: `U`.
 * Footprint filters: SIMCom*SIM800C*.
 * @see https://simcom.ee/documents/SIM7020/SIM7020%20Hardware%20Design_V1.02.pdf
 * Keywords: NB-IoT Data SMS.
 * Default footprint: RF_GSM:SIMCom_SIM800C.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SIM7020E extends Component.withPins({
  /** Physical pin 1: UART1_TXD; output. */
  "UART1_TXD": "1",
  /** Physical pin 2: UART1_RXD; input. */
  "UART1_RXD": "2",
  /** Physical pin 3: UART1_RTS; input. */
  "UART1_RTS": "3",
  /** Physical pin 4: UART1_CTS; output. */
  "UART1_CTS": "4",
  /** Physical pin 5: UART1_DCD; output. */
  "UART1_DCD": "5",
  /** Physical pin 6: UART1_DTR; input. */
  "UART1_DTR": "6",
  /** Physical pin 7: UART1_RI; output. */
  "UART1_RI": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: VDD_3V3; power_out. */
  "VDD_3V3": "9",
  /** Physical pin 10: GPIO0; bidirectional. */
  "GPIO0": "10",
  /** Physical pin 11: RTC_GPIO0; output. */
  "RTC_GPIO0": "11",
  /** Physical pin 12: RTC_EINT; input. */
  "RTC_EINT": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: SIM_DET; input. */
  "SIM_DET": "14",
  /** Physical pin 15: SIM_DATA; bidirectional. */
  "SIM_DATA": "15",
  /** Physical pin 16: SIM_CLK; output. */
  "SIM_CLK": "16",
  /** Physical pin 17: SIM_RST; output. */
  "SIM_RST": "17",
  /** Physical pin 18: SIM_VDD; power_out. */
  "SIM_VDD": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: UART2_TXD; output. */
  "UART2_TXD": "22",
  /** Physical pin 23: UART2_RXD; input. */
  "UART2_RXD": "23",
  /** Physical pin 24: USB_VBUS; input. */
  "USB_VBUS": "24",
  /** Physical pin 25: USB_DP; bidirectional. */
  "USB_DP": "25",
  /** Physical pin 26: USB_DM; bidirectional. */
  "USB_DM": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: ~{RESET}; input. */
  "~{RESET}": "28",
  /** Physical pin 29: GPIO1; bidirectional. */
  "GPIO1": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: ANT; passive. */
  "ANT": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: VBAT; power_in. */
  "VBAT_34": "34",
  /** Physical pin 35: VBAT; passive. */
  "VBAT_35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: ADC; input. */
  "ADC": "38",
  /** Physical pin 39: ~{PWRKEY}; input. */
  "~{PWRKEY}": "39",
  /** Physical pin 40: VDD_EXT; power_out. */
  "VDD_EXT": "40",
  /** Physical pin 41: NETLIGHT; output. */
  "NETLIGHT": "41",
  /** Physical pin 42: STATUS; output. */
  "STATUS": "42",
}) {
  override schema = "RF_GSM:SIM7020E";
  override referencePrefix = "U";
}

/**
 * NB-IoT B1/B3/B5/B8, AT Command Set
 *
 * KiCad symbol: `RF_GSM:SIM7020C`. Reference prefix: `U`.
 * Footprint filters: SIMCom*SIM800C*.
 * @see https://simcom.ee/documents/SIM7020/SIM7020%20Hardware%20Design_V1.02.pdf
 * Keywords: NB-IoT Data SMS.
 * Default footprint: RF_GSM:SIMCom_SIM800C.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SIM7020C extends Component.withPins({
  /** Physical pin 1: UART1_TXD; output. */
  "UART1_TXD": "1",
  /** Physical pin 2: UART1_RXD; input. */
  "UART1_RXD": "2",
  /** Physical pin 3: UART1_RTS; input. */
  "UART1_RTS": "3",
  /** Physical pin 4: UART1_CTS; output. */
  "UART1_CTS": "4",
  /** Physical pin 5: UART1_DCD; output. */
  "UART1_DCD": "5",
  /** Physical pin 6: UART1_DTR; input. */
  "UART1_DTR": "6",
  /** Physical pin 7: UART1_RI; output. */
  "UART1_RI": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: VDD_3V3; power_out. */
  "VDD_3V3": "9",
  /** Physical pin 10: GPIO0; bidirectional. */
  "GPIO0": "10",
  /** Physical pin 11: RTC_GPIO0; output. */
  "RTC_GPIO0": "11",
  /** Physical pin 12: RTC_EINT; input. */
  "RTC_EINT": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: SIM_DET; input. */
  "SIM_DET": "14",
  /** Physical pin 15: SIM_DATA; bidirectional. */
  "SIM_DATA": "15",
  /** Physical pin 16: SIM_CLK; output. */
  "SIM_CLK": "16",
  /** Physical pin 17: SIM_RST; output. */
  "SIM_RST": "17",
  /** Physical pin 18: SIM_VDD; power_out. */
  "SIM_VDD": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: UART2_TXD; output. */
  "UART2_TXD": "22",
  /** Physical pin 23: UART2_RXD; input. */
  "UART2_RXD": "23",
  /** Physical pin 24: USB_VBUS; input. */
  "USB_VBUS": "24",
  /** Physical pin 25: USB_DP; bidirectional. */
  "USB_DP": "25",
  /** Physical pin 26: USB_DM; bidirectional. */
  "USB_DM": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: ~{RESET}; input. */
  "~{RESET}": "28",
  /** Physical pin 29: GPIO1; bidirectional. */
  "GPIO1": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: ANT; passive. */
  "ANT": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: VBAT; power_in. */
  "VBAT_34": "34",
  /** Physical pin 35: VBAT; passive. */
  "VBAT_35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: ADC; input. */
  "ADC": "38",
  /** Physical pin 39: ~{PWRKEY}; input. */
  "~{PWRKEY}": "39",
  /** Physical pin 40: VDD_EXT; power_out. */
  "VDD_EXT": "40",
  /** Physical pin 41: NETLIGHT; output. */
  "NETLIGHT": "41",
  /** Physical pin 42: STATUS; output. */
  "STATUS": "42",
}) {
  override schema = "RF_GSM:SIM7020C";
  override referencePrefix = "U";
}

/**
 * GSM Quad-Band Communication Module, GPRS, Audio Engine, AT Command Set, Bluetooth is Optional
 *
 * KiCad symbol: `RF_GSM:SIM800C`. Reference prefix: `U`.
 * Footprint filters: SIMCom*SIM800C*.
 * @see http://simcom.ee/documents/SIM800C/SIM800C_Hardware_Design_V1.05.pdf
 * Keywords: GSM GPRS Quad-Band SMS.
 * Default footprint: RF_GSM:SIMCom_SIM800C.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SIM800C extends Component.withPins({
  /** Physical pin 1: UART1_TXD; output. */
  "UART1_TXD": "1",
  /** Physical pin 2: UART1_RXD; input. */
  "UART1_RXD": "2",
  /** Physical pin 3: UART1_RTS; input. */
  "UART1_RTS": "3",
  /** Physical pin 4: UART1_CTS; output. */
  "UART1_CTS": "4",
  /** Physical pin 5: UART1_DCD; output. */
  "UART1_DCD": "5",
  /** Physical pin 6: UART1_DTR; input. */
  "UART1_DTR": "6",
  /** Physical pin 7: UART1_RI; output. */
  "UART1_RI": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: MICP; input. */
  "MICP": "9",
  /** Physical pin 10: MICN; input. */
  "MICN": "10",
  /** Physical pin 11: SPKP; output. */
  "SPKP": "11",
  /** Physical pin 12: SPKN; output. */
  "SPKN": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: SIM_DET; input. */
  "SIM_DET": "14",
  /** Physical pin 15: SIM_DATA; bidirectional. */
  "SIM_DATA": "15",
  /** Physical pin 16: SIM_CLK; output. */
  "SIM_CLK": "16",
  /** Physical pin 17: SIM_RST; output. */
  "SIM_RST": "17",
  /** Physical pin 18: SIM_VDD; power_out. */
  "SIM_VDD": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: BT_ANT; passive. */
  "BT_ANT": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: UART2_TXD; output. */
  "UART2_TXD": "22",
  /** Physical pin 23: UART2_RXD; input. */
  "UART2_RXD": "23",
  /** Physical pin 24: USB_VBUS; input. */
  "USB_VBUS": "24",
  /** Physical pin 25: USB_DP; bidirectional. */
  "USB_DP": "25",
  /** Physical pin 26: USB_DM; bidirectional. */
  "USB_DM": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: VRTC; power_in. */
  "VRTC": "28",
  /** Physical pin 29: RF_SYNC; output. */
  "RF_SYNC": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GSM_ANT; passive. */
  "GSM_ANT": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: VBAT; power_in. */
  "VBAT_34": "34",
  /** Physical pin 35: VBAT; passive. */
  "VBAT_35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: ADC; input. */
  "ADC": "38",
  /** Physical pin 39: ~{PWRKEY}; input. */
  "~{PWRKEY}": "39",
  /** Physical pin 40: VDD_EXT; power_out. */
  "VDD_EXT": "40",
  /** Physical pin 41: NETLIGHT; output. */
  "NETLIGHT": "41",
  /** Physical pin 42: STATUS; output. */
  "STATUS": "42",
}) {
  override schema = "RF_GSM:SIM800C";
  override referencePrefix = "U";
}

/**
 * GSM Quad-Band Communication Module, GPRS, Audio Engine, AT Command Set
 *
 * KiCad symbol: `RF_GSM:SIM900`. Reference prefix: `U`.
 * Footprint filters: SIMCom*SIM900*.
 * @see http://simcom.ee/documents/SIM900/SIM900_Hardware%20Design_V2.05.pdf
 * Keywords: GSM GPRS Quad-Band SMS FAX.
 * Default footprint: RF_GSM:SIMCom_SIM900.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SIM900 extends Component.withPins({
  /** Physical pin 1: PWRKEY; input. */
  "PWRKEY": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: DTR; input. */
  "DTR": "3",
  /** Physical pin 4: RI; output. */
  "RI": "4",
  /** Physical pin 5: DCD; output. */
  "DCD": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: CTS; output. */
  "CTS": "7",
  /** Physical pin 8: RTS; input. */
  "RTS": "8",
  /** Physical pin 9: TXD; output. */
  "TXD": "9",
  /** Physical pin 10: RXD; input. */
  "RXD": "10",
  /** Physical pin 11: DISP_CLK; output. */
  "DISP_CLK": "11",
  /** Physical pin 12: DISP_DATA; bidirectional. */
  "DISP_DATA": "12",
  /** Physical pin 13: DISP_D/C; output. */
  "DISP_D/C": "13",
  /** Physical pin 14: DISP_CS; output. */
  "DISP_CS": "14",
  /** Physical pin 15: VDD_EXT; power_out. */
  "VDD_EXT": "15",
  /** Physical pin 16: ~{RESET}; input. */
  "~{RESET}": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: MIC_P; input. */
  "MIC_P": "19",
  /** Physical pin 20: MIC_N; input. */
  "MIC_N": "20",
  /** Physical pin 21: SPK_P; output. */
  "SPK_P": "21",
  /** Physical pin 22: SPK_N; output. */
  "SPK_N": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: ADC; input. */
  "ADC": "25",
  /** Physical pin 26: VRTC; power_in. */
  "VRTC": "26",
  /** Physical pin 27: DBG_TXD; output. */
  "DBG_TXD": "27",
  /** Physical pin 28: DBG_RXD; input. */
  "DBG_RXD": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: SIM_VDD; power_out. */
  "SIM_VDD": "30",
  /** Physical pin 31: SIM_DATA; bidirectional. */
  "SIM_DATA": "31",
  /** Physical pin 32: SIM_CLK; output. */
  "SIM_CLK": "32",
  /** Physical pin 33: SIM_RST; output. */
  "SIM_RST": "33",
  /** Physical pin 34: SIM_PRESENCE; input. */
  "SIM_PRESENCE": "34",
  /** Physical pin 35: PWM1; output. */
  "PWM1": "35",
  /** Physical pin 36: PWM2; output. */
  "PWM2": "36",
  /** Physical pin 37: SDA; bidirectional. */
  "SDA": "37",
  /** Physical pin 38: SCL; output. */
  "SCL": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: GPIO1/KBR4; bidirectional. */
  "GPIO1/KBR4": "40",
  /** Physical pin 41: GPIO2/KBR3; bidirectional. */
  "GPIO2/KBR3": "41",
  /** Physical pin 42: GPIO3/KBR2; bidirectional. */
  "GPIO3/KBR2": "42",
  /** Physical pin 43: GPIO4/KBR1; bidirectional. */
  "GPIO4/KBR1": "43",
  /** Physical pin 44: GPIO5/KBR0; bidirectional. */
  "GPIO5/KBR0": "44",
  /** Physical pin 45: GND; passive. */
  "GND_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: GPIO6/KBC4; bidirectional. */
  "GPIO6/KBC4": "47",
  /** Physical pin 48: GPIO7/KBC3; bidirectional. */
  "GPIO7/KBC3": "48",
  /** Physical pin 49: GPIO8/KBC2; bidirectional. */
  "GPIO8/KBC2": "49",
  /** Physical pin 50: GPIO9/KBC1; bidirectional. */
  "GPIO9/KBC1": "50",
  /** Physical pin 51: GPIO10; bidirectional. */
  "GPIO10": "51",
  /** Physical pin 52: NETLIGHT; output. */
  "NETLIGHT": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: GND; passive. */
  "GND_54": "54",
  /** Physical pin 55: VBAT; power_in. */
  "VBAT_55": "55",
  /** Physical pin 56: VBAT; passive. */
  "VBAT_56": "56",
  /** Physical pin 57: VBAT; passive. */
  "VBAT_57": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: RF_ANT; passive. */
  "RF_ANT": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
  /** Physical pin 66: STATUS; output. */
  "STATUS": "66",
  /** Physical pin 67: GPIO11; bidirectional. */
  "GPIO11": "67",
  /** Physical pin 68: GPIO12; bidirectional. */
  "GPIO12": "68",
}) {
  override schema = "RF_GSM:SIM900";
  override referencePrefix = "U";
}

/**
 * Telit 3G Module (GSM/GPRS/UMTS/HSPA), 3.8V, Digital voice and SMS, I2S, USB 2.0, UART, SPI. Manufacturer package
 *
 * KiCad symbol: `RF_GSM:UL865`. Reference prefix: `U`.
 * Footprint filters: *Telit*xL865*.
 * @see http://www.telit.com/fileadmin/user_upload/products/Downloads/3G/Telit_UL865_Hardware_User_Guide_r8.pdf
 * Keywords: gsm 3g gprs umts hspa.
 * Default footprint: RF_GSM:Telit_xL865.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class UL865 extends Component.withPins({
  /** Physical pin 1: C109/DCD/GPO; output. */
  "C109/DCD/GPO": "1",
  /** Physical pin 2: C125/RING/GPO; output. */
  "C125/RING/GPO": "2",
  /** Physical pin 3: C107/DSR/GPO; output. */
  "C107/DSR/GPO": "3",
  /** Physical pin 4: C108/DTR/GPI; input. */
  "C108/DTR/GPI": "4",
  /** Physical pin 5: C105/RTS/GPI; input. */
  "C105/RTS/GPI": "5",
  /** Physical pin 6: C106/CTS/GPO; output. */
  "C106/CTS/GPO": "6",
  /** Physical pin 7: C103/TXD; input. */
  "C103/TXD": "7",
  /** Physical pin 8: C104/RXD; output. */
  "C104/RXD": "8",
  /** Physical pin 9: SIMVCC; power_out. */
  "SIMVCC": "9",
  /** Physical pin 10: SIMRST; output. */
  "SIMRST": "10",
  /** Physical pin 11: SIMCLK; output. */
  "SIMCLK": "11",
  /** Physical pin 12: SIMIO; bidirectional. */
  "SIMIO": "12",
  /** Physical pin 13: ADC_IN1; input. */
  "ADC_IN1": "13",
  /** Physical pin 14: ADC_IN2; input. */
  "ADC_IN2": "14",
  /** Physical pin 15: DAC_OUT1; output. */
  "DAC_OUT1": "15",
  /** Physical pin 16: VUSB; input. */
  "VUSB": "16",
  /** Physical pin 17: USB_D-; bidirectional. */
  "USB_D-": "17",
  /** Physical pin 18: USB_D+; bidirectional. */
  "USB_D+": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: AGND; power_in. */
  "AGND": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: SPI_CLK; bidirectional. */
  "SPI_CLK": "25",
  /** Physical pin 26: GPIO8/STAT_LED; bidirectional. */
  "GPIO8/STAT_LED": "26",
  /** Physical pin 27: GPIO7/SPI_MRDY; bidirectional. */
  "GPIO7/SPI_MRDY": "27",
  /** Physical pin 28: GPIO6/SPI_SRDY; bidirectional. */
  "GPIO6/SPI_SRDY": "28",
  /** Physical pin 29: GPIO5; bidirectional. */
  "GPIO5": "29",
  /** Physical pin 30: VRTC; power_out. */
  "VRTC": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: GND; power_in. */
  "GND_32": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: ANTENNA; bidirectional. */
  "ANTENNA": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: VBATT_PA; power_in. */
  "VBATT_PA": "37",
  /** Physical pin 38: VBATT; power_in. */
  "VBATT": "38",
  /** Physical pin 39: GPIO4/DVI_CLK; bidirectional. */
  "GPIO4/DVI_CLK": "39",
  /** Physical pin 40: GPIO3/DVI_TX; bidirectional. */
  "GPIO3/DVI_TX": "40",
  /** Physical pin 41: GPIO2/JDR/DVI_RX; bidirectional. */
  "GPIO2/JDR/DVI_RX": "41",
  /** Physical pin 42: GPIO1/DVI_WA0; bidirectional. */
  "GPIO1/DVI_WA0": "42",
  /** Physical pin 43: V_AUX/PWRMON; power_out. */
  "V_AUX/PWRMON": "43",
  /** Physical pin 44: RXD_AUX/SPI_MISO; bidirectional. */
  "RXD_AUX/SPI_MISO": "44",
  /** Physical pin 45: TXD_AUX/SPI_MOSI; bidirectional. */
  "TXD_AUX/SPI_MOSI": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: ~{RESET}; input. */
  "~{RESET}": "47",
  /** Physical pin 48: NC; no_connect. */
  "NC_48": "48",
}) {
  override schema = "RF_GSM:UL865";
  override referencePrefix = "U";
}

