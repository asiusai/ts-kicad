// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Automotive ARM7TDMI-S-based Microcontroller, LQFP-144
 *
 * KiCad symbol: `MCU_NXP_MAC7100:MAC7101`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MAC7100EC.pdf
 * Keywords: ARM7TDMI-S MCU.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAC7101 extends Component.withPins({
  /** Physical pin 1: PG4/CANTXD_A; bidirectional. */
  "PG4/CANTXD_A": "1",
  /** Physical pin 2: PG5/CANRXD_A; bidirectional. */
  "PG5/CANRXD_A": "2",
  /** Physical pin 3: PG8/CANTXD_C; bidirectional. */
  "PG8/CANTXD_C": "3",
  /** Physical pin 4: PG9/CANRXD_C; bidirectional. */
  "PG9/CANRXD_C": "4",
  /** Physical pin 5: PG10/CANTXD_D; bidirectional. */
  "PG10/CANTXD_D": "5",
  /** Physical pin 6: PG11/CANRXD_D; bidirectional. */
  "PG11/CANRXD_D": "6",
  /** Physical pin 7: PG6/CANTXD_B; bidirectional. */
  "PG6/CANTXD_B": "7",
  /** Physical pin 8: PG7/CANRXD_B; bidirectional. */
  "PG7/CANRXD_B": "8",
  /** Physical pin 9: PC0; bidirectional. */
  "PC0": "9",
  /** Physical pin 10: PC1; bidirectional. */
  "PC1": "10",
  /** Physical pin 11: PC2; bidirectional. */
  "PC2": "11",
  /** Physical pin 12: PC3; bidirectional. */
  "PC3": "12",
  /** Physical pin 13: VssX; power_in. */
  "VssX_13": "13",
  /** Physical pin 14: VddX; power_in. */
  "VddX_14": "14",
  /** Physical pin 15: PB0/SDA; bidirectional. */
  "PB0/SDA": "15",
  /** Physical pin 16: PB1/SCL; bidirectional. */
  "PB1/SCL": "16",
  /** Physical pin 17: PB2/SIN_A; bidirectional. */
  "PB2/SIN_A": "17",
  /** Physical pin 18: PB3/SOUT_A; bidirectional. */
  "PB3/SOUT_A": "18",
  /** Physical pin 19: PB4/SCK_A; bidirectional. */
  "PB4/SCK_A": "19",
  /** Physical pin 20: PB5/PCS0_A/SS_A; bidirectional. */
  "PB5/PCS0_A/SS_A": "20",
  /** Physical pin 21: PB6/PCS1_A; bidirectional. */
  "PB6/PCS1_A": "21",
  /** Physical pin 22: PB7; bidirectional. */
  "PB7": "22",
  /** Physical pin 23: PB8/PCS5_A/PCSS_A; bidirectional. */
  "PB8/PCS5_A/PCSS_A": "23",
  /** Physical pin 24: PF15/eMIOS15; bidirectional. */
  "PF15/eMIOS15": "24",
  /** Physical pin 25: PF14/eMIOS14; bidirectional. */
  "PF14/eMIOS14": "25",
  /** Physical pin 26: PF13/eMIOS13; bidirectional. */
  "PF13/eMIOS13": "26",
  /** Physical pin 27: PF12/eMIOS12; bidirectional. */
  "PF12/eMIOS12": "27",
  /** Physical pin 28: PC4; bidirectional. */
  "PC4": "28",
  /** Physical pin 29: PC5; bidirectional. */
  "PC5": "29",
  /** Physical pin 30: PC6; bidirectional. */
  "PC6": "30",
  /** Physical pin 31: PC7; bidirectional. */
  "PC7": "31",
  /** Physical pin 32: PF11/eMIOS11; bidirectional. */
  "PF11/eMIOS11": "32",
  /** Physical pin 33: PF10/eMIOS10; bidirectional. */
  "PF10/eMIOS10": "33",
  /** Physical pin 34: PF9/eMIOS9; bidirectional. */
  "PF9/eMIOS9": "34",
  /** Physical pin 35: PF8/eMIOS8; bidirectional. */
  "PF8/eMIOS8": "35",
  /** Physical pin 36: PF7/eMIOS7; bidirectional. */
  "PF7/eMIOS7": "36",
  /** Physical pin 37: PF6/eMIOS6; bidirectional. */
  "PF6/eMIOS6": "37",
  /** Physical pin 38: PF5/eMIOS5; bidirectional. */
  "PF5/eMIOS5": "38",
  /** Physical pin 39: PF4/eMIOS4; bidirectional. */
  "PF4/eMIOS4": "39",
  /** Physical pin 40: PF3/eMIOS3; bidirectional. */
  "PF3/eMIOS3": "40",
  /** Physical pin 41: PF2/eMIOS2; bidirectional. */
  "PF2/eMIOS2": "41",
  /** Physical pin 42: PF1/NEXPR/eMIOS1; bidirectional. */
  "PF1/NEXPR/eMIOS1": "42",
  /** Physical pin 43: PF0/NEXPS/eMIOS0; bidirectional. */
  "PF0/NEXPS/eMIOS0": "43",
  /** Physical pin 44: PC8; bidirectional. */
  "PC8": "44",
  /** Physical pin 45: PC9; bidirectional. */
  "PC9": "45",
  /** Physical pin 46: PC10; bidirectional. */
  "PC10": "46",
  /** Physical pin 47: PC11; bidirectional. */
  "PC11": "47",
  /** Physical pin 48: RESET; bidirectional. */
  "RESET": "48",
  /** Physical pin 49: VssX; power_in. */
  "VssX_49": "49",
  /** Physical pin 50: VddX; power_in. */
  "VddX_50": "50",
  /** Physical pin 51: PG12/RXD_D; bidirectional. */
  "PG12/RXD_D": "51",
  /** Physical pin 52: PG13/TXD_D; bidirectional. */
  "PG13/TXD_D": "52",
  /** Physical pin 53: Vdd2.5; passive. */
  "Vdd2.5_53": "53",
  /** Physical pin 54: Vss2.5; passive. */
  "Vss2.5_54": "54",
  /** Physical pin 55: VssR; power_in. */
  "VssR": "55",
  /** Physical pin 56: VddR; power_in. */
  "VddR": "56",
  /** Physical pin 57: VddPLL; passive. */
  "VddPLL": "57",
  /** Physical pin 58: XFC; bidirectional. */
  "XFC": "58",
  /** Physical pin 59: VssPLL; passive. */
  "VssPLL": "59",
  /** Physical pin 60: EXTAL; input. */
  "EXTAL": "60",
  /** Physical pin 61: XTAL; output. */
  "XTAL": "61",
  /** Physical pin 63: VssX; power_in. */
  "VssX_63": "63",
  /** Physical pin 64: VddX; power_in. */
  "VddX_64": "64",
  /** Physical pin 65: PA15; bidirectional. */
  "PA15": "65",
  /** Physical pin 66: PA14; bidirectional. */
  "PA14": "66",
  /** Physical pin 67: PA13; bidirectional. */
  "PA13": "67",
  /** Physical pin 68: PD11; bidirectional. */
  "PD11": "68",
  /** Physical pin 69: PD12; bidirectional. */
  "PD12": "69",
  /** Physical pin 70: PD0/MODB; bidirectional. */
  "PD0/MODB": "70",
  /** Physical pin 71: PD1/MODA; bidirectional. */
  "PD1/MODA": "71",
  /** Physical pin 72: PB9/PCS0_B/SS_B; bidirectional. */
  "PB9/PCS0_B/SS_B": "72",
  /** Physical pin 73: PB10/PCS5_B/PCSS_B; bidirectional. */
  "PB10/PCS5_B/PCSS_B": "73",
  /** Physical pin 74: PB11/PCS2_B; bidirectional. */
  "PB11/PCS2_B": "74",
  /** Physical pin 75: PB12/PCS1_B; bidirectional. */
  "PB12/PCS1_B": "75",
  /** Physical pin 76: PB13/PCSSCK_B; bidirectional. */
  "PB13/PCSSCK_B": "76",
  /** Physical pin 77: PB14/SOUT_B; bidirectional. */
  "PB14/SOUT_B": "77",
  /** Physical pin 78: PB15/SIN_B; bidirectional. */
  "PB15/SIN_B": "78",
  /** Physical pin 79: VssX; power_in. */
  "VssX_79": "79",
  /** Physical pin 80: PD2/CLKOUT/XCLKS; bidirectional. */
  "PD2/CLKOUT/XCLKS": "80",
  /** Physical pin 81: PD3/XIRQ; bidirectional. */
  "PD3/XIRQ": "81",
  /** Physical pin 82: PD4/IRQ; bidirectional. */
  "PD4/IRQ": "82",
  /** Physical pin 83: PD13; bidirectional. */
  "PD13": "83",
  /** Physical pin 84: PD14; bidirectional. */
  "PD14": "84",
  /** Physical pin 85: PD15; bidirectional. */
  "PD15": "85",
  /** Physical pin 86: VssX; power_in. */
  "VssX_86": "86",
  /** Physical pin 87: VddX; power_in. */
  "VddX_87": "87",
  /** Physical pin 88: PH0/AN0_B; bidirectional. */
  "PH0/AN0_B": "88",
  /** Physical pin 89: MCKO'/PE0/AN0_A; bidirectional. */
  "MCKO'/PE0/AN0_A": "89",
  /** Physical pin 90: PH1/AN1_B; bidirectional. */
  "PH1/AN1_B": "90",
  /** Physical pin 91: EVTO'/PE1/AN1_A; bidirectional. */
  "EVTO'/PE1/AN1_A": "91",
  /** Physical pin 92: PH2/AN2_B; bidirectional. */
  "PH2/AN2_B": "92",
  /** Physical pin 93: EVTI'/PE2/AN2_A; bidirectional. */
  "EVTI'/PE2/AN2_A": "93",
  /** Physical pin 94: PH3/AN3_B; bidirectional. */
  "PH3/AN3_B": "94",
  /** Physical pin 95: MDO0'/PE3/AN3_A; bidirectional. */
  "MDO0'/PE3/AN3_A": "95",
  /** Physical pin 96: PH4/AN4_B; bidirectional. */
  "PH4/AN4_B": "96",
  /** Physical pin 97: MDO1'/PE4/AN4_A; bidirectional. */
  "MDO1'/PE4/AN4_A": "97",
  /** Physical pin 98: PH5/AN5_B; bidirectional. */
  "PH5/AN5_B": "98",
  /** Physical pin 99: MSEO'/PE5/AN5_A; bidirectional. */
  "MSEO'/PE5/AN5_A": "99",
  /** Physical pin 100: PH6/AN6_B; bidirectional. */
  "PH6/AN6_B": "100",
  /** Physical pin 101: RDY'/PE6/AN6_A; bidirectional. */
  "RDY'/PE6/AN6_A": "101",
  /** Physical pin 102: PH7/AN7_B; bidirectional. */
  "PH7/AN7_B": "102",
  /** Physical pin 103: PE7/AN7_A; bidirectional. */
  "PE7/AN7_A": "103",
  /** Physical pin 104: PH8/AN8_B; bidirectional. */
  "PH8/AN8_B": "104",
  /** Physical pin 105: PE8/AN8_A; bidirectional. */
  "PE8/AN8_A": "105",
  /** Physical pin 106: PH9/AN9_B; bidirectional. */
  "PH9/AN9_B": "106",
  /** Physical pin 107: PE9/AN9_A; bidirectional. */
  "PE9/AN9_A": "107",
  /** Physical pin 108: PH10/AN10_B; bidirectional. */
  "PH10/AN10_B": "108",
  /** Physical pin 109: VddA; power_in. */
  "VddA": "109",
  /** Physical pin 110: VRL; passive. */
  "VRL": "110",
  /** Physical pin 111: VRH; passive. */
  "VRH": "111",
  /** Physical pin 112: VssA; power_in. */
  "VssA": "112",
  /** Physical pin 113: PE10/AN10_A; bidirectional. */
  "PE10/AN10_A": "113",
  /** Physical pin 114: PH11/AN11_B; bidirectional. */
  "PH11/AN11_B": "114",
  /** Physical pin 115: PE11/AN11_A; bidirectional. */
  "PE11/AN11_A": "115",
  /** Physical pin 116: PH12/AN12_B; bidirectional. */
  "PH12/AN12_B": "116",
  /** Physical pin 117: PE12/AN12_A; bidirectional. */
  "PE12/AN12_A": "117",
  /** Physical pin 118: PH13/AN13_B; bidirectional. */
  "PH13/AN13_B": "118",
  /** Physical pin 119: PE13/AN13_A; bidirectional. */
  "PE13/AN13_A": "119",
  /** Physical pin 120: PH14/AN14_B; bidirectional. */
  "PH14/AN14_B": "120",
  /** Physical pin 121: PE14/AN14_A; bidirectional. */
  "PE14/AN14_A": "121",
  /** Physical pin 122: PH15/AN15_B; bidirectional. */
  "PH15/AN15_B": "122",
  /** Physical pin 123: PE15/AN15_A; bidirectional. */
  "PE15/AN15_A": "123",
  /** Physical pin 124: VddX; power_in. */
  "VddX_124": "124",
  /** Physical pin 125: VssX; power_in. */
  "VssX_125": "125",
  /** Physical pin 126: Vss2.5; power_in. */
  "Vss2.5_126": "126",
  /** Physical pin 127: Vdd2.5; power_in. */
  "Vdd2.5_127": "127",
  /** Physical pin 128: TDI; input. */
  "TDI": "128",
  /** Physical pin 129: TDO; output. */
  "TDO": "129",
  /** Physical pin 130: TCK; input. */
  "TCK": "130",
  /** Physical pin 131: TMS; input. */
  "TMS": "131",
  /** Physical pin 132: PA6/RDY; bidirectional. */
  "PA6/RDY": "132",
  /** Physical pin 133: PA5/MSEO; bidirectional. */
  "PA5/MSEO": "133",
  /** Physical pin 134: PA4/MDO1; bidirectional. */
  "PA4/MDO1": "134",
  /** Physical pin 135: PA3/MDO0; bidirectional. */
  "PA3/MDO0": "135",
  /** Physical pin 136: PA2/EVTI; bidirectional. */
  "PA2/EVTI": "136",
  /** Physical pin 137: PA1/EVTO; bidirectional. */
  "PA1/EVTO": "137",
  /** Physical pin 138: PA0/MCKO; bidirectional. */
  "PA0/MCKO": "138",
  /** Physical pin 139: PG14/RXD_C; bidirectional. */
  "PG14/RXD_C": "139",
  /** Physical pin 140: PG15/TXD_C; bidirectional. */
  "PG15/TXD_C": "140",
  /** Physical pin 141: PG0/RXD_B; bidirectional. */
  "PG0/RXD_B": "141",
  /** Physical pin 142: PG1/TXD_B; bidirectional. */
  "PG1/TXD_B": "142",
  /** Physical pin 143: PG2/RXD_A; bidirectional. */
  "PG2/RXD_A": "143",
  /** Physical pin 144: PG3/TXD_A; bidirectional. */
  "PG3/TXD_A": "144",
}) {
  override schema = "MCU_NXP_MAC7100:MAC7101";
  override referencePrefix = "U";
}

/**
 * Automotive ARM7TDMI-S-based Microcontroller, LQFP-144
 *
 * KiCad symbol: `MCU_NXP_MAC7100:MAC7111`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MAC7100EC.pdf
 * Keywords: ARM7TDMI-S MCU.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAC7111 extends Component.withPins({
  /** Physical pin 1: PG4/CANTXD_A; bidirectional. */
  "PG4/CANTXD_A": "1",
  /** Physical pin 2: PG5/CANRXD_A; bidirectional. */
  "PG5/CANRXD_A": "2",
  /** Physical pin 3: PG8/CANTXD_C; bidirectional. */
  "PG8/CANTXD_C": "3",
  /** Physical pin 4: PG9/CANRXD_C; bidirectional. */
  "PG9/CANRXD_C": "4",
  /** Physical pin 5: PG10/CANTXD_D; bidirectional. */
  "PG10/CANTXD_D": "5",
  /** Physical pin 6: PG11/CANRXD_D; bidirectional. */
  "PG11/CANRXD_D": "6",
  /** Physical pin 7: PG6/CANTXD_B; bidirectional. */
  "PG6/CANTXD_B": "7",
  /** Physical pin 8: PG7/CANRXD_B; bidirectional. */
  "PG7/CANRXD_B": "8",
  /** Physical pin 9: PC0/ADDR0; bidirectional. */
  "PC0/ADDR0": "9",
  /** Physical pin 10: PC1/ADDR1; bidirectional. */
  "PC1/ADDR1": "10",
  /** Physical pin 11: PC2/ADDR2; bidirectional. */
  "PC2/ADDR2": "11",
  /** Physical pin 12: PC3/ADDR3; bidirectional. */
  "PC3/ADDR3": "12",
  /** Physical pin 13: VssX; power_in. */
  "VssX_13": "13",
  /** Physical pin 14: VddX; power_in. */
  "VddX_14": "14",
  /** Physical pin 15: PB0/SDA; bidirectional. */
  "PB0/SDA": "15",
  /** Physical pin 16: PB1/SCL; bidirectional. */
  "PB1/SCL": "16",
  /** Physical pin 17: PB2/SIN_A; bidirectional. */
  "PB2/SIN_A": "17",
  /** Physical pin 18: PB3/SOUT_A; bidirectional. */
  "PB3/SOUT_A": "18",
  /** Physical pin 19: PB4/SCK_A; bidirectional. */
  "PB4/SCK_A": "19",
  /** Physical pin 20: PB5/PCS0_A/SS_A; bidirectional. */
  "PB5/PCS0_A/SS_A": "20",
  /** Physical pin 21: PB6/PCS1_A; bidirectional. */
  "PB6/PCS1_A": "21",
  /** Physical pin 22: PB7; bidirectional. */
  "PB7": "22",
  /** Physical pin 23: PB8/PCS5_A/PCSS_A; bidirectional. */
  "PB8/PCS5_A/PCSS_A": "23",
  /** Physical pin 24: PF15/eMIOS15; bidirectional. */
  "PF15/eMIOS15": "24",
  /** Physical pin 25: PF14/eMIOS14; bidirectional. */
  "PF14/eMIOS14": "25",
  /** Physical pin 26: PF13/eMIOS13; bidirectional. */
  "PF13/eMIOS13": "26",
  /** Physical pin 27: PF12/eMIOS12; bidirectional. */
  "PF12/eMIOS12": "27",
  /** Physical pin 28: PC4/ADDR4; bidirectional. */
  "PC4/ADDR4": "28",
  /** Physical pin 29: PC5/ADDR5; bidirectional. */
  "PC5/ADDR5": "29",
  /** Physical pin 30: PC6/ADDR6; bidirectional. */
  "PC6/ADDR6": "30",
  /** Physical pin 31: PC7/ADDR7; bidirectional. */
  "PC7/ADDR7": "31",
  /** Physical pin 32: PF11/eMIOS11; bidirectional. */
  "PF11/eMIOS11": "32",
  /** Physical pin 33: PF10/eMIOS10; bidirectional. */
  "PF10/eMIOS10": "33",
  /** Physical pin 34: PF9/eMIOS9; bidirectional. */
  "PF9/eMIOS9": "34",
  /** Physical pin 35: PF8/eMIOS8; bidirectional. */
  "PF8/eMIOS8": "35",
  /** Physical pin 36: PF7/eMIOS7; bidirectional. */
  "PF7/eMIOS7": "36",
  /** Physical pin 37: PF6/eMIOS6; bidirectional. */
  "PF6/eMIOS6": "37",
  /** Physical pin 38: PF5/eMIOS5; bidirectional. */
  "PF5/eMIOS5": "38",
  /** Physical pin 39: PF4/eMIOS4; bidirectional. */
  "PF4/eMIOS4": "39",
  /** Physical pin 40: PF3/eMIOS3; bidirectional. */
  "PF3/eMIOS3": "40",
  /** Physical pin 41: PF2/eMIOS2; bidirectional. */
  "PF2/eMIOS2": "41",
  /** Physical pin 42: PF1/NEXPR/eMIOS1; bidirectional. */
  "PF1/NEXPR/eMIOS1": "42",
  /** Physical pin 43: PF0/NEXPS/eMIOS0; bidirectional. */
  "PF0/NEXPS/eMIOS0": "43",
  /** Physical pin 44: PC8/ADDR8; bidirectional. */
  "PC8/ADDR8": "44",
  /** Physical pin 45: PC9/ADDR9; bidirectional. */
  "PC9/ADDR9": "45",
  /** Physical pin 46: PC10/ADDR10; bidirectional. */
  "PC10/ADDR10": "46",
  /** Physical pin 47: PC11/ADDR11; bidirectional. */
  "PC11/ADDR11": "47",
  /** Physical pin 48: RESET; bidirectional. */
  "RESET": "48",
  /** Physical pin 49: VssX; power_in. */
  "VssX_49": "49",
  /** Physical pin 50: VddX; power_in. */
  "VddX_50": "50",
  /** Physical pin 51: PG12/RXD_D; bidirectional. */
  "PG12/RXD_D": "51",
  /** Physical pin 52: PG13/TXD_D; bidirectional. */
  "PG13/TXD_D": "52",
  /** Physical pin 53: Vdd2.5; passive. */
  "Vdd2.5_53": "53",
  /** Physical pin 54: Vss2.5; power_in. */
  "Vss2.5_54": "54",
  /** Physical pin 55: VssR; power_in. */
  "VssR": "55",
  /** Physical pin 56: VddR; power_in. */
  "VddR": "56",
  /** Physical pin 57: VddPLL; passive. */
  "VddPLL": "57",
  /** Physical pin 58: XFC; bidirectional. */
  "XFC": "58",
  /** Physical pin 59: VssPLL; passive. */
  "VssPLL": "59",
  /** Physical pin 60: EXTAL; input. */
  "EXTAL": "60",
  /** Physical pin 61: XTAL; output. */
  "XTAL": "61",
  /** Physical pin 63: VssX; power_in. */
  "VssX_63": "63",
  /** Physical pin 64: VddX; power_in. */
  "VddX_64": "64",
  /** Physical pin 65: PA15/DATA15; bidirectional. */
  "PA15/DATA15": "65",
  /** Physical pin 66: PA14/DATA14; bidirectional. */
  "PA14/DATA14": "66",
  /** Physical pin 67: PA13/DATA13; bidirectional. */
  "PA13/DATA13": "67",
  /** Physical pin 68: PD11/OE; bidirectional. */
  "PD11/OE": "68",
  /** Physical pin 69: PD12/CS2; bidirectional. */
  "PD12/CS2": "69",
  /** Physical pin 70: PD0/BS0/MODB; bidirectional. */
  "PD0/BS0/MODB": "70",
  /** Physical pin 71: PD1/BS1/MODA; bidirectional. */
  "PD1/BS1/MODA": "71",
  /** Physical pin 72: PB9/PCS0_B/SS_B; bidirectional. */
  "PB9/PCS0_B/SS_B": "72",
  /** Physical pin 73: PB10/PCS5_B/PCSS_B; bidirectional. */
  "PB10/PCS5_B/PCSS_B": "73",
  /** Physical pin 74: PB11/PCS2_B; bidirectional. */
  "PB11/PCS2_B": "74",
  /** Physical pin 75: PB12/PCS1_B; bidirectional. */
  "PB12/PCS1_B": "75",
  /** Physical pin 76: PB13/PCSSCK_B; bidirectional. */
  "PB13/PCSSCK_B": "76",
  /** Physical pin 77: PB14/SOUT_B; bidirectional. */
  "PB14/SOUT_B": "77",
  /** Physical pin 78: PB15/SIN_B; bidirectional. */
  "PB15/SIN_B": "78",
  /** Physical pin 79: TA/AS; bidirectional. */
  "TA/AS": "79",
  /** Physical pin 80: PD2/CLKOUT/XCLKS; bidirectional. */
  "PD2/CLKOUT/XCLKS": "80",
  /** Physical pin 81: PD3/XIRQ; bidirectional. */
  "PD3/XIRQ": "81",
  /** Physical pin 82: PD4/IRQ; bidirectional. */
  "PD4/IRQ": "82",
  /** Physical pin 83: PD13/CS1; bidirectional. */
  "PD13/CS1": "83",
  /** Physical pin 84: PD14/CS0; bidirectional. */
  "PD14/CS0": "84",
  /** Physical pin 85: PD15/R/W; bidirectional. */
  "PD15/R/W": "85",
  /** Physical pin 86: VssX; power_in. */
  "VssX_86": "86",
  /** Physical pin 87: VddX; power_in. */
  "VddX_87": "87",
  /** Physical pin 88: PC12/ADDR12; bidirectional. */
  "PC12/ADDR12": "88",
  /** Physical pin 89: PC13/ADDR13; bidirectional. */
  "PC13/ADDR13": "89",
  /** Physical pin 90: PC14/ADDR14; bidirectional. */
  "PC14/ADDR14": "90",
  /** Physical pin 91: PC15/ADDR15; bidirectional. */
  "PC15/ADDR15": "91",
  /** Physical pin 92: PD5/ADDR16; bidirectional. */
  "PD5/ADDR16": "92",
  /** Physical pin 93: PA12/DATA12; bidirectional. */
  "PA12/DATA12": "93",
  /** Physical pin 94: PA11/DATA11; bidirectional. */
  "PA11/DATA11": "94",
  /** Physical pin 95: PA10/DATA10; bidirectional. */
  "PA10/DATA10": "95",
  /** Physical pin 96: PA9/DATA9; bidirectional. */
  "PA9/DATA9": "96",
  /** Physical pin 97: PA8/DATA8; bidirectional. */
  "PA8/DATA8": "97",
  /** Physical pin 98: PA7/DATA7; bidirectional. */
  "PA7/DATA7": "98",
  /** Physical pin 99: PE0/MCKO'/AN0_A; bidirectional. */
  "PE0/MCKO'/AN0_A": "99",
  /** Physical pin 100: PE1/EVTO'/AN1_A; bidirectional. */
  "PE1/EVTO'/AN1_A": "100",
  /** Physical pin 101: PE2/EVTI'/AN2_A; bidirectional. */
  "PE2/EVTI'/AN2_A": "101",
  /** Physical pin 102: PE3/MDO0'/AN3_A; bidirectional. */
  "PE3/MDO0'/AN3_A": "102",
  /** Physical pin 103: PE4/MDO1'/AN4_A; bidirectional. */
  "PE4/MDO1'/AN4_A": "103",
  /** Physical pin 104: PE5/MSEO'/AN5_A; bidirectional. */
  "PE5/MSEO'/AN5_A": "104",
  /** Physical pin 105: PE6/RDY/AN6_A; bidirectional. */
  "PE6/RDY/AN6_A": "105",
  /** Physical pin 106: PE7/AN7_A; bidirectional. */
  "PE7/AN7_A": "106",
  /** Physical pin 107: PE8/AN8_A; bidirectional. */
  "PE8/AN8_A": "107",
  /** Physical pin 108: PE9/AN9_A; bidirectional. */
  "PE9/AN9_A": "108",
  /** Physical pin 109: VddA; power_in. */
  "VddA": "109",
  /** Physical pin 110: VRL; passive. */
  "VRL": "110",
  /** Physical pin 111: VRH; passive. */
  "VRH": "111",
  /** Physical pin 112: VssA; power_in. */
  "VssA": "112",
  /** Physical pin 113: PE10/AN10_A; bidirectional. */
  "PE10/AN10_A": "113",
  /** Physical pin 114: PE11/AN11_A; bidirectional. */
  "PE11/AN11_A": "114",
  /** Physical pin 115: PE12/AN12_A; bidirectional. */
  "PE12/AN12_A": "115",
  /** Physical pin 116: PE13/AN13_A; bidirectional. */
  "PE13/AN13_A": "116",
  /** Physical pin 117: PE14/AN14_A; bidirectional. */
  "PE14/AN14_A": "117",
  /** Physical pin 118: PE15/AN15_A; bidirectional. */
  "PE15/AN15_A": "118",
  /** Physical pin 119: PD6/ADDR17; bidirectional. */
  "PD6/ADDR17": "119",
  /** Physical pin 120: PD7/ADDR18; bidirectional. */
  "PD7/ADDR18": "120",
  /** Physical pin 121: PD8/ADDR19; bidirectional. */
  "PD8/ADDR19": "121",
  /** Physical pin 122: PD9/ADDR20; bidirectional. */
  "PD9/ADDR20": "122",
  /** Physical pin 123: PD10/ADDR21; bidirectional. */
  "PD10/ADDR21": "123",
  /** Physical pin 124: VddX; power_in. */
  "VddX_124": "124",
  /** Physical pin 125: VssX; power_in. */
  "VssX_125": "125",
  /** Physical pin 126: Vss2.5; power_in. */
  "Vss2.5_126": "126",
  /** Physical pin 127: Vdd2.5; power_in. */
  "Vdd2.5_127": "127",
  /** Physical pin 128: TDI; input. */
  "TDI": "128",
  /** Physical pin 129: TDO; output. */
  "TDO": "129",
  /** Physical pin 130: TCK; input. */
  "TCK": "130",
  /** Physical pin 131: TMS; input. */
  "TMS": "131",
  /** Physical pin 132: PA6/DATA6/RDY; bidirectional. */
  "PA6/DATA6/RDY": "132",
  /** Physical pin 133: PA5/DATA5/MSEO; bidirectional. */
  "PA5/DATA5/MSEO": "133",
  /** Physical pin 134: PA4/DATA4/MDO1; bidirectional. */
  "PA4/DATA4/MDO1": "134",
  /** Physical pin 135: PA3/DATA3/MDO0; bidirectional. */
  "PA3/DATA3/MDO0": "135",
  /** Physical pin 136: PA2/DATA2/EVTI; bidirectional. */
  "PA2/DATA2/EVTI": "136",
  /** Physical pin 137: PA1/DATA1/EVTO; bidirectional. */
  "PA1/DATA1/EVTO": "137",
  /** Physical pin 138: PA0/DATA0/MCKO; bidirectional. */
  "PA0/DATA0/MCKO": "138",
  /** Physical pin 139: PG14/RXD_C; bidirectional. */
  "PG14/RXD_C": "139",
  /** Physical pin 140: PG15/TXD_C; bidirectional. */
  "PG15/TXD_C": "140",
  /** Physical pin 141: PG0/RXD_B; bidirectional. */
  "PG0/RXD_B": "141",
  /** Physical pin 142: PG1/TXD_B; bidirectional. */
  "PG1/TXD_B": "142",
  /** Physical pin 143: PG2/RXD_A; bidirectional. */
  "PG2/RXD_A": "143",
  /** Physical pin 144: PG3/TXD_A; bidirectional. */
  "PG3/TXD_A": "144",
}) {
  override schema = "MCU_NXP_MAC7100:MAC7111";
  override referencePrefix = "U";
}

