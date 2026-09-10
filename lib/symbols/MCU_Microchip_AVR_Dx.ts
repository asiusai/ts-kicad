// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Touch Sensing, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DA28x-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DA28-32-48-Data-Sheet-40002228B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class AVR32DA28x_xSO extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "GND_15": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND_21": "21",
  "PA0": "22",
  "PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_15: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_21: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DA28x-xSO";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Touch Sensing, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DA28x-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DA28-32-48-64-DataSheet-DS40002183B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class AVR128DA28x_xSO extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "GND_15": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND_21": "21",
  "PA0": "22",
  "PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_15: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_21: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DA28x-xSO";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Touch Sensing, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DA28x-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DA28-32-48-64-DataSheet-DS40002183B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class AVR128DA28x_xSP extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "GND_15": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND_21": "21",
  "PA0": "22",
  "PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_15: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_21: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DA28x-xSP";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Touch Sensing, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DA28x-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DA28-32-48-64-DataSheet-DS40002183B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class AVR128DA28x_xSS extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "GND_15": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND_21": "21",
  "PA0": "22",
  "PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_15: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_21: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DA28x-xSS";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Touch Sensing, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DA32x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DA28-32-48-Data-Sheet-40002228B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class AVR32DA32x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "PD0": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "GND_19": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND_29": "29",
  "PA0": "30",
  "PA1": "31",
  "PA2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_19: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_29: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DA32x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Touch Sensing, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DA32x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DA28-32-48-64-DataSheet-DS40002183B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class AVR128DA32x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "PD0": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "GND_19": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND_29": "29",
  "PA0": "30",
  "PA1": "31",
  "PA2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_19: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_29: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DA32x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Touch Sensing, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DA32x-xRXB`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*EP3.1x3.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DA28-32-48-Data-Sheet-40002228B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AVR32DA32x_xRXB extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "PD0": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "GND_19": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND_29": "29",
  "PA0": "30",
  "PA1": "31",
  "PA2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_19: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_29: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DA32x-xRXB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Touch Sensing, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DA32x-xRXB`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*EP3.1x3.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DA28-32-48-64-DataSheet-DS40002183B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AVR128DA32x_xRXB extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "PD0": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "GND_19": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND_29": "29",
  "PA0": "30",
  "PA1": "31",
  "PA2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_19: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_29: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DA32x-xRXB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Touch Sensing, VQFN-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DA48x-x6LX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*EP4.2x4.2mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DA28-32-48-Data-Sheet-40002228B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm.
 */
export class AVR32DA48x_x6LX extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDD_14": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "GND_29": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD_42": "42",
  "GND_43": "43",
  "PA0": "44",
  "PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_14: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_29: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD_42: "passive", GND_43: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DA48x-x6LX";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Touch Sensing, VQFN-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DA48x-x6LX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*EP4.2x4.2mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DA28-32-48-64-DataSheet-DS40002183B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm.
 */
export class AVR128DA48x_x6LX extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDD_14": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "GND_29": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD_42": "42",
  "GND_43": "43",
  "PA0": "44",
  "PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_14: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_29: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD_42: "passive", GND_43: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DA48x-x6LX";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Touch Sensing, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DA48x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DA28-32-48-Data-Sheet-40002228B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class AVR32DA48x_xPT extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDD_14": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "GND_29": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD_42": "42",
  "GND_43": "43",
  "PA0": "44",
  "PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_14: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_29: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD_42: "passive", GND_43: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DA48x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Touch Sensing, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DA48x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DA28-32-48-64-DataSheet-DS40002183B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class AVR128DA48x_xPT extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDD_14": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "GND_29": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD_42": "42",
  "GND_43": "43",
  "PA0": "44",
  "PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_14: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_29: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD_42: "passive", GND_43: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DA48x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Touch Sensing, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DA64x-xMR`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*9x9mm*P0.5mm*EP7.15x7.15mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DA28-32-48-64-Data-Sheet-40002233B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 */
export class AVR64DA64x_xMR extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "VDD_6": "6",
  "GND_7": "7",
  "PB0": "8",
  "PB1": "9",
  "PB2": "10",
  "PB3": "11",
  "PB4": "12",
  "PB5": "13",
  "PB6": "14",
  "PB7": "15",
  "PC0": "16",
  "PC1": "17",
  "PC2": "18",
  "PC3": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "PC4": "22",
  "PC5": "23",
  "PC6": "24",
  "PC7": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PD4": "30",
  "PD5": "31",
  "PD6": "32",
  "VREFA/PD7": "33",
  "AVDD": "34",
  "GND_35": "35",
  "PE0": "36",
  "PE1": "37",
  "PE2": "38",
  "PE3": "39",
  "PE4": "40",
  "PE5": "41",
  "PE6": "42",
  "PE7": "43",
  "XTAL32K1/PF0": "44",
  "XTAL32K2/PF1": "45",
  "PF2": "46",
  "PF3": "47",
  "PF4": "48",
  "PF5": "49",
  "~{RESET}/PF6_": "50",
  "UPDI": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "PG4": "58",
  "PG5": "59",
  "PG6": "60",
  "PG7": "61",
  "PA0": "62",
  "PA1": "63",
  "PA2": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VDD_6: "power_in", GND_7: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_20: "passive", GND_21: "passive", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_35: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6_": "bidirectional", UPDI: "input", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VDD_56: "passive", GND_57: "passive", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DA64x-xMR";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Touch Sensing, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DA64x-xMR`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*9x9mm*P0.5mm*EP7.15x7.15mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DA28-32-48-64-DataSheet-DS40002183B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 */
export class AVR128DA64x_xMR extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "VDD_6": "6",
  "GND_7": "7",
  "PB0": "8",
  "PB1": "9",
  "PB2": "10",
  "PB3": "11",
  "PB4": "12",
  "PB5": "13",
  "PB6": "14",
  "PB7": "15",
  "PC0": "16",
  "PC1": "17",
  "PC2": "18",
  "PC3": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "PC4": "22",
  "PC5": "23",
  "PC6": "24",
  "PC7": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PD4": "30",
  "PD5": "31",
  "PD6": "32",
  "VREFA/PD7": "33",
  "AVDD": "34",
  "GND_35": "35",
  "PE0": "36",
  "PE1": "37",
  "PE2": "38",
  "PE3": "39",
  "PE4": "40",
  "PE5": "41",
  "PE6": "42",
  "PE7": "43",
  "XTAL32K1/PF0": "44",
  "XTAL32K2/PF1": "45",
  "PF2": "46",
  "PF3": "47",
  "PF4": "48",
  "PF5": "49",
  "~{RESET}/PF6_": "50",
  "UPDI": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "PG4": "58",
  "PG5": "59",
  "PG6": "60",
  "PG7": "61",
  "PA0": "62",
  "PA1": "63",
  "PA2": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VDD_6: "power_in", GND_7: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_20: "passive", GND_21: "passive", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_35: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6_": "bidirectional", UPDI: "input", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VDD_56: "passive", GND_57: "passive", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DA64x-xMR";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Touch Sensing, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DA64x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DA28-32-48-64-Data-Sheet-40002233B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class AVR64DA64x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "VDD_6": "6",
  "GND_7": "7",
  "PB0": "8",
  "PB1": "9",
  "PB2": "10",
  "PB3": "11",
  "PB4": "12",
  "PB5": "13",
  "PB6": "14",
  "PB7": "15",
  "PC0": "16",
  "PC1": "17",
  "PC2": "18",
  "PC3": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "PC4": "22",
  "PC5": "23",
  "PC6": "24",
  "PC7": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PD4": "30",
  "PD5": "31",
  "PD6": "32",
  "VREFA/PD7": "33",
  "AVDD": "34",
  "GND_35": "35",
  "PE0": "36",
  "PE1": "37",
  "PE2": "38",
  "PE3": "39",
  "PE4": "40",
  "PE5": "41",
  "PE6": "42",
  "PE7": "43",
  "XTAL32K1/PF0": "44",
  "XTAL32K2/PF1": "45",
  "PF2": "46",
  "PF3": "47",
  "PF4": "48",
  "PF5": "49",
  "~{RESET}/PF6_": "50",
  "UPDI": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "PG4": "58",
  "PG5": "59",
  "PG6": "60",
  "PG7": "61",
  "PA0": "62",
  "PA1": "63",
  "PA2": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VDD_6: "power_in", GND_7: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_20: "passive", GND_21: "passive", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_35: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6_": "bidirectional", UPDI: "input", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VDD_56: "passive", GND_57: "passive", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DA64x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Touch Sensing, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DA64x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DA28-32-48-64-DataSheet-DS40002183B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class AVR128DA64x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "VDD_6": "6",
  "GND_7": "7",
  "PB0": "8",
  "PB1": "9",
  "PB2": "10",
  "PB3": "11",
  "PB4": "12",
  "PB5": "13",
  "PB6": "14",
  "PB7": "15",
  "PC0": "16",
  "PC1": "17",
  "PC2": "18",
  "PC3": "19",
  "VDD_20": "20",
  "GND_21": "21",
  "PC4": "22",
  "PC5": "23",
  "PC6": "24",
  "PC7": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PD4": "30",
  "PD5": "31",
  "PD6": "32",
  "VREFA/PD7": "33",
  "AVDD": "34",
  "GND_35": "35",
  "PE0": "36",
  "PE1": "37",
  "PE2": "38",
  "PE3": "39",
  "PE4": "40",
  "PE5": "41",
  "PE6": "42",
  "PE7": "43",
  "XTAL32K1/PF0": "44",
  "XTAL32K2/PF1": "45",
  "PF2": "46",
  "PF3": "47",
  "PF4": "48",
  "PF5": "49",
  "~{RESET}/PF6_": "50",
  "UPDI": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "PG4": "58",
  "PG5": "59",
  "PG6": "60",
  "PG7": "61",
  "PA0": "62",
  "PA1": "63",
  "PA2": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VDD_6: "power_in", GND_7: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_20: "passive", GND_21: "passive", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_35: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6_": "bidirectional", UPDI: "input", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VDD_56: "passive", GND_57: "passive", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DA64x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DB28x-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DB28-32-48-DataSheet-DS40002301A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class AVR32DB28x_xSO extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "VDDIO2": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "AGND": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND": "21",
  "XTALHF1/PA0": "22",
  "XTALHF2/PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DB28x-xSO";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DB28x-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DB28-32-48-64-DataSheet-DS40002247A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class AVR128DB28x_xSO extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "VDDIO2": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "AGND": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND": "21",
  "XTALHF1/PA0": "22",
  "XTALHF2/PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DB28x-xSO";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DB28x-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DB28-32-48-64-DataSheet-DS40002247A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class AVR128DB28x_xSP extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "VDDIO2": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "AGND": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND": "21",
  "XTALHF1/PA0": "22",
  "XTALHF2/PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DB28x-xSP";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DB28x-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DB28-32-48-64-DataSheet-DS40002247A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class AVR128DB28x_xSS extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "VDDIO2": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "AGND": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND": "21",
  "XTALHF1/PA0": "22",
  "XTALHF2/PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DB28x-xSS";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DB32x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DB28-32-48-DataSheet-DS40002301A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class AVR32DB32x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "VDDIO2": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "AGND": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND": "29",
  "XTALHF1/PA0": "30",
  "XTALHF2/PA1": "31",
  "PA2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "input", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DB32x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DB32x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DB28-32-48-64-DataSheet-DS40002247A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class AVR128DB32x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "VDDIO2": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "AGND": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND": "29",
  "XTALHF1/PA0": "30",
  "XTALHF2/PA1": "31",
  "PA2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "input", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DB32x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DB32x-xRXB`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*EP3.1x3.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DB28-32-48-DataSheet-DS40002301A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AVR32DB32x_xRXB extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "VDDIO2": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "AGND": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND_29": "29",
  "XTALHF1/PA0": "30",
  "XTALHF2/PA1": "31",
  "PA2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "input", UPDI: "input", VDD: "power_in", GND_29: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DB32x-xRXB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DB32x-xRXB`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*EP3.1x3.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DB28-32-48-64-DataSheet-DS40002247A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AVR128DB32x_xRXB extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "VDDIO2": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "AGND": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND_29": "29",
  "XTALHF1/PA0": "30",
  "XTALHF2/PA1": "31",
  "PA2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "input", UPDI: "input", VDD: "power_in", GND_29: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DB32x-xRXB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, VQFN-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DB48x-x6LX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*EP4.2x4.2mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DB28-32-48-DataSheet-DS40002301A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm.
 */
export class AVR32DB48x_x6LX extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDDIO2": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "AGND": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD": "42",
  "GND_43": "43",
  "XTALHF1/PA0": "44",
  "XTALHF2/PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_43: "passive", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DB48x-x6LX";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, VQFN-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DB48x-x6LX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*EP4.2x4.2mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DB28-32-48-64-DataSheet-DS40002247A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm.
 */
export class AVR128DB48x_x6LX extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDDIO2": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "AGND": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD": "42",
  "GND_43": "43",
  "XTALHF1/PA0": "44",
  "XTALHF2/PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_43: "passive", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DB48x-x6LX";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DB48x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DB28-32-48-DataSheet-DS40002301A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class AVR32DB48x_xPT extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDDIO2": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "AGND": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD": "42",
  "GND_43": "43",
  "XTALHF1/PA0": "44",
  "XTALHF2/PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_43: "passive", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DB48x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DB48x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DB28-32-48-64-DataSheet-DS40002247A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class AVR128DB48x_xPT extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDDIO2": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "AGND": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD": "42",
  "GND_43": "43",
  "XTALHF1/PA0": "44",
  "XTALHF2/PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_43: "passive", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DB48x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DB64x-xMR`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*9x9mm*P0.5mm*EP7.15x7.15mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DB28-32-48-64-DataSheet-DS40002300A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 */
export class AVR64DB64x_xMR extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "VDD_6": "6",
  "GND_7": "7",
  "PB0": "8",
  "PB1": "9",
  "PB2": "10",
  "PB3": "11",
  "PB4": "12",
  "PB5": "13",
  "PB6": "14",
  "PB7": "15",
  "PC0": "16",
  "PC1": "17",
  "PC2": "18",
  "PC3": "19",
  "VDDIO2": "20",
  "GND_21": "21",
  "PC4": "22",
  "PC5": "23",
  "PC6": "24",
  "PC7": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PD4": "30",
  "PD5": "31",
  "PD6": "32",
  "VREFA/PD7": "33",
  "AVDD": "34",
  "AGND": "35",
  "PE0": "36",
  "PE1": "37",
  "PE2": "38",
  "PE3": "39",
  "PE4": "40",
  "PE5": "41",
  "PE6": "42",
  "PE7": "43",
  "XTAL32K1/PF0": "44",
  "XTAL32K2/PF1": "45",
  "PF2": "46",
  "PF3": "47",
  "PF4": "48",
  "PF5": "49",
  "~{RESET}/PF6": "50",
  "UPDI": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "PG4": "58",
  "PG5": "59",
  "PG6": "60",
  "PG7": "61",
  "XTALHF1/PA0": "62",
  "XTALHF2/PA1": "63",
  "PA2": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VDD_6: "power_in", GND_7: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_21: "passive", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VDD_56: "passive", GND_57: "passive", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DB64x-xMR";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DB64x-xMR`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*9x9mm*P0.5mm*EP7.15x7.15mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DB28-32-48-64-DataSheet-DS40002247A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP7.15x7.15mm.
 */
export class AVR128DB64x_xMR extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "VDD_6": "6",
  "GND_7": "7",
  "PB0": "8",
  "PB1": "9",
  "PB2": "10",
  "PB3": "11",
  "PB4": "12",
  "PB5": "13",
  "PB6": "14",
  "PB7": "15",
  "PC0": "16",
  "PC1": "17",
  "PC2": "18",
  "PC3": "19",
  "VDDIO2": "20",
  "GND_21": "21",
  "PC4": "22",
  "PC5": "23",
  "PC6": "24",
  "PC7": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PD4": "30",
  "PD5": "31",
  "PD6": "32",
  "VREFA/PD7": "33",
  "AVDD": "34",
  "AGND": "35",
  "PE0": "36",
  "PE1": "37",
  "PE2": "38",
  "PE3": "39",
  "PE4": "40",
  "PE5": "41",
  "PE6": "42",
  "PE7": "43",
  "XTAL32K1/PF0": "44",
  "XTAL32K2/PF1": "45",
  "PF2": "46",
  "PF3": "47",
  "PF4": "48",
  "PF5": "49",
  "~{RESET}/PF6": "50",
  "UPDI": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "PG4": "58",
  "PG5": "59",
  "PG6": "60",
  "PG7": "61",
  "XTALHF1/PA0": "62",
  "XTALHF2/PA1": "63",
  "PA2": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VDD_6: "power_in", GND_7: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_21: "passive", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VDD_56: "passive", GND_57: "passive", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DB64x-xMR";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DB64x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DB28-32-48-64-DataSheet-DS40002300A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class AVR64DB64x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "VDD_6": "6",
  "GND_7": "7",
  "PB0": "8",
  "PB1": "9",
  "PB2": "10",
  "PB3": "11",
  "PB4": "12",
  "PB5": "13",
  "PB6": "14",
  "PB7": "15",
  "PC0": "16",
  "PC1": "17",
  "PC2": "18",
  "PC3": "19",
  "VDDIO2": "20",
  "GND_21": "21",
  "PC4": "22",
  "PC5": "23",
  "PC6": "24",
  "PC7": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PD4": "30",
  "PD5": "31",
  "PD6": "32",
  "VREFA/PD7": "33",
  "AVDD": "34",
  "AGND": "35",
  "PE0": "36",
  "PE1": "37",
  "PE2": "38",
  "PE3": "39",
  "PE4": "40",
  "PE5": "41",
  "PE6": "42",
  "PE7": "43",
  "XTAL32K1/PF0": "44",
  "XTAL32K2/PF1": "45",
  "PF2": "46",
  "PF3": "47",
  "PF4": "48",
  "PF5": "49",
  "~{RESET}/PF6": "50",
  "UPDI": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "PG4": "58",
  "PG5": "59",
  "PG6": "60",
  "PG7": "61",
  "XTALHF1/PA0": "62",
  "XTALHF2/PA1": "63",
  "PA2": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VDD_6: "power_in", GND_7: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_21: "passive", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VDD_56: "passive", GND_57: "passive", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DB64x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128kB Flash, 16kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR128DB64x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR128DB28-32-48-64-DataSheet-DS40002247A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class AVR128DB64x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "VDD_6": "6",
  "GND_7": "7",
  "PB0": "8",
  "PB1": "9",
  "PB2": "10",
  "PB3": "11",
  "PB4": "12",
  "PB5": "13",
  "PB6": "14",
  "PB7": "15",
  "PC0": "16",
  "PC1": "17",
  "PC2": "18",
  "PC3": "19",
  "VDDIO2": "20",
  "GND_21": "21",
  "PC4": "22",
  "PC5": "23",
  "PC6": "24",
  "PC7": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PD4": "30",
  "PD5": "31",
  "PD6": "32",
  "VREFA/PD7": "33",
  "AVDD": "34",
  "AGND": "35",
  "PE0": "36",
  "PE1": "37",
  "PE2": "38",
  "PE3": "39",
  "PE4": "40",
  "PE5": "41",
  "PE6": "42",
  "PE7": "43",
  "XTAL32K1/PF0": "44",
  "XTAL32K2/PF1": "45",
  "PF2": "46",
  "PF3": "47",
  "PF4": "48",
  "PF5": "49",
  "~{RESET}/PF6": "50",
  "UPDI": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "VDD_56": "56",
  "GND_57": "57",
  "PG4": "58",
  "PG5": "59",
  "PG6": "60",
  "PG7": "61",
  "XTALHF1/PA0": "62",
  "XTALHF2/PA1": "63",
  "PA2": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VDD_6: "power_in", GND_7: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_21: "passive", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VDD_56: "passive", GND_57: "passive", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR128DB64x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Touch Sensing, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DA28x-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DA28-32-48-Data-Sheet-40002228B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class AVR32DA28x_xSP extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "GND_15": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND_21": "21",
  "PA0": "22",
  "PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_15: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_21: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DA28x-xSP";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Touch Sensing, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DA28x-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DA28-32-48-Data-Sheet-40002228B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class AVR32DA28x_xSS extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "GND_15": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND_21": "21",
  "PA0": "22",
  "PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_15: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_21: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DA28x-xSS";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DB28x-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DB28-32-48-DataSheet-DS40002301A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class AVR32DB28x_xSP extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "VDDIO2": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "AGND": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND": "21",
  "XTALHF1/PA0": "22",
  "XTALHF2/PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DB28x-xSP";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32kB Flash, 4kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR32DB28x-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR32DB28-32-48-DataSheet-DS40002301A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class AVR32DB28x_xSS extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "VDDIO2": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "AGND": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND": "21",
  "XTALHF1/PA0": "22",
  "XTALHF2/PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR32DB28x-xSS";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Touch Sensing, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DA28x-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DA28-32-48-64-Data-Sheet-40002233B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class AVR64DA28x_xSO extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "GND_15": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND_21": "21",
  "PA0": "22",
  "PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_15: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_21: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DA28x-xSO";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Touch Sensing, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DA28x-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DA28-32-48-64-Data-Sheet-40002233B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class AVR64DA28x_xSP extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "GND_15": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND_21": "21",
  "PA0": "22",
  "PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_15: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_21: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DA28x-xSP";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Touch Sensing, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DA28x-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DA28-32-48-64-Data-Sheet-40002233B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class AVR64DA28x_xSS extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "GND_15": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND_21": "21",
  "PA0": "22",
  "PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_15: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_21: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DA28x-xSS";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Touch Sensing, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DA32x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DA28-32-48-64-Data-Sheet-40002233B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class AVR64DA32x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "PD0": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "GND_19": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND_29": "29",
  "PA0": "30",
  "PA1": "31",
  "PA2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_19: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_29: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DA32x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Touch Sensing, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DA32x-xRXB`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*EP3.1x3.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DA28-32-48-64-Data-Sheet-40002233B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AVR64DA32x_xRXB extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "PD0": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "GND_19": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND_29": "29",
  "PA0": "30",
  "PA1": "31",
  "PA2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_19: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_29: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DA32x-xRXB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Touch Sensing, VQFN-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DA48x-x6LX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*EP4.2x4.2mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DA28-32-48-64-Data-Sheet-40002233B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm.
 */
export class AVR64DA48x_x6LX extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDD_14": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "GND_29": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD_42": "42",
  "GND_43": "43",
  "PA0": "44",
  "PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_14: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_29: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD_42: "passive", GND_43: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DA48x-x6LX";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Touch Sensing, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DA48x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DA28-32-48-64-Data-Sheet-40002233B.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DA.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class AVR64DA48x_xPT extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDD_14": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "GND_29": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD_42": "42",
  "GND_43": "43",
  "PA0": "44",
  "PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDD_14: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", GND_29: "passive", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD_42: "passive", GND_43: "passive", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DA48x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DB28x-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DB28-32-48-64-DataSheet-DS40002300A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class AVR64DB28x_xSO extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "VDDIO2": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "AGND": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND": "21",
  "XTALHF1/PA0": "22",
  "XTALHF2/PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DB28x-xSO";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DB28x-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DB28-32-48-64-DataSheet-DS40002300A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class AVR64DB28x_xSP extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "VDDIO2": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "AGND": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND": "21",
  "XTALHF1/PA0": "22",
  "XTALHF2/PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DB28x-xSP";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DB28x-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DB28-32-48-64-DataSheet-DS40002300A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class AVR64DB28x_xSS extends Component.withPins({
  "PA7": "1",
  "PC0": "2",
  "PC1": "3",
  "PC2": "4",
  "PC3": "5",
  "VDDIO2": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "VREFA/PD7": "13",
  "AVDD": "14",
  "AGND": "15",
  "XTAL32K1/PF0": "16",
  "XTAL32K2/PF1": "17",
  "~{RESET}/PF6": "18",
  "UPDI": "19",
  "VDD": "20",
  "GND": "21",
  "XTALHF1/PA0": "22",
  "XTALHF2/PA1": "23",
  "PA2": "24",
  "PA3": "25",
  "PA4": "26",
  "PA5": "27",
  "PA6": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DB28x-xSS";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DB32x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DB28-32-48-64-DataSheet-DS40002300A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class AVR64DB32x_xPT extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "VDDIO2": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "AGND": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND": "29",
  "XTALHF1/PA0": "30",
  "XTALHF2/PA1": "31",
  "PA2": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "input", UPDI: "input", VDD: "power_in", GND: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DB32x-xPT";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DB32x-xRXB`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*EP3.1x3.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DB28-32-48-64-DataSheet-DS40002300A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class AVR64DB32x_xRXB extends Component.withPins({
  "PA3": "1",
  "PA4": "2",
  "PA5": "3",
  "PA6": "4",
  "PA7": "5",
  "PC0": "6",
  "PC1": "7",
  "PC2": "8",
  "PC3": "9",
  "VDDIO2": "10",
  "PD1": "11",
  "PD2": "12",
  "PD3": "13",
  "PD4": "14",
  "PD5": "15",
  "PD6": "16",
  "VREFA/PD7": "17",
  "AVDD": "18",
  "AGND": "19",
  "XTAL32K1/PF0": "20",
  "XTAL32K2/PF1": "21",
  "PF2": "22",
  "PF3": "23",
  "PF4": "24",
  "PF5": "25",
  "~{RESET}/PF6": "26",
  "UPDI": "27",
  "VDD": "28",
  "GND_29": "29",
  "XTALHF1/PA0": "30",
  "XTALHF2/PA1": "31",
  "PA2": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "input", UPDI: "input", VDD: "power_in", GND_29: "power_in", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DB32x-xRXB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, VQFN-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DB48x-x6LX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*EP4.2x4.2mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DB28-32-48-64-DataSheet-DS40002300A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm.
 */
export class AVR64DB48x_x6LX extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDDIO2": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "AGND": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD": "42",
  "GND_43": "43",
  "XTALHF1/PA0": "44",
  "XTALHF2/PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_43: "passive", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DB48x-x6LX";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64kB Flash, 8kB SRAM, EEPROM with Op Amps and Multi-Voltage I/O, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_AVR_Dx:AVR64DB48x-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/AVR64DB28-32-48-64-DataSheet-DS40002300A.pdf
 * Keywords: AVR 8bit Microcontroller AVR-DB.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class AVR64DB48x_xPT extends Component.withPins({
  "PA5": "1",
  "PA6": "2",
  "PA7": "3",
  "PB0": "4",
  "PB1": "5",
  "PB2": "6",
  "PB3": "7",
  "PB4": "8",
  "PB5": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VDDIO2": "14",
  "GND_15": "15",
  "PC4": "16",
  "PC5": "17",
  "PC6": "18",
  "PC7": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "PD6": "26",
  "VREFA/PD7": "27",
  "AVDD": "28",
  "AGND": "29",
  "PE0": "30",
  "PE1": "31",
  "PE2": "32",
  "PE3": "33",
  "XTAL32K1/PF0": "34",
  "XTAL32K2/PF1": "35",
  "PF2": "36",
  "PF3": "37",
  "PF4": "38",
  "PF5": "39",
  "~{RESET}/PF6": "40",
  "UPDI": "41",
  "VDD": "42",
  "GND_43": "43",
  "XTALHF1/PA0": "44",
  "XTALHF2/PA1": "45",
  "PA2": "46",
  "PA3": "47",
  "PA4": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VDDIO2: "power_in", GND_15: "power_in", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "VREFA/PD7": "bidirectional", AVDD: "power_in", AGND: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", "XTAL32K1/PF0": "bidirectional", "XTAL32K2/PF1": "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", "~{RESET}/PF6": "bidirectional", UPDI: "input", VDD: "power_in", GND_43: "passive", "XTALHF1/PA0": "bidirectional", "XTALHF2/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR_Dx:AVR64DB48x-xPT";
  override referencePrefix = "U";
}
