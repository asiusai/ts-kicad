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
 */
export class C8051F381_GQ extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class C8051F320_GQ extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class C8051F321_GM extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.3": "11",
  "P2.2": "12",
  "P2.1": "13",
  "P2.0": "14",
  "P1.7": "15",
  "P1.6": "16",
  "P1.5": "17",
  "P1.4": "18",
  "P1.3": "19",
  "P1.2": "20",
  "P1.1": "21",
  "P1.0": "22",
  "P0.7": "23",
  "P0.6": "24",
  "P0.5": "25",
  "P0.4": "26",
  "P0.3": "27",
  "P0.2": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class C8051F380_GQ extends Component.withPins({
  "P0.5": "1",
  "P0.4": "2",
  "P0.3": "3",
  "P0.2": "4",
  "P0.1": "5",
  "P0.0": "6",
  "GND": "7",
  "D+": "8",
  "D-": "9",
  "VDD": "10",
  "REGIN": "11",
  "VBUS": "12",
  "~{RST}/C2CK": "13",
  "C2D": "14",
  "P4.7": "15",
  "P4.6": "16",
  "P4.5": "17",
  "P4.4": "18",
  "P4.3": "19",
  "P4.2": "20",
  "P4.1": "21",
  "P4.0": "22",
  "P3.7": "23",
  "P3.6": "24",
  "P3.5": "25",
  "P3.4": "26",
  "P3.3": "27",
  "P3.2": "28",
  "P3.1": "29",
  "P3.0": "30",
  "P2.7": "31",
  "P2.6": "32",
  "P2.5": "33",
  "P2.4": "34",
  "P2.3": "35",
  "P2.2": "36",
  "P2.1": "37",
  "P2.0": "38",
  "P1.7": "39",
  "P1.6": "40",
  "P1.5": "41",
  "P1.4": "42",
  "P1.3": "43",
  "P1.2": "44",
  "P1.1": "45",
  "P1.0": "46",
  "P0.7": "47",
  "P0.6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", C2D: "bidirectional", "P4.7": "bidirectional", "P4.6": "bidirectional", "P4.5": "bidirectional", "P4.4": "bidirectional", "P4.3": "bidirectional", "P4.2": "bidirectional", "P4.1": "bidirectional", "P4.0": "bidirectional", "P3.7": "bidirectional", "P3.6": "bidirectional", "P3.5": "bidirectional", "P3.4": "bidirectional", "P3.3": "bidirectional", "P3.2": "bidirectional", "P3.1": "bidirectional", "P3.0": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class C8051F381_GM extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class C8051F382_GQ extends Component.withPins({
  "P0.5": "1",
  "P0.4": "2",
  "P0.3": "3",
  "P0.2": "4",
  "P0.1": "5",
  "P0.0": "6",
  "GND": "7",
  "D+": "8",
  "D-": "9",
  "VDD": "10",
  "REGIN": "11",
  "VBUS": "12",
  "~{RST}/C2CK": "13",
  "C2D": "14",
  "P4.7": "15",
  "P4.6": "16",
  "P4.5": "17",
  "P4.4": "18",
  "P4.3": "19",
  "P4.2": "20",
  "P4.1": "21",
  "P4.0": "22",
  "P3.7": "23",
  "P3.6": "24",
  "P3.5": "25",
  "P3.4": "26",
  "P3.3": "27",
  "P3.2": "28",
  "P3.1": "29",
  "P3.0": "30",
  "P2.7": "31",
  "P2.6": "32",
  "P2.5": "33",
  "P2.4": "34",
  "P2.3": "35",
  "P2.2": "36",
  "P2.1": "37",
  "P2.0": "38",
  "P1.7": "39",
  "P1.6": "40",
  "P1.5": "41",
  "P1.4": "42",
  "P1.3": "43",
  "P1.2": "44",
  "P1.1": "45",
  "P1.0": "46",
  "P0.7": "47",
  "P0.6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", C2D: "bidirectional", "P4.7": "bidirectional", "P4.6": "bidirectional", "P4.5": "bidirectional", "P4.4": "bidirectional", "P4.3": "bidirectional", "P4.2": "bidirectional", "P4.1": "bidirectional", "P4.0": "bidirectional", "P3.7": "bidirectional", "P3.6": "bidirectional", "P3.5": "bidirectional", "P3.4": "bidirectional", "P3.3": "bidirectional", "P3.2": "bidirectional", "P3.1": "bidirectional", "P3.0": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class C8051F383_GM extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class C8051F383_GQ extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class C8051F384_GQ extends Component.withPins({
  "P0.5": "1",
  "P0.4": "2",
  "P0.3": "3",
  "P0.2": "4",
  "P0.1": "5",
  "P0.0": "6",
  "GND": "7",
  "D+": "8",
  "D-": "9",
  "VDD": "10",
  "REGIN": "11",
  "VBUS": "12",
  "~{RST}/C2CK": "13",
  "C2D": "14",
  "P4.7": "15",
  "P4.6": "16",
  "P4.5": "17",
  "P4.4": "18",
  "P4.3": "19",
  "P4.2": "20",
  "P4.1": "21",
  "P4.0": "22",
  "P3.7": "23",
  "P3.6": "24",
  "P3.5": "25",
  "P3.4": "26",
  "P3.3": "27",
  "P3.2": "28",
  "P3.1": "29",
  "P3.0": "30",
  "P2.7": "31",
  "P2.6": "32",
  "P2.5": "33",
  "P2.4": "34",
  "P2.3": "35",
  "P2.2": "36",
  "P2.1": "37",
  "P2.0": "38",
  "P1.7": "39",
  "P1.6": "40",
  "P1.5": "41",
  "P1.4": "42",
  "P1.3": "43",
  "P1.2": "44",
  "P1.1": "45",
  "P1.0": "46",
  "P0.7": "47",
  "P0.6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", C2D: "bidirectional", "P4.7": "bidirectional", "P4.6": "bidirectional", "P4.5": "bidirectional", "P4.4": "bidirectional", "P4.3": "bidirectional", "P4.2": "bidirectional", "P4.1": "bidirectional", "P4.0": "bidirectional", "P3.7": "bidirectional", "P3.6": "bidirectional", "P3.5": "bidirectional", "P3.4": "bidirectional", "P3.3": "bidirectional", "P3.2": "bidirectional", "P3.1": "bidirectional", "P3.0": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class C8051F385_GM extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class C8051F385_GQ extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class C8051F386_GQ extends Component.withPins({
  "P0.5": "1",
  "P0.4": "2",
  "P0.3": "3",
  "P0.2": "4",
  "P0.1": "5",
  "P0.0": "6",
  "GND": "7",
  "D+": "8",
  "D-": "9",
  "VDD": "10",
  "REGIN": "11",
  "VBUS": "12",
  "~{RST}/C2CK": "13",
  "C2D": "14",
  "P4.7": "15",
  "P4.6": "16",
  "P4.5": "17",
  "P4.4": "18",
  "P4.3": "19",
  "P4.2": "20",
  "P4.1": "21",
  "P4.0": "22",
  "P3.7": "23",
  "P3.6": "24",
  "P3.5": "25",
  "P3.4": "26",
  "P3.3": "27",
  "P3.2": "28",
  "P3.1": "29",
  "P3.0": "30",
  "P2.7": "31",
  "P2.6": "32",
  "P2.5": "33",
  "P2.4": "34",
  "P2.3": "35",
  "P2.2": "36",
  "P2.1": "37",
  "P2.0": "38",
  "P1.7": "39",
  "P1.6": "40",
  "P1.5": "41",
  "P1.4": "42",
  "P1.3": "43",
  "P1.2": "44",
  "P1.1": "45",
  "P1.0": "46",
  "P0.7": "47",
  "P0.6": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", C2D: "bidirectional", "P4.7": "bidirectional", "P4.6": "bidirectional", "P4.5": "bidirectional", "P4.4": "bidirectional", "P4.3": "bidirectional", "P4.2": "bidirectional", "P4.1": "bidirectional", "P4.0": "bidirectional", "P3.7": "bidirectional", "P3.6": "bidirectional", "P3.5": "bidirectional", "P3.4": "bidirectional", "P3.3": "bidirectional", "P3.2": "bidirectional", "P3.1": "bidirectional", "P3.0": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class C8051F387_GM extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class C8051F387_GQ extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class C8051F38C_GM extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class C8051F38C_GQ extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "REGIN": "7",
  "VBUS": "8",
  "~{RST}/C2CK": "9",
  "P3.0/C2D": "10",
  "P2.7": "11",
  "P2.6": "12",
  "P2.5": "13",
  "P2.4": "14",
  "P2.3": "15",
  "P2.2": "16",
  "P2.1": "17",
  "P2.0": "18",
  "P1.7": "19",
  "P1.6": "20",
  "P1.5": "21",
  "P1.4": "22",
  "P1.3": "23",
  "P1.2": "24",
  "P1.1": "25",
  "P1.0": "26",
  "P0.7": "27",
  "P0.6": "28",
  "P0.5": "29",
  "P0.4": "30",
  "P0.3": "31",
  "P0.2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", REGIN: "power_in", VBUS: "input", "~{RST}/C2CK": "input", "P3.0/C2D": "bidirectional", "P2.7": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class EFM32G230F128G_E_QFN64 extends Component.withPins({
  "PA0": "1",
  "PA1": "2",
  "PA2": "3",
  "PA3": "4",
  "PA4": "5",
  "PA5": "6",
  "PA6": "7",
  "IOVDD_8": "8",
  "PC0": "9",
  "PC1": "10",
  "PC2": "11",
  "PC3": "12",
  "PC4": "13",
  "PC5": "14",
  "PB7": "15",
  "PB8": "16",
  "PA8": "17",
  "PA9": "18",
  "PA10": "19",
  "~{RESET}": "20",
  "PB11": "21",
  "PB12": "22",
  "AVDD_23": "23",
  "PB13": "24",
  "PB14": "25",
  "IOVDD_26": "26",
  "AVDD_27": "27",
  "PD0": "28",
  "PD1": "29",
  "PD2": "30",
  "PD3": "31",
  "PD4": "32",
  "PD5": "33",
  "PD6": "34",
  "PD7": "35",
  "PD8": "36",
  "PC6": "37",
  "PC7": "38",
  "VDD_DREG": "39",
  "DECOUPLE": "40",
  "PC8": "41",
  "PC9": "42",
  "PC10": "43",
  "PC11": "44",
  "PC12": "45",
  "PC13": "46",
  "PC14": "47",
  "PC15": "48",
  "PF0": "49",
  "PF1": "50",
  "PF2": "51",
  "PF3": "52",
  "PF4": "53",
  "PF5": "54",
  "IOVDD_55": "55",
  "PE8": "56",
  "PE9": "57",
  "PE10": "58",
  "PE11": "59",
  "PE12": "60",
  "PE13": "61",
  "PE14": "62",
  "PE15": "63",
  "PA15": "64",
  "VSS": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", IOVDD_8: "power_in", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", PB12: "bidirectional", AVDD_23: "power_in", PB13: "bidirectional", PB14: "bidirectional", IOVDD_26: "passive", AVDD_27: "passive", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PD8: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC8: "bidirectional", PC9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", IOVDD_55: "passive", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PA15: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32HG108F32G_C_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32HG108F64G_C_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32HG308F32G_C_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_0": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_2": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_0": "12",
  "VDD_DREG": "13",
  "DECOUPLE": "14",
  "USB_VREGI": "15",
  "USB_VREGO": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_5": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_0: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_2: "power_in", PB13: "bidirectional", PB14: "bidirectional", AVDD_0: "power_in", VDD_DREG: "power_in", DECOUPLE: "passive", USB_VREGI: "power_in", USB_VREGO: "power_out", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_5: "power_in", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32HG308F64G_C_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_0": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_2": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_0": "12",
  "VDD_DREG": "13",
  "DECOUPLE": "14",
  "USB_VREGI": "15",
  "USB_VREGO": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_5": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_0: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_2: "power_in", PB13: "bidirectional", PB14: "bidirectional", AVDD_0: "power_in", VDD_DREG: "power_in", DECOUPLE: "passive", USB_VREGI: "power_in", USB_VREGO: "power_out", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_5: "power_in", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32ZG108F16_B_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32ZG108F32_B_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32ZG108F4_B_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32ZG108F8_B_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32ZG110F16_B_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32ZG110F32_B_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32ZG110F4_B_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM32ZG110F8_B_QFN24 extends Component.withPins({
  "PA0": "1",
  "IOVDD_2": "2",
  "PC0": "3",
  "PC1": "4",
  "PB7": "5",
  "PB8": "6",
  "~{RESET}": "7",
  "PB11": "8",
  "AVDD_9": "9",
  "PB13": "10",
  "PB14": "11",
  "AVDD_12": "12",
  "PD6": "13",
  "PD7": "14",
  "VDD_DREG": "15",
  "DECOUPLE": "16",
  "PC14": "17",
  "PC15": "18",
  "PF0": "19",
  "PF1": "20",
  "PF2": "21",
  "IOVDD_22": "22",
  "PE12": "23",
  "PE13": "24",
  "VSS": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA0: "bidirectional", IOVDD_2: "power_in", PC0: "bidirectional", PC1: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", "~{RESET}": "input", PB11: "bidirectional", AVDD_9: "passive", PB13: "bidirectional", PB14: "bidirectional", AVDD_12: "power_in", PD6: "bidirectional", PD7: "bidirectional", VDD_DREG: "power_in", DECOUPLE: "passive", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", IOVDD_22: "passive", PE12: "bidirectional", PE13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F8G_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "VDD": "4",
  "RSTb/C2CK": "5",
  "P2.0/C2D": "6",
  "P1.6": "7",
  "P1.5": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F2A_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "VDD": "4",
  "RSTb/C2CK": "5",
  "P2.0/C2D": "6",
  "P1.6": "7",
  "P1.5": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F2G_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "VDD": "4",
  "RSTb/C2CK": "5",
  "P2.0/C2D": "6",
  "P1.6": "7",
  "P1.5": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F2I_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "VDD": "4",
  "RSTb/C2CK": "5",
  "P2.0/C2D": "6",
  "P1.6": "7",
  "P1.5": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F4A_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "VDD": "4",
  "RSTb/C2CK": "5",
  "P2.0/C2D": "6",
  "P1.6": "7",
  "P1.5": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F4G_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "VDD": "4",
  "RSTb/C2CK": "5",
  "P2.0/C2D": "6",
  "P1.6": "7",
  "P1.5": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F4I_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "VDD": "4",
  "RSTb/C2CK": "5",
  "P2.0/C2D": "6",
  "P1.6": "7",
  "P1.5": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F8A_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "VDD": "4",
  "RSTb/C2CK": "5",
  "P2.0/C2D": "6",
  "P1.6": "7",
  "P1.5": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F8G_A_QSOP24 extends Component.withPins({
  "NC_1": "1",
  "P0.2": "2",
  "P0.1": "3",
  "P0.0": "4",
  "GND": "5",
  "VDD": "6",
  "RSTb/C2CK": "7",
  "P2.0/C2D": "8",
  "P1.7": "9",
  "P1.6": "10",
  "P1.5": "11",
  "P2.1": "12",
  "NC_13": "13",
  "P1.4": "14",
  "P1.3": "15",
  "P1.2": "16",
  "P1.1": "17",
  "P1.0": "18",
  "P0.7": "19",
  "P0.6": "20",
  "P0.5": "21",
  "P0.4": "22",
  "P0.3": "23",
  "NC_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P2.1": "bidirectional", NC_13: "no_connect", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", NC_24: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F8G_A_SOIC16 extends Component.withPins({
  "P0.2": "1",
  "P0.1": "2",
  "P0.0": "3",
  "GND": "4",
  "VDD": "5",
  "RSTb/C2CK": "6",
  "P2.0/C2D": "7",
  "P1.3": "8",
  "P1.2": "9",
  "P1.1": "10",
  "P1.0": "11",
  "P0.7": "12",
  "P0.6": "13",
  "P0.5": "14",
  "P0.4": "15",
  "P0.3": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F8I_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "VDD": "4",
  "RSTb/C2CK": "5",
  "P2.0/C2D": "6",
  "P1.6": "7",
  "P1.5": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F8I_A_QSOP24 extends Component.withPins({
  "NC_1": "1",
  "P0.2": "2",
  "P0.1": "3",
  "P0.0": "4",
  "GND": "5",
  "VDD": "6",
  "RSTb/C2CK": "7",
  "P2.0/C2D": "8",
  "P1.7": "9",
  "P1.6": "10",
  "P1.5": "11",
  "P2.1": "12",
  "NC_13": "13",
  "P1.4": "14",
  "P1.3": "15",
  "P1.2": "16",
  "P1.1": "17",
  "P1.0": "18",
  "P0.7": "19",
  "P0.6": "20",
  "P0.5": "21",
  "P0.4": "22",
  "P0.3": "23",
  "NC_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P2.1": "bidirectional", NC_13: "no_connect", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", NC_24: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class EFM8BB10F8I_A_SOIC16 extends Component.withPins({
  "P0.2": "1",
  "P0.1": "2",
  "P0.0": "3",
  "GND": "4",
  "VDD": "5",
  "RSTb/C2CK": "6",
  "P2.0/C2D": "7",
  "P1.3": "8",
  "P1.2": "9",
  "P1.1": "10",
  "P1.0": "11",
  "P0.7": "12",
  "P0.6": "13",
  "P0.5": "14",
  "P0.4": "15",
  "P0.3": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", VDD: "power_in", "RSTb/C2CK": "input", "P2.0/C2D": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class EFM8LB12F32E_C_QFP32 extends Component.withPins({
  "P0.0": "1",
  "GND": "2",
  "VIO": "3",
  "VDD": "4",
  "~{RST}": "5",
  "P3.7": "6",
  "P3.3": "7",
  "P3.2": "8",
  "P3.1": "9",
  "P3.0": "10",
  "P2.6": "11",
  "P2.5": "12",
  "P2.4": "13",
  "P2.3": "14",
  "P2.2": "15",
  "P2.1": "16",
  "P2.0": "17",
  "P1.7": "18",
  "P1.6": "19",
  "P1.5": "20",
  "P1.4": "21",
  "P1.3": "22",
  "P1.2": "23",
  "P1.1": "24",
  "P1.0": "25",
  "P0.7": "26",
  "P0.6": "27",
  "P0.5": "28",
  "P0.4": "29",
  "P0.3": "30",
  "P0.2": "31",
  "P0.1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.0": "bidirectional", GND: "power_in", VIO: "power_in", VDD: "power_in", "~{RST}": "input", "P3.7": "bidirectional", "P3.3": "bidirectional", "P3.2": "bidirectional", "P3.1": "bidirectional", "P3.0": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", "P0.1": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class EFM8LB12F64E_C_QFP32 extends Component.withPins({
  "P0.0": "1",
  "GND": "2",
  "VIO": "3",
  "VDD": "4",
  "~{RST}": "5",
  "P3.7": "6",
  "P3.3": "7",
  "P3.2": "8",
  "P3.1": "9",
  "P3.0": "10",
  "P2.6": "11",
  "P2.5": "12",
  "P2.4": "13",
  "P2.3": "14",
  "P2.2": "15",
  "P2.1": "16",
  "P2.0": "17",
  "P1.7": "18",
  "P1.6": "19",
  "P1.5": "20",
  "P1.4": "21",
  "P1.3": "22",
  "P1.2": "23",
  "P1.1": "24",
  "P1.0": "25",
  "P0.7": "26",
  "P0.6": "27",
  "P0.5": "28",
  "P0.4": "29",
  "P0.3": "30",
  "P0.2": "31",
  "P0.1": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.0": "bidirectional", GND: "power_in", VIO: "power_in", VDD: "power_in", "~{RST}": "input", "P3.7": "bidirectional", "P3.3": "bidirectional", "P3.2": "bidirectional", "P3.1": "bidirectional", "P3.0": "bidirectional", "P2.6": "bidirectional", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", "P0.1": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class EFM8UB30F40G_A_QFN20 extends Component.withPins({
  "P0.1": "1",
  "P0.0": "2",
  "GND_3": "3",
  "D+": "4",
  "D-": "5",
  "VDD": "6",
  "VREGIN": "7",
  "P2.1/VBUS": "8",
  "~{RST}/C2CK": "9",
  "P2.0/C2D": "10",
  "P1.2": "11",
  "GND_12": "12",
  "P1.1": "13",
  "P1.0": "14",
  "P0.7": "15",
  "P0.6": "16",
  "P0.5": "17",
  "P0.4": "18",
  "P0.3": "19",
  "P0.2": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.1": "bidirectional", "P0.0": "bidirectional", GND_3: "power_in", "D+": "bidirectional", "D-": "bidirectional", VDD: "power_in", VREGIN: "power_in", "P2.1/VBUS": "bidirectional", "~{RST}/C2CK": "bidirectional", "P2.0/C2D": "bidirectional", "P1.2": "bidirectional", GND_12: "passive", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", GND_21: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8UB31F40G_A_QFN24 extends Component.withPins({
  "P0.0": "1",
  "GND_2": "2",
  "D+": "3",
  "D-": "4",
  "VIO": "5",
  "VDD": "6",
  "VREGIN": "7",
  "P2.1/VBUS": "8",
  "~{RST}/C2CK": "9",
  "P2.0/C2D": "10",
  "P1.6": "11",
  "P1.5": "12",
  "P1.4": "13",
  "P1.3": "14",
  "P1.2": "15",
  "P1.1": "16",
  "P1.0": "17",
  "P0.7": "18",
  "P0.6": "19",
  "P0.5": "20",
  "P0.4": "21",
  "P0.3": "22",
  "P0.2": "23",
  "P0.1": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.0": "bidirectional", GND_2: "power_in", "D+": "bidirectional", "D-": "bidirectional", VIO: "power_in", VDD: "power_in", VREGIN: "power_in", "P2.1/VBUS": "bidirectional", "~{RST}/C2CK": "bidirectional", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", "P0.2": "bidirectional", "P0.1": "bidirectional", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class EFM8UB31F40G_A_QSOP24 extends Component.withPins({
  "P0.2": "1",
  "P0.1": "2",
  "P0.0": "3",
  "GND": "4",
  "D+": "5",
  "D-": "6",
  "VIO": "7",
  "VDD": "8",
  "VREGIN": "9",
  "P2.1/VBUS": "10",
  "~{RST}/C2CK": "11",
  "P2.0/C2D": "12",
  "P1.6": "13",
  "P1.5": "14",
  "P1.4": "15",
  "P1.3": "16",
  "P1.2": "17",
  "P1.1": "18",
  "P1.0": "19",
  "P0.7": "20",
  "P0.6": "21",
  "P0.5": "22",
  "P0.4": "23",
  "P0.3": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0.2": "bidirectional", "P0.1": "bidirectional", "P0.0": "bidirectional", GND: "power_in", "D+": "bidirectional", "D-": "bidirectional", VIO: "power_in", VDD: "power_in", VREGIN: "power_in", "P2.1/VBUS": "bidirectional", "~{RST}/C2CK": "bidirectional", "P2.0/C2D": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P0.7": "bidirectional", "P0.6": "bidirectional", "P0.5": "bidirectional", "P0.4": "bidirectional", "P0.3": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class EFR32xG23xxxxF512xM48 extends Component.withPins({
  "PC00": "1",
  "PC01": "2",
  "PC02": "3",
  "PC03": "4",
  "PC04": "5",
  "PC05": "6",
  "PC06": "7",
  "PC07": "8",
  "PC08": "9",
  "PC09": "10",
  "HFXTAL_I": "11",
  "HFXTAL_O": "12",
  "~{RESET}": "13",
  "RFVDD": "14",
  "RFVSS": "15",
  "SUBG_I1": "16",
  "SUBG_I0": "17",
  "SUBG_O1": "18",
  "SUBG_O0": "19",
  "PAVDD": "20",
  "PB03": "21",
  "PB02": "22",
  "PB01": "23",
  "PB00": "24",
  "PA00": "25",
  "PA01_SWCLK": "26",
  "PA02_SWDIO": "27",
  "PA03_SWO": "28",
  "PA04_TCLK": "29",
  "PA05_TD1": "30",
  "PA06_TD2": "31",
  "PA07_TD3": "32",
  "PA08_UTX": "33",
  "PA09_URX": "34",
  "PA10": "35",
  "DECOUPLE": "36",
  "VREGSW": "37",
  "VREGVDD": "38",
  "VREGVSS": "39",
  "DVDD": "40",
  "AVDD": "41",
  "IOVDD": "42",
  "PD05_PSYNC": "43",
  "PD04_PDATA": "44",
  "PD03": "45",
  "PD02": "46",
  "PD01_LFXI": "47",
  "PD00_LFXO": "48",
  "PAD": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC00: "bidirectional", PC01: "bidirectional", PC02: "bidirectional", PC03: "bidirectional", PC04: "bidirectional", PC05: "bidirectional", PC06: "bidirectional", PC07: "bidirectional", PC08: "bidirectional", PC09: "bidirectional", HFXTAL_I: "input", HFXTAL_O: "output", "~{RESET}": "input", RFVDD: "power_in", RFVSS: "power_in", SUBG_I1: "bidirectional", SUBG_I0: "bidirectional", SUBG_O1: "bidirectional", SUBG_O0: "bidirectional", PAVDD: "power_in", PB03: "bidirectional", PB02: "bidirectional", PB01: "bidirectional", PB00: "bidirectional", PA00: "bidirectional", PA01_SWCLK: "bidirectional", PA02_SWDIO: "bidirectional", PA03_SWO: "bidirectional", PA04_TCLK: "bidirectional", PA05_TD1: "bidirectional", PA06_TD2: "bidirectional", PA07_TD3: "bidirectional", PA08_UTX: "bidirectional", PA09_URX: "bidirectional", PA10: "bidirectional", DECOUPLE: "passive", VREGSW: "passive", VREGVDD: "power_in", VREGVSS: "power_in", DVDD: "power_in", AVDD: "power_in", IOVDD: "power_in", PD05_PSYNC: "bidirectional", PD04_PDATA: "bidirectional", PD03: "bidirectional", PD02: "bidirectional", PD01_LFXI: "bidirectional", PD00_LFXO: "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_SiliconLabs:EFR32xG23xxxxF512xM48";
  override referencePrefix = "U";
}
