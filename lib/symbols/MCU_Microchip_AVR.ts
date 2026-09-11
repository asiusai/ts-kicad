// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 16MHz, 32kB Flash, 2kB SRAM, 1kB EEPROM, JTAG, CAN, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90CAN32-16A`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7679.pdf
 * Keywords: AVR 8bit Microcontroller MegaAVR.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class AT90CAN32_16A extends Component.withPins({
  "NC": "1",
  "PE0": "2",
  "PE1": "3",
  "PE2": "4",
  "PE3": "5",
  "PE4": "6",
  "PE5": "7",
  "PE6": "8",
  "PE7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PG3": "18",
  "PG4": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PG0": "33",
  "PG1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PG2": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "AGND": "63",
  "AVCC": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PG2: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", AGND: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90CAN32-16A";
  override referencePrefix = "U";
}

/**
 * 16MHz, 128kB Flash, 4kB SRAM, 4kB EEPROM, JTAG, CAN, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90CAN128-16A`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7679.pdf
 * Keywords: AVR 8bit Microcontroller MegaAVR.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class AT90CAN128_16A extends Component.withPins({
  "NC": "1",
  "PE0": "2",
  "PE1": "3",
  "PE2": "4",
  "PE3": "5",
  "PE4": "6",
  "PE5": "7",
  "PE6": "8",
  "PE7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PG3": "18",
  "PG4": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PG0": "33",
  "PG1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PG2": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "AGND": "63",
  "AVCC": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PG2: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", AGND: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90CAN128-16A";
  override referencePrefix = "U";
}

/**
 * 16MHz, 32kB Flash, 2kB SRAM, 1kB EEPROM, JTAG, CAN, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90CAN32-16M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7679.pdf
 * Keywords: AVR 8bit Microcontroller MegaAVR.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.5x7.5mm.
 */
export class AT90CAN32_16M extends Component.withPins({
  "NC": "1",
  "PE0": "2",
  "PE1": "3",
  "PE2": "4",
  "PE3": "5",
  "PE4": "6",
  "PE5": "7",
  "PE6": "8",
  "PE7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PG3": "18",
  "PG4": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PG0": "33",
  "PG1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PG2": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "AGND": "63",
  "AVCC": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PG2: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", AGND: "power_in", AVCC: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90CAN32-16M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 128kB Flash, 4kB SRAM, 4kB EEPROM, JTAG, CAN, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90CAN128-16M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7679.pdf
 * Keywords: AVR 8bit Microcontroller MegaAVR.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.5x7.5mm.
 */
export class AT90CAN128_16M extends Component.withPins({
  "NC": "1",
  "PE0": "2",
  "PE1": "3",
  "PE2": "4",
  "PE3": "5",
  "PE4": "6",
  "PE5": "7",
  "PE6": "8",
  "PE7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PG3": "18",
  "PG4": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PG0": "33",
  "PG1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PG2": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "AGND": "63",
  "AVCC": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PG2: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", AGND: "power_in", AVCC: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90CAN128-16M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 64kB Flash, 4kB SRAM, 2kB EEPROM, JTAG, CAN, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90CAN64-16A`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7679.pdf
 * Keywords: AVR 8bit Microcontroller MegaAVR.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class AT90CAN64_16A extends Component.withPins({
  "NC": "1",
  "PE0": "2",
  "PE1": "3",
  "PE2": "4",
  "PE3": "5",
  "PE4": "6",
  "PE5": "7",
  "PE6": "8",
  "PE7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PG3": "18",
  "PG4": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PG0": "33",
  "PG1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PG2": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "AGND": "63",
  "AVCC": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PG2: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", AGND: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90CAN64-16A";
  override referencePrefix = "U";
}

/**
 * 16MHz, 64kB Flash, 4kB SRAM, 2kB EEPROM, JTAG, CAN, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90CAN64-16M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7679.pdf
 * Keywords: AVR 8bit Microcontroller MegaAVR.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.5x7.5mm.
 */
export class AT90CAN64_16M extends Component.withPins({
  "NC": "1",
  "PE0": "2",
  "PE1": "3",
  "PE2": "4",
  "PE3": "5",
  "PE4": "6",
  "PE5": "7",
  "PE6": "8",
  "PE7": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PG3": "18",
  "PG4": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PG0": "33",
  "PG1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PG2": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "AGND": "63",
  "AVCC": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PG2: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", AGND: "power_in", AVCC: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90CAN64-16M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8kB Flash, 512B SRAM, 512B EEPROM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90PWM1-16M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc4378.pdf
 * Keywords: AVR 8bit Microcontroller LightingAVR PWM.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_7x7mm_P0.65mm_EP4.65x4.65mm.
 */
export class AT90PWM1_16M extends Component.withPins({
  "PD2": "1",
  "PD3": "2",
  "NC_3": "3",
  "VCC": "4",
  "GND_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "PB0": "8",
  "PB1": "9",
  "XTAL1/PE1": "10",
  "XTAL2/PE2": "11",
  "PD4": "12",
  "PD5": "13",
  "PD6": "14",
  "PD7": "15",
  "PB2": "16",
  "NC_17": "17",
  "NC_18": "18",
  "AVCC": "19",
  "AGND": "20",
  "AREF": "21",
  "NC_22": "22",
  "PB3": "23",
  "PB4": "24",
  "NC_25": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
  "PD0": "29",
  "NC_30": "30",
  "~{RESET}/PE0": "31",
  "PD1": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD2: "bidirectional", PD3: "bidirectional", NC_3: "no_connect", VCC: "power_in", GND_5: "power_in", NC_6: "no_connect", NC_7: "no_connect", PB0: "bidirectional", PB1: "bidirectional", "XTAL1/PE1": "bidirectional", "XTAL2/PE2": "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB2: "bidirectional", NC_17: "no_connect", NC_18: "no_connect", AVCC: "power_in", AGND: "power_in", AREF: "passive", NC_22: "no_connect", PB3: "bidirectional", PB4: "bidirectional", NC_25: "no_connect", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PD0: "bidirectional", NC_30: "no_connect", "~{RESET}/PE0": "bidirectional", PD1: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90PWM1-16M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8kB Flash, 512B SRAM, 512B EEPROM, SOIC-24
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90PWM1-16S`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc4378.pdf
 * Keywords: AVR 8bit Microcontroller LightingAVR PWM.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 */
export class AT90PWM1_16S extends Component.withPins({
  "PD0": "1",
  "~{RESET}/PE0": "2",
  "PD1": "3",
  "PD2": "4",
  "PD3": "5",
  "VCC": "6",
  "GND": "7",
  "PB0": "8",
  "PB1": "9",
  "XTAL1/PE1": "10",
  "XTAL2/PE2": "11",
  "PD4": "12",
  "PD5": "13",
  "PD6": "14",
  "PD7": "15",
  "PB2": "16",
  "AVCC": "17",
  "AGND": "18",
  "AREF": "19",
  "PB3": "20",
  "PB4": "21",
  "PB5": "22",
  "PB6": "23",
  "PB7": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD0: "bidirectional", "~{RESET}/PE0": "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", VCC: "power_in", GND: "power_in", PB0: "bidirectional", PB1: "bidirectional", "XTAL1/PE1": "bidirectional", "XTAL2/PE2": "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB2: "bidirectional", AVCC: "power_in", AGND: "power_in", AREF: "passive", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90PWM1-16S";
  override referencePrefix = "U";
}

/**
 * 16MHz, 64kB Flash, 4kB SRAM, 2kB EEPROM, USB 2.0, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB646-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7593.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class AT90USB646_A extends Component.withPins({
  "PE6": "1",
  "PE7": "2",
  "UVCC": "3",
  "D-": "4",
  "D+": "5",
  "UGND": "6",
  "UCAP": "7",
  "VBUS": "8",
  "PE3": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PE4": "18",
  "PE5": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PE0": "33",
  "PE1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PE2/~{HWB}": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "GND_63": "63",
  "AVCC": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE6: "bidirectional", PE7: "bidirectional", UVCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", UGND: "power_in", UCAP: "passive", VBUS: "input", PE3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PE2/~{HWB}": "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", GND_63: "passive", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB646-A";
  override referencePrefix = "U";
}

/**
 * 16MHz, 128kB Flash, 8kB SRAM, 4kB EEPROM, USB 2.0, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB1286-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7593.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class AT90USB1286_A extends Component.withPins({
  "PE6": "1",
  "PE7": "2",
  "UVCC": "3",
  "D-": "4",
  "D+": "5",
  "UGND": "6",
  "UCAP": "7",
  "VBUS": "8",
  "PE3": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PE4": "18",
  "PE5": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PE0": "33",
  "PE1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PE2/~{HWB}": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "GND_63": "63",
  "AVCC": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE6: "bidirectional", PE7: "bidirectional", UVCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", UGND: "power_in", UCAP: "passive", VBUS: "input", PE3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PE2/~{HWB}": "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", GND_63: "passive", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB1286-A";
  override referencePrefix = "U";
}

/**
 * 16MHz, 64kB Flash, 4kB SRAM, 2kB EEPROM, USB 2.0, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB646-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7593.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.5x7.5mm.
 */
export class AT90USB646_M extends Component.withPins({
  "PE6": "1",
  "PE7": "2",
  "UVCC": "3",
  "D-": "4",
  "D+": "5",
  "UGND": "6",
  "UCAP": "7",
  "VBUS": "8",
  "PE3": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PE4": "18",
  "PE5": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PE0": "33",
  "PE1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PE2/~{HWB}": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "GND_63": "63",
  "AVCC": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE6: "bidirectional", PE7: "bidirectional", UVCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", UGND: "power_in", UCAP: "passive", VBUS: "input", PE3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PE2/~{HWB}": "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", GND_63: "passive", AVCC: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB646-M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 128kB Flash, 8kB SRAM, 4kB EEPROM, USB 2.0, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB1286-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7593.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.5x7.5mm.
 */
export class AT90USB1286_M extends Component.withPins({
  "PE6": "1",
  "PE7": "2",
  "UVCC": "3",
  "D-": "4",
  "D+": "5",
  "UGND": "6",
  "UCAP": "7",
  "VBUS": "8",
  "PE3": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PE4": "18",
  "PE5": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PE0": "33",
  "PE1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PE2/~{HWB}": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "GND_63": "63",
  "AVCC": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE6: "bidirectional", PE7: "bidirectional", UVCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", UGND: "power_in", UCAP: "passive", VBUS: "input", PE3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PE2/~{HWB}": "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", GND_63: "passive", AVCC: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB1286-M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 128kB Flash, 8kB SRAM, 4kB EEPROM, USB 2.0 OTG, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB1287-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7593.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class AT90USB1287_A extends Component.withPins({
  "PE6": "1",
  "PE7": "2",
  "UVCC": "3",
  "D-": "4",
  "D+": "5",
  "UGND": "6",
  "UCAP": "7",
  "VBUS": "8",
  "PE3": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PE4": "18",
  "PE5": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PE0": "33",
  "PE1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PE2/~{HWB}": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "GND_63": "63",
  "AVCC": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE6: "bidirectional", PE7: "bidirectional", UVCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", UGND: "power_in", UCAP: "passive", VBUS: "input", PE3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PE2/~{HWB}": "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", GND_63: "passive", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB1287-A";
  override referencePrefix = "U";
}

/**
 * 16MHz, 128kB Flash, 8kB SRAM, 4kB EEPROM, USB 2.0 OTG, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB1287-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7593.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.5x7.5mm.
 */
export class AT90USB1287_M extends Component.withPins({
  "PE6": "1",
  "PE7": "2",
  "UVCC": "3",
  "D-": "4",
  "D+": "5",
  "UGND": "6",
  "UCAP": "7",
  "VBUS": "8",
  "PE3": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PE4": "18",
  "PE5": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PE0": "33",
  "PE1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PE2/~{HWB}": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "GND_63": "63",
  "AVCC": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE6: "bidirectional", PE7: "bidirectional", UVCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", UGND: "power_in", UCAP: "passive", VBUS: "input", PE3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PE2/~{HWB}": "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", GND_63: "passive", AVCC: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB1287-M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 16kB Flash, 512B SRAM, 512B EEPROM, USB 2.0, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB162-16A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7707.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class AT90USB162_16A extends Component.withPins({
  "XTAL1": "1",
  "PC0/XTAL2": "2",
  "GND": "3",
  "VCC": "4",
  "PC2": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "~{HWB}/PD7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "PB3": "17",
  "PB4": "18",
  "PB5": "19",
  "PB6": "20",
  "PB7": "21",
  "PC7": "22",
  "PC6": "23",
  "PC1/~{RESET}": "24",
  "PC5": "25",
  "PC4": "26",
  "UCAP": "27",
  "UGND": "28",
  "D+": "29",
  "D-": "30",
  "UVCC": "31",
  "AVCC": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XTAL1: "input", "PC0/XTAL2": "bidirectional", GND: "power_in", VCC: "power_in", PC2: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "~{HWB}/PD7": "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", "PC1/~{RESET}": "bidirectional", PC5: "bidirectional", PC4: "bidirectional", UCAP: "passive", UGND: "power_in", "D+": "bidirectional", "D-": "bidirectional", UVCC: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB162-16A";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8kB Flash, 512B SRAM, 512B EEPROM, USB 2.0, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB82-16M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7707.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class AT90USB82_16M extends Component.withPins({
  "XTAL1": "1",
  "PC0/XTAL2": "2",
  "GND_3": "3",
  "VCC": "4",
  "PC2": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "~{HWB}/PD7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "PB3": "17",
  "PB4": "18",
  "PB5": "19",
  "PB6": "20",
  "PB7": "21",
  "PC7": "22",
  "PC6": "23",
  "PC1/~{RESET}": "24",
  "PC5": "25",
  "PC4": "26",
  "UCAP": "27",
  "UGND": "28",
  "D+": "29",
  "D-": "30",
  "UVCC": "31",
  "AVCC": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XTAL1: "input", "PC0/XTAL2": "bidirectional", GND_3: "power_in", VCC: "power_in", PC2: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "~{HWB}/PD7": "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", "PC1/~{RESET}": "bidirectional", PC5: "bidirectional", PC4: "bidirectional", UCAP: "passive", UGND: "power_in", "D+": "bidirectional", "D-": "bidirectional", UVCC: "power_in", AVCC: "power_in", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB82-16M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 16kB Flash, 512B SRAM, 512B EEPROM, USB 2.0, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB162-16M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7707.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class AT90USB162_16M extends Component.withPins({
  "XTAL1": "1",
  "PC0/XTAL2": "2",
  "GND_3": "3",
  "VCC": "4",
  "PC2": "5",
  "PD0": "6",
  "PD1": "7",
  "PD2": "8",
  "PD3": "9",
  "PD4": "10",
  "PD5": "11",
  "PD6": "12",
  "~{HWB}/PD7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "PB3": "17",
  "PB4": "18",
  "PB5": "19",
  "PB6": "20",
  "PB7": "21",
  "PC7": "22",
  "PC6": "23",
  "PC1/~{RESET}": "24",
  "PC5": "25",
  "PC4": "26",
  "UCAP": "27",
  "UGND": "28",
  "D+": "29",
  "D-": "30",
  "UVCC": "31",
  "AVCC": "32",
  "GND_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XTAL1: "input", "PC0/XTAL2": "bidirectional", GND_3: "power_in", VCC: "power_in", PC2: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", "~{HWB}/PD7": "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", "PC1/~{RESET}": "bidirectional", PC5: "bidirectional", PC4: "bidirectional", UCAP: "passive", UGND: "power_in", "D+": "bidirectional", "D-": "bidirectional", UVCC: "power_in", AVCC: "power_in", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB162-16M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 64kB Flash, 4kB SRAM, 2kB EEPROM, USB 2.0 OTG, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB647-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7593.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class AT90USB647_A extends Component.withPins({
  "PE6": "1",
  "PE7": "2",
  "UVCC": "3",
  "D-": "4",
  "D+": "5",
  "UGND": "6",
  "UCAP": "7",
  "VBUS": "8",
  "PE3": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PE4": "18",
  "PE5": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PE0": "33",
  "PE1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PE2/~{HWB}": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "GND_63": "63",
  "AVCC": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE6: "bidirectional", PE7: "bidirectional", UVCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", UGND: "power_in", UCAP: "passive", VBUS: "input", PE3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PE2/~{HWB}": "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", GND_63: "passive", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB647-A";
  override referencePrefix = "U";
}

/**
 * 16MHz, 64kB Flash, 4kB SRAM, 2kB EEPROM, USB 2.0 OTG, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_AVR:AT90USB647-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc7593.pdf
 * Keywords: AVR 8bit Microcontroller USB.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP7.5x7.5mm.
 */
export class AT90USB647_M extends Component.withPins({
  "PE6": "1",
  "PE7": "2",
  "UVCC": "3",
  "D-": "4",
  "D+": "5",
  "UGND": "6",
  "UCAP": "7",
  "VBUS": "8",
  "PE3": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PE4": "18",
  "PE5": "19",
  "~{RESET}": "20",
  "VCC_21": "21",
  "GND_22": "22",
  "XTAL2": "23",
  "XTAL1": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
  "PE0": "33",
  "PE1": "34",
  "PC0": "35",
  "PC1": "36",
  "PC2": "37",
  "PC3": "38",
  "PC4": "39",
  "PC5": "40",
  "PC6": "41",
  "PC7": "42",
  "PE2/~{HWB}": "43",
  "PA7": "44",
  "PA6": "45",
  "PA5": "46",
  "PA4": "47",
  "PA3": "48",
  "PA2": "49",
  "PA1": "50",
  "PA0": "51",
  "VCC_52": "52",
  "GND_53": "53",
  "PF7": "54",
  "PF6": "55",
  "PF5": "56",
  "PF4": "57",
  "PF3": "58",
  "PF2": "59",
  "PF1": "60",
  "PF0": "61",
  "AREF": "62",
  "GND_63": "63",
  "AVCC": "64",
  "GND_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE6: "bidirectional", PE7: "bidirectional", UVCC: "power_in", "D-": "bidirectional", "D+": "bidirectional", UGND: "power_in", UCAP: "passive", VBUS: "input", PE3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", "~{RESET}": "input", VCC_21: "power_in", GND_22: "power_in", XTAL2: "output", XTAL1: "input", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PE2/~{HWB}": "bidirectional", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VCC_52: "passive", GND_53: "passive", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", AREF: "passive", GND_63: "passive", AVCC: "power_in", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_AVR:AT90USB647-M";
  override referencePrefix = "U";
}
