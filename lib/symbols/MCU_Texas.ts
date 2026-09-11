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
 */
export class LM3S6911_EQC50 extends Component.withPins({
  "PE7": "1",
  "PE6/C1O": "2",
  "VDDA_3": "3",
  "GNDA_4": "4",
  "PE5": "5",
  "PE4": "6",
  "LDO": "7",
  "VDD_8": "8",
  "GND_9": "9",
  "PD0": "10",
  "PD1": "11",
  "PD2/U1RX": "12",
  "PD3/U1TX": "13",
  "VDD25_14": "14",
  "GND_15": "15",
  "XTALPPHY": "16",
  "XTALNPHY": "17",
  "PG1/U2TX": "18",
  "PG0/U2RX": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "CCP4/PC7": "22",
  "CCP3/PC6": "23",
  "C1+/C0O/PC5": "24",
  "CCP5/PC4": "25",
  "U0RX/PA0": "26",
  "U0TX/PA1": "27",
  "SSI0CLK/PA2": "28",
  "SSI0FSS/PA3": "29",
  "SSI0RX/PA4": "30",
  "SSI0TX/PA5": "31",
  "VDD_32": "32",
  "GND_33": "33",
  "I2C1SCL/PA6": "34",
  "I2C1SDA/PA7": "35",
  "VCCPHY_36": "36",
  "RXIN": "37",
  "VDD25_38": "38",
  "GND_39": "39",
  "RXIP": "40",
  "ERBIAS": "41",
  "GNDPHY_42": "42",
  "TXOP": "43",
  "VDD_44": "44",
  "GND_45": "45",
  "TXON": "46",
  "PF0": "47",
  "OSC0": "48",
  "OSC1": "49",
  "~{WAKE}": "50",
  "~{HIB}": "51",
  "XOSC0": "52",
  "XOSC1": "53",
  "GND_54": "54",
  "VBAT": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "MDIO": "58",
  "PF3/LED0": "59",
  "PF2/LED1": "60",
  "PF1": "61",
  "VDD25_62": "62",
  "GND_63": "63",
  "~{RST}": "64",
  "CMOD0": "65",
  "CCP0/PB0": "66",
  "CCP2/PB1": "67",
  "VDD_68": "68",
  "GND_69": "69",
  "I2C0SCL/PB2": "70",
  "I2C0SDA/PB3": "71",
  "PE0/SSI1CLK": "72",
  "PE1/SSI1FSS": "73",
  "PE2/SSI1RX": "74",
  "PE3/SSI1TX": "75",
  "CMOD1": "76",
  "SWO/TDO/PC3": "77",
  "TDI/PC2": "78",
  "SWDIO/TMS/PC1": "79",
  "SWCLK/TCK/PC0": "80",
  "VDD_81": "81",
  "GND_82": "82",
  "VCCPHY_83": "83",
  "VCCPHY_84": "84",
  "GNDPHY_85": "85",
  "GNDPHY_86": "86",
  "GND_87": "87",
  "VDD25_88": "88",
  "~{TRST}/PB7": "89",
  "C0+/PB6": "90",
  "C1-/PB5": "91",
  "C0-/PB4": "92",
  "VDD_93": "93",
  "GND_94": "94",
  "PD4": "95",
  "PD5": "96",
  "GNDA_97": "97",
  "VDDA_98": "98",
  "PD6": "99",
  "PD7/CCP1": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE7: "bidirectional", "PE6/C1O": "bidirectional", VDDA_3: "power_in", GNDA_4: "power_in", PE5: "bidirectional", PE4: "bidirectional", LDO: "passive", VDD_8: "power_in", GND_9: "power_in", PD0: "bidirectional", PD1: "bidirectional", "PD2/U1RX": "bidirectional", "PD3/U1TX": "bidirectional", VDD25_14: "power_in", GND_15: "power_in", XTALPPHY: "passive", XTALNPHY: "passive", "PG1/U2TX": "bidirectional", "PG0/U2RX": "bidirectional", VDD_20: "power_in", GND_21: "power_in", "CCP4/PC7": "bidirectional", "CCP3/PC6": "bidirectional", "C1+/C0O/PC5": "bidirectional", "CCP5/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", VDD_32: "power_in", GND_33: "power_in", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VCCPHY_36: "power_in", RXIN: "passive", VDD25_38: "power_in", GND_39: "power_in", RXIP: "passive", ERBIAS: "passive", GNDPHY_42: "power_in", TXOP: "passive", VDD_44: "power_in", GND_45: "power_in", TXON: "passive", PF0: "bidirectional", OSC0: "passive", OSC1: "passive", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", XOSC1: "passive", GND_54: "power_in", VBAT: "passive", VDD_56: "power_in", GND_57: "power_in", MDIO: "input", "PF3/LED0": "bidirectional", "PF2/LED1": "bidirectional", PF1: "bidirectional", VDD25_62: "power_in", GND_63: "power_in", "~{RST}": "input", CMOD0: "input", "CCP0/PB0": "bidirectional", "CCP2/PB1": "bidirectional", VDD_68: "power_in", GND_69: "power_in", "I2C0SCL/PB2": "bidirectional", "I2C0SDA/PB3": "bidirectional", "PE0/SSI1CLK": "bidirectional", "PE1/SSI1FSS": "bidirectional", "PE2/SSI1RX": "bidirectional", "PE3/SSI1TX": "bidirectional", CMOD1: "input", "SWO/TDO/PC3": "bidirectional", "TDI/PC2": "bidirectional", "SWDIO/TMS/PC1": "bidirectional", "SWCLK/TCK/PC0": "bidirectional", VDD_81: "power_in", GND_82: "power_in", VCCPHY_83: "power_in", VCCPHY_84: "power_in", GNDPHY_85: "power_in", GNDPHY_86: "power_in", GND_87: "power_in", VDD25_88: "power_in", "~{TRST}/PB7": "bidirectional", "C0+/PB6": "bidirectional", "C1-/PB5": "bidirectional", "C0-/PB4": "bidirectional", VDD_93: "power_in", GND_94: "power_in", PD4: "bidirectional", PD5: "bidirectional", GNDA_97: "power_in", VDDA_98: "power_in", PD6: "bidirectional", "PD7/CCP1": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LM3S6911_IQC50 extends Component.withPins({
  "PE7": "1",
  "PE6/C1O": "2",
  "VDDA_3": "3",
  "GNDA_4": "4",
  "PE5": "5",
  "PE4": "6",
  "LDO": "7",
  "VDD_8": "8",
  "GND_9": "9",
  "PD0": "10",
  "PD1": "11",
  "PD2/U1RX": "12",
  "PD3/U1TX": "13",
  "VDD25_14": "14",
  "GND_15": "15",
  "XTALPPHY": "16",
  "XTALNPHY": "17",
  "PG1/U2TX": "18",
  "PG0/U2RX": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "CCP4/PC7": "22",
  "CCP3/PC6": "23",
  "C1+/C0O/PC5": "24",
  "CCP5/PC4": "25",
  "U0RX/PA0": "26",
  "U0TX/PA1": "27",
  "SSI0CLK/PA2": "28",
  "SSI0FSS/PA3": "29",
  "SSI0RX/PA4": "30",
  "SSI0TX/PA5": "31",
  "VDD_32": "32",
  "GND_33": "33",
  "I2C1SCL/PA6": "34",
  "I2C1SDA/PA7": "35",
  "VCCPHY_36": "36",
  "RXIN": "37",
  "VDD25_38": "38",
  "GND_39": "39",
  "RXIP": "40",
  "ERBIAS": "41",
  "GNDPHY_42": "42",
  "TXOP": "43",
  "VDD_44": "44",
  "GND_45": "45",
  "TXON": "46",
  "PF0": "47",
  "OSC0": "48",
  "OSC1": "49",
  "~{WAKE}": "50",
  "~{HIB}": "51",
  "XOSC0": "52",
  "XOSC1": "53",
  "GND_54": "54",
  "VBAT": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "MDIO": "58",
  "PF3/LED0": "59",
  "PF2/LED1": "60",
  "PF1": "61",
  "VDD25_62": "62",
  "GND_63": "63",
  "~{RST}": "64",
  "CMOD0": "65",
  "CCP0/PB0": "66",
  "CCP2/PB1": "67",
  "VDD_68": "68",
  "GND_69": "69",
  "I2C0SCL/PB2": "70",
  "I2C0SDA/PB3": "71",
  "PE0/SSI1CLK": "72",
  "PE1/SSI1FSS": "73",
  "PE2/SSI1RX": "74",
  "PE3/SSI1TX": "75",
  "CMOD1": "76",
  "SWO/TDO/PC3": "77",
  "TDI/PC2": "78",
  "SWDIO/TMS/PC1": "79",
  "SWCLK/TCK/PC0": "80",
  "VDD_81": "81",
  "GND_82": "82",
  "VCCPHY_83": "83",
  "VCCPHY_84": "84",
  "GNDPHY_85": "85",
  "GNDPHY_86": "86",
  "GND_87": "87",
  "VDD25_88": "88",
  "~{TRST}/PB7": "89",
  "C0+/PB6": "90",
  "C1-/PB5": "91",
  "C0-/PB4": "92",
  "VDD_93": "93",
  "GND_94": "94",
  "PD4": "95",
  "PD5": "96",
  "GNDA_97": "97",
  "VDDA_98": "98",
  "PD6": "99",
  "PD7/CCP1": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE7: "bidirectional", "PE6/C1O": "bidirectional", VDDA_3: "power_in", GNDA_4: "power_in", PE5: "bidirectional", PE4: "bidirectional", LDO: "passive", VDD_8: "power_in", GND_9: "power_in", PD0: "bidirectional", PD1: "bidirectional", "PD2/U1RX": "bidirectional", "PD3/U1TX": "bidirectional", VDD25_14: "power_in", GND_15: "power_in", XTALPPHY: "passive", XTALNPHY: "passive", "PG1/U2TX": "bidirectional", "PG0/U2RX": "bidirectional", VDD_20: "power_in", GND_21: "power_in", "CCP4/PC7": "bidirectional", "CCP3/PC6": "bidirectional", "C1+/C0O/PC5": "bidirectional", "CCP5/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", VDD_32: "power_in", GND_33: "power_in", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VCCPHY_36: "power_in", RXIN: "passive", VDD25_38: "power_in", GND_39: "power_in", RXIP: "passive", ERBIAS: "passive", GNDPHY_42: "power_in", TXOP: "passive", VDD_44: "power_in", GND_45: "power_in", TXON: "passive", PF0: "bidirectional", OSC0: "passive", OSC1: "passive", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", XOSC1: "passive", GND_54: "power_in", VBAT: "passive", VDD_56: "power_in", GND_57: "power_in", MDIO: "input", "PF3/LED0": "bidirectional", "PF2/LED1": "bidirectional", PF1: "bidirectional", VDD25_62: "power_in", GND_63: "power_in", "~{RST}": "input", CMOD0: "input", "CCP0/PB0": "bidirectional", "CCP2/PB1": "bidirectional", VDD_68: "power_in", GND_69: "power_in", "I2C0SCL/PB2": "bidirectional", "I2C0SDA/PB3": "bidirectional", "PE0/SSI1CLK": "bidirectional", "PE1/SSI1FSS": "bidirectional", "PE2/SSI1RX": "bidirectional", "PE3/SSI1TX": "bidirectional", CMOD1: "input", "SWO/TDO/PC3": "bidirectional", "TDI/PC2": "bidirectional", "SWDIO/TMS/PC1": "bidirectional", "SWCLK/TCK/PC0": "bidirectional", VDD_81: "power_in", GND_82: "power_in", VCCPHY_83: "power_in", VCCPHY_84: "power_in", GNDPHY_85: "power_in", GNDPHY_86: "power_in", GND_87: "power_in", VDD25_88: "power_in", "~{TRST}/PB7": "bidirectional", "C0+/PB6": "bidirectional", "C1-/PB5": "bidirectional", "C0-/PB4": "bidirectional", VDD_93: "power_in", GND_94: "power_in", PD4: "bidirectional", PD5: "bidirectional", GNDA_97: "power_in", VDDA_98: "power_in", PD6: "bidirectional", "PD7/CCP1": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TM4C1231C3PM extends Component.withPins({
  "SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "~{WAKE}": "32",
  "~{HIB}": "33",
  "XOSC0": "34",
  "GNDX": "35",
  "XOSC1": "36",
  "VBAT": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", GNDX: "power_in", XOSC1: "passive", VBAT: "passive", "~{RST}": "input", GND_39: "bidirectional", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LM4F110B2QR extends Component.withPins({
  "SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "~{WAKE}": "32",
  "~{HIB}": "33",
  "XOSC0": "34",
  "GNDX": "35",
  "XOSC1": "36",
  "VBAT": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", GNDX: "power_in", XOSC1: "passive", VBAT: "passive", "~{RST}": "input", GND_39: "bidirectional", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LM4F110C4QR extends Component.withPins({
  "SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "~{WAKE}": "32",
  "~{HIB}": "33",
  "XOSC0": "34",
  "GNDX": "35",
  "XOSC1": "36",
  "VBAT": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", GNDX: "power_in", XOSC1: "passive", VBAT: "passive", "~{RST}": "input", GND_39: "bidirectional", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LM4F110E5QR extends Component.withPins({
  "SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "~{WAKE}": "32",
  "~{HIB}": "33",
  "XOSC0": "34",
  "GNDX": "35",
  "XOSC1": "36",
  "VBAT": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", GNDX: "power_in", XOSC1: "passive", VBAT: "passive", "~{RST}": "input", GND_39: "bidirectional", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LM4F110H5QR extends Component.withPins({
  "SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "~{WAKE}": "32",
  "~{HIB}": "33",
  "XOSC0": "34",
  "GNDX": "35",
  "XOSC1": "36",
  "VBAT": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", GNDX: "power_in", XOSC1: "passive", VBAT: "passive", "~{RST}": "input", GND_39: "bidirectional", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TM4C1230C3PM extends Component.withPins({
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  "PG3/T5CCP1/I2C4SDA": "34",
  "PG2/T5CCP0/I2C4SCL": "35",
  "PG1/T4CCP1/I2C3SDA": "36",
  "PG0/T4CCP0/I2C3SCL": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I2C5SCL/SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "I2C5SDA/SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "PG5/WT0CCP1/U2TX/I2C1SDA": "bidirectional", "PG4/WT0CCP0/U2RX/I2C1SCL": "bidirectional", "PG3/T5CCP1/I2C4SDA": "bidirectional", "PG2/T5CCP0/I2C4SCL": "bidirectional", "PG1/T4CCP1/I2C3SDA": "bidirectional", "PG0/T4CCP0/I2C3SCL": "bidirectional", "~{RST}": "input", GND_39: "power_in", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LM4F111B2QR extends Component.withPins({
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  "PG3/T5CCP1/I2C4SDA": "34",
  "PG2/T5CCP0/I2C4SCL": "35",
  "PG1/T4CCP1/I2C3SDA": "36",
  "PG0/T4CCP0/I2C3SCL": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I2C5SCL/SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "I2C5SDA/SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "PG5/WT0CCP1/U2TX/I2C1SDA": "bidirectional", "PG4/WT0CCP0/U2RX/I2C1SCL": "bidirectional", "PG3/T5CCP1/I2C4SDA": "bidirectional", "PG2/T5CCP0/I2C4SCL": "bidirectional", "PG1/T4CCP1/I2C3SDA": "bidirectional", "PG0/T4CCP0/I2C3SCL": "bidirectional", "~{RST}": "input", GND_39: "power_in", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LM4F111C4QR extends Component.withPins({
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  "PG3/T5CCP1/I2C4SDA": "34",
  "PG2/T5CCP0/I2C4SCL": "35",
  "PG1/T4CCP1/I2C3SDA": "36",
  "PG0/T4CCP0/I2C3SCL": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I2C5SCL/SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "I2C5SDA/SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "PG5/WT0CCP1/U2TX/I2C1SDA": "bidirectional", "PG4/WT0CCP0/U2RX/I2C1SCL": "bidirectional", "PG3/T5CCP1/I2C4SDA": "bidirectional", "PG2/T5CCP0/I2C4SCL": "bidirectional", "PG1/T4CCP1/I2C3SDA": "bidirectional", "PG0/T4CCP0/I2C3SCL": "bidirectional", "~{RST}": "input", GND_39: "power_in", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LM4F111E5QR extends Component.withPins({
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  "PG3/T5CCP1/I2C4SDA": "34",
  "PG2/T5CCP0/I2C4SCL": "35",
  "PG1/T4CCP1/I2C3SDA": "36",
  "PG0/T4CCP0/I2C3SCL": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I2C5SCL/SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "I2C5SDA/SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "PG5/WT0CCP1/U2TX/I2C1SDA": "bidirectional", "PG4/WT0CCP0/U2RX/I2C1SCL": "bidirectional", "PG3/T5CCP1/I2C4SDA": "bidirectional", "PG2/T5CCP0/I2C4SCL": "bidirectional", "PG1/T4CCP1/I2C3SDA": "bidirectional", "PG0/T4CCP0/I2C3SCL": "bidirectional", "~{RST}": "input", GND_39: "power_in", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class LM4F111H5QR extends Component.withPins({
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  "PG3/T5CCP1/I2C4SDA": "34",
  "PG2/T5CCP0/I2C4SCL": "35",
  "PG1/T4CCP1/I2C3SDA": "36",
  "PG0/T4CCP0/I2C3SCL": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I2C5SCL/SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "I2C5SDA/SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "PG5/WT0CCP1/U2TX/I2C1SDA": "bidirectional", "PG4/WT0CCP0/U2RX/I2C1SCL": "bidirectional", "PG3/T5CCP1/I2C4SDA": "bidirectional", "PG2/T5CCP0/I2C4SCL": "bidirectional", "PG1/T4CCP1/I2C3SDA": "bidirectional", "PG0/T4CCP0/I2C3SCL": "bidirectional", "~{RST}": "input", GND_39: "power_in", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MSP432E401Y extends Component.withPins({
  "PD0": "1",
  "PD1": "2",
  "PD2": "3",
  "PD3": "4",
  "PQ0": "5",
  "PQ1": "6",
  "VDD_7": "7",
  "VDDA": "8",
  "VREFA+": "9",
  "GNDA": "10",
  "PQ2": "11",
  "PE3": "12",
  "PE2": "13",
  "PE1": "14",
  "PE0": "15",
  "VDD_16": "16",
  "GND_17": "17",
  "PK0": "18",
  "PK1": "19",
  "PK2": "20",
  "PK3": "21",
  "PC7": "22",
  "PC6": "23",
  "PC5": "24",
  "PC4": "25",
  "VDD_26": "26",
  "PQ3": "27",
  "VDD_28": "28",
  "PH0": "29",
  "PH1": "30",
  "PH2": "31",
  "PH3": "32",
  "PA0": "33",
  "PA1": "34",
  "PA2": "35",
  "PA3": "36",
  "PA4": "37",
  "PA5": "38",
  "VDD_39": "39",
  "PA6": "40",
  "PA7": "41",
  "PF0": "42",
  "PF1": "43",
  "PF2": "44",
  "PF3": "45",
  "PF4": "46",
  "VDD_47": "47",
  "GND_48": "48",
  "PG0": "49",
  "PG1": "50",
  "VDD_51": "51",
  "VDD_52": "52",
  "EN0RXIN": "53",
  "EN0RXIP": "54",
  "GND_55": "55",
  "EN0TXON": "56",
  "EN0TXOP": "57",
  "GND_58": "58",
  "RBIAS": "59",
  "PK7": "60",
  "PK6": "61",
  "PK5": "62",
  "PK4": "63",
  "~{WAKE}": "64",
  "~{HIB}": "65",
  "XOSC0": "66",
  "XOSC1": "67",
  "VBAT": "68",
  "VDD_69": "69",
  "~{RST}": "70",
  "PM7": "71",
  "PM6": "72",
  "PM5": "73",
  "PM4": "74",
  "PM3": "75",
  "PM2": "76",
  "PM1": "77",
  "PM0": "78",
  "VDD_79": "79",
  "GND_80": "80",
  "PL0": "81",
  "PL1": "82",
  "PL2": "83",
  "PL3": "84",
  "PL4": "85",
  "PL5": "86",
  "VDDC_87": "87",
  "OSC0": "88",
  "OSC1": "89",
  "VDD_90": "90",
  "PB2": "91",
  "PB3": "92",
  "PL7": "93",
  "PL6": "94",
  "PB0": "95",
  "PB1": "96",
  "PC3/TDO/SWO": "97",
  "PC2/TDI": "98",
  "PC1/TMS/SWDIO": "99",
  "PC0/TCK/SWCLK": "100",
  "VDD_101": "101",
  "PQ4": "102",
  "PP2": "103",
  "PP3": "104",
  "PP4": "105",
  "PP5": "106",
  "PN0": "107",
  "PN1": "108",
  "PN2": "109",
  "PN3": "110",
  "PN4": "111",
  "PN5": "112",
  "VDD_113": "113",
  "GND_114": "114",
  "VDDC_115": "115",
  "PJ0": "116",
  "PJ1": "117",
  "PP0": "118",
  "PP1": "119",
  "PB5": "120",
  "PB4": "121",
  "VDD_122": "122",
  "PE4": "123",
  "PE5": "124",
  "PD4": "125",
  "PD5": "126",
  "PD6": "127",
  "PD7": "128",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PQ0: "bidirectional", PQ1: "bidirectional", VDD_7: "power_in", VDDA: "power_in", "VREFA+": "power_in", GNDA: "power_in", PQ2: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", VDD_16: "power_in", GND_17: "power_in", PK0: "bidirectional", PK1: "bidirectional", PK2: "bidirectional", PK3: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PC5: "bidirectional", PC4: "bidirectional", VDD_26: "power_in", PQ3: "bidirectional", VDD_28: "power_in", PH0: "bidirectional", PH1: "bidirectional", PH2: "bidirectional", PH3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", VDD_39: "power_in", PA6: "bidirectional", PA7: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", VDD_47: "power_in", GND_48: "passive", PG0: "bidirectional", PG1: "bidirectional", VDD_51: "power_in", VDD_52: "power_in", EN0RXIN: "bidirectional", EN0RXIP: "bidirectional", GND_55: "passive", EN0TXON: "bidirectional", EN0TXOP: "bidirectional", GND_58: "passive", RBIAS: "passive", PK7: "bidirectional", PK6: "bidirectional", PK5: "bidirectional", PK4: "bidirectional", "~{WAKE}": "input", "~{HIB}": "output", XOSC0: "input", XOSC1: "output", VBAT: "power_in", VDD_69: "power_in", "~{RST}": "input", PM7: "bidirectional", PM6: "bidirectional", PM5: "bidirectional", PM4: "bidirectional", PM3: "bidirectional", PM2: "bidirectional", PM1: "bidirectional", PM0: "bidirectional", VDD_79: "power_in", GND_80: "passive", PL0: "bidirectional", PL1: "bidirectional", PL2: "bidirectional", PL3: "bidirectional", PL4: "bidirectional", PL5: "bidirectional", VDDC_87: "power_in", OSC0: "input", OSC1: "output", VDD_90: "power_in", PB2: "bidirectional", PB3: "bidirectional", PL7: "bidirectional", PL6: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", "PC3/TDO/SWO": "bidirectional", "PC2/TDI": "bidirectional", "PC1/TMS/SWDIO": "bidirectional", "PC0/TCK/SWCLK": "bidirectional", VDD_101: "power_in", PQ4: "bidirectional", PP2: "bidirectional", PP3: "bidirectional", PP4: "bidirectional", PP5: "bidirectional", PN0: "bidirectional", PN1: "bidirectional", PN2: "bidirectional", PN3: "bidirectional", PN4: "bidirectional", PN5: "bidirectional", VDD_113: "power_in", GND_114: "passive", VDDC_115: "power_in", PJ0: "bidirectional", PJ1: "bidirectional", PP0: "bidirectional", PP1: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", VDD_122: "power_in", PE4: "bidirectional", PE5: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MSPM0C110xSDDF extends Component.withPins({
  "PA27": "1",
  "PA1/NRST": "2",
  "VSS": "3",
  "VDD": "4",
  "PA0": "5",
  "PA19/SWDIO": "6",
  "PA20/SWCLK": "7",
  "PA24": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA27: "bidirectional", "PA1/NRST": "bidirectional", VSS: "power_in", VDD: "power_in", PA0: "bidirectional", "PA19/SWDIO": "bidirectional", "PA20/SWCLK": "bidirectional", PA24: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MSPM0C110xSDSG extends Component.withPins({
  "PA27": "1",
  "PA1/NRST": "2",
  "VDD": "4",
  "PA0": "5",
  "PA19/SWDIO": "6",
  "PA20/SWCLK": "7",
  "PA24": "8",
  "VSS": "[3,9]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA27: "bidirectional", "PA1/NRST": "bidirectional", VDD: "power_in", PA0: "bidirectional", "PA19/SWDIO": "bidirectional", "PA20/SWCLK": "bidirectional", PA24: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TM4C1230D5PM extends Component.withPins({
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  "PG3/T5CCP1/I2C4SDA": "34",
  "PG2/T5CCP0/I2C4SCL": "35",
  "PG1/T4CCP1/I2C3SDA": "36",
  "PG0/T4CCP0/I2C3SCL": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I2C5SCL/SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "I2C5SDA/SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "PG5/WT0CCP1/U2TX/I2C1SDA": "bidirectional", "PG4/WT0CCP0/U2RX/I2C1SCL": "bidirectional", "PG3/T5CCP1/I2C4SDA": "bidirectional", "PG2/T5CCP0/I2C4SCL": "bidirectional", "PG1/T4CCP1/I2C3SDA": "bidirectional", "PG0/T4CCP0/I2C3SCL": "bidirectional", "~{RST}": "input", GND_39: "power_in", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TM4C1230E6PM extends Component.withPins({
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  "PG3/T5CCP1/I2C4SDA": "34",
  "PG2/T5CCP0/I2C4SCL": "35",
  "PG1/T4CCP1/I2C3SDA": "36",
  "PG0/T4CCP0/I2C3SCL": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I2C5SCL/SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "I2C5SDA/SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "PG5/WT0CCP1/U2TX/I2C1SDA": "bidirectional", "PG4/WT0CCP0/U2RX/I2C1SCL": "bidirectional", "PG3/T5CCP1/I2C4SDA": "bidirectional", "PG2/T5CCP0/I2C4SCL": "bidirectional", "PG1/T4CCP1/I2C3SDA": "bidirectional", "PG0/T4CCP0/I2C3SCL": "bidirectional", "~{RST}": "input", GND_39: "power_in", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TM4C1230H6PM extends Component.withPins({
  "I2C5SCL/SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "I2C5SDA/SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "PG5/WT0CCP1/U2TX/I2C1SDA": "32",
  "PG4/WT0CCP0/U2RX/I2C1SCL": "33",
  "PG3/T5CCP1/I2C4SDA": "34",
  "PG2/T5CCP0/I2C4SCL": "35",
  "PG1/T4CCP1/I2C3SDA": "36",
  "PG0/T4CCP0/I2C3SCL": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I2C5SCL/SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "I2C5SDA/SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/NMI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "PG5/WT0CCP1/U2TX/I2C1SDA": "bidirectional", "PG4/WT0CCP0/U2RX/I2C1SCL": "bidirectional", "PG3/T5CCP1/I2C4SDA": "bidirectional", "PG2/T5CCP0/I2C4SCL": "bidirectional", "PG1/T4CCP1/I2C3SDA": "bidirectional", "PG0/T4CCP0/I2C3SCL": "bidirectional", "~{RST}": "input", GND_39: "power_in", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TM4C1231D5PM extends Component.withPins({
  "SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "~{WAKE}": "32",
  "~{HIB}": "33",
  "XOSC0": "34",
  "GNDX": "35",
  "XOSC1": "36",
  "VBAT": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", GNDX: "power_in", XOSC1: "passive", VBAT: "passive", "~{RST}": "input", GND_39: "bidirectional", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TM4C1231E6PM extends Component.withPins({
  "SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "~{WAKE}": "32",
  "~{HIB}": "33",
  "XOSC0": "34",
  "GNDX": "35",
  "XOSC1": "36",
  "VBAT": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", GNDX: "power_in", XOSC1: "passive", VBAT: "passive", "~{RST}": "input", GND_39: "bidirectional", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TM4C1231H6PM extends Component.withPins({
  "SSI2RX/T0CCP0/PB6": "1",
  "VDDA": "2",
  "GNDA": "3",
  "SSI2TX/T0CCP1/PB7": "4",
  "PF4/T2CCP0": "5",
  "PE3/AIN0": "6",
  "PE2/AIN1": "7",
  "PE1/AIN2/U7TX": "8",
  "PE0/AIN3/U7RX": "9",
  "NMI/U2TX/WT5CCP1/PD7": "10",
  "VDD_11": "11",
  "GND_12": "12",
  "C0-/U3TX/WT1CCP1/PC7": "13",
  "C0+/U3RX/WT1CCP0/PC6": "14",
  "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "15",
  "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "16",
  "U0RX/PA0": "17",
  "U0TX/PA1": "18",
  "SSI0CLK/PA2": "19",
  "SSI0FSS/PA3": "20",
  "SSI0RX/PA4": "21",
  "SSI0TX/PA5": "22",
  "I2C1SCL/PA6": "23",
  "I2C1SDA/PA7": "24",
  "VDDC_25": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "28",
  "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "29",
  "PF2/T1CCP0/SSI1CLK/TRD0": "30",
  "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "31",
  "~{WAKE}": "32",
  "~{HIB}": "33",
  "XOSC0": "34",
  "GNDX": "35",
  "XOSC1": "36",
  "VBAT": "37",
  "~{RST}": "38",
  "GND_39": "39",
  "OSC0": "40",
  "OSC1": "41",
  "VDD_42": "42",
  "U6RX/WT4CCP0/PD4": "43",
  "U6TX/WT4CCP1/PD5": "44",
  "U1RX/T2CCP0/PB0": "45",
  "U1TX/T2CCP1/PB1": "46",
  "I2C0SCL/T3CCP0/PB2": "47",
  "I2C0SDA/T3CCP1/PB3": "48",
  "TDO/SWO/T5CCP1/PC3": "49",
  "TDI/T5CCP0/PC2": "50",
  "TMS/SWDIO/T4CCP1/PC1": "51",
  "TCK/SWCLK/T4CCP0/PC0": "52",
  "U2RX/WT5CCP0/PD6": "53",
  "VDD_54": "54",
  "GND_55": "55",
  "VDDC_56": "56",
  "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "57",
  "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "58",
  "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "59",
  "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "60",
  "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "61",
  "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "62",
  "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "63",
  "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SSI2RX/T0CCP0/PB6": "bidirectional", VDDA: "power_in", GNDA: "power_in", "SSI2TX/T0CCP1/PB7": "bidirectional", "PF4/T2CCP0": "bidirectional", "PE3/AIN0": "bidirectional", "PE2/AIN1": "bidirectional", "PE1/AIN2/U7TX": "bidirectional", "PE0/AIN3/U7RX": "bidirectional", "NMI/U2TX/WT5CCP1/PD7": "bidirectional", VDD_11: "power_in", GND_12: "power_in", "C0-/U3TX/WT1CCP1/PC7": "bidirectional", "C0+/U3RX/WT1CCP0/PC6": "bidirectional", "C1+/U1CTS/U1TX/U4TX/WT0CCP1/PC5": "bidirectional", "C1-/U1RTS/U1RX/U4RX/WT0CCP0/PC4": "bidirectional", "U0RX/PA0": "bidirectional", "U0TX/PA1": "bidirectional", "SSI0CLK/PA2": "bidirectional", "SSI0FSS/PA3": "bidirectional", "SSI0RX/PA4": "bidirectional", "SSI0TX/PA5": "bidirectional", "I2C1SCL/PA6": "bidirectional", "I2C1SDA/PA7": "bidirectional", VDDC_25: "power_in", VDD_26: "power_in", GND_27: "power_in", "PF0/T0CCP0/SSI1RX/U1RTS/CAN0RX/C0O/MNI": "bidirectional", "PF1/T0CCP1/SSI1TX/U1CTS/C1O/TRD1": "bidirectional", "PF2/T1CCP0/SSI1CLK/TRD0": "bidirectional", "PF3/T1CCP1/SSI1FSS/CAN0TX/TRCLK": "bidirectional", "~{WAKE}": "input", "~{HIB}": "open_collector", XOSC0: "passive", GNDX: "power_in", XOSC1: "passive", VBAT: "passive", "~{RST}": "input", GND_39: "bidirectional", OSC0: "passive", OSC1: "passive", VDD_42: "power_in", "U6RX/WT4CCP0/PD4": "bidirectional", "U6TX/WT4CCP1/PD5": "bidirectional", "U1RX/T2CCP0/PB0": "bidirectional", "U1TX/T2CCP1/PB1": "bidirectional", "I2C0SCL/T3CCP0/PB2": "bidirectional", "I2C0SDA/T3CCP1/PB3": "bidirectional", "TDO/SWO/T5CCP1/PC3": "bidirectional", "TDI/T5CCP0/PC2": "bidirectional", "TMS/SWDIO/T4CCP1/PC1": "bidirectional", "TCK/SWCLK/T4CCP0/PC0": "bidirectional", "U2RX/WT5CCP0/PD6": "bidirectional", VDD_54: "power_in", GND_55: "power_in", VDDC_56: "power_in", "AIN11/CAN0TX/SSI2FSS/T1CCP1/PB5": "bidirectional", "AIN10/CAN0RX/SSI2CLK/T1CCP0/PB4": "bidirectional", "PE4/AIN9/U5RX/I2C2SCL/CAN0RX": "bidirectional", "PE5/AIN8/U5TX/I2C2SDA/CAN0TX": "bidirectional", "AIN7/I2C3SCL/SSI1CLK/SSI3CLK/WT2CCP0/PD0": "bidirectional", "AIN6/I2C3SDA/SSI1FSS/SSI3FSS/WT2CCP1/PD1": "bidirectional", "AIN5/SSI1RX/SSI3RX/WT3CCP0/PD2": "bidirectional", "AIN4/SSI1TX/SSI3TX/WT3CCP1/PD3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas:TM4C1231H6PM";
  override referencePrefix = "U";
}

/**
 * TMS320LF2406
 *
 * KiCad symbol: `MCU_Texas:TMS320LF2406`. Reference prefix: `U`.
 */
export class TMS320LF2406 extends Component.withPins({
  "ADCIN1": "77",
  "BOOT_EN*/XF": "0",
  "TRST": "1",
  "TDIRB/IOPF4": "2",
  "GNDO_3": "3",
  "VDDO_4": "4",
  "T4PWM/T4CMP/IOPF3": "5",
  "PDPINTA": "6",
  "T3PWM/T3CMP/IOPF2": "7",
  "PLLF2": "8",
  "PLLF": "9",
  "PLLVCCA": "10",
  "TDIRA/IOPB6": "11",
  "T1PWM/T1CMP/IOPB4": "12",
  "T2PWM/T2CMP/IOPB5": "13",
  "IOPC0": "14",
  "XINT2/ADSOC/IOPD0": "15",
  "XINT1/IOPA2": "16",
  "SCITxD/IOPA0": "17",
  "SCIRxD/IOPA1": "18",
  "GND_19": "19",
  "VDD_20": "20",
  "SPISIMO/IOPC2": "21",
  "SPISOMI/IOPC3": "22",
  "SPISTE*/IOPC5": "23",
  "SPICLK/IOPC4": "24",
  "TMS2": "25",
  "TCLKINA/IOPB7": "26",
  "PWM12/IOPE6": "27",
  "PWM6/IOPB3": "28",
  "GNDO_29": "29",
  "VDDO_30": "30",
  "PWM5/IOPB2": "31",
  "PWM11/IOPE5": "32",
  "PWM4/IOPB1": "33",
  "GND_34": "34",
  "VDD_35": "35",
  "PWM3/IOPB0": "36",
  "PWM2/IOPA7": "37",
  "PWM10/IOPE4": "38",
  "PWM1/IOPA6": "39",
  "VprogFLASH": "40",
  "PWM9/IOPE3": "41",
  "PWM8/IOPE2": "43",
  "PWM7/IOPE1": "45",
  "GNDO_46": "46",
  "CAP6/IOPF1": "48",
  "CANRX/IOPC7": "49",
  "CANTX/IOPC6": "50",
  "CLKOUT/IOPE0": "51",
  "CAP3/QEP3/IOPA5": "52",
  "GNDO_53": "53",
  "VDDO_54": "54",
  "CAP2/QEP2/IOPA4": "55",
  "CAP5/QEP4/IOPF0": "56",
  "CAP1/QEP1/IOPA3": "57",
  "GND_58": "58",
  "VDD_59": "59",
  "CAP4/QEP3/IOPE7": "60",
  "EMU0": "61",
  "EMU1/OFF*": "62",
  "GNDO_63": "63",
  "VDDO_64": "64",
  "ADCIN15": "65",
  "ADCIN7": "66",
  "ADCIN6": "67",
  "ADCIN14": "68",
  "ADCIN5": "69",
  "ADCIN13": "71",
  "ADCIN3": "72",
  "ADCIN12": "73",
  "ADCIN2": "74",
  "ADCIN11": "75",
  "ADCIN10": "76",
  "ADCIN9": "78",
  "ADCIN0": "79",
  "ADCIN8": "80",
  "VREFLO": "81",
  "VREFHI": "82",
  "VCCA": "83",
  "GNDA": "84",
  "BIO*/IOPC1": "85",
  "XTAL1/CLKIN": "87",
  "XTAL2": "88",
  "TCKINB/IOPF5": "89",
  "GND_90": "90",
  "VDD_91": "91",
  "IOPF6": "92",
  "RESET": "93",
  "TCK": "94",
  "PDPINTB": "95",
  "TDI": "96",
  "GNDO_97": "97",
  "VDDO_98": "98",
  "TDO": "99",
  "TMS": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ADCIN1: "input", "BOOT_EN*/XF": "input", TRST: "input", "TDIRB/IOPF4": "bidirectional", GNDO_3: "power_in", VDDO_4: "power_in", "T4PWM/T4CMP/IOPF3": "bidirectional", PDPINTA: "input", "T3PWM/T3CMP/IOPF2": "bidirectional", PLLF2: "input", PLLF: "input", PLLVCCA: "power_in", "TDIRA/IOPB6": "bidirectional", "T1PWM/T1CMP/IOPB4": "bidirectional", "T2PWM/T2CMP/IOPB5": "bidirectional", IOPC0: "bidirectional", "XINT2/ADSOC/IOPD0": "bidirectional", "XINT1/IOPA2": "bidirectional", "SCITxD/IOPA0": "bidirectional", "SCIRxD/IOPA1": "bidirectional", GND_19: "power_in", VDD_20: "power_in", "SPISIMO/IOPC2": "bidirectional", "SPISOMI/IOPC3": "bidirectional", "SPISTE*/IOPC5": "bidirectional", "SPICLK/IOPC4": "bidirectional", TMS2: "input", "TCLKINA/IOPB7": "bidirectional", "PWM12/IOPE6": "bidirectional", "PWM6/IOPB3": "bidirectional", GNDO_29: "power_in", VDDO_30: "power_in", "PWM5/IOPB2": "bidirectional", "PWM11/IOPE5": "bidirectional", "PWM4/IOPB1": "bidirectional", GND_34: "power_in", VDD_35: "power_in", "PWM3/IOPB0": "bidirectional", "PWM2/IOPA7": "bidirectional", "PWM10/IOPE4": "bidirectional", "PWM1/IOPA6": "bidirectional", VprogFLASH: "input", "PWM9/IOPE3": "bidirectional", "PWM8/IOPE2": "bidirectional", "PWM7/IOPE1": "bidirectional", GNDO_46: "power_in", "CAP6/IOPF1": "bidirectional", "CANRX/IOPC7": "bidirectional", "CANTX/IOPC6": "bidirectional", "CLKOUT/IOPE0": "bidirectional", "CAP3/QEP3/IOPA5": "bidirectional", GNDO_53: "power_in", VDDO_54: "power_in", "CAP2/QEP2/IOPA4": "bidirectional", "CAP5/QEP4/IOPF0": "bidirectional", "CAP1/QEP1/IOPA3": "bidirectional", GND_58: "power_in", VDD_59: "power_in", "CAP4/QEP3/IOPE7": "bidirectional", EMU0: "bidirectional", "EMU1/OFF*": "bidirectional", GNDO_63: "power_in", VDDO_64: "power_in", ADCIN15: "input", ADCIN7: "input", ADCIN6: "input", ADCIN14: "input", ADCIN5: "input", ADCIN13: "input", ADCIN3: "input", ADCIN12: "input", ADCIN2: "input", ADCIN11: "input", ADCIN10: "input", ADCIN9: "input", ADCIN0: "input", ADCIN8: "input", VREFLO: "input", VREFHI: "input", VCCA: "power_in", GNDA: "power_in", "BIO*/IOPC1": "bidirectional", "XTAL1/CLKIN": "input", XTAL2: "output", "TCKINB/IOPF5": "bidirectional", GND_90: "power_in", VDD_91: "power_in", IOPF6: "bidirectional", RESET: "input", TCK: "bidirectional", PDPINTB: "input", TDI: "input", GNDO_97: "power_in", VDDO_98: "power_in", TDO: "output", TMS: "input", ...opts.pinTypes } });
  }
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
 */
export class TMS470R1B768 extends Component.withPins({
  "~{SPI1ENA}": "1",
  "~{SPI1SCS}": "2",
  "SPI1SIMO": "3",
  "SPI1SOMI": "4",
  "SPI1CLK": "5",
  "~{SPI4ENA}": "6",
  "~{SPI4SCS}": "7",
  "SPI4SIMO": "8",
  "SPI4SOMI": "9",
  "SPI4CLK": "10",
  "Vss_11": "11",
  "OSCOUT": "12",
  "OSCIN": "13",
  "Vcc_14": "14",
  "~{RST}": "15",
  "VssIO_16": "16",
  "VccIO_17": "17",
  "GIOD[3]": "18",
  "GIOD[2]": "19",
  "GIOD[1]": "20",
  "GIOD[0]": "21",
  "HET[17]": "22",
  "HET[16]": "23",
  "HET[15]": "24",
  "HET[14]": "25",
  "HET[13]": "26",
  "HET[12]": "27",
  "HET[11]": "28",
  "HET[10]": "29",
  "Vss_30": "30",
  "Vcc_31": "31",
  "~{PORST}": "32",
  "GIOA[7]/INT7": "33",
  "GIOA[6]/INT6": "34",
  "GIOA[5]/INT5": "35",
  "GIOA[4]/INT4": "36",
  "~{TRST}": "37",
  "TEST": "38",
  "GIOA[0]/INT0": "39",
  "GIOA[1]/INT1/ECLK": "40",
  "GIOA[2]/INT2": "41",
  "GIOA[3]/INT3": "42",
  "SCI2RX": "43",
  "SCI2TX": "44",
  "SCI2CLK": "45",
  "~{SPI5SCS}": "46",
  "HET[28]": "47",
  "HET[29]": "48",
  "HET[30]": "49",
  "HET[31]": "50",
  "HET[24]": "51",
  "VssIO_52": "52",
  "VccIO_53": "53",
  "Vss_54": "54",
  "Vcc_55": "55",
  "CAN2HTX": "56",
  "CAN2HRX": "57",
  "SPI5SIMO": "58",
  "SPI5SOMI": "59",
  "SPI5CLK": "60",
  "~{SPI5ENA}": "61",
  "SPI2CLK": "62",
  "SPI2SIMO": "63",
  "SPI2SOMI": "64",
  "~{SPI2ENA}": "65",
  "~{SPI2SCS}": "66",
  "HET[22]": "67",
  "HET[21]": "68",
  "HET[20]": "69",
  "HET[19]": "70",
  "HET[18]": "71",
  "AWD": "72",
  "PLLDIS": "73",
  "TDI": "74",
  "TDO5": "75",
  "TCK": "76",
  "CAN3HRX": "77",
  "CAN3HTX": "78",
  "HET[8]": "79",
  "HET[9]": "80",
  "VssIO_81": "81",
  "VccIO_82": "82",
  "CLKOUT": "83",
  "GIOB[7]": "84",
  "Vss_85": "85",
  "Vcc_86": "86",
  "CAN1HRX": "87",
  "CAN1HTX": "88",
  "SCI1CLK": "89",
  "SCI1TX": "90",
  "SCI1RX": "91",
  "Vss_92": "92",
  "Vcc_93": "93",
  "SPI3CLK": "94",
  "SPI3SOMI": "95",
  "SPI3SIMO": "96",
  "~{SPI3SCS}": "97",
  "~{SPI3ENA}": "98",
  "ADEVT": "99",
  "ADIN[7]": "100",
  "ADIN[6]": "101",
  "ADIN[5]": "102",
  "ADIN[15]": "103",
  "ADIN[4]": "104",
  "ADIN[3]": "105",
  "ADIN[2]": "106",
  "ADIN[1]": "107",
  "ADIN[0]": "108",
  "ADIN[11]": "109",
  "ADIN[14]": "110",
  "ADIN[10]": "111",
  "ADIN[13]": "112",
  "ADIN[9]": "113",
  "ADIN[12]": "114",
  "ADIN[8]": "115",
  "ADRefHi": "116",
  "ADRefLo": "117",
  "VccAD": "118",
  "VssAD": "119",
  "TMS": "120",
  "TMS2": "121",
  "GIOC[0]": "122",
  "HET[23]": "123",
  "HET[25]": "124",
  "HET[26]": "125",
  "HET[27]": "126",
  "Vss_127": "127",
  "Vcc_128": "128",
  "HET[0]": "129",
  "HET[1]": "130",
  "Vss_131": "131",
  "Vcc_132": "132",
  "FLTP2": "133",
  "FLTP1": "134",
  "VccP": "135",
  "Vss_136": "136",
  "HET[2]": "137",
  "HET[3]": "138",
  "HET[4]": "139",
  "HET[5]": "140",
  "HET[6]": "141",
  "HET[7]": "142",
  "GIOC[1]": "143",
  "GIOC[2]": "144",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SPI1ENA}": "passive", "~{SPI1SCS}": "passive", SPI1SIMO: "passive", SPI1SOMI: "passive", SPI1CLK: "passive", "~{SPI4ENA}": "passive", "~{SPI4SCS}": "passive", SPI4SIMO: "passive", SPI4SOMI: "passive", SPI4CLK: "passive", Vss_11: "power_in", OSCOUT: "passive", OSCIN: "passive", Vcc_14: "power_in", "~{RST}": "input", VssIO_16: "power_in", VccIO_17: "power_in", "GIOD[3]": "passive", "GIOD[2]": "passive", "GIOD[1]": "passive", "GIOD[0]": "passive", "HET[17]": "passive", "HET[16]": "passive", "HET[15]": "passive", "HET[14]": "passive", "HET[13]": "passive", "HET[12]": "passive", "HET[11]": "passive", "HET[10]": "passive", Vss_30: "passive", Vcc_31: "passive", "~{PORST}": "input", "GIOA[7]/INT7": "passive", "GIOA[6]/INT6": "passive", "GIOA[5]/INT5": "passive", "GIOA[4]/INT4": "passive", "~{TRST}": "input", TEST: "passive", "GIOA[0]/INT0": "input", "GIOA[1]/INT1/ECLK": "passive", "GIOA[2]/INT2": "passive", "GIOA[3]/INT3": "passive", SCI2RX: "passive", SCI2TX: "passive", SCI2CLK: "passive", "~{SPI5SCS}": "passive", "HET[28]": "passive", "HET[29]": "passive", "HET[30]": "passive", "HET[31]": "passive", "HET[24]": "passive", VssIO_52: "power_in", VccIO_53: "power_in", Vss_54: "power_in", Vcc_55: "unspecified", CAN2HTX: "passive", CAN2HRX: "passive", SPI5SIMO: "passive", SPI5SOMI: "passive", SPI5CLK: "passive", "~{SPI5ENA}": "passive", SPI2CLK: "passive", SPI2SIMO: "passive", SPI2SOMI: "passive", "~{SPI2ENA}": "passive", "~{SPI2SCS}": "passive", "HET[22]": "passive", "HET[21]": "passive", "HET[20]": "passive", "HET[19]": "passive", "HET[18]": "passive", AWD: "passive", PLLDIS: "passive", TDI: "passive", TDO5: "passive", TCK: "passive", CAN3HRX: "passive", CAN3HTX: "passive", "HET[8]": "passive", "HET[9]": "passive", VssIO_81: "passive", VccIO_82: "passive", CLKOUT: "passive", "GIOB[7]": "passive", Vss_85: "passive", Vcc_86: "passive", CAN1HRX: "passive", CAN1HTX: "passive", SCI1CLK: "passive", SCI1TX: "passive", SCI1RX: "passive", Vss_92: "passive", Vcc_93: "passive", SPI3CLK: "passive", SPI3SOMI: "passive", SPI3SIMO: "passive", "~{SPI3SCS}": "passive", "~{SPI3ENA}": "passive", ADEVT: "passive", "ADIN[7]": "passive", "ADIN[6]": "passive", "ADIN[5]": "passive", "ADIN[15]": "passive", "ADIN[4]": "passive", "ADIN[3]": "passive", "ADIN[2]": "passive", "ADIN[1]": "passive", "ADIN[0]": "passive", "ADIN[11]": "passive", "ADIN[14]": "passive", "ADIN[10]": "passive", "ADIN[13]": "passive", "ADIN[9]": "passive", "ADIN[12]": "passive", "ADIN[8]": "passive", ADRefHi: "passive", ADRefLo: "passive", VccAD: "passive", VssAD: "passive", TMS: "passive", TMS2: "passive", "GIOC[0]": "passive", "HET[23]": "passive", "HET[25]": "passive", "HET[26]": "passive", "HET[27]": "passive", Vss_127: "passive", Vcc_128: "passive", "HET[0]": "passive", "HET[1]": "passive", Vss_131: "passive", Vcc_132: "passive", FLTP2: "passive", FLTP1: "passive", VccP: "passive", Vss_136: "passive", "HET[2]": "passive", "HET[3]": "passive", "HET[4]": "passive", "HET[5]": "passive", "HET[6]": "passive", "HET[7]": "passive", "GIOC[1]": "passive", "GIOC[2]": "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas:TMS470R1B768";
  override referencePrefix = "U";
}
