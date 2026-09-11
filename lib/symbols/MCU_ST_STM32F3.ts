// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301c6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F301C_6_8_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301c6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F301C6Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F301C8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301C8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die439*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die439.
 */
export class STM32F301C8Yx extends Component.withPins({
  "PA14": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB4": "A4",
  "BOOT0": "A5",
  "VDDA": "A6",
  "NC": "A7",
  "VSS_B1": "B1",
  "VDD_B2": "B2",
  "PA13": "B3",
  "PB5": "B4",
  "PB8": "B5",
  "VBAT": "B6",
  "VDD_B7": "B7",
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
  "VSS_F7": "F7",
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
    super({ ...opts, pinTypes: { PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", BOOT0: "input", VDDA: "power_in", NC: "no_connect", VSS_B1: "power_in", VDD_B2: "power_in", PA13: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", VBAT: "power_in", VDD_B7: "power_in", PA11: "bidirectional", PA10: "bidirectional", PA12: "bidirectional", PB6: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_D3: "passive", PB7: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PB15: "bidirectional", PB12: "bidirectional", PB10: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", VSSA: "power_in", NRST: "input", PB14: "bidirectional", VDD_F2: "power_in", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA0: "bidirectional", VSS_F7: "passive", PB13: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301C8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301K_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F301K_6_8_Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F301K_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F301K6Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F301K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301K_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F301K_6_8_Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301K_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F301K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301k8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F301K8Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F301K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301k8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F301K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301R_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301r6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F301R_6_8_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301R_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301R6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301r6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F301R6Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301R6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F301R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f301r8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F301.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F301R8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F301R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302c6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F302C_6_8_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302c6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F302C6Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F302C8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302C8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die439*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die439.
 */
export class STM32F302C8Yx extends Component.withPins({
  "PA14": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB4": "A4",
  "BOOT0": "A5",
  "VDDA": "A6",
  "NC": "A7",
  "VSS_B1": "B1",
  "VDD_B2": "B2",
  "PA13": "B3",
  "PB5": "B4",
  "PB8": "B5",
  "VBAT": "B6",
  "VDD_B7": "B7",
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
  "VSS_F7": "F7",
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
    super({ ...opts, pinTypes: { PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", BOOT0: "input", VDDA: "power_in", NC: "no_connect", VSS_B1: "power_in", VDD_B2: "power_in", PA13: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", VBAT: "power_in", VDD_B7: "power_in", PA11: "bidirectional", PA10: "bidirectional", PA12: "bidirectional", PB6: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_D3: "passive", PB7: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PB15: "bidirectional", PB12: "bidirectional", PB10: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", VSSA: "power_in", NRST: "input", PB14: "bidirectional", VDD_F2: "power_in", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA0: "bidirectional", VSS_F7: "passive", PB13: "bidirectional", PB11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302C8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128-256KB flash, 32-40KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302C_B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302cb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F302C_B_C_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302C_B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 32KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302cb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F302CBTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 40KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302cc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F302CCTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302K_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F302K_6_8_Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302K_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F302K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302k8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F302K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302R_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302r6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F302R_6_8_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302R_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302R6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302r6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F302R6Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302R6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302r8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F302R8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128-256KB flash, 32-40KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302R_B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302rb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F302R_B_C_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302R_B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 32KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302rb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F302RBTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 40KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302rc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F302RCTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384-512KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302R_D-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302rd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F302R_D_E_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302R_D-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302RDTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302rd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F302RDTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302RDTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302RETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302re.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F302RETx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302RETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128-256KB flash, 32-40KB RAM, 72 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302V_B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302vb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F302V_B_C_Tx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "power_in", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302V_B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 32KB RAM, 72 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302vb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F302VBTx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "power_in", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 40KB RAM, 72 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302vc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F302VCTx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "power_in", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 40KB RAM, 72 MHz, 2.0-3.6V, 78 GPIO, WLCSP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302VCYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die422*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302vc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_CSP:ST_WLCSP-100_Die422.
 */
export class STM32F302VCYx extends Component.withPins({
  "VSS_A1": "A1",
  "VSS_A2": "A2",
  "PC12": "A3",
  "PD2": "A4",
  "PB3": "A5",
  "PB5": "A6",
  "BOOT0": "A7",
  "PE1": "A8",
  "VDD_A9": "A9",
  "VDD_A10": "A10",
  "VSS_B1": "B1",
  "PA15": "B2",
  "PD0": "B3",
  "PD3": "B4",
  "PB4": "B5",
  "PB6": "B6",
  "PE0": "B7",
  "VDD_B8": "B8",
  "PE5": "B9",
  "VDD_B10": "B10",
  "PF6": "C1",
  "PA14": "C2",
  "PD1": "C3",
  "PD4": "C4",
  "PB7": "C5",
  "PB9": "C6",
  "VSS_C7": "C7",
  "PE4": "C8",
  "PC13": "C9",
  "PC14": "C10",
  "PA12": "D1",
  "VDD_D2": "D2",
  "PC11": "D3",
  "PD7": "D4",
  "PB8": "D5",
  "PE2": "D6",
  "PE3": "D7",
  "VBAT": "D8",
  "PC15": "D9",
  "PF9": "D10",
  "PA10": "E1",
  "PA11": "E2",
  "PA13": "E3",
  "PC10": "E4",
  "PA9": "E5",
  "PE8": "E6",
  "PE6": "E7",
  "PF2": "E8",
  "NRST": "E9",
  "PF10": "E10",
  "PC8": "F1",
  "PC7": "F2",
  "PC9": "F3",
  "PC6": "F4",
  "PA8": "F5",
  "PC5": "F6",
  "PA2": "F7",
  "PE7": "F8",
  "PF1": "F9",
  "PF0": "F10",
  "PD15": "G1",
  "PD14": "G2",
  "PD13": "G3",
  "PD9": "G4",
  "PE12": "G5",
  "PC4": "G6",
  "PA3": "G7",
  "PC2": "G8",
  "PC1": "G9",
  "PC0": "G10",
  "PD12": "H1",
  "PD11": "H2",
  "PD10": "H3",
  "PB15": "H4",
  "PE11": "H5",
  "PA6": "H6",
  "PA5": "H7",
  "VSSA": "H8",
  "PA0": "H9",
  "PC3": "H10",
  "VSS_J1": "J1",
  "PB14": "J2",
  "PB13": "J3",
  "PB12": "J4",
  "VDD_J5": "J5",
  "PB0": "J6",
  "PA4": "J7",
  "VREF+": "J8",
  "PA1": "J9",
  "VDDA": "J10",
  "VSS_K1": "K1",
  "VSS_K2": "K2",
  "PB11": "K3",
  "PB10": "K4",
  "PB2": "K5",
  "PB1": "K6",
  "PA7": "K7",
  "VDD_K8": "K8",
  "VSS_K9": "K9",
  "VSS_K10": "K10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS_A1: "power_in", VSS_A2: "passive", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PE1: "bidirectional", VDD_A9: "power_in", VDD_A10: "power_in", VSS_B1: "passive", PA15: "bidirectional", PD0: "bidirectional", PD3: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PE0: "bidirectional", VDD_B8: "power_in", PE5: "bidirectional", VDD_B10: "power_in", PF6: "bidirectional", PA14: "bidirectional", PD1: "bidirectional", PD4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", VSS_C7: "passive", PE4: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PA12: "bidirectional", VDD_D2: "power_in", PC11: "bidirectional", PD7: "bidirectional", PB8: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", VBAT: "power_in", PC15: "bidirectional", PF9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA13: "bidirectional", PC10: "bidirectional", PA9: "bidirectional", PE8: "bidirectional", PE6: "bidirectional", PF2: "bidirectional", NRST: "input", PF10: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC9: "bidirectional", PC6: "bidirectional", PA8: "bidirectional", PC5: "bidirectional", PA2: "bidirectional", PE7: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PD9: "bidirectional", PE12: "bidirectional", PC4: "bidirectional", PA3: "bidirectional", PC2: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", PB15: "bidirectional", PE11: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", VSSA: "power_in", PA0: "bidirectional", PC3: "bidirectional", VSS_J1: "passive", PB14: "bidirectional", PB13: "bidirectional", PB12: "bidirectional", VDD_J5: "power_in", PB0: "bidirectional", PA4: "bidirectional", "VREF+": "input", PA1: "bidirectional", VDDA: "power_in", VSS_K1: "passive", VSS_K2: "passive", PB11: "bidirectional", PB10: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PA7: "bidirectional", VDD_K8: "power_in", VSS_K9: "passive", VSS_K10: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302VCYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384-512KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302V_D-E_Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302vd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F302V_D_E_Hx extends Component.withPins({
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
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
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
  "VDDA": "L1",
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
  "VREF+": "M1",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", "VREF+": "input", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302V_D-E_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302VDHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302vd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F302VDHx extends Component.withPins({
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
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
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
  "VDDA": "L1",
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
  "VREF+": "M1",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", "VREF+": "input", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302VDHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384-512KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302V_D-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302vd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F302V_D_E_Tx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302V_D-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302VDTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302vd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F302VDTx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302VDTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302VEHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302ve.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F302VEHx extends Component.withPins({
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
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
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
  "VDDA": "L1",
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
  "VREF+": "M1",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", "VREF+": "input", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302VEHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302ve.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F302VETx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302VETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384-512KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 115 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302Z_D-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302zd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 */
export class STM32F302Z_D_E_Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH0": "10",
  "PH1": "11",
  "PF2": "12",
  "PF3": "13",
  "PF4": "14",
  "PF5": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PF6": "18",
  "PF7": "19",
  "PF8": "20",
  "PF9": "21",
  "PF10": "22",
  "PF0": "23",
  "PF1": "24",
  "NRST": "25",
  "PC0": "26",
  "PC1": "27",
  "PC2": "28",
  "PC3": "29",
  "VSSA": "30",
  "VREF-": "31",
  "VREF+": "32",
  "VDDA": "33",
  "PA0": "34",
  "PA1": "35",
  "PA2": "36",
  "PA3": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PA4": "40",
  "PA5": "41",
  "PA6": "42",
  "PA7": "43",
  "PC4": "44",
  "PC5": "45",
  "PB0": "46",
  "PB1": "47",
  "PB2": "48",
  "PF11": "49",
  "PF12": "50",
  "VSS_51": "51",
  "VDD_52": "52",
  "PF13": "53",
  "PF14": "54",
  "PF15": "55",
  "PG0": "56",
  "PG1": "57",
  "PE7": "58",
  "PE8": "59",
  "PE9": "60",
  "VSS_61": "61",
  "VDD_62": "62",
  "PE10": "63",
  "PE11": "64",
  "PE12": "65",
  "PE13": "66",
  "PE14": "67",
  "PE15": "68",
  "PB10": "69",
  "PB11": "70",
  "VSS_71": "71",
  "VDD_72": "72",
  "PB12": "73",
  "PB13": "74",
  "PB14": "75",
  "PB15": "76",
  "PD8": "77",
  "PD9": "78",
  "PD10": "79",
  "PD11": "80",
  "PD12": "81",
  "PD13": "82",
  "VSS_83": "83",
  "VDD_84": "84",
  "PD14": "85",
  "PD15": "86",
  "PG2": "87",
  "PG3": "88",
  "PG4": "89",
  "PG5": "90",
  "PG6": "91",
  "PG7": "92",
  "PG8": "93",
  "VSS_94": "94",
  "VDD_95": "95",
  "PC6": "96",
  "PC7": "97",
  "PC8": "98",
  "PC9": "99",
  "PA8": "100",
  "PA9": "101",
  "PA10": "102",
  "PA11": "103",
  "PA12": "104",
  "PA13": "105",
  "PH2": "106",
  "VSS_107": "107",
  "VDD_108": "108",
  "PA14": "109",
  "PA15": "110",
  "PC10": "111",
  "PC11": "112",
  "PC12": "113",
  "PD0": "114",
  "PD1": "115",
  "PD2": "116",
  "PD3": "117",
  "PD4": "118",
  "PD5": "119",
  "VSS_120": "120",
  "VDD_121": "121",
  "PD6": "122",
  "PD7": "123",
  "PG9": "124",
  "PG10": "125",
  "PG11": "126",
  "PG12": "127",
  "PG13": "128",
  "PG14": "129",
  "VSS_130": "130",
  "VDD_131": "131",
  "PG15": "132",
  "PB3": "133",
  "PB4": "134",
  "PB5": "135",
  "PB6": "136",
  "PB7": "137",
  "BOOT0": "138",
  "PB8": "139",
  "PB9": "140",
  "PE0": "141",
  "PE1": "142",
  "VSS_143": "143",
  "VDD_144": "144",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PF6: "bidirectional", PF7: "bidirectional", PF8: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_38: "passive", VDD_39: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", VSS_51: "passive", VDD_52: "power_in", PF13: "bidirectional", PF14: "bidirectional", PF15: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSS_61: "passive", VDD_62: "power_in", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_71: "passive", VDD_72: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", VSS_83: "passive", VDD_84: "power_in", PD14: "bidirectional", PD15: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PG8: "bidirectional", VSS_94: "passive", VDD_95: "power_in", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PH2: "bidirectional", VSS_107: "passive", VDD_108: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", VSS_120: "passive", VDD_121: "power_in", PD6: "bidirectional", PD7: "bidirectional", PG9: "bidirectional", PG10: "bidirectional", PG11: "bidirectional", PG12: "bidirectional", PG13: "bidirectional", PG14: "bidirectional", VSS_130: "passive", VDD_131: "power_in", PG15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_143: "passive", VDD_144: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302Z_D-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 115 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302ZDTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302zd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 */
export class STM32F302ZDTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH0": "10",
  "PH1": "11",
  "PF2": "12",
  "PF3": "13",
  "PF4": "14",
  "PF5": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PF6": "18",
  "PF7": "19",
  "PF8": "20",
  "PF9": "21",
  "PF10": "22",
  "PF0": "23",
  "PF1": "24",
  "NRST": "25",
  "PC0": "26",
  "PC1": "27",
  "PC2": "28",
  "PC3": "29",
  "VSSA": "30",
  "VREF-": "31",
  "VREF+": "32",
  "VDDA": "33",
  "PA0": "34",
  "PA1": "35",
  "PA2": "36",
  "PA3": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PA4": "40",
  "PA5": "41",
  "PA6": "42",
  "PA7": "43",
  "PC4": "44",
  "PC5": "45",
  "PB0": "46",
  "PB1": "47",
  "PB2": "48",
  "PF11": "49",
  "PF12": "50",
  "VSS_51": "51",
  "VDD_52": "52",
  "PF13": "53",
  "PF14": "54",
  "PF15": "55",
  "PG0": "56",
  "PG1": "57",
  "PE7": "58",
  "PE8": "59",
  "PE9": "60",
  "VSS_61": "61",
  "VDD_62": "62",
  "PE10": "63",
  "PE11": "64",
  "PE12": "65",
  "PE13": "66",
  "PE14": "67",
  "PE15": "68",
  "PB10": "69",
  "PB11": "70",
  "VSS_71": "71",
  "VDD_72": "72",
  "PB12": "73",
  "PB13": "74",
  "PB14": "75",
  "PB15": "76",
  "PD8": "77",
  "PD9": "78",
  "PD10": "79",
  "PD11": "80",
  "PD12": "81",
  "PD13": "82",
  "VSS_83": "83",
  "VDD_84": "84",
  "PD14": "85",
  "PD15": "86",
  "PG2": "87",
  "PG3": "88",
  "PG4": "89",
  "PG5": "90",
  "PG6": "91",
  "PG7": "92",
  "PG8": "93",
  "VSS_94": "94",
  "VDD_95": "95",
  "PC6": "96",
  "PC7": "97",
  "PC8": "98",
  "PC9": "99",
  "PA8": "100",
  "PA9": "101",
  "PA10": "102",
  "PA11": "103",
  "PA12": "104",
  "PA13": "105",
  "PH2": "106",
  "VSS_107": "107",
  "VDD_108": "108",
  "PA14": "109",
  "PA15": "110",
  "PC10": "111",
  "PC11": "112",
  "PC12": "113",
  "PD0": "114",
  "PD1": "115",
  "PD2": "116",
  "PD3": "117",
  "PD4": "118",
  "PD5": "119",
  "VSS_120": "120",
  "VDD_121": "121",
  "PD6": "122",
  "PD7": "123",
  "PG9": "124",
  "PG10": "125",
  "PG11": "126",
  "PG12": "127",
  "PG13": "128",
  "PG14": "129",
  "VSS_130": "130",
  "VDD_131": "131",
  "PG15": "132",
  "PB3": "133",
  "PB4": "134",
  "PB5": "135",
  "PB6": "136",
  "PB7": "137",
  "BOOT0": "138",
  "PB8": "139",
  "PB9": "140",
  "PE0": "141",
  "PE1": "142",
  "VSS_143": "143",
  "VDD_144": "144",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PF6: "bidirectional", PF7: "bidirectional", PF8: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_38: "passive", VDD_39: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", VSS_51: "passive", VDD_52: "power_in", PF13: "bidirectional", PF14: "bidirectional", PF15: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSS_61: "passive", VDD_62: "power_in", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_71: "passive", VDD_72: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", VSS_83: "passive", VDD_84: "power_in", PD14: "bidirectional", PD15: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PG8: "bidirectional", VSS_94: "passive", VDD_95: "power_in", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PH2: "bidirectional", VSS_107: "passive", VDD_108: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", VSS_120: "passive", VDD_121: "power_in", PD6: "bidirectional", PD7: "bidirectional", PG9: "bidirectional", PG10: "bidirectional", PG11: "bidirectional", PG12: "bidirectional", PG13: "bidirectional", PG14: "bidirectional", VSS_130: "passive", VDD_131: "power_in", PG15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_143: "passive", VDD_144: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302ZDTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 64KB RAM, 72 MHz, 2.0-3.6V, 115 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F302ZETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f302ze.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F302.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 */
export class STM32F302ZETx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH0": "10",
  "PH1": "11",
  "PF2": "12",
  "PF3": "13",
  "PF4": "14",
  "PF5": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PF6": "18",
  "PF7": "19",
  "PF8": "20",
  "PF9": "21",
  "PF10": "22",
  "PF0": "23",
  "PF1": "24",
  "NRST": "25",
  "PC0": "26",
  "PC1": "27",
  "PC2": "28",
  "PC3": "29",
  "VSSA": "30",
  "VREF-": "31",
  "VREF+": "32",
  "VDDA": "33",
  "PA0": "34",
  "PA1": "35",
  "PA2": "36",
  "PA3": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PA4": "40",
  "PA5": "41",
  "PA6": "42",
  "PA7": "43",
  "PC4": "44",
  "PC5": "45",
  "PB0": "46",
  "PB1": "47",
  "PB2": "48",
  "PF11": "49",
  "PF12": "50",
  "VSS_51": "51",
  "VDD_52": "52",
  "PF13": "53",
  "PF14": "54",
  "PF15": "55",
  "PG0": "56",
  "PG1": "57",
  "PE7": "58",
  "PE8": "59",
  "PE9": "60",
  "VSS_61": "61",
  "VDD_62": "62",
  "PE10": "63",
  "PE11": "64",
  "PE12": "65",
  "PE13": "66",
  "PE14": "67",
  "PE15": "68",
  "PB10": "69",
  "PB11": "70",
  "VSS_71": "71",
  "VDD_72": "72",
  "PB12": "73",
  "PB13": "74",
  "PB14": "75",
  "PB15": "76",
  "PD8": "77",
  "PD9": "78",
  "PD10": "79",
  "PD11": "80",
  "PD12": "81",
  "PD13": "82",
  "VSS_83": "83",
  "VDD_84": "84",
  "PD14": "85",
  "PD15": "86",
  "PG2": "87",
  "PG3": "88",
  "PG4": "89",
  "PG5": "90",
  "PG6": "91",
  "PG7": "92",
  "PG8": "93",
  "VSS_94": "94",
  "VDD_95": "95",
  "PC6": "96",
  "PC7": "97",
  "PC8": "98",
  "PC9": "99",
  "PA8": "100",
  "PA9": "101",
  "PA10": "102",
  "PA11": "103",
  "PA12": "104",
  "PA13": "105",
  "PH2": "106",
  "VSS_107": "107",
  "VDD_108": "108",
  "PA14": "109",
  "PA15": "110",
  "PC10": "111",
  "PC11": "112",
  "PC12": "113",
  "PD0": "114",
  "PD1": "115",
  "PD2": "116",
  "PD3": "117",
  "PD4": "118",
  "PD5": "119",
  "VSS_120": "120",
  "VDD_121": "121",
  "PD6": "122",
  "PD7": "123",
  "PG9": "124",
  "PG10": "125",
  "PG11": "126",
  "PG12": "127",
  "PG13": "128",
  "PG14": "129",
  "VSS_130": "130",
  "VDD_131": "131",
  "PG15": "132",
  "PB3": "133",
  "PB4": "134",
  "PB5": "135",
  "PB6": "136",
  "PB7": "137",
  "BOOT0": "138",
  "PB8": "139",
  "PB9": "140",
  "PE0": "141",
  "PE1": "142",
  "VSS_143": "143",
  "VDD_144": "144",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PF6: "bidirectional", PF7: "bidirectional", PF8: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_38: "passive", VDD_39: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", VSS_51: "passive", VDD_52: "power_in", PF13: "bidirectional", PF14: "bidirectional", PF15: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSS_61: "passive", VDD_62: "power_in", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_71: "passive", VDD_72: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", VSS_83: "passive", VDD_84: "power_in", PD14: "bidirectional", PD15: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PG8: "bidirectional", VSS_94: "passive", VDD_95: "power_in", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PH2: "bidirectional", VSS_107: "passive", VDD_108: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", VSS_120: "passive", VDD_121: "power_in", PD6: "bidirectional", PD7: "bidirectional", PG9: "bidirectional", PG10: "bidirectional", PG11: "bidirectional", PG12: "bidirectional", PG13: "bidirectional", PG14: "bidirectional", VSS_130: "passive", VDD_131: "power_in", PG15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_143: "passive", VDD_144: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F302ZETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303c6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F303C_6_8_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303c6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F303C6Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F303C8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 38 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303C8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die438*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die438.
 */
export class STM32F303C8Yx extends Component.withPins({
  "PA14": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB6": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "VSS_B1": "B1",
  "VDD_B2": "B2",
  "PB4": "B3",
  "PB5": "B4",
  "PB7": "B5",
  "PB8": "B6",
  "VSS_B7": "B7",
  "PA11": "C1",
  "PA13": "C2",
  "PA12": "C3",
  "PA10": "C4",
  "PC3": "C5",
  "PF1": "C6",
  "PF0": "C7",
  "PA8": "D1",
  "PA9": "D2",
  "PB15": "D3",
  "PC7": "D4",
  "PA2": "D5",
  "PA0": "D6",
  "NRST": "D7",
  "PB14": "E1",
  "PB13": "E2",
  "PC5": "E3",
  "PA6": "E4",
  "PA3": "E5",
  "VDDA": "E6",
  "VSSA": "E7",
  "PB12": "F1",
  "PB2": "F2",
  "PB0": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "VSS_F6": "F6",
  "VREF+": "F7",
  "PB11": "G1",
  "PB10": "G2",
  "PB1": "G3",
  "PC4": "G4",
  "PA5": "G5",
  "VDD_G6": "G6",
  "PA1": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", VSS_B1: "power_in", VDD_B2: "power_in", PB4: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_B7: "passive", PA11: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PA10: "bidirectional", PC3: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB15: "bidirectional", PC7: "bidirectional", PA2: "bidirectional", PA0: "bidirectional", NRST: "input", PB14: "bidirectional", PB13: "bidirectional", PC5: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", VDDA: "power_in", VSSA: "power_in", PB12: "bidirectional", PB2: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", VSS_F6: "passive", "VREF+": "input", PB11: "bidirectional", PB10: "bidirectional", PB1: "bidirectional", PC4: "bidirectional", PA5: "bidirectional", VDD_G6: "power_in", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303C8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128-256KB flash, 40-48KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303C_B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303cb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F303C_B_C_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303C_B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 40KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303cb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F303CBTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 48KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303cc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F303CCTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303K_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F303K_6_8_Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F303K_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F303K6Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F303K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303K_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x3.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F303K_6_8_Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303K_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x3.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F303K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303k8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F303K8Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F303K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303k8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x3.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F303K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303R_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303r6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F303R_6_8_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303R_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303R6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303r6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F303R6Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303R6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303r8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F303R8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128-256KB flash, 40-48KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303R_B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303rb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F303R_B_C_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303R_B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 40KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303rb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F303RBTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 48KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303rc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F303RCTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384-512KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303R_D-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303rd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F303R_D_E_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303R_D-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303RDTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303rd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F303RDTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303RDTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303RETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303re.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F303RETx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303RETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128-256KB flash, 40-48KB RAM, 72 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303V_B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303vb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F303V_B_C_Tx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "power_in", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303V_B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 40KB RAM, 72 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303vb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F303VBTx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "power_in", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 48KB RAM, 72 MHz, 2.0-3.6V, 87 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303vc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F303VCTx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "power_in", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 48KB RAM, 72 MHz, 2.0-3.6V, 78 GPIO, WLCSP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303VCYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die422*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303vc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_CSP:ST_WLCSP-100_Die422.
 */
export class STM32F303VCYx extends Component.withPins({
  "VSS_A1": "A1",
  "VSS_A2": "A2",
  "PC12": "A3",
  "PD2": "A4",
  "PB3": "A5",
  "PB5": "A6",
  "BOOT0": "A7",
  "PE1": "A8",
  "VDD_A9": "A9",
  "VDD_A10": "A10",
  "VSS_B1": "B1",
  "PA15": "B2",
  "PD0": "B3",
  "PD3": "B4",
  "PB4": "B5",
  "PB6": "B6",
  "PE0": "B7",
  "VDD_B8": "B8",
  "PE5": "B9",
  "VDD_B10": "B10",
  "PF6": "C1",
  "PA14": "C2",
  "PD1": "C3",
  "PD4": "C4",
  "PB7": "C5",
  "PB9": "C6",
  "VSS_C7": "C7",
  "PE4": "C8",
  "PC13": "C9",
  "PC14": "C10",
  "PA12": "D1",
  "VDD_D2": "D2",
  "PC11": "D3",
  "PD7": "D4",
  "PB8": "D5",
  "PE2": "D6",
  "PE3": "D7",
  "VBAT": "D8",
  "PC15": "D9",
  "PF9": "D10",
  "PA10": "E1",
  "PA11": "E2",
  "PA13": "E3",
  "PC10": "E4",
  "PA9": "E5",
  "PE8": "E6",
  "PE6": "E7",
  "PF2": "E8",
  "NRST": "E9",
  "PF10": "E10",
  "PC8": "F1",
  "PC7": "F2",
  "PC9": "F3",
  "PC6": "F4",
  "PA8": "F5",
  "PC5": "F6",
  "PA2": "F7",
  "PE7": "F8",
  "PF1": "F9",
  "PF0": "F10",
  "PD15": "G1",
  "PD14": "G2",
  "PD13": "G3",
  "PD9": "G4",
  "PE12": "G5",
  "PC4": "G6",
  "PA3": "G7",
  "PC2": "G8",
  "PC1": "G9",
  "PC0": "G10",
  "PD12": "H1",
  "PD11": "H2",
  "PD10": "H3",
  "PB15": "H4",
  "PE11": "H5",
  "PA6": "H6",
  "PA5": "H7",
  "VSSA": "H8",
  "PA0": "H9",
  "PC3": "H10",
  "VSS_J1": "J1",
  "PB14": "J2",
  "PB13": "J3",
  "PB12": "J4",
  "VDD_J5": "J5",
  "PB0": "J6",
  "PA4": "J7",
  "VREF+": "J8",
  "PA1": "J9",
  "VDDA": "J10",
  "VSS_K1": "K1",
  "VSS_K2": "K2",
  "PB11": "K3",
  "PB10": "K4",
  "PB2": "K5",
  "PB1": "K6",
  "PA7": "K7",
  "VDD_K8": "K8",
  "VSS_K9": "K9",
  "VSS_K10": "K10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS_A1: "power_in", VSS_A2: "passive", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PE1: "bidirectional", VDD_A9: "power_in", VDD_A10: "power_in", VSS_B1: "passive", PA15: "bidirectional", PD0: "bidirectional", PD3: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PE0: "bidirectional", VDD_B8: "power_in", PE5: "bidirectional", VDD_B10: "power_in", PF6: "bidirectional", PA14: "bidirectional", PD1: "bidirectional", PD4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", VSS_C7: "passive", PE4: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PA12: "bidirectional", VDD_D2: "power_in", PC11: "bidirectional", PD7: "bidirectional", PB8: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", VBAT: "power_in", PC15: "bidirectional", PF9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA13: "bidirectional", PC10: "bidirectional", PA9: "bidirectional", PE8: "bidirectional", PE6: "bidirectional", PF2: "bidirectional", NRST: "input", PF10: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC9: "bidirectional", PC6: "bidirectional", PA8: "bidirectional", PC5: "bidirectional", PA2: "bidirectional", PE7: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PD9: "bidirectional", PE12: "bidirectional", PC4: "bidirectional", PA3: "bidirectional", PC2: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", PB15: "bidirectional", PE11: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", VSSA: "power_in", PA0: "bidirectional", PC3: "bidirectional", VSS_J1: "passive", PB14: "bidirectional", PB13: "bidirectional", PB12: "bidirectional", VDD_J5: "power_in", PB0: "bidirectional", PA4: "bidirectional", "VREF+": "input", PA1: "bidirectional", VDDA: "power_in", VSS_K1: "passive", VSS_K2: "passive", PB11: "bidirectional", PB10: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PA7: "bidirectional", VDD_K8: "power_in", VSS_K9: "passive", VSS_K10: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303VCYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384-512KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303V_D-E_Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303vd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F303V_D_E_Hx extends Component.withPins({
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
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
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
  "VDDA": "L1",
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
  "VREF+": "M1",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", "VREF+": "input", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303V_D-E_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303VDHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303vd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F303VDHx extends Component.withPins({
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
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
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
  "VDDA": "L1",
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
  "VREF+": "M1",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", "VREF+": "input", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303VDHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384-512KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303V_D-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303vd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F303V_D_E_Tx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303V_D-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303VDTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303vd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F303VDTx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303VDTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303VEHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303ve.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F303VEHx extends Component.withPins({
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
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
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
  "VDDA": "L1",
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
  "VREF+": "M1",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", "VREF+": "input", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303VEHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 86 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303ve.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F303VETx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303VETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 78 GPIO, WLCSP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303VEYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die446*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303ve.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_CSP:ST_WLCSP-100_Die446.
 */
export class STM32F303VEYx extends Component.withPins({
  "VSS_A1": "A1",
  "VSS_A2": "A2",
  "PC12": "A3",
  "PD2": "A4",
  "PB3": "A5",
  "PB5": "A6",
  "BOOT0": "A7",
  "PE1": "A8",
  "VDD_A9": "A9",
  "VDD_A10": "A10",
  "VSS_B1": "B1",
  "PA15": "B2",
  "PD0": "B3",
  "PD3": "B4",
  "PB4": "B5",
  "PB6": "B6",
  "PE0": "B7",
  "VDD_B8": "B8",
  "PE5": "B9",
  "VDD_B10": "B10",
  "PF6": "C1",
  "PA14": "C2",
  "PD1": "C3",
  "PD4": "C4",
  "PB7": "C5",
  "PB9": "C6",
  "VSS_C7": "C7",
  "PE4": "C8",
  "PC13": "C9",
  "PC14": "C10",
  "PA12": "D1",
  "VDD_D2": "D2",
  "PC11": "D3",
  "PD7": "D4",
  "PB8": "D5",
  "PE2": "D6",
  "PE3": "D7",
  "VBAT": "D8",
  "PC15": "D9",
  "PF9": "D10",
  "PA10": "E1",
  "PA11": "E2",
  "PA13": "E3",
  "PC10": "E4",
  "PA9": "E5",
  "PE8": "E6",
  "PE6": "E7",
  "PF2": "E8",
  "NRST": "E9",
  "PF10": "E10",
  "PC8": "F1",
  "PC7": "F2",
  "PC9": "F3",
  "PC6": "F4",
  "PA8": "F5",
  "PC5": "F6",
  "PA2": "F7",
  "PE7": "F8",
  "PF1": "F9",
  "PF0": "F10",
  "PD15": "G1",
  "PD14": "G2",
  "PD13": "G3",
  "PD9": "G4",
  "PE12": "G5",
  "PC4": "G6",
  "PA3": "G7",
  "PC2": "G8",
  "PC1": "G9",
  "PC0": "G10",
  "PD12": "H1",
  "PD11": "H2",
  "PD10": "H3",
  "PB15": "H4",
  "PE11": "H5",
  "PA6": "H6",
  "PA5": "H7",
  "VSSA": "H8",
  "PA0": "H9",
  "PC3": "H10",
  "VSS_J1": "J1",
  "PB14": "J2",
  "PB13": "J3",
  "PB12": "J4",
  "VDD_J5": "J5",
  "PB0": "J6",
  "PA4": "J7",
  "VREF+": "J8",
  "PA1": "J9",
  "VDDA": "J10",
  "VSS_K1": "K1",
  "VSS_K2": "K2",
  "PB11": "K3",
  "PB10": "K4",
  "PB2": "K5",
  "PB1": "K6",
  "PA7": "K7",
  "VDD_K8": "K8",
  "VSS_K9": "K9",
  "VSS_K10": "K10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS_A1: "power_in", VSS_A2: "passive", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PE1: "bidirectional", VDD_A9: "power_in", VDD_A10: "power_in", VSS_B1: "passive", PA15: "bidirectional", PD0: "bidirectional", PD3: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PE0: "bidirectional", VDD_B8: "power_in", PE5: "bidirectional", VDD_B10: "power_in", PF6: "bidirectional", PA14: "bidirectional", PD1: "bidirectional", PD4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", VSS_C7: "passive", PE4: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PA12: "bidirectional", VDD_D2: "power_in", PC11: "bidirectional", PD7: "bidirectional", PB8: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", VBAT: "power_in", PC15: "bidirectional", PF9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA13: "bidirectional", PC10: "bidirectional", PA9: "bidirectional", PE8: "bidirectional", PE6: "bidirectional", PF2: "bidirectional", NRST: "input", PF10: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC9: "bidirectional", PC6: "bidirectional", PA8: "bidirectional", PC5: "bidirectional", PA2: "bidirectional", PE7: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PD9: "bidirectional", PE12: "bidirectional", PC4: "bidirectional", PA3: "bidirectional", PC2: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", PB15: "bidirectional", PE11: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", VSSA: "power_in", PA0: "bidirectional", PC3: "bidirectional", VSS_J1: "passive", PB14: "bidirectional", PB13: "bidirectional", PB12: "bidirectional", VDD_J5: "power_in", PB0: "bidirectional", PA4: "bidirectional", "VREF+": "input", PA1: "bidirectional", VDDA: "power_in", VSS_K1: "passive", VSS_K2: "passive", PB11: "bidirectional", PB10: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PA7: "bidirectional", VDD_K8: "power_in", VSS_K9: "passive", VSS_K10: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303VEYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384-512KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 115 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303Z_D-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303zd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 */
export class STM32F303Z_D_E_Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH0": "10",
  "PH1": "11",
  "PF2": "12",
  "PF3": "13",
  "PF4": "14",
  "PF5": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PF6": "18",
  "PF7": "19",
  "PF8": "20",
  "PF9": "21",
  "PF10": "22",
  "PF0": "23",
  "PF1": "24",
  "NRST": "25",
  "PC0": "26",
  "PC1": "27",
  "PC2": "28",
  "PC3": "29",
  "VSSA": "30",
  "VREF-": "31",
  "VREF+": "32",
  "VDDA": "33",
  "PA0": "34",
  "PA1": "35",
  "PA2": "36",
  "PA3": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PA4": "40",
  "PA5": "41",
  "PA6": "42",
  "PA7": "43",
  "PC4": "44",
  "PC5": "45",
  "PB0": "46",
  "PB1": "47",
  "PB2": "48",
  "PF11": "49",
  "PF12": "50",
  "VSS_51": "51",
  "VDD_52": "52",
  "PF13": "53",
  "PF14": "54",
  "PF15": "55",
  "PG0": "56",
  "PG1": "57",
  "PE7": "58",
  "PE8": "59",
  "PE9": "60",
  "VSS_61": "61",
  "VDD_62": "62",
  "PE10": "63",
  "PE11": "64",
  "PE12": "65",
  "PE13": "66",
  "PE14": "67",
  "PE15": "68",
  "PB10": "69",
  "PB11": "70",
  "VSS_71": "71",
  "VDD_72": "72",
  "PB12": "73",
  "PB13": "74",
  "PB14": "75",
  "PB15": "76",
  "PD8": "77",
  "PD9": "78",
  "PD10": "79",
  "PD11": "80",
  "PD12": "81",
  "PD13": "82",
  "VSS_83": "83",
  "VDD_84": "84",
  "PD14": "85",
  "PD15": "86",
  "PG2": "87",
  "PG3": "88",
  "PG4": "89",
  "PG5": "90",
  "PG6": "91",
  "PG7": "92",
  "PG8": "93",
  "VSS_94": "94",
  "VDD_95": "95",
  "PC6": "96",
  "PC7": "97",
  "PC8": "98",
  "PC9": "99",
  "PA8": "100",
  "PA9": "101",
  "PA10": "102",
  "PA11": "103",
  "PA12": "104",
  "PA13": "105",
  "PH2": "106",
  "VSS_107": "107",
  "VDD_108": "108",
  "PA14": "109",
  "PA15": "110",
  "PC10": "111",
  "PC11": "112",
  "PC12": "113",
  "PD0": "114",
  "PD1": "115",
  "PD2": "116",
  "PD3": "117",
  "PD4": "118",
  "PD5": "119",
  "VSS_120": "120",
  "VDD_121": "121",
  "PD6": "122",
  "PD7": "123",
  "PG9": "124",
  "PG10": "125",
  "PG11": "126",
  "PG12": "127",
  "PG13": "128",
  "PG14": "129",
  "VSS_130": "130",
  "VDD_131": "131",
  "PG15": "132",
  "PB3": "133",
  "PB4": "134",
  "PB5": "135",
  "PB6": "136",
  "PB7": "137",
  "BOOT0": "138",
  "PB8": "139",
  "PB9": "140",
  "PE0": "141",
  "PE1": "142",
  "VSS_143": "143",
  "VDD_144": "144",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PF6: "bidirectional", PF7: "bidirectional", PF8: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_38: "passive", VDD_39: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", VSS_51: "passive", VDD_52: "power_in", PF13: "bidirectional", PF14: "bidirectional", PF15: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSS_61: "passive", VDD_62: "power_in", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_71: "passive", VDD_72: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", VSS_83: "passive", VDD_84: "power_in", PD14: "bidirectional", PD15: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PG8: "bidirectional", VSS_94: "passive", VDD_95: "power_in", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PH2: "bidirectional", VSS_107: "passive", VDD_108: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", VSS_120: "passive", VDD_121: "power_in", PD6: "bidirectional", PD7: "bidirectional", PG9: "bidirectional", PG10: "bidirectional", PG11: "bidirectional", PG12: "bidirectional", PG13: "bidirectional", PG14: "bidirectional", VSS_130: "passive", VDD_131: "power_in", PG15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_143: "passive", VDD_144: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303Z_D-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 384KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 115 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303ZDTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303zd.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 */
export class STM32F303ZDTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH0": "10",
  "PH1": "11",
  "PF2": "12",
  "PF3": "13",
  "PF4": "14",
  "PF5": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PF6": "18",
  "PF7": "19",
  "PF8": "20",
  "PF9": "21",
  "PF10": "22",
  "PF0": "23",
  "PF1": "24",
  "NRST": "25",
  "PC0": "26",
  "PC1": "27",
  "PC2": "28",
  "PC3": "29",
  "VSSA": "30",
  "VREF-": "31",
  "VREF+": "32",
  "VDDA": "33",
  "PA0": "34",
  "PA1": "35",
  "PA2": "36",
  "PA3": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PA4": "40",
  "PA5": "41",
  "PA6": "42",
  "PA7": "43",
  "PC4": "44",
  "PC5": "45",
  "PB0": "46",
  "PB1": "47",
  "PB2": "48",
  "PF11": "49",
  "PF12": "50",
  "VSS_51": "51",
  "VDD_52": "52",
  "PF13": "53",
  "PF14": "54",
  "PF15": "55",
  "PG0": "56",
  "PG1": "57",
  "PE7": "58",
  "PE8": "59",
  "PE9": "60",
  "VSS_61": "61",
  "VDD_62": "62",
  "PE10": "63",
  "PE11": "64",
  "PE12": "65",
  "PE13": "66",
  "PE14": "67",
  "PE15": "68",
  "PB10": "69",
  "PB11": "70",
  "VSS_71": "71",
  "VDD_72": "72",
  "PB12": "73",
  "PB13": "74",
  "PB14": "75",
  "PB15": "76",
  "PD8": "77",
  "PD9": "78",
  "PD10": "79",
  "PD11": "80",
  "PD12": "81",
  "PD13": "82",
  "VSS_83": "83",
  "VDD_84": "84",
  "PD14": "85",
  "PD15": "86",
  "PG2": "87",
  "PG3": "88",
  "PG4": "89",
  "PG5": "90",
  "PG6": "91",
  "PG7": "92",
  "PG8": "93",
  "VSS_94": "94",
  "VDD_95": "95",
  "PC6": "96",
  "PC7": "97",
  "PC8": "98",
  "PC9": "99",
  "PA8": "100",
  "PA9": "101",
  "PA10": "102",
  "PA11": "103",
  "PA12": "104",
  "PA13": "105",
  "PH2": "106",
  "VSS_107": "107",
  "VDD_108": "108",
  "PA14": "109",
  "PA15": "110",
  "PC10": "111",
  "PC11": "112",
  "PC12": "113",
  "PD0": "114",
  "PD1": "115",
  "PD2": "116",
  "PD3": "117",
  "PD4": "118",
  "PD5": "119",
  "VSS_120": "120",
  "VDD_121": "121",
  "PD6": "122",
  "PD7": "123",
  "PG9": "124",
  "PG10": "125",
  "PG11": "126",
  "PG12": "127",
  "PG13": "128",
  "PG14": "129",
  "VSS_130": "130",
  "VDD_131": "131",
  "PG15": "132",
  "PB3": "133",
  "PB4": "134",
  "PB5": "135",
  "PB6": "136",
  "PB7": "137",
  "BOOT0": "138",
  "PB8": "139",
  "PB9": "140",
  "PE0": "141",
  "PE1": "142",
  "VSS_143": "143",
  "VDD_144": "144",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PF6: "bidirectional", PF7: "bidirectional", PF8: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_38: "passive", VDD_39: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", VSS_51: "passive", VDD_52: "power_in", PF13: "bidirectional", PF14: "bidirectional", PF15: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSS_61: "passive", VDD_62: "power_in", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_71: "passive", VDD_72: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", VSS_83: "passive", VDD_84: "power_in", PD14: "bidirectional", PD15: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PG8: "bidirectional", VSS_94: "passive", VDD_95: "power_in", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PH2: "bidirectional", VSS_107: "passive", VDD_108: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", VSS_120: "passive", VDD_121: "power_in", PD6: "bidirectional", PD7: "bidirectional", PG9: "bidirectional", PG10: "bidirectional", PG11: "bidirectional", PG12: "bidirectional", PG13: "bidirectional", PG14: "bidirectional", VSS_130: "passive", VDD_131: "power_in", PG15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_143: "passive", VDD_144: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303ZDTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 80KB RAM, 72 MHz, 2.0-3.6V, 115 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F303ZETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f303ze.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F303.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 */
export class STM32F303ZETx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VBAT": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH0": "10",
  "PH1": "11",
  "PF2": "12",
  "PF3": "13",
  "PF4": "14",
  "PF5": "15",
  "VSS_16": "16",
  "VDD_17": "17",
  "PF6": "18",
  "PF7": "19",
  "PF8": "20",
  "PF9": "21",
  "PF10": "22",
  "PF0": "23",
  "PF1": "24",
  "NRST": "25",
  "PC0": "26",
  "PC1": "27",
  "PC2": "28",
  "PC3": "29",
  "VSSA": "30",
  "VREF-": "31",
  "VREF+": "32",
  "VDDA": "33",
  "PA0": "34",
  "PA1": "35",
  "PA2": "36",
  "PA3": "37",
  "VSS_38": "38",
  "VDD_39": "39",
  "PA4": "40",
  "PA5": "41",
  "PA6": "42",
  "PA7": "43",
  "PC4": "44",
  "PC5": "45",
  "PB0": "46",
  "PB1": "47",
  "PB2": "48",
  "PF11": "49",
  "PF12": "50",
  "VSS_51": "51",
  "VDD_52": "52",
  "PF13": "53",
  "PF14": "54",
  "PF15": "55",
  "PG0": "56",
  "PG1": "57",
  "PE7": "58",
  "PE8": "59",
  "PE9": "60",
  "VSS_61": "61",
  "VDD_62": "62",
  "PE10": "63",
  "PE11": "64",
  "PE12": "65",
  "PE13": "66",
  "PE14": "67",
  "PE15": "68",
  "PB10": "69",
  "PB11": "70",
  "VSS_71": "71",
  "VDD_72": "72",
  "PB12": "73",
  "PB13": "74",
  "PB14": "75",
  "PB15": "76",
  "PD8": "77",
  "PD9": "78",
  "PD10": "79",
  "PD11": "80",
  "PD12": "81",
  "PD13": "82",
  "VSS_83": "83",
  "VDD_84": "84",
  "PD14": "85",
  "PD15": "86",
  "PG2": "87",
  "PG3": "88",
  "PG4": "89",
  "PG5": "90",
  "PG6": "91",
  "PG7": "92",
  "PG8": "93",
  "VSS_94": "94",
  "VDD_95": "95",
  "PC6": "96",
  "PC7": "97",
  "PC8": "98",
  "PC9": "99",
  "PA8": "100",
  "PA9": "101",
  "PA10": "102",
  "PA11": "103",
  "PA12": "104",
  "PA13": "105",
  "PH2": "106",
  "VSS_107": "107",
  "VDD_108": "108",
  "PA14": "109",
  "PA15": "110",
  "PC10": "111",
  "PC11": "112",
  "PC12": "113",
  "PD0": "114",
  "PD1": "115",
  "PD2": "116",
  "PD3": "117",
  "PD4": "118",
  "PD5": "119",
  "VSS_120": "120",
  "VDD_121": "121",
  "PD6": "122",
  "PD7": "123",
  "PG9": "124",
  "PG10": "125",
  "PG11": "126",
  "PG12": "127",
  "PG13": "128",
  "PG14": "129",
  "VSS_130": "130",
  "VDD_131": "131",
  "PG15": "132",
  "PB3": "133",
  "PB4": "134",
  "PB5": "135",
  "PB6": "136",
  "PB7": "137",
  "BOOT0": "138",
  "PB8": "139",
  "PB9": "140",
  "PE0": "141",
  "PE1": "142",
  "VSS_143": "143",
  "VDD_144": "144",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PF6: "bidirectional", PF7: "bidirectional", PF8: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_38: "passive", VDD_39: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", VSS_51: "passive", VDD_52: "power_in", PF13: "bidirectional", PF14: "bidirectional", PF15: "bidirectional", PG0: "bidirectional", PG1: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSS_61: "passive", VDD_62: "power_in", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_71: "passive", VDD_72: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", VSS_83: "passive", VDD_84: "power_in", PD14: "bidirectional", PD15: "bidirectional", PG2: "bidirectional", PG3: "bidirectional", PG4: "bidirectional", PG5: "bidirectional", PG6: "bidirectional", PG7: "bidirectional", PG8: "bidirectional", VSS_94: "passive", VDD_95: "power_in", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PH2: "bidirectional", VSS_107: "passive", VDD_108: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", VSS_120: "passive", VDD_121: "power_in", PD6: "bidirectional", PD7: "bidirectional", PG9: "bidirectional", PG10: "bidirectional", PG11: "bidirectional", PG12: "bidirectional", PG13: "bidirectional", PG14: "bidirectional", VSS_130: "passive", VDD_131: "power_in", PG15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_143: "passive", VDD_144: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F303ZETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 1.65-1.95V, 36 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F318C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f318c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F318C8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F318C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 1.65-1.95V, 36 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F318C8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die439*.
 * @see https://www.st.com/resource/en/datasheet/stm32f318c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die439.
 */
export class STM32F318C8Yx extends Component.withPins({
  "PA14": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB4": "A4",
  "BOOT0": "A5",
  "VDDA": "A6",
  "NC": "A7",
  "VSS_B1": "B1",
  "VDD_B2": "B2",
  "PA13": "B3",
  "PB5": "B4",
  "PB8": "B5",
  "VBAT": "B6",
  "VDD_B7": "B7",
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
  "VSS_F7": "F7",
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
    super({ ...opts, pinTypes: { PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", BOOT0: "input", VDDA: "power_in", NC: "no_connect", VSS_B1: "power_in", VDD_B2: "power_in", PA13: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", VBAT: "power_in", VDD_B7: "power_in", PA11: "bidirectional", PA10: "bidirectional", PA12: "bidirectional", PB6: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_D3: "passive", PB7: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PB15: "bidirectional", PB12: "bidirectional", PB10: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", VSSA: "power_in", NRST: "input", PB14: "bidirectional", VDD_F2: "power_in", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA0: "bidirectional", VSS_F7: "passive", PB13: "bidirectional", PB11: "bidirectional", NPOR: "input", PB1: "bidirectional", PB0: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F318C8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 1.65-1.95V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F318K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f318k8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F318K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "NPOR": "30",
  "BOOT0": "31",
  "VSS_32": "32",
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", NPOR: "input", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F318K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 1.65-1.95V, 36 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F328C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f328c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F328C8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F328C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 16-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334C_4-6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334c4.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F334C_4_6_8_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334C_4-6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 16KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334C4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334c4.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F334C4Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334C4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334c6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F334C6Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F334C8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 38 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334C8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die438*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die438.
 */
export class STM32F334C8Yx extends Component.withPins({
  "PA14": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB6": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "VSS_B1": "B1",
  "VDD_B2": "B2",
  "PB4": "B3",
  "PB5": "B4",
  "PB7": "B5",
  "PB8": "B6",
  "VSS_B7": "B7",
  "PA11": "C1",
  "PA13": "C2",
  "PA12": "C3",
  "PA10": "C4",
  "PC3": "C5",
  "PF1": "C6",
  "PF0": "C7",
  "PA8": "D1",
  "PA9": "D2",
  "PB15": "D3",
  "PC7": "D4",
  "PA2": "D5",
  "PA0": "D6",
  "NRST": "D7",
  "PB14": "E1",
  "PB13": "E2",
  "PC5": "E3",
  "PA6": "E4",
  "PA3": "E5",
  "VDDA": "E6",
  "VSSA": "E7",
  "PB12": "F1",
  "PB2": "F2",
  "PB0": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "VSS_F6": "F6",
  "VREF+": "F7",
  "PB11": "G1",
  "PB10": "G2",
  "PB1": "G3",
  "PC4": "G4",
  "PA5": "G5",
  "VDD_G6": "G6",
  "PA1": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", VSS_B1: "power_in", VDD_B2: "power_in", PB4: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_B7: "passive", PA11: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PA10: "bidirectional", PC3: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB15: "bidirectional", PC7: "bidirectional", PA2: "bidirectional", PA0: "bidirectional", NRST: "input", PB14: "bidirectional", PB13: "bidirectional", PC5: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", VDDA: "power_in", VSSA: "power_in", PB12: "bidirectional", PB2: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", VSS_F6: "passive", "VREF+": "input", PB11: "bidirectional", PB10: "bidirectional", PB1: "bidirectional", PC4: "bidirectional", PA5: "bidirectional", VDD_G6: "power_in", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334C8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 16-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334K_4-6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334k4.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F334K_4_6_8_Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F334K_4-6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 16KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334K4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334k4.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F334K4Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F334K4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 16-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334K_4-6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334k4.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F334K_4_6_8_Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334K_4-6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 16KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334k4.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F334K4Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F334K6Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F334K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334k6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F334K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334k8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32F334K8Tx extends Component.withPins({
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
  override schema = "MCU_ST_STM32F3:STM32F334K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 24 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334k8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32F334K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PF0": "2",
  "PF1": "3",
  "NRST": "4",
  "VDDA": "5",
  "VSSA": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
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
  "VSS_33": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_1: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VDDA: "power_in", VSSA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32-64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334R_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334r6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F334R_6_8_Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334R_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 32KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334R6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334r6.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F334R6Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334R6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F334R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f334r8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F334.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F334R8Tx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F334R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 48KB RAM, 72 MHz, 1.65-1.95V, 36 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F358CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f358cc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F358CCTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F358CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 48KB RAM, 72 MHz, 1.65-1.95V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F358RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f358rc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F358RCTx extends Component.withPins({
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
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F358RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 48KB RAM, 72 MHz, 1.65-1.95V, 86 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F358VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f358vc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F358VCTx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "power_in", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F358VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64-256KB flash, 16-32KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373C_8-B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F373C_8_B_C_Tx extends Component.withPins({
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
  "VDD_17": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PE8": "21",
  "PE9": "22",
  "VSSSD": "23",
  "VDDSD": "24",
  "VREFSD+": "25",
  "PB14": "26",
  "PB15": "27",
  "PD8": "28",
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
  "VSS": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDD_17: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373C_8-B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373c8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F373C8Tx extends Component.withPins({
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
  "VDD_17": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PE8": "21",
  "PE9": "22",
  "VSSSD": "23",
  "VDDSD": "24",
  "VREFSD+": "25",
  "PB14": "26",
  "PB15": "27",
  "PD8": "28",
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
  "VSS": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDD_17: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 24KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373cb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F373CBTx extends Component.withPins({
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
  "VDD_17": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PE8": "21",
  "PE9": "22",
  "VSSSD": "23",
  "VDDSD": "24",
  "VREFSD+": "25",
  "PB14": "26",
  "PB15": "27",
  "PD8": "28",
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
  "VSS": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDD_17: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 32KB RAM, 72 MHz, 2.0-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373cc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F373CCTx extends Component.withPins({
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
  "VDD_17": "17",
  "PB0": "18",
  "PB1": "19",
  "PB2": "20",
  "PE8": "21",
  "PE9": "22",
  "VSSSD": "23",
  "VDDSD": "24",
  "VREFSD+": "25",
  "PB14": "26",
  "PB15": "27",
  "PD8": "28",
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
  "VSS": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDD_17: "power_in", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64-256KB flash, 16-32KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373R_8-B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373r8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F373R_8_B_C_Tx extends Component.withPins({
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
  "VREF+": "17",
  "PA3": "18",
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
  "PE8": "29",
  "PE9": "30",
  "VSSSD": "31",
  "VDDSD": "32",
  "VREFSD+": "33",
  "PB14": "34",
  "PB15": "35",
  "PD8": "36",
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
  "VSS": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", "VREF+": "input", PA3: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373R_8-B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373r8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F373R8Tx extends Component.withPins({
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
  "VREF+": "17",
  "PA3": "18",
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
  "PE8": "29",
  "PE9": "30",
  "VSSSD": "31",
  "VDDSD": "32",
  "VREFSD+": "33",
  "PB14": "34",
  "PB15": "35",
  "PD8": "36",
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
  "VSS": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", "VREF+": "input", PA3: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 24KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373rb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F373RBTx extends Component.withPins({
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
  "VREF+": "17",
  "PA3": "18",
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
  "PE8": "29",
  "PE9": "30",
  "VSSSD": "31",
  "VDDSD": "32",
  "VREFSD+": "33",
  "PB14": "34",
  "PB15": "35",
  "PD8": "36",
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
  "VSS": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", "VREF+": "input", PA3: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 32KB RAM, 72 MHz, 2.0-3.6V, 52 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373rc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F373RCTx extends Component.withPins({
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
  "VREF+": "17",
  "PA3": "18",
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
  "PE8": "29",
  "PE9": "30",
  "VSSSD": "31",
  "VDDSD": "32",
  "VREFSD+": "33",
  "PB14": "34",
  "PB15": "35",
  "PD8": "36",
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
  "VSS": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", "VREF+": "input", PA3: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64-256KB flash, 16-32KB RAM, 72 MHz, 2.0-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373V_8-B-C_Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373v8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F373V_8_B_C_Hx extends Component.withPins({
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
  "PF4": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSSSD": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
  "VDDSD12": "G12",
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
  "VREFSD+": "K12",
  "VREF+": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "VREFSD-": "L11",
  "VDDSD3": "L12",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PF4: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSSSD: "power_in", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDDSD12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREFSD+": "input", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VDDSD3: "power_in", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373V_8-B-C_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373V8Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373v8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F373V8Hx extends Component.withPins({
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
  "PF4": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSSSD": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
  "VDDSD12": "G12",
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
  "VREFSD+": "K12",
  "VREF+": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "VREFSD-": "L11",
  "VDDSD3": "L12",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PF4: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSSSD: "power_in", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDDSD12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREFSD+": "input", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VDDSD3: "power_in", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373V8Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64-256KB flash, 16-32KB RAM, 72 MHz, 2.0-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373V_8-B-C_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373v8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F373V_8_B_C_Tx extends Component.withPins({
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
  "VREF+": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VREFSD-": "48",
  "VSSSD": "49",
  "VDDSD12": "50",
  "VDDSD3": "51",
  "VREFSD+": "52",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", "VREF+": "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VSSSD: "power_in", VDDSD12: "power_in", VDDSD3: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "power_in", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373V_8-B-C_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 16KB RAM, 72 MHz, 2.0-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373V8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373v8.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F373V8Tx extends Component.withPins({
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
  "VREF+": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VREFSD-": "48",
  "VSSSD": "49",
  "VDDSD12": "50",
  "VDDSD3": "51",
  "VREFSD+": "52",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", "VREF+": "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VSSSD: "power_in", VDDSD12: "power_in", VDDSD3: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "power_in", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373V8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 24KB RAM, 72 MHz, 2.0-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373VBHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373vb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F373VBHx extends Component.withPins({
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
  "PF4": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSSSD": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
  "VDDSD12": "G12",
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
  "VREFSD+": "K12",
  "VREF+": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "VREFSD-": "L11",
  "VDDSD3": "L12",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PF4: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSSSD: "power_in", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDDSD12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREFSD+": "input", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VDDSD3: "power_in", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373VBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 24KB RAM, 72 MHz, 2.0-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373vb.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F373VBTx extends Component.withPins({
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
  "VREF+": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VREFSD-": "48",
  "VSSSD": "49",
  "VDDSD12": "50",
  "VDDSD3": "51",
  "VREFSD+": "52",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", "VREF+": "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VSSSD: "power_in", VDDSD12: "power_in", VDDSD3: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "power_in", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 32KB RAM, 72 MHz, 2.0-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373VCHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373vc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F373VCHx extends Component.withPins({
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
  "PF4": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSSSD": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
  "VDDSD12": "G12",
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
  "VREFSD+": "K12",
  "VREF+": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "PB2": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "VREFSD-": "L11",
  "VDDSD3": "L12",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PF4: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSSSD: "power_in", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDDSD12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREFSD+": "input", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VDDSD3: "power_in", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373VCHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 32KB RAM, 72 MHz, 2.0-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F373VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f373vc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F373.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F373VCTx extends Component.withPins({
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
  "VREF+": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VREFSD-": "48",
  "VSSSD": "49",
  "VDDSD12": "50",
  "VDDSD3": "51",
  "VREFSD+": "52",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", "VREF+": "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VSSSD: "power_in", VDDSD12: "power_in", VDDSD3: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "power_in", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F373VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 32KB RAM, 72 MHz, 1.65-1.95V, 36 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F378CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f378cc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32F378CCTx extends Component.withPins({
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
  "VDD_17": "17",
  "PB0": "18",
  "PB1": "19",
  "NPOR": "20",
  "PE8": "21",
  "PE9": "22",
  "VSSSD": "23",
  "VDDSD": "24",
  "VREFSD+": "25",
  "PB14": "26",
  "PB15": "27",
  "PD8": "28",
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
  "VSS": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", VDD_17: "power_in", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F378CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 32KB RAM, 72 MHz, 1.65-1.95V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F378RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f378rc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32F378RCTx extends Component.withPins({
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
  "VREF+": "17",
  "PA3": "18",
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
  "PE8": "29",
  "PE9": "30",
  "VSSSD": "31",
  "VDDSD": "32",
  "VREFSD+": "33",
  "PB14": "34",
  "PB15": "35",
  "PD8": "36",
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
  "VSS": "63",
  "VDD_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", "VREF+": "input", PA3: "bidirectional", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PE8: "bidirectional", PE9: "bidirectional", VSSSD: "power_in", VDDSD: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS: "power_in", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F378RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 32KB RAM, 72 MHz, 1.65-1.95V, 51 GPIO, WLCSP66
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F378RCYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die432*.
 * @see https://www.st.com/resource/en/datasheet/stm32f378rc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_CSP:ST_WLCSP-66_Die432.
 */
export class STM32F378RCYx extends Component.withPins({
  "PA14": "A1",
  "PA15": "A2",
  "PC11": "A3",
  "PD2": "A4",
  "PB5": "A5",
  "PB7": "A6",
  "PB9": "A7",
  "VBAT": "A8",
  "PF7": "B1",
  "PF6": "B2",
  "PC10": "B3",
  "PC12": "B4",
  "PB4": "B5",
  "PB6": "B6",
  "PB8": "B7",
  "PC13": "B8",
  "PA11": "C1",
  "PA10": "C2",
  "PA12": "C3",
  "PA13": "C4",
  "PB3": "C5",
  "VSS_C6": "C6",
  "BOOT0": "C7",
  "PC14": "C8",
  "PA8": "D1",
  "PC9": "D2",
  "PA9": "D3",
  "VDD_D6": "D6",
  "PF0": "D7",
  "PC15": "D8",
  "PC7": "E1",
  "PC6": "E2",
  "PC8": "E3",
  "PC0": "E6",
  "NRST": "E7",
  "PF1": "E8",
  "PB15": "F1",
  "PB14": "F2",
  "PD8": "F3",
  "PC3": "F6",
  "PC2": "F7",
  "PC1": "F8",
  "VREFSD+": "G1",
  "NPOR": "G2",
  "PA7": "G3",
  "VSS_G4": "G4",
  "VSS_G5": "G5",
  "VREF+": "G6",
  "VDDA": "G7",
  "VSSA": "G8",
  "VDDSD": "H1",
  "PE8": "H2",
  "PB0": "H3",
  "PC4": "H4",
  "PA5": "H5",
  "PA3": "H6",
  "PA1": "H7",
  "PA0": "H8",
  "VSSSD": "J1",
  "PE9": "J2",
  "PB1": "J3",
  "PC5": "J4",
  "PA6": "J5",
  "PA4": "J6",
  "VDD_J7": "J7",
  "PA2": "J8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA14: "bidirectional", PA15: "bidirectional", PC11: "bidirectional", PD2: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", VBAT: "power_in", PF7: "bidirectional", PF6: "bidirectional", PC10: "bidirectional", PC12: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC13: "bidirectional", PA11: "bidirectional", PA10: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PB3: "bidirectional", VSS_C6: "power_in", BOOT0: "input", PC14: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PA9: "bidirectional", VDD_D6: "power_in", PF0: "bidirectional", PC15: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PC8: "bidirectional", PC0: "bidirectional", NRST: "input", PF1: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PD8: "bidirectional", PC3: "bidirectional", PC2: "bidirectional", PC1: "bidirectional", "VREFSD+": "input", NPOR: "input", PA7: "bidirectional", VSS_G4: "passive", VSS_G5: "passive", "VREF+": "input", VDDA: "power_in", VSSA: "power_in", VDDSD: "power_in", PE8: "bidirectional", PB0: "bidirectional", PC4: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", VSSSD: "power_in", PE9: "bidirectional", PB1: "bidirectional", PC5: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", VDD_J7: "power_in", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F378RCYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 32KB RAM, 72 MHz, 1.65-1.95V, 83 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F378VCHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f378vc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32F378VCHx extends Component.withPins({
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
  "PF4": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PF0": "F1",
  "PF9": "F2",
  "VSS_F11": "F11",
  "VSSSD": "F12",
  "PF1": "G1",
  "PF10": "G2",
  "VDD_G11": "G11",
  "VDDSD12": "G12",
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
  "VREFSD+": "K12",
  "VREF+": "L1",
  "PA0": "L2",
  "PA3": "L3",
  "PA6": "L4",
  "PC5": "L5",
  "NPOR": "L6",
  "PE8": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PB10": "L10",
  "VREFSD-": "L11",
  "VDDSD3": "L12",
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
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", PF6: "bidirectional", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PF4: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PF0: "bidirectional", PF9: "bidirectional", VSS_F11: "passive", VSSSD: "power_in", PF1: "bidirectional", PF10: "bidirectional", VDD_G11: "power_in", VDDSD12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", VSSA: "power_in", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREFSD+": "input", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", NPOR: "input", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VDDSD3: "power_in", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F378VCHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 32KB RAM, 72 MHz, 1.65-1.95V, 83 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F378VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f378vc.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F378VCTx extends Component.withPins({
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
  "VREF+": "22",
  "PA0": "23",
  "PA1": "24",
  "PA2": "25",
  "PA3": "26",
  "PF4": "27",
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
  "VREFSD-": "48",
  "VSSSD": "49",
  "VDDSD12": "50",
  "VDDSD3": "51",
  "VREFSD+": "52",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", "VREF+": "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PF4: "bidirectional", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", "VREFSD-": "input", VSSSD: "power_in", VDDSD12: "power_in", VDDSD3: "power_in", "VREFSD+": "input", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "power_in", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F378VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 80KB RAM, 72 MHz, 1.65-1.95V, 85 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F3:STM32F398VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f398ve.pdf
 * Keywords: Arm Cortex-M4 STM32F3 STM32F3x8.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32F398VETx extends Component.withPins({
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
  "VREF+": "21",
  "VDDA": "22",
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
  "VDD_75": "75",
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
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PF2: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", NPOR: "input", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PF6: "bidirectional", VSS_74: "passive", VDD_75: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32F3:STM32F398VETx";
  override referencePrefix = "U";
}
