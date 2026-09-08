// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * CYPRESS FX2LP USB Microcontroller, 48MHz 8051, 16KB RAM, USB 2.0, I2C, QFN-56
 *
 * KiCad symbol: `MCU_Cypress:CY7C68013A-56LTX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*.
 * @see http://www.cypress.com/file/138911/download
 * Keywords: FX2LP 8-bit USB MCU.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP4.5x5.2mm_ThermalVias_TopTented.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C68013A_56LTX extends Component.withPins({
  /** Physical pin 1: RDY0/SLRD; input. */
  "RDY0/SLRD": "1",
  /** Physical pin 2: RDY1/SLWR; input. */
  "RDY1/SLWR": "2",
  /** Physical pin 3: AVCC; power_in. */
  "AVCC_3": "3",
  /** Physical pin 4: XTALOUT; output. */
  "XTALOUT": "4",
  /** Physical pin 5: XTALIN; input. */
  "XTALIN": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND_6": "6",
  /** Physical pin 7: AVCC; passive. */
  "AVCC_7": "7",
  /** Physical pin 8: D+; bidirectional. */
  "D+": "8",
  /** Physical pin 9: D-; bidirectional. */
  "D-": "9",
  /** Physical pin 10: AGND; passive. */
  "AGND_10": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: IFCLK; bidirectional. */
  "IFCLK": "13",
  /** Physical pin 14: RESERVED; input. */
  "RESERVED": "14",
  /** Physical pin 15: SCL; input. */
  "SCL": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
  /** Physical pin 17: VCC; passive. */
  "VCC_17": "17",
  /** Physical pin 18: PB0/FD0; bidirectional. */
  "PB0/FD0": "18",
  /** Physical pin 19: PB1/FD1; bidirectional. */
  "PB1/FD1": "19",
  /** Physical pin 20: PB2/FD2; bidirectional. */
  "PB2/FD2": "20",
  /** Physical pin 21: PB3/FD3; bidirectional. */
  "PB3/FD3": "21",
  /** Physical pin 22: PB4/FD4; bidirectional. */
  "PB4/FD4": "22",
  /** Physical pin 23: PB5/FD5; bidirectional. */
  "PB5/FD5": "23",
  /** Physical pin 24: PB6/FD6; bidirectional. */
  "PB6/FD6": "24",
  /** Physical pin 25: PB7/FD7; bidirectional. */
  "PB7/FD7": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: VCC; passive. */
  "VCC_27": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: CTL0/FLAGA; output. */
  "CTL0/FLAGA": "29",
  /** Physical pin 30: CTL1/FLAGB; output. */
  "CTL1/FLAGB": "30",
  /** Physical pin 31: CTL2/FLAGC; output. */
  "CTL2/FLAGC": "31",
  /** Physical pin 32: VCC; passive. */
  "VCC_32": "32",
  /** Physical pin 33: PA0/~{INT0}; bidirectional. */
  "PA0/~{INT0}": "33",
  /** Physical pin 34: PA1/~{INT1}; bidirectional. */
  "PA1/~{INT1}": "34",
  /** Physical pin 35: PA2/SLOE; bidirectional. */
  "PA2/SLOE": "35",
  /** Physical pin 36: PA3/WU2; bidirectional. */
  "PA3/WU2": "36",
  /** Physical pin 37: PA4/FIOADDR0; bidirectional. */
  "PA4/FIOADDR0": "37",
  /** Physical pin 38: PA5/FIOADDR1; bidirectional. */
  "PA5/FIOADDR1": "38",
  /** Physical pin 39: PA6/PKTEND; bidirectional. */
  "PA6/PKTEND": "39",
  /** Physical pin 40: PA7/FLAGD/~{SLCS}; bidirectional. */
  "PA7/FLAGD/~{SLCS}": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: ~{RESET}; input. */
  "~{RESET}": "42",
  /** Physical pin 43: VCC; passive. */
  "VCC_43": "43",
  /** Physical pin 44: WAKEUP; input. */
  "WAKEUP": "44",
  /** Physical pin 45: PD0/FD8; bidirectional. */
  "PD0/FD8": "45",
  /** Physical pin 46: PD1/FD9; bidirectional. */
  "PD1/FD9": "46",
  /** Physical pin 47: PD2/FD10; bidirectional. */
  "PD2/FD10": "47",
  /** Physical pin 48: PD3/FD11; bidirectional. */
  "PD3/FD11": "48",
  /** Physical pin 49: PD4/FD12; bidirectional. */
  "PD4/FD12": "49",
  /** Physical pin 50: PD5/FD13; bidirectional. */
  "PD5/FD13": "50",
  /** Physical pin 51: PD6/FD14; bidirectional. */
  "PD6/FD14": "51",
  /** Physical pin 52: PD7/FD15; bidirectional. */
  "PD7/FD15": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: CLKOUT; output. */
  "CLKOUT": "54",
  /** Physical pin 55: VCC; passive. */
  "VCC_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: EP; input. */
  "EP": "57",
}) {
  override schema = "MCU_Cypress:CY7C68013A-56LTX";
  override referencePrefix = "U";
}

/**
 * CYPRESS FX2LP USB Microcontroller, 48MHz 8051, 16KB RAM, USB 2.0, I2C, SSOP-56
 *
 * KiCad symbol: `MCU_Cypress:CY7C68013A-56PVX`. Reference prefix: `U`.
 * Footprint filters: SSOP*7.5x18.5mm*P0.635mm*.
 * @see http://www.cypress.com/file/138911/download
 * Keywords: FX2LP 8-bit USB MCU.
 * Default footprint: Package_SO:SSOP-56_7.5x18.5mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C68013A_56PVX extends Component.withPins({
  /** Physical pin 1: PD5/FD13; bidirectional. */
  "PD5/FD13": "1",
  /** Physical pin 2: PD6/FD14; bidirectional. */
  "PD6/FD14": "2",
  /** Physical pin 3: PD7/FD15; bidirectional. */
  "PD7/FD15": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: CLKOUT; output. */
  "CLKOUT": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: RDY0/SLRD; input. */
  "RDY0/SLRD": "8",
  /** Physical pin 9: RDY1/SLWR; input. */
  "RDY1/SLWR": "9",
  /** Physical pin 10: AVCC; power_in. */
  "AVCC_10": "10",
  /** Physical pin 11: XTALOUT; output. */
  "XTALOUT": "11",
  /** Physical pin 12: XTALIN; input. */
  "XTALIN": "12",
  /** Physical pin 13: AGND; power_in. */
  "AGND_13": "13",
  /** Physical pin 14: AVCC; passive. */
  "AVCC_14": "14",
  /** Physical pin 15: D+; bidirectional. */
  "D+": "15",
  /** Physical pin 16: D-; bidirectional. */
  "D-": "16",
  /** Physical pin 17: AGND; passive. */
  "AGND_17": "17",
  /** Physical pin 18: VCC; passive. */
  "VCC_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: IFCLK; bidirectional. */
  "IFCLK": "20",
  /** Physical pin 21: RESERVED; input. */
  "RESERVED": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; passive. */
  "VCC_24": "24",
  /** Physical pin 25: PB0/FD0; bidirectional. */
  "PB0/FD0": "25",
  /** Physical pin 26: PB1/FD1; bidirectional. */
  "PB1/FD1": "26",
  /** Physical pin 27: PB2/FD2; bidirectional. */
  "PB2/FD2": "27",
  /** Physical pin 28: PB3/FD3; bidirectional. */
  "PB3/FD3": "28",
  /** Physical pin 29: PB4/FD4; bidirectional. */
  "PB4/FD4": "29",
  /** Physical pin 30: PB5/FD5; bidirectional. */
  "PB5/FD5": "30",
  /** Physical pin 31: PB6/FD6; bidirectional. */
  "PB6/FD6": "31",
  /** Physical pin 32: PB7/FD7; bidirectional. */
  "PB7/FD7": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: VCC; passive. */
  "VCC_34": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: CTL0/FLAGA; output. */
  "CTL0/FLAGA": "36",
  /** Physical pin 37: CTL1/FLAGB; output. */
  "CTL1/FLAGB": "37",
  /** Physical pin 38: CTL2/FLAGC; output. */
  "CTL2/FLAGC": "38",
  /** Physical pin 39: VCC; passive. */
  "VCC_39": "39",
  /** Physical pin 40: PA0/~{INT0}; bidirectional. */
  "PA0/~{INT0}": "40",
  /** Physical pin 41: PA1/~{INT1}; bidirectional. */
  "PA1/~{INT1}": "41",
  /** Physical pin 42: PA2/SLOE; bidirectional. */
  "PA2/SLOE": "42",
  /** Physical pin 43: PA3/WU2; bidirectional. */
  "PA3/WU2": "43",
  /** Physical pin 44: PA4/FIOADDR0; bidirectional. */
  "PA4/FIOADDR0": "44",
  /** Physical pin 45: PA5/FIOADDR1; bidirectional. */
  "PA5/FIOADDR1": "45",
  /** Physical pin 46: PA6/PKTEND; bidirectional. */
  "PA6/PKTEND": "46",
  /** Physical pin 47: PA7/FLAGD/~{SLCS}; bidirectional. */
  "PA7/FLAGD/~{SLCS}": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ~{RESET}; input. */
  "~{RESET}": "49",
  /** Physical pin 50: VCC; passive. */
  "VCC_50": "50",
  /** Physical pin 51: WAKEUP; input. */
  "WAKEUP": "51",
  /** Physical pin 52: PD0/FD8; bidirectional. */
  "PD0/FD8": "52",
  /** Physical pin 53: PD1/FD9; bidirectional. */
  "PD1/FD9": "53",
  /** Physical pin 54: PD2/FD10; bidirectional. */
  "PD2/FD10": "54",
  /** Physical pin 55: PD3/FD11; bidirectional. */
  "PD3/FD11": "55",
  /** Physical pin 56: PD4/FD12; bidirectional. */
  "PD4/FD12": "56",
}) {
  override schema = "MCU_Cypress:CY7C68013A-56PVX";
  override referencePrefix = "U";
}

/**
 * CYPRESS FX2LP USB Microcontroller, 48MHz 8051, 16KB RAM, USB 2.0, I2C, QFN-56
 *
 * KiCad symbol: `MCU_Cypress:CY7C68014A-56LTX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*.
 * @see http://www.cypress.com/file/138911/download
 * Keywords: FX2LP 8-bit USB MCU.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP4.5x5.2mm_ThermalVias_TopTented.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C68014A_56LTX extends Component.withPins({
  /** Physical pin 1: RDY0/SLRD; input. */
  "RDY0/SLRD": "1",
  /** Physical pin 2: RDY1/SLWR; input. */
  "RDY1/SLWR": "2",
  /** Physical pin 3: AVCC; power_in. */
  "AVCC_3": "3",
  /** Physical pin 4: XTALOUT; output. */
  "XTALOUT": "4",
  /** Physical pin 5: XTALIN; input. */
  "XTALIN": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND_6": "6",
  /** Physical pin 7: AVCC; passive. */
  "AVCC_7": "7",
  /** Physical pin 8: D+; bidirectional. */
  "D+": "8",
  /** Physical pin 9: D-; bidirectional. */
  "D-": "9",
  /** Physical pin 10: AGND; passive. */
  "AGND_10": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: IFCLK; bidirectional. */
  "IFCLK": "13",
  /** Physical pin 14: RESERVED; input. */
  "RESERVED": "14",
  /** Physical pin 15: SCL; input. */
  "SCL": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
  /** Physical pin 17: VCC; passive. */
  "VCC_17": "17",
  /** Physical pin 18: PB0/FD0; bidirectional. */
  "PB0/FD0": "18",
  /** Physical pin 19: PB1/FD1; bidirectional. */
  "PB1/FD1": "19",
  /** Physical pin 20: PB2/FD2; bidirectional. */
  "PB2/FD2": "20",
  /** Physical pin 21: PB3/FD3; bidirectional. */
  "PB3/FD3": "21",
  /** Physical pin 22: PB4/FD4; bidirectional. */
  "PB4/FD4": "22",
  /** Physical pin 23: PB5/FD5; bidirectional. */
  "PB5/FD5": "23",
  /** Physical pin 24: PB6/FD6; bidirectional. */
  "PB6/FD6": "24",
  /** Physical pin 25: PB7/FD7; bidirectional. */
  "PB7/FD7": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: VCC; passive. */
  "VCC_27": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: CTL0/FLAGA; output. */
  "CTL0/FLAGA": "29",
  /** Physical pin 30: CTL1/FLAGB; output. */
  "CTL1/FLAGB": "30",
  /** Physical pin 31: CTL2/FLAGC; output. */
  "CTL2/FLAGC": "31",
  /** Physical pin 32: VCC; passive. */
  "VCC_32": "32",
  /** Physical pin 33: PA0/~{INT0}; bidirectional. */
  "PA0/~{INT0}": "33",
  /** Physical pin 34: PA1/~{INT1}; bidirectional. */
  "PA1/~{INT1}": "34",
  /** Physical pin 35: PA2/SLOE; bidirectional. */
  "PA2/SLOE": "35",
  /** Physical pin 36: PA3/WU2; bidirectional. */
  "PA3/WU2": "36",
  /** Physical pin 37: PA4/FIOADDR0; bidirectional. */
  "PA4/FIOADDR0": "37",
  /** Physical pin 38: PA5/FIOADDR1; bidirectional. */
  "PA5/FIOADDR1": "38",
  /** Physical pin 39: PA6/PKTEND; bidirectional. */
  "PA6/PKTEND": "39",
  /** Physical pin 40: PA7/FLAGD/~{SLCS}; bidirectional. */
  "PA7/FLAGD/~{SLCS}": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: ~{RESET}; input. */
  "~{RESET}": "42",
  /** Physical pin 43: VCC; passive. */
  "VCC_43": "43",
  /** Physical pin 44: WAKEUP; input. */
  "WAKEUP": "44",
  /** Physical pin 45: PD0/FD8; bidirectional. */
  "PD0/FD8": "45",
  /** Physical pin 46: PD1/FD9; bidirectional. */
  "PD1/FD9": "46",
  /** Physical pin 47: PD2/FD10; bidirectional. */
  "PD2/FD10": "47",
  /** Physical pin 48: PD3/FD11; bidirectional. */
  "PD3/FD11": "48",
  /** Physical pin 49: PD4/FD12; bidirectional. */
  "PD4/FD12": "49",
  /** Physical pin 50: PD5/FD13; bidirectional. */
  "PD5/FD13": "50",
  /** Physical pin 51: PD6/FD14; bidirectional. */
  "PD6/FD14": "51",
  /** Physical pin 52: PD7/FD15; bidirectional. */
  "PD7/FD15": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: CLKOUT; output. */
  "CLKOUT": "54",
  /** Physical pin 55: VCC; passive. */
  "VCC_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: EP; input. */
  "EP": "57",
}) {
  override schema = "MCU_Cypress:CY7C68014A-56LTX";
  override referencePrefix = "U";
}

/**
 * CYPRESS FX2LP USB Microcontroller, 48MHz 8051, 16KB RAM, USB 2.0, I2C, SSOP-56
 *
 * KiCad symbol: `MCU_Cypress:CY7C68014A-56PVX`. Reference prefix: `U`.
 * Footprint filters: SSOP*7.5x18.5mm*P0.635mm*.
 * @see http://www.cypress.com/file/138911/download
 * Keywords: FX2LP 8-bit USB MCU.
 * Default footprint: Package_SO:SSOP-56_7.5x18.5mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY7C68014A_56PVX extends Component.withPins({
  /** Physical pin 1: PD5/FD13; bidirectional. */
  "PD5/FD13": "1",
  /** Physical pin 2: PD6/FD14; bidirectional. */
  "PD6/FD14": "2",
  /** Physical pin 3: PD7/FD15; bidirectional. */
  "PD7/FD15": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: CLKOUT; output. */
  "CLKOUT": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: RDY0/SLRD; input. */
  "RDY0/SLRD": "8",
  /** Physical pin 9: RDY1/SLWR; input. */
  "RDY1/SLWR": "9",
  /** Physical pin 10: AVCC; power_in. */
  "AVCC_10": "10",
  /** Physical pin 11: XTALOUT; output. */
  "XTALOUT": "11",
  /** Physical pin 12: XTALIN; input. */
  "XTALIN": "12",
  /** Physical pin 13: AGND; power_in. */
  "AGND_13": "13",
  /** Physical pin 14: AVCC; passive. */
  "AVCC_14": "14",
  /** Physical pin 15: D+; bidirectional. */
  "D+": "15",
  /** Physical pin 16: D-; bidirectional. */
  "D-": "16",
  /** Physical pin 17: AGND; passive. */
  "AGND_17": "17",
  /** Physical pin 18: VCC; passive. */
  "VCC_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: IFCLK; bidirectional. */
  "IFCLK": "20",
  /** Physical pin 21: RESERVED; input. */
  "RESERVED": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; passive. */
  "VCC_24": "24",
  /** Physical pin 25: PB0/FD0; bidirectional. */
  "PB0/FD0": "25",
  /** Physical pin 26: PB1/FD1; bidirectional. */
  "PB1/FD1": "26",
  /** Physical pin 27: PB2/FD2; bidirectional. */
  "PB2/FD2": "27",
  /** Physical pin 28: PB3/FD3; bidirectional. */
  "PB3/FD3": "28",
  /** Physical pin 29: PB4/FD4; bidirectional. */
  "PB4/FD4": "29",
  /** Physical pin 30: PB5/FD5; bidirectional. */
  "PB5/FD5": "30",
  /** Physical pin 31: PB6/FD6; bidirectional. */
  "PB6/FD6": "31",
  /** Physical pin 32: PB7/FD7; bidirectional. */
  "PB7/FD7": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: VCC; passive. */
  "VCC_34": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: CTL0/FLAGA; output. */
  "CTL0/FLAGA": "36",
  /** Physical pin 37: CTL1/FLAGB; output. */
  "CTL1/FLAGB": "37",
  /** Physical pin 38: CTL2/FLAGC; output. */
  "CTL2/FLAGC": "38",
  /** Physical pin 39: VCC; passive. */
  "VCC_39": "39",
  /** Physical pin 40: PA0/~{INT0}; bidirectional. */
  "PA0/~{INT0}": "40",
  /** Physical pin 41: PA1/~{INT1}; bidirectional. */
  "PA1/~{INT1}": "41",
  /** Physical pin 42: PA2/SLOE; bidirectional. */
  "PA2/SLOE": "42",
  /** Physical pin 43: PA3/WU2; bidirectional. */
  "PA3/WU2": "43",
  /** Physical pin 44: PA4/FIOADDR0; bidirectional. */
  "PA4/FIOADDR0": "44",
  /** Physical pin 45: PA5/FIOADDR1; bidirectional. */
  "PA5/FIOADDR1": "45",
  /** Physical pin 46: PA6/PKTEND; bidirectional. */
  "PA6/PKTEND": "46",
  /** Physical pin 47: PA7/FLAGD/~{SLCS}; bidirectional. */
  "PA7/FLAGD/~{SLCS}": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: ~{RESET}; input. */
  "~{RESET}": "49",
  /** Physical pin 50: VCC; passive. */
  "VCC_50": "50",
  /** Physical pin 51: WAKEUP; input. */
  "WAKEUP": "51",
  /** Physical pin 52: PD0/FD8; bidirectional. */
  "PD0/FD8": "52",
  /** Physical pin 53: PD1/FD9; bidirectional. */
  "PD1/FD9": "53",
  /** Physical pin 54: PD2/FD10; bidirectional. */
  "PD2/FD10": "54",
  /** Physical pin 55: PD3/FD11; bidirectional. */
  "PD3/FD11": "55",
  /** Physical pin 56: PD4/FD12; bidirectional. */
  "PD4/FD12": "56",
}) {
  override schema = "MCU_Cypress:CY7C68014A-56PVX";
  override referencePrefix = "U";
}

/**
 * Programmable System-on-Chip With Bluetooth Low Energy, 24/48-MHz ARM® Cortex®-M0 , 56-QFN
 *
 * KiCad symbol: `MCU_Cypress:CY8C4xx7LQI-4xx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4xx7LQI_4xx extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4xx7LQI-4xx";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 24-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/O GESTURE, NO LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4127LQI-BL453`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4127LQI_BL453 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4127LQI-BL453";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 24-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, NO CAP-SENSE, NO LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4127LQI-BL473`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4127LQI_BL473 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4127LQI-BL473";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 24-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/O GESTURE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4127LQI-BL483`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4127LQI_BL483 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4127LQI-BL483";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 24-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/ GESTURE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4127LQI-BL493`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4127LQI_BL493 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4127LQI-BL493";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 32KB Flash, 4KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4245AXI-M445`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense LCD.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4245AXI_M445 extends Component.withPins({
  /** Physical pin 1: P1.7/VREF; bidirectional. */
  "P1.7/VREF": "1",
  /** Physical pin 2: P2.0; bidirectional. */
  "P2.0": "2",
  /** Physical pin 3: P2.1; bidirectional. */
  "P2.1": "3",
  /** Physical pin 4: P2.2; bidirectional. */
  "P2.2": "4",
  /** Physical pin 5: P2.3; bidirectional. */
  "P2.3": "5",
  /** Physical pin 6: P2.4; bidirectional. */
  "P2.4": "6",
  /** Physical pin 7: P2.5; bidirectional. */
  "P2.5": "7",
  /** Physical pin 8: P2.6; bidirectional. */
  "P2.6": "8",
  /** Physical pin 9: P2.7; bidirectional. */
  "P2.7": "9",
  /** Physical pin 10: VSSA; power_in. */
  "VSSA_10": "10",
  /** Physical pin 11: VDDA; power_in. */
  "VDDA_11": "11",
  /** Physical pin 12: P6.0; bidirectional. */
  "P6.0": "12",
  /** Physical pin 13: P6.1; bidirectional. */
  "P6.1": "13",
  /** Physical pin 14: P6.2; bidirectional. */
  "P6.2": "14",
  /** Physical pin 15: P6.4; bidirectional. */
  "P6.4": "15",
  /** Physical pin 16: P6.5; bidirectional. */
  "P6.5": "16",
  /** Physical pin 17: VSSIO; power_in. */
  "VSSIO": "17",
  /** Physical pin 18: P3.0; bidirectional. */
  "P3.0": "18",
  /** Physical pin 19: P3.1; bidirectional. */
  "P3.1": "19",
  /** Physical pin 20: P3.2; bidirectional. */
  "P3.2": "20",
  /** Physical pin 21: P3.3; bidirectional. */
  "P3.3": "21",
  /** Physical pin 22: P3.4; bidirectional. */
  "P3.4": "22",
  /** Physical pin 23: P3.5; bidirectional. */
  "P3.5": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.7; bidirectional. */
  "P3.7": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO": "26",
  /** Physical pin 27: P4.0; bidirectional. */
  "P4.0": "27",
  /** Physical pin 28: P4.1; bidirectional. */
  "P4.1": "28",
  /** Physical pin 29: P4.2; bidirectional. */
  "P4.2": "29",
  /** Physical pin 30: P4.3; bidirectional. */
  "P4.3": "30",
  /** Physical pin 31: P4.4; bidirectional. */
  "P4.4": "31",
  /** Physical pin 32: P4.5; bidirectional. */
  "P4.5": "32",
  /** Physical pin 33: P4.6; bidirectional. */
  "P4.6": "33",
  /** Physical pin 37: P7.0; bidirectional. */
  "P7.0": "37",
  /** Physical pin 38: P7.1; bidirectional. */
  "P7.1": "38",
  /** Physical pin 39: P0.0; bidirectional. */
  "P0.0": "39",
  /** Physical pin 40: P0.1; bidirectional. */
  "P0.1": "40",
  /** Physical pin 41: P0.2; bidirectional. */
  "P0.2": "41",
  /** Physical pin 42: P0.3; bidirectional. */
  "P0.3": "42",
  /** Physical pin 43: P0.4; bidirectional. */
  "P0.4": "43",
  /** Physical pin 44: P0.5; bidirectional. */
  "P0.5": "44",
  /** Physical pin 45: P0.6; bidirectional. */
  "P0.6": "45",
  /** Physical pin 46: P0.7; bidirectional. */
  "P0.7": "46",
  /** Physical pin 47: XRES; input. */
  "XRES": "47",
  /** Physical pin 48: VCCD; power_out. */
  "VCCD": "48",
  /** Physical pin 49: VSSD; power_in. */
  "VSSD": "49",
  /** Physical pin 50: VDDD; power_in. */
  "VDDD": "50",
  /** Physical pin 51: P5.0; bidirectional. */
  "P5.0": "51",
  /** Physical pin 52: P5.1; bidirectional. */
  "P5.1": "52",
  /** Physical pin 53: P5.2; bidirectional. */
  "P5.2": "53",
  /** Physical pin 54: P5.3; bidirectional. */
  "P5.3": "54",
  /** Physical pin 55: P5.5; bidirectional. */
  "P5.5": "55",
  /** Physical pin 56: VDDA; power_in. */
  "VDDA_56": "56",
  /** Physical pin 57: VSSA; power_in. */
  "VSSA_57": "57",
  /** Physical pin 58: P1.0; bidirectional. */
  "P1.0": "58",
  /** Physical pin 59: P1.1; bidirectional. */
  "P1.1": "59",
  /** Physical pin 60: P1.2; bidirectional. */
  "P1.2": "60",
  /** Physical pin 61: P1.3; bidirectional. */
  "P1.3": "61",
  /** Physical pin 62: P1.4; bidirectional. */
  "P1.4": "62",
  /** Physical pin 63: P1.5; bidirectional. */
  "P1.5": "63",
  /** Physical pin 64: P1.6; bidirectional. */
  "P1.6": "64",
}) {
  override schema = "MCU_Cypress:CY8C4245AXI-M445";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 32KB Flash, 4KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4245AZI-M445`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense LCD.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4245AZI_M445 extends Component.withPins({
  /** Physical pin 1: P1.7/VREF; bidirectional. */
  "P1.7/VREF": "1",
  /** Physical pin 2: P2.0; bidirectional. */
  "P2.0": "2",
  /** Physical pin 3: P2.1; bidirectional. */
  "P2.1": "3",
  /** Physical pin 4: P2.2; bidirectional. */
  "P2.2": "4",
  /** Physical pin 5: P2.3; bidirectional. */
  "P2.3": "5",
  /** Physical pin 6: P2.4; bidirectional. */
  "P2.4": "6",
  /** Physical pin 7: P2.5; bidirectional. */
  "P2.5": "7",
  /** Physical pin 8: P2.6; bidirectional. */
  "P2.6": "8",
  /** Physical pin 9: P2.7; bidirectional. */
  "P2.7": "9",
  /** Physical pin 10: VSSA; power_in. */
  "VSSA_10": "10",
  /** Physical pin 11: VDDA; power_in. */
  "VDDA_11": "11",
  /** Physical pin 12: P6.0; bidirectional. */
  "P6.0": "12",
  /** Physical pin 13: P6.1; bidirectional. */
  "P6.1": "13",
  /** Physical pin 14: P6.2; bidirectional. */
  "P6.2": "14",
  /** Physical pin 15: P6.4; bidirectional. */
  "P6.4": "15",
  /** Physical pin 16: P6.5; bidirectional. */
  "P6.5": "16",
  /** Physical pin 17: VSSIO; power_in. */
  "VSSIO": "17",
  /** Physical pin 18: P3.0; bidirectional. */
  "P3.0": "18",
  /** Physical pin 19: P3.1; bidirectional. */
  "P3.1": "19",
  /** Physical pin 20: P3.2; bidirectional. */
  "P3.2": "20",
  /** Physical pin 21: P3.3; bidirectional. */
  "P3.3": "21",
  /** Physical pin 22: P3.4; bidirectional. */
  "P3.4": "22",
  /** Physical pin 23: P3.5; bidirectional. */
  "P3.5": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.7; bidirectional. */
  "P3.7": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO": "26",
  /** Physical pin 27: P4.0; bidirectional. */
  "P4.0": "27",
  /** Physical pin 28: P4.1; bidirectional. */
  "P4.1": "28",
  /** Physical pin 29: P4.2; bidirectional. */
  "P4.2": "29",
  /** Physical pin 30: P4.3; bidirectional. */
  "P4.3": "30",
  /** Physical pin 31: P4.4; bidirectional. */
  "P4.4": "31",
  /** Physical pin 32: P4.5; bidirectional. */
  "P4.5": "32",
  /** Physical pin 33: P4.6; bidirectional. */
  "P4.6": "33",
  /** Physical pin 37: P7.0; bidirectional. */
  "P7.0": "37",
  /** Physical pin 38: P7.1; bidirectional. */
  "P7.1": "38",
  /** Physical pin 39: P0.0; bidirectional. */
  "P0.0": "39",
  /** Physical pin 40: P0.1; bidirectional. */
  "P0.1": "40",
  /** Physical pin 41: P0.2; bidirectional. */
  "P0.2": "41",
  /** Physical pin 42: P0.3; bidirectional. */
  "P0.3": "42",
  /** Physical pin 43: P0.4; bidirectional. */
  "P0.4": "43",
  /** Physical pin 44: P0.5; bidirectional. */
  "P0.5": "44",
  /** Physical pin 45: P0.6; bidirectional. */
  "P0.6": "45",
  /** Physical pin 46: P0.7; bidirectional. */
  "P0.7": "46",
  /** Physical pin 47: XRES; input. */
  "XRES": "47",
  /** Physical pin 48: VCCD; power_out. */
  "VCCD": "48",
  /** Physical pin 49: VSSD; power_in. */
  "VSSD": "49",
  /** Physical pin 50: VDDD; power_in. */
  "VDDD": "50",
  /** Physical pin 51: P5.0; bidirectional. */
  "P5.0": "51",
  /** Physical pin 52: P5.1; bidirectional. */
  "P5.1": "52",
  /** Physical pin 53: P5.2; bidirectional. */
  "P5.2": "53",
  /** Physical pin 54: P5.3; bidirectional. */
  "P5.3": "54",
  /** Physical pin 55: P5.5; bidirectional. */
  "P5.5": "55",
  /** Physical pin 56: VDDA; power_in. */
  "VDDA_56": "56",
  /** Physical pin 57: VSSA; power_in. */
  "VSSA_57": "57",
  /** Physical pin 58: P1.0; bidirectional. */
  "P1.0": "58",
  /** Physical pin 59: P1.1; bidirectional. */
  "P1.1": "59",
  /** Physical pin 60: P1.2; bidirectional. */
  "P1.2": "60",
  /** Physical pin 61: P1.3; bidirectional. */
  "P1.3": "61",
  /** Physical pin 62: P1.4; bidirectional. */
  "P1.4": "62",
  /** Physical pin 63: P1.5; bidirectional. */
  "P1.5": "63",
  /** Physical pin 64: P1.6; bidirectional. */
  "P1.6": "64",
}) {
  override schema = "MCU_Cypress:CY8C4245AZI-M445";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 64KB Flash, 8KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4246AXI-M445`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense LCD.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4246AXI_M445 extends Component.withPins({
  /** Physical pin 1: P1.7/VREF; bidirectional. */
  "P1.7/VREF": "1",
  /** Physical pin 2: P2.0; bidirectional. */
  "P2.0": "2",
  /** Physical pin 3: P2.1; bidirectional. */
  "P2.1": "3",
  /** Physical pin 4: P2.2; bidirectional. */
  "P2.2": "4",
  /** Physical pin 5: P2.3; bidirectional. */
  "P2.3": "5",
  /** Physical pin 6: P2.4; bidirectional. */
  "P2.4": "6",
  /** Physical pin 7: P2.5; bidirectional. */
  "P2.5": "7",
  /** Physical pin 8: P2.6; bidirectional. */
  "P2.6": "8",
  /** Physical pin 9: P2.7; bidirectional. */
  "P2.7": "9",
  /** Physical pin 10: VSSA; power_in. */
  "VSSA_10": "10",
  /** Physical pin 11: VDDA; power_in. */
  "VDDA_11": "11",
  /** Physical pin 12: P6.0; bidirectional. */
  "P6.0": "12",
  /** Physical pin 13: P6.1; bidirectional. */
  "P6.1": "13",
  /** Physical pin 14: P6.2; bidirectional. */
  "P6.2": "14",
  /** Physical pin 15: P6.4; bidirectional. */
  "P6.4": "15",
  /** Physical pin 16: P6.5; bidirectional. */
  "P6.5": "16",
  /** Physical pin 17: VSSIO; power_in. */
  "VSSIO": "17",
  /** Physical pin 18: P3.0; bidirectional. */
  "P3.0": "18",
  /** Physical pin 19: P3.1; bidirectional. */
  "P3.1": "19",
  /** Physical pin 20: P3.2; bidirectional. */
  "P3.2": "20",
  /** Physical pin 21: P3.3; bidirectional. */
  "P3.3": "21",
  /** Physical pin 22: P3.4; bidirectional. */
  "P3.4": "22",
  /** Physical pin 23: P3.5; bidirectional. */
  "P3.5": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.7; bidirectional. */
  "P3.7": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO": "26",
  /** Physical pin 27: P4.0; bidirectional. */
  "P4.0": "27",
  /** Physical pin 28: P4.1; bidirectional. */
  "P4.1": "28",
  /** Physical pin 29: P4.2; bidirectional. */
  "P4.2": "29",
  /** Physical pin 30: P4.3; bidirectional. */
  "P4.3": "30",
  /** Physical pin 31: P4.4; bidirectional. */
  "P4.4": "31",
  /** Physical pin 32: P4.5; bidirectional. */
  "P4.5": "32",
  /** Physical pin 33: P4.6; bidirectional. */
  "P4.6": "33",
  /** Physical pin 37: P7.0; bidirectional. */
  "P7.0": "37",
  /** Physical pin 38: P7.1; bidirectional. */
  "P7.1": "38",
  /** Physical pin 39: P0.0; bidirectional. */
  "P0.0": "39",
  /** Physical pin 40: P0.1; bidirectional. */
  "P0.1": "40",
  /** Physical pin 41: P0.2; bidirectional. */
  "P0.2": "41",
  /** Physical pin 42: P0.3; bidirectional. */
  "P0.3": "42",
  /** Physical pin 43: P0.4; bidirectional. */
  "P0.4": "43",
  /** Physical pin 44: P0.5; bidirectional. */
  "P0.5": "44",
  /** Physical pin 45: P0.6; bidirectional. */
  "P0.6": "45",
  /** Physical pin 46: P0.7; bidirectional. */
  "P0.7": "46",
  /** Physical pin 47: XRES; input. */
  "XRES": "47",
  /** Physical pin 48: VCCD; power_out. */
  "VCCD": "48",
  /** Physical pin 49: VSSD; power_in. */
  "VSSD": "49",
  /** Physical pin 50: VDDD; power_in. */
  "VDDD": "50",
  /** Physical pin 51: P5.0; bidirectional. */
  "P5.0": "51",
  /** Physical pin 52: P5.1; bidirectional. */
  "P5.1": "52",
  /** Physical pin 53: P5.2; bidirectional. */
  "P5.2": "53",
  /** Physical pin 54: P5.3; bidirectional. */
  "P5.3": "54",
  /** Physical pin 55: P5.5; bidirectional. */
  "P5.5": "55",
  /** Physical pin 56: VDDA; power_in. */
  "VDDA_56": "56",
  /** Physical pin 57: VSSA; power_in. */
  "VSSA_57": "57",
  /** Physical pin 58: P1.0; bidirectional. */
  "P1.0": "58",
  /** Physical pin 59: P1.1; bidirectional. */
  "P1.1": "59",
  /** Physical pin 60: P1.2; bidirectional. */
  "P1.2": "60",
  /** Physical pin 61: P1.3; bidirectional. */
  "P1.3": "61",
  /** Physical pin 62: P1.4; bidirectional. */
  "P1.4": "62",
  /** Physical pin 63: P1.5; bidirectional. */
  "P1.5": "63",
  /** Physical pin 64: P1.6; bidirectional. */
  "P1.6": "64",
}) {
  override schema = "MCU_Cypress:CY8C4246AXI-M445";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 64KB Flash, 8KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4246AZI-M445`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense LCD.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4246AZI_M445 extends Component.withPins({
  /** Physical pin 1: P1.7/VREF; bidirectional. */
  "P1.7/VREF": "1",
  /** Physical pin 2: P2.0; bidirectional. */
  "P2.0": "2",
  /** Physical pin 3: P2.1; bidirectional. */
  "P2.1": "3",
  /** Physical pin 4: P2.2; bidirectional. */
  "P2.2": "4",
  /** Physical pin 5: P2.3; bidirectional. */
  "P2.3": "5",
  /** Physical pin 6: P2.4; bidirectional. */
  "P2.4": "6",
  /** Physical pin 7: P2.5; bidirectional. */
  "P2.5": "7",
  /** Physical pin 8: P2.6; bidirectional. */
  "P2.6": "8",
  /** Physical pin 9: P2.7; bidirectional. */
  "P2.7": "9",
  /** Physical pin 10: VSSA; power_in. */
  "VSSA_10": "10",
  /** Physical pin 11: VDDA; power_in. */
  "VDDA_11": "11",
  /** Physical pin 12: P6.0; bidirectional. */
  "P6.0": "12",
  /** Physical pin 13: P6.1; bidirectional. */
  "P6.1": "13",
  /** Physical pin 14: P6.2; bidirectional. */
  "P6.2": "14",
  /** Physical pin 15: P6.4; bidirectional. */
  "P6.4": "15",
  /** Physical pin 16: P6.5; bidirectional. */
  "P6.5": "16",
  /** Physical pin 17: VSSIO; power_in. */
  "VSSIO": "17",
  /** Physical pin 18: P3.0; bidirectional. */
  "P3.0": "18",
  /** Physical pin 19: P3.1; bidirectional. */
  "P3.1": "19",
  /** Physical pin 20: P3.2; bidirectional. */
  "P3.2": "20",
  /** Physical pin 21: P3.3; bidirectional. */
  "P3.3": "21",
  /** Physical pin 22: P3.4; bidirectional. */
  "P3.4": "22",
  /** Physical pin 23: P3.5; bidirectional. */
  "P3.5": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.7; bidirectional. */
  "P3.7": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO": "26",
  /** Physical pin 27: P4.0; bidirectional. */
  "P4.0": "27",
  /** Physical pin 28: P4.1; bidirectional. */
  "P4.1": "28",
  /** Physical pin 29: P4.2; bidirectional. */
  "P4.2": "29",
  /** Physical pin 30: P4.3; bidirectional. */
  "P4.3": "30",
  /** Physical pin 31: P4.4; bidirectional. */
  "P4.4": "31",
  /** Physical pin 32: P4.5; bidirectional. */
  "P4.5": "32",
  /** Physical pin 33: P4.6; bidirectional. */
  "P4.6": "33",
  /** Physical pin 37: P7.0; bidirectional. */
  "P7.0": "37",
  /** Physical pin 38: P7.1; bidirectional. */
  "P7.1": "38",
  /** Physical pin 39: P0.0; bidirectional. */
  "P0.0": "39",
  /** Physical pin 40: P0.1; bidirectional. */
  "P0.1": "40",
  /** Physical pin 41: P0.2; bidirectional. */
  "P0.2": "41",
  /** Physical pin 42: P0.3; bidirectional. */
  "P0.3": "42",
  /** Physical pin 43: P0.4; bidirectional. */
  "P0.4": "43",
  /** Physical pin 44: P0.5; bidirectional. */
  "P0.5": "44",
  /** Physical pin 45: P0.6; bidirectional. */
  "P0.6": "45",
  /** Physical pin 46: P0.7; bidirectional. */
  "P0.7": "46",
  /** Physical pin 47: XRES; input. */
  "XRES": "47",
  /** Physical pin 48: VCCD; power_out. */
  "VCCD": "48",
  /** Physical pin 49: VSSD; power_in. */
  "VSSD": "49",
  /** Physical pin 50: VDDD; power_in. */
  "VDDD": "50",
  /** Physical pin 51: P5.0; bidirectional. */
  "P5.0": "51",
  /** Physical pin 52: P5.1; bidirectional. */
  "P5.1": "52",
  /** Physical pin 53: P5.2; bidirectional. */
  "P5.2": "53",
  /** Physical pin 54: P5.3; bidirectional. */
  "P5.3": "54",
  /** Physical pin 55: P5.5; bidirectional. */
  "P5.5": "55",
  /** Physical pin 56: VDDA; power_in. */
  "VDDA_56": "56",
  /** Physical pin 57: VSSA; power_in. */
  "VSSA_57": "57",
  /** Physical pin 58: P1.0; bidirectional. */
  "P1.0": "58",
  /** Physical pin 59: P1.1; bidirectional. */
  "P1.1": "59",
  /** Physical pin 60: P1.2; bidirectional. */
  "P1.2": "60",
  /** Physical pin 61: P1.3; bidirectional. */
  "P1.3": "61",
  /** Physical pin 62: P1.4; bidirectional. */
  "P1.4": "62",
  /** Physical pin 63: P1.5; bidirectional. */
  "P1.5": "63",
  /** Physical pin 64: P1.6; bidirectional. */
  "P1.6": "64",
}) {
  override schema = "MCU_Cypress:CY8C4246AZI-M445";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 64KB Flash, 8KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4246AZI-M475`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm IDAC.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4246AZI_M475 extends Component.withPins({
  /** Physical pin 1: P1.7/VREF; bidirectional. */
  "P1.7/VREF": "1",
  /** Physical pin 2: P2.0; bidirectional. */
  "P2.0": "2",
  /** Physical pin 3: P2.1; bidirectional. */
  "P2.1": "3",
  /** Physical pin 4: P2.2; bidirectional. */
  "P2.2": "4",
  /** Physical pin 5: P2.3; bidirectional. */
  "P2.3": "5",
  /** Physical pin 6: P2.4; bidirectional. */
  "P2.4": "6",
  /** Physical pin 7: P2.5; bidirectional. */
  "P2.5": "7",
  /** Physical pin 8: P2.6; bidirectional. */
  "P2.6": "8",
  /** Physical pin 9: P2.7; bidirectional. */
  "P2.7": "9",
  /** Physical pin 10: VSSA; power_in. */
  "VSSA_10": "10",
  /** Physical pin 11: VDDA; power_in. */
  "VDDA_11": "11",
  /** Physical pin 12: P6.0; bidirectional. */
  "P6.0": "12",
  /** Physical pin 13: P6.1; bidirectional. */
  "P6.1": "13",
  /** Physical pin 14: P6.2; bidirectional. */
  "P6.2": "14",
  /** Physical pin 15: P6.4; bidirectional. */
  "P6.4": "15",
  /** Physical pin 16: P6.5; bidirectional. */
  "P6.5": "16",
  /** Physical pin 17: VSSIO; power_in. */
  "VSSIO": "17",
  /** Physical pin 18: P3.0; bidirectional. */
  "P3.0": "18",
  /** Physical pin 19: P3.1; bidirectional. */
  "P3.1": "19",
  /** Physical pin 20: P3.2; bidirectional. */
  "P3.2": "20",
  /** Physical pin 21: P3.3; bidirectional. */
  "P3.3": "21",
  /** Physical pin 22: P3.4; bidirectional. */
  "P3.4": "22",
  /** Physical pin 23: P3.5; bidirectional. */
  "P3.5": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.7; bidirectional. */
  "P3.7": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO": "26",
  /** Physical pin 27: P4.0; bidirectional. */
  "P4.0": "27",
  /** Physical pin 28: P4.1; bidirectional. */
  "P4.1": "28",
  /** Physical pin 29: P4.2; bidirectional. */
  "P4.2": "29",
  /** Physical pin 30: P4.3; bidirectional. */
  "P4.3": "30",
  /** Physical pin 31: P4.4; bidirectional. */
  "P4.4": "31",
  /** Physical pin 32: P4.5; bidirectional. */
  "P4.5": "32",
  /** Physical pin 33: P4.6; bidirectional. */
  "P4.6": "33",
  /** Physical pin 37: P7.0; bidirectional. */
  "P7.0": "37",
  /** Physical pin 38: P7.1; bidirectional. */
  "P7.1": "38",
  /** Physical pin 39: P0.0; bidirectional. */
  "P0.0": "39",
  /** Physical pin 40: P0.1; bidirectional. */
  "P0.1": "40",
  /** Physical pin 41: P0.2; bidirectional. */
  "P0.2": "41",
  /** Physical pin 42: P0.3; bidirectional. */
  "P0.3": "42",
  /** Physical pin 43: P0.4; bidirectional. */
  "P0.4": "43",
  /** Physical pin 44: P0.5; bidirectional. */
  "P0.5": "44",
  /** Physical pin 45: P0.6; bidirectional. */
  "P0.6": "45",
  /** Physical pin 46: P0.7; bidirectional. */
  "P0.7": "46",
  /** Physical pin 47: XRES; input. */
  "XRES": "47",
  /** Physical pin 48: VCCD; power_out. */
  "VCCD": "48",
  /** Physical pin 49: VSSD; power_in. */
  "VSSD": "49",
  /** Physical pin 50: VDDD; power_in. */
  "VDDD": "50",
  /** Physical pin 51: P5.0; bidirectional. */
  "P5.0": "51",
  /** Physical pin 52: P5.1; bidirectional. */
  "P5.1": "52",
  /** Physical pin 53: P5.2; bidirectional. */
  "P5.2": "53",
  /** Physical pin 54: P5.3; bidirectional. */
  "P5.3": "54",
  /** Physical pin 55: P5.5; bidirectional. */
  "P5.5": "55",
  /** Physical pin 56: VDDA; power_in. */
  "VDDA_56": "56",
  /** Physical pin 57: VSSA; power_in. */
  "VSSA_57": "57",
  /** Physical pin 58: P1.0; bidirectional. */
  "P1.0": "58",
  /** Physical pin 59: P1.1; bidirectional. */
  "P1.1": "59",
  /** Physical pin 60: P1.2; bidirectional. */
  "P1.2": "60",
  /** Physical pin 61: P1.3; bidirectional. */
  "P1.3": "61",
  /** Physical pin 62: P1.4; bidirectional. */
  "P1.4": "62",
  /** Physical pin 63: P1.5; bidirectional. */
  "P1.5": "63",
  /** Physical pin 64: P1.6; bidirectional. */
  "P1.6": "64",
}) {
  override schema = "MCU_Cypress:CY8C4246AZI-M475";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 128KB Flash, 16KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247AXI-M485`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense IDAC LCD CAN.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4247AXI_M485 extends Component.withPins({
  /** Physical pin 1: P1.7/VREF; bidirectional. */
  "P1.7/VREF": "1",
  /** Physical pin 2: P2.0; bidirectional. */
  "P2.0": "2",
  /** Physical pin 3: P2.1; bidirectional. */
  "P2.1": "3",
  /** Physical pin 4: P2.2; bidirectional. */
  "P2.2": "4",
  /** Physical pin 5: P2.3; bidirectional. */
  "P2.3": "5",
  /** Physical pin 6: P2.4; bidirectional. */
  "P2.4": "6",
  /** Physical pin 7: P2.5; bidirectional. */
  "P2.5": "7",
  /** Physical pin 8: P2.6; bidirectional. */
  "P2.6": "8",
  /** Physical pin 9: P2.7; bidirectional. */
  "P2.7": "9",
  /** Physical pin 10: VSSA; power_in. */
  "VSSA_10": "10",
  /** Physical pin 11: VDDA; power_in. */
  "VDDA_11": "11",
  /** Physical pin 12: P6.0; bidirectional. */
  "P6.0": "12",
  /** Physical pin 13: P6.1; bidirectional. */
  "P6.1": "13",
  /** Physical pin 14: P6.2; bidirectional. */
  "P6.2": "14",
  /** Physical pin 15: P6.4; bidirectional. */
  "P6.4": "15",
  /** Physical pin 16: P6.5; bidirectional. */
  "P6.5": "16",
  /** Physical pin 17: VSSIO; power_in. */
  "VSSIO": "17",
  /** Physical pin 18: P3.0; bidirectional. */
  "P3.0": "18",
  /** Physical pin 19: P3.1; bidirectional. */
  "P3.1": "19",
  /** Physical pin 20: P3.2; bidirectional. */
  "P3.2": "20",
  /** Physical pin 21: P3.3; bidirectional. */
  "P3.3": "21",
  /** Physical pin 22: P3.4; bidirectional. */
  "P3.4": "22",
  /** Physical pin 23: P3.5; bidirectional. */
  "P3.5": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.7; bidirectional. */
  "P3.7": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO": "26",
  /** Physical pin 27: P4.0; bidirectional. */
  "P4.0": "27",
  /** Physical pin 28: P4.1; bidirectional. */
  "P4.1": "28",
  /** Physical pin 29: P4.2; bidirectional. */
  "P4.2": "29",
  /** Physical pin 30: P4.3; bidirectional. */
  "P4.3": "30",
  /** Physical pin 31: P4.4; bidirectional. */
  "P4.4": "31",
  /** Physical pin 32: P4.5; bidirectional. */
  "P4.5": "32",
  /** Physical pin 33: P4.6; bidirectional. */
  "P4.6": "33",
  /** Physical pin 37: P7.0; bidirectional. */
  "P7.0": "37",
  /** Physical pin 38: P7.1; bidirectional. */
  "P7.1": "38",
  /** Physical pin 39: P0.0; bidirectional. */
  "P0.0": "39",
  /** Physical pin 40: P0.1; bidirectional. */
  "P0.1": "40",
  /** Physical pin 41: P0.2; bidirectional. */
  "P0.2": "41",
  /** Physical pin 42: P0.3; bidirectional. */
  "P0.3": "42",
  /** Physical pin 43: P0.4; bidirectional. */
  "P0.4": "43",
  /** Physical pin 44: P0.5; bidirectional. */
  "P0.5": "44",
  /** Physical pin 45: P0.6; bidirectional. */
  "P0.6": "45",
  /** Physical pin 46: P0.7; bidirectional. */
  "P0.7": "46",
  /** Physical pin 47: XRES; input. */
  "XRES": "47",
  /** Physical pin 48: VCCD; power_out. */
  "VCCD": "48",
  /** Physical pin 49: VSSD; power_in. */
  "VSSD": "49",
  /** Physical pin 50: VDDD; power_in. */
  "VDDD": "50",
  /** Physical pin 51: P5.0; bidirectional. */
  "P5.0": "51",
  /** Physical pin 52: P5.1; bidirectional. */
  "P5.1": "52",
  /** Physical pin 53: P5.2; bidirectional. */
  "P5.2": "53",
  /** Physical pin 54: P5.3; bidirectional. */
  "P5.3": "54",
  /** Physical pin 55: P5.5; bidirectional. */
  "P5.5": "55",
  /** Physical pin 56: VDDA; power_in. */
  "VDDA_56": "56",
  /** Physical pin 57: VSSA; power_in. */
  "VSSA_57": "57",
  /** Physical pin 58: P1.0; bidirectional. */
  "P1.0": "58",
  /** Physical pin 59: P1.1; bidirectional. */
  "P1.1": "59",
  /** Physical pin 60: P1.2; bidirectional. */
  "P1.2": "60",
  /** Physical pin 61: P1.3; bidirectional. */
  "P1.3": "61",
  /** Physical pin 62: P1.4; bidirectional. */
  "P1.4": "62",
  /** Physical pin 63: P1.5; bidirectional. */
  "P1.5": "63",
  /** Physical pin 64: P1.6; bidirectional. */
  "P1.6": "64",
}) {
  override schema = "MCU_Cypress:CY8C4247AXI-M485";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 128KB Flash, 16KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247AZI-M475`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm IDAC.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4247AZI_M475 extends Component.withPins({
  /** Physical pin 1: P1.7/VREF; bidirectional. */
  "P1.7/VREF": "1",
  /** Physical pin 2: P2.0; bidirectional. */
  "P2.0": "2",
  /** Physical pin 3: P2.1; bidirectional. */
  "P2.1": "3",
  /** Physical pin 4: P2.2; bidirectional. */
  "P2.2": "4",
  /** Physical pin 5: P2.3; bidirectional. */
  "P2.3": "5",
  /** Physical pin 6: P2.4; bidirectional. */
  "P2.4": "6",
  /** Physical pin 7: P2.5; bidirectional. */
  "P2.5": "7",
  /** Physical pin 8: P2.6; bidirectional. */
  "P2.6": "8",
  /** Physical pin 9: P2.7; bidirectional. */
  "P2.7": "9",
  /** Physical pin 10: VSSA; power_in. */
  "VSSA_10": "10",
  /** Physical pin 11: VDDA; power_in. */
  "VDDA_11": "11",
  /** Physical pin 12: P6.0; bidirectional. */
  "P6.0": "12",
  /** Physical pin 13: P6.1; bidirectional. */
  "P6.1": "13",
  /** Physical pin 14: P6.2; bidirectional. */
  "P6.2": "14",
  /** Physical pin 15: P6.4; bidirectional. */
  "P6.4": "15",
  /** Physical pin 16: P6.5; bidirectional. */
  "P6.5": "16",
  /** Physical pin 17: VSSIO; power_in. */
  "VSSIO": "17",
  /** Physical pin 18: P3.0; bidirectional. */
  "P3.0": "18",
  /** Physical pin 19: P3.1; bidirectional. */
  "P3.1": "19",
  /** Physical pin 20: P3.2; bidirectional. */
  "P3.2": "20",
  /** Physical pin 21: P3.3; bidirectional. */
  "P3.3": "21",
  /** Physical pin 22: P3.4; bidirectional. */
  "P3.4": "22",
  /** Physical pin 23: P3.5; bidirectional. */
  "P3.5": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.7; bidirectional. */
  "P3.7": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO": "26",
  /** Physical pin 27: P4.0; bidirectional. */
  "P4.0": "27",
  /** Physical pin 28: P4.1; bidirectional. */
  "P4.1": "28",
  /** Physical pin 29: P4.2; bidirectional. */
  "P4.2": "29",
  /** Physical pin 30: P4.3; bidirectional. */
  "P4.3": "30",
  /** Physical pin 31: P4.4; bidirectional. */
  "P4.4": "31",
  /** Physical pin 32: P4.5; bidirectional. */
  "P4.5": "32",
  /** Physical pin 33: P4.6; bidirectional. */
  "P4.6": "33",
  /** Physical pin 37: P7.0; bidirectional. */
  "P7.0": "37",
  /** Physical pin 38: P7.1; bidirectional. */
  "P7.1": "38",
  /** Physical pin 39: P0.0; bidirectional. */
  "P0.0": "39",
  /** Physical pin 40: P0.1; bidirectional. */
  "P0.1": "40",
  /** Physical pin 41: P0.2; bidirectional. */
  "P0.2": "41",
  /** Physical pin 42: P0.3; bidirectional. */
  "P0.3": "42",
  /** Physical pin 43: P0.4; bidirectional. */
  "P0.4": "43",
  /** Physical pin 44: P0.5; bidirectional. */
  "P0.5": "44",
  /** Physical pin 45: P0.6; bidirectional. */
  "P0.6": "45",
  /** Physical pin 46: P0.7; bidirectional. */
  "P0.7": "46",
  /** Physical pin 47: XRES; input. */
  "XRES": "47",
  /** Physical pin 48: VCCD; power_out. */
  "VCCD": "48",
  /** Physical pin 49: VSSD; power_in. */
  "VSSD": "49",
  /** Physical pin 50: VDDD; power_in. */
  "VDDD": "50",
  /** Physical pin 51: P5.0; bidirectional. */
  "P5.0": "51",
  /** Physical pin 52: P5.1; bidirectional. */
  "P5.1": "52",
  /** Physical pin 53: P5.2; bidirectional. */
  "P5.2": "53",
  /** Physical pin 54: P5.3; bidirectional. */
  "P5.3": "54",
  /** Physical pin 55: P5.5; bidirectional. */
  "P5.5": "55",
  /** Physical pin 56: VDDA; power_in. */
  "VDDA_56": "56",
  /** Physical pin 57: VSSA; power_in. */
  "VSSA_57": "57",
  /** Physical pin 58: P1.0; bidirectional. */
  "P1.0": "58",
  /** Physical pin 59: P1.1; bidirectional. */
  "P1.1": "59",
  /** Physical pin 60: P1.2; bidirectional. */
  "P1.2": "60",
  /** Physical pin 61: P1.3; bidirectional. */
  "P1.3": "61",
  /** Physical pin 62: P1.4; bidirectional. */
  "P1.4": "62",
  /** Physical pin 63: P1.5; bidirectional. */
  "P1.5": "63",
  /** Physical pin 64: P1.6; bidirectional. */
  "P1.6": "64",
}) {
  override schema = "MCU_Cypress:CY8C4247AZI-M475";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 128KB Flash, 16KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247AZI-M485`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense IDAC LCD CAN.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4247AZI_M485 extends Component.withPins({
  /** Physical pin 1: P1.7/VREF; bidirectional. */
  "P1.7/VREF": "1",
  /** Physical pin 2: P2.0; bidirectional. */
  "P2.0": "2",
  /** Physical pin 3: P2.1; bidirectional. */
  "P2.1": "3",
  /** Physical pin 4: P2.2; bidirectional. */
  "P2.2": "4",
  /** Physical pin 5: P2.3; bidirectional. */
  "P2.3": "5",
  /** Physical pin 6: P2.4; bidirectional. */
  "P2.4": "6",
  /** Physical pin 7: P2.5; bidirectional. */
  "P2.5": "7",
  /** Physical pin 8: P2.6; bidirectional. */
  "P2.6": "8",
  /** Physical pin 9: P2.7; bidirectional. */
  "P2.7": "9",
  /** Physical pin 10: VSSA; power_in. */
  "VSSA_10": "10",
  /** Physical pin 11: VDDA; power_in. */
  "VDDA_11": "11",
  /** Physical pin 12: P6.0; bidirectional. */
  "P6.0": "12",
  /** Physical pin 13: P6.1; bidirectional. */
  "P6.1": "13",
  /** Physical pin 14: P6.2; bidirectional. */
  "P6.2": "14",
  /** Physical pin 15: P6.4; bidirectional. */
  "P6.4": "15",
  /** Physical pin 16: P6.5; bidirectional. */
  "P6.5": "16",
  /** Physical pin 17: VSSIO; power_in. */
  "VSSIO": "17",
  /** Physical pin 18: P3.0; bidirectional. */
  "P3.0": "18",
  /** Physical pin 19: P3.1; bidirectional. */
  "P3.1": "19",
  /** Physical pin 20: P3.2; bidirectional. */
  "P3.2": "20",
  /** Physical pin 21: P3.3; bidirectional. */
  "P3.3": "21",
  /** Physical pin 22: P3.4; bidirectional. */
  "P3.4": "22",
  /** Physical pin 23: P3.5; bidirectional. */
  "P3.5": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.7; bidirectional. */
  "P3.7": "25",
  /** Physical pin 26: VDDIO; power_in. */
  "VDDIO": "26",
  /** Physical pin 27: P4.0; bidirectional. */
  "P4.0": "27",
  /** Physical pin 28: P4.1; bidirectional. */
  "P4.1": "28",
  /** Physical pin 29: P4.2; bidirectional. */
  "P4.2": "29",
  /** Physical pin 30: P4.3; bidirectional. */
  "P4.3": "30",
  /** Physical pin 31: P4.4; bidirectional. */
  "P4.4": "31",
  /** Physical pin 32: P4.5; bidirectional. */
  "P4.5": "32",
  /** Physical pin 33: P4.6; bidirectional. */
  "P4.6": "33",
  /** Physical pin 37: P7.0; bidirectional. */
  "P7.0": "37",
  /** Physical pin 38: P7.1; bidirectional. */
  "P7.1": "38",
  /** Physical pin 39: P0.0; bidirectional. */
  "P0.0": "39",
  /** Physical pin 40: P0.1; bidirectional. */
  "P0.1": "40",
  /** Physical pin 41: P0.2; bidirectional. */
  "P0.2": "41",
  /** Physical pin 42: P0.3; bidirectional. */
  "P0.3": "42",
  /** Physical pin 43: P0.4; bidirectional. */
  "P0.4": "43",
  /** Physical pin 44: P0.5; bidirectional. */
  "P0.5": "44",
  /** Physical pin 45: P0.6; bidirectional. */
  "P0.6": "45",
  /** Physical pin 46: P0.7; bidirectional. */
  "P0.7": "46",
  /** Physical pin 47: XRES; input. */
  "XRES": "47",
  /** Physical pin 48: VCCD; power_out. */
  "VCCD": "48",
  /** Physical pin 49: VSSD; power_in. */
  "VSSD": "49",
  /** Physical pin 50: VDDD; power_in. */
  "VDDD": "50",
  /** Physical pin 51: P5.0; bidirectional. */
  "P5.0": "51",
  /** Physical pin 52: P5.1; bidirectional. */
  "P5.1": "52",
  /** Physical pin 53: P5.2; bidirectional. */
  "P5.2": "53",
  /** Physical pin 54: P5.3; bidirectional. */
  "P5.3": "54",
  /** Physical pin 55: P5.5; bidirectional. */
  "P5.5": "55",
  /** Physical pin 56: VDDA; power_in. */
  "VDDA_56": "56",
  /** Physical pin 57: VSSA; power_in. */
  "VSSA_57": "57",
  /** Physical pin 58: P1.0; bidirectional. */
  "P1.0": "58",
  /** Physical pin 59: P1.1; bidirectional. */
  "P1.1": "59",
  /** Physical pin 60: P1.2; bidirectional. */
  "P1.2": "60",
  /** Physical pin 61: P1.3; bidirectional. */
  "P1.3": "61",
  /** Physical pin 62: P1.4; bidirectional. */
  "P1.4": "62",
  /** Physical pin 63: P1.5; bidirectional. */
  "P1.5": "63",
  /** Physical pin 64: P1.6; bidirectional. */
  "P1.6": "64",
}) {
  override schema = "MCU_Cypress:CY8C4247AZI-M485";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, 4 UDB, CAP-SENSE W/O GESTURE, NO LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL453`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4247LQI_BL453 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4247LQI-BL453";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, 4 UDB, NO CAP-SENSE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL463`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4247LQI_BL463 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4247LQI-BL463";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, 4 UDB, NO CAP-SENSE, NO LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL473`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4247LQI_BL473 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4247LQI-BL473";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, 4 UDB, CAP-SENSE W/O GESTURES, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL483`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4247LQI_BL483 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4247LQI-BL483";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/ GESTURE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL493`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4247LQI_BL493 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4247LQI-BL493";
  override referencePrefix = "U";
}

/**
 * ENGR_SAMPLE,  56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/ GESTURE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQQ-BL483`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CY8C4247LQQ_BL483 extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CY8C4247LQQ-BL483";
  override referencePrefix = "U";
}

/**
 * Programmable Radio-on-Chip With Bluetooth Low Energy, 48-MHz ARM® Cortex®-M0 , 56-QFN
 *
 * KiCad symbol: `MCU_Cypress:CYBL10x6x-56LQxx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10x6x_56LQxx extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10x6x-56LQxx";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, NO CAP-SENSE, 1 SCB, 2 TCPWM, NO I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10161-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10161_56LQXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10161-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, NO CAP-SENSE, 2 SCB, 4 TCPWM, NO I2S, 4 PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10162-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10162_56LQXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10162-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, NO CAP-SENSE, 2 SCB, 4 TCPWM, 1 I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10163-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10163_56LQXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10163-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE, 2 SCB, 4 TCPWM, NO I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10461-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10461_56LQXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10461-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE, 2 SCB, 4 TCPWM, 1 I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10462-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10462_56LQXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10462-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE, 2 SCB, 4 TCPWM, NO I2S, NO PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10463-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10463_56LQXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10463-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, NO I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10561-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10561_56LQXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10561-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10562-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10562_56LQXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10562-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10563-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10563_56LQXI extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10563-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10563-56LQXQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10563_56LQXQ extends Component.withPins({
  /** Physical pin 1: VDDD; power_in. */
  "VDDD_1": "1",
  /** Physical pin 2: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "2",
  /** Physical pin 3: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "3",
  /** Physical pin 4: XRES; input. */
  "XRES": "4",
  /** Physical pin 5: P4.0; bidirectional. */
  "P4.0": "5",
  /** Physical pin 6: P4.1; bidirectional. */
  "P4.1": "6",
  /** Physical pin 7: P5.0; bidirectional. */
  "P5.0": "7",
  /** Physical pin 8: P5.1; bidirectional. */
  "P5.1": "8",
  /** Physical pin 9: VSSD; power_in. */
  "VSSD": "9",
  /** Physical pin 10: VDDR; power_in. */
  "VDDR_10": "10",
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 12: ANT; output. */
  "ANT": "12",
  /** Physical pin 13: GANT2; power_in. */
  "GANT2": "13",
  /** Physical pin 14: VDDR; power_in. */
  "VDDR_14": "14",
  /** Physical pin 15: VDDR; power_in. */
  "VDDR_15": "15",
  /** Physical pin 16: XTAL24I; input. */
  "XTAL24I": "16",
  /** Physical pin 17: XTAL24O; output. */
  "XTAL24O": "17",
  /** Physical pin 18: VDDR; power_in. */
  "VDDR_18": "18",
  /** Physical pin 19: P0.0; bidirectional. */
  "P0.0": "19",
  /** Physical pin 20: P0.1; bidirectional. */
  "P0.1": "20",
  /** Physical pin 21: P0.2; bidirectional. */
  "P0.2": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: VDDD; power_in. */
  "VDDD_23": "23",
  /** Physical pin 24: P0.4; bidirectional. */
  "P0.4": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.6; bidirectional. */
  "P0.6": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P1.0; bidirectional. */
  "P1.0": "28",
  /** Physical pin 29: P1.1; bidirectional. */
  "P1.1": "29",
  /** Physical pin 30: P1.2; bidirectional. */
  "P1.2": "30",
  /** Physical pin 31: P1.3; bidirectional. */
  "P1.3": "31",
  /** Physical pin 32: P1.4; bidirectional. */
  "P1.4": "32",
  /** Physical pin 33: P1.5; bidirectional. */
  "P1.5": "33",
  /** Physical pin 34: P1.6; bidirectional. */
  "P1.6": "34",
  /** Physical pin 35: P1.7; bidirectional. */
  "P1.7": "35",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 37: P2.0; bidirectional. */
  "P2.0": "37",
  /** Physical pin 38: P2.1; bidirectional. */
  "P2.1": "38",
  /** Physical pin 39: P2.2; bidirectional. */
  "P2.2": "39",
  /** Physical pin 40: P2.3; bidirectional. */
  "P2.3": "40",
  /** Physical pin 41: P2.4; bidirectional. */
  "P2.4": "41",
  /** Physical pin 42: P2.5; bidirectional. */
  "P2.5": "42",
  /** Physical pin 43: P2.6; bidirectional. */
  "P2.6": "43",
  /** Physical pin 44: P2.7; bidirectional. */
  "P2.7": "44",
  /** Physical pin 45: VREF; passive. */
  "VREF": "45",
  /** Physical pin 46: VDDA; power_in. */
  "VDDA_46": "46",
  /** Physical pin 47: P3.0; bidirectional. */
  "P3.0": "47",
  /** Physical pin 48: P3.1; bidirectional. */
  "P3.1": "48",
  /** Physical pin 49: P3.2; bidirectional. */
  "P3.2": "49",
  /** Physical pin 50: P3.3; bidirectional. */
  "P3.3": "50",
  /** Physical pin 51: P3.4; bidirectional. */
  "P3.4": "51",
  /** Physical pin 52: P3.5; bidirectional. */
  "P3.5": "52",
  /** Physical pin 53: P3.6; bidirectional. */
  "P3.6": "53",
  /** Physical pin 54: P3.7; bidirectional. */
  "P3.7": "54",
  /** Physical pin 55: VSSA; power_in. */
  "VSSA": "55",
  /** Physical pin 56: VCCD; power_out. */
  "VCCD": "56",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
}) {
  override schema = "MCU_Cypress:CYBL10563-56LQXQ";
  override referencePrefix = "U";
}

/**
 * 68-WLCSP, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10563-68FNXIT`. Reference prefix: `U`.
 * Footprint filters: WLCSP*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH WLCSP.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10563_68FNXIT extends Component.withPins({
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
  /** Physical pin A1: VREF; passive. */
  "VREF": "A1",
  /** Physical pin A2: VSSA; power_in. */
  "VSSA_A2": "A2",
  /** Physical pin A3: P3.3; bidirectional. */
  "P3.3": "A3",
  /** Physical pin A4: P3.7; bidirectional. */
  "P3.7": "A4",
  /** Physical pin A5: VSSD; power_in. */
  "VSSD_A5": "A5",
  /** Physical pin A6: VSSA; power_in. */
  "VSSA_A6": "A6",
  /** Physical pin A7: VCCD; power_out. */
  "VCCD": "A7",
  /** Physical pin A8: VDDD; power_in. */
  "VDDD_A8": "A8",
  /** Physical pin B1: P2.3; bidirectional. */
  "P2.3": "B1",
  /** Physical pin B2: VSSA; bidirectional. */
  "VSSA_B2": "B2",
  /** Physical pin B3: P2.7; bidirectional. */
  "P2.7": "B3",
  /** Physical pin B4: P3.4; bidirectional. */
  "P3.4": "B4",
  /** Physical pin B5: P3.5; bidirectional. */
  "P3.5": "B5",
  /** Physical pin B6: P3.6; bidirectional. */
  "P3.6": "B6",
  /** Physical pin B7: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "B7",
  /** Physical pin B8: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "B8",
  /** Physical pin C1: VSSA; power_in. */
  "VSSA_C1": "C1",
  /** Physical pin C2: P2.2; bidirectional. */
  "P2.2": "C2",
  /** Physical pin C3: P2.6; bidirectional. */
  "P2.6": "C3",
  /** Physical pin C4: P3.0; bidirectional. */
  "P3.0": "C4",
  /** Physical pin C5: P3.1; bidirectional. */
  "P3.1": "C5",
  /** Physical pin C6: P3.2; bidirectional. */
  "P3.2": "C6",
  /** Physical pin C7: XRES; input. */
  "XRES": "C7",
  /** Physical pin C8: P4.0; bidirectional. */
  "P4.0": "C8",
  /** Physical pin D1: P1.7; bidirectional. */
  "P1.7": "D1",
  /** Physical pin D2: VDDA; power_in. */
  "VDDA_D2": "D2",
  /** Physical pin D3: P2.0; bidirectional. */
  "P2.0": "D3",
  /** Physical pin D4: P2.1; bidirectional. */
  "P2.1": "D4",
  /** Physical pin D5: P2.5; bidirectional. */
  "P2.5": "D5",
  /** Physical pin D6: VSSD; power_in. */
  "VSSD_D6": "D6",
  /** Physical pin D7: P4.1; bidirectional. */
  "P4.1": "D7",
  /** Physical pin D8: P5.0; bidirectional. */
  "P5.0": "D8",
  /** Physical pin E1: P1.2; bidirectional. */
  "P1.2": "E1",
  /** Physical pin E2: P1.3; bidirectional. */
  "P1.3": "E2",
  /** Physical pin E3: P1.4; bidirectional. */
  "P1.4": "E3",
  /** Physical pin E4: P1.5; bidirectional. */
  "P1.5": "E4",
  /** Physical pin E5: P1.6; bidirectional. */
  "P1.6": "E5",
  /** Physical pin E6: P2.4; bidirectional. */
  "P2.4": "E6",
  /** Physical pin E7: P5.1; bidirectional. */
  "P5.1": "E7",
  /** Physical pin E8: VSSD; power_in. */
  "VSSD_E8": "E8",
  /** Physical pin F1: VSSD; power_in. */
  "VSSD_F1": "F1",
  /** Physical pin F2: P0.7; bidirectional. */
  "P0.7": "F2",
  /** Physical pin F3: P0.3; bidirectional. */
  "P0.3": "F3",
  /** Physical pin F4: P1.0; bidirectional. */
  "P1.0": "F4",
  /** Physical pin F5: P1.1; bidirectional. */
  "P1.1": "F5",
  /** Physical pin F6: VSSR; power_in. */
  "VSSR_F6": "F6",
  /** Physical pin F7: VSSR; power_in. */
  "VSSR_F7": "F7",
  /** Physical pin F8: VDDR; power_in. */
  "VDDR_F8": "F8",
  /** Physical pin G1: P0.6; bidirectional. */
  "P0.6": "G1",
  /** Physical pin G2: VDDD; power_in. */
  "VDDD_G2": "G2",
  /** Physical pin G3: P0.2; bidirectional. */
  "P0.2": "G3",
  /** Physical pin G4: VSSD; power_in. */
  "VSSD_G4": "G4",
  /** Physical pin G5: VSSR; power_in. */
  "VSSR_G5": "G5",
  /** Physical pin G6: VSSR; power_in. */
  "VSSR_G6": "G6",
  /** Physical pin G7: GANT2; power_in. */
  "GANT2": "G7",
  /** Physical pin G8: VSSR; power_in. */
  "VSSR_G8": "G8",
  /** Physical pin H1: P0.5; bidirectional. */
  "P0.5": "H1",
  /** Physical pin H2: P0.1; bidirectional. */
  "P0.1": "H2",
  /** Physical pin H3: XTAL24O; output. */
  "XTAL24O": "H3",
  /** Physical pin H4: XTAL24I; input. */
  "XTAL24I": "H4",
  /** Physical pin H5: VSSR; power_in. */
  "VSSR_H5": "H5",
  /** Physical pin H6: VSSR; power_in. */
  "VSSR_H6": "H6",
  /** Physical pin H7: ANT; output. */
  "ANT": "H7",
  /** Physical pin J1: P0.4; bidirectional. */
  "P0.4": "J1",
  /** Physical pin J2: P0.0; bidirectional. */
  "P0.0": "J2",
  /** Physical pin J3: VDDR; power_in. */
  "VDDR_J3": "J3",
  /** Physical pin J4: VDDR; power_in. */
  "VDDR_J4": "J4",
  /** Physical pin J7: NC; no_connect. */
  "NC": "J7",
}) {
  override schema = "MCU_Cypress:CYBL10563-68FNXIT";
  override referencePrefix = "U";
}

/**
 * 68-WLCSP, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10563-68FLXIT`. Reference prefix: `U`.
 * Footprint filters: WLCSP*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH WLCSP.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CYBL10563_68FLXIT extends Component.withPins({
  /** Physical pin 11: GANT1; power_in. */
  "GANT1": "11",
  /** Physical pin 36: VDDA; power_in. */
  "VDDA_36": "36",
  /** Physical pin 57: GND_EP; power_in. */
  "GND_EP": "57",
  /** Physical pin A1: VREF; passive. */
  "VREF": "A1",
  /** Physical pin A2: VSSA; power_in. */
  "VSSA_A2": "A2",
  /** Physical pin A3: P3.3; bidirectional. */
  "P3.3": "A3",
  /** Physical pin A4: P3.7; bidirectional. */
  "P3.7": "A4",
  /** Physical pin A5: VSSD; power_in. */
  "VSSD_A5": "A5",
  /** Physical pin A6: VSSA; power_in. */
  "VSSA_A6": "A6",
  /** Physical pin A7: VCCD; power_out. */
  "VCCD": "A7",
  /** Physical pin A8: VDDD; power_in. */
  "VDDD_A8": "A8",
  /** Physical pin B1: P2.3; bidirectional. */
  "P2.3": "B1",
  /** Physical pin B2: VSSA; bidirectional. */
  "VSSA_B2": "B2",
  /** Physical pin B3: P2.7; bidirectional. */
  "P2.7": "B3",
  /** Physical pin B4: P3.4; bidirectional. */
  "P3.4": "B4",
  /** Physical pin B5: P3.5; bidirectional. */
  "P3.5": "B5",
  /** Physical pin B6: P3.6; bidirectional. */
  "P3.6": "B6",
  /** Physical pin B7: XTAL32I/P6.1; bidirectional. */
  "XTAL32I/P6.1": "B7",
  /** Physical pin B8: XTAL32O/P6.0; bidirectional. */
  "XTAL32O/P6.0": "B8",
  /** Physical pin C1: VSSA; power_in. */
  "VSSA_C1": "C1",
  /** Physical pin C2: P2.2; bidirectional. */
  "P2.2": "C2",
  /** Physical pin C3: P2.6; bidirectional. */
  "P2.6": "C3",
  /** Physical pin C4: P3.0; bidirectional. */
  "P3.0": "C4",
  /** Physical pin C5: P3.1; bidirectional. */
  "P3.1": "C5",
  /** Physical pin C6: P3.2; bidirectional. */
  "P3.2": "C6",
  /** Physical pin C7: XRES; input. */
  "XRES": "C7",
  /** Physical pin C8: P4.0; bidirectional. */
  "P4.0": "C8",
  /** Physical pin D1: P1.7; bidirectional. */
  "P1.7": "D1",
  /** Physical pin D2: VDDA; power_in. */
  "VDDA_D2": "D2",
  /** Physical pin D3: P2.0; bidirectional. */
  "P2.0": "D3",
  /** Physical pin D4: P2.1; bidirectional. */
  "P2.1": "D4",
  /** Physical pin D5: P2.5; bidirectional. */
  "P2.5": "D5",
  /** Physical pin D6: VSSD; power_in. */
  "VSSD_D6": "D6",
  /** Physical pin D7: P4.1; bidirectional. */
  "P4.1": "D7",
  /** Physical pin D8: P5.0; bidirectional. */
  "P5.0": "D8",
  /** Physical pin E1: P1.2; bidirectional. */
  "P1.2": "E1",
  /** Physical pin E2: P1.3; bidirectional. */
  "P1.3": "E2",
  /** Physical pin E3: P1.4; bidirectional. */
  "P1.4": "E3",
  /** Physical pin E4: P1.5; bidirectional. */
  "P1.5": "E4",
  /** Physical pin E5: P1.6; bidirectional. */
  "P1.6": "E5",
  /** Physical pin E6: P2.4; bidirectional. */
  "P2.4": "E6",
  /** Physical pin E7: P5.1; bidirectional. */
  "P5.1": "E7",
  /** Physical pin E8: VSSD; power_in. */
  "VSSD_E8": "E8",
  /** Physical pin F1: VSSD; power_in. */
  "VSSD_F1": "F1",
  /** Physical pin F2: P0.7; bidirectional. */
  "P0.7": "F2",
  /** Physical pin F3: P0.3; bidirectional. */
  "P0.3": "F3",
  /** Physical pin F4: P1.0; bidirectional. */
  "P1.0": "F4",
  /** Physical pin F5: P1.1; bidirectional. */
  "P1.1": "F5",
  /** Physical pin F6: VSSR; power_in. */
  "VSSR_F6": "F6",
  /** Physical pin F7: VSSR; power_in. */
  "VSSR_F7": "F7",
  /** Physical pin F8: VDDR; power_in. */
  "VDDR_F8": "F8",
  /** Physical pin G1: P0.6; bidirectional. */
  "P0.6": "G1",
  /** Physical pin G2: VDDD; power_in. */
  "VDDD_G2": "G2",
  /** Physical pin G3: P0.2; bidirectional. */
  "P0.2": "G3",
  /** Physical pin G4: VSSD; power_in. */
  "VSSD_G4": "G4",
  /** Physical pin G5: VSSR; power_in. */
  "VSSR_G5": "G5",
  /** Physical pin G6: VSSR; power_in. */
  "VSSR_G6": "G6",
  /** Physical pin G7: GANT2; power_in. */
  "GANT2": "G7",
  /** Physical pin G8: VSSR; power_in. */
  "VSSR_G8": "G8",
  /** Physical pin H1: P0.5; bidirectional. */
  "P0.5": "H1",
  /** Physical pin H2: P0.1; bidirectional. */
  "P0.1": "H2",
  /** Physical pin H3: XTAL24O; output. */
  "XTAL24O": "H3",
  /** Physical pin H4: XTAL24I; input. */
  "XTAL24I": "H4",
  /** Physical pin H5: VSSR; power_in. */
  "VSSR_H5": "H5",
  /** Physical pin H6: VSSR; power_in. */
  "VSSR_H6": "H6",
  /** Physical pin H7: ANT; output. */
  "ANT": "H7",
  /** Physical pin J1: P0.4; bidirectional. */
  "P0.4": "J1",
  /** Physical pin J2: P0.0; bidirectional. */
  "P0.0": "J2",
  /** Physical pin J3: VDDR; power_in. */
  "VDDR_J3": "J3",
  /** Physical pin J4: VDDR; power_in. */
  "VDDR_J4": "J4",
  /** Physical pin J7: NC; no_connect. */
  "NC": "J7",
}) {
  override schema = "MCU_Cypress:CYBL10563-68FLXIT";
  override referencePrefix = "U";
}

