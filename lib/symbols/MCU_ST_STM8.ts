// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 16MHz, 8K Flash, 1K RAM, 640 EEPROM, USART, LIN,  I²C, SPI, ADC, TSSOP-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8AF6223`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.st.com/resource/en/datasheet/stm8af6223.pdf
 * Keywords: STM8 Microcontroller Automotive Line.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM8AF6223 extends Component.withPins({
  "PD4": "1",
  "PD5": "2",
  "PD6": "3",
  "NRST": "4",
  "PA1": "5",
  "PA2": "6",
  "VSS": "7",
  "VCAP": "8",
  "VDD": "9",
  "PA3": "10",
  "PB5": "11",
  "PB4": "12",
  "PC3": "13",
  "PC4": "14",
  "PC5": "15",
  "PC6": "16",
  "PC7": "17",
  "PD1": "18",
  "PD2": "19",
  "PD3": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSS: "power_in", VCAP: "input", VDD: "power_in", PA3: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8AF6223";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8K Flash, 1K RAM, 640 EEPROM, USART, LIN,  I²C, SPI, ADC, TSSOP-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8AF6223A`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.st.com/resource/en/datasheet/stm8af6223.pdf
 * Keywords: STM8 Microcontroller Automotive Line.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM8AF6223A extends Component.withPins({
  "PD4": "1",
  "PD5": "2",
  "PD6": "3",
  "NRST": "4",
  "PA1": "5",
  "PA2": "6",
  "VSS": "7",
  "VCAP": "8",
  "VDD": "9",
  "PB5": "10",
  "PB4": "11",
  "PB1": "12",
  "PB0": "13",
  "PC4": "14",
  "PC5": "15",
  "PC6": "16",
  "PC7": "17",
  "PD1": "18",
  "PD2": "19",
  "PD3": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSS: "power_in", VCAP: "input", VDD: "power_in", PB5: "bidirectional", PB4: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8AF6223A";
  override referencePrefix = "U";
}

/**
 * Automotive 8-bit ultra-low-power MCU, 64-Kbyte Flash, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8AL3188T`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8al3188.pdf
 * Keywords: STM8 automotive ultra-low-power.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8AL3188T extends Component.withPins({
  "PA0": "1",
  "NRST/PA1": "2",
  "PA2": "3",
  "PA3": "4",
  "PA4": "5",
  "PA5": "6",
  "PA6": "7",
  "PA7": "8",
  "VSS1/VSSA/VREF-": "9",
  "VDD1": "10",
  "VDDA": "11",
  "VREF+": "12",
  "RES1": "13",
  "PE0": "14",
  "PE1": "15",
  "PE2": "16",
  "PE3": "17",
  "PE4": "18",
  "PE5": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PB0": "24",
  "PB1": "25",
  "PB2": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PF0": "32",
  "PD4": "33",
  "PD5": "34",
  "PD6": "35",
  "PD7": "36",
  "PC0": "37",
  "PC1": "38",
  "VDD2": "39",
  "VSS2": "40",
  "PC2": "41",
  "PC3": "42",
  "PC4": "43",
  "PC5": "44",
  "PC6": "45",
  "PC7": "46",
  "PE6": "47",
  "PE7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSS1/VSSA/VREF-": "power_in", VDD1: "power_in", VDDA: "power_in", "VREF+": "power_in", RES1: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF0: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDD2: "power_in", VSS2: "power_in", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8AL3188T";
  override referencePrefix = "U";
}

/**
 * Automotive 8-bit ultra-low-power MCU, 64-Kbyte Flash, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8AL3189T`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8al3188.pdf
 * Keywords: STM8 automotive ultra-low-power.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8AL3189T extends Component.withPins({
  "PA0": "1",
  "NRST/PA1": "2",
  "PA2": "3",
  "PA3": "4",
  "PA4": "5",
  "PA5": "6",
  "PA6": "7",
  "PA7": "8",
  "VSSA/VREF-": "9",
  "VSS1": "10",
  "VDD1": "11",
  "VDDA": "12",
  "VREF+": "13",
  "PG0": "14",
  "PG1": "15",
  "PG2": "16",
  "PG3": "17",
  "RES1": "18",
  "PE0": "19",
  "PE1": "20",
  "PE2": "21",
  "PE3": "22",
  "PE4": "23",
  "PE5": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "VDD3": "29",
  "VSS3": "30",
  "PB0": "31",
  "PB1": "32",
  "PB2": "33",
  "PB3": "34",
  "PB4": "35",
  "PB5": "36",
  "PB6": "37",
  "PB7": "38",
  "PF0": "39",
  "PF1": "40",
  "PF4": "41",
  "PF5": "42",
  "PF6": "43",
  "PF7": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
  "PG4": "49",
  "PG5": "50",
  "PG6": "51",
  "PG7": "52",
  "PC0": "53",
  "PC1": "54",
  "VDD2": "55",
  "VSS2": "56",
  "PC2": "57",
  "PC3": "58",
  "PC4": "59",
  "PC5": "60",
  "PC6": "61",
  "PC7": "62",
  "PE6": "63",
  "PE7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSSA/VREF-": "power_in", VSS1: "power_in", VDD1: "power_in", VDDA: "power_in", "VREF+": "power_in", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", RES1: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", VDD3: "power_in", VSS3: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDD2: "power_in", VSS2: "power_in", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8AL3189T";
  override referencePrefix = "U";
}

/**
 * Automotive 8-bit ultra-low-power MCU, 64-Kbyte Flash, LQFP-80
 *
 * KiCad symbol: `MCU_ST_STM8:STM8AL318AT`. Reference prefix: `U`.
 * Footprint filters: *LQFP*14x14mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8al3188.pdf
 * Keywords: STM8 automotive ultra-low-power.
 * Default footprint: Package_QFP:LQFP-80_14x14mm_P0.65mm.
 */
export class STM8AL318AT extends Component.withPins({
  "PH0": "1",
  "PH1": "2",
  "PH2": "3",
  "PH3": "4",
  "PA0": "5",
  "NRST/PA1": "6",
  "PA2": "7",
  "PA3": "8",
  "PA4": "9",
  "PA5": "10",
  "PA6": "11",
  "PA7": "12",
  "VSSA/VREF-": "13",
  "VSS1": "14",
  "VDD1": "15",
  "VDDA": "16",
  "VREF+": "17",
  "PG0": "18",
  "PG1": "19",
  "PG2": "20",
  "PG3": "21",
  "RES1": "22",
  "PE0": "23",
  "PE1": "24",
  "PE2": "25",
  "PE3": "26",
  "PE4": "27",
  "PE5": "28",
  "PD0": "29",
  "PD1": "30",
  "PD2": "31",
  "PD3": "32",
  "PH4": "33",
  "PH5": "34",
  "PH6": "35",
  "PH7": "36",
  "VDD3": "37",
  "VSS3": "38",
  "PB0": "39",
  "PB1": "40",
  "PB2": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "VDD4": "47",
  "VSS4": "48",
  "PF0": "49",
  "PF1": "50",
  "PF2": "51",
  "PF3": "52",
  "PF4": "53",
  "PF5": "54",
  "PF6": "55",
  "PF7": "56",
  "PD4": "57",
  "PD5": "58",
  "PD6": "59",
  "PD7": "60",
  "PG4": "61",
  "PG5": "62",
  "PG6": "63",
  "PG7": "64",
  "PC0": "65",
  "PC1": "66",
  "VDD2": "67",
  "VSS2": "68",
  "PC2": "69",
  "PC3": "70",
  "PC4": "71",
  "PC5": "72",
  "PC6": "73",
  "PC7": "74",
  "PE6": "75",
  "PE7": "76",
  "PI0": "77",
  "PI1": "78",
  "PI2": "79",
  "PI3": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PH0: "bidirectional", PH1: "bidirectional", PH2: "bidirectional", PH3: "bidirectional", PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSSA/VREF-": "power_in", VSS1: "power_in", VDD1: "power_in", VDDA: "power_in", "VREF+": "power_in", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", RES1: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PH4: "bidirectional", PH5: "bidirectional", PH6: "bidirectional", PH7: "bidirectional", VDD3: "power_in", VSS3: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD4: "power_in", VSS4: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDD2: "power_in", VSS2: "power_in", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PI0: "bidirectional", PI1: "bidirectional", PI2: "bidirectional", PI3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8AL318AT";
  override referencePrefix = "U";
}

/**
 * Automotive 8-bit ultra-low-power MCU, 64-Kbyte Flash with LCD, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8AL3L88T`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8al3188.pdf
 * Keywords: STM8 automotive ultra-low-power.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8AL3L88T extends Component.withPins({
  "PA0": "1",
  "NRST/PA1": "2",
  "PA2": "3",
  "PA3": "4",
  "PA4": "5",
  "PA5": "6",
  "PA6": "7",
  "PA7": "8",
  "VSS1/VSSA/VREF-": "9",
  "VDD1": "10",
  "VDDA": "11",
  "VREF+": "12",
  "VLCD": "13",
  "PE0": "14",
  "PE1": "15",
  "PE2": "16",
  "PE3": "17",
  "PE4": "18",
  "PE5": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PB0": "24",
  "PB1": "25",
  "PB2": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PF0": "32",
  "PD4": "33",
  "PD5": "34",
  "PD6": "35",
  "PD7": "36",
  "PC0": "37",
  "PC1": "38",
  "VDD2": "39",
  "VSS2": "40",
  "PC2": "41",
  "PC3": "42",
  "PC4": "43",
  "PC5": "44",
  "PC6": "45",
  "PC7": "46",
  "PE6": "47",
  "PE7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSS1/VSSA/VREF-": "power_in", VDD1: "power_in", VDDA: "power_in", "VREF+": "power_in", VLCD: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF0: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDD2: "power_in", VSS2: "power_in", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8AL3L88T";
  override referencePrefix = "U";
}

/**
 * Automotive 8-bit ultra-low-power MCU, 64-Kbyte Flash with LCD, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8AL3L89T`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8al3188.pdf
 * Keywords: STM8 automotive ultra-low-power.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8AL3L89T extends Component.withPins({
  "PA0": "1",
  "NRST/PA1": "2",
  "PA2": "3",
  "PA3": "4",
  "PA4": "5",
  "PA5": "6",
  "PA6": "7",
  "PA7": "8",
  "VSSA/VREF-": "9",
  "VSS1": "10",
  "VDD1": "11",
  "VDDA": "12",
  "VREF+": "13",
  "PG0": "14",
  "PG1": "15",
  "PG2": "16",
  "PG3": "17",
  "VLCD": "18",
  "PE0": "19",
  "PE1": "20",
  "PE2": "21",
  "PE3": "22",
  "PE4": "23",
  "PE5": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "VDD3": "29",
  "VSS3": "30",
  "PB0": "31",
  "PB1": "32",
  "PB2": "33",
  "PB3": "34",
  "PB4": "35",
  "PB5": "36",
  "PB6": "37",
  "PB7": "38",
  "PF0": "39",
  "PF1": "40",
  "PF4": "41",
  "PF5": "42",
  "PF6": "43",
  "PF7": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
  "PG4": "49",
  "PG5": "50",
  "PG6": "51",
  "PG7": "52",
  "PC0": "53",
  "PC1": "54",
  "VDD2": "55",
  "VSS2": "56",
  "PC2": "57",
  "PC3": "58",
  "PC4": "59",
  "PC5": "60",
  "PC6": "61",
  "PC7": "62",
  "PE6": "63",
  "PE7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSSA/VREF-": "power_in", VSS1: "power_in", VDD1: "power_in", VDDA: "power_in", "VREF+": "power_in", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VLCD: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", VDD3: "power_in", VSS3: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDD2: "power_in", VSS2: "power_in", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8AL3L89T";
  override referencePrefix = "U";
}

/**
 * Automotive 8-bit ultra-low-power MCU, 64-Kbyte Flash with LCD, LQFP-80
 *
 * KiCad symbol: `MCU_ST_STM8:STM8AL3L8AT`. Reference prefix: `U`.
 * Footprint filters: *LQFP*14x14mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8al3188.pdf
 * Keywords: STM8 automotive ultra-low-power.
 * Default footprint: Package_QFP:LQFP-80_14x14mm_P0.65mm.
 */
export class STM8AL3L8AT extends Component.withPins({
  "PH0": "1",
  "PH1": "2",
  "PH2": "3",
  "PH3": "4",
  "PA0": "5",
  "NRST/PA1": "6",
  "PA2": "7",
  "PA3": "8",
  "PA4": "9",
  "PA5": "10",
  "PA6": "11",
  "PA7": "12",
  "VSSA/VREF-": "13",
  "VSS1": "14",
  "VDD1": "15",
  "VDDA": "16",
  "VREF+": "17",
  "PG0": "18",
  "PG1": "19",
  "PG2": "20",
  "PG3": "21",
  "VLCD": "22",
  "PE0": "23",
  "PE1": "24",
  "PE2": "25",
  "PE3": "26",
  "PE4": "27",
  "PE5": "28",
  "PD0": "29",
  "PD1": "30",
  "PD2": "31",
  "PD3": "32",
  "PH4": "33",
  "PH5": "34",
  "PH6": "35",
  "PH7": "36",
  "VDD3": "37",
  "VSS3": "38",
  "PB0": "39",
  "PB1": "40",
  "PB2": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "VDD4": "47",
  "VSS4": "48",
  "PF0": "49",
  "PF1": "50",
  "PF2": "51",
  "PF3": "52",
  "PF4": "53",
  "PF5": "54",
  "PF6": "55",
  "PF7": "56",
  "PD4": "57",
  "PD5": "58",
  "PD6": "59",
  "PD7": "60",
  "PG4": "61",
  "PG5": "62",
  "PG6": "63",
  "PG7": "64",
  "PC0": "65",
  "PC1": "66",
  "VDD2": "67",
  "VSS2": "68",
  "PC2": "69",
  "PC3": "70",
  "PC4": "71",
  "PC5": "72",
  "PC6": "73",
  "PC7": "74",
  "PE6": "75",
  "PE7": "76",
  "PI0": "77",
  "PI1": "78",
  "PI2": "79",
  "PI3": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PH0: "bidirectional", PH1: "bidirectional", PH2: "bidirectional", PH3: "bidirectional", PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSSA/VREF-": "power_in", VSS1: "power_in", VDD1: "power_in", VDDA: "power_in", "VREF+": "power_in", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VLCD: "power_in", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PH4: "bidirectional", PH5: "bidirectional", PH6: "bidirectional", PH7: "bidirectional", VDD3: "power_in", VSS3: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD4: "power_in", VSS4: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDD2: "power_in", VSS2: "power_in", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PI0: "bidirectional", PI1: "bidirectional", PI2: "bidirectional", PI3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8AL3L8AT";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8K Flash, 1K RAM, 256 EEPROM, RTC, USART,  I²C, SPI, ADC, TSSOP-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L051F3P`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/DM00060484.pdf
 * Keywords: STM8L Microcontroller Value Line Low Power.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM8L051F3P extends Component.withPins({
  "PC5": "1",
  "PC6": "2",
  "PA0": "3",
  "PA1": "4",
  "PA2": "5",
  "PA3": "6",
  "VSS": "7",
  "VDD": "8",
  "PD0": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PC0": "18",
  "PC1": "19",
  "PC4": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC5: "bidirectional", PC6: "bidirectional", PA0: "power_in", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS: "power_in", VDD: "power_in", PD0: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L051F3P";
  override referencePrefix = "U";
}

/**
 * 16MHz, 2K Flash, 1.5K RAM, 2K EEPROM, USART,  I²C, SPI, ADC, UFQFPN-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L101F1U`. Reference prefix: `U`.
 * Footprint filters: ST?UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8l101f1.pdf
 * Keywords: STM8L Microcontroller Value Line Low Power.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM8L101F1U extends Component.withPins({
  "NRST/PA1": "1",
  "PA2": "2",
  "PA3": "3",
  "VSS": "4",
  "VDD": "5",
  "PD0": "6",
  "PB0": "7",
  "PB1": "8",
  "PB2": "9",
  "PB3": "10",
  "PB4": "11",
  "PB5": "12",
  "PB6": "13",
  "PB7": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PC4": "19",
  "PA0": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS: "power_in", VDD: "power_in", PD0: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L101F1U";
  override referencePrefix = "U";
}

/**
 * 16MHz, 4K Flash, 1.5K RAM, 2K EEPROM, USART,  I²C, SPI, ADC, TSSOP-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L101F2P`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/CD00220591.pdf
 * Keywords: STM8L Microcontroller Value Line Low Power.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM8L101F2P extends Component.withPins({
  "PC3": "1",
  "PC4": "2",
  "PA0": "3",
  "PA1": "4",
  "PA2": "5",
  "PA3": "6",
  "VSS": "7",
  "VDD": "8",
  "PD0": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PC0": "18",
  "PC1": "19",
  "PC2": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC3: "bidirectional", PC4: "bidirectional", PA0: "power_in", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS: "power_in", VDD: "power_in", PD0: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L101F2P";
  override referencePrefix = "U";
}

/**
 * 16MHz, 4K Flash, 1.5K RAM, 2K EEPROM, USART,  I²C, SPI, ADC, UFQFPN-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L101F2U`. Reference prefix: `U`.
 * Footprint filters: ST?UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8l101f1.pdf
 * Keywords: STM8L Microcontroller Value Line Low Power.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM8L101F2U extends Component.withPins({
  "NRST/PA1": "1",
  "PA2": "2",
  "PA3": "3",
  "VSS": "4",
  "VDD": "5",
  "PD0": "6",
  "PB0": "7",
  "PB1": "8",
  "PB2": "9",
  "PB3": "10",
  "PB4": "11",
  "PB5": "12",
  "PB6": "13",
  "PB7": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PC4": "19",
  "PA0": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS: "power_in", VDD: "power_in", PD0: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L101F2U";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8K Flash, 1.5K RAM, 2K EEPROM, USART, I²C, SPI, ADC, TSSOP-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L101F3P`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/CD00220591.pdf
 * Keywords: STM8L Microcontroller Value Line Low Power.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM8L101F3P extends Component.withPins({
  "PC3": "1",
  "PC4": "2",
  "PA0": "3",
  "PA1": "4",
  "PA2": "5",
  "PA3": "6",
  "VSS": "7",
  "VDD": "8",
  "PD0": "9",
  "PB0": "10",
  "PB1": "11",
  "PB2": "12",
  "PB3": "13",
  "PB4": "14",
  "PB5": "15",
  "PB6": "16",
  "PB7": "17",
  "PC0": "18",
  "PC1": "19",
  "PC2": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC3: "bidirectional", PC4: "bidirectional", PA0: "power_in", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS: "power_in", VDD: "power_in", PD0: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L101F3P";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8K Flash, 1.5K RAM, 2K EEPROM, USART,  I²C, SPI, ADC, UFQFPN-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L101F3U`. Reference prefix: `U`.
 * Footprint filters: ST?UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8l101f1.pdf
 * Keywords: STM8L Microcontroller Value Line Low Power.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM8L101F3U extends Component.withPins({
  "NRST/PA1": "1",
  "PA2": "2",
  "PA3": "3",
  "VSS": "4",
  "VDD": "5",
  "PD0": "6",
  "PB0": "7",
  "PB1": "8",
  "PB2": "9",
  "PB3": "10",
  "PB4": "11",
  "PB5": "12",
  "PB6": "13",
  "PB7": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PC4": "19",
  "PA0": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS: "power_in", VDD: "power_in", PD0: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L101F3U";
  override referencePrefix = "U";
}

/**
 * 8-bit ultra-low-power MCU, 4 KB Flash, 256 bytes data EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L151C2T`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8l151c3.pdf
 * Keywords: STM8 ultra-low-power.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8L151C2T extends Component.withPins({
  "PA0": "1",
  "NRST/PA1": "2",
  "PA2": "3",
  "PA3": "4",
  "PA4": "5",
  "PA5": "6",
  "PA6": "7",
  "PA7": "8",
  "VSS1/VSSA/VREF-": "9",
  "VDD": "10",
  "VDDA": "11",
  "VREF+": "12",
  "NC": "13",
  "PE0": "14",
  "PE1": "15",
  "PE2": "16",
  "PE3": "17",
  "PE4": "18",
  "PE5": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PB0": "24",
  "PB1": "25",
  "PB2": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PF0": "32",
  "PD4": "33",
  "PD5": "34",
  "PD6": "35",
  "PD7": "36",
  "PC0": "37",
  "PC1": "38",
  "VDDIO": "39",
  "VSSIO": "40",
  "PC2": "41",
  "PC3": "42",
  "PC4": "43",
  "PC5": "44",
  "PC6": "45",
  "PC7": "46",
  "PE6": "47",
  "PE7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSS1/VSSA/VREF-": "power_in", VDD: "power_in", VDDA: "power_in", "VREF+": "power_in", NC: "no_connect", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF0: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDDIO: "power_in", VSSIO: "power_in", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L151C2T";
  override referencePrefix = "U";
}

/**
 * 8-bit ultra-low-power MCU, 8 KB Flash, 256 bytes data EEPROM, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L151C3T`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8l151c3.pdf
 * Keywords: STM8 ultra-low-power.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8L151C3T extends Component.withPins({
  "PA0": "1",
  "NRST/PA1": "2",
  "PA2": "3",
  "PA3": "4",
  "PA4": "5",
  "PA5": "6",
  "PA6": "7",
  "PA7": "8",
  "VSS1/VSSA/VREF-": "9",
  "VDD": "10",
  "VDDA": "11",
  "VREF+": "12",
  "NC": "13",
  "PE0": "14",
  "PE1": "15",
  "PE2": "16",
  "PE3": "17",
  "PE4": "18",
  "PE5": "19",
  "PD0": "20",
  "PD1": "21",
  "PD2": "22",
  "PD3": "23",
  "PB0": "24",
  "PB1": "25",
  "PB2": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PF0": "32",
  "PD4": "33",
  "PD5": "34",
  "PD6": "35",
  "PD7": "36",
  "PC0": "37",
  "PC1": "38",
  "VDDIO": "39",
  "VSSIO": "40",
  "PC2": "41",
  "PC3": "42",
  "PC4": "43",
  "PC5": "44",
  "PC6": "45",
  "PC7": "46",
  "PE6": "47",
  "PE7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSS1/VSSA/VREF-": "power_in", VDD: "power_in", VDDA: "power_in", "VREF+": "power_in", NC: "no_connect", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF0: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDDIO: "power_in", VSSIO: "power_in", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L151C3T";
  override referencePrefix = "U";
}

/**
 * 16MHz, 64K Flash, 2K EEPROM, LCD, USART, I²C, SPI, ADC, DAC, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L152R8T`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8l152r8.pdf
 * Keywords: STM8L Microcontroller Low Power LCD.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8L152R8T extends Component.withPins({
  "GND_10": "10",
  "PE2": "21",
  "PE3": "22",
  "PE4": "23",
  "PE5": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "VDD_29": "29",
  "GND_30": "30",
  "PB0": "31",
  "PB1": "32",
  "PB2": "33",
  "PB3": "34",
  "PB4": "35",
  "PB5": "36",
  "PB6": "37",
  "PB7": "38",
  "PF0": "39",
  "PF1": "40",
  "PF4": "41",
  "PF5": "42",
  "PF6": "43",
  "PF7": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
  "PG4": "49",
  "PG5": "50",
  "PG6": "51",
  "PG7": "52",
  "PC0": "53",
  "PC1": "54",
  "VDD_55": "55",
  "GND_56": "56",
  "PC2": "57",
  "PC3": "58",
  "PC4": "59",
  "PC5": "60",
  "PC6": "61",
  "PC7": "62",
  "PE6": "63",
  "PE7": "64",
  "PA0": "1",
  "NRST/PA1": "2",
  "PA2": "3",
  "PA3": "4",
  "PA4": "5",
  "PA5": "6",
  "PA6": "7",
  "PA7": "8",
  "VSSA/VREF-": "9",
  "VDD_11": "11",
  "VDDA": "12",
  "VREF+": "13",
  "PG0": "14",
  "PG1": "15",
  "PG2": "16",
  "PG3": "17",
  "VLCD": "18",
  "PE0": "19",
  "PE1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_10: "passive", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", VDD_29: "power_in", GND_30: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDD_55: "power_in", GND_56: "passive", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSSA/VREF-": "power_in", VDD_11: "power_in", VDDA: "power_in", "VREF+": "power_in", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VLCD: "power_in", PE0: "bidirectional", PE1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L152R8T";
  override referencePrefix = "U";
}

/**
 * 16MHz, 32K Flash, 2K EEPROM, LCD, USART, I²C, SPI, ADC, DAC, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8L152R6T`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8l152r6.pdf
 * Keywords: STM8L Microcontroller Low Power LCD.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8L152R6T extends Component.withPins({
  "GND_10": "10",
  "PE2": "21",
  "PE3": "22",
  "PE4": "23",
  "PE5": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "VDD_29": "29",
  "GND_30": "30",
  "PB0": "31",
  "PB1": "32",
  "PB2": "33",
  "PB3": "34",
  "PB4": "35",
  "PB5": "36",
  "PB6": "37",
  "PB7": "38",
  "PF0": "39",
  "PF1": "40",
  "PF4": "41",
  "PF5": "42",
  "PF6": "43",
  "PF7": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
  "PG4": "49",
  "PG5": "50",
  "PG6": "51",
  "PG7": "52",
  "PC0": "53",
  "PC1": "54",
  "VDD_55": "55",
  "GND_56": "56",
  "PC2": "57",
  "PC3": "58",
  "PC4": "59",
  "PC5": "60",
  "PC6": "61",
  "PC7": "62",
  "PE6": "63",
  "PE7": "64",
  "PA0": "1",
  "NRST/PA1": "2",
  "PA2": "3",
  "PA3": "4",
  "PA4": "5",
  "PA5": "6",
  "PA6": "7",
  "PA7": "8",
  "VSSA/VREF-": "9",
  "VDD_11": "11",
  "VDDA": "12",
  "VREF+": "13",
  "PG0": "14",
  "PG1": "15",
  "PG2": "16",
  "PG3": "17",
  "VLCD": "18",
  "PE0": "19",
  "PE1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_10: "passive", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", VDD_29: "power_in", GND_30: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", VDD_55: "power_in", GND_56: "passive", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PE6: "bidirectional", PE7: "bidirectional", PA0: "bidirectional", "NRST/PA1": "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "VSSA/VREF-": "power_in", VDD_11: "power_in", VDDA: "power_in", "VREF+": "power_in", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", VLCD: "power_in", PE0: "bidirectional", PE1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8L152R6T";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8K Flash, 1K RAM, 128 EEPROM, SO-8
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S001J3M`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s001j3.pdf
 * Keywords: STM8 Microcontroller Value Line.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class STM8S001J3M extends Component.withPins({
  "PD6": "1",
  "VSS": "2",
  "VCAP": "3",
  "VDD": "4",
  "PB5": "5",
  "PB4": "6",
  "PC5": "7",
  "PD5": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD6: "bidirectional", VSS: "power_in", VCAP: "passive", VDD: "power_in", PB5: "bidirectional", PB4: "bidirectional", PC5: "bidirectional", PD5: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S001J3M";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8K Flash, 1K RAM, 128 EEPROM, USART, I²C, SPI, TSSOP-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S003F3P`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/DM00024550.pdf
 * Keywords: STM8S Mainstream Value line 8-bit, 16MHz, 1k RAM, 128 EEPROM.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM8S003F3P extends Component.withPins({
  "PD4": "1",
  "PD5": "2",
  "PD6": "3",
  "NRST": "4",
  "PA1": "5",
  "PA2": "6",
  "VSS": "7",
  "VCAP": "8",
  "VDD": "9",
  "PA3": "10",
  "PB5": "11",
  "PB4": "12",
  "PC3": "13",
  "PC4": "14",
  "PC5": "15",
  "PC6": "16",
  "PC7": "17",
  "PD1": "18",
  "PD2": "19",
  "PD3": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSS: "power_in", VCAP: "passive", VDD: "power_in", PA3: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S003F3P";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8K Flash, 1K RAM, 128 EEPROM, USART, I²C, SPI, UFQFPN-20
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S003F3U`. Reference prefix: `U`.
 * Footprint filters: ST?UFQFPN*3x3mm*P0.5mm*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/DM00024550.pdf
 * Keywords: STM8S Mainstream Value line 8-bit, 16MHz, 1k RAM, 128 EEPROM.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM8S003F3U extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSS": "4",
  "VCAP": "5",
  "VDD": "6",
  "PA3": "7",
  "PB5": "8",
  "PB4": "9",
  "PC3": "10",
  "PC4": "11",
  "PC5": "12",
  "PC6": "13",
  "PC7": "14",
  "PD1": "15",
  "PD2": "16",
  "PD3": "17",
  "PD4": "18",
  "PD5": "19",
  "PD6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSS: "power_in", VCAP: "passive", VDD: "power_in", PA3: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S003F3U";
  override referencePrefix = "U";
}

/**
 * 16MHz, 8K Flash, 1K RAM, 128 EEPROM, LQFP-32
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S003K3T`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/DM00024550.pdf
 * Keywords: STM8 Microcontroller Value Line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM8S003K3T extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSS": "4",
  "VCAP": "5",
  "VDD": "6",
  "PA3": "7",
  "PF4": "8",
  "PB7": "9",
  "PB6": "10",
  "PB5": "11",
  "PB4": "12",
  "PB3": "13",
  "PB2": "14",
  "PB1": "15",
  "PB0": "16",
  "PE5": "17",
  "PC1": "18",
  "PC2": "19",
  "PC3": "20",
  "PC4": "21",
  "PC5": "22",
  "PC6": "23",
  "PC7": "24",
  "PD0": "25",
  "PD1": "26",
  "PD2": "27",
  "PD3": "28",
  "PD4": "29",
  "PD5": "30",
  "PD6": "31",
  "PD7": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSS: "power_in", VCAP: "input", VDD: "power_in", PA3: "bidirectional", PF4: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S003K3T";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, CAN, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S208CB`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208cb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8S208CB extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "VDDA": "13",
  "VSSA": "14",
  "PB7": "15",
  "PB6": "16",
  "PB5": "17",
  "PB4": "18",
  "PB3": "19",
  "PB2": "20",
  "PB1": "21",
  "PB0": "22",
  "PE7": "23",
  "PE6": "24",
  "PE5": "25",
  "PC1": "26",
  "PC2": "27",
  "PC3": "28",
  "PC4": "29",
  "PC5": "30",
  "VSSIO_2": "31",
  "VDDIO_2": "32",
  "PC6": "33",
  "PC7": "34",
  "PG0": "35",
  "PG1": "36",
  "PE3": "37",
  "PE2": "38",
  "PE1": "39",
  "PE0": "40",
  "PD0": "41",
  "PD1": "42",
  "PD2": "43",
  "PD3": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDDA: "power_in", VSSA: "power_in", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S208CB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S207C6`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208cb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8S207C6 extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "VDDA": "13",
  "VSSA": "14",
  "PB7": "15",
  "PB6": "16",
  "PB5": "17",
  "PB4": "18",
  "PB3": "19",
  "PB2": "20",
  "PB1": "21",
  "PB0": "22",
  "PE7": "23",
  "PE6": "24",
  "PE5": "25",
  "PC1": "26",
  "PC2": "27",
  "PC3": "28",
  "PC4": "29",
  "PC5": "30",
  "VSSIO_2": "31",
  "VDDIO_2": "32",
  "PC6": "33",
  "PC7": "34",
  "PG0": "35",
  "PG1": "36",
  "PE3": "37",
  "PE2": "38",
  "PE1": "39",
  "PE0": "40",
  "PD0": "41",
  "PD1": "42",
  "PD2": "43",
  "PD3": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDDA: "power_in", VSSA: "power_in", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S207C6";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S207C8`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208cb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8S207C8 extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "VDDA": "13",
  "VSSA": "14",
  "PB7": "15",
  "PB6": "16",
  "PB5": "17",
  "PB4": "18",
  "PB3": "19",
  "PB2": "20",
  "PB1": "21",
  "PB0": "22",
  "PE7": "23",
  "PE6": "24",
  "PE5": "25",
  "PC1": "26",
  "PC2": "27",
  "PC3": "28",
  "PC4": "29",
  "PC5": "30",
  "VSSIO_2": "31",
  "VDDIO_2": "32",
  "PC6": "33",
  "PC7": "34",
  "PG0": "35",
  "PG1": "36",
  "PE3": "37",
  "PE2": "38",
  "PE1": "39",
  "PE0": "40",
  "PD0": "41",
  "PD1": "42",
  "PD2": "43",
  "PD3": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDDA: "power_in", VSSA: "power_in", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S207C8";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S207CB`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208cb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8S207CB extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "VDDA": "13",
  "VSSA": "14",
  "PB7": "15",
  "PB6": "16",
  "PB5": "17",
  "PB4": "18",
  "PB3": "19",
  "PB2": "20",
  "PB1": "21",
  "PB0": "22",
  "PE7": "23",
  "PE6": "24",
  "PE5": "25",
  "PC1": "26",
  "PC2": "27",
  "PC3": "28",
  "PC4": "29",
  "PC5": "30",
  "VSSIO_2": "31",
  "VDDIO_2": "32",
  "PC6": "33",
  "PC7": "34",
  "PG0": "35",
  "PG1": "36",
  "PE3": "37",
  "PE2": "38",
  "PE1": "39",
  "PE0": "40",
  "PD0": "41",
  "PD1": "42",
  "PD2": "43",
  "PD3": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDDA: "power_in", VSSA: "power_in", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S207CB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, LQFP-80
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S207MB`. Reference prefix: `U`.
 * Footprint filters: *LQFP*14x14mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s207mb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-80_14x14mm_P0.65mm.
 */
export class STM8S207MB extends Component.withPins({
  "PH0": "13",
  "PH1": "14",
  "PH2": "15",
  "PH3": "16",
  "PH4": "35",
  "PH5": "36",
  "PH6": "37",
  "PH7": "38",
  "PC0": "42",
  "PI0": "57",
  "PI1": "58",
  "PI2": "59",
  "PI3": "60",
  "PI4": "61",
  "PI5": "62",
  "PI6": "71",
  "PI7": "72",
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PF7": "17",
  "PF6": "18",
  "PF5": "19",
  "PF4": "20",
  "PF3": "21",
  "VREF+": "22",
  "VDDA": "23",
  "VSSA": "24",
  "VREF-": "25",
  "PF0": "26",
  "PB7": "27",
  "PB6": "28",
  "PB5": "29",
  "PB4": "30",
  "PB3": "31",
  "PB2": "32",
  "PB1": "33",
  "PB0": "34",
  "PE7": "39",
  "PE6": "40",
  "PE5": "41",
  "PC1": "43",
  "PC2": "44",
  "PC3": "45",
  "PC4": "46",
  "PC5": "47",
  "VSSIO_2": "48",
  "VDDIO_2": "49",
  "PC6": "50",
  "PC7": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "PG4": "56",
  "PG5": "63",
  "PG6": "64",
  "PG7": "65",
  "PE4": "66",
  "PE3": "67",
  "PE2": "68",
  "PE1": "69",
  "PE0": "70",
  "PD0": "73",
  "PD1": "74",
  "PD2": "75",
  "PD3": "76",
  "PD4": "77",
  "PD5": "78",
  "PD6": "79",
  "PD7": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PH0: "bidirectional", PH1: "bidirectional", PH2: "bidirectional", PH3: "bidirectional", PH4: "bidirectional", PH5: "bidirectional", PH6: "bidirectional", PH7: "bidirectional", PC0: "bidirectional", PI0: "bidirectional", PI1: "bidirectional", PI2: "bidirectional", PI3: "bidirectional", PI4: "bidirectional", PI5: "bidirectional", PI6: "bidirectional", PI7: "bidirectional", NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "VREF+": "power_in", VDDA: "power_in", VSSA: "power_in", "VREF-": "power_in", PF0: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S207MB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, CAN, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S208RB`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208rb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8S208RB extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PF7": "13",
  "PF6": "14",
  "PF5": "15",
  "PF4": "16",
  "PF3": "17",
  "VREF+": "18",
  "VDDA": "19",
  "VSSA": "20",
  "VREF-": "21",
  "PF0": "22",
  "PB7": "23",
  "PB6": "24",
  "PB5": "25",
  "PB4": "26",
  "PB3": "27",
  "PB2": "28",
  "PB1": "29",
  "PB0": "30",
  "PE7": "31",
  "PE6": "32",
  "PE5": "33",
  "PC1": "34",
  "PC2": "35",
  "PC3": "36",
  "PC4": "37",
  "PC5": "38",
  "VSSIO_2": "39",
  "VDDIO_2": "40",
  "PC6": "41",
  "PC7": "42",
  "PG0": "43",
  "PG1": "44",
  "PG2": "45",
  "PG3": "46",
  "PG4": "47",
  "PI0": "48",
  "PG5": "49",
  "PG6": "50",
  "PG7": "51",
  "PE4": "52",
  "PE3": "53",
  "PE2": "54",
  "PE1": "55",
  "PE0": "56",
  "PD0": "57",
  "PD1": "58",
  "PD2": "59",
  "PD3": "60",
  "PD4": "61",
  "PD5": "62",
  "PD6": "63",
  "PD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "VREF+": "power_in", VDDA: "power_in", VSSA: "power_in", "VREF-": "power_in", PF0: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PI0: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S208RB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S207R6`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208rb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8S207R6 extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PF7": "13",
  "PF6": "14",
  "PF5": "15",
  "PF4": "16",
  "PF3": "17",
  "VREF+": "18",
  "VDDA": "19",
  "VSSA": "20",
  "VREF-": "21",
  "PF0": "22",
  "PB7": "23",
  "PB6": "24",
  "PB5": "25",
  "PB4": "26",
  "PB3": "27",
  "PB2": "28",
  "PB1": "29",
  "PB0": "30",
  "PE7": "31",
  "PE6": "32",
  "PE5": "33",
  "PC1": "34",
  "PC2": "35",
  "PC3": "36",
  "PC4": "37",
  "PC5": "38",
  "VSSIO_2": "39",
  "VDDIO_2": "40",
  "PC6": "41",
  "PC7": "42",
  "PG0": "43",
  "PG1": "44",
  "PG2": "45",
  "PG3": "46",
  "PG4": "47",
  "PI0": "48",
  "PG5": "49",
  "PG6": "50",
  "PG7": "51",
  "PE4": "52",
  "PE3": "53",
  "PE2": "54",
  "PE1": "55",
  "PE0": "56",
  "PD0": "57",
  "PD1": "58",
  "PD2": "59",
  "PD3": "60",
  "PD4": "61",
  "PD5": "62",
  "PD6": "63",
  "PD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "VREF+": "power_in", VDDA: "power_in", VSSA: "power_in", "VREF-": "power_in", PF0: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PI0: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S207R6";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S207R8`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208rb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8S207R8 extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PF7": "13",
  "PF6": "14",
  "PF5": "15",
  "PF4": "16",
  "PF3": "17",
  "VREF+": "18",
  "VDDA": "19",
  "VSSA": "20",
  "VREF-": "21",
  "PF0": "22",
  "PB7": "23",
  "PB6": "24",
  "PB5": "25",
  "PB4": "26",
  "PB3": "27",
  "PB2": "28",
  "PB1": "29",
  "PB0": "30",
  "PE7": "31",
  "PE6": "32",
  "PE5": "33",
  "PC1": "34",
  "PC2": "35",
  "PC3": "36",
  "PC4": "37",
  "PC5": "38",
  "VSSIO_2": "39",
  "VDDIO_2": "40",
  "PC6": "41",
  "PC7": "42",
  "PG0": "43",
  "PG1": "44",
  "PG2": "45",
  "PG3": "46",
  "PG4": "47",
  "PI0": "48",
  "PG5": "49",
  "PG6": "50",
  "PG7": "51",
  "PE4": "52",
  "PE3": "53",
  "PE2": "54",
  "PE1": "55",
  "PE0": "56",
  "PD0": "57",
  "PD1": "58",
  "PD2": "59",
  "PD3": "60",
  "PD4": "61",
  "PD5": "62",
  "PD6": "63",
  "PD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "VREF+": "power_in", VDDA: "power_in", VSSA: "power_in", "VREF-": "power_in", PF0: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PI0: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S207R8";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S207RB`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208rb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8S207RB extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PF7": "13",
  "PF6": "14",
  "PF5": "15",
  "PF4": "16",
  "PF3": "17",
  "VREF+": "18",
  "VDDA": "19",
  "VSSA": "20",
  "VREF-": "21",
  "PF0": "22",
  "PB7": "23",
  "PB6": "24",
  "PB5": "25",
  "PB4": "26",
  "PB3": "27",
  "PB2": "28",
  "PB1": "29",
  "PB0": "30",
  "PE7": "31",
  "PE6": "32",
  "PE5": "33",
  "PC1": "34",
  "PC2": "35",
  "PC3": "36",
  "PC4": "37",
  "PC5": "38",
  "VSSIO_2": "39",
  "VDDIO_2": "40",
  "PC6": "41",
  "PC7": "42",
  "PG0": "43",
  "PG1": "44",
  "PG2": "45",
  "PG3": "46",
  "PG4": "47",
  "PI0": "48",
  "PG5": "49",
  "PG6": "50",
  "PG7": "51",
  "PE4": "52",
  "PE3": "53",
  "PE2": "54",
  "PE1": "55",
  "PE0": "56",
  "PD0": "57",
  "PD1": "58",
  "PD2": "59",
  "PD3": "60",
  "PD4": "61",
  "PD5": "62",
  "PD6": "63",
  "PD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "VREF+": "power_in", VDDA: "power_in", VSSA: "power_in", "VREF-": "power_in", PF0: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PI0: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S207RB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, CAN, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S208C6`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208cb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8S208C6 extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "VDDA": "13",
  "VSSA": "14",
  "PB7": "15",
  "PB6": "16",
  "PB5": "17",
  "PB4": "18",
  "PB3": "19",
  "PB2": "20",
  "PB1": "21",
  "PB0": "22",
  "PE7": "23",
  "PE6": "24",
  "PE5": "25",
  "PC1": "26",
  "PC2": "27",
  "PC3": "28",
  "PC4": "29",
  "PC5": "30",
  "VSSIO_2": "31",
  "VDDIO_2": "32",
  "PC6": "33",
  "PC7": "34",
  "PG0": "35",
  "PG1": "36",
  "PE3": "37",
  "PE2": "38",
  "PE1": "39",
  "PE0": "40",
  "PD0": "41",
  "PD1": "42",
  "PD2": "43",
  "PD3": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDDA: "power_in", VSSA: "power_in", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S208C6";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, CAN, LQFP-48
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S208C8`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208cb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM8S208C8 extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "VDDA": "13",
  "VSSA": "14",
  "PB7": "15",
  "PB6": "16",
  "PB5": "17",
  "PB4": "18",
  "PB3": "19",
  "PB2": "20",
  "PB1": "21",
  "PB0": "22",
  "PE7": "23",
  "PE6": "24",
  "PE5": "25",
  "PC1": "26",
  "PC2": "27",
  "PC3": "28",
  "PC4": "29",
  "PC5": "30",
  "VSSIO_2": "31",
  "VDDIO_2": "32",
  "PC6": "33",
  "PC7": "34",
  "PG0": "35",
  "PG1": "36",
  "PE3": "37",
  "PE2": "38",
  "PE1": "39",
  "PE0": "40",
  "PD0": "41",
  "PD1": "42",
  "PD2": "43",
  "PD3": "44",
  "PD4": "45",
  "PD5": "46",
  "PD6": "47",
  "PD7": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDDA: "power_in", VSSA: "power_in", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S208C8";
  override referencePrefix = "U";
}

/**
 * 24MHz, 128K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, CAN, LQFP-80
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S208MB`. Reference prefix: `U`.
 * Footprint filters: *LQFP*14x14mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208mb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-80_14x14mm_P0.65mm.
 */
export class STM8S208MB extends Component.withPins({
  "PH0": "13",
  "PH1": "14",
  "PH2": "15",
  "PH3": "16",
  "PH4": "35",
  "PH5": "36",
  "PH6": "37",
  "PH7": "38",
  "PC0": "42",
  "PI0": "57",
  "PI1": "58",
  "PI2": "59",
  "PI3": "60",
  "PI4": "61",
  "PI5": "62",
  "PI6": "71",
  "PI7": "72",
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PF7": "17",
  "PF6": "18",
  "PF5": "19",
  "PF4": "20",
  "PF3": "21",
  "VREF+": "22",
  "VDDA": "23",
  "VSSA": "24",
  "VREF-": "25",
  "PF0": "26",
  "PB7": "27",
  "PB6": "28",
  "PB5": "29",
  "PB4": "30",
  "PB3": "31",
  "PB2": "32",
  "PB1": "33",
  "PB0": "34",
  "PE7": "39",
  "PE6": "40",
  "PE5": "41",
  "PC1": "43",
  "PC2": "44",
  "PC3": "45",
  "PC4": "46",
  "PC5": "47",
  "VSSIO_2": "48",
  "VDDIO_2": "49",
  "PC6": "50",
  "PC7": "51",
  "PG0": "52",
  "PG1": "53",
  "PG2": "54",
  "PG3": "55",
  "PG4": "56",
  "PG5": "63",
  "PG6": "64",
  "PG7": "65",
  "PE4": "66",
  "PE3": "67",
  "PE2": "68",
  "PE1": "69",
  "PE0": "70",
  "PD0": "73",
  "PD1": "74",
  "PD2": "75",
  "PD3": "76",
  "PD4": "77",
  "PD5": "78",
  "PD6": "79",
  "PD7": "80",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PH0: "bidirectional", PH1: "bidirectional", PH2: "bidirectional", PH3: "bidirectional", PH4: "bidirectional", PH5: "bidirectional", PH6: "bidirectional", PH7: "bidirectional", PC0: "bidirectional", PI0: "bidirectional", PI1: "bidirectional", PI2: "bidirectional", PI3: "bidirectional", PI4: "bidirectional", PI5: "bidirectional", PI6: "bidirectional", PI7: "bidirectional", NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "VREF+": "power_in", VDDA: "power_in", VSSA: "power_in", "VREF-": "power_in", PF0: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S208MB";
  override referencePrefix = "U";
}

/**
 * 24MHz, 32K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, CAN, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S208R6`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208rb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8S208R6 extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PF7": "13",
  "PF6": "14",
  "PF5": "15",
  "PF4": "16",
  "PF3": "17",
  "VREF+": "18",
  "VDDA": "19",
  "VSSA": "20",
  "VREF-": "21",
  "PF0": "22",
  "PB7": "23",
  "PB6": "24",
  "PB5": "25",
  "PB4": "26",
  "PB3": "27",
  "PB2": "28",
  "PB1": "29",
  "PB0": "30",
  "PE7": "31",
  "PE6": "32",
  "PE5": "33",
  "PC1": "34",
  "PC2": "35",
  "PC3": "36",
  "PC4": "37",
  "PC5": "38",
  "VSSIO_2": "39",
  "VDDIO_2": "40",
  "PC6": "41",
  "PC7": "42",
  "PG0": "43",
  "PG1": "44",
  "PG2": "45",
  "PG3": "46",
  "PG4": "47",
  "PI0": "48",
  "PG5": "49",
  "PG6": "50",
  "PG7": "51",
  "PE4": "52",
  "PE3": "53",
  "PE2": "54",
  "PE1": "55",
  "PE0": "56",
  "PD0": "57",
  "PD1": "58",
  "PD2": "59",
  "PD3": "60",
  "PD4": "61",
  "PD5": "62",
  "PD6": "63",
  "PD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "VREF+": "power_in", VDDA: "power_in", VSSA: "power_in", "VREF-": "power_in", PF0: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PI0: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S208R6";
  override referencePrefix = "U";
}

/**
 * 24MHz, 64K Flash, 2K EEPROM, 10-bit ADC, 2 UARTs, SPI, I²C, CAN, LQFP-64
 *
 * KiCad symbol: `MCU_ST_STM8:STM8S208R8`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm8s208rb.pdf
 * Keywords: STM8 Microcontroller Performance Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM8S208R8 extends Component.withPins({
  "NRST": "1",
  "PA1": "2",
  "PA2": "3",
  "VSSIO_1": "4",
  "VSS": "5",
  "VCAP": "6",
  "VDD": "7",
  "VDDIO_1": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PF7": "13",
  "PF6": "14",
  "PF5": "15",
  "PF4": "16",
  "PF3": "17",
  "VREF+": "18",
  "VDDA": "19",
  "VSSA": "20",
  "VREF-": "21",
  "PF0": "22",
  "PB7": "23",
  "PB6": "24",
  "PB5": "25",
  "PB4": "26",
  "PB3": "27",
  "PB2": "28",
  "PB1": "29",
  "PB0": "30",
  "PE7": "31",
  "PE6": "32",
  "PE5": "33",
  "PC1": "34",
  "PC2": "35",
  "PC3": "36",
  "PC4": "37",
  "PC5": "38",
  "VSSIO_2": "39",
  "VDDIO_2": "40",
  "PC6": "41",
  "PC7": "42",
  "PG0": "43",
  "PG1": "44",
  "PG2": "45",
  "PG3": "46",
  "PG4": "47",
  "PI0": "48",
  "PG5": "49",
  "PG6": "50",
  "PG7": "51",
  "PE4": "52",
  "PE3": "53",
  "PE2": "54",
  "PE1": "55",
  "PE0": "56",
  "PD0": "57",
  "PD1": "58",
  "PD2": "59",
  "PD3": "60",
  "PD4": "61",
  "PD5": "62",
  "PD6": "63",
  "PD7": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NRST: "input", PA1: "bidirectional", PA2: "bidirectional", VSSIO_1: "power_in", VSS: "power_in", VCAP: "input", VDD: "power_in", VDDIO_1: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PF7: "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "VREF+": "power_in", VDDA: "power_in", VSSA: "power_in", "VREF-": "power_in", PF0: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PE7: "bidirectional", PE6: "bidirectional", PE5: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", VSSIO_2: "power_in", VDDIO_2: "power_in", PC6: "bidirectional", PC7: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PI0: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE1: "bidirectional", PE0: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM8:STM8S208R8";
  override referencePrefix = "U";
}
