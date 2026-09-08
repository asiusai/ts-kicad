// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Full Speed USB Flash MCU Family, 64k flash, 4352 ram, 25 IO, ADC, Temperature, VREF, LQFP-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F381-GQ`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C ADC LQFP32.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F381_GQ extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
}) {
  override schema = "MCU_SiliconLabs:C8051F381-GQ";
  override referencePrefix = "U";
}

/**
 * 16 KB ISP FLASH MCU Family with Full Speed USB, 2304 bytes internal RAM, 25 port I/O, 10-bit ADC, built-in temperature sensor, fully compatible with MCS-51 instruction set, LQFP-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F320-GQ`. Reference prefix: `U`.
 * Footprint filters: *LQFP*7x7mm*P0.8mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F32x.pdf
 * Keywords: 8051 microcontroller PCA UART SPI SMbus I2C VREF.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F320_GQ extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
}) {
  override schema = "MCU_SiliconLabs:C8051F320-GQ";
  override referencePrefix = "U";
}

/**
 * 16 KB ISP FLASH MCU Family with Full Speed USB, 2304 bytes internal RAM, 21 port I/O, 10-bit ADC, built-in temperature sensor, fully compatible with MCS-51 instruction set, QFN-28
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F321-GM`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*5x5mm*P0.5mm*EP3.25*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F32x.pdf
 * Keywords: 8051 microcontroller PCA UART SPI SMbus I2C VREF.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F321_GM extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.3; bidirectional. */
  "P2.3": "11",
  /** Physical pin 12: P2.2; bidirectional. */
  "P2.2": "12",
  /** Physical pin 13: P2.1; bidirectional. */
  "P2.1": "13",
  /** Physical pin 14: P2.0; bidirectional. */
  "P2.0": "14",
  /** Physical pin 15: P1.7; bidirectional. */
  "P1.7": "15",
  /** Physical pin 16: P1.6; bidirectional. */
  "P1.6": "16",
  /** Physical pin 17: P1.5; bidirectional. */
  "P1.5": "17",
  /** Physical pin 18: P1.4; bidirectional. */
  "P1.4": "18",
  /** Physical pin 19: P1.3; bidirectional. */
  "P1.3": "19",
  /** Physical pin 20: P1.2; bidirectional. */
  "P1.2": "20",
  /** Physical pin 21: P1.1; bidirectional. */
  "P1.1": "21",
  /** Physical pin 22: P1.0; bidirectional. */
  "P1.0": "22",
  /** Physical pin 23: P0.7; bidirectional. */
  "P0.7": "23",
  /** Physical pin 24: P0.6; bidirectional. */
  "P0.6": "24",
  /** Physical pin 25: P0.5; bidirectional. */
  "P0.5": "25",
  /** Physical pin 26: P0.4; bidirectional. */
  "P0.4": "26",
  /** Physical pin 27: P0.3; bidirectional. */
  "P0.3": "27",
  /** Physical pin 28: P0.2; bidirectional. */
  "P0.2": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "MCU_SiliconLabs:C8051F321-GM";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 64k flash, 4352 ram, 40 IO, EMIF, ADC, Temperature, VREF, TQFP-48
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F380-GQ`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C ADC EMIF TQFP48.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F380_GQ extends Component.withPins({
  /** Physical pin 1: P0.5; bidirectional. */
  "P0.5": "1",
  /** Physical pin 2: P0.4; bidirectional. */
  "P0.4": "2",
  /** Physical pin 3: P0.3; bidirectional. */
  "P0.3": "3",
  /** Physical pin 4: P0.2; bidirectional. */
  "P0.2": "4",
  /** Physical pin 5: P0.1; bidirectional. */
  "P0.1": "5",
  /** Physical pin 6: P0.0; bidirectional. */
  "P0.0": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: D+; bidirectional. */
  "D+": "8",
  /** Physical pin 9: D-; bidirectional. */
  "D-": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: REGIN; power_in. */
  "REGIN": "11",
  /** Physical pin 12: VBUS; input. */
  "VBUS": "12",
  /** Physical pin 13: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "13",
  /** Physical pin 14: C2D; bidirectional. */
  "C2D": "14",
  /** Physical pin 15: P4.7; bidirectional. */
  "P4.7": "15",
  /** Physical pin 16: P4.6; bidirectional. */
  "P4.6": "16",
  /** Physical pin 17: P4.5; bidirectional. */
  "P4.5": "17",
  /** Physical pin 18: P4.4; bidirectional. */
  "P4.4": "18",
  /** Physical pin 19: P4.3; bidirectional. */
  "P4.3": "19",
  /** Physical pin 20: P4.2; bidirectional. */
  "P4.2": "20",
  /** Physical pin 21: P4.1; bidirectional. */
  "P4.1": "21",
  /** Physical pin 22: P4.0; bidirectional. */
  "P4.0": "22",
  /** Physical pin 23: P3.7; bidirectional. */
  "P3.7": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.5; bidirectional. */
  "P3.5": "25",
  /** Physical pin 26: P3.4; bidirectional. */
  "P3.4": "26",
  /** Physical pin 27: P3.3; bidirectional. */
  "P3.3": "27",
  /** Physical pin 28: P3.2; bidirectional. */
  "P3.2": "28",
  /** Physical pin 29: P3.1; bidirectional. */
  "P3.1": "29",
  /** Physical pin 30: P3.0; bidirectional. */
  "P3.0": "30",
  /** Physical pin 31: P2.7; bidirectional. */
  "P2.7": "31",
  /** Physical pin 32: P2.6; bidirectional. */
  "P2.6": "32",
  /** Physical pin 33: P2.5; bidirectional. */
  "P2.5": "33",
  /** Physical pin 34: P2.4; bidirectional. */
  "P2.4": "34",
  /** Physical pin 35: P2.3; bidirectional. */
  "P2.3": "35",
  /** Physical pin 36: P2.2; bidirectional. */
  "P2.2": "36",
  /** Physical pin 37: P2.1; bidirectional. */
  "P2.1": "37",
  /** Physical pin 38: P2.0; bidirectional. */
  "P2.0": "38",
  /** Physical pin 39: P1.7; bidirectional. */
  "P1.7": "39",
  /** Physical pin 40: P1.6; bidirectional. */
  "P1.6": "40",
  /** Physical pin 41: P1.5; bidirectional. */
  "P1.5": "41",
  /** Physical pin 42: P1.4; bidirectional. */
  "P1.4": "42",
  /** Physical pin 43: P1.3; bidirectional. */
  "P1.3": "43",
  /** Physical pin 44: P1.2; bidirectional. */
  "P1.2": "44",
  /** Physical pin 45: P1.1; bidirectional. */
  "P1.1": "45",
  /** Physical pin 46: P1.0; bidirectional. */
  "P1.0": "46",
  /** Physical pin 47: P0.7; bidirectional. */
  "P0.7": "47",
  /** Physical pin 48: P0.6; bidirectional. */
  "P0.6": "48",
}) {
  override schema = "MCU_SiliconLabs:C8051F380-GQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 64k flash, 4352 ram, 25 IO, ADC, Temperature, VREF, QFN-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F381-GM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C ADC QFN32.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.3x3.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F381_GM extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
  override schema = "MCU_SiliconLabs:C8051F381-GM";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 32k flash, 2304 ram, 40 IO, EMIF, ADC, Temperature, VREF, TQFP-48
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F382-GQ`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C ADC EMIF TQFP48.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F382_GQ extends Component.withPins({
  /** Physical pin 1: P0.5; bidirectional. */
  "P0.5": "1",
  /** Physical pin 2: P0.4; bidirectional. */
  "P0.4": "2",
  /** Physical pin 3: P0.3; bidirectional. */
  "P0.3": "3",
  /** Physical pin 4: P0.2; bidirectional. */
  "P0.2": "4",
  /** Physical pin 5: P0.1; bidirectional. */
  "P0.1": "5",
  /** Physical pin 6: P0.0; bidirectional. */
  "P0.0": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: D+; bidirectional. */
  "D+": "8",
  /** Physical pin 9: D-; bidirectional. */
  "D-": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: REGIN; power_in. */
  "REGIN": "11",
  /** Physical pin 12: VBUS; input. */
  "VBUS": "12",
  /** Physical pin 13: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "13",
  /** Physical pin 14: C2D; bidirectional. */
  "C2D": "14",
  /** Physical pin 15: P4.7; bidirectional. */
  "P4.7": "15",
  /** Physical pin 16: P4.6; bidirectional. */
  "P4.6": "16",
  /** Physical pin 17: P4.5; bidirectional. */
  "P4.5": "17",
  /** Physical pin 18: P4.4; bidirectional. */
  "P4.4": "18",
  /** Physical pin 19: P4.3; bidirectional. */
  "P4.3": "19",
  /** Physical pin 20: P4.2; bidirectional. */
  "P4.2": "20",
  /** Physical pin 21: P4.1; bidirectional. */
  "P4.1": "21",
  /** Physical pin 22: P4.0; bidirectional. */
  "P4.0": "22",
  /** Physical pin 23: P3.7; bidirectional. */
  "P3.7": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.5; bidirectional. */
  "P3.5": "25",
  /** Physical pin 26: P3.4; bidirectional. */
  "P3.4": "26",
  /** Physical pin 27: P3.3; bidirectional. */
  "P3.3": "27",
  /** Physical pin 28: P3.2; bidirectional. */
  "P3.2": "28",
  /** Physical pin 29: P3.1; bidirectional. */
  "P3.1": "29",
  /** Physical pin 30: P3.0; bidirectional. */
  "P3.0": "30",
  /** Physical pin 31: P2.7; bidirectional. */
  "P2.7": "31",
  /** Physical pin 32: P2.6; bidirectional. */
  "P2.6": "32",
  /** Physical pin 33: P2.5; bidirectional. */
  "P2.5": "33",
  /** Physical pin 34: P2.4; bidirectional. */
  "P2.4": "34",
  /** Physical pin 35: P2.3; bidirectional. */
  "P2.3": "35",
  /** Physical pin 36: P2.2; bidirectional. */
  "P2.2": "36",
  /** Physical pin 37: P2.1; bidirectional. */
  "P2.1": "37",
  /** Physical pin 38: P2.0; bidirectional. */
  "P2.0": "38",
  /** Physical pin 39: P1.7; bidirectional. */
  "P1.7": "39",
  /** Physical pin 40: P1.6; bidirectional. */
  "P1.6": "40",
  /** Physical pin 41: P1.5; bidirectional. */
  "P1.5": "41",
  /** Physical pin 42: P1.4; bidirectional. */
  "P1.4": "42",
  /** Physical pin 43: P1.3; bidirectional. */
  "P1.3": "43",
  /** Physical pin 44: P1.2; bidirectional. */
  "P1.2": "44",
  /** Physical pin 45: P1.1; bidirectional. */
  "P1.1": "45",
  /** Physical pin 46: P1.0; bidirectional. */
  "P1.0": "46",
  /** Physical pin 47: P0.7; bidirectional. */
  "P0.7": "47",
  /** Physical pin 48: P0.6; bidirectional. */
  "P0.6": "48",
}) {
  override schema = "MCU_SiliconLabs:C8051F382-GQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 32k flash, 2304 ram, 25 IO, ADC, Temperature, VREF, QFN-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F383-GM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C ADC QFN32.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.3x3.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F383_GM extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
  override schema = "MCU_SiliconLabs:C8051F383-GM";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 32k flash, 2304 ram, 25 IO, ADC, Temperature, VREF, LQFP-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F383-GQ`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C ADC LQFP32.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F383_GQ extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
}) {
  override schema = "MCU_SiliconLabs:C8051F383-GQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 64k flash, 4352 ram, 40 IO, EMIF, TQFP-48
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F384-GQ`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C EMIF TQFP48.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F384_GQ extends Component.withPins({
  /** Physical pin 1: P0.5; bidirectional. */
  "P0.5": "1",
  /** Physical pin 2: P0.4; bidirectional. */
  "P0.4": "2",
  /** Physical pin 3: P0.3; bidirectional. */
  "P0.3": "3",
  /** Physical pin 4: P0.2; bidirectional. */
  "P0.2": "4",
  /** Physical pin 5: P0.1; bidirectional. */
  "P0.1": "5",
  /** Physical pin 6: P0.0; bidirectional. */
  "P0.0": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: D+; bidirectional. */
  "D+": "8",
  /** Physical pin 9: D-; bidirectional. */
  "D-": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: REGIN; power_in. */
  "REGIN": "11",
  /** Physical pin 12: VBUS; input. */
  "VBUS": "12",
  /** Physical pin 13: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "13",
  /** Physical pin 14: C2D; bidirectional. */
  "C2D": "14",
  /** Physical pin 15: P4.7; bidirectional. */
  "P4.7": "15",
  /** Physical pin 16: P4.6; bidirectional. */
  "P4.6": "16",
  /** Physical pin 17: P4.5; bidirectional. */
  "P4.5": "17",
  /** Physical pin 18: P4.4; bidirectional. */
  "P4.4": "18",
  /** Physical pin 19: P4.3; bidirectional. */
  "P4.3": "19",
  /** Physical pin 20: P4.2; bidirectional. */
  "P4.2": "20",
  /** Physical pin 21: P4.1; bidirectional. */
  "P4.1": "21",
  /** Physical pin 22: P4.0; bidirectional. */
  "P4.0": "22",
  /** Physical pin 23: P3.7; bidirectional. */
  "P3.7": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.5; bidirectional. */
  "P3.5": "25",
  /** Physical pin 26: P3.4; bidirectional. */
  "P3.4": "26",
  /** Physical pin 27: P3.3; bidirectional. */
  "P3.3": "27",
  /** Physical pin 28: P3.2; bidirectional. */
  "P3.2": "28",
  /** Physical pin 29: P3.1; bidirectional. */
  "P3.1": "29",
  /** Physical pin 30: P3.0; bidirectional. */
  "P3.0": "30",
  /** Physical pin 31: P2.7; bidirectional. */
  "P2.7": "31",
  /** Physical pin 32: P2.6; bidirectional. */
  "P2.6": "32",
  /** Physical pin 33: P2.5; bidirectional. */
  "P2.5": "33",
  /** Physical pin 34: P2.4; bidirectional. */
  "P2.4": "34",
  /** Physical pin 35: P2.3; bidirectional. */
  "P2.3": "35",
  /** Physical pin 36: P2.2; bidirectional. */
  "P2.2": "36",
  /** Physical pin 37: P2.1; bidirectional. */
  "P2.1": "37",
  /** Physical pin 38: P2.0; bidirectional. */
  "P2.0": "38",
  /** Physical pin 39: P1.7; bidirectional. */
  "P1.7": "39",
  /** Physical pin 40: P1.6; bidirectional. */
  "P1.6": "40",
  /** Physical pin 41: P1.5; bidirectional. */
  "P1.5": "41",
  /** Physical pin 42: P1.4; bidirectional. */
  "P1.4": "42",
  /** Physical pin 43: P1.3; bidirectional. */
  "P1.3": "43",
  /** Physical pin 44: P1.2; bidirectional. */
  "P1.2": "44",
  /** Physical pin 45: P1.1; bidirectional. */
  "P1.1": "45",
  /** Physical pin 46: P1.0; bidirectional. */
  "P1.0": "46",
  /** Physical pin 47: P0.7; bidirectional. */
  "P0.7": "47",
  /** Physical pin 48: P0.6; bidirectional. */
  "P0.6": "48",
}) {
  override schema = "MCU_SiliconLabs:C8051F384-GQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 64k flash, 4352 ram, 25 IO, QFN-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F385-GM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C QFN32.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.3x3.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F385_GM extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
  override schema = "MCU_SiliconLabs:C8051F385-GM";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 64k flash, 4352 ram, 25 IO, LQFP-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F385-GQ`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C LQFP32.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F385_GQ extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
}) {
  override schema = "MCU_SiliconLabs:C8051F385-GQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 32k flash, 2304 ram, 40 IO, EMIF, TQFP-48
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F386-GQ`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C EMIF TQFP48.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F386_GQ extends Component.withPins({
  /** Physical pin 1: P0.5; bidirectional. */
  "P0.5": "1",
  /** Physical pin 2: P0.4; bidirectional. */
  "P0.4": "2",
  /** Physical pin 3: P0.3; bidirectional. */
  "P0.3": "3",
  /** Physical pin 4: P0.2; bidirectional. */
  "P0.2": "4",
  /** Physical pin 5: P0.1; bidirectional. */
  "P0.1": "5",
  /** Physical pin 6: P0.0; bidirectional. */
  "P0.0": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: D+; bidirectional. */
  "D+": "8",
  /** Physical pin 9: D-; bidirectional. */
  "D-": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: REGIN; power_in. */
  "REGIN": "11",
  /** Physical pin 12: VBUS; input. */
  "VBUS": "12",
  /** Physical pin 13: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "13",
  /** Physical pin 14: C2D; bidirectional. */
  "C2D": "14",
  /** Physical pin 15: P4.7; bidirectional. */
  "P4.7": "15",
  /** Physical pin 16: P4.6; bidirectional. */
  "P4.6": "16",
  /** Physical pin 17: P4.5; bidirectional. */
  "P4.5": "17",
  /** Physical pin 18: P4.4; bidirectional. */
  "P4.4": "18",
  /** Physical pin 19: P4.3; bidirectional. */
  "P4.3": "19",
  /** Physical pin 20: P4.2; bidirectional. */
  "P4.2": "20",
  /** Physical pin 21: P4.1; bidirectional. */
  "P4.1": "21",
  /** Physical pin 22: P4.0; bidirectional. */
  "P4.0": "22",
  /** Physical pin 23: P3.7; bidirectional. */
  "P3.7": "23",
  /** Physical pin 24: P3.6; bidirectional. */
  "P3.6": "24",
  /** Physical pin 25: P3.5; bidirectional. */
  "P3.5": "25",
  /** Physical pin 26: P3.4; bidirectional. */
  "P3.4": "26",
  /** Physical pin 27: P3.3; bidirectional. */
  "P3.3": "27",
  /** Physical pin 28: P3.2; bidirectional. */
  "P3.2": "28",
  /** Physical pin 29: P3.1; bidirectional. */
  "P3.1": "29",
  /** Physical pin 30: P3.0; bidirectional. */
  "P3.0": "30",
  /** Physical pin 31: P2.7; bidirectional. */
  "P2.7": "31",
  /** Physical pin 32: P2.6; bidirectional. */
  "P2.6": "32",
  /** Physical pin 33: P2.5; bidirectional. */
  "P2.5": "33",
  /** Physical pin 34: P2.4; bidirectional. */
  "P2.4": "34",
  /** Physical pin 35: P2.3; bidirectional. */
  "P2.3": "35",
  /** Physical pin 36: P2.2; bidirectional. */
  "P2.2": "36",
  /** Physical pin 37: P2.1; bidirectional. */
  "P2.1": "37",
  /** Physical pin 38: P2.0; bidirectional. */
  "P2.0": "38",
  /** Physical pin 39: P1.7; bidirectional. */
  "P1.7": "39",
  /** Physical pin 40: P1.6; bidirectional. */
  "P1.6": "40",
  /** Physical pin 41: P1.5; bidirectional. */
  "P1.5": "41",
  /** Physical pin 42: P1.4; bidirectional. */
  "P1.4": "42",
  /** Physical pin 43: P1.3; bidirectional. */
  "P1.3": "43",
  /** Physical pin 44: P1.2; bidirectional. */
  "P1.2": "44",
  /** Physical pin 45: P1.1; bidirectional. */
  "P1.1": "45",
  /** Physical pin 46: P1.0; bidirectional. */
  "P1.0": "46",
  /** Physical pin 47: P0.7; bidirectional. */
  "P0.7": "47",
  /** Physical pin 48: P0.6; bidirectional. */
  "P0.6": "48",
}) {
  override schema = "MCU_SiliconLabs:C8051F386-GQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 32k flash, 2304 ram, 25 IO, QFN-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F387-GM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C QFN32.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.3x3.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F387_GM extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
  override schema = "MCU_SiliconLabs:C8051F387-GM";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 32k flash, 2304 ram, 25 IO, LQFP-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F387-GQ`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C LQFP32.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F387_GQ extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
}) {
  override schema = "MCU_SiliconLabs:C8051F387-GQ";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 16k flash, 2304 ram, 25 IO, ADC, Temperature, VREF, QFN-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F38C-GM`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C ADC QFN32.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.3x3.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F38C_GM extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
}) {
  override schema = "MCU_SiliconLabs:C8051F38C-GM";
  override referencePrefix = "U";
}

/**
 * Full Speed USB Flash MCU Family, 16k flash, 2304 ram, 25 IO, ADC, Temperature, VREF, LQFP-32
 *
 * KiCad symbol: `MCU_SiliconLabs:C8051F38C-GQ`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/C8051F38x.pdf
 * Keywords: 8051 microcontroller PCA UART USB SPI I2C ADC LQFP32.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C8051F38C_GQ extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: REGIN; power_in. */
  "REGIN": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; input. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P3.0/C2D; bidirectional. */
  "P3.0/C2D": "10",
  /** Physical pin 11: P2.7; bidirectional. */
  "P2.7": "11",
  /** Physical pin 12: P2.6; bidirectional. */
  "P2.6": "12",
  /** Physical pin 13: P2.5; bidirectional. */
  "P2.5": "13",
  /** Physical pin 14: P2.4; bidirectional. */
  "P2.4": "14",
  /** Physical pin 15: P2.3; bidirectional. */
  "P2.3": "15",
  /** Physical pin 16: P2.2; bidirectional. */
  "P2.2": "16",
  /** Physical pin 17: P2.1; bidirectional. */
  "P2.1": "17",
  /** Physical pin 18: P2.0; bidirectional. */
  "P2.0": "18",
  /** Physical pin 19: P1.7; bidirectional. */
  "P1.7": "19",
  /** Physical pin 20: P1.6; bidirectional. */
  "P1.6": "20",
  /** Physical pin 21: P1.5; bidirectional. */
  "P1.5": "21",
  /** Physical pin 22: P1.4; bidirectional. */
  "P1.4": "22",
  /** Physical pin 23: P1.3; bidirectional. */
  "P1.3": "23",
  /** Physical pin 24: P1.2; bidirectional. */
  "P1.2": "24",
  /** Physical pin 25: P1.1; bidirectional. */
  "P1.1": "25",
  /** Physical pin 26: P1.0; bidirectional. */
  "P1.0": "26",
  /** Physical pin 27: P0.7; bidirectional. */
  "P0.7": "27",
  /** Physical pin 28: P0.6; bidirectional. */
  "P0.6": "28",
  /** Physical pin 29: P0.5; bidirectional. */
  "P0.5": "29",
  /** Physical pin 30: P0.4; bidirectional. */
  "P0.4": "30",
  /** Physical pin 31: P0.3; bidirectional. */
  "P0.3": "31",
  /** Physical pin 32: P0.2; bidirectional. */
  "P0.2": "32",
}) {
  override schema = "MCU_SiliconLabs:C8051F38C-GQ";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M3 microcontroller, 128 kB flash, 16 kB x 8 RAM, Silicon Labs - Gecko, QFN-64
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32G230F128G-E-QFN64`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32g-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 gecko.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.3x7.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32G230F128G_E_QFN64 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: PA1; bidirectional. */
  "PA1": "2",
  /** Physical pin 3: PA2; bidirectional. */
  "PA2": "3",
  /** Physical pin 4: PA3; bidirectional. */
  "PA3": "4",
  /** Physical pin 5: PA4; bidirectional. */
  "PA4": "5",
  /** Physical pin 6: PA5; bidirectional. */
  "PA5": "6",
  /** Physical pin 7: PA6; bidirectional. */
  "PA6": "7",
  /** Physical pin 8: IOVDD; power_in. */
  "IOVDD_8": "8",
  /** Physical pin 9: PC0; bidirectional. */
  "PC0": "9",
  /** Physical pin 10: PC1; bidirectional. */
  "PC1": "10",
  /** Physical pin 11: PC2; bidirectional. */
  "PC2": "11",
  /** Physical pin 12: PC3; bidirectional. */
  "PC3": "12",
  /** Physical pin 13: PC4; bidirectional. */
  "PC4": "13",
  /** Physical pin 14: PC5; bidirectional. */
  "PC5": "14",
  /** Physical pin 15: PB7; bidirectional. */
  "PB7": "15",
  /** Physical pin 16: PB8; bidirectional. */
  "PB8": "16",
  /** Physical pin 17: PA8; bidirectional. */
  "PA8": "17",
  /** Physical pin 18: PA9; bidirectional. */
  "PA9": "18",
  /** Physical pin 19: PA10; bidirectional. */
  "PA10": "19",
  /** Physical pin 20: ~{RESET}; input. */
  "~{RESET}": "20",
  /** Physical pin 21: PB11; bidirectional. */
  "PB11": "21",
  /** Physical pin 22: PB12; bidirectional. */
  "PB12": "22",
  /** Physical pin 23: AVDD; power_in. */
  "AVDD_23": "23",
  /** Physical pin 24: PB13; bidirectional. */
  "PB13": "24",
  /** Physical pin 25: PB14; bidirectional. */
  "PB14": "25",
  /** Physical pin 26: IOVDD; passive. */
  "IOVDD_26": "26",
  /** Physical pin 27: AVDD; passive. */
  "AVDD_27": "27",
  /** Physical pin 28: PD0; bidirectional. */
  "PD0": "28",
  /** Physical pin 29: PD1; bidirectional. */
  "PD1": "29",
  /** Physical pin 30: PD2; bidirectional. */
  "PD2": "30",
  /** Physical pin 31: PD3; bidirectional. */
  "PD3": "31",
  /** Physical pin 32: PD4; bidirectional. */
  "PD4": "32",
  /** Physical pin 33: PD5; bidirectional. */
  "PD5": "33",
  /** Physical pin 34: PD6; bidirectional. */
  "PD6": "34",
  /** Physical pin 35: PD7; bidirectional. */
  "PD7": "35",
  /** Physical pin 36: PD8; bidirectional. */
  "PD8": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: VDD_DREG; power_in. */
  "VDD_DREG": "39",
  /** Physical pin 40: DECOUPLE; passive. */
  "DECOUPLE": "40",
  /** Physical pin 41: PC8; bidirectional. */
  "PC8": "41",
  /** Physical pin 42: PC9; bidirectional. */
  "PC9": "42",
  /** Physical pin 43: PC10; bidirectional. */
  "PC10": "43",
  /** Physical pin 44: PC11; bidirectional. */
  "PC11": "44",
  /** Physical pin 45: PC12; bidirectional. */
  "PC12": "45",
  /** Physical pin 46: PC13; bidirectional. */
  "PC13": "46",
  /** Physical pin 47: PC14; bidirectional. */
  "PC14": "47",
  /** Physical pin 48: PC15; bidirectional. */
  "PC15": "48",
  /** Physical pin 49: PF0; bidirectional. */
  "PF0": "49",
  /** Physical pin 50: PF1; bidirectional. */
  "PF1": "50",
  /** Physical pin 51: PF2; bidirectional. */
  "PF2": "51",
  /** Physical pin 52: PF3; bidirectional. */
  "PF3": "52",
  /** Physical pin 53: PF4; bidirectional. */
  "PF4": "53",
  /** Physical pin 54: PF5; bidirectional. */
  "PF5": "54",
  /** Physical pin 55: IOVDD; passive. */
  "IOVDD_55": "55",
  /** Physical pin 56: PE8; bidirectional. */
  "PE8": "56",
  /** Physical pin 57: PE9; bidirectional. */
  "PE9": "57",
  /** Physical pin 58: PE10; bidirectional. */
  "PE10": "58",
  /** Physical pin 59: PE11; bidirectional. */
  "PE11": "59",
  /** Physical pin 60: PE12; bidirectional. */
  "PE12": "60",
  /** Physical pin 61: PE13; bidirectional. */
  "PE13": "61",
  /** Physical pin 62: PE14; bidirectional. */
  "PE14": "62",
  /** Physical pin 63: PE15; bidirectional. */
  "PE15": "63",
  /** Physical pin 64: PA15; bidirectional. */
  "PA15": "64",
  /** Physical pin 65: VSS; power_in. */
  "VSS": "65",
}) {
  override schema = "MCU_SiliconLabs:EFM32G230F128G-E-QFN64";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32 kB flash, 4 kB  RAM, Silicon Labs - Happy Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32HG108F32G-C-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32hg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 happy gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32HG108F32G_C_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32HG108F32G-C-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 64 kB flash, 4 kB  RAM, Silicon Labs - Happy Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32HG108F64G-C-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32hg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 happy gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32HG108F64G_C_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32HG108F64G-C-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32 kB flash, 4 kB  RAM, Silicon Labs - Happy Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32HG308F32G-C-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32hg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 happy gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32HG308F32G_C_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD_0; power_in. */
  "IOVDD_0": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD_2; power_in. */
  "AVDD_2": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD_0; power_in. */
  "AVDD_0": "12",
  /** Physical pin 13: VDD_DREG; power_in. */
  "VDD_DREG": "13",
  /** Physical pin 14: DECOUPLE; passive. */
  "DECOUPLE": "14",
  /** Physical pin 15: USB_VREGI; power_in. */
  "USB_VREGI": "15",
  /** Physical pin 16: USB_VREGO; power_out. */
  "USB_VREGO": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD_5; power_in. */
  "IOVDD_5": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32HG308F32G-C-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 64 kB flash, 4 kB  RAM, Silicon Labs - Happy Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32HG308F64G-C-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32hg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 happy gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32HG308F64G_C_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD_0; power_in. */
  "IOVDD_0": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD_2; power_in. */
  "AVDD_2": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD_0; power_in. */
  "AVDD_0": "12",
  /** Physical pin 13: VDD_DREG; power_in. */
  "VDD_DREG": "13",
  /** Physical pin 14: DECOUPLE; passive. */
  "DECOUPLE": "14",
  /** Physical pin 15: USB_VREGI; power_in. */
  "USB_VREGI": "15",
  /** Physical pin 16: USB_VREGO; power_out. */
  "USB_VREGO": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD_5; power_in. */
  "IOVDD_5": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32HG308F64G-C-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16 kB flash, 4 kB  RAM, Silicon Labs - Zero Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32ZG108F16-B-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32zg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 zero gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32ZG108F16_B_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32ZG108F16-B-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32 kB flash, 4 kB  RAM, Silicon Labs - Zero Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32ZG108F32-B-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32zg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 zero gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32ZG108F32_B_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32ZG108F32-B-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 4 kB flash, 2 kB  RAM, Silicon Labs - Zero Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32ZG108F4-B-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32zg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 zero gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32ZG108F4_B_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32ZG108F4-B-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8 kB flash, 2 kB  RAM, Silicon Labs - Zero Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32ZG108F8-B-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32zg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 zero gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32ZG108F8_B_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32ZG108F8-B-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 16 kB flash, 4 kB  RAM, Silicon Labs - Zero Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32ZG110F16-B-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32zg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 zero gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32ZG110F16_B_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32ZG110F16-B-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 32 kB flash, 4 kB  RAM, Silicon Labs - Zero Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32ZG110F32-B-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32zg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 zero gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32ZG110F32_B_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32ZG110F32-B-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 4 kB flash, 2 kB  RAM, Silicon Labs - Zero Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32ZG110F4-B-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32zg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 zero gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32ZG110F4_B_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32ZG110F4-B-QFN24";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0 microcontroller, 8 kB flash, 2 kB  RAM, Silicon Labs - Zero Gecko, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM32ZG110F8-B-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm32zg-datasheet.pdf
 * Keywords: MCU microcontroller silicon labs siliconlabs silabs EFM32 zero gecko.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_5x5mm_P0.65mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM32ZG110F8_B_QFN24 extends Component.withPins({
  /** Physical pin 1: PA0; bidirectional. */
  "PA0": "1",
  /** Physical pin 2: IOVDD; power_in. */
  "IOVDD_2": "2",
  /** Physical pin 3: PC0; bidirectional. */
  "PC0": "3",
  /** Physical pin 4: PC1; bidirectional. */
  "PC1": "4",
  /** Physical pin 5: PB7; bidirectional. */
  "PB7": "5",
  /** Physical pin 6: PB8; bidirectional. */
  "PB8": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: PB11; bidirectional. */
  "PB11": "8",
  /** Physical pin 9: AVDD; passive. */
  "AVDD_9": "9",
  /** Physical pin 10: PB13; bidirectional. */
  "PB13": "10",
  /** Physical pin 11: PB14; bidirectional. */
  "PB14": "11",
  /** Physical pin 12: AVDD; power_in. */
  "AVDD_12": "12",
  /** Physical pin 13: PD6; bidirectional. */
  "PD6": "13",
  /** Physical pin 14: PD7; bidirectional. */
  "PD7": "14",
  /** Physical pin 15: VDD_DREG; power_in. */
  "VDD_DREG": "15",
  /** Physical pin 16: DECOUPLE; passive. */
  "DECOUPLE": "16",
  /** Physical pin 17: PC14; bidirectional. */
  "PC14": "17",
  /** Physical pin 18: PC15; bidirectional. */
  "PC15": "18",
  /** Physical pin 19: PF0; bidirectional. */
  "PF0": "19",
  /** Physical pin 20: PF1; bidirectional. */
  "PF1": "20",
  /** Physical pin 21: PF2; bidirectional. */
  "PF2": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: PE12; bidirectional. */
  "PE12": "23",
  /** Physical pin 24: PE13; bidirectional. */
  "PE13": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM32ZG110F8-B-QFN24";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 8K flash, 512B RAM, -40 to +85 C, QFN20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F8G-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QFN20.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F8G_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RSTb/C2CK; input. */
  "RSTb/C2CK": "5",
  /** Physical pin 6: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.5; bidirectional. */
  "P1.5": "8",
  /** Physical pin 9: P1.4; bidirectional. */
  "P1.4": "9",
  /** Physical pin 10: P1.3; bidirectional. */
  "P1.3": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F8G-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 2K flash, 256B RAM, -40 to +125 C (automotive), QFN20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F2A-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QFN20 automotive.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F2A_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RSTb/C2CK; input. */
  "RSTb/C2CK": "5",
  /** Physical pin 6: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.5; bidirectional. */
  "P1.5": "8",
  /** Physical pin 9: P1.4; bidirectional. */
  "P1.4": "9",
  /** Physical pin 10: P1.3; bidirectional. */
  "P1.3": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F2A-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 2K flash, 256B RAM, -40 to +85 C, QFN20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F2G-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QFN20.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F2G_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RSTb/C2CK; input. */
  "RSTb/C2CK": "5",
  /** Physical pin 6: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.5; bidirectional. */
  "P1.5": "8",
  /** Physical pin 9: P1.4; bidirectional. */
  "P1.4": "9",
  /** Physical pin 10: P1.3; bidirectional. */
  "P1.3": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F2G-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 2K flash, 256B RAM, -40 to +125 C, QFN20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F2I-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QFN20.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F2I_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RSTb/C2CK; input. */
  "RSTb/C2CK": "5",
  /** Physical pin 6: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.5; bidirectional. */
  "P1.5": "8",
  /** Physical pin 9: P1.4; bidirectional. */
  "P1.4": "9",
  /** Physical pin 10: P1.3; bidirectional. */
  "P1.3": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F2I-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 4K flash, 512B RAM, -40 to +125 C (automotive), QFN20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F4A-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QFN20 automotive.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F4A_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RSTb/C2CK; input. */
  "RSTb/C2CK": "5",
  /** Physical pin 6: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.5; bidirectional. */
  "P1.5": "8",
  /** Physical pin 9: P1.4; bidirectional. */
  "P1.4": "9",
  /** Physical pin 10: P1.3; bidirectional. */
  "P1.3": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F4A-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 4K flash, 512B RAM, -40 to +85 C, QFN20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F4G-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QFN20.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F4G_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RSTb/C2CK; input. */
  "RSTb/C2CK": "5",
  /** Physical pin 6: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.5; bidirectional. */
  "P1.5": "8",
  /** Physical pin 9: P1.4; bidirectional. */
  "P1.4": "9",
  /** Physical pin 10: P1.3; bidirectional. */
  "P1.3": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F4G-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 4K flash, 512B RAM, -40 to +125 C, QFN20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F4I-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QFN20.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F4I_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RSTb/C2CK; input. */
  "RSTb/C2CK": "5",
  /** Physical pin 6: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.5; bidirectional. */
  "P1.5": "8",
  /** Physical pin 9: P1.4; bidirectional. */
  "P1.4": "9",
  /** Physical pin 10: P1.3; bidirectional. */
  "P1.3": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F4I-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 8K flash, 512B RAM, -40 to +125 C (automotive), QFN20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F8A-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QFN20 automotive.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F8A_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RSTb/C2CK; input. */
  "RSTb/C2CK": "5",
  /** Physical pin 6: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.5; bidirectional. */
  "P1.5": "8",
  /** Physical pin 9: P1.4; bidirectional. */
  "P1.4": "9",
  /** Physical pin 10: P1.3; bidirectional. */
  "P1.3": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F8A-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 8K flash, 512B RAM, -40 to +85 C, QSOP24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F8G-A-QSOP24`. Reference prefix: `U`.
 * Footprint filters: QSOP*P0.635mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QSOP24.
 * Default footprint: Package_SO:QSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F8G_A_QSOP24 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: P0.2; bidirectional. */
  "P0.2": "2",
  /** Physical pin 3: P0.1; bidirectional. */
  "P0.1": "3",
  /** Physical pin 4: P0.0; bidirectional. */
  "P0.0": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: RSTb/C2CK; input. */
  "RSTb/C2CK": "7",
  /** Physical pin 8: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "8",
  /** Physical pin 9: P1.7; bidirectional. */
  "P1.7": "9",
  /** Physical pin 10: P1.6; bidirectional. */
  "P1.6": "10",
  /** Physical pin 11: P1.5; bidirectional. */
  "P1.5": "11",
  /** Physical pin 12: P2.1; bidirectional. */
  "P2.1": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: P1.4; bidirectional. */
  "P1.4": "14",
  /** Physical pin 15: P1.3; bidirectional. */
  "P1.3": "15",
  /** Physical pin 16: P1.2; bidirectional. */
  "P1.2": "16",
  /** Physical pin 17: P1.1; bidirectional. */
  "P1.1": "17",
  /** Physical pin 18: P1.0; bidirectional. */
  "P1.0": "18",
  /** Physical pin 19: P0.7; bidirectional. */
  "P0.7": "19",
  /** Physical pin 20: P0.6; bidirectional. */
  "P0.6": "20",
  /** Physical pin 21: P0.5; bidirectional. */
  "P0.5": "21",
  /** Physical pin 22: P0.4; bidirectional. */
  "P0.4": "22",
  /** Physical pin 23: P0.3; bidirectional. */
  "P0.3": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F8G-A-QSOP24";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 8K flash, 512B RAM, -40 to +85 C, SOIC16
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F8G-A-SOIC16`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC SOIC16.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F8G_A_SOIC16 extends Component.withPins({
  /** Physical pin 1: P0.2; bidirectional. */
  "P0.2": "1",
  /** Physical pin 2: P0.1; bidirectional. */
  "P0.1": "2",
  /** Physical pin 3: P0.0; bidirectional. */
  "P0.0": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: RSTb/C2CK; input. */
  "RSTb/C2CK": "6",
  /** Physical pin 7: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "7",
  /** Physical pin 8: P1.3; bidirectional. */
  "P1.3": "8",
  /** Physical pin 9: P1.2; bidirectional. */
  "P1.2": "9",
  /** Physical pin 10: P1.1; bidirectional. */
  "P1.1": "10",
  /** Physical pin 11: P1.0; bidirectional. */
  "P1.0": "11",
  /** Physical pin 12: P0.7; bidirectional. */
  "P0.7": "12",
  /** Physical pin 13: P0.6; bidirectional. */
  "P0.6": "13",
  /** Physical pin 14: P0.5; bidirectional. */
  "P0.5": "14",
  /** Physical pin 15: P0.4; bidirectional. */
  "P0.4": "15",
  /** Physical pin 16: P0.3; bidirectional. */
  "P0.3": "16",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F8G-A-SOIC16";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 8K flash, 512B RAM, -40 to +125 C, QFN20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F8I-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QFN20.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F8I_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: RSTb/C2CK; input. */
  "RSTb/C2CK": "5",
  /** Physical pin 6: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "6",
  /** Physical pin 7: P1.6; bidirectional. */
  "P1.6": "7",
  /** Physical pin 8: P1.5; bidirectional. */
  "P1.5": "8",
  /** Physical pin 9: P1.4; bidirectional. */
  "P1.4": "9",
  /** Physical pin 10: P1.3; bidirectional. */
  "P1.3": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F8I-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 8K flash, 512B RAM, -40 to +125 C, QSOP24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F8I-A-QSOP24`. Reference prefix: `U`.
 * Footprint filters: QSOP*P0.635mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC QSOP24.
 * Default footprint: Package_SO:QSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F8I_A_QSOP24 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: P0.2; bidirectional. */
  "P0.2": "2",
  /** Physical pin 3: P0.1; bidirectional. */
  "P0.1": "3",
  /** Physical pin 4: P0.0; bidirectional. */
  "P0.0": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: RSTb/C2CK; input. */
  "RSTb/C2CK": "7",
  /** Physical pin 8: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "8",
  /** Physical pin 9: P1.7; bidirectional. */
  "P1.7": "9",
  /** Physical pin 10: P1.6; bidirectional. */
  "P1.6": "10",
  /** Physical pin 11: P1.5; bidirectional. */
  "P1.5": "11",
  /** Physical pin 12: P2.1; bidirectional. */
  "P2.1": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: P1.4; bidirectional. */
  "P1.4": "14",
  /** Physical pin 15: P1.3; bidirectional. */
  "P1.3": "15",
  /** Physical pin 16: P1.2; bidirectional. */
  "P1.2": "16",
  /** Physical pin 17: P1.1; bidirectional. */
  "P1.1": "17",
  /** Physical pin 18: P1.0; bidirectional. */
  "P1.0": "18",
  /** Physical pin 19: P0.7; bidirectional. */
  "P0.7": "19",
  /** Physical pin 20: P0.6; bidirectional. */
  "P0.6": "20",
  /** Physical pin 21: P0.5; bidirectional. */
  "P0.5": "21",
  /** Physical pin 22: P0.4; bidirectional. */
  "P0.4": "22",
  /** Physical pin 23: P0.3; bidirectional. */
  "P0.3": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F8I-A-QSOP24";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 25 MHz, 2.2 to 3.6V, 8K flash, 512B RAM, -40 to +125 C, SOIC16
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8BB10F8I-A-SOIC16`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8bb1-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C ADC SOIC16.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8BB10F8I_A_SOIC16 extends Component.withPins({
  /** Physical pin 1: P0.2; bidirectional. */
  "P0.2": "1",
  /** Physical pin 2: P0.1; bidirectional. */
  "P0.1": "2",
  /** Physical pin 3: P0.0; bidirectional. */
  "P0.0": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: RSTb/C2CK; input. */
  "RSTb/C2CK": "6",
  /** Physical pin 7: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "7",
  /** Physical pin 8: P1.3; bidirectional. */
  "P1.3": "8",
  /** Physical pin 9: P1.2; bidirectional. */
  "P1.2": "9",
  /** Physical pin 10: P1.1; bidirectional. */
  "P1.1": "10",
  /** Physical pin 11: P1.0; bidirectional. */
  "P1.0": "11",
  /** Physical pin 12: P0.7; bidirectional. */
  "P0.7": "12",
  /** Physical pin 13: P0.6; bidirectional. */
  "P0.6": "13",
  /** Physical pin 14: P0.5; bidirectional. */
  "P0.5": "14",
  /** Physical pin 15: P0.4; bidirectional. */
  "P0.4": "15",
  /** Physical pin 16: P0.3; bidirectional. */
  "P0.3": "16",
}) {
  override schema = "MCU_SiliconLabs:EFM8BB10F8I-A-SOIC16";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 72 MHz, 2.2 to 3.6V, 32K flash, 2304B RAM, -40 to +105 C, QFP-32
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8LB12F32E-C-QFP32`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8lb1-datasheet.pdf
 * Keywords: 8051 microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8LB12F32E_C_QFP32 extends Component.withPins({
  /** Physical pin 1: P0.0; bidirectional. */
  "P0.0": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIO; power_in. */
  "VIO": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: ~{RST}; input. */
  "~{RST}": "5",
  /** Physical pin 6: P3.7; bidirectional. */
  "P3.7": "6",
  /** Physical pin 7: P3.3; bidirectional. */
  "P3.3": "7",
  /** Physical pin 8: P3.2; bidirectional. */
  "P3.2": "8",
  /** Physical pin 9: P3.1; bidirectional. */
  "P3.1": "9",
  /** Physical pin 10: P3.0; bidirectional. */
  "P3.0": "10",
  /** Physical pin 11: P2.6; bidirectional. */
  "P2.6": "11",
  /** Physical pin 12: P2.5; bidirectional. */
  "P2.5": "12",
  /** Physical pin 13: P2.4; bidirectional. */
  "P2.4": "13",
  /** Physical pin 14: P2.3; bidirectional. */
  "P2.3": "14",
  /** Physical pin 15: P2.2; bidirectional. */
  "P2.2": "15",
  /** Physical pin 16: P2.1; bidirectional. */
  "P2.1": "16",
  /** Physical pin 17: P2.0; bidirectional. */
  "P2.0": "17",
  /** Physical pin 18: P1.7; bidirectional. */
  "P1.7": "18",
  /** Physical pin 19: P1.6; bidirectional. */
  "P1.6": "19",
  /** Physical pin 20: P1.5; bidirectional. */
  "P1.5": "20",
  /** Physical pin 21: P1.4; bidirectional. */
  "P1.4": "21",
  /** Physical pin 22: P1.3; bidirectional. */
  "P1.3": "22",
  /** Physical pin 23: P1.2; bidirectional. */
  "P1.2": "23",
  /** Physical pin 24: P1.1; bidirectional. */
  "P1.1": "24",
  /** Physical pin 25: P1.0; bidirectional. */
  "P1.0": "25",
  /** Physical pin 26: P0.7; bidirectional. */
  "P0.7": "26",
  /** Physical pin 27: P0.6; bidirectional. */
  "P0.6": "27",
  /** Physical pin 28: P0.5; bidirectional. */
  "P0.5": "28",
  /** Physical pin 29: P0.4; bidirectional. */
  "P0.4": "29",
  /** Physical pin 30: P0.3; bidirectional. */
  "P0.3": "30",
  /** Physical pin 31: P0.2; bidirectional. */
  "P0.2": "31",
  /** Physical pin 32: P0.1; bidirectional. */
  "P0.1": "32",
}) {
  override schema = "MCU_SiliconLabs:EFM8LB12F32E-C-QFP32";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 72 MHz, 2.2 to 3.6V, 64K flash, 2304B RAM, -40 to +105 C, QFP-32
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8LB12F64E-C-QFP32`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8lb1-datasheet.pdf
 * Keywords: 8051 microcontroller.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8LB12F64E_C_QFP32 extends Component.withPins({
  /** Physical pin 1: P0.0; bidirectional. */
  "P0.0": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VIO; power_in. */
  "VIO": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: ~{RST}; input. */
  "~{RST}": "5",
  /** Physical pin 6: P3.7; bidirectional. */
  "P3.7": "6",
  /** Physical pin 7: P3.3; bidirectional. */
  "P3.3": "7",
  /** Physical pin 8: P3.2; bidirectional. */
  "P3.2": "8",
  /** Physical pin 9: P3.1; bidirectional. */
  "P3.1": "9",
  /** Physical pin 10: P3.0; bidirectional. */
  "P3.0": "10",
  /** Physical pin 11: P2.6; bidirectional. */
  "P2.6": "11",
  /** Physical pin 12: P2.5; bidirectional. */
  "P2.5": "12",
  /** Physical pin 13: P2.4; bidirectional. */
  "P2.4": "13",
  /** Physical pin 14: P2.3; bidirectional. */
  "P2.3": "14",
  /** Physical pin 15: P2.2; bidirectional. */
  "P2.2": "15",
  /** Physical pin 16: P2.1; bidirectional. */
  "P2.1": "16",
  /** Physical pin 17: P2.0; bidirectional. */
  "P2.0": "17",
  /** Physical pin 18: P1.7; bidirectional. */
  "P1.7": "18",
  /** Physical pin 19: P1.6; bidirectional. */
  "P1.6": "19",
  /** Physical pin 20: P1.5; bidirectional. */
  "P1.5": "20",
  /** Physical pin 21: P1.4; bidirectional. */
  "P1.4": "21",
  /** Physical pin 22: P1.3; bidirectional. */
  "P1.3": "22",
  /** Physical pin 23: P1.2; bidirectional. */
  "P1.2": "23",
  /** Physical pin 24: P1.1; bidirectional. */
  "P1.1": "24",
  /** Physical pin 25: P1.0; bidirectional. */
  "P1.0": "25",
  /** Physical pin 26: P0.7; bidirectional. */
  "P0.7": "26",
  /** Physical pin 27: P0.6; bidirectional. */
  "P0.6": "27",
  /** Physical pin 28: P0.5; bidirectional. */
  "P0.5": "28",
  /** Physical pin 29: P0.4; bidirectional. */
  "P0.4": "29",
  /** Physical pin 30: P0.3; bidirectional. */
  "P0.3": "30",
  /** Physical pin 31: P0.2; bidirectional. */
  "P0.2": "31",
  /** Physical pin 32: P0.1; bidirectional. */
  "P0.1": "32",
}) {
  override schema = "MCU_SiliconLabs:EFM8LB12F64E-C-QFP32";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 48 MHz, 2.3 to 5.5V, 40K flash, 3.25K RAM, -40 to +85 C, QFN-20
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8UB30F40G-A-QFN20`. Reference prefix: `U`.
 * Footprint filters: SiliconLabs*QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8ub3-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C USB LDOREG ADC QFN20.
 * Default footprint: Package_DFN_QFN:SiliconLabs_QFN-20-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8UB30F40G_A_QFN20 extends Component.withPins({
  /** Physical pin 1: P0.1; bidirectional. */
  "P0.1": "1",
  /** Physical pin 2: P0.0; bidirectional. */
  "P0.0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: D+; bidirectional. */
  "D+": "4",
  /** Physical pin 5: D-; bidirectional. */
  "D-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: VREGIN; power_in. */
  "VREGIN": "7",
  /** Physical pin 8: P2.1/VBUS; bidirectional. */
  "P2.1/VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; bidirectional. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "10",
  /** Physical pin 11: P1.2; bidirectional. */
  "P1.2": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: P1.1; bidirectional. */
  "P1.1": "13",
  /** Physical pin 14: P1.0; bidirectional. */
  "P1.0": "14",
  /** Physical pin 15: P0.7; bidirectional. */
  "P0.7": "15",
  /** Physical pin 16: P0.6; bidirectional. */
  "P0.6": "16",
  /** Physical pin 17: P0.5; bidirectional. */
  "P0.5": "17",
  /** Physical pin 18: P0.4; bidirectional. */
  "P0.4": "18",
  /** Physical pin 19: P0.3; bidirectional. */
  "P0.3": "19",
  /** Physical pin 20: P0.2; bidirectional. */
  "P0.2": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
  override schema = "MCU_SiliconLabs:EFM8UB30F40G-A-QFN20";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 48 MHz, 2.3 to 5.5V, 40K flash, 3.25K RAM, -40 to +85 C, QFN-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8UB31F40G-A-QFN24`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8ub3-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C USB LDOREG ADC QFN24.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8UB31F40G_A_QFN24 extends Component.withPins({
  /** Physical pin 1: P0.0; bidirectional. */
  "P0.0": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: D+; bidirectional. */
  "D+": "3",
  /** Physical pin 4: D-; bidirectional. */
  "D-": "4",
  /** Physical pin 5: VIO; power_in. */
  "VIO": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: VREGIN; power_in. */
  "VREGIN": "7",
  /** Physical pin 8: P2.1/VBUS; bidirectional. */
  "P2.1/VBUS": "8",
  /** Physical pin 9: ~{RST}/C2CK; bidirectional. */
  "~{RST}/C2CK": "9",
  /** Physical pin 10: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "10",
  /** Physical pin 11: P1.6; bidirectional. */
  "P1.6": "11",
  /** Physical pin 12: P1.5; bidirectional. */
  "P1.5": "12",
  /** Physical pin 13: P1.4; bidirectional. */
  "P1.4": "13",
  /** Physical pin 14: P1.3; bidirectional. */
  "P1.3": "14",
  /** Physical pin 15: P1.2; bidirectional. */
  "P1.2": "15",
  /** Physical pin 16: P1.1; bidirectional. */
  "P1.1": "16",
  /** Physical pin 17: P1.0; bidirectional. */
  "P1.0": "17",
  /** Physical pin 18: P0.7; bidirectional. */
  "P0.7": "18",
  /** Physical pin 19: P0.6; bidirectional. */
  "P0.6": "19",
  /** Physical pin 20: P0.5; bidirectional. */
  "P0.5": "20",
  /** Physical pin 21: P0.4; bidirectional. */
  "P0.4": "21",
  /** Physical pin 22: P0.3; bidirectional. */
  "P0.3": "22",
  /** Physical pin 23: P0.2; bidirectional. */
  "P0.2": "23",
  /** Physical pin 24: P0.1; bidirectional. */
  "P0.1": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "MCU_SiliconLabs:EFM8UB31F40G-A-QFN24";
  override referencePrefix = "U";
}

/**
 * 8051-compatible microcontroller, 48 MHz, 2.3 to 5.5V, 40K flash, 3.25K RAM, -40 to +85 C, QSOP-24
 *
 * KiCad symbol: `MCU_SiliconLabs:EFM8UB31F40G-A-QSOP24`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x8.7mm*P0.635mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/efm8ub3-datasheet.pdf
 * Keywords: 8051 microcontroller PWM UART SPI I2C USB LDOREG ADC QSOP24.
 * Default footprint: Package_SO:QSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFM8UB31F40G_A_QSOP24 extends Component.withPins({
  /** Physical pin 1: P0.2; bidirectional. */
  "P0.2": "1",
  /** Physical pin 2: P0.1; bidirectional. */
  "P0.1": "2",
  /** Physical pin 3: P0.0; bidirectional. */
  "P0.0": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: D+; bidirectional. */
  "D+": "5",
  /** Physical pin 6: D-; bidirectional. */
  "D-": "6",
  /** Physical pin 7: VIO; power_in. */
  "VIO": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: VREGIN; power_in. */
  "VREGIN": "9",
  /** Physical pin 10: P2.1/VBUS; bidirectional. */
  "P2.1/VBUS": "10",
  /** Physical pin 11: ~{RST}/C2CK; bidirectional. */
  "~{RST}/C2CK": "11",
  /** Physical pin 12: P2.0/C2D; bidirectional. */
  "P2.0/C2D": "12",
  /** Physical pin 13: P1.6; bidirectional. */
  "P1.6": "13",
  /** Physical pin 14: P1.5; bidirectional. */
  "P1.5": "14",
  /** Physical pin 15: P1.4; bidirectional. */
  "P1.4": "15",
  /** Physical pin 16: P1.3; bidirectional. */
  "P1.3": "16",
  /** Physical pin 17: P1.2; bidirectional. */
  "P1.2": "17",
  /** Physical pin 18: P1.1; bidirectional. */
  "P1.1": "18",
  /** Physical pin 19: P1.0; bidirectional. */
  "P1.0": "19",
  /** Physical pin 20: P0.7; bidirectional. */
  "P0.7": "20",
  /** Physical pin 21: P0.6; bidirectional. */
  "P0.6": "21",
  /** Physical pin 22: P0.5; bidirectional. */
  "P0.5": "22",
  /** Physical pin 23: P0.4; bidirectional. */
  "P0.4": "23",
  /** Physical pin 24: P0.3; bidirectional. */
  "P0.3": "24",
}) {
  override schema = "MCU_SiliconLabs:EFM8UB31F40G-A-QSOP24";
  override referencePrefix = "U";
}

/**
 * ARM M33 SubGHz Radio +20dBm 512K Flash 64KRAM Z-Wave QFN-48
 *
 * KiCad symbol: `MCU_SiliconLabs:EFR32xG23xxxxF512xM48`. Reference prefix: `U`.
 * Footprint filters: *QFN*48*1EP*6x6mm*EP4.3*.
 * @see https://www.silabs.com/documents/public/data-sheets/efr32zg23-datasheet.pdf
 * Keywords: Z-Wave ARM MCU CM33 Radio 900MHz SoC Silicon Labs Silabs 32-bit CPU EFR32 EFR32ZG23 EFR32M23 EFR32FG23 EFR32SG23 Sidewalk.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.3x4.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class EFR32xG23xxxxF512xM48 extends Component.withPins({
  /** Physical pin 1: PC00; bidirectional. */
  "PC00": "1",
  /** Physical pin 2: PC01; bidirectional. */
  "PC01": "2",
  /** Physical pin 3: PC02; bidirectional. */
  "PC02": "3",
  /** Physical pin 4: PC03; bidirectional. */
  "PC03": "4",
  /** Physical pin 5: PC04; bidirectional. */
  "PC04": "5",
  /** Physical pin 6: PC05; bidirectional. */
  "PC05": "6",
  /** Physical pin 7: PC06; bidirectional. */
  "PC06": "7",
  /** Physical pin 8: PC07; bidirectional. */
  "PC07": "8",
  /** Physical pin 9: PC08; bidirectional. */
  "PC08": "9",
  /** Physical pin 10: PC09; bidirectional. */
  "PC09": "10",
  /** Physical pin 11: HFXTAL_I; input. */
  "HFXTAL_I": "11",
  /** Physical pin 12: HFXTAL_O; output. */
  "HFXTAL_O": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: RFVDD; power_in. */
  "RFVDD": "14",
  /** Physical pin 15: RFVSS; power_in. */
  "RFVSS": "15",
  /** Physical pin 16: SUBG_I1; bidirectional. */
  "SUBG_I1": "16",
  /** Physical pin 17: SUBG_I0; bidirectional. */
  "SUBG_I0": "17",
  /** Physical pin 18: SUBG_O1; bidirectional. */
  "SUBG_O1": "18",
  /** Physical pin 19: SUBG_O0; bidirectional. */
  "SUBG_O0": "19",
  /** Physical pin 20: PAVDD; power_in. */
  "PAVDD": "20",
  /** Physical pin 21: PB03; bidirectional. */
  "PB03": "21",
  /** Physical pin 22: PB02; bidirectional. */
  "PB02": "22",
  /** Physical pin 23: PB01; bidirectional. */
  "PB01": "23",
  /** Physical pin 24: PB00; bidirectional. */
  "PB00": "24",
  /** Physical pin 25: PA00; bidirectional. */
  "PA00": "25",
  /** Physical pin 26: PA01_SWCLK; bidirectional. */
  "PA01_SWCLK": "26",
  /** Physical pin 27: PA02_SWDIO; bidirectional. */
  "PA02_SWDIO": "27",
  /** Physical pin 28: PA03_SWO; bidirectional. */
  "PA03_SWO": "28",
  /** Physical pin 29: PA04_TCLK; bidirectional. */
  "PA04_TCLK": "29",
  /** Physical pin 30: PA05_TD1; bidirectional. */
  "PA05_TD1": "30",
  /** Physical pin 31: PA06_TD2; bidirectional. */
  "PA06_TD2": "31",
  /** Physical pin 32: PA07_TD3; bidirectional. */
  "PA07_TD3": "32",
  /** Physical pin 33: PA08_UTX; bidirectional. */
  "PA08_UTX": "33",
  /** Physical pin 34: PA09_URX; bidirectional. */
  "PA09_URX": "34",
  /** Physical pin 35: PA10; bidirectional. */
  "PA10": "35",
  /** Physical pin 36: DECOUPLE; passive. */
  "DECOUPLE": "36",
  /** Physical pin 37: VREGSW; passive. */
  "VREGSW": "37",
  /** Physical pin 38: VREGVDD; power_in. */
  "VREGVDD": "38",
  /** Physical pin 39: VREGVSS; power_in. */
  "VREGVSS": "39",
  /** Physical pin 40: DVDD; power_in. */
  "DVDD": "40",
  /** Physical pin 41: AVDD; power_in. */
  "AVDD": "41",
  /** Physical pin 42: IOVDD; power_in. */
  "IOVDD": "42",
  /** Physical pin 43: PD05_PSYNC; bidirectional. */
  "PD05_PSYNC": "43",
  /** Physical pin 44: PD04_PDATA; bidirectional. */
  "PD04_PDATA": "44",
  /** Physical pin 45: PD03; bidirectional. */
  "PD03": "45",
  /** Physical pin 46: PD02; bidirectional. */
  "PD02": "46",
  /** Physical pin 47: PD01_LFXI; bidirectional. */
  "PD01_LFXI": "47",
  /** Physical pin 48: PD00_LFXO; bidirectional. */
  "PD00_LFXO": "48",
  /** Physical pin 49: PAD; power_in. */
  "PAD": "49",
}) {
  override schema = "MCU_SiliconLabs:EFR32xG23xxxxF512xM48";
  override referencePrefix = "U";
}

