// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Ti Stellaris ARM-M3 MCU Ethernet PHY, LQFP100
 *
 * KiCad symbol: `MCU_Texas:LM3S6911-EQC50`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm3s6911.pdf
 * Keywords: MCU ARM M3 Stellaris PHY ETH NRND.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM3S6911_EQC50 extends Component.withPins({
  /** Physical pin 1: PE7; bidirectional. */
  "PE7": "1",
  /** Physical pin 2: PE6/C1O; bidirectional. */
  "PE6/C1O": "2",
  /** Physical pin 3: VDDA; power_in. */
  "VDDA_3": "3",
  /** Physical pin 4: GNDA; power_in. */
  "GNDA_4": "4",
  /** Physical pin 5: PE5; bidirectional. */
  "PE5": "5",
  /** Physical pin 6: PE4; bidirectional. */
  "PE4": "6",
  /** Physical pin 7: LDO; passive. */
  "LDO": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: PD0; bidirectional. */
  "PD0": "10",
  /** Physical pin 11: PD1; bidirectional. */
  "PD1": "11",
  /** Physical pin 12: PD2/U1RX; bidirectional. */
  "PD2/U1RX": "12",
  /** Physical pin 13: PD3/U1TX; bidirectional. */
  "PD3/U1TX": "13",
  /** Physical pin 14: VDD25; power_in. */
  "VDD25_14": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: XTALPPHY; passive. */
  "XTALPPHY": "16",
  /** Physical pin 17: XTALNPHY; passive. */
  "XTALNPHY": "17",
  /** Physical pin 18: PG1/U2TX; bidirectional. */
  "PG1/U2TX": "18",
  /** Physical pin 19: PG0/U2RX; bidirectional. */
  "PG0/U2RX": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD_20": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: CCP4/PC7; bidirectional. */
  "CCP4/PC7": "22",
  /** Physical pin 23: CCP3/PC6; bidirectional. */
  "CCP3/PC6": "23",
  /** Physical pin 24: C1+/C0O/PC5; bidirectional. */
  "C1+/C0O/PC5": "24",
  /** Physical pin 25: CCP5/PC4; bidirectional. */
  "CCP5/PC4": "25",
  /** Physical pin 26: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "26",
  /** Physical pin 27: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "27",
  /** Physical pin 28: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "28",
  /** Physical pin 29: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "29",
  /** Physical pin 30: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "30",
  /** Physical pin 31: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: GND; power_in. */
  "GND_33": "33",
  /** Physical pin 34: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "34",
  /** Physical pin 35: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "35",
  /** Physical pin 36: VCCPHY; power_in. */
  "VCCPHY_36": "36",
  /** Physical pin 37: RXIN; passive. */
  "RXIN": "37",
  /** Physical pin 38: VDD25; power_in. */
  "VDD25_38": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: RXIP; passive. */
  "RXIP": "40",
  /** Physical pin 41: ERBIAS; passive. */
  "ERBIAS": "41",
  /** Physical pin 42: GNDPHY; power_in. */
  "GNDPHY_42": "42",
  /** Physical pin 43: TXOP; passive. */
  "TXOP": "43",
  /** Physical pin 44: VDD; power_in. */
  "VDD_44": "44",
  /** Physical pin 45: GND; power_in. */
  "GND_45": "45",
  /** Physical pin 46: TXON; passive. */
  "TXON": "46",
  /** Physical pin 47: PF0; bidirectional. */
  "PF0": "47",
  /** Physical pin 48: OSC0; passive. */
  "OSC0": "48",
  /** Physical pin 49: OSC1; passive. */
  "OSC1": "49",
  /** Physical pin 50: ~{WAKE}; input. */
  "~{WAKE}": "50",
  /** Physical pin 51: ~{HIB}; open_collector. */
  "~{HIB}": "51",
  /** Physical pin 52: XOSC0; passive. */
  "XOSC0": "52",
  /** Physical pin 53: XOSC1; passive. */
  "XOSC1": "53",
  /** Physical pin 54: GND; power_in. */
  "GND_54": "54",
  /** Physical pin 55: VBAT; passive. */
  "VBAT": "55",
  /** Physical pin 56: VDD; power_in. */
  "VDD_56": "56",
  /** Physical pin 57: GND; power_in. */
  "GND_57": "57",
  /** Physical pin 58: MDIO; input. */
  "MDIO": "58",
  /** Physical pin 59: PF3/LED0; bidirectional. */
  "PF3/LED0": "59",
  /** Physical pin 60: PF2/LED1; bidirectional. */
  "PF2/LED1": "60",
  /** Physical pin 61: PF1; bidirectional. */
  "PF1": "61",
  /** Physical pin 62: VDD25; power_in. */
  "VDD25_62": "62",
  /** Physical pin 63: GND; power_in. */
  "GND_63": "63",
  /** Physical pin 64: ~{RST}; input. */
  "~{RST}": "64",
  /** Physical pin 65: CMOD0; input. */
  "CMOD0": "65",
  /** Physical pin 66: CCP0/PB0; bidirectional. */
  "CCP0/PB0": "66",
  /** Physical pin 67: CCP2/PB1; bidirectional. */
  "CCP2/PB1": "67",
  /** Physical pin 68: VDD; power_in. */
  "VDD_68": "68",
  /** Physical pin 69: GND; power_in. */
  "GND_69": "69",
  /** Physical pin 70: I2C0SCL/PB2; bidirectional. */
  "I2C0SCL/PB2": "70",
  /** Physical pin 71: I2C0SDA/PB3; bidirectional. */
  "I2C0SDA/PB3": "71",
  /** Physical pin 72: PE0/SSI1CLK; bidirectional. */
  "PE0/SSI1CLK": "72",
  /** Physical pin 73: PE1/SSI1FSS; bidirectional. */
  "PE1/SSI1FSS": "73",
  /** Physical pin 74: PE2/SSI1RX; bidirectional. */
  "PE2/SSI1RX": "74",
  /** Physical pin 75: PE3/SSI1TX; bidirectional. */
  "PE3/SSI1TX": "75",
  /** Physical pin 76: CMOD1; input. */
  "CMOD1": "76",
  /** Physical pin 77: SWO/TDO/PC3; bidirectional. */
  "SWO/TDO/PC3": "77",
  /** Physical pin 78: TDI/PC2; bidirectional. */
  "TDI/PC2": "78",
  /** Physical pin 79: SWDIO/TMS/PC1; bidirectional. */
  "SWDIO/TMS/PC1": "79",
  /** Physical pin 80: SWCLK/TCK/PC0; bidirectional. */
  "SWCLK/TCK/PC0": "80",
  /** Physical pin 81: VDD; power_in. */
  "VDD_81": "81",
  /** Physical pin 82: GND; power_in. */
  "GND_82": "82",
  /** Physical pin 83: VCCPHY; power_in. */
  "VCCPHY_83": "83",
  /** Physical pin 84: VCCPHY; power_in. */
  "VCCPHY_84": "84",
  /** Physical pin 85: GNDPHY; power_in. */
  "GNDPHY_85": "85",
  /** Physical pin 86: GNDPHY; power_in. */
  "GNDPHY_86": "86",
  /** Physical pin 87: GND; power_in. */
  "GND_87": "87",
  /** Physical pin 88: VDD25; power_in. */
  "VDD25_88": "88",
  /** Physical pin 89: ~{TRST}/PB7; bidirectional. */
  "~{TRST}/PB7": "89",
  /** Physical pin 90: C0+/PB6; bidirectional. */
  "C0+/PB6": "90",
  /** Physical pin 91: C1-/PB5; bidirectional. */
  "C1-/PB5": "91",
  /** Physical pin 92: C0-/PB4; bidirectional. */
  "C0-/PB4": "92",
  /** Physical pin 93: VDD; power_in. */
  "VDD_93": "93",
  /** Physical pin 94: GND; power_in. */
  "GND_94": "94",
  /** Physical pin 95: PD4; bidirectional. */
  "PD4": "95",
  /** Physical pin 96: PD5; bidirectional. */
  "PD5": "96",
  /** Physical pin 97: GNDA; power_in. */
  "GNDA_97": "97",
  /** Physical pin 98: VDDA; power_in. */
  "VDDA_98": "98",
  /** Physical pin 99: PD6; bidirectional. */
  "PD6": "99",
  /** Physical pin 100: PD7/CCP1; bidirectional. */
  "PD7/CCP1": "100",
}) {
  override schema = "MCU_Texas:LM3S6911-EQC50";
  override referencePrefix = "U";
}

/**
 * Ti Stellaris ARM-M3 MCU Ethernet PHY, Industrial grade, LQFP100
 *
 * KiCad symbol: `MCU_Texas:LM3S6911-IQC50`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm3s6911.pdf
 * Keywords: MCU ARM M3 Stellaris PHY ETH NRND.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM3S6911_IQC50 extends Component.withPins({
  /** Physical pin 1: PE7; bidirectional. */
  "PE7": "1",
  /** Physical pin 2: PE6/C1O; bidirectional. */
  "PE6/C1O": "2",
  /** Physical pin 3: VDDA; power_in. */
  "VDDA_3": "3",
  /** Physical pin 4: GNDA; power_in. */
  "GNDA_4": "4",
  /** Physical pin 5: PE5; bidirectional. */
  "PE5": "5",
  /** Physical pin 6: PE4; bidirectional. */
  "PE4": "6",
  /** Physical pin 7: LDO; passive. */
  "LDO": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: PD0; bidirectional. */
  "PD0": "10",
  /** Physical pin 11: PD1; bidirectional. */
  "PD1": "11",
  /** Physical pin 12: PD2/U1RX; bidirectional. */
  "PD2/U1RX": "12",
  /** Physical pin 13: PD3/U1TX; bidirectional. */
  "PD3/U1TX": "13",
  /** Physical pin 14: VDD25; power_in. */
  "VDD25_14": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: XTALPPHY; passive. */
  "XTALPPHY": "16",
  /** Physical pin 17: XTALNPHY; passive. */
  "XTALNPHY": "17",
  /** Physical pin 18: PG1/U2TX; bidirectional. */
  "PG1/U2TX": "18",
  /** Physical pin 19: PG0/U2RX; bidirectional. */
  "PG0/U2RX": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD_20": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: CCP4/PC7; bidirectional. */
  "CCP4/PC7": "22",
  /** Physical pin 23: CCP3/PC6; bidirectional. */
  "CCP3/PC6": "23",
  /** Physical pin 24: C1+/C0O/PC5; bidirectional. */
  "C1+/C0O/PC5": "24",
  /** Physical pin 25: CCP5/PC4; bidirectional. */
  "CCP5/PC4": "25",
  /** Physical pin 26: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "26",
  /** Physical pin 27: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "27",
  /** Physical pin 28: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "28",
  /** Physical pin 29: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "29",
  /** Physical pin 30: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "30",
  /** Physical pin 31: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: GND; power_in. */
  "GND_33": "33",
  /** Physical pin 34: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "34",
  /** Physical pin 35: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "35",
  /** Physical pin 36: VCCPHY; power_in. */
  "VCCPHY_36": "36",
  /** Physical pin 37: RXIN; passive. */
  "RXIN": "37",
  /** Physical pin 38: VDD25; power_in. */
  "VDD25_38": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: RXIP; passive. */
  "RXIP": "40",
  /** Physical pin 41: ERBIAS; passive. */
  "ERBIAS": "41",
  /** Physical pin 42: GNDPHY; power_in. */
  "GNDPHY_42": "42",
  /** Physical pin 43: TXOP; passive. */
  "TXOP": "43",
  /** Physical pin 44: VDD; power_in. */
  "VDD_44": "44",
  /** Physical pin 45: GND; power_in. */
  "GND_45": "45",
  /** Physical pin 46: TXON; passive. */
  "TXON": "46",
  /** Physical pin 47: PF0; bidirectional. */
  "PF0": "47",
  /** Physical pin 48: OSC0; passive. */
  "OSC0": "48",
  /** Physical pin 49: OSC1; passive. */
  "OSC1": "49",
  /** Physical pin 50: ~{WAKE}; input. */
  "~{WAKE}": "50",
  /** Physical pin 51: ~{HIB}; open_collector. */
  "~{HIB}": "51",
  /** Physical pin 52: XOSC0; passive. */
  "XOSC0": "52",
  /** Physical pin 53: XOSC1; passive. */
  "XOSC1": "53",
  /** Physical pin 54: GND; power_in. */
  "GND_54": "54",
  /** Physical pin 55: VBAT; passive. */
  "VBAT": "55",
  /** Physical pin 56: VDD; power_in. */
  "VDD_56": "56",
  /** Physical pin 57: GND; power_in. */
  "GND_57": "57",
  /** Physical pin 58: MDIO; input. */
  "MDIO": "58",
  /** Physical pin 59: PF3/LED0; bidirectional. */
  "PF3/LED0": "59",
  /** Physical pin 60: PF2/LED1; bidirectional. */
  "PF2/LED1": "60",
  /** Physical pin 61: PF1; bidirectional. */
  "PF1": "61",
  /** Physical pin 62: VDD25; power_in. */
  "VDD25_62": "62",
  /** Physical pin 63: GND; power_in. */
  "GND_63": "63",
  /** Physical pin 64: ~{RST}; input. */
  "~{RST}": "64",
  /** Physical pin 65: CMOD0; input. */
  "CMOD0": "65",
  /** Physical pin 66: CCP0/PB0; bidirectional. */
  "CCP0/PB0": "66",
  /** Physical pin 67: CCP2/PB1; bidirectional. */
  "CCP2/PB1": "67",
  /** Physical pin 68: VDD; power_in. */
  "VDD_68": "68",
  /** Physical pin 69: GND; power_in. */
  "GND_69": "69",
  /** Physical pin 70: I2C0SCL/PB2; bidirectional. */
  "I2C0SCL/PB2": "70",
  /** Physical pin 71: I2C0SDA/PB3; bidirectional. */
  "I2C0SDA/PB3": "71",
  /** Physical pin 72: PE0/SSI1CLK; bidirectional. */
  "PE0/SSI1CLK": "72",
  /** Physical pin 73: PE1/SSI1FSS; bidirectional. */
  "PE1/SSI1FSS": "73",
  /** Physical pin 74: PE2/SSI1RX; bidirectional. */
  "PE2/SSI1RX": "74",
  /** Physical pin 75: PE3/SSI1TX; bidirectional. */
  "PE3/SSI1TX": "75",
  /** Physical pin 76: CMOD1; input. */
  "CMOD1": "76",
  /** Physical pin 77: SWO/TDO/PC3; bidirectional. */
  "SWO/TDO/PC3": "77",
  /** Physical pin 78: TDI/PC2; bidirectional. */
  "TDI/PC2": "78",
  /** Physical pin 79: SWDIO/TMS/PC1; bidirectional. */
  "SWDIO/TMS/PC1": "79",
  /** Physical pin 80: SWCLK/TCK/PC0; bidirectional. */
  "SWCLK/TCK/PC0": "80",
  /** Physical pin 81: VDD; power_in. */
  "VDD_81": "81",
  /** Physical pin 82: GND; power_in. */
  "GND_82": "82",
  /** Physical pin 83: VCCPHY; power_in. */
  "VCCPHY_83": "83",
  /** Physical pin 84: VCCPHY; power_in. */
  "VCCPHY_84": "84",
  /** Physical pin 85: GNDPHY; power_in. */
  "GNDPHY_85": "85",
  /** Physical pin 86: GNDPHY; power_in. */
  "GNDPHY_86": "86",
  /** Physical pin 87: GND; power_in. */
  "GND_87": "87",
  /** Physical pin 88: VDD25; power_in. */
  "VDD25_88": "88",
  /** Physical pin 89: ~{TRST}/PB7; bidirectional. */
  "~{TRST}/PB7": "89",
  /** Physical pin 90: C0+/PB6; bidirectional. */
  "C0+/PB6": "90",
  /** Physical pin 91: C1-/PB5; bidirectional. */
  "C1-/PB5": "91",
  /** Physical pin 92: C0-/PB4; bidirectional. */
  "C0-/PB4": "92",
  /** Physical pin 93: VDD; power_in. */
  "VDD_93": "93",
  /** Physical pin 94: GND; power_in. */
  "GND_94": "94",
  /** Physical pin 95: PD4; bidirectional. */
  "PD4": "95",
  /** Physical pin 96: PD5; bidirectional. */
  "PD5": "96",
  /** Physical pin 97: GNDA; power_in. */
  "GNDA_97": "97",
  /** Physical pin 98: VDDA; power_in. */
  "VDDA_98": "98",
  /** Physical pin 99: PD6; bidirectional. */
  "PD6": "99",
  /** Physical pin 100: PD7/CCP1; bidirectional. */
  "PD7/CCP1": "100",
}) {
  override schema = "MCU_Texas:LM3S6911-IQC50";
  override referencePrefix = "U";
}

/**
 * Tiva ARM 32bit CortexM4 Microcotroller, 80MHz, 32kB Flash, 12kB SRAM, 2k EEPROM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:TM4C1231C3PM`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1231c3pm.pdf
 * Keywords: ARM Tiva Cortex M4 MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TM4C1231C3PM extends Component.withPins({
  /** Physical pin 1: SSI2RX/T0CCP0/PB6; bidirectional. */
  "SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: SSI2TX/T0CCP1/PB7; bidirectional. */
  "SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: ~{WAKE}; input. */
  "~{WAKE}": "32",
  /** Physical pin 33: ~{HIB}; open_collector. */
  "~{HIB}": "33",
  /** Physical pin 34: XOSC0; passive. */
  "XOSC0": "34",
  /** Physical pin 35: GNDX; power_in. */
  "GNDX": "35",
  /** Physical pin 36: XOSC1; passive. */
  "XOSC1": "36",
  /** Physical pin 37: VBAT; passive. */
  "VBAT": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; bidirectional. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:TM4C1231C3PM";
  override referencePrefix = "U";
}

/**
 * Replaced by TM4C1231C3PM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:LM4F110B2QR`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1231c3pm.pdf
 * Keywords: ARM Stellaris Cortex M4 MCU NRND.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4F110B2QR extends Component.withPins({
  /** Physical pin 1: SSI2RX/T0CCP0/PB6; bidirectional. */
  "SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: SSI2TX/T0CCP1/PB7; bidirectional. */
  "SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: ~{WAKE}; input. */
  "~{WAKE}": "32",
  /** Physical pin 33: ~{HIB}; open_collector. */
  "~{HIB}": "33",
  /** Physical pin 34: XOSC0; passive. */
  "XOSC0": "34",
  /** Physical pin 35: GNDX; power_in. */
  "GNDX": "35",
  /** Physical pin 36: XOSC1; passive. */
  "XOSC1": "36",
  /** Physical pin 37: VBAT; passive. */
  "VBAT": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; bidirectional. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:LM4F110B2QR";
  override referencePrefix = "U";
}

/**
 * Replaced by TM4C1231D5PM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:LM4F110C4QR`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1231d5pm.pdf
 * Keywords: ARM Stellaris Cortex M4 MCU NRND.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4F110C4QR extends Component.withPins({
  /** Physical pin 1: SSI2RX/T0CCP0/PB6; bidirectional. */
  "SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: SSI2TX/T0CCP1/PB7; bidirectional. */
  "SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: ~{WAKE}; input. */
  "~{WAKE}": "32",
  /** Physical pin 33: ~{HIB}; open_collector. */
  "~{HIB}": "33",
  /** Physical pin 34: XOSC0; passive. */
  "XOSC0": "34",
  /** Physical pin 35: GNDX; power_in. */
  "GNDX": "35",
  /** Physical pin 36: XOSC1; passive. */
  "XOSC1": "36",
  /** Physical pin 37: VBAT; passive. */
  "VBAT": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; bidirectional. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:LM4F110C4QR";
  override referencePrefix = "U";
}

/**
 * Replaced by TM4C1231E6PM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:LM4F110E5QR`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1231e6pm.pdf
 * Keywords: ARM Stellaris Cortex M4 MCU NRND.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4F110E5QR extends Component.withPins({
  /** Physical pin 1: SSI2RX/T0CCP0/PB6; bidirectional. */
  "SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: SSI2TX/T0CCP1/PB7; bidirectional. */
  "SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: ~{WAKE}; input. */
  "~{WAKE}": "32",
  /** Physical pin 33: ~{HIB}; open_collector. */
  "~{HIB}": "33",
  /** Physical pin 34: XOSC0; passive. */
  "XOSC0": "34",
  /** Physical pin 35: GNDX; power_in. */
  "GNDX": "35",
  /** Physical pin 36: XOSC1; passive. */
  "XOSC1": "36",
  /** Physical pin 37: VBAT; passive. */
  "VBAT": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; bidirectional. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:LM4F110E5QR";
  override referencePrefix = "U";
}

/**
 * Replaced by TM4C1231H6PM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:LM4F110H5QR`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1231h6pm.pdf
 * Keywords: ARM Stellaris Cortex M4 MCU NRND.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4F110H5QR extends Component.withPins({
  /** Physical pin 1: SSI2RX/T0CCP0/PB6; bidirectional. */
  "SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: SSI2TX/T0CCP1/PB7; bidirectional. */
  "SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: ~{WAKE}; input. */
  "~{WAKE}": "32",
  /** Physical pin 33: ~{HIB}; open_collector. */
  "~{HIB}": "33",
  /** Physical pin 34: XOSC0; passive. */
  "XOSC0": "34",
  /** Physical pin 35: GNDX; power_in. */
  "GNDX": "35",
  /** Physical pin 36: XOSC1; passive. */
  "XOSC1": "36",
  /** Physical pin 37: VBAT; passive. */
  "VBAT": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; bidirectional. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:LM4F110H5QR";
  override referencePrefix = "U";
}

/**
 * Tiva ARM 32bit CortexM4 Microcotroller, 80MHz, 32kB Flash, 12kB SRAM, 2k EEPROM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:TM4C1230C3PM`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1230c3pm.pdf
 * Keywords: ARM Tiva Cortex M4 MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TM4C1230C3PM extends Component.withPins({
  /** Physical pin 1: I2C5SCL/SSI2RX/T0CCP0/PB6; bidirectional. */
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: I2C5SDA/SSI2TX/T0CCP1/PB7; bidirectional. */
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: PG5/WT0CCP1/U2TX/I2C1SDA; bidirectional. */
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  /** Physical pin 33: PG4/WT0CCP0/U2RX/I2C1SCL; bidirectional. */
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  /** Physical pin 34: PG3/T5CCP1/I2C4SDA; bidirectional. */
  "PG3/T5CCP1/I2C4SDA": "34",
  /** Physical pin 35: PG2/T5CCP0/I2C4SCL; bidirectional. */
  "PG2/T5CCP0/I2C4SCL": "35",
  /** Physical pin 36: PG1/T4CCP1/I2C3SDA; bidirectional. */
  "PG1/T4CCP1/I2C3SDA": "36",
  /** Physical pin 37: PG0/T4CCP0/I2C3SCL; bidirectional. */
  "PG0/T4CCP0/I2C3SCL": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:TM4C1230C3PM";
  override referencePrefix = "U";
}

/**
 * Replaced by TM4C1230C3PM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:LM4F111B2QR`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1230c3pm.pdf
 * Keywords: ARM Stellaris Cortex M4 MCU NRND.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4F111B2QR extends Component.withPins({
  /** Physical pin 1: I2C5SCL/SSI2RX/T0CCP0/PB6; bidirectional. */
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: I2C5SDA/SSI2TX/T0CCP1/PB7; bidirectional. */
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: PG5/WT0CCP1/U2TX/I2C1SDA; bidirectional. */
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  /** Physical pin 33: PG4/WT0CCP0/U2RX/I2C1SCL; bidirectional. */
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  /** Physical pin 34: PG3/T5CCP1/I2C4SDA; bidirectional. */
  "PG3/T5CCP1/I2C4SDA": "34",
  /** Physical pin 35: PG2/T5CCP0/I2C4SCL; bidirectional. */
  "PG2/T5CCP0/I2C4SCL": "35",
  /** Physical pin 36: PG1/T4CCP1/I2C3SDA; bidirectional. */
  "PG1/T4CCP1/I2C3SDA": "36",
  /** Physical pin 37: PG0/T4CCP0/I2C3SCL; bidirectional. */
  "PG0/T4CCP0/I2C3SCL": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:LM4F111B2QR";
  override referencePrefix = "U";
}

/**
 * Replaced by TM4C1230D5PM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:LM4F111C4QR`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1230d5pm.pdf
 * Keywords: ARM Stellaris Cortex M4 MCU NRND.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4F111C4QR extends Component.withPins({
  /** Physical pin 1: I2C5SCL/SSI2RX/T0CCP0/PB6; bidirectional. */
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: I2C5SDA/SSI2TX/T0CCP1/PB7; bidirectional. */
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: PG5/WT0CCP1/U2TX/I2C1SDA; bidirectional. */
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  /** Physical pin 33: PG4/WT0CCP0/U2RX/I2C1SCL; bidirectional. */
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  /** Physical pin 34: PG3/T5CCP1/I2C4SDA; bidirectional. */
  "PG3/T5CCP1/I2C4SDA": "34",
  /** Physical pin 35: PG2/T5CCP0/I2C4SCL; bidirectional. */
  "PG2/T5CCP0/I2C4SCL": "35",
  /** Physical pin 36: PG1/T4CCP1/I2C3SDA; bidirectional. */
  "PG1/T4CCP1/I2C3SDA": "36",
  /** Physical pin 37: PG0/T4CCP0/I2C3SCL; bidirectional. */
  "PG0/T4CCP0/I2C3SCL": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:LM4F111C4QR";
  override referencePrefix = "U";
}

/**
 * Replaced by TM4C1230E6PM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:LM4F111E5QR`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1230c3pm.pdf
 * Keywords: ARM Stellaris Cortex M4 MCU NRND.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4F111E5QR extends Component.withPins({
  /** Physical pin 1: I2C5SCL/SSI2RX/T0CCP0/PB6; bidirectional. */
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: I2C5SDA/SSI2TX/T0CCP1/PB7; bidirectional. */
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: PG5/WT0CCP1/U2TX/I2C1SDA; bidirectional. */
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  /** Physical pin 33: PG4/WT0CCP0/U2RX/I2C1SCL; bidirectional. */
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  /** Physical pin 34: PG3/T5CCP1/I2C4SDA; bidirectional. */
  "PG3/T5CCP1/I2C4SDA": "34",
  /** Physical pin 35: PG2/T5CCP0/I2C4SCL; bidirectional. */
  "PG2/T5CCP0/I2C4SCL": "35",
  /** Physical pin 36: PG1/T4CCP1/I2C3SDA; bidirectional. */
  "PG1/T4CCP1/I2C3SDA": "36",
  /** Physical pin 37: PG0/T4CCP0/I2C3SCL; bidirectional. */
  "PG0/T4CCP0/I2C3SCL": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:LM4F111E5QR";
  override referencePrefix = "U";
}

/**
 * Replaced by TM4C1230H6PM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:LM4F111H5QR`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1230h6pm.pdf
 * Keywords: ARM Stellaris Cortex M4 MCU NRND.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4F111H5QR extends Component.withPins({
  /** Physical pin 1: I2C5SCL/SSI2RX/T0CCP0/PB6; bidirectional. */
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: I2C5SDA/SSI2TX/T0CCP1/PB7; bidirectional. */
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: PG5/WT0CCP1/U2TX/I2C1SDA; bidirectional. */
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  /** Physical pin 33: PG4/WT0CCP0/U2RX/I2C1SCL; bidirectional. */
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  /** Physical pin 34: PG3/T5CCP1/I2C4SDA; bidirectional. */
  "PG3/T5CCP1/I2C4SDA": "34",
  /** Physical pin 35: PG2/T5CCP0/I2C4SCL; bidirectional. */
  "PG2/T5CCP0/I2C4SCL": "35",
  /** Physical pin 36: PG1/T4CCP1/I2C3SDA; bidirectional. */
  "PG1/T4CCP1/I2C3SDA": "36",
  /** Physical pin 37: PG0/T4CCP0/I2C3SCL; bidirectional. */
  "PG0/T4CCP0/I2C3SCL": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:LM4F111H5QR";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M4F MCU, 1024KB flash, 256KB RAM, 6KB EEPROM, 120MHz, 3.0-3.6V, TQFP-128
 *
 * KiCad symbol: `MCU_Texas:MSP432E401Y`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp432e401y.pdf
 * Keywords: ARM Cortex-M4F MSP432 MSP432E4 MSP432E401.
 * Default footprint: Package_QFP:LQFP-128_14x14mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MSP432E401Y extends Component.withPins({
  /** Physical pin 1: PD0; bidirectional. */
  "PD0": "1",
  /** Physical pin 2: PD1; bidirectional. */
  "PD1": "2",
  /** Physical pin 3: PD2; bidirectional. */
  "PD2": "3",
  /** Physical pin 4: PD3; bidirectional. */
  "PD3": "4",
  /** Physical pin 5: PQ0; bidirectional. */
  "PQ0": "5",
  /** Physical pin 6: PQ1; bidirectional. */
  "PQ1": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: VDDA; power_in. */
  "VDDA": "8",
  /** Physical pin 9: VREFA+; power_in. */
  "VREFA+": "9",
  /** Physical pin 10: GNDA; power_in. */
  "GNDA": "10",
  /** Physical pin 11: PQ2; bidirectional. */
  "PQ2": "11",
  /** Physical pin 12: PE3; bidirectional. */
  "PE3": "12",
  /** Physical pin 13: PE2; bidirectional. */
  "PE2": "13",
  /** Physical pin 14: PE1; bidirectional. */
  "PE1": "14",
  /** Physical pin 15: PE0; bidirectional. */
  "PE0": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD_16": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: PK0; bidirectional. */
  "PK0": "18",
  /** Physical pin 19: PK1; bidirectional. */
  "PK1": "19",
  /** Physical pin 20: PK2; bidirectional. */
  "PK2": "20",
  /** Physical pin 21: PK3; bidirectional. */
  "PK3": "21",
  /** Physical pin 22: PC7; bidirectional. */
  "PC7": "22",
  /** Physical pin 23: PC6; bidirectional. */
  "PC6": "23",
  /** Physical pin 24: PC5; bidirectional. */
  "PC5": "24",
  /** Physical pin 25: PC4; bidirectional. */
  "PC4": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: PQ3; bidirectional. */
  "PQ3": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PH1; bidirectional. */
  "PH1": "30",
  /** Physical pin 31: PH2; bidirectional. */
  "PH2": "31",
  /** Physical pin 32: PH3; bidirectional. */
  "PH3": "32",
  /** Physical pin 33: PA0; bidirectional. */
  "PA0": "33",
  /** Physical pin 34: PA1; bidirectional. */
  "PA1": "34",
  /** Physical pin 35: PA2; bidirectional. */
  "PA2": "35",
  /** Physical pin 36: PA3; bidirectional. */
  "PA3": "36",
  /** Physical pin 37: PA4; bidirectional. */
  "PA4": "37",
  /** Physical pin 38: PA5; bidirectional. */
  "PA5": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA6; bidirectional. */
  "PA6": "40",
  /** Physical pin 41: PA7; bidirectional. */
  "PA7": "41",
  /** Physical pin 42: PF0; bidirectional. */
  "PF0": "42",
  /** Physical pin 43: PF1; bidirectional. */
  "PF1": "43",
  /** Physical pin 44: PF2; bidirectional. */
  "PF2": "44",
  /** Physical pin 45: PF3; bidirectional. */
  "PF3": "45",
  /** Physical pin 46: PF4; bidirectional. */
  "PF4": "46",
  /** Physical pin 47: VDD; power_in. */
  "VDD_47": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: PG0; bidirectional. */
  "PG0": "49",
  /** Physical pin 50: PG1; bidirectional. */
  "PG1": "50",
  /** Physical pin 51: VDD; power_in. */
  "VDD_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: EN0RXIN; bidirectional. */
  "EN0RXIN": "53",
  /** Physical pin 54: EN0RXIP; bidirectional. */
  "EN0RXIP": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: EN0TXON; bidirectional. */
  "EN0TXON": "56",
  /** Physical pin 57: EN0TXOP; bidirectional. */
  "EN0TXOP": "57",
  /** Physical pin 58: GND; passive. */
  "GND_58": "58",
  /** Physical pin 59: RBIAS; passive. */
  "RBIAS": "59",
  /** Physical pin 60: PK7; bidirectional. */
  "PK7": "60",
  /** Physical pin 61: PK6; bidirectional. */
  "PK6": "61",
  /** Physical pin 62: PK5; bidirectional. */
  "PK5": "62",
  /** Physical pin 63: PK4; bidirectional. */
  "PK4": "63",
  /** Physical pin 64: ~{WAKE}; input. */
  "~{WAKE}": "64",
  /** Physical pin 65: ~{HIB}; output. */
  "~{HIB}": "65",
  /** Physical pin 66: XOSC0; input. */
  "XOSC0": "66",
  /** Physical pin 67: XOSC1; output. */
  "XOSC1": "67",
  /** Physical pin 68: VBAT; power_in. */
  "VBAT": "68",
  /** Physical pin 69: VDD; power_in. */
  "VDD_69": "69",
  /** Physical pin 70: ~{RST}; input. */
  "~{RST}": "70",
  /** Physical pin 71: PM7; bidirectional. */
  "PM7": "71",
  /** Physical pin 72: PM6; bidirectional. */
  "PM6": "72",
  /** Physical pin 73: PM5; bidirectional. */
  "PM5": "73",
  /** Physical pin 74: PM4; bidirectional. */
  "PM4": "74",
  /** Physical pin 75: PM3; bidirectional. */
  "PM3": "75",
  /** Physical pin 76: PM2; bidirectional. */
  "PM2": "76",
  /** Physical pin 77: PM1; bidirectional. */
  "PM1": "77",
  /** Physical pin 78: PM0; bidirectional. */
  "PM0": "78",
  /** Physical pin 79: VDD; power_in. */
  "VDD_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: PL0; bidirectional. */
  "PL0": "81",
  /** Physical pin 82: PL1; bidirectional. */
  "PL1": "82",
  /** Physical pin 83: PL2; bidirectional. */
  "PL2": "83",
  /** Physical pin 84: PL3; bidirectional. */
  "PL3": "84",
  /** Physical pin 85: PL4; bidirectional. */
  "PL4": "85",
  /** Physical pin 86: PL5; bidirectional. */
  "PL5": "86",
  /** Physical pin 87: VDDC; power_in. */
  "VDDC_87": "87",
  /** Physical pin 88: OSC0; input. */
  "OSC0": "88",
  /** Physical pin 89: OSC1; output. */
  "OSC1": "89",
  /** Physical pin 90: VDD; power_in. */
  "VDD_90": "90",
  /** Physical pin 91: PB2; bidirectional. */
  "PB2": "91",
  /** Physical pin 92: PB3; bidirectional. */
  "PB3": "92",
  /** Physical pin 93: PL7; bidirectional. */
  "PL7": "93",
  /** Physical pin 94: PL6; bidirectional. */
  "PL6": "94",
  /** Physical pin 95: PB0; bidirectional. */
  "PB0": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PC3/TDO/SWO; bidirectional. */
  "PC3/TDO/SWO": "97",
  /** Physical pin 98: PC2/TDI; bidirectional. */
  "PC2/TDI": "98",
  /** Physical pin 99: PC1/TMS/SWDIO; bidirectional. */
  "PC1/TMS/SWDIO": "99",
  /** Physical pin 100: PC0/TCK/SWCLK; bidirectional. */
  "PC0/TCK/SWCLK": "100",
  /** Physical pin 101: VDD; power_in. */
  "VDD_101": "101",
  /** Physical pin 102: PQ4; bidirectional. */
  "PQ4": "102",
  /** Physical pin 103: PP2; bidirectional. */
  "PP2": "103",
  /** Physical pin 104: PP3; bidirectional. */
  "PP3": "104",
  /** Physical pin 105: PP4; bidirectional. */
  "PP4": "105",
  /** Physical pin 106: PP5; bidirectional. */
  "PP5": "106",
  /** Physical pin 107: PN0; bidirectional. */
  "PN0": "107",
  /** Physical pin 108: PN1; bidirectional. */
  "PN1": "108",
  /** Physical pin 109: PN2; bidirectional. */
  "PN2": "109",
  /** Physical pin 110: PN3; bidirectional. */
  "PN3": "110",
  /** Physical pin 111: PN4; bidirectional. */
  "PN4": "111",
  /** Physical pin 112: PN5; bidirectional. */
  "PN5": "112",
  /** Physical pin 113: VDD; power_in. */
  "VDD_113": "113",
  /** Physical pin 114: GND; passive. */
  "GND_114": "114",
  /** Physical pin 115: VDDC; power_in. */
  "VDDC_115": "115",
  /** Physical pin 116: PJ0; bidirectional. */
  "PJ0": "116",
  /** Physical pin 117: PJ1; bidirectional. */
  "PJ1": "117",
  /** Physical pin 118: PP0; bidirectional. */
  "PP0": "118",
  /** Physical pin 119: PP1; bidirectional. */
  "PP1": "119",
  /** Physical pin 120: PB5; bidirectional. */
  "PB5": "120",
  /** Physical pin 121: PB4; bidirectional. */
  "PB4": "121",
  /** Physical pin 122: VDD; power_in. */
  "VDD_122": "122",
  /** Physical pin 123: PE4; bidirectional. */
  "PE4": "123",
  /** Physical pin 124: PE5; bidirectional. */
  "PE5": "124",
  /** Physical pin 125: PD4; bidirectional. */
  "PD4": "125",
  /** Physical pin 126: PD5; bidirectional. */
  "PD5": "126",
  /** Physical pin 127: PD6; bidirectional. */
  "PD6": "127",
  /** Physical pin 128: PD7; bidirectional. */
  "PD7": "128",
}) {
  override schema = "MCU_Texas:MSP432E401Y";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 16/8kB flash, 1kB SRAM, 24MHz, SOT-23-8
 *
 * KiCad symbol: `MCU_Texas:MSPM0C110xSDDF`. Reference prefix: `U`.
 * Footprint filters: *Texas*DDF0008A*SOT*8*1.6x2.9mm*P0.65mm*.
 * @see https://www.ti.com/lit/gpn/mspm0c1104
 * Keywords: texas.
 * Default footprint: Package_TO_SOT_SMD:Texas_DDF0008A_SOT-8_1.6x2.9mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MSPM0C110xSDDF extends Component.withPins({
  /** Physical pin 1: PA27; bidirectional. */
  "PA27": "1",
  /** Physical pin 2: PA1/NRST; bidirectional. */
  "PA1/NRST": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: PA0; bidirectional. */
  "PA0": "5",
  /** Physical pin 6: PA19/SWDIO; bidirectional. */
  "PA19/SWDIO": "6",
  /** Physical pin 7: PA20/SWCLK; bidirectional. */
  "PA20/SWCLK": "7",
  /** Physical pin 8: PA24; bidirectional. */
  "PA24": "8",
}) {
  override schema = "MCU_Texas:MSPM0C110xSDDF";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 16/8kB flash, 1kB SRAM, 24MHz, WSON-8
 *
 * KiCad symbol: `MCU_Texas:MSPM0C110xSDSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*8*1EP*2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/gpn/mspm0c1104
 * Keywords: texas.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MSPM0C110xSDSG extends Component.withPins({
  /** Physical pin 1: PA27; bidirectional. */
  "PA27": "1",
  /** Physical pin 2: PA1/NRST; bidirectional. */
  "PA1/NRST": "2",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: PA0; bidirectional. */
  "PA0": "5",
  /** Physical pin 6: PA19/SWDIO; bidirectional. */
  "PA19/SWDIO": "6",
  /** Physical pin 7: PA20/SWCLK; bidirectional. */
  "PA20/SWCLK": "7",
  /** Physical pin 8: PA24; bidirectional. */
  "PA24": "8",
  /** Physical pin [3,9]: VSS; power_in. */
  "VSS": "[3,9]",
}) {
  override schema = "MCU_Texas:MSPM0C110xSDSG";
  override referencePrefix = "U";
}

/**
 * Tiva ARM 32bit CortexM4 Microcotroller, 80MHz, 64kB Flash, 24kB SRAM, 2k EEPROM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:TM4C1230D5PM`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1230d5pm.pdf
 * Keywords: ARM Tiva Cortex M4 MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TM4C1230D5PM extends Component.withPins({
  /** Physical pin 1: I2C5SCL/SSI2RX/T0CCP0/PB6; bidirectional. */
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: I2C5SDA/SSI2TX/T0CCP1/PB7; bidirectional. */
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: PG5/WT0CCP1/U2TX/I2C1SDA; bidirectional. */
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  /** Physical pin 33: PG4/WT0CCP0/U2RX/I2C1SCL; bidirectional. */
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  /** Physical pin 34: PG3/T5CCP1/I2C4SDA; bidirectional. */
  "PG3/T5CCP1/I2C4SDA": "34",
  /** Physical pin 35: PG2/T5CCP0/I2C4SCL; bidirectional. */
  "PG2/T5CCP0/I2C4SCL": "35",
  /** Physical pin 36: PG1/T4CCP1/I2C3SDA; bidirectional. */
  "PG1/T4CCP1/I2C3SDA": "36",
  /** Physical pin 37: PG0/T4CCP0/I2C3SCL; bidirectional. */
  "PG0/T4CCP0/I2C3SCL": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:TM4C1230D5PM";
  override referencePrefix = "U";
}

/**
 * Tiva ARM 32bit CortexM4 Microcotroller, 80MHz, 128kB Flash, 32kB SRAM, 2k EEPROM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:TM4C1230E6PM`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1230e6pm.pdf
 * Keywords: ARM Tiva Cortex M4 MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TM4C1230E6PM extends Component.withPins({
  /** Physical pin 1: I2C5SCL/SSI2RX/T0CCP0/PB6; bidirectional. */
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: I2C5SDA/SSI2TX/T0CCP1/PB7; bidirectional. */
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: PG5/WT0CCP1/U2TX/I2C1SDA; bidirectional. */
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  /** Physical pin 33: PG4/WT0CCP0/U2RX/I2C1SCL; bidirectional. */
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  /** Physical pin 34: PG3/T5CCP1/I2C4SDA; bidirectional. */
  "PG3/T5CCP1/I2C4SDA": "34",
  /** Physical pin 35: PG2/T5CCP0/I2C4SCL; bidirectional. */
  "PG2/T5CCP0/I2C4SCL": "35",
  /** Physical pin 36: PG1/T4CCP1/I2C3SDA; bidirectional. */
  "PG1/T4CCP1/I2C3SDA": "36",
  /** Physical pin 37: PG0/T4CCP0/I2C3SCL; bidirectional. */
  "PG0/T4CCP0/I2C3SCL": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:TM4C1230E6PM";
  override referencePrefix = "U";
}

/**
 * Tiva ARM 32bit CortexM4 Microcotroller, 80MHz, 256kB Flash, 32kB SRAM, 2k EEPROM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:TM4C1230H6PM`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1230h6pm.pdf
 * Keywords: ARM Tiva Cortex M4 MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TM4C1230H6PM extends Component.withPins({
  /** Physical pin 1: I2C5SCL/SSI2RX/T0CCP0/PB6; bidirectional. */
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: I2C5SDA/SSI2TX/T0CCP1/PB7; bidirectional. */
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: PG5/WT0CCP1/U2TX/I2C1SDA; bidirectional. */
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  /** Physical pin 33: PG4/WT0CCP0/U2RX/I2C1SCL; bidirectional. */
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  /** Physical pin 34: PG3/T5CCP1/I2C4SDA; bidirectional. */
  "PG3/T5CCP1/I2C4SDA": "34",
  /** Physical pin 35: PG2/T5CCP0/I2C4SCL; bidirectional. */
  "PG2/T5CCP0/I2C4SCL": "35",
  /** Physical pin 36: PG1/T4CCP1/I2C3SDA; bidirectional. */
  "PG1/T4CCP1/I2C3SDA": "36",
  /** Physical pin 37: PG0/T4CCP0/I2C3SCL; bidirectional. */
  "PG0/T4CCP0/I2C3SCL": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:TM4C1230H6PM";
  override referencePrefix = "U";
}

/**
 * Tiva ARM 32bit CortexM4 Microcotroller, 80MHz, 64kB Flash, 24kB SRAM, 2k EEPROM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:TM4C1231D5PM`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1231d5pm.pdf
 * Keywords: ARM Tiva Cortex M4 MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TM4C1231D5PM extends Component.withPins({
  /** Physical pin 1: SSI2RX/T0CCP0/PB6; bidirectional. */
  "SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: SSI2TX/T0CCP1/PB7; bidirectional. */
  "SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: ~{WAKE}; input. */
  "~{WAKE}": "32",
  /** Physical pin 33: ~{HIB}; open_collector. */
  "~{HIB}": "33",
  /** Physical pin 34: XOSC0; passive. */
  "XOSC0": "34",
  /** Physical pin 35: GNDX; power_in. */
  "GNDX": "35",
  /** Physical pin 36: XOSC1; passive. */
  "XOSC1": "36",
  /** Physical pin 37: VBAT; passive. */
  "VBAT": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; bidirectional. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:TM4C1231D5PM";
  override referencePrefix = "U";
}

/**
 * Tiva ARM 32bit CortexM4 Microcotroller, 80MHz, 128kB Flash, 32kB SRAM, 2k EEPROM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:TM4C1231E6PM`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1231e6pm.pdf
 * Keywords: ARM Tiva Cortex M4 MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TM4C1231E6PM extends Component.withPins({
  /** Physical pin 1: SSI2RX/T0CCP0/PB6; bidirectional. */
  "SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: SSI2TX/T0CCP1/PB7; bidirectional. */
  "SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: ~{WAKE}; input. */
  "~{WAKE}": "32",
  /** Physical pin 33: ~{HIB}; open_collector. */
  "~{HIB}": "33",
  /** Physical pin 34: XOSC0; passive. */
  "XOSC0": "34",
  /** Physical pin 35: GNDX; power_in. */
  "GNDX": "35",
  /** Physical pin 36: XOSC1; passive. */
  "XOSC1": "36",
  /** Physical pin 37: VBAT; passive. */
  "VBAT": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; bidirectional. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:TM4C1231E6PM";
  override referencePrefix = "U";
}

/**
 * Tiva ARM 32bit CortexM4 Microcotroller, 80MHz, 256kB Flash, 32kB SRAM, 2k EEPROM, LQFP64
 *
 * KiCad symbol: `MCU_Texas:TM4C1231H6PM`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5*.
 * @see http://www.ti.com/lit/ds/symlink/tm4c1231h6pm.pdf
 * Keywords: ARM Tiva Cortex M4 MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TM4C1231H6PM extends Component.withPins({
  /** Physical pin 1: SSI2RX/T0CCP0/PB6; bidirectional. */
  "SSI2RX/T0CCP0/PB6": "1",
  /** Physical pin 2: VDDA; power_in. */
  "VDDA": "2",
  /** Physical pin 3: GNDA; power_in. */
  "GNDA": "3",
  /** Physical pin 4: SSI2TX/T0CCP1/PB7; bidirectional. */
  "SSI2TX/T0CCP1/PB7": "4",
  /** Physical pin 5: PF4/T2CCP0; bidirectional. */
  "PF4/T2CCP0": "5",
  /** Physical pin 6: PE3/AIN0; bidirectional. */
  "PE3/AIN0": "6",
  /** Physical pin 7: PE2/AIN1; bidirectional. */
  "PE2/AIN1": "7",
  /** Physical pin 8: PE1/AIN2/U7TX; bidirectional. */
  "PE1/AIN2/U7TX": "8",
  /** Physical pin 9: PE0/AIN3/U7RX; bidirectional. */
  "PE0/AIN3/U7RX": "9",
  /** Physical pin 10: NMI/U2TX/WT5CCP1/PD7; bidirectional. */
  "NMI/U2TX/WT5CCP1/PD7": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: C0-/U3TX/WT1CCP1/PC7; bidirectional. */
  "C0-/U3TX/WT1CCP1/PC7": "13",
  /** Physical pin 14: C0+/U3RX/WT1CCP0/PC6; bidirectional. */
  "C0+/U3RX/WT1CCP0/PC6": "14",
  /** Physical pin 15: C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5; bidirectional. */
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  /** Physical pin 16: C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4; bidirectional. */
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  /** Physical pin 17: U0RX/PA0; bidirectional. */
  "U0RX/PA0": "17",
  /** Physical pin 18: U0TX/PA1; bidirectional. */
  "U0TX/PA1": "18",
  /** Physical pin 19: SSI0CLK/PA2; bidirectional. */
  "SSI0CLK/PA2": "19",
  /** Physical pin 20: SSI0FSS/PA3; bidirectional. */
  "SSI0FSS/PA3": "20",
  /** Physical pin 21: SSI0RX/PA4; bidirectional. */
  "SSI0RX/PA4": "21",
  /** Physical pin 22: SSI0TX/PA5; bidirectional. */
  "SSI0TX/PA5": "22",
  /** Physical pin 23: I2C1SCL/PA6; bidirectional. */
  "I2C1SCL/PA6": "23",
  /** Physical pin 24: I2C1SDA/PA7; bidirectional. */
  "I2C1SDA/PA7": "24",
  /** Physical pin 25: VDDC; power_in. */
  "VDDC_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI; bidirectional. */
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  /** Physical pin 29: PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1; bidirectional. */
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  /** Physical pin 30: PF2/T1CCP0/SSI1CLK/TRD0; bidirectional. */
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  /** Physical pin 31: PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK; bidirectional. */
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  /** Physical pin 32: ~{WAKE}; input. */
  "~{WAKE}": "32",
  /** Physical pin 33: ~{HIB}; open_collector. */
  "~{HIB}": "33",
  /** Physical pin 34: XOSC0; passive. */
  "XOSC0": "34",
  /** Physical pin 35: GNDX; power_in. */
  "GNDX": "35",
  /** Physical pin 36: XOSC1; passive. */
  "XOSC1": "36",
  /** Physical pin 37: VBAT; passive. */
  "VBAT": "37",
  /** Physical pin 38: ~{RST}; input. */
  "~{RST}": "38",
  /** Physical pin 39: GND; bidirectional. */
  "GND_39": "39",
  /** Physical pin 40: OSC0; passive. */
  "OSC0": "40",
  /** Physical pin 41: OSC1; passive. */
  "OSC1": "41",
  /** Physical pin 42: VDD; power_in. */
  "VDD_42": "42",
  /** Physical pin 43: U6RX/WT4CCP0/PD4; bidirectional. */
  "U6RX/WT4CCP0/PD4": "43",
  /** Physical pin 44: U6TX/WT4CCP1/PD5; bidirectional. */
  "U6TX/WT4CCP1/PD5": "44",
  /** Physical pin 45: U1RX/T2CCP0/PB0; bidirectional. */
  "U1RX/T2CCP0/PB0": "45",
  /** Physical pin 46: U1TX/T2CCP1/PB1; bidirectional. */
  "U1TX/T2CCP1/PB1": "46",
  /** Physical pin 47: I2C0SCL/T3CCP0/PB2; bidirectional. */
  "I2C0SCL/T3CCP0/PB2": "47",
  /** Physical pin 48: I2C0SDA/T3CCP1/PB3; bidirectional. */
  "I2C0SDA/T3CCP1/PB3": "48",
  /** Physical pin 49: TDO/SWO/T5CCP1/PC3; bidirectional. */
  "TDO/SWO/T5CCP1/PC3": "49",
  /** Physical pin 50: TDI/T5CCP0/PC2; bidirectional. */
  "TDI/T5CCP0/PC2": "50",
  /** Physical pin 51: TMS/SWDIO/T4CCP1/PC1; bidirectional. */
  "TMS/SWDIO/T4CCP1/PC1": "51",
  /** Physical pin 52: TCK/SWCLK/T4CCP0/PC0; bidirectional. */
  "TCK/SWCLK/T4CCP0/PC0": "52",
  /** Physical pin 53: U2RX/WT5CCP0/PD6; bidirectional. */
  "U2RX/WT5CCP0/PD6": "53",
  /** Physical pin 54: VDD; power_in. */
  "VDD_54": "54",
  /** Physical pin 55: GND; power_in. */
  "GND_55": "55",
  /** Physical pin 56: VDDC; power_in. */
  "VDDC_56": "56",
  /** Physical pin 57: AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5; bidirectional. */
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  /** Physical pin 58: AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4; bidirectional. */
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  /** Physical pin 59: PE4/AIN9/U5RX/I2C2SCL/CAN0RX; bidirectional. */
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  /** Physical pin 60: PE5/AIN8/U5TX/I2C2SDA/CAN0TX; bidirectional. */
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  /** Physical pin 61: AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0; bidirectional. */
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  /** Physical pin 62: AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1; bidirectional. */
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  /** Physical pin 63: AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2; bidirectional. */
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  /** Physical pin 64: AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3; bidirectional. */
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  override schema = "MCU_Texas:TM4C1231H6PM";
  override referencePrefix = "U";
}

/**
 * TMS320LF2406
 *
 * KiCad symbol: `MCU_Texas:TMS320LF2406`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TMS320LF2406 extends Component.withPins({
  /** Physical pin 77: ADCIN1; input. */
  "ADCIN1": "77",
  /** Physical pin 0: BOOT_EN* /XF; input. */
  "BOOT_EN*/XF": "0",
  /** Physical pin 1: TRST; input. */
  "TRST": "1",
  /** Physical pin 2: TDIRB/IOPF4; bidirectional. */
  "TDIRB/IOPF4": "2",
  /** Physical pin 3: GNDO; power_in. */
  "GNDO_3": "3",
  /** Physical pin 4: VDDO; power_in. */
  "VDDO_4": "4",
  /** Physical pin 5: T4PWM/T4CMP/IOPF3; bidirectional. */
  "T4PWM/T4CMP/IOPF3": "5",
  /** Physical pin 6: PDPINTA; input. */
  "PDPINTA": "6",
  /** Physical pin 7: T3PWM/T3CMP/IOPF2; bidirectional. */
  "T3PWM/T3CMP/IOPF2": "7",
  /** Physical pin 8: PLLF2; input. */
  "PLLF2": "8",
  /** Physical pin 9: PLLF; input. */
  "PLLF": "9",
  /** Physical pin 10: PLLVCCA; power_in. */
  "PLLVCCA": "10",
  /** Physical pin 11: TDIRA/IOPB6; bidirectional. */
  "TDIRA/IOPB6": "11",
  /** Physical pin 12: T1PWM/T1CMP/IOPB4; bidirectional. */
  "T1PWM/T1CMP/IOPB4": "12",
  /** Physical pin 13: T2PWM/T2CMP/IOPB5; bidirectional. */
  "T2PWM/T2CMP/IOPB5": "13",
  /** Physical pin 14: IOPC0; bidirectional. */
  "IOPC0": "14",
  /** Physical pin 15: XINT2/ADSOC/IOPD0; bidirectional. */
  "XINT2/ADSOC/IOPD0": "15",
  /** Physical pin 16: XINT1/IOPA2; bidirectional. */
  "XINT1/IOPA2": "16",
  /** Physical pin 17: SCITxD/IOPA0; bidirectional. */
  "SCITxD/IOPA0": "17",
  /** Physical pin 18: SCIRxD/IOPA1; bidirectional. */
  "SCIRxD/IOPA1": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD_20": "20",
  /** Physical pin 21: SPISIMO/IOPC2; bidirectional. */
  "SPISIMO/IOPC2": "21",
  /** Physical pin 22: SPISOMI/IOPC3; bidirectional. */
  "SPISOMI/IOPC3": "22",
  /** Physical pin 23: SPISTE* /IOPC5; bidirectional. */
  "SPISTE*/IOPC5": "23",
  /** Physical pin 24: SPICLK/IOPC4; bidirectional. */
  "SPICLK/IOPC4": "24",
  /** Physical pin 25: TMS2; input. */
  "TMS2": "25",
  /** Physical pin 26: TCLKINA/IOPB7; bidirectional. */
  "TCLKINA/IOPB7": "26",
  /** Physical pin 27: PWM12/IOPE6; bidirectional. */
  "PWM12/IOPE6": "27",
  /** Physical pin 28: PWM6/IOPB3; bidirectional. */
  "PWM6/IOPB3": "28",
  /** Physical pin 29: GNDO; power_in. */
  "GNDO_29": "29",
  /** Physical pin 30: VDDO; power_in. */
  "VDDO_30": "30",
  /** Physical pin 31: PWM5/IOPB2; bidirectional. */
  "PWM5/IOPB2": "31",
  /** Physical pin 32: PWM11/IOPE5; bidirectional. */
  "PWM11/IOPE5": "32",
  /** Physical pin 33: PWM4/IOPB1; bidirectional. */
  "PWM4/IOPB1": "33",
  /** Physical pin 34: GND; power_in. */
  "GND_34": "34",
  /** Physical pin 35: VDD; power_in. */
  "VDD_35": "35",
  /** Physical pin 36: PWM3/IOPB0; bidirectional. */
  "PWM3/IOPB0": "36",
  /** Physical pin 37: PWM2/IOPA7; bidirectional. */
  "PWM2/IOPA7": "37",
  /** Physical pin 38: PWM10/IOPE4; bidirectional. */
  "PWM10/IOPE4": "38",
  /** Physical pin 39: PWM1/IOPA6; bidirectional. */
  "PWM1/IOPA6": "39",
  /** Physical pin 40: VprogFLASH; input. */
  "VprogFLASH": "40",
  /** Physical pin 41: PWM9/IOPE3; bidirectional. */
  "PWM9/IOPE3": "41",
  /** Physical pin 43: PWM8/IOPE2; bidirectional. */
  "PWM8/IOPE2": "43",
  /** Physical pin 45: PWM7/IOPE1; bidirectional. */
  "PWM7/IOPE1": "45",
  /** Physical pin 46: GNDO; power_in. */
  "GNDO_46": "46",
  /** Physical pin 48: CAP6/IOPF1; bidirectional. */
  "CAP6/IOPF1": "48",
  /** Physical pin 49: CANRX/IOPC7; bidirectional. */
  "CANRX/IOPC7": "49",
  /** Physical pin 50: CANTX/IOPC6; bidirectional. */
  "CANTX/IOPC6": "50",
  /** Physical pin 51: CLKOUT/IOPE0; bidirectional. */
  "CLKOUT/IOPE0": "51",
  /** Physical pin 52: CAP3/QEP3/IOPA5; bidirectional. */
  "CAP3/QEP3/IOPA5": "52",
  /** Physical pin 53: GNDO; power_in. */
  "GNDO_53": "53",
  /** Physical pin 54: VDDO; power_in. */
  "VDDO_54": "54",
  /** Physical pin 55: CAP2/QEP2/IOPA4; bidirectional. */
  "CAP2/QEP2/IOPA4": "55",
  /** Physical pin 56: CAP5/QEP4/IOPF0; bidirectional. */
  "CAP5/QEP4/IOPF0": "56",
  /** Physical pin 57: CAP1/QEP1/IOPA3; bidirectional. */
  "CAP1/QEP1/IOPA3": "57",
  /** Physical pin 58: GND; power_in. */
  "GND_58": "58",
  /** Physical pin 59: VDD; power_in. */
  "VDD_59": "59",
  /** Physical pin 60: CAP4/QEP3/IOPE7; bidirectional. */
  "CAP4/QEP3/IOPE7": "60",
  /** Physical pin 61: EMU0; bidirectional. */
  "EMU0": "61",
  /** Physical pin 62: EMU1/OFF*; bidirectional. */
  "EMU1/OFF*": "62",
  /** Physical pin 63: GNDO; power_in. */
  "GNDO_63": "63",
  /** Physical pin 64: VDDO; power_in. */
  "VDDO_64": "64",
  /** Physical pin 65: ADCIN15; input. */
  "ADCIN15": "65",
  /** Physical pin 66: ADCIN7; input. */
  "ADCIN7": "66",
  /** Physical pin 67: ADCIN6; input. */
  "ADCIN6": "67",
  /** Physical pin 68: ADCIN14; input. */
  "ADCIN14": "68",
  /** Physical pin 69: ADCIN5; input. */
  "ADCIN5": "69",
  /** Physical pin 71: ADCIN13; input. */
  "ADCIN13": "71",
  /** Physical pin 72: ADCIN3; input. */
  "ADCIN3": "72",
  /** Physical pin 73: ADCIN12; input. */
  "ADCIN12": "73",
  /** Physical pin 74: ADCIN2; input. */
  "ADCIN2": "74",
  /** Physical pin 75: ADCIN11; input. */
  "ADCIN11": "75",
  /** Physical pin 76: ADCIN10; input. */
  "ADCIN10": "76",
  /** Physical pin 78: ADCIN9; input. */
  "ADCIN9": "78",
  /** Physical pin 79: ADCIN0; input. */
  "ADCIN0": "79",
  /** Physical pin 80: ADCIN8; input. */
  "ADCIN8": "80",
  /** Physical pin 81: VREFLO; input. */
  "VREFLO": "81",
  /** Physical pin 82: VREFHI; input. */
  "VREFHI": "82",
  /** Physical pin 83: VCCA; power_in. */
  "VCCA": "83",
  /** Physical pin 84: GNDA; power_in. */
  "GNDA": "84",
  /** Physical pin 85: BIO* /IOPC1; bidirectional. */
  "BIO*/IOPC1": "85",
  /** Physical pin 87: XTAL1/CLKIN; input. */
  "XTAL1/CLKIN": "87",
  /** Physical pin 88: XTAL2; output. */
  "XTAL2": "88",
  /** Physical pin 89: TCKINB/IOPF5; bidirectional. */
  "TCKINB/IOPF5": "89",
  /** Physical pin 90: GND; power_in. */
  "GND_90": "90",
  /** Physical pin 91: VDD; power_in. */
  "VDD_91": "91",
  /** Physical pin 92: IOPF6; bidirectional. */
  "IOPF6": "92",
  /** Physical pin 93: RESET; input. */
  "RESET": "93",
  /** Physical pin 94: TCK; bidirectional. */
  "TCK": "94",
  /** Physical pin 95: PDPINTB; input. */
  "PDPINTB": "95",
  /** Physical pin 96: TDI; input. */
  "TDI": "96",
  /** Physical pin 97: GNDO; power_in. */
  "GNDO_97": "97",
  /** Physical pin 98: VDDO; power_in. */
  "VDDO_98": "98",
  /** Physical pin 99: TDO; output. */
  "TDO": "99",
  /** Physical pin 100: TMS; input. */
  "TMS": "100",
}) {
  override schema = "MCU_Texas:TMS320LF2406";
  override referencePrefix = "U";
}

/**
 * ARM7TDM Microcontroller, 768KB Flash, 48KB RAM, PQFP-144
 *
 * KiCad symbol: `MCU_Texas:TMS470R1B768`. Reference prefix: `U`.
 * Footprint filters: PQFP-144*.
 * @see http://www.ti.com/lit/ds/symlink/tms470r1b768.pdf
 * Keywords: ARM 7TDM uC TMS470.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TMS470R1B768 extends Component.withPins({
  /** Physical pin 1: ~{SPI1ENA}; passive. */
  "~{SPI1ENA}": "1",
  /** Physical pin 2: ~{SPI1SCS}; passive. */
  "~{SPI1SCS}": "2",
  /** Physical pin 3: SPI1SIMO; passive. */
  "SPI1SIMO": "3",
  /** Physical pin 4: SPI1SOMI; passive. */
  "SPI1SOMI": "4",
  /** Physical pin 5: SPI1CLK; passive. */
  "SPI1CLK": "5",
  /** Physical pin 6: ~{SPI4ENA}; passive. */
  "~{SPI4ENA}": "6",
  /** Physical pin 7: ~{SPI4SCS}; passive. */
  "~{SPI4SCS}": "7",
  /** Physical pin 8: SPI4SIMO; passive. */
  "SPI4SIMO": "8",
  /** Physical pin 9: SPI4SOMI; passive. */
  "SPI4SOMI": "9",
  /** Physical pin 10: SPI4CLK; passive. */
  "SPI4CLK": "10",
  /** Physical pin 11: Vss; power_in. */
  "Vss_11": "11",
  /** Physical pin 12: OSCOUT; passive. */
  "OSCOUT": "12",
  /** Physical pin 13: OSCIN; passive. */
  "OSCIN": "13",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc_14": "14",
  /** Physical pin 15: ~{RST}; input. */
  "~{RST}": "15",
  /** Physical pin 16: VssIO; power_in. */
  "VssIO_16": "16",
  /** Physical pin 17: VccIO; power_in. */
  "VccIO_17": "17",
  /** Physical pin 18: GIOD[3]; passive. */
  "GIOD[3]": "18",
  /** Physical pin 19: GIOD[2]; passive. */
  "GIOD[2]": "19",
  /** Physical pin 20: GIOD[1]; passive. */
  "GIOD[1]": "20",
  /** Physical pin 21: GIOD[0]; passive. */
  "GIOD[0]": "21",
  /** Physical pin 22: HET[17]; passive. */
  "HET[17]": "22",
  /** Physical pin 23: HET[16]; passive. */
  "HET[16]": "23",
  /** Physical pin 24: HET[15]; passive. */
  "HET[15]": "24",
  /** Physical pin 25: HET[14]; passive. */
  "HET[14]": "25",
  /** Physical pin 26: HET[13]; passive. */
  "HET[13]": "26",
  /** Physical pin 27: HET[12]; passive. */
  "HET[12]": "27",
  /** Physical pin 28: HET[11]; passive. */
  "HET[11]": "28",
  /** Physical pin 29: HET[10]; passive. */
  "HET[10]": "29",
  /** Physical pin 30: Vss; passive. */
  "Vss_30": "30",
  /** Physical pin 31: Vcc; passive. */
  "Vcc_31": "31",
  /** Physical pin 32: ~{PORST}; input. */
  "~{PORST}": "32",
  /** Physical pin 33: GIOA[7]/INT7; passive. */
  "GIOA[7]/INT7": "33",
  /** Physical pin 34: GIOA[6]/INT6; passive. */
  "GIOA[6]/INT6": "34",
  /** Physical pin 35: GIOA[5]/INT5; passive. */
  "GIOA[5]/INT5": "35",
  /** Physical pin 36: GIOA[4]/INT4; passive. */
  "GIOA[4]/INT4": "36",
  /** Physical pin 37: ~{TRST}; input. */
  "~{TRST}": "37",
  /** Physical pin 38: TEST; passive. */
  "TEST": "38",
  /** Physical pin 39: GIOA[0]/INT0; input. */
  "GIOA[0]/INT0": "39",
  /** Physical pin 40: GIOA[1]/INT1/ECLK; passive. */
  "GIOA[1]/INT1/ECLK": "40",
  /** Physical pin 41: GIOA[2]/INT2; passive. */
  "GIOA[2]/INT2": "41",
  /** Physical pin 42: GIOA[3]/INT3; passive. */
  "GIOA[3]/INT3": "42",
  /** Physical pin 43: SCI2RX; passive. */
  "SCI2RX": "43",
  /** Physical pin 44: SCI2TX; passive. */
  "SCI2TX": "44",
  /** Physical pin 45: SCI2CLK; passive. */
  "SCI2CLK": "45",
  /** Physical pin 46: ~{SPI5SCS}; passive. */
  "~{SPI5SCS}": "46",
  /** Physical pin 47: HET[28]; passive. */
  "HET[28]": "47",
  /** Physical pin 48: HET[29]; passive. */
  "HET[29]": "48",
  /** Physical pin 49: HET[30]; passive. */
  "HET[30]": "49",
  /** Physical pin 50: HET[31]; passive. */
  "HET[31]": "50",
  /** Physical pin 51: HET[24]; passive. */
  "HET[24]": "51",
  /** Physical pin 52: VssIO; power_in. */
  "VssIO_52": "52",
  /** Physical pin 53: VccIO; power_in. */
  "VccIO_53": "53",
  /** Physical pin 54: Vss; power_in. */
  "Vss_54": "54",
  /** Physical pin 55: Vcc; unspecified. */
  "Vcc_55": "55",
  /** Physical pin 56: CAN2HTX; passive. */
  "CAN2HTX": "56",
  /** Physical pin 57: CAN2HRX; passive. */
  "CAN2HRX": "57",
  /** Physical pin 58: SPI5SIMO; passive. */
  "SPI5SIMO": "58",
  /** Physical pin 59: SPI5SOMI; passive. */
  "SPI5SOMI": "59",
  /** Physical pin 60: SPI5CLK; passive. */
  "SPI5CLK": "60",
  /** Physical pin 61: ~{SPI5ENA}; passive. */
  "~{SPI5ENA}": "61",
  /** Physical pin 62: SPI2CLK; passive. */
  "SPI2CLK": "62",
  /** Physical pin 63: SPI2SIMO; passive. */
  "SPI2SIMO": "63",
  /** Physical pin 64: SPI2SOMI; passive. */
  "SPI2SOMI": "64",
  /** Physical pin 65: ~{SPI2ENA}; passive. */
  "~{SPI2ENA}": "65",
  /** Physical pin 66: ~{SPI2SCS}; passive. */
  "~{SPI2SCS}": "66",
  /** Physical pin 67: HET[22]; passive. */
  "HET[22]": "67",
  /** Physical pin 68: HET[21]; passive. */
  "HET[21]": "68",
  /** Physical pin 69: HET[20]; passive. */
  "HET[20]": "69",
  /** Physical pin 70: HET[19]; passive. */
  "HET[19]": "70",
  /** Physical pin 71: HET[18]; passive. */
  "HET[18]": "71",
  /** Physical pin 72: AWD; passive. */
  "AWD": "72",
  /** Physical pin 73: PLLDIS; passive. */
  "PLLDIS": "73",
  /** Physical pin 74: TDI; passive. */
  "TDI": "74",
  /** Physical pin 75: TDO5; passive. */
  "TDO5": "75",
  /** Physical pin 76: TCK; passive. */
  "TCK": "76",
  /** Physical pin 77: CAN3HRX; passive. */
  "CAN3HRX": "77",
  /** Physical pin 78: CAN3HTX; passive. */
  "CAN3HTX": "78",
  /** Physical pin 79: HET[8]; passive. */
  "HET[8]": "79",
  /** Physical pin 80: HET[9]; passive. */
  "HET[9]": "80",
  /** Physical pin 81: VssIO; passive. */
  "VssIO_81": "81",
  /** Physical pin 82: VccIO; passive. */
  "VccIO_82": "82",
  /** Physical pin 83: CLKOUT; passive. */
  "CLKOUT": "83",
  /** Physical pin 84: GIOB[7]; passive. */
  "GIOB[7]": "84",
  /** Physical pin 85: Vss; passive. */
  "Vss_85": "85",
  /** Physical pin 86: Vcc; passive. */
  "Vcc_86": "86",
  /** Physical pin 87: CAN1HRX; passive. */
  "CAN1HRX": "87",
  /** Physical pin 88: CAN1HTX; passive. */
  "CAN1HTX": "88",
  /** Physical pin 89: SCI1CLK; passive. */
  "SCI1CLK": "89",
  /** Physical pin 90: SCI1TX; passive. */
  "SCI1TX": "90",
  /** Physical pin 91: SCI1RX; passive. */
  "SCI1RX": "91",
  /** Physical pin 92: Vss; passive. */
  "Vss_92": "92",
  /** Physical pin 93: Vcc; passive. */
  "Vcc_93": "93",
  /** Physical pin 94: SPI3CLK; passive. */
  "SPI3CLK": "94",
  /** Physical pin 95: SPI3SOMI; passive. */
  "SPI3SOMI": "95",
  /** Physical pin 96: SPI3SIMO; passive. */
  "SPI3SIMO": "96",
  /** Physical pin 97: ~{SPI3SCS}; passive. */
  "~{SPI3SCS}": "97",
  /** Physical pin 98: ~{SPI3ENA}; passive. */
  "~{SPI3ENA}": "98",
  /** Physical pin 99: ADEVT; passive. */
  "ADEVT": "99",
  /** Physical pin 100: ADIN[7]; passive. */
  "ADIN[7]": "100",
  /** Physical pin 101: ADIN[6]; passive. */
  "ADIN[6]": "101",
  /** Physical pin 102: ADIN[5]; passive. */
  "ADIN[5]": "102",
  /** Physical pin 103: ADIN[15]; passive. */
  "ADIN[15]": "103",
  /** Physical pin 104: ADIN[4]; passive. */
  "ADIN[4]": "104",
  /** Physical pin 105: ADIN[3]; passive. */
  "ADIN[3]": "105",
  /** Physical pin 106: ADIN[2]; passive. */
  "ADIN[2]": "106",
  /** Physical pin 107: ADIN[1]; passive. */
  "ADIN[1]": "107",
  /** Physical pin 108: ADIN[0]; passive. */
  "ADIN[0]": "108",
  /** Physical pin 109: ADIN[11]; passive. */
  "ADIN[11]": "109",
  /** Physical pin 110: ADIN[14]; passive. */
  "ADIN[14]": "110",
  /** Physical pin 111: ADIN[10]; passive. */
  "ADIN[10]": "111",
  /** Physical pin 112: ADIN[13]; passive. */
  "ADIN[13]": "112",
  /** Physical pin 113: ADIN[9]; passive. */
  "ADIN[9]": "113",
  /** Physical pin 114: ADIN[12]; passive. */
  "ADIN[12]": "114",
  /** Physical pin 115: ADIN[8]; passive. */
  "ADIN[8]": "115",
  /** Physical pin 116: ADRefHi; passive. */
  "ADRefHi": "116",
  /** Physical pin 117: ADRefLo; passive. */
  "ADRefLo": "117",
  /** Physical pin 118: VccAD; passive. */
  "VccAD": "118",
  /** Physical pin 119: VssAD; passive. */
  "VssAD": "119",
  /** Physical pin 120: TMS; passive. */
  "TMS": "120",
  /** Physical pin 121: TMS2; passive. */
  "TMS2": "121",
  /** Physical pin 122: GIOC[0]; passive. */
  "GIOC[0]": "122",
  /** Physical pin 123: HET[23]; passive. */
  "HET[23]": "123",
  /** Physical pin 124: HET[25]; passive. */
  "HET[25]": "124",
  /** Physical pin 125: HET[26]; passive. */
  "HET[26]": "125",
  /** Physical pin 126: HET[27]; passive. */
  "HET[27]": "126",
  /** Physical pin 127: Vss; passive. */
  "Vss_127": "127",
  /** Physical pin 128: Vcc; passive. */
  "Vcc_128": "128",
  /** Physical pin 129: HET[0]; passive. */
  "HET[0]": "129",
  /** Physical pin 130: HET[1]; passive. */
  "HET[1]": "130",
  /** Physical pin 131: Vss; passive. */
  "Vss_131": "131",
  /** Physical pin 132: Vcc; passive. */
  "Vcc_132": "132",
  /** Physical pin 133: FLTP2; passive. */
  "FLTP2": "133",
  /** Physical pin 134: FLTP1; passive. */
  "FLTP1": "134",
  /** Physical pin 135: VccP; passive. */
  "VccP": "135",
  /** Physical pin 136: Vss; passive. */
  "Vss_136": "136",
  /** Physical pin 137: HET[2]; passive. */
  "HET[2]": "137",
  /** Physical pin 138: HET[3]; passive. */
  "HET[3]": "138",
  /** Physical pin 139: HET[4]; passive. */
  "HET[4]": "139",
  /** Physical pin 140: HET[5]; passive. */
  "HET[5]": "140",
  /** Physical pin 141: HET[6]; passive. */
  "HET[6]": "141",
  /** Physical pin 142: HET[7]; passive. */
  "HET[7]": "142",
  /** Physical pin 143: GIOC[1]; passive. */
  "GIOC[1]": "143",
  /** Physical pin 144: GIOC[2]; passive. */
  "GIOC[2]": "144",
}) {
  override schema = "MCU_Texas:TMS470R1B768";
  override referencePrefix = "U";
}

