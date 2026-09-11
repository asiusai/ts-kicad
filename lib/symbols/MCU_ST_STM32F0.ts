// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 2.4-3.6V, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F030C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f030c6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F030C6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F030C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 2.4-3.6V, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F030C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f030c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F030C8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F030C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 2.4-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F030CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f030cc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F030CCTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDD_36": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F030CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 4KB RAM, 48 MHz, 2.4-3.6V, 15 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F030F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f030f4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32F030F4Px extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB1": "14",
  "VSS": "15",
  "VDD": "16",
  "PA9": "17",
  "PA10": "18",
  "PA13": "19",
  "PA14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F030F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 2.4-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F030K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f030k6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F030K6Tx extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "VSS_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F030K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 2.4-3.6V, 55 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F030R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f030r8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F030R8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "PF4": "18",
  "PF5": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "PF6": "47",
  "PF7": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F030R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 2.4-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F030RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f030rc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F030RCTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F030RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16-32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031C_4-6_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031c4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F031C_4_6_Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031C_4-6_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031C4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031c4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F031C4Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031C4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031c6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F031C6Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 20 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031E6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die444*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031e6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_Die444.
 */
export class STM32F031E6Yx extends Component.withPins({
  "PA13": "A1",
  "PA14": "A2",
  "PB7": "A3",
  "BOOT0": "A4",
  "PF0": "A5",
  "PA10": "B1",
  "PB6": "B2",
  "PA4": "B3",
  "PA0": "B4",
  "PF1": "B5",
  "PA9": "C1",
  "PB5": "C2",
  "PA5": "C3",
  "PA1": "C4",
  "NRST": "C5",
  "VDD": "D1",
  "PA8": "D2",
  "PA6": "D3",
  "PA2": "D4",
  "VDDA": "D5",
  "VSS": "E1",
  "PB1": "E2",
  "PB0": "E3",
  "PA7": "E4",
  "PA3": "E5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA14: "bidirectional", PB7: "bidirectional", BOOT0: "input", PF0: "bidirectional", PA10: "bidirectional", PB6: "bidirectional", PA4: "bidirectional", PA0: "bidirectional", PF1: "bidirectional", PA9: "bidirectional", PB5: "bidirectional", PA5: "bidirectional", PA1: "bidirectional", NRST: "input", VDD: "power_in", PA8: "bidirectional", PA6: "bidirectional", PA2: "bidirectional", VDDA: "power_in", VSS: "power_in", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031E6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16-32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 15 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031F_4-6_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031f4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32F031F_4_6_Px extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB1": "14",
  "VSS": "15",
  "VDD": "16",
  "PA9": "17",
  "PA10": "18",
  "PA13": "19",
  "PA14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031F_4-6_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 15 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031f4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32F031F4Px extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB1": "14",
  "VSS": "15",
  "VDD": "16",
  "PA9": "17",
  "PA10": "18",
  "PA13": "19",
  "PA14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 15 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031f6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32F031F6Px extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB1": "14",
  "VSS": "15",
  "VDD": "16",
  "PA9": "17",
  "PA10": "18",
  "PA13": "19",
  "PA14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16-32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 23 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031G_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031g4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32F031G_4_6_Ux extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS": "16",
  "VDD": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031G_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 23 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031G4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031g4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32F031G4Ux extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS": "16",
  "VDD": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031G4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 23 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031g6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32F031G6Ux extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS": "16",
  "VDD": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16-32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031K_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031k4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F031K_4_6_Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031K_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031k4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F031K4Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031k6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F031K6Tx extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "VSS_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 2.0-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F031K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f031k6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F031K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F031K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 1.65-1.95V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F038C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f038c6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F038C6Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "NPOR": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F038C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 1.65-1.95V, 20 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F038E6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die444*.
 * @see https://www.st.com/resource/en/datasheet/stm32f038e6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_CSP:ST_WLCSP-25_Die444.
 */
export class STM32F038E6Yx extends Component.withPins({
  "PA13": "A1",
  "PA14": "A2",
  "PB7": "A3",
  "BOOT0": "A4",
  "PF0": "A5",
  "PA10": "B1",
  "PB6": "B2",
  "PA4": "B3",
  "PA0": "B4",
  "PF1": "B5",
  "PA9": "C1",
  "PB5": "C2",
  "PA5": "C3",
  "PA1": "C4",
  "NRST": "C5",
  "VDD": "D1",
  "PA8": "D2",
  "PA6": "D3",
  "PA2": "D4",
  "VDDA": "D5",
  "VSS": "E1",
  "PB1": "E2",
  "PB0": "E3",
  "PA7": "E4",
  "PA3": "E5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA14: "bidirectional", PB7: "bidirectional", BOOT0: "input", PF0: "bidirectional", PA10: "bidirectional", PB6: "bidirectional", PA4: "bidirectional", PA0: "bidirectional", PF1: "bidirectional", PA9: "bidirectional", PB5: "bidirectional", PA5: "bidirectional", PA1: "bidirectional", NRST: "input", VDD: "power_in", PA8: "bidirectional", PA6: "bidirectional", PA2: "bidirectional", VDDA: "power_in", VSS: "power_in", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F038E6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 1.65-1.95V, 14 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F038F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f038f6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32F038F6Px extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "NPOR": "14",
  "VSS": "15",
  "VDD": "16",
  "PA9": "17",
  "PA10": "18",
  "PA13": "19",
  "PA14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", NPOR: "input", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F038F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 1.65-1.95V, 22 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F038G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f038g6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32F038G6Ux extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "NPOR": "15",
  "VSS": "16",
  "VDD": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", NPOR: "input", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F038G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 4KB RAM, 48 MHz, 1.65-1.95V, 26 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F038K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f038k6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F038K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "NPOR": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F038K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16-32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042C_4-6_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042c4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F042C_4_6_Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042C_4-6_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042C4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042c4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F042C4Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042C4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16-32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042C_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042c4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F042C_4_6_Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042C_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042C4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042c4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F042C4Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042C4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042c6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F042C6Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042c6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F042C6Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 16 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042f4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32F042F4Px extends Component.withPins({
  "PB8": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB1": "14",
  "VSSA": "15",
  "VDD": "16",
  "PA9/PA11": "17",
  "PA10/PA12": "18",
  "PA13": "19",
  "PA14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSSA: "power_in", VDD: "power_in", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 16 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042f6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32F042F6Px extends Component.withPins({
  "PB8": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB1": "14",
  "VSSA": "15",
  "VDD": "16",
  "PA9/PA11": "17",
  "PA10/PA12": "18",
  "PA13": "19",
  "PA14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSSA: "power_in", VDD: "power_in", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16-32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 23 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042G_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042g4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32F042G_4_6_Ux extends Component.withPins({
  "PB8": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSSA": "16",
  "VDD": "17",
  "VDDIO2": "18",
  "PA9/PA11": "19",
  "PA10/PA12": "20",
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSSA: "power_in", VDD: "power_in", VDDIO2: "power_in", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042G_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 23 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042G4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042g4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32F042G4Ux extends Component.withPins({
  "PB8": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSSA": "16",
  "VDD": "17",
  "VDDIO2": "18",
  "PA9/PA11": "19",
  "PA10/PA12": "20",
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSSA: "power_in", VDD: "power_in", VDDIO2: "power_in", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042G4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 23 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042g6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32F042G6Ux extends Component.withPins({
  "PB8": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSSA": "16",
  "VDD": "17",
  "VDDIO2": "18",
  "PA9/PA11": "19",
  "PA10/PA12": "20",
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSSA: "power_in", VDD: "power_in", VDDIO2: "power_in", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16-32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 26 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042K_4-6_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042k4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F042K_4_6_Tx extends Component.withPins({
  "VDD": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS": "16",
  "VDDIO2": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "PB8": "31",
  "VSSA": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDDIO2: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSSA: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042K_4-6_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 26 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042K4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042k4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F042K4Tx extends Component.withPins({
  "VDD": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS": "16",
  "VDDIO2": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "PB8": "31",
  "VSSA": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDDIO2: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSSA: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042K4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16-32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 28 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042K_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042k4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F042K_4_6_Ux extends Component.withPins({
  "VDD": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "VDDIO2": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "PF11": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDDIO2: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042K_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 28 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042k4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F042K4Ux extends Component.withPins({
  "VDD": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "VDDIO2": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "PF11": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDDIO2: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 26 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042k6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F042K6Tx extends Component.withPins({
  "VDD": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS": "16",
  "VDDIO2": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "PB8": "31",
  "VSSA": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDDIO2: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSSA: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 28 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042k6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F042K6Ux extends Component.withPins({
  "VDD": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "VDDIO2": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "PF11": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDDIO2: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 30 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F042T6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die445*.
 * @see https://www.st.com/resource/en/datasheet/stm32f042t6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die445.
 */
export class STM32F042T6Yx extends Component.withPins({
  "PA12": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD": "A5",
  "PC13": "A6",
  "PA13": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "PB8": "B4",
  "PF0": "B5",
  "PC14": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PA4": "C3",
  "PB6": "C4",
  "PF1": "C5",
  "PC15": "C6",
  "PA9": "D1",
  "PB2": "D2",
  "PA5": "D3",
  "PA1": "D4",
  "NRST": "D5",
  "VSSA": "D6",
  "VDDIO2": "E1",
  "PA8": "E2",
  "PA6": "E3",
  "PA2": "E4",
  "VDDA": "E5",
  "PB5": "E6",
  "VSS": "F1",
  "PB1": "F2",
  "PB0": "F3",
  "PA7": "F4",
  "PA3": "F5",
  "PA0": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA12: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD: "power_in", PC13: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", PB8: "bidirectional", PF0: "bidirectional", PC14: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA4: "bidirectional", PB6: "bidirectional", PF1: "bidirectional", PC15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA5: "bidirectional", PA1: "bidirectional", NRST: "input", VSSA: "power_in", VDDIO2: "power_in", PA8: "bidirectional", PA6: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB5: "bidirectional", VSS: "power_in", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F042T6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 1.65-1.95V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F048C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f048c6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F048C6Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "NPOR": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F048C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 1.65-1.95V, 22 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F048G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f048g6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32F048G6Ux extends Component.withPins({
  "PB8": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "NPOR": "15",
  "VSS": "16",
  "VDD": "17",
  "VDDIO2": "18",
  "PA9/PA11": "19",
  "PA10/PA12": "20",
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", NPOR: "input", VSS: "power_in", VDD: "power_in", VDDIO2: "power_in", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F048G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 1.65-1.95V, 29 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F048T6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die445*.
 * @see https://www.st.com/resource/en/datasheet/stm32f048t6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die445.
 */
export class STM32F048T6Yx extends Component.withPins({
  "PA12": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD": "A5",
  "PC13": "A6",
  "PA13": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "PB8": "B4",
  "PF0": "B5",
  "PC14": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PA4": "C3",
  "PB6": "C4",
  "PF1": "C5",
  "PC15": "C6",
  "PA9": "D1",
  "NPOR": "D2",
  "PA5": "D3",
  "PA1": "D4",
  "NRST": "D5",
  "VSS_D6": "D6",
  "VDDIO2": "E1",
  "PA8": "E2",
  "PA6": "E3",
  "PA2": "E4",
  "VDDA": "E5",
  "PB5": "E6",
  "VSS_F1": "F1",
  "PB1": "F2",
  "PB0": "F3",
  "PA7": "F4",
  "PA3": "F5",
  "PA0": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA12: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD: "power_in", PC13: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", PB8: "bidirectional", PF0: "bidirectional", PC14: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA4: "bidirectional", PB6: "bidirectional", PF1: "bidirectional", PC15: "bidirectional", PA9: "bidirectional", NPOR: "input", PA5: "bidirectional", PA1: "bidirectional", NRST: "input", VSS_D6: "power_in", VDDIO2: "power_in", PA8: "bidirectional", PA6: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB5: "bidirectional", VSS_F1: "passive", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F048T6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051C4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051c4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F051C4Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051C4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 39 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051C4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051c4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F051C4Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051C4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051c6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F051C6Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 39 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051c6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F051C6Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F051C8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 39 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F051C8Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051K4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051k4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F051K4Tx extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "VSS_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051K4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051k4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F051K4Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051k6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F051K6Tx extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "VSS_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051k6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F051K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051k8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F051K8Tx extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "VSS_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051k8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F051K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB1": "15",
  "PB2": "16",
  "VDD_17": "17",
  "PA8": "18",
  "PA9": "19",
  "PA10": "20",
  "PA11": "21",
  "PA12": "22",
  "PA13": "23",
  "PA14": "24",
  "PA15": "25",
  "PB3": "26",
  "PB4": "27",
  "PB5": "28",
  "PB6": "29",
  "PB7": "30",
  "BOOT0": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 16KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 55 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051R4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051r4.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F051R4Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "PF4": "18",
  "PF5": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "PF6": "47",
  "PF7": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051R4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 55 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051R6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051r6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F051R6Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "PF4": "18",
  "PF5": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "PF6": "47",
  "PF7": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051R6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 55 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051R8Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051r8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32F051R8Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VBAT": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PF0": "C1",
  "PF4": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PF1": "D1",
  "PF5": "D2",
  "PB6": "D3",
  "VSS_D4": "D4",
  "VSS_D5": "D5",
  "PF6": "D6",
  "PA8": "D7",
  "PC9": "D8",
  "NRST": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDD_E5": "E5",
  "PF7": "E6",
  "PC7": "E7",
  "PC8": "E8",
  "VSSA": "F1",
  "PC2": "F2",
  "PA2": "F3",
  "PA5": "F4",
  "PB0": "F5",
  "PC6": "F6",
  "PB15": "F7",
  "PB14": "F8",
  "PC3": "G1",
  "PA0": "G2",
  "PA3": "G3",
  "PA6": "G4",
  "PB1": "G5",
  "PB2": "G6",
  "PB10": "G7",
  "PB13": "G8",
  "VDDA": "H1",
  "PA1": "H2",
  "PA4": "H3",
  "PA7": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB11": "H7",
  "PB12": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", PF4: "bidirectional", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", PF5: "bidirectional", PB6: "bidirectional", VSS_D4: "power_in", VSS_D5: "passive", PF6: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", PF7: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051R8Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 55 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051r8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F051R8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "PF4": "18",
  "PF5": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "PF6": "47",
  "PF7": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 2.0-3.6V, 29 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F051T8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die440*.
 * @see https://www.st.com/resource/en/datasheet/stm32f051t8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die440.
 */
export class STM32F051T8Yx extends Component.withPins({
  "PA12": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD_A5": "A5",
  "PC13": "A6",
  "PA13": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "BOOT0": "B4",
  "PF0": "B5",
  "PC14": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PA4": "C3",
  "PB6": "C4",
  "PF1": "C5",
  "PC15": "C6",
  "PA9": "D1",
  "PB2": "D2",
  "PA5": "D3",
  "PA1": "D4",
  "NRST": "D5",
  "VSSA": "D6",
  "VDD_E1": "E1",
  "PA8": "E2",
  "PA6": "E3",
  "PA2": "E4",
  "VDDA": "E5",
  "PB5": "E6",
  "VSS": "F1",
  "PB1": "F2",
  "PB0": "F3",
  "PA7": "F4",
  "PA3": "F5",
  "PA0": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA12: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD_A5: "power_in", PC13: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", BOOT0: "input", PF0: "bidirectional", PC14: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA4: "bidirectional", PB6: "bidirectional", PF1: "bidirectional", PC15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA5: "bidirectional", PA1: "bidirectional", NRST: "input", VSSA: "power_in", VDD_E1: "power_in", PA8: "bidirectional", PA6: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB5: "bidirectional", VSS: "power_in", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F051T8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 1.65-1.95V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F058C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f058c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F058C8Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "NPOR": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "PF6": "35",
  "PF7": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F058C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 1.65-1.95V, 54 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F058R8Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f058r8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32F058R8Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VBAT": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PF0": "C1",
  "PF4": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PF1": "D1",
  "PF5": "D2",
  "PB6": "D3",
  "VSS_D4": "D4",
  "VSS_D5": "D5",
  "PF6": "D6",
  "PA8": "D7",
  "PC9": "D8",
  "NRST": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDD_E5": "E5",
  "PF7": "E6",
  "PC7": "E7",
  "PC8": "E8",
  "VSSA": "F1",
  "PC2": "F2",
  "PA2": "F3",
  "PA5": "F4",
  "PB0": "F5",
  "PC6": "F6",
  "PB15": "F7",
  "PB14": "F8",
  "PC3": "G1",
  "PA0": "G2",
  "PA3": "G3",
  "PA6": "G4",
  "PB1": "G5",
  "NPOR": "G6",
  "PB10": "G7",
  "PB13": "G8",
  "VDDA": "H1",
  "PA1": "H2",
  "PA4": "H3",
  "PA7": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB11": "H7",
  "PB12": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", PF4: "bidirectional", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", PF5: "bidirectional", PB6: "bidirectional", VSS_D4: "power_in", VSS_D5: "passive", PF6: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", PF7: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F058R8Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 1.65-1.95V, 54 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F058R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f058r8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F058R8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "PF4": "18",
  "PF5": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "NPOR": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "PF6": "47",
  "PF7": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F058R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 8KB RAM, 48 MHz, 1.65-1.95V, 28 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F058T8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die440*.
 * @see https://www.st.com/resource/en/datasheet/stm32f058t8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die440.
 */
export class STM32F058T8Yx extends Component.withPins({
  "PA12": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD_A5": "A5",
  "PC13": "A6",
  "PA13": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "BOOT0": "B4",
  "PF0": "B5",
  "PC14": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PA4": "C3",
  "PB6": "C4",
  "PF1": "C5",
  "PC15": "C6",
  "PA9": "D1",
  "NPOR": "D2",
  "PA5": "D3",
  "PA1": "D4",
  "NRST": "D5",
  "VSSA": "D6",
  "VDD_E1": "E1",
  "PA8": "E2",
  "PA6": "E3",
  "PA2": "E4",
  "VDDA": "E5",
  "PB5": "E6",
  "VSS": "F1",
  "PB1": "F2",
  "PB0": "F3",
  "PA7": "F4",
  "PA3": "F5",
  "PA0": "F6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA12: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD_A5: "power_in", PC13: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", BOOT0: "input", PF0: "bidirectional", PC14: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA4: "bidirectional", PB6: "bidirectional", PF1: "bidirectional", PC15: "bidirectional", PA9: "bidirectional", NPOR: "input", PA5: "bidirectional", PA1: "bidirectional", NRST: "input", VSSA: "power_in", VDD_E1: "power_in", PA8: "bidirectional", PA6: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB5: "bidirectional", VSS: "power_in", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F058T8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 2.4-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F070C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f070c6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F070C6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDD_36": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F070C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.4-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F070CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f070cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F070CBTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDD_36": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F070CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 32KB flash, 6KB RAM, 48 MHz, 2.4-3.6V, 15 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F070F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f070f6.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32F070F6Px extends Component.withPins({
  "BOOT0": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB1": "14",
  "VSS": "15",
  "VDD": "16",
  "PA9/PA11": "17",
  "PA10/PA12": "18",
  "PA13": "19",
  "PA14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "input", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F070F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.4-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F070RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f070rb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F070RBTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F070RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64-128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071C_8-B_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F071C_8_B_Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071C_8-B_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F071C8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64-128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071C_8-B_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F071C_8_B_Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071C_8-B_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F071C8Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F071CBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F071CBUx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071CBYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die448*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die448.
 */
export class STM32F071CBYx extends Component.withPins({
  "PA14": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB4": "A4",
  "BOOT0": "A5",
  "VSS_A6": "A6",
  "VDD_A7": "A7",
  "VSS_B1": "B1",
  "VDDIO2": "B2",
  "PA13": "B3",
  "PB5": "B4",
  "PB8": "B5",
  "NC": "B6",
  "VBAT": "B7",
  "PA11": "C1",
  "PA10": "C2",
  "PA12": "C3",
  "PB6": "C4",
  "PB9": "C5",
  "PC15": "C6",
  "PC14": "C7",
  "PA8": "D1",
  "PA9": "D2",
  "VSS_D3": "D3",
  "PB7": "D4",
  "PC13": "D5",
  "PF1": "D6",
  "PF0": "D7",
  "PB15": "E1",
  "PB12": "E2",
  "PB10": "E3",
  "PA3": "E4",
  "PA2": "E5",
  "VSSA": "E6",
  "NRST": "E7",
  "PB14": "F1",
  "VDD_F2": "F2",
  "PA7": "F3",
  "PA6": "F4",
  "PA5": "F5",
  "PA0": "F6",
  "VDDA": "F7",
  "PB13": "G1",
  "PB11": "G2",
  "PB2": "G3",
  "PB1": "G4",
  "PB0": "G5",
  "PA4": "G6",
  "PA1": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", BOOT0: "input", VSS_A6: "power_in", VDD_A7: "power_in", VSS_B1: "passive", VDDIO2: "power_in", PA13: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", NC: "no_connect", VBAT: "power_in", PA11: "bidirectional", PA10: "bidirectional", PA12: "bidirectional", PB6: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_D3: "passive", PB7: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PB15: "bidirectional", PB12: "bidirectional", PB10: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", VSSA: "power_in", NRST: "input", PB14: "bidirectional", VDD_F2: "power_in", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA0: "bidirectional", VDDA: "power_in", PB13: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071CBYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071rb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F071RBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDDIO2": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64-128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071V_8-B_Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071v8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F071V_8_B_Hx extends Component.withPins({
  "PE3": "A1",
  "PE1": "A2",
  "PB8": "A3",
  "BOOT0": "A4",
  "PD7": "A5",
  "PD5": "A6",
  "PB4": "A7",
  "PB3": "A8",
  "PA15": "A9",
  "PA14": "A10",
  "PA13": "A11",
  "PA12": "A12",
  "PE4": "B1",
  "PE2": "B2",
  "PB9": "B3",
  "PB7": "B4",
  "PB6": "B5",
  "PD6": "B6",
  "PD4": "B7",
  "PD3": "B8",
  "PD1": "B9",
  "PC12": "B10",
  "PC10": "B11",
  "PA11": "B12",
  "PC13": "C1",
  "PE5": "C2",
  "PE0": "C3",
  "VDD_C4": "C4",
  "PB5": "C5",
  "PD2": "C8",
  "PD0": "C9",
  "PC11": "C10",
  "PF6": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "NC": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "PF2": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VSSA": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
  "PF3": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "PB11": "L11",
  "PB12": "L12",
  "VDDA": "M1",
  "PA1": "M2",
  "PA4": "M3",
  "PA7": "M4",
  "PB0": "M5",
  "PB1": "M6",
  "PE7": "M7",
  "PE9": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PE14": "M11",
  "PE15": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", NC: "no_connect", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PF3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071V_8-B_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071V8Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071v8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F071V8Hx extends Component.withPins({
  "PE3": "A1",
  "PE1": "A2",
  "PB8": "A3",
  "BOOT0": "A4",
  "PD7": "A5",
  "PD5": "A6",
  "PB4": "A7",
  "PB3": "A8",
  "PA15": "A9",
  "PA14": "A10",
  "PA13": "A11",
  "PA12": "A12",
  "PE4": "B1",
  "PE2": "B2",
  "PB9": "B3",
  "PB7": "B4",
  "PB6": "B5",
  "PD6": "B6",
  "PD4": "B7",
  "PD3": "B8",
  "PD1": "B9",
  "PC12": "B10",
  "PC10": "B11",
  "PA11": "B12",
  "PC13": "C1",
  "PE5": "C2",
  "PE0": "C3",
  "VDD_C4": "C4",
  "PB5": "C5",
  "PD2": "C8",
  "PD0": "C9",
  "PC11": "C10",
  "PF6": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "NC": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "PF2": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VSSA": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
  "PF3": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "PB11": "L11",
  "PB12": "L12",
  "VDDA": "M1",
  "PA1": "M2",
  "PA4": "M3",
  "PA7": "M4",
  "PB0": "M5",
  "PB1": "M6",
  "PE7": "M7",
  "PE9": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PE14": "M11",
  "PE15": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", NC: "no_connect", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PF3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071V8Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64-128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071V_8-B_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071v8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F071V_8_B_Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "BOOT0": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071V_8-B_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071V8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071v8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F071V8Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "BOOT0": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071V8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071VBHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071vb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F071VBHx extends Component.withPins({
  "PE3": "A1",
  "PE1": "A2",
  "PB8": "A3",
  "BOOT0": "A4",
  "PD7": "A5",
  "PD5": "A6",
  "PB4": "A7",
  "PB3": "A8",
  "PA15": "A9",
  "PA14": "A10",
  "PA13": "A11",
  "PA12": "A12",
  "PE4": "B1",
  "PE2": "B2",
  "PB9": "B3",
  "PB7": "B4",
  "PB6": "B5",
  "PD6": "B6",
  "PD4": "B7",
  "PD3": "B8",
  "PD1": "B9",
  "PC12": "B10",
  "PC10": "B11",
  "PA11": "B12",
  "PC13": "C1",
  "PE5": "C2",
  "PE0": "C3",
  "VDD_C4": "C4",
  "PB5": "C5",
  "PD2": "C8",
  "PD0": "C9",
  "PC11": "C10",
  "PF6": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "NC": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "PF2": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VSSA": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
  "PF3": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "PB11": "L11",
  "PB12": "L12",
  "VDDA": "M1",
  "PA1": "M2",
  "PA4": "M3",
  "PA7": "M4",
  "PB0": "M5",
  "PB1": "M6",
  "PE7": "M7",
  "PE9": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PE14": "M11",
  "PE15": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", NC: "no_connect", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PF3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071VBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F071VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f071vb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F071VBTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "BOOT0": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F071VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64-128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072C_8-B_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F072C_8_B_Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072C_8-B_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F072C8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64-128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072C_8-B_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F072C_8_B_Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072C_8-B_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072c8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F072C8Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F072CBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F072CBUx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 37 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072CBYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die448*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die448.
 */
export class STM32F072CBYx extends Component.withPins({
  "PA14": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB4": "A4",
  "BOOT0": "A5",
  "VSS_A6": "A6",
  "VDD_A7": "A7",
  "VSS_B1": "B1",
  "VDDIO2": "B2",
  "PA13": "B3",
  "PB5": "B4",
  "PB8": "B5",
  "NC": "B6",
  "VBAT": "B7",
  "PA11": "C1",
  "PA10": "C2",
  "PA12": "C3",
  "PB6": "C4",
  "PB9": "C5",
  "PC15": "C6",
  "PC14": "C7",
  "PA8": "D1",
  "PA9": "D2",
  "VSS_D3": "D3",
  "PB7": "D4",
  "PC13": "D5",
  "PF1": "D6",
  "PF0": "D7",
  "PB15": "E1",
  "PB12": "E2",
  "PB10": "E3",
  "PA3": "E4",
  "PA2": "E5",
  "VSSA": "E6",
  "NRST": "E7",
  "PB14": "F1",
  "VDD_F2": "F2",
  "PA7": "F3",
  "PA6": "F4",
  "PA5": "F5",
  "PA0": "F6",
  "VDDA": "F7",
  "PB13": "G1",
  "PB11": "G2",
  "PB2": "G3",
  "PB1": "G4",
  "PB0": "G5",
  "PA4": "G6",
  "PA1": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", BOOT0: "input", VSS_A6: "power_in", VDD_A7: "power_in", VSS_B1: "passive", VDDIO2: "power_in", PA13: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", NC: "no_connect", VBAT: "power_in", PA11: "bidirectional", PA10: "bidirectional", PA12: "bidirectional", PB6: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_D3: "passive", PB7: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PB15: "bidirectional", PB12: "bidirectional", PB10: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", VSSA: "power_in", NRST: "input", PB14: "bidirectional", VDD_F2: "power_in", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA0: "bidirectional", VDDA: "power_in", PB13: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072CBYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64-128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072R_8-B_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072r8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F072R_8_B_Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDDIO2": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072R_8-B_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072r8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F072R8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDDIO2": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 51 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072RBHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072rb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32F072RBHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VBAT": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PF0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PF1": "D1",
  "VDD_D2": "D2",
  "PB6": "D3",
  "VSS_D4": "D4",
  "VSS_D5": "D5",
  "VSS_D6": "D6",
  "PA8": "D7",
  "PC9": "D8",
  "NRST": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDD_E5": "E5",
  "VDDIO2": "E6",
  "PC7": "E7",
  "PC8": "E8",
  "VSSA": "F1",
  "PC2": "F2",
  "PA2": "F3",
  "PA5": "F4",
  "PB0": "F5",
  "PC6": "F6",
  "PB15": "F7",
  "PB14": "F8",
  "PC3": "G1",
  "PA0": "G2",
  "PA3": "G3",
  "PA6": "G4",
  "PB1": "G5",
  "PB2": "G6",
  "PB10": "G7",
  "PB13": "G8",
  "VDDA": "H1",
  "PA1": "H2",
  "PA4": "H3",
  "PA7": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB11": "H7",
  "PB12": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDDIO2: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072RBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 51 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072RBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072rb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32F072RBIx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VBAT": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PF0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PF1": "D1",
  "VDD_D2": "D2",
  "PB6": "D3",
  "VSS_D4": "D4",
  "VSS_D5": "D5",
  "VSS_D6": "D6",
  "PA8": "D7",
  "PC9": "D8",
  "NRST": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDD_E5": "E5",
  "VDDIO2": "E6",
  "PC7": "E7",
  "PC8": "E8",
  "VSSA": "F1",
  "PC2": "F2",
  "PA2": "F3",
  "PA5": "F4",
  "PB0": "F5",
  "PC6": "F6",
  "PB15": "F7",
  "PB14": "F8",
  "PC3": "G1",
  "PA0": "G2",
  "PA3": "G3",
  "PA6": "G4",
  "PB1": "G5",
  "PB2": "G6",
  "PB10": "G7",
  "PB13": "G8",
  "VDDA": "H1",
  "PA1": "H2",
  "PA4": "H3",
  "PA7": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB11": "H7",
  "PB12": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDDIO2: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072RBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072rb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F072RBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDDIO2": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64-128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072V_8-B_Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072v8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F072V_8_B_Hx extends Component.withPins({
  "PE3": "A1",
  "PE1": "A2",
  "PB8": "A3",
  "BOOT0": "A4",
  "PD7": "A5",
  "PD5": "A6",
  "PB4": "A7",
  "PB3": "A8",
  "PA15": "A9",
  "PA14": "A10",
  "PA13": "A11",
  "PA12": "A12",
  "PE4": "B1",
  "PE2": "B2",
  "PB9": "B3",
  "PB7": "B4",
  "PB6": "B5",
  "PD6": "B6",
  "PD4": "B7",
  "PD3": "B8",
  "PD1": "B9",
  "PC12": "B10",
  "PC10": "B11",
  "PA11": "B12",
  "PC13": "C1",
  "PE5": "C2",
  "PE0": "C3",
  "VDD_C4": "C4",
  "PB5": "C5",
  "PD2": "C8",
  "PD0": "C9",
  "PC11": "C10",
  "PF6": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "NC": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "PF2": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VSSA": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
  "PF3": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "PB11": "L11",
  "PB12": "L12",
  "VDDA": "M1",
  "PA1": "M2",
  "PA4": "M3",
  "PA7": "M4",
  "PB0": "M5",
  "PB1": "M6",
  "PE7": "M7",
  "PE9": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PE14": "M11",
  "PE15": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", NC: "no_connect", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PF3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072V_8-B_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072V8Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072v8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F072V8Hx extends Component.withPins({
  "PE3": "A1",
  "PE1": "A2",
  "PB8": "A3",
  "BOOT0": "A4",
  "PD7": "A5",
  "PD5": "A6",
  "PB4": "A7",
  "PB3": "A8",
  "PA15": "A9",
  "PA14": "A10",
  "PA13": "A11",
  "PA12": "A12",
  "PE4": "B1",
  "PE2": "B2",
  "PB9": "B3",
  "PB7": "B4",
  "PB6": "B5",
  "PD6": "B6",
  "PD4": "B7",
  "PD3": "B8",
  "PD1": "B9",
  "PC12": "B10",
  "PC10": "B11",
  "PA11": "B12",
  "PC13": "C1",
  "PE5": "C2",
  "PE0": "C3",
  "VDD_C4": "C4",
  "PB5": "C5",
  "PD2": "C8",
  "PD0": "C9",
  "PC11": "C10",
  "PF6": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "NC": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "PF2": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VSSA": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
  "PF3": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "PB11": "L11",
  "PB12": "L12",
  "VDDA": "M1",
  "PA1": "M2",
  "PA4": "M3",
  "PA7": "M4",
  "PB0": "M5",
  "PB1": "M6",
  "PE7": "M7",
  "PE9": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PE14": "M11",
  "PE15": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", NC: "no_connect", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PF3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072V8Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64-128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072V_8-B_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072v8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F072V_8_B_Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "BOOT0": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072V_8-B_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 64KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072V8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072v8.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F072V8Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "BOOT0": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072V8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072VBHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072vb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F072VBHx extends Component.withPins({
  "PE3": "A1",
  "PE1": "A2",
  "PB8": "A3",
  "BOOT0": "A4",
  "PD7": "A5",
  "PD5": "A6",
  "PB4": "A7",
  "PB3": "A8",
  "PA15": "A9",
  "PA14": "A10",
  "PA13": "A11",
  "PA12": "A12",
  "PE4": "B1",
  "PE2": "B2",
  "PB9": "B3",
  "PB7": "B4",
  "PB6": "B5",
  "PD6": "B6",
  "PD4": "B7",
  "PD3": "B8",
  "PD1": "B9",
  "PC12": "B10",
  "PC10": "B11",
  "PA11": "B12",
  "PC13": "C1",
  "PE5": "C2",
  "PE0": "C3",
  "VDD_C4": "C4",
  "PB5": "C5",
  "PD2": "C8",
  "PD0": "C9",
  "PC11": "C10",
  "PF6": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "NC": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "PF2": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VSSA": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
  "PF3": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "PB11": "L11",
  "PB12": "L12",
  "VDDA": "M1",
  "PA1": "M2",
  "PA4": "M3",
  "PA7": "M4",
  "PB0": "M5",
  "PB1": "M6",
  "PE7": "M7",
  "PE9": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PE14": "M11",
  "PE15": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", NC: "no_connect", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PF3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072VBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F072VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f072vb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x2.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F072VBTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "BOOT0": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F072VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 1.65-1.95V, 36 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F078CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f078cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F078CBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "NPOR": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F078CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 1.65-1.95V, 36 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F078CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f078cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F078CBUx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "NPOR": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "BOOT0": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F078CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 1.65-1.95V, 36 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F078CBYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die448*.
 * @see https://www.st.com/resource/en/datasheet/stm32f078cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die448.
 */
export class STM32F078CBYx extends Component.withPins({
  "PA14": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB4": "A4",
  "BOOT0": "A5",
  "VSS_A6": "A6",
  "VDD_A7": "A7",
  "VSS_B1": "B1",
  "VDDIO2": "B2",
  "PA13": "B3",
  "PB5": "B4",
  "PB8": "B5",
  "NC": "B6",
  "VBAT": "B7",
  "PA11": "C1",
  "PA10": "C2",
  "PA12": "C3",
  "PB6": "C4",
  "PB9": "C5",
  "PC15": "C6",
  "PC14": "C7",
  "PA8": "D1",
  "PA9": "D2",
  "VSS_D3": "D3",
  "PB7": "D4",
  "PC13": "D5",
  "PF1": "D6",
  "PF0": "D7",
  "PB15": "E1",
  "PB12": "E2",
  "PB10": "E3",
  "PA3": "E4",
  "PA2": "E5",
  "VSSA": "E6",
  "NRST": "E7",
  "PB14": "F1",
  "VDD_F2": "F2",
  "PA7": "F3",
  "PA6": "F4",
  "PA5": "F5",
  "PA0": "F6",
  "VDDA": "F7",
  "PB13": "G1",
  "PB11": "G2",
  "NPOR": "G3",
  "PB1": "G4",
  "PB0": "G5",
  "PA4": "G6",
  "PA1": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", BOOT0: "input", VSS_A6: "power_in", VDD_A7: "power_in", VSS_B1: "passive", VDDIO2: "power_in", PA13: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", NC: "no_connect", VBAT: "power_in", PA11: "bidirectional", PA10: "bidirectional", PA12: "bidirectional", PB6: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_D3: "passive", PB7: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PB15: "bidirectional", PB12: "bidirectional", PB10: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", VSSA: "power_in", NRST: "input", PB14: "bidirectional", VDD_F2: "power_in", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA0: "bidirectional", VDDA: "power_in", PB13: "bidirectional", PB11: "bidirectional", NPOR: "input", PB1: "bidirectional", PB0: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F078CBYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 1.65-1.95V, 50 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F078RBHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f078rb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32F078RBHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VBAT": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PF0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PF1": "D1",
  "VDD_D2": "D2",
  "PB6": "D3",
  "VSS_D4": "D4",
  "VSS_D5": "D5",
  "VSS_D6": "D6",
  "PA8": "D7",
  "PC9": "D8",
  "NRST": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDD_E5": "E5",
  "VDDIO2": "E6",
  "PC7": "E7",
  "PC8": "E8",
  "VSSA": "F1",
  "PC2": "F2",
  "PA2": "F3",
  "PA5": "F4",
  "PB0": "F5",
  "PC6": "F6",
  "PB15": "F7",
  "PB14": "F8",
  "PC3": "G1",
  "PA0": "G2",
  "PA3": "G3",
  "PA6": "G4",
  "PB1": "G5",
  "NPOR": "G6",
  "PB10": "G7",
  "PB13": "G8",
  "VDDA": "H1",
  "PA1": "H2",
  "PA4": "H3",
  "PA7": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB11": "H7",
  "PB12": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDDIO2: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F078RBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 1.65-1.95V, 50 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F078RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f078rb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F078RBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "NPOR": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDDIO2": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "BOOT0": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F078RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 1.65-1.95V, 86 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F078VBHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f078vb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F078VBHx extends Component.withPins({
  "PE3": "A1",
  "PE1": "A2",
  "PB8": "A3",
  "BOOT0": "A4",
  "PD7": "A5",
  "PD5": "A6",
  "PB4": "A7",
  "PB3": "A8",
  "PA15": "A9",
  "PA14": "A10",
  "PA13": "A11",
  "PA12": "A12",
  "PE4": "B1",
  "PE2": "B2",
  "PB9": "B3",
  "PB7": "B4",
  "PB6": "B5",
  "PD6": "B6",
  "PD4": "B7",
  "PD3": "B8",
  "PD1": "B9",
  "PC12": "B10",
  "PC10": "B11",
  "PA11": "B12",
  "PC13": "C1",
  "PE5": "C2",
  "PE0": "C3",
  "VDD_C4": "C4",
  "PB5": "C5",
  "PD2": "C8",
  "PD0": "C9",
  "PC11": "C10",
  "PF6": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "NC": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "PF2": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VSSA": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
  "PF3": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "NPOR": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "PB11": "L11",
  "PB12": "L12",
  "VDDA": "M1",
  "PA1": "M2",
  "PA4": "M3",
  "PA7": "M4",
  "PB0": "M5",
  "PB1": "M6",
  "PE7": "M7",
  "PE9": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PE14": "M11",
  "PE15": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", NC: "no_connect", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PF3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", NPOR: "input", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F078VBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 16KB RAM, 48 MHz, 1.65-1.95V, 86 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F078VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f078vb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F078VBTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "NPOR": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "BOOT0": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F078VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128-256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091C_B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F091C_B_C_Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091C_B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F091CBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128-256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091C_B-C_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F091C_B_C_Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091C_B-C_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091cb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F091CBUx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091cc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F091CCTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091cc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F091CCUx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128-256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091R_B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091rb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F091R_B_C_Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDDIO2": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "PF11": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091R_B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091rb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F091RBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDDIO2": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "PF11": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 52 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091RCHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091rc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32F091RCHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VBAT": "B2",
  "PB8": "B3",
  "PF11": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PF0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PF1": "D1",
  "VDD_D2": "D2",
  "PB6": "D3",
  "VSS_D4": "D4",
  "VSS_D5": "D5",
  "VSS_D6": "D6",
  "PA8": "D7",
  "PC9": "D8",
  "NRST": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDD_E5": "E5",
  "VDDIO2": "E6",
  "PC7": "E7",
  "PC8": "E8",
  "VSSA": "F1",
  "PC2": "F2",
  "PA2": "F3",
  "PA5": "F4",
  "PB0": "F5",
  "PC6": "F6",
  "PB15": "F7",
  "PB14": "F8",
  "PC3": "G1",
  "PA0": "G2",
  "PA3": "G3",
  "PA6": "G4",
  "PB1": "G5",
  "PB2": "G6",
  "PB10": "G7",
  "PB13": "G8",
  "VDDA": "H1",
  "PA1": "H2",
  "PA4": "H3",
  "PA7": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB11": "H7",
  "PB12": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", PF11: "bidirectional", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDDIO2: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091RCHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091rc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F091RCTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "PB2": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDDIO2": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "PF11": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 52 GPIO, WLCSP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091RCYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die442*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091rc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_CSP:ST_WLCSP-64_Die442.
 */
export class STM32F091RCYx extends Component.withPins({
  "VDDIO2": "A1",
  "PA15": "A2",
  "PC10": "A3",
  "PD2": "A4",
  "PB6": "A5",
  "PB8": "A6",
  "VSS_A7": "A7",
  "VDD_A8": "A8",
  "PA12": "B1",
  "VSS_B2": "B2",
  "PA14": "B3",
  "PC12": "B4",
  "PB7": "B5",
  "PB9": "B6",
  "PC13": "B7",
  "VBAT": "B8",
  "PA9": "C1",
  "PA10": "C2",
  "PA13": "C3",
  "PC11": "C4",
  "PB5": "C5",
  "PF11": "C6",
  "PC15": "C7",
  "PC14": "C8",
  "PC7": "D1",
  "PA8": "D2",
  "PA11": "D3",
  "PB3": "D4",
  "PB4": "D5",
  "PC2": "D6",
  "NRST": "D7",
  "PF0": "D8",
  "PC6": "E1",
  "PC8": "E2",
  "PC9": "E3",
  "PA7": "E4",
  "PA2": "E5",
  "PC3": "E6",
  "PC0": "E7",
  "PF1": "E8",
  "PB15": "F1",
  "PB13": "F2",
  "PB1": "F3",
  "PC5": "F4",
  "PA5": "F5",
  "PA1": "F6",
  "PA0": "F7",
  "PC1": "F8",
  "PB14": "G1",
  "PB12": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "VDD_G6": "G6",
  "VSS_G7": "G7",
  "VSSA": "G8",
  "VDD_H1": "H1",
  "VSS_H2": "H2",
  "PB11": "H3",
  "PB2": "H4",
  "PC4": "H5",
  "PA4": "H6",
  "PA3": "H7",
  "VDDA": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDIO2: "power_in", PA15: "bidirectional", PC10: "bidirectional", PD2: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VSS_A7: "power_in", VDD_A8: "power_in", PA12: "bidirectional", VSS_B2: "passive", PA14: "bidirectional", PC12: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC13: "bidirectional", VBAT: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PC11: "bidirectional", PB5: "bidirectional", PF11: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PC7: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PC2: "bidirectional", NRST: "input", PF0: "bidirectional", PC6: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA7: "bidirectional", PA2: "bidirectional", PC3: "bidirectional", PC0: "bidirectional", PF1: "bidirectional", PB15: "bidirectional", PB13: "bidirectional", PB1: "bidirectional", PC5: "bidirectional", PA5: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PC1: "bidirectional", PB14: "bidirectional", PB12: "bidirectional", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", VDD_G6: "power_in", VSS_G7: "passive", VSSA: "power_in", VDD_H1: "power_in", VSS_H2: "passive", PB11: "bidirectional", PB2: "bidirectional", PC4: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", VDDA: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091RCYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128-256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 88 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091V_B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091vb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F091V_B_C_Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "PF11": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091V_B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 128KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 88 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091vb.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F091VBTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "PF11": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 88 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091VCHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091vc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F091VCHx extends Component.withPins({
  "PE3": "A1",
  "PE1": "A2",
  "PB8": "A3",
  "PF11": "A4",
  "PD7": "A5",
  "PD5": "A6",
  "PB4": "A7",
  "PB3": "A8",
  "PA15": "A9",
  "PA14": "A10",
  "PA13": "A11",
  "PA12": "A12",
  "PE4": "B1",
  "PE2": "B2",
  "PB9": "B3",
  "PB7": "B4",
  "PB6": "B5",
  "PD6": "B6",
  "PD4": "B7",
  "PD3": "B8",
  "PD1": "B9",
  "PC12": "B10",
  "PC10": "B11",
  "PA11": "B12",
  "PC13": "C1",
  "PE5": "C2",
  "PE0": "C3",
  "VDD_C4": "C4",
  "PB5": "C5",
  "PD2": "C8",
  "PD0": "C9",
  "PC11": "C10",
  "PF6": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "NC": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "PF2": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VSSA": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
  "PF3": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "PB11": "L11",
  "PB12": "L12",
  "VDDA": "M1",
  "PA1": "M2",
  "PA4": "M3",
  "PA7": "M4",
  "PB0": "M5",
  "PB1": "M6",
  "PE7": "M7",
  "PE9": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PE14": "M11",
  "PE15": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", PF11: "bidirectional", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", NC: "no_connect", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PF3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091VCHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 2.0-3.6V, 88 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F091VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f091vc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F091VCTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "PF11": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F091VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 1.65-1.95V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F098CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f098cc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F098CCTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "NPOR": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F098CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 1.65-1.95V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F098CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f098cc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32F098CCUx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "VSSA": "8",
  "VDDA": "9",
  "PA0": "10",
  "PA1": "11",
  "PA2": "12",
  "PA3": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PB0": "18",
  "PB1": "19",
  "NPOR": "20",
  "PB10": "21",
  "PB11": "22",
  "VSS_23": "23",
  "VDD_24": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "PA13": "34",
  "VSS_35": "35",
  "VDDIO2": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF11": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F098CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 1.65-1.95V, 51 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F098RCHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f098rc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32F098RCHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VBAT": "B2",
  "PB8": "B3",
  "PF11": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PF0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PF1": "D1",
  "VDD_D2": "D2",
  "PB6": "D3",
  "VSS_D4": "D4",
  "VSS_D5": "D5",
  "VSS_D6": "D6",
  "PA8": "D7",
  "PC9": "D8",
  "NRST": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDD_E5": "E5",
  "VDDIO2": "E6",
  "PC7": "E7",
  "PC8": "E8",
  "VSSA": "F1",
  "PC2": "F2",
  "PA2": "F3",
  "PA5": "F4",
  "PB0": "F5",
  "PC6": "F6",
  "PB15": "F7",
  "PB14": "F8",
  "PC3": "G1",
  "PA0": "G2",
  "PA3": "G3",
  "PA6": "G4",
  "PB1": "G5",
  "NPOR": "G6",
  "PB10": "G7",
  "PB13": "G8",
  "VDDA": "H1",
  "PA1": "H2",
  "PA4": "H3",
  "PA7": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB11": "H7",
  "PB12": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", PF11: "bidirectional", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDDIO2: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F098RCHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 1.65-1.95V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F098RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f098rc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F098RCTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "NRST": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "VSSA": "12",
  "VDDA": "13",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
  "VSS_18": "18",
  "VDD_19": "19",
  "PA4": "20",
  "PA5": "21",
  "PA6": "22",
  "PA7": "23",
  "PC4": "24",
  "PC5": "25",
  "PB0": "26",
  "PB1": "27",
  "NPOR": "28",
  "PB10": "29",
  "PB11": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "PB12": "33",
  "PB13": "34",
  "PB14": "35",
  "PB15": "36",
  "PC6": "37",
  "PC7": "38",
  "PC8": "39",
  "PC9": "40",
  "PA8": "41",
  "PA9": "42",
  "PA10": "43",
  "PA11": "44",
  "PA12": "45",
  "PA13": "46",
  "VSS_47": "47",
  "VDDIO2": "48",
  "PA14": "49",
  "PA15": "50",
  "PC10": "51",
  "PC11": "52",
  "PC12": "53",
  "PD2": "54",
  "PB3": "55",
  "PB4": "56",
  "PB5": "57",
  "PB6": "58",
  "PB7": "59",
  "PF11": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F098RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 1.65-1.95V, 51 GPIO, WLCSP64
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F098RCYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die442*.
 * @see https://www.st.com/resource/en/datasheet/stm32f098rc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_CSP:ST_WLCSP-64_Die442.
 */
export class STM32F098RCYx extends Component.withPins({
  "VDDIO2": "A1",
  "PA15": "A2",
  "PC10": "A3",
  "PD2": "A4",
  "PB6": "A5",
  "PB8": "A6",
  "VSS_A7": "A7",
  "VDD_A8": "A8",
  "PA12": "B1",
  "VSS_B2": "B2",
  "PA14": "B3",
  "PC12": "B4",
  "PB7": "B5",
  "PB9": "B6",
  "PC13": "B7",
  "VBAT": "B8",
  "PA9": "C1",
  "PA10": "C2",
  "PA13": "C3",
  "PC11": "C4",
  "PB5": "C5",
  "PF11": "C6",
  "PC15": "C7",
  "PC14": "C8",
  "PC7": "D1",
  "PA8": "D2",
  "PA11": "D3",
  "PB3": "D4",
  "PB4": "D5",
  "PC2": "D6",
  "NRST": "D7",
  "PF0": "D8",
  "PC6": "E1",
  "PC8": "E2",
  "PC9": "E3",
  "PA7": "E4",
  "PA2": "E5",
  "PC3": "E6",
  "PC0": "E7",
  "PF1": "E8",
  "PB15": "F1",
  "PB13": "F2",
  "PB1": "F3",
  "PC5": "F4",
  "PA5": "F5",
  "PA1": "F6",
  "PA0": "F7",
  "PC1": "F8",
  "PB14": "G1",
  "PB12": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "VDD_G6": "G6",
  "VSS_G7": "G7",
  "VSSA": "G8",
  "VDD_H1": "H1",
  "VSS_H2": "H2",
  "PB11": "H3",
  "NPOR": "H4",
  "PC4": "H5",
  "PA4": "H6",
  "PA3": "H7",
  "VDDA": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDIO2: "power_in", PA15: "bidirectional", PC10: "bidirectional", PD2: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VSS_A7: "power_in", VDD_A8: "power_in", PA12: "bidirectional", VSS_B2: "passive", PA14: "bidirectional", PC12: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC13: "bidirectional", VBAT: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PC11: "bidirectional", PB5: "bidirectional", PF11: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PC7: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PC2: "bidirectional", NRST: "input", PF0: "bidirectional", PC6: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA7: "bidirectional", PA2: "bidirectional", PC3: "bidirectional", PC0: "bidirectional", PF1: "bidirectional", PB15: "bidirectional", PB13: "bidirectional", PB1: "bidirectional", PC5: "bidirectional", PA5: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PC1: "bidirectional", PB14: "bidirectional", PB12: "bidirectional", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", VDD_G6: "power_in", VSS_G7: "passive", VSSA: "power_in", VDD_H1: "power_in", VSS_H2: "passive", PB11: "bidirectional", NPOR: "input", PC4: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", VDDA: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F098RCYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 1.65-1.95V, 87 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F098VCHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f098vc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F098VCHx extends Component.withPins({
  "PE3": "A1",
  "PE1": "A2",
  "PB8": "A3",
  "PF11": "A4",
  "PD7": "A5",
  "PD5": "A6",
  "PB4": "A7",
  "PB3": "A8",
  "PA15": "A9",
  "PA14": "A10",
  "PA13": "A11",
  "PA12": "A12",
  "PE4": "B1",
  "PE2": "B2",
  "PB9": "B3",
  "PB7": "B4",
  "PB6": "B5",
  "PD6": "B6",
  "PD4": "B7",
  "PD3": "B8",
  "PD1": "B9",
  "PC12": "B10",
  "PC10": "B11",
  "PA11": "B12",
  "PC13": "C1",
  "PE5": "C2",
  "PE0": "C3",
  "VDD_C4": "C4",
  "PB5": "C5",
  "PD2": "C8",
  "PD0": "C9",
  "PC11": "C10",
  "PF6": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "NC": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "PF2": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VSSA": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
  "PF3": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "NPOR": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "PB11": "L11",
  "PB12": "L12",
  "VDDA": "M1",
  "PA1": "M2",
  "PA4": "M3",
  "PA7": "M4",
  "PB0": "M5",
  "PB1": "M6",
  "PE7": "M7",
  "PE9": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PE14": "M11",
  "PE15": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", PF11: "bidirectional", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", NC: "no_connect", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PF3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", NPOR: "input", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F098VCHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0 MCU, 256KB flash, 32KB RAM, 48 MHz, 1.65-1.95V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F0:STM32F098VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f098vc.pdf
 * Keywords: Arm Cortex-M0 STM32F0 STM32F0x8.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F098VCTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PF9": "10",
  "PF10": "11",
  "PF0": "12",
  "PF1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PF2": "19",
  "VSSA": "20",
  "VDDA": "21",
  "PF3": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "VSS_27": "27",
  "VDD_28": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "NPOR": "37",
  "PE7": "38",
  "PE8": "39",
  "PE9": "40",
  "PE10": "41",
  "PE11": "42",
  "PE12": "43",
  "PE13": "44",
  "PE14": "45",
  "PE15": "46",
  "PB10": "47",
  "PB11": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PD8": "55",
  "PD9": "56",
  "PD10": "57",
  "PD11": "58",
  "PD12": "59",
  "PD13": "60",
  "PD14": "61",
  "PD15": "62",
  "PC6": "63",
  "PC7": "64",
  "PC8": "65",
  "PC9": "66",
  "PA8": "67",
  "PA9": "68",
  "PA10": "69",
  "PA11": "70",
  "PA12": "71",
  "PA13": "72",
  "PF6": "73",
  "VSS_74": "74",
  "VDDIO2": "75",
  "PA14": "76",
  "PA15": "77",
  "PC10": "78",
  "PC11": "79",
  "PC12": "80",
  "PD0": "81",
  "PD1": "82",
  "PD2": "83",
  "PD3": "84",
  "PD4": "85",
  "PD5": "86",
  "PD6": "87",
  "PD7": "88",
  "PB3": "89",
  "PB4": "90",
  "PB5": "91",
  "PB6": "92",
  "PB7": "93",
  "PF11": "94",
  "PB8": "95",
  "PB9": "96",
  "PE0": "97",
  "PE1": "98",
  "VSS_99": "99",
  "VDD_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PF3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF11: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F0:STM32F098VCTx";
  override referencePrefix = "U";
}
